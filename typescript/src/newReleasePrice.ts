import {Price} from "./price";

export class NewReleasePrice implements Price {
    priceFor(daysRented: number) {
        return daysRented * 3;
    }
}