import { PriestTalents, PriestMajorGlyph, PriestMinorGlyph } from '../proto/priest.js';

import { GlyphsConfig } from './glyphs_picker.js';
import { TalentsConfig, newTalentsConfig } from './talents_picker.js';

export const priestTalentsConfig: TalentsConfig<PriestTalents> = newTalentsConfig([
    {
        name: "Discipline",
        backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/wrath/201.jpg",
        talents: [
            {
                fieldName: "unbreakableWill",
                location: {
                    rowIdx: 0,
                    colIdx: 1
                },
                spellIds: [
                    14522,
                    14788,
                    14789,
                    14790,
                    14791
                ],
                maxPoints: 5
            },
            {
                fieldName: "twinDisciplines",
                location: {
                    rowIdx: 0,
                    colIdx: 2
                },
                spellIds: [
                    47586,
                    47587,
                    47588,
                    52802,
                    52803
                ],
                maxPoints: 5
            },
            {
                fieldName: "silentResolve",
                location: {
                    rowIdx: 1,
                    colIdx: 0
                },
                spellIds: [
                    14523,
                    14784,
                    14785
                ],
                maxPoints: 3
            },
            {
                fieldName: "improvedInnerFire",
                location: {
                    rowIdx: 1,
                    colIdx: 1
                },
                spellIds: [
                    14747,
                    14770,
                    14771
                ],
                maxPoints: 3
            },
            {
                fieldName: "improvedPowerWordFortitude",
                location: {
                    rowIdx: 1,
                    colIdx: 2
                },
                spellIds: [
                    14749,
                    14767
                ],
                maxPoints: 2
            },
            {
                fieldName: "martyrdom",
                location: {
                    rowIdx: 1,
                    colIdx: 3
                },
                spellIds: [
                    14531,
                    14774
                ],
                maxPoints: 2
            },
            {
                fieldName: "meditation",
                location: {
                    rowIdx: 2,
                    colIdx: 0
                },
                spellIds: [
                    14521,
                    14776,
                    14777
                ],
                maxPoints: 3
            },
            {
                fieldName: "innerFocus",
                location: {
                    rowIdx: 2,
                    colIdx: 1
                },
                spellIds: [
                    14751
                ],
                maxPoints: 1
            },
            {
                fieldName: "improvedPowerWordShield",
                location: {
                    rowIdx: 2,
                    colIdx: 2
                },
                spellIds: [
                    14748,
                    14768,
                    14769
                ],
                maxPoints: 3
            },
            {
                fieldName: "absolution",
                location: {
                    rowIdx: 3,
                    colIdx: 0
                },
                spellIds: [
                    33167,
                    33171,
                    33172
                ],
                maxPoints: 3
            },
            {
                fieldName: "mentalAgility",
                location: {
                    rowIdx: 3,
                    colIdx: 1
                },
                spellIds: [
                    14520,
                    14780,
                    14781
                ],
                maxPoints: 3
            },
            {
                fieldName: "improvedManaBurn",
                location: {
                    rowIdx: 3,
                    colIdx: 3
                },
                spellIds: [
                    14750,
                    14772
                ],
                maxPoints: 2
            },
            {
                fieldName: "reflectiveShield",
                location: {
                    rowIdx: 4,
                    colIdx: 0
                },
                spellIds: [
                    33201,
                    33202
                ],
                maxPoints: 2
            },
            {
                fieldName: "mentalStrength",
                location: {
                    rowIdx: 4,
                    colIdx: 1
                },
                spellIds: [
                    18551,
                    18552,
                    18553,
                    18554,
                    18555
                ],
                maxPoints: 5
            },
            {
                fieldName: "soulWarding",
                location: {
                    rowIdx: 4,
                    colIdx: 2
                },
                spellIds: [
                    63574
                ],
                maxPoints: 1,
                "prereqLocation": {
                    rowIdx: 2,
                    colIdx: 2
                }
            },
            {
                fieldName: "focusedPower",
                location: {
                    rowIdx: 5,
                    colIdx: 0
                },
                spellIds: [
                    33186,
                    33190
                ],
                maxPoints: 2
            },
            {
                fieldName: "enlightenment",
                location: {
                    rowIdx: 5,
                    colIdx: 2
                },
                spellIds: [
                    34908,
                    34909,
                    34910
                ],
                maxPoints: 3
            },
            {
                fieldName: "focusedWill",
                location: {
                    rowIdx: 6,
                    colIdx: 0
                },
                spellIds: [
                    45234,
                    45243,
                    45244
                ],
                maxPoints: 3
            },
            {
                fieldName: "powerInfusion",
                location: {
                    rowIdx: 6,
                    colIdx: 1
                },
                spellIds: [
                    10060
                ],
                maxPoints: 1,
                "prereqLocation": {
                    rowIdx: 4,
                    colIdx: 1
                }
            },
            {
                fieldName: "improvedFlashHeal",
                location: {
                    rowIdx: 6,
                    colIdx: 2
                },
                spellIds: [
                    63504,
                    63505,
                    63506
                ],
                maxPoints: 3
            },
            {
                fieldName: "renewedHope",
                location: {
                    rowIdx: 7,
                    colIdx: 0
                },
                spellIds: [
                    57470,
                    57472
                ],
                maxPoints: 2
            },
            {
                fieldName: "rapture",
                location: {
                    rowIdx: 7,
                    colIdx: 1
                },
                spellIds: [
                    47535,
                    47536,
                    47537
                ],
                maxPoints: 3
            },
            {
                fieldName: "aspiration",
                location: {
                    rowIdx: 7,
                    colIdx: 2
                },
                spellIds: [
                    47507,
                    47508
                ],
                maxPoints: 2
            },
            {
                fieldName: "divineAegis",
                location: {
                    rowIdx: 8,
                    colIdx: 0
                },
                spellIds: [
                    47509,
                    47511,
                    47515
                ],
                maxPoints: 3
            },
            {
                fieldName: "painSuppression",
                location: {
                    rowIdx: 8,
                    colIdx: 1
                },
                spellIds: [
                    33206
                ],
                maxPoints: 1
            },
            {
                fieldName: "grace",
                location: {
                    rowIdx: 8,
                    colIdx: 2
                },
                spellIds: [
                    47516,
                    47517
                ],
                maxPoints: 2
            },
            {
                fieldName: "borrowedTime",
                location: {
                    rowIdx: 9,
                    colIdx: 1
                },
                spellIds: [
                    52795,
                    52797,
                    52798,
                    52799,
                    52800
                ],
                maxPoints: 5
            },
            {
                fieldName: "penance",
                location: {
                    rowIdx: 10,
                    colIdx: 1
                },
                spellIds: [
                    47540
                ],
                maxPoints: 1
            }
        ]
    },
    {
        name: "Holy",
        backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/wrath/202.jpg",
        talents: [
            {
                fieldName: "healingFocus",
                location: {
                    rowIdx: 0,
                    colIdx: 0
                },
                spellIds: [
                    14913,
                    15012
                ],
                maxPoints: 2
            },
            {
                fieldName: "improvedRenew",
                location: {
                    rowIdx: 0,
                    colIdx: 1
                },
                spellIds: [
                    14908,
                    15020,
                    17191
                ],
                maxPoints: 3
            },
            {
                fieldName: "holySpecialization",
                location: {
                    rowIdx: 0,
                    colIdx: 2
                },
                spellIds: [
                    14889,
                    15008,
                    15009,
                    15010,
                    15011
                ],
                maxPoints: 5
            },
            {
                fieldName: "spellWarding",
                location: {
                    rowIdx: 1,
                    colIdx: 1
                },
                spellIds: [
                    27900,
                    27901,
                    27902,
                    27903,
                    27904
                ],
                maxPoints: 5
            },
            {
                fieldName: "divineFury",
                location: {
                    rowIdx: 1,
                    colIdx: 2
                },
                spellIds: [
                    18530,
                    18531,
                    18533,
                    18534,
                    18535
                ],
                maxPoints: 5
            },
            {
                fieldName: "desperatePrayer",
                location: {
                    rowIdx: 2,
                    colIdx: 0
                },
                spellIds: [
                    19236
                ],
                maxPoints: 1
            },
            {
                fieldName: "blessedRecovery",
                location: {
                    rowIdx: 2,
                    colIdx: 1
                },
                spellIds: [
                    27811,
                    27815,
                    27816
                ],
                maxPoints: 3
            },
            {
                fieldName: "inspiration",
                location: {
                    rowIdx: 2,
                    colIdx: 3
                },
                spellIds: [
                    14892,
                    15362,
                    15363
                ],
                maxPoints: 3
            },
            {
                fieldName: "holyReach",
                location: {
                    rowIdx: 3,
                    colIdx: 0
                },
                spellIds: [
                    27789,
                    27790
                ],
                maxPoints: 2
            },
            {
                fieldName: "improvedHealing",
                location: {
                    rowIdx: 3,
                    colIdx: 1
                },
                spellIds: [
                    14912,
                    15013,
                    15014
                ],
                maxPoints: 3
            },
            {
                fieldName: "searingLight",
                location: {
                    rowIdx: 3,
                    colIdx: 2
                },
                spellIds: [
                    14909,
                    15017
                ],
                maxPoints: 2,
                "prereqLocation": {
                    rowIdx: 1,
                    colIdx: 2
                }
            },
            {
                fieldName: "healingPrayers",
                location: {
                    rowIdx: 4,
                    colIdx: 0
                },
                spellIds: [
                    14911,
                    15018
                ],
                maxPoints: 2
            },
            {
                fieldName: "spiritOfRedemption",
                location: {
                    rowIdx: 4,
                    colIdx: 1
                },
                spellIds: [
                    20711
                ],
                maxPoints: 1
            },
            {
                fieldName: "spiritualGuidance",
                location: {
                    rowIdx: 4,
                    colIdx: 2
                },
                spellIds: [
                    14901,
                    15028,
                    15029,
                    15030,
                    15031
                ],
                maxPoints: 5
            },
            {
                fieldName: "surgeOfLight",
                location: {
                    rowIdx: 5,
                    colIdx: 0
                },
                spellIds: [
                    33150,
                    33154
                ],
                maxPoints: 2
            },
            {
                fieldName: "spiritualHealing",
                location: {
                    rowIdx: 5,
                    colIdx: 2
                },
                spellIds: [
                    14898,
                    15349,
                    15354,
                    15355,
                    15356
                ],
                maxPoints: 5
            },
            {
                fieldName: "holyConcentration",
                location: {
                    rowIdx: 6,
                    colIdx: 0
                },
                spellIds: [
                    34753,
                    34859,
                    34860
                ],
                maxPoints: 3
            },
            {
                fieldName: "lightwell",
                location: {
                    rowIdx: 6,
                    colIdx: 1
                },
                spellIds: [
                    724
                ],
                maxPoints: 1,
                "prereqLocation": {
                    rowIdx: 4,
                    colIdx: 1
                }
            },
            {
                fieldName: "blessedResilience",
                location: {
                    rowIdx: 6,
                    colIdx: 2
                },
                spellIds: [
                    33142,
                    33145,
                    33146
                ],
                maxPoints: 3
            },
            {
                fieldName: "bodyAndSoul",
                location: {
                    rowIdx: 7,
                    colIdx: 0
                },
                spellIds: [
                    64127,
                    64129
                ],
                maxPoints: 2
            },
            {
                fieldName: "empoweredHealing",
                location: {
                    rowIdx: 7,
                    colIdx: 1
                },
                spellIds: [
                    33158,
                    33159,
                    33160,
                    33161,
                    33162
                ],
                maxPoints: 5
            },
            {
                fieldName: "serendipity",
                location: {
                    rowIdx: 7,
                    colIdx: 2
                },
                spellIds: [
                    63730,
                    63733,
                    63737
                ],
                maxPoints: 3
            },
            {
                fieldName: "empoweredRenew",
                location: {
                    rowIdx: 8,
                    colIdx: 0
                },
                spellIds: [
                    63534,
                    63542,
                    63543
                ],
                maxPoints: 3
            },
            {
                fieldName: "circleOfHealing",
                location: {
                    rowIdx: 8,
                    colIdx: 1
                },
                spellIds: [
                    34861
                ],
                maxPoints: 1
            },
            {
                fieldName: "testOfFaith",
                location: {
                    rowIdx: 8,
                    colIdx: 2
                },
                spellIds: [
                    47558,
                    47559,
                    47560
                ],
                maxPoints: 3
            },
            {
                fieldName: "divineProvidence",
                location: {
                    rowIdx: 9,
                    colIdx: 1
                },
                spellIds: [
                    47562,
                    47564,
                    47565,
                    47566,
                    47567
                ],
                maxPoints: 5
            },
            {
                fieldName: "guardianSpirit",
                location: {
                    rowIdx: 10,
                    colIdx: 1
                },
                spellIds: [
                    47788
                ],
                maxPoints: 1
            }
        ]
    },
    {
        name: "Shadow",
        backgroundUrl: "https://wow.zamimg.com/images/wow/talents/backgrounds/wrath/203.jpg",
        talents: [
            {
                fieldName: "spiritTap",
                location: {
                    rowIdx: 0,
                    colIdx: 0
                },
                spellIds: [
                    15270,
                    15335,
                    15336
                ],
                maxPoints: 3
            },
            {
                fieldName: "improvedSpiritTap",
                location: {
                    rowIdx: 0,
                    colIdx: 1
                },
                spellIds: [
                    15337,
                    15338
                ],
                maxPoints: 2,
                prereqLocation: {
                    rowIdx: 0,
                    colIdx: 0
                }
            },
            {
                fieldName: "darkness",
                location: {
                    rowIdx: 0,
                    colIdx: 2
                },
                spellIds: [
                    15259,
                    15307,
                    15308,
                    15309,
                    15310
                ],
                maxPoints: 5
            },
            {
                fieldName: "shadowAffinity",
                location: {
                    rowIdx: 1,
                    colIdx: 0
                },
                spellIds: [
                    15318,
                    15272,
                    15320
                ],
                maxPoints: 3
            },
            {
                fieldName: "improvedShadowWordPain",
                location: {
                    rowIdx: 1,
                    colIdx: 1
                },
                spellIds: [
                    15275,
                    15317
                ],
                maxPoints: 2
            },
            {
                fieldName: "shadowFocus",
                location: {
                    rowIdx: 1,
                    colIdx: 2
                },
                spellIds: [
                    15260,
                    15327,
                    15328
                ],
                maxPoints: 3
            },
            {
                fieldName: "improvedPsychicScream",
                location: {
                    rowIdx: 2,
                    colIdx: 0
                },
                spellIds: [
                    15392,
                    15448
                ],
                maxPoints: 2
            },
            {
                fieldName: "improvedMindBlast",
                location: {
                    rowIdx: 2,
                    colIdx: 1
                },
                spellIds: [
                    15273,
                    15312,
                    15313,
                    15314,
                    15316
                ],
                maxPoints: 5
            },
            {
                fieldName: "mindFlay",
                location: {
                    rowIdx: 2,
                    colIdx: 2
                },
                spellIds: [
                    15407
                ],
                maxPoints: 1
            },
            {
                fieldName: "veiledShadows",
                location: {
                    rowIdx: 3,
                    colIdx: 1
                },
                spellIds: [
                    15274,
                    15311
                ],
                maxPoints: 2
            },
            {
                fieldName: "shadowReach",
                location: {
                    rowIdx: 3,
                    colIdx: 2
                },
                spellIds: [
                    17322,
                    17323
                ],
                maxPoints: 2
            },
            {
                fieldName: "shadowWeaving",
                location: {
                    rowIdx: 3,
                    colIdx: 3
                },
                spellIds: [
                    15257,
                    15331,
                    15332
                ],
                maxPoints: 3
            },
            {
                fieldName: "silence",
                location: {
                    rowIdx: 4,
                    colIdx: 0
                },
                spellIds: [
                    15487
                ],
                maxPoints: 1,
                "prereqLocation": {
                    rowIdx: 2,
                    colIdx: 0
                }
            },
            {
                fieldName: "vampiricEmbrace",
                location: {
                    rowIdx: 4,
                    colIdx: 1
                },
                spellIds: [
                    15286
                ],
                maxPoints: 1
            },
            {
                fieldName: "improvedVampiricEmbrace",
                location: {
                    rowIdx: 4,
                    colIdx: 2
                },
                spellIds: [
                    27839,
                    27840
                ],
                maxPoints: 2,
                "prereqLocation": {
                    rowIdx: 4,
                    colIdx: 1
                }
            },
            {
                fieldName: "focusedMind",
                location: {
                    rowIdx: 4,
                    colIdx: 3
                },
                spellIds: [
                    33213,
                    33214,
                    33215
                ],
                maxPoints: 3
            },
            {
                fieldName: "mindMelt",
                location: {
                    rowIdx: 5,
                    colIdx: 0
                },
                spellIds: [
                    14910,
                    33371
                ],
                maxPoints: 2
            },
            {
                fieldName: "improvedDevouringPlague",
                location: {
                    rowIdx: 5,
                    colIdx: 2
                },
                spellIds: [
                    63625,
                    63626,
                    63627
                ],
                maxPoints: 3
            },
            {
                fieldName: "shadowform",
                location: {
                    rowIdx: 6,
                    colIdx: 1
                },
                spellIds: [
                    15473
                ],
                maxPoints: 1,
                "prereqLocation": {
                    rowIdx: 4,
                    colIdx: 1
                }
            },
            {
                fieldName: "shadowPower",
                location: {
                    rowIdx: 6,
                    colIdx: 2
                },
                spellIds: [
                    33221,
                    33222,
                    33223,
                    33224,
                    33225
                ],
                maxPoints: 5
            },
            {
                fieldName: "improvedShadowform",
                location: {
                    rowIdx: 7,
                    colIdx: 0
                },
                spellIds: [
                    47569,
                    47570
                ],
                maxPoints: 2,
                "prereqLocation": {
                    rowIdx: 6,
                    colIdx: 1
                }
            },
            {
                fieldName: "misery",
                location: {
                    rowIdx: 7,
                    colIdx: 2
                },
                spellIds: [
                    33191,
                    33192,
                    33193
                ],
                maxPoints: 3
            },
            {
                fieldName: "psychicHorror",
                location: {
                    rowIdx: 8,
                    colIdx: 0
                },
                spellIds: [
                    64044
                ],
                maxPoints: 1
            },
            {
                fieldName: "vampiricTouch",
                location: {
                    rowIdx: 8,
                    colIdx: 1
                },
                spellIds: [
                    34914
                ],
                maxPoints: 1,
                "prereqLocation": {
                    rowIdx: 6,
                    colIdx: 1
                }
            },
            {
                fieldName: "painAndSuffering",
                location: {
                    rowIdx: 8,
                    colIdx: 2
                },
                spellIds: [
                    47580,
                    47581,
                    47582
                ],
                maxPoints: 3
            },
            {
                fieldName: "twistedFaith",
                location: {
                    rowIdx: 9,
                    colIdx: 2
                },
                spellIds: [
                    47573,
                    47577,
                    47578,
                    51166,
                    51167
                ],
                maxPoints: 5
            },
            {
                fieldName: "dispersion",
                location: {
                    rowIdx: 10,
                    colIdx: 1
                },
                spellIds: [
                    47585
                ],
                maxPoints: 1,
                "prereqLocation": {
                    rowIdx: 8,
                    colIdx: 1
                }
            }
        ]
    }
]);

