import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpRequestService } from '../core/services/http-request.service';
import { Auth } from '../utils/typings/Auth';
import { AuthApiResponse, User } from '../utils/typings/User';
import { Router } from '@angular/router';
import { AuthService } from '../utils/services/auth-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(private httpRequestService: HttpRequestService, private router : Router, private authService : AuthService) {

    authService.isLoggedIn() && router.navigate(['/documents'])
  }
  
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
          this.authResponse = { type : "success",message : `Welcome! You are now logged in. please wait we are redirective you to dashboard ` }
          this.signInForm.reset();
          this.submitted = false;
          value.data && this.authService.setLoggedInUser(value.data);
          
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
