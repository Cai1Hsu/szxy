(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{lu3c:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),r=n("3Pt+"),s=n("TEn/"),o=n("tyNb"),a=n("mrSG"),l=n("qXBG"),d=n("LWQN"),c=n("AytR"),u=n("A7F3"),m=n("26ZW"),h=(n("ed2z"),n("itXk")),g=n("jMEw"),p=n("uJRU"),f=n("Oh4o"),v=n("fXoL"),y=n("e8h1");const I=[{path:"",component:(()=>{class e{constructor(e,t,n,i,r,s,o,a,l,d,c){this.authService=e,this.router=t,this.route=n,this.storage=i,this.comm=r,this.appVersion=s,this.JPushPlugin=o,this.JanalyticsPlugin=a,this.osrv=l,this.ymsrv=d,this.ausrv=c,this.msg="",this.the_agreenment=!1}ngOnInit(){this.route.url.subscribe(e=>{this.authService.clear()})}login(e){return Object(a.a)(this,void 0,void 0,(function*(){if(this.the_agreenment){var t=yield this.comm.loadingPresent("\u767b\u5f55\u4e2d......"),n=yield this.authService.login(e.value);if(0==n.code){var i=n.data.accessToken;if(n.data&&i&&null!=i&&null!=i){let e;var r=yield this.authService.user_info(i);if(0==r.code){if(e=r.data,this.storage.set("UNIQUE_IDENTIFIER",r.data.uniqueIdentifier),e.roles&&e.roles.filter(e=>1==e.userType).length>0)return t.dismiss(),void this.comm.presentToast("APP\u4e0d\u5141\u8bb8\u8d85\u7ea7\u7ba1\u7406\u5458\u767b\u5f55\uff01");var s=e.roles&&e.roles.length>0&&e.roles.filter(e=>1==e.userType||2==e.userType).length>0;if(false && !s&&(""==e.mobileNo||null==e.mobileNo||null==e.mobileNo))return t.dismiss(),void(yield this.comm.presentAlert("\u6e29\u99a8\u63d0\u793a",null,"\u60a8\u8fd8\u672a\u7ed1\u5b9a\u624b\u673a\uff0c\u4f7f\u7528APP\u524d\uff0c\u8bf7\u5148\u7ed1\u5b9a\u624b\u673a",[{text:"\u597d\u7684,\u53bb\u8bbe\u7f6e",handler:t=>{this.router.navigate(["bind-phone",{userid:e.userID,token:i}])}}]));if( false && !0===e.isNeedResetPwd)return t.dismiss(),void(yield this.comm.presentAlert("\u6e29\u99a8\u63d0\u793a",null,"\u5e10\u53f7\u5b89\u5168\u7b49\u7ea7\u4f4e\uff0c\u8bf7\u4fee\u6539\u5bc6\u7801\uff01",[{text:"\u597d\u7684,\u53bb\u4fee\u6539",handler:t=>{this.router.navigate(["update-password",{userid:e.userID,token:i}])}}]));var o=e.roles&&e.roles.length>0&&e.roles.filter(e=>7==e.userType).length>0,l=e.roles&&e.roles.length>0&&e.roles.filter(e=>4==e.userType).length>0;let n;n=s?e.roles.filter(e=>1==e.userType||2==e.userType)[0]:o?e.roles.filter(e=>7==e.userType)[0]:l?e.roles.filter(e=>4==e.userType)[0]:e.roles[0],yield this.storage.remove("USER_ROLE"),yield this.storage.set("USER_ROLE",n),e.avatarUrl&&""!==e.avatarUrl&&null!=e.avatarUrl&&null!=e.avatarUrl||(e.avatarUrl=c.a.default_avatar),yield this.storage.set("ACCESS_TOKEN",i),yield this.storage.set("USER_INFO",e),yield this.storage.set("OPEN_NOTIFICATION",!0);try{this.JPushPlugin.initJPush(),this.JPushPlugin.resume(),setTimeout(()=>Object(a.a)(this,void 0,void 0,(function*(){var t=[e.serialNo,this.getUserCode(e.userID)];if(1==(yield this.authService.is_all_teacher())&&(t.push("teacher"+e.serialNo),t.push(this.getUserCode(e.userCode))),1==(yield this.authService.is_student())){t.push("student"+e.serialNo),t.push(this.getUserCode(e.userCode));var n=yield this.osrv.get_student_full(e.userCode);0===n.code&&(n.data&&""!=n.data.classCode&&null!=n.data.classCode&&t.push(this.getUserCode(n.data.classCode)),n.data&&""!=n.data.gradeCode&&null!=n.data.gradeCode&&t.push(this.getUserCode(n.data.gradeCode)));var i=yield this.ymsrv.get_teach_class({studentid:e.userCode});0===i.code&&i.data.length>0&&i.data.forEach(e=>{t.push(e.id)})}this.JPushPlugin.setTags(t)})),2e4),setTimeout(()=>{},3e4)}catch(d){}this.JanalyticsPlugin.login(!0),this.ausrv.check(),this.router.navigate(["tabs"],{replaceUrl:!0,skipLocationChange:!0})}else this.comm.presentToast(r.msg),this.JanalyticsPlugin.login(!1)}else this.comm.presentToast(n.msg),this.JanalyticsPlugin.login(!1)}else this.comm.presentToast(n.msg),this.JanalyticsPlugin.login(!1);t.dismiss()}else this.comm.presentToast("\u8bf7\u5148\u9605\u8bfb\u5e76\u540c\u610f\u201c\u6570\u5b57\u6821\u56ed\u7528\u6237\u9690\u79c1\u534f\u8bae\u201d")}))}getUserCode(e){return e.replace(/-/gi,"")}open_agreement(){return Object(a.a)(this,void 0,void 0,(function*(){this.the_agreenment=!0,this.router.navigate(["/login/agreement"])}))}findPassword(){this.router.navigate(["find-password"])}}return e.\u0275fac=function(t){return new(t||e)(v["\u0275\u0275directiveInject"](l.a),v["\u0275\u0275directiveInject"](o.g),v["\u0275\u0275directiveInject"](o.a),v["\u0275\u0275directiveInject"](y.b),v["\u0275\u0275directiveInject"](d.a),v["\u0275\u0275directiveInject"](p.a),v["\u0275\u0275directiveInject"](u.a),v["\u0275\u0275directiveInject"](h.a),v["\u0275\u0275directiveInject"](m.a),v["\u0275\u0275directiveInject"](g.a),v["\u0275\u0275directiveInject"](f.a))},e.\u0275cmp=v["\u0275\u0275defineComponent"]({type:e,selectors:[["app-login"]],decls:29,vars:2,consts:[[2,"padding","40px"],["id","container"],["src","../../../assets/images/logo@2x.png","width","120px"],[2,"margin-top","40px"],[3,"ngSubmit"],["form","ngForm"],[1,"ion-no-padding","ion-text-sm-left"],["name","person-outline","size","small","color","primary"],["name","name","type","text","placeholder","\u7528\u6237\u540d/\u624b\u673a","ngModel","","required",""],["name","key-outline","size","small","color","primary"],["name","password","type","password","placeholder","\u5bc6\u7801","ngModel","","required",""],["lines","none",1,"ion-no-padding","ion-text-sm-left"],["name","agreement",3,"ngModel","ngModelChange"],[2,"font-size","small","color","gray",3,"click"],[1,"mt20","bgfff",2,"min-height","3rem"],["type","submit","expand","block","color","primary"],["color","medium","slot","end",2,"font-size","smaller","padding","0","margin","0",3,"click"]],template:function(e,t){if(1&e){const e=v["\u0275\u0275getCurrentView"]();v["\u0275\u0275elementStart"](0,"ion-content",0),v["\u0275\u0275elementStart"](1,"div",1),v["\u0275\u0275element"](2,"img",2),v["\u0275\u0275elementStart"](3,"div",3),v["\u0275\u0275elementStart"](4,"form",4,5),v["\u0275\u0275listener"]("ngSubmit",(function(){v["\u0275\u0275restoreView"](e);const n=v["\u0275\u0275reference"](5);return t.login(n)})),v["\u0275\u0275elementStart"](6,"ion-list"),v["\u0275\u0275elementStart"](7,"ion-item",6),v["\u0275\u0275element"](8,"ion-icon",7),v["\u0275\u0275elementStart"](9,"ion-label"),v["\u0275\u0275text"](10,"\xa0"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275element"](11,"ion-input",8),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](12,"ion-item",6),v["\u0275\u0275element"](13,"ion-icon",9),v["\u0275\u0275elementStart"](14,"ion-label"),v["\u0275\u0275text"](15,"\xa0"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275element"](16,"ion-input",10),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](17,"ion-item",11),v["\u0275\u0275elementStart"](18,"ion-checkbox",12),v["\u0275\u0275listener"]("ngModelChange",(function(e){return t.the_agreenment=e})),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](19,"a",13),v["\u0275\u0275listener"]("click",(function(){return t.open_agreement()})),v["\u0275\u0275text"](20,"\xa0\u6211\u5df2\u9605\u8bfb\u5e76\u540c\u610f\u300a\u6570\u5b57\u6821\u56ed\u7528\u6237\u9690\u79c1\u534f\u8bae\u300b"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](21,"div",14),v["\u0275\u0275elementStart"](22,"ion-button",15),v["\u0275\u0275text"](23,"\u767b\u5f55"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](24,"ion-item",11),v["\u0275\u0275elementStart"](25,"a",16),v["\u0275\u0275listener"]("click",(function(){return t.findPassword()})),v["\u0275\u0275text"](26,"\u5fd8\u8bb0\u5bc6\u7801"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](27,"p"),v["\u0275\u0275text"](28),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"]()}2&e&&(v["\u0275\u0275advance"](18),v["\u0275\u0275property"]("ngModel",t.the_agreenment),v["\u0275\u0275advance"](10),v["\u0275\u0275textInterpolate1"](" ",t.msg," "))},directives:[s.IonContent,r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.NgForm,s.IonList,s.IonItem,s.IonIcon,s.IonLabel,s.IonInput,s.TextValueAccessor,r.NgControlStatus,r.NgModel,r.RequiredValidator,s.IonCheckbox,s.BooleanValueAccessor,s.IonButton],styles:["ion-content[_ngcontent-%COMP%]{--background:#fff!important}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;font-size:smaller;left:0;right:0;top:40%;transform:translateY(-50%);padding:20px}#container[_ngcontent-%COMP%]   .ym-line[_ngcontent-%COMP%]{text-align:left;border-bottom:thin solid #d3d3d3;margin-bottom:20px}ion-checkbox[_ngcontent-%COMP%]{--size:12px}"]}),e})()},{path:"agreement",loadChildren:()=>n.e(105).then(n.bind(null,"sLiz")).then(e=>e.AgreementPageModule)}];let C=(()=>{class e{}return e.\u0275mod=v["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=v["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.i.forChild(I)],o.i]}),e})();n.d(t,"LoginPageModule",(function(){return S}));let S=(()=>{class e{}return e.\u0275mod=v["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=v["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.CommonModule,r.FormsModule,s.IonicModule,C]]}),e})()}}]);
