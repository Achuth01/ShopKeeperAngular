import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/model.product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getProductDetails(productNumber:string){
    console.log(productNumber);
    return this.httpClient.get('http://localhost:8080/product/'+ productNumber);
  }

  postProductDetails(product:Product){
    return this.httpClient.post('http://localhost:8080/product/add',product);
  }


}
