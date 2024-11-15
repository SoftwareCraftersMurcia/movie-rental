import {Rental} from "./rental";
import {Formatter} from "./formatter/formatter";
import {Rentals} from "./rentals";

export class Customer {
    private readonly name: string;
    private readonly rentals: Rentals;

    public constructor(name: string) {
        this.name = name;
        this.rentals = new Rentals();
    }

    public addRental(rental: Rental): void {
        this.rentals.add(rental);
    }

    public getName(): string {
        return this.name;
    }

    public statement(formatter: Formatter): string {
        return formatter.format(this, this.rentals);
    }
}
