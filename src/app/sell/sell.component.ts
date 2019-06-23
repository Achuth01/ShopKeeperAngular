import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/model/customer.model';
import { ProductService } from '../shared/service/product.service';
import { ProductsPurchased } from '../shared/model/productsPurchased.model';
import { CustomerService } from '../shared/service/customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  customer:Customer;
  productNumber:string;
  totalPrice:number;
  constructor(private productService:ProductService,private customerService:CustomerService) { }

  ngOnInit() {
    this.resetForm();
  }

  getProductDetails(){

    this.productService.getProductDetails( this.productNumber).subscribe((product:ProductsPurchased) => {
                    this.customer.productsPurchasedList.push(product);
                    console.log(this.customer.productsPurchasedList);
    });

    this.productNumber = '';
  }

  calculateItemPrice(){
    this.totalPrice = 0;
    this.customer.productsPurchasedList.forEach(product => {
      product.itemPrice = product.price * product.quantitiesSold;
      this.totalPrice = this.totalPrice + product.itemPrice;
    })
  }

  addCustomerDetails(){
    this.customerService.addCustomerDetails(this.customer).subscribe((customerDetails:any) => {
      this.customer = customerDetails;
    });
  }
  

  resetForm(form?:NgForm){
    if(form!=null){
      form.reset();
    }
    this.productNumber='';
    this.totalPrice = 0;
    this.customer = new Customer();
    this.customer.productsPurchasedList = [];
  }

}
