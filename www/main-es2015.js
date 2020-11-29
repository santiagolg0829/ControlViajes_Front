(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Qoh":
/*!************************************!*\
  !*** ./src/app/camiones/camion.ts ***!
  \************************************/
/*! exports provided: Camion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camion", function() { return Camion; });
class Camion {
    constructor() {
        this.id = 0;
        this.placa = "";
        this.remolque = "";
        this.esPropio = true;
        this.activo = true;
    }
}


/***/ }),

/***/ "+nHt":
/*!*********************************************!*\
  !*** ./src/app/services/put/put.service.ts ***!
  \*********************************************/
/*! exports provided: PutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutService", function() { return PutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");





let PutService = class PutService {
    //Constructor of the Service with Dependency Injection @param http The standard Angular HttpClient to make requests
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.apiKey = ''; // <-- Enter your own key here!
    }
    put(url, id, object) {
        let reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.put(this.baseUrl + url + "/" + id, object, { headers: reqHeader });
    }
};
PutService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
PutService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PutService);



/***/ }),

/***/ "+wKK":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalle-viaje/detalle-viaje.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <div class=\"modal-title\">\r\n        <span>Detalle del Viaje</span>\r\n        <ion-button fill=\"clear\" color=\"dark\" (click)=\"dismiss(null)\">\r\n          <ion-icon name=\"close-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <ion-item>\r\n    <ion-label>Fecha</ion-label>  \r\n    <ion-datetime placeholder=\"Fecha Programada\" displayFormat= \"YYYY/MM/DD h:mm A\" [(ngModel)]=\"fecha\" >\r\n    </ion-datetime>\r\n  </ion-item> \r\n\r\n  <ion-item>\r\n    <ion-label>Cliente</ion-label>\r\n    <ionic-selectable #portComponent [(ngModel)]=\"cliente\" [items]=\"clientes\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Clientes</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Placa</ion-label>\r\n    <ionic-selectable #portComponent [(ngModel)]=\"camion\" [items]=\"camiones\" itemValueField=\"id\" itemTextField=\"placa\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Camiones</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Conductor</ion-label>\r\n    <ionic-selectable #portComponent1 [(ngModel)]=\"conductor\" [items]=\"conductores\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Conductores</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent1.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Auxiliar</ion-label>\r\n    <ionic-selectable #portComponent2 [(ngModel)]=\"auxiliar\" [items]=\"auxiliares\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Auxiliares</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent2.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Origen</ion-label>\r\n    <ionic-selectable #portComponent3 [(ngModel)]=\"origen\" [items]=\"origenesDestinos\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Origen</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent3.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Destino</ion-label>\r\n    <ionic-selectable #portComponent4 [(ngModel)]=\"destino\" [items]=\"origenesDestinos\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Destino</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent4.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Valor Anticipo</ion-label>\r\n    <ion-input type=\"number\" [(ngModel)]=\"viaje.valorAnticipo\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Número Manifiesto</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"viaje.numeroManifiesto\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Número Cuenta</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"viaje.numeroCuenta\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-button (click)=\"acutalizarViaje()\" >{{ viaje.estado == \"Sin Iniciar\" ? \"Iniciar\" : \"Finalizar\" }}</ion-button>\r\n\r\n</ion-content>");

/***/ }),

/***/ "/NMw":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalle-usuario/detalle-usuario.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"modal-title\">\n        <span>Maestro Usuarios</span>\n        <ion-button fill=\"clear\" color=\"dark\" (click)=\"dismiss(null)\">\n          <ion-icon name=\"close-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item>\n    <ion-label>Cédula</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"usuario.cedula\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Nombre</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"usuario.nombre\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Correo Electrónico</ion-label>\n    <ion-input type=\"email\" [(ngModel)]=\"usuario.email\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Celular</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"usuario.celular\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Cliente</ion-label>\n    <ionic-selectable #portComponent [(ngModel)]=\"cliente\" [items]=\"clientes\" itemValueField=\"id\" itemTextField=\"nombre\"\n      [canSearch]=\"true\">\n      <ng-template ionicSelectableHeaderTemplate>\n        <ion-toolbar>\n          <ion-title>\n            <div class=\"modal-title\">\n              <span>Clientes</span>\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent.close()\">\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-title>\n        </ion-toolbar>\n      </ng-template>\n    </ionic-selectable>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Contraseña</ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"usuario.password\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Activo</ion-label>\n    <ion-checkbox [(ngModel)]=\"usuario.activo\"></ion-checkbox>\n  </ion-item>\n\n  <ion-title class=\"title-roles\">\n    <span>Roles</span>\n  </ion-title>\n\n  <ion-item *ngFor=\"let rol of usuario.roles; let i = index;\">\n    <ion-label>{{rol.nombre}}</ion-label>\n    <ion-checkbox [(ngModel)]=\"rol.seleccionado\"></ion-checkbox>\n  </ion-item>\n\n  <ion-button (click)=\"guardar()\">Guardar</ion-button>\n\n</ion-content>");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\slond\Desktop\Control Viajes\control-viajes\src\main.ts */"zUnb");


/***/ }),

/***/ "3hV3":
/*!****************************************************************!*\
  !*** ./src/app/detalle-usuario/detalle-usuario.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-title {\n  display: flex;\n  justify-content: space-between;\n}\n.modal-title span {\n  display: flex;\n  align-items: center;\n}\n.title-roles {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWxsZS11c3VhcmlvL2RldGFsbGUtdXN1YXJpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZGV0YWxsZS11c3VhcmlvL2RldGFsbGUtdXN1YXJpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC10aXRsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLnRpdGxlLXJvbGVze1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "AWUL":
/*!*************************************************************!*\
  !*** ./src/app/services/interceptor/interceptor.service.ts ***!
  \*************************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");






let InterceptorService = class InterceptorService {
    constructor(storage) {
        this.storage = storage;
    }
    intercept(request, next) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.storage.get("token"))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(token => {
            if (token) {
                request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
            }
            if (!request.headers.has('Content-Type')) {
                request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
            }
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                    // do nothing for now
                }
                return event;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
            }));
        }));
    }
};
InterceptorService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
InterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InterceptorService);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'http://34.121.0.44:8081/api/' //'http://localhost:60674/api/' 
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BEOd":
/*!*****************************************!*\
  !*** ./src/app/utils/genericService.ts ***!
  \*****************************************/
/*! exports provided: genericService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genericService", function() { return genericService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

class genericService {
    constructor(getService, postService, putService, toastCtrl, modalCtrl) {
        this.getService = getService;
        this.postService = postService;
        this.putService = putService;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.statuses = [
            { label: 'Activo', value: 'true' },
            { label: 'Inactivo', value: 'false' },
        ];
        this.cols = [
            { field: 'nombre', header: 'Nombre' },
            { field: 'activo', header: 'Estado' }
        ];
    }
    consumirGet(url) {
        return new Promise(resolve => {
            this.getService.get(url).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.success) {
                    console.log(result.message);
                    resolve(result.message);
                }
                else {
                    this.showModalError(result.message);
                }
            }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(error);
                this.showModalError('Error de conexión con el servidor.');
            }));
        });
    }
    consumirPost(url, model) {
        return new Promise(resolve => {
            this.postService.post(url, model).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const toast = yield this.toastCtrl.create({
                    message: result.message,
                    position: "middle",
                    duration: result.success ? 3000 : 0,
                    color: result.success ? "success" : "danger",
                    buttons: result.success ? [] : [{
                            text: 'Aceptar',
                            role: 'cancel'
                        }
                    ]
                });
                toast.present();
                if (result.success) {
                    resolve(result.message);
                    this.modalCtrl.dismiss(result);
                }
            }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.showModalError(error);
            }));
        });
    }
    showModalError(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                position: "middle",
                color: "danger",
                buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                    }
                ]
            });
            toast.present();
            console.log(message);
        });
    }
}


/***/ }),

