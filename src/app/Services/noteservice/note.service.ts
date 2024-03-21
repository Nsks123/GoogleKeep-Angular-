import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  token: any;
  constructor(private httpService: HttpService) { this.token = localStorage.getItem('token')}

  addNotes(reqData:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postServiceReset('https://localhost:44364/api/Note/Add',reqData,true,header)
  }
  getnotes(){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:44364/api/Note/GetNote',true,header);
  }
  updatenote(reqData:any,notesId:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:44364/api/Note/Update?NotesId='+notesId,reqData,true,header);
  }
  archievNotes(reqData:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:44364/api/Note/Archive?NotesId='+reqData.notesId,{},true,header);
 

  }
  notescolor(reqData:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService("https://localhost:44364/api/Note/Colour?NotesId="+reqData.notesId+"&Colour="+reqData.color,{},true,header);
 

  }
  trashNotes(reqData:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:44364/api/Note/Archive?NotesId='+reqData.notesId,{},true,header);
  }
}
