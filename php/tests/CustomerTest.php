<?php

declare(strict_types=1);

namespace KataTests;

use Kata\Customer;
use Kata\Movie\ChildrenMovie;
use Kata\Movie\NewReleaseMovie;
use Kata\Movie\RegularMovie;
use Kata\Printer\HtmlStatement;
use Kata\Printer\TextStatement;
use Kata\Rental;
use PHPUnit\Framework\TestCase;

final class CustomerTest extends TestCase
{
    public function test_customer_txt_statement(): void
    {
        $customer = $this->createCustomerWithRentals();
        $textStatement = new TextStatement($customer);

        $expected = <<<TXT
Rental Record for Bob
\tJaws\t2.0
\tGolden Eye\t3.5
\tShort New\t3.0
\tLong New\t6.0
\tBambi\t1.5
\tToy Story\t3.0
Amount owed is 19.0
You earned 7 frequent renter points
TXT;

        $this->assertSame($expected, $textStatement->printStatement());
    }

    public function test_customer_html_statement(): void
    {
        $customer = $this->createCustomerWithRentals();
        $htmlStatement = new HtmlStatement($customer);

        $expected = <<<TXT
<h1>Rental Record for <em>Bob</em></h1>
<table>
  <tr><td>Jaws</td><td>2.0</td></tr>
  <tr><td>Golden Eye</td><td>3.5</td></tr>
  <tr><td>Short New</td><td>3.0</td></tr>
  <tr><td>Long New</td><td>6.0</td></tr>
  <tr><td>Bambi</td><td>1.5</td></tr>
  <tr><td>Toy Story</td><td>3.0</td></tr>
</table>
<p>Amount owed is <em>19.0</em></p>
<p>You earned <em>7</em> frequent renter points</p>
TXT;

        $this->assertSame($expected, $htmlStatement->printStatement());
    }

    private function createCustomerWithRentals(): Customer
    {
        $customer = new Customer('Bob');
        $customer->addRental(new Rental(new RegularMovie('Jaws'), 2));
        $customer->addRental(new Rental(new RegularMovie('Golden Eye'), 3));
        $customer->addRental(new Rental(new NewReleaseMovie('Short New'), 1));
        $customer->addRental(new Rental(new NewReleaseMovie('Long New'), 2));
        $customer->addRental(new Rental(new ChildrenMovie('Bambi'), 3));
        $customer->addRental(new Rental(new ChildrenMovie('Toy Story'), 4));

        return $customer;
    }
}
