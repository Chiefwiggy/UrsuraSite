
import { XP_FLAT_DATA, XP_REFERENCE } from "../data/reference/xp-reference";
import { DISPOSITION } from "../sample-data/character-sample";

interface value_dis {
    value: number,
    disposition: DISPOSITION
}


export const CalculateXPToNext = (
    stat_info,
    total_stat_level
) => {
    const sl_mod = Math.round(Math.pow((stat_info.value), XP_REFERENCE.exponent))
    const adj = XP_FLAT_DATA[stat_info.value+1];
    let dispMod = 1;
    let path;
    if (stat_info.value < 15) {
        path = XP_REFERENCE.disposition.pre15;
    } else {
        path = XP_REFERENCE.disposition.post15;
    }
    switch(stat_info.disposition) {
        case DISPOSITION.AFFINITY:
            dispMod = path.affinity.regular;
            break;
        case DISPOSITION.DOUBLE_AFFINITY:
            dispMod = path.affinity.double
            break;
        case DISPOSITION.AVERSION:
            dispMod = path.aversion.regular;
            break;
        case DISPOSITION.DOUBLE_AVERSION:
            dispMod = path.aversion.double;
            break;
    }

    const tl_adj = Math.floor(total_stat_level*0.5)
    const xp =  sl_mod + Math.floor(adj * dispMod) + tl_adj;
    return xp;
}

export const CalculateTotalXPUsed = (
    character,
    level: number
) => {
    const A = Math.floor(0.5*(level-1))*Math.floor(0.5*(level-1));
    const B = Math.floor(0.5*(level-1));
    const C = (Math.floor(level*0.5)-1)*Math.floor(level*0.5);

    const XPACC = Math.max(0.5*(A+B+C), 0);

    const TOT = Object.values(character.stats).reduce((pv: number, cv: value_dis) => {
        let stat: number = 0;
        for (let i = 0; i < cv.value; ++i) {
            stat += CalculateXPToNext({value: i, disposition: cv.disposition}, 0)
        }
        return pv + stat;

    }, 0)

    return XPACC + Number(TOT);
}   