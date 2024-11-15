import {Rental} from "./rental";

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
    let frequentRenterPoints: number = 0;
    let result = "Rental Record for " + this.getName() + "\n";

    for (const rental of this.rentals) {
      let thisAmount = 0;
      thisAmount += rental.getPrice();
      frequentRenterPoints += rental.getFrequentPoints();
      result +=
        "\t" +
        rental.getMovie().getTitle() +
        "\t" +
        thisAmount.toFixed(1) +
        "\n";
    }

    // add footer lines
    result += "Amount owed is " + this.getTotalAmount().toFixed(1) + "\n";
    result += "You earned " + frequentRenterPoints + " frequent renter points";

    return result;
  }

  private getTotalAmount() {
    return this.rentals.reduce((acc, rental) => acc + rental.getPrice(), 0);
  }
}
