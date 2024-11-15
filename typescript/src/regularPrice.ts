export class RegularPrice {
    priceFor(daysRented: number) {
        return daysRented <= 2 ? 2 : 2 + (daysRented - 2) * 1.5;
    }
}