import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  template: `
   <section class="hero is-bold is-fullheight" id="contactUs" style="background-color:gray;">
  <div class="hero-body">
    <div class="container">

      <div class="columns">
        <div class="column">
        <p class="title">
          Contact Us
        </p>
        <span style="color:white;">
        Speak to one of our consultants at Our campus:<br>
        26 Worraker St, Newton Park, Gqeberha, 6045
        Give us a call +27(0) 437 289789<br>
        Drop a email on: info@tritech.com</span>

        </div>
        <div class="column">
          <!-- form frabrication -->

          <section class="section">
            <div class="container">
              <!-- Contact form -->
              <form (ngSubmit)="submitForm()" #contactForm="ngForm">
                <!-- firstname -->
                <div class="field">
                  <label class="label">FIRST NAME</label>
                  <input type="text" name="firstname" class="input" [(ngModel)] ='firstname' #firstnameInput="ngModel" required>
                </div>

                <div class="help is-error" *ngIf="firstnameInput.invalid && firstnameInput.touched" style="color:red;">
                  Your firstname is required.
                </div>

                <!-- last name -->
                <div class="field">
                  <label class="label" style="position:relative; right:234px;">LAST NAME</label>
                  <input type="text" name="lastname" class="input"  [(ngModel)] ='lastname' #lastnameInput="ngModel" required>
                </div>

                <div class="help is-error" *ngIf="lastnameInput.invalid && lastnameInput.touched" style="color:red;">
                  Your lastname is required.
                </div>

                <!-- email -->
                <div class="field">
                  <label class="label" style="position:relative; right:254px;">EMAIL</label>
                  <input type="email" name="email" class="input"  [(ngModel)] ='email' #emailInput="ngModel" required>
                </div>

                <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched" style="color:red;">
                  Your email is required.
                </div>

                <!-- contact info -->
                <div class="field">
                  <label class="label" style="position:relative; right:240px;">CONTACT</label>
                  <input type="text" name="contact" class="input"  [(ngModel)] ='contact'  #contactInput="ngModel" required>
                </div>

                <div class="help is-error" *ngIf="contactInput.invalid && contactInput.touched" style="color:red;">
                  Your contact information is required.
                </div>

                <!-- Campus -->
                <div class="field">
                  <label class="label" style="position:relative; right:244px;">CAMPUS</label>
                  <input type="text" name="campus" class="input"  [(ngModel)] ='campus' #campusInput="ngModel" required>
                </div>

                <div class="help is-error" *ngIf="campusInput.invalid && campusInput.touched" style="color:red;">
                  Your campus name is required.
                </div>

                <!-- feedback -->
                <div class="field">
                  <label class="label" style="position:relative; right:237px;">FEEDBACK</label>
                  <textarea name="feedback" class="textarea"  [(ngModel)] ='feedback'></textarea>
                </div>


                <!-- submit -->
                <button type="submit" class="button is-large is-primary" [disabled]="contactForm.invalid" style="position:relative; left:2px;" (click)="submit()">
                  send
                </button>

                <!-- reset -->
                <button type="reset" class="button is-large is-warning" [disabled]="contactForm.invalid" style="position:relative; left:20px;"(click)="remove()">
                  clear
                </button>

              </form>

            </div>

          </section>

        
        </div>
      </div>


    </div>
  </div>
</section>

<!-- Ctu map -->
          <section class="hero is-small "style="background-color:#fffff0; height:630px; id="title="ctuMap">  
           <div class="hero-body">
            <p class="title">
            <iframe src="https://www.google.com/maps/d/embed?mid=1mdn6GM_cz24TMGqU1yyOig3rmUSmc6dX&hl=en&ehbc=2E312F" width="640" height="630" style="width:102.5%;
             position:relative; right:30px; bottom:24px;"></iframe>
            </p>
            </div>
          </section>

             <!-- --------------------SUBSCRIBE SECTION-------------------------- -->
             <section class="hero  is-bold is-medium" id="subscribeForm">
            <div class="hero-body" >
              <div class="container">

              <!-- card -->
              <div class="card">
                <div class="card-content">
                  <div class="content">
                  <h2><b>Subscribe to our <br>
                      Newsletter</b></h2>
                        <h3>Subscribe to our newsletter to receive exclusive <br>
                        offers, latest news and updates</h3>

                     <img src="/assets/img/mail.png" width="250" alt=" man received mailing" id="mailImg">
                     <form>
                        <input class="input" type="email" placeholder="Email Address" id="txtEmail" [(ngModel)]="inputValue">  
                        <button class="button is-link" (click)="btnSubscribe()">Subscribe</button>
                    </form>

                     
                     
                  </div>
                  
                  

                </div>
              </div>
                            

              </div>
            </div>
          </section>

          <section class="hero is-bold is-small" id="hero" style="background-color:#6e7f80;">
            <div class="hero-body" id="heroBody">
              <div class="container ">

              <div class="columns" id="infoDiv">
                <div class="column" id="groupMember_header">
                  <p style="text-weight:bold; color:white;">Group Members<p>
                </div>
                <div class="column" style="color:white;" id="groupMember_content">
                  Emmanual Januarie<br>
                  Hlumelo Faltein<br>
                  Ewan Booth
                </div>
                <div class="column" id="studentNumber_header">
                <p style="text-weight:bold; color:white;">Student Numbers<p>
                </div>
                <div class="column" style="color:white;" id="studentNumber_content">
                  20230432<br>
                  20230474<br>
                  20230450
                </div>
                <div class="column" id="services_header">
                <p style="text-weight:bold; color:white;">Services<p>
                </div>
                <div class="column" id="services_content">
                  <a style="color:white;" routerLink="/timetable">Timetable</a><br>
                  <a style="color:white;" routerLink="/share-resources">Share Resources</a><br>
                  <a style="color:white;" routerLink="/discussions">Discussions</a>
                </div>
                <span style="color:orange;" id="teamName">Tritech.</span>
              </div>
              

              </div>
            </div>
          </section>

       

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
  
  #contactUs .title{
    font-family:"Gill Sans Extrabold", sans-serif;
    font-size: 70px !important;
    text-shadow: 3px 5px black !important;
    font-stretch: condensed;
    color: white;
  }

  #contactUs #span{
    text-align: left;
  }

  label{
    position:relative;
    left:0px;
    color:babyblue;
  }

  #hero span{
    position:relative;
    top:90px;
    font-size:30px;
    right:700px;
  }
  
  .card{
    position:relative;
    left:15%;
  }

  #mailImg{
    position:relative;
    left:70%;
    bottom:190px;
  }
  .content input{
    position:relative;
    top:20%;
    right:28%;
    width:50%;
  }
  .content button{
    position:relative;
    top:20%;
    right:26%;
    
  }

  .card{
    width:70%;
    height:300px;
  }
  #hero{
    height:200px;
  }

  #subscribeForm{
    background-color:#f5f5f5;
  }

  #subscribeForm input, #subscribeForm button{
    position:relative;
    bottom:250px;
    left:6px;
  }

  #subscribeForm button{
    position:relative;
    left:16px;
  }

  
  @media screen and (max-width:500px){
    iframe{
    position:relative;
    left:-5px;
  }

  #heroBody .columns{
    font-size:10px;
    max-width:100%;
    width:20%;
  }

  #studentNumber_header{
    position:relative;
    left:130px;
    top:-130px; 
    width:50%;
  }

  #studentNumber_content{
    position:relative;
    left:130px;
    top:-125px; 
    width:50%;
  }

  #services_header{
    position:relative;
    left:270px;
    bottom:585px;
    top:-240px;
  } 

  #services_content{
    position:relative;
    left:270px;
    bottom:585px;
    top:-250px;
  }

  /* #groupMember_header , #groupMember_content{
    position:relative;
    left:10px;
    top:30px;
    width:100%;
  } */

  #hero span{
    position:absolute;
    top:230px;
    font-size:30px;
    left:120px;
  }

  #hero{
    height:450px;
  }
  #subscribeForm input, #subscribeForm button{
    position:relative;
    bottom:230px;
    left:6px;
  }

  .card{
    position:relative;
    left:0px;
  }
  }


  `]
})
export class ContactUsComponent implements OnInit {

  inputValue = '' ;

  
  firstname: string;
  lastname: string;
  email: string;
  contact: string;
  campus: string;
  feedback: string;


  ngOnInit(): void {

  }
  constructor() { }

  submitForm() {
    const message = `
    My name is ${this.firstname}. My surname is ${this.lastname}.
    My email is ${this.email}. My contact is ${this.campus}.
    My feedback is ${this.feedback}
    `;
    console.log(message);
  }

  submit() {
    if (window.confirm("Successfully send!")) { }
  }

  remove() {
    if (window.confirm("Are you sure about 'clearing' your enquiry ?")) { }
  }

  btnSubscribe(){
    window.alert("Successfuly subscribed to 'Tritech.ind' Newsletter");
    this.inputValue = '';
  }
}


