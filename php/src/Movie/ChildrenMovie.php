<?php

declare(strict_types=1);

namespace Kata\Movie;

final class ChildrenMovie extends Movie
{
    public float $amount = 0;

    public int $frequentRenterPoints = 0;

    public function calculateAmounts(int $daysRented): void
    {
        $this->amount += 1.5;
        if ($daysRented > 3) {
            $this->amount += ($daysRented - 3) * 1.5;
        }

        // add frequent renter points
        $this->frequentRenterPoints++;
    }
}
