(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clientes-clientes-module"], {
    /***/
    "3HbQ":
    /*!*********************************************!*\
      !*** ./src/app/clientes/clientes.module.ts ***!
      \*********************************************/

    /*! exports provided: ClientesPageModule */

    /***/
    function HbQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientesPageModule", function () {
        return ClientesPageModule;
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


      var _clientes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./clientes-routing.module */
      "A1Qv");
      /* harmony import */


      var _clientes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./clientes.page */
      "4btW");
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

      var ClientesPageModule = function ClientesPageModule() {
        _classCallCheck(this, ClientesPageModule);
      };

      ClientesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _clientes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientesPageRoutingModule"], primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"], _user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_10__["UserMenuComponentModule"]],
        declarations: [_clientes_page__WEBPACK_IMPORTED_MODULE_6__["ClientesPage"]]
      })], ClientesPageModule);
      /***/
    },

    /***/
    "4btW":
    /*!*******************************************!*\
      !*** ./src/app/clientes/clientes.page.ts ***!
      \*******************************************/

    /*! exports provided: ClientesPage */

    /***/
    function btW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientesPage", function () {
        return ClientesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_clientes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./clientes.page.html */
      "xZ/V");
      /* harmony import */


      var _clientes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./clientes.page.scss */
      "KCqo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_get_get_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/get/get.service */
      "BQIx");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _detalle_cliente_detalle_cliente_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../detalle-cliente/detalle-cliente.component */
      "FQWS");

      var ClientesPage = /*#__PURE__*/function () {
        function ClientesPage(getService, toastCtrl, modalCtrl) {
          _classCallCheck(this, ClientesPage);

          this.getService = getService;
          this.toastCtrl = toastCtrl;
          this.modalCtrl = modalCtrl;
          this.url = "clientes";
          this.clientes = [];
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

        _createClass(ClientesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.obtenerClientes();
          }
        }, {
          key: "obtenerClientes",
          value: function obtenerClientes() {
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

                        this.clientes = result.message;
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
                        component: _detalle_cliente_detalle_cliente_component__WEBPACK_IMPORTED_MODULE_6__["DetalleClienteComponent"],
                        componentProps: {
                          'id': id
                        },
                        backdropDismiss: false,
                        cssClass: 'long-modal'
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.present();
                      _context2.next = 6;
                      return modal.onWillDismiss().then(function (result) {
                        if (result.data != null && result.data.success) {
                          _this2.obtenerClientes();
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

        return ClientesPage;
      }();

      ClientesPage.ctorParameters = function () {
        return [{
          type: _services_get_get_service__WEBPACK_IMPORTED_MODULE_4__["GetService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }];
      };

      ClientesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-clientes',
        template: _raw_loader_clientes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_clientes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ClientesPage);
      /***/
    },

    /***/
    "A1Qv":
    /*!*****************************************************!*\
      !*** ./src/app/clientes/clientes-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ClientesPageRoutingModule */

    /***/
    function A1Qv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientesPageRoutingModule", function () {
        return ClientesPageRoutingModule;
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


      var _clientes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./clientes.page */
      "4btW");

      var routes = [{
        path: '',
        component: _clientes_page__WEBPACK_IMPORTED_MODULE_3__["ClientesPage"]
      }];

      var ClientesPageRoutingModule = function ClientesPageRoutingModule() {
        _classCallCheck(this, ClientesPageRoutingModule);
      };

      ClientesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ClientesPageRoutingModule);
      /***/
    },

    /***/
    "KCqo":
    /*!*********************************************!*\
      !*** ./src/app/clientes/clientes.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function KCqo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ::ng-deep .p-datatable-responsive-demo .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n\n.p-d-flex {\n  display: flex;\n  justify-content: space-between;\n}\n\n.action-column {\n  text-align: center !important;\n}\n\n@media screen and (max-width: 40rem) {\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-thead > tr > th,\n:host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tbody > tr > td {\n    text-align: left;\n    display: block;\n    width: 100%;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4em 1em -0.4em -0.4rem;\n    font-weight: bold;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-responsive-demo .p-datatable-tbody > tr > td:last-child {\n    border-bottom: 1px solid var(--surface-d);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtBQUFSOztBQUlBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBREo7O0FBSUE7RUFDSSw2QkFBQTtBQURKOztBQUlBO0VBSWdCOztJQUVJLHdCQUFBO0VBSmxCO0VBT2M7SUFDSSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VBTGxCO0VBT2tCO0lBQ0ksZUFBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtJQUNBLGlDQUFBO0lBQ0EsaUJBQUE7RUFMdEI7RUFRa0I7SUFDSSx5Q0FBQTtFQU50QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50ZXMvY2xpZW50ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHsgICAgXHJcbiAgICAucC1kYXRhdGFibGUtcmVzcG9uc2l2ZS1kZW1vIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQgLnAtY29sdW1uLXRpdGxlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucC1kLWZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYWN0aW9uLWNvbHVtbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MHJlbSkge1xyXG4gICAgOmhvc3QgOjpuZy1kZWVwIHtcclxuICAgICAgICAucC1kYXRhdGFibGUge1xyXG4gICAgICAgICAgICAmLnAtZGF0YXRhYmxlLXJlc3BvbnNpdmUtZGVtbyB7XHJcbiAgICAgICAgICAgICAgICAucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxyXG4gICAgICAgICAgICAgICAgLnAtZGF0YXRhYmxlLXRmb290ID4gdHIgPiB0ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwIG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wLWNvbHVtbi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC0uNGVtIDFlbSAtLjRlbSAtLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "xZ/V":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientes/clientes.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function xZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Clientes\n    </ion-title>\n  </ion-toolbar>\n  <app-user-menu></app-user-menu>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <p-table #dt [columns]=\"cols\" exportFilename=\"clientes\" [value]=\"clientes\"\n    styleClass=\"p-datatable-striped p-datatable-responsive-demo\" [paginator]=\"true\" [rows]=\"10\"\n    [showCurrentPageReport]=\"true\" currentPageReportTemplate=\"Mostrando {first} a {last} de {totalRecords} registros\"\n    [rowsPerPageOptions]=\"[10,25,50]\">\n    <ng-template pTemplate=\"caption\">\n      <div class=\"p-d-flex\">\n        <p-button label=\"Agregar Nuevo\" icon=\"pi pi-plus\" iconPos=\"left\" (click)=\"mostrarModal(null)\"></p-button>\n        <p-button label=\"Exportar a CSV\" icon=\"pi pi-file-o\" iconPos=\"left\" (click)=\"dt.exportCSV()\"></p-button>\n      </div>\n    </ng-template>\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th pSortableColumn=\"nombre\">Nombre <p-sortIcon field=\"nombre\"></p-sortIcon>\n        </th>\n        <th pSortableColumn=\"activo\">Estado <p-sortIcon field=\"activo\"></p-sortIcon>\n        </th>\n        <th rowspan=\"2\" class=\"action-column\">Acciones</th>\n      </tr>\n      <tr>\n        <th>\n          <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'placa', 'contains')\"\n            placeholder=\"Buscar por Nombre\" class=\"p-column-filter\">\n        </th>\n        <th>\n          <p-dropdown [options]=\"statuses\" (onChange)=\"dt.filter($event.value, 'activo', 'equals')\"\n            styleClass=\"p-column-filter\" placeholder=\"Buscar por Estado\" [showClear]=\"true\">\n            <ng-template let-option pTemplate=\"item\">\n              <span>{{option.label}}</span>\n            </ng-template>\n          </p-dropdown>\n        </th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-cliente>\n      <tr>\n        <td><span class=\"p-column-title\">Nombre </span>{{cliente.nombre}}</td>\n        <td><span class=\"p-column-title\">Estado </span>{{cliente.activo == true ? \"Activo\" : \"Inactivo\"}}</td>\n        <td class=\"action-column\">\n          <p-button label=\"Editar\" icon=\"pi pi-pencil\" iconPos=\"left\" (click)=\"mostrarModal(cliente.id)\"\n            class=\"primary-button\"></p-button>\n        </td>\n      </tr>\n    </ng-template>\n  </p-table>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=clientes-clientes-module-es5.js.map