<?php

declare(strict_types=1);

namespace Kata;

final class Customer
{
    /**
     * @var list<Rental>
     */
    private array $rentals;

    public function __construct(
        public readonly string $name,
    ) {
    }

    public function addRental(Rental $param): void
    {
        $this->rentals[] = $param;
    }

    public function getRentals(): array
    {
        return $this->rentals;
    }
}
