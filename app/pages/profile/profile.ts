import {Page, Storage, LocalStorage} from 'ionic-framework/ionic';
import {Http, Headers} from 'angular2/http';
import {FORM_DIRECTIVES} from 'angular2/common';
import {JwtHelper} from 'angular2-jwt';
import {AuthService} from '../../services/authService';
import 'rxjs/add/operator/map';

@Page({
  templateUrl: 'build/pages/profile/profile.html',
  directives: [FORM_DIRECTIVES]
})
export class ProfilePage {
  LOGIN_URL: string = "http://localhost:3001/sessions/create";
  SIGNUP_URL: string = "http://localhost:3001/users";
  
  // When the page loads, we want the Login segment to be selected
  authType: string = "login";
  // We need to set the content type for the server
  contentHeader: Headers = new Headers({"Content-Type": "application/json"});
  error: string;
  jwtHelper: JwtHelper = new JwtHelper();
  local: Storage = new Storage(LocalStorage);
  user: string;  

  constructor(private http: Http, private auth:AuthService) {    
    let token = this.local.get('id_token')._result;
    if(token) {
      this.user = token.replace('123','');
    }
  }

  login(credentials) {
      let data = this.auth.login(credentials)
      if (data.id_token != null){
          this.authSuccess(data.id_token);
      }    
  }  

  logout() {
    this.local.remove('id_token');
    this.user = null;
  }

  authSuccess(token) {
    this.error = null;
    this.local.set('id_token', token);
    this.user = token.replace('123','');
  }
}