(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+Qoh":function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));class i{constructor(){this.id=0,this.placa="",this.remolque="",this.esPropio=!0,this.activo=!0}}},"+nHt":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var i=e("tk/3"),o=e("AytR"),s=e("fXoL"),r=e("e8h1");let c=(()=>{class t{constructor(t,n){this.http=t,this.storage=n,this.baseUrl=o.a.baseUrl,this.apiKey=""}put(t,n,e){let o=new i.d({"Content-Type":"application/json"});return this.http.put(this.baseUrl+t+"/"+(null==n?"":n),e,{headers:o})}}return t.\u0275fac=function(n){return new(n||t)(s.Tb(i.b),s.Tb(r.b))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"2c9M":function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return a})),e.d(n,"e",(function(){return c}));const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})},notification(t){const n=this.getEngine();if(!n)return;const e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=()=>{i.selection()},s=()=>{i.selectionStart()},r=()=>{i.selectionChanged()},c=()=>{i.selectionEnd()},a=t=>{i.impact(t)}},"6i10":function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,n,e)=>{const i=t*n/e-t+"ms",o=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,n,e)=>{const i=n/e,o=t*i-t+"ms",s=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,n)=>({r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,n,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,n,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":t*n/e-t+"ms"}})}}},BQIx:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var i=e("tk/3"),o=e("AytR"),s=e("fXoL"),r=e("e8h1");let c=(()=>{class t{constructor(t,n){this.http=t,this.storage=n,this.baseUrl=o.a.baseUrl,this.apiKey=""}get(t,n){let e=new i.d({"Content-Type":"application/json"});return this.http.get(this.baseUrl+t+"/"+(null==n?"":n),{headers:e})}}return t.\u0275fac=function(n){return new(n||t)(s.Tb(i.b),s.Tb(r.b))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},BsNa:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));class i{constructor(){this.id=0,this.nombre="",this.lstSedes=[],this.activo=!0}}},G7hY:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));class i{constructor(){this.id=0}}},NqGI:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o}));const i=async(t,n,e,i,o)=>{if(t)return t.attachViewToDom(n,e,o,i);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e;return i&&i.forEach(t=>s.classList.add(t)),o&&Object.assign(s,o),n.appendChild(s),s.componentOnReady&&await s.componentOnReady(),s},o=(t,n)=>{if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},PYW1:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var i=e("ePDZ"),o=e("ItpF"),s=e("2c9M");const r=(t,n)=>{let e,r;const c=(t,i,o)=>{if("undefined"==typeof document)return;const s=document.elementFromPoint(t,i);s&&n(s)?s!==e&&(l(),a(s,o)):l()},a=(t,n)=>{e=t,r||(r=e);const o=e;Object(i.g)(()=>o.classList.add("ion-activated")),n()},l=(t=!1)=>{if(!e)return;const n=e;Object(i.g)(()=>n.classList.remove("ion-activated")),t&&r!==e&&e.click(),e=void 0};return Object(o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,s.a),onMove:t=>c(t.currentX,t.currentY,s.b),onEnd:()=>{l(!0),Object(s.e)(),r=void 0}})}},RyMC:function(t,n,e){"use strict";e.d(n,"a",(function(){return b}));var i=e("mrSG"),o=e("BEOd"),s=e("fXoL"),r=e("ova0"),c=e("TEn/"),a=e("3Pt+");let l=(()=>{class t extends o.a{constructor(t,n,e){super(null,t,null,n,e),this.postService=t,this.toastCtrl=n,this.modalCtrl=e,this.url="Account/ChangePassword",this.confirmPassword="",this.newPassword="",this.oldPassword=""}ngOnInit(){}guardar(){super.consumirPost(this.url,{oldPassword:this.oldPassword,newPassword:this.newPassword,confirmPassword:this.confirmPassword}).then(t=>{})}dismiss(t){this.modalCtrl.dismiss(t)}}return t.\u0275fac=function(n){return new(n||t)(s.Jb(r.a),s.Jb(c.Q),s.Jb(c.J))},t.\u0275cmp=s.Db({type:t,selectors:[["app-cambiar-password"]],features:[s.vb],decls:23,vars:3,consts:[[1,"modal-title"],["fill","clear","color","dark",3,"click"],["name","close-outline"],[1,"ion-padding"],["type","password",3,"ngModel","ngModelChange"],[1,"primary-button",3,"click"]],template:function(t,n){1&t&&(s.Pb(0,"ion-header"),s.Pb(1,"ion-toolbar"),s.Pb(2,"ion-title"),s.Pb(3,"div",0),s.Pb(4,"span"),s.zc(5,"Maestro Camiones"),s.Ob(),s.Pb(6,"ion-button",1),s.Xb("click",(function(){return n.dismiss(null)})),s.Kb(7,"ion-icon",2),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(8,"ion-content",3),s.Pb(9,"ion-item"),s.Pb(10,"ion-label"),s.zc(11,"Contrase\xf1a Actual"),s.Ob(),s.Pb(12,"ion-input",4),s.Xb("ngModelChange",(function(t){return n.oldPassword=t})),s.Ob(),s.Ob(),s.Pb(13,"ion-item"),s.Pb(14,"ion-label"),s.zc(15,"Contrase\xf1a Nueva"),s.Ob(),s.Pb(16,"ion-input",4),s.Xb("ngModelChange",(function(t){return n.newPassword=t})),s.Ob(),s.Ob(),s.Pb(17,"ion-item"),s.Pb(18,"ion-label"),s.zc(19,"Confirmar Contrase\xf1a"),s.Ob(),s.Pb(20,"ion-input",4),s.Xb("ngModelChange",(function(t){return n.confirmPassword=t})),s.Ob(),s.Ob(),s.Pb(21,"ion-button",5),s.Xb("click",(function(){return n.guardar()})),s.zc(22,"Guardar"),s.Ob(),s.Ob()),2&t&&(s.yb(12),s.fc("ngModel",n.oldPassword),s.yb(4),s.fc("ngModel",n.newPassword),s.yb(4),s.fc("ngModel",n.confirmPassword))},directives:[c.m,c.E,c.D,c.c,c.n,c.g,c.r,c.u,c.q,c.P,a.h,a.j],styles:[".modal-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.modal-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center}"]}),t})();var u=e("e8h1"),d=e("tyNb");let b=(()=>{class t{constructor(t,n,e,i){this.storage=t,this.router=n,this.toastCtrl=e,this.modalCtrl=i}ngOnInit(){this.storage.get("nombre").then(t=>{this.nombre=t})}logout(){this.storage.clear(),this.router.navigate(["/login"])}mostrarModal(){return Object(i.a)(this,void 0,void 0,(function*(){const t=yield this.modalCtrl.create({component:l,backdropDismiss:!1});t.present(),yield t.onWillDismiss().then(t=>Object(i.a)(this,void 0,void 0,(function*(){null!=t.data&&t.data.success&&(yield this.toastCtrl.create({message:t.data.message,position:"middle",duration:t.data.success?3e3:0,color:t.data.success?"success":"danger",buttons:t.data.success?[]:[{text:"Aceptar",role:"cancel"}]})).present()})))}))}}return t.\u0275fac=function(n){return new(n||t)(s.Jb(u.b),s.Jb(d.g),s.Jb(c.Q),s.Jb(c.J))},t.\u0275cmp=s.Db({type:t,selectors:[["app-user-menu"]],decls:13,vars:1,consts:[["vertical","top","horizontal","end","slot","fixed","edge",""],["fill","clear"],["name","person"],["side","bottom"],[1,"primary-button",3,"click"],["name","lock-closed"],["name","log-out"]],template:function(t,n){1&t&&(s.Pb(0,"ion-fab",0),s.Pb(1,"ion-fab-button",1),s.zc(2),s.Kb(3,"ion-icon",2),s.Ob(),s.Pb(4,"ion-fab-list",3),s.Pb(5,"ion-fab-button",4),s.Xb("click",(function(){return n.mostrarModal()})),s.Pb(6,"ion-label"),s.zc(7,"Cambiar Contrase\xf1a"),s.Ob(),s.Kb(8,"ion-icon",5),s.Ob(),s.Pb(9,"ion-fab-button",4),s.Xb("click",(function(){return n.logout()})),s.Pb(10,"ion-label"),s.zc(11,"Cerrar Sesi\xf3n"),s.Ob(),s.Kb(12,"ion-icon",6),s.Ob(),s.Ob(),s.Ob()),2&t&&(s.yb(2),s.Bc("",n.nombre," "))},directives:[c.i,c.j,c.n,c.k,c.u],styles:["ion-fab[_ngcontent-%COMP%]{top:0;display:flex;justify-content:flex-end;height:-webkit-fill-available;align-items:center}ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{--border-radius:0;width:250px;white-space:pre-wrap!important}"]}),t})()},YxHF:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));class i{constructor(){this.cedula="",this.password="",this.nombre="",this.email="",this.celular="",this.idCliente=0,this.nombreCliente="",this.roles=[{nombre:"Administrador",seleccionado:!1},{nombre:"Auxiliar",seleccionado:!1},{nombre:"Cliente",seleccionado:!1},{nombre:"Conductor",seleccionado:!1}],this.activo=!0}}},hcCc:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return c}));const i=(t,n)=>null!==n.closest(t),o=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,s=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>n[t]=!0),n},r=/^[a-z][a-z0-9+\-.]*:/,c=async(t,n,e,i)=>{if(null!=t&&"#"!==t[0]&&!r.test(t)){const o=document.querySelector("ion-router");if(o)return null!=n&&n.preventDefault(),o.push(t,e,i)}return!1}},ypJn:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));class i{constructor(){this.id=0,this.nombre="",this.direccion="",this.activo=!0}}}}]);