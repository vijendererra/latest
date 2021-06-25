import { Component, OnInit } from '@angular/core';
import { LoginandregistrationService } from '../../services/loginandregistration.service'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.css']
})
export class ResetpwdComponent implements OnInit {

  serverErrorMessagesEmail: string;
  constructor(private service: LoginandregistrationService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ResetForm: FormGroup;

  public token = "";
  ngOnInit() {
    this.token = this._activatedRoute.snapshot.paramMap.get("token")
    // console.log("token:",this.token);
    this._router.navigateByUrl('/forgotpwd/reset/' + this.token);

    this.ResetForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],
    })

  }

  resetPwd() {
    console.log("token", this.token);
    this.service.resetPwd(this.ResetForm.value,this.token).subscribe(
      res=>{
        this._router.navigateByUrl("");
      },
      error=>{
        console.log(error)
        this.serverErrorMessagesEmail=error.message;
      }
    )
  }
}
