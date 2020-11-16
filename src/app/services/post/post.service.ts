import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = 'http://34.121.0.44:8081/api/';
  apiKey = ''; // <-- Enter your own key here!

    //Constructor of the Service with Dependency Injection @param http The standard Angular HttpClient to make requests

  constructor(private http: HttpClient) { }
 
  post(url: string, object: any): Observable<any> {
    return this.http.post(this.baseUrl+url, object);
  }

}
