 import { Component, EventEmitter, OnInit, Output } from '@angular/core';
 import { NoteiconsComponent } from '../noteicons/noteicons.component';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../../Services/noteservice/note.service';
@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrl: './createnote.component.scss'
})
export class CreatenoteComponent implements OnInit{
  @Output() refreshEventCreate = new EventEmitter<string>();
  noteForm!:FormGroup;
  submitted=false;
  display:boolean=true;
  display1:boolean=true;
  constructor(private formBuilder:FormBuilder,private notes:NoteService){}
  ngOnInit(): void {
    this.noteForm=this.formBuilder.group({
      Title: ['',[Validators.required]],
      discription: ['',[Validators.required]]
    })
  }
  Notesubmit(){
    this.submitted=true;
    if(this.noteForm.valid){
      let reqData={
        title: this.noteForm.value.Title,
        description: this.noteForm.value.discription
      }
      console.log(reqData);
      this.notes.addNotes(reqData).subscribe((res:any)=>{
        console.log(res);
       this.refreshEventCreate.emit(res)
      });
    }
    this.display=true;
  }
}





