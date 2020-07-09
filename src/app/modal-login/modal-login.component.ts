import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  logonForm = new FormGroup({
    'name': new FormControl('',[Validators.required,CustomValidators.noSpacesAllowed]),
    'password': new FormControl('',[Validators.required,CustomValidators.noSpacesAllowed])
  })

  regonForm = new FormGroup({
    'name': new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(16),CustomValidators.noSpacesAllowed]),
    'password': new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(16),CustomValidators.noSpacesAllowed])
  })

  invalidLogin: boolean;
  invalidRegistration: boolean;

  get loginUsername() {
    return this.logonForm.get('name');
  }
  get loginPassword() {
    return this.logonForm.get('password');
  }
  get regUsername() {
    return this.regonForm.get('name');
  }
  get regPassword() {
    return this.regonForm.get('password');
  }

  constructor(private loginService:LoginService,private router: Router) {
   }

  signIn(cred) {
    this.loginService.login(cred.value).subscribe(response => {
      const token = response.headers.get('x-auth-token');
      if(!token) {
        console.log('Token was not provided');
        this.invalidLogin = true;
      }
      else 
        localStorage.setItem('token',token);
        this.router.navigate(['/player']);
    }, error => {
      console.log('Login failed');
        this.invalidLogin = true;
    })
  }

  signUp(regCred) {
    this.loginService.register(regCred.value).subscribe(response => {
      if(response.status===200) {
        const token = response.headers.get('x-auth-token');
        localStorage.setItem('token',token);
        this.router.navigate(['/player']);
      }
      else {
        this.invalidRegistration=true;
        console.log('User registration failed');
      }
    }, error => {
      console.log('Registration failed');
      this.invalidRegistration=true;
    })
    
  }

  fInputErrorsReg() {
    if((this.regUsername.touched && this.regUsername.errors)||(this.regPassword.touched && this.regPassword.errors))
    return true;
  }

  fInputErrors() {
    if((this.loginUsername.touched && this.loginUsername.errors)||(this.loginPassword.touched && this.loginPassword.errors))
    return true;
  }

  ngOnInit() {
    this.invalidLogin = false;
    this.invalidRegistration = false;
  }

}
