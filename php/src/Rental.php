<?php

declare(strict_types=1);

namespace Kata;

use Kata\Movie\Movie;

final class Rental
{
    private Movie $movie;

    private int $daysRented;

    public function __construct(Movie $movie, int $daysRented)
    {
        $this->movie = $movie;
        $this->daysRented = $daysRented;
    }

    public function getDaysRented(): int
    {
        return $this->daysRented;
    }

    public function getMovie(): Movie
    {
        return $this->movie;
    }

    public function calculateAmount(): array
    {
        $movie = $this->getMovie();
        $movie->calculateAmounts($this->getDaysRented());

        return [$movie->amount, $movie->frequentRenterPoints];
    }
}
