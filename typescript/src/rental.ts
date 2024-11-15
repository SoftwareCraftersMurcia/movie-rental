import {Movie} from "./movie";

export class Rental {

    private readonly movie: Movie;
    private readonly daysRented: number;

    public constructor(movie: Movie, daysRented: number) {
        this.movie = movie;
        this.daysRented = daysRented;
    }

    public getPrice(): number {
        return this.movie.getPrice(this.daysRented);
    }

    public getFrequentPoints(): number {
        return this.movie.getFrequentPoints(this.daysRented);
    }

    public getTitle(): string {
        return this.movie.getTitle();
    }
}