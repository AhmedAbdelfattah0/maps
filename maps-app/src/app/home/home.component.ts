import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
lastLogin;

  constructor(
    private  _loginService:LoginService
  ) { }

  ngOnInit() {
    this.lastLogin = this._loginService.getLastlogin()
  }

}
