import {Movie} from "./movie";

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
        return this.movie.getFrequentPoints(this.daysRented);
    }

    public getTitle() {
        return this.movie.getTitle();
    }
}