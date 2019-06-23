import { ProductsPurchased } from './productsPurchased.model';

export class Customer{
    id:string;
    customerName:string;
    customerAddress:string;
    purchasedDate:string;
    invoiceNumber:string;
    productsPurchasedList:ProductsPurchased[];

    constructor(){};
}