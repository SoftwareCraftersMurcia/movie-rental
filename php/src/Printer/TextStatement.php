<?php

declare(strict_types=1);

namespace Kata\Printer;

final class TextStatement implements Statement
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

    private string $name;

    private array $movies = [];

    private float $totalAmount;

    private int $frequentRenterPoints;

    public function addName(string $name): void
    {
        $this->name = $name;
    }

    public function addMovie(string $title, float $thisAmount): void
    {
        $this->movies[] = [
            'title' => $title,
            'amount' => $thisAmount
        ];
    }

    public function addFooter(float $totalAmount, int $frequentRenterPoints): void
    {
        $this->totalAmount = $totalAmount;
        $this->frequentRenterPoints = $frequentRenterPoints;
    }

    public function printStatement(): string
    {
        $result = "Rental Record for " . $this->name . "\n";

        foreach ($this->movies as $movie) {
            $result .= sprintf("\t%s\t%1.1f\n", $movie['title'], $movie['amount']);
        }

        $result .= sprintf("Amount owed is %1.1f\n", $this->totalAmount);
        $result .= "You earned " . $this->frequentRenterPoints . " frequent renter points";

        return $result;
    }
}
