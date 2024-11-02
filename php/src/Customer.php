<?php

declare(strict_types=1);

namespace Kata;

use Kata\Movie\Movie;
use Kata\Movie\NewReleaseMovie;
use Kata\Movie\RegularMovie;
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
            $thisAmount = 0;

            // determine amounts for rental line
            switch ($rental->getMovie()->getPriceCode()) {
                case Movie::REGULAR:
                    $regularMovie = new RegularMovie($rental->getMovie()->getTitle(), $rental->getMovie()->getPriceCode());
                    $regularMovie->calculateAmounts($rental->getDaysRented());

                    $thisAmount += $regularMovie->amount;
                    $frequentRenterPoints += $regularMovie->frequentRenterPoints;

                    break;
                case Movie::NEW_RELEASE:
                    $regularMovie = new NewReleaseMovie($rental->getMovie()->getTitle(), $rental->getMovie()->getPriceCode());
                    $regularMovie->calculateAmounts($rental->getDaysRented());

                    $thisAmount += $regularMovie->amount;
                    $frequentRenterPoints += $regularMovie->frequentRenterPoints;

                    break;
                case Movie::CHILDREN:
                    $thisAmount += 1.5;
                    if ($rental->getDaysRented() > 3) {
                        $thisAmount += ($rental->getDaysRented() - 3) * 1.5;
                    }
                    // add frequent renter points
                    $frequentRenterPoints++;
                    break;
            }


            // show figures for this rental
            $statement->addMovie($rental->getMovie()->getTitle(), $thisAmount);
            $totalAmount += $thisAmount;
        }

        $statement->addFooter($totalAmount, $frequentRenterPoints);

        return $statement->printStatement();
    }
}
