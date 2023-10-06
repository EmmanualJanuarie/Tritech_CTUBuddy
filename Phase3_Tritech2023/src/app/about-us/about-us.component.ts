import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `
    <section class="hero is-bold is-fullheight" id="hero">
  <div class="hero-body">
    <div class="container has-text-centered">

     <p class="title">
        About Us
      </p>

     <p class="subtitle">
      
     CTU Buddy is more than just a website - it is a comprehensive educational platform designed to support students in their academic pursuits.
      Our team of professionals has worked tirelessly to develop a range of features that cater to the diverse needs of our student body.
       From the interactive Discussion page to the resource-rich Share Resources page, CTU Buddy provides students with the tools they need to succeed.
        Our commitment to excellence is evident in every aspect of the website, from its user-friendly interface to its visually appealing design.
         At CTU, we care about our students and are dedicated to providing them with the best possible educational experience.
      </p>

      <!-- Column -->
      <div class="columns" id="nationalFootprintCols">
        <div class="column">
        <figure class="image is-128x128" >
            <a href="https://ctutraining.ac.za/ctu-corporate-solutions/national-footprint/">
            <img class="is-rounded" src="/assets/img/nationalFootprint.jpeg"   id="pointer">
            </a>
            <b>National Footprint</b>
        </figure>
        </div>

   
        <div class="column">
        <figure class="image is-128x128" >
            <a href="/assets/img/User_Guide.docx" download="">
            <img class="is-rounded" src="/assets/img/userManual.webp"   id="pointer">
            </a>
            <b>Download User Manual</b>
        </figure>
        </div>
   

        <div class="column">
        <figure class="image is-128x128" >
            <a  href="/assets/img/Phase1_SRS_document_tritech_2023.pdf" download>
            <img class="is-rounded" src="/assets/img/srsDoc.jpg"   id="pointer">
            </a>
            <b>Download SRS Document</b>
        </figure>
        </div>
      </div> 

    </div>
  </div>
</section>

      <!-- Section 2 of AboutUS page -->
      <section class="hero is-bold is-fullheight" id="section2">
  <div class="hero-body">
    <div class="container has-text-centered">
    
     <p class="title">
      <u>Our objectives</u>
      </p>

      <div class="columns is-gap" id ="objectives">
  <div class="column" id="mission">
  <span id="Misson_heading"><h2>Mission</h2></span>
      <div id ="mission_text">CTU-Buddy is dedicated to providing a thorough, engaging,
            and user-focused web platform for CTU students. 
            Our mission is to improve the different facets of students academic lives by promoting efficient schedule management,
            active and collaborative learning, and a vibrant academic environment. We strive to provide all the 
            necessary tools and resources for learners to reach their full potential and achieve educational growth.
      </div>
  </div>
  <div class="column" id="purpose">
  <span id="Purpose_heading"><h2>Purpose</h2></span>
    <div id="purpose_text">The primary purpose of CTU-Buddy is to enhance the academic experience of CTU students by providing a comprehensive and interactive online hub.
          Through efficient scheduling, academic collaboration, resource sharing,
          and effective communication between students and the university administration, 
          CTU-Buddy aims to support students in achieving their academic goals and reaching their full potential
    </div>
  </div>
  <div class="column" id="vision">
  <span id="vision_heading"><h2>Vision</h2></span>
      <div id="vision_text">
        CTU-Buddy envisions a future where CTU students are empowered to achieve academic success through a comprehensive and interactive online hub.
          By facilitating efficient scheduling, fostering academic collaboration, encouraging resource sharing, 
          and promoting effective communication between students and the university administration, 
          CTU-Buddy aims to enhance the student experience and support their academic journey.
      </div>
  </div>
</div>

    </div>
  </div>
</section>
<!-- section3 -->

<section class="hero  is-bold is-fullheight" id="section3">
  <div class="hero-body">
    <div class="container has-text-centered">

     <span class="title">
     <div class="TeamName_Container">
            <p class="txt_container" id="container_move"><span style="color: orangered;">Tritech.</span> </p>
         </div>
      </span>

     <span class="subtitle">
      Developers of CTU Buddy  
     </span>
       

    </div>
  </div>
</section>

<!-- Section 4 -->
 <section class="hero is-bold is-fullheight" id="section4">
  <div class="hero-body">
    <div class="container has-text-centered">
  

     <p class="title">
      <span>President</span>
      </p>

      <div class="columns" id="PresidentCol">
        <div class="column" id="card"> 
           <!--First column--->
           <div class="column">
            <div class="card" id="president">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src='/assets/img/em.png' alt="President of Ctu Buddy">
                </figure>
                      <div class="card">
                        <div class="card-content">
                          <div class="content">
                            <b>Emmanual Januarie</b><br>
                           A local thinker who follows facts. I believe in making decisions based on evidence and data,
                           and I strive to lead my team towards success through careful analysis and strategic planning.
                            I am committed to serving the best interests of my team and our community, 
                            and I am always open to new ideas and perspectives.
                             Together, we can achieve great things.
                             <br>
                              <small><a href="https://www.linkedin.com/in/emmanual-januarie-9ba580205">LinkedIn</a> · <a href="mailto:emmanualjanuarie240@gmail.com">Gmail</a> · <a href="https://github.com/EmmanualJanuarie">GitHub</a></small>
                          </div>
                          
                        </div>
                      </div>
              </div>
            </div>
          </div>

        </div>
        <div class="column" id="roles">

        <div class="card" id="presidentcard">
            <header class="card-header">
              <span class="card-header-title">
              <h1 style="position:relative; left:45%;">Roles</h1>
              </span>
              <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
                <h2>President</h2>
                  <ul>
                    <li>As the president, I am the primary leader of the team. I am responsible for 
                      setting the direction and making key decisions. I am a local thinker who follows facts,
                      and I believe in making decisions based on evidence and data.</li>
                  </ul> <br>

                  <h2>Strategic Planner</h2>
                  <ul>
                    <li>As a strategic planner, I strive to lead my team towards success through careful analysis and strategic planning.
                      This involves setting goals, developing plans to achieve those goals, and ensuring that the team is on track to meet them.</li>
                  </ul> <br>

                  <h2>Community Liaison</h2>
                  <ul>
                    <li> As a community liaison, I am committed to serving the best interests of my team and our community.
                      This involves communicating with community members, understanding their needs and concerns, and working to address them.</li>
                  </ul> <br>

                  <h2>Innovator</h2>
                  <ul>
                    <li> As an innovator, I am always open to new ideas and perspectives. 
                      This involves encouraging creativity and innovation within the team, 
                      and being open to new ways of doing things.</li>
                  </ul> <br>

                  <h2>Team Builder</h2>
                  <ul>
                    <li>As a team builder, I believe that together, we can achieve great things. 
                      This involves fostering a positive team culture,
                      promoting collaboration, and ensuring that all team members feel valued and included.</li>
                  </ul>

                <br>
              </div>
            </div>
          </div>
        
        </div>
       
      </div>    

     

    </div>
  </div>
</section>


<!-- Section 5 -->
<section class="hero is-bold is-fullheight" id="section4" style="background-color:#f3e5ab;">
  <div class="hero-body">
    <div class="container has-text-centered">
  

     <p class="title">
      <span>Vice President</span>
      </p>

      <div class="columns" id="PresidentCol">
        <div class="column" id="card"> 
           <!--First column--->
           <div class="column">
            <div class="card" id="president">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src='/assets/img/Hf.jpg' alt="President of Ctu Buddy">
                </figure>
                      <div class="card">
                        <div class="card-content">
                          <div class="content">
                          <b>Hlumelo Faltein</b><br>
                          A contributive and hard worker.
                           I am dedicated to supporting the president and the rest of the team in achieving our goals.
                            I am always willing to lend a hand and put in extra effort to ensure that our team is successful.
                             I believe in working together and collaborating to achieve the best results, and I am committed to doing my part to help our team thrive.
                             <br>
                              <small><a href="https://www.linkedin.com/in/hlumelo-faltein-85964a238/">LinkedIn</a> · <a href="mailto:hlumelo011@gmail.com">Gmail</a> · <a href="https://github.com/Designerbeat">GitHub</a></small>
                          </div>
                          
                        </div>
                      </div>
              </div>
            </div>
          </div>

        </div>
        <div class="column" id="roles">

        <div class="card" id="presidentcard">
            <header class="card-header">
              <span class="card-header-title">
              <h1 style="position:relative; left:45%;">Roles</h1>
              </span>
              <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
              <h2>Vice President</h2>
                  <ul>
                    <li>As the vice president, I am the second-in-command of the team. 
                      I am responsible for supporting the president and helping to lead the team. 
                      I am a contributive and hard worker, dedicated to achieving our goals.</li>
                  </ul> <br>

                  <h2>Supporter</h2>
                  <ul>
                    <li> As a supporter, I am always willing to lend a hand and put in extra effort to ensure that our team is successful
                      . This involves being available to help with tasks, offering assistance when needed, and working hard to achieve our goals.</li>
                  </ul> <br>

                  <h2>Collaborator</h2>
                  <ul>
                    <li> As a collaborator, I believe in working together and collaborating to achieve the best results.
                      This involves communicating effectively with other team members, 
                      sharing ideas and resources, and working together towards common goals.</li>
                  </ul> <br>

                  <h2>Motivator</h2>
                  <ul>
                    <li> As a motivator, I am committed to doing my part to help our team thrive.
                      This involves encouraging and motivating other team members, 
                      recognizing their contributions, and fostering a positive team culture.</li>
                  </ul> <br>
                        <br>
              </div>
            </div>
          </div>
        
        </div>
       
      </div>    

     

    </div>
  </div>
</section>

<!-- Section 6 -->
<section class="hero is-bold is-fullheight" id="section4">
  <div class="hero-body">
    <div class="container has-text-centered">
  

     <p class="title">
      <span>Group Member</span>
      </p>

      <div class="columns" id="PresidentCol">
        <div class="column" id="card"> 
           <!--First column--->
           <div class="column">
            <div class="card" id="president">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src='/assets/img/EB.jpg' alt="President of Ctu Buddy">
                </figure>
                      <div class="card">
                        <div class="card-content">
                          <div class="content">
                          <b>Ewan Booth</b><br>
                          I bring creativity and a reserved demeanor to the team.
                           I am able to come up with innovative ideas and solutions,
                            while also maintaining a calm and thoughtful presence. 
                            I believe in the power of collaboration and am always willing to contribute my unique perspective to help the team achieve our goals.
                             <br>
                              <small><a href="https://www.linkedin.com/in/ewan-booth-a736a6294/">LinkedIn</a> · <a href="mailto:20230450@ctucareer.co.za">Gmail</a> · <a href="https://github.com/EwanBooth">GitHub</a></small>
                          </div>
                          
                        </div>
                      </div>
              </div>
            </div>
          </div>

        </div>
        <div class="column" id="roles">

        <div class="card" id="presidentcard">
            <header class="card-header">
              <span class="card-header-title">
              <h1 style="position:relative; left:45%;">Roles</h1>
              </span>
              <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </header>
            <div class="card-content">
              <div class="content">
              <h2>Creative</h2>
                  <ul>
                    <li>As a creative thinker, I bring creativity to the team.
                      I am able to come up with innovative ideas and solutions to help the team achieve our goals.</li>
                  </ul> <br>

                  <h2>Reserved Contributor</h2>
                  <ul>
                    <li>As a reserved contributor, I have a reserved demeanor and maintain a calm and thoughtful presence within the team.
                      This allows me to contribute my unique perspective in a measured and considered way.</li>
                  </ul> <br>

                  <h2>Collaborator</h2>
                  <ul>
                    <li> As a collaborator, I believe in the power of collaboration and am always willing to work with others to achieve our goals.
                      This involves sharing ideas, resources, and expertise to help the team succeed.</li>
                  </ul> <br>

                  <h2>Problem Solver</h2>
                  <ul>
                    <li> As a problem solver, I am skilled at identifying and addressing challenges that arise within the team.
                      I use my analytical skills and creativity to develop effective solutions and help the team overcome obstacles.</li>
                  </ul> <br>
                <br>
              </div>
            </div>
          </div>
        
        </div>
       
      </div>    

     

    </div>
  </div>
</section>

<!---=========================[Organogram]============START================================= -->
<section class="hero  is-bold is-fullheight" id="hero">
  <div class="hero-body" >
    <div class="container">
     
    <app-organogram></app-organogram>

    </div>
  </div>
</section>







<!---=========================[Organogram]============END================================= -->

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

    .title{
    position:absolute;
    font-size:70px;
    font-family:"Gill Sans Extrabold", sans-serif;

    /* ---Positioning os the home page title text ---*/
    bottom:360px;
    left:520px;
  }

  #pointer{
    cursor:pointer;
  }

  #hero{
    background-color:#f3e5ab;
  }

  .subtitle{
    position:absolute;
    font-size:25px;

    bottom:60px;
    text-align:center;
    left:30px;

  }

  .columns{
    position:relative;
    left:200px;
    top:200px;
  }

  #hero img{
  width:1900px;
  height:auto;

  }

  #section2{
    background-color:#fffff0;
  }

  #section4{
    background-color:#fffff0;
    
  }
  #section6{
    background-color:#fffff0;
  }

  #section2 .title{
    position:absolute;
    font-size:70px;
    font-family:"Gill Sans Extrabold", sans-serif;

    /* ---Positioning os the home page title text ---*/
    bottom:660px;
    left:430px;
  }

  #mission_text{
  color:white;
  text-align: justify;
}

#purpose_text{
  color:white;
  text-align: justify;
}

#vision_text{
  color:white;
  text-align: justify;
}


#mission{
border:1px solid white;

}
#mission{
  background-color:#474e5d;
  filter:opacity(0.9);
  border-radius: 20px;
  font-size:26px;
}

#purpose{
border:1px solid white;
}

#vision{
border:1px solid white;
}

#purpose{
  background-color:#811429;
  filter:opacity(0.9);
  border-radius: 20px;
  font-size:26px;
}

#vision{
  background-color:#063F5C;
  filter:opacity(0.9);
  border-radius: 20px;
  font-size:26px;
}

#Misson_heading{
  color:white;
  font-weight:bold;
}

#Purpose_heading{
  color:white;
  font-weight:bold;
}

#vision_heading{
  color:white;
  font-weight:bold;
}

#objectives{
  position:relative;
  left:80px;
}

#objectives #mission{
  position:relative;
  left:-280px;
}

#objectives #vision{
  position:relative;
  left:100px;
}

#objectives #purpose{
  position:relative;
  left:-90px;
}



.txt_container{
  position:relative;
  font-size:140px;
  font-family: monospace;
  
  top:500px;
  left:200px;
  
}

#section3 .title{
    position:absolute;
    font-size:90px;
    font-family:"Gill Sans Extrabold", sans-serif;

    /* ---Positioning os the home page title text ---*/
    bottom:360px;
    left:230px;
  }

  
#section3 .subtitle{
    position:absolute;
    font-size:40px;
    font-family:"Gill Sans Extrabold", sans-serif;

    /* ---Positioning os the home page title text ---*/
    bottom:150px;
    left:500px;
  }

  #section3{
    background-color:#f3e5ab;
  }
  #section5 #Hf{
    object-fit:cover;
  }

  #section4 .title{
    position:absolute;
    font-size:90px;
    font-family:"Gill Sans Extrabold", sans-serif;

    /* ---Positioning os the home page title text ---*/
    top:-90px;
    left:500px;
  }

  /* ---------Positioning and modification of president card and roles---------- */
  #section4 #presidentcard{
    width:900px;

    /* positioning of card */
    position:relative;
    bottom:15%;
  }

  #section4 .card{
    width:800px;

    /* positioning of card */
    position:relative;
    bottom:15%;
  }

  #section4 .column{
  /* positioning of card */
    position:relative;
    bottom:10%;
    right:20%;
  }

    /* ---------Positioning and modification of Vice president card and roles---------- */

    #section5 #vicePresidentcard{
    width:900px;

    /* positioning of card */
    position:relative;
    bottom:15%;
  }

  #section5 .card{
    width:800px;

    /* positioning of card */
    position:relative;
    bottom:15%;
  }

  #section5 .column{
  /* positioning of card */
    position:relative;
    bottom:10%;
    right:20%;
  }

  /* ---------Positioning and modification of Group Member card and roles---------- */
  #section6 #groupMember{
    width:900px;

    /* positioning of card */
    position:relative;
    bottom:15%;
  }

  #section6 .card{
    width:800px;

    /* positioning of card */
    position:relative;
    bottom:15%;
  }

  
  #section6 .column{
  /* positioning of card */
    position:relative;
    bottom:10%;
    right:20%;
  }

  h1{
    font-weight:bold;
    font-size:30px;
  }

  h2{
    font-weight:bold;
  }

  li{
    text-align:left;
  }
  #card{
    position:relative;
    right:250px;
  }

  

  #Roles{
    position:relative;
    left:200px;
    font-size:500px;
  }

  #section5 .title{
    position:absolute;
    font-size:90px;
    font-family:"Gill Sans Extrabold", sans-serif;

    /* ---Positioning os the home page title text ---*/
    top:-90px;
    left:430px;
  }

  #section5{
    background-color:#f3e5ab;
  }

  #roles1{
    position:relative;
    top:50px;
  }

  #section6 .title{
    position:absolute;
    font-size:90px;
    font-family:"Gill Sans Extrabold", sans-serif;

    /* ---Positioning os the home page title text ---*/
    top:-90px;
    left:500px;
  }

  .content li{
    list-style-type: none;
  }

  .card-header-icon{
    display:none;
  }

  @media screen and (max-width:414px){
    /* ---First Section-- */
    #hero .title{
      position:relative;
      top:10px;
    }

    #hero .subtitle{
      position:relative;
      top:0px;
    }

    #nationalFootprintCols{
      position:relative;
      left:5px; 
      width:95%;
      max-width:65%;
      top:-800px;
    }

    #PresidentCol #president{
      position:relative;
      bottom:100px;
      left:-20px;
    }

    #PresidentCol #roles{
      position:relative;
      bottom:200px;
      left:-40px;
    }

    #vicePresidentCol #vicePresident{
      position:relative;
      bottom:100px;
      left:-20px;
    }

    #vicePresidentCol #roles{
      position:relative;
      bottom:200px;
      left:-180px;
    }

    



   
    /* sizing of columns */
    #mission , #vision, #purpose {
      font-size:15px;
    }

    /* Positioning of the mission column */
    #objectives #mission{
      position:relative;
      top:-400px;
      left:-80px;
    }

     /* Positioning of the purpose column */
     #objectives #purpose{
      position:relative;
      top:-385px;
      left:-80px;
    }

    
     /* Positioning of the vision column */
     #objectives #vision{
      position:relative;
      top:-370px;
      left:-80px;
    }

    /* positioning of the objectives heading in the mobile section */
    #section2 .title{
      position:relative;
      left:0px;
      top:-10px;
      
      font-size:30px;
    }

    #section3 #container_move{
      font-size:70px;

      position:relative;
      left:-200px;
      width:250%;
    }
    
    #section3 .subtitle{
      font-size:30px;

      position:relative;
      left:0px;
    }

  
  
  /* ---------Positioning and modification of president card and roles---------- */
  #section4 #presidentcard{
    width:350px;

    /* positioning of card */
    position:relative;
    bottom:80px;
    right:80px;
    
  }

  #PresidentCol{
    position:relative;
    left:150px; 
    width:65%;
    /* max-width:65%; */
    top:300px;
  }

  #PresidentCol .card{
    max-width:300px;
    height:auto;
  }




 
  #section4 .card{
    width:350px;

    /* positioning of card */
    position:relative;
    bottom:15%;
  }

  #section4 .column{
  /* positioning of card */
    position:relative;
    bottom:90px;
    right:25%;
  }

  #section4 .title{
    position:relative;
    left:0px;
    font-size:40px;
    top:20px;
  }

    /* ---------Positioning and modification of Vice president card and roles---------- */
    #section5 .card{
    width:350px;

    /* positioning of card */
    position:relative;
    bottom:15%;
  }

  #section5 .column{
  /* positioning of card */
    position:relative;
    bottom:90px;
    right:25%;
  }

  #section5 .title{
    position:relative;
    left:0px;
    font-size:40px;
    top:20px;
  }

  #vicePresidentCol{
    position:relative;
    left:150px; 
    width:65%;
    /* max-width:65%; */
    top:300px;
  }

  #vicePresidentCol .card{
    max-width:300px;
    height:auto;
  }

  #vicePresidentcard .content{
    /* font-size:9px; */
  }


  /* ---------Positioning and modification of Group Member card and roles---------- */
  #section6 #groupMember{
    width:350px;

    /* positioning of card */
    position:relative;
    bottom:250px;
    right:22%;
  }

  #section6 .card{
    width:350px;

    /* positioning of card */
    position:relative;
    bottom:15%;
  }

  
  #section6 .column{
    /* positioning of card */
    position:relative;
    bottom:90px;
    right:25%;
  }

  #groupMember .content{
    font-size:9px;
  }

  #section6 .title{
    position:relative;
    left:0px;
    font-size:40px;
    top:20px;
  }

  /* Positioning and modification of firt section */
  #hero .subtitle{
    position:relative;
    bottom:40px;
    left:0px;

    font-size:18px;
    text-align:justify;
  }

  #hero .title{
    position:relative;
    bottom:40px;
    left:0px;

    font-size:40px;
  }

  #hero .columns{
    position:relative;
    top:-8px;
    left:125px;
  }

  #objectives{
    position:relative;
      left:150px; 
      width:100%;
      max-width:65%;
      top:400px;
  }


  }



  `]
})
export class AboutUsComponent {

}
