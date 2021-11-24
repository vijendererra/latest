"use strict";
(self["webpackChunkangular8"] = self["webpackChunkangular8"] || []).push([["src_app_login-registration_login_module_ts"],{

/***/ 45709:
/*!**************************************************************************************************!*\
  !*** ./src/app/login-registration/login-registartin-routing/login-registartin-routing.module.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRegistartinRoutingModule": function() { return /* binding */ LoginRegistartinRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login/login.component */ 96185);
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../registration/registration.component */ 1132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    { path: 'register', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_1__.RegistrationComponent },
];
var LoginRegistartinRoutingModule = /** @class */ (function () {
    function LoginRegistartinRoutingModule() {
    }
    LoginRegistartinRoutingModule.ɵfac = function LoginRegistartinRoutingModule_Factory(t) { return new (t || LoginRegistartinRoutingModule)(); };
    LoginRegistartinRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginRegistartinRoutingModule });
    LoginRegistartinRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
    return LoginRegistartinRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginRegistartinRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 17473:
/*!****************************************************!*\
  !*** ./src/app/login-registration/login.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": function() { return /* binding */ LoginModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 96185);
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration/registration.component */ 1132);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _login_registration_login_registartin_routing_login_registartin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login-registration/login-registartin-routing/login-registartin-routing.module */ 45709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
    LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LoginModule });
    LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
                _login_registration_login_registartin_routing_login_registartin_routing_module__WEBPACK_IMPORTED_MODULE_3__.LoginRegistartinRoutingModule,
                // EffectsModule.forFeature([LoggedInServce]),
            ]] });
    return LoginModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _registration_registration_component__WEBPACK_IMPORTED_MODULE_1__.RegistrationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _login_registration_login_registartin_routing_login_registartin_routing_module__WEBPACK_IMPORTED_MODULE_3__.LoginRegistartinRoutingModule] }); })();


/***/ }),

/***/ 96185:
/*!*************************************************************!*\
  !*** ./src/app/login-registration/login/login.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": function() { return /* binding */ LoginComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _store_login_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/login.actions */ 30326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/loginandregistration.service */ 98109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);








function LoginComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.serverErrorMessagesEmail, " ");
} }
var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, formBuilder, _router, _activatedRoute, store) {
        this.service = service;
        this.formBuilder = formBuilder;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.store = store;
        this.err = [];
        this.err1 = [];
        this.url = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // document.getElementById('navbar').style.display='none';
        // document.getElementById('footer').style.display='none';    
        if (this.service.isLoggedIn()) {
            this._router.navigateByUrl('/curd');
        }
        this.LoginForm = this.formBuilder.group({
            _id: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
        });
        // this.userLogedIn();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.sharing();
        this.service.loginUser(this.LoginForm.value).subscribe(function (res) {
            // console.log(res);
            _this.service.setToken(res['token']);
            _this.userLogedIn();
        }, function (error) {
            // console.log(error)
            _this.serverErrorMessagesEmail = error.message;
        });
    };
    LoginComponent.prototype.userLogedIn = function () {
        this.store.dispatch((0,_store_login_actions__WEBPACK_IMPORTED_MODULE_0__.loggedIn)());
        // this.service.logedin().subscribe(
        //   res => {
        //     this.userData = res;
        //     // console.log(this.userData);
        //     localStorage.setItem('name', this.userData.name);
        //     localStorage.setItem("id", this.userData._id);
        //     if (this.userData.image != undefined) {
        //       localStorage.removeItem('profile');
        //       this.url = "http://localhost:2020/" + this.userData.image;
        //       // console.log(this.url);
        //       this.service.img(this.url);
        //     }
        //     this._router.navigateByUrl('/curd');
        //   },
        //   error => {
        //     this.serverErrorMessagesEmail = error.message;
        //   }
        // )
    };
    LoginComponent.prototype.sharing = function () {
        var v = 123;
        this.service.sharing(v);
    };
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_1__.LoginandregistrationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
    LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 20, vars: 3, consts: [[1, "signup-form"], [3, "formGroup"], [1, "form-group"], ["type", "email", "name", "email", "placeholder", "Email", "required", "required", "formControlName", "email", 1, "form-control"], ["type", "password", "name", "password", "placeholder", "Password", "required", "required", "formControlName", "password", 1, "form-control"], ["class", "error", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", "btn-block", 3, "disabled", "click"], [1, "text-center"], ["routerLink", "/forgotpwd", 2, "color", "dodgerblue"], ["routerLink", "/register", 2, "color", "dodgerblue"], [1, "error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "LoginForm");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_10_listener() { return ctx.login(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Forgot ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "password");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Create An Account? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "sinup");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.LoginForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.serverErrorMessagesEmail);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.LoginForm.valid);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: ["body[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n\tbackground: #63738a;\r\n\tfont-family: 'Roboto', sans-serif;\r\n}\r\n.form-control[_ngcontent-%COMP%] {\r\n\theight: 40px;\r\n\tbox-shadow: none;\r\n\tcolor: #969fa4;\r\n}\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n\tborder-color: #5cb85c;\r\n}\r\n.form-control[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {        \r\n\tborder-radius: 3px;\r\n}\r\n.signup-form[_ngcontent-%COMP%] {\r\n\twidth: 450px;\r\n\tmargin: 0 auto;\r\n\tpadding: 30px 0;\r\n  \tfont-size: 15px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tcolor: #636363;\r\n\tmargin: 0 0 15px;\r\n\tposition: relative;\r\n\ttext-align: center;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before, .signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\r\n\tcontent: \"\";\r\n\theight: 2px;\r\n\twidth: 30%;\r\n\tbackground: #d4d4d4;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tz-index: 2;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before {\r\n\tleft: 0;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\r\n\tright: 0;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .hint-text[_ngcontent-%COMP%] {\r\n\tcolor: #999;\r\n\tmargin-bottom: 30px;\r\n\ttext-align: center;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n\tcolor: #999;\r\n\tborder-radius: 3px;\r\n\tmargin-bottom: 15px;\r\n\tbackground: #f2f3f7;\r\n\tbox-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\tpadding: 30px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 20px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n\tmargin-top: 3px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {        \r\n\tfont-size: 16px;\r\n\tfont-weight: bold;\t\t\r\n\tmin-width: 140px;\r\n\toutline: none !important;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n\tpadding-right: 10px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n\tpadding-left: 10px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n\ttext-decoration: underline;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\ttext-decoration: none;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: #5cb85c;\r\n\ttext-decoration: none;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\ttext-decoration: underline;\r\n}\r\n.error[_ngcontent-%COMP%]{\r\n  color: red;\r\n  font-style: italic;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLGlDQUFpQztBQUNsQztBQUNBO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7QUFDQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLGVBQWU7R0FDYixlQUFlO0FBQ2xCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsVUFBVTtDQUNWLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFVBQVU7QUFDWDtBQUNBO0NBQ0MsT0FBTztBQUNSO0FBQ0E7Q0FDQyxRQUFRO0FBQ1Q7QUFDQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsMENBQTBDO0NBQzFDLGFBQWE7QUFDZDtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQix3QkFBd0I7QUFDekI7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsMEJBQTBCO0FBQzNCO0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLDBCQUEwQjtBQUMzQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0YmFja2dyb3VuZDogIzYzNzM4YTtcclxuXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0Y29sb3I6ICM5NjlmYTQ7XHJcbn1cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjNWNiODVjO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wsIC5idG4geyAgICAgICAgXHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5zaWdudXAtZm9ybSB7XHJcblx0d2lkdGg6IDQ1MHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdHBhZGRpbmc6IDMwcHggMDtcclxuICBcdGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uc2lnbnVwLWZvcm0gaDIge1xyXG5cdGNvbG9yOiAjNjM2MzYzO1xyXG5cdG1hcmdpbjogMCAwIDE1cHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2lnbnVwLWZvcm0gaDI6YmVmb3JlLCAuc2lnbnVwLWZvcm0gaDI6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0aGVpZ2h0OiAycHg7XHJcblx0d2lkdGg6IDMwJTtcclxuXHRiYWNrZ3JvdW5kOiAjZDRkNGQ0O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHR6LWluZGV4OiAyO1xyXG59XHRcclxuLnNpZ251cC1mb3JtIGgyOmJlZm9yZSB7XHJcblx0bGVmdDogMDtcclxufVxyXG4uc2lnbnVwLWZvcm0gaDI6YWZ0ZXIge1xyXG5cdHJpZ2h0OiAwO1xyXG59XHJcbi5zaWdudXAtZm9ybSAuaGludC10ZXh0IHtcclxuXHRjb2xvcjogIzk5OTtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2lnbnVwLWZvcm0gZm9ybSB7XHJcblx0Y29sb3I6ICM5OTk7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0YmFja2dyb3VuZDogI2YyZjNmNztcclxuXHRib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG4uc2lnbnVwLWZvcm0gLmZvcm0tZ3JvdXAge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcblx0bWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi5zaWdudXAtZm9ybSAuYnRuIHsgICAgICAgIFxyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcdFx0XHJcblx0bWluLXdpZHRoOiAxNDBweDtcclxuXHRvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNpZ251cC1mb3JtIC5yb3cgZGl2OmZpcnN0LWNoaWxkIHtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5zaWdudXAtZm9ybSAucm93IGRpdjpsYXN0LWNoaWxkIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn0gICAgXHRcclxuLnNpZ251cC1mb3JtIGEge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5zaWdudXAtZm9ybSBhOmhvdmVyIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnNpZ251cC1mb3JtIGZvcm0gYSB7XHJcblx0Y29sb3I6ICM1Y2I4NWM7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHRcclxuLnNpZ251cC1mb3JtIGZvcm0gYTpob3ZlciB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn0gIFxyXG4uZXJyb3J7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn0iXX0= */"] });
    return LoginComponent;
}());



