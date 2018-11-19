import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MebamApiProvider {

  private baseUrl = "https://mebamapi.firebaseio.com/activite.json"

  constructor(public http: HttpClient) {

  }

  getUsers(){
   /* return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/activite.json`)
        .subscribe(res => console.log(res)) 
    });
    */
   return this.http.get(this.baseUrl)
  }

}
