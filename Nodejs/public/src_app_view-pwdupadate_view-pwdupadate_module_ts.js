"use strict";
(self["webpackChunkangular8"] = self["webpackChunkangular8"] || []).push([["src_app_view-pwdupadate_view-pwdupadate_module_ts"],{

/***/ 7225:
/*!******************************************************************!*\
  !*** ./src/app/view-pwdupadate/changepwd/changepwd.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangepwdComponent": function() { return /* binding */ ChangepwdComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/loginandregistration.service */ 98109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);






function ChangepwdComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.serverErrorMessages, " ");
} }
var ChangepwdComponent = /** @class */ (function () {
    function ChangepwdComponent(loginService, router, formBuilder) {
        this.loginService = loginService;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    ChangepwdComponent.prototype.ngOnInit = function () {
        this.id = localStorage.getItem('id');
        this.PwdUpDatateForm = this.formBuilder.group({
            _id: [''],
            oldpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            confirmpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    };
    ChangepwdComponent.prototype.changePwd = function () {
        var _this = this;
        this.PwdUpDatateForm.controls['_id'].setValue(this.id);
        console.log(this.PwdUpDatateForm.value);
        this.loginService.changePwd(this.PwdUpDatateForm.value).subscribe(function (res) {
            console.log(res);
            _this.router.navigateByUrl('');
        }, function (error) {
            console.log(error);
            _this.serverErrorMessages = error.message;
        });
    };
    ChangepwdComponent.ɵfac = function ChangepwdComponent_Factory(t) { return new (t || ChangepwdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_0__.LoginandregistrationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
    ChangepwdComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChangepwdComponent, selectors: [["app-changepwd"]], decls: 33, vars: 2, consts: [[1, "form-gap"], [1, "container"], [1, "row", 2, "padding-left", "20%"], [1, "col-md-6", "col-md-offset-6"], [1, "panel", "panel-default"], [1, "panel-body"], [1, "text-center"], [1, "fa", "fa-lock", "fa-4x"], [1, "form", 3, "formGroup"], [1, "form-group"], [1, "input-group"], [1, "input-group-addon"], [1, "glyphicon", "glyphicon-envelope", "color-blue"], ["name", "password", "placeholder", "oldpassword ", "type", "password", "formControlName", "oldpassword", "required", "", 1, "form-control"], ["name", "password", "placeholder", "New-Password ", "type", "password", "formControlName", "password", "required", "", 1, "form-control"], ["name", "confirmpassword", "placeholder", "confirmpassword ", "type", "confirmpassword", "formControlName", "confirmpassword", "required", "", 1, "form-control"], ["class", "error", 4, "ngIf"], ["type", "button", "name", "recover-submit", "value", "Reset Password", 1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "click"], [1, "error"]], template: function ChangepwdComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Reset - Password?");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "You can reset your password here.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ChangepwdComponent_div_30_Template, 2, 1, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangepwdComponent_Template_input_click_32_listener() { return ctx.changePwd(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.PwdUpDatateForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.serverErrorMessages);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".form-gap[_ngcontent-%COMP%] {\r\n    padding-top: 70px;\r\n}\r\n.error[_ngcontent-%COMP%]{\r\n    font-style: italic;\r\n    color: red;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    color: springgreen;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZXB3ZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiY2hhbmdlcHdkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1nYXAge1xyXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbn1cclxuLmVycm9ye1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5oMntcclxuICAgIGNvbG9yOiBzcHJpbmdncmVlbjtcclxufSJdfQ== */"] });
    return ChangepwdComponent;
}());



/***/ }),

/***/ 6284:
/*!*********************************************************************************!*\
  !*** ./src/app/view-pwdupadate/router-view-module/router-view-module.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouterViewModuleModule": function() { return /* binding */ RouterViewModuleModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _views_views_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/views.component */ 94080);
/* harmony import */ var _changepwd_changepwd_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../changepwd/changepwd.component */ 7225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





var routes = [
    { path: '', component: _views_views_component__WEBPACK_IMPORTED_MODULE_0__.ViewsComponent },
    { path: 'pwdchange', component: _changepwd_changepwd_component__WEBPACK_IMPORTED_MODULE_1__.ChangepwdComponent },
];
var RouterViewModuleModule = /** @class */ (function () {
    function RouterViewModuleModule() {
    }
    RouterViewModuleModule.ɵfac = function RouterViewModuleModule_Factory(t) { return new (t || RouterViewModuleModule)(); };
    RouterViewModuleModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RouterViewModuleModule });
    RouterViewModuleModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
    return RouterViewModuleModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RouterViewModuleModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 12211:
