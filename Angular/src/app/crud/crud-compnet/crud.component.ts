import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CrudService } from '../../services/crud.service'
import { CrudModel } from '../model/model';
import { LoginandregistrationService } from '../../services/loginandregistration.service'

// import {MatPaginator ,MatSort ,} from '@angular/material/paginator';
import { MatTableDataSource, MatSort, MatPaginator, PageEvent } from '@angular/material';
import { element } from 'protractor';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  dropdownSearch: string;
  dropdownSearchAge: string;
  loding: boolean;
  selectdAll: boolean;
  selectedArray = [];
  checkedList: any[];
  allName: any;
  names: {};
  individulaNames: any;
  totalNamesCount: any;
  filterData: any[];
  id: any;
  deleConfemation: boolean;
  sletedValue: string;
  constructor(private formBuilder: FormBuilder, private service: CrudService, private src: LoginandregistrationService) { }

  displayedColumns: string[] = ['checkBox', 'name', 'role', 'age', 'location', 'actions'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  RegForm: FormGroup;
  SearchForm: FormGroup;
  private d: {};
  public tasks: any[];
  public pagSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  dialogaction: String;
  formTitle: String;
  button: String;
  display: boolean;
  searchKey: string;
  dataTable: MatTableDataSource<any>
  data = [];
  title;
  uploadFiles;

  ngOnInit() {
    document.getElementById('navbar').style.display = 'flex';
    document.getElementById('footer').style.display = "flex";
    this.sr();
    this.RegForm = this.formBuilder.group({
      _id: [''],
      name: ['', [Validators.required]],
      role: ['', [Validators.required]],
      location: ['', [Validators.required]],
    })

    this.SearchForm = this.formBuilder.group({
      nameSearch: [''],
      ageSerach: [],
    })
    this.getData();
  }


  sr() {
    // this.d= this.src.get();
    this.src.share.subscribe(res => this.d = res);
    console.log("d:", this.d)
  }
  showDialog(action, row) {
    this.display = true;

    this.dialogaction = action;
    if (this.dialogaction == 'Add') {
      this.RegForm.controls['_id'].setValue('');
      this.RegForm.controls['name'].setValue('');
      this.RegForm.controls['role'].setValue('');
      this.RegForm.controls['location'].setValue('');
      this.button = "Register";
      this.formTitle = "Registration Form";
    }
    else if (this.dialogaction == 'Edit') {
      this.formTitle = "Updation Form";
      this.button = "Update";
      this.RegForm.controls['_id'].setValue(row._id);
      this.RegForm.controls['name'].setValue(row.name);
      this.RegForm.controls['role'].setValue(row.role);
      this.RegForm.controls['location'].setValue(row.location);
    }
  }

  submitForm() {debugger
    console.log(this.RegForm.value)
    if (this.dialogaction == "Add") {
      this.service.postEmp(this.RegForm.value).subscribe((res) => {
        // console.log(this.RegForm.value);
        // console.log("res:", res)
        this.display = false;
        this.getData();
      });
    }
    else if (this.dialogaction == "Edit") {
      this.service.putEmp(this.RegForm.value).subscribe((res) => {
        // console.log("res:", res)
        this.display = false;
        this.getData();
      });
    }
  }

  getData() {
    this.loding = true;
    this.service.getEmp().subscribe(res => {
      this.clacuLatingNames(res);
      this.data = res as CrudModel[];
      this.dataTable = new MatTableDataSource(this.data);
      this.dataTable.paginator = this.paginator;
      this.tasks = this.dataTable.data;
      this.iterator();
      this.totalSize = this.tasks.length;
      // console.log(this.dataTable.data)
      this.loding = false;
    })
  }

  clacuLatingNames(data) {
    this.allName = data;
    this.names = {}
    data.forEach(el => {
      if (this.names.hasOwnProperty(el.name)) {
        this.names[el.name] = this.names[el.name] + 1;
      }
      else {
        this.names[el.name] = 1;
      }
    });
    // console.log(this.names);
    let names = {}
    this.individulaNames = this.allName.filter(el => {
      if (names.hasOwnProperty(el.name)) {
        return false
      }
      else {
        names[el.name] = true;
        return true
      }
    })
    this.totalNamesCount = this.individulaNames.length;
    // console.log(this.individulaNames);

  }

  filterByName(name) {
    this.filterData = this.data.filter(el => {
      if (el.name == name) {
        return true
      }
    })
    this.dataTable.data = this.filterData;
  }

  handlePage(event?: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pagSize = event.pageSize;
    this.iterator();
  }
  private iterator() {
    const end = (this.currentPage + 1) * this.pagSize;
    const start = this.currentPage * this.pagSize;
    const part = this.tasks.slice(start, end);
    this.dataTable.data = part;

    this.checkedList = [];
    for (var i = 0; i < this.dataTable.data.length; i++) {
      if (this.dataTable.data[i].isChecked) {
        this.checkedList.push(this.dataTable.data[1]);
      }
    }
    if (this.checkedList.length != this.dataTable.data.length) {
      this.selectdAll = false
    }
    else {
      this.selectdAll = true;
    }
  }

  delete(id) {
    this.id = id;
    this.deleConfemation = true;
  };

  deleteConfim(action) {
    if (action === "yes") {
      this.service.deleteEmp(this.id).subscribe(res => {
        this.getData();
        this.deleConfemation = false;

      },
        err => {
          console.log("delete", err);
        })
    }
    else {
      this.deleConfemation = false;
    }

  }

  clrearSearch() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.dataTable.filter = this.searchKey.trim().toLocaleLowerCase();
  }

  applyFilterDropDown() {
    // this.dropdownSearch
    // console.log(this.dropdownSearch);
    if (this.dropdownSearch == undefined) {
      // console.log(this.dropdownSearch);
    } else {
      this.dataTable.filter = this.dropdownSearch.trim().toLocaleLowerCase();
    }
  }
  applyAgeFilterDropDown() {
    console.log(this.dropdownSearchAge);
    if (this.dropdownSearchAge == undefined) {
      // console.log(this.dropdownSearchAge);
    }
    else if (this.dropdownSearchAge === "20-30") {
      console.log(this.dropdownSearchAge);
      let minimunAge = 20;
      let maximumAge = 30;
      this.dataTable.data = this.data.filter(product => {
        console.log(product);
        return product.age >= minimunAge
          && product.age <= maximumAge
      });
    }
    else if (this.dropdownSearchAge === "30+") {
      console.log(this.dropdownSearchAge);
      let minimunAge = 30;
      let maximumAge = 100;
      this.dataTable.data = this.data.filter(product => {
        console.log(product);
        return product.age >= minimunAge
          && product.age <= maximumAge
      });
    }
    else if (this.dropdownSearchAge === "40+") {
      console.log(this.dropdownSearchAge);
      let minimunAge = 40;
      let maximumAge = 100;
      this.dataTable.data = this.data.filter(product => {
        console.log(product);
        return product.age >= minimunAge
          && product.age <= maximumAge
      });
    }
  }

  filter() {
    // console.log(this.data);
    // console.log(this.SearchForm.value.nameSearch);
    let array = [];
    if (!this.SearchForm.value.nameSearch) {
      this.dataTable.data = this.data;
    }
    else {
      this.data.forEach(e => {
        if (e.name.toLocaleLowerCase() == this.SearchForm.value.nameSearch.toLocaleLowerCase()) {
          array.push(e);
        }
      })
      this.dataTable.data = array;
    }

  }


  // CheckBox
  allSelected(event) {
    if (event.checked) {
      this.dataTable.data.forEach(el => { el.isChecked = true });
      this.selectdAll = true;
      this.dataTable.data.forEach(el => {
        this.selectedArray.push(el);
      })
      // const result = Object.values(this.selectedArray.reduce((r, o) => {
      //   r[o._id] = r[o._id] || { ...o };
      //   return r;
      // }, {}));
      // this.selectedArray = [];
      // this.selectedArray.push(...result);

      let names = {}
      this.selectedArray = this.selectedArray.filter(el => {
        if (names.hasOwnProperty(el._id)) {
          return false
        }
        else {
          names[el._id] = true;
          return true
        }
      })
    }
    else {
      this.dataTable.data.forEach(el => { el.isChecked = false });
      this.selectdAll = false;
      for (var i = this.selectedArray.length - 1; i >= 0; i--) {
        for (var j = 0; j < this.dataTable.data.length; j++) {
          if (this.selectedArray[i] && (this.selectedArray[i]._id === this.dataTable.data[j]._id)) {
            this.selectedArray.slice(i, 1);
          }
        }
      }
    }
    console.log(this.selectedArray);
  }
  seletedRow(event, row) {
    if (event.checked) {
      row.isChecked = true;
      this.selectedArray.push(row);
      this.checkedList = [];
      for (var i = 0; i < this.dataTable.data.length; i++) {
        if (this.dataTable.data[i].isChecked) {
          this.checkedList.push(this.dataTable.data[1]);
        }
      }
      if (this.checkedList.length != this.dataTable.data.length) {
        this.selectdAll = false
      }
      else {
        this.selectdAll = true;
      }
    }
    else {
      row.isChecked = false;
      this.selectdAll = false;
      this.selectedArray = this.selectedArray.filter(t => t._id != row._id);
    }
    console.log(this.selectedArray);
  }

  arr = ['vijju', 'venky', 'harish', 'sravan']
  fun() {
    console.log(this.sletedValue)
  }



  // downlod


  download() {
    const data = "text"
    // const blob = new Blob([data], { type: 'text/plain' });
    // console.log(blob);
    const url = window.URL.createObjectURL(data);
    // console.log(encodeURIComponent(url));
    // var a = document.createElement("a");
    // document.body.appendChild(a);

    // a.href = url;
    // a.download = "dow";
    // a.click();
    // var res = encodeURIComponent(url);
    // window.URL.revokeObjectURL(url);
    saveAs(url, "fileName");
  }

  dynamicDownlod() {
    const data={
      name:"vijju",
      content:null,
      type:".txt"
    }

    var file=data.content;
    var v=document.createElement('a');
    v.setAttribute('id','sample')
    v.download=data.name+data.type;
    v.href='data:appliction/octet-stream;base64,'+file;
    document.body.appendChild(v);
    v.click();
    v.remove();
  }

}


