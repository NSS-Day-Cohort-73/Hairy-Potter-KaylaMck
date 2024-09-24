// Imports go first
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { makePottery } from "./PotteryWheel.js";
import { PotteryList } from "./PotteryList.js";


// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1.5, 4);
let platter = makePottery("Platter", 2.5, 1);
let vase = makePottery("Vase", 1, 6);
let bowl = makePottery("Bowl", 2, 3);
let pitcher = makePottery("Pitcher", 3, 7);

console.log(mug);
console.log(platter);
console.log(vase);
console.log(bowl);
console.log(pitcher);


// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2100);
let firedPlatter = firePottery(platter, 2250);
let firedVase = firePottery(vase, 2000);
let firedBowl = firePottery(bowl, 2200);
let firedPitcher = firePottery(pitcher, 2300);

console.log(firedMug);
console.log(firedPlatter);
console.log(firedVase);
console.log(firedBowl);
console.log(firedPitcher);


// Determine which ones should be sold, and their price
toSellOrNotToSell(mug);
toSellOrNotToSell(platter);
toSellOrNotToSell(vase);
toSellOrNotToSell(bowl);
toSellOrNotToSell(pitcher);


// Invoke the component function that renders the HTML list
const renderPottery = () => {
    const potteryHTML = PotteryList();
    const potteryListElement = document.querySelector('.potteryList');
    potteryListElement.innerHTML = potteryHTML;
};

renderPottery();