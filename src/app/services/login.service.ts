import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,private jwt: JwtHelperService,private router:Router) {

  };

  login(inputCredentials) {
   return this.http.post('http://localhost:4000/users/log', inputCredentials,{observe:'response'});
  }

  register(inputCredentials) {
   return this.http.post('http://localhost:4000/users',inputCredentials,{observe:'response'});
  //working but change to an environment endpoint
  }

  isLogged() {
    let token = localStorage.getItem('token');
    if(this.jwt.isTokenExpired(token)||!token) {
      return false;
    }
    else {
      return true;
    }
  }
}
