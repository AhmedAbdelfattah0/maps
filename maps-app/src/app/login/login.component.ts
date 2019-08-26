import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email
  password
  rememberMe
  constructor(
    private _loginService: LoginService,
    private router: Router,

  ) { }

  ngOnInit() {
  }


  login(form) {
    this._loginService.signIn(form.email,form.password,form.rememberMe).subscribe(res=>{
      this.router.navigate(['/map']);
    })
  }
  
}
