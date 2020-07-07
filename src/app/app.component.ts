import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui-gruz';
  constructor(private router:Router,private logon:LoginService,private jwt: JwtHelperService) {
  }

  isUserLogged() {
    const token = localStorage.getItem('token');
    if(token) {
      const expiryDate = this.jwt.getTokenExpirationDate(token);
      if (expiryDate===null) 
        return true;
    }
    else return false;
  }
  logOut() {
  localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
