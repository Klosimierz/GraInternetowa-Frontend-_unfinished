import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Authguard implements CanActivate {

  constructor(private logon: LoginService,private router: Router) { }

  canActivate() {
    if(this.logon.isLogged()) {
    return true;
    }
    else {
      this.router.navigate(['login']);
      return false;
    }
}

}
