import {Customer} from "./customer";
import {Rental} from "./rental";

export interface Formatter {
    format(customer: Customer, rentals: Rental[]): string;
}