/*!***********************************************************!*\
  !*** ./src/app/view-pwdupadate/view-pwdupadate.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPwdupadateModule": function() { return /* binding */ ViewPwdupadateModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _views_views_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/views.component */ 94080);
/* harmony import */ var _changepwd_changepwd_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changepwd/changepwd.component */ 7225);
/* harmony import */ var _router_view_module_router_view_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router-view-module/router-view-module.module */ 6284);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






var ViewPwdupadateModule = /** @class */ (function () {
    function ViewPwdupadateModule() {
    }
    ViewPwdupadateModule.ɵfac = function ViewPwdupadateModule_Factory(t) { return new (t || ViewPwdupadateModule)(); };
    ViewPwdupadateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ViewPwdupadateModule });
    ViewPwdupadateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
                _router_view_module_router_view_module_module__WEBPACK_IMPORTED_MODULE_2__.RouterViewModuleModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule
            ]] });
    return ViewPwdupadateModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ViewPwdupadateModule, { declarations: [_views_views_component__WEBPACK_IMPORTED_MODULE_0__.ViewsComponent, _changepwd_changepwd_component__WEBPACK_IMPORTED_MODULE_1__.ChangepwdComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _router_view_module_router_view_module_module__WEBPACK_IMPORTED_MODULE_2__.RouterViewModuleModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ }),

/***/ 94080:
/*!**********************************************************!*\
  !*** ./src/app/view-pwdupadate/views/views.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewsComponent": function() { return /* binding */ ViewsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/loginandregistration.service */ 98109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);





