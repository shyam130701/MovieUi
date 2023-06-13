import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { Booking } from '../model/booking';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent {
  constructor(private service: MovieserviceService, private _liveAnnouncer: LiveAnnouncer) { }

  bookingList:Booking[]=[];

  displayedColumns: string[] = ['bookingId','userName', 'movieName', 'theaterName','ticketCount'];
  dataSource: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.gettingBookingList();

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  gettingBookingList()
  {
    this.service.getBookingList().subscribe(
      (data:any)=>
      {
        this.bookingList=data;
        this.dataSource = new MatTableDataSource<Booking>(this.bookingList);
        console.log(data);
        // this.dataSource=this.ELEMENT_DATA;
        this.dataSource.paginator = this.paginator;

        this.dataSource.sort = this.sort;
      }
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
