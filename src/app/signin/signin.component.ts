import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpRequestService } from '../core/services/http-request.service';
import { Auth } from '../utils/typings/Auth';
import { AuthApiResponse, User } from '../utils/typings/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(private httpRequestService: HttpRequestService, private router : Router) {}
  
  signInForm = new FormGroup<Auth>({
    email: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]),
    password: new FormControl(null,[Validators.required, Validators.minLength(5)]),
  });

  submitted = false;
  hasErrors = false;

  authResponse !: {type : string, message: string };

  signInInit() {
    this.submitted = true;
    this.hasErrors = false;    
    if(this.signInForm.invalid) return;
    
    const payload = {...this.signInForm.value}
    this.httpRequestService.postRequest('http://restapi.adequateshop.com/api/authaccount/login', payload)
      .subscribe({ 
        next: ((value: AuthApiResponse) => {
          if(value.code == 1 ) {
            this.hasErrors = true;
            this.authResponse = { type : "danger",message : value.message }
            return;
          }  

          this.authResponse = { type : "success",message : value.message }
          this.signInForm.reset()
          setTimeout(() => {
            this.router.navigate(['/documents']);
          }, 1500);
        }), 
        error: ((error: any) => {
          this.authResponse = { type : "danger",message : "Server error, please try again." }
        })
      });
  }

  get formErrors() {
    return this.signInForm.controls;
  }


}
