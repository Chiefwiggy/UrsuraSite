
export enum CAST_TIME {
    STANDARD = "STANDARD",
    QUICK = "QUICK",
    LONG = "LONG", 
    FREE = "FREE",
    RITUAL_SHORT = "RITUAL_SHORT",
    RITUAL_LONG = "RITUAL_LONG",
    DOWNTIME = "DOWNTIME",
    OTHER = "OTHER"
}

export enum ARCANOTYPE {
    ANIMUS = "ANIMUS",
    AXUM = "AXUM",
    DIVINE = "DIVINE",
    ELEMENTAL = "ELEMENTAL",
    EONIC = "EONIC",
    MYSTICAL = "MYSTICAL",
    PRIMAL = "PRIMAL",
    ESOTERIC = "ESOTERIC"
}

export enum TIME_UNIT {
    INSTANT = "INSTANT",
    ROUNDS = "ROUNDS",
    MINUTES = "MINUTES",
    HOURS = "HOURS",
    DAYS = "DAYS"
}

export enum RESET_TIME_UNIT {
    PER_TURN = "PER_TURN",
    PER_ENCOUNTER = "PER_ENCOUNTER",
    PER_REST = "PER_REST",
    PER_RECOVERY = "PER_RECOVERY",
    PER_DAY = "PER_DAY",
    AT_WILL = "AT_WILL",
    SPECIAL = "SPECIAL"
}

export enum DAMAGE_TYPE {
    MAGICAL = "MAGICAL",
    PHYSICAL = "PHYSICAL",
    RAW = "RAW",
    PENETRATING = "PENETRATING",
    HEALING = "HEALING",
    NONE = "NONE",
    OTHER = "OTHER"
}

export enum ATTRIBUTE {
    MIGHT = "MIGHT",
    AGILITY = "AGILITY",
    SKILL = "SKILL",
    AWARENESS = "AWARENESS",
    VITALITY = "VITALITY",
    KNOWLEDGE = "KNOWLEDGE",
    MIND = "MIND",
    PRESENCE = "PRESENCE",
    AUTHORITY = "AUTHORITY",
    ENDURANCE = "ENDURANCE",
    LUCK = "LUCK",
    NONE = "NONE"
}

export enum RANGE_UNIT {
    RANGED = "RANGED",
    MELEE = "MELEE",
    RANGED_SPECIAL = "RANGED_SPECIAL",
    MELEE_SPECIAL = "MELEE_SPECIAL",
    OTHER = "OTHER"
}

export enum TARGET_UNIT {
    INDIVIDUALS = "INDIVIDUALS",
    COMMANDERS = "COMMANDERS",
    BATALLIONS = "BATALLIONS",
    HEXES = "HEXES",
    SPECIAL = "SPECIAL",
    OTHER = "OTHER"
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