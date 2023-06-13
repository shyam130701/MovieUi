import { Component } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { Userdata } from '../model/userdata';
import { UserData } from '../model/user-data';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {

  constructor(private userservice:MovieserviceService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.gettingUser();
  }

  user:any=new UserData();
  userName:any=localStorage.getItem("credentials");
  gettingUser()
  {
    this.userservice.getUser(this.userName).subscribe(
      (data)=>
      {
        this.user=data;
        console.log(data);
        console.log(this.user.role)
      }
    )
  }
}
