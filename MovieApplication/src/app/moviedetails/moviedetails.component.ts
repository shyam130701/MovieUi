import { FormBuilder } from '@angular/forms';
import { MovieserviceService } from '../movieservice.service';
import { Movie } from './../model/movie';
import { Component } from '@angular/core';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent {


  constructor(private movie:MovieserviceService,private fb:FormBuilder){}

  ngOnInit(): void {}

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
