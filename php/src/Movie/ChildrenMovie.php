<?php

declare(strict_types=1);

namespace Kata\Movie;

final readonly class ChildrenMovie implements Movie
{
    public function __construct(
        public string $title,
    ) {
    }

    public function calculateAmounts(int $daysRented): float
    {
        $amount = 1.5;
        if ($daysRented > 3) {
            $amount += ($daysRented - 3) * 1.5;
        }

        return $amount;
    }

    public function calculateFrequentRenterPoints(int $daysRented): int
    {
        return 1;
    }
}
