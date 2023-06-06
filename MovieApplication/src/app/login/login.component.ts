import { Component } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';
import { FormBuilder } from '@angular/forms';
import { Credentials } from '../model/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service:MovieserviceService,private fb:FormBuilder){}

  loginForm=this.fb.group(
    {
      userName:'',
      password:''
    }
  )

  credentials:Credentials=new Credentials();

  login()
  {
    this.service.login(this.credentials).subscribe(
      (data)=>
      {
        console.log(data);
      },
      (error)=>
      {
        console.error(error);
      }
    )
  }

}
