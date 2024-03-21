import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private isSideNavOpenSubject = new BehaviorSubject<boolean>(false);
  isSideNavOpen$ = this.isSideNavOpenSubject.asObservable();

  constructor() {}

  toggleSideNav() {
    this.isSideNavOpenSubject.next(!this.isSideNavOpenSubject.value);
  }
}
