import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PutService {

  baseUrl = 'http://34.121.0.44:8081/api/';
  apiKey = ''; // <-- Enter your own key here!

  //Constructor of the Service with Dependency Injection @param http The standard Angular HttpClient to make requests

  constructor(private http: HttpClient, private storage: Storage) { }

  put(url: string, id: string, object: any): Observable<any> {
    let reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put(this.baseUrl + url + "/" + id, object, { headers: reqHeader });
  }

}
