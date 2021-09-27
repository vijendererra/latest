import { Component, Inject, OnInit, Renderer2, } from '@angular/core';
import { LoginandregistrationService } from './services/loginandregistration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  // template: '<app-navbar></app-navbar>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private currentTheme: string = 'slate';
  login: boolean;
  constructor(private loginService: LoginandregistrationService,
    private router: Router, private renderer: Renderer2, @Inject(DOCUMENT) private documents: Document,
    private keyCloak: KeycloakService) {

  }
  currentUser = '';
  profile = '';
  ngOnInit() {
    if (this.loginService.isLoggedIn()) {
      this.currentUser = localStorage.getItem('name');
      this.getImg();
    }
    this.getRefrsh();
    this.getImg();
    // console.log(this.keyCloak.getUsername());
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
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('profile');
    this.router.navigateByUrl('');
    localStorage.setItem('login', 'false')
    this.keyCloak.logout();
  }
  ngDoCheck() {
    if (localStorage.getItem('name') != null) {
      this.login = true;
    }
    else {
      this.login = false;
    }
  }

  theme(type) {
    this.renderer.removeClass(document.body, 'theme-' + this.currentTheme);
    this.currentTheme = type;
    this.renderer.addClass(document.body, 'theme-' + this.currentTheme);
    (<HTMLAnchorElement>this.documents.getElementById('theme')).href = '/assets/css/theme_' + type + '_bootstrap.min.css'
  }


}
