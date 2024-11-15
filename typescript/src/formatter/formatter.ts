import {Customer} from "../customer";
import {Rentals} from "../rentals";

export interface Formatter {
    format(customer: Customer, rentals: Rentals): string;
}