import {MovieType} from "./movieType";
import {NewReleaseMovie} from "./newReleaseMovie";

export class Movie {
    private readonly title: string;
    private readonly movieType: MovieType;

    public constructor(title: string, movieType: MovieType) {
        this.title = title;
        this.movieType = movieType;
    }

    public getPrice(numberOfDaysRented: number): number {
        return this.movieType.priceFor(numberOfDaysRented);
    }

    public getTitle(): string {
        return this.title;
    }

    public getFrequentPoints(daysRented: number) {
        if (this.movieType instanceof NewReleaseMovie && daysRented > 1) {
            return 2;
        } else {
            return 1;
        }
    }
}

