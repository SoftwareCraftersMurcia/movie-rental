export class RegularPrice {
    priceFor(daysRented: number) {
        let thisAmount = 2;
        if (daysRented > 2) {
            thisAmount += (daysRented - 2) * 1.5;
        }
        return thisAmount;
    }
}