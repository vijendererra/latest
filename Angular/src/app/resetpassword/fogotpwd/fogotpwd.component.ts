import { Component, OnInit } from '@angular/core';
import { LoginandregistrationService } from '../../services/loginandregistration.service'
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormControl } from '@angular/forms';
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
  timeLeft: number;
  interval;
  constructor(private service: LoginandregistrationService,
    private formBuilder: UntypedFormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ForgotForm: UntypedFormGroup;
  ngOnInit() {
    this.ForgotForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      otp: ['', [Validators.required]],
    })

  }

 

  forGotPwd() {
    this.errorMsg = false;
    this.timer = false;
    this.success=false;
    this.service.forGotPwd(this.ForgotForm.value).subscribe(
      res => {
        // this._router.navigateByUrl('/reset')
        this.view = false;
        this.timer = true;
        // clearInterval(this.interval);
        // startInter(this.interval);
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
        if (this.successMessage == "Please login your mail and set new password") {
          this._router.navigateByUrl('/forgotpwd/reset/'+this.response.jwttoken);
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
    clearInterval(this.interval);
    this.interval=setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
      }
    }, 1000)
    
  }
  

  

}
