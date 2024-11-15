import {Rental} from "./rental";
import {Formatter} from "./formatter";

export class Customer {
    private name: string;
    private rentals: Rental[] = [];

    public constructor(name: string) {
        this.name = name;
    }

    public addRental(arg: Rental) {
        this.rentals.push(arg);
    }

    public getName(): string {
        return this.name;
    }

    public statement(formatter: Formatter): string {
        return formatter.format(this);
    }

    public getFrequentRenterPoints() {
        return this.rentals.reduce((acc, rental) => acc + rental.getFrequentPoints(), 0);
    }

    public getTotalAmount() {
        return this.rentals.reduce((acc, rental) => acc + rental.getPrice(), 0);
    }

    getRentals() {
        return this.rentals;
    }
}
