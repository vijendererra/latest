import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-dynamic-data-tables',
  templateUrl: './dynamic-data-tables.component.html',
  styleUrls: ['./dynamic-data-tables.component.scss']
})
export class DynamicDataTablesComponent implements OnInit {
  dynamicData: {};
  showForm: boolean;
  formTitle: string;
  button: string;
  dialogaction: any;

  constructor(private service: CrudService, private formBuilder: UntypedFormBuilder) { }
  saveForm: UntypedFormGroup;
  ngOnInit() {
    this.saveForm = this.formBuilder.group({
      _id: [''],
      name: ['', [Validators.required]],
      role: ['', [Validators.required]],
      location: ['', [Validators.required]],
    })
    this.getData()
  }


  getData() {
    this.service.getEmp().subscribe(res => {
      const response = res;
      const colums = ["name", "role", "location"]
      this.dynamicData = {
        displayColumns: colums,
        tableDta: response
      }
      //  console.log(this.dynamicData)
    },
      err => {
        console.log(err)
      })
  }
  doActions(action) {
    if (action.action == "new") {
      // console.log("new", action)
      this.addData("new", '')
    }
    else if (action.action == "edit") {
      this.addData("edit", action.data)
    }
    else if (action.action == "delete") {
      console.log("delete", action.data)
    }
  }
  addData(action, row) {
    this.showForm = true;
    this.dialogaction = action;
    if (action == "new") {
      this.formTitle = "Registration Form";
      this.button = "Register";
      this.saveForm.controls['_id'].setValue('');
      this.saveForm.controls['name'].setValue('');
      this.saveForm.controls['role'].setValue('');
      this.saveForm.controls['location'].setValue('');
    }
    else {
      this.formTitle = "Updation Form";
      this.button = "Update";
      this.saveForm.controls['_id'].setValue(row._id);
      this.saveForm.controls['name'].setValue(row.name);
      this.saveForm.controls['role'].setValue(row.role);
      this.saveForm.controls['location'].setValue(row.location);
    }
  }
  submitForm(){
    
  }
}
