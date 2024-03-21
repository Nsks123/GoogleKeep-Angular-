import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.scss'
})
export class ForgetComponent implements OnInit{
  forgotForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private userService :UserService){}
  ngOnInit(): void {
    this.forgotForm=this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      
      
    })
    
  }
  ForgotSubmit(){let reqData={
    email:this.forgotForm.value.email,
  }
  console.log(reqData);
  this.userService.forgetPassword(reqData).subscribe((res:any)=>{
    console.log(res);
  })
 }
}

