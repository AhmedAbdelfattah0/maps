import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IfStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public api_routs = environment.apiUrl

  constructor(
    private http: HttpClient,
    private router: Router,

  ) { }

  signIn(email: string, password: string, rememberMe: boolean) {


    return this.http.post<any>(`${this.api_routs}/api/login`, { email, password }).pipe(map(user => {
      /** 
       * If remember me is checked the token will be saved into the localstorge to make the user permanently logedin 
       * else the token will be saved on sessionStorge to be cleared after the site is closed
       * 
       */

      if (rememberMe) {
        localStorage.setItem('userToken', user.token);
        localStorage.setItem('rememberMe', 'true');
      } else {
        sessionStorage.setItem('userToken', user.token);
      }
      if (localStorage.getItem('lastLogin') != null) {

        localStorage.setItem('newLogin', (new Date()).toString())
      }
      else {
        localStorage.setItem('lastLogin', (new Date()).toString());

      }
    }));

  }

  logOut() {
    localStorage.removeItem('lastLogin');
    localStorage.setItem('lastLogin', localStorage.getItem('newLogin'));
    localStorage.removeItem('newLogin')
    if (localStorage.getItem('rememberMe') == 'true') {
      localStorage.removeItem('rememberMe');
      this.router.navigate(['/login']);
      return localStorage.removeItem('userToken');
    } else {
      return sessionStorage.clear();
    }

  }
getLastlogin(){
  return Date.parse(localStorage.getItem('lastLogin')) ;
}
  isLogedin() {

    return this.getToken()
  }
  getToken() {
    if (localStorage.getItem('rememberMe') == 'true') {
      if (localStorage.getItem('userToken')) {
        return localStorage.getItem('userToken') || null;
      }
    } else {
      if (sessionStorage.getItem('userToken')) {
        return sessionStorage.getItem('userToken') || null;
      }
    }
  }
}
