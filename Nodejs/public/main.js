(self["webpackChunkangular8"] = self["webpackChunkangular8"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 88298:
/*!**************************************!*\
  !*** ./src/app/aouth/aouth.guard.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AouthGuard": function() { return /* binding */ AouthGuard; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/loginandregistration.service */ 98109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



var AouthGuard = /** @class */ (function () {
    function AouthGuard(service, router) {
        this.service = service;
        this.router = router;
    }
    AouthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('token')) {
            // console.log(localStorage.getItem('token'));
            // console.log("outh")
            // this.router.navigateByUrl('/curd');
            return true;
        }
        localStorage.removeItem('token');
        this.router.navigateByUrl('');
        return false;
    };
    AouthGuard.ɵfac = function AouthGuard_Factory(t) { return new (t || AouthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_0__.LoginandregistrationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
    AouthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AouthGuard, factory: AouthGuard.ɵfac, providedIn: 'root' });
    return AouthGuard;
}());



/***/ }),

/***/ 86194:
/*!**************************************!*\
  !*** ./src/app/aouth/intersepter.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": function() { return /* binding */ AuthInterceptor; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



// import{CandidateService} from "../service/candidate.service";
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        if (localStorage.getItem('token') != null) {
            var clondreq = req.clone({
                headers: req.headers.set("Authorization", "Beearer " + localStorage.getItem('token'))
            });
            return next.handle(clondreq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)(function (event) { }, function (err) {
                if (err.error.auth == false) {
                    _this.router.navigateByUrl('/#');
                }
            }));
        }
    };
    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
    AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
    return AuthInterceptor;
}());



/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _aouth_aouth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aouth/aouth.guard */ 88298);
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ 43019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);





var routes = [
    {
        // path:'',loadChildren:'./login-registration/login.module#LoginModule'
        path: '',
        // The new import() syntax
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_login-registration_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login-registration/login.module */ 17473)).then(function (m) { return m.LoginModule; }); }
    },
    {
        path: 'curd',
        // loadChildren:'./crud/crud.module#CrudModule',canActivate:[AouthGuard]
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_crud_crud_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./crud/crud.module */ 47995)).then(function (m) { return m.CrudModule; }); }, canActivate: [_aouth_aouth_guard__WEBPACK_IMPORTED_MODULE_0__.AouthGuard]
    },
    {
        path: 'forgotpwd',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_resetpassword_resetpassword_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./resetpassword/resetpassword.module */ 81869)).then(function (m) { return m.ResetpasswordModule; }); }
    },
    {
        path: 'views',
        // loadChildren:'./view-pwdupadate/view-pwdupadate.module#ViewPwdupadateModule',canActivate:[AouthGuard]
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_view-pwdupadate_view-pwdupadate_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./view-pwdupadate/view-pwdupadate.module */ 12211)).then(function (m) { return m.ViewPwdupadateModule; }); }, canActivate: [_aouth_aouth_guard__WEBPACK_IMPORTED_MODULE_0__.AouthGuard]
    },
    {
        path: 'funtions',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_funtions-module_funtions-module_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./funtions-module/funtions-module.module */ 96268)).then(function (m) { return m.FuntionsModuleModule; }); }
        // loadChildren:'./funtions-module/funtions-module.module#FuntionsModuleModule',canActivate:[AouthGuard]
    },
    {
        path: 'practice',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_practice_practice_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./practice/practice.module */ 87289)).then(function (m) { return m.PracticeModule; }); }
        // loadChildren:'./funtions-module/funtions-module.module#FuntionsModuleModule',canActivate:[AouthGuard]
    },
    {
        path: 'dynamicdatatable',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_dynamic-data-tables_dynamic-data-tables_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dynamic-data-tables/dynamic-data-tables.module */ 95069)).then(function (m) { return m.DynamicDataTablesModule; }); }
        // loadChildren:'./funtions-module/funtions-module.module#FuntionsModuleModule',canActivate:[AouthGuard]
    },
    {
        path: 'ngrx',
        loadChildren: function () { return __webpack_require__.e(/*! import() */ "src_app_ngrx-futer_ngrx-futer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ngrx-futer/ngrx-futer.module */ 94742)).then(function (m) { return m.NgrxFuterModule; }); }
        // loadChildren:'./funtions-module/funtions-module.module#FuntionsModuleModule',canActivate:[AouthGuard]
    },
    {
        path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_1__.PagenotfoundComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
    AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ngrx_futer_state_ngrx_selecter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngrx-futer/state/ngrx-selecter */ 41372);
/* harmony import */ var _login_registration_store_login_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-registration/store/login.actions */ 30326);
/* harmony import */ var _login_registration_store_login_selecter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-registration/store/login.selecter */ 25315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/loginandregistration.service */ 98109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! keycloak-angular */ 50766);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);











