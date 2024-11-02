<?php

declare(strict_types=1);

namespace Kata\Movie;

final class RegularMovie extends Movie
{
    public float $amount = 0;

    public int $frequentRenterPoints = 0;

    public function calculateAmounts(int $daysRented): void
    {
        $this->amount += 2;

        if ($daysRented > 2) {
            $this->amount += ($daysRented - 2) * 1.5;
        }

        // add frequent renter points
        $this->frequentRenterPoints++;
    }
}
