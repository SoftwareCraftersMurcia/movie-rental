import {MovieType} from "./movieType";

export class ChildrenMovie implements MovieType {
    priceFor(daysRented: number): number {
        return daysRented <= 3 ? 1.5 : 1.5 + (daysRented - 3) * 1.5;
    }

    pointsFor(daysRented: number): number {
        return 1;
    }
}