function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Practice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Dyanamic Data Table");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Ngrx");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_div_0_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.theme("first"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Applay");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_div_0_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.theme("second"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Applay");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_div_0_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.theme("third"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Applay");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Welcome:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, " DynamicForm");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, " Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_div_0_Template_a_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.currentUser, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.profile, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "footer", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u00A9 Sample MEAN app by Vijender | SampleApp ", ctx_r1.currentYear, " ");
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(loginService, router, renderer, documents, keyCloak, store) {
        this.loginService = loginService;
        this.router = router;
        this.renderer = renderer;
        this.documents = documents;
        this.keyCloak = keyCloak;
        this.store = store;
        this.currentTheme = 'slate';
        this.currentUser = '';
        this.profile = '';
        this.user = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentYear = new Date().getFullYear();
        this.counter$ = this.store.select(_ngrx_futer_state_ngrx_selecter__WEBPACK_IMPORTED_MODULE_0__.getCount);
        if (localStorage.getItem('token')) {
            this.store.dispatch((0,_login_registration_store_login_actions__WEBPACK_IMPORTED_MODULE_1__.loggedIn)());
        }
        this.store.select(_login_registration_store_login_selecter__WEBPACK_IMPORTED_MODULE_2__.getUser).subscribe(function (res) {
            _this.userData = res;
            if (_this.userData) {
                _this.login = true;
                _this.profile = "http://localhost:2020/" + _this.userData.image;
                _this.currentUser = _this.userData.name;
            }
            else {
                _this.login = false;
            }
        });
    };
    AppComponent.prototype.getRefrsh = function () {
        var _this = this;
        this.loginService.refresh$.subscribe(function () {
            _this.getImg();
        });
    };
    AppComponent.prototype.getImg = function () {
        var _this = this;
        this.loginService.logedin().subscribe(function (res) {
            _this.user = res;
            _this.currentUser = _this.user.name;
            if (_this.user.image != undefined) {
                _this.profile = "http://localhost:2020/" + _this.user.image;
            }
        });
    };
    AppComponent.prototype.logOut = function () {
        var user = null;
        this.store.dispatch((0,_login_registration_store_login_actions__WEBPACK_IMPORTED_MODULE_1__.addUser)({ user: user }));
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('profile');
        this.router.navigateByUrl('');
        localStorage.setItem('login', 'false');
        // this.keyCloak.logout();
    };
    // ngDoCheck() {
    //   if (localStorage.getItem('name') != null) {
    //     this.login = true;
    //   }
    //   else {
    //     this.login = false;
    //   }
    // }
    AppComponent.prototype.theme = function (type) {
        this.renderer.removeClass(document.body, 'theme-' + this.currentTheme);
        this.currentTheme = type;
        this.renderer.addClass(document.body, 'theme-' + this.currentTheme);
        this.documents.getElementById('theme').href = '/assets/css/theme_' + type + '_bootstrap.min.css';
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_3__.LoginandregistrationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_7__.KeycloakService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store)); };
    AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 2, consts: [[4, "ngIf"], ["id", "navbar", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#exp-navbar", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "exp-navbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/curd", "routerLinkActive", "active", 1, "nav-link", 2, "color", "aliceblue"], ["routerLink", "/practice", "routerLinkActive", "active", 1, "nav-link", 2, "color", "aliceblue"], ["routerLink", "dynamicdatatable", "routerLinkActive", "active", 1, "nav-link", 2, "color", "aliceblue"], ["routerLink", "ngrx", "routerLinkActive", "active", 1, "nav-link", 2, "color", "aliceblue"], ["routerLink", "about", "routerLinkActive", "active", 1, "nav-link", 2, "color", "aliceblue"], [1, "nav-item", "dropdown"], ["id", "theme", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], [1, "dropdown-item", "first", 3, "click"], [1, "dropdown-item", "second", 3, "click"], [1, "dropdown-item", "third", 3, "click"], [1, "form-inline", "my-2", "my-md-0", 2, "padding-right", "5%"], ["href", "#", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 2, "color", "aliceblue"], [2, "color", "black"], ["alt", "Avatar", 3, "src"], ["aria-labelledby", "dropdown", 1, "dropdown-menu"], ["routerLink", "/views", 1, "dropdown-item"], ["routerLink", "/funtions/fun", "routerLinkActive", "active", 1, "dropdown-item"], ["routerLink", "/views/pwdchange", 1, "dropdown-item"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], ["id", "footer", 1, "footer", "fixed-bottom"], [1, "container", "text-center", "text"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AppComponent_div_0_Template, 48, 2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AppComponent_div_6_Template, 4, 1, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.login);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.login);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm], styles: [".footer[_ngcontent-%COMP%] {\n  height: 30px;\n  color: whitesmoke;\n}\n\n#navbar[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.active[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  padding-bottom: 3px;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover    > .dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 10px 20px;\n  border-bottom: 1px solid #c8ced3;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n\n.first[_ngcontent-%COMP%] {\n  color: #008cba;\n  text-align: center;\n  font-weight: 400;\n}\n\n.second[_ngcontent-%COMP%] {\n  color: #06ba00;\n  text-align: center;\n  font-weight: 400;\n}\n\n.third[_ngcontent-%COMP%] {\n  color: #ba0082;\n  text-align: center;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUNBO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtBQUlKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNKLGdDQUFBO0FBSUE7O0FBSFE7RUFDSSxnQkFBQTtBQUtaOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU9KIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XHJcbiAgIFxyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcclxufVxyXG4jbmF2YmFye1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuLmFjdGl2ZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7ICAgICAgICBcclxufVxyXG5pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6MzBweFxyXG4gIH1cclxuLmRyb3Bkb3duOmhvdmVyPi5kcm9wZG93bi1tZW51e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIFxyXG59XHJcbi5kcm9wZG93bi1pdGVte1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG5ib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYzhjZWQzO1xyXG4gICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbn1cclxuLmZpcnN0e1xyXG4gICAgY29sb3I6IzAwOGNiYSA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5zZWNvbmR7XHJcbiAgICBjb2xvcjojMDZiYTAwIDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLnRoaXJke1xyXG4gICAgY29sb3I6I2JhMDA4MiA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbiJdfQ== */"] });
    return AppComponent;
}());



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/crud.service */ 3927);
/* harmony import */ var _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/loginandregistration.service */ 98109);
/* harmony import */ var _aouth_intersepter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aouth/intersepter */ 86194);
/* harmony import */ var _aouth_aouth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aouth/aouth.guard */ 88298);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ 43019);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ 66313);
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! keycloak-angular */ 50766);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _store_app_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/app.state */ 34971);
/* harmony import */ var _comman_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comman/loading-spinner/loading-spinner.component */ 21821);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _login_registration_store_login_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login-registration/store/login.effects */ 80929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
    AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
    AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
                useClass: _aouth_intersepter__WEBPACK_IMPORTED_MODULE_4__.AuthInterceptor,
                multi: true
            }, _services_crud_service__WEBPACK_IMPORTED_MODULE_2__.CrudService,
            _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_3__.LoginandregistrationService,
            _aouth_aouth_guard__WEBPACK_IMPORTED_MODULE_5__.AouthGuard,
            // {
            //   provide: APP_INITIALIZER,
            //   useFactory: initializeKeycloak,
            //   multi: true,
            //   deps: [KeycloakService],
            // },
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
                _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
                _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
                keycloak_angular__WEBPACK_IMPORTED_MODULE_17__.KeycloakAngularModule,
                _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreModule.forRoot(_store_app_state__WEBPACK_IMPORTED_MODULE_9__.appReducer),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__.EffectsModule.forRoot(),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__.EffectsModule.forRoot([_login_registration_store_login_effects__WEBPACK_IMPORTED_MODULE_11__.LoggedInServce]),
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__.PagenotfoundComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__.NavbarComponent,
        _comman_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__.LoadingSpinnerComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        keycloak_angular__WEBPACK_IMPORTED_MODULE_17__.KeycloakAngularModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__.EffectsRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__.EffectsRootModule] }); })();