/***/ "BQIx":
/*!*********************************************!*\
  !*** ./src/app/services/get/get.service.ts ***!
  \*********************************************/
/*! exports provided: GetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetService", function() { return GetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");





let GetService = class GetService {
    //Constructor of the Service with Dependency Injection @param http The standard Angular HttpClient to make requests
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.apiKey = ''; // <-- Enter your own key here!
    }
    get(url, id) {
        let reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.get(this.baseUrl + url + "/" + (id == null ? "" : id), { headers: reqHeader });
    }
};
GetService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
GetService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GetService);



/***/ }),

/***/ "BgVr":
/*!**********************************************************!*\
  !*** ./src/app/detalle-sede/detalle-sede.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-title {\n  display: flex;\n  justify-content: space-between;\n}\n.modal-title span {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWxsZS1zZWRlL2RldGFsbGUtc2VkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL2RldGFsbGUtc2VkZS9kZXRhbGxlLXNlZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtdGl0bGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgc3BhbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "Bj70":
/*!****************************************************!*\
  !*** ./src/app/user-menu/user-menu.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab {\n  top: 0;\n  display: flex;\n  justify-content: flex-end;\n  height: -webkit-fill-available;\n  align-items: center;\n}\nion-fab ion-fab-button {\n  --border-radius: 0;\n  width: 250px;\n  white-space: pre-wrap !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tZW51L3VzZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE1BQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBRVIiLCJmaWxlIjoic3JjL2FwcC91c2VyLW1lbnUvdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYntcclxuICAgIHRvcDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGlvbi1mYWItYnV0dG9ue1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "BsNa":
/*!*************************************!*\
  !*** ./src/app/clientes/cliente.ts ***!
  \*************************************/
/*! exports provided: Cliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
class Cliente {
    constructor() {
        this.id = 0;
        this.nombre = "";
        this.lstSedes = [];
        this.activo = true;
    }
}


/***/ }),

/***/ "C0Sw":
/*!************************************************************!*\
  !*** ./src/app/detalle-camion/detalle-camion.component.ts ***!
  \************************************************************/
/*! exports provided: DetalleCamionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleCamionComponent", function() { return DetalleCamionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalle_camion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalle-camion.component.html */ "a+fg");
/* harmony import */ var _detalle_camion_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle-camion.component.scss */ "VD11");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _camiones_camion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../camiones/camion */ "+Qoh");
/* harmony import */ var _services_get_get_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/get/get.service */ "BQIx");
/* harmony import */ var _services_post_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/post/post.service */ "ova0");
/* harmony import */ var _services_put_put_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/put/put.service */ "+nHt");









let DetalleCamionComponent = class DetalleCamionComponent {
    constructor(getService, postService, putService, toastCtrl, modalCtrl) {
        this.getService = getService;
        this.postService = postService;
        this.putService = putService;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.url = "camiones";
        this.camion = new _camiones_camion__WEBPACK_IMPORTED_MODULE_5__["Camion"]();
    }
    ngOnInit() {
        if (this.id != null) {
            this.getService.get(this.url, this.id).subscribe(result => {
                if (result.success) {
                    this.camion = result.message;
                }
            });
        }
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.id != null) {
                this.actualizarCamion();
            }
            else {
                this.crearCamion();
            }
        });
    }
    crearCamion() {
        this.postService.post(this.url, this.camion).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: result.message,
                position: "middle",
                duration: result.success ? 3000 : 0,
                color: result.success ? "success" : "danger",
                buttons: result.success ? [] : [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
            if (result.success) {
                this.dismiss(result);
            }
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: error,
                position: "middle",
                color: "danger",
                buttons: [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
        }));
    }
    actualizarCamion() {
        this.putService.put(this.url, this.id, this.camion).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: result.message,
                position: "middle",
                duration: result.success ? 3000 : 0,
                color: result.success ? "success" : "danger",
                buttons: result.success ? [] : [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
            if (result.success) {
                this.dismiss(result);
            }
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: error,
                position: "middle",
                color: "danger",
                buttons: [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
        }));
    }
    dismiss(result) {
        this.modalCtrl.dismiss(result);
    }
};
DetalleCamionComponent.ctorParameters = () => [
    { type: _services_get_get_service__WEBPACK_IMPORTED_MODULE_6__["GetService"] },
    { type: _services_post_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"] },
    { type: _services_put_put_service__WEBPACK_IMPORTED_MODULE_8__["PutService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
DetalleCamionComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DetalleCamionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-camion',
        template: _raw_loader_detalle_camion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_camion_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetalleCamionComponent);



/***/ }),

/***/ "EPGA":
/*!****************************************************************!*\
  !*** ./src/app/cambiar-password/cambiar-password.component.ts ***!
  \****************************************************************/
/*! exports provided: CambiarPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CambiarPasswordComponent", function() { return CambiarPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cambiar_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cambiar-password.component.html */ "GN9r");
/* harmony import */ var _cambiar_password_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cambiar-password.component.scss */ "Q/jM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_post_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/post/post.service */ "ova0");






let CambiarPasswordComponent = class CambiarPasswordComponent {
    constructor(toastCtrl, modalCtrl, postService) {
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.postService = postService;
        this.url = "Account/ChangePassword";
        this.confirmPassword = "";
        this.newPassword = "";
        this.oldPassword = "";
    }
    ngOnInit() { }
    guardar() {
        let object = {
            "oldPassword": this.oldPassword,
            "newPassword": this.newPassword,
            "confirmPassword": this.confirmPassword
        };
        this.postService.post(this.url, object).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: result.message,
                position: "middle",
                duration: result.success ? 3000 : 0,
                color: result.success ? "success" : "danger",
                buttons: result.success ? [] : [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
            if (result.success) {
                this.dismiss(result);
            }
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: error,
                position: "middle",
                color: "danger",
                buttons: [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
        }));
    }
    dismiss(result) {
        this.modalCtrl.dismiss(result);
    }
};
CambiarPasswordComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_post_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] }
];
CambiarPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cambiar-password',
        template: _raw_loader_cambiar_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cambiar_password_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CambiarPasswordComponent);



/***/ }),

