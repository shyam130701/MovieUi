import { Component } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Credentials } from '../model/credentials';
import { Loginresponse } from '../model/loginresponse';
import { Token } from '@angular/compiler';
import { Subject } from 'rxjs';
import { Route, Router, RouterModule } from '@angular/router';
import { Forgotpassword } from '../model/forgotpassword';
import { MatDialog } from '@angular/material/dialog';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service:MovieserviceService,private fb:FormBuilder,private route:Router,private dialog:MatDialog,private toast:ToastrService){}

  ngOnInit(): void {



  }

  loginForm=this.fb.group(
    {
      userName:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    }
  )

  token:any;
  credentials:Credentials=new Credentials();
  showFiller = false;
  badgevisible = false;



  badgevisibility() {
    this.badgevisible = true;
  }
  isLoggedIn:any=false;



  login()
  {
    this.service.login(this.credentials).subscribe(
      (data:any)=>
      {
        localStorage.setItem("credentials",this.credentials.userName);
        console.log(data);
        this.token=data;
        console.log(this.login);
        localStorage.setItem("token",this.token);
        this.isLoggedIn=true;
        localStorage.setItem("login",this.isLoggedIn);
        this.service.getUser(this.credentials.userName).subscribe(
          (res:any)=>{
            localStorage.setItem("userData",res.role);
            console.log(res)
          }
        )
        setTimeout(()=>{


          location.reload()

      }, 2000);
        // this.route.navigate(['/addMovie']);

        this.toast.success("Logged In Successfully")
        this.route.navigate(['/']);


      },
      (error)=>
      {
        console.error(error);
        this.toast.error("Login Failed")
        this.isLoggedIn=false;
        localStorage.setItem("login",this.isLoggedIn);
        setTimeout(()=>{


          location.reload()

      }, 2000);
      }
    )
  }




  openPop()
  {
    this.dialog.open(ForgotpasswordComponent,{
      width:'30%',
      height:'400px'
    })
  }

}
