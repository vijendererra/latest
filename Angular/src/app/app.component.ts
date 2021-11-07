import { Component, Inject, OnInit, Renderer2, } from '@angular/core';
import { LoginandregistrationService } from './services/loginandregistration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { KeycloakService } from 'keycloak-angular';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCount } from './ngrx-futer/state/ngrx-selecter';
import { CounterState } from './ngrx-futer/state/ngrx-state';
import { addUser, loggedIn } from './login-registration/store/login.actions';
import { getUser } from './login-registration/store/login.selecter';

@Component({
  selector: 'app-root',
  // template: '<app-navbar></app-navbar>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private currentTheme: string = 'slate';
  login: boolean;
  counter$: Observable<number>
  userData: any;
  currentYear: number;
  constructor(private loginService: LoginandregistrationService,
    private router: Router, private renderer: Renderer2, @Inject(DOCUMENT) private documents: Document,
    private keyCloak: KeycloakService, private store: Store<AppState>) {

  }
  currentUser = '';
  profile = '';
  ngOnInit() {
    this.currentYear=new Date().getFullYear();
    this.counter$ = this.store.select(getCount)
    if(localStorage.getItem('token')){
    this.store.dispatch(loggedIn())
    }
    this.store.select(getUser).subscribe(res => {
      this.userData = res;
      if(this.userData){
        this.login=true;
        this.profile = "http://localhost:2020/" + this.userData.image;
        this.currentUser=this.userData.name;
      }
      else{
        this.login=false;
      }
    })

  }

  getRefrsh() {
    this.loginService.refresh$.subscribe(() => {
      this.getImg();
    })
  }
  user = <any>[];
  getImg() {
    this.loginService.logedin().subscribe(res => {
      this.user = res;
      this.currentUser = this.user.name;
      if (this.user.image != undefined) {
        this.profile = "http://localhost:2020/" + this.user.image;
      }
    })
  }
  logOut() {
    const user=null
    this.store.dispatch(addUser({user}))
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('profile');
    this.router.navigateByUrl('');
    localStorage.setItem('login', 'false')
    // this.keyCloak.logout();
  }
  // ngDoCheck() {
  //   if (localStorage.getItem('name') != null) {
  //     this.login = true;
  //   }
  //   else {
  //     this.login = false;
  //   }
  // }

  theme(type) {
    this.renderer.removeClass(document.body, 'theme-' + this.currentTheme);
    this.currentTheme = type;
    this.renderer.addClass(document.body, 'theme-' + this.currentTheme);
    (<HTMLAnchorElement>this.documents.getElementById('theme')).href = '/assets/css/theme_' + type + '_bootstrap.min.css'
  }


}
