import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";  //import
@Injectable({
  providedIn: 'root'
})
export class BackendAccessService {
  userList : any =[];
  data : any;
  expresponse : string="";
  constructor(private http : HttpClient){
  }
}
 
