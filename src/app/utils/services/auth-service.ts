import { Injectable } from '@angular/core';
import { User } from '../typings/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  setLoggedInUser(user:User) : void {
    localStorage.setItem('isLoggedIn','true');
    localStorage.setItem('user',JSON.stringify(user))
  }

}
