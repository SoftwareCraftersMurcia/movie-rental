<?php

declare(strict_types=1);

namespace Kata\Movie;

final class NewReleaseMovie extends Movie
{
    public float $amount = 0;

    public int $frequentRenterPoints = 0;

    public function calculateAmounts(int $daysRented): void
    {
        $this->amount += $daysRented * 3;

        // add bonus for a two day new release rental
        if ($daysRented > 1) {
            $this->frequentRenterPoints++;
        }

        // add frequent renter points
        $this->frequentRenterPoints++;
    }
}
