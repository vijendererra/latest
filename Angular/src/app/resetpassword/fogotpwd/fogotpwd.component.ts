import { Component, OnInit } from '@angular/core';
import { LoginandregistrationService } from '../../services/loginandregistration.service'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fogotpwd',
  templateUrl: './fogotpwd.component.html',
  styleUrls: ['./fogotpwd.component.css']
})
export class FogotpwdComponent implements OnInit {
  serverErrorMessagesEmail: string;
  successMessage: String;
  view: boolean = true;

  response;
  private sub: Subscription;
  timer: boolean;
  errorMsg: boolean;
  success: boolean;
  timeLeft: number = 60;
  constructor(private service: LoginandregistrationService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ForgotForm: FormGroup;
  ngOnInit() {
    this.ForgotForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      otp: ['', [Validators.required]],
    })
  }

  forGotPwd() {
    this.errorMsg = false;
    this.timer = false;
    this.service.forGotPwd(this.ForgotForm.value).subscribe(
      res => {
        // this._router.navigateByUrl('/reset')
        this.view = false;
        this.timer = true;
        this.timeCountDown();
      },
      error => {
        this.errorMsg = true;
        this.serverErrorMessagesEmail = error.message;
      }
    )
  }
  valdateotp() {
    this.success = false;
    this.errorMsg = false;
    const OTP = this.ForgotForm.value.otp;
    let data = {
      otp: OTP,
    }
    this.service.valiDateOtp(data).subscribe(
      res => {
        this.response = res;
        this.successMessage = this.response.message;
        if (this.successMessage == "Please loging your mail and set new password") {
          this.timer=false;
          this.success = true;
        }
        else {
          this.errorMsg = true;
        }
      },
      err => {
        console.log(err)
      }
    )
  }

  timeCountDown() {
    this.timeLeft = 60;
    setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
      }
    }, 1000)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
