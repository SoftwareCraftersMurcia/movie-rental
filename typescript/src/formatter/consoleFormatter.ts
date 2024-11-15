import {Customer} from "../customer";
import {Formatter} from "./formatter";
import {Rentals} from "../rentals";
import {Rental} from "../rental";

export class ConsoleFormatter implements Formatter {
    format(customer: Customer, rentals: Rentals): string {
        let result = `Rental Record for ${customer.getName()}\n`;

        result += rentals.map((rental: Rental): string =>
            `\t${rental.getTitle()}` +
            `\t${rental.getPrice().toFixed(1)}\n`)
            .join('');
        result += `Amount owed is ${rentals.getTotalAmount().toFixed(1)}\n`;
        result += `You earned ${rentals.getFrequentRenterPoints()} frequent renter points`;

        return result;

    }
}