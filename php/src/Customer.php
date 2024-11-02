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

    private string $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    public function addRental(Rental $param): void
    {
        $this->rentals[] = $param;
    }

    public function statement(Statement $statement): string
    {
        $statement->addName($this->name);

        $totalAmount = 0;
        $frequentRenterPoints = 0;

        foreach ($this->rentals as $rental) {
            $movie = $rental->getMovie();
            $movie->calculateAmounts($rental->getDaysRented());

            $amount = $movie->amount;
            $frequentRenterPoints += $movie->frequentRenterPoints;

            // show figures for this rental
            $statement->addMovie($movie->title, $amount);
            $totalAmount += $amount;
        }

        $statement->addFooter($totalAmount, $frequentRenterPoints);

        return $statement->printStatement();
    }
}