/***/ "El4w":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalle-cliente/detalle-cliente.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"modal-title\">\n        <span>Maestro Clientes</span>\n        <ion-button fill=\"clear\" color=\"dark\" (click)=\"dismiss(null)\">\n          <ion-icon name=\"close-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item>\n    <ion-label>Nombre</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"cliente.nombre\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Activo</ion-label>\n    <ion-checkbox [(ngModel)]=\"cliente.activo\"></ion-checkbox>\n  </ion-item>\n\n  <p-button label=\"Agregar Sede\" icon=\"pi pi-plus\" iconPos=\"left\" class=\"primary-button agregar-sede-button\"\n    (click)=\"agregarSede()\"></p-button>\n\n  <p-table #dt [value]=\"cliente.lstSedes\" styleClass=\"p-datatable-striped p-datatable-responsive-demo\"\n    [paginator]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\"\n    currentPageReportTemplate=\"Mostrando {first} a {last} de {totalRecords} registros\"\n    [rowsPerPageOptions]=\"[10,25,50]\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th pSortableColumn=\"nombre\">Nombre <p-sortIcon field=\"nombre\"></p-sortIcon>\n        </th>\n        <th pSortableColumn=\"direccion\">Dirección <p-sortIcon field=\"direccion\"></p-sortIcon>\n        </th>\n        <th pSortableColumn=\"activo\">Estado <p-sortIcon field=\"activo\"></p-sortIcon>\n        </th>\n        <th rowspan=\"2\" class=\"action-column\">Acciones</th>\n      </tr>\n      <tr>\n        <th>\n          <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'nombre', 'contains')\"\n            placeholder=\"Buscar por Nombre\" class=\"p-column-filter\">\n        </th>\n        <th>\n          <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'direccion', 'contains')\"\n            placeholder=\"Buscar por Dirección\" class=\"p-column-filter\">\n        </th>\n        <th>\n          <p-dropdown [options]=\"statuses\" (onChange)=\"dt.filter($event.value, 'activo', 'equals')\"\n            styleClass=\"p-column-filter\" placeholder=\"Buscar por Estado\" [showClear]=\"true\">\n            <ng-template let-option pTemplate=\"item\">\n              <span>{{option.label}}</span>\n            </ng-template>\n          </p-dropdown>\n        </th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-sede>\n      <tr>\n        <td pEditableColumn>\n          <p-cellEditor>\n            <ng-template pTemplate=\"input\">\n              <input pInputText type=\"text\" [(ngModel)]=\"sede.nombre\" placeholder=\"Nombre\">\n            </ng-template>\n            <ng-template pTemplate=\"output\">\n              <input pInputText type=\"text\" placeholder=\"Nombre\" value=\"{{sede.nombre}}\">\n            </ng-template>\n          </p-cellEditor>\n        </td>\n        <td pEditableColumn>\n          <p-cellEditor>\n            <ng-template pTemplate=\"input\">\n              <input pInputText type=\"text\" [(ngModel)]=\"sede.direccion\" placeholder=\"Dirección\">\n            </ng-template>\n            <ng-template pTemplate=\"output\">\n              <input pInputText type=\"text\" placeholder=\"Dirección\" value=\"{{sede.direccion}}\">\n            </ng-template>\n          </p-cellEditor>\n        </td>\n        <td pEditableColumn>\n          <p-cellEditor>\n            <ng-template pTemplate=\"input\">\n              <p-dropdown [options]=\"statuses\" [(ngModel)]=\"sede.activo\" [style]=\"{'width':'100%'}\">\n              </p-dropdown>\n            </ng-template>\n            <ng-template pTemplate=\"output\">\n              <input pInputText type=\"text\" placeholder=\"Estado\"\n                value=\"{{sede.activo == true ? 'Activo' : 'Inactivo'}}\">\n            </ng-template>\n          </p-cellEditor>\n        </td>\n        <td class=\"action-column\">\n          <p-button label=\"Eliminar\" icon=\"pi pi-times\" iconPos=\"left\" (click)=\"eliminarSede(sede)\" class=\"primary-button\"></p-button>\n        </td>\n      </tr>\n    </ng-template>\n  </p-table>\n\n\n  <ion-button (click)=\"guardar()\">Guardar</ion-button>\n\n</ion-content>");

/***/ }),

/***/ "FQWS":
/*!**************************************************************!*\
  !*** ./src/app/detalle-cliente/detalle-cliente.component.ts ***!
  \**************************************************************/
/*! exports provided: DetalleClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleClienteComponent", function() { return DetalleClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalle_cliente_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalle-cliente.component.html */ "El4w");
/* harmony import */ var _detalle_cliente_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle-cliente.component.scss */ "u7ZW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _clientes_cliente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../clientes/cliente */ "BsNa");
/* harmony import */ var _sedes_sede__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sedes/sede */ "ypJn");
/* harmony import */ var _services_get_get_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/get/get.service */ "BQIx");
/* harmony import */ var _services_post_post_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/post/post.service */ "ova0");
/* harmony import */ var _services_put_put_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/put/put.service */ "+nHt");










let DetalleClienteComponent = class DetalleClienteComponent {
    constructor(getService, postService, putService, toastCtrl, modalCtrl) {
        this.getService = getService;
        this.postService = postService;
        this.putService = putService;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.url = "clientes";
        this.cliente = new _clientes_cliente__WEBPACK_IMPORTED_MODULE_5__["Cliente"]();
    }
    ngOnInit() {
        if (this.id != null) {
            this.getService.get(this.url, this.id).subscribe(result => {
                if (result.success) {
                    this.cliente = result.message;
                }
            });
        }
        this.statuses = [
            { label: 'Activo', value: true },
            { label: 'Inactivo', value: false },
        ];
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.id != null) {
                this.actualizarCliente();
            }
            else {
                this.crearCliente();
            }
        });
    }
    crearCliente() {
        this.postService.post(this.url, this.cliente).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: result.message,
                position: "middle",
                duration: result.success ? 3000 : 0,
                color: result.success ? "success" : "danger",
                buttons: result.success ? [] : [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
            if (result.success) {
                this.dismiss(result);
            }
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: error,
                position: "middle",
                color: "danger",
                buttons: [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
        }));
    }
    actualizarCliente() {
        this.putService.put(this.url, this.id, this.cliente).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: result.message,
                position: "middle",
                duration: result.success ? 3000 : 0,
                color: result.success ? "success" : "danger",
                buttons: result.success ? [] : [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
            if (result.success) {
                this.dismiss(result);
            }
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: error,
                position: "middle",
                color: "danger",
                buttons: [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
        }));
    }
    dismiss(result) {
        this.modalCtrl.dismiss(result);
    }
    eliminarSede(sede) {
        this.cliente.lstSedes = this.cliente.lstSedes.filter(val => val !== sede);
    }
    agregarSede() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cliente.lstSedes.push(new _sedes_sede__WEBPACK_IMPORTED_MODULE_6__["Sede"]());
        });
    }
};
DetalleClienteComponent.ctorParameters = () => [
    { type: _services_get_get_service__WEBPACK_IMPORTED_MODULE_7__["GetService"] },
    { type: _services_post_post_service__WEBPACK_IMPORTED_MODULE_8__["PostService"] },
    { type: _services_put_put_service__WEBPACK_IMPORTED_MODULE_9__["PutService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
DetalleClienteComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DetalleClienteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-cliente',
        template: _raw_loader_detalle_cliente_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_cliente_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetalleClienteComponent);



/***/ }),

/***/ "G7hY":
/*!**********************************************!*\
  !*** ./src/app/programacion-viajes/viaje.ts ***!
  \**********************************************/
/*! exports provided: Viaje */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viaje", function() { return Viaje; });
class Viaje {
    constructor() {
        this.id = 0;
    }
}


/***/ }),

/***/ "GN9r":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cambiar-password/cambiar-password.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"modal-title\">\n        <span>Maestro Camiones</span>\n        <ion-button fill=\"clear\" color=\"dark\" (click)=\"dismiss(null)\">\n          <ion-icon name=\"close-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item>\n    <ion-label>Contraseña Actual</ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"oldPassword\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Contraseña Nueva</ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"newPassword\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Confirmar Contraseña</ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"confirmPassword\"></ion-input>\n  </ion-item>\n\n  <ion-button class=\"primary-button\" (click)=\"guardar()\">Guardar</ion-button>\n\n</ion-content>");

/***/ }),

/***/ "ItV+":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalle-sede/detalle-sede.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"modal-title\">\n        <span>Maestro Sedes</span>\n        <ion-button fill=\"clear\" color=\"dark\" (click)=\"dismiss(null)\">\n          <ion-icon name=\"close-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item>\n    <ion-label>Nombre</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"sede.nombre\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Dirección</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"sede.direccion\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Activo</ion-label>\n    <ion-checkbox [(ngModel)]=\"sede.activo\"></ion-checkbox>\n  </ion-item>\n\n  <ion-button (click)=\"guardar()\">Guardar</ion-button>\n\n</ion-content>");

