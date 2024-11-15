import {Customer} from "./customer";
import {Formatter} from "./formatter";

export class ConsoleFormatter implements Formatter {
    format(customer: Customer) {
        let result = "Rental Record for " + customer.getName() + "\n";

        for (const rental of customer.getRentals()) {
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