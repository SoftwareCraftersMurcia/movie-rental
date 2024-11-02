<?php

declare(strict_types=1);

namespace Kata;

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

    public function statement(TextStatement $statement): string
    {
        $statement->addName($this->name);

        $totalAmount = 0;
        $frequentRenterPoints = 0;

        foreach ($this->rentals as $rental) {
            $thisAmount = 0;

            // determine amounts for rental line
            switch ($rental->getMovie()->getPriceCode()) {
                case Movie::REGULAR:
                    $thisAmount += 2;
                    if ($rental->getDaysRented() > 2) {
                        $thisAmount += ($rental->getDaysRented() - 2) * 1.5;
                    }
                    break;
                case Movie::NEW_RELEASE:
                    $thisAmount += $rental->getDaysRented() * 3;
                    break;
                case Movie::CHILDREN:
                    $thisAmount += 1.5;
                    if ($rental->getDaysRented() > 3) {
                        $thisAmount += ($rental->getDaysRented() - 3) * 1.5;
                    }
                    break;
            }

            // add frequent renter points
            $frequentRenterPoints++;
            // add bonus for a two day new release rental
            if (($rental->getMovie()->getPriceCode() === Movie::NEW_RELEASE) && $rental->getDaysRented() > 1) {
                $frequentRenterPoints++;
            }

            // show figures for this rental
            $statement->addMovie($rental->getMovie()->getTitle(), $thisAmount);
            $totalAmount += $thisAmount;
        }

        $statement->addFooter($totalAmount, $frequentRenterPoints);

        return $statement->printStatement();
    }
}