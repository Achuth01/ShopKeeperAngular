import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/service/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userName:string;
  password:string;
  isLoginError:boolean;

  constructor(private userService:UserService, private toastr:ToastrService, private router:Router) { }

  ngOnInit() {
    this.resetForm();
  }


  OnSubmit(form:NgForm){
       this.userService.userAuthentication(this.userName,this.password).subscribe((data:any)=>{
           this.resetForm(form);
           localStorage.setItem('token',data.token);
           this.router.navigate(['/home']);
       },
       (err:HttpErrorResponse)=>{
          this.isLoginError = true;
       })
  }

  resetForm(form? :NgForm){
    this.userName = '';
    this.password = '';
  }

}
