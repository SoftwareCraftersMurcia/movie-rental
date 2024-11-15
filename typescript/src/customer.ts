import {Rental} from "./rental";
import {Formatter} from "./formatter";
import {Rentals} from "./rentals";

export class Customer {
    private name: string;
    private rentals: Rentals = new Rentals();

    public constructor(name: string) {
        this.name = name;
    }

    public addRental(arg: Rental) {
        this.rentals.add(arg);
    }

    public getName(): string {
        return this.name;
    }

    public statement(formatter: Formatter): string {
        return formatter.format(this, this.rentals);
    }
}
