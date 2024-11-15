export class NewReleasePrice {
    priceFor(daysRented: number) {
        return daysRented * 3;
    }
}