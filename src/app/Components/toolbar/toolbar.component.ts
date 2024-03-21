import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/datashare/data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {
  sideNavWidth:any;

  constructor(private sideNavService: DataService) {}
  ngOnInit() {
    this.sideNavService.isSideNavOpen$.subscribe(isOpen => {
      this.sideNavWidth = isOpen ? '16.525vw' : '5vw';
    });
  }
}
