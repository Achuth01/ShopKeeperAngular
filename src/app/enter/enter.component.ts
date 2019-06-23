import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../shared/service/product.service';
import { Product } from '../shared/model/model.product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {

  private product:Product;
  constructor(private productService:ProductService,private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  OnSubmit(form:NgForm){

  this.productService.postProductDetails(this.product).subscribe((data:any)=>{
    if(data){
      this.toastr.success("Product has been added successfully");
      this.resetForm(form);
    }
    else{
      this.toastr.error("There is some error.Please try after some time");
    }
  },
  (error:any)=>{
    this.toastr.error(error.error.message);
  }) 
}

resetForm(form?:NgForm){
  if(form!=null) form.reset();
  this.product={
    productName:null,
    productSerialNumber:null,
    id:null,
    price:null,
    quantity:null
  }
}

}
