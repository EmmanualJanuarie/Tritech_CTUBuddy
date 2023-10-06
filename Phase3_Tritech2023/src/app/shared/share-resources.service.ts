import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class ShareResourcesService {

  constructor(private afs :AngularFirestore){}
 
  // Add student information with resources
  // fabricating method to add resources
  addStudent(student: Student){
    student.id = this.afs.createId();
    return this.afs.collection('/Students').add(student);
  }

  // get all student inputs
  // fabricating a method to get all student entries
  getEntries(){
    return this.afs.collection('/Students').snapshotChanges();
  }

  // deleting entry
  // fabricating a method to delete entry
  deleteEntry(student : Student) {
    return this.afs.doc('/Students/' + student.id).delete();
  }

  // update Entry
  // fabricating a method to update entry
  updateEntry(student : Student) {
    this.deleteEntry(student);
    this.addStudent(student);
  }


}