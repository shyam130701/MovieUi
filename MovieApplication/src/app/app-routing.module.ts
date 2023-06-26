import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { LoginComponent } from './login/login.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { MovielistComponent } from './movielist/movielist.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'addMovie',component:MoviedetailsComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'booking',component:BookingdetailsComponent,canActivate:[AuthGuard]},
  {path:'',component:UserpageComponent},
  {path:'bookingList',component:BookinglistComponent,canActivate:[AuthGuard]},
  {path:'movieList',component:MovielistComponent,canActivate:[AuthGuard]},
  {path:'**',redirectTo:'login'}
  // {path:'userPage',component:UserpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
