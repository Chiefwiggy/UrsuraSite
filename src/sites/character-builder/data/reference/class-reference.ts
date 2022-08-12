import { CLASS_NAMES } from "../enums/class-enums"


export const CLASS_REFERENCE = {
    beginner: {
        scribe: {
            id: CLASS_NAMES.SCRIBE,
            modifiers: {
                health: 2.5,
                stamina: 3.5,
                tether: 8.0
            }
        },
        savant: {
            id: CLASS_NAMES.SAVANT,
            modifiers: {
                health: 1,
                stamina: 2,
                tether: 2.5
            }
        },
        tethered: {
            id: CLASS_NAMES.TETHERED,
            modifiers: {
                health: 0.5,
                stamina: 1.5,
                tether: 4
            }
        },
        fighter: {
            id: CLASS_NAMES.FIGHTER,
            modifiers: {
                health: 1.7,
                stamina: 2.7,
                tether: 0.5
            }
        },
        explorer: {
            id: CLASS_NAMES.EXPLORER,
            modifiers: {
                health: 1.3,
                stamina: 2.9,
                tether: 1.2
            }
        },
        knave: {
            id: CLASS_NAMES.KNAVE,
            modifiers: {
                health: 1.2,
                stamina: 3.1,
                tether: 0.5
            }
        },
        rider: {
            id: CLASS_NAMES.RIDER,
            modifiers: {
                health: 0,
                stamina: 0,
                tether: 0
            }
        },
        technician: {
            id: CLASS_NAMES.TECHNICIAN,
            modifiers: {
                health: 1.5,
                stamina: 2.5,
                tether: 1
            }
        },
        artisan: {
            id: CLASS_NAMES.ARTISAN,
            modifiers: {
                health: 0,
                stamina: 0,
                tether: 0
            }
        },
        envoy: {
            id: CLASS_NAMES.ENVOY,
            modifiers: {
                health: 0,
                stamina: 0,
                tether: 0
            }
        }
    }
}