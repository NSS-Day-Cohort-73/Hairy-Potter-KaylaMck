let primaryKey = 1;

export const makePottery = (shape,weight,height) => {
    let potteryPiece = {
        shape: shape,
        weight: weight,
        height: height,
        id: primaryKey
    };

    primaryKey++;
    return potteryPiece;
};