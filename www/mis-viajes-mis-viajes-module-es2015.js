(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mis-viajes-mis-viajes-module"],{

/***/ "00f0":
/*!*************************************************!*\
  !*** ./src/app/mis-viajes/mis-viajes.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .p-datatable-responsive-demo .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n\n.p-d-flex {\n  display: flex;\n  justify-content: space-between;\n}\n\n.action-column {\n  text-align: center !important;\n}\n\n@media screen and (max-width: 40rem) {\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-thead > tr > th,\n:host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tbody > tr > td {\n    text-align: left;\n    display: block;\n    width: 100%;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4em 1em -0.4em -0.4rem;\n    font-weight: bold;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tbody > tr > td:last-child {\n    border-bottom: 1px solid var(--surface-d);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlzLXZpYWplcy9taXMtdmlhamVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7QUFBUjs7QUFJQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQURKOztBQUlBO0VBQ0ksNkJBQUE7QUFESjs7QUFJQTtFQUlnQjs7SUFFSSx3QkFBQTtFQUpsQjtFQU9jO0lBQ0ksZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtFQUxsQjtFQU9rQjtJQUNJLGVBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxpQ0FBQTtJQUNBLGlCQUFBO0VBTHRCO0VBUWtCO0lBQ0kseUNBQUE7RUFOdEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21pcy12aWFqZXMvbWlzLXZpYWplcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgeyAgICBcclxuICAgIC5wLWRhdGF0YWJsZS1yZXNwb25zaXZlLWRlbW8gLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCAucC1jb2x1bW4tdGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wLWQtZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5hY3Rpb24tY29sdW1ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwcmVtKSB7XHJcbiAgICA6aG9zdCA6Om5nLWRlZXAge1xyXG4gICAgICAgIC5wLWRhdGF0YWJsZSB7XHJcbiAgICAgICAgICAgICYucC1kYXRhdGFibGUtcmVzcG9uc2l2ZS1kZW1vIHtcclxuICAgICAgICAgICAgICAgIC5wLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGgsXHJcbiAgICAgICAgICAgICAgICAucC1kYXRhdGFibGUtdGZvb3QgPiB0ciA+IHRkIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAgbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnAtY29sdW1uLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLS40ZW0gMWVtIC0uNGVtIC0uNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1kKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "9mfj":
/*!***********************************************!*\
  !*** ./src/app/mis-viajes/mis-viajes.page.ts ***!
  \***********************************************/
/*! exports provided: MisViajesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisViajesPage", function() { return MisViajesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mis_viajes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mis-viajes.page.html */ "A9al");
/* harmony import */ var _mis_viajes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mis-viajes.page.scss */ "00f0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_get_get_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/get/get.service */ "BQIx");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _utils_genericService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/genericService */ "BEOd");
/* harmony import */ var _detalle_viaje_detalle_viaje_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../detalle-viaje/detalle-viaje.component */ "YiQq");








let MisViajesPage = class MisViajesPage extends _utils_genericService__WEBPACK_IMPORTED_MODULE_6__["genericService"] {
    constructor(getService, toastCtrl, modalCtrl) {
        super(getService, null, null, toastCtrl, modalCtrl);
        this.getService = getService;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.url = "viajes/misViajes";
        this.viajes = [];
    }
    ngOnInit() {
        this.obtenerViajes();
    }
    obtenerViajes() {
        super.consumirGet(this.url).then((data) => {
            this.viajes = data;
        });
    }
    mostrarModal(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _detalle_viaje_detalle_viaje_component__WEBPACK_IMPORTED_MODULE_7__["DetalleViajeComponent"],
                componentProps: {
                    'id': id
                },
                backdropDismiss: false,
                cssClass: 'long-modal'
            });
            modal.present();
            yield modal.onWillDismiss().then((result) => {
                if (result.data != null && result.data.success) {
                    this.obtenerViajes();
                }
            });
        });
    }
};
MisViajesPage.ctorParameters = () => [
    { type: _services_get_get_service__WEBPACK_IMPORTED_MODULE_4__["GetService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
MisViajesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mis-viajes',
        template: _raw_loader_mis_viajes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mis_viajes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MisViajesPage);



/***/ }),

