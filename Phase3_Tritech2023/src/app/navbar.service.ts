import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  showNavbar: BehaviorSubject<boolean>;

  constructor() { 
    this.showNavbar = new BehaviorSubject(true);
  }

  // method to hide navbar

  hide(){
    this.showNavbar.next(false);
  }

  // method to display navbar
  display(){
    this.showNavbar.next(true);
  }
}
