import { Component, OnInit } from '@angular/core';
import { LoginandregistrationService } from '../services/loginandregistration.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginandregistrationService,
    private router: Router) { }
    currentUser='';
  ngOnInit() {
    if (this.loginService.isLoggedIn()) {
      this.currentUser=localStorage.getItem('name');
      console.log(this.currentUser);
      // this.router.navigateByUrl('/curd');
    }
    else{
      this.router.navigateByUrl('');
    }
    
  }


  logOut() {
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }
}
