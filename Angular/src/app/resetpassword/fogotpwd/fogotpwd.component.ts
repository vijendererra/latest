import { Component, OnInit } from '@angular/core';
import { LoginandregistrationService } from '../../services/loginandregistration.service'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fogotpwd',
  templateUrl: './fogotpwd.component.html',
  styleUrls: ['./fogotpwd.component.css']
})
export class FogotpwdComponent implements OnInit {
  serverErrorMessagesEmail: string;
  successMessage: String;
  constructor(private service: LoginandregistrationService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ForgotForm: FormGroup;
  ngOnInit() {
    this.ForgotForm = this.formBuilder.group({
      email: ['', [Validators.required]],
    })
  }

  forGotPwd() {
    this.service.forGotPwd(this.ForgotForm.value).subscribe(
      res => {
        this.successMessage = "Please Check Your Mail";
        // this._router.navigateByUrl('/reset')
      },
      error => {
        // console.log(error);
        this.serverErrorMessagesEmail = error.message;
      }
    )
  }

}
