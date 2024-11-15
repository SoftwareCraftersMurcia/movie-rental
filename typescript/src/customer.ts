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
    let result = "Rental Record for " + this.getName() + "\n";

    for (const rental of this.rentals) {
      let thisAmount = 0;
      thisAmount += rental.getPrice();
      result +=
        "\t" +
        rental.getTitle() +
        "\t" +
        thisAmount.toFixed(1) +
        "\n";
    }
    result += "Amount owed is " + this.getTotalAmount().toFixed(1) + "\n";
    result += "You earned " + this.getFrequentRenterPoints() + " frequent renter points";

    return result;
  }

  private getFrequentRenterPoints() {
    return this.rentals.reduce((acc, rental) => acc + rental.getFrequentPoints(), 0);
  }

  private getTotalAmount() {
    return this.rentals.reduce((acc, rental) => acc + rental.getPrice(), 0);
  }
}
