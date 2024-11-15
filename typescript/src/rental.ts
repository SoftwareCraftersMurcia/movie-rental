import {Movie} from "./movie";
import {PriceCode} from "./priceCode";

export class Rental {

    private readonly movie: Movie;
    private readonly daysRented: number;

    public constructor(movie: Movie, daysRented: number) {
        this.movie = movie;
        this.daysRented = daysRented;
    }

    public getPrice() {
        let thisAmount = 0;
        switch (this.movie.getPriceCode()) {
            case PriceCode.REGULAR:
                thisAmount = 2;
                if (this.daysRented > 2) {
                    thisAmount += (this.daysRented - 2) * 1.5;
                }
                break;
            case PriceCode.NEW_RELEASE:
                thisAmount = this.daysRented * 3;
                break;
            case PriceCode.CHILDREN:
                thisAmount = 1.5;
                if (this.daysRented > 3) {
                    thisAmount += (this.daysRented - 3) * 1.5;
                }
                break;
        }
        return thisAmount;
    }

    public getFrequentPoints() {
        if (this.movie.getPriceCode() === PriceCode.NEW_RELEASE && this.daysRented > 1) {
            return 2;
        } else {
            return 1;
        }
    }

    public getTitle() {
        return this.movie.getTitle();
    }
}