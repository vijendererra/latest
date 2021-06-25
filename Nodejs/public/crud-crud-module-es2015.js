(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crud-crud-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/crud/crud-compnet/crud.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/crud/crud-compnet/crud.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-dialog [(visible)]=\"display\" [modal]=\"true\" appendTo=\"body\" [responsive]=\"true\" [style]=\"{'widh':'500px'}\"\r\n    [minY]=\"100\" >\r\n    <p-header class=\"dialogHeader\">\r\n        {{formTitle}}\r\n    </p-header>\r\n    <div>\r\n        <form [formGroup]=\"RegForm\">\r\n            <div class=\"container\">\r\n                <hr>\r\n                <label for=\"Nmae\"><b>Name:</b></label>\r\n                <input type=\"text\" placeholder=\"Enter Nmae\" name=\"name\" formControlName=\"name\" required>\r\n                <label for=\"Role\"><b>Role:</b></label>\r\n                <input type=\"text\" placeholder=\"Enter Role\" name=\"role\" formControlName=\"role\" required>\r\n                <label for=\"Location\"><b>Location</b></label>\r\n                <input type=\"text\" placeholder=\"Repeat Location\" name=\"location\" formControlName=\"location\" required>\r\n                <hr>\r\n                <button type=\"submit\" class=\"registerbtn\" (click)=\"submitForm()\">{{button}}</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</p-dialog>\r\n\r\n<div class=\"search\" matSuffix>\r\n  <button class=\"btn btn-link \" (click)=\"showDialog('Add',row)\">\r\n    <i class=\"fa fa-plus\"></i>\r\n</button>\r\n<mat-form-field class=\"serach-form\" floatLabel=\"never\">\r\n  <input matInput [(ngModel)]=\"searchKey\"placeholder=\"search\" autocomplete=\"off\" (keyup)=\"applyFilter()\">\r\n  <button class=\"btn btn-link \" matSuffix mat-icon-button aria-label=\"Clear\" *ngIf=\"searchKey\" (click)=\"clrearSearch()\">\r\n    <i class=\"fa fa-close\"></i>\r\n  </button>\r\n</mat-form-field>\r\n</div>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataTable\" matSort>\r\n  \r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n      </ng-container>\r\n  \r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"role\">\r\n        <th mat-header-cell *matHeaderCellDef  mat-sort-header> Role </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.role}} </td>\r\n      </ng-container>\r\n  \r\n      <!-- Weight Column -->\r\n      <ng-container matColumnDef=\"location\">\r\n        <th mat-header-cell *matHeaderCellDef  mat-sort-header> Location </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.location}} </td>\r\n      </ng-container>\r\n  \r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef > Actions </th>\r\n        <td mat-cell *matCellDef=\"let row\">\r\n            <button class=\"btn btn-link \" (click)=\"showDialog('Edit',row)\">\r\n                <i class=\"fa fa-edit\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <button class=\"btn btn-link \" (click)=\"delete(row._id)\">\r\n                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"loading\">\r\n        <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n            Loading Data\r\n        </mat-footer-cell>\r\n      </ng-container>\r\n  \r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':dataTable!=null}\"></mat-footer-row>\r\n    </table>\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n\r\n  \r\n  </div>\r\n  \r\n  \r\n  <!-- Copyright 2020 Google LLC. All Rights Reserved.\r\n      Use of this source code is governed by an MIT-style license that\r\n      can be found in the LICENSE file at http://angular.io/license -->");

/***/ }),

