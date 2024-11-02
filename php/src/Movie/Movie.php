<?php

declare(strict_types=1);

namespace Kata\Movie;

interface Movie
{
    public function calculateAmounts(int $daysRented): float;

    public function calculateFrequentRenterPoints(int $daysRented): int;
}
