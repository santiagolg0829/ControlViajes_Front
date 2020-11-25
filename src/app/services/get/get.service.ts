import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GetService {

  baseUrl = environment.baseUrl;
  apiKey = ''; // <-- Enter your own key here!

  //Constructor of the Service with Dependency Injection @param http The standard Angular HttpClient to make requests

  constructor(private http: HttpClient, private storage: Storage) { }

  get(url: any, id?: any): Observable<any> {

    let reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(this.baseUrl + url + "/" + (id == null ? "" : id), { headers: reqHeader });
  }


}
