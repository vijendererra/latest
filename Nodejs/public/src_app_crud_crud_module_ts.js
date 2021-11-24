(self["webpackChunkangular8"] = self["webpackChunkangular8"] || []).push([["src_app_crud_crud_module_ts"],{

/***/ 49457:
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (a, b) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  "use strict";

  function b(a, b) {
    return "undefined" == typeof b ? b = {
      autoBom: !1
    } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
      autoBom: !b
    }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], {
      type: a.type
    }) : a;
  }

  function c(a, b, c) {
    var d = new XMLHttpRequest();
    d.open("GET", a), d.responseType = "blob", d.onload = function () {
      g(d.response, b, c);
    }, d.onerror = function () {
      console.error("could not download file");
    }, d.send();
  }

  function d(a) {
    var b = new XMLHttpRequest();
    b.open("HEAD", a, !1);

    try {
      b.send();
    } catch (a) {}

    return 200 <= b.status && 299 >= b.status;
  }

  function e(a) {
    try {
      a.dispatchEvent(new MouseEvent("click"));
    } catch (c) {
      var b = document.createEvent("MouseEvents");
      b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
    }
  }

  var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0,
      a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
      g = f.saveAs || ("object" != typeof window || window !== f ? function () {} : "download" in HTMLAnchorElement.prototype && !a ? function (b, g, h) {
    var i = f.URL || f.webkitURL,
        j = document.createElement("a");
    g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function () {
      i.revokeObjectURL(j.href);
    }, 4E4), setTimeout(function () {
      e(j);
    }, 0));
  } : "msSaveOrOpenBlob" in navigator ? function (f, g, h) {
    if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);else if (d(f)) c(f, g, h);else {
      var i = document.createElement("a");
      i.href = f, i.target = "_blank", setTimeout(function () {
        e(i);
      });
    }
  } : function (b, d, e, g) {
    if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
    var h = "application/octet-stream" === b.type,
        i = /constructor/i.test(f.HTMLElement) || f.safari,
        j = /CriOS\/[\d]+/.test(navigator.userAgent);

    if ((j || h && i || a) && "undefined" != typeof FileReader) {
      var k = new FileReader();
      k.onloadend = function () {
        var a = k.result;
        a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
      }, k.readAsDataURL(b);
    } else {
      var l = f.URL || f.webkitURL,
          m = l.createObjectURL(b);
      g ? g.location = m : location.href = m, g = null, setTimeout(function () {
        l.revokeObjectURL(m);
      }, 4E4);
    }
  });
  f.saveAs = g.saveAs = g,  true && (module.exports = g);
}); //# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ 10465:
/*!*****************************************************!*\
  !*** ./src/app/crud/crud-compnet/crud.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrudComponent": function() { return /* binding */ CrudComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 49457);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 54395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 87519);
/* harmony import */ var _state_curd_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/curd.actions */ 32264);
/* harmony import */ var _state_curd_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/curd.select */ 78929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/crud.service */ 3927);
/* harmony import */ var _services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loginandregistration.service */ 98109);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dialog */ 35698);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/api */ 82707);
/* harmony import */ var _comman_child_child_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../comman/child/child.component */ 64411);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);

// import {MatPaginator ,MatSort ,} from '@angular/material/paginator';



























function CrudComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", data_r5.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r5.key);
} }
function CrudComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CrudComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.clrearSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CrudComponent_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-list-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CrudComponent_ng_container_35_Template_mat_list_item_click_1_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); var data_r8 = restoredCtx.$implicit; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r9.filterByName(data_r8.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var data_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r8.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r8.value);
} }
function CrudComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No Tasks Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CrudComponent_ng_container_42_th_3_Template(rf, ctx) { if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-checkbox", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CrudComponent_ng_container_42_th_3_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r25.allSelected($event); })("ngModelChange", function CrudComponent_ng_container_42_th_3_Template_mat_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r27.selectdAll = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r11.selectdAll);
} }
function CrudComponent_ng_container_42_td_4_Template(rf, ctx) { if (rf & 1) {
    var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-checkbox", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function CrudComponent_ng_container_42_td_4_Template_mat_checkbox_change_1_listener($event) { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); var element_r28 = restoredCtx.$implicit; var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r29.seletedRow($event, element_r28); })("ngModelChange", function CrudComponent_ng_container_42_td_4_Template_mat_checkbox_ngModelChange_1_listener($event) { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); var element_r28 = restoredCtx.$implicit; return element_r28.isChecked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", element_r28.isChecked);
} }
function CrudComponent_ng_container_42_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-form-field", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r13.name);
} }
function CrudComponent_ng_container_42_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r32.name, " ");
} }
function CrudComponent_ng_container_42_th_9_Template(rf, ctx) { if (rf & 1) {
    var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-form-field", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CrudComponent_ng_container_42_th_9_Template_input_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r33.deBounce(ctx_r33.searchValue); })("ngModelChange", function CrudComponent_ng_container_42_th_9_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r35.searchValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r15.searchValue);
} }
function CrudComponent_ng_container_42_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r36.role, " ");
} }
function CrudComponent_ng_container_42_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-form-field", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r17.location);
} }
function CrudComponent_ng_container_42_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r37.location, " ");
} }
function CrudComponent_ng_container_42_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CrudComponent_ng_container_42_td_16_Template(rf, ctx) { if (rf & 1) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CrudComponent_ng_container_42_td_16_Template_button_click_1_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40); var row_r38 = restoredCtx.$implicit; var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r39.showDialog("Edit", row_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CrudComponent_ng_container_42_td_16_Template_button_click_3_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40); var row_r38 = restoredCtx.$implicit; var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r41.delete(row_r38._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CrudComponent_ng_container_42_mat_footer_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-footer-cell", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Loading Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function CrudComponent_ng_container_42_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 76);
} }
function CrudComponent_ng_container_42_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 77);
} }
var _c0 = function (a0) { return { "hide": a0 }; };
function CrudComponent_ng_container_42_mat_footer_row_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-footer-row", 78);
} if (rf & 2) {
    var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, ctx_r24.dataTable != null));
} }
var _c1 = function () { return ["loading"]; };
var _c2 = function () { return [5, 10, 20]; };
function CrudComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "table", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("matSortChange", function CrudComponent_ng_container_42_Template_table_matSortChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44); var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r43.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CrudComponent_ng_container_42_th_3_Template, 2, 1, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, CrudComponent_ng_container_42_td_4_Template, 2, 1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](5, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, CrudComponent_ng_container_42_th_6_Template, 7, 1, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, CrudComponent_ng_container_42_td_7_Template, 2, 1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, CrudComponent_ng_container_42_th_9_Template, 7, 1, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, CrudComponent_ng_container_42_td_10_Template, 2, 1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, CrudComponent_ng_container_42_th_12_Template, 7, 1, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, CrudComponent_ng_container_42_td_13_Template, 2, 1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, CrudComponent_ng_container_42_th_15_Template, 2, 0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, CrudComponent_ng_container_42_td_16_Template, 5, 0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, CrudComponent_ng_container_42_mat_footer_cell_18_Template, 2, 0, "mat-footer-cell", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, CrudComponent_ng_container_42_tr_19_Template, 1, 0, "tr", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, CrudComponent_ng_container_42_tr_20_Template, 1, 0, "tr", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, CrudComponent_ng_container_42_mat_footer_row_21_Template, 1, 3, "mat-footer-row", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-paginator", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("page", function CrudComponent_ng_container_42_Template_mat_paginator_page_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44); var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r45.handlePage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r4.dataTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r4.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r4.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSize", ctx_r4.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c2))("length", ctx_r4.totalSize)("pageIndex", ctx_r4.currentPage);
} }
var _c3 = function () { return { "widh": "600px", "minWidth": "600px" }; };
var _c4 = function () { return { "widh": "500px" }; };
var CrudComponent = /** @class */ (function () {
    function CrudComponent(formBuilder, service, src, snackBar, store) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.src = src;
        this.snackBar = snackBar;
        this.store = store;
        this.selectedArray = [];
        this.columnArray = [];
        this.displayedColumns = ['checkBox', 'name', 'role', 'location', 'actions'];
        this.pageSize = 5;
        this.currentPage = 0;
        this.totalSize = 0;
        this.data = [];
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('');
        this.role = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('');
        this.location = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('');
        this.arr = ['vijju', 'venky', 'harish', 'sravan'];
    }
    CrudComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)()).subscribe(function (val) {
            _this.applayFiltr(val, 'name');
        });
        this.role.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)()).subscribe(function (val) {
            _this.applayFiltr(val, 'role');
        });
        this.location.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)()).subscribe(function (val) {
            _this.applayFiltr(val, 'location');
        });
        this.sr();
        this.RegForm = this.formBuilder.group({
            _id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            role: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        });
        this.SearchForm = this.formBuilder.group({
            nameSearch: [''],
            searchKey: [''],
            ageSerach: [],
        });
        this.getData();
    };
    CrudComponent.prototype.deBounce = function (val) {
        var _this = this;
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
            console.log(_this.searchValue);
        }, 3000);
    };
    CrudComponent.prototype.sr = function () {
        var _this = this;
        // this.d= this.src.get();
        this.src.share.subscribe(function (res) { return _this.d = res; });
        // console.log("d:", this.d)
    };
    CrudComponent.prototype.showDialog = function (action, row) {
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
    };
    CrudComponent.prototype.submitForm = function () {
        if (this.dialogaction == "Add") {
            // this.service.postEmp(this.RegForm.value).subscribe((res) => {
            //   this.display = false;
            //   this.snackBar.open("Save Successfully...", "dismiss", {
            //     duration: 2000,
            //     verticalPosition: 'top'
            //   });
            //   this.getData();
            // });
            var savedata = this.RegForm.value;
            this.store.dispatch((0,_state_curd_actions__WEBPACK_IMPORTED_MODULE_1__.addData)({ savedata: savedata }));
            this.display = false;
            // this.getData();
        }
        else if (this.dialogaction == "Edit") {
            var update = this.RegForm.value;
            this.store.dispatch((0,_state_curd_actions__WEBPACK_IMPORTED_MODULE_1__.upDateData)({ update: update }));
            this.display = false;
            // this.getData();
            // this.service.putEmp(this.RegForm.value).subscribe((res) => {
            //   this.display = false;
            //   this.snackBar.open("Updated Successfully", "dismiss", {
            //     duration: 2000,
            //     verticalPosition: 'top',
            //     horizontalPosition: 'center',
            //     panelClass: 'snackbar-style'
            //   });
            //   this.getData();
            // });
        }
    };
    CrudComponent.prototype.getData = function () {
        var _this = this;
        this.store.dispatch((0,_state_curd_actions__WEBPACK_IMPORTED_MODULE_1__.loadData)());
        this.store.select(_state_curd_select__WEBPACK_IMPORTED_MODULE_2__.getList).subscribe(function (data) {
            _this.clacuLatingNames(data);
            _this.data = data;
            _this.dataTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(_this.data);
            _this.dataTable.paginator = _this.paginator;
            _this.tasks = _this.dataTable.data;
            _this.iterator();
            _this.totalSize = _this.tasks.length;
            // console.log(this.dataTable.data)
            _this.loding = false;
        });
        // this.listdata=this.store.select(getList);
        // this.service.getEmp().subscribe(res => {
        //   this.clacuLatingNames(res);
        //   this.data = res as CrudModel[];
        //   this.dataTable = new MatTableDataSource(this.data);
        //   this.dataTable.paginator = this.paginator;
        //   this.tasks = this.dataTable.data;
        //   this.iterator();
        //   this.totalSize = this.tasks.length;
        //   // console.log(this.dataTable.data)
        //   this.loding = false;
        // })
    };
    CrudComponent.prototype.clacuLatingNames = function (data) {
        var _this = this;
        this.allName = data;
        this.names = {};
        data.forEach(function (el) {
            if (_this.names.hasOwnProperty(el.name)) {
                _this.names[el.name] = _this.names[el.name] + 1;
            }
            else {
                _this.names[el.name] = 1;
            }
        });
        // console.log(this.names);
        var names = {};
        this.individulaNames = this.allName.filter(function (el) {
            if (names.hasOwnProperty(el.name)) {
                return false;
            }
            else {
                names[el.name] = true;
                return true;
            }
        });
        this.totalNamesCount = this.individulaNames.length;
        // console.log(this.individulaNames);
    };
    CrudComponent.prototype.filterByName = function (name) {
        this.filterData = this.data.filter(function (el) {
            if (el.name == name) {
                return true;
            }
        });
        this.dataTable.data = this.filterData;
    };
    CrudComponent.prototype.handlePage = function (event) {
        this.currentPage = event.pageIndex;
        this.pageSize = event.pageSize;
        this.iterator();
    };
    CrudComponent.prototype.iterator = function () {
        var end = (this.currentPage + 1) * this.pageSize;
        var start = this.currentPage * this.pageSize;
        var part = this.tasks.slice(start, end);
        this.dataTable.data = part;
        this.checkedList = [];
        for (var i = 0; i < this.dataTable.data.length; i++) {
            if (this.dataTable.data[i].isChecked) {
                this.checkedList.push(this.dataTable.data[1]);
            }
        }
        if (this.checkedList.length != this.dataTable.data.length) {
            this.selectdAll = false;
        }
        else {
            this.selectdAll = true;
        }
    };
    CrudComponent.prototype.delete = function (id) {
        this.id = id;
        this.deleConfemation = true;
    };
    ;
    CrudComponent.prototype.deleteConfim = function (action) {
        if (action === "yes") {
            //   this.service.deleteEmp(this.id).subscribe(res => {
            //     this.getData();
            //     this.deleConfemation = false;
            //   },
            //     err => {
            //       console.log("delete", err);
            //     })
            var delete_id = this.id;
            this.store.dispatch((0,_state_curd_actions__WEBPACK_IMPORTED_MODULE_1__.deleteOne)({ delete_id: delete_id }));
            this.deleConfemation = false;
            // this.getData();
        }
        else {
            this.deleConfemation = false;
        }
    };
    CrudComponent.prototype.clrearSearch = function () {
        this.searchKey = "";
        this.applyFilter();
    };
    CrudComponent.prototype.applyFilter = function () {
        console.log(this.searchKey);
        this.dataTable.filter = this.searchKey.trim().toLocaleLowerCase();
    };
    CrudComponent.prototype.applyFilterDropDown = function () {
        // this.dropdownSearch
        // console.log(this.dropdownSearch);
        if (this.dropdownSearch == undefined) {
            // console.log(this.dropdownSearch);
        }
        else {
            this.dataTable.filter = this.dropdownSearch.trim().toLocaleLowerCase();
        }
    };
    CrudComponent.prototype.applyAgeFilterDropDown = function () {
        console.log(this.dropdownSearchAge);
        if (this.dropdownSearchAge == undefined) {
            // console.log(this.dropdownSearchAge);
        }
        else if (this.dropdownSearchAge === "20-30") {
            // console.log(this.dropdownSearchAge);
            var minimunAge_1 = 20;
            var maximumAge_1 = 30;
            this.dataTable.data = this.data.filter(function (product) {
                // console.log(product);
                return product.age >= minimunAge_1
                    && product.age <= maximumAge_1;
            });
        }
        else if (this.dropdownSearchAge === "30+") {
            console.log(this.dropdownSearchAge);
            var minimunAge_2 = 30;
            var maximumAge_2 = 100;
            this.dataTable.data = this.data.filter(function (product) {
                console.log(product);
                return product.age >= minimunAge_2
                    && product.age <= maximumAge_2;
            });
        }
        else if (this.dropdownSearchAge === "40+") {
            console.log(this.dropdownSearchAge);
            var minimunAge_3 = 40;
            var maximumAge_3 = 100;
            this.dataTable.data = this.data.filter(function (product) {
                console.log(product);
                return product.age >= minimunAge_3
                    && product.age <= maximumAge_3;
            });
        }
    };
    CrudComponent.prototype.filter = function () {
        var _this = this;
        // console.log(this.data);
        // console.log(this.SearchForm.value.nameSearch);
        var array = [];
        if (!this.SearchForm.value.nameSearch) {
            this.dataTable.data = this.data;
        }
        else {
            this.data.forEach(function (e) {
                if (e.name.toLocaleLowerCase() == _this.SearchForm.value.nameSearch.toLocaleLowerCase()) {
                    array.push(e);
                }
            });
            this.dataTable.data = array;
        }
    };
    // CheckBox
    CrudComponent.prototype.allSelected = function (event) {
        var _this = this;
        if (event.checked) {
            this.dataTable.data.forEach(function (el) { el.isChecked = true; });
            this.selectdAll = true;
            this.dataTable.data.forEach(function (el) {
                _this.selectedArray.push(el);
            });
            // const result = Object.values(this.selectedArray.reduce((r, o) => {
            //   r[o._id] = r[o._id] || { ...o };
            //   return r;
            // }, {}));
            // this.selectedArray = [];
            // this.selectedArray.push(...result);
            var names_1 = {};
            this.selectedArray = this.selectedArray.filter(function (el) {
                if (names_1.hasOwnProperty(el._id)) {
                    return false;
                }
                else {
                    names_1[el._id] = true;
                    return true;
                }
            });
        }
        else {
            this.dataTable.data.forEach(function (el) { el.isChecked = false; });
            this.selectdAll = false;
            for (var i = this.selectedArray.length - 1; i >= 0; i--) {
                for (var j = 0; j < this.dataTable.data.length; j++) {
                    if (this.selectedArray[i] && (this.selectedArray[i]._id === this.dataTable.data[j]._id)) {
                        this.selectedArray.slice(i, 1);
                    }
                }
            }
        }
        // console.log(this.selectedArray);
    };
    CrudComponent.prototype.seletedRow = function (event, row) {
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
                this.selectdAll = false;
            }
            else {
                this.selectdAll = true;
            }
        }
        else {
            row.isChecked = false;
            this.selectdAll = false;
            this.selectedArray = this.selectedArray.filter(function (t) { return t._id != row._id; });
        }
        console.log(this.selectedArray);
    };
    CrudComponent.prototype.fun = function () {
        console.log(this.sletedValue);
    };
    // downlod
    CrudComponent.prototype.download = function () {
        var data = "text";
        // const blob = new Blob([data], { type: 'text/plain' });
        // console.log(blob);
        var url = window.URL.createObjectURL(data);
        // console.log(encodeURIComponent(url));
        // var a = document.createElement("a");
        // document.body.appendChild(a);
        // a.href = url;
        // a.download = "dow";
        // a.click();
        // var res = encodeURIComponent(url);
        // window.URL.revokeObjectURL(url);
        (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(url, "fileName");
    };
    CrudComponent.prototype.dynamicDownlod = function () {
        var data = {
            name: "vijju",
            content: null,
            type: ".txt"
        };
        var file = data.content;
        var v = document.createElement('a');
        v.setAttribute('id', 'sample');
        v.download = data.name + data.type;
        v.href = 'data:appliction/octet-stream;base64,' + file;
        document.body.appendChild(v);
        v.click();
        v.remove();
    };
    CrudComponent.prototype.applayFiltr = function (filterVal, columnName) {
        var _this = this;
        var val = filterVal;
        var colName = columnName;
        var obj = {
            columnName: colName,
            value: val
        };
        if (val == "") {
            this.columnArray.forEach(function (ele, i) {
                if (ele.columnName == colName) {
                    _this.columnArray.splice(i, 1);
                }
            });
        }
        else {
            if (this.columnArray.length > 0) {
                this.columnArray.forEach(function (ele, i) {
                    if (ele.columnName == colName) {
                        _this.columnArray.splice(i, 1);
                    }
                });
                this.columnArray.push(obj);
            }
            else {
                this.columnArray.push(obj);
            }
        }
        this.filteredData();
    };
    CrudComponent.prototype.filteredData = function () {
        console.log(this.columnArray);
    };
    CrudComponent.prototype.sortData = function (sort) {
        var data = this.dataTable.data.slice();
        if (!sort.active || sort.direction === '') {
            this.dataTable.data = data;
            return;
        }
        this.dataTable.data = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            // this.displayedColumns.forEach(ele => {
            //   switch (sort.active) {
            //     case ele: return compare(a.ele, b.ele, isAsc);
            //   }
            // });
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'role': return compare(a.role, b.role, isAsc);
                case 'age': return compare(a.age, b.age, isAsc);
                case 'location': return compare(a.location, b.location, isAsc);
                default: return 0;
            }
        });
    };
    CrudComponent.ɵfac = function CrudComponent_Factory(t) { return new (t || CrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_crud_service__WEBPACK_IMPORTED_MODULE_3__.CrudService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_loginandregistration_service__WEBPACK_IMPORTED_MODULE_4__.LoginandregistrationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store)); };
    CrudComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CrudComponent, selectors: [["app-crud"]], viewQuery: function CrudComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, 7);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 89, vars: 30, consts: [[3, "formGroup"], [1, "justify-content-end", "mt-1", 2, "text-align", "right"], ["matSuffix", "", 1, "search", "mr-2"], [1, "btn", "btn-link", 3, "click"], [1, "fa", "fa-plus"], ["appearance", "fill", 1, "mr-3"], ["formControlName", "nameSearch", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["floatLabel", "never", 1, "serach-form", "mr-2"], ["matInput", "", "placeholder", "search", "autocomplete", "off", 3, "ngModel", "ngModelChange", "input"], ["class", "btn btn-link ", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [3, "click"], [1, "row", "w-100m-0"], [1, "col-md-3", "py-3"], ["multi", "", 1, "example-headers-align"], [3, "expanded"], [2, "color", "blueviolet", "margin-left", "5em"], [1, "p-0", 2, "max-height", "440px", "overflow-y", "auto"], [2, "overflow", "auto"], [1, "pt-0"], [1, "list", 3, "click"], ["mat-line", ""], [1, "badge", "badge-primary"], [4, "ngFor", "ngForOf"], [1, "col-md-9", "py-3"], [1, "card"], [1, "card-body", 2, "max-height", "520px", "padding", "0.25rem"], [1, "example-header"], [4, "ngIf"], ["appendTo", "body", 3, "visible", "modal", "responsive", "minY", "visibleChange"], [1, "dialogHeader"], [1, "btn", "btn-primary", 3, "click"], [3, "visible", "maximizable", "responsive", "visibleChange"], [1, "container"], [1, "row"], [1, "col-md-6", "form-group"], ["type", "text", "placeholder", "Enter Nmae", "formControlName", "name", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Enter Role", "name", "role", "formControlName", "role", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Repeat Location", "name", "location", "formControlName", "location", "required", "", 1, "form-control"], [1, "example-container", "col-md-6"], ["appearance", "fill"], ["matInput", "", "placeholder", "pat@example.com", "required", ""], [1, "d-flex", "justify-content-end", "mr-3"], [3, "viewchild"], [3, "value"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 1, "btn", "btn-link", 3, "click"], [1, "fa", "fa-close"], ["mat-table", "", "matSort", "", 3, "dataSource", "matSortChange"], ["matColumnDef", "checkBox"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", "class", "applay", 4, "matHeaderCellDef"], ["matColumnDef", "role"], ["matColumnDef", "location"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "applay", 4, "matHeaderCellDef"], ["matColumnDef", "loading"], ["colspan", "6", 4, "matFooterCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "ngClass", 4, "matFooterRowDef"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page"], ["mat-header-cell", "", "mat-sort-header", ""], [3, "ngModel", "change", "ngModelChange"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "applay"], [1, "col-md-5"], [1, "col-md-8"], ["appearance", "legacy", 2, "width", "100px"], ["matInput", "", "placeholder", "search", 3, "formControl"], ["matInput", "", "placeholder", "search", 3, "ngModel", "click", "ngModelChange"], ["mat-header-cell", "", 1, "applay"], ["aria-hidden", "true", 1, "fa", "fa-edit"], ["aria-hidden", "true", 1, "fa", "fa-trash"], ["colspan", "6"], ["mat-header-row", ""], ["mat-row", ""], [3, "ngClass"]], template: function CrudComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CrudComponent_Template_button_click_3_listener() { return ctx.showDialog("Add", "row"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-form-field", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "--Action--");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-select", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function CrudComponent_Template_mat_select_selectionChange_8_listener() { return ctx.filter(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, CrudComponent_mat_option_9_Template, 2, 2, "mat-option", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-form-field", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function CrudComponent_Template_input_ngModelChange_12_listener($event) { return ctx.searchKey = $event; })("input", function CrudComponent_Template_input_input_12_listener() { return ctx.applyFilter(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, CrudComponent_button_13_Template, 2, 0, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CrudComponent_Template_button_click_16_listener() { return ctx.dynamicDownlod(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Download");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-accordion", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-expansion-panel", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "My Data");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "mat-list", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-list-item", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CrudComponent_Template_mat_list_item_click_30_listener() { return ctx.getData(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "h4", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "All Names");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, CrudComponent_ng_container_35_Template, 6, 2, "ng-container", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, CrudComponent_div_41_Template, 3, 0, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, CrudComponent_ng_container_42_Template, 23, 10, "ng-container", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "p-dialog", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("visibleChange", function CrudComponent_Template_p_dialog_visibleChange_43_listener($event) { return ctx.deleConfemation = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "p-header", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, " Conferm Action ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, " Are you sure to delete ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "p-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CrudComponent_Template_button_click_48_listener() { return ctx.deleteConfim("no"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "No ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CrudComponent_Template_button_click_50_listener() { return ctx.deleteConfim("yes"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Yes");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "p-dialog", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("visibleChange", function CrudComponent_Template_p_dialog_visibleChange_52_listener($event) { return ctx.display = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "p-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "span", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](59, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](65, "input", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Role:");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "input", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "Location:");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](75, "input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "mat-form-field", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "Enter your email");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](80, "input", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](81, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function CrudComponent_Template_button_click_83_listener() { return ctx.submitForm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](86, "app-child", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](87, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.SearchForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 24, ctx.names));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchKey);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchKey);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("expanded", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.totalNamesCount);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](36, 26, ctx.names));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.data.length == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.data.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](28, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx.deleConfemation)("modal", true)("responsive", true)("minY", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](29, _c4));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx.display)("maximizable", true)("responsive", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.formTitle, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.RegForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.button);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("viewchild", "childView");
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionPanelTitle, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatLine, primeng_dialog__WEBPACK_IMPORTED_MODULE_22__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_23__.Header, primeng_api__WEBPACK_IMPORTED_MODULE_23__.Footer, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _comman_child_child_component__WEBPACK_IMPORTED_MODULE_5__.ChildComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatFooterRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatFooterRow, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.KeyValuePipe], styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    background-color: black;\r\n  }\r\n  \r\n  *[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  \r\n  \r\n  table[_ngcontent-%COMP%]{\r\n     width: 100%;\r\n   }\r\n  \r\n  mat-header-row[_ngcontent-%COMP%]{\r\n     min-height: 2.5rem !important;\r\n   }\r\n  \r\n  mat-cell[_ngcontent-%COMP%]{\r\n     word-break: break-word;\r\n     text-align: left;\r\n     -moz-text-align-last: left;\r\n          text-align-last: left;\r\n     padding-right: 1rem;\r\n     font-size: 0.8rem;\r\n   }\r\n  \r\n  .dialogHeader[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    font-weight: 500;\r\n    font-style: italic;\r\n    color:hsl(90, 76%, 26%);\r\n    left: 200px;\r\n    top:30px\r\n}\r\n  \r\n  .list[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    background-color: rosybrown;\r\n  }\r\n  \r\n  .applay[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    color: #5369e9;\r\n  }\r\n  \r\n    .snackbar-style{\r\n    background-color: rgb(4, 19, 1);\r\n    color:whitesmoke;\r\n    font-style: italic;\r\n    font-weight: 400;\r\n  }\r\n  \r\n    .mat-simple-snackbar-action {\r\n    color:rgb(207, 67, 137);\r\n    font-style: italic;\r\n    font-weight: 400;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNydWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlDQUF5QztJQUN6Qyx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUEsOEJBQThCOztFQUU3QjtLQUNFLFdBQVc7R0FDYjs7RUFDQTtLQUNFLDZCQUE2QjtHQUMvQjs7RUFDQTtLQUNFLHNCQUFzQjtLQUN0QixnQkFBZ0I7S0FDaEIsMEJBQXFCO1VBQXJCLHFCQUFxQjtLQUNyQixtQkFBbUI7S0FDbkIsaUJBQWlCO0dBQ25COztFQUVBO0lBQ0Msa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWDtBQUNKOztFQUNFO0lBQ0UsZUFBZTtJQUNmLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFDQTtJQUNFLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6ImNydWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXHJcbiBcclxuICAgdGFibGV7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgIH1cclxuICAgbWF0LWhlYWRlci1yb3d7XHJcbiAgICAgbWluLWhlaWdodDogMi41cmVtICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAgbWF0LWNlbGx7XHJcbiAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgIHRleHQtYWxpZ24tbGFzdDogbGVmdDtcclxuICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICB9XHJcblxyXG4gICAuZGlhbG9nSGVhZGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOmhzbCg5MCwgNzYlLCAyNiUpO1xyXG4gICAgbGVmdDogMjAwcHg7XHJcbiAgICB0b3A6MzBweFxyXG59XHJcbiAgLmxpc3Q6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByb3N5YnJvd247XHJcbiAgfVxyXG5cclxuICAuYXBwbGF5e1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjNTM2OWU5O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLnNuYWNrYmFyLXN0eWxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQsIDE5LCAxKTtcclxuICAgIGNvbG9yOndoaXRlc21va2U7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcclxuICAgIGNvbG9yOnJnYigyMDcsIDY3LCAxMzcpO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9Il19 */"] });
    return CrudComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ 46773:
/*!**********************************************************!*\
  !*** ./src/app/crud/crud-routing/crud-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrudRoutingModule": function() { return /* binding */ CrudRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _crud_compnet_crud_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crud-compnet/crud.component */ 10465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




var routes = [
    { path: '', component: _crud_compnet_crud_component__WEBPACK_IMPORTED_MODULE_0__.CrudComponent }
];
var CrudRoutingModule = /** @class */ (function () {
    function CrudRoutingModule() {
    }
    CrudRoutingModule.ɵfac = function CrudRoutingModule_Factory(t) { return new (t || CrudRoutingModule)(); };
    CrudRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CrudRoutingModule });
    CrudRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return CrudRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CrudRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 47995:
/*!*************************************!*\
  !*** ./src/app/crud/crud.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrudModule": function() { return /* binding */ CrudModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _crud_compnet_crud_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud-compnet/crud.component */ 10465);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _crud_routing_crud_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crud-routing/crud-routing.module */ 46773);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var _state_curd_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/curd.effects */ 18041);
