<?php

declare(strict_types=1);

namespace Kata;

use Kata\Movie\Movie;

final readonly class Rental
{
    public function __construct(
        private Movie $movie,
        private int $daysRented
    ) {
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
