import { Component, ElementRef , AfterViewInit, OnDestroy} from '@angular/core';
import { NavbarService } from '../navbar.service';
import { Subscription } from 'rxjs';

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      if($target !== null){
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      }
     

    });
  });

});



@Component({
  selector: 'app-footer',
  template: `
  
        <!-- nav bar menu -->
        <div class="nav" id="nav">

          <nav  *ngIf="showNavbar"  class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item"  routerLink="home">
                <img src='/assets/img/logo.png'>
              </a>

              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                
              </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item"  routerLink="home">
                  Home
                </a>

                <a class="navbar-item"  routerLink="timetable">
                  Timetable
                </a>

                <a class="navbar-item"  routerLink="share-resources">
                  Share Resourses
                </a>
          
            
                <a class="navbar-item"  routerLink="discussions">
                  Discussions
                </a>

              
                <a class="navbar-item"  routerLink="aboutus">
                  About Us
                </a>


                <a class="navbar-item"  routerLink="contactus">
                  Contact Us
                </a>
              </div>
            </div>
          </nav>
        </div>
        
        
        
  `,
  styles: [`

.navbar{
 position:fixed;
 width:100%;
 top:96%;
}

#logo{
    object-fit:contain;
    top:0px;
    max-width: 100%;
    height: auto;

  }



  
@media screen and (max-width:500px)
  {
   
  #logo{
    object-fit:cover;
    top:20px;
    max-width:800px;
    height:auto;  
  }

  .navbar{
    position:fixed;
    max-width:100%;
    top:0px;
    
  
}

#navbarBasicExample{
  position:relative;
  top:0px;
}
  }

  `
  ]
})
export class FooterComponent implements AfterViewInit, OnDestroy {

  showNavbar:boolean = true;
  subscription: Subscription;

    constructor(private elRef: ElementRef, private navbarService : NavbarService){
      this.subscription = this.navbarService.showNavbar.subscribe((value)=>{
        this.showNavbar = value;
      });

    }

    ngAfterViewInit(): void {
        // Get all "navbar-burger" elements
    const navbarBurgers = this.elRef.nativeElement.querySelectorAll('.navbar-burger');
    

    // Add a click event on each of them
   navbarBurgers.forEach((el: HTMLElement) => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset['target'];
        const targetElement = document.getElementById('target');

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        if(targetElement)
        targetElement.classList.toggle('is-active');
      });
    });

    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
