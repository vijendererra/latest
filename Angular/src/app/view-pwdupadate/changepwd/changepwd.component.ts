import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginandregistrationService } from '../../services/loginandregistration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';


@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent implements OnInit {

  constructor(private loginService: LoginandregistrationService,
    private router: Router, private formBuilder: FormBuilder) { }

  PwdUpDatateForm: FormGroup;
  id: string;
  serverErrorMessages: string;
  ngOnInit() {
    this.id = localStorage.getItem('id');
    this.PwdUpDatateForm = this.formBuilder.group({
      _id: [''],
      oldpassword: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],
    })
  }

  changePwd() {
    this.PwdUpDatateForm.controls['_id'].setValue(this.id);
    console.log(this.PwdUpDatateForm.value);
    this.loginService.changePwd(this.PwdUpDatateForm.value).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('');
    },
      error => {
        console.log(error)
        this.serverErrorMessages = error.message;
      }
    )
  }

}
