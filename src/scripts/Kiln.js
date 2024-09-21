export const firePottery = (potteryPiece, firingTemperature) => {
    potteryPiece.fired = true;
    potteryPiece.cracked = firingTemperature > 2200;

    return potteryPiece;
}