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
        return this.movie.getPrice(this.daysRented);
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