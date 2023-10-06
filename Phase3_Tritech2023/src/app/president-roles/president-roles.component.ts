import { Component , OnInit, OnDestroy} from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-president-roles',
  templateUrl: 'president-roles.component.html',

  styleUrls: ['./roles.component.css']
})
export class PresidentRolesComponent implements OnInit, OnDestroy {

  constructor(private navbarService : NavbarService ) {}

    ngOnInit(): void {
      // hide the navbar
      this.navbarService.hide();
    }

    ngOnDestroy(): void {
      // will be called when the navbar is destroyed when being hidden
      this.navbarService.display();
    }


}
