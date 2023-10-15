import { ARCANOTYPE, ATTRIBUTE, CAST_TIME, DAMAGE_TYPE, RANGE_UNIT, RESET_TIME_UNIT, SpellData, TARGET_UNIT, TIME_UNIT } from "../types/spell_type";


export const SAMPLE_SPELL_LIST_1: SpellData[] = [
    {
        spell_name: "Hexbomb",
        spell_level: 1,
        cast_time: CAST_TIME.QUICK,
        prep_cost: 3,
        prep_uses: 4,
        free_cost: 2,
        arcanotype: ARCANOTYPE.ANIMUS,
        spell_duration: 0,
        spell_duration_unit: TIME_UNIT.INSTANT,
        isRoleplay: false,
        reset_condition: RESET_TIME_UNIT.PER_ENCOUNTER,
        spell_damage: {
            base_damage: 9,
            damage_type: DAMAGE_TYPE.RAW,
            damage_subtype: "death",
        },
        save_type: ATTRIBUTE.PRESENCE,
        spell_range: {
            standard_range: {
                min_range: {
                    range_unit: RANGE_UNIT.RANGED,
                    range_value: 1,
                },
                max_range: {
                    range_unit: RANGE_UNIT.RANGED,
                    range_value: 2,
                }
            },
        },
        spell_targets: {
            target_unit: TARGET_UNIT.INDIVIDUALS,
            target_count: 1
        },
        damage_attribute: ATTRIBUTE.MIGHT,
        attribute_multiplier: 1,
        spell_description: [
            "You fire off a beam of energy which strikes a creature where they are weakest.",
            "When the spell [Resolves]{keyword:spell:resolves} make a [Presence]{keyword:presence} [Spell Contest]{keyword:spell_contest} against the target. If the target fails, they take 9 + your [Might]{keyword:might} - [Raw]{keyword:damage:raw} Damage (death)."
        ]
    },
    {
        spell_name: "Benediction Struck Down the False Idol",
        spell_level: 1,
        cast_time: CAST_TIME.STANDARD,
        prep_cost: 4,
        prep_uses: 2,
        free_cost: 3,
        arcanotype: ARCANOTYPE.DIVINE,
        spell_duration: 0,
        spell_duration_unit: TIME_UNIT.INSTANT,
        isRoleplay: false,
        reset_condition: RESET_TIME_UNIT.PER_ENCOUNTER,
        spell_damage: {
            base_damage: 13,
            damage_type: DAMAGE_TYPE.MAGICAL,
            damage_subtype: "light",
        },
        save_type: ATTRIBUTE.AUTHORITY,
        spell_range: {
            standard_range: {
                min_range: {
                    range_unit: RANGE_UNIT.RANGED,
                    range_value: 0,
                },
                max_range: {
                    range_unit: RANGE_UNIT.RANGED,
                    range_value: 4,
                }
            },
        },
        spell_targets: {
            target_unit: TARGET_UNIT.COMMANDERS,
            target_count: 1
        },
        damage_attribute: ATTRIBUTE.MIGHT,
        attribute_multiplier: 2,
        spell_description: [
            "Choose a [Commander]{keyword:commander} within range to strike forth holy retribution against. That creature must make a [Authority]{keyword:authority} [Spell Contest]{keyword:spell_contest} against you. If they fail the Contest, they take 13 + twice your [Might]{keyword:might} - [Magical]{keyword:magical_damage} (light) damage and are inflicted with [Spiritless 2]{keyword:condition_spiritless}."
        ]
    },
    {
        spell_name: "Create Hollow: Lesser Beast",
        spell_level: 1,
        cast_time: CAST_TIME.RITUAL_SHORT,
        prep_cost: 3,
        prep_uses: 2,
        free_cost: 2,
        arcanotype: ARCANOTYPE.ANIMUS,
        spell_duration: 1,
        spell_duration_unit: TIME_UNIT.DAYS,
        isRoleplay: true,
        reset_condition: RESET_TIME_UNIT.PER_DAY,
        spell_damage: null,
        save_type: null,
        spell_range: {
            standard_range: {
                min_range: {
                    range_unit: RANGE_UNIT.RANGED,
                    range_value: 0,
                },
                max_range: {
                    range_unit: RANGE_UNIT.RANGED,
                    range_value: 1,
                }
            },
        },
        spell_targets: {
            target_unit: TARGET_UNIT.INDIVIDUALS,
            target_count: 1,
            target_description: "Corpse"
        },
        damage_attribute: ATTRIBUTE.MIGHT,
        attribute_multiplier: 0,
        spell_description: [
            "Using the [Animus]{keyword:animus} energy from your source, you attempt to stitch together a [Hollow]{keyword:hollow} Soul for a small [Beast]{keyword:creature_beast} within range. Target 1 Corpse of a [Small]{keyword:size_small} or smaller [Beast]{keyword:creature_beast}.",
            "When this spell Resolves, you gain one of the following beasts: [Hollow Beast of the Land]{keyword:summon_hollowbeastofland}, [Hollow Beast of the Sea]{keyword:summon_hollowbeastofsea}, or [Hollow Beast of the Sky]{keyword:summon_hollowbeastofsky}.",
            "You require the [Batallion Slots]{keyword:batallion_slots} to command this creature. If you summon them without the required [Batallion Slots]{keyword:batallion_slots}, the creature will either remain motionless, run away, or act erratically, depending on the [GM's]{keyword:game_master} discretion."
        ]
    }
]