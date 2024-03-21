import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms';
import { response } from 'express';
import { UserService } from '../../Services/User/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss'
})
export class ResetComponent implements OnInit{
  resetForm!:FormGroup;
  submitted=false;
  token:any;
  constructor(private formBuilder:FormBuilder,private user:UserService,private activeRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.resetForm=this.formBuilder.group({
      password: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')]],
      password1: ['',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')]],
    })
    this.token=this.activeRoute.snapshot.paramMap.get('token');
    //console.log(this.token);
  }
  resetSubmit(){
    this.submitted=true;
    if(this.resetForm.valid){
      let reqData={
        password:this.resetForm.value.password,
        password1:this.resetForm.value.password1
      }
      console.log(reqData);
      this.user.reset(reqData,this.token).subscribe((response:any)=>{
        console.log(response);
      });
    }
  } 
}
