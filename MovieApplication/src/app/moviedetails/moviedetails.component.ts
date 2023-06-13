import { FormBuilder } from '@angular/forms';
import { MovieserviceService } from '../movieservice.service';
import { Movie } from './../model/movie';
import { Component } from '@angular/core';
import { Credentials } from '../model/credentials';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent {


  constructor(private movie:MovieserviceService,private fb:FormBuilder){}
  login:any;

  ngOnInit(): void {

    this.login=localStorage.getItem("credentials");
    this.movie.getUser(this.login).subscribe(
      (data)=>
      {
        console.log(data);
      }
    )
  }

  movieForm=this.fb.group(
    {
      id:'',
      movieName:'',
      theaterName:'',
      price:'',
      availableTickets:'',
      totalTickets:100
    }
  )

  movieDetails:Movie=new Movie();

  createMovie()
  {
    this.movie.addMovie(this.movieDetails).subscribe(
      (data)=>
      {
        console.log(data);
      }
    )
  }


}
