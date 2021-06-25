function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resetpassword-resetpassword-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/resetpassword/fogotpwd/fogotpwd.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resetpassword/fogotpwd/fogotpwd.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResetpasswordFogotpwdFogotpwdComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\"> -->\n<div class=\"form-gap\">\n    <div class=\"container \" >\n        <div class=\"row\"  style=\"padding-left: 20%;\">\n            <div class=\"col-md-6 col-md-offset-6\"  >\n                <div class=\"panel panel-default\" >\n                    <div class=\"panel-body\">\n                        <div class=\"text-center\">\n                            <h3><i class=\"fa fa-lock fa-4x\"></i></h3>\n                            <h2 class=\"text-center\">Forgot Password?</h2>\n                            <p>You can reset your password here.</p>\n                            <div class=\"panel-body\">\n\n                                <form [formGroup]=\"ForgotForm\" class=\"form\">\n                                    <div class=\"form-group\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\"><i\n                                                    class=\"glyphicon glyphicon-envelope color-blue\"></i></span>\n                                            <input name=\"email\" placeholder=\"Enter Email Address\" class=\"form-control\"\n                                                type=\"email\" formControlName=\"email\" required>\n                                        </div>\n                                    </div>\n                                    <div class=\"error\" *ngIf=\"serverErrorMessagesEmail\">\n                                        {{serverErrorMessagesEmail}}\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <input type=\"button\" name=\"recover-submit\"\n                                            class=\"btn btn-lg btn-primary btn-block\" value=\"Reset Password\"\n                                            (click)=\"forGotPwd()\">\n                                    </div>\n                                    <div class=\"success\" *ngIf=\"successMessage\">\n                                        {{successMessage}} <a href=\"https://mail.google.com\" target=\"_blank\">Login</a>\n                                    </div>\n                                </form><br />\n                                <span class=\"psw\">Create An Account <a href=\"/register\">sinup</a></span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/resetpassword/resetpwd/resetpwd.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resetpassword/resetpwd/resetpwd.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppResetpasswordResetpwdResetpwdComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\"> -->\n<div class=\"form-gap\"></div>\n<div class=\"container\">\n    <div class=\"row\" style=\"padding-left: 20%;\">\n        <div class=\"col-md-6 col-md-offset-6\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                    <div class=\"text-center\">\n                        <h3><i class=\"fa fa-lock fa-4x\"></i></h3>\n                        <h2 class=\"text-center\">Reset - Password?</h2>\n                        <p>You can reset your password here.</p>\n                        <div class=\"panel-body\">\n\n                            <form [formGroup]=\"ResetForm\" class=\"form\">\n                                <div class=\"form-group\">\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\"><i\n                                                class=\"glyphicon glyphicon-envelope color-blue\"></i></span>\n                                        <input name=\"password\" placeholder=\"New-Password \" class=\"form-control\"\n                                            type=\"password\" formControlName=\"password\" required>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\"><i\n                                                class=\"glyphicon glyphicon-envelope color-blue\"></i></span>\n                                        <input name=\"confirmpassword\" placeholder=\"confirmpassword \"\n                                            class=\"form-control\" type=\"confirmpassword\"\n                                            formControlName=\"confirmpassword\" required>\n                                    </div>\n                                </div>\n                                <div class=\"error\" *ngIf=\"serverErrorMessagesEmail\">\n                                    {{serverErrorMessagesEmail}}\n                                </div>\n                                <div class=\"form-group\">\n                                    <input type=\"button\" name=\"recover-submit\" class=\"btn btn-lg btn-primary btn-block\"\n                                        value=\"Reset Password\" (click)=\"resetPwd()\">\n                                </div>\n                            </form>\n                            <span class=\"psw\">Re-Generate <a href=\"/forgotpwd\">Token</a></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/resetpassword/fogotpwd/fogotpwd.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/resetpassword/fogotpwd/fogotpwd.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppResetpasswordFogotpwdFogotpwdComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-gap {\r\n    padding-top: 70px;\r\n}\r\n.error{\r\n    font-style: italic;\r\n    color: red;\r\n}\r\nh2{\r\n    color: springgreen;\r\n}\r\n.success{\r\n    color:rgb(100, 236, 9);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXRwYXNzd29yZC9mb2dvdHB3ZC9mb2dvdHB3ZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0cGFzc3dvcmQvZm9nb3Rwd2QvZm9nb3Rwd2QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdhcCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxufVxyXG4uZXJyb3J7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbmgye1xyXG4gICAgY29sb3I6IHNwcmluZ2dyZWVuO1xyXG59XHJcbi5zdWNjZXNze1xyXG4gICAgY29sb3I6cmdiKDEwMCwgMjM2LCA5KTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/resetpassword/fogotpwd/fogotpwd.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/resetpassword/fogotpwd/fogotpwd.component.ts ***!
    \**************************************************************/

  /*! exports provided: FogotpwdComponent */

  /***/
  function srcAppResetpasswordFogotpwdFogotpwdComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FogotpwdComponent", function () {
      return FogotpwdComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/loginandregistration.service */
    "./src/app/services/loginandregistration.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var FogotpwdComponent = /*#__PURE__*/function () {
      function FogotpwdComponent(service, formBuilder, _router, _activatedRoute) {
        _classCallCheck(this, FogotpwdComponent);

        this.service = service;
        this.formBuilder = formBuilder;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
      }

      _createClass(FogotpwdComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ForgotForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });
        }
      }, {
        key: "forGotPwd",
        value: function forGotPwd() {
          var _this = this;

          this.service.forGotPwd(this.ForgotForm.value).subscribe(function (res) {
            _this.successMessage = "Please Check Your Mail"; // this._router.navigateByUrl('/reset')
          }, function (error) {
            // console.log(error);
            _this.serverErrorMessagesEmail = error.message;
          });
        }
      }]);

      return FogotpwdComponent;
    }();

    FogotpwdComponent.ctorParameters = function () {
      return [{
        type: _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_2__["LoginandregistrationService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    FogotpwdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fogotpwd',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fogotpwd.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/resetpassword/fogotpwd/fogotpwd.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fogotpwd.component.css */
      "./src/app/resetpassword/fogotpwd/fogotpwd.component.css"))["default"]]
    })], FogotpwdComponent);
    /***/
  },

  /***/
  "./src/app/resetpassword/resetpassword.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/resetpassword/resetpassword.module.ts ***!
    \*******************************************************/

  /*! exports provided: ResetpasswordModule */

  /***/
  function srcAppResetpasswordResetpasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetpasswordModule", function () {
      return ResetpasswordModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _resetpwd_resetpwd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resetpwd/resetpwd.component */
    "./src/app/resetpassword/resetpwd/resetpwd.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _resetpwdrouter_resetpwdrouter_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./resetpwdrouter/resetpwdrouter.module */
    "./src/app/resetpassword/resetpwdrouter/resetpwdrouter.module.ts");
    /* harmony import */


    var _fogotpwd_fogotpwd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fogotpwd/fogotpwd.component */
    "./src/app/resetpassword/fogotpwd/fogotpwd.component.ts");

    var ResetpasswordModule = function ResetpasswordModule() {
      _classCallCheck(this, ResetpasswordModule);
    };

    ResetpasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_resetpwd_resetpwd_component__WEBPACK_IMPORTED_MODULE_3__["ResetpwdComponent"], _fogotpwd_fogotpwd_component__WEBPACK_IMPORTED_MODULE_6__["FogotpwdComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _resetpwdrouter_resetpwdrouter_module__WEBPACK_IMPORTED_MODULE_5__["ResetpwdrouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
    })], ResetpasswordModule);
    /***/
  },

  /***/
  "./src/app/resetpassword/resetpwd/resetpwd.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/resetpassword/resetpwd/resetpwd.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppResetpasswordResetpwdResetpwdComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-gap {\r\n    padding-top: 70px;\r\n}\r\n.error{\r\n    font-style: italic;\r\n    color: red;\r\n}\r\nh2{\r\n    color: springgreen;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXRwYXNzd29yZC9yZXNldHB3ZC9yZXNldHB3ZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9yZXNldHBhc3N3b3JkL3Jlc2V0cHdkL3Jlc2V0cHdkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1nYXAge1xyXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbn1cclxuLmVycm9ye1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5oMntcclxuICAgIGNvbG9yOiBzcHJpbmdncmVlbjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/resetpassword/resetpwd/resetpwd.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/resetpassword/resetpwd/resetpwd.component.ts ***!
    \**************************************************************/

  /*! exports provided: ResetpwdComponent */

  /***/
  function srcAppResetpasswordResetpwdResetpwdComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetpwdComponent", function () {
      return ResetpwdComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/loginandregistration.service */
    "./src/app/services/loginandregistration.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ResetpwdComponent = /*#__PURE__*/function () {
      function ResetpwdComponent(service, formBuilder, _router, _activatedRoute) {
        _classCallCheck(this, ResetpwdComponent);

        this.service = service;
        this.formBuilder = formBuilder;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.token = "";
      }

      _createClass(ResetpwdComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.token = this._activatedRoute.snapshot.paramMap.get("token"); // console.log("token:",this.token);

          this._router.navigateByUrl('/forgotpwd/reset/' + this.token);

          this.ResetForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            confirmpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });
        }
      }, {
        key: "resetPwd",
        value: function resetPwd() {
          var _this2 = this;

          console.log("token", this.token);
          this.service.resetPwd(this.ResetForm.value, this.token).subscribe(function (res) {
            _this2._router.navigateByUrl("");
          }, function (error) {
            console.log(error);
            _this2.serverErrorMessagesEmail = error.message;
          });
        }
      }]);

      return ResetpwdComponent;
    }();

    ResetpwdComponent.ctorParameters = function () {
      return [{
        type: _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_2__["LoginandregistrationService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    ResetpwdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-resetpwd',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./resetpwd.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/resetpassword/resetpwd/resetpwd.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./resetpwd.component.css */
      "./src/app/resetpassword/resetpwd/resetpwd.component.css"))["default"]]
    })], ResetpwdComponent);
    /***/
  },

  /***/
  "./src/app/resetpassword/resetpwdrouter/resetpwdrouter.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/resetpassword/resetpwdrouter/resetpwdrouter.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ResetpwdrouterModule */

  /***/
  function srcAppResetpasswordResetpwdrouterResetpwdrouterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetpwdrouterModule", function () {
      return ResetpwdrouterModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _resetpwd_resetpwd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../resetpwd/resetpwd.component */
    "./src/app/resetpassword/resetpwd/resetpwd.component.ts");
    /* harmony import */


    var _fogotpwd_fogotpwd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../fogotpwd/fogotpwd.component */
    "./src/app/resetpassword/fogotpwd/fogotpwd.component.ts");

    var routes = [{
      path: '',
      component: _fogotpwd_fogotpwd_component__WEBPACK_IMPORTED_MODULE_4__["FogotpwdComponent"]
    }, {
      path: 'reset/:token',
      component: _resetpwd_resetpwd_component__WEBPACK_IMPORTED_MODULE_3__["ResetpwdComponent"]
    }];

    var ResetpwdrouterModule = function ResetpwdrouterModule() {
      _classCallCheck(this, ResetpwdrouterModule);
    };

    ResetpwdrouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResetpwdrouterModule);
    /***/
  }
}]);
//# sourceMappingURL=resetpassword-resetpassword-module-es5.js.map