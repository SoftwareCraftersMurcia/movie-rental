import {Rental} from "./rental";

export class Rentals {
    private rentals: Rental[] = [];

    add(rental: Rental): void {
        this.rentals.push(rental);
    }

    getFrequentRenterPoints(): number {
        return this.rentals.reduce((acc: number, rental: Rental) => acc + rental.getFrequentPoints(), 0);
    }

    getTotalAmount(): number {
        return this.rentals.reduce((acc: number, rental: Rental) => acc + rental.getPrice(), 0)
    }

    map(fn: (rental: Rental) => any): any[] {
        return this.rentals.map(rental => fn(rental));
    }
}