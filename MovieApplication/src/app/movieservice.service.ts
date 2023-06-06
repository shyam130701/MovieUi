import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from './model/user-data';
import { Observable } from 'rxjs';
import { Movie } from './model/movie';
import { Credentials } from './model/credentials';
import { Booking } from './model/booking';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor(private http: HttpClient) { }



  register(user: UserData): Observable<Object> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(user);
    return this.http.post<Object>("http://localhost:9098/api/v1/auth/register",body,{'headers':headers,responseType:'text' as 'json'})
  }

  addMovie(movie:Movie):Observable<Object>{
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(movie);
    return this.http.post<Object>("http://localhost:9098/api/admin/addMovie",body,{'headers':headers,responseType:'text' as 'json'})

  }


  login(credentials:Credentials):Observable<Object>{
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(credentials);
    return this.http.post<Object>("http://localhost:9098/api/v1/auth/login",body,{'headers':headers,responseType:'text' as 'json'})

  }

  booking(booking:Booking):Observable<Object>{
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(booking);
    return this.http.post<Object>("http://localhost:9098/api/user/booking",body,{'headers':headers,responseType:'text' as 'json'})
  }

}
