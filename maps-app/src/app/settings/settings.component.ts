import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private translate: TranslateService,
    private _loginService : LoginService
    ) { 

    // translate.addLangs(["en", "ar"]);
    // translate.setDefaultLang('en');

    // let browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
  }

  ngOnInit() {
  }
logOut(){
  this._loginService.logOut()
}
}
