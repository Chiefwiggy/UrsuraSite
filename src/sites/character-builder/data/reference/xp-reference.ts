export const XP_FLAT_DATA = [
    0,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    10,
    12,
    12,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    55,
    60,
    65,
    70,
    140,
    160,
    185,
    215,
    250,
    300
]

export const XP_REFERENCE = {
    exponent: 1.8,
    disposition: {
        pre15: {
            affinity: {
                regular: 0.5,
                double: 0.33
            },
            aversion: {
                regular: 1.75,
                double: 2.25
            }
        },
        post15: {
            affinity: {
                regular: 0.66,
                double: 0.5
            },
            aversion: {
                regular: 1.375,
                double: 1.75
            }
        }
    }
}