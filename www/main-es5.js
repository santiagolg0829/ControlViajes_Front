(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+Qoh":
    /*!************************************!*\
      !*** ./src/app/camiones/camion.ts ***!
      \************************************/

    /*! exports provided: Camion */

    /***/
    function Qoh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Camion", function () {
        return Camion;
      });

      var Camion = function Camion() {
        _classCallCheck(this, Camion);

        this.id = 0;
        this.placa = "";
        this.remolque = "";
        this.esPropio = true;
        this.activo = true;
      };
      /***/

    },

    /***/
    "+nHt":
    /*!*********************************************!*\
      !*** ./src/app/services/put/put.service.ts ***!
      \*********************************************/

    /*! exports provided: PutService */

    /***/
    function nHt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PutService", function () {
        return PutService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var PutService = /*#__PURE__*/function () {
        //Constructor of the Service with Dependency Injection @param http The standard Angular HttpClient to make requests
        function PutService(http, storage) {
          _classCallCheck(this, PutService);

          this.http = http;
          this.storage = storage;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
          this.apiKey = ''; // <-- Enter your own key here!
        }

        _createClass(PutService, [{
          key: "put",
          value: function put(url, id, object) {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            return this.http.put(this.baseUrl + url + "/" + id, object, {
              headers: reqHeader
            });
          }
        }]);

        return PutService;
      }();

      PutService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }];
      };

      PutService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PutService);
      /***/
    },

    /***/
    "+wKK":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalle-viaje/detalle-viaje.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wKK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <div class=\"modal-title\">\r\n        <span>Detalle del Viaje</span>\r\n        <ion-button fill=\"clear\" color=\"dark\" (click)=\"dismiss(null)\">\r\n          <ion-icon name=\"close-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <ion-item>\r\n    <ion-label>Fecha</ion-label>  \r\n    <ion-datetime placeholder=\"Fecha Programada\" displayFormat= \"YYYY/MM/DD h:mm A\" [(ngModel)]=\"fecha\" >\r\n    </ion-datetime>\r\n  </ion-item> \r\n\r\n  <ion-item>\r\n    <ion-label>Cliente</ion-label>\r\n    <ionic-selectable #portComponent [(ngModel)]=\"cliente\" [items]=\"clientes\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Clientes</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Placa</ion-label>\r\n    <ionic-selectable #portComponent [(ngModel)]=\"camion\" [items]=\"camiones\" itemValueField=\"id\" itemTextField=\"placa\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Camiones</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Conductor</ion-label>\r\n    <ionic-selectable #portComponent1 [(ngModel)]=\"conductor\" [items]=\"conductores\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Conductores</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent1.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Auxiliar</ion-label>\r\n    <ionic-selectable #portComponent2 [(ngModel)]=\"auxiliar\" [items]=\"auxiliares\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Auxiliares</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent2.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Origen</ion-label>\r\n    <ionic-selectable #portComponent3 [(ngModel)]=\"origen\" [items]=\"origenesDestinos\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Origen</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent3.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Destino</ion-label>\r\n    <ionic-selectable #portComponent4 [(ngModel)]=\"destino\" [items]=\"origenesDestinos\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Destino</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent4.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Valor Anticipo</ion-label>\r\n    <ion-input type=\"number\" [(ngModel)]=\"viaje.valorAnticipo\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Número Manifiesto</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"viaje.numeroManifiesto\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Número Cuenta</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"viaje.numeroCuenta\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-button (click)=\"acutalizarViaje()\" >{{ viaje.estado == \"Sin Iniciar\" ? \"Iniciar\" : \"Finalizar\" }}</ion-button>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "/NMw":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalle-usuario/detalle-usuario.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NMw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"modal-title\">\n        <span>Maestro Usuarios</span>\n        <ion-button fill=\"clear\" color=\"dark\" (click)=\"dismiss(null)\">\n          <ion-icon name=\"close-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item>\n    <ion-label>Cédula</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"usuario.cedula\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Nombre</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"usuario.nombre\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Correo Electrónico</ion-label>\n    <ion-input type=\"email\" [(ngModel)]=\"usuario.email\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Celular</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"usuario.celular\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Cliente</ion-label>\n    <ionic-selectable #portComponent [(ngModel)]=\"cliente\" [items]=\"clientes\" itemValueField=\"id\" itemTextField=\"nombre\"\n      [canSearch]=\"true\">\n      <ng-template ionicSelectableHeaderTemplate>\n        <ion-toolbar>\n          <ion-title>\n            <div class=\"modal-title\">\n              <span>Clientes</span>\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent.close()\">\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-title>\n        </ion-toolbar>\n      </ng-template>\n    </ionic-selectable>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Contraseña</ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"usuario.password\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Activo</ion-label>\n    <ion-checkbox [(ngModel)]=\"usuario.activo\"></ion-checkbox>\n  </ion-item>\n\n  <ion-title class=\"title-roles\">\n    <span>Roles</span>\n  </ion-title>\n\n  <ion-item *ngFor=\"let rol of usuario.roles; let i = index;\">\n    <ion-label>{{rol.nombre}}</ion-label>\n    <ion-checkbox [(ngModel)]=\"rol.seleccionado\"></ion-checkbox>\n  </ion-item>\n\n  <ion-button (click)=\"guardar()\">Guardar</ion-button>\n\n</ion-content>";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\slond\Desktop\Control Viajes\control-viajes\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3hV3":
    /*!****************************************************************!*\
      !*** ./src/app/detalle-usuario/detalle-usuario.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function hV3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".modal-title {\n  display: flex;\n  justify-content: space-between;\n}\n.modal-title span {\n  display: flex;\n  align-items: center;\n}\n.title-roles {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWxsZS11c3VhcmlvL2RldGFsbGUtdXN1YXJpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZGV0YWxsZS11c3VhcmlvL2RldGFsbGUtdXN1YXJpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC10aXRsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLnRpdGxlLXJvbGVze1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "AWUL":
    /*!*************************************************************!*\
      !*** ./src/app/services/interceptor/interceptor.service.ts ***!
      \*************************************************************/

    /*! exports provided: InterceptorService */

    /***/
    function AWUL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InterceptorService", function () {
        return InterceptorService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var InterceptorService = /*#__PURE__*/function () {
        function InterceptorService(storage) {
          _classCallCheck(this, InterceptorService);

          this.storage = storage;
        }

        _createClass(InterceptorService, [{
          key: "intercept",
          value: function intercept(request, next) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.storage.get("token")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (token) {
              if (token) {
                request = request.clone({
                  headers: request.headers.set('Authorization', 'Bearer ' + token)
                });
              }

              if (!request.headers.has('Content-Type')) {
                request = request.clone({
                  headers: request.headers.set('Content-Type', 'application/json')
                });
              }

              return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {// do nothing for now
                }

                return event;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
              }));
            }));
          }
        }]);

        return InterceptorService;
      }();

      InterceptorService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }];
      };

      InterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], InterceptorService);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "BEOd":
    /*!*****************************************!*\
      !*** ./src/app/utils/genericService.ts ***!
      \*****************************************/

    /*! exports provided: genericService */

    /***/
    function BEOd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "genericService", function () {
        return genericService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");

      var genericService = /*#__PURE__*/function () {
        function genericService(getService, postService, putService, toastCtrl, modalCtrl) {
          _classCallCheck(this, genericService);

          this.getService = getService;
          this.postService = postService;
          this.putService = putService;
          this.toastCtrl = toastCtrl;
          this.modalCtrl = modalCtrl;
          this.statuses = [{
            label: 'Activo',
            value: 'true'
          }, {
            label: 'Inactivo',
            value: 'false'
          }];
          this.cols = [{
            field: 'nombre',
            header: 'Nombre'
          }, {
            field: 'activo',
            header: 'Estado'
          }];
        }

        _createClass(genericService, [{
          key: "consumirGet",
          value: function consumirGet(url) {
            var _this = this;

            return new Promise(function (resolve) {
              _this.getService.get(url).subscribe(function (result) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (result.success) {
                            console.log(result.message);
                            resolve(result.message);
                          } else {
                            this.showModalError(result.message);
                          }

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              }, function (error) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          console.log(error);
                          this.showModalError('Error de conexión con el servidor.');

                        case 2:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              });
            });
          }
        }, {
          key: "consumirPost",
          value: function consumirPost(url, model) {
            var _this2 = this;

            return new Promise(function (resolve) {
              _this2.postService.post(url, model).subscribe(function (result) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                  var toast;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return this.toastCtrl.create({
                            message: result.message,
                            position: "middle",
                            duration: result.success ? 3000 : 0,
                            color: result.success ? "success" : "danger",
                            buttons: result.success ? [] : [{
                              text: 'Aceptar',
                              role: 'cancel'
                            }]
                          });

                        case 2:
                          toast = _context3.sent;
                          toast.present();

                          if (result.success) {
                            resolve(result.message);
                            this.modalCtrl.dismiss(result);
                          }

                        case 5:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, this);
                }));
              }, function (error) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          this.showModalError(error);

                        case 1:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, this);
                }));
              });
            });
          }
        }, {
          key: "showModalError",
          value: function showModalError(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var toast;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        position: "middle",
                        color: "danger",
                        buttons: [{
                          text: 'Aceptar',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      toast = _context5.sent;
                      toast.present();
                      console.log(message);

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return genericService;
      }();
      /***/

    },

    /***/
    "BQIx":
    /*!*********************************************!*\
      !*** ./src/app/services/get/get.service.ts ***!
      \*********************************************/

    /*! exports provided: GetService */

    /***/
    function BQIx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetService", function () {
        return GetService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var GetService = /*#__PURE__*/function () {
        //Constructor of the Service with Dependency Injection @param http The standard Angular HttpClient to make requests
        function GetService(http, storage) {
          _classCallCheck(this, GetService);

          this.http = http;
          this.storage = storage;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
          this.apiKey = ''; // <-- Enter your own key here!
        }

        _createClass(GetService, [{
          key: "get",
          value: function get(url, id) {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            return this.http.get(this.baseUrl + url + "/" + (id == null ? "" : id), {
              headers: reqHeader
            });
          }
        }]);

        return GetService;
      }();

      GetService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }];
      };

      GetService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], GetService);
      /***/
    },

    /***/
    "BgVr":
    /*!**********************************************************!*\
      !*** ./src/app/detalle-sede/detalle-sede.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function BgVr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".modal-title {\n  display: flex;\n  justify-content: space-between;\n}\n.modal-title span {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWxsZS1zZWRlL2RldGFsbGUtc2VkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL2RldGFsbGUtc2VkZS9kZXRhbGxlLXNlZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtdGl0bGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgc3BhbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "Bj70":
    /*!****************************************************!*\
      !*** ./src/app/user-menu/user-menu.component.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function Bj70(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-fab {\n  top: 0;\n  display: flex;\n  justify-content: flex-end;\n  height: -webkit-fill-available;\n  align-items: center;\n}\nion-fab ion-fab-button {\n  --border-radius: 0;\n  width: 250px;\n  white-space: pre-wrap !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tZW51L3VzZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE1BQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBRVIiLCJmaWxlIjoic3JjL2FwcC91c2VyLW1lbnUvdXNlci1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYntcclxuICAgIHRvcDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGlvbi1mYWItYnV0dG9ue1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "BsNa":
    /*!*************************************!*\
      !*** ./src/app/clientes/cliente.ts ***!
      \*************************************/

    /*! exports provided: Cliente */

    /***/
    function BsNa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Cliente", function () {
        return Cliente;
      });

      var Cliente = function Cliente() {
        _classCallCheck(this, Cliente);

        this.id = 0;
        this.nombre = "";
        this.lstSedes = [];
        this.activo = true;
      };
      /***/

    },

    /***/
    "C0Sw":
    /*!************************************************************!*\
      !*** ./src/app/detalle-camion/detalle-camion.component.ts ***!
      \************************************************************/

    /*! exports provided: DetalleCamionComponent */

    /***/
    function C0Sw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetalleCamionComponent", function () {
        return DetalleCamionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalle_camion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalle-camion.component.html */
      "a+fg");
      /* harmony import */


      var _detalle_camion_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalle-camion.component.scss */
      "VD11");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _camiones_camion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../camiones/camion */
      "+Qoh");
      /* harmony import */


      var _services_get_get_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/get/get.service */
      "BQIx");
      /* harmony import */


      var _services_post_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/post/post.service */
      "ova0");
      /* harmony import */


      var _services_put_put_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/put/put.service */
      "+nHt");

      var DetalleCamionComponent = /*#__PURE__*/function () {
        function DetalleCamionComponent(getService, postService, putService, toastCtrl, modalCtrl) {
          _classCallCheck(this, DetalleCamionComponent);

          this.getService = getService;
          this.postService = postService;
          this.putService = putService;
          this.toastCtrl = toastCtrl;
          this.modalCtrl = modalCtrl;
          this.url = "camiones";
          this.camion = new _camiones_camion__WEBPACK_IMPORTED_MODULE_5__["Camion"]();
        }

        _createClass(DetalleCamionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            if (this.id != null) {
              this.getService.get(this.url, this.id).subscribe(function (result) {
                if (result.success) {
                  _this3.camion = result.message;
                }
              });
            }
          }
        }, {
          key: "guardar",
          value: function guardar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (this.id != null) {
                        this.actualizarCamion();
                      } else {
                        this.crearCamion();
                      }

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "crearCamion",
          value: function crearCamion() {
            var _this4 = this;

            this.postService.post(this.url, this.camion).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var toast;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return this.toastCtrl.create({
                          message: result.message,
                          position: "middle",
                          duration: result.success ? 3000 : 0,
                          color: result.success ? "success" : "danger",
                          buttons: result.success ? [] : [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context7.sent;
                        toast.present();

                        if (result.success) {
                          this.dismiss(result);
                        }

                      case 5:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var toast;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return this.toastCtrl.create({
                          message: error,
                          position: "middle",
                          color: "danger",
                          buttons: [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context8.sent;
                        toast.present();

                      case 4:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));
            });
          }
        }, {
          key: "actualizarCamion",
          value: function actualizarCamion() {
            var _this5 = this;

            this.putService.put(this.url, this.id, this.camion).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                var toast;
                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        _context9.next = 2;
                        return this.toastCtrl.create({
                          message: result.message,
                          position: "middle",
                          duration: result.success ? 3000 : 0,
                          color: result.success ? "success" : "danger",
                          buttons: result.success ? [] : [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context9.sent;
                        toast.present();

                        if (result.success) {
                          this.dismiss(result);
                        }

                      case 5:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                var toast;
                return regeneratorRuntime.wrap(function _callee10$(_context10) {
                  while (1) {
                    switch (_context10.prev = _context10.next) {
                      case 0:
                        _context10.next = 2;
                        return this.toastCtrl.create({
                          message: error,
                          position: "middle",
                          color: "danger",
                          buttons: [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context10.sent;
                        toast.present();

                      case 4:
                      case "end":
                        return _context10.stop();
                    }
                  }
                }, _callee10, this);
              }));
            });
          }
        }, {
          key: "dismiss",
          value: function dismiss(result) {
            this.modalCtrl.dismiss(result);
          }
        }]);

        return DetalleCamionComponent;
      }();

      DetalleCamionComponent.ctorParameters = function () {
        return [{
          type: _services_get_get_service__WEBPACK_IMPORTED_MODULE_6__["GetService"]
        }, {
          type: _services_post_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"]
        }, {
          type: _services_put_put_service__WEBPACK_IMPORTED_MODULE_8__["PutService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      DetalleCamionComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      DetalleCamionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-camion',
        template: _raw_loader_detalle_camion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_camion_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DetalleCamionComponent);
      /***/
    },

    /***/
    "EPGA":
    /*!****************************************************************!*\
      !*** ./src/app/cambiar-password/cambiar-password.component.ts ***!
      \****************************************************************/

    /*! exports provided: CambiarPasswordComponent */

    /***/
    function EPGA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CambiarPasswordComponent", function () {
        return CambiarPasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cambiar_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cambiar-password.component.html */
      "GN9r");
      /* harmony import */


      var _cambiar_password_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cambiar-password.component.scss */
      "Q/jM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_post_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/post/post.service */
      "ova0");

      var CambiarPasswordComponent = /*#__PURE__*/function () {
        function CambiarPasswordComponent(toastCtrl, modalCtrl, postService) {
          _classCallCheck(this, CambiarPasswordComponent);

          this.toastCtrl = toastCtrl;
          this.modalCtrl = modalCtrl;
          this.postService = postService;
          this.url = "Account/ChangePassword";
          this.confirmPassword = "";
          this.newPassword = "";
          this.oldPassword = "";
        }

        _createClass(CambiarPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "guardar",
          value: function guardar() {
            var _this6 = this;

            var object = {
              "oldPassword": this.oldPassword,
              "newPassword": this.newPassword,
              "confirmPassword": this.confirmPassword
            };
            this.postService.post(this.url, object).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                var toast;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        _context11.next = 2;
                        return this.toastCtrl.create({
                          message: result.message,
                          position: "middle",
                          duration: result.success ? 3000 : 0,
                          color: result.success ? "success" : "danger",
                          buttons: result.success ? [] : [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context11.sent;
                        toast.present();

                        if (result.success) {
                          this.dismiss(result);
                        }

                      case 5:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                var toast;
                return regeneratorRuntime.wrap(function _callee12$(_context12) {
                  while (1) {
                    switch (_context12.prev = _context12.next) {
                      case 0:
                        _context12.next = 2;
                        return this.toastCtrl.create({
                          message: error,
                          position: "middle",
                          color: "danger",
                          buttons: [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context12.sent;
                        toast.present();

                      case 4:
                      case "end":
                        return _context12.stop();
                    }
                  }
                }, _callee12, this);
              }));
            });
          }
        }, {
          key: "dismiss",
          value: function dismiss(result) {
            this.modalCtrl.dismiss(result);
          }
        }]);

        return CambiarPasswordComponent;
      }();

      CambiarPasswordComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_post_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"]
        }];
      };

      CambiarPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cambiar-password',
        template: _raw_loader_cambiar_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cambiar_password_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CambiarPasswordComponent);
      /***/
    },

    /***/
    "El4w":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalle-cliente/detalle-cliente.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function El4w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"modal-title\">\n        <span>Maestro Clientes</span>\n        <ion-button fill=\"clear\" color=\"dark\" (click)=\"dismiss(null)\">\n          <ion-icon name=\"close-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item>\n    <ion-label>Nombre</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"cliente.nombre\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Activo</ion-label>\n    <ion-checkbox [(ngModel)]=\"cliente.activo\"></ion-checkbox>\n  </ion-item>\n\n  <p-button label=\"Agregar Sede\" icon=\"pi pi-plus\" iconPos=\"left\" class=\"primary-button agregar-sede-button\"\n    (click)=\"agregarSede()\"></p-button>\n\n  <p-table #dt [value]=\"cliente.lstSedes\" styleClass=\"p-datatable-striped p-datatable-responsive-demo\"\n    [paginator]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\"\n    currentPageReportTemplate=\"Mostrando {first} a {last} de {totalRecords} registros\"\n    [rowsPerPageOptions]=\"[10,25,50]\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th pSortableColumn=\"nombre\">Nombre <p-sortIcon field=\"nombre\"></p-sortIcon>\n        </th>\n        <th pSortableColumn=\"direccion\">Dirección <p-sortIcon field=\"direccion\"></p-sortIcon>\n        </th>\n        <th pSortableColumn=\"activo\">Estado <p-sortIcon field=\"activo\"></p-sortIcon>\n        </th>\n        <th rowspan=\"2\" class=\"action-column\">Acciones</th>\n      </tr>\n      <tr>\n        <th>\n          <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'nombre', 'contains')\"\n            placeholder=\"Buscar por Nombre\" class=\"p-column-filter\">\n        </th>\n        <th>\n          <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'direccion', 'contains')\"\n            placeholder=\"Buscar por Dirección\" class=\"p-column-filter\">\n        </th>\n        <th>\n          <p-dropdown [options]=\"statuses\" (onChange)=\"dt.filter($event.value, 'activo', 'equals')\"\n            styleClass=\"p-column-filter\" placeholder=\"Buscar por Estado\" [showClear]=\"true\">\n            <ng-template let-option pTemplate=\"item\">\n              <span>{{option.label}}</span>\n            </ng-template>\n          </p-dropdown>\n        </th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-sede>\n      <tr>\n        <td pEditableColumn>\n          <p-cellEditor>\n            <ng-template pTemplate=\"input\">\n              <input pInputText type=\"text\" [(ngModel)]=\"sede.nombre\" placeholder=\"Nombre\">\n            </ng-template>\n            <ng-template pTemplate=\"output\">\n              <input pInputText type=\"text\" placeholder=\"Nombre\" value=\"{{sede.nombre}}\">\n            </ng-template>\n          </p-cellEditor>\n        </td>\n        <td pEditableColumn>\n          <p-cellEditor>\n            <ng-template pTemplate=\"input\">\n              <input pInputText type=\"text\" [(ngModel)]=\"sede.direccion\" placeholder=\"Dirección\">\n            </ng-template>\n            <ng-template pTemplate=\"output\">\n              <input pInputText type=\"text\" placeholder=\"Dirección\" value=\"{{sede.direccion}}\">\n            </ng-template>\n          </p-cellEditor>\n        </td>\n        <td pEditableColumn>\n          <p-cellEditor>\n            <ng-template pTemplate=\"input\">\n              <p-dropdown [options]=\"statuses\" [(ngModel)]=\"sede.activo\" [style]=\"{'width':'100%'}\">\n              </p-dropdown>\n            </ng-template>\n            <ng-template pTemplate=\"output\">\n              <input pInputText type=\"text\" placeholder=\"Estado\"\n                value=\"{{sede.activo == true ? 'Activo' : 'Inactivo'}}\">\n            </ng-template>\n          </p-cellEditor>\n        </td>\n        <td class=\"action-column\">\n          <p-button label=\"Eliminar\" icon=\"pi pi-times\" iconPos=\"left\" (click)=\"eliminarSede(sede)\" class=\"primary-button\"></p-button>\n        </td>\n      </tr>\n    </ng-template>\n  </p-table>\n\n\n  <ion-button (click)=\"guardar()\">Guardar</ion-button>\n\n</ion-content>";
      /***/
    },

    /***/
    "FQWS":
    /*!**************************************************************!*\
      !*** ./src/app/detalle-cliente/detalle-cliente.component.ts ***!
      \**************************************************************/

    /*! exports provided: DetalleClienteComponent */

    /***/
    function FQWS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetalleClienteComponent", function () {
        return DetalleClienteComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalle_cliente_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalle-cliente.component.html */
      "El4w");
      /* harmony import */


      var _detalle_cliente_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalle-cliente.component.scss */
      "u7ZW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _clientes_cliente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../clientes/cliente */
      "BsNa");
      /* harmony import */


      var _sedes_sede__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../sedes/sede */
      "ypJn");
      /* harmony import */


      var _services_get_get_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/get/get.service */
      "BQIx");
      /* harmony import */


      var _services_post_post_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/post/post.service */
      "ova0");
      /* harmony import */


      var _services_put_put_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/put/put.service */
      "+nHt");

      var DetalleClienteComponent = /*#__PURE__*/function () {
        function DetalleClienteComponent(getService, postService, putService, toastCtrl, modalCtrl) {
          _classCallCheck(this, DetalleClienteComponent);

          this.getService = getService;
          this.postService = postService;
          this.putService = putService;
          this.toastCtrl = toastCtrl;
          this.modalCtrl = modalCtrl;
          this.url = "clientes";
          this.cliente = new _clientes_cliente__WEBPACK_IMPORTED_MODULE_5__["Cliente"]();
        }

        _createClass(DetalleClienteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            if (this.id != null) {
              this.getService.get(this.url, this.id).subscribe(function (result) {
                if (result.success) {
                  _this7.cliente = result.message;
                }
              });
            }

            this.statuses = [{
              label: 'Activo',
              value: true
            }, {
              label: 'Inactivo',
              value: false
            }];
          }
        }, {
          key: "guardar",
          value: function guardar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (this.id != null) {
                        this.actualizarCliente();
                      } else {
                        this.crearCliente();
                      }

                    case 1:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "crearCliente",
          value: function crearCliente() {
            var _this8 = this;

            this.postService.post(this.url, this.cliente).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
                var toast;
                return regeneratorRuntime.wrap(function _callee14$(_context14) {
                  while (1) {
                    switch (_context14.prev = _context14.next) {
                      case 0:
                        _context14.next = 2;
                        return this.toastCtrl.create({
                          message: result.message,
                          position: "middle",
                          duration: result.success ? 3000 : 0,
                          color: result.success ? "success" : "danger",
                          buttons: result.success ? [] : [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context14.sent;
                        toast.present();

                        if (result.success) {
                          this.dismiss(result);
                        }

                      case 5:
                      case "end":
                        return _context14.stop();
                    }
                  }
                }, _callee14, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                var toast;
                return regeneratorRuntime.wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        _context15.next = 2;
                        return this.toastCtrl.create({
                          message: error,
                          position: "middle",
                          color: "danger",
                          buttons: [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context15.sent;
                        toast.present();

                      case 4:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15, this);
              }));
            });
          }
        }, {
          key: "actualizarCliente",
          value: function actualizarCliente() {
            var _this9 = this;

            this.putService.put(this.url, this.id, this.cliente).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
                var toast;
                return regeneratorRuntime.wrap(function _callee16$(_context16) {
                  while (1) {
                    switch (_context16.prev = _context16.next) {
                      case 0:
                        _context16.next = 2;
                        return this.toastCtrl.create({
                          message: result.message,
                          position: "middle",
                          duration: result.success ? 3000 : 0,
                          color: result.success ? "success" : "danger",
                          buttons: result.success ? [] : [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context16.sent;
                        toast.present();

                        if (result.success) {
                          this.dismiss(result);
                        }

                      case 5:
                      case "end":
                        return _context16.stop();
                    }
                  }
                }, _callee16, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                var toast;
                return regeneratorRuntime.wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        _context17.next = 2;
                        return this.toastCtrl.create({
                          message: error,
                          position: "middle",
                          color: "danger",
                          buttons: [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context17.sent;
                        toast.present();

                      case 4:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17, this);
              }));
            });
          }
        }, {
          key: "dismiss",
          value: function dismiss(result) {
            this.modalCtrl.dismiss(result);
          }
        }, {
          key: "eliminarSede",
          value: function eliminarSede(sede) {
            this.cliente.lstSedes = this.cliente.lstSedes.filter(function (val) {
              return val !== sede;
            });
          }
        }, {
          key: "agregarSede",
          value: function agregarSede() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      this.cliente.lstSedes.push(new _sedes_sede__WEBPACK_IMPORTED_MODULE_6__["Sede"]());

                    case 1:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }]);

        return DetalleClienteComponent;
      }();

      DetalleClienteComponent.ctorParameters = function () {
        return [{
          type: _services_get_get_service__WEBPACK_IMPORTED_MODULE_7__["GetService"]
        }, {
          type: _services_post_post_service__WEBPACK_IMPORTED_MODULE_8__["PostService"]
        }, {
          type: _services_put_put_service__WEBPACK_IMPORTED_MODULE_9__["PutService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      DetalleClienteComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      DetalleClienteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-cliente',
        template: _raw_loader_detalle_cliente_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_cliente_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DetalleClienteComponent);
      /***/
    },

    /***/
    "G7hY":
    /*!**********************************************!*\
      !*** ./src/app/programacion-viajes/viaje.ts ***!
      \**********************************************/

    /*! exports provided: Viaje */

    /***/
    function G7hY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Viaje", function () {
        return Viaje;
      });

      var Viaje = function Viaje() {
        _classCallCheck(this, Viaje);

        this.id = 0;
      };
      /***/

    },

    /***/
    "GN9r":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cambiar-password/cambiar-password.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GN9r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"modal-title\">\n        <span>Maestro Camiones</span>\n        <ion-button fill=\"clear\" color=\"dark\" (click)=\"dismiss(null)\">\n          <ion-icon name=\"close-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item>\n    <ion-label>Contraseña Actual</ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"oldPassword\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Contraseña Nueva</ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"newPassword\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Confirmar Contraseña</ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"confirmPassword\"></ion-input>\n  </ion-item>\n\n  <ion-button class=\"primary-button\" (click)=\"guardar()\">Guardar</ion-button>\n\n</ion-content>";
      /***/
    },

    /***/
    "ItV+":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalle-sede/detalle-sede.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ItV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"modal-title\">\n        <span>Maestro Sedes</span>\n        <ion-button fill=\"clear\" color=\"dark\" (click)=\"dismiss(null)\">\n          <ion-icon name=\"close-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item>\n    <ion-label>Nombre</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"sede.nombre\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Dirección</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"sede.direccion\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Activo</ion-label>\n    <ion-checkbox [(ngModel)]=\"sede.activo\"></ion-checkbox>\n  </ion-item>\n\n  <ion-button (click)=\"guardar()\">Guardar</ion-button>\n\n</ion-content>";
      /***/
    },

    /***/
    "KZsV":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-menu/user-menu.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function KZsV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" edge>\n  <ion-fab-button fill=\"clear\">{{nombre}}\n    <ion-icon name=\"person\"></ion-icon>\n  </ion-fab-button>\n  <ion-fab-list side=\"bottom\">\n\n    <ion-fab-button (click)=\"mostrarModal()\" class=\"primary-button\">\n      <ion-label>Cambiar Contraseña</ion-label>\n      <ion-icon name=\"lock-closed\"></ion-icon>\n    </ion-fab-button>\n\n    <ion-fab-button (click)=\"logout()\" class=\"primary-button\">\n      <ion-label>Cerrar Sesión</ion-label>\n      <ion-icon name=\"log-out\"></ion-icon>\n    </ion-fab-button>\n\n  </ion-fab-list>\n</ion-fab>";
      /***/
    },

    /***/
    "Kuc9":
    /*!**************************************************************!*\
      !*** ./src/app/detalle-usuario/detalle-usuario.component.ts ***!
      \**************************************************************/

    /*! exports provided: DetalleUsuarioComponent */

    /***/
    function Kuc9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetalleUsuarioComponent", function () {
        return DetalleUsuarioComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalle_usuario_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalle-usuario.component.html */
      "/NMw");
      /* harmony import */


      var _detalle_usuario_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalle-usuario.component.scss */
      "3hV3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _clientes_cliente__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../clientes/cliente */
      "BsNa");
      /* harmony import */


      var _services_get_get_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/get/get.service */
      "BQIx");
      /* harmony import */


      var _services_post_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/post/post.service */
      "ova0");
      /* harmony import */


      var _services_put_put_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/put/put.service */
      "+nHt");
      /* harmony import */


      var _usuarios_usuario__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../usuarios/usuario */
      "YxHF");

      var DetalleUsuarioComponent = /*#__PURE__*/function () {
        function DetalleUsuarioComponent(getService, postService, putService, toastCtrl, modalCtrl) {
          _classCallCheck(this, DetalleUsuarioComponent);

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

        _createClass(DetalleUsuarioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.obtenerClientes();

            if (this.id != null) {
              this.getService.get(this.urlObtencion, this.id).subscribe(function (result) {
                if (result.success) {
                  _this10.usuario = result.message;
                  _this10.cliente = _this10.clientes.find(function (val) {
                    return val.id !== _this10.usuario.idCliente;
                  });
                }
              });
            }
          }
        }, {
          key: "obtenerClientes",
          value: function obtenerClientes() {
            var _this11 = this;

            this.getService.get(this.urlClientes).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                return regeneratorRuntime.wrap(function _callee19$(_context19) {
                  while (1) {
                    switch (_context19.prev = _context19.next) {
                      case 0:
                        if (result.success) {
                          this.clientes = result.message;
                        } else {
                          this.showModalError(result.message);
                        }

                      case 1:
                      case "end":
                        return _context19.stop();
                    }
                  }
                }, _callee19, this);
              }));
            });
          }
        }, {
          key: "guardar",
          value: function guardar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      this.usuario.idCliente = this.cliente.id;

                      if (this.id != null) {
                        this.actualizarUsuario();
                      } else {
                        this.crearUsuario();
                      }

                    case 2:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "crearUsuario",
          value: function crearUsuario() {
            var _this12 = this;

            this.postService.post(this.urlCreacion, this.usuario).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
                var toast;
                return regeneratorRuntime.wrap(function _callee21$(_context21) {
                  while (1) {
                    switch (_context21.prev = _context21.next) {
                      case 0:
                        _context21.next = 2;
                        return this.toastCtrl.create({
                          message: result.message,
                          position: "middle",
                          duration: result.success ? 3000 : 0,
                          color: result.success ? "success" : "danger",
                          buttons: result.success ? [] : [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context21.sent;
                        toast.present();

                        if (result.success) {
                          this.dismiss(result);
                        }

                      case 5:
                      case "end":
                        return _context21.stop();
                    }
                  }
                }, _callee21, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
                var toast;
                return regeneratorRuntime.wrap(function _callee22$(_context22) {
                  while (1) {
                    switch (_context22.prev = _context22.next) {
                      case 0:
                        _context22.next = 2;
                        return this.toastCtrl.create({
                          message: error,
                          position: "middle",
                          color: "danger",
                          buttons: [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context22.sent;
                        toast.present();

                      case 4:
                      case "end":
                        return _context22.stop();
                    }
                  }
                }, _callee22, this);
              }));
            });
          }
        }, {
          key: "actualizarUsuario",
          value: function actualizarUsuario() {
            var _this13 = this;

            this.putService.put(this.urlEdicion, this.id, this.usuario).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
                var toast;
                return regeneratorRuntime.wrap(function _callee23$(_context23) {
                  while (1) {
                    switch (_context23.prev = _context23.next) {
                      case 0:
                        _context23.next = 2;
                        return this.toastCtrl.create({
                          message: result.message,
                          position: "middle",
                          duration: result.success ? 3000 : 0,
                          color: result.success ? "success" : "danger",
                          buttons: result.success ? [] : [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context23.sent;
                        toast.present();

                        if (result.success) {
                          this.dismiss(result);
                        }

                      case 5:
                      case "end":
                        return _context23.stop();
                    }
                  }
                }, _callee23, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
                var toast;
                return regeneratorRuntime.wrap(function _callee24$(_context24) {
                  while (1) {
                    switch (_context24.prev = _context24.next) {
                      case 0:
                        _context24.next = 2;
                        return this.toastCtrl.create({
                          message: error,
                          position: "middle",
                          color: "danger",
                          buttons: [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context24.sent;
                        toast.present();

                      case 4:
                      case "end":
                        return _context24.stop();
                    }
                  }
                }, _callee24, this);
              }));
            });
          }
        }, {
          key: "showModalError",
          value: function showModalError(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var toast;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        position: "middle",
                        color: "danger",
                        buttons: [{
                          text: 'Aceptar',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      toast = _context25.sent;
                      toast.present();
                      console.log(message);

                    case 5:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss(result) {
            this.modalCtrl.dismiss(result);
          }
        }]);

        return DetalleUsuarioComponent;
      }();

      DetalleUsuarioComponent.ctorParameters = function () {
        return [{
          type: _services_get_get_service__WEBPACK_IMPORTED_MODULE_6__["GetService"]
        }, {
          type: _services_post_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"]
        }, {
          type: _services_put_put_service__WEBPACK_IMPORTED_MODULE_8__["PutService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      DetalleUsuarioComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      DetalleUsuarioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-usuario',
        template: _raw_loader_detalle_usuario_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_usuario_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DetalleUsuarioComponent);
      /***/
    },

    /***/
    "Q/jM":
    /*!******************************************************************!*\
      !*** ./src/app/cambiar-password/cambiar-password.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function QJM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".modal-title {\n  display: flex;\n  justify-content: space-between;\n}\n.modal-title span {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtYmlhci1wYXNzd29yZC9jYW1iaWFyLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvY2FtYmlhci1wYXNzd29yZC9jYW1iaWFyLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLXRpdGxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHNwYW57XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "RyMC":
    /*!**************************************************!*\
      !*** ./src/app/user-menu/user-menu.component.ts ***!
      \**************************************************/

    /*! exports provided: UserMenuComponent */

    /***/
    function RyMC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function () {
        return UserMenuComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-menu.component.html */
      "KZsV");
      /* harmony import */


      var _user_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-menu.component.scss */
      "Bj70");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _cambiar_password_cambiar_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../cambiar-password/cambiar-password.component */
      "EPGA");

      var UserMenuComponent = /*#__PURE__*/function () {
        function UserMenuComponent(storage, router, toastCtrl, modalCtrl) {
          _classCallCheck(this, UserMenuComponent);

          this.storage = storage;
          this.router = router;
          this.toastCtrl = toastCtrl;
          this.modalCtrl = modalCtrl;
        }

        _createClass(UserMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.storage.get("nombre").then(function (val) {
              _this14.nombre = val;
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.storage.clear();
            this.router.navigate(['/login']);
          }
        }, {
          key: "mostrarModal",
          value: function mostrarModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var _this15 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      _context27.next = 2;
                      return this.modalCtrl.create({
                        component: _cambiar_password_cambiar_password_component__WEBPACK_IMPORTED_MODULE_7__["CambiarPasswordComponent"],
                        backdropDismiss: false
                      });

                    case 2:
                      modal = _context27.sent;
                      modal.present();
                      _context27.next = 6;
                      return modal.onWillDismiss().then(function (result) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
                          var toast;
                          return regeneratorRuntime.wrap(function _callee26$(_context26) {
                            while (1) {
                              switch (_context26.prev = _context26.next) {
                                case 0:
                                  if (!(result.data != null && result.data.success)) {
                                    _context26.next = 5;
                                    break;
                                  }

                                  _context26.next = 3;
                                  return this.toastCtrl.create({
                                    message: result.data.message,
                                    position: "middle",
                                    duration: result.data.success ? 3000 : 0,
                                    color: result.data.success ? "success" : "danger",
                                    buttons: result.data.success ? [] : [{
                                      text: 'Aceptar',
                                      role: 'cancel'
                                    }]
                                  });

                                case 3:
                                  toast = _context26.sent;
                                  toast.present();

                                case 5:
                                case "end":
                                  return _context26.stop();
                              }
                            }
                          }, _callee26, this);
                        }));
                      });

                    case 6:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));
          }
        }]);

        return UserMenuComponent;
      }();

      UserMenuComponent.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }];
      };

      UserMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-menu',
        template: _raw_loader_user_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserMenuComponent);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/firebase-x/ngx */
      "E9qw");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, menu, firebase) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.menu = menu;
          this.firebase = firebase;
          this.appPages = [{
            title: 'Camiones',
            url: '/camiones',
            icon: 'car'
          }, {
            title: 'Clientes',
            url: '/clientes',
            icon: 'people'
          }, {
            title: 'Usuarios',
            url: '/usuarios',
            icon: 'people-circle-outline'
          }, {
            title: 'Programación Viajes',
            url: '/programacion-viajes',
            icon: 'alarm-outline'
          }, {
            title: 'Mis Viajes',
            url: '/mis-viajes',
            icon: 'earth-outline'
          }];
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this16 = this;

            this.platform.ready().then(function () {
              _this16.statusBar.styleDefault();

              _this16.splashScreen.hide();

              _this16.firebase.getToken().then(function (token) {
                return console.log("The token is ".concat(token));
              });

              _this16.firebase.onMessageReceived().subscribe(function (data) {
                return console.log("FCM message: ".concat(data));
              });
            });
          }
        }, {
          key: "openFirst",
          value: function openFirst() {
            this.menu.enable(true, 'first');
            this.menu.open('first');
          }
        }, {
          key: "openEnd",
          value: function openEnd() {
            this.menu.open('end');
          }
        }, {
          key: "openCustom",
          value: function openCustom() {
            this.menu.enable(true, 'custom');
            this.menu.open('custom');
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_7__["FirebaseX"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VD11":
    /*!**************************************************************!*\
      !*** ./src/app/detalle-camion/detalle-camion.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function VD11(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".modal-title {\n  display: flex;\n  justify-content: space-between;\n}\n.modal-title span {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWxsZS1jYW1pb24vZGV0YWxsZS1jYW1pb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRVIiLCJmaWxlIjoic3JjL2FwcC9kZXRhbGxlLWNhbWlvbi9kZXRhbGxlLWNhbWlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC10aXRsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-menu>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <img src=\"../assets/logo-imd.png\" alt=\"logo\">\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\r\n          <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\r\n            <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n            <ion-label>\r\n              {{p.title}}\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n\r\n  <ion-router-outlet main></ion-router-outlet>\r\n</ion-app>";
      /***/
    },

    /***/
    "YiQq":
    /*!**********************************************************!*\
      !*** ./src/app/detalle-viaje/detalle-viaje.component.ts ***!
      \**********************************************************/

    /*! exports provided: DetalleViajeComponent */

    /***/
    function YiQq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetalleViajeComponent", function () {
        return DetalleViajeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalle_viaje_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalle-viaje.component.html */
      "+wKK");
      /* harmony import */


      var _detalle_viaje_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalle-viaje.component.scss */
      "dPRX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _camiones_camion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../camiones/camion */
      "+Qoh");
      /* harmony import */


      var _clientes_cliente__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../clientes/cliente */
      "BsNa");
      /* harmony import */


      var _programacion_viajes_viaje__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../programacion-viajes/viaje */
      "G7hY");
      /* harmony import */


      var _sedes_sede__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../sedes/sede */
      "ypJn");
      /* harmony import */


      var _services_get_get_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/get/get.service */
      "BQIx");
      /* harmony import */


      var _services_post_post_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/post/post.service */
      "ova0");
      /* harmony import */


      var _services_put_put_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/put/put.service */
      "+nHt");
      /* harmony import */


      var _usuarios_usuario__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../usuarios/usuario */
      "YxHF");
      /* harmony import */


      var _utils_genericService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../utils/genericService */
      "BEOd");

      var DetalleViajeComponent = /*#__PURE__*/function (_utils_genericService) {
        _inherits(DetalleViajeComponent, _utils_genericService);

        var _super2 = _createSuper(DetalleViajeComponent);

        function DetalleViajeComponent(getService, postService, putService, toastCtrl, modalCtrl) {
          var _this17;

          _classCallCheck(this, DetalleViajeComponent);

          _this17 = _super2.call(this, getService, postService, putService, toastCtrl, modalCtrl);
          _this17.getService = getService;
          _this17.postService = postService;
          _this17.putService = putService;
          _this17.toastCtrl = toastCtrl;
          _this17.modalCtrl = modalCtrl;
          _this17.url = "viajes";
          _this17.urlClientes = "clientes";
          _this17.urlCamiones = "camiones";
          _this17.urlConductores = "account/listarPorRol/conductor";
          _this17.urlAuxiliares = "account/listarPorRol/auxiliar";
          _this17.urlOrigenDestinoCliente = "sedes/PorCliente/";
          _this17.viaje = new _programacion_viajes_viaje__WEBPACK_IMPORTED_MODULE_7__["Viaje"]();
          _this17.cliente = new _clientes_cliente__WEBPACK_IMPORTED_MODULE_6__["Cliente"]();
          _this17.camion = new _camiones_camion__WEBPACK_IMPORTED_MODULE_5__["Camion"]();
          _this17.conductor = new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_12__["Usuario"]();
          _this17.auxiliar = new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_12__["Usuario"]();
          _this17.origen = new _sedes_sede__WEBPACK_IMPORTED_MODULE_8__["Sede"]();
          _this17.destino = new _sedes_sede__WEBPACK_IMPORTED_MODULE_8__["Sede"]();
          return _this17;
        }

        _createClass(DetalleViajeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            if (this.id != null) {
              _get(_getPrototypeOf(DetalleViajeComponent.prototype), "consumirGet", this).call(this, this.url + "/" + this.id).then(function (data) {
                _this18.viaje = data;
                _this18.cliente = data.cliente;
                _this18.camion = data.camion;
                _this18.conductor = data.conductor;
                _this18.auxiliar = data.auxiliar;
                _this18.origen = data.sedeOrigen;
                _this18.destino = data.sedeDestino;
                _this18.fecha = data.fecha;
                _this18.destino.nombre = data.sedeOrigen.direccion;
                _this18.habilidato = _this18.viaje.estado === "Finalizado" ? true : false;
              });
            }
          }
        }, {
          key: "acutalizarViaje",
          value: function acutalizarViaje() {
            var _this19 = this;

            var _super = Object.create(null, {
              consumirPost: {
                get: function get() {
                  return _get(_getPrototypeOf(DetalleViajeComponent.prototype), "consumirPost", _this19);
                }
              }
            });

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      if (this.viaje.inicioRuta === null || this.viaje.finRuta === null) {
                        _super.consumirPost.call(this, this.url + "/actualizarEstado", this.viaje).then(function (data) {});
                      } else {//super.consumirPost(this.url + "/actualizarEstado",this.viaje).then((data:any)=>{});  
                      }

                    case 1:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));
          }
        }, {
          key: "crearviaje",
          value: function crearviaje() {
            var _this20 = this;

            this.viaje.idCliente = this.cliente.id;
            this.viaje.idOrigen = this.origen.id;
            this.viaje.idDestino = this.destino.id;
            this.viaje.idCamion = this.camion.id;
            this.viaje.idConductor = this.conductor.id;
            this.viaje.idAuxiliar = this.auxiliar == null ? null : this.auxiliar.id;
            this.viaje.fecha = this.fecha;
            console.log(this.viaje);
            this.postService.post(this.url, this.viaje).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this20, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
                var toast;
                return regeneratorRuntime.wrap(function _callee29$(_context29) {
                  while (1) {
                    switch (_context29.prev = _context29.next) {
                      case 0:
                        _context29.next = 2;
                        return this.toastCtrl.create({
                          message: result.message,
                          position: "middle",
                          duration: result.success ? 3000 : 0,
                          color: result.success ? "success" : "danger",
                          buttons: result.success ? [] : [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context29.sent;
                        toast.present();

                        if (result.success) {
                          this.dismiss(result);
                        }

                      case 5:
                      case "end":
                        return _context29.stop();
                    }
                  }
                }, _callee29, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this20, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
                return regeneratorRuntime.wrap(function _callee30$(_context30) {
                  while (1) {
                    switch (_context30.prev = _context30.next) {
                      case 0:
                        this.showModalError(error);

                      case 1:
                      case "end":
                        return _context30.stop();
                    }
                  }
                }, _callee30, this);
              }));
            });
          }
        }, {
          key: "dismiss",
          value: function dismiss(result) {
            this.modalCtrl.dismiss(result);
          }
        }, {
          key: "showModalError",
          value: function showModalError(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              var toast;
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      _context31.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        position: "middle",
                        color: "danger",
                        buttons: [{
                          text: 'Aceptar',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      toast = _context31.sent;
                      toast.present();
                      console.log(message);

                    case 5:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));
          }
        }]);

        return DetalleViajeComponent;
      }(_utils_genericService__WEBPACK_IMPORTED_MODULE_13__["genericService"]);

      DetalleViajeComponent.ctorParameters = function () {
        return [{
          type: _services_get_get_service__WEBPACK_IMPORTED_MODULE_9__["GetService"]
        }, {
          type: _services_post_post_service__WEBPACK_IMPORTED_MODULE_10__["PostService"]
        }, {
          type: _services_put_put_service__WEBPACK_IMPORTED_MODULE_11__["PutService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      DetalleViajeComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      DetalleViajeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-viaje',
        template: _raw_loader_detalle_viaje_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_viaje_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DetalleViajeComponent);
      /***/
    },

    /***/
    "YxHF":
    /*!*************************************!*\
      !*** ./src/app/usuarios/usuario.ts ***!
      \*************************************/

    /*! exports provided: Usuario */

    /***/
    function YxHF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Usuario", function () {
        return Usuario;
      });

      var Usuario = function Usuario() {
        _classCallCheck(this, Usuario);

        this.cedula = "";
        this.password = "";
        this.nombre = "";
        this.email = "";
        this.celular = "";
        this.idCliente = 0;
        this.nombreCliente = "";
        this.roles = [{
          "nombre": "Administrador",
          "seleccionado": false
        }, {
          "nombre": "Auxiliar",
          "seleccionado": false
        }, {
          "nombre": "Cliente",
          "seleccionado": false
        }, {
          "nombre": "Conductor",
          "seleccionado": false
        }];
        this.activo = true;
      };
      /***/

    },

    /***/
    "Yz+H":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalle-programacion-viajes/detalle-programacion-viajes.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YzH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <div class=\"modal-title\">\r\n        <span>Maestro Viajes</span>\r\n        <ion-button fill=\"clear\" color=\"dark\" (click)=\"dismiss(null)\">\r\n          <ion-icon name=\"close-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n  <ion-item>\r\n    <ion-label>Fecha</ion-label>  \r\n    <ion-datetime placeholder=\"Fecha Programada\" displayFormat= \"YYYY/MM/DD h:mm A\" [(ngModel)]=\"fecha\" >\r\n    </ion-datetime>\r\n  </ion-item> \r\n\r\n  <ion-item>\r\n    <ion-label>Cliente</ion-label>\r\n    <ionic-selectable #portComponent [(ngModel)]=\"cliente\" [items]=\"clientes\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\" (onChange)=\"obtenerOrigenesDestinos()\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Clientes</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Placa</ion-label>\r\n    <ionic-selectable #portComponent [(ngModel)]=\"camion\" [items]=\"camiones\" itemValueField=\"id\" itemTextField=\"placa\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Camiones</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Conductor</ion-label>\r\n    <ionic-selectable #portComponent1 [(ngModel)]=\"conductor\" [items]=\"conductores\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Conductores</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent1.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Auxiliar</ion-label>\r\n    <ionic-selectable #portComponent2 [(ngModel)]=\"auxiliar\" [items]=\"auxiliares\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Auxiliares</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent2.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Origen</ion-label>\r\n    <ionic-selectable #portComponent3 [(ngModel)]=\"origen\" [items]=\"origenesDestinos\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Origen</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent3.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Destino</ion-label>\r\n    <ionic-selectable #portComponent4 [(ngModel)]=\"destino\" [items]=\"origenesDestinos\" itemValueField=\"id\" itemTextField=\"nombre\"\r\n      [canSearch]=\"true\">\r\n      <ng-template ionicSelectableHeaderTemplate>\r\n        <ion-toolbar>\r\n          <ion-title>\r\n            <div class=\"modal-title\">\r\n              <span>Destino</span>\r\n              <ion-button fill=\"clear\" color=\"dark\" (click)=\"portComponent4.close()\">\r\n                <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\r\n              </ion-button>\r\n            </div>\r\n          </ion-title>\r\n        </ion-toolbar>\r\n      </ng-template>\r\n    </ionic-selectable>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Valor Anticipo</ion-label>\r\n    <ion-input type=\"number\" [(ngModel)]=\"viaje.valorAnticipo\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Número Manifiesto</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"viaje.numeroManifiesto\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>Número Cuenta</ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"viaje.numeroCuenta\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-button (click)=\"guardar()\">Guardar</ion-button>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _detalle_camion_detalle_camion_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./detalle-camion/detalle-camion.component */
      "C0Sw");
      /* harmony import */


      var _services_interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./services/interceptor/interceptor.service */
      "AWUL");
      /* harmony import */


      var _detalle_sede_detalle_sede_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./detalle-sede/detalle-sede.component */
      "nJQ0");
      /* harmony import */


      var _detalle_cliente_detalle_cliente_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./detalle-cliente/detalle-cliente.component */
      "FQWS");
      /* harmony import */


      var _detalle_usuario_detalle_usuario_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./detalle-usuario/detalle-usuario.component */
      "Kuc9");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! primeng/button */
      "jIHw");
      /* harmony import */


      var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! primeng/dropdown */
      "arFO");
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! primeng/table */
      "rEr+");
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ionic-selectable */
      "8xsl");
      /* harmony import */


      var _cambiar_password_cambiar_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./cambiar-password/cambiar-password.component */
      "EPGA");
      /* harmony import */


      var _user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./user-menu/user-menu.module */
      "m/q5");
      /* harmony import */


      var _detalle_programacion_viajes_detalle_programacion_viajes_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./detalle-programacion-viajes/detalle-programacion-viajes.component */
      "snxx");
      /* harmony import */


      var _detalle_viaje_detalle_viaje_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./detalle-viaje/detalle-viaje.component */
      "YiQq");
      /* harmony import */


      var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @ionic-native/firebase-x/ngx */
      "E9qw");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _detalle_camion_detalle_camion_component__WEBPACK_IMPORTED_MODULE_15__["DetalleCamionComponent"], _detalle_sede_detalle_sede_component__WEBPACK_IMPORTED_MODULE_17__["DetalleSedeComponent"], _detalle_cliente_detalle_cliente_component__WEBPACK_IMPORTED_MODULE_18__["DetalleClienteComponent"], _detalle_usuario_detalle_usuario_component__WEBPACK_IMPORTED_MODULE_19__["DetalleUsuarioComponent"], _cambiar_password_cambiar_password_component__WEBPACK_IMPORTED_MODULE_24__["CambiarPasswordComponent"], _detalle_programacion_viajes_detalle_programacion_viajes_component__WEBPACK_IMPORTED_MODULE_26__["DetalleProgramacionViajesComponent"], _detalle_viaje_detalle_viaje_component__WEBPACK_IMPORTED_MODULE_27__["DetalleViajeComponent"]],
        entryComponents: [_detalle_camion_detalle_camion_component__WEBPACK_IMPORTED_MODULE_15__["DetalleCamionComponent"], _detalle_sede_detalle_sede_component__WEBPACK_IMPORTED_MODULE_17__["DetalleSedeComponent"], _detalle_cliente_detalle_cliente_component__WEBPACK_IMPORTED_MODULE_18__["DetalleClienteComponent"], _detalle_usuario_detalle_usuario_component__WEBPACK_IMPORTED_MODULE_19__["DetalleUsuarioComponent"], _cambiar_password_cambiar_password_component__WEBPACK_IMPORTED_MODULE_24__["CambiarPasswordComponent"], _detalle_programacion_viajes_detalle_programacion_viajes_component__WEBPACK_IMPORTED_MODULE_26__["DetalleProgramacionViajesComponent"], _detalle_viaje_detalle_viaje_component__WEBPACK_IMPORTED_MODULE_27__["DetalleViajeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_22__["TableModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"], primeng_button__WEBPACK_IMPORTED_MODULE_20__["ButtonModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_23__["IonicSelectableModule"], _user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_25__["UserMenuComponentModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__["SplashScreen"], _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_28__["FirebaseX"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicRouteStrategy"]
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
          useClass: _services_interceptor_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["InterceptorService"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZTFi":
    /*!********************************************!*\
      !*** ./src/app/login/login.component.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function ZTFi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 100%;\n}\n.login-container form {\n  max-width: 400px;\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n}\n.full-content {\n  width: 100%;\n  height: 100%;\n}\n.shadow-container {\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);\n  padding: 15px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQ1I7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQUo7QUFHQTtFQUdJLCtDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBmb3Jte1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mdWxsLWNvbnRlbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNoYWRvdy1jb250YWluZXJ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "a+fg":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detalle-camion/detalle-camion.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function aFg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div class=\"modal-title\">\n        <span>Maestro Camiones</span>\n        <ion-button fill=\"clear\" color=\"dark\" (click)=\"dismiss(null)\">\n          <ion-icon name=\"close-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-item>\n    <ion-label>Placa</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"camion.placa\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Remolque</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"camion.remolque\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Camion Propio</ion-label>\n    <ion-checkbox [(ngModel)]=\"camion.esPropio\"></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Activo</ion-label>\n    <ion-checkbox [(ngModel)]=\"camion.activo\"></ion-checkbox>\n  </ion-item>\n\n  <ion-button class=\"primary-button\" (click)=\"guardar()\">Guardar</ion-button>\n\n</ion-content>";
      /***/
    },

    /***/
    "dPRX":
    /*!************************************************************!*\
      !*** ./src/app/detalle-viaje/detalle-viaje.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function dPRX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".modal-title {\n  display: flex;\n  justify-content: space-between;\n}\n.modal-title span {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWxsZS12aWFqZS9kZXRhbGxlLXZpYWplLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvZGV0YWxsZS12aWFqZS9kZXRhbGxlLXZpYWplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLXRpdGxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHNwYW57XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "in5m":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function in5m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n\r\n  <div class=\"full-content\">\r\n    <div class=\"login-container\">\r\n      <div class=\"shadow-container\">\r\n        <img src=\"../../assets/logo-imd.png\" alt=\"logo\">\r\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Documento/Correo Electrónico</ion-label>\r\n            <ion-input id=\"email\" type=\"text\" formControlName=\"email\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Contraseña</ion-label>\r\n            <ion-input id=\"password\" type=\"password\" formControlName=\"password\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-button type=\"submit\">Ingresar</ion-button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "lIPT":
    /*!****************************************************************************************!*\
      !*** ./src/app/detalle-programacion-viajes/detalle-programacion-viajes.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function lIPT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".modal-title {\n  display: flex;\n  justify-content: space-between;\n}\n.modal-title span {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWxsZS1wcm9ncmFtYWNpb24tdmlhamVzL2RldGFsbGUtcHJvZ3JhbWFjaW9uLXZpYWplcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL2RldGFsbGUtcHJvZ3JhbWFjaW9uLXZpYWplcy9kZXRhbGxlLXByb2dyYW1hY2lvbi12aWFqZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtdGl0bGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgc3BhbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "m/q5":
    /*!***********************************************!*\
      !*** ./src/app/user-menu/user-menu.module.ts ***!
      \***********************************************/

    /*! exports provided: UserMenuComponentModule */

    /***/
    function mQ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserMenuComponentModule", function () {
        return UserMenuComponentModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _user_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-menu.component */
      "RyMC");

      var UserMenuComponentModule = function UserMenuComponentModule() {
        _classCallCheck(this, UserMenuComponentModule);
      };

      UserMenuComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["IonicStorageModule"]],
        exports: [_user_menu_component__WEBPACK_IMPORTED_MODULE_4__["UserMenuComponent"]],
        declarations: [_user_menu_component__WEBPACK_IMPORTED_MODULE_4__["UserMenuComponent"]]
      })], UserMenuComponentModule);
      /***/
    },

    /***/
    "nJQ0":
    /*!********************************************************!*\
      !*** ./src/app/detalle-sede/detalle-sede.component.ts ***!
      \********************************************************/

    /*! exports provided: DetalleSedeComponent */

    /***/
    function nJQ0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetalleSedeComponent", function () {
        return DetalleSedeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalle_sede_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalle-sede.component.html */
      "ItV+");
      /* harmony import */


      var _detalle_sede_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalle-sede.component.scss */
      "BgVr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _sedes_sede__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../sedes/sede */
      "ypJn");
      /* harmony import */


      var _services_get_get_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/get/get.service */
      "BQIx");
      /* harmony import */


      var _services_post_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/post/post.service */
      "ova0");
      /* harmony import */


      var _services_put_put_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../services/put/put.service */
      "+nHt");

      var DetalleSedeComponent = /*#__PURE__*/function () {
        function DetalleSedeComponent(getService, postService, putService, toastCtrl, modalCtrl) {
          _classCallCheck(this, DetalleSedeComponent);

          this.getService = getService;
          this.postService = postService;
          this.putService = putService;
          this.toastCtrl = toastCtrl;
          this.modalCtrl = modalCtrl;
          this.url = "sedes";
          this.sede = new _sedes_sede__WEBPACK_IMPORTED_MODULE_5__["Sede"]();
        }

        _createClass(DetalleSedeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            if (this.id != null) {
              this.getService.get(this.url, this.id).subscribe(function (result) {
                if (result.success) {
                  _this21.sede = result.message;
                }
              });
            }
          }
        }, {
          key: "guardar",
          value: function guardar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      if (this.id != null) {
                        this.actualizarSede();
                      } else {
                        this.crearSede();
                      }

                    case 1:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));
          }
        }, {
          key: "crearSede",
          value: function crearSede() {
            var _this22 = this;

            this.postService.post(this.url, this.sede).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
                var toast;
                return regeneratorRuntime.wrap(function _callee33$(_context33) {
                  while (1) {
                    switch (_context33.prev = _context33.next) {
                      case 0:
                        _context33.next = 2;
                        return this.toastCtrl.create({
                          message: result.message,
                          position: "middle",
                          duration: result.success ? 3000 : 0,
                          color: result.success ? "success" : "danger",
                          buttons: result.success ? [] : [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context33.sent;
                        toast.present();

                        if (result.success) {
                          this.dismiss(result);
                        }

                      case 5:
                      case "end":
                        return _context33.stop();
                    }
                  }
                }, _callee33, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
                var toast;
                return regeneratorRuntime.wrap(function _callee34$(_context34) {
                  while (1) {
                    switch (_context34.prev = _context34.next) {
                      case 0:
                        _context34.next = 2;
                        return this.toastCtrl.create({
                          message: error,
                          position: "middle",
                          color: "danger",
                          buttons: [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context34.sent;
                        toast.present();

                      case 4:
                      case "end":
                        return _context34.stop();
                    }
                  }
                }, _callee34, this);
              }));
            });
          }
        }, {
          key: "actualizarSede",
          value: function actualizarSede() {
            var _this23 = this;

            this.putService.put(this.url, this.id, this.sede).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
                var toast;
                return regeneratorRuntime.wrap(function _callee35$(_context35) {
                  while (1) {
                    switch (_context35.prev = _context35.next) {
                      case 0:
                        _context35.next = 2;
                        return this.toastCtrl.create({
                          message: result.message,
                          position: "middle",
                          duration: result.success ? 3000 : 0,
                          color: result.success ? "success" : "danger",
                          buttons: result.success ? [] : [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context35.sent;
                        toast.present();

                        if (result.success) {
                          this.dismiss(result);
                        }

                      case 5:
                      case "end":
                        return _context35.stop();
                    }
                  }
                }, _callee35, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this23, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
                var toast;
                return regeneratorRuntime.wrap(function _callee36$(_context36) {
                  while (1) {
                    switch (_context36.prev = _context36.next) {
                      case 0:
                        _context36.next = 2;
                        return this.toastCtrl.create({
                          message: error,
                          position: "middle",
                          color: "danger",
                          buttons: [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context36.sent;
                        toast.present();

                      case 4:
                      case "end":
                        return _context36.stop();
                    }
                  }
                }, _callee36, this);
              }));
            });
          }
        }, {
          key: "dismiss",
          value: function dismiss(result) {
            this.modalCtrl.dismiss(result);
          }
        }]);

        return DetalleSedeComponent;
      }();

      DetalleSedeComponent.ctorParameters = function () {
        return [{
          type: _services_get_get_service__WEBPACK_IMPORTED_MODULE_6__["GetService"]
        }, {
          type: _services_post_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"]
        }, {
          type: _services_put_put_service__WEBPACK_IMPORTED_MODULE_8__["PutService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      DetalleSedeComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      DetalleSedeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-sede',
        template: _raw_loader_detalle_sede_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_sede_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DetalleSedeComponent);
      /***/
    },

    /***/
    "ova0":
    /*!***********************************************!*\
      !*** ./src/app/services/post/post.service.ts ***!
      \***********************************************/

    /*! exports provided: PostService */

    /***/
    function ova0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostService", function () {
        return PostService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var PostService = /*#__PURE__*/function () {
        //Constructor of the Service with Dependency Injection @param http The standard Angular HttpClient to make requests
        function PostService(http, storage) {
          _classCallCheck(this, PostService);

          this.http = http;
          this.storage = storage;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
          this.apiKey = ''; // <-- Enter your own key here!
        }

        _createClass(PostService, [{
          key: "post",
          value: function post(url, object) {
            var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            return this.http.post(this.baseUrl + url, object, {
              headers: reqHeader
            });
          }
        }]);

        return PostService;
      }();

      PostService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }];
      };

      PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PostService);
      /***/
    },

    /***/
    "snxx":
    /*!**************************************************************************************!*\
      !*** ./src/app/detalle-programacion-viajes/detalle-programacion-viajes.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: DetalleProgramacionViajesComponent */

    /***/
    function snxx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetalleProgramacionViajesComponent", function () {
        return DetalleProgramacionViajesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detalle_programacion_viajes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detalle-programacion-viajes.component.html */
      "Yz+H");
      /* harmony import */


      var _detalle_programacion_viajes_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detalle-programacion-viajes.component.scss */
      "lIPT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _camiones_camion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../camiones/camion */
      "+Qoh");
      /* harmony import */


      var _clientes_cliente__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../clientes/cliente */
      "BsNa");
      /* harmony import */


      var _programacion_viajes_viaje__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../programacion-viajes/viaje */
      "G7hY");
      /* harmony import */


      var _sedes_sede__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../sedes/sede */
      "ypJn");
      /* harmony import */


      var _services_get_get_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/get/get.service */
      "BQIx");
      /* harmony import */


      var _services_post_post_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/post/post.service */
      "ova0");
      /* harmony import */


      var _services_put_put_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/put/put.service */
      "+nHt");
      /* harmony import */


      var _usuarios_usuario__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../usuarios/usuario */
      "YxHF");
      /* harmony import */


      var _utils_genericService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../utils/genericService */
      "BEOd");

      var DetalleProgramacionViajesComponent = /*#__PURE__*/function (_utils_genericService2) {
        _inherits(DetalleProgramacionViajesComponent, _utils_genericService2);

        var _super3 = _createSuper(DetalleProgramacionViajesComponent);

        function DetalleProgramacionViajesComponent(getService, postService, putService, toastCtrl, modalCtrl) {
          var _this24;

          _classCallCheck(this, DetalleProgramacionViajesComponent);

          _this24 = _super3.call(this, getService, postService, putService, toastCtrl, modalCtrl);
          _this24.getService = getService;
          _this24.postService = postService;
          _this24.putService = putService;
          _this24.toastCtrl = toastCtrl;
          _this24.modalCtrl = modalCtrl;
          _this24.url = "viajes";
          _this24.urlClientes = "clientes";
          _this24.urlCamiones = "camiones";
          _this24.urlConductores = "account/listarPorRol/conductor";
          _this24.urlAuxiliares = "account/listarPorRol/auxiliar";
          _this24.urlOrigenDestinoCliente = "sedes/PorCliente/";
          _this24.viaje = new _programacion_viajes_viaje__WEBPACK_IMPORTED_MODULE_7__["Viaje"]();
          _this24.cliente = new _clientes_cliente__WEBPACK_IMPORTED_MODULE_6__["Cliente"]();
          _this24.camion = new _camiones_camion__WEBPACK_IMPORTED_MODULE_5__["Camion"]();
          _this24.conductor = new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_12__["Usuario"]();
          _this24.auxiliar = new _usuarios_usuario__WEBPACK_IMPORTED_MODULE_12__["Usuario"]();
          _this24.origen = new _sedes_sede__WEBPACK_IMPORTED_MODULE_8__["Sede"]();
          _this24.destino = new _sedes_sede__WEBPACK_IMPORTED_MODULE_8__["Sede"]();
          return _this24;
        }

        _createClass(DetalleProgramacionViajesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.obtenerClientes();
            this.obtenerCamiones();
            this.obtenerConductores();
            this.obtenerAuxiliares();

            if (this.id != null) {
              _get(_getPrototypeOf(DetalleProgramacionViajesComponent.prototype), "consumirGet", this).call(this, this.url + "/" + this.id).then(function (data) {
                _this25.viaje = data;
                _this25.cliente = data.cliente;
                _this25.camion = data.camion;
                _this25.conductor = data.conductor;
                _this25.auxiliar = data.auxiliar;
                _this25.origen = data.sedeOrigen;
                _this25.destino = data.sedeDestino;
                _this25.fecha = data.fecha;
              });
            }
          }
        }, {
          key: "guardar",
          value: function guardar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      if (this.id != null) {
                        this.actualizarviaje();
                      } else {
                        this.crearviaje();
                      }

                    case 1:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37, this);
            }));
          }
        }, {
          key: "crearviaje",
          value: function crearviaje() {
            var _this26 = this;

            this.viaje.idCliente = this.cliente.id;
            this.viaje.idOrigen = this.origen.id;
            this.viaje.idDestino = this.destino.id;
            this.viaje.idCamion = this.camion.id;
            this.viaje.idConductor = this.conductor.id;
            this.viaje.idAuxiliar = this.auxiliar == null ? null : this.auxiliar.id;
            this.viaje.fecha = this.fecha;
            console.log(this.viaje);
            this.postService.post(this.url, this.viaje).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this26, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
                var toast;
                return regeneratorRuntime.wrap(function _callee38$(_context38) {
                  while (1) {
                    switch (_context38.prev = _context38.next) {
                      case 0:
                        _context38.next = 2;
                        return this.toastCtrl.create({
                          message: result.message,
                          position: "middle",
                          duration: result.success ? 3000 : 0,
                          color: result.success ? "success" : "danger",
                          buttons: result.success ? [] : [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context38.sent;
                        toast.present();

                        if (result.success) {
                          this.dismiss(result);
                        }

                      case 5:
                      case "end":
                        return _context38.stop();
                    }
                  }
                }, _callee38, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this26, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
                return regeneratorRuntime.wrap(function _callee39$(_context39) {
                  while (1) {
                    switch (_context39.prev = _context39.next) {
                      case 0:
                        this.showModalError(error);

                      case 1:
                      case "end":
                        return _context39.stop();
                    }
                  }
                }, _callee39, this);
              }));
            });
          }
        }, {
          key: "actualizarviaje",
          value: function actualizarviaje() {
            var _this27 = this;

            this.putService.put(this.url, this.id, this.viaje).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this27, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
                var toast;
                return regeneratorRuntime.wrap(function _callee40$(_context40) {
                  while (1) {
                    switch (_context40.prev = _context40.next) {
                      case 0:
                        _context40.next = 2;
                        return this.toastCtrl.create({
                          message: result.message,
                          position: "middle",
                          duration: result.success ? 3000 : 0,
                          color: result.success ? "success" : "danger",
                          buttons: result.success ? [] : [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context40.sent;
                        toast.present();

                        if (result.success) {
                          this.dismiss(result);
                        }

                      case 5:
                      case "end":
                        return _context40.stop();
                    }
                  }
                }, _callee40, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this27, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
                return regeneratorRuntime.wrap(function _callee41$(_context41) {
                  while (1) {
                    switch (_context41.prev = _context41.next) {
                      case 0:
                        this.showModalError(error);

                      case 1:
                      case "end":
                        return _context41.stop();
                    }
                  }
                }, _callee41, this);
              }));
            });
          }
        }, {
          key: "dismiss",
          value: function dismiss(result) {
            this.modalCtrl.dismiss(result);
          }
        }, {
          key: "showModalError",
          value: function showModalError(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
              var toast;
              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      _context42.next = 2;
                      return this.toastCtrl.create({
                        message: message,
                        position: "middle",
                        color: "danger",
                        buttons: [{
                          text: 'Aceptar',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      toast = _context42.sent;
                      toast.present();
                      console.log(message);

                    case 5:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42, this);
            }));
          } //servicios externos

        }, {
          key: "obtenerClientes",
          value: function obtenerClientes() {
            var _this28 = this;

            this.getService.get(this.urlClientes).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this28, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
                return regeneratorRuntime.wrap(function _callee43$(_context43) {
                  while (1) {
                    switch (_context43.prev = _context43.next) {
                      case 0:
                        if (result.success) {
                          this.clientes = result.message;
                        } else {
                          this.showModalError(result.message);
                        }

                      case 1:
                      case "end":
                        return _context43.stop();
                    }
                  }
                }, _callee43, this);
              }));
            });
          }
        }, {
          key: "obtenerCamiones",
          value: function obtenerCamiones() {
            var _this29 = this;

            this.getService.get(this.urlCamiones).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this29, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
                return regeneratorRuntime.wrap(function _callee44$(_context44) {
                  while (1) {
                    switch (_context44.prev = _context44.next) {
                      case 0:
                        if (result.success) {
                          this.camiones = result.message;
                        } else {
                          this.showModalError(result.message);
                        }

                      case 1:
                      case "end":
                        return _context44.stop();
                    }
                  }
                }, _callee44, this);
              }));
            });
          }
        }, {
          key: "obtenerConductores",
          value: function obtenerConductores() {
            var _this30 = this;

            this.getService.get(this.urlConductores).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this30, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee45() {
                return regeneratorRuntime.wrap(function _callee45$(_context45) {
                  while (1) {
                    switch (_context45.prev = _context45.next) {
                      case 0:
                        if (result.success) {
                          this.conductores = result.message;
                        } else {
                          this.showModalError(result.message);
                        }

                      case 1:
                      case "end":
                        return _context45.stop();
                    }
                  }
                }, _callee45, this);
              }));
            });
          }
        }, {
          key: "obtenerAuxiliares",
          value: function obtenerAuxiliares() {
            var _this31 = this;

            this.getService.get(this.urlAuxiliares).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this31, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
                return regeneratorRuntime.wrap(function _callee46$(_context46) {
                  while (1) {
                    switch (_context46.prev = _context46.next) {
                      case 0:
                        if (result.success) {
                          this.auxiliares = result.message;
                        } else {
                          this.showModalError(result.message);
                        }

                      case 1:
                      case "end":
                        return _context46.stop();
                    }
                  }
                }, _callee46, this);
              }));
            });
          }
        }, {
          key: "obtenerOrigenesDestinos",
          value: function obtenerOrigenesDestinos() {
            var _this32 = this;

            console.log(this.urlOrigenDestinoCliente + this.cliente.id);
            this.getService.get(this.urlOrigenDestinoCliente + this.cliente.id).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this32, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
                return regeneratorRuntime.wrap(function _callee47$(_context47) {
                  while (1) {
                    switch (_context47.prev = _context47.next) {
                      case 0:
                        if (result.success) {
                          this.origenesDestinos = result.message;
                        } else {
                          this.showModalError(result.message);
                        }

                      case 1:
                      case "end":
                        return _context47.stop();
                    }
                  }
                }, _callee47, this);
              }));
            });
          }
        }]);

        return DetalleProgramacionViajesComponent;
      }(_utils_genericService__WEBPACK_IMPORTED_MODULE_13__["genericService"]);

      DetalleProgramacionViajesComponent.ctorParameters = function () {
        return [{
          type: _services_get_get_service__WEBPACK_IMPORTED_MODULE_9__["GetService"]
        }, {
          type: _services_post_post_service__WEBPACK_IMPORTED_MODULE_10__["PostService"]
        }, {
          type: _services_put_put_service__WEBPACK_IMPORTED_MODULE_11__["PutService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      DetalleProgramacionViajesComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      DetalleProgramacionViajesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalle-programacion-viajes',
        template: _raw_loader_detalle_programacion_viajes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalle_programacion_viajes_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DetalleProgramacionViajesComponent);
      /***/
    },

    /***/
    "u7ZW":
    /*!****************************************************************!*\
      !*** ./src/app/detalle-cliente/detalle-cliente.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function u7ZW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".modal-title {\n  display: flex;\n  justify-content: space-between;\n}\n.modal-title span {\n  display: flex;\n  align-items: center;\n}\n.agregar-sede-button {\n  margin: 10px;\n  display: flex;\n  justify-content: flex-end;\n}\n:host ::ng-deep .p-datatable-responsive-demo .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n.p-d-flex {\n  display: flex;\n  justify-content: space-between;\n}\n.action-column {\n  text-align: center !important;\n}\n.action-column p-button {\n  margin: 3px;\n}\n@media screen and (max-width: 40rem) {\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-thead > tr > th,\n:host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tbody > tr > td {\n    text-align: left;\n    display: block;\n    width: 100%;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4em 1em -0.4em -0.4rem;\n    font-weight: bold;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tbody > tr > td:last-child {\n    border-bottom: 1px solid var(--surface-d);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWxsZS1jbGllbnRlL2RldGFsbGUtY2xpZW50ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNKO0FBR0k7RUFDSSxhQUFBO0FBQVI7QUFJQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQURKO0FBSUE7RUFDSSw2QkFBQTtBQURKO0FBRUk7RUFDSSxXQUFBO0FBQVI7QUFJQTtFQUlnQjs7SUFFSSx3QkFBQTtFQUpsQjtFQU9jO0lBQ0ksZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtFQUxsQjtFQU9rQjtJQUNJLGVBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxpQ0FBQTtJQUNBLGlCQUFBO0VBTHRCO0VBUWtCO0lBQ0kseUNBQUE7RUFOdEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2RldGFsbGUtY2xpZW50ZS9kZXRhbGxlLWNsaWVudGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtdGl0bGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgc3BhbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hZ3JlZ2FyLXNlZGUtYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCB7ICAgIFxyXG4gICAgLnAtZGF0YXRhYmxlLXJlc3BvbnNpdmUtZGVtbyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIC5wLWNvbHVtbi10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLnAtZC1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmFjdGlvbi1jb2x1bW57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIHAtYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MHJlbSkge1xyXG4gICAgOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgICAgICAucC1kYXRhdGFibGUge1xyXG4gICAgICAgICAgICAmLnAtZGF0YXRhYmxlLXJlc3BvbnNpdmUtZGVtbyB7XHJcbiAgICAgICAgICAgICAgICAucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxyXG4gICAgICAgICAgICAgICAgLnAtZGF0YXRhYmxlLXRmb290ID4gdHIgPiB0ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwIG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wLWNvbHVtbi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC0uNGVtIDFlbSAtLjRlbSAtLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
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


      var routes = [{
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
      }, {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'camiones',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | camiones-camiones-module */
          "camiones-camiones-module").then(__webpack_require__.bind(null,
          /*! ./camiones/camiones.module */
          "cDn4")).then(function (m) {
            return m.CamionesPageModule;
          });
        }
      }, {
        path: 'usuarios',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | usuarios-usuarios-module */
          "usuarios-usuarios-module").then(__webpack_require__.bind(null,
          /*! ./usuarios/usuarios.module */
          "0G8V")).then(function (m) {
            return m.UsuariosPageModule;
          });
        }
      }, {
        path: 'clientes',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | clientes-clientes-module */
          "clientes-clientes-module").then(__webpack_require__.bind(null,
          /*! ./clientes/clientes.module */
          "3HbQ")).then(function (m) {
            return m.ClientesPageModule;
          });
        }
      }, {
        path: 'sedes',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | sedes-sedes-module */
          "sedes-sedes-module").then(__webpack_require__.bind(null,
          /*! ./sedes/sedes.module */
          "AewH")).then(function (m) {
            return m.SedesPageModule;
          });
        }
      }, {
        path: 'programacion-viajes',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | programacion-viajes-programacion-viajes-module */
          "programacion-viajes-programacion-viajes-module").then(__webpack_require__.bind(null,
          /*! ./programacion-viajes/programacion-viajes.module */
          "XQjU")).then(function (m) {
            return m.ProgramacionViajesPageModule;
          });
        }
      }, {
        path: 'mis-viajes',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mis-viajes-mis-viajes-module */
          "mis-viajes-mis-viajes-module").then(__webpack_require__.bind(null,
          /*! ./mis-viajes/mis-viajes.module */
          "dgGR")).then(function (m) {
            return m.MisViajesPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "in5m");
      /* harmony import */


      var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.scss */
      "ZTFi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_post_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/post/post.service */
      "ova0");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, storage, postService, toastCtrl, modalCtrl, formBuilder) {
          _classCallCheck(this, LoginComponent);

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

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login(loginForm) {
            var _this33 = this;

            this.postService.post(this.url, loginForm).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this33, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee48() {
                var toast;
                return regeneratorRuntime.wrap(function _callee48$(_context48) {
                  while (1) {
                    switch (_context48.prev = _context48.next) {
                      case 0:
                        if (!result.success) {
                          _context48.next = 9;
                          break;
                        }

                        this.storage.clear();
                        this.storage.set('token', result.token);
                        this.storage.set('expiration', result.expiration);
                        this.storage.set('nombre', result.nombre);
                        this.loginForm.reset();
                        this.router.navigate(['/mis-viajes']);
                        _context48.next = 13;
                        break;

                      case 9:
                        _context48.next = 11;
                        return this.toastCtrl.create({
                          message: result.message,
                          position: "middle",
                          color: "danger",
                          buttons: [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 11:
                        toast = _context48.sent;
                        toast.present();

                      case 13:
                      case "end":
                        return _context48.stop();
                    }
                  }
                }, _callee48, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this33, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee49() {
                var toast;
                return regeneratorRuntime.wrap(function _callee49$(_context49) {
                  while (1) {
                    switch (_context49.prev = _context49.next) {
                      case 0:
                        _context49.next = 2;
                        return this.toastCtrl.create({
                          message: error.message,
                          position: "middle",
                          color: "danger",
                          buttons: [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 2:
                        toast = _context49.sent;
                        toast.present();

                      case 4:
                      case "end":
                        return _context49.stop();
                    }
                  }
                }, _callee49, this);
              }));
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _services_post_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginComponent);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "ypJn":
    /*!*******************************!*\
      !*** ./src/app/sedes/sede.ts ***!
      \*******************************/

    /*! exports provided: Sede */

    /***/
    function ypJn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Sede", function () {
        return Sede;
      });

      var Sede = function Sede() {
        _classCallCheck(this, Sede);

        this.id = 0;
        this.nombre = "";
        this.direccion = "";
        this.activo = true;
      };
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map