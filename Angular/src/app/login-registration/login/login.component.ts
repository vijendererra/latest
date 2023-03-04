import { Component, OnInit } from '@angular/core';
import { LoginandregistrationService } from '../../services/loginandregistration.service';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { loggedIn } from '../store/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  serverErrorMessagesEmail: string;

  constructor(private service: LoginandregistrationService,
    private formBuilder: UntypedFormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private store: Store<AppState>) { }

  LoginForm: UntypedFormGroup;
  ngOnInit() {
    // document.getElementById('navbar').style.display='none';
    // document.getElementById('footer').style.display='none';
    if (this.service.isLoggedIn()) {

      this._router.navigateByUrl('/curd');
    }
    this.LoginForm = this.formBuilder.group({
      _id: [''],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
    // this.userLogedIn();
  }
  err = [];
  err1 = []
  login() {
    this.sharing();
    this.service.loginUser(this.LoginForm.value).subscribe(
      res => {
        // console.log(res);
        this.service.setToken(res['token'])
        this.userLogedIn();
      },
      error => {
        // console.log(error)
        this.serverErrorMessagesEmail = error.message;
      }
    )

  }

  userData: any;
  url = '';
  userLogedIn() {
    this.store.dispatch(loggedIn())
    // this.service.logedin().subscribe(
    //   res => {
    //     this.userData = res;
    //     // console.log(this.userData);
    //     localStorage.setItem('name', this.userData.name);
    //     localStorage.setItem("id", this.userData._id);
    //     if (this.userData.image != undefined) {
    //       localStorage.removeItem('profile');
    //       this.url = "http://localhost:2020/" + this.userData.image;
    //       // console.log(this.url);
    //       this.service.img(this.url);
    //     }
    //     this._router.navigateByUrl('/curd');
    //   },
    //   error => {
    //     this.serverErrorMessagesEmail = error.message;
    //   }
    // )
  }

  sharing() {
    let v = 123;
    this.service.sharing(v);
  }

}
