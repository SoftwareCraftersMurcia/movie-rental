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

    public function movieTitle(): string
    {
        return $this->movie->title;
    }

    public function calculateAmount(): float
    {
        return $this->movie->calculateAmounts($this->daysRented);
    }

    public function calculateFrequentRenterPoints(): int
    {
        return $this->movie->calculateFrequentRenterPoints($this->daysRented);
    }
}
