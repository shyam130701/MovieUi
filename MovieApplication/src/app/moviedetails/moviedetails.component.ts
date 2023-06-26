import { FormBuilder, Validators } from '@angular/forms';
import { MovieserviceService } from '../movieservice.service';
import { Movie } from './../model/movie';
import { Component } from '@angular/core';
import { Credentials } from '../model/credentials';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent {


  constructor(private movie:MovieserviceService,private fb:FormBuilder,private route:Router,private toast:ToastrService){}
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
      id:['',Validators.required],
      movieName:['',Validators.required],
      theaterName:['',Validators.required],
      price:['',Validators.required],
      availableTickets:['',Validators.required],
      totalTickets:100
    }
  )

  movieDetails:Movie=new Movie();

  createMovie()
  {
    this.movie.addMovie(this.movieDetails).subscribe(
      (data)=>
      {
        this.route.navigate(['/movieList'])
        this.toast.success("Movie Added")
        setTimeout(()=>{


          location.reload()

      }, 2000);
        console.log(data);
      },(err)=>
      {
        this.toast.error("Failed")
        console.log(err)
      }
    )
  }


}
