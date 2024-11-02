<?php

declare(strict_types=1);

namespace Kata\Printer;

interface Statement
{
    public function addName(string $name): void;

    public function addMovie(string $title, float $thisAmount): void;

    public function addFooter(float $totalAmount, int $frequentRenterPoints): void;

    public function printStatement(): string;
}
