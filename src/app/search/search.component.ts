import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/model.product';
import { NgForm } from '@angular/forms';
import { ProductService } from '../shared/service/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private productService:ProductService,private toastr:ToastrService) { }

  productSerialNumber:string;
  productList:Product[];

  ngOnInit() {
    this.resetForm();
  }


  OnSubmit(form:NgForm){
    this.productService.getProductDetails( this.productSerialNumber).subscribe((data:any) => {
                    this.productList = data;
    },
    (error:any)=>{
      this.toastr.error(error.error.message);
      this.resetForm(form);
    })
  }

  resetForm(form?:NgForm){
    if(form!=null) form.reset();
    this.productSerialNumber = '';
    this.productList = [];
  }


}
