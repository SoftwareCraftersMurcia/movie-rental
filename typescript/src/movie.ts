import {PriceCode} from "./priceCode";

export class Movie {
    private readonly title: string;
    private readonly priceCode: PriceCode;

    public constructor(title: string, priceCode: PriceCode) {
        this.title = title;
        this.priceCode = priceCode;
    }

    public getPriceCode(): number {
        return this.priceCode;
    }

    public getTitle(): string {
        return this.title;
    }
}

