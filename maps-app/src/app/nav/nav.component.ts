import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private _loginService: LoginService
  ) { }

  ngOnInit() {
  }
  logout() {
    this._loginService.logOut()
  }
 
}
