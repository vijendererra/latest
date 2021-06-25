import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {
  allData = [];

  constructor(private src: CrudService, private formBuilder: FormBuilder,) { }
  list = <any>[];
  dynamicForm: FormGroup;
  ngOnInit() {
    this.getLIst()
    this.allData = [
      { "label": "Name", "type": "textbox", "options": [], "required": "false" },
      { "label": "Email", "type": "email", "options": [], "required": "true" },
      { "label": "PhoneNumber", "type": "phone", "options": [], "required": "false" },
      { "label": "Desc", "type": "textaria", "options": [], "required": "false" },
      { "label": "CheckBox", "type": "checkbox", "options": [{ "id": "10", "option": "check1" }, { "id": "02", "option": "check2" }], "required": "false" },
      { "label": "Drop", "type": "dropdown", "options": [{ "id": "10", "option": "dropdown" }, { "id": "02", "option": "dropdown1" }], "required": "false" },
      { "label": "Radio", "type": "radio", "options": [{ "id": "10", "option": "radio" }, { "id": "02", "option": "radio1" }], "required": "false" },
      { "label": "Checklist", "type": "cheklist", "options": [{ "id": "10", "option": "cheklist" }, { "id": "02", "option": "cheklist2" }], "required": "false" },
    ]
    // console.log(this.allData)

    // Dynamif FormControls && Dynamic Validation
    let group = {};
    this.allData.forEach(fileds => {
      if (fileds.required == "true") {
        if (fileds.type == "email") {
          group[fileds.label] = new FormControl('', [Validators.required, Validators.email]);
        }
        else {
          group[fileds.label] = new FormControl('', [Validators.required]);
        }
      }
      else {
        if (fileds.type == "phone") {
          group[fileds.label] = new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]);
        } else {
          group[fileds.label] = new FormControl('');
        }
      }
    })
    this.dynamicForm = new FormGroup(group);
  }

  getLIst() {
    this.src.getEmp().subscribe(res => {
      this.list = res;
      // console.log(this.list);
    })
  }

  submit(){
    console.log(this.dynamicForm.value);
  }

}
