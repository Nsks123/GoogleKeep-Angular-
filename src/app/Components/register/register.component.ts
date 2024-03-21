import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  registerForm!:FormGroup;
  constructor(private formbuilder:FormBuilder,private userService: UserService){}
  ngOnInit(): void {
    this.registerForm=this.formbuilder.group({

       firstname: ['',[Validators.required,Validators.pattern('[A-Z][a-z]{2,}')]],       
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')]],
        
    })
    
  }
  RegisterSubmit(){
    let reqData={
      FullName:this.registerForm.value.firstname,
      LastName:this.registerForm.value.LastName,
      Email:this.registerForm.value.email,
      
      Password:this.registerForm.value.Password
    }
    console.log(reqData);
    this.userService.register(reqData).subscribe((res:any)=>{
      console.log(res);
    })
  }
  
}
