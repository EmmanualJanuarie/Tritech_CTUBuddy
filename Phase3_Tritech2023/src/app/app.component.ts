import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   
   <!-- <app-footer></app-footer> -->
    <router-outlet></router-outlet>

    <!-- Notes are placed here-->

    <!-- footer -->
    <app-footer></app-footer>
    <!-- <app-mobile-footer></app-mobile-footer> -->
    
  `,
  styles: []
})
export class AppComponent {
  title = 'Phase2_Tritech2023';
}

