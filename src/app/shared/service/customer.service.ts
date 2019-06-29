import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  addCustomerDetails(customerDetails:Customer){
    return this.httpClient.post('http://localhost:8080/customerDetails/add',customerDetails,{headers:new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token'),'Content-Type': 'application/json'})});
  }

  getCustomerDetails(invoiceNumber:string){
    return this.httpClient.get('http://localhost:8080/getCustomerDetails/'+ invoiceNumber,{headers:new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token'),'Content-Type': 'application/json'})});
  }

}
