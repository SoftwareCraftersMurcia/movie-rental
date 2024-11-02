<?php

declare(strict_types=1);

namespace Kata\Movie;

abstract class Movie
{
    private string $title;

    public function __construct(string $title)
    {
        $this->title = $title;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    abstract public function calculateAmounts(int $daysRented): void;
}