/***/ }),

/***/ 64411:
/*!*************************************************!*\
  !*** ./src/app/comman/child/child.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildComponent": function() { return /* binding */ ChildComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);


function ChildComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "child works!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
    }
    Object.defineProperty(ChildComponent.prototype, "viewchild", {
        get: function () {
            return this._viewchild;
        },
        set: function (val) {
            // console.log(val);
            this._viewchild = val;
        },
        enumerable: false,
        configurable: true
    });
    ChildComponent.prototype.ngOnInit = function () {
    };
    ChildComponent.ɵfac = function ChildComponent_Factory(t) { return new (t || ChildComponent)(); };
    ChildComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChildComponent, selectors: [["app-child"]], inputs: { viewchild: "viewchild" }, decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function ChildComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChildComponent_p_0_Template, 2, 0, "p", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewchild);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGlsZC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return ChildComponent;
}());



/***/ }),

/***/ 49881:
/*!*************************************************************************!*\
  !*** ./src/app/comman/dynamicdatatables/dynamicdatatables.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicdatatablesComponent": function() { return /* binding */ DynamicdatatablesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 83166);











function DynamicdatatablesComponent_div_2_ng_container_2_th_2_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DynamicdatatablesComponent_div_2_ng_container_2_th_2_Template_input_input_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.applayDebounce($event.target.value, column_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, column_r4), " ");
} }
function DynamicdatatablesComponent_div_2_ng_container_2_td_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r11[column_r4], "");
} }
function DynamicdatatablesComponent_div_2_ng_container_2_td_3_span_2_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicdatatablesComponent_div_2_ng_container_2_td_3_span_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); var row_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.action("edit", row_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicdatatablesComponent_div_2_ng_container_2_td_3_span_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); var row_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.action("delete", row_r11._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicdatatablesComponent_div_2_ng_container_2_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicdatatablesComponent_div_2_ng_container_2_td_3_span_1_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicdatatablesComponent_div_2_ng_container_2_td_3_span_2_Template, 5, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var column_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r4 != "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r4 == "Actions");
} }
function DynamicdatatablesComponent_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicdatatablesComponent_div_2_ng_container_2_th_2_Template, 8, 3, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicdatatablesComponent_div_2_ng_container_2_td_3_Template, 3, 2, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var column_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r4);
} }
function DynamicdatatablesComponent_div_2_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
function DynamicdatatablesComponent_div_2_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
var _c0 = function () { return [5, 10, 20]; };
function DynamicdatatablesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicdatatablesComponent_div_2_ng_container_2_Template, 4, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DynamicdatatablesComponent_div_2_tr_3_Template, 1, 0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DynamicdatatablesComponent_div_2_tr_4_Template, 1, 0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-paginator", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function DynamicdatatablesComponent_div_2_Template_mat_paginator_page_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.handlePage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r0.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("length", ctx_r0.totalSize);
} }
var DynamicdatatablesComponent = /** @class */ (function () {
    function DynamicdatatablesComponent() {
        this.allData = [];
        this.columnArray = [];
        this.pageSize = 4;
        this.totalSize = 20;
        this.currentPage = 0;
        this.emitactions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    Object.defineProperty(DynamicdatatablesComponent.prototype, "tableData", {
        set: function (val) {
            // console.log()
            this.tableViwe(val);
        },
        enumerable: false,
        configurable: true
    });
    DynamicdatatablesComponent.prototype.ngOnInit = function () {
    };
    DynamicdatatablesComponent.prototype.tableViwe = function (data) {
        if (data != undefined) {
            var allData = data;
            this.displayedColumns = allData.displayColumns;
            this.displayedColumns.push("Actions");
            this.allData = allData.tableDta;
            this.dataTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(allData.tableDta);
            this.dataTable.paginator = this.paginator;
            this.dataTable.sort = this.sort;
            this.iterator();
        }
    };
    DynamicdatatablesComponent.prototype.handlePage = function (event) {
        this.currentPage = event.pageIndex;
        this.pageSize = event.pageSize;
        console.log(this.currentPage);
        console.log(this.pageSize);
        this.iterator();
    };
    DynamicdatatablesComponent.prototype.iterator = function () {
        var end = (this.currentPage + 1) * this.pageSize;
        var start = this.currentPage * this.pageSize;
        // console.log(start, end)
        var part = this.allData.slice(start, end);
        // console.log(part)
        this.dataTable.data = part;
    };
    DynamicdatatablesComponent.prototype.applayDebounce = function (val, colName) {
        var _this = this;
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            _this.applayFilter(val, colName);
        }, 500);
    };
    DynamicdatatablesComponent.prototype.applayFilter = function (filterVal, columnName) {
        var _this = this;
        var val = filterVal;
        var clName = columnName;
        var obj = {
            columnName: clName,
            filterVal: val
        };
        if (val == "") {
            this.columnArray = [];
            this.columnArray.forEach(function (ele, i) {
                if (ele.columnName == clName) {
                    _this.columnArray.splice(i, 1);
                }
            });
        }
        else {
            if (this.columnArray.length > 0) {
                this.columnArray.forEach(function (ele, i) {
                    if (ele.columnName == clName) {
                        _this.columnArray.splice(i, 1);
                    }
                });
                this.columnArray.push(obj);
            }
            else {
                this.columnArray.push(obj);
            }
        }
        console.log(this.columnArray);
    };
    DynamicdatatablesComponent.prototype.action = function (action, row) {
        var data = {
            action: action,
            data: row,
        };
        this.emitactions.emit(data);
    };
    DynamicdatatablesComponent.ɵfac = function DynamicdatatablesComponent_Factory(t) { return new (t || DynamicdatatablesComponent)(); };
    DynamicdatatablesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DynamicdatatablesComponent, selectors: [["app-dynamicdatatables"]], viewQuery: function DynamicdatatablesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSort, 7);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, inputs: { tableData: "tableData" }, outputs: { emitactions: "emitactions" }, decls: 3, vars: 1, consts: [[1, "card"], ["class", "card-body ", 4, "ngIf"], [1, "card-body"], ["mat-table", "", "matSort", "", 3, "dataSource"], [4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions", "length", "page"], [3, "matColumnDef"], ["mat-header-cell", "", "class", "applay", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", 1, "applay"], [1, "row"], [1, "col-md-5"], [1, "col-md-8"], ["appearance", "legacy", 2, "width", "100px"], ["matInput", "", "placeholder", "search", 3, "input"], ["mat-cell", ""], [4, "ngIf"], [1, "btn", "btn-link", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-edit"], ["aria-hidden", "true", 1, "fa", "fa-trash"], ["mat-header-row", ""], ["mat-row", ""]], template: function DynamicdatatablesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DynamicdatatablesComponent_div_2_Template, 6, 8, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataTable);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__.MatSort, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.applay[_ngcontent-%COMP%] {\n  color: dodgerblue;\n  font-weight: 500px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWNkYXRhdGFibGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJkeW5hbWljZGF0YXRhYmxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmFwcGxheXtcclxuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH0iXX0= */"] });
    return DynamicdatatablesComponent;
}());



