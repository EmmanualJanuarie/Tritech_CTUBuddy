import { Component } from '@angular/core';

@Component({
  selector: 'app-timetable',
  template: `
<!-- Programming Foundation timetable section -->
<section class="hero  is-bold is-fullheight" id="timetable1">
  <div class="hero-body">
    <div class="container has-text-centered">

     <p class="title">
      Programming  Foundation
      </p>

      <figure class="image is-128x128" id="timetable1gif">
  <img class="is-rounded" src="/assets/img/ProgrammingFoundation.gif" alt="penguin programming">
</figure>

      <div class="table-container">
  <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
            </tr>
            <tr>
                <td>08:00 - 09:00</td>
                <td id="Sabrina">RD412 <br> Theory</td>
                <td id="Sabrina">RD412<br> Practical</td>
                <td id="Sabrina">ENA412<br> Theory</td>
                <td id="Sabrina">ENA412<br> Practical</td>
                <td id="Simon">Group<br> Research</td>
            </tr>
            <tr>
                <td>09:00 - 10:00</td>
                <td id="Sabrina">RD412 <br> Theory</td>
                <td id="Sabrina">RD412<br> Practical</td>
                <td id="Sabrina">ENA412<br> Theory</td>
                <td id="Sabrina">ENA412<br> Practical</td>
                <td id="Simon">CF412<br> Theory</td>
            </tr>
            <tr>
                <td>10:00 - 11:00</td>
                <td id="Sabrina">RD412 <br> Theory</td>
                <td id="Sabrina">RD412<br> Practical</td>
                <td id="Sabrina">ENA412<br> Theory</td>
                <td id="Sabrina">ENA412<br> Practical</td>
                <td id="Simon">CF412<br> Practical</td>
            </tr>
            <tr>
                <td>11:00 - 12:00</td>
                <td id="Sabrina">Group<br> Research</td>
                <td id="Sabrina">Group<br> Research</td>
                <td id="Sabrina">ENA412<br> Theory</td>
                <td id="Sabrina">Group<br> Research</td>
                <td id="Simon">CF412<br> Practical</td>
            </tr>
            <tr>
                <td>12:00 - 13:00 </td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
            </tr>
            <tr>
                <td>13:00 - 14:00</td>
                <td id="Simon">CWD412<br> Theory</td>
                <td id="Simon">ITS</td>
                <td id="Sabrina">ENA412<br> Practical</td>
                <td id="Sabrina">ENA412<br> Practical</td>
                <td></td>
            </tr>
            <tr>
                <td>14:00 - 15:00</td>
                <td id="Simon">CWD412<br> Practical</td>
                <td id="Simon">ITS</td>
                <td id="Sabrina">ENA412<br> Practical</td>
                <td id="Sabrina">ENA412<br> Practical</td>
                <td></td>
            </tr>
            <tr>
                <td>15:00 - 16:00</td>
                <td id="Simon">CWD412<br>Practical</td>
                <td id="Simon">ITS</td>
                <td id="Sabrina">ENA412<br> Practical</td>
                <td id="Sabrina">ENA412<br> Practical</td>
                <td></td>
            </tr>
            <tr>
                <td>16:00 PM</td>
                <td colspan="5" >End of College</td>
            </tr>
  </table>
</div>

<div class="tags has-addons">
  <span class="tag">Simon Lectures</span>
  <span class="tag is-primary" id="Simon"></span>
</div>

<div class="tags has-addons">
  <span class="tag">Sabrina Lectures</span>
  <span class="tag is-primary" id="Sabrina"></span>
</div>
    </div>
  </div>
</section>

<!-- Software Development timetable section -->
<section class="hero  is-bold is-fullheight" id="timetable2">
  <div class="hero-body">
    <div class="container has-text-centered">

     <p class="title">
      Software Development
      </p>

      <figure class="image is-128x128" id="timetable1gif">
  <img class="is-rounded" src="/assets/img/softwareDev.gif" alt="penguin programming">
</figure>

      <div class="table-container">
  <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
            </tr>
            <tr>
                <td>08:00 - 09:00</td>
                <td id="DevOps">DOE522 <br> Theory</td>
                <td id="Group">Group</td>
                <td id="Group">Group</td>
                <td id="Java">JD522<br> Theory</td>
                <td id="Free"></td>
            </tr>
            <tr>
                <td>09:00 - 10:00</td>
                <td id="DevOps">DOE522 <br> Theory</td>
                <td id="JavaPrep">AZ-400</td>
                <td id="BusiProgramming">PRG522 <br> Theory</td>
                <td id="Java">JD522<br> Theory</td>
                <td id="Free"></td>
            </tr>
            <tr>
                <td>10:00 - 11:00</td>
                <td id="DevOps">DOE522 <br> Theory</td>
                <td id="JavaPrep">AZ-400</td>
                <td id="BusiProgramming">PRG522 <br> Theory</td>
                <td id="Java">JD522<br> Theory</td>
                <td id="Free"></td>
            </tr>
            <tr>
                <td>11:00 - 12:00</td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
            </tr>
            <tr>
                <td>12:00 - 13:00 </td>
                <td id="DevOps">DOE522 <br> Practical</td>
                <td id="JavaPrep">AZ-400</td>
                <td id="BusiProgramming">PRG522 <br>Practical</td>
                <td id="Java">JD522<br>Practical</td>
                <td id="Research">Research</td>
            </tr>
            <tr>
                <td>13:00 - 14:00</td>
                <td id="DevOps">DOE522 <br> Practical</td>
                <td id="JavaPrep">AZ-400</td>
                <td id="BusiProgramming">PRG522 <br>Practical</td>
                <td id="Java">JD522<br>Practical</td>
                <td id="Research">Research</td>
            </tr>
            <tr>
                <td>14:00 - 15:00</td>
                <td id="DevOps">DOE522 <br> Practical</td>
                <td id="Free"></td>
                <td id="BusiProgramming">PRG522 <br>Practical</td>
                <td id="Java">JD522<br>Practical</td>
                <td id="Research">Research</td>
                <td></td>
            </tr>
            <tr>
                <td>15:00 - 16:00</td>
                <td id="DevOps">DOE522 <br> Practical</td>
                <td id="Free"></td>
                <td id="Group">Group</td>
                <td id="Java">JD522<br>Practical</td>
                <td id="Research">Research</td>
                <td></td>
            </tr>
            <tr>
                <td>16:00 PM</td>
                <td colspan="5" >End of College</td>
            </tr>
  </table>
</div>

<div class="tags has-addons">
  <span class="tag">DevOps Engineering</span>
  <span class="tag is-primary" id="DevOps"></span>
</div>

<div class="tags has-addons">
  <span class="tag">Business Programming</span>
  <span class="tag is-primary" id="BusiProgramming"></span>
</div>

<div class="tags has-addons">
  <span class="tag">Advanced Java</span>
  <span class="tag is-primary" id="Java"></span>
</div>

    </div>
  </div>
</section>


<!-- Game Development timetable section -->
<section class="hero  is-bold is-fullheight" id="timetable3"  style="background-color:#fffff0;">
  <div class="hero-body">
    <div class="container has-text-centered">

     <p class="title">
      Game Development
      </p>

      <figure class="image is-128x128" id="timetable3gif">
  <img class="is-rounded" src="/assets/img/gameDev.gif" alt="penguin programming">
</figure>

      <div class="table-container">
  <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
            </tr>
            <tr>
                <td>08:00 - 09:00</td>
                <td id="Free"></td>
                <td id="GDP522C">GDP522-C <br> Theory</td>
                <td id="Group">Group</td>
                <td id="GTS522A">GTS522-A<br> Theory</td>
                <td id="Free"></td>
            </tr>
            <tr>
                <td>09:00 - 10:00</td>
                <td id="Free"></td>
                <td id="GDP522C">GDP522-C <br> Theory</td>
                <td id="GDA522B">GDA522-B<br> Theory</td>
                <td id="GTS522A">GTS522-A<br> Theory</td>
                <td id="Group">Group</td>
            </tr>
            <tr>
                <td>10:00 - 11:00</td>
                <td id="Free"></td>
                <td id="GDP522C">GDP522-C <br> Theory</td>
                <td id="GDA522B">GTS522-B<br> Theory</td>
                <td id="GTS522A">GTS522-A<br> Theory</td>
                <td id="Group">Group</td>
            </tr>
            <tr>
                <td>11:00 - 12:00</td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
            </tr>
            <tr>
                <td>12:00 - 13:00 </td>
                <td id="Free"></td>
                <td id="GDP522C">GDP522-C <br> Practical</td>
                <td id="GDA522B">GTS522-B<br> Practical</td>
                <td id="GTS522A">GTS522-A<br> Practical</td>
                <td id="Research">Research</td>
            </tr>
            <tr>
                <td>13:00 - 14:00</td>
                <td id="Free"></td>
                <td id="GDP522C">GDP522-C <br> Practical</td>
                <td id="GDA522B">GDA522-B<br> Practical</td>
                <td id="GTS522A">GTS522-A<br> Practical</td>
                <td id="Research">Research</td>
                
            </tr>
            <tr>
                <td>14:00 - 15:00</td>
                <td id="Free"></td>
                <td id="GDP522C">GDP522-C <br> Practical</td>
                <td id="GDA522B">GDA522-B<br> Practical</td>
                <td id="GTS522A">GTS522-A<br> Practical</td>
                <td id="Research">Research</td>
            </tr>
            <tr>
                <td>15:00 - 16:00</td>
                <td id="Free"></td>
                <td id="GDP522C">GDP522-C <br> Practical</td>
                <td id="GDA522B">GDA522-B<br> Practical</td>
                <td id="GTS522A">GTS522-A<br> Practical</td>
                <td id="Research">Research</td>
            </tr>
            <tr>
                <td>16:00 PM</td>
                <td colspan="5" >End of College</td>
            </tr>
  </table>
</div>

<div class="tags has-addons">
  <span class="tag">Lecture by Samuya</span>
  <span class="tag is-primary" id="GTS522A"></span>
</div>

<div class="tags has-addons">
  <span class="tag">Lecture by Samuya</span>
  <span class="tag is-primary" id="GDA522B"></span>
</div>

<div class="tags has-addons">
  <span class="tag">Lecture by Samuya</span>
  <span class="tag is-primary" id="GDP522C"></span>
</div>

    </div>
  </div>
</section>


<!-- App Development timetable section -->
<section class="hero  is-bold is-fullheight" id="timetable4">
  <div class="hero-body">
    <div class="container has-text-centered">

     <p class="title">
      App Development
      </p>

      <figure class="image is-128x128" id="timetable4gif">
  <img class="is-rounded" src="/assets/img/appDev.gif" alt="Bear Programming">
</figure>

      <div class="table-container">
  <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
            </tr>
            <tr>
                <td>08:00 - 09:00</td>
                <td id="DSD632">DSD632<br>Theory</td>
                <td id="CSA632">CSA632<br> Theory</td>
                <td id="Free"></td>
                <td id="MD632">MD632<br> Theory</td>
                <td id="Research">Research</td>
            </tr>
            <tr>
                <td>09:00 - 10:00</td>
                <td id="DSD632">DSD632<br>Theory</td>
                <td id="CSA632">CSA632<br> Theory</td>
                <td id="Free"></td>
                <td id="MD632">MD632<br> Theory</td>
                <td id="Research">Research</td>
            </tr>
            <tr>
                <td>10:00 - 11:00</td>
                <td id="DSD632">DSD632<br>Practical</td>
                <td id="CSA632">CSA632<br> Practical</td>
                <td id="Free"></td>
                <td id="MD632">MD632<br> Theory</td>
                <td id="Research">Research</td>
            </tr>
            <tr>
                <td>11:00 - 12:00</td>
                <td id="DSD632">DSD632<br>Practical</td>
                <td id="CSA632">CSA632<br> Practical</td>
                <td id="Free"></td>
                <td id="MD632">MD632<br> Theory</td>
                <td id="Research">Research</td>
            </tr>
            <tr>
                <td>12:00 - 13:00 </td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
            </tr>
            <tr>
                <td>13:00 - 14:00</td>
                <td id="DSD632">DSD632<br>Practical</td>
                <td id="CSA632">CSA632<br> Practical</td>
                <td id="Free"></td>
                <td id="MD632">MD632<br> Theory</td>
                <td id="Free"></td>
                
            </tr>
            <tr>
                <td>14:00 - 15:00</td>
                <td id="Group">Group</td>
                <td id="Group">Group</td>
                <td id="Free"></td>
                <td id="Group">Group</td>
                <td id="Free"></td>
            </tr>
            <tr>
                <td>15:00 - 16:00</td>
                <td id="Free"></td>
                <td id="Free"></td>
                <td id="Free"></td>
                <td id="Free"></td>
                <td id="Free"></td>
            </tr>
            <tr>
                <td>16:00 PM</td>
                <td colspan="5" >End of College</td>
            </tr>
  </table>
</div>

<div class="tags has-addons">
  <span class="tag">Lecture online</span>
  <span class="tag is-primary" id="#DSD632"></span>
</div>

<div class="tags has-addons">
  <span class="tag">Lecture online</span>
  <span class="tag is-primary" id="MD632"></span>
</div>

<div class="tags has-addons">
  <span class="tag">Lecture online</span>
  <span class="tag is-primary" id="CSA632"></span>
</div>

    </div>
  </div>
</section>

<!-- AI and Machine Learning timetable section -->
<section class="hero  is-bold is-fullheight" id="timetable5">
  <div class="hero-body">
    <div class="container has-text-centered">

     <p class="title">
     AI and Machine Learning
      </p>

      <figure class="image is-128x128" id="timetable5gif">
  <img class="is-rounded" src="/assets/img/AIdev.gif" alt="Bear Programming">
</figure>

      <div class="table-container">
  <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
            </tr>
            <tr>
                <td>08:00 - 09:00</td>
                <td id="DSD632">DSD632<br>Theory</td>
                <td id="DAS632">DAS632<br> Theory</td>
                <td id="MLA632">MLA632<br>Practical</td>
                <td id="Research">Research</td>
                <td id="Free"></td>
            </tr>
            <tr>
                <td>09:00 - 10:00</td>
                <td id="DSD632">DSD632<br>Theory</td>
                <td id="DAS632">DAS632<br> Theory</td>
                <td id="MLA632">MLA632<br>Practical</td>
                <td id="Research">Research</td>
                <td id="Free"></td>
            </tr>
            <tr>
                <td>10:00 - 11:00</td>
                <td id="DSD632">DSD632<br>Practical</td>
                <td id="DAS632">DAS632<br> Theory</td>
                <td id="MLA632">MLA632<br>Practical</td>
                <td id="Research">Research</td>
                <td id="Free"></td>
            </tr>
            <tr>
                <td>11:00 - 12:00</td>
                <td id="DSD632">DSD632<br>Practical</td>
                <td id="DAS632">DAS632<br> Theory</td>
                <td id="MLA632">MLA632<br>Practical</td>
                <td id="Research">Research</td>
                <td id="Free"></td>
            </tr>
            <tr>
                <td>12:00 - 13:00 </td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
                <td id="Break">Lunch</td>
            </tr>
            <tr>
                <td>13:00 - 14:00</td>
                <td id="DSD632">DSD632<br>Practical</td>
                <td id="DAS632">DAS632<br> Theory</td>
                <td id="MLA632">MLA632<br>Practical</td>
                <td id="Research">Research</td>
                <td id="Free"></td>
                
            </tr>
            <tr>
                <td>14:00 - 15:00</td>
                <td id="Group">Group</td>
                <td id="Group">Group</td>
                <td id="Group">Group</td>
                <td id="Free"></td>
                <td id="Free"></td>
            </tr>
            <tr>
                <td>15:00 - 16:00</td>
                <td id="Free"></td>
                <td id="Free"></td>
                <td id="Free"></td>
                <td id="Free"></td>
                <td id="Free"></td>
            </tr>
            <tr>
                <td>16:00 PM</td>
                <td colspan="5" >End of College</td>
            </tr>
  </table>
</div>

<div class="tags has-addons">
  <span class="tag">Lecture by Deogratias</span>
  <span class="tag is-primary" id="DSD632"></span>
</div>

<div class="tags has-addons">
  <span class="tag">Lecture by Lusukama</span>
  <span class="tag is-primary" id="DAS632"></span>
</div>

<div class="tags has-addons">
  <span class="tag">Lecture by Deogratias</span>
  <span class="tag is-primary" id="MLA632"></span>
</div>

    </div>
  </div>
</section>


<!---Learn more in timetable page--->
<section class="hero  is-bold is-fullheight" id="LearnMore">
  <div class="hero-body">
    <div class="container has-text-centered">

     <p class="title">
      Want to Learn More ?
      </p>

      <span class="subtitle">
        <div class="card">
          <div class="card-content">
            <div class="content">
            The Timetable page is an essential tool for students to effectively manage their schedules. 
            By providing a clear and organized overview of their weekly schedules, including the date, 
            time, modules, and days of the week, students can easily access and keep track of their commitments. 
            This helps them to plan their time efficiently and stay on top of their academic responsibilities.
        </div>
      </div>
    </div>
    </span><br>

      <div class="columns is-desktop">

<!--First column--->
    <div class="column">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src='/assets/img/ManageSchedule.gif' alt="sloth using timetable">
          </figure>
                <div class="card">
                  <div class="card-content">
                    <div class="content">
                      Help you manage your time and allows you to plan ahead for study sessions.
                    </div>
                  </div>
          </div>
        </div>
      </div>
    </div>

  <!---Second Column--->

  <div class="column">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src='/assets/img/TrackOfLectures.gif' alt="T-rex keeping track of events">
          </figure>
                <div class="card">
                  <div class="card-content">
                    <div class="content">
                      Allows you to keep track of your lectures, not missing a single class.
                    </div>
                  </div>
          </div>
        </div>
      </div>
    </div>

  <!---Third Column-->
  <div class="column">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src='/assets/img/BemoreProductive.gif' alt="cat being productive">
          </figure>
                <div class="card">
                  <div class="card-content">
                    <div class="content">
                    Fabricates a sense of productivity, allowing you to strive.
                    </div>
                  </div>
          </div>
        </div>
      </div>
    </div>
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
  
  /* --timetable1 div modification */
  #timetable1{
    background-color:#fffff0;
  }

  /* ----timetable 1 title modification--- */
  #timetable1 .title{
    font-size:60px;

    font-family:"Gill Sans Extrabold", sans-serif;

    /* Positioning of title */
    position:relative;
    bottom:130px;
    left:40px;
  }
  

/* ---Background color of Sabrina lectures-- */
#Sabrina{
    background-color:peachpuff;
}

/* ---Background color of Simon lectures-- */
#Simon{
    background-color: lightblue;
}

/* ---Background color of Lunch timeures-- */
#Break{
    background-color: yellow;
}

/* --Movement of timetable1 gif-- */
#timetable1gif{
  position:relative;
    bottom:240px;
    left:30px;
}

  /* --timetable2 div modification */
  #timetable2{
    background-color:#f3e5ab;
  }

  /* ----timetable 2 title modification--- */
  #timetable2 .title{
    font-size:60px;

    font-family:"Gill Sans Extrabold", sans-serif;

    /* Positioning of title */
    position:relative;
    bottom:130px;
    left:40px;
  }

  /* DevOps color ledgend */
    #DevOps{
      background-color:#ddadaf;
    }

    /* Research color ledgend */
    #Research{
      background-color:#fadfad;
    }

    /* Java color ledgend */
    #Java{
      background-color:#9bc4e2;
    }

    /* Business Programming color Legend */
    #BusiProgramming{
      background-color:#bc987e;
    }

    /* Group color Legend */
    #Group{
      background-color:#01796f;
    }

    /* Java international exam prep */
    #JavaPrep{
      background-color:#c4c3d0;
    }

    /* --Movement of timetable1 gif-- */
#timetable3gif{
  position:relative;
    bottom:240px;
    left:30px;
}

  /* ----timetable 3 title modification--- */
  #timetable3 .title{
    font-size:60px;

    font-family:"Gill Sans Extrabold", sans-serif;

    /* Positioning of title */
    position:relative;
    bottom:130px;
    left:40px;
  }

    /* GDP522-C color ledgend */
    #GDP522C{
      background-color:#ffa07a;
    }

    /* GDA522-B color ledgend */
    #GDA522B{
      background-color:#fff8dc;
    }

    /* GTS522-A color ledgend */
    #GTS522A{
      background-color:#e3dac9;
    }

  /* --Movement of timetable4 gif-- */
#timetable4gif{
  position:relative;
    bottom:240px;
    left:30px;
}

  /* ----timetable 4 title modification--- */
  #timetable4 .title{
    font-size:60px;

    font-family:"Gill Sans Extrabold", sans-serif;

    /* Positioning of title */
    position:relative;
    bottom:130px;
    left:40px;
  }

    /* --timetable4 div modification */
    #timetable4{
    background-color:#f3e5ab;
  }

   /* DSD632 color ledgend */
   #DSD632{
      background-color:#a3c1ad;
    }

    /* CSA632 color ledgend */
    #CSA632{
      background-color:#edc9af;
    }

    /* MD632 color ledgend */
    #MD632{
      background-color:#a99a86;
    }
    

      /* --Movement of timetable4 gif-- */
#timetable5gif{
  position:relative;
    bottom:240px;
    left:30px;
}

  /* ----timetable 5 title modification--- */
  #timetable5 .title{
    font-size:60px;

    font-family:"Gill Sans Extrabold", sans-serif;

    /* Positioning of title */
    position:relative;
    bottom:130px;
    left:40px;
  }

    /* --timetable4 div modification */
    #timetable5{
    background-color:#fffff0;
  }

  
    /* DAS632 color ledgend */
    #DAS632{
      background-color:#ffa812;
    }

    /* MLA632 color ledgend */
    #MLA632{
      background-color:#b94e48;
    }

    #DSD632-color{
      background-color:white;
    }

     /* ----LearnMore title modification--- */
  #LearnMore .title{
    font-size:60px;

    font-family:"Gill Sans Extrabold", sans-serif;

    /* Positioning of title */
    position:relative;
    bottom:230px;
    left:40px;
  }

    /* --LearnMore div modification */
    #LearnMore{
    background-color:#f3e5ab;
  }

  #LearnMore .subtitle{
    position:relative;
    bottom:200px;
    left:20px;
  }

    /* ----Todo list title modification--- */
    #Todo .title{
    font-size:60px;

    /* font-family: "Times New Roman", Times, serif; */

    /* Positioning of title */
    position:relative;
    bottom:500px;
    left:40px;
  }

    /* --timetable4 div modification */
    #Todo{
    /* background-color:#8fbc8f; */
  }

  @media screen and (max-width:500px){
    #timetable1{
      font-size:10px;
    }

    #timetable1 .title{
      position:relative;
      left:20px;
      font-size:30px;

    }

    #timetable1 #timetable1gif{
      /* Image sizing */
      max-width: 10%;
      height: auto;
      
      /* Positioning of gif mobile */
      position:relative;
      left:-13px;
      bottom:190px;
    }

    /* Second timetable positioning and sizing */
    #timetable2{
      font-size:10px;
    }

    #timetable2 .title{
      position:relative;
      left:20px;
      font-size:30px;
      bottom:130px;

    }

    #timetable2 #timetable1gif{
      /* Image sizing */
      max-width: 10%;
      height: auto;
      
      /* Positioning of gif mobile */
      position:relative;
      left:-13px;
      bottom:190px;
    }

    /* Third timetable positioning and sizing */
    #timetable3{
      font-size:10px;
    }

    #timetable3 .title{
      position:relative;
      left:20px;
      font-size:30px;
      bottom:100px;

    }

    #timetable3 #timetable3gif{
      /* Image sizing */
      max-width: 10%;
      height: auto;
      
      /* Positioning of gif mobile */
      position:relative;
      left:-13px;
      bottom:158px;
    }
    /* Fourth timetable positioning and sizing */

    #timetable4{
      font-size:10px;
    }

    #timetable4 .title{
      position:relative;
      left:20px;
      font-size:30px;
      bottom:100px;

    }

    #timetable4 #timetable4gif{
      /* Image sizing */
      max-width: 10%;
      height: auto;
      
      /* Positioning of gif mobile */
      position:relative;
      left:-13px;
      bottom:158px;
    }

     /* Fifth timetable positioning and sizing */
     #timetable5{
      font-size:10px;
    }

    #timetable5 .title{
      position:relative;
      left:20px;
      font-size:30px;
      bottom:100px;

    }

    #timetable5 #timetable5gif{
      /* Image sizing */
      max-width: 10%;
      height: auto;
      
      /* Positioning of gif mobile */
      position:relative;
      left:-13px;
      bottom:158px;
    }

       /* sixth timetable positioning and sizing */
       #LearnMore .title{
        font-size:30px;

        /* Positioning of gif mobile */
        position:relative;
        top:5px;
        left:-13px;

       }

       #LearnMore .subtitle{
        font-size:20px;
        text-align:justify;


        /* Positioning of text mobile */
        position:relative;
        top:10px;
        left:0px;
     

       }




  }


  `]
})
export class TimetableComponent {

}
