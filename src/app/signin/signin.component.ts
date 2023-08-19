import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpRequestService } from '../core/services/http-request.service';
import { Auth } from '../utils/typings/Auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(private httpRequestService: HttpRequestService) {}
  
  signInForm = new FormGroup<Auth>({
  username: new FormControl(null, [Validators.required, /*Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")*/]),
    password: new FormControl(null,[Validators.required, Validators.minLength(5)]),
  });

  submitted = false;
  hasErrors = false;

  signInInit() {
    this.submitted = true;
    this.hasErrors = false;

    console.log(this.formErrors);
    
    if(this.signInForm.invalid) return;

    const payload = {...this.signInForm.value}
    this.httpRequestService.postRequest('https://dummyjson.com/auth/login', payload)
      .subscribe((result) => {

        console.log(result);
        
        if (!result) {
          this.hasErrors = true;
          return;
        } 

      });
  }

  get formErrors() {
    return this.signInForm.controls;
  }
}
