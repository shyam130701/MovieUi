import { Component, ViewChild } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { Movie } from '../model/movie';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent {

  constructor(private service: MovieserviceService, private _liveAnnouncer: LiveAnnouncer,private toast:ToastrService,private route:Router) { }
  movieList: Movie[] = [];


  displayedColumns: string[] = ['id', 'movieName', 'theaterName', 'price', 'availableTickets', 'totalTickets','delete','update'];
  dataSource: any;

  ngOnInit(): void {


    this.getList();
  }


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;


  roles:any=localStorage.getItem("userData");



  getList() {
    this.service.getAllMovies().subscribe(
      ((data:any) => {
        this.movieList = data;
        this.dataSource = new MatTableDataSource<Movie>(this.movieList);
        // this.dataSource=this.ELEMENT_DATA;
        this.dataSource.paginator = this.paginator;

        this.dataSource.sort = this.sort;

        console.log(this.movieList)
      })
    )
  }

  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  deletingMovie(movieName:string,theaterName:string)
  {
    if(confirm("Are you sure to delete the movie"))
    this.service.deleteMovie(movieName,theaterName).subscribe(
      (data)=>
      {
        setTimeout(()=>{

          location.reload()
      }, 2000);
        this.toast.success("Movie Deleted Successfully")
        console.log(data)
      },
      (error)=>
      {
        console.error(error)
        this.toast.warning("Movie Not Deleted")
      }
    )
  }

  updateTicket(movieName:string,theaterName:string)
  {
    if(confirm("Are you sure to update the movie"))
    this.service.addTicket(movieName,theaterName).subscribe(
      (data)=>
      {
        setTimeout(()=>{

          location.reload()
      }, 2000);
        this.toast.success("Ticket Added Successfully")
        console.log(data)
      },
      (error)=>
      {
        console.error(error)
        this.toast.warning("Ticket Update Failed")
      }
    )
  }


}







