package dps

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/proto"
	"github.com/wowsims/wotlk/sim/warrior"
)

func RegisterDpsWarrior() {
	core.RegisterAgentFactory(
		proto.Player_Warrior{},
		proto.Spec_SpecWarrior,
		func(character core.Character, options proto.Player) core.Agent {
			return NewDpsWarrior(character, options)
		},
		func(player *proto.Player, spec interface{}) {
			playerSpec, ok := spec.(*proto.Player_Warrior)
			if !ok {
				panic("Invalid spec value for Warrior!")
			}
			player.Spec = playerSpec
		},
	)
}

type DpsWarrior struct {
	*warrior.Warrior

	Options  proto.Warrior_Options
	Rotation proto.Warrior_Rotation

	// Prevent swapping stances until this time, to account for human reaction time.
	canSwapStanceAt time.Duration

	maintainSunder  bool
	thunderClapNext bool

	castSlamAt time.Duration
}

func NewDpsWarrior(character core.Character, options proto.Player) *DpsWarrior {
	warOptions := options.GetWarrior()

	war := &DpsWarrior{
		Warrior: warrior.NewWarrior(character, *warOptions.Talents, warrior.WarriorInputs{
			ShoutType:       warOptions.Options.Shout,
			RendCdThreshold: core.DurationFromSeconds(warOptions.Rotation.RendCdThreshold),
		}),
		Rotation: *warOptions.Rotation,
		Options:  *warOptions.Options,
	}

	war.EnableRageBar(warOptions.Options.StartingRage, core.TernaryFloat64(war.Talents.EndlessRage, 1.25, 1), func(sim *core.Simulation) {
		if war.GCD.IsReady(sim) {
			war.TryUseCooldowns(sim)
			if war.GCD.IsReady(sim) {
				war.doRotation(sim)
			}
		} else if !war.thunderClapNext && war.Talents.Bloodthirst {
			war.trySwapToBerserker(sim)
		}
	})
	war.EnableAutoAttacks(war, core.AutoAttackOptions{
		MainHand:       war.WeaponFromMainHand(war.DefaultMeleeCritMultiplier()),
		OffHand:        war.WeaponFromOffHand(war.DefaultMeleeCritMultiplier()),
		AutoSwingMelee: true,
		ReplaceMHSwing: func(sim *core.Simulation, mhSwingSpell *core.Spell) *core.Spell {
			return war.TryHSOrCleave(sim, mhSwingSpell)
		},
	})

	return war
}

func (war *DpsWarrior) GetWarrior() *warrior.Warrior {
	return war.Warrior
}

func (war *DpsWarrior) Initialize() {
	war.Warrior.Initialize()

	war.RegisterHSOrCleave(war.Rotation.UseCleave, war.Rotation.HsRageThreshold)

	if war.Options.UseRecklessness {
		war.RegisterRecklessnessCD()
	}

	// This makes the behavior of these options more intuitive in the individual sim.
	if war.Env.Raid.Size() == 1 {
		if war.Rotation.SunderArmor == proto.Warrior_Rotation_SunderArmorHelpStack {
			war.SunderArmorAura.Duration = core.NeverExpires
		} else if war.Rotation.SunderArmor == proto.Warrior_Rotation_SunderArmorMaintain {
			war.SunderArmorAura.Duration = time.Second * 30
		}
	}

	war.DelayDPSCooldownsForArmorDebuffs()
}

func (war *DpsWarrior) Reset(sim *core.Simulation) {
	if war.Talents.Bloodthirst {
		war.Warrior.Reset(sim)
		war.BerserkerStanceAura.Activate(sim)
		war.Stance = warrior.BerserkerStance
	} else if war.Talents.MortalStrike {
		war.Warrior.Reset(sim)
		war.BattleStanceAura.Activate(sim)
		war.Stance = warrior.BattleStance
	}

	war.canSwapStanceAt = 0
	war.maintainSunder = war.Rotation.SunderArmor != proto.Warrior_Rotation_SunderArmorNone
	war.castSlamAt = 0
	war.thunderClapNext = false
}
