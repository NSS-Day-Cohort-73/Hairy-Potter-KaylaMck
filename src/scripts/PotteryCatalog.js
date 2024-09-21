const potteryToSell = [];

export const toSellOrNotToSell = (potteryPiece) => {
    
    if (!potteryPiece.cracked) {
        if (potteryPiece.weight >= 6) {
            potteryPiece.price = 40;
        } else {
            potteryPiece.price = 20;
        }

        potteryToSell.push(potteryPiece);
    }

    return potteryPiece;
};

export const usePottery = () => {
    return [...potteryToSell];
}