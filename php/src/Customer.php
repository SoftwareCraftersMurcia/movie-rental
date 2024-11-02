<?php

declare(strict_types=1);

namespace Kata;

use Kata\Printer\Statement;

class Customer
{
    /**
     * @var list<Rental>
     */
    private array $rentals;

    public function __construct(
        public string $name,
    ) {
    }

    public function addRental(Rental $param): void
    {
        $this->rentals[] = $param;
    }

    public function statement(Statement $statement): string
    {
        $statement->addName($this->name);

        $totalAmount = 0;
        $totalFrequentRenterPoints = 0;

        foreach ($this->rentals as $rental) {
            [$amount, $frequentRenterPoints] = $rental->calculateAmount();

            $totalAmount += $amount;
            $totalFrequentRenterPoints += $frequentRenterPoints;

            // show figures for this rental
            $statement->addMovie($rental->getMovie()->title, $amount);
        }

        $statement->addFooter($totalAmount, $totalFrequentRenterPoints);

        return $statement->printStatement();
    }
}
