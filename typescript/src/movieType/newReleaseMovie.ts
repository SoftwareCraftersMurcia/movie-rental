import {MovieType} from "./movieType";

export class NewReleaseMovie implements MovieType {
    priceFor(daysRented: number) {
        return daysRented * 3;
    }

    pointsFor(daysRented: number): number {
        return daysRented <= 1 ? 1 : 2;
    }
}