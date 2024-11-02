<?php

declare(strict_types=1);

namespace Kata\Movie;

final readonly class RegularMovie implements Movie
{
    public function __construct(
        public string $title,
    ) {
    }

    public function calculateAmounts(int $daysRented): float
    {
        $amount = 2;
        if ($daysRented > 2) {
            $amount += ($daysRented - 2) * 1.5;
        }

        return $amount;
    }

    public function calculateFrequentRenterPoints(int $daysRented): int
    {
        return 1;
    }
}
