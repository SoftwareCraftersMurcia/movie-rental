import {Price} from "./price";

export class ChildrenPrice implements Price {
    priceFor(daysRented: number): number {
        return daysRented <= 3 ? 1.5 : 1.5 + (daysRented - 3) * 1.5;
    }
}