/* harmony import */ var _state_curd_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/curd.reducer */ 84562);
/* harmony import */ var _state_curd_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/curd.select */ 78929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);












// import { _loadDataSuccess } from './state/curd.select';
var CrudModule = /** @class */ (function () {
    function CrudModule() {
    }
    CrudModule.ɵfac = function CrudModule_Factory(t) { return new (t || CrudModule)(); };
    CrudModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CrudModule });
    CrudModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
                _crud_routing_crud_routing_module__WEBPACK_IMPORTED_MODULE_2__.CrudRoutingModule,
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreModule.forFeature(_state_curd_select__WEBPACK_IMPORTED_MODULE_5__._loadDataSuccess, _state_curd_reducer__WEBPACK_IMPORTED_MODULE_4__.listReducer),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__.EffectsModule.forFeature([_state_curd_effects__WEBPACK_IMPORTED_MODULE_3__.CurdDataService]),
            ]] });
    return CrudModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CrudModule, { declarations: [_crud_compnet_crud_component__WEBPACK_IMPORTED_MODULE_0__.CrudComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _crud_routing_crud_routing_module__WEBPACK_IMPORTED_MODULE_2__.CrudRoutingModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__.EffectsFeatureModule] }); })();


/***/ }),

/***/ 32264:
/*!********************************************!*\
  !*** ./src/app/crud/state/curd.actions.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadData": function() { return /* binding */ loadData; },
