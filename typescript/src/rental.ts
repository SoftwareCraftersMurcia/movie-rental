import {Movie} from "./movie";
import {PriceCode} from "./priceCode";
import {RegularPrice} from "./regularPrice";
import {NewReleasePrice} from "./newReleasePrice";
import {ChildrenPrice} from "./childrenPrice";

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
                return new RegularPrice().priceFor(this.daysRented);
            case PriceCode.NEW_RELEASE:
                return new NewReleasePrice().priceFor(this.daysRented);
            case PriceCode.CHILDREN:
                return new ChildrenPrice().priceFor(this.daysRented);
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