/***/ }),

/***/ 21821:
/*!*********************************************************************!*\
  !*** ./src/app/comman/loading-spinner/loading-spinner.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingSpinnerComponent": function() { return /* binding */ LoadingSpinnerComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
    LoadingSpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 2, vars: 0, template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loading-spinner works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return LoadingSpinnerComponent;
}());



/***/ }),

/***/ 30326:
/*!***********************************************************!*\
  !*** ./src/app/login-registration/store/login.actions.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loggedIn": function() { return /* binding */ loggedIn; },
/* harmony export */   "addUser": function() { return /* binding */ addUser; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 86710);

var loggedIn = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('loggedin');
var addUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('addUser', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 80929:
/*!***********************************************************!*\
  !*** ./src/app/login-registration/store/login.effects.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggedInServce": function() { return /* binding */ LoggedInServce; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _login_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.actions */ 30326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/loginandregistration.service */ 98109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);









var LoggedInServce = /** @class */ (function () {
    function LoggedInServce(actions$, loginSrc, _router) {
        var _this = this;
        this.actions$ = actions$;
        this.loginSrc = loginSrc;
        this._router = _router;
        // loggedIn$ = createEffect(() => {
        //     return this.actions$.pipe(
        //         ofType(loggedIn), mergeMap((actin) => {
        //             return this.loginSrc.logedin().pipe(map((user) => {
        //                 return addUser({ user });
        //             }),
        //                catchError((err)=>{
        //                    console.log(err);
        //                    return of();
        //                })
        //             )
        //         })
        //     )
        // })
        this.loggedIn$ = this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_login_actions__WEBPACK_IMPORTED_MODULE_0__.loggedIn), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (actin) {
            return _this.loginSrc.logedin().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (user) {
                _this._router.navigateByUrl('/curd');
                return (0,_login_actions__WEBPACK_IMPORTED_MODULE_0__.addUser)({ user: user });
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (err) {
                console.log(err);
                _this._router.navigateByUrl('/');
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)();
            }));
        }));
    }
    LoggedInServce.ɵfac = function LoggedInServce_Factory(t) { return new (t || LoggedInServce)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_1__.LoginandregistrationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
    LoggedInServce.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: LoggedInServce, factory: LoggedInServce.ɵfac });
    (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
        (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Effect)()
    ], LoggedInServce.prototype, "loggedIn$", void 0);
    return LoggedInServce;
}());



