import { UserData } from './../model/user-data';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieserviceService } from '../movieservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private user:MovieserviceService,private fb:FormBuilder,private toast:ToastrService,private router:Router) { }

  reactiveForm=this.fb.group(
    {
      id:['',Validators.required],
      name:['',Validators.required],
      age:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
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
        this.toast.success("Registered Successfully");
        setTimeout(()=>{


          location.reload()

      }, 2000);

      this.router.navigate(['/login'])
      },(err)=>
      {
        console.log(err);
        this.toast.error("Registered Failed");

      }
    )
  }


}
