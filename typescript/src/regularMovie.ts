import {MovieType} from "./movieType";

export class RegularMovie implements MovieType {
    priceFor(daysRented: number) {
        return daysRented <= 2 ? 2 : 2 + (daysRented - 2) * 1.5;
    }

    pointsFor(daysRented: number): number {
        return 1;
    }
}