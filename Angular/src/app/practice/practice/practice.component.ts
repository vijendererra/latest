import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DndDropEvent, DropEffect } from '../../../../node_modules/ngx-drag-drop';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  fieldsArray = [];
  value = {
    id: "",
    option: ""
  };
  viewForm = true;

  constructor() { }
  draggedFileds = [];
  searchKey: string;
  ngOnInit() {

  }

  fileds = [
    {
      type: "textbox",
      sutype:"Section",
      icon: "fa-list",
      label: "Section",
      placeholder: "Enter your Name",
      regex: "",
      value: "",
      required: false,
      errorText: ""
    },
    {
      type: "textbox",
      icon: "fa-font",
      label: "Text",
      placeholder: "Enter your Name",
      regex: "",
      value: "",
      required: false,
      errorText: ""
    },
    {
      type: "email",
      icon: "fa-envelope",
      label: "Email",
      placeholder: "Enter your Name",
      regex: "",
      value: "",
      required: false,
      errorText: ""
    },
    {
      type: "phone",
      icon: "fa-phone",
      label: "Phone",
      placeholder: "Enter your Name",
      regex: "",
      value: "",
      required: false,
      errorText: ""
    },
    {
      type: "number",
      icon: "fa-html5",
      label: "Number",
      placeholder: "Enter your Name",
      regex: "",
      value: "",
      required: false,
      errorText: ""
    },
    {
      type: "date",
      icon: "fa-calendar",
      label: "Date",
      placeholder: "date",
      regex: "",
      value: "",
      required: false,
      errorText: ""
    },
    {
      type: "datetime-local",
      icon: "fa-calendar",
      label: "DateTime",
      placeholder: "datetime-local",
      regex: "",
      value: "",
      required: false,
      errorText: ""
    },

    {
      type: "textarea",
      icon: "fa-text-width",
      label: "Textarea",
      placeholder: "textarea",
      regex: "",
      value: "",
      required: false,
      errorText: ""
    },
    {
      type: "paragraph",
      icon: "fa-paragraph",
      label: "Paragraph",
      placeholder: "paragraph",
      regex: "",
      value: "",
      required: false,
      errorText: ""
    },

    {
      type: "checkbox",
      icon: "fa-list",
      label: "Checkbox",
      placeholder: "checkbox",
      regex: "",
      value: "",
      required: false,
      errorText: "",
      options: [
        {
          id: "Approved",
          option: "Approved"
        },
        {
          id: "Rejected",
          option: "Rejected"
        }
      ]
    },
    {
      type: "radiobutton",
      icon: "fa-list-ul",
      label: "Radio",
      placeholder: "Radio Boxes",
      regex: "",
      value: "",
      required: false,
      errorText: "",
      options: [
        {
          id: "Approved",
          option: "Approved"
        },
        {
          id: "Rejected",
          option: "Rejected"
        }
      ]
    },
    {
      type: "dropdown",
      icon: "fa-bars",
      label: "Select",
      placeholder: "dropdown",
      regex: "",
      value: "",
      required: "",
      errorText: "",
      options: [
        {
          id: "Approved",
          option: "Approved"
        },
        {
          id: "Rejected",
          option: "Rejected"
        }
      ]
    },
    {
      type: "file",
      icon: "fa-file",
      label: "File Upload",
      placeholder: "file",
      regex: "",
      value: "",
      required: false,
      errorText: "",
    },
    {
      type: "button",
      icon: "fa-paper-plane",
      label: "Submit",
      placeholder: "Submit",
      regex: "",
      value: "",
      required: false,
      errorText: "",
    }
  ]

  onDrop(event: DndDropEvent, list?: any[], i?: any) {
    this.draggedFileds = []
    if (event.data.label == "Section") {
      this.fieldsArray.push({ name: event.data.label, 'fields': [] });
      this.draggedFileds = this.fieldsArray;
    }
    else {
      this.fieldsArray.push({ name: event.data.label, 'fields': [event.data] });
      this.draggedFileds = this.fieldsArray;
    }
    // console.log(this.draggedFileds)
  }


  onDragged(item: any, list: any[], effect: DropEffect) {
    if (effect === 'move') {
      const index = list.indexOf(item);
      list.slice(index, 1)
    }
  }
  onDrop1(event: DndDropEvent, i?: any) {
    if (this.draggedFileds) {
      // console.log(this.draggedFileds)
      this.draggedFileds.forEach((e, ind) => {
        if (ind == i) {
          e.fields.push(event.data)
        }
      });
    }
  }

  label(event, label, i) {
    this.draggedFileds[i].name = label;
  }
  addValue(values) {
    values.push(this.value)
  }
  removeField(i) {
    this.draggedFileds.splice(i, 1);
  }
  removeField1(subindex, mainindex) {
    this.draggedFileds[mainindex].fields.splice(subindex, 1);
  }

  viewType(val) {
    if (val == "form") {
      this.viewForm = true;
    }
    else{
      this.viewForm = false;
      console.log(this.draggedFileds)
    }
  }
  toggleValue(val){

  }
  submit(){
    console.log(this.draggedFileds);
  }

}


// @Pipe({
//   name: 'filter'
// })
// export class filterPipe implements PipeTransform {

//   transform(items: any[], field: "label", value: string): any[] {

//     if (!items) return [];
//     if (!value) return items;


//     return items.filter(str => {
//       return str[field].toLowerCase().includes(value.toLowerCase());
//     });
//   }
// }
