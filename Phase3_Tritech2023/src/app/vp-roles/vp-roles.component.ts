import { Component , OnInit, OnDestroy} from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-vp-roles',
  templateUrl: './vp-roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class VpRolesComponent implements OnInit, OnDestroy{

  constructor( private navbarService : NavbarService){}
   
  ngOnInit(): void {
    this.navbarService.hide();
  }

  ngOnDestroy(): void {
    this.navbarService.display();
  }

}
