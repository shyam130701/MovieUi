import { Component } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { FormBuilder } from '@angular/forms';
import { Credentials } from '../model/credentials';
import { Loginresponse } from '../model/loginresponse';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service:MovieserviceService,private fb:FormBuilder){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


  }

  loginForm=this.fb.group(
    {
      userName:'',
      password:''
    }
  )

  token:any;
  credentials:Credentials=new Credentials();


  login()
  {
    this.service.login(this.credentials).subscribe(
      (data:any)=>
      {
        localStorage.setItem("credentials",this.credentials.userName);
        this.service.getUser(this.credentials.userName).subscribe(
          (res:any)=>{
            localStorage.setItem("userData",res);
            console.log(res)
          }
        )
        console.log(data);
        this.token=data;
        console.log(this.login);
        localStorage.setItem("token",this.token);
      },
      (error)=>
      {
        console.error(error);
      }
    )
  }



}
