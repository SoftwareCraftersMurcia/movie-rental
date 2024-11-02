<?php

declare(strict_types=1);

namespace Kata\Printer;

use Kata\Customer;

final readonly class HtmlStatement implements Statement
{
    /**
     * <h1>Rental Record for <em>Bob</em></h1>
     * <table>
     * <tr><td>Jaws</td><td>2.0</td></tr>
     * <tr><td>Golden Eye</td><td>3.5</td></tr>
     * <tr><td>Short New</td><td>3.0</td></tr>
     * <tr><td>Long new</td><td>6.0</td></tr>
     * <tr><td>Bambi</td><td>1.5</td></tr>
     * <tr><td>Toy Story</td><td>3.0</td></tr>
     * </table>
     * <p>Amount owed is <em>19.0</em></p>
     * <p>You earned <em>7</em> frequent renter points</p>
     */

    public function __construct(
        private Customer $customer,
    ) {
    }

    public function printStatement(): string
    {
        $result = "<h1>Rental Record for <em>{$this->customer->name}</em></h1>\n";
        $result .= "<table>\n";

        $totalAmount = 0;
        $totalFrequentRenterPoints = 0;

        foreach ($this->customer->getRentals() as $rental) {
            $amount = $rental->calculateAmount();
            $frequentRenterPoints = $rental->calculateFrequentRenterPoints();

            $totalAmount += $amount;
            $totalFrequentRenterPoints += $frequentRenterPoints;

            $result .= sprintf("  <tr><td>%s</td><td>%1.1f</td></tr>\n", $rental->movieTitle(), $amount);
        }
        $result .= "</table>\n";

        $result .= sprintf("<p>Amount owed is <em>%1.1f</em></p>\n", $totalAmount);
        $result .= "<p>You earned <em>{$totalFrequentRenterPoints}</em> frequent renter points</p>";

        return $result;
    }
}