/***/ }),

/***/ 60330:
/*!***********************************************************!*\
  !*** ./src/app/login-registration/store/login.reducer.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_loginReducer": function() { return /* binding */ _loginReducer; },
/* harmony export */   "loginreducer": function() { return /* binding */ loginreducer; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _login_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.actions */ 30326);
/* harmony import */ var _login_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.state */ 11271);




var _loginReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_login_state__WEBPACK_IMPORTED_MODULE_1__.loginInitialStae, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_login_actions__WEBPACK_IMPORTED_MODULE_0__.addUser, function (state, action) {
    // console.log(action)
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, state), { user: action.user });
}));
function loginreducer(state, action) {
    return _loginReducer(state, action);
}


/***/ }),

/***/ 25315:
/*!************************************************************!*\
  !*** ./src/app/login-registration/store/login.selecter.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "liginUser": function() { return /* binding */ liginUser; },
/* harmony export */   "getUser": function() { return /* binding */ getUser; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 86710);

var liginUser = "user";
var getLoginSelecter = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(liginUser);
var getUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getLoginSelecter, function (state) {
    return state.user;
});


/***/ }),

/***/ 11271:
/*!*********************************************************!*\
  !*** ./src/app/login-registration/store/login.state.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginInitialStae": function() { return /* binding */ loginInitialStae; }
/* harmony export */ });
var loginInitialStae = {
    user: null,
};


/***/ }),

/***/ 44616:
/*!*********************************************!*\
  !*** ./src/app/meterial/meterial.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeterialModule": function() { return /* binding */ MeterialModule; }
/* harmony export */ });
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tree */ 1933);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);















