export interface Price {
    priceFor(daysRented: number): number;
}