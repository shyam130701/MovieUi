import { UserData } from './../model/user-data';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MovieserviceService } from '../movieservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private user:MovieserviceService,private fb:FormBuilder) { }

  reactiveForm=this.fb.group(
    {
      id:'',
      name:'',
      age:'',
      email:'',
      password:'',
      role:'USER'
    }
  )

  userdata:UserData = new UserData();
  submit()
  {
    console.log(this.reactiveForm.value);
    this.user.register(this.userdata).subscribe(
      (data)=>{
        console.log(data);
        location.reload();
      }
    )
  }


}
