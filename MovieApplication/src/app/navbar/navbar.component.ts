import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserdetailsComponent } from '../userdetails/userdetails.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private dialog:MatDialog){}
  showFiller = false;
  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

  logout()
  {
    localStorage.clear();
    alert("logged out")
  }

  openPop()
  {
    this.dialog.open(UserdetailsComponent,{
      width:'30%',
      height:'400px'
    })
  }
}
