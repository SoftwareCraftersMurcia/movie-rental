import {Customer} from "../customer";
import {Formatter} from "./formatter";
import {Rentals} from "../rentals";
import {Rental} from "../rental";

export class ConsoleFormatter implements Formatter {
    format(customer: Customer, rentals: Rentals): string {
        let formattedRentals = rentals.map((rental: Rental): string =>
            `\t${rental.getTitle()}` +
            `\t${rental.getPrice().toFixed(1)}`);

        return [
            `Rental Record for ${customer.getName()}`,
            ...formattedRentals,
            `Amount owed is ${rentals.getTotalAmount().toFixed(1)}`,
            `You earned ${rentals.getFrequentRenterPoints()} frequent renter points`
        ].join('\n');
    }
}