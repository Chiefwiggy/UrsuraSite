
export enum CAST_TIME {
    STANDARD,
    QUICK,
    LONG, 
    FREE,
    RITUAL_SHORT,
    RITUAL_LONG,
    DOWNTIME,
    OTHER
}

export enum ARCANOTYPE {
    ANIMUS,
    AXUM,
    DIVINE,
    ELEMENTAL,
    EONIC, 
    ESOTERIC,
    MYSTICAL,
    PRIMAL
}

export enum TIME_UNIT {
    INSTANT,
    ROUNDS,
    MINUTES,
    HOURS,
    DAYS
}

export enum RESET_TIME_UNIT {
    PER_TURN,
    PER_ENCOUNTER,
    PER_REST,
    PER_RECOVERY,
    PER_DAY,
    AT_WILL,
    SPECIAL
}

export enum DAMAGE_TYPE {
    MAGICAL,
    PHYSICAL,
    RAW,
    PENETRATING,
    HEALING,
    NONE,
    OTHER
}

export enum ATTRIBUTE {
    MIGHT,
    AGILITY,
    SKILL,
    AWARENESS,
    VITALITY,
    KNOWLEDGE,
    MIND,
    PRESENCE,
    AUTHORITY,
    ENDURANCE,
    LUCK,
    NONE
}

export enum RANGE_UNIT {
    RANGED,
    MELEE,
    OTHER
}

export enum TARGET_UNIT {
    INDIVIDUALS,
    COMMANDERS,
    BATTALIONS,
    HEXES
}


export type RangeSpan = {
    min_range: RangeValue,
    max_range: RangeValue
}

export type RangeValue = {
    range_unit: RANGE_UNIT,
    range_value: number
}

export type TargetData = {
    target_unit: TARGET_UNIT,
    target_count: number
    target_description?: string
}

export type SpellData = {
    spell_name: string,
    spell_level: number,
    cast_time: CAST_TIME,
    prep_cost: number,
    prep_uses: number,
    free_cost: number,
    arcanotype: ARCANOTYPE,
    spell_duration: number,
    spell_duration_unit: TIME_UNIT,
    isRoleplay: boolean,
    reset_condition: RESET_TIME_UNIT,
    spell_damage: {
        base_damage: number,
        damage_type: DAMAGE_TYPE,
        damage_subtype: string,
    },
    save_type: ATTRIBUTE
    spell_range: {
        standard_range: RangeSpan,
        extended_range?: RangeSpan
    }
    spell_targets: TargetData,
    damage_attribute: ATTRIBUTE,
    attribute_multiplier: number,
    spell_description: string[]
}