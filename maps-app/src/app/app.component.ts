import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
   }
  title = 'app';
  constructor(
    private translate: TranslateService,
    private _loginService: LoginService
  ) { 

      translate.addLangs(["en", "ar"]);
    translate.setDefaultLang('en');

    // let browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
  }
  isLogedIn(){
    if(this._loginService.isLogedin()!=null){
      return true
    }else{
      return false
    }
  }
}
