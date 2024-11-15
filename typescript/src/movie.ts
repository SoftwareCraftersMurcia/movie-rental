import {PriceCode} from "./priceCode";
import {RegularPrice} from "./regularPrice";
import {Price} from "./price";

export class Movie {
    private readonly title: string;
    private readonly priceCode: PriceCode;
    private readonly price: RegularPrice;

    public constructor(title: string, priceCode: PriceCode, price: Price) {
        this.title = title;
        this.priceCode = priceCode;
        this.price = price;
    }

    public getPrice(numberOfDaysRented: number): number {
        return this.price.priceFor(numberOfDaysRented);
    }

    public getTitle(): string {
        return this.title;
    }

    public getFrequentPoints(daysRented: number) {
        if (this.priceCode === PriceCode.NEW_RELEASE && daysRented > 1) {
            return 2;
        } else {
            return 1;
        }
    }
}

