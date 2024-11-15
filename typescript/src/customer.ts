import {Movie} from "./movie";
import {Rental} from "./rental";

function getFrequentPoints(rental: Rental) {
  return rental.getFrequentPoints(rental);
}

export class Customer {
  private name: string;
  private rentals: Rental[] = [];

  public constructor(name: string) {
    this.name = name;
  }

  public addRental(arg: Rental) {
    this.rentals.push(arg);
  }

  public getName(): string {
    return this.name;
  }

  public statement(): string {
    let totalAmount: number = 0;
    let frequentRenterPoints: number = 0;
    let result = "Rental Record for " + this.getName() + "\n";

    for (const rental of this.rentals) {
      let thisAmount = 0;
      thisAmount += rental.getPrice();
      frequentRenterPoints += getFrequentPoints(rental);

      // show figures for this rental
      result +=
        "\t" +
        rental.getMovie().getTitle() +
        "\t" +
        thisAmount.toFixed(1) +
        "\n";
      totalAmount += thisAmount;
    }

    // add footer lines
    result += "Amount owed is " + totalAmount.toFixed(1) + "\n";
    result += "You earned " + frequentRenterPoints + " frequent renter points";

    return result;
  }
}
