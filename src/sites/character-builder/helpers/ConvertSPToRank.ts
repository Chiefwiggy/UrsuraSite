

export const SpToRank = (
    sp
) => {
    return Math.floor( 0.5 * (Math.sqrt(.8*sp + 1) - 1))
}