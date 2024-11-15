export interface MovieType {
    priceFor(daysRented: number): number;
    pointsFor(daysRented: number): number;
}