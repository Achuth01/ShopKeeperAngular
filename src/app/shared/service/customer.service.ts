import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  addCustomerDetails(customerDetails:Customer){
    return this.httpClient.post('http://localhost:8080/customerDetails/add',customerDetails);
  }

  getCustomerDetails(invoiceNumber:string, cb: (customerDetails:any) => any){
    this.httpClient.get('http://localhost:8080/getCustomerDetails/'+ invoiceNumber).subscribe( (response) => {
      console.log(response);
      cb(response);
    });
  }

}
