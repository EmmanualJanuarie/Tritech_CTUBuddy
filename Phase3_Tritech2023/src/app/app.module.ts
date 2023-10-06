import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TimetableComponent } from './timetable/timetable.component';
import { FormsModule } from '@angular/forms';
import { ShareResourcesComponent } from './share-resources/share-resources.component';
import {ShareResourcesService} from './shared/share-resources.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { DiscussionsComponent } from './discussions/discussions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {HttpClientModule} from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OrganogramComponent } from './organogram/organogram.component';
import { VpRolesComponent } from './vp-roles/vp-roles.component';
import { GroupMemberRolesComponent } from './group-member-roles/group-member-roles.component';
import { PresidentRolesComponent } from './president-roles/president-roles.component'





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    TimetableComponent,
    ShareResourcesComponent,
    DiscussionsComponent,
    AboutUsComponent,
    ContactUsComponent,
    ChatComponent,
    JoinRoomComponent,
    WelcomeComponent,
    OrganogramComponent,
    VpRolesComponent,
    GroupMemberRolesComponent,
    PresidentRolesComponent
   
   
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireStorageModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxDropzoneModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [ShareResourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
