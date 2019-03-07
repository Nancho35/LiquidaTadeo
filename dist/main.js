(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bienvenida/bienvenida.component */ "./src/app/bienvenida/bienvenida.component.ts");
/* harmony import */ var _modulos_modulos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modulos/modulos.component */ "./src/app/modulos/modulos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/bienvenida' },
    { path: 'bienvenida', component: _bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_2__["BienvenidaComponent"] },
    { path: 'modulos', component: _modulos_modulos_component__WEBPACK_IMPORTED_MODULE_3__["ModulosComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.components = [_bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_2__["BienvenidaComponent"]];
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <nav class=\"navbar navbar-default\">\r\n    <div class=\"navbar-header\">\r\n      <a href=\"https://www.dragondemadera.pe/\"><img src=\"assets/Logo UTADEO horizontal.png\" class=\"logo\" /></a>\r\n    </div>\r\n  </nav>\r\n  \r\n  <main>\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n  \r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_camel_to_title_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/camel-to-title.pipe */ "./src/app/shared/camel-to-title.pipe.ts");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js");
/* harmony import */ var _bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bienvenida/bienvenida.component */ "./src/app/bienvenida/bienvenida.component.ts");
/* harmony import */ var _modulos_modulos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modulos/modulos.component */ "./src/app/modulos/modulos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"].components, _shared_camel_to_title_pipe__WEBPACK_IMPORTED_MODULE_6__["CamelToTitlePipe"], _bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_8__["BienvenidaComponent"], _modulos_modulos_component__WEBPACK_IMPORTED_MODULE_9__["ModulosComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bienvenida/bienvenida.component.css":
/*!*****************************************************!*\
  !*** ./src/app/bienvenida/bienvenida.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpZW52ZW5pZGEvYmllbnZlbmlkYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/bienvenida/bienvenida.component.html":
/*!******************************************************!*\
  !*** ./src/app/bienvenida/bienvenida.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div *ngIf=\"!submitted\" class=\"flex-container\">\r\n        <div>\r\n            <h1>Liquidación de Contrato Laboral </h1>\r\n               \r\n\r\n            <form [formGroup]=\"baseForm\" (ngSubmit)=\"onSubmit(baseForm)\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"cargo\">Cargo desempeñado</label>\r\n                    <span tooltip=\"Ingrese su ultimo cargo\" placement=\"right\" show-delay=\"100\"><img\r\n                            src=\"assets/descripcion.png\" /></span>\r\n                    <input type=\"text\"  class=\"form-control\" formControlName=\"cargo\" />\r\n                    <!--<div class=\"alert alert-danger\" [hidden]=\"heroForm.controls.apellido.valid\">Apellido es requerido</div>-->\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"contrato\">Clase de Contrato</label>\r\n                    <span tooltip=\"Seleccione el tipo de contrato\" placement=\"right\" show-delay=\"100\"><img\r\n                            src=\"assets/descripcion.png\" /></span>\r\n                            <select class=\"form-control\" formControlName=\"contrato\">\r\n                                <option *ngFor=\"let s of contrato\" [value]=\"s\">{{s}}</option>\r\n                            </select>\r\n                    <!--<div class=\"alert alert-danger\" [hidden]=\"heroForm.controls.email.valid\">No es un correo valido</div>-->\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"jornada\">Jornada Laboral</label>\r\n                    <span tooltip=\"Seleccione su jornada laboral\" placement=\"right\" show-delay=\"100\"><img\r\n                            src=\"assets/descripcion.png\" /></span>\r\n                            <input type=\"number\" class=\"form-control\" formControlName=\"jornada\" />\r\n                    <!--<div class=\"alert alert-danger\" [hidden]=\"heroForm.controls.email.valid\">No es un correo valido</div>-->\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"tiempo\">Tiempo Laborado</label>\r\n                    <span tooltip=\"Ingrese el tiempo laborado en dias\" placement=\"right\" show-delay=\"100\"><img src=\"assets/descripcion.png\" /></span>\r\n                    <input type=\"number\" class=\"form-control\" formControlName=\"tiempo\" />\r\n                    <!-- <div class=\"alert alert-danger\" [hidden]=\"heroForm.controls.lista.valid\">Power is required</div>-->\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"termina\">Modo de Terminación</label>\r\n                    <span tooltip=\"Ingrese el modo de terminación dle contrato laboral\" placement=\"right\" show-delay=\"100\"><img src=\"assets/descripcion.png\" /></span>\r\n                    <select class=\"form-control\" formControlName=\"termina\">\r\n                        <option *ngFor=\"let s of termina\" [value]=\"s\">{{s}}</option>\r\n                    </select>\r\n                    <!-- <div class=\"alert alert-danger\" [hidden]=\"heroForm.controls.lista.valid\">Power is required</div>-->\r\n                </div>\r\n\r\n                <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!baseForm.valid\">Siguiente</button>\r\n            </form>\r\n        </div>\r\n\r\n        <div class=\"imc\">\r\n            <img src=\"assets/banner.jpg\" style=\"margin-top:3%;width: 570px;height: 200px;padding-bottom: 2%;\"/>\r\n            \r\n            <p>Bienvenido a <b>LiquiTadeo</b> el consultorio jurídico de la Universidad Jorge Tadeo Lozano pone a disposición esta herramienta que permitirá  generar su liquidación laboral.</p> \r\n\r\n               <p><b>Recuerde:</b> cuando exista conflicto respecto de los derechos del trabajador, deberá acudir a la justicia laboral ordinaria o agendar una cita al consultorio jurídico</p> \r\n            <div>\r\n                <h2 class = \"resultado_text\">{{resultado_text}}</h2>\r\n                <p class = \"resultado_text\">{{resultado2_text}}</p>\r\n                <p class = \"resultado_text\">{{resultado3_text}}</p>\r\n                <p class = \"resultado\">{{resultado}}</p>\r\n            <button  (click)=\"continuar()\" class=\"btn btn-primary\" *ngIf=\"condition\" >Realizar Test</button>\r\n            </div>\r\n\r\n        </div> \r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/bienvenida/bienvenida.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bienvenida/bienvenida.component.ts ***!
  \****************************************************/
/*! exports provided: BienvenidaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidaComponent", function() { return BienvenidaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BienvenidaComponent = /** @class */ (function () {
    function BienvenidaComponent(formBuilder, router, data) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.data = data;
        this.submitted = false;
        this.baseForm = this.createMyForm();
    }
    BienvenidaComponent.prototype.ngOnInit = function () {
        this.contrato = ['Prestación de servicios', 'Termino indefinido'];
        this.termina = ['Con justa causa', 'Sin justa causa'];
    };
    BienvenidaComponent.prototype.createMyForm = function () {
        return this.formBuilder.group({
            cargo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[aA-zZ áéíóúÁÉÍÓÚñÑ]{2,35}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            contrato: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            jornada: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            tiempo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{2}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            termina: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
        });
    };
    BienvenidaComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.router.navigate(['modulos']);
        this.submittedModel = value;
        this.data.base = this.submittedModel;
    };
    BienvenidaComponent.prototype.continuar = function () {
    };
    BienvenidaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bienvenida',
            template: __webpack_require__(/*! ./bienvenida.component.html */ "./src/app/bienvenida/bienvenida.component.html"),
            styles: [__webpack_require__(/*! ./bienvenida.component.css */ "./src/app/bienvenida/bienvenida.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], BienvenidaComponent);
    return BienvenidaComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/modulos/modulos.component.css":
/*!***********************************************!*\
  !*** ./src/app/modulos/modulos.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvbW9kdWxvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modulos/modulos.component.html":
/*!************************************************!*\
  !*** ./src/app/modulos/modulos.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"!submitted\" class=\"flex-container\">\n      <div>\n          <h1>Liquidación de Contrato Laboral </h1>\n             \n\n          <form [formGroup]=\"baseForm\" (ngSubmit)=\"onSubmit(baseForm)\">\n            \n            <div *ngFor=\"let opcion of opciones.controls; let i=index\">\n              <input type=\"checkbox\" [formControl]=\"opcion\"/> {{lista.opciones[i].name}}\n           </div>\n              \n              <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!baseForm.valid\">Siguiente</button>\n          </form>\n      </div>\n\n      <div class=\"imc\">\n          <img src=\"assets/banner.jpg\" style=\"margin-top:3%;width: 570px;height: 200px;padding-bottom: 2%;\"/>\n          \n          <p>Bienvenido a <b>LiquiTadeo</b> el consultorio jurídico de la Universidad Jorge Tadeo Lozano pone a disposición esta herramienta que permitirá  generar su liquidación laboral.</p> \n\n             <p><b>Recuerde:</b> cuando exista conflicto respecto de los derechos del trabajador, deberá acudir a la justicia laboral ordinaria o agendar una cita al consultorio jurídico</p> \n          <div>\n              <h2 class = \"resultado_text\">{{resultado_text}}</h2>\n              <p class = \"resultado_text\">{{resultado2_text}}</p>\n              <p class = \"resultado_text\">{{resultado3_text}}</p>\n              <p class = \"resultado\">{{resultado}}</p>\n          <button  (click)=\"continuar()\" class=\"btn btn-primary\" *ngIf=\"condition\" >Realizar Test</button>\n          </div>\n\n      </div> \n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/modulos/modulos.component.ts":
/*!**********************************************!*\
  !*** ./src/app/modulos/modulos.component.ts ***!
  \**********************************************/
/*! exports provided: ModulosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulosComponent", function() { return ModulosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModulosComponent = /** @class */ (function () {
    function ModulosComponent(formBuilder, router, data) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.data = data;
        this.submitted = false;
        this.lista = {
            opciones: [
                { name: 'Indemnización', selected: true, id: 1 },
                { name: 'Prestaciones sociales', selected: false, id: 2 },
                { name: 'Descanso remunerado', selected: false, id: 3 },
                { name: 'Pendientes de Pago', selected: false, id: 4 }
            ]
        };
        this.baseForm = this.createMyForm();
        this.baseForm = formBuilder.group({ opciones: this.buildSkills() });
    }
    Object.defineProperty(ModulosComponent.prototype, "opciones", {
        get: function () {
            return this.baseForm.get('opciones');
        },
        enumerable: true,
        configurable: true
    });
    ;
    ModulosComponent.prototype.buildSkills = function () {
        var _this = this;
        var arr = this.lista.opciones.map(function (opcion) {
            return _this.formBuilder.control(opcion.selected);
        });
        return this.formBuilder.array(arr);
    };
    ModulosComponent.prototype.ngOnInit = function () {
        this.contrato = ['Prestación de servicios', 'Termino indefinido'];
        this.termina = ['Con justa causa', 'Sin justa causa'];
    };
    ModulosComponent.prototype.createMyForm = function () {
        return this.formBuilder.group({
            cargo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[aA-zZ áéíóúÁÉÍÓÚñÑ]{2,35}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            contrato: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            jornada: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            tiempo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{2}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            termina: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
        });
    };
    ModulosComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.router.navigate(['modulos']);
        this.submittedModel = value;
        this.data.modulos = this.submittedModel;
    };
    ModulosComponent.prototype.continuar = function () {
    };
    ModulosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modulos',
            template: __webpack_require__(/*! ./modulos.component.html */ "./src/app/modulos/modulos.component.html"),
            styles: [__webpack_require__(/*! ./modulos.component.css */ "./src/app/modulos/modulos.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], ModulosComponent);
    return ModulosComponent;
}());



/***/ }),

/***/ "./src/app/shared/camel-to-title.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/camel-to-title.pipe.ts ***!
  \***********************************************/
/*! exports provided: CamelToTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamelToTitlePipe", function() { return CamelToTitlePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CamelToTitlePipe = /** @class */ (function () {
    function CamelToTitlePipe() {
    }
    CamelToTitlePipe.prototype.transform = function (value) {
        var newVal = value.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");
        newVal = newVal.charAt(0).toUpperCase() + newVal.slice(1);
        return newVal;
    };
    CamelToTitlePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'cameltotitle'
        })
    ], CamelToTitlePipe);
    return CamelToTitlePipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\herna\Documents\LiquidacionLaboral\Code\Liquidacion Laboral\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map