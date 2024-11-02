<?php

declare(strict_types=1);

namespace Kata\Printer;

interface Statement
{
    public function printStatement(): string;
}
