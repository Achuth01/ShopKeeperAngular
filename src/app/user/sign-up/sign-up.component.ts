import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user:User;
  emailPattern = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  constructor(private userService:UserService, private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  OnSubmit(form: NgForm){
    this.userService.registerUser(this.user).subscribe((data:any)=>{
      if(data){
        this.resetForm(form);
        this.toastr.success("you have been registered successfully");
      }
    },
    (error:any)=>{
        this.toastr.error(error.error.message);
    });
  }

  resetForm(form?:NgForm){
    if(form!=null) form.reset();
    this.user = {
      email:'',
      firstName:'',
      lastName:'',
      password:'',
      userName:''
  }

  }

}
