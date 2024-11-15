import {Formatter} from "./formatter";
import {Customer} from "../customer";
import {Rentals} from "../rentals";
import {Rental} from "../rental";

export class HtmlFormatter implements Formatter {
    format(customer: Customer, rentals: Rentals): string {
        let result = `<h1>Rental Record for <em>${customer.getName()}</em></h1>\n` +
            '<table>\n';

        rentals.map((rental: Rental) => {
            result += `  <tr><td>${rental.getTitle()}</td><td>${rental.getPrice().toFixed(1)}</td></tr>\n`;
        })
        result += '</table>\n';
        result += `<p>Amount owed is <em>${rentals.getTotalAmount().toFixed(1)}</em></p>\n`;
        result += `<p>You earned <em>${rentals.getFrequentRenterPoints()}</em> frequent renter points</p>`;

        return result;
    }
}