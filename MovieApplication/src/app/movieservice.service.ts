import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  // https://ccd0fc0vkf.execute-api.us-west-2.amazonaws.com/MovieDeployV1/user

  private url="54.200.29.215";


  register(user: UserData): Observable<Object> {
    const headers = {'content-type':'application/json'};

    const body = JSON.stringify(user);
    return this.http.post<Object>("http://localhost:9098/api/v1/auth/register",body,{'headers':headers,responseType:'text' as 'json'})
  }


  login(credentials:Credentials):Observable<Object>{
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(credentials);
    return this.http.post<Object>("http://localhost:9098/api/v1/auth/login",credentials,{'headers':headers,responseType:'text' as 'json'})

  }

  addMovie(movie:Movie):Observable<Object>{
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(movie);
    return this.http.post<Object>("http://localhost:9098/api/admin/addMovie",movie,{'headers':headers,responseType:'text' as 'json'})

  }



  booking(booking:Booking):Observable<Object>{
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(booking);
    return this.http.post<Object>("http://localhost:9098/api/user/booking",booking,{'headers':headers,responseType:'text' as 'json'})
  }

  getAllMovies()
  {
    return this.http.get("http://localhost:9098/api/user/list")
  }

  getUser(name:string)
  {
    return this.http.get("http://localhost:9098/api/v1/auth/getUser?userName="+`${name}`);
  }

  getBookingList()
  {
    return this.http.get("http://localhost:9098/api/admin/bookingList");
  }


}
