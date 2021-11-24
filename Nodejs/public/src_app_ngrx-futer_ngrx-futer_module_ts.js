"use strict";
(self["webpackChunkangular8"] = self["webpackChunkangular8"] || []).push([["src_app_ngrx-futer_ngrx-futer_module_ts"],{

/***/ 494:
/*!*********************************************************!*\
  !*** ./src/app/ngrx-futer/addname/addname.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddnameComponent": function() { return /* binding */ AddnameComponent; }
/* harmony export */ });
/* harmony import */ var _state_ngrx_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/ngrx-actions */ 38692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);




var AddnameComponent = /** @class */ (function () {
    function AddnameComponent(store) {
        this.store = store;
    }
    AddnameComponent.prototype.ngOnInit = function () {
    };
    AddnameComponent.prototype.addName = function () {
        var obj = {
            "name": this.reName,
            "name1": "raja"
        };
        this, this.store.dispatch((0,_state_ngrx_actions__WEBPACK_IMPORTED_MODULE_0__.setname)({ name: obj }));
    };
    AddnameComponent.ɵfac = function AddnameComponent_Factory(t) { return new (t || AddnameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
    AddnameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddnameComponent, selectors: [["app-addname"]], decls: 3, vars: 1, consts: [["type", "text", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"]], template: function AddnameComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddnameComponent_Template_input_ngModelChange_0_listener($event) { return ctx.reName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddnameComponent_Template_button_click_1_listener() { return ctx.addName(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.reName);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRuYW1lLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return AddnameComponent;
}());



/***/ }),

/***/ 55371:
/*!*********************************************************!*\
  !*** ./src/app/ngrx-futer/buttons/buttons.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonsComponent": function() { return /* binding */ ButtonsComponent; }
/* harmony export */ });
/* harmony import */ var _state_ngrx_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/ngrx-actions */ 38692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 86710);



var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(store) {
        this.store = store;
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent.prototype.increse = function () {
        this.store.dispatch((0,_state_ngrx_actions__WEBPACK_IMPORTED_MODULE_0__.increment)());
    };
    ButtonsComponent.prototype.decrese = function () {
        this.store.dispatch((0,_state_ngrx_actions__WEBPACK_IMPORTED_MODULE_0__.decrement)());
    };
    ButtonsComponent.prototype.reset = function () {
        this.store.dispatch((0,_state_ngrx_actions__WEBPACK_IMPORTED_MODULE_0__.reset)());
    };
    ButtonsComponent.ɵfac = function ButtonsComponent_Factory(t) { return new (t || ButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
    ButtonsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ButtonsComponent, selectors: [["app-buttons"]], decls: 6, vars: 0, consts: [[1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-danger", "ml-3", 3, "click"], [1, "btn", "btn-success", "ml-3", 3, "click"]], template: function ButtonsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonsComponent_Template_button_click_0_listener() { return ctx.increse(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Increse");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonsComponent_Template_button_click_2_listener() { return ctx.decrese(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Decrese");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonsComponent_Template_button_click_4_listener() { return ctx.reset(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Reset");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b25zLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return ButtonsComponent;
}());



/***/ }),

/***/ 58357:
/*!*************************************************************************!*\
  !*** ./src/app/ngrx-futer/ngrx-futer-component/ngrx-futer.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgrxFuterComponent": function() { return /* binding */ NgrxFuterComponent; }
/* harmony export */ });
/* harmony import */ var _state_ngrx_selecter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/ngrx-selecter */ 41372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buttons/buttons.component */ 55371);
/* harmony import */ var _addname_addname_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addname/addname.component */ 494);





var NgrxFuterComponent = /** @class */ (function () {
    function NgrxFuterComponent(store) {
        this.store = store;
    }
    NgrxFuterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.counter$ = this.store.select(_state_ngrx_selecter__WEBPACK_IMPORTED_MODULE_0__.getCount);
        // console.log(this.counter$)
        this.name$ = this.store.select(_state_ngrx_selecter__WEBPACK_IMPORTED_MODULE_0__.getName);
        this.store.select(_state_ngrx_selecter__WEBPACK_IMPORTED_MODULE_0__.getName).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
    };
    NgrxFuterComponent.ɵfac = function NgrxFuterComponent_Factory(t) { return new (t || NgrxFuterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store)); };
    NgrxFuterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NgrxFuterComponent, selectors: [["app-ngrx-futer"]], decls: 10, vars: 1, consts: [[1, "card"], [1, "card-body"], [1, "row"], [1, "col-md-12", "text-center"], [1, "my-3"]], template: function NgrxFuterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-buttons");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-addname");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.name, " ");
        } }, directives: [_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_1__.ButtonsComponent, _addname_addname_component__WEBPACK_IMPORTED_MODULE_2__.AddnameComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZ3J4LWZ1dGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return NgrxFuterComponent;
}());



/***/ }),

/***/ 19552:
/*!**************************************************************************!*\
  !*** ./src/app/ngrx-futer/ngrx-futer-router/ngrx-futer-router.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgrxFuterRouterModule": function() { return /* binding */ NgrxFuterRouterModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngrx_futer_component_ngrx_futer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ngrx-futer-component/ngrx-futer.component */ 58357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




var routes = [
    { path: '', component: _ngrx_futer_component_ngrx_futer_component__WEBPACK_IMPORTED_MODULE_0__.NgrxFuterComponent },
    // {path:'register',component:RegistrationComponent},
];
var NgrxFuterRouterModule = /** @class */ (function () {
    function NgrxFuterRouterModule() {
    }
    NgrxFuterRouterModule.ɵfac = function NgrxFuterRouterModule_Factory(t) { return new (t || NgrxFuterRouterModule)(); };
    NgrxFuterRouterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgrxFuterRouterModule });
    NgrxFuterRouterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return NgrxFuterRouterModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgrxFuterRouterModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 94742:
/*!*************************************************!*\
  !*** ./src/app/ngrx-futer/ngrx-futer.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgrxFuterModule": function() { return /* binding */ NgrxFuterModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ngrx_futer_component_ngrx_futer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngrx-futer-component/ngrx-futer.component */ 58357);
/* harmony import */ var _ngrx_futer_router_ngrx_futer_router_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngrx-futer-router/ngrx-futer-router.module */ 19552);
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/buttons.component */ 55371);
/* harmony import */ var _addname_addname_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addname/addname.component */ 494);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);







var NgrxFuterModule = /** @class */ (function () {
    function NgrxFuterModule() {
    }
    NgrxFuterModule.ɵfac = function NgrxFuterModule_Factory(t) { return new (t || NgrxFuterModule)(); };
    NgrxFuterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: NgrxFuterModule });
    NgrxFuterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
                _ngrx_futer_router_ngrx_futer_router_module__WEBPACK_IMPORTED_MODULE_1__.NgrxFuterRouterModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
                // StoreModule.forFeature(Count_Variable,countReducer)
            ]] });
    return NgrxFuterModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NgrxFuterModule, { declarations: [_ngrx_futer_component_ngrx_futer_component__WEBPACK_IMPORTED_MODULE_0__.NgrxFuterComponent,
        _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__.ButtonsComponent,
        _addname_addname_component__WEBPACK_IMPORTED_MODULE_3__.AddnameComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _ngrx_futer_router_ngrx_futer_router_module__WEBPACK_IMPORTED_MODULE_1__.NgrxFuterRouterModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_ngrx-futer_ngrx-futer_module_ts.js.map