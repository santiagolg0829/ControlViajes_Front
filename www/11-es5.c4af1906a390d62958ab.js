!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}function o(t,e,n){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=l(t);if(e){var i=l(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3HbQ":function(e,r,c){"use strict";c.r(r),c.d(r,"ClientesPageModule",(function(){return L}));var b=c("ofXK"),p=c("3Pt+"),s=c("TEn/"),u=c("tyNb"),d=c("mrSG"),f=c("BsNa"),m=c("ypJn"),h=c("BEOd"),g=c("fXoL"),v=c("BQIx"),P=c("ova0"),O=c("+nHt"),y=c("jIHw"),C=c("rEr+"),w=c("7zfz"),x=c("arFO");function M(t,e){if(1&t&&(g.Pb(0,"span"),g.zc(1),g.Ob()),2&t){var n=e.$implicit;g.yb(1),g.Ac(n.label)}}function k(t,e){if(1&t){var n=g.Qb();g.Pb(0,"tr"),g.Pb(1,"th",12),g.zc(2,"Nombre "),g.Kb(3,"p-sortIcon",13),g.Ob(),g.Pb(4,"th",14),g.zc(5,"Direcci\xf3n "),g.Kb(6,"p-sortIcon",15),g.Ob(),g.Pb(7,"th",16),g.zc(8,"Estado "),g.Kb(9,"p-sortIcon",17),g.Ob(),g.Pb(10,"th",18),g.zc(11,"Acciones"),g.Ob(),g.Ob(),g.Pb(12,"tr"),g.Pb(13,"th"),g.Pb(14,"input",19),g.Xb("input",(function(t){return g.rc(n),g.Zb(),g.pc(19).filter(t.target.value,"nombre","contains")})),g.Ob(),g.Ob(),g.Pb(15,"th"),g.Pb(16,"input",20),g.Xb("input",(function(t){return g.rc(n),g.Zb(),g.pc(19).filter(t.target.value,"direccion","contains")})),g.Ob(),g.Ob(),g.Pb(17,"th"),g.Pb(18,"p-dropdown",21),g.Xb("onChange",(function(t){return g.rc(n),g.Zb(),g.pc(19).filter(t.value,"activo","equals")})),g.xc(19,M,2,1,"ng-template",22),g.Ob(),g.Ob(),g.Ob()}if(2&t){var o=g.Zb();g.yb(18),g.fc("options",o.statuses)("showClear",!0)}}function _(t,e){if(1&t){var n=g.Qb();g.Pb(0,"input",28),g.Xb("ngModelChange",(function(t){return g.rc(n),g.Zb().$implicit.nombre=t})),g.Ob()}if(2&t){var o=g.Zb().$implicit;g.fc("ngModel",o.nombre)}}function S(t,e){if(1&t&&g.Kb(0,"input",29),2&t){var n=g.Zb().$implicit;g.gc("value",n.nombre)}}function R(t,e){if(1&t){var n=g.Qb();g.Pb(0,"input",30),g.Xb("ngModelChange",(function(t){return g.rc(n),g.Zb().$implicit.direccion=t})),g.Ob()}if(2&t){var o=g.Zb().$implicit;g.fc("ngModel",o.direccion)}}function z(t,e){if(1&t&&g.Kb(0,"input",31),2&t){var n=g.Zb().$implicit;g.gc("value",n.direccion)}}var T=function(){return{width:"100%"}};function E(t,e){if(1&t){var n=g.Qb();g.Pb(0,"p-dropdown",32),g.Xb("ngModelChange",(function(t){return g.rc(n),g.Zb().$implicit.activo=t})),g.Ob()}if(2&t){var o=g.Zb().$implicit,i=g.Zb();g.vc(g.hc(4,T)),g.fc("options",i.statuses)("ngModel",o.activo)}}function Z(t,e){if(1&t&&g.Kb(0,"input",33),2&t){var n=g.Zb().$implicit;g.gc("value",1==n.activo?"Activo":"Inactivo")}}function j(t,e){if(1&t){var n=g.Qb();g.Pb(0,"tr"),g.Pb(1,"td",23),g.Pb(2,"p-cellEditor"),g.xc(3,_,1,1,"ng-template",24),g.xc(4,S,1,1,"ng-template",25),g.Ob(),g.Ob(),g.Pb(5,"td",23),g.Pb(6,"p-cellEditor"),g.xc(7,R,1,1,"ng-template",24),g.xc(8,z,1,1,"ng-template",25),g.Ob(),g.Ob(),g.Pb(9,"td",23),g.Pb(10,"p-cellEditor"),g.xc(11,E,1,5,"ng-template",24),g.xc(12,Z,1,1,"ng-template",25),g.Ob(),g.Ob(),g.Pb(13,"td",26),g.Pb(14,"p-button",27),g.Xb("click",(function(){g.rc(n);var t=e.$implicit;return g.Zb().eliminarSede(t)})),g.Ob(),g.Ob(),g.Ob()}}var I,X=function(){return[10,25,50]},J=((I=function(e){i(c,e);var r=a(c);function c(e,n,o,i,a){var l;return t(this,c),(l=r.call(this,e,n,o,i,a)).getService=e,l.postService=n,l.putService=o,l.toastCtrl=i,l.modalCtrl=a,l.url="clientes",l.cliente=new f.a,l}return n(c,[{key:"ngOnInit",value:function(){var t=this;null!=this.id&&o(l(c.prototype),"consumirGet",this).call(this,this.url,this.id).then((function(e){t.cliente=e})),this.statuses=[{label:"Activo",value:!0},{label:"Inactivo",value:!1}]}},{key:"guardar",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null!=this.id?this.actualizarCliente():this.crearCliente();case 1:case"end":return t.stop()}}),t,this)})))}},{key:"crearCliente",value:function(){var t=this;o(l(c.prototype),"consumirPost",this).call(this,this.url,this.cliente).then((function(e){t.cliente=e}))}},{key:"actualizarCliente",value:function(){o(l(c.prototype),"consumirPut",this).call(this,this.url,this.id,this.cliente).then((function(t){}))}},{key:"eliminarSede",value:function(t){this.cliente.lstSedes=this.cliente.lstSedes.filter((function(e){return e!==t}))}},{key:"agregarSede",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.cliente.lstSedes.push(new m.a);case 1:case"end":return t.stop()}}),t,this)})))}}]),c}(h.a)).\u0275fac=function(t){return new(t||I)(g.Jb(v.a),g.Jb(P.a),g.Jb(O.a),g.Jb(s.Q),g.Jb(s.J))},I.\u0275cmp=g.Db({type:I,selectors:[["app-detalle-cliente"]],inputs:{id:"id"},features:[g.vb],decls:24,vars:8,consts:[[1,"modal-title"],["fill","clear","color","dark",3,"click"],["name","close-outline"],[1,"ion-padding"],["type","text",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["label","Agregar Sede","icon","pi pi-plus","iconPos","left",1,"primary-button","agregar-sede-button",3,"click"],["styleClass","p-datatable-striped p-datatable-responsive-demo","currentPageReportTemplate","Mostrando {first} a {last} de {totalRecords} registros",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["dt",""],["pTemplate","header"],["pTemplate","body"],[3,"click"],["pSortableColumn","nombre"],["field","nombre"],["pSortableColumn","direccion"],["field","direccion"],["pSortableColumn","activo"],["field","activo"],["rowspan","2",1,"action-column"],["pInputText","","type","text","placeholder","Buscar por Nombre",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Direcci\xf3n",1,"p-column-filter",3,"input"],["styleClass","p-column-filter","placeholder","Buscar por Estado",3,"options","showClear","onChange"],["pTemplate","item"],["pEditableColumn",""],["pTemplate","input"],["pTemplate","output"],[1,"action-column"],["label","Eliminar","icon","pi pi-times","iconPos","left",1,"primary-button",3,"click"],["pInputText","","type","text","placeholder","Nombre",3,"ngModel","ngModelChange"],["pInputText","","type","text","placeholder","Nombre",3,"value"],["pInputText","","type","text","placeholder","Direcci\xf3n",3,"ngModel","ngModelChange"],["pInputText","","type","text","placeholder","Direcci\xf3n",3,"value"],[3,"options","ngModel","ngModelChange"],["pInputText","","type","text","placeholder","Estado",3,"value"]],template:function(t,e){1&t&&(g.Pb(0,"ion-header"),g.Pb(1,"ion-toolbar"),g.Pb(2,"ion-title"),g.Pb(3,"div",0),g.Pb(4,"span"),g.zc(5,"Maestro Clientes"),g.Ob(),g.Pb(6,"ion-button",1),g.Xb("click",(function(){return e.dismiss(null)})),g.Kb(7,"ion-icon",2),g.Ob(),g.Ob(),g.Ob(),g.Ob(),g.Ob(),g.Pb(8,"ion-content",3),g.Pb(9,"ion-item"),g.Pb(10,"ion-label"),g.zc(11,"Nombre"),g.Ob(),g.Pb(12,"ion-input",4),g.Xb("ngModelChange",(function(t){return e.cliente.nombre=t})),g.Ob(),g.Ob(),g.Pb(13,"ion-item"),g.Pb(14,"ion-label"),g.zc(15,"Activo"),g.Ob(),g.Pb(16,"ion-checkbox",5),g.Xb("ngModelChange",(function(t){return e.cliente.activo=t})),g.Ob(),g.Ob(),g.Pb(17,"p-button",6),g.Xb("click",(function(){return e.agregarSede()})),g.Ob(),g.Pb(18,"p-table",7,8),g.xc(20,k,20,2,"ng-template",9),g.xc(21,j,15,0,"ng-template",10),g.Ob(),g.Pb(22,"ion-button",11),g.Xb("click",(function(){return e.guardar()})),g.zc(23,"Guardar"),g.Ob(),g.Ob()),2&t&&(g.yb(12),g.fc("ngModel",e.cliente.nombre),g.yb(4),g.fc("ngModel",e.cliente.activo),g.yb(2),g.fc("value",e.cliente.lstSedes)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",g.hc(7,X)))},directives:[s.m,s.E,s.D,s.c,s.n,s.g,s.r,s.u,s.q,s.P,p.h,p.j,s.e,s.a,y.a,C.e,w.b,C.d,C.c,x.a,C.b,C.a,p.a],styles:[".modal-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.modal-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center}.agregar-sede-button[_ngcontent-%COMP%]{margin:10px;display:flex;justify-content:flex-end}[_nghost-%COMP%]     .p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{display:none}.p-d-flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.action-column[_ngcontent-%COMP%]{text-align:center!important}.action-column[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]{margin:3px}@media screen and (max-width:40rem){[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tfoot>tr>td, [_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-thead>tr>th{display:none!important}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td{text-align:left;display:block;width:100%;float:left;clear:left;border:0}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{padding:.4rem;min-width:30%;display:inline-block;margin:-.4em 1em -.4em -.4rem;font-weight:700}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td:last-child{border-bottom:1px solid var(--surface-d)}}"]}),I),$=c("RyMC");function D(t,e){if(1&t){var n=g.Qb();g.Pb(0,"div",7),g.Pb(1,"p-button",8),g.Xb("click",(function(){return g.rc(n),g.Zb().mostrarModal(null)})),g.Ob(),g.Pb(2,"p-button",9),g.Xb("click",(function(){return g.rc(n),g.Zb(),g.pc(9).exportCSV()})),g.Ob(),g.Ob()}}function A(t,e){if(1&t&&(g.Pb(0,"span"),g.zc(1),g.Ob()),2&t){var n=e.$implicit;g.yb(1),g.Ac(n.label)}}function K(t,e){if(1&t){var n=g.Qb();g.Pb(0,"tr"),g.Pb(1,"th",10),g.zc(2,"Nombre "),g.Kb(3,"p-sortIcon",11),g.Ob(),g.Pb(4,"th",12),g.zc(5,"Estado "),g.Kb(6,"p-sortIcon",13),g.Ob(),g.Pb(7,"th",14),g.zc(8,"Acciones"),g.Ob(),g.Ob(),g.Pb(9,"tr"),g.Pb(10,"th"),g.Pb(11,"input",15),g.Xb("input",(function(t){return g.rc(n),g.Zb(),g.pc(9).filter(t.target.value,"placa","contains")})),g.Ob(),g.Ob(),g.Pb(12,"th"),g.Pb(13,"p-dropdown",16),g.Xb("onChange",(function(t){return g.rc(n),g.Zb(),g.pc(9).filter(t.value,"activo","equals")})),g.xc(14,A,2,1,"ng-template",17),g.Ob(),g.Ob(),g.Ob()}if(2&t){var o=g.Zb();g.yb(13),g.fc("options",o.statuses)("showClear",!0)}}function Q(t,e){if(1&t){var n=g.Qb();g.Pb(0,"tr"),g.Pb(1,"td"),g.Pb(2,"span",18),g.zc(3,"Nombre "),g.Ob(),g.zc(4),g.Ob(),g.Pb(5,"td"),g.Pb(6,"span",18),g.zc(7,"Estado "),g.Ob(),g.zc(8),g.Ob(),g.Pb(9,"td",19),g.Pb(10,"p-button",20),g.Xb("click",(function(){g.rc(n);var t=e.$implicit;return g.Zb().mostrarModal(t.id)})),g.Ob(),g.Ob(),g.Ob()}if(2&t){var o=e.$implicit;g.yb(4),g.Ac(o.nombre),g.yb(4),g.Ac(1==o.activo?"Activo":"Inactivo")}}var N,B,G,H=function(){return[10,25,50]},q=[{path:"",component:(N=function(e){i(c,e);var r=a(c);function c(e,n,o,i,a){var l;return t(this,c),(l=r.call(this,e,null,null,i,a)).getService=e,l.postService=n,l.putService=o,l.toastCtrl=i,l.modalCtrl=a,l.url="clientes",l.clientes=[],l}return n(c,[{key:"ngOnInit",value:function(){this.obtenerClientes()}},{key:"obtenerClientes",value:function(){var t=this;o(l(c.prototype),"consumirGet",this).call(this,this.url).then((function(e){t.clientes=e}))}},{key:"mostrarModal",value:function(t){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalCtrl.create({component:J,componentProps:{id:t},backdropDismiss:!1,cssClass:"long-modal"});case 2:return(n=e.sent).present(),e.next=6,n.onWillDismiss().then((function(t){null!=t.data&&t.data.success&&o.obtenerClientes()}));case 6:case"end":return e.stop()}}),e,this)})))}}]),c}(h.a),N.\u0275fac=function(t){return new(t||N)(g.Jb(v.a),g.Jb(P.a),g.Jb(O.a),g.Jb(s.Q),g.Jb(s.J))},N.\u0275cmp=g.Db({type:N,selectors:[["app-clientes"]],features:[g.vb],decls:13,vars:7,consts:[["slot","start"],[1,"ion-padding"],["exportFilename","clientes","styleClass","p-datatable-striped p-datatable-responsive-demo","currentPageReportTemplate","Mostrando {first} a {last} de {totalRecords} registros",3,"columns","value","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["label","Agregar Nuevo","icon","pi pi-plus","iconPos","left",3,"click"],["label","Exportar a CSV","icon","pi pi-file-o","iconPos","left",3,"click"],["pSortableColumn","nombre"],["field","nombre"],["pSortableColumn","activo"],["field","activo"],["rowspan","2",1,"action-column"],["pInputText","","type","text","placeholder","Buscar por Nombre",1,"p-column-filter",3,"input"],["styleClass","p-column-filter","placeholder","Buscar por Estado",3,"options","showClear","onChange"],["pTemplate","item"],[1,"p-column-title"],[1,"action-column"],["label","Editar","icon","pi pi-pencil","iconPos","left",1,"primary-button",3,"click"]],template:function(t,e){1&t&&(g.Pb(0,"ion-header"),g.Pb(1,"ion-toolbar"),g.Pb(2,"ion-buttons",0),g.Kb(3,"ion-menu-button"),g.Ob(),g.Pb(4,"ion-title"),g.zc(5," Clientes "),g.Ob(),g.Ob(),g.Kb(6,"app-user-menu"),g.Ob(),g.Pb(7,"ion-content",1),g.Pb(8,"p-table",2,3),g.xc(10,D,3,0,"ng-template",4),g.xc(11,K,15,2,"ng-template",5),g.xc(12,Q,11,2,"ng-template",6),g.Ob(),g.Ob()),2&t&&(g.yb(8),g.fc("columns",e.cols)("value",e.clientes)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",g.hc(6,H)))},directives:[s.m,s.E,s.d,s.x,s.D,$.a,s.g,C.e,w.b,y.a,C.d,C.c,x.a],styles:["[_nghost-%COMP%]     .p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{display:none}.p-d-flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.action-column[_ngcontent-%COMP%]{text-align:center!important}@media screen and (max-width:40rem){[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tfoot>tr>td, [_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-thead>tr>th{display:none!important}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td{text-align:left;display:block;width:100%;float:left;clear:left;border:0}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{padding:.4rem;min-width:30%;display:inline-block;margin:-.4em 1em -.4em -.4rem;font-weight:700}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td:last-child{border-bottom:1px solid var(--surface-d)}}"]}),N)}],F=((B=function e(){t(this,e)}).\u0275mod=g.Hb({type:B}),B.\u0275inj=g.Gb({factory:function(t){return new(t||B)},imports:[[u.i.forChild(q)],u.i]}),B),V=c("m/q5"),L=((G=function e(){t(this,e)}).\u0275mod=g.Hb({type:G}),G.\u0275inj=g.Gb({factory:function(t){return new(t||G)},imports:[[b.b,p.e,s.G,F,C.f,x.b,y.b,V.a]]}),G)}}])}();