import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/model.product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 

  constructor(private httpClient:HttpClient) { }

  getProductDetails(productNumber:string){
    return this.httpClient.get('http://localhost:8080/product/'+ productNumber,{headers:new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token'),'Content-Type': 'application/json'})});
  }

  postProductDetails(product:Product){
    return this.httpClient.post('http://localhost:8080/product/add',product,{headers:new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token'),'Content-Type': 'application/json'})}); 
  }


}
