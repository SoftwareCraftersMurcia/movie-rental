import { Movie } from "./movie";
import { Rental } from "./rental";

function getPrice(rental: Rental) {
  let thisAmount = 0;
  switch (rental.getMovie().getPriceCode()) {
    case Movie.REGULAR:
      thisAmount = 2;
      if (rental.getDaysRented() > 2) {
        thisAmount += (rental.getDaysRented() - 2) * 1.5;
      }
      break;
    case Movie.NEW_RELEASE:
      thisAmount = rental.getDaysRented() * 3;
      break;
    case Movie.CHILDRENS:
      thisAmount = 1.5;
      if (rental.getDaysRented() > 3) {
        thisAmount += (rental.getDaysRented() - 3) * 1.5;
      }
      break;
  }
  return thisAmount;
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

      // determine amounts for each line
      thisAmount += getPrice(rental);

      // add frequent renter points
      frequentRenterPoints++;
      // add bonus for a two day new release rental
      if (
        rental.getMovie().getPriceCode() === Movie.NEW_RELEASE &&
        rental.getDaysRented() > 1
      )
        frequentRenterPoints++;

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
