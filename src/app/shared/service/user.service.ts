import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  registerUser(user:User){
    const body:User={
      userName:user.userName,
      password:user.password,
      email:user.email,
      firstName:user.firstName,
      lastName:user.lastName
    }
    return this.httpClient.post("http://localhost:8080/user/register",body);
  }

  userAuthentication(userName:string,password:string){
   
    return this.httpClient.post("http://localhost:8080/user/login?userName="+userName+"&password="+password,null);

  }

}
