import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Forgotpassword } from '../model/forgotpassword';
import { MovieserviceService } from '../movieservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {

  constructor(private fb:FormBuilder,private service:MovieserviceService,private route:Router,private toast:ToastrService){}

  forgotCredentialsForm=this.fb.group(
    {
      userName:'',
      newPassword:''
    }
  )

  password:Forgotpassword=new Forgotpassword();

  forgotCredentials(){
    this.service.forgotPassword(this.password).subscribe(
      (data)=>
      {
        setTimeout(()=>{

          this.route.navigate(['/login']);
          location.reload()
      }, 2000);
      this.toast.success("Password Updated Successfully")
        console.log(data);
      },
      (err)=>
      {
        console.error("Password not updated")
        setTimeout(()=>{

          this.route.navigate(['/login']);
          location.reload()
      }, 2000);
        this.toast.error("Password Updation Failed")
      }
    )
  }


}
