import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginandregistrationService } from '../../services/loginandregistration.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})


export class ViewsComponent implements OnInit {
  edible: boolean;

  constructor(private loginService: LoginandregistrationService,
    private router: Router, private formBuilder: UntypedFormBuilder) { }

  private useData;
  VieForm: UntypedFormGroup;
  ngOnInit() {
    this.edible = false;
    this.VieForm = this.formBuilder.group({
      _id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phonenumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      pinnumber: ['', [Validators.required]],
    })
    this.userDetails();
  }
  url = '';
  userDetails() {
    this.loginService.logedin().subscribe(res => {
      this.useData = res;
      // console.log(this.useData);
      this.VieForm.controls['_id'].setValue(this.useData._id);
      this.VieForm.controls['name'].setValue(this.useData.name);
      localStorage.setItem('name', this.useData.name);
      this.VieForm.controls['email'].setValue(this.useData.email);
      this.VieForm.controls['phonenumber'].setValue(this.useData.phonenumber);
      this.VieForm.controls['address'].setValue(this.useData.address);
      this.VieForm.controls['pinnumber'].setValue(this.useData.pinnumber);
      if (this.useData.image != undefined) {
        this.url = "http://localhost:2020/" + this.useData.image;
        localStorage.setItem("profile", this.url);
        // this.loginService.img(this.url);
      }
      // this.profile=localStorage.getItem('profile');
      // console.log(this.profile)
    },
      error => {
        console.log(error);
      }
    )
  }
  fileToUpload: File = null;
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload)
    reader.onload = (event: any) => {
      this.url = event.target.result;
    }
  }
  updateProfile() {
    const formData: FormData = new FormData();
    if (this.fileToUpload != null) {
      formData.append('Image', this.fileToUpload, this.fileToUpload.name);
      formData.append('_id', this.VieForm.value._id);
      formData.append('name', this.VieForm.value.name);
      formData.append('email', this.VieForm.value.email);
      formData.append('phonenumber', this.VieForm.value.phonenumber);
      formData.append('address', this.VieForm.value.address);
      formData.append('pinnumber', this.VieForm.value.name);
      this.loginService.upDateProfile(formData).subscribe(res => {
        // console.log(res);
        this.userDetails();
        // window.location.reload();
      },
        error => {
          console.log(error)
        }
      );
    }
    else {
      this.loginService.upDateProfile(this.VieForm.value).subscribe(res => {
        this.userDetails();
        // console.log(res);
        // window.location.reload();
      },
        error => {
          console.log(error)
        }
      );
    }
  }
  Editable() {
    this.edible = true;
  }

}