var MeterialModule = /** @class */ (function () {
    function MeterialModule() {
    }
    MeterialModule.ɵfac = function MeterialModule_Factory(t) { return new (t || MeterialModule)(); };
    MeterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MeterialModule });
    MeterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
                _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginatorModule,
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule,
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSortModule,
                _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule,
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule,
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionModule,
                _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule,
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_12__.MatTreeModule,
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule,
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule
            ], _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginatorModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSortModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_12__.MatTreeModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule] });
    return MeterialModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MeterialModule, { imports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginatorModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_12__.MatTreeModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule], exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginatorModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_12__.MatTreeModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule] }); })();


/***/ }),

/***/ 66313:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/loginandregistration.service */ 98109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.currentUser = '';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (this.loginService.isLoggedIn()) {
            this.currentUser = localStorage.getItem('name');
            console.log(this.currentUser);
            // this.router.navigateByUrl('/curd');
        }
        else {
            this.router.navigateByUrl('');
        }
    };
    NavbarComponent.prototype.logOut = function () {
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        this.router.navigateByUrl('');
    };
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_0__.LoginandregistrationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
    NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 33, vars: 1, consts: [["id", "navbar", 1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary"], ["id", "exp-navbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/curd", "routerLinkActive", "active", 1, "nav-link", 2, "color", "aliceblue"], ["routerLink", "expense/report", "routerLinkActive", "active", 1, "nav-link", 2, "color", "aliceblue"], ["routerLink", "expense/addexpense", "routerLinkActive", "active", 1, "nav-link", 2, "color", "aliceblue"], ["routerLink", "about", "routerLinkActive", "active", 1, "nav-link", 2, "color", "aliceblue"], [1, "form-inline", "my-2", "my-md-0", 2, "padding-right", "5%"], [1, "nav-item", "dropdown"], ["href", "#", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 2, "color", "aliceblue"], [2, "color", "black"], ["aria-labelledby", "dropdown", 1, "dropdown-menu"], ["routerLink", "/views", 1, "dropdown-item"], ["routerLink", "/views/pwdchange", 1, "dropdown-item"], [1, "dropdown-item", 3, "click"], ["id", "footer", 1, "footer", "bg-primary", "fixed-bottom"], [1, "container", "text-center"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Report");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Add Expense");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "About");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Welcome:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "My Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Change Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_27_listener() { return ctx.logOut(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Logout");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "footer", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " \u00A9 Sample MEAN app by Vijender | SampleApp 2020 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentUser);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: [".footer[_ngcontent-%COMP%]{\r\n   \r\n    height: 30px;\r\n    color:whitesmoke;\r\n}\r\n#navbar[_ngcontent-%COMP%]{\r\n    color:white;\r\n}\r\n.active[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n    padding-bottom: 3px;        \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XHJcbiAgIFxyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6d2hpdGVzbW9rZTtcclxufVxyXG4jbmF2YmFye1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuLmFjdGl2ZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7ICAgICAgICBcclxufSJdfQ== */"] });
    return NavbarComponent;
}());



/***/ }),

/***/ 38692:
/*!**************************************************!*\
  !*** ./src/app/ngrx-futer/state/ngrx-actions.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "increment": function() { return /* binding */ increment; },
/* harmony export */   "decrement": function() { return /* binding */ decrement; },
/* harmony export */   "reset": function() { return /* binding */ reset; },
/* harmony export */   "setname": function() { return /* binding */ setname; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 86710);

var increment = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('increment');
var decrement = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('decrement');
var reset = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('reset');
var setname = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('setname', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 67985:
/*!**************************************************!*\
  !*** ./src/app/ngrx-futer/state/ngrx-reducer.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countReducer": function() { return /* binding */ countReducer; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _ngrx_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngrx-actions */ 38692);
/* harmony import */ var _ngrx_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngrx-state */ 79750);




var _countReduce = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_ngrx_state__WEBPACK_IMPORTED_MODULE_1__.initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_ngrx_actions__WEBPACK_IMPORTED_MODULE_0__.increment, function (state) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, state), { count: state.count + 1 });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_ngrx_actions__WEBPACK_IMPORTED_MODULE_0__.decrement, function (state) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, state), { count: state.count - 1 });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_ngrx_actions__WEBPACK_IMPORTED_MODULE_0__.reset, function (state) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, state), { count: 0 });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_ngrx_actions__WEBPACK_IMPORTED_MODULE_0__.setname, function (state, action) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, state), { name: action.name });
}));
function countReducer(state, action) {
    return _countReduce(state, action);
}


/***/ }),

/***/ 41372:
/*!***************************************************!*\
  !*** ./src/app/ngrx-futer/state/ngrx-selecter.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Count_Variable": function() { return /* binding */ Count_Variable; },
/* harmony export */   "getCount": function() { return /* binding */ getCount; },
/* harmony export */   "getName": function() { return /* binding */ getName; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 86710);

var Count_Variable = 'count';
var getCounterState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(Count_Variable);
var getCount = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getCounterState, function (state) {
    return state.count;
});
var getName = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getCounterState, function (state) {
    return state.name;
});


