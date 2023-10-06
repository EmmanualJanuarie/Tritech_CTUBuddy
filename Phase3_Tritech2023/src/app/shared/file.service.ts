import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FileMetaData } from '../model/file-meta-data';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private fstore : AngularFirestore, private fstorage  : AngularFireStorage) {}
  

  // save the meta data of the file to filestore
  saveFileMetaData(fileObj : FileMetaData){

    const fileMeta = {
      id: '',
      name: fileObj.name,
      size:fileObj.size,
      url:fileObj.url,
      UploadedBy:fileObj.UploadedBy
    }

    fileMeta.id = this.fstore.createId();
    this.fstore.collection('/Upload').add(fileMeta);
      
  }

  // Displaying the files
  getFiles(){
    return this.fstore.collection('/Uploads').snapshotChanges();
  }

  // delete files
  deleteFile(fileMeta:FileMetaData){
    this.fstore.collection('/Uploads').doc(fileMeta.id).delete();
    this.fstorage.ref('/Uploads/' + fileMeta.name).delete();
  }
}
