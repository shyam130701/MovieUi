import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private dialog:MatDialog,private route:Router,private toast:ToastrService){}
  showFiller = false;
  badgevisible = false;

  roles:any=localStorage.getItem("userData");
  isLoggedIn:any=localStorage.getItem("login");
  badgevisibility() {
    this.badgevisible = true;
  }

  logout()
  {
    localStorage.clear();
    setTimeout(()=>{

      this.route.navigate(['']);
      location.reload()
  }, 2000);

  this.toast.success("Logged out");


    // alert("logged out")
  }

  openPop()
  {
    this.dialog.open(UserdetailsComponent,{
      width:'30%',
      height:'400px'
    })
  }
}
