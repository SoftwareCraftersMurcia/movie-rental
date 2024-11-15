import {Movie} from "./movie";
import {PriceCode} from "./priceCode";
import {RegularPrice} from "./regularPrice";
import {NewReleasePrice} from "./newReleasePrice";
import {ChildrenPrice} from "./childrenPrice";

export class Rental {

    private readonly movie: Movie;
    private readonly daysRented: number;
    private readonly price: RegularPrice;

    public constructor(movie: Movie, daysRented: number) {
        this.movie = movie;
        this.daysRented = daysRented;
        switch (this.movie.getPriceCode()) {
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

    public getPrice() {
        return this.price.priceFor(this.daysRented);
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