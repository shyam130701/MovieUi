import { Component } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { Booking } from '../model/booking';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent {

  constructor(private service: MovieserviceService, private fb: FormBuilder,private toast:ToastrService,private route:Router) { }

  bookForm = this.fb.group(
    {
      userName: ['',Validators.required],
      movieName: ['',Validators.required],
      theaterName: ['',Validators.required],
      ticketCount: ['',Validators.required]

    }
  )
  book: Booking = new Booking();


  ticketBooking() {
    this.service.booking(this.book).subscribe(
      (data) => {
        console.log(data);
        this.toast.success("Ticket Booked Successfully")
        setTimeout(()=>{
          location.reload()
      }, 2000);
      },
      (err) => {
        console.error(err);
      }
    )

  }

}
