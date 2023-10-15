import { Keyword } from "../types/keyword_types";


export const KEYWORDS_EXAMPLE: Keyword[] = [
    {
        id: "spell:resolves",
        name: "Resolve",
        description: ["Resolving is the point at which your spell goes off. With instant casting, this is immediately, but longer casts, its the turn that it activates."]
    },
    {
        id: "presence",
        name: "Presence",
        description: [
            "Presence is the effect you have on the world just by simply existing. Presence is one of your 10 major attributes.",
            "Presence affects your Spell Set and your mDEF."
        ]
    },
    {
        id: "spell_contest",
        name: "Spell Contest",
        description: ["Different than a regular contest, the caster sets the Contest DC by rolling their Spell Set. The opposing entity rolls the attribute listed."]
    }, 
    {
        id: "might",
        name: "Might",
        description: [
            "Might is your the potency that you have on the world. Might is one of your 10 major attributes.",
            "Might affects how much damage and healing you output when applying effects."
        ]
    },
    {
        id: "damage:raw",
        name: "Raw Damage",
        description: ["Raw damage is a type of damage that ignores pDEF and mDEF."]
    },
    {
        id: "damage:magical",
        name: "Magical Damage",
        description: ["Magical damage is a type of damage which subtracts the opponent's mDEF."]
    },
    {
        name: "Commander",
        id: "commander",
        description: ["A Commander is the leader of a Batallion"]
    },
    {
        name: "Authority",
        id: "authority",
        description: [
            "Authority is your command over those who follow you. Authority is one of your 10 major attributes",
            "Authority affects the amount and power of minions you can bring with you into combat."
        ]
    },
    {
        name: "Spiritless",
        id: "condition_spiritless",
        description: [
            "Spiritless is a Minor Authority Affliction which inflicts -5 AUT and -1 : 0 to AUT Contests.",
            "Additionally, if the affected creature is a commander, they do not regain Action Points.", 
            "If they are a minion, they cannot use a Commader's Action Points.",
            
        ]
    }
]