/***/ }),

/***/ "KZsV":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-menu/user-menu.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" edge>\n  <ion-fab-button fill=\"clear\">{{nombre}}\n    <ion-icon name=\"person\"></ion-icon>\n  </ion-fab-button>\n  <ion-fab-list side=\"bottom\">\n\n    <ion-fab-button (click)=\"mostrarModal()\" class=\"primary-button\">\n      <ion-label>Cambiar Contraseña</ion-label>\n      <ion-icon name=\"lock-closed\"></ion-icon>\n    </ion-fab-button>\n\n    <ion-fab-button (click)=\"logout()\" class=\"primary-button\">\n      <ion-label>Cerrar Sesión</ion-label>\n      <ion-icon name=\"log-out\"></ion-icon>\n    </ion-fab-button>\n\n  </ion-fab-list>\n</ion-fab>");

/***/ }),

/***/ "Kuc9":
/*!**************************************************************!*\
  !*** ./src/app/detalle-usuario/detalle-usuario.component.ts ***!
  \**************************************************************/
/*! exports provided: DetalleUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleUsuarioComponent", function() { return DetalleUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalle_usuario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalle-usuario.component.html */ "/NMw");
/* harmony import */ var _detalle_usuario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle-usuario.component.scss */ "3hV3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _clientes_cliente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../clientes/cliente */ "BsNa");
/* harmony import */ var _services_get_get_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/get/get.service */ "BQIx");
/* harmony import */ var _services_post_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/post/post.service */ "ova0");
/* harmony import */ var _services_put_put_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/put/put.service */ "+nHt");
/* harmony import */ var _usuarios_usuario__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../usuarios/usuario */ "YxHF");










let DetalleUsuarioComponent = class DetalleUsuarioComponent {
    constructor(getService, postService, putService, toastCtrl, modalCtrl) {
        this.getService = getService;
        this.postService = postService;
        this.putService = putService;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.urlObtencion = "account/users";
        this.urlCreacion = "account/create";
        this.urlEdicion = "account/editUser";
        this.urlClientes = "clientes";
        this.usuario = new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_9__["Usuario"]();
        this.cliente = new _clientes_cliente__WEBPACK_IMPORTED_MODULE_5__["Cliente"]();
        this.clientes = [];
    }
    ngOnInit() {
        this.obtenerClientes();
        if (this.id != null) {
            this.getService.get(this.urlObtencion, this.id).subscribe(result => {
                if (result.success) {
                    this.usuario = result.message;
                    this.cliente = this.clientes.find(val => val.id !== this.usuario.idCliente);
                }
            });
        }
    }
    obtenerClientes() {
        this.getService.get(this.urlClientes).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                this.clientes = result.message;
            }
            else {
                this.showModalError(result.message);
            }
        }));
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.usuario.idCliente = this.cliente.id;
            if (this.id != null) {
                this.actualizarUsuario();
            }
            else {
                this.crearUsuario();
            }
        });
    }
    crearUsuario() {
        this.postService.post(this.urlCreacion, this.usuario).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: result.message,
                position: "middle",
                duration: result.success ? 3000 : 0,
                color: result.success ? "success" : "danger",
                buttons: result.success ? [] : [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
            if (result.success) {
                this.dismiss(result);
            }
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: error,
                position: "middle",
                color: "danger",
                buttons: [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
        }));
    }
    actualizarUsuario() {
        this.putService.put(this.urlEdicion, this.id, this.usuario).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: result.message,
                position: "middle",
                duration: result.success ? 3000 : 0,
                color: result.success ? "success" : "danger",
                buttons: result.success ? [] : [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
            if (result.success) {
                this.dismiss(result);
            }
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: error,
                position: "middle",
                color: "danger",
                buttons: [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
        }));
    }
    showModalError(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                position: "middle",
                color: "danger",
                buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                    }
                ]
            });
            toast.present();
            console.log(message);
        });
    }
    dismiss(result) {
        this.modalCtrl.dismiss(result);
    }
};
DetalleUsuarioComponent.ctorParameters = () => [
    { type: _services_get_get_service__WEBPACK_IMPORTED_MODULE_6__["GetService"] },
    { type: _services_post_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"] },
    { type: _services_put_put_service__WEBPACK_IMPORTED_MODULE_8__["PutService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
DetalleUsuarioComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DetalleUsuarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-usuario',
        template: _raw_loader_detalle_usuario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_usuario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetalleUsuarioComponent);



/***/ }),

/***/ "Q/jM":
/*!******************************************************************!*\
  !*** ./src/app/cambiar-password/cambiar-password.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-title {\n  display: flex;\n  justify-content: space-between;\n}\n.modal-title span {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtYmlhci1wYXNzd29yZC9jYW1iaWFyLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvY2FtYmlhci1wYXNzd29yZC9jYW1iaWFyLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLXRpdGxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHNwYW57XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "RyMC":
/*!**************************************************!*\
  !*** ./src/app/user-menu/user-menu.component.ts ***!
  \**************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-menu.component.html */ "KZsV");
/* harmony import */ var _user_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-menu.component.scss */ "Bj70");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _cambiar_password_cambiar_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cambiar-password/cambiar-password.component */ "EPGA");








let UserMenuComponent = class UserMenuComponent {
    constructor(storage, router, toastCtrl, modalCtrl) {
        this.storage = storage;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        this.storage.get("nombre").then((val) => {
            this.nombre = val;
        });
    }
    logout() {
        this.storage.clear();
        this.router.navigate(['/login']);
    }
    mostrarModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _cambiar_password_cambiar_password_component__WEBPACK_IMPORTED_MODULE_7__["CambiarPasswordComponent"],
                backdropDismiss: false
            });
            modal.present();
            yield modal.onWillDismiss().then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.data != null && result.data.success) {
                    const toast = yield this.toastCtrl.create({
                        message: result.data.message,
                        position: "middle",
                        duration: result.data.success ? 3000 : 0,
                        color: result.data.success ? "success" : "danger",
                        buttons: result.data.success ? [] : [{
                                text: 'Aceptar',
                                role: 'cancel'
                            }
                        ]
                    });
                    toast.present();
                }
            }));
        });
    }
};
UserMenuComponent.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
UserMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-menu',
        template: _raw_loader_user_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserMenuComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "E9qw");








let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, menu, firebase) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.menu = menu;
        this.firebase = firebase;
        this.appPages = [
            {
                title: 'Camiones',
                url: '/camiones',
                icon: 'car'
            },
            {
                title: 'Clientes',
                url: '/clientes',
                icon: 'people'
            },
            {
                title: 'Usuarios',
                url: '/usuarios',
                icon: 'people-circle-outline'
            },
            {
                title: 'Programación Viajes',
                url: '/programacion-viajes',
                icon: 'alarm-outline'
            },
            {
                title: 'Mis Viajes',
                url: '/mis-viajes',
                icon: 'earth-outline'
            }
        ];
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.firebase.getToken().then(token => console.log(`The token is ${token}`));
            this.firebase.onMessageReceived().subscribe(data => console.log(`FCM message: ${data}`));
        });
    }
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    openEnd() {
        this.menu.open('end');
    }
    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_7__["FirebaseX"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VD11":
/*!**************************************************************!*\
  !*** ./src/app/detalle-camion/detalle-camion.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-title {\n  display: flex;\n  justify-content: space-between;\n}\n.modal-title span {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWxsZS1jYW1pb24vZGV0YWxsZS1jYW1pb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRVIiLCJmaWxlIjoic3JjL2FwcC9kZXRhbGxlLWNhbWlvbi9kZXRhbGxlLWNhbWlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC10aXRsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-menu>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <img src=\"../assets/logo-imd.png\" alt=\"logo\">\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\r\n          <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\r\n            <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n            <ion-label>\r\n              {{p.title}}\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n\r\n  <ion-router-outlet main></ion-router-outlet>\r\n</ion-app>");

/***/ }),

