import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from './model/user-data';
import { Observable } from 'rxjs';
import { Movie } from './model/movie';
import { Credentials } from './model/credentials';
import { Booking } from './model/booking';
import { Forgotpassword } from './model/forgotpassword';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor(private http: HttpClient) { }

  // https://ccd0fc0vkf.execute-api.us-west-2.amazonaws.com/MovieDeployV1/user

  private url="54.200.29.215";

  token:any="Bearer "+localStorage.getItem("token");

  register(user: UserData): Observable<Object> {
    const headers = {'content-type':'application/json'};

    const body = JSON.stringify(user);
    return this.http.post<Object>("http://localhost:9099/api/v1/auth/register",body,{'headers':headers,responseType:'text' as 'json'})
  }


  login(credentials:Credentials):Observable<Object>{
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(credentials);
    return this.http.post<Object>("http://localhost:9098/call/consumer/login",credentials,{'headers':headers,responseType:'text' as 'json'})

  }

  addMovie(movie:Movie):Observable<Object>{
    const headers = new HttpHeaders().set('content-type','application/json').set('Access-Control-Allow-Origin','*');
    const body = JSON.stringify(movie);
    return this.http.post<Object>("http://localhost:9098/api/admin/addMovie",movie,{'headers':headers,responseType:'text' as 'json'})

  }



  booking(booking:Booking):Observable<Object>{
    const headers = new HttpHeaders().set('content-type','application/json').set('Access-Control-Allow-Origin','*');
    const body = JSON.stringify(booking);
    return this.http.post<Object>("http://localhost:9098/api/user/booking",booking,{'headers':headers,responseType:'text' as 'json'})
  }

  getAllMovies()
  {

    return this.http.get("http://localhost:9098/api/user/list")
  }

  getUser(name:string)
  {

    const headers = new HttpHeaders().set('content-type','application/json').set('Access-Control-Allow-Origin','*');
    return this.http.get("http://localhost:9099/api/v1/auth/getUser?userName="+`${name}`,{'headers':headers});
  }

  getBookingList()
  {
    // const headers = new HttpHeaders().set('content-type','application/json').set('Access-Control-Allow-Origin','*').set("Authorization",this.token);
    return this.http.get("http://localhost:9098/api/admin/bookingList");
  }

  forgotPassword(forgot:Forgotpassword){

    const headers = new HttpHeaders().set('content-type','application/json');
    return this.http.put("http://localhost:9099/api/v1/auth/update",forgot,{'headers':headers,responseType:'text' as 'json'});
  }


  deleteMovie(movieName:string,theaterName:string){


    const params = new HttpParams()
  .set("movieName", movieName)
  .set("theaterName", theaterName);
  const headers = new HttpHeaders().set('content-type','application/json');

    return this.http.delete("http://localhost:9098/api/admin/delete?"+`${params}`,{'headers':headers,responseType:'text' as 'json'})


  }

  addTicket(movieName:string,theaterName:string){

    const params = new HttpParams()
    .set("movieName", movieName)
    .set("theaterName", theaterName);
    const headers = new HttpHeaders().set('content-type','application/json');

    return this.http.put("http://localhost:9098/api/admin/addTicket?"+`${params}`,{movieName,theaterName},{'headers':headers,responseType:'text' as 'json'})

  }


}