/* harmony export */   "loadSuccess": function() { return /* binding */ loadSuccess; },
/* harmony export */   "addData": function() { return /* binding */ addData; },
/* harmony export */   "addSuccess": function() { return /* binding */ addSuccess; },
/* harmony export */   "upDateData": function() { return /* binding */ upDateData; },
/* harmony export */   "updateSuccess": function() { return /* binding */ updateSuccess; },
/* harmony export */   "deleteOne": function() { return /* binding */ deleteOne; },
/* harmony export */   "deleteSuccess": function() { return /* binding */ deleteSuccess; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 86710);

var loadData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('lodidata');
var loadSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('sucessdata', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
var addData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('addData', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
var addSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('addSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
var upDateData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('upDateData', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
var updateSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('updateSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
var deleteOne = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('deleteOne', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
var deleteSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('deleteSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 18041:
/*!********************************************!*\
  !*** ./src/app/crud/state/curd.effects.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurdDataService": function() { return /* binding */ CurdDataService; }
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 85322);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var _curd_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curd.actions */ 32264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/crud.service */ 3927);






var CurdDataService = /** @class */ (function () {
    function CurdDataService(actions$, curdSrc) {
        var _this = this;
        this.actions$ = actions$;
        this.curdSrc = curdSrc;
        this.loadData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
            return _this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_curd_actions__WEBPACK_IMPORTED_MODULE_0__.loadData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (action) {
                return _this.curdSrc.getEmp().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (list) {
                    // console.log(list);
                    return (0,_curd_actions__WEBPACK_IMPORTED_MODULE_0__.loadSuccess)({ list: list });
                }));
            }));
        });
        this.addData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
            return _this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_curd_actions__WEBPACK_IMPORTED_MODULE_0__.addData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (action) {
                return _this.curdSrc.postEmp(action.savedata).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (data) {
                    var addRow = data;
                    // const addRow={...action.savedata,_id:data._id}
                    return (0,_curd_actions__WEBPACK_IMPORTED_MODULE_0__.addSuccess)({ addRow: addRow });
                }));
            }));
        });
        //  addData$ = createEffect(() => {
        //     return this.actions$.pipe(
        //         ofType(addData), mergeMap((action) => {
        //             return this.curdSrc.postEmp(action.savedata).pipe(map((data) => {
        //                 const addData={action,data.name}
        //             }))
        //         })
        //     )
        // }
        this.upDate$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
            return _this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_curd_actions__WEBPACK_IMPORTED_MODULE_0__.upDateData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function (action) {
                return _this.curdSrc.putEmp(action.update).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (res) {
                    // const updatedData=res;
                    return (0,_curd_actions__WEBPACK_IMPORTED_MODULE_0__.updateSuccess)({ updatedData: res });
                }));
            }));
            // }, { dispatch: false });
        });
        this.deleteOne$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(function () {
            return _this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_curd_actions__WEBPACK_IMPORTED_MODULE_0__.deleteOne), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(function (action) {
                // console.log(action);
                return _this.curdSrc.deleteEmp(action.delete_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (res) {
                    return (0,_curd_actions__WEBPACK_IMPORTED_MODULE_0__.deleteSuccess)({ deletedData: action.delete_id });
                }));
            }));
            // }, { dispatch: false })
        });
    }
    CurdDataService.ɵfac = function CurdDataService_Factory(t) { return new (t || CurdDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_1__.CrudService)); };
    CurdDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: CurdDataService, factory: CurdDataService.ɵfac });
    return CurdDataService;
}());



