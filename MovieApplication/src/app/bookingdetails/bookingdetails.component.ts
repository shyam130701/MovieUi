import { Component } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { Booking } from '../model/booking';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent {

  constructor(private service: MovieserviceService, private fb: FormBuilder) { }

  bookForm = this.fb.group(
    {
      userName: '',
      movieName: '',
      theaterName: '',
      ticketCount: ''

    }
  )
  book: Booking = new Booking();


  ticketBooking() {
    this.service.booking(this.book).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.error(err);
      }
    )

  }

}
