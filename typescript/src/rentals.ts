import {Rental} from "./rental";

export class Rentals {
    private rentals: Rental[] = [];

    add(rental: Rental) {
        this.rentals.push(rental);
    }

    getFrequentRenterPoints() {
        return this.rentals.reduce((acc, rental) => acc + rental.getFrequentPoints(), 0);
    }

    getTotalAmount() {
        return this.rentals.reduce((acc, rental) => acc + rental.getPrice(), 0)
    }

    map(fn: (rental: Rental) => void) {
        this.rentals.map(rental => fn(rental));
    }
}