/***/ }),

/***/ 84562:
/*!********************************************!*\
  !*** ./src/app/crud/state/curd.reducer.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listReducer": function() { return /* binding */ listReducer; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 86710);
/* harmony import */ var _curd_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curd.actions */ 32264);
/* harmony import */ var _curd_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curd.state */ 93753);




var _listReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(_curd_state__WEBPACK_IMPORTED_MODULE_1__.curdInitialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_curd_actions__WEBPACK_IMPORTED_MODULE_0__.loadSuccess, function (state, action) {
    // console.log(action)
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, state), { list: action.list });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_curd_actions__WEBPACK_IMPORTED_MODULE_0__.addSuccess, function (state, action) {
    // console.log(action)
    var newRow = action.addRow;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, state), { list: (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__read)(state.list)), [newRow]) });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_curd_actions__WEBPACK_IMPORTED_MODULE_0__.updateSuccess, function (state, action) {
    var upDateData = state.list.map(function (data) {
        return action.updatedData._id == data._id ? action.updatedData : data;
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, state), { list: upDateData });
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_curd_actions__WEBPACK_IMPORTED_MODULE_0__.deleteSuccess, function (state, action) {
    // console.log(action.deletedData);
    var filteredData = state.list.filter(function (row) {
        return row._id !== action.deletedData;
    });
    //    console.log(filteredData);
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, state), { list: filteredData });
}));
function listReducer(state, action) {
    return _listReducer(state, action);
}


/***/ }),

/***/ 78929:
/*!*******************************************!*\
  !*** ./src/app/crud/state/curd.select.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_loadDataSuccess": function() { return /* binding */ _loadDataSuccess; },
/* harmony export */   "getList": function() { return /* binding */ getList; }
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 86710);

var _loadDataSuccess = 'list';
var getListDataSelecter = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)(_loadDataSuccess);
var getList = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getListDataSelecter, function (state) {
    return state.list;
});


/***/ }),

/***/ 93753:
/*!******************************************!*\
  !*** ./src/app/crud/state/curd.state.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "curdInitialState": function() { return /* binding */ curdInitialState; }
/* harmony export */ });
var curdInitialState = {
    list: [],
};


/***/ })

}]);
//# sourceMappingURL=src_app_crud_crud_module_ts.js.map