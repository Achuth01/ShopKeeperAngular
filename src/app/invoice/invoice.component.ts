import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/model/customer.model';
import { CustomerService } from '../shared/service/customer.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  customerDetails: Customer;
  invoiceNumber: string;

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
  }


  getInvoiceDetails(){
    this.customerService.getCustomerDetails(this.invoiceNumber, (customerDetails:any) => {
    this.customerDetails = customerDetails;
    console.log(this.customerDetails);
    });
  }
}
