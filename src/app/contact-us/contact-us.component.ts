import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  isLoading: boolean = false;
  apiSuc:string='';
  apiError:string='';
  constructor(private _AuthService:AuthService){}
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])

  })

  handleRegisterForm(registerForm: FormGroup) {
    this.isLoading = true;
    
    this._AuthService.contactUs(registerForm.value).subscribe({
      next:(response)=>{
        this.isLoading = false;
        this.apiSuc=response.message;
        console.log(response);
      },
      error:(error)=>{
        this.isLoading = false;
        this.apiError=error.errors.msg;
        console.log(error);
      }
    })
  }

  

}
