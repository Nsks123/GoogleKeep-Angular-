import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../Services/noteservice/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.scss'
})
export class TrashComponent implements OnInit{
  deleteList:any
  constructor(private notes:NoteService){}
  ngOnInit(): void {
    this.onSubmit()
    
  }
  onSubmit(){
    this.notes.getnotes().subscribe((response:any)=>{
      this.deleteList=response.data
      this.deleteList=this.deleteList.filter((object:any)=>{
        return  object.isTrash==true;
      })
      console.log(this.deleteList)
    })
  }

}
