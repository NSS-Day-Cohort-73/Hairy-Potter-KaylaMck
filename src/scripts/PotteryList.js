import { usePottery } from "./PotteryCatalog.js";

export const PotteryList = () => {
    const potteryItems = usePottery();

    const potteryHTML = potteryItems.map(pottery => {
        return `
            <section class="pottery" id="pottery--${pottery.id}">
                <h2 class="pottery_shape">${pottery.shape}</h2>
                <div class="pottery_properties">
                    Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
                </div>
                <div class= "pottery_price">Price is ${pottery.price}
                </div>
            </section>
            `;
    });

    return potteryHTML.join('');
}