/***/ "YiQq":
/*!**********************************************************!*\
  !*** ./src/app/detalle-viaje/detalle-viaje.component.ts ***!
  \**********************************************************/
/*! exports provided: DetalleViajeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleViajeComponent", function() { return DetalleViajeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalle_viaje_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalle-viaje.component.html */ "+wKK");
/* harmony import */ var _detalle_viaje_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle-viaje.component.scss */ "dPRX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _camiones_camion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../camiones/camion */ "+Qoh");
/* harmony import */ var _clientes_cliente__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../clientes/cliente */ "BsNa");
/* harmony import */ var _programacion_viajes_viaje__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../programacion-viajes/viaje */ "G7hY");
/* harmony import */ var _sedes_sede__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sedes/sede */ "ypJn");
/* harmony import */ var _services_get_get_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/get/get.service */ "BQIx");
/* harmony import */ var _services_post_post_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/post/post.service */ "ova0");
/* harmony import */ var _services_put_put_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/put/put.service */ "+nHt");
/* harmony import */ var _usuarios_usuario__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../usuarios/usuario */ "YxHF");
/* harmony import */ var _utils_genericService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/genericService */ "BEOd");














let DetalleViajeComponent = class DetalleViajeComponent extends _utils_genericService__WEBPACK_IMPORTED_MODULE_13__["genericService"] {
    constructor(getService, postService, putService, toastCtrl, modalCtrl) {
        super(getService, postService, putService, toastCtrl, modalCtrl);
        this.getService = getService;
        this.postService = postService;
        this.putService = putService;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.url = "viajes";
        this.urlClientes = "clientes";
        this.urlCamiones = "camiones";
        this.urlConductores = "account/listarPorRol/conductor";
        this.urlAuxiliares = "account/listarPorRol/auxiliar";
        this.urlOrigenDestinoCliente = "sedes/PorCliente/";
        this.viaje = new _programacion_viajes_viaje__WEBPACK_IMPORTED_MODULE_7__["Viaje"]();
        this.cliente = new _clientes_cliente__WEBPACK_IMPORTED_MODULE_6__["Cliente"]();
        this.camion = new _camiones_camion__WEBPACK_IMPORTED_MODULE_5__["Camion"]();
        this.conductor = new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_12__["Usuario"]();
        this.auxiliar = new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_12__["Usuario"]();
        this.origen = new _sedes_sede__WEBPACK_IMPORTED_MODULE_8__["Sede"]();
        this.destino = new _sedes_sede__WEBPACK_IMPORTED_MODULE_8__["Sede"]();
    }
    ngOnInit() {
        if (this.id != null) {
            super.consumirGet(this.url + "/" + this.id).then((data) => {
                this.viaje = data;
                this.cliente = data.cliente;
                this.camion = data.camion;
                this.conductor = data.conductor;
                this.auxiliar = data.auxiliar;
                this.origen = data.sedeOrigen;
                this.destino = data.sedeDestino;
                this.fecha = data.fecha;
                this.destino.nombre = data.sedeOrigen.direccion;
                this.habilidato = this.viaje.estado === "Finalizado" ? true : false;
            });
        }
    }
    acutalizarViaje() {
        const _super = Object.create(null, {
            consumirPost: { get: () => super.consumirPost }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.viaje.inicioRuta === null || this.viaje.finRuta === null) {
                _super.consumirPost.call(this, this.url + "/actualizarEstado", this.viaje).then((data) => { });
            }
            else {
                //super.consumirPost(this.url + "/actualizarEstado",this.viaje).then((data:any)=>{});  
            }
        });
    }
    crearviaje() {
        this.viaje.idCliente = this.cliente.id;
        this.viaje.idOrigen = this.origen.id;
        this.viaje.idDestino = this.destino.id;
        this.viaje.idCamion = this.camion.id;
        this.viaje.idConductor = this.conductor.id;
        this.viaje.idAuxiliar = this.auxiliar == null ? null : this.auxiliar.id;
        this.viaje.fecha = this.fecha;
        console.log(this.viaje);
        this.postService.post(this.url, this.viaje).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: result.message,
                position: "middle",
                duration: result.success ? 3000 : 0,
                color: result.success ? "success" : "danger",
                buttons: result.success ? [] : [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
            if (result.success) {
                this.dismiss(result);
            }
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showModalError(error);
        }));
    }
    dismiss(result) {
        this.modalCtrl.dismiss(result);
    }
    showModalError(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                position: "middle",
                color: "danger",
                buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                    }
                ]
            });
            toast.present();
            console.log(message);
        });
    }
};
DetalleViajeComponent.ctorParameters = () => [
    { type: _services_get_get_service__WEBPACK_IMPORTED_MODULE_9__["GetService"] },
    { type: _services_post_post_service__WEBPACK_IMPORTED_MODULE_10__["PostService"] },
    { type: _services_put_put_service__WEBPACK_IMPORTED_MODULE_11__["PutService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
DetalleViajeComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DetalleViajeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-viaje',
        template: _raw_loader_detalle_viaje_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_viaje_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetalleViajeComponent);



/***/ }),

/***/ "YxHF":
/*!*************************************!*\
  !*** ./src/app/usuarios/usuario.ts ***!
  \*************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
class Usuario {
    constructor() {
        this.cedula = "";
        this.password = "";
        this.nombre = "";
        this.email = "";
        this.celular = "";
        this.idCliente = 0;
        this.nombreCliente = "";
        this.roles = [
            {
                "nombre": "Administrador",
                "seleccionado": false
            },
            {
                "nombre": "Auxiliar",
                "seleccionado": false
            },
            {
                "nombre": "Cliente",
                "seleccionado": false
            },
            {
                "nombre": "Conductor",
                "seleccionado": false
            }
        ];
        this.activo = true;
    }
}


/***/ }),

