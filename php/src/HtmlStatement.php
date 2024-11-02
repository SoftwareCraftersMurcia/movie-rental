<?php

declare(strict_types=1);

namespace Kata;

final class HtmlStatement implements Statement
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
        $result = "<h1>Rental Record for <em>{$this->name}</em></h1>\n";
        $result .= "<table>\n";

        foreach ($this->movies as $movie) {
            $result .= sprintf("  <tr><td>%s</td><td>%1.1f</td></tr>\n", $movie['title'], $movie['amount']);
        }
        $result .= "</table>\n";

        $result .= sprintf("<p>Amount owed is <em>%1.1f</em></p>\n", $this->totalAmount);
        $result .= "<p>You earned <em>{$this->frequentRenterPoints}</em> frequent renter points</p>";

        return $result;
    }
}