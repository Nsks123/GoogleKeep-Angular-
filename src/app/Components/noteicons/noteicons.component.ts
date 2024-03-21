import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { NoteService } from '../../Services/noteservice/note.service';
import { response } from 'express';

@Component({
  selector: 'app-noteicons',
  templateUrl: './noteicons.component.html',
  styleUrl: './noteicons.component.scss'
})
export class NoteiconsComponent implements OnInit {
  @Input() notesObject:any
  @Output() refreshEventIcons=new EventEmitter<string>();
  constructor(private notes:NoteService){}
  ngOnInit(): void {
    
  }
  onDelete(){
    let reqData={
      notesId:this.notesObject.notesId,
    }
    console.log(reqData)
    this.notes.trashNotes(reqData).subscribe((response:any)=>{
      console.log("Note Trashed Successfully",response);
      this.refreshEventIcons.emit(response);
    })
  }
  onArchiev(){
    let reqData={
      notesId: this.notesObject.notesId
    }
    console.log(reqData)
    this.notes.archievNotes(reqData).subscribe((response:any)=>{
      console.log(response)
      this.refreshEventIcons.emit(response);
      
    })
  }
  colorArray:Array<any>=[
    {code:'#FF6347',name:'Tomato'},
    {code:'#FF4500',name:'OrangeRed'},
    {code:'#FFFF00',name:'yellow'},
    {code:'#7FFFD4',name:'Aquamarine'},
    {code:'#ffffff',name:'white'},
    {code:'#D3D3D3',name:'grey'},
    {code:'#ADD8E6',name:'LightBlue'},
    {code:'#800000',name:'maroon'},
    {code:'#00FF00',name:'lime'},
    {code:'#FFC0CB0',name:'pink'},
    {code:'#FFC0CB',name:'Aqua'},
    {code:'#00FFFF',name:'cyan'},
    {code:'#3EB489',name:'mint'},

  ];
  selectcolor(colors:any){
    let reqData={
      color:colors.name,
      notesId:this.notesObject.notesId
    }
    this.notes.notescolor(reqData).subscribe((response:any)=>{
      console.log(response)
      this.refreshEventIcons.emit(response);
    })
  }
 
  
  
  
  

}
