import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint: string = 'https://localhost:7124/User';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(public http: HttpClient) { }

  create(data:any): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    let body = JSON.stringify(data);
    return this.http.post<any>(this.endpoint, body, {'headers':headers}).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg)
    return throwError(msg);
  }
}