export const priestGlyphsConfig: GlyphsConfig = {
    majorGlyphs: {
        [PriestMajorGlyph.GlyphOfCircleOfHealing]: {
            name: 'Glyph of Circle of Healing',
            description: 'Your Circle of Healing spell heals 1 additional target.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_circleofrenewal.jpg',
        },
        [PriestMajorGlyph.GlyphOfDispelMagic]: {
            name: 'Glyph of Dispel Magic',
            description: 'Your Dispel Magic spell also heals your target for 3% of maximum health.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_dispelmagic.jpg',
        },
        [PriestMajorGlyph.GlyphOfDispersion]: {
            name: 'Glyph of Dispersion',
            description: 'Reduces the cooldown on Dispersion by 45 sec.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_dispersion.jpg',
        },
        [PriestMajorGlyph.GlyphOfFade]: {
            name: 'Glyph of Fade',
            description: 'Reduces the cooldown of your Fade spell by 9 sec.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_magic_lesserinvisibilty.jpg',
        },
        [PriestMajorGlyph.GlyphOfFearWard]: {
            name: 'Glyph of Fear Ward',
            description: 'Reduces cooldown and duration of Fear Ward by 60 sec.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_excorcism.jpg',
        },
        [PriestMajorGlyph.GlyphOfFlashHeal]: {
            name: 'Glyph of Flash Heal',
            description: 'Reduces the mana cost of your Flash Heal by 10%.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_flashheal.jpg',
        },
        [PriestMajorGlyph.GlyphOfGuardianSpirit]: {
            name: 'Glyph of Guardian Spirit',
            description: 'If your Guardian Spirit lasts its entire duration without being triggered, the cooldown is reset to 1 min.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_guardianspirit.jpg',
        },
        [PriestMajorGlyph.GlyphOfHolyNova]: {
            name: 'Glyph of Holy Nova',
            description: 'Increases the damage and healing of your Holy Nova spell by an additional 20%.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_holynova.jpg',
        },
        [PriestMajorGlyph.GlyphOfHymnOfHope]: {
            name: 'Glyph of Hymn of Hope',
            description: 'Your Hymn of Hope lasts an additional 2 sec.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_symbolofhope.jpg',
        },
        [PriestMajorGlyph.GlyphOfInnerFire]: {
            name: 'Glyph of Inner Fire',
            description: 'Increases the armor from your Inner Fire spell by 50%.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_innerfire.jpg',
        },
        [PriestMajorGlyph.GlyphOfLightwell]: {
            name: 'Glyph of Lightwell',
            description: 'Increases the amount healed by your Lightwell by 20%',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_summonlightwell.jpg',
        },
        [PriestMajorGlyph.GlyphOfMassDispel]: {
            name: 'Glyph of Mass Dispel',
            description: 'Reduces the mana cost of Mass Dispel by 35%.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_arcane_massdispel.jpg',
        },
        [PriestMajorGlyph.GlyphOfMindControl]: {
            name: 'Glyph of Mind Control',
            description: 'Reduces the chance targets will resist or break your Mind Control spell by an additional 17%.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowworddominate.jpg',
        },
        [PriestMajorGlyph.GlyphOfMindFlay]: {
            name: 'Glyph of Mind Flay',
            description: 'Increases the damage done by your Mind Flay spell by 10% when your target is afflicted with Shadow Word: Pain.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_siphonmana.jpg',
        },
        [PriestMajorGlyph.GlyphOfMindSear]: {
            name: 'Glyph of Mind Sear',
            description: 'Increases the radius of effect on Mind Sear by 5 yards.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_mindshear.jpg',
        },
        [PriestMajorGlyph.GlyphOfPainSuppression]: {
            name: 'Glyph of Pain Suppression',
            description: 'Allows Pain Suppression to be cast while stunned.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_painsupression.jpg',
        },
        [PriestMajorGlyph.GlyphOfPenance]: {
            name: 'Glyph of Penance',
            description: 'Reduces the cooldown of Penance by 2 sec.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_penance.jpg',
        },
        [PriestMajorGlyph.GlyphOfPowerWordShield]: {
            name: 'Glyph of Power Word: Shield',
            description: 'Your Power Word: Shield also heals the target for 20% of the absorption amount.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg',
        },
        [PriestMajorGlyph.GlyphOfPrayerOfHealing]: {
            name: 'Glyph of Prayer of Healing',
            description: 'Your Prayer of Healing spell also heals an additional 20% of its initial heal over 6 sec.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_prayerofhealing02.jpg',
        },
        [PriestMajorGlyph.GlyphOfPsychicScream]: {
            name: 'Glyph of Psychic Scream',
            description: 'Increases the duration of your Psychic Scream by 2 sec. and increases its cooldown by 8 sec.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_psychicscream.jpg',
        },
        [PriestMajorGlyph.GlyphOfRenew]: {
            name: 'Glyph of Renew',
            description: 'Reduces the duration of your Renew by 3 sec. but increases the amount healed each tick by 25%.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_renew.jpg',
        },
        [PriestMajorGlyph.GlyphOfScourgeImprisonment]: {
            name: 'Glyph of Scourge Imprisonment',
            description: 'Reduces the cast time of your Shackle Undead by 1.0 sec.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_slow.jpg',
        },
        [PriestMajorGlyph.GlyphOfShadow]: {
            name: 'Glyph of Shadow',
            description: 'While in Shadowform, your non-periodic spell critical strikes increase your spell power by 30% of your Spirit for 10 sec.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_mindsooth.jpg',
        },
        [PriestMajorGlyph.GlyphOfShadowWordDeath]: {
            name: 'Glyph of Shadow Word: Death',
            description: 'Targets below 35% health take an additional 10% damage from your Shadow Word: Death spell.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_demonicfortitude.jpg',
        },
        [PriestMajorGlyph.GlyphOfShadowWordPain]: {
            name: 'Glyph of Shadow Word: Pain',
            description: 'The periodic damage ticks of your Shadow Word: Pain spell restore 1% of your base mana.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowwordpain.jpg',
        },
        [PriestMajorGlyph.GlyphOfSmite]: {
            name: 'Glyph of Smite',
            description: 'Your Smite spell inflicts an additional 20% damage against targets afflicted by Holy Fire.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_holysmite.jpg',
        },
        [PriestMajorGlyph.GlyphOfSpiritOfRedemption]: {
            name: 'Glyph of Spirit of Redemption',
            description: 'Increases the duration of Spirit of Redemption by 6 sec.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/inv_enchant_essenceeternallarge.jpg',
        },
    },
    minorGlyphs: {
        [PriestMinorGlyph.GlyphOfFading]: {
            name: 'Glyph of Fading',
            description: 'Reduces the mana cost of your Fade spell by 30%.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_magic_lesserinvisibilty.jpg',
        },
        [PriestMinorGlyph.GlyphOfFortitude]: {
            name: 'Glyph of Fortitude',
            description: 'Reduces the mana cost of your Power Word: Fortitude and Prayer of Fortitude spells by 50%.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_wordfortitude.jpg',
        },
        [PriestMinorGlyph.GlyphOfLevitate]: {
            name: 'Glyph of Levitate',
            description: 'Your Levitate spell no longer requires a reagent.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_holy_layonhands.jpg',
        },
        [PriestMinorGlyph.GlyphOfShackleUndead]: {
            name: 'Glyph of Shackle Undead',
            description: 'Increases the range of your Shackle Undead spell by 5 yards.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_slow.jpg',
        },
        [PriestMinorGlyph.GlyphOfShadowProtection]: {
            name: 'Glyph of Shadow Protection',
            description: 'Increases the duration of your Shadow Protection and Prayer of Shadow Protection spells by 10 min.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_antishadow.jpg',
        },
        [PriestMinorGlyph.GlyphOfShadowfiend]: {
            name: 'Glyph of Shadowfiend',
            description: 'Receive 5% of your maximum mana if your Shadowfiend dies from damage.',
            iconUrl: 'https://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowfiend.jpg',
        },
    },
};
