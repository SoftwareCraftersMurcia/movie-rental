import {Price} from "./price";

export class RegularPrice implements Price {
    priceFor(daysRented: number) {
        return daysRented <= 2 ? 2 : 2 + (daysRented - 2) * 1.5;
    }
}