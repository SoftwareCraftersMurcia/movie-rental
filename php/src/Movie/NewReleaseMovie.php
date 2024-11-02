<?php

declare(strict_types=1);

namespace Kata\Movie;

final readonly class NewReleaseMovie implements Movie
{
    public function __construct(
        public string $title,
    ) {
    }

    public function calculateAmounts(int $daysRented): float
    {
        return $daysRented * 3;
    }

    public function calculateFrequentRenterPoints(int $daysRented): int
    {
        // add bonus for a two day new release rental
        if ($daysRented > 1) {
            return 2;
        }

        return 1;
    }
}
