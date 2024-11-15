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

    public getPriceCode(): number {
        return this.priceCode;
    }

    public getPrice(numberOfDaysRented: number): number {
        return this.price.priceFor(numberOfDaysRented);
    }

    public getTitle(): string {
        return this.title;
    }
}

