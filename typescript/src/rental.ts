import {Movie} from "./movie";

export class Rental {

    private movie: Movie;
    private daysRented: number;

    public constructor(movie: Movie, daysRented: number) {
        this.movie = movie;
        this.daysRented = daysRented;
    }

    public getDaysRented(): number {
        return this.daysRented;
    }

    public getMovie(): Movie {
        return this.movie;
    }
    public getPrice() {
        let thisAmount = 0;
        switch (this.getMovie().getPriceCode()) {
            case Movie.REGULAR:
                thisAmount = 2;
                if (this.getDaysRented() > 2) {
                    thisAmount += (this.getDaysRented() - 2) * 1.5;
                }
                break;
            case Movie.NEW_RELEASE:
                thisAmount = this.getDaysRented() * 3;
                break;
            case Movie.CHILDRENS:
                thisAmount = 1.5;
                if (this.getDaysRented() > 3) {
                    thisAmount += (this.getDaysRented() - 3) * 1.5;
                }
                break;
        }
        return thisAmount;
    }

    public getFrequentPoints(rental: Rental) {
        let frequentRenterPoints = 0;
        frequentRenterPoints++;
        // add bonus for a two day new release rental
        if (
            rental.getMovie().getPriceCode() === Movie.NEW_RELEASE &&
            rental.getDaysRented() > 1
        )
            frequentRenterPoints++;
        return frequentRenterPoints;
    }
}