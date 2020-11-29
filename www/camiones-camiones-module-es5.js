(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["camiones-camiones-module"], {
    /***/
    "Au6/":
    /*!*****************************************************!*\
      !*** ./src/app/camiones/camiones-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: CamionesPageRoutingModule */

    /***/
    function Au6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CamionesPageRoutingModule", function () {
        return CamionesPageRoutingModule;
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


      var _camiones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./camiones.page */
      "EIis");

      var routes = [{
        path: '',
        component: _camiones_page__WEBPACK_IMPORTED_MODULE_3__["CamionesPage"]
      }];

      var CamionesPageRoutingModule = function CamionesPageRoutingModule() {
        _classCallCheck(this, CamionesPageRoutingModule);
      };

      CamionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CamionesPageRoutingModule);
      /***/
    },

    /***/
    "EIis":
    /*!*******************************************!*\
      !*** ./src/app/camiones/camiones.page.ts ***!
      \*******************************************/

    /*! exports provided: CamionesPage */

    /***/
    function EIis(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CamionesPage", function () {
        return CamionesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_camiones_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./camiones.page.html */
      "c9dh");
      /* harmony import */


      var _camiones_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./camiones.page.scss */
      "saUG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _detalle_camion_detalle_camion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../detalle-camion/detalle-camion.component */
      "C0Sw");
      /* harmony import */


      var _services_get_get_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/get/get.service */
      "BQIx");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");

      var CamionesPage = /*#__PURE__*/function () {
        function CamionesPage(getService, toastCtrl, modalCtrl, storage) {
          _classCallCheck(this, CamionesPage);

          this.getService = getService;
          this.toastCtrl = toastCtrl;
          this.modalCtrl = modalCtrl;
          this.storage = storage;
          this.url = "camiones";
          this.camiones = [];
          this.statuses = [{
            label: 'Activo',
            value: 'true'
          }, {
            label: 'Inactivo',
            value: 'false'
          }];
          this.statusesPropio = [{
            label: 'Si',
            value: 'true'
          }, {
            label: 'No',
            value: 'false'
          }];
          this.cols = [{
            field: 'placa',
            header: 'Placa'
          }, {
            field: 'remolque',
            header: 'Remolque'
          }, {
            field: 'esPropio',
            header: 'Propio'
          }, {
            field: 'activo',
            header: 'Estado'
          }];
        }

        _createClass(CamionesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.obtenerCamiones();
          }
        }, {
          key: "obtenerCamiones",
          value: function obtenerCamiones() {
            var _this = this;

            this.getService.get(this.url).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var toast;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!result.success) {
                          _context.next = 4;
                          break;
                        }

                        this.camiones = result.message;
                        _context.next = 9;
                        break;

                      case 4:
                        _context.next = 6;
                        return this.toastCtrl.create({
                          message: result.message,
                          position: "middle",
                          buttons: [{
                            text: 'Aceptar',
                            role: 'cancel'
                          }]
                        });

                      case 6:
                        toast = _context.sent;
                        toast.present();
                        console.log(result.message);

                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "mostrarModal",
          value: function mostrarModal(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalCtrl.create({
                        component: _detalle_camion_detalle_camion_component__WEBPACK_IMPORTED_MODULE_5__["DetalleCamionComponent"],
                        componentProps: {
                          'id': id
                        },
                        backdropDismiss: false
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.present();
                      _context2.next = 6;
                      return modal.onWillDismiss().then(function (result) {
                        if (result.data != null && result.data.success) {
                          _this2.obtenerCamiones();
                        }
                      });

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return CamionesPage;
      }();

      CamionesPage.ctorParameters = function () {
        return [{
          type: _services_get_get_service__WEBPACK_IMPORTED_MODULE_6__["GetService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }];
      };

      CamionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-camiones',
        template: _raw_loader_camiones_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_camiones_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CamionesPage);
      /***/
    },

    /***/
    "c9dh":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/camiones/camiones.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function c9dh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Camiones\n    </ion-title>\n  </ion-toolbar>\n  <app-user-menu></app-user-menu>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <p-table #dt [columns]=\"cols\" exportFilename=\"camiones\" [value]=\"camiones\"\n    styleClass=\"p-datatable-striped p-datatable-responsive-demo\" [paginator]=\"true\" [rows]=\"10\"\n    [showCurrentPageReport]=\"true\" currentPageReportTemplate=\"Mostrando {first} a {last} de {totalRecords} registros\"\n    [rowsPerPageOptions]=\"[10,25,50]\">\n    <ng-template pTemplate=\"caption\">\n      <div class=\"p-d-flex\">\n        <p-button label=\"Agregar Nuevo\" icon=\"pi pi-plus\" iconPos=\"left\" (click)=\"mostrarModal(null)\"></p-button>\n        <p-button label=\"Exportar a CSV\" icon=\"pi pi-file-o\" iconPos=\"left\" (click)=\"dt.exportCSV()\"></p-button>\n      </div>\n    </ng-template>\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th pSortableColumn=\"placa\">Placa <p-sortIcon field=\"placa\"></p-sortIcon>\n        </th>\n        <th pSortableColumn=\"remolque\">Remolque <p-sortIcon field=\"remolque\"></p-sortIcon>\n        </th>\n        <th pSortableColumn=\"esPropio\">Propio <p-sortIcon field=\"esPropio\"></p-sortIcon>\n        </th>\n        <th pSortableColumn=\"activo\">Estado <p-sortIcon field=\"activo\"></p-sortIcon>\n        </th>\n        <th rowspan=\"2\" class=\"action-column\">Acciones</th>\n      </tr>\n      <tr>\n        <th>\n          <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'placa', 'contains')\"\n            placeholder=\"Buscar por Placa\" class=\"p-column-filter\">\n        </th>\n        <th>\n          <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'remolque', 'contains')\"\n            placeholder=\"Buscar por Remolque\" class=\"p-column-filter\">\n        </th>\n        <th>\n          <p-dropdown [options]=\"statusesPropio\" (onChange)=\"dt.filter($event.value, 'esPropio', 'equals')\"\n            styleClass=\"p-column-filter\" placeholder=\"Buscar por Propio\" [showClear]=\"true\">\n            <ng-template let-option pTemplate=\"item\">\n              <span>{{option.label}}</span>\n            </ng-template>\n          </p-dropdown>\n        </th>\n        <th>\n          <p-dropdown [options]=\"statuses\" (onChange)=\"dt.filter($event.value, 'activo', 'equals')\"\n            styleClass=\"p-column-filter\" placeholder=\"Buscar por Estado\" [showClear]=\"true\">\n            <ng-template let-option pTemplate=\"item\">\n              <span>{{option.label}}</span>\n            </ng-template>\n          </p-dropdown>\n        </th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-camion>\n      <tr>\n        <td><span class=\"p-column-title\">Placa </span>{{camion.placa}}</td>\n        <td><span class=\"p-column-title\">Remolque </span>{{camion.remolque}}</td>\n        <td><span class=\"p-column-title\">Propio </span>{{camion.esPropio == true ? \"Si\" : \"No\"}}</td>\n        <td><span class=\"p-column-title\">Estado </span>{{camion.activo == true ? \"Activo\" : \"Inactivo\"}}</td>\n        <td class=\"action-column\">\n          <p-button label=\"Editar\" icon=\"pi pi-pencil\" iconPos=\"left\" (click)=\"mostrarModal(camion.id)\" class=\"primary-button\"></p-button>\n        </td>\n      </tr>\n    </ng-template>\n  </p-table>\n\n</ion-content>";
      /***/
    },

    /***/
    "cDn4":
    /*!*********************************************!*\
      !*** ./src/app/camiones/camiones.module.ts ***!
      \*********************************************/

    /*! exports provided: CamionesPageModule */

    /***/
    function cDn4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CamionesPageModule", function () {
        return CamionesPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _camiones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./camiones-routing.module */
      "Au6/");
      /* harmony import */


      var _camiones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./camiones.page */
      "EIis");
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/table */
      "rEr+");
      /* harmony import */


      var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/dropdown */
      "arFO");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! primeng/button */
      "jIHw");
      /* harmony import */


      var _user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../user-menu/user-menu.module */
      "m/q5");

      var CamionesPageModule = function CamionesPageModule() {
        _classCallCheck(this, CamionesPageModule);
      };

      CamionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _camiones_routing_module__WEBPACK_IMPORTED_MODULE_5__["CamionesPageRoutingModule"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"], _user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_10__["UserMenuComponentModule"]],
        declarations: [_camiones_page__WEBPACK_IMPORTED_MODULE_6__["CamionesPage"]]
      })], CamionesPageModule);
      /***/
    },

    /***/
    "saUG":
    /*!*********************************************!*\
      !*** ./src/app/camiones/camiones.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function saUG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ::ng-deep .p-datatable-responsive-demo .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n\n.p-d-flex {\n  display: flex;\n  justify-content: space-between;\n}\n\n.action-column {\n  text-align: center !important;\n}\n\n@media screen and (max-width: 40rem) {\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-thead > tr > th,\n:host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tbody > tr > td {\n    text-align: left;\n    display: block;\n    width: 100%;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4em 1em -0.4em -0.4rem;\n    font-weight: bold;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tbody > tr > td:last-child {\n    border-bottom: 1px solid var(--surface-d);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtaW9uZXMvY2FtaW9uZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksYUFBQTtBQUZSOztBQU1BO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBSEo7O0FBTUE7RUFDSSw2QkFBQTtBQUhKOztBQVFBO0VBSWdCOztJQUVJLHdCQUFBO0VBUmxCO0VBV2M7SUFDSSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VBVGxCO0VBV2tCO0lBQ0ksZUFBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtJQUNBLGlDQUFBO0lBQ0EsaUJBQUE7RUFUdEI7RUFZa0I7SUFDSSx5Q0FBQTtFQVZ0QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY2FtaW9uZXMvY2FtaW9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgeyAgICBcclxuICAgIC5wLWRhdGF0YWJsZS1yZXNwb25zaXZlLWRlbW8gLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCAucC1jb2x1bW4tdGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wLWQtZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5hY3Rpb24tY29sdW1ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDByZW0pIHtcclxuICAgIDpob3N0IDo6bmctZGVlcCB7XHJcbiAgICAgICAgLnAtZGF0YXRhYmxlIHtcclxuICAgICAgICAgICAgJi5wLWRhdGF0YWJsZS1yZXNwb25zaXZlLWRlbW8ge1xyXG4gICAgICAgICAgICAgICAgLnAtZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCxcclxuICAgICAgICAgICAgICAgIC5wLWRhdGF0YWJsZS10Zm9vdCA+IHRyID4gdGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAucC1jb2x1bW4tdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAtLjRlbSAxZW0gLS40ZW0gLS40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=camiones-camiones-module-es5.js.map