import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TimetableComponent } from './timetable/timetable.component';
import { ShareResourcesComponent } from './share-resources/share-resources.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChatComponent } from './chat/chat.component';
import { PresidentRolesComponent } from './president-roles/president-roles.component';
import { GroupMemberRolesComponent } from './group-member-roles/group-member-roles.component';
import { VpRolesComponent } from './vp-roles/vp-roles.component';

const routes: Routes = [
  {
    // routing for home page
    path:'home',
    component:HomeComponent
  },

  {
    // routing for  timetable page
    path:'timetable',
    component:TimetableComponent
  },

  {
    // routing for share resources page
    path:'share-resources',
    component:ShareResourcesComponent
  },

  {
    // routing for discussions page
    path:'discussions',
    component:DiscussionsComponent
  },

  {
    // Routing for aboutus page
    path:'aboutus',
    component:AboutUsComponent
  },

  {
    // routing for contact us page
    path:'contactus',
    component:ContactUsComponent
  },

  {
    // routing for join room page
    path:'join-room',
    component:JoinRoomComponent
  },

  {
    // routing for welcome page
    path:'welcome',
    component:WelcomeComponent
  },

  {
    // routing for chat page
    path:'chat',
    component:ChatComponent
  },

  {
    // routing for president roles
    path: 'president',
    component: PresidentRolesComponent
  },
  {
    // routing for Group member roles
    path: 'groupmember',
    component:GroupMemberRolesComponent
  },

  {
    // routing for vice president
    path: 'vicepresident',
    component:VpRolesComponent
  }



  // ------------------the code below caused the website to load at login-form-------------------
  // ,
  // {
  //   //routing if path is blank
  //   path:'',
  //   redirectTo:'join-room',
  //   pathMatch:'full'
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
