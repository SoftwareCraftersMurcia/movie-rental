<?php

declare(strict_types=1);

namespace Kata;

interface Statement
{
    public function addName(string $name): void;

    public function addMovie(string $title, float $thisAmount): void;

    public function addFooter(float $totalAmount, int $frequentRenterPoints): void;

    public function printStatement(): string;
}