/***/ }),

/***/ 1132:
/*!***************************************************************************!*\
  !*** ./src/app/login-registration/registration/registration.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationComponent": function() { return /* binding */ RegistrationComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/loginandregistration.service */ 98109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);






function RegistrationComponent_div_6_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name Required... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegistrationComponent_div_6_div_3_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.RegForm.get("name").errors == null ? null : ctx_r7.RegForm.get("name").errors.required);
} }
function RegistrationComponent_div_6_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email Required... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_6_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email Required... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RegistrationComponent_div_6_div_3_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RegistrationComponent_div_6_span_6_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RegistrationComponent_div_6_span_7_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.RegForm.get("name").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.RegForm.get("email").touched && (ctx_r0.RegForm.get("email").errors == null ? null : ctx_r0.RegForm.get("email").errors.email));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.RegForm.get("email").errors == null ? null : ctx_r0.RegForm.get("email").errors.email);
} }
function RegistrationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Please select your gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Female ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Male ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " I accept the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Terms of Use");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " & ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistrationComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.serverErrorMessagesEmail, " ");
} }
function RegistrationComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistrationComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.increase(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistrationComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistrationComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.decrease(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistrationComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Register Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(service, formBuilder, _router, _activatedRoute) {
        this.service = service;
        this.formBuilder = formBuilder;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.count = 0;
        this.regform = true;
        this.regform1 = false;
        this.next = true;
        this.return = false;
        this.submit = false;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.RegForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            confirmpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            phonenumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            pinnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            pinnumber1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    };
    RegistrationComponent.prototype.register = function () {
        var _this = this;
        this.service.postEmp(this.RegForm.value).subscribe(function (res) {
            _this._router.navigate(['/']);
        }, function (error) {
            _this.serverErrorMessagesEmail = error.message;
            console.log(_this.serverErrorMessagesEmail);
        });
    };
    RegistrationComponent.prototype.increase = function () {
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
    };
    RegistrationComponent.prototype.decrease = function () {
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
    ;
    RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_0__.LoginandregistrationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
    RegistrationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 21, vars: 8, consts: [[1, "signup-form"], [3, "formGroup", "ngSubmit"], [1, "hint-text"], [4, "ngIf"], ["class", "form-group", 4, "ngIf"], ["class", "error", 4, "ngIf"], ["type", "button", "class", "btn btn-success", 3, "click", 4, "ngIf"], [1, "form-group"], ["type", "submit", "class", "btn btn-success btn-lg btn-block", 4, "ngIf"], [1, "text-center"], ["routerLink", "", 2, "color", "dodgerblue"], ["type", "text", "name", "name", "placeholder", "Name", "formControlName", "name", 1, "form-control"], ["type", "email", "name", "email", "placeholder", "Email", "required", "required", "formControlName", "email", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "name", "password", "placeholder", "Password", "required", "required", "formControlName", "password", 1, "form-control"], ["type", "Confirmpassword", "name", "confirm_password", "placeholder", "Confirm Password", "required", "required", "formControlName", "confirmpassword", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "text-danger"], ["type", "Confirmpassword", "name", "confirm_password", "placeholder", "phone number", "required", "required", "formControlName", "phonenumber", 1, "form-control"], ["type", "Confirmpassword", "name", "confirm_password", "placeholder", "address", "required", "required", "formControlName", "address", 1, "form-control"], ["type", "Confirmpassword", "name", "confirm_password", "placeholder", "pinnumber", "required", "required", "formControlName", "pinnumber", 1, "form-control"], [1, "row", 2, "margin-left", "5px"], ["type", "radio", "value", "female", "name", "gender", "formControlName", "pinnumber1"], [1, "row"], [1, "md-check"], ["type", "radio", "value", "male", "name", "gender", "formControlName", "pinnumber1"], [1, "form-check-label"], ["type", "checkbox", "required", "required"], ["href", "#", 2, "color", "dodgerblue"], [1, "error"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", "btn-block"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_1_listener() { return ctx.register(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Create your account. It's free and only takes a minute.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RegistrationComponent_div_6_Template, 12, 3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RegistrationComponent_div_7_Template, 18, 0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RegistrationComponent_div_8_Template, 9, 0, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RegistrationComponent_div_9_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RegistrationComponent_button_11_Template, 2, 0, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u00A0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RegistrationComponent_button_13_Template, 2, 0, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, RegistrationComponent_button_16_Template, 2, 0, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Already have an account? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "login");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.RegForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.regform);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.regform1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submit);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.serverErrorMessagesEmail);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.next);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.return);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submit);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor], styles: ["body[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n\tbackground: #63738a;\r\n\tfont-family: 'Roboto', sans-serif;\r\n}\r\n.form-control[_ngcontent-%COMP%] {\r\n\theight: 40px;\r\n\tbox-shadow: none;\r\n\tcolor: #969fa4;\r\n}\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n\tborder-color: #5cb85c;\r\n}\r\n.form-control[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {        \r\n\tborder-radius: 3px;\r\n}\r\n.signup-form[_ngcontent-%COMP%] {\r\n\twidth: 450px;\r\n\tmargin: 0 auto;\r\n\tpadding: 30px 0;\r\n  \tfont-size: 15px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tcolor: #636363;\r\n\tmargin: 0 0 15px;\r\n\tposition: relative;\r\n\ttext-align: center;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before, .signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\r\n\tcontent: \"\";\r\n\theight: 2px;\r\n\twidth: 30%;\r\n\tbackground: #d4d4d4;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tz-index: 2;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before {\r\n\tleft: 0;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\r\n\tright: 0;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .hint-text[_ngcontent-%COMP%] {\r\n\tcolor: #999;\r\n\tmargin-bottom: 30px;\r\n\ttext-align: center;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n\tcolor: #999;\r\n\tborder-radius: 3px;\r\n\tmargin-bottom: 15px;\r\n\tbackground: #f2f3f7;\r\n\tbox-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\tpadding: 30px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 20px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n\tmargin-top: 3px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {        \r\n\tfont-size: 16px;\r\n\tfont-weight: bold;\t\t\r\n\tmin-width: 140px;\r\n\toutline: none !important;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\r\n\tpadding-right: 10px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\r\n\tpadding-left: 10px;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n\ttext-decoration: underline;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\ttext-decoration: none;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: #5cb85c;\r\n\ttext-decoration: none;\r\n}\r\n.signup-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\ttext-decoration: underline;\r\n}\r\n.error[_ngcontent-%COMP%]{\r\n  color: red;\r\n  font-style: italic;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixpQ0FBaUM7QUFDbEM7QUFDQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmO0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGNBQWM7Q0FDZCxlQUFlO0dBQ2IsZUFBZTtBQUNsQjtBQUNBO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLFVBQVU7Q0FDVixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixVQUFVO0FBQ1g7QUFDQTtDQUNDLE9BQU87QUFDUjtBQUNBO0NBQ0MsUUFBUTtBQUNUO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLDBDQUEwQztDQUMxQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsV0FBVztDQUNYLDBCQUEwQjtBQUMzQjtBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQywwQkFBMEI7QUFDM0I7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEIiLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRiYWNrZ3JvdW5kOiAjNjM3MzhhO1xyXG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuXHRoZWlnaHQ6IDQwcHg7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHRjb2xvcjogIzk2OWZhNDtcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuXHRib3JkZXItY29sb3I6ICM1Y2I4NWM7XHJcbn1cclxuLmZvcm0tY29udHJvbCwgLmJ0biB7ICAgICAgICBcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIHtcclxuXHR3aWR0aDogNDUwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0cGFkZGluZzogMzBweCAwO1xyXG4gIFx0Zm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5zaWdudXAtZm9ybSBoMiB7XHJcblx0Y29sb3I6ICM2MzYzNjM7XHJcblx0bWFyZ2luOiAwIDAgMTVweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zaWdudXAtZm9ybSBoMjpiZWZvcmUsIC5zaWdudXAtZm9ybSBoMjphZnRlciB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRoZWlnaHQ6IDJweDtcclxuXHR3aWR0aDogMzAlO1xyXG5cdGJhY2tncm91bmQ6ICNkNGQ0ZDQ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdHotaW5kZXg6IDI7XHJcbn1cdFxyXG4uc2lnbnVwLWZvcm0gaDI6YmVmb3JlIHtcclxuXHRsZWZ0OiAwO1xyXG59XHJcbi5zaWdudXAtZm9ybSBoMjphZnRlciB7XHJcblx0cmlnaHQ6IDA7XHJcbn1cclxuLnNpZ251cC1mb3JtIC5oaW50LXRleHQge1xyXG5cdGNvbG9yOiAjOTk5O1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zaWdudXAtZm9ybSBmb3JtIHtcclxuXHRjb2xvcjogIzk5OTtcclxuXHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xyXG5cdGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuXHRwYWRkaW5nOiAzMHB4O1xyXG59XHJcbi5zaWdudXAtZm9ybSAuZm9ybS1ncm91cCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uc2lnbnVwLWZvcm0gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuXHRtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIC5idG4geyAgICAgICAgXHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1x0XHRcclxuXHRtaW4td2lkdGg6IDE0MHB4O1xyXG5cdG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uc2lnbnVwLWZvcm0gLnJvdyBkaXY6Zmlyc3QtY2hpbGQge1xyXG5cdHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIC5yb3cgZGl2Omxhc3QtY2hpbGQge1xyXG5cdHBhZGRpbmctbGVmdDogMTBweDtcclxufSAgICBcdFxyXG4uc2lnbnVwLWZvcm0gYSB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnNpZ251cC1mb3JtIGE6aG92ZXIge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uc2lnbnVwLWZvcm0gZm9ybSBhIHtcclxuXHRjb2xvcjogIzVjYjg1YztcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cdFxyXG4uc2lnbnVwLWZvcm0gZm9ybSBhOmhvdmVyIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufSAgXHJcbi5lcnJvcntcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufSJdfQ== */"] });
    return RegistrationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src_app_login-registration_login_module_ts.js.map