import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { DataService } from '../../Services/datashare/data.service';
interface SideNavToggle{
  screenwidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> =new EventEmitter();
  constructor(private sideNavService: DataService) {}
  collapsed=false;
  screenwidth=0;
  navData = navbarData;
  toggleCollapse():void{
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenwidth:this.screenwidth});
    this.sideNavService.toggleSideNav();
  }
}