/***/ "./src/app/crud/crud-compnet/crud.component.css":
/*!******************************************************!*\
  !*** ./src/app/crud/crud-compnet/crud.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    background-color: black;\r\n  }\r\n  \r\n  * {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  /* Add padding to containers */\r\n  \r\n  .container {\r\n    padding: 16px;\r\n    background-color: white;\r\n  }\r\n  \r\n  /* Full-width input fields */\r\n  \r\n  input[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 15px;\r\n    margin: 5px 0 22px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n  }\r\n  \r\n  input[type=text]:focus, input[type=password]:focus {\r\n    background-color: #ddd;\r\n    outline: none;\r\n  }\r\n  \r\n  /* Overwrite default styles of hr */\r\n  \r\n  hr {\r\n    border: 1px solid #f1f1f1;\r\n    margin-bottom: 25px;\r\n  }\r\n  \r\n  /* Set a style for the submit button */\r\n  \r\n  .registerbtn {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 16px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    opacity: 0.9;\r\n  }\r\n  \r\n  .registerbtn:hover {\r\n    opacity: 1;\r\n  }\r\n  \r\n  /* Add a blue text color to links */\r\n  \r\n  a {\r\n    color: dodgerblue;\r\n  }\r\n  \r\n  /* Set a grey background color and center the text of the \"sign in\" section */\r\n  \r\n  .signin {\r\n    background-color: #f1f1f1;\r\n    text-align: center;\r\n  }\r\n  \r\n  table {\r\n    width: 100%;\r\n  }\r\n  \r\n  .hide{\r\n    display: none;\r\n  }\r\n  \r\n  mat-footer-row mat-footer-cell{\r\n    justify-content: center;\r\n    font-style: italic;\r\n  }\r\n  \r\n  .dialogHeader {\r\n    float: right;\r\n    color: #4CAF50;\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3J1ZC9jcnVkLWNvbXBuZXQvY3J1ZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUNBQXlDO0lBQ3pDLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQSw4QkFBOEI7O0VBQzlCO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7RUFFQSw0QkFBNEI7O0VBQzVCO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsYUFBYTtFQUNmOztFQUVBLG1DQUFtQzs7RUFDbkM7SUFDRSx5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCOztFQUVBLHNDQUFzQzs7RUFDdEM7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBLG1DQUFtQzs7RUFDbkM7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUEsNkVBQTZFOztFQUM3RTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsa0JBQWtCO0VBQ3BCOztFQUdBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7O0VBRWhCIiwiZmlsZSI6InNyYy9hcHAvY3J1ZC9jcnVkLWNvbXBuZXQvY3J1ZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lcnMgKi9cclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDVweCAwIDIycHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBPdmVyd3JpdGUgZGVmYXVsdCBzdHlsZXMgb2YgaHIgKi9cclxuICBociB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQgYnV0dG9uICovXHJcbiAgLnJlZ2lzdGVyYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZWdpc3RlcmJ0bjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgYSBibHVlIHRleHQgY29sb3IgdG8gbGlua3MgKi9cclxuICBhIHtcclxuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xyXG4gIH1cclxuICBcclxuICAvKiBTZXQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgYW5kIGNlbnRlciB0aGUgdGV4dCBvZiB0aGUgXCJzaWduIGluXCIgc2VjdGlvbiAqL1xyXG4gIC5zaWduaW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5oaWRle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgbWF0LWZvb3Rlci1yb3cgbWF0LWZvb3Rlci1jZWxse1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAuZGlhbG9nSGVhZGVyIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjNENBRjUwO1xyXG5cclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/crud/crud-compnet/crud.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/crud/crud-compnet/crud.component.ts ***!
  \*****************************************************/
/*! exports provided: CrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudComponent", function() { return CrudComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loginandregistration.service */ "./src/app/services/loginandregistration.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





// import {MatPaginator ,MatSort ,} from '@angular/material/paginator';

let CrudComponent = class CrudComponent {
    constructor(formBuilder, service, src) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.src = src;
        this.displayedColumns = ['name', 'role', 'location', 'actions'];
        this.data = [];
    }
    ngOnInit() {
        // document.getElementById('navbar').style.display='flex';
        // document.getElementById('footer').style.display="flex";
        this.sr();
        this.RegForm = this.formBuilder.group({
            _id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.getData();
    }
    sr() {
        // this.d= this.src.get();
        this.src.share.subscribe(res => this.d = res);
        console.log("d:", this.d);
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
    submitForm() {
        console.log(this.RegForm.value);
        if (this.dialogaction == "Add") {
            this.service.postEmp(this.RegForm.value).subscribe((res) => {
                console.log("res:", res);
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
        this.service.getEmp().subscribe(res => {
            this.data = res;
            this.dataTable = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.data);
            this.dataTable.sort = this.sort;
            this.dataTable.paginator = this.paginator;
            console.log("data:", this.dataTable);
        });
    }
    delete(id) {
        // console.log(id);
        this.service.deleteEmp(id).subscribe(res => {
            this.getData();
        }, err => {
            console.log("delete", err);
        });
    }
    ;
    clrearSearch() {
        this.searchKey = "";
        this.applyFilter();
    }
    applyFilter() {
        this.dataTable.filter = this.searchKey.trim().toLocaleLowerCase();
    }
};
CrudComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] },
    { type: _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_4__["LoginandregistrationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true })
], CrudComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true })
], CrudComponent.prototype, "sort", void 0);
CrudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crud',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crud.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/crud/crud-compnet/crud.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crud.component.css */ "./src/app/crud/crud-compnet/crud.component.css")).default]
    })
], CrudComponent);



/***/ }),

/***/ "./src/app/crud/crud-routing/crud-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/crud/crud-routing/crud-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: CrudRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudRoutingModule", function() { return CrudRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _crud_compnet_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crud-compnet/crud.component */ "./src/app/crud/crud-compnet/crud.component.ts");




const routes = [
    { path: '', component: _crud_compnet_crud_component__WEBPACK_IMPORTED_MODULE_3__["CrudComponent"] }
];
let CrudRoutingModule = class CrudRoutingModule {
};
CrudRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CrudRoutingModule);



/***/ }),

/***/ "./src/app/crud/crud.module.ts":
/*!*************************************!*\
  !*** ./src/app/crud/crud.module.ts ***!
  \*************************************/
/*! exports provided: CrudModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudModule", function() { return CrudModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _crud_compnet_crud_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud-compnet/crud.component */ "./src/app/crud/crud-compnet/crud.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _crud_routing_crud_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crud-routing/crud-routing.module */ "./src/app/crud/crud-routing/crud-routing.module.ts");






let CrudModule = class CrudModule {
};
CrudModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_crud_compnet_crud_component__WEBPACK_IMPORTED_MODULE_3__["CrudComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _crud_routing_crud_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrudRoutingModule"]
        ]
    })
], CrudModule);



/***/ })

}]);
//# sourceMappingURL=crud-crud-module-es2015.js.map