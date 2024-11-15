import {PriceCode} from "./priceCode";
import {RegularPrice} from "./regularPrice";
import {NewReleasePrice} from "./newReleasePrice";
import {ChildrenPrice} from "./childrenPrice";

export class Movie {
    private readonly title: string;
    private readonly priceCode: PriceCode;
    private readonly price: RegularPrice;

    public constructor(title: string, priceCode: PriceCode) {
        this.title = title;
        this.priceCode = priceCode;
        switch (this.priceCode) {
            case PriceCode.REGULAR:
                this.price = new RegularPrice();
                break;
            case PriceCode.NEW_RELEASE:
                this.price = new NewReleasePrice();
                break;
            case PriceCode.CHILDREN:
                this.price = new ChildrenPrice();
                break;
        }
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

