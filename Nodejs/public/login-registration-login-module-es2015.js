(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-registration-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-registration/login/login.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-registration/login/login.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"signup-form\">\n    <form [formGroup]=\"LoginForm\">\n        <h2>LoginForm</h2>\n\n        <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\" required=\"required\"\n                formControlName=\"email\">\n        </div>\n        <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required=\"required\"\n                formControlName=\"password\">\n        </div>\n\n        <div class=\"error\" *ngIf=\"serverErrorMessagesEmail\">\n            {{serverErrorMessagesEmail}}\n        </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-success btn-lg btn-block\" (click)=\"login()\">Login</button>\n\n            <div class=\"text-center\">Forgot <a href=\"/forgotpwd\" style=\"color:dodgerblue\">password</a></div>\n            <div class=\"text-center\">Create An Account? <a href=\"/register\" style=\"color:dodgerblue\">sinup</a></div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-registration/registration/registration.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-registration/registration/registration.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"signup-form\">\n  <form [formGroup]=\"RegForm\" (ngSubmit)=\"register()\">\n    <h2>Register</h2>\n    <p class=\"hint-text\">Create your account. It's free and only takes a minute.</p>\n    <div *ngIf=\"regform\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Name\" (change)=\"nameNotEmpty()\"\n          formControlName=\"name\">\n        <span class=\"help-block\"\n          *ngIf=\"RegForm.get('name').errors && (RegForm.get('name').touched ||RegForm.get('name').dirty)\">\n          <span class=\"error\" *ngIf=\"RegForm.get('name').errors.required\">\n            name is required\n          </span>\n        </span>\n        <span class=\"error\" *ngIf=\"nameValidation\">\n          name is required\n        </span>\n\n      </div>\n      <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\" required=\"required\"\n          (change)=\"emailNotEmpty()\" formControlName=\"email\">\n        <span class=\"help-block\"\n          *ngIf=\"RegForm.get('name').errors && (RegForm.get('email').touched ||RegForm.get('email').dirty)\">\n          <span class=\"error\" *ngIf=\"RegForm.get('email').errors.required\">\n            email is required\n          </span>\n        </span>\n        <span class=\"error\" *ngIf=\"emailValidation\">\n          email is required\n        </span>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required=\"required\"\n          (change)=\"pwdNotEmpty()\" formControlName=\"password\">\n        <span class=\"help-block\"\n          *ngIf=\"RegForm.get('password').errors && (RegForm.get('password').touched ||RegForm.get('password').dirty)\">\n          <span class=\"error\" *ngIf=\"RegForm.get('password').errors.required\">\n            password is required\n          </span>\n        </span>\n        <span class=\"error\" *ngIf=\"pwdValidation\">\n          password is required\n        </span>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"Confirmpassword\" class=\"form-control\" name=\"confirm_password\" placeholder=\"Confirm Password\"\n          (change)=\"cpwdNotEmpty()\" required=\"required\" formControlName=\"confirmpassword\">\n        <span class=\"help-block\"\n          *ngIf=\"RegForm.get('confirmpassword').errors && (RegForm.get('confirmpassword').touched ||RegForm.get('confirmpassword').dirty)\">\n          <span class=\"error\" *ngIf=\"RegForm.get('confirmpassword').errors.required\">\n            confirmpassword is required\n          </span>\n        </span>\n        <span class=\"error\" *ngIf=\"cpwdValidation\">\n          confirmpassword is required\n        </span>\n      </div>\n    </div>\n    <div *ngIf=\"regform1\">\n      <div class=\"form-group\">\n        <input type=\"Confirmpassword\" class=\"form-control\" name=\"confirm_password\" placeholder=\"phone number\"\n          (change)=\"cpwdNotEmpty()\" required=\"required\" formControlName=\"phonenumber\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"Confirmpassword\" class=\"form-control\" name=\"confirm_password\" placeholder=\"address\"\n          (change)=\"cpwdNotEmpty()\" required=\"required\" formControlName=\"address\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"Confirmpassword\" class=\"form-control\" name=\"confirm_password\" placeholder=\"pinnumber\"\n          (change)=\"cpwdNotEmpty()\" required=\"required\" formControlName=\"pinnumber\">\n      </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"submit\">\n      <label class=\"form-check-label\"><input type=\"checkbox\" required=\"required\"> I accept the <a href=\"#\"\n          style=\"color:dodgerblue\">Terms of\n          Use</a> &amp; <a href=\"#\" style=\"color:dodgerblue\">Privacy Policy</a></label>\n    </div>\n    <div class=\"error\" *ngIf=\"serverErrorMessagesEmail\">\n      {{serverErrorMessagesEmail}}\n    </div>\n    <div>\n      <button *ngIf=\"next\" type=\"button\" class=\"btn btn-success\" (click)=increase()>Next</button>&nbsp;\n      <button *ngIf=\"return\" type=\"button\" class=\"btn btn-success\" (click)=decrease()>Previous</button>\n      <br />\n    </div>\n    <div class=\"form-group\">\n      <button *ngIf=\"submit\" type=\"submit\" class=\"btn btn-success btn-lg btn-block\">Register Now</button>\n    </div>\n    <div class=\"text-center\">Already have an account? <a href=\"#\" style=\"color:dodgerblue\">login</a></div>\n  </form>\n</div>");

