import { Component, OnInit } from '@angular/core';
import {Student} from "../model/student";
import {ShareResourcesService} from '../shared/share-resources.service';

// import { FileService } from '../shared/file.service';
import { FileMetaData } from '../model/file-meta-data';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import { finalize } from 'rxjs/operators';
import { FileService } from '../shared/file.service';
import { UploadService } from '../upload.service';




@Component({
  selector: 'app-share-resources',
  template: `

  <!-- first section -->
    <section class="hero is-bold is-fullheight" id="hero" style="background-color:#f3e5ab;">
  <div class="hero-body">
    <div class="container has-text-centered">

    <p class="title" id="dataSection">
      Student Data Form
      </p>

    <div class="columns" id="section1">
      <div class="column" id="studentForm">
       <!-- First name -->
       <div class="field">
          <label class="label" id="firstName">First Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Input first name" name="firstName" [(ngModel)]="firstName">
          </div>
        </div>

        <!-- Last Name -->
        <div class="field">
          <label class="label" for="lastName" id="lastName">Last Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Input last name" name="lastName" [(ngModel)]="lastName">
          </div>
        </div>

         <!-- Student Number -->
         <div class="field">
          <label class="label" for="studentNumber" id="studentNumber">Student Number</label>
          <div class="control">
            <input class="input" type="text" placeholder="Input student number" name="studentNumber" [(ngModel)]="studentNumber">
          </div>
        </div>

        <!-- Enrolled course -->
        <div class="field">
          <label class="label" for="courseEnrolled" id="enrolledCourse">Enrolled Course</label>
          <div class="control">
            <input class="input" type="text" placeholder="Input enrolled course" name="courseEnrolled" [(ngModel)]="courseEnrolled">
          </div>
        </div>
     </div>
     </div>

          <!-- Submit button-->
          <div class="buttons">
            <button class="button is-primary" (click)="addStudent()" id="button">Add Student Data</button>
          </div>
    

    
       
        
        <div class="column" id="container">
        <div class="card" id="cardcontainer">
      <div class="card-content">
        <div class="content">

          <div class="table-container">
              <table class="table">
               <thead>
                <tr>
                  <!-- Heading -->
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Student Number</th>
                  <th scope="col">Enrolled Course</th>
                  <th scope="col">Action</th>
                </tr>
               </thead>

               <tbody>
                <tr *ngFor="let student of  StudentEntries">
                <td >{{student.firstName}}</td>
                <td >{{student.lastName}}</td>
                <td >{{student.studentNumber}}</td>
                <td >{{student.courseEnrolled}}</td>
                <td>
                  <!-- delete button in table--->
                <div class="buttons" id="deleteButton">
                  <button class="button is-danger" (click)="deleteEntry(student)">Delete</button>
                </div> 
                </td>
                
                </tr>
               </tbody>
              </table>
          </div>
         
        </div>
      </div>
    </div>
        </div>

      </div>


   
  </div>
</section>

<!-- Second section -->
<section class="hero is-bold is-fullheight" id="hero1">
  <div class="hero-body">
    <div class="container has-text-centered">
    

     <p class="title" id="dataSection2">
      Upload files
      </p>
      <ngx-dropzone (change)="onSelect($event)">
        <ngx-dropzone-label>Drag and Drop File Here</ngx-dropzone-label>
          <ngx-dropzone-preview *ngFor="let file of files" [removable]="true" (removed)="onRemove(file)">
            <ngx-dropzone-label>
              {{file.name}} {{file.type}}
            </ngx-dropzone-label>
          </ngx-dropzone-preview>
      </ngx-dropzone>

      <!-- file upload buttton -->
      <!-- <div class="buttons">
        <button class="button is-danger" (click)="uploadFile()">Upload</button>
      </div> -->

      <div class="column" id="container">
        <div class="card" id="cardcontainer">
      <div class="card-content">
        <div class="content">

          <div class="table-container">
              <table class="table">
               <thead>
                <tr>
                  <!-- Heading -->
                  <th scope="col">File Name</th>
                  <th scope="col">File Type</th>
                  <th scope="col">Uploaded By</th>
                  <th scope="col">Action</th>
            
                </tr>
               </thead>

               <tbody>
                <tr *ngFor="let file of files">
                <td >{{file.name}}</td>
                <td >{{file.type}}</td>
                <td *ngFor="let student of  StudentEntries">{{student.studentNumber}}</td>
                <td>
                  <!-- download button in table--->
                <a href="{{file.name}}" download>
                  <button class="button is-primary">Download</button>
                </a>
                </td>
                
                </tr>
               </tbody>
              </table>
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

  /* ------------label positioning on form--------- */
  #firstName{
    position:relative;
    left:-620px;
  }

  #lastName{
    position:relative;
    left:-620px;
  }

  #studentNumber{
    position:relative;
    left:-600px;
  }

  #enrolledCourse{
    position:relative;
    left:-605px;
  }

  

   
   #dataSection,#dataSection2 {
    position:relative;
    bottom:150px;
    left:30px;

    /* font modifications */
    font-size:70px;
    font-family:"Gill Sans Extrabold", sans-serif;
   }



   #section1 #studentForm{
    position:relative;
    left:0px;
   }

   #button{
    position:relative;
    left:0px;
    bottom:4px;
   }

   #hero1{
    background-color:#fffff0;
  }

   .progress{
    border:1px solid black;
    height:24px;
   }

   .progressbar{
    background-color: red;
   }

   @media screen and (max-width:414px){
    /* student form form */
    #hero .title{
      font-size:40px;

      /* positioning of text and sizing */
      position:relative;
      bottom:50px;
      left:-65.5px;
    }

    /* Upload section */
    #dataSection{
      font-size:40px;
       /* positioning of text and sizing */
       position:relative;
       margin-left:70px; 
       width:100%;
      
    }

    #dataSection2{
      position:relative;
      left:0px;
    }

    /* ---student form--- */
    #studentForm{
    position:relative;
    bottom:30px;
    margin-left:15px;  
    max-width:95%;

    }


    #hero .column{
      max-width:85%;
    }

    #button{
      position:relative;
      left:20px;
      bottom:20px;
    }

    #container{
    position:relative;
    bottom:0px;
    margin-left:15px;  
    max-width:50%;
    }

    #cardcontainer{
      max-width:300px;
      height:auto;
    }

    #upload{
      position:relative;
      bottom:0px;
      margin-left:35px;  
      max-width:90%;
    }
    
    #uploadCard{
      max-width:300px;
      height:auto;
    }

    /* ----mobile student fom labels----- */
    #firstName{
      position:relative;
      left:-100px; 
    }
    #lastName{
      position:relative;
      left:-100px; 
    }
    #enrolledCourse{
      position:relative;
      left:-80px; 
    }

    #studentNumber{
      position:relative;
      left:-80px; 
    }
    /* Upload section positioning */
    #hero1 #card1{
     position:relative;
     right:10px;
    }

    #uploadBtn{
      position:relative;
      right:10px;
    }

    #card1{
      max-width:300px;
      height:auto;
    }

   
    
   }

   


  `]
})
export class ShareResourcesComponent implements OnInit {

