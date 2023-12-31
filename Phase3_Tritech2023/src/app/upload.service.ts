import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }

  // method to uplaod file
  uploadFile(vals:any):Observable<any>{
    let data = vals;
    return this.http.post("https://api.cloudinary.com/v1_1/dyye99s2l/image/upload",data)
  }
}
