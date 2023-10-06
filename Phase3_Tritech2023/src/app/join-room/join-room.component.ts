import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-join-room',
  templateUrl:'./join-room.component.html',
  styles: [`
  .btn-color{
    background-color: #0e1c36;
    color: #fff;
  }

  .profile-image-pic{
    height:200px;
    width: 200px;
    object-fit: cover;
  }

  .cardbody-color{
    background: rgba(76, 175, 80, 0);
  }

  a{
    text-decoration:none;
  }

  body{
    background-image: url('/assets/img/login-form.webp');
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .container{
    max-width: 100%;
    width:100;
   
    height:100vh;
    margin: auto;
  }

  .row{
    position:relative;
    top:10%;
  }

  html{
    overflow-x: hidden;
    overflow-y: hidden;
  }
  `
  ]
})
export class JoinRoomComponent implements OnInit, OnDestroy{

  constructor(private navbarService : NavbarService){}

  joinRoomForm!: FormGroup;
  fb = inject(FormBuilder);
  router = inject(Router);
  chatService = inject(ChatService);

    ngOnInit(): void {
      this.joinRoomForm = this.fb.group({
        user:['', Validators.required],
        room: ['', Validators.required]
      });

      // hide the nav bar
      this.navbarService.hide();
    }

    ngOnDestroy(): void {
      // distroys the nav bar
      this.navbarService.display();
      
    }

    joinRoom(){
      const {user, room} = this.joinRoomForm.value;
      sessionStorage.setItem("user", user);
      sessionStorage.setItem("room", room);

      // testing
      console.log(sessionStorage.setItem('user', user));
      
      this.chatService.joinRoom(user, room)
      .then(()=>{
        this.router.navigate(['chat'])
      }).catch((err)=>{
        console.log(err);
        
      })
      
    }
}
