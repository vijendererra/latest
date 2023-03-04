import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { UntypedFormGroup, UntypedFormBuilder, Validators, UntypedFormControl } from '@angular/forms';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}
@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {
  allData = [];
  all: boolean;
  parent = [];
  timer: NodeJS.Timer;
  treeValue: string;

  constructor(private src: CrudService, private formBuilder: UntypedFormBuilder,) { }

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);

  dataSource = new MatTreeNestedDataSource<FoodNode>();
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  list = <any>[];
  dynamicForm: UntypedFormGroup;
  ngOnInit() {
    this.getLIst()
    this.treeVeiwData();
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
          group[fileds.label] = new UntypedFormControl('', [Validators.required, Validators.email]);
        }
        else {
          group[fileds.label] = new UntypedFormControl('', [Validators.required]);
        }
      }
      else {
        if (fileds.type == "phone") {
          group[fileds.label] = new UntypedFormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]);
        } else {
          group[fileds.label] = new UntypedFormControl('');
        }
      }
    })
    this.dynamicForm = new UntypedFormGroup(group);
  }

  getLIst() {
    this.src.getEmp().subscribe(res => {
      this.list = res;
      // console.log(this.list);
    })
  }

  submit() {
    console.log(this.dynamicForm.value);
  }
  tabs() {
    this.all = true;
  }

  treeVeiwData() {
    this.dataSource.data = [
      {
        name: 'Fruit',
        children: [
          { name: 'Apple' },
          { name: 'Banana' },
          { name: 'Fruit loops' },
        ]
      }, {
        name: 'Vegetables',
        children: [
          {
            name: 'Green',
            children: [
              { name: 'Broccoli' },
              { name: 'Brussels sprouts' },
            ]
          }, {
            name: 'Orange',
            children: [
              { name: 'Pumpkins' },
              { name: 'Carrots' },
            ]
          },
        ]
      },
    ]
  }
  findParh(array, name) {
    if (typeof array !== 'undefined') {
      for (let i = 0; i < array.length; i++) {
        if (array[i].name == name) {
          this.getPath(this.parent, name)
          return [array[i]]
        }
        const a = this.findParh(array[i].children, name);
        this.parent.splice(0, this.parent.length);
        if (a != null) {
          a.unshift(array[i]);
          a.forEach(ele => {
            this.parent.push(ele.name)
          });
          clearTimeout(this.timer);
          this.timer = setTimeout(() => {
            let val = "";
            this.getPath(this.parent, val)
          }, 100);
          return a;
        }
      }
    }
    return null;
  }
  getPath(path, name) {
    if (name == "") {
      const v=path.toString();
      const v1=v.replace(/,/g,' => ')
      this.treeValue=v1;
    }else{
      this.treeValue=name;
    }
  }

}
