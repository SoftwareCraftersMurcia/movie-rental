import {RegularPrice} from "./regularPrice";
import {Price} from "./price";
import {NewReleasePrice} from "./newReleasePrice";

export class Movie {
    private readonly title: string;
    private readonly price: RegularPrice;

    public constructor(title: string, price: Price) {
        this.title = title;
        this.price = price;
    }

    public getPrice(numberOfDaysRented: number): number {
        return this.price.priceFor(numberOfDaysRented);
    }

    public getTitle(): string {
        return this.title;
    }

    public getFrequentPoints(daysRented: number) {
        if (this.price instanceof NewReleasePrice && daysRented > 1) {
            return 2;
        } else {
            return 1;
        }
    }
}