/***/ }),

/***/ 79750:
/*!************************************************!*\
  !*** ./src/app/ngrx-futer/state/ngrx-state.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; }
/* harmony export */ });
var initialState = {
    count: 0,
    name: { "name": "vijju" }
};


/***/ }),

/***/ 43019:
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagenotfoundComponent": function() { return /* binding */ PagenotfoundComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent.ɵfac = function PagenotfoundComponent_Factory(t) { return new (t || PagenotfoundComponent)(); };
    PagenotfoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagenotfoundComponent, selectors: [["app-pagenotfound"]], decls: 2, vars: 0, template: function PagenotfoundComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pagenotfound works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });
    return PagenotfoundComponent;
}());



/***/ }),

/***/ 3927:
/*!******************************************!*\
  !*** ./src/app/services/crud.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrudService": function() { return /* binding */ CrudService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);





var CrudService = /** @class */ (function () {
    function CrudService(http) {
        this.http = http;
        this.noAuthHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Accept': 'text/plain',
                'Content-Type': 'text/plain'
            })
        };
    }
    CrudService.prototype.getEmp = function () {
        // const url='/g';
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL + '/g';
        // const url = "https://vijjufirstapp.herokuapp.com/g";
        return this.http.get(url);
    };
    CrudService.prototype.postEmp = function (model) {
        // const url='/p';
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL + '/p';
        // const url = "https://vijjufirstapp.herokuapp.com/p";
        return this.http.post(url, model);
    };
    CrudService.prototype.putEmp = function (model) {
        // const url='/'+model._id;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL + '/' + model._id;
        // const url = "https://vijjufirstapp.herokuapp.com/"+ model._id;
        return this.http.put(url, model);
    };
    CrudService.prototype.deleteEmp = function (_id) {
        // const url='/'+_id;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL + '/' + _id;
        // const url = "https://vijjufirstapp.herokuapp.com/" + _id;
        return this.http.delete(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    };
    CrudService.prototype.handleError = function (err) {
        var errMessage = "";
        if (err instanceof Error) {
            errMessage = err.error.message;
        }
        else {
            errMessage = err.error.message;
        }
        return errMessage;
    };
    CrudService.ɵfac = function CrudService_Factory(t) { return new (t || CrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
    CrudService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CrudService, factory: CrudService.ɵfac, providedIn: 'root' });
    return CrudService;
}());



/***/ }),

/***/ 98109:
/*!**********************************************************!*\
  !*** ./src/app/services/loginandregistration.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginandregistrationService": function() { return /* binding */ LoginandregistrationService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 86710);







var LoginandregistrationService = /** @class */ (function () {
    function LoginandregistrationService(http, store) {
        this.http = http;
        this.store = store;
        this.noAuthHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'NoAuth': 'True',
            })
        };
        this.content = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject("");
        this.share = this.content.asObservable();
        this._refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    Object.defineProperty(LoginandregistrationService.prototype, "refresh$", {
        get: function () {
            return this._refresh$;
        },
        enumerable: false,
        configurable: true
    });
    LoginandregistrationService.prototype.img = function (path) {
        // console.log(path)
        this.content.next(path);
    };
    LoginandregistrationService.prototype.postEmp = function (model) {
        console.log("src", model);
        // const url = '/reg';
        // const url = "https://vijjufirstapp.herokuapp.com/reg";
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL + '/reg';
        return this.http.post(url, model, this.noAuthHeader).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    };
    LoginandregistrationService.prototype.loginUser = function (log) {
        // const url = '/login';
        // const url = "https://vijjufirstapp.herokuapp.com/login";
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL + '/login';
        return this.http.post(url, log, this.noAuthHeader)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    };
    LoginandregistrationService.prototype.logedin = function () {
        // const url = '/logedin';
        // const url = "https://vijjufirstapp.herokuapp.com/logedin";
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL + '/logedin';
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    };
    LoginandregistrationService.prototype.setToken = function (token) {
        // console.log("set")
        localStorage.setItem('token', token);
    };
    LoginandregistrationService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('name');
        if (token) {
            return true;
        }
        else {
            return false;
        }
    };
    LoginandregistrationService.prototype.upDateProfile = function (formdada) {
        var _this = this;
        // const url = "https://vijjufirstapp.herokuapp.com/updateprofile";
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL + '/updateprofile';
        return this.http.post(url, formdada, this.noAuthHeader).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(function () {
            _this._refresh$.next();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    };
    LoginandregistrationService.prototype.forGotPwd = function (email) {
        // const url = '/forgotpwd';
        // const url = "https://vijjufirstapp.herokuapp.com/forgotpwd";
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL + '/forgotpwd';
        return this.http.post(url, email, this.noAuthHeader).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    };
    LoginandregistrationService.prototype.valiDateOtp = function (data) {
        // const url = "https://vijjufirstapp.herokuapp.com/validateOTP";
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL + '/validateOTP';
        return this.http.post(url, data, this.noAuthHeader).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    };
    LoginandregistrationService.prototype.tokenTimeVerify = function () {
        // const url = "https://vijjufirstapp.herokuapp.com/tokenexpires";
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL + '/tokenexpires';
        return this.http.get(url, this.noAuthHeader).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    };
    LoginandregistrationService.prototype.resetPwd = function (pwd, token) {
        // const url = '/resetpwd/' + token;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL + '/resetpwd/' + token;
        // const url = "https://vijjufirstapp.herokuapp.com/resetpwd/"+token;
        return this.http.post(url, pwd, this.noAuthHeader).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    };
    LoginandregistrationService.prototype.changePwd = function (data) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.URL + '/changepwd';
        // const url = "https://vijjufirstapp.herokuapp.com/changepwd";
        // console.log(url);
        return this.http.post(url, data, this.noAuthHeader).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    };
    LoginandregistrationService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = "Error: " + error.error.message;
        }
        else {
            // console.log(error);
            errorMessage = "Error Code: " + error.status + "\nmessage: " + error.error.message;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error.error);
    };
    LoginandregistrationService.prototype.sharing = function (data) {
        this.data1 = data;
        this.content.next(data);
    };
    LoginandregistrationService.prototype.get = function () {
        // console.log(this.data1)
        return this.data1;
    };
    LoginandregistrationService.ɵfac = function LoginandregistrationService_Factory(t) { return new (t || LoginandregistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store)); };
    LoginandregistrationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: LoginandregistrationService, factory: LoginandregistrationService.ɵfac, providedIn: 'root' });
    return LoginandregistrationService;
}());