/***/ "Yz+H":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalle-programacion-viajes/detalle-programacion-viajes.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <div class=\"modal-title\">\r\n        <span>Maestro Viajes</span>\r\n        <ion-button fill=\"clear\" color=\"dark\" (click)=\"dismiss(null)\">\r\n          <ion-icon name=\"close-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <ion-item>\r\n    <ion-label>Fecha</ion-label>  \r\n    <ion-datetime placeholder=\"Fecha Programada\" displayFormat= \"YYYY/MM/DD h:mm A\" [(ngModel)]=\"fecha\" >\r\n    </ion-datetime>\r\n  </ion-item> \r\n\r\n  <ion-item>\r\n    <ion-label>Cliente</ion-label>\r\n    <ionic-selectable #portComponent [(ngModel)]=\"cliente\" [items]=\"clientes\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\" (onChange)=\"obtenerOrigenesDestinos()\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Clientes</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Placa</ion-label>\r\n    <ionic-selectable #portComponent [(ngModel)]=\"camion\" [items]=\"camiones\" itemValueField=\"id\" itemTextField=\"placa\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Camiones</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Conductor</ion-label>\r\n    <ionic-selectable #portComponent1 [(ngModel)]=\"conductor\" [items]=\"conductores\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Conductores</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent1.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Auxiliar</ion-label>\r\n    <ionic-selectable #portComponent2 [(ngModel)]=\"auxiliar\" [items]=\"auxiliares\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Auxiliares</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent2.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Origen</ion-label>\r\n    <ionic-selectable #portComponent3 [(ngModel)]=\"origen\" [items]=\"origenesDestinos\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Origen</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent3.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Destino</ion-label>\r\n    <ionic-selectable #portComponent4 [(ngModel)]=\"destino\" [items]=\"origenesDestinos\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Destino</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent4.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Valor Anticipo</ion-label>\r\n    <ion-input type=\"number\" [(ngModel)]=\"viaje.valorAnticipo\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Número Manifiesto</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"viaje.numeroManifiesto\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Número Cuenta</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"viaje.numeroCuenta\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-button (click)=\"guardar()\">Guardar</ion-button>\r\n\r\n</ion-content>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _detalle_camion_detalle_camion_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./detalle-camion/detalle-camion.component */ "C0Sw");
/* harmony import */ var _services_interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/interceptor/interceptor.service */ "AWUL");
/* harmony import */ var _detalle_sede_detalle_sede_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./detalle-sede/detalle-sede.component */ "nJQ0");
/* harmony import */ var _detalle_cliente_detalle_cliente_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./detalle-cliente/detalle-cliente.component */ "FQWS");
/* harmony import */ var _detalle_usuario_detalle_usuario_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./detalle-usuario/detalle-usuario.component */ "Kuc9");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ionic-selectable */ "8xsl");
/* harmony import */ var _cambiar_password_cambiar_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cambiar-password/cambiar-password.component */ "EPGA");
/* harmony import */ var _user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user-menu/user-menu.module */ "m/q5");
/* harmony import */ var _detalle_programacion_viajes_detalle_programacion_viajes_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./detalle-programacion-viajes/detalle-programacion-viajes.component */ "snxx");
/* harmony import */ var _detalle_viaje_detalle_viaje_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./detalle-viaje/detalle-viaje.component */ "YiQq");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "E9qw");





























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _detalle_camion_detalle_camion_component__WEBPACK_IMPORTED_MODULE_15__["DetalleCamionComponent"],
            _detalle_sede_detalle_sede_component__WEBPACK_IMPORTED_MODULE_17__["DetalleSedeComponent"],
            _detalle_cliente_detalle_cliente_component__WEBPACK_IMPORTED_MODULE_18__["DetalleClienteComponent"],
            _detalle_usuario_detalle_usuario_component__WEBPACK_IMPORTED_MODULE_19__["DetalleUsuarioComponent"],
            _cambiar_password_cambiar_password_component__WEBPACK_IMPORTED_MODULE_24__["CambiarPasswordComponent"],
            _detalle_programacion_viajes_detalle_programacion_viajes_component__WEBPACK_IMPORTED_MODULE_26__["DetalleProgramacionViajesComponent"],
            _detalle_viaje_detalle_viaje_component__WEBPACK_IMPORTED_MODULE_27__["DetalleViajeComponent"]
        ],
        entryComponents: [
            _detalle_camion_detalle_camion_component__WEBPACK_IMPORTED_MODULE_15__["DetalleCamionComponent"],
            _detalle_sede_detalle_sede_component__WEBPACK_IMPORTED_MODULE_17__["DetalleSedeComponent"],
            _detalle_cliente_detalle_cliente_component__WEBPACK_IMPORTED_MODULE_18__["DetalleClienteComponent"],
            _detalle_usuario_detalle_usuario_component__WEBPACK_IMPORTED_MODULE_19__["DetalleUsuarioComponent"],
            _cambiar_password_cambiar_password_component__WEBPACK_IMPORTED_MODULE_24__["CambiarPasswordComponent"],
            _detalle_programacion_viajes_detalle_programacion_viajes_component__WEBPACK_IMPORTED_MODULE_26__["DetalleProgramacionViajesComponent"],
            _detalle_viaje_detalle_viaje_component__WEBPACK_IMPORTED_MODULE_27__["DetalleViajeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(),
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["IonicStorageModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_22__["TableModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_20__["ButtonModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_23__["IonicSelectableModule"],
            _user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_25__["UserMenuComponentModule"]
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__["SplashScreen"],
            _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_28__["FirebaseX"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _services_interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["InterceptorService"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZTFi":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 100%;\n}\n.login-container form {\n  max-width: 400px;\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n}\n.full-content {\n  width: 100%;\n  height: 100%;\n}\n.shadow-container {\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);\n  padding: 15px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQ1I7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQUo7QUFHQTtFQUdJLCtDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBmb3Jte1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mdWxsLWNvbnRlbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNoYWRvdy1jb250YWluZXJ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "a+fg":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalle-camion/detalle-camion.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"modal-title\">\n        <span>Maestro Camiones</span>\n        <ion-button fill=\"clear\" color=\"dark\" (click)=\"dismiss(null)\">\n          <ion-icon name=\"close-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item>\n    <ion-label>Placa</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"camion.placa\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Remolque</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"camion.remolque\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Camion Propio</ion-label>\n    <ion-checkbox [(ngModel)]=\"camion.esPropio\"></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Activo</ion-label>\n    <ion-checkbox [(ngModel)]=\"camion.activo\"></ion-checkbox>\n  </ion-item>\n\n  <ion-button class=\"primary-button\" (click)=\"guardar()\">Guardar</ion-button>\n\n</ion-content>");

/***/ }),

/***/ "dPRX":
/*!************************************************************!*\
  !*** ./src/app/detalle-viaje/detalle-viaje.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-title {\n  display: flex;\n  justify-content: space-between;\n}\n.modal-title span {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWxsZS12aWFqZS9kZXRhbGxlLXZpYWplLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvZGV0YWxsZS12aWFqZS9kZXRhbGxlLXZpYWplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLXRpdGxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHNwYW57XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\r\n  <div class=\"full-content\">\r\n    <div class=\"login-container\">\r\n      <div class=\"shadow-container\">\r\n        <img src=\"../../assets/logo-imd.png\" alt=\"logo\">\r\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Documento/Correo Electrónico</ion-label>\r\n            <ion-input id=\"email\" type=\"text\" formControlName=\"email\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Contraseña</ion-label>\r\n            <ion-input id=\"password\" type=\"password\" formControlName=\"password\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-button type=\"submit\">Ingresar</ion-button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lIPT":
/*!****************************************************************************************!*\
  !*** ./src/app/detalle-programacion-viajes/detalle-programacion-viajes.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-title {\n  display: flex;\n  justify-content: space-between;\n}\n.modal-title span {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWxsZS1wcm9ncmFtYWNpb24tdmlhamVzL2RldGFsbGUtcHJvZ3JhbWFjaW9uLXZpYWplcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL2RldGFsbGUtcHJvZ3JhbWFjaW9uLXZpYWplcy9kZXRhbGxlLXByb2dyYW1hY2lvbi12aWFqZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtdGl0bGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgc3BhbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "m/q5":
/*!***********************************************!*\
  !*** ./src/app/user-menu/user-menu.module.ts ***!
  \***********************************************/
/*! exports provided: UserMenuComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponentModule", function() { return UserMenuComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _user_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-menu.component */ "RyMC");





let UserMenuComponentModule = class UserMenuComponentModule {
};
UserMenuComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"].forRoot(),
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["IonicStorageModule"]
        ],
        exports: [_user_menu_component__WEBPACK_IMPORTED_MODULE_4__["UserMenuComponent"]],
        declarations: [_user_menu_component__WEBPACK_IMPORTED_MODULE_4__["UserMenuComponent"]]
    })
], UserMenuComponentModule);



/***/ }),

/***/ "nJQ0":
/*!********************************************************!*\
  !*** ./src/app/detalle-sede/detalle-sede.component.ts ***!
  \********************************************************/
