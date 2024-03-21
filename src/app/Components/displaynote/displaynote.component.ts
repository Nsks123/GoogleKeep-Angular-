import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrl: './displaynote.component.scss'
})
export class DisplaynoteComponent implements OnInit{

  constructor(public dialog:MatDialog ){}
  message:any
  ngOnInit(): void {
    
  }
  @Input() notesList:any;
  @Output() refreshUpdateNotes=new EventEmitter<string>()

  editNoteDialogBox(notes:any){
    const dialogbox=this.dialog.open(UpdatenoteComponent,{
      width:'40%',
      height:'auto',
      data:notes
    })
    dialogbox.afterClosed().subscribe((res: any)=>{
      console.log(res);
      this.refreshUpdateNotes.emit(res)
    })
  } 
  receiverRefreshEventIcons($event:any){
    console.log("Done"+$event);
    this.message=$event
    this.refreshUpdateNotes.emit(this.message)
  }
  


}