/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 60671);
/* harmony import */ var _meterial_meterial_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../meterial/meterial.module */ 44616);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ 35698);
/* harmony import */ var _comman_child_child_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comman/child/child.component */ 64411);
/* harmony import */ var ngx_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-drag-drop */ 17897);
/* harmony import */ var _comman_dynamicdatatables_dynamicdatatables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comman/dynamicdatatables/dynamicdatatables.component */ 49881);
/* harmony import */ var ng2_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-filter-pipe */ 914);
/* harmony import */ var ng2_filter_pipe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_filter_pipe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
    SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
                primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule,
                primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule,
                _meterial_meterial_module__WEBPACK_IMPORTED_MODULE_0__.MeterialModule,
                primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.DialogModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
                ngx_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DndModule,
                ng2_filter_pipe__WEBPACK_IMPORTED_MODULE_3__.Ng2FilterPipeModule,
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule
            ], _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule,
            _meterial_meterial_module__WEBPACK_IMPORTED_MODULE_0__.MeterialModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.DialogModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            ngx_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DndModule,
            ng2_filter_pipe__WEBPACK_IMPORTED_MODULE_3__.Ng2FilterPipeModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_comman_child_child_component__WEBPACK_IMPORTED_MODULE_1__.ChildComponent,
        _comman_dynamicdatatables_dynamicdatatables_component__WEBPACK_IMPORTED_MODULE_2__.DynamicdatatablesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule,
        _meterial_meterial_module__WEBPACK_IMPORTED_MODULE_0__.MeterialModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.DialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        ngx_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DndModule,
        ng2_filter_pipe__WEBPACK_IMPORTED_MODULE_3__.Ng2FilterPipeModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule,
        _meterial_meterial_module__WEBPACK_IMPORTED_MODULE_0__.MeterialModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.DialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        ngx_drag_drop__WEBPACK_IMPORTED_MODULE_9__.DndModule,
        ng2_filter_pipe__WEBPACK_IMPORTED_MODULE_3__.Ng2FilterPipeModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule,
        _comman_child_child_component__WEBPACK_IMPORTED_MODULE_1__.ChildComponent,
        _comman_dynamicdatatables_dynamicdatatables_component__WEBPACK_IMPORTED_MODULE_2__.DynamicdatatablesComponent] }); })();


/***/ }),

/***/ 34971:
/*!************************************!*\
  !*** ./src/app/store/app.state.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appReducer": function() { return /* binding */ appReducer; }
/* harmony export */ });
/* harmony import */ var _login_registration_store_login_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login-registration/store/login.reducer */ 60330);
/* harmony import */ var _ngrx_futer_state_ngrx_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ngrx-futer/state/ngrx-reducer */ 67985);


var appReducer = {
    count: _ngrx_futer_state_ngrx_reducer__WEBPACK_IMPORTED_MODULE_1__.countReducer,
    // list:listReducer,
    user: _login_registration_store_login_reducer__WEBPACK_IMPORTED_MODULE_0__.loginreducer
};


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    // URL:"http://localhost:2020"
    URL: "https://vijjufirstapp.herokuapp.com"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map