<?php

declare(strict_types=1);

namespace Kata\Movie;

abstract class Movie
{
    public float $amount = 0;

    public int $frequentRenterPoints = 0;

    public function __construct(
        public readonly string $title,
    ) {
    }

    abstract public function calculateAmounts(int $daysRented): void;
}
