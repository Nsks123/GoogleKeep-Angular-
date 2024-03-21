import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from '../../Services/noteservice/note.service';
import { response } from 'express';

@Component({
  selector: 'app-getnote',
  templateUrl: './getnote.component.html',
  styleUrl: './getnote.component.scss'
})
export class GetnoteComponent implements OnInit{
  @Output() refreshEventArchiveList=new EventEmitter<string>();
  notesArray:any;
  constructor(private notes:NoteService){}
  ngOnInit(): void {
    this.Notesubmit()
    
  }
  Notesubmit() {
   this.notes.getnotes().subscribe((res:any)=>{
    console.log(res);
    this.notesArray=res.data;
    this.notesArray=this.notesArray.filter((object:any)=>{
      return object.isArchive==false;
    })
    this.notesArray=this.notesArray.filter((object:any)=>{
      return object.isTrash==false;
    })
    this.notesArray.reverse()
    this.refreshEventArchiveList.emit(res)
   
    
    
   })
  }
  receiverRefreshEventCreate($event:any){
    console.log("Create to GetAllNotes"+$event);
    this.Notesubmit()
  }
  displayNotes($event:any){
    console.log("Update to GetAllNotes"+$event);
    this.Notesubmit()
  }
  
  

}
