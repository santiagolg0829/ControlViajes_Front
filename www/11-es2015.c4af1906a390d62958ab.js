(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3HbQ":function(t,e,n){"use strict";n.r(e),n.d(e,"ClientesPageModule",(function(){return j}));var o=n("ofXK"),i=n("3Pt+"),a=n("TEn/"),l=n("tyNb"),c=n("mrSG"),r=n("BsNa"),b=n("ypJn"),s=n("BEOd"),p=n("fXoL"),d=n("BQIx"),u=n("ova0"),m=n("+nHt"),f=n("jIHw"),g=n("rEr+"),h=n("7zfz"),P=n("arFO");function O(t,e){if(1&t&&(p.Pb(0,"span"),p.zc(1),p.Ob()),2&t){const t=e.$implicit;p.yb(1),p.Ac(t.label)}}function v(t,e){if(1&t){const t=p.Qb();p.Pb(0,"tr"),p.Pb(1,"th",12),p.zc(2,"Nombre "),p.Kb(3,"p-sortIcon",13),p.Ob(),p.Pb(4,"th",14),p.zc(5,"Direcci\xf3n "),p.Kb(6,"p-sortIcon",15),p.Ob(),p.Pb(7,"th",16),p.zc(8,"Estado "),p.Kb(9,"p-sortIcon",17),p.Ob(),p.Pb(10,"th",18),p.zc(11,"Acciones"),p.Ob(),p.Ob(),p.Pb(12,"tr"),p.Pb(13,"th"),p.Pb(14,"input",19),p.Xb("input",(function(e){return p.rc(t),p.Zb(),p.pc(19).filter(e.target.value,"nombre","contains")})),p.Ob(),p.Ob(),p.Pb(15,"th"),p.Pb(16,"input",20),p.Xb("input",(function(e){return p.rc(t),p.Zb(),p.pc(19).filter(e.target.value,"direccion","contains")})),p.Ob(),p.Ob(),p.Pb(17,"th"),p.Pb(18,"p-dropdown",21),p.Xb("onChange",(function(e){return p.rc(t),p.Zb(),p.pc(19).filter(e.value,"activo","equals")})),p.xc(19,O,2,1,"ng-template",22),p.Ob(),p.Ob(),p.Ob()}if(2&t){const t=p.Zb();p.yb(18),p.fc("options",t.statuses)("showClear",!0)}}function C(t,e){if(1&t){const t=p.Qb();p.Pb(0,"input",28),p.Xb("ngModelChange",(function(e){return p.rc(t),p.Zb().$implicit.nombre=e})),p.Ob()}if(2&t){const t=p.Zb().$implicit;p.fc("ngModel",t.nombre)}}function y(t,e){if(1&t&&p.Kb(0,"input",29),2&t){const t=p.Zb().$implicit;p.gc("value",t.nombre)}}function x(t,e){if(1&t){const t=p.Qb();p.Pb(0,"input",30),p.Xb("ngModelChange",(function(e){return p.rc(t),p.Zb().$implicit.direccion=e})),p.Ob()}if(2&t){const t=p.Zb().$implicit;p.fc("ngModel",t.direccion)}}function M(t,e){if(1&t&&p.Kb(0,"input",31),2&t){const t=p.Zb().$implicit;p.gc("value",t.direccion)}}const w=function(){return{width:"100%"}};function k(t,e){if(1&t){const t=p.Qb();p.Pb(0,"p-dropdown",32),p.Xb("ngModelChange",(function(e){return p.rc(t),p.Zb().$implicit.activo=e})),p.Ob()}if(2&t){const t=p.Zb().$implicit,e=p.Zb();p.vc(p.hc(4,w)),p.fc("options",e.statuses)("ngModel",t.activo)}}function S(t,e){if(1&t&&p.Kb(0,"input",33),2&t){const t=p.Zb().$implicit;p.gc("value",1==t.activo?"Activo":"Inactivo")}}function z(t,e){if(1&t){const t=p.Qb();p.Pb(0,"tr"),p.Pb(1,"td",23),p.Pb(2,"p-cellEditor"),p.xc(3,C,1,1,"ng-template",24),p.xc(4,y,1,1,"ng-template",25),p.Ob(),p.Ob(),p.Pb(5,"td",23),p.Pb(6,"p-cellEditor"),p.xc(7,x,1,1,"ng-template",24),p.xc(8,M,1,1,"ng-template",25),p.Ob(),p.Ob(),p.Pb(9,"td",23),p.Pb(10,"p-cellEditor"),p.xc(11,k,1,5,"ng-template",24),p.xc(12,S,1,1,"ng-template",25),p.Ob(),p.Ob(),p.Pb(13,"td",26),p.Pb(14,"p-button",27),p.Xb("click",(function(){p.rc(t);const n=e.$implicit;return p.Zb().eliminarSede(n)})),p.Ob(),p.Ob(),p.Ob()}}const _=function(){return[10,25,50]};let Z=(()=>{class t extends s.a{constructor(t,e,n,o,i){super(t,e,n,o,i),this.getService=t,this.postService=e,this.putService=n,this.toastCtrl=o,this.modalCtrl=i,this.url="clientes",this.cliente=new r.a}ngOnInit(){null!=this.id&&super.consumirGet(this.url,this.id).then(t=>{this.cliente=t}),this.statuses=[{label:"Activo",value:!0},{label:"Inactivo",value:!1}]}guardar(){return Object(c.a)(this,void 0,void 0,(function*(){null!=this.id?this.actualizarCliente():this.crearCliente()}))}crearCliente(){super.consumirPost(this.url,this.cliente).then(t=>{this.cliente=t})}actualizarCliente(){super.consumirPut(this.url,this.id,this.cliente).then(t=>{})}eliminarSede(t){this.cliente.lstSedes=this.cliente.lstSedes.filter(e=>e!==t)}agregarSede(){return Object(c.a)(this,void 0,void 0,(function*(){this.cliente.lstSedes.push(new b.a)}))}}return t.\u0275fac=function(e){return new(e||t)(p.Jb(d.a),p.Jb(u.a),p.Jb(m.a),p.Jb(a.Q),p.Jb(a.J))},t.\u0275cmp=p.Db({type:t,selectors:[["app-detalle-cliente"]],inputs:{id:"id"},features:[p.vb],decls:24,vars:8,consts:[[1,"modal-title"],["fill","clear","color","dark",3,"click"],["name","close-outline"],[1,"ion-padding"],["type","text",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["label","Agregar Sede","icon","pi pi-plus","iconPos","left",1,"primary-button","agregar-sede-button",3,"click"],["styleClass","p-datatable-striped p-datatable-responsive-demo","currentPageReportTemplate","Mostrando {first} a {last} de {totalRecords} registros",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["dt",""],["pTemplate","header"],["pTemplate","body"],[3,"click"],["pSortableColumn","nombre"],["field","nombre"],["pSortableColumn","direccion"],["field","direccion"],["pSortableColumn","activo"],["field","activo"],["rowspan","2",1,"action-column"],["pInputText","","type","text","placeholder","Buscar por Nombre",1,"p-column-filter",3,"input"],["pInputText","","type","text","placeholder","Buscar por Direcci\xf3n",1,"p-column-filter",3,"input"],["styleClass","p-column-filter","placeholder","Buscar por Estado",3,"options","showClear","onChange"],["pTemplate","item"],["pEditableColumn",""],["pTemplate","input"],["pTemplate","output"],[1,"action-column"],["label","Eliminar","icon","pi pi-times","iconPos","left",1,"primary-button",3,"click"],["pInputText","","type","text","placeholder","Nombre",3,"ngModel","ngModelChange"],["pInputText","","type","text","placeholder","Nombre",3,"value"],["pInputText","","type","text","placeholder","Direcci\xf3n",3,"ngModel","ngModelChange"],["pInputText","","type","text","placeholder","Direcci\xf3n",3,"value"],[3,"options","ngModel","ngModelChange"],["pInputText","","type","text","placeholder","Estado",3,"value"]],template:function(t,e){1&t&&(p.Pb(0,"ion-header"),p.Pb(1,"ion-toolbar"),p.Pb(2,"ion-title"),p.Pb(3,"div",0),p.Pb(4,"span"),p.zc(5,"Maestro Clientes"),p.Ob(),p.Pb(6,"ion-button",1),p.Xb("click",(function(){return e.dismiss(null)})),p.Kb(7,"ion-icon",2),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Pb(8,"ion-content",3),p.Pb(9,"ion-item"),p.Pb(10,"ion-label"),p.zc(11,"Nombre"),p.Ob(),p.Pb(12,"ion-input",4),p.Xb("ngModelChange",(function(t){return e.cliente.nombre=t})),p.Ob(),p.Ob(),p.Pb(13,"ion-item"),p.Pb(14,"ion-label"),p.zc(15,"Activo"),p.Ob(),p.Pb(16,"ion-checkbox",5),p.Xb("ngModelChange",(function(t){return e.cliente.activo=t})),p.Ob(),p.Ob(),p.Pb(17,"p-button",6),p.Xb("click",(function(){return e.agregarSede()})),p.Ob(),p.Pb(18,"p-table",7,8),p.xc(20,v,20,2,"ng-template",9),p.xc(21,z,15,0,"ng-template",10),p.Ob(),p.Pb(22,"ion-button",11),p.Xb("click",(function(){return e.guardar()})),p.zc(23,"Guardar"),p.Ob(),p.Ob()),2&t&&(p.yb(12),p.fc("ngModel",e.cliente.nombre),p.yb(4),p.fc("ngModel",e.cliente.activo),p.yb(2),p.fc("value",e.cliente.lstSedes)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",p.hc(7,_)))},directives:[a.m,a.E,a.D,a.c,a.n,a.g,a.r,a.u,a.q,a.P,i.h,i.j,a.e,a.a,f.a,g.e,h.b,g.d,g.c,P.a,g.b,g.a,i.a],styles:[".modal-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.modal-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center}.agregar-sede-button[_ngcontent-%COMP%]{margin:10px;display:flex;justify-content:flex-end}[_nghost-%COMP%]     .p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{display:none}.p-d-flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.action-column[_ngcontent-%COMP%]{text-align:center!important}.action-column[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]{margin:3px}@media screen and (max-width:40rem){[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tfoot>tr>td, [_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-thead>tr>th{display:none!important}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td{text-align:left;display:block;width:100%;float:left;clear:left;border:0}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{padding:.4rem;min-width:30%;display:inline-block;margin:-.4em 1em -.4em -.4rem;font-weight:700}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td:last-child{border-bottom:1px solid var(--surface-d)}}"]}),t})();var I=n("RyMC");function T(t,e){if(1&t){const t=p.Qb();p.Pb(0,"div",7),p.Pb(1,"p-button",8),p.Xb("click",(function(){return p.rc(t),p.Zb().mostrarModal(null)})),p.Ob(),p.Pb(2,"p-button",9),p.Xb("click",(function(){return p.rc(t),p.Zb(),p.pc(9).exportCSV()})),p.Ob(),p.Ob()}}function X(t,e){if(1&t&&(p.Pb(0,"span"),p.zc(1),p.Ob()),2&t){const t=e.$implicit;p.yb(1),p.Ac(t.label)}}function E(t,e){if(1&t){const t=p.Qb();p.Pb(0,"tr"),p.Pb(1,"th",10),p.zc(2,"Nombre "),p.Kb(3,"p-sortIcon",11),p.Ob(),p.Pb(4,"th",12),p.zc(5,"Estado "),p.Kb(6,"p-sortIcon",13),p.Ob(),p.Pb(7,"th",14),p.zc(8,"Acciones"),p.Ob(),p.Ob(),p.Pb(9,"tr"),p.Pb(10,"th"),p.Pb(11,"input",15),p.Xb("input",(function(e){return p.rc(t),p.Zb(),p.pc(9).filter(e.target.value,"placa","contains")})),p.Ob(),p.Ob(),p.Pb(12,"th"),p.Pb(13,"p-dropdown",16),p.Xb("onChange",(function(e){return p.rc(t),p.Zb(),p.pc(9).filter(e.value,"activo","equals")})),p.xc(14,X,2,1,"ng-template",17),p.Ob(),p.Ob(),p.Ob()}if(2&t){const t=p.Zb();p.yb(13),p.fc("options",t.statuses)("showClear",!0)}}function J(t,e){if(1&t){const t=p.Qb();p.Pb(0,"tr"),p.Pb(1,"td"),p.Pb(2,"span",18),p.zc(3,"Nombre "),p.Ob(),p.zc(4),p.Ob(),p.Pb(5,"td"),p.Pb(6,"span",18),p.zc(7,"Estado "),p.Ob(),p.zc(8),p.Ob(),p.Pb(9,"td",19),p.Pb(10,"p-button",20),p.Xb("click",(function(){p.rc(t);const n=e.$implicit;return p.Zb().mostrarModal(n.id)})),p.Ob(),p.Ob(),p.Ob()}if(2&t){const t=e.$implicit;p.yb(4),p.Ac(t.nombre),p.yb(4),p.Ac(1==t.activo?"Activo":"Inactivo")}}const $=function(){return[10,25,50]},A=[{path:"",component:(()=>{class t extends s.a{constructor(t,e,n,o,i){super(t,null,null,o,i),this.getService=t,this.postService=e,this.putService=n,this.toastCtrl=o,this.modalCtrl=i,this.url="clientes",this.clientes=[]}ngOnInit(){this.obtenerClientes()}obtenerClientes(){super.consumirGet(this.url).then(t=>{this.clientes=t})}mostrarModal(t){return Object(c.a)(this,void 0,void 0,(function*(){const e=yield this.modalCtrl.create({component:Z,componentProps:{id:t},backdropDismiss:!1,cssClass:"long-modal"});e.present(),yield e.onWillDismiss().then(t=>{null!=t.data&&t.data.success&&this.obtenerClientes()})}))}}return t.\u0275fac=function(e){return new(e||t)(p.Jb(d.a),p.Jb(u.a),p.Jb(m.a),p.Jb(a.Q),p.Jb(a.J))},t.\u0275cmp=p.Db({type:t,selectors:[["app-clientes"]],features:[p.vb],decls:13,vars:7,consts:[["slot","start"],[1,"ion-padding"],["exportFilename","clientes","styleClass","p-datatable-striped p-datatable-responsive-demo","currentPageReportTemplate","Mostrando {first} a {last} de {totalRecords} registros",3,"columns","value","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"p-d-flex"],["label","Agregar Nuevo","icon","pi pi-plus","iconPos","left",3,"click"],["label","Exportar a CSV","icon","pi pi-file-o","iconPos","left",3,"click"],["pSortableColumn","nombre"],["field","nombre"],["pSortableColumn","activo"],["field","activo"],["rowspan","2",1,"action-column"],["pInputText","","type","text","placeholder","Buscar por Nombre",1,"p-column-filter",3,"input"],["styleClass","p-column-filter","placeholder","Buscar por Estado",3,"options","showClear","onChange"],["pTemplate","item"],[1,"p-column-title"],[1,"action-column"],["label","Editar","icon","pi pi-pencil","iconPos","left",1,"primary-button",3,"click"]],template:function(t,e){1&t&&(p.Pb(0,"ion-header"),p.Pb(1,"ion-toolbar"),p.Pb(2,"ion-buttons",0),p.Kb(3,"ion-menu-button"),p.Ob(),p.Pb(4,"ion-title"),p.zc(5," Clientes "),p.Ob(),p.Ob(),p.Kb(6,"app-user-menu"),p.Ob(),p.Pb(7,"ion-content",1),p.Pb(8,"p-table",2,3),p.xc(10,T,3,0,"ng-template",4),p.xc(11,E,15,2,"ng-template",5),p.xc(12,J,11,2,"ng-template",6),p.Ob(),p.Ob()),2&t&&(p.yb(8),p.fc("columns",e.cols)("value",e.clientes)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",p.hc(6,$)))},directives:[a.m,a.E,a.d,a.x,a.D,I.a,a.g,g.e,h.b,f.a,g.d,g.c,P.a],styles:["[_nghost-%COMP%]     .p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{display:none}.p-d-flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.action-column[_ngcontent-%COMP%]{text-align:center!important}@media screen and (max-width:40rem){[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tfoot>tr>td, [_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-thead>tr>th{display:none!important}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td{text-align:left;display:block;width:100%;float:left;clear:left;border:0}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{padding:.4rem;min-width:30%;display:inline-block;margin:-.4em 1em -.4em -.4rem;font-weight:700}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td:last-child{border-bottom:1px solid var(--surface-d)}}"]}),t})()}];let K=(()=>{class t{}return t.\u0275mod=p.Hb({type:t}),t.\u0275inj=p.Gb({factory:function(e){return new(e||t)},imports:[[l.i.forChild(A)],l.i]}),t})();var Q=n("m/q5");let j=(()=>{class t{}return t.\u0275mod=p.Hb({type:t}),t.\u0275inj=p.Gb({factory:function(e){return new(e||t)},imports:[[o.b,i.e,a.G,K,g.f,P.b,f.b,Q.a]]}),t})()}}]);