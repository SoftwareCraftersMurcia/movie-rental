import {Customer} from "./customer";
import {Formatter} from "./formatter";
import {Rental} from "./rental";

export class ConsoleFormatter implements Formatter {
    format(customer: Customer, rentals: Rental[]): string {
        let result = "Rental Record for " + customer.getName() + "\n";

        for (const rental of rentals) {
            result +=
                "\t" +
                rental.getTitle() +
                "\t" +
                rental.getPrice().toFixed(1) +
                "\n";
        }
        result += "Amount owed is " + customer.getTotalAmount().toFixed(1) + "\n";
        result += "You earned " + customer.getFrequentRenterPoints() + " frequent renter points";

        return result;

    }
}