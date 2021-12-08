import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>('https://programming-quotes-api.herokuapp.com/quotes');
  }
}

// export interface Results
// {
//     results:any[];
//     info:any[]; 
// }