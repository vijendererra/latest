"use strict";
(self["webpackChunkangular8"] = self["webpackChunkangular8"] || []).push([["src_app_dynamic-data-tables_dynamic-data-tables_module_ts"],{

/***/ 95069:
/*!*******************************************************************!*\
  !*** ./src/app/dynamic-data-tables/dynamic-data-tables.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicDataTablesModule": function() { return /* binding */ DynamicDataTablesModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _dynamic_data_tables_dynamic_data_tables_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-data-tables/dynamic-data-tables.component */ 53918);
/* harmony import */ var _router_dynamic_data_tables_router_dynamic_data_tables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router-dynamic-data-tables/router-dynamic-data-tables.module */ 67118);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);





var DynamicDataTablesModule = /** @class */ (function () {
    function DynamicDataTablesModule() {
    }
    DynamicDataTablesModule.ɵfac = function DynamicDataTablesModule_Factory(t) { return new (t || DynamicDataTablesModule)(); };
    DynamicDataTablesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DynamicDataTablesModule });
    DynamicDataTablesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
                _router_dynamic_data_tables_router_dynamic_data_tables_module__WEBPACK_IMPORTED_MODULE_1__.RouterDynamicDataTablesModule
            ]] });
    return DynamicDataTablesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DynamicDataTablesModule, { declarations: [_dynamic_data_tables_dynamic_data_tables_component__WEBPACK_IMPORTED_MODULE_0__.DynamicDataTablesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _router_dynamic_data_tables_router_dynamic_data_tables_module__WEBPACK_IMPORTED_MODULE_1__.RouterDynamicDataTablesModule] }); })();


/***/ }),

/***/ 53918:
/*!******************************************************************************************!*\
  !*** ./src/app/dynamic-data-tables/dynamic-data-tables/dynamic-data-tables.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicDataTablesComponent": function() { return /* binding */ DynamicDataTablesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/crud.service */ 3927);
/* harmony import */ var _comman_dynamicdatatables_dynamicdatatables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../comman/dynamicdatatables/dynamicdatatables.component */ 49881);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dialog */ 35698);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 82707);







var _c0 = function () { return { "widh": "500px" }; };
var DynamicDataTablesComponent = /** @class */ (function () {
    function DynamicDataTablesComponent(service, formBuilder) {
        this.service = service;
        this.formBuilder = formBuilder;
    }
    DynamicDataTablesComponent.prototype.ngOnInit = function () {
        this.saveForm = this.formBuilder.group({
            _id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
        this.getData();
    };
    DynamicDataTablesComponent.prototype.getData = function () {
        var _this = this;
        this.service.getEmp().subscribe(function (res) {
            var response = res;
            var colums = ["name", "role", "location"];
            _this.dynamicData = {
                displayColumns: colums,
                tableDta: response
            };
            //  console.log(this.dynamicData)
        }, function (err) {
            console.log(err);
        });
    };
    DynamicDataTablesComponent.prototype.doActions = function (action) {
        if (action.action == "new") {
            // console.log("new", action)
            this.addData("new", '');
        }
        else if (action.action == "edit") {
            this.addData("edit", action.data);
        }
        else if (action.action == "delete") {
            console.log("delete", action.data);
        }
    };
    DynamicDataTablesComponent.prototype.addData = function (action, row) {
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
    };
    DynamicDataTablesComponent.prototype.submitForm = function () {
    };
    DynamicDataTablesComponent.ɵfac = function DynamicDataTablesComponent_Factory(t) { return new (t || DynamicDataTablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_0__.CrudService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
    DynamicDataTablesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DynamicDataTablesComponent, selectors: [["app-dynamic-data-tables"]], decls: 29, vars: 10, consts: [[3, "tableData", "emitactions"], [3, "visible", "maximizable", "responsive", "visibleChange"], [1, "dialogHeader"], [3, "formGroup"], [1, "container"], [1, "row"], [1, "col-md-6", "form-group"], ["type", "text", "placeholder", "Enter Nmae", "formControlName", "name", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Enter Role", "name", "role", "formControlName", "role", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Repeat Location", "name", "location", "formControlName", "location", "required", "", 1, "form-control"], [1, "d-flex", "justify-content-end", "mr-3"], [1, "btn", "btn-primary", 3, "click"]], template: function DynamicDataTablesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-dynamicdatatables", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("emitactions", function DynamicDataTablesComponent_Template_app_dynamicdatatables_emitactions_0_listener($event) { return ctx.doActions($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p-dialog", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function DynamicDataTablesComponent_Template_p_dialog_visibleChange_1_listener($event) { return ctx.showForm = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Role:");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Location:");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DynamicDataTablesComponent_Template_button_click_27_listener() { return ctx.submitForm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tableData", ctx.dynamicData);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.showForm)("maximizable", true)("responsive", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.formTitle, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.saveForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.button);
        } }, directives: [_comman_dynamicdatatables_dynamicdatatables_component__WEBPACK_IMPORTED_MODULE_1__.DynamicdatatablesComponent, primeng_dialog__WEBPACK_IMPORTED_MODULE_4__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_5__.Header, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator], styles: [".dialogHeader[_ngcontent-%COMP%] {\n  position: absolute;\n  font-weight: 500;\n  font-style: italic;\n  color: #427510;\n  left: 200px;\n  top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtZGF0YS10YWJsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDSiIsImZpbGUiOiJkeW5hbWljLWRhdGEtdGFibGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZ0hlYWRlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjpoc2woOTAsIDc2JSwgMjYlKTtcclxuICAgIGxlZnQ6IDIwMHB4O1xyXG4gICAgdG9wOjMwcHhcclxufSJdfQ== */"] });
    return DynamicDataTablesComponent;
}());



/***/ }),

/***/ 67118:
/*!*****************************************************************************************************!*\
  !*** ./src/app/dynamic-data-tables/router-dynamic-data-tables/router-dynamic-data-tables.module.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterDynamicDataTablesModule": function() { return /* binding */ RouterDynamicDataTablesModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dynamic_data_tables_dynamic_data_tables_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dynamic-data-tables/dynamic-data-tables.component */ 53918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




var routes = [
    { path: '', component: _dynamic_data_tables_dynamic_data_tables_component__WEBPACK_IMPORTED_MODULE_0__.DynamicDataTablesComponent },
];
var RouterDynamicDataTablesModule = /** @class */ (function () {
    function RouterDynamicDataTablesModule() {
    }
    RouterDynamicDataTablesModule.ɵfac = function RouterDynamicDataTablesModule_Factory(t) { return new (t || RouterDynamicDataTablesModule)(); };
    RouterDynamicDataTablesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RouterDynamicDataTablesModule });
    RouterDynamicDataTablesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return RouterDynamicDataTablesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RouterDynamicDataTablesModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_dynamic-data-tables_dynamic-data-tables_module_ts.js.map