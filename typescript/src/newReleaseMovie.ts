import {MovieType} from "./movieType";

export class NewReleaseMovie implements MovieType {
    priceFor(daysRented: number) {
        return daysRented * 3;
    }
}