/***/ }),

/***/ "./src/app/login-registration/login-registartin-routing/login-registartin-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/login-registration/login-registartin-routing/login-registartin-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: LoginRegistartinRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRegistartinRoutingModule", function() { return LoginRegistartinRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login-registration/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../registration/registration.component */ "./src/app/login-registration/registration/registration.component.ts");





const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
];
let LoginRegistartinRoutingModule = class LoginRegistartinRoutingModule {
};
LoginRegistartinRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRegistartinRoutingModule);



/***/ }),

/***/ "./src/app/login-registration/login.module.ts":
/*!****************************************************!*\
  !*** ./src/app/login-registration/login.module.ts ***!
  \****************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login-registration/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/login-registration/registration/registration.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_registration_login_registartin_routing_login_registartin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login-registration/login-registartin-routing/login-registartin-routing.module */ "./src/app/login-registration/login-registartin-routing/login-registartin-routing.module.ts");







let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _login_registration_login_registartin_routing_login_registartin_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginRegistartinRoutingModule"],
        ]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/login-registration/login/login.component.css":
/*!**************************************************************!*\
  !*** ./src/app/login-registration/login/login.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n\tcolor: #fff;\r\n\tbackground: #63738a;\r\n\tfont-family: 'Roboto', sans-serif;\r\n}\r\n.form-control {\r\n\theight: 40px;\r\n\tbox-shadow: none;\r\n\tcolor: #969fa4;\r\n}\r\n.form-control:focus {\r\n\tborder-color: #5cb85c;\r\n}\r\n.form-control, .btn {        \r\n\tborder-radius: 3px;\r\n}\r\n.signup-form {\r\n\twidth: 450px;\r\n\tmargin: 0 auto;\r\n\tpadding: 30px 0;\r\n  \tfont-size: 15px;\r\n}\r\n.signup-form h2 {\r\n\tcolor: #636363;\r\n\tmargin: 0 0 15px;\r\n\tposition: relative;\r\n\ttext-align: center;\r\n}\r\n.signup-form h2:before, .signup-form h2:after {\r\n\tcontent: \"\";\r\n\theight: 2px;\r\n\twidth: 30%;\r\n\tbackground: #d4d4d4;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tz-index: 2;\r\n}\r\n.signup-form h2:before {\r\n\tleft: 0;\r\n}\r\n.signup-form h2:after {\r\n\tright: 0;\r\n}\r\n.signup-form .hint-text {\r\n\tcolor: #999;\r\n\tmargin-bottom: 30px;\r\n\ttext-align: center;\r\n}\r\n.signup-form form {\r\n\tcolor: #999;\r\n\tborder-radius: 3px;\r\n\tmargin-bottom: 15px;\r\n\tbackground: #f2f3f7;\r\n\tbox-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\tpadding: 30px;\r\n}\r\n.signup-form .form-group {\r\n\tmargin-bottom: 20px;\r\n}\r\n.signup-form input[type=\"checkbox\"] {\r\n\tmargin-top: 3px;\r\n}\r\n.signup-form .btn {        \r\n\tfont-size: 16px;\r\n\tfont-weight: bold;\t\t\r\n\tmin-width: 140px;\r\n\toutline: none !important;\r\n}\r\n.signup-form .row div:first-child {\r\n\tpadding-right: 10px;\r\n}\r\n.signup-form .row div:last-child {\r\n\tpadding-left: 10px;\r\n}\r\n.signup-form a {\r\n\tcolor: #fff;\r\n\ttext-decoration: underline;\r\n}\r\n.signup-form a:hover {\r\n\ttext-decoration: none;\r\n}\r\n.signup-form form a {\r\n\tcolor: #5cb85c;\r\n\ttext-decoration: none;\r\n}\r\n.signup-form form a:hover {\r\n\ttext-decoration: underline;\r\n}\r\n.error{\r\n  color: red;\r\n  font-style: italic;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcmVnaXN0cmF0aW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLGlDQUFpQztBQUNsQztBQUNBO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7QUFDQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLGVBQWU7R0FDYixlQUFlO0FBQ2xCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsVUFBVTtDQUNWLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFVBQVU7QUFDWDtBQUNBO0NBQ0MsT0FBTztBQUNSO0FBQ0E7Q0FDQyxRQUFRO0FBQ1Q7QUFDQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsMENBQTBDO0NBQzFDLGFBQWE7QUFDZDtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQix3QkFBd0I7QUFDekI7QUFDQTtDQUNDLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsMEJBQTBCO0FBQzNCO0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLDBCQUEwQjtBQUMzQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXJlZ2lzdHJhdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0YmFja2dyb3VuZDogIzYzNzM4YTtcclxuXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0Y29sb3I6ICM5NjlmYTQ7XHJcbn1cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjNWNiODVjO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wsIC5idG4geyAgICAgICAgXHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5zaWdudXAtZm9ybSB7XHJcblx0d2lkdGg6IDQ1MHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdHBhZGRpbmc6IDMwcHggMDtcclxuICBcdGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uc2lnbnVwLWZvcm0gaDIge1xyXG5cdGNvbG9yOiAjNjM2MzYzO1xyXG5cdG1hcmdpbjogMCAwIDE1cHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2lnbnVwLWZvcm0gaDI6YmVmb3JlLCAuc2lnbnVwLWZvcm0gaDI6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0aGVpZ2h0OiAycHg7XHJcblx0d2lkdGg6IDMwJTtcclxuXHRiYWNrZ3JvdW5kOiAjZDRkNGQ0O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHR6LWluZGV4OiAyO1xyXG59XHRcclxuLnNpZ251cC1mb3JtIGgyOmJlZm9yZSB7XHJcblx0bGVmdDogMDtcclxufVxyXG4uc2lnbnVwLWZvcm0gaDI6YWZ0ZXIge1xyXG5cdHJpZ2h0OiAwO1xyXG59XHJcbi5zaWdudXAtZm9ybSAuaGludC10ZXh0IHtcclxuXHRjb2xvcjogIzk5OTtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2lnbnVwLWZvcm0gZm9ybSB7XHJcblx0Y29sb3I6ICM5OTk7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0YmFja2dyb3VuZDogI2YyZjNmNztcclxuXHRib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblx0cGFkZGluZzogMzBweDtcclxufVxyXG4uc2lnbnVwLWZvcm0gLmZvcm0tZ3JvdXAge1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcblx0bWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi5zaWdudXAtZm9ybSAuYnRuIHsgICAgICAgIFxyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcdFx0XHJcblx0bWluLXdpZHRoOiAxNDBweDtcclxuXHRvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNpZ251cC1mb3JtIC5yb3cgZGl2OmZpcnN0LWNoaWxkIHtcclxuXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5zaWdudXAtZm9ybSAucm93IGRpdjpsYXN0LWNoaWxkIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn0gICAgXHRcclxuLnNpZ251cC1mb3JtIGEge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5zaWdudXAtZm9ybSBhOmhvdmVyIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnNpZ251cC1mb3JtIGZvcm0gYSB7XHJcblx0Y29sb3I6ICM1Y2I4NWM7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHRcclxuLnNpZ251cC1mb3JtIGZvcm0gYTpob3ZlciB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn0gIFxyXG4uZXJyb3J7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login-registration/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/login-registration/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/loginandregistration.service */ "./src/app/services/loginandregistration.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(service, formBuilder, _router, _activatedRoute) {
        this.service = service;
        this.formBuilder = formBuilder;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.err = [];
        this.err1 = [];
    }
    ngOnInit() {
        // document.getElementById('navbar').style.display='none';
        // document.getElementById('footer').style.display='none';    
        // this.service.deleteToken();
        this.LoginForm = this.formBuilder.group({
            _id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            confirmpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    login() {
        this.sharing();
        this.service.loginUser(this.LoginForm.value).subscribe(res => {
            // console.log(res);
            this.service.setToken(res['token']);
            this.userLogedIn();
        }, error => {
            console.log(error);
            this.serverErrorMessagesEmail = error.message;
        });
    }
    userLogedIn() {
        this.service.logedin().subscribe(res => {
            // console.log(res);
            this.userData = res;
            localStorage.setItem('name', this.userData.userName);
            console.log("name", this.userData.userName);
            this._router.navigateByUrl('/curd');
        }, error => {
            this.serverErrorMessagesEmail = error.message;
        });
    }
    sharing() {
        let v = 123;
        this.service.sharing(v);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_2__["LoginandregistrationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-registration/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login-registration/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login-registration/registration/registration.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/login-registration/registration/registration.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n\tcolor: #fff;\r\n\tbackground: #63738a;\r\n\tfont-family: 'Roboto', sans-serif;\r\n}\r\n.form-control {\r\n\theight: 40px;\r\n\tbox-shadow: none;\r\n\tcolor: #969fa4;\r\n}\r\n.form-control:focus {\r\n\tborder-color: #5cb85c;\r\n}\r\n.form-control, .btn {        \r\n\tborder-radius: 3px;\r\n}\r\n.signup-form {\r\n\twidth: 450px;\r\n\tmargin: 0 auto;\r\n\tpadding: 30px 0;\r\n  \tfont-size: 15px;\r\n}\r\n.signup-form h2 {\r\n\tcolor: #636363;\r\n\tmargin: 0 0 15px;\r\n\tposition: relative;\r\n\ttext-align: center;\r\n}\r\n.signup-form h2:before, .signup-form h2:after {\r\n\tcontent: \"\";\r\n\theight: 2px;\r\n\twidth: 30%;\r\n\tbackground: #d4d4d4;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tz-index: 2;\r\n}\r\n.signup-form h2:before {\r\n\tleft: 0;\r\n}\r\n.signup-form h2:after {\r\n\tright: 0;\r\n}\r\n.signup-form .hint-text {\r\n\tcolor: #999;\r\n\tmargin-bottom: 30px;\r\n\ttext-align: center;\r\n}\r\n.signup-form form {\r\n\tcolor: #999;\r\n\tborder-radius: 3px;\r\n\tmargin-bottom: 15px;\r\n\tbackground: #f2f3f7;\r\n\tbox-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\tpadding: 30px;\r\n}\r\n.signup-form .form-group {\r\n\tmargin-bottom: 20px;\r\n}\r\n.signup-form input[type=\"checkbox\"] {\r\n\tmargin-top: 3px;\r\n}\r\n.signup-form .btn {        \r\n\tfont-size: 16px;\r\n\tfont-weight: bold;\t\t\r\n\tmin-width: 140px;\r\n\toutline: none !important;\r\n}\r\n.signup-form .row div:first-child {\r\n\tpadding-right: 10px;\r\n}\r\n.signup-form .row div:last-child {\r\n\tpadding-left: 10px;\r\n}\r\n.signup-form a {\r\n\tcolor: #fff;\r\n\ttext-decoration: underline;\r\n}\r\n.signup-form a:hover {\r\n\ttext-decoration: none;\r\n}\r\n.signup-form form a {\r\n\tcolor: #5cb85c;\r\n\ttext-decoration: none;\r\n}\r\n.signup-form form a:hover {\r\n\ttext-decoration: underline;\r\n}\r\n.error{\r\n  color: red;\r\n  font-style: italic;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsaUNBQWlDO0FBQ2xDO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjtBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2QsZUFBZTtHQUNiLGVBQWU7QUFDbEI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxPQUFPO0FBQ1I7QUFDQTtDQUNDLFFBQVE7QUFDVDtBQUNBO0NBQ0MsV0FBVztDQUNYLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQiwwQ0FBMEM7Q0FDMUMsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLFdBQVc7Q0FDWCwwQkFBMEI7QUFDM0I7QUFDQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MsY0FBYztDQUNkLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MsMEJBQTBCO0FBQzNCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJhY2tncm91bmQ6ICM2MzczOGE7XHJcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG5cdGhlaWdodDogNDBweDtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG5cdGNvbG9yOiAjOTY5ZmE0O1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG5cdGJvcmRlci1jb2xvcjogIzVjYjg1YztcclxufVxyXG4uZm9ybS1jb250cm9sLCAuYnRuIHsgICAgICAgIFxyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4uc2lnbnVwLWZvcm0ge1xyXG5cdHdpZHRoOiA0NTBweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRwYWRkaW5nOiAzMHB4IDA7XHJcbiAgXHRmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIGgyIHtcclxuXHRjb2xvcjogIzYzNjM2MztcclxuXHRtYXJnaW46IDAgMCAxNXB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNpZ251cC1mb3JtIGgyOmJlZm9yZSwgLnNpZ251cC1mb3JtIGgyOmFmdGVyIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdGhlaWdodDogMnB4O1xyXG5cdHdpZHRoOiAzMCU7XHJcblx0YmFja2dyb3VuZDogI2Q0ZDRkNDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA1MCU7XHJcblx0ei1pbmRleDogMjtcclxufVx0XHJcbi5zaWdudXAtZm9ybSBoMjpiZWZvcmUge1xyXG5cdGxlZnQ6IDA7XHJcbn1cclxuLnNpZ251cC1mb3JtIGgyOmFmdGVyIHtcclxuXHRyaWdodDogMDtcclxufVxyXG4uc2lnbnVwLWZvcm0gLmhpbnQtdGV4dCB7XHJcblx0Y29sb3I6ICM5OTk7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNpZ251cC1mb3JtIGZvcm0ge1xyXG5cdGNvbG9yOiAjOTk5O1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdGJhY2tncm91bmQ6ICNmMmYzZjc7XHJcblx0Ym94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuLnNpZ251cC1mb3JtIC5mb3JtLWdyb3VwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zaWdudXAtZm9ybSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG5cdG1hcmdpbi10b3A6IDNweDtcclxufVxyXG4uc2lnbnVwLWZvcm0gLmJ0biB7ICAgICAgICBcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHRcdFxyXG5cdG1pbi13aWR0aDogMTQwcHg7XHJcblx0b3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5zaWdudXAtZm9ybSAucm93IGRpdjpmaXJzdC1jaGlsZCB7XHJcblx0cGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG4uc2lnbnVwLWZvcm0gLnJvdyBkaXY6bGFzdC1jaGlsZCB7XHJcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59ICAgIFx0XHJcbi5zaWdudXAtZm9ybSBhIHtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uc2lnbnVwLWZvcm0gYTpob3ZlciB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5zaWdudXAtZm9ybSBmb3JtIGEge1xyXG5cdGNvbG9yOiAjNWNiODVjO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVx0XHJcbi5zaWdudXAtZm9ybSBmb3JtIGE6aG92ZXIge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59ICBcclxuLmVycm9ye1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/login-registration/registration/registration.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/login-registration/registration/registration.component.ts ***!
  \***************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/loginandregistration.service */ "./src/app/services/loginandregistration.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegistrationComponent = class RegistrationComponent {
    constructor(service, formBuilder, _router, _activatedRoute) {
        this.service = service;
        this.formBuilder = formBuilder;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.nameValidation = false;
        this.emailValidation = false;
        this.pwdValidation = false;
        this.cpwdValidation = false;
        this.count = 0;
        this.regform = true;
        this.regform1 = false;
        this.next = true;
        this.return = false;
        this.submit = false;
    }
    ngOnInit() {
        this.RegForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            confirmpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            phonenumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            pinnumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    nameNotEmpty() {
        this.nameValidation = false;
    }
    emailNotEmpty() {
        this.emailValidation = false;
    }
    pwdNotEmpty() {
        this.pwdValidation = false;
    }
    cpwdNotEmpty() {
        this.cpwdValidation = false;
    }
    register() {
        this.service.postEmp(this.RegForm.value).subscribe(res => {
            this._router.navigate(['/']);
        }, error => {
            this.serverErrorMessagesEmail = "Email is Already Exist";
            console.log(this.serverErrorMessagesEmail);
        });
    }
    increase() {
        // Custom Validation For Empty Field:
        if (this.RegForm.value.name == "") {
            this.nameValidation = true;
        }
        else if (this.RegForm.value.email == "") {
            this.emailValidation = true;
        }
        else if (this.RegForm.value.password == "") {
            this.pwdValidation = true;
        }
        else if (this.RegForm.value.confirmpassword == "") {
            this.cpwdValidation = true;
        }
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
    }
    decrease() {
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
    }
    ;
};
RegistrationComponent.ctorParameters = () => [
    { type: _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_2__["LoginandregistrationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-registration/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.css */ "./src/app/login-registration/registration/registration.component.css")).default]
    })
], RegistrationComponent);



/***/ })

}]);
//# sourceMappingURL=login-registration-login-module-es2015.js.map