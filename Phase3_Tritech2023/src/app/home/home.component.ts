import { Component,OnInit} from '@angular/core';






@Component({
  selector: 'app-home',
  template: `

  <section class="hero is-primary is-bold is-fullheight" id="hero">
  <div class="hero-body" >
    <div class="container">
     
     <p class="title">
      Welcome to <span id= "websiteName">CTU Buddy</span>
      </p>

     <p class="subtitle">
        Making your life a little bit easier
      </p>

    </div>
  </div>
</section>

<!---section 2 in home page--->
<section class="hero  is-bold is-fullheight" id="section2">
  <div class="hero-body">
    <div class="container has-text-centered">

     <p class="title" id="Mobiletitle">
      What is CTU Buddy ?
      </p>


        <div class="columns" id="Section2Col">
            <div class="column" id='columnContent'>
              <div class="card" id="overview">
            <div class="card-content">
              <div class="content">
              <header class="card-header">
                <p class="card-header-title">
                    <b style="position:relative; left:400px;">Overview</b><br>
                </p>
                <button class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </header>
              <div class="card-content">
                <div class="content">
                  CTU Buddy is an invaluable platform for both students and lecturers at CTU. 
                  It offers a comprehensive range of information and support services to assist students in achieving their academic goals. 
                  The platform has a user-friendly interface that allows users to easily access and navigate the relevant resources, 
                  such as course materials, study guides, tutorials, quizzes, and more. Moreover, <br><br>
                  CTU Buddy enables effective communication between students and lecturers, which can enhance learning outcomes, 
                  address any queries or issues, and provide constructive feedback on assignments and projects. 
                  The platform also allows users to create and join groups, forums, and chats with other students and lecturers, 
                  which can foster a sense of community and collaboration. The platform is regularly updated and refined to ensure that it meets the evolving needs of its users. 
                  With CTU Buddy, students can rest assured that they have the most up-to-date information and support available to help them succeed in their studies.

                  <br>
                
                </div>
              </div>
                  
              </div>
            </div>
            </div>
          </div>
        <div class="column" id='columnImg'>
          <!-- Establishing the 1 section coulmn image -->
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">

            <div class="carousel-inner" role="listbox">
                <img src="{{ getSlide() }}" alt="slide" >
            </div>

              <button (click)='getPrev()'  class="button is-warning" id="buttons">Prev</button>

              <button (click)='getNext()' class="button is-danger" id="buttons">Next</button>

          </div>
        </div>
         
        </div>
      
    </div>
  </div>
</section>

<!---section 3 in home page--->
<section class="hero  is-bold is-fullheight" id="section3">
  <div class="hero-body">
    <div class="container has-text-centered">

     <p class="title" id="sec3Title">
      Student Activities
      </p>

      <p class="subtitle">
      Student life can be stressful, so students are incouraged to take part in activities at . 
      There are a range of things we do at CTU, such as LAN parties, gaming sessions, field trips, soccer, competitions and more.
      This provides a great experiece to bond with others and build teamwork, which are valuable in the real-world.
      </p>

      <div class="columns">

      <!-- First column--->
          <div class="column" id="firstColumn">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src='/assets/img/gammingSessions.jpg' alt="Students Gamming">
                </figure>
                      <div class="card">
                        <div class="card-content">
                          <div class="content">
                            CTU Buddy provides latest news about gaming events and tournaments
                          </div>
                        </div>
                </div>
              </div>
            </div>
          </div>

        <!---Second Column--->

        <div class="column" id='sportDayColumn'>
          <figure class="image is-16by9">
          <iframe width="600" height="430" src="https://www.youtube.com/embed/fr4Zn06NH4c?si=Ib7c2KlNAhlP360S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </figure>
        </div>

        <!-- -Third Column-->
        <div class="column" id="pongColumn">
        <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src='/assets/img/pingpong.jpeg' alt="Ping pong table">
                </figure>
                      <div class="card">
                        <div class="card-content">
                          <div class="content">
                          Ping pong teaches communication and collaboration skills.
                          </div>
                        </div>
                </div>
              </div>
            </div>
        </div>

        <!-- Fourth column -->
        <div class="column" id="beachDayColumn">
        <figure class="image is-16by9">
         <iframe width="400" height="430" src="https://www.youtube.com/embed/oMwAC8F87LU?si=2Cy6sf6Y_LDce59P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </figure>
        </div>
      </div>
      
    </div>
  </div>
</section>

<!-- section 4 in home page -->
<section class="hero  is-bold is-fullheight" id="section4">
  <div class="hero-body">
    <div class="container has-text-centered">

     <p class="title">
      Upcoming events !
      </p>

      <!--First event-->
      <div class="card" id="event1">
  <header class="card-header">
    <p class="card-header-title" id="component">
    Masterclass: Leveraging AI In Human Resources For Organizational Success
    </p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
    <img src='/assets/img/AI.png' alt="AI Event" width=2100>
      <br>
      <time datetime="2016-1-1">05 October 2023 07:00</time>
    </div>
  </div>
  <footer class="card-footer">
    <a href="https://ctutraining.ac.za/upcoming-events/ctuai_hrmasterclass/" class="card-footer-item">View</a>
   
  </footer>
</div>

  <!--Second event-->
  <div class="card" id="event2">
  <header class="card-header">
    <p class="card-header-title" id="component">
    National Open Day
    </p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
    <img src='/assets/img/OpenDay.png' alt="AI Event" width=2100>
      <br>
      <time datetime="2016-1-1">14 October 2023 08:00</time>
    </div>
  </div>
  <footer class="card-footer">
    <a href="https://ctutraining.ac.za/upcoming-events/national-open-day-14-october-2023/" class="card-footer-item">View</a>
   
  </footer>
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
  #hero{
    background-image: url('/assets/img/ctuHome.jpg')!important;
    background-size: cover;
    background-position: center center;
  }

  #Mobiletitle{
    position:absolute;
    font-size:70px;
    font-family:"Gill Sans Extrabold", sans-serif;

    /* ---Positioning os the home page title text ---*/
    bottom:260px;
    left:300px;

  }

  #hero .title{
    position:relative;
    font-size:70px;
    font-family:"Gill Sans Extrabold", sans-serif;

    /* ---Positioning os the home page title text ---*/
    bottom:260px;
    margin-left:300px;
  }
  

  #websiteName{
    color:#1e81b0;
  }
 
  #hero .subtitle{
    position:relative;
    font-size:25px;

    bottom:260px;
    margin-left:500px;

  } 

  .breadcrumb{
    position:absolute;
    font-size:20px;

    /* Positioning of breadcrumbs */
    bottom:460px;
    left:300px;
  }

  #section2{
    /* ---changed background color of section 2 */
    background-color:#fffff0;
  }

  #section2 .title{
    position:relative;
    bottom:80px;
    left:80px;
  }

  /* ---modification of column content--- */
  #columnContent{
    
    /* ---size of text and alignment--- */
    font-size:25px;
    text-align: justify;
  }

  #overview{
    position:relative;
    right:400px;
    width:1000px;

  }
  
  /* ---modification of column image--- */
  #columnImg img{
    position:relative;
    height:600px;
    /* ---Positioning of image and modification--- */
    left:-200px;
    top:40px;
    border-radius:20px;
    box-shadow:3px 3px 2px gray;

    max-width: 250%;
    height: auto;
  }

  #columnImg button{
    position:relative;
    /* ---Positioning of image and modification--- */
    left:50px;
    bottom:20px;
  }

  #section3{
    background-color:#f3e5ab;
  }

  #section3 #sec3Title{
    position:relative;
    font-size:60px;
    bottom:0px;
    left:0px;
  }

  /* #section3 .title{
    font-size:60px;
    bottom:700px;
    left:400px;
  } */

  #section3 .subtitle{
    position:relative;
    top:50px;
    left:30px;
  }

  /* ---section 3 columns--- */
  #section3 .columns{
    position:relative;

    /* ---section 3 columns positions--- */
    top:170px;
    left:30px;
  }

  #sportDayColumn{
    position:relative;
    bottom:220px;
    left:30px;
  }

  /* --Modification to ping pong column-- */
  #pongColumn{
    position:relative;
    left:60px;
  }

  /* --Modification for beach day column-- */
  #beachDayColumn{
    position:relative;
    left:77px;
    bottom:160px;
  }

  #section4{
    /* ---changed background color of section  */
    background-color:white;
  }

  #section4 .title{
    bottom:950px;
    left:400px;
  }
  #component{
  font-weight:bold;
  }

  /* --Positioning of upcoming events 1 and 2-- */
  #event1{
    top:10px;
  }

 #event2{
    top:20px;
  }
/* First card */
  #firstColumn .card{
    /* max-width:100%; */
    width:450px;
    height:auto;
  }

  #firstColumn{
    position:relative;
    top:180px;
    right:400px;
  }

  /* second card */
  #sportDayColumn .card{
    max-width:100%;
    height:auto;
  }

  #sportDayColumn iframe{
    position:relative;
    top:60px;
    right:400px;
  }

    /* Third card */
    #pongColumn .card{
    max-width:100%;
    width:450px;
    height:auto;
    
  }

  #pongColumn{
    position:relative;
    top:175px;
    left:-340px;
  }

  /* Fourth card */
  #beachDayColumn .card{
    max-width:100%;
    height:auto;
    display:none;
  }

  #beachDayColumn iframe{
    position:relative;
    top:110px;
    right:400px;
  }


  @media screen and (max-width:414px)
  {

    /* ----First section---- */

    #hero .title{
    position:relative;
    font-size:30px;
    width:95%;
  
    bottom:260px;
    margin-left:15px;
  }

  #hero .subtitle{
    position:relative;
    font-size:20px;
    width:100%;

    bottom:260px;
    margin-left:35px;

  } 

    #hero{
    background-image: url('/assets/img/ctuHome.jpg')!important;
    background-repeat: no-repeat;
    background-size: 600px 920px;
  
  }

    #columnImg{
      position:relative;
      right:10px;
    }

    .title{
      position:relative;
      font-size:22px;
      left:0;
    }
    


    /*---modification of column image--- */
  #columnImg img{
    position:relative;
    height:600px;
    /* ---Positioning of image and modification--- */
    left:-10px;
    top:40px;
    border-radius:20px;
    box-shadow:3px 3px 2px gray;
    width:50%;

    max-width: 100%;
    height: auto;
  }

  /* Position of main desktop heading to mobile proportions */
 
  #Mobiletitle{
    position:relative;
    font-size:20px;
    font-family:"Gill Sans Extrabold", sans-serif;

    /* ---Positioning os the home page title text ---*/
    top:0px;
    left:-100px;
  }

  #section3 .subtitle{
    margin-top:0px;
    margin-left:20px; 
    text-align:justify;
    font-size:20px;
    max-width:70%;
  }


  #section3 #sec3Title{
    position:relative;
    font-size:30px;
    bottom:0px;
    left:0px;
  }

  #section3 .title{
    position:relative;
    font-size:20px;
    bottom:700px;
    margin-right:10px;
  } 


    /* Positioning of the first column in section of home page */
  #firstColumn{
    position:relative;
    left:20px; 
    width:95%;
    max-width:65%;
    top:-80px;
  }

  /* Positioning of the 2nd column youtube video */
  #sportDayColumn{
    position:relative;
    top:-270px;
    left:-30px;  
    max-width:95%;
    width:90%;
  }

  #sportDayColumn iframe{
    position:relative;
    max-width:95%;
    width:90%;
    left:57px;  
  }

  /* Positioning of the Third column in section of home page */
  #pongColumn{
    position:relative;
    left:20px; 
    width:95%;
    max-width:65%;
    top:-150px;
  }


  /* Positioning of the fourth column youtube video */
  #beachDayColumn{
    position:relative;
    bottom:330px;
    left:-35px; 
    max-width:95%;
  }

  #beachDayColumn iframe{
    position:relative;
    max-width:95%;
    left:57px;  
  }

  #section4 .title{
    position:relative;
    bottom:70px;
    left:18px;

    font-size:30px;
  }

  #section2 .title{
    position:relative;
    bottom:80px;
    left:10px;
  }

   /* ---modification of column content--- */
   #columnContent{
    
    /* ---size of text and alignment--- */
    font-size:25px;
    text-align: justify;
  }

  #overview{
    position:relative;
    right:0px;
    width:350px;

  }

  .card-header-title{
    position:relative;
    right:310px;
  }

  #columnImg button{
    position:relative;
    /* ---Positioning of image and modification--- */
    left:5px;
  }

  #component{
    position:relative;
    left:20px;
   
  }
  /* -----------cards--------- */
  #firstColumn .card{
    max-width:300px;
    height:auto;
  }

  #sportDayColumn .card{
    max-width:300px;
    height:auto; 
  }

  #pongColumn .card{
    max-width:300px;
    height:auto;
  }

  #beachDayColumn .card{
    max-width:300px;
    height:auto;
  }

  #section3 .columns{
    position:relative;
      left:5px; 
      width:95%;
      max-width:95%;
      top:150px;
  }

  #section2 img{
    position:relative;
    top:-10px;
  }

  #buttons{
    position:relative;
    top:20px;
    margin-right:10px;
  }
  
}

  `]
  
})
export class HomeComponent implements OnInit {
  slides: string [] = ['/assets/img/ctuBuddy.jpeg', '/assets/img/ctuBuddy2.jpeg', '/assets/img/ctuBuddy3.png', '/assets/img/ctuBuddy4.webp' ]
  i=0;

  getSlide() {
      return this.slides[this.i];
  }

  getPrev() {
      this.i = this.i===0 ? 0 : this.i - 1;
  }
//edit here    
  getNext() {
      this.i = this.i===this.slides.length ? this.i : this.i + 1;
  }
ngOnInit(): void {
  
}
}
