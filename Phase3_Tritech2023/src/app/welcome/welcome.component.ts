import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl:'welcome.component.html',
  styles: [`
  .container{
    max-width: 100%;
    width:100;
   
    height:100vh;
    margin: auto;

    /* positioning of button */
    position:relative;
    left:17%;
  }

  .center{
    position:absolute;
    top:50%;
    transform:translateY(-50%);
  }

  body{
    background-image: url('/assets/img/welcome.webp');
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
  }

  html{
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .navbar-menu{
    text-decoration:none;
  }

  .button{
    width:150%;
    border:1px solid white;
    background-color:#198754;
    color:white;
  }

  .button:hover{
    border:1px solid #198754;
  }
  
  .text{
    font-weight:bold;
    font-size:40px;
  }

  .text-sub{
    font-weight:bold;
    font-size:20px;
  }
  @media screen and (max-width:414px){
    .container{
      position:relative;
      left:0px;
    }

    .button{
    width:100%;
  
  }

  .card{
    position:relative;
    left:5px;
  }

  .text, .text-sub{
    position:relative;
    left:5px;

  }


  }
  `
  ]
})
export class WelcomeComponent {

}
