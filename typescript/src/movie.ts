import {MovieType} from "./movieType";

export class Movie {
    private readonly title: string;
    private readonly movieType: MovieType;

    public constructor(title: string, movieType: MovieType) {
        this.title = title;
        this.movieType = movieType;
    }

    public getTitle(): string {
        return this.title;
    }

    public getPrice(numberOfDaysRented: number): number {
        return this.movieType.priceFor(numberOfDaysRented);
    }

    public getFrequentPoints(daysRented: number) {
        return this.movieType.pointsFor(daysRented);
    }
}

