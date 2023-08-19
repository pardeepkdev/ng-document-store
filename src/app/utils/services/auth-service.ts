import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../typings/user';
import { Auth } from '../typings/Auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private mockCredentials : {
    username: string;
    password: string;
    name: string
  } = {
    username: 'pardeepfedev@gmail.com',
    password: 'Test@123',
    name: 'Pardeep K',
  };

  constructor() {}

  login(payload:any) {
    
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

}