var ViewsComponent = /** @class */ (function () {
    function ViewsComponent(loginService, router, formBuilder) {
        this.loginService = loginService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.url = '';
        this.fileToUpload = null;
    }
    ViewsComponent.prototype.ngOnInit = function () {
        this.edible = false;
        this.VieForm = this.formBuilder.group({
            _id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            phonenumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            pinnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
        });
        this.userDetails();
    };
    ViewsComponent.prototype.userDetails = function () {
        var _this = this;
        this.loginService.logedin().subscribe(function (res) {
            _this.useData = res;
            // console.log(this.useData);
            _this.VieForm.controls['_id'].setValue(_this.useData._id);
            _this.VieForm.controls['name'].setValue(_this.useData.name);
            localStorage.setItem('name', _this.useData.name);
            _this.VieForm.controls['email'].setValue(_this.useData.email);
            _this.VieForm.controls['phonenumber'].setValue(_this.useData.phonenumber);
            _this.VieForm.controls['address'].setValue(_this.useData.address);
            _this.VieForm.controls['pinnumber'].setValue(_this.useData.pinnumber);
            if (_this.useData.image != undefined) {
                _this.url = "http://localhost:2020/" + _this.useData.image;
                localStorage.setItem("profile", _this.url);
                // this.loginService.img(this.url);
            }
            // this.profile=localStorage.getItem('profile');
            // console.log(this.profile)
        }, function (error) {
            console.log(error);
        });
    };
    ViewsComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        var reader = new FileReader();
        reader.readAsDataURL(this.fileToUpload);
        reader.onload = function (event) {
            _this.url = event.target.result;
        };
    };
    ViewsComponent.prototype.updateProfile = function () {
        var _this = this;
        var formData = new FormData();
        if (this.fileToUpload != null) {
            formData.append('Image', this.fileToUpload, this.fileToUpload.name);
            formData.append('_id', this.VieForm.value._id);
            formData.append('name', this.VieForm.value.name);
            formData.append('email', this.VieForm.value.email);
            formData.append('phonenumber', this.VieForm.value.phonenumber);
            formData.append('address', this.VieForm.value.address);
            formData.append('pinnumber', this.VieForm.value.name);
            this.loginService.upDateProfile(formData).subscribe(function (res) {
                // console.log(res);
                _this.userDetails();
                // window.location.reload();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.loginService.upDateProfile(this.VieForm.value).subscribe(function (res) {
                _this.userDetails();
                // console.log(res);
                // window.location.reload();
            }, function (error) {
                console.log(error);
            });
        }
    };
    ViewsComponent.prototype.Editable = function () {
        this.edible = true;
    };
    ViewsComponent.ɵfac = function ViewsComponent_Factory(t) { return new (t || ViewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_0__.LoginandregistrationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
    ViewsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ViewsComponent, selectors: [["app-views"]], decls: 45, vars: 7, consts: [[3, "formGroup"], [1, "container", "rounded", "bg-white", "mt-5", "mb-5"], [1, "row"], [1, "col-md-3", "border-right"], [1, "d-flex", "flex-column", "align-items-center", "text-center", "p-3", "py-5"], ["height", "150", 1, "rounded-circle", "mt-5", 3, "src"], ["type", "file", "accept", "image/*", 3, "change"], ["Image", ""], [1, "oi", "oi-image"], [1, "col-md-5", "border-right"], [1, "p-3", "py-5"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "text-right"], [1, "col-md-10"], [1, "col-md-2"], [1, "btn", "btn-link", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-edit"], [1, "row", "mt-3"], [1, "col-md-12"], [1, "labels"], ["type", "text", "placeholder", "Enter Naer", "formControlName", "name", 1, "form-control", 3, "readonly"], ["type", "email", "placeholder", "Enter email id", "formControlName", "email", 1, "form-control", 3, "readonly"], ["type", "text", "placeholder", "Enter PhoneNumber", "formControlName", "phonenumber", 1, "form-control", 3, "readonly"], [1, "col-md-4"], ["type", "text", "placeholder", "Enter Adress", "formControlName", "address", 1, "form-control", 3, "readonly"], ["type", "text", "placeholder", "Enter PinNumber", "formControlName", "pinnumber", 1, "form-control", 3, "readonly"], [1, "mt-5", "text-center"], ["type", "button", 1, "btn", "btn-primary", "profile-button", 3, "click"]], template: function ViewsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ViewsComponent_Template_input_change_6_listener($event) { return ctx.handleFileInput($event.target.files); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h4", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Profile Settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewsComponent_Template_button_click_17_listener() { return ctx.Editable(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Email ID");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "PhoneNumber");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Adress");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "PinNumber");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ViewsComponent_Template_button_click_43_listener() { return ctx.updateProfile(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "SaveProfile");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.VieForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx.edible);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx.edible);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx.edible);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx.edible);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx.edible);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["body[_ngcontent-%COMP%] {\r\n    background: rgb(99, 39, 120)\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none;\r\n    border-color: #BA68C8\r\n}\r\n\r\n.profile-button[_ngcontent-%COMP%] {\r\n    background: rgb(99, 39, 120);\r\n    box-shadow: none;\r\n    border: none\r\n}\r\n\r\n.profile-button[_ngcontent-%COMP%]:hover {\r\n    background: #682773\r\n}\r\n\r\n.profile-button[_ngcontent-%COMP%]:focus {\r\n    background: #682773;\r\n    box-shadow: none\r\n}\r\n\r\n.profile-button[_ngcontent-%COMP%]:active {\r\n    background: #682773;\r\n    box-shadow: none\r\n}\r\n\r\n.back[_ngcontent-%COMP%]:hover {\r\n    color: #682773;\r\n    cursor: pointer\r\n}\r\n\r\n.labels[_ngcontent-%COMP%] {\r\n    font-size: 11px\r\n}\r\n\r\n.add-experience[_ngcontent-%COMP%]:hover {\r\n    background: #BA68C8;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    border: solid 1px #BA68C8\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmO0FBQ0oiLCJmaWxlIjoidmlld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDk5LCAzOSwgMTIwKVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICNCQTY4QzhcclxufVxyXG5cclxuLnByb2ZpbGUtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig5OSwgMzksIDEyMCk7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lXHJcbn1cclxuXHJcbi5wcm9maWxlLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjgyNzczXHJcbn1cclxuXHJcbi5wcm9maWxlLWJ1dHRvbjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjgyNzczO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZVxyXG59XHJcblxyXG4ucHJvZmlsZS1idXR0b246YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICM2ODI3NzM7XHJcbiAgICBib3gtc2hhZG93OiBub25lXHJcbn1cclxuXHJcbi5iYWNrOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNjgyNzczO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5sYWJlbHMge1xyXG4gICAgZm9udC1zaXplOiAxMXB4XHJcbn1cclxuXHJcbi5hZGQtZXhwZXJpZW5jZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQkE2OEM4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjQkE2OEM4XHJcbn0iXX0= */"] });
    return ViewsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src_app_view-pwdupadate_view-pwdupadate_module_ts.js.map