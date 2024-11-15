import {Customer} from "./customer";

export interface Formatter {
    format(customer: Customer): string;
}