/*! exports provided: DetalleSedeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleSedeComponent", function() { return DetalleSedeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalle_sede_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalle-sede.component.html */ "ItV+");
/* harmony import */ var _detalle_sede_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle-sede.component.scss */ "BgVr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sedes_sede__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sedes/sede */ "ypJn");
/* harmony import */ var _services_get_get_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/get/get.service */ "BQIx");
/* harmony import */ var _services_post_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/post/post.service */ "ova0");
/* harmony import */ var _services_put_put_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/put/put.service */ "+nHt");









let DetalleSedeComponent = class DetalleSedeComponent {
    constructor(getService, postService, putService, toastCtrl, modalCtrl) {
        this.getService = getService;
        this.postService = postService;
        this.putService = putService;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.url = "sedes";
        this.sede = new _sedes_sede__WEBPACK_IMPORTED_MODULE_5__["Sede"]();
    }
    ngOnInit() {
        if (this.id != null) {
            this.getService.get(this.url, this.id).subscribe(result => {
                if (result.success) {
                    this.sede = result.message;
                }
            });
        }
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.id != null) {
                this.actualizarSede();
            }
            else {
                this.crearSede();
            }
        });
    }
    crearSede() {
        this.postService.post(this.url, this.sede).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: result.message,
                position: "middle",
                duration: result.success ? 3000 : 0,
                color: result.success ? "success" : "danger",
                buttons: result.success ? [] : [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
            if (result.success) {
                this.dismiss(result);
            }
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: error,
                position: "middle",
                color: "danger",
                buttons: [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
        }));
    }
    actualizarSede() {
        this.putService.put(this.url, this.id, this.sede).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: result.message,
                position: "middle",
                duration: result.success ? 3000 : 0,
                color: result.success ? "success" : "danger",
                buttons: result.success ? [] : [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
            if (result.success) {
                this.dismiss(result);
            }
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: error,
                position: "middle",
                color: "danger",
                buttons: [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
        }));
    }
    dismiss(result) {
        this.modalCtrl.dismiss(result);
    }
};
DetalleSedeComponent.ctorParameters = () => [
    { type: _services_get_get_service__WEBPACK_IMPORTED_MODULE_6__["GetService"] },
    { type: _services_post_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"] },
    { type: _services_put_put_service__WEBPACK_IMPORTED_MODULE_8__["PutService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
DetalleSedeComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DetalleSedeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-sede',
        template: _raw_loader_detalle_sede_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_sede_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetalleSedeComponent);



/***/ }),

/***/ "ova0":
/*!***********************************************!*\
  !*** ./src/app/services/post/post.service.ts ***!
  \***********************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");





let PostService = class PostService {
    //Constructor of the Service with Dependency Injection @param http The standard Angular HttpClient to make requests
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.apiKey = ''; // <-- Enter your own key here!
    }
    post(url, object) {
        let reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.baseUrl + url, object, { headers: reqHeader });
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostService);



/***/ }),

/***/ "snxx":
/*!**************************************************************************************!*\
  !*** ./src/app/detalle-programacion-viajes/detalle-programacion-viajes.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DetalleProgramacionViajesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleProgramacionViajesComponent", function() { return DetalleProgramacionViajesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalle_programacion_viajes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalle-programacion-viajes.component.html */ "Yz+H");
/* harmony import */ var _detalle_programacion_viajes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalle-programacion-viajes.component.scss */ "lIPT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _camiones_camion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../camiones/camion */ "+Qoh");
/* harmony import */ var _clientes_cliente__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../clientes/cliente */ "BsNa");
/* harmony import */ var _programacion_viajes_viaje__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../programacion-viajes/viaje */ "G7hY");
/* harmony import */ var _sedes_sede__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sedes/sede */ "ypJn");
/* harmony import */ var _services_get_get_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/get/get.service */ "BQIx");
/* harmony import */ var _services_post_post_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/post/post.service */ "ova0");
/* harmony import */ var _services_put_put_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/put/put.service */ "+nHt");
/* harmony import */ var _usuarios_usuario__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../usuarios/usuario */ "YxHF");
/* harmony import */ var _utils_genericService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/genericService */ "BEOd");














let DetalleProgramacionViajesComponent = class DetalleProgramacionViajesComponent extends _utils_genericService__WEBPACK_IMPORTED_MODULE_13__["genericService"] {
    constructor(getService, postService, putService, toastCtrl, modalCtrl) {
        super(getService, postService, putService, toastCtrl, modalCtrl);
        this.getService = getService;
        this.postService = postService;
        this.putService = putService;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.url = "viajes";
        this.urlClientes = "clientes";
        this.urlCamiones = "camiones";
        this.urlConductores = "account/listarPorRol/conductor";
        this.urlAuxiliares = "account/listarPorRol/auxiliar";
        this.urlOrigenDestinoCliente = "sedes/PorCliente/";
        this.viaje = new _programacion_viajes_viaje__WEBPACK_IMPORTED_MODULE_7__["Viaje"]();
        this.cliente = new _clientes_cliente__WEBPACK_IMPORTED_MODULE_6__["Cliente"]();
        this.camion = new _camiones_camion__WEBPACK_IMPORTED_MODULE_5__["Camion"]();
        this.conductor = new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_12__["Usuario"]();
        this.auxiliar = new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_12__["Usuario"]();
        this.origen = new _sedes_sede__WEBPACK_IMPORTED_MODULE_8__["Sede"]();
        this.destino = new _sedes_sede__WEBPACK_IMPORTED_MODULE_8__["Sede"]();
    }
    ngOnInit() {
        this.obtenerClientes();
        this.obtenerCamiones();
        this.obtenerConductores();
        this.obtenerAuxiliares();
        if (this.id != null) {
            super.consumirGet(this.url + "/" + this.id).then((data) => {
                this.viaje = data;
                this.cliente = data.cliente;
                this.camion = data.camion;
                this.conductor = data.conductor;
                this.auxiliar = data.auxiliar;
                this.origen = data.sedeOrigen;
                this.destino = data.sedeDestino;
                this.fecha = data.fecha;
            });
        }
    }
    guardar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.id != null) {
                this.actualizarviaje();
            }
            else {
                this.crearviaje();
            }
        });
    }
    crearviaje() {
        this.viaje.idCliente = this.cliente.id;
        this.viaje.idOrigen = this.origen.id;
        this.viaje.idDestino = this.destino.id;
        this.viaje.idCamion = this.camion.id;
        this.viaje.idConductor = this.conductor.id;
        this.viaje.idAuxiliar = this.auxiliar == null ? null : this.auxiliar.id;
        this.viaje.fecha = this.fecha;
        console.log(this.viaje);
        this.postService.post(this.url, this.viaje).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: result.message,
                position: "middle",
                duration: result.success ? 3000 : 0,
                color: result.success ? "success" : "danger",
                buttons: result.success ? [] : [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
            if (result.success) {
                this.dismiss(result);
            }
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showModalError(error);
        }));
    }
    actualizarviaje() {
        this.putService.put(this.url, this.id, this.viaje).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: result.message,
                position: "middle",
                duration: result.success ? 3000 : 0,
                color: result.success ? "success" : "danger",
                buttons: result.success ? [] : [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
            if (result.success) {
                this.dismiss(result);
            }
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showModalError(error);
        }));
    }
    dismiss(result) {
        this.modalCtrl.dismiss(result);
    }
    showModalError(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                position: "middle",
                color: "danger",
                buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                    }
                ]
            });
            toast.present();
            console.log(message);
        });
    }
    //servicios externos
    obtenerClientes() {
        this.getService.get(this.urlClientes).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                this.clientes = result.message;
            }
            else {
                this.showModalError(result.message);
            }
        }));
    }
    obtenerCamiones() {
        this.getService.get(this.urlCamiones).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                this.camiones = result.message;
            }
            else {
                this.showModalError(result.message);
            }
        }));
    }
    obtenerConductores() {
        this.getService.get(this.urlConductores).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                this.conductores = result.message;
            }
            else {
                this.showModalError(result.message);
            }
        }));
    }
    obtenerAuxiliares() {
        this.getService.get(this.urlAuxiliares).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                this.auxiliares = result.message;
            }
            else {
                this.showModalError(result.message);
            }
        }));
    }
    obtenerOrigenesDestinos() {
        console.log(this.urlOrigenDestinoCliente + this.cliente.id);
        this.getService.get(this.urlOrigenDestinoCliente + this.cliente.id).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                this.origenesDestinos = result.message;
            }
            else {
                this.showModalError(result.message);
            }
        }));
    }
};
DetalleProgramacionViajesComponent.ctorParameters = () => [
    { type: _services_get_get_service__WEBPACK_IMPORTED_MODULE_9__["GetService"] },
    { type: _services_post_post_service__WEBPACK_IMPORTED_MODULE_10__["PostService"] },
    { type: _services_put_put_service__WEBPACK_IMPORTED_MODULE_11__["PutService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
DetalleProgramacionViajesComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DetalleProgramacionViajesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-programacion-viajes',
        template: _raw_loader_detalle_programacion_viajes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_programacion_viajes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetalleProgramacionViajesComponent);



/***/ }),

