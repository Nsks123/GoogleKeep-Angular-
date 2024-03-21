import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from '../../Services/noteservice/note.service';
import { response } from 'express';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent implements OnInit{
  @Output() refresharchiveNotes = new EventEmitter<string>();
  archievList:any
  constructor(private notes:NoteService){}
  ngOnInit(): void {
    this.onSubmit() 
  }
  onSubmit(){
    this.notes.getnotes().subscribe((response:any)=>{
      this.archievList=response.data
      this.archievList=this.archievList.filter((object:any)=>{
        return object.isArchive==true && object.isTrash==false;
      })
      console.log(this.archievList)
      this.refresharchiveNotes.emit(this.archievList)
    })
  }
  receiverRefreshEventArchiveList($event:any){
    console.log("ArchiveList is success"+$event);

    this.refresharchiveNotes.emit()
  }
}