/***/ "A9al":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mis-viajes/mis-viajes.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Mis Viajes\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <app-user-menu></app-user-menu>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <p-table #dt [columns]=\"cols\" exportFilename=\"viajes\" [value]=\"viajes\"\r\n    styleClass=\"p-datatable-striped p-datatable-responsive-demo\" [paginator]=\"true\" [rows]=\"10\"\r\n    [showCurrentPageReport]=\"true\" currentPageReportTemplate=\"Mostrando {first} a {last} de {totalRecords} registros\"\r\n    [rowsPerPageOptions]=\"[10,25,50]\">\r\n\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th pSortableColumn=\"Fecha\">Fecha <p-sortIcon field=\"fecha\"></p-sortIcon></th>\r\n        <th pSortableColumn=\"Placa\">Placa <p-sortIcon field=\"placa\"></p-sortIcon></th>\r\n\r\n        <th pSortableColumn=\"Auxiliar\">Auxiliar <p-sortIcon field=\"nombreAuxiliar\"></p-sortIcon></th>\r\n        <th pSortableColumn=\"Cliente\">Cliente <p-sortIcon field=\"nombreCliente\"></p-sortIcon></th>\r\n        <th pSortableColumn=\"Origen\">Origen <p-sortIcon field=\"nombreOrigen\"></p-sortIcon></th>\r\n        <th pSortableColumn=\"Destino\">Destino <p-sortIcon field=\"nombreDestino\"></p-sortIcon></th>\r\n        <th pSortableColumn=\"Destino\">Estado <p-sortIcon field=\"estado\"></p-sortIcon></th>\r\n\r\n        <th rowspan=\"2\" class=\"action-column\">Acciones</th>\r\n      </tr>\r\n      <tr>\r\n        <th>\r\n          <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'fecha', 'contains')\"\r\n            placeholder=\"Buscar por Fecha\" class=\"p-column-filter\">\r\n        </th>\r\n        <th>\r\n          <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'placa', 'contains')\"\r\n            placeholder=\"Buscar por Placa\" class=\"p-column-filter\">\r\n        </th>\r\n\r\n        <th>\r\n          <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'nombreAuxiliar', 'contains')\"\r\n            placeholder=\"Buscar por Auxiliar\" class=\"p-column-filter\">\r\n        </th>\r\n        <th>\r\n          <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'nombreCliente', 'contains')\"\r\n            placeholder=\"Buscar por Cliente\" class=\"p-column-filter\">\r\n        </th>\r\n        <th>\r\n          <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'nombreOrigen', 'contains')\"\r\n            placeholder=\"Buscar por Origen\" class=\"p-column-filter\">\r\n        </th>\r\n        <th>\r\n          <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'nombreDestino', 'contains')\"\r\n            placeholder=\"Buscar por Destino\" class=\"p-column-filter\">\r\n        </th>\r\n        <th>\r\n          <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'estado', 'contains')\"\r\n            placeholder=\"Buscar por Estado\" class=\"p-column-filter\">\r\n        </th>\r\n\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-viaje>\r\n      <tr>\r\n        <td><span class=\"p-column-title\">Fecha </span>{{viaje.fecha | date: 'dd/MM/yyyy h:mm'}}</td>\r\n        <td><span class=\"p-column-title\">Placa </span>{{viaje.placa}}</td>\r\n\r\n        <td><span class=\"p-column-title\">Auxiliar </span>{{viaje.nombreAuxiliar}}</td>\r\n        <td><span class=\"p-column-title\">Cliente </span>{{viaje.nombreCliente}}</td>\r\n        <td><span class=\"p-column-title\">Origen </span>{{viaje.nombreOrigen}}</td>\r\n        <td><span class=\"p-column-title\">Destino </span>{{viaje.nombreDestino}}</td>\r\n        <td><span class=\"p-column-title\">Estado </span>{{viaje.estado}}</td>\r\n\r\n        <td class=\"action-column\">\r\n          <p-button label=\"Ver\" icon=\"pi pi-pencil\" iconPos=\"left\" (click)=\"mostrarModal(viaje.id)\"\r\n            class=\"primary-button\">\r\n          </p-button>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n\r\n</ion-content>");

/***/ }),

/***/ "dgGR":
/*!*************************************************!*\
  !*** ./src/app/mis-viajes/mis-viajes.module.ts ***!
  \*************************************************/
/*! exports provided: MisViajesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisViajesPageModule", function() { return MisViajesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _mis_viajes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mis-viajes-routing.module */ "iiDf");
/* harmony import */ var _mis_viajes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mis-viajes.page */ "9mfj");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../user-menu/user-menu.module */ "m/q5");











let MisViajesPageModule = class MisViajesPageModule {
};
MisViajesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mis_viajes_routing_module__WEBPACK_IMPORTED_MODULE_5__["MisViajesPageRoutingModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
            _user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_10__["UserMenuComponentModule"]
        ],
        declarations: [_mis_viajes_page__WEBPACK_IMPORTED_MODULE_6__["MisViajesPage"]]
    })
], MisViajesPageModule);



/***/ }),

/***/ "iiDf":
/*!*********************************************************!*\
  !*** ./src/app/mis-viajes/mis-viajes-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MisViajesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisViajesPageRoutingModule", function() { return MisViajesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mis_viajes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mis-viajes.page */ "9mfj");




const routes = [
    {
        path: '',
        component: _mis_viajes_page__WEBPACK_IMPORTED_MODULE_3__["MisViajesPage"]
    }
];
let MisViajesPageRoutingModule = class MisViajesPageRoutingModule {
};
MisViajesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MisViajesPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=mis-viajes-mis-viajes-module-es2015.js.map