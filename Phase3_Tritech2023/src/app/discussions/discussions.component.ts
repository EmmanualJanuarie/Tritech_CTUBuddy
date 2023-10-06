import { Component } from '@angular/core';

@Component({
  selector: 'app-discussions',
  template: `

  <app-welcome></app-welcome>
<!-- fabrication of footer -->
<footer class="footer">
  <div class="content has-text-centered">
    <span>
      <strong>&copy; 2023 Copyright: </strong> CTU Buddy by <a href="#" routerLink="/aboutus">Tritech</a>
    </span>
  </div>
</footer>
  `,
  styles: [` 
  #hero{
    background-image: url('/assets/img/discussions.gif')!important;
    background-size: cover;
    background-position: center center;
  }

  #importantMsg{
    color:red;
  }


  .title{
    position:absolute;
    font-size:70px;
    font-family:"Gill Sans Extrabold", sans-serif;

    /* ---Positioning os the home page title text ---*/
    bottom:290px;
    left:470px;
  }

  .subtitle{
    position:absolute;
    font-size:25px;

    bottom:50px;
    left:30px;

  }

  #section1{
    background-color:#f5f5f5;
  }

  .navbar{
    display:none;
  }

  @media screen and (max-width:500px){
    #subtitle{
      position:relative;
      top:60px;
      left:0px;
      text-align:justify;
    }

    #hero .title{
      position:relative;
      top:10px;
      left:0px;

      font-size:30px;
    }

    #section1 .card{
      position:relative;
      right:10px;
    }

    .navbar{
      display:none;
    }
  }
  
  `]
})
export class DiscussionsComponent {

}