  // ============[File section]==start=================//
  files:File[] = []
  
  // ============[File section]== e nd=================//

 

  StudentEntries : Student[] = [];
  StudentObj : Student = {
    id: '',
    firstName: '',
    lastName: '',
    studentNumber: '',
    courseEnrolled: '',
  };

  id : string = '';
  firstName: string = '';
  lastName: string = '';
  studentNumber: string = '';
  courseEnrolled: string = '';


  private fStorage:AngularFireStorage;
  private fileService:FileService;
  constructor(private resource : ShareResourcesService, private fStorageM: AngularFireStorageModule ,private upload: UploadService){}

  ngOnInit(): void {
    this.getEntries();
 
    
  }

  // method to getAllEntries
  getEntries() {
    this.resource.getEntries().subscribe(res =>{

      this.StudentEntries = res.map((e: any )=> {
        const resource = e.payload.doc.data();
        resource.id = e.payload.doc.id;
        return resource;
      })
    },err =>{
      // raising alert when error is reached
      alert('Error while optaining student entry')

    })
  }

    // method to rest form
  resetForm() {
    this.id  = '';
    this.firstName = '';
    this.lastName = '';
    this.studentNumber = '';
    this.courseEnrolled = '';
  }

  // method to add student entries
  addStudent() {
    // validation for empty inputs
    if(this.firstName == '' || this.lastName == '' || this.studentNumber == '' || this.courseEnrolled == ''){

      // alert message
      alert('Fill all the input fields')
    }

    this.StudentObj.id = '';
    this.StudentObj.firstName = this.firstName;
    this.StudentObj.lastName = this.lastName;
    this.StudentObj.studentNumber = this.studentNumber;
    this.StudentObj.courseEnrolled = this.courseEnrolled;

    this.resource.addStudent(this.StudentObj);
    this.resetForm();


  }

  // method to update entries
  updateEntry(){

  }

  // method to delete entries
  deleteEntry(student : Student) {
    if(window.confirm('Are you sure you want to delete' + "  " + student.firstName + "  " + student.lastName+" ?")){
    this.resource.deleteEntry(student);
  }

}


  // ============[File section]==start=================//

  // select method
  onSelect(event:any){
    console.log(event)
    this.files.push(...event.addedFiles)
    
  }
  // remove method
  onRemove(event:any){
    this.files.splice(this.files.indexOf(event),1)

  }

  // uplaoding files
  uploadFile(){
    // validation if no file is selected
    if(!this.files[0]){
      alert("No file selected!")
    }
    for(let i=0; i<this.files.length;i++){
      const file_data = this.files[i]
      const data = new FormData()
      data.append('file',file_data)
      data.append('upload_preset', 'ml_default')
      data.append('cloud_name','dyye99s2l')
      this.upload.uploadFile(data).subscribe((res)=>{
        console.log(res)
      })
    }
  }

  // downloading file
  downloadFile(){
    
  }


  // ============[File section]==End=================//



  
}
 




 
  
  

