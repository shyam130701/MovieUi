import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { LoginComponent } from './login/login.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'addMovie',component:MoviedetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'booking',component:BookingdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
