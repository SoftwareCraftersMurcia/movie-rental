<?php

declare(strict_types=1);

namespace Kata\Printer;

use Kata\Customer;

final readonly class TextStatement implements Statement
{
    /**
     * Rental Record for Bob
     *      Jaws        2.0
     *      Golden Eye  3.5
     *      Short New   3.0
     *      Long New    6.0
     *      Bambi       1.5
     *      Toy Story   3.0
     * Amount owed is 19.0
     * You earned 7 frequent renter points
     */

    public function __construct(
        private Customer $customer,
    ) {
    }

    public function printStatement(): string
    {
        $result = "Rental Record for " . $this->customer->name . "\n";

        $totalAmount = 0;
        $totalFrequentRenterPoints = 0;

        foreach ($this->customer->getRentals() as $rental) {
            $amount = $rental->calculateAmount();
            $frequentRenterPoints = $rental->calculateFrequentRenterPoints();

            $totalAmount += $amount;
            $totalFrequentRenterPoints += $frequentRenterPoints;

            $result .= sprintf("\t%s\t%1.1f\n", $rental->movieTitle(), $amount);
        }

        $result .= sprintf("Amount owed is %1.1f\n", $totalAmount);
        $result .= "You earned " . $totalFrequentRenterPoints . " frequent renter points";

        return $result;
    }
}
