import { CLASS_NAMES } from "../data/enums/class-enums";

export enum DISPOSITION {
    NEUTRAL = 'b-neutral',
    AFFINITY = 'b-affinity',
    DOUBLE_AFFINITY = 'b-double-affinity',
    AVERSION = 'b-aversion',
    DOUBLE_AVERSION = 'b-double-aversion'
}

export enum CREATURE_SIZE {
    TINY,
    SMALL,
    MEDIUM,
    LARGE,
    GIANT,
    COLOSSAL    
}

export const SampleCharacter = {
    info: {
        character_name: "Savant Minion",
        movement: 3,
        xp: 9511,
        weight: 0,
        size: CREATURE_SIZE.MEDIUM,
        active_class: CLASS_NAMES.SCRIBE,
        bulk_inventory: ""
    },
    stats: {
        might: {
<<<<<<< HEAD
            value: 20,
=======
            value: 12,
>>>>>>> 4ea0ea20e5e1d2f78b4a08062c8a864ada9cb5f4
            disposition: DISPOSITION.AFFINITY
        },
        finesse: {
            value: 30,
            disposition: DISPOSITION.NEUTRAL
        },
        agility: {
<<<<<<< HEAD
            value: 1,
            disposition: DISPOSITION.NEUTRAL
        },
        vitality: {
            value: 1,
            disposition: DISPOSITION.NEUTRAL
        },
        endurance: {
            value: 1,
            disposition: DISPOSITION.NEUTRAL
        },
        knowledge: {
            value: 1,
            disposition: DISPOSITION.NEUTRAL
        },
        mind: {
            value: 1,
            disposition: DISPOSITION.NEUTRAL
        },
        presence: {
            value: 1,
            disposition: DISPOSITION.NEUTRAL
        },
        grace: {
            value: 1,
            disposition: DISPOSITION.NEUTRAL
        },
        luck: {
            value: 1,
=======
            value: 30,
            disposition: DISPOSITION.NEUTRAL
        },
        vitality: {
            value: 30,
            disposition: DISPOSITION.NEUTRAL
        },
        endurance: {
            value: 30,
            disposition: DISPOSITION.NEUTRAL
        },
        knowledge: {
            value: 14,
            disposition: DISPOSITION.NEUTRAL
        },
        mind: {
            value: 30,
            disposition: DISPOSITION.NEUTRAL
        },
        presence: {
            value: 30,
            disposition: DISPOSITION.NEUTRAL
        },
        grace: {
            value: 13,
            disposition: DISPOSITION.NEUTRAL
        },
        luck: {
            value: 30,
>>>>>>> 4ea0ea20e5e1d2f78b4a08062c8a864ada9cb5f4
            disposition: DISPOSITION.NEUTRAL
        }
    },
    ranks: {
        weapons: {
            axes: 0,
            bows: 0,
            blades: 3,
            clubs: 0,
            picks: 0,
            polearms: 0,
            blasters: 764,
            wands: 70,
            tomes: 65,
            relics: 0,
            bombs: 0,
            unarmed: 0
        },
        arcanotypes: {
            elemental: 0,
            divine: 0,
            mystical: 0,
            axum: 0,
            primal: 0,
            eonic: 0,
            animus: 0,
            esoteric: 0
        },
        defenses: {
            parry: 780,
            shields: 780,
            armor: 0,
            poise: 0,
            resolve: 0,
            toughness: 780,
            abjuration: 780
        },
        magic: {
            attunement: 766,
            focus: 0,
            memory: 0,
            proteum: 0,
            summoning: 0,
            enchanting: 0,
        },
        authority: {
            leadership: 22,
            tactics: 0,
            guidance: 0,
            mentorship: 0,
            recruitment: 0
        },
        mobility: {
            mounts: 0,
            flight: 0,
            piloting: 0,
            reflex: 0,
            evasion: 780,
            gambit: 0,
        },
        trade: {
            divination: 0,
            medic: 0,
            hacking: 0,
            trapping: 0,
            crafting: 0,
            repair: 0,
            aid: 0
        }
    },
    skills: {
        athletics: 0,
        pry: 0,
        handling: 0,
        legerdemain: 555,
        stealth: 0,
        deduction: 0,
        identify: 0,
        science: 0,
        technology: 0,
        biology: 0,
        metaphysics: 0,
        spellcraft: 0,
        survival: 0,
        perception: 0,
        streetwise: 0,
        intuition: 55,
        observation: 122,
        diplomacy: 766,
        hostility: 0,
        guile: 0,
        performance: 780,
        lore: 0,
        occult: 0,
        politics: 0,
        society: 0
    },
    race: {
        species: "",
        race: "",
        bonuses: {
            health: 11,
            stamina: 11,
            tether: 5,
            physical_resistance: 3,
            magical_resistance: 3
        }
    },
    bonuses: {
        stamina: 0,
        health: 0,
        refresh: 3,
        tether: 0,
        tether_refresh: 0,
        evasion: 0,
        dodge: 0
    }
}