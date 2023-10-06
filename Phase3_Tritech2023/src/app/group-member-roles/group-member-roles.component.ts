import { Component ,OnInit,OnDestroy} from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-group-member-roles',
  templateUrl:'./group-member-roles.component.html' ,
  styleUrls: ['./roles.component.css']
})
export class GroupMemberRolesComponent implements OnInit, OnDestroy {

  constructor( private navbarService : NavbarService) {}

  ngOnInit(): void {
    // hides this navbar
    this.navbarService.hide();
  }

  ngOnDestroy(): void {
    this.navbarService.display();
  }

}
