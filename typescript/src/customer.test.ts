import {Customer} from "./customer";
import {Rental} from "./rental";
import {Movie} from "./movie";
import {ConsoleFormatter} from "./consoleFormatter";
import {HtmlFormatter} from "./htmlFormatter";
import {RegularMovie} from "./movieType/regularMovie";
import {NewReleaseMovie} from "./movieType/newReleaseMovie";
import {ChildrenMovie} from "./movieType/childrenMovie";

describe("Customer", () => {
    let customer: Customer;
    beforeEach(() => {
        customer = new Customer("Bob");
        customer.addRental(new Rental(new Movie("Jaws", new RegularMovie()), 2));
        customer.addRental(new Rental(new Movie("Golden Eye", new RegularMovie()), 3));
        customer.addRental(new Rental(new Movie("Short New", new NewReleaseMovie()), 1));
        customer.addRental(new Rental(new Movie("Long New", new NewReleaseMovie()), 2));
        customer.addRental(new Rental(new Movie("Bambi", new ChildrenMovie()), 3));
        customer.addRental(new Rental(new Movie("Toy Story", new ChildrenMovie()), 4));
    });

    it("should format using console format", () => {
        const expected = "" +
            "Rental Record for Bob\n" +
            "\tJaws\t2.0\n" +
            "\tGolden Eye\t3.5\n" +
            "\tShort New\t3.0\n" +
            "\tLong New\t6.0\n" +
            "\tBambi\t1.5\n" +
            "\tToy Story\t3.0\n" +
            "Amount owed is 19.0\n" +
            "You earned 7 frequent renter points";

        expect(customer.statement(new ConsoleFormatter())).toBe(expected);
    });

    it("should format using html format", () => {
        const expected = '' +
            '<h1>Rental Record for <em>Bob</em></h1>\n' +
            '<table>\n' +
            '  <tr><td>Jaws</td><td>2.0</td></tr>\n' +
            '  <tr><td>Golden Eye</td><td>3.5</td></tr>\n' +
            '  <tr><td>Short New</td><td>3.0</td></tr>\n' +
            '  <tr><td>Long New</td><td>6.0</td></tr>\n' +
            '  <tr><td>Bambi</td><td>1.5</td></tr>\n' +
            '  <tr><td>Toy Story</td><td>3.0</td></tr>\n' +
            '</table>\n' +
            '<p>Amount owed is <em>19.0</em></p>\n' +
            '<p>You earned <em>7</em> frequent renter points</p>'

        expect(customer.statement(new HtmlFormatter())).toBe(expected);
    });
});