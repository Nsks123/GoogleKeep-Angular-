import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any

  constructor(private httpservice:HttpService) { }
  register(reqData:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    
    return this.httpservice.postService('https://localhost:44364/api/User/Reg',reqData,false,header)
  }
  login(reqData:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }

    return this.httpservice.postService('https://localhost:44364/api/User/log',reqData,false,header)
  }
  forgetPassword(reqData:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpservice.postService('https://localhost:44364/api/User/Forgot?Email='+reqData.email,reqData,false,header)
  }
  reset(reqData:any,token:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+token


      })
    }
    return this.httpservice.postServiceReset('https://localhost:44364/api/User/Reset',reqData,true,header)
  }
}
