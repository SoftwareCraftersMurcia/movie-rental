<?php

declare(strict_types=1);

namespace Kata\Movie;

abstract class Movie
{
    public const REGULAR = 0;
    public const NEW_RELEASE = 1;
    public const CHILDREN = 2;

    private string $title;
    private int $priceCode;

    public function __construct(string $title, int $priceCode)
    {
        $this->title = $title;
        $this->priceCode = $priceCode;
    }

    public function getPriceCode(): int
    {
        return $this->priceCode;
    }

    public function setPriceCode(int $arg): void
    {
        $this->priceCode = $arg;
    }

    public function getTitle(): string
    {
        return $this->title;
    }
}
