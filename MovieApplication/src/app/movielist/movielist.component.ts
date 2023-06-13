import { Component, ViewChild } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { Movie } from '../model/movie';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent {

  constructor(private service: MovieserviceService, private _liveAnnouncer: LiveAnnouncer) { }
  movieList: Movie[] = [];


  displayedColumns: string[] = ['id', 'movieName', 'theaterName', 'price', 'availableTickets', 'totalTickets'];
  dataSource: any;

  ngOnInit(): void {


    this.getList();
  }


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;




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


}