/***/ "u7ZW":
/*!****************************************************************!*\
  !*** ./src/app/detalle-cliente/detalle-cliente.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-title {\n  display: flex;\n  justify-content: space-between;\n}\n.modal-title span {\n  display: flex;\n  align-items: center;\n}\n.agregar-sede-button {\n  margin: 10px;\n  display: flex;\n  justify-content: flex-end;\n}\n:host ::ng-deep .p-datatable-responsive-demo .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n.p-d-flex {\n  display: flex;\n  justify-content: space-between;\n}\n.action-column {\n  text-align: center !important;\n}\n.action-column p-button {\n  margin: 3px;\n}\n@media screen and (max-width: 40rem) {\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-thead > tr > th,\n:host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tbody > tr > td {\n    text-align: left;\n    display: block;\n    width: 100%;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4em 1em -0.4em -0.4rem;\n    font-weight: bold;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tbody > tr > td:last-child {\n    border-bottom: 1px solid var(--surface-d);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWxsZS1jbGllbnRlL2RldGFsbGUtY2xpZW50ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNKO0FBR0k7RUFDSSxhQUFBO0FBQVI7QUFJQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQURKO0FBSUE7RUFDSSw2QkFBQTtBQURKO0FBRUk7RUFDSSxXQUFBO0FBQVI7QUFJQTtFQUlnQjs7SUFFSSx3QkFBQTtFQUpsQjtFQU9jO0lBQ0ksZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtFQUxsQjtFQU9rQjtJQUNJLGVBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxpQ0FBQTtJQUNBLGlCQUFBO0VBTHRCO0VBUWtCO0lBQ0kseUNBQUE7RUFOdEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2RldGFsbGUtY2xpZW50ZS9kZXRhbGxlLWNsaWVudGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtdGl0bGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgc3BhbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hZ3JlZ2FyLXNlZGUtYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCB7ICAgIFxyXG4gICAgLnAtZGF0YXRhYmxlLXJlc3BvbnNpdmUtZGVtbyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIC5wLWNvbHVtbi10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLnAtZC1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmFjdGlvbi1jb2x1bW57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIHAtYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MHJlbSkge1xyXG4gICAgOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgICAgICAucC1kYXRhdGFibGUge1xyXG4gICAgICAgICAgICAmLnAtZGF0YXRhYmxlLXJlc3BvbnNpdmUtZGVtbyB7XHJcbiAgICAgICAgICAgICAgICAucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxyXG4gICAgICAgICAgICAgICAgLnAtZGF0YXRhYmxlLXRmb290ID4gdHIgPiB0ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwIG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wLWNvbHVtbi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC0uNGVtIDFlbSAtLjRlbSAtLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "vtpD");




/**
 * In this file we set up the main routes within our application
 * We have multiple options available to us for routing
 *
 * Route to a specific component
 * Route to a lazy-loaded module
 * Redirect to a predefined route
 *
 * We can see an example of each below
 */
const routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'camiones',
        loadChildren: () => __webpack_require__.e(/*! import() | camiones-camiones-module */ "camiones-camiones-module").then(__webpack_require__.bind(null, /*! ./camiones/camiones.module */ "cDn4")).then(m => m.CamionesPageModule)
    },
    {
        path: 'usuarios',
        loadChildren: () => __webpack_require__.e(/*! import() | usuarios-usuarios-module */ "usuarios-usuarios-module").then(__webpack_require__.bind(null, /*! ./usuarios/usuarios.module */ "0G8V")).then(m => m.UsuariosPageModule)
    },
    {
        path: 'clientes',
        loadChildren: () => __webpack_require__.e(/*! import() | clientes-clientes-module */ "clientes-clientes-module").then(__webpack_require__.bind(null, /*! ./clientes/clientes.module */ "3HbQ")).then(m => m.ClientesPageModule)
    },
    {
        path: 'sedes',
        loadChildren: () => __webpack_require__.e(/*! import() | sedes-sedes-module */ "sedes-sedes-module").then(__webpack_require__.bind(null, /*! ./sedes/sedes.module */ "AewH")).then(m => m.SedesPageModule)
    },
    {
        path: 'programacion-viajes',
        loadChildren: () => __webpack_require__.e(/*! import() | programacion-viajes-programacion-viajes-module */ "programacion-viajes-programacion-viajes-module").then(__webpack_require__.bind(null, /*! ./programacion-viajes/programacion-viajes.module */ "XQjU")).then(m => m.ProgramacionViajesPageModule)
    },
    {
        path: 'mis-viajes',
        loadChildren: () => __webpack_require__.e(/*! import() | mis-viajes-mis-viajes-module */ "mis-viajes-mis-viajes-module").then(__webpack_require__.bind(null, /*! ./mis-viajes/mis-viajes.module */ "dgGR")).then(m => m.MisViajesPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "ZTFi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_post_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/post/post.service */ "ova0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









let LoginComponent = class LoginComponent {
    constructor(router, storage, postService, toastCtrl, modalCtrl, formBuilder) {
        this.router = router;
        this.storage = storage;
        this.postService = postService;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.url = "Account/login";
        this.loginForm = this.formBuilder.group({
            email: '',
            password: ''
        });
    }
    ngOnInit() {
    }
    login(loginForm) {
        this.postService.post(this.url, loginForm).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.success) {
                this.storage.clear();
                this.storage.set('token', result.token);
                this.storage.set('expiration', result.expiration);
                this.storage.set('nombre', result.nombre);
                this.loginForm.reset();
                this.router.navigate(['/mis-viajes']);
            }
            else {
                const toast = yield this.toastCtrl.create({
                    message: result.message,
                    position: "middle",
                    color: "danger",
                    buttons: [{
                            text: 'Aceptar',
                            role: 'cancel'
                        }
                    ]
                });
                toast.present();
            }
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: error.message,
                position: "middle",
                color: "danger",
                buttons: [{
                        text: 'Aceptar',
                        role: 'cancel'
                    }
                ]
            });
            toast.present();
        }));
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _services_post_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ypJn":
/*!*******************************!*\
  !*** ./src/app/sedes/sede.ts ***!
  \*******************************/
/*! exports provided: Sede */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sede", function() { return Sede; });
class Sede {
    constructor() {
        this.id = 0;
        this.nombre = "";
        this.direccion = "";
        this.activo = true;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map