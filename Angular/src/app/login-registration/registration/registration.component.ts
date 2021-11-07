import { Component, OnInit } from '@angular/core';
import { LoginandregistrationService } from '../../services/loginandregistration.service'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  serverErrorMessagesEmail: string;
 
  RegForm: FormGroup;
  constructor(private service: LoginandregistrationService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  count = 0;
  regform = true;
  regform1 = false;
  next = true;
  return = false;
  submit = false;
  all: boolean;
  ngOnInit() {
    this.RegForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],
      phonenumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      pinnumber: ['', [Validators.required]],
      pinnumber1: ['', [Validators.required]],
    })
  }

 

  register() {
    this.service.postEmp(this.RegForm.value).subscribe(res => {
      this._router.navigate(['/']);
    },
      error => {
        this.serverErrorMessagesEmail =error.message;
        console.log(this.serverErrorMessagesEmail);
      }
    )
  }

  increase() {
    // Custom Validation For Empty Field:
   
    if ((this.RegForm.value.name != "") && (this.RegForm.value.email != "")
      && (this.RegForm.value.password != "") && (this.RegForm.value.confirmpassword != "")) {
      this.all = true;
    }
    if (this.all == true) {
      this.count++;
      console.log(this.count);
      if (this.count == 0) {
        this.submit = false;
        this.next = true;
        this.regform = true;
        this.regform1 = false;
      }
      else if (this.count == 1) {
        this.submit = true;
        this.next = false;
        this.return = true;
        this.regform1 = true;
        this.regform = false;
      }
    }
  }
  decrease() {
    this.count--;
    console.log(this.count);
    if (this.count == 0) {
      this.submit = false;
      this.next = true;
      this.return = false;
      this.regform = true;
      this.regform1 = false;
    }
    else if (this.count == 1) {
      this.next = true;
      this.return = true;
      this.regform1 = true;
      this.regform = false;
      this.submit = false;
    }
    else if (this.count == 2) {
      this.submit = true;
      this.return = true;
      this.next = false;
      this.regform1 = false;
      this.regform = false;
    }
    else {
      this.regform = false;
      this.regform1 = false;
    }
  };

}
