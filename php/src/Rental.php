<?php

declare(strict_types=1);

namespace Kata;

use Kata\Movie\Movie;

final class Rental
{
    private mixed $movie;
    private mixed $daysRented;

    public function __construct(Movie $movie, int $daysRented)
    {
        $this->movie = $movie;
        $this->daysRented = $daysRented;
    }

    public function getDaysRented()
    {
        return $this->daysRented;
    }

    public function getMovie()
    {
        return $this->movie;
    }
}
