(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"0WVm":function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),i=n("3Pt+"),r=n("TEn/"),l=n("tyNb"),a=n("mrSG"),c=n("26ZW"),s=n("qXBG"),d=n("LWQN"),m=n("fXoL"),g=n("e8h1");function h(e,t){1&e&&m["\u0275\u0275element"](0,"ion-icon",9)}function p(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1,"\u9002\u5408\u9ad8\u5e74\u7ea7\u5b66\u751f\u4f7f\u7528"),m["\u0275\u0275elementEnd"]())}function u(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"ion-card",3),m["\u0275\u0275listener"]("click",(function(n){m["\u0275\u0275restoreView"](e);const o=t.$implicit;return m["\u0275\u0275nextContext"]().selectCard(n,o)})),m["\u0275\u0275elementStart"](1,"ion-card-content"),m["\u0275\u0275elementStart"](2,"ion-item",4),m["\u0275\u0275elementStart"](3,"ion-label"),m["\u0275\u0275elementStart"](4,"h1",5),m["\u0275\u0275template"](5,h,1,0,"ion-icon",6),m["\u0275\u0275text"](6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](7,p,2,0,"p",7),m["\u0275\u0275elementEnd"](),m["\u0275\u0275namespaceSVG"](),m["\u0275\u0275elementStart"](8,"svg",8),m["\u0275\u0275element"](9,"use"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("ngIf",null!=n.currentRole&&n.currentRole.roleID==e.roleID),m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"](" ",e.roleName," "),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",5==e.userType),m["\u0275\u0275advance"](2),m["\u0275\u0275attribute"]("href",n.getRoleImg(e),null,"xlink")}}const f=[{path:"",component:(()=>{class e{constructor(e,t,n,o,i,r,l){this.storage=e,this.theRoute=t,this.nav=n,this.alertController=o,this.osrv=i,this.auth=r,this.comm=l,this.storage.get("USER_INFO").then(e=>{this.roles=e.roles}),this.storage.get("USER_ROLE").then(e=>{this.currentRole=e})}ngOnInit(){}selectCard(e,t){return Object(a.a)(this,void 0,void 0,(function*(){let n=e.currentTarget,o=document.getElementsByTagName(n.tagName),i=o.length;for(let e=0;e<i;e++)o[e].style.border="none";n.style.border="2px solid #3880ff",this.role=t,yield this.storage.remove("USER_ROLE"),yield this.storage.set("USER_ROLE",this.role);let r=this.role.roleID;this.comm.loadingPresent(),yield this.osrv.getRoleApp(r).then(e=>Object(a.a)(this,void 0,void 0,(function*(){if(0==e.code){var t=yield this.osrv.getUsercommonlyApp(r);if(this.comm.loadingDismiss(),0===t.code){let n=yield this.auth.get_user();n.myMobileAppList=e.data,n.myMobileUsuallyAppList=t.data,yield this.storage.set("USER_INFO",n),this.theRoute.navigate(["tabs/me"],{skipLocationChange:!0,replaceUrl:!0})}else yield this.showTips("\u5207\u6362\u5931\u8d25\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458")}else yield this.showTips("\u5207\u6362\u5931\u8d25\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458")})))}))}getRoleImg(e){let t="#";switch(e.userType){case 5:t+="iconxuesheng2";break;case 2:t+="iconguanliyuan";break;case 4:t+="icondaoshi";break;case 7:t+="iconjiaoshi1";break;case 6:t+="iconjiachang"}return t}showTips(e){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({message:e});yield t.present(),setTimeout(()=>{t.remove()},1e3)}))}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](g.b),m["\u0275\u0275directiveInject"](l.g),m["\u0275\u0275directiveInject"](r.NavController),m["\u0275\u0275directiveInject"](r.AlertController),m["\u0275\u0275directiveInject"](c.a),m["\u0275\u0275directiveInject"](s.a),m["\u0275\u0275directiveInject"](d.a))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["app-change-role"]],decls:8,vars:1,consts:[["slot","start"],["defaultHref","tabs"],["color","light",3,"click",4,"ngFor","ngForOf"],["color","light",3,"click"],["lines","none","color","light"],[2,"font-size","22px"],["class","iconfont iconxingbiao ym-font","color","warning","style","font-size:20px; ",4,"ngIf"],[4,"ngIf"],["slot","end","aria-hidden","true",1,"icon"],["color","warning",1,"iconfont","iconxingbiao","ym-font",2,"font-size","20px"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"ion-header"),m["\u0275\u0275elementStart"](1,"ion-toolbar"),m["\u0275\u0275elementStart"](2,"ion-buttons",0),m["\u0275\u0275element"](3,"ion-back-button",1),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"ion-title"),m["\u0275\u0275text"](5,"\u89d2\u8272\u5207\u6362"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"ion-content"),m["\u0275\u0275template"](7,u,10,4,"ion-card",2),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](7),m["\u0275\u0275property"]("ngForOf",t.roles))},directives:[r.IonHeader,r.IonToolbar,r.IonButtons,r.IonBackButton,r.IonBackButtonDelegate,r.IonTitle,r.IonContent,o.NgForOf,r.IonCard,r.IonCardContent,r.IonItem,r.IonLabel,o.NgIf,r.IonIcon],styles:["p[_ngcontent-%COMP%]{color:#a9a9a9!important;text-align:center;font-size:14px;margin-left:-10px}ion-card[_ngcontent-%COMP%]{margin-top:30px;border-radius:60px}ion-card[_ngcontent-%COMP%]:first-child{margin-top:80px}.card-content-ios[_ngcontent-%COMP%]{padding:0}ion-thumbnail[_ngcontent-%COMP%]{width:100px;height:100px}ion-item[_ngcontent-%COMP%]{height:100px}ion-label[_ngcontent-%COMP%]{margin-left:1.5em}h1[_ngcontent-%COMP%]{padding-left:0}.current_role[_ngcontent-%COMP%]{position:absolute;z-index:1000;left:50px;top:15px}.icon[_ngcontent-%COMP%]{width:6em;height:6em;vertical-align:-.15em;fill:currentColor;overflow:hidden}"]}),e})()}];let I=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.i.forChild(f)],l.i]}),e})();n.d(t,"ChangeRolePageModule",(function(){return v}));let v=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule,i.FormsModule,r.IonicModule,I]]}),e})()}}]);