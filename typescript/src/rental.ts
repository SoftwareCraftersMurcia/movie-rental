import {Movie} from "./movie";

export class Rental {

    private movie: Movie;
    private daysRented: number;

    public constructor(movie: Movie, daysRented: number) {
        this.movie = movie;
        this.daysRented = daysRented;
    }

    public getPrice() {
        let thisAmount = 0;
        switch (this.movie.getPriceCode()) {
            case Movie.REGULAR:
                thisAmount = 2;
                if (this.daysRented > 2) {
                    thisAmount += (this.daysRented - 2) * 1.5;
                }
                break;
            case Movie.NEW_RELEASE:
                thisAmount = this.daysRented * 3;
                break;
            case Movie.CHILDRENS:
                thisAmount = 1.5;
                if (this.daysRented > 3) {
                    thisAmount += (this.daysRented - 3) * 1.5;
                }
                break;
        }
        return thisAmount;
    }

    public getFrequentPoints() {
        if (
            this.movie.getPriceCode() === Movie.NEW_RELEASE &&
            this.daysRented > 1
        ) {
            return 2;
        } else {
            return 1;
        }
    }

    getTitle() {
        return this.movie.getTitle();
    }
}