(window.webpackJsonp=window.webpackJsonp||[]).push([[14,269],{"YtY+":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("mrSG"),r=n("m88C"),o=n("D+jN"),a=n("fXoL");let c=(()=>{class e{constructor(e,t){this.cache=e,this.rsrv=t}Auth(){return Object(i.a)(this,void 0,void 0,(function*(){let e=yield this.cache.get("ACCESS_TOKEN"),t=yield this.cache.get("USER_ROLE");if(!e||""==e||!t||null==t)return!1;let n=yield this.rsrv.thirdLogin({access_token:e,refresh_token:e,appId:"",roleId:t.roleID,pltid:0});return 0==n.code&&(this.cache.set("resource_token",n.data.access_token),!0)}))}Token(){return Object(i.a)(this,void 0,void 0,(function*(){return yield this.cache.get("resource_token")}))}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](o.a),a["\u0275\u0275inject"](r.a))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},eZnK:function(e,t,n){"use strict";n.r(t);var i=n("tyNb"),r=n("mrSG"),o=n("D+jN"),a=n("LWQN"),c=n("YtY+"),s=n("m88C"),d=n("fXoL"),l=n("TEn/"),h=n("ofXK"),u=n("zxQZ");function g(e,t){1&e&&(d["\u0275\u0275elementContainerStart"](0),d["\u0275\u0275element"](1,"app-loading-process",4),d["\u0275\u0275elementContainerEnd"]()),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("show",!0)("loading",!1))}function m(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"ion-segment-button",13),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const n=t.$implicit;return d["\u0275\u0275nextContext"](2).segmentChange(n)})),d["\u0275\u0275elementStart"](1,"ion-label"),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](3,"div",14),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;d["\u0275\u0275property"]("value",e.id),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](e.name)}}const p=function(e){return{active:e}};function _(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"li"),d["\u0275\u0275elementStart"](1,"a",15),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const n=t.$implicit;return d["\u0275\u0275nextContext"](2).subjectSelect(n)})),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction1"](2,p,!0===e.selected)),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](e.name)}}function v(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"a",22),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const n=t.$implicit;return d["\u0275\u0275nextContext"](3).selectedVersion(n)})),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction1"](2,p,!0===e.selected)),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](e.name)}}function f(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"a",22),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const n=t.$implicit;return d["\u0275\u0275nextContext"](3).selectedKpoint(n)})),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction1"](2,p,!0===e.selected)),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](e.name)}}function b(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"a",22),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const n=t.$implicit;return d["\u0275\u0275nextContext"](3).selectedCategory(n)})),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction1"](2,p,!0===e.selected)),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](e.name)}}function y(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"a",22),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const n=t.$implicit;return d["\u0275\u0275nextContext"](3).selectedGrade(n)})),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction1"](2,p,!0===e.selected)),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](e.name)}}function j(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"ion-col",16),d["\u0275\u0275elementStart"](1,"ion-grid"),d["\u0275\u0275elementStart"](2,"ion-row"),d["\u0275\u0275elementStart"](3,"ion-col"),d["\u0275\u0275elementStart"](4,"ion-button",17),d["\u0275\u0275listener"]("click",(function(){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](2).gototextboook()})),d["\u0275\u0275text"](5,"\u6559\u6750\u540c\u6b65\u8d44\u6e90"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"ion-col"),d["\u0275\u0275elementStart"](7,"ion-button",17),d["\u0275\u0275listener"]("click",(function(){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"](2).gotokpoint()})),d["\u0275\u0275text"](8,"\u77e5\u8bc6\u70b9\u8d44\u6e90"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"div",18),d["\u0275\u0275elementStart"](10,"a",19),d["\u0275\u0275text"](11,"\u6559\u6750"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"div",20),d["\u0275\u0275template"](13,v,2,4,"a",21),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"div",18),d["\u0275\u0275elementStart"](15,"a",19),d["\u0275\u0275text"](16,"\u77e5\u8bc6\u70b9"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](17,"div",20),d["\u0275\u0275template"](18,f,2,4,"a",21),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](19,"div",18),d["\u0275\u0275elementStart"](20,"a",19),d["\u0275\u0275text"](21,"\u8d44\u6e90\u7c7b\u522b"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](22,"div",20),d["\u0275\u0275template"](23,b,2,4,"a",21),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](24,"div",18),d["\u0275\u0275elementStart"](25,"a",19),d["\u0275\u0275text"](26,"\u5e74\u7ea7"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](27,"div",20),d["\u0275\u0275template"](28,y,2,4,"a",21),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](13),d["\u0275\u0275property"]("ngForOf",e.the_version),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("ngForOf",e.the_kpoint),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("ngForOf",e.the_category),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("ngForOf",e.the_grade)}}function x(e,t){if(1&e&&(d["\u0275\u0275elementContainerStart"](0),d["\u0275\u0275elementStart"](1,"div",5),d["\u0275\u0275elementStart"](2,"ion-segment",6),d["\u0275\u0275template"](3,m,4,2,"ion-segment-button",7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](4,"app-loading-process",4),d["\u0275\u0275elementStart"](5,"ion-grid",8),d["\u0275\u0275elementStart"](6,"ion-row"),d["\u0275\u0275elementStart"](7,"ion-col",9),d["\u0275\u0275elementStart"](8,"ul",10),d["\u0275\u0275template"](9,_,3,4,"li",11),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](10,j,29,4,"ion-col",12),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementContainerEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275propertyInterpolate"]("value",e.segment_index),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",e.the_segment),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("show",!1)("loading",!0===e.loading),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("ngForOf",e.the_subject),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",1!=e.loading)}}let O=(()=>{class e{constructor(e,t,n,i,r){this.router=e,this.rsrv=t,this.cache=n,this.comm=i,this.rsrp=r,this.the_segment=[],this.the_subject=[],this.the_version=[],this.the_category=[],this.the_grade=[],this.the_kpoint=[],this.loading=!0}ngOnInit(){this.init()}init(){return Object(r.a)(this,void 0,void 0,(function*(){this.loading=!0,this.the_open_system=yield this.initAuth(),1==this.the_open_system&&(yield this.initSegment(),yield this.initSubject(this.segment_index),this.the_subject.length>0&&(yield this.initKpoint(this.the_subject[0].id),yield this.initVersion(this.the_subject[0].id)),yield this.initCategory(),yield this.initGrade(this.segment_index),this.loading=!1)}))}ionViewWillEnter(){this.initAuth()}getExplorerInfo(){return console.log(window.navigator),alert(JSON.stringify(window.navigator)),this.explorer=window.navigator.userAgent.toLowerCase(),this.explorer.indexOf("msie")>=0?(this.ver=this.explorer.match(/msie ([\d.]+)/)[1],{type:"IE",version:this.ver}):this.explorer.indexOf("firefox")>=0?(this.ver=this.explorer.match(/firefox\/([\d.]+)/)[1],{type:"Firefox",version:this.ver}):this.explorer.indexOf("chrome")>=0?(this.ver=this.explorer.match(/chrome\/([\d.]+)/)[1],{type:"Chrome",version:this.ver}):void 0}initAuth(){return Object(r.a)(this,void 0,void 0,(function*(){return!0!==(yield this.rsrp.Auth())?(this.comm.presentAlert("\u6e29\u99a8\u63d0\u793a",null,"\u5bf9\u4e0d\u8d77\uff0c\u65e0\u6cd5\u4f7f\u7528\u8be5\u6a21\u5757\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\u68c0\u67e5\u662f\u5426\u5f00\u901a\u4e86\u8be5\u6a21\u5757\uff01",[{role:"cancel",text:"\u53d6\u6d88",handler:()=>{}},{text:"\u597d\u7684",handler:()=>{}}]),!1):(this.the_token=yield this.rsrp.Token(),!0)}))}initSegment(){return Object(r.a)(this,void 0,void 0,(function*(){let e=yield this.rsrv.get_segment_list(this.the_token);0==e.code&&(this.segment_index=e.data[e.data.length-1].id,this.the_segment=e.data)}))}segmentChange(e){return Object(r.a)(this,void 0,void 0,(function*(){this.loading=!0,this.segment_index=e.id,yield this.initSubject(e.id),this.the_subject.length>0&&(yield this.subjectSelect(this.the_subject[0])),yield this.initGrade(e.id),this.loading=!1}))}initSubject(e){return Object(r.a)(this,void 0,void 0,(function*(){let t=yield this.rsrv.get_subject_list(this.the_token,e);0==t.code&&(this.the_subject=t.data,this.the_subject.length>0&&(this.the_subject[0].selected=!0))}))}subjectSelect(e){return Object(r.a)(this,void 0,void 0,(function*(){this.loading=!0,this.the_subject.forEach(e=>e.selected=!1),e.selected=!0,yield this.initVersion(e.id),yield this.initKpoint(e.id),this.loading=!1}))}initVersion(e){return Object(r.a)(this,void 0,void 0,(function*(){this.the_version=[];let t=yield this.rsrv.get_subject_version_list(this.the_token,e);0==t.code&&(this.the_version=t.data)}))}selectedVersion(e){var t;return Object(r.a)(this,void 0,void 0,(function*(){this.clearAll(),e.selected=!0,this.router.navigate(["resource/list",{versionId:e.id,subjectId:null===(t=this.the_subject.find(e=>!0===e.selected))||void 0===t?void 0:t.id,segmentId:this.segment_index}])}))}initKpoint(e){return Object(r.a)(this,void 0,void 0,(function*(){let t=yield this.rsrv.get_kpoint_tree(this.the_token,e);0==t.code&&(this.the_kpoint=t.data)}))}selectedKpoint(e){var t;return Object(r.a)(this,void 0,void 0,(function*(){this.clearAll(),e.selected=!0,this.router.navigate(["resource/list",{kpointId:e.id,subjectId:null===(t=this.the_subject.find(e=>!0===e.selected))||void 0===t?void 0:t.id,segmentId:this.segment_index,kpoint:!0}])}))}initCategory(){return Object(r.a)(this,void 0,void 0,(function*(){let e=yield this.rsrv.get_dictionary_list(this.the_token,14);0==e.code&&(this.the_category=e.data)}))}selectedCategory(e){var t;return Object(r.a)(this,void 0,void 0,(function*(){this.clearAll(),e.selected=!0,this.router.navigate(["resource/list",{catalogId:e.id,subjectId:null===(t=this.the_subject.find(e=>!0===e.selected))||void 0===t?void 0:t.id,segmentId:this.segment_index}])}))}initGrade(e){return Object(r.a)(this,void 0,void 0,(function*(){let t=yield this.rsrv.get_grade_list(this.the_token,e);0==t.code&&(this.the_grade=t.data)}))}selectedGrade(e){var t;return Object(r.a)(this,void 0,void 0,(function*(){this.clearAll(),e.selected=!0,this.router.navigate(["resource/list",{gradeId:e.id,subjectId:null===(t=this.the_subject.find(e=>!0===e.selected))||void 0===t?void 0:t.id,segmentId:this.segment_index}])}))}clearAll(){return Object(r.a)(this,void 0,void 0,(function*(){this.the_category.forEach(e=>e.selected=!1),this.the_version.forEach(e=>e.selected=!1),this.the_kpoint.forEach(e=>e.selected=!1),this.the_grade.forEach(e=>e.selected=!1)}))}gototextboook(){var e;return Object(r.a)(this,void 0,void 0,(function*(){this.router.navigate(["resource/list",{textbook:!0,subjectId:null===(e=this.the_subject.find(e=>!0===e.selected))||void 0===e?void 0:e.id,segmentId:this.segment_index}])}))}gotokpoint(){var e;return Object(r.a)(this,void 0,void 0,(function*(){this.router.navigate(["resource/list",{kpoint:!0,subjectId:null===(e=this.the_subject.find(e=>!0===e.selected))||void 0===e?void 0:e.id,segmentId:this.segment_index}])}))}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](i.g),d["\u0275\u0275directiveInject"](s.a),d["\u0275\u0275directiveInject"](o.a),d["\u0275\u0275directiveInject"](a.a),d["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["app-resource"]],decls:9,vars:2,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","tabs"],[4,"ngIf"],[3,"show","loading"],[1,"bgfff"],["value","heart","color","blues","mode","md","slot","start",3,"value"],[3,"value","click",4,"ngFor","ngForOf"],[1,"main-grid"],["size","2"],[1,"subject-list"],[4,"ngFor","ngForOf"],["size","10","class","bgfff padding-20",4,"ngIf"],[3,"value","click"],[1,"bolder-sm"],[3,"ngClass","click"],["size","10",1,"bgfff","padding-20"],["expand","block",3,"click"],[1,"mt20"],[1,"bb","padding-top-bottom-10","font-20"],[1,"padding-top-bottom-10","border-bottom"],["class","font-16 box mr10 mt10",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"font-16","box","mr10","mt10",3,"ngClass","click"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"ion-header",0),d["\u0275\u0275elementStart"](1,"ion-toolbar"),d["\u0275\u0275elementStart"](2,"ion-buttons",1),d["\u0275\u0275element"](3,"ion-back-button",2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"ion-title"),d["\u0275\u0275text"](5,"\u8d44\u6e90\u5e93"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"ion-content"),d["\u0275\u0275template"](7,g,2,2,"ng-container",3),d["\u0275\u0275template"](8,x,11,6,"ng-container",3),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](7),d["\u0275\u0275property"]("ngIf",1!=t.the_open_system),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",!0===t.the_open_system))},directives:[l.IonHeader,l.IonToolbar,l.IonButtons,l.IonBackButton,l.IonBackButtonDelegate,l.IonTitle,l.IonContent,h.NgIf,u.a,l.IonSegment,l.SelectValueAccessor,h.NgForOf,l.IonGrid,l.IonRow,l.IonCol,l.IonSegmentButton,l.IonLabel,h.NgClass,l.IonButton],styles:["ion-segment-button[_ngcontent-%COMP%]{--border-width:0px;min-width:4rem;--indicator-height:0rem;font-weight:900;--padding-start:20px;--padding-end:20px}.segment_width[_ngcontent-%COMP%]{min-width:6rem!important}.segment-button-checked[_ngcontent-%COMP%]   .bolder-sm[_ngcontent-%COMP%]{border:1px solid #1982ff;width:1rem;margin:0 auto}ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.main-grid[_ngcontent-%COMP%]{--ion-grid-padding:0}.main-grid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{--ion-grid-column-padding:0}.subject-list[_ngcontent-%COMP%]{width:100%;overflow:hidden}.subject-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:table;width:100%}.subject-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:table-cell;vertical-align:middle;height:3rem;font-size:.8rem;text-align:center;padding:0 .25rem;color:#1d1d1f}.subject-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#1982ff;background:#fff}.box[_ngcontent-%COMP%]{padding:0 .5rem;height:2.2rem;line-height:2.2rem;border-radius:.25rem;background:#f4f4f5;display:inline-block;color:#1d1d1f}.box.active[_ngcontent-%COMP%]{color:#fff;background:#1982ff}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #e4e4e4}"]}),e})();n.d(t,"ResourcePageRoutingModule",(function(){return w}));const C=[{path:"",component:O},{path:"list",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(104)]).then(n.bind(null,"r9qf")).then(e=>e.ListPageModule)},{path:"textbook-search",loadChildren:()=>Promise.all([n.e(0),n.e(266)]).then(n.bind(null,"G8Nh")).then(e=>e.TextbookSearchPageModule)},{path:"kpoint-search",loadChildren:()=>Promise.all([n.e(0),n.e(264)]).then(n.bind(null,"nHK9")).then(e=>e.KpointSearchPageModule)},{path:"resource-search",loadChildren:()=>Promise.all([n.e(0),n.e(265)]).then(n.bind(null,"RZfN")).then(e=>e.ResourceSearchPageModule)},{path:"resource-detail",loadChildren:()=>Promise.all([n.e(1),n.e(2),n.e(0),n.e(83)]).then(n.bind(null,"zqCP")).then(e=>e.ResourceDetailPageModule)},{path:"chapter-search",loadChildren:()=>Promise.all([n.e(0),n.e(263)]).then(n.bind(null,"BpN4")).then(e=>e.ChapterSearchPageModule)}];let w=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.i.forChild(C)],i.i]}),e})()},m88C:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n("mrSG"),r=n("tk/3"),o=n("AytR"),a=n("D+jN"),c=n("0yPt"),s=n("fXoL");let d=(()=>{class e{constructor(e,t){this.http=e,this.cache=t}thirdLogin(e){return Object(i.a)(this,void 0,void 0,(function*(){return this.http.generic_get(o.a.resource_library+"/Login/OAuth",e)}))}get_segment_list(e){return Object(i.a)(this,void 0,void 0,(function*(){let t=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_get_byheader(o.a.resource_library+"/Academic/Segment",{},t)}))}get_subject_list(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_get_byheader(o.a.resource_library+"/Academic/Segment/Subject/"+t,{},n)}))}get_subject_version_list(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_get_byheader(o.a.resource_library+"/Academic/Subject/Version/"+t,{},n)}))}get_dictionary_list(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_get_byheader(o.a.resource_library+"/Base/ClassType/"+t,{},n)}))}get_grade_list(e,t=""){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_get_byheader(o.a.resource_library+"/Academic/Segment/Grade",{segmentId:t},n)}))}get_kpoint_tree(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_get_byheader(o.a.resource_library+"/Academic/KPoint/List/"+t,{},n)}))}get_my_resource_list(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_post_byheader(o.a.resource_library+"/Academic/doc/userCenter/list",t,n)}))}get_resource_list(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_post_byheader(o.a.resource_library+"/Academic/doc/kpoint/list",t,n)}))}get_version_textbook_list(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_get_byheader(o.a.resource_library+"/Academic/Version/TextBook/"+t,{},n)}))}get_chapter_list(e,t,n=""){return Object(i.a)(this,void 0,void 0,(function*(){let i=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_get_byheader(o.a.resource_library+"/Academic/TextBook/Chapter/"+t,{parentId:n},i)}))}get_parent_bytextbook(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_get_byheader(o.a.resource_library+"/base/textBook/navigate/"+t,{},n)}))}get_chapter_child_tree(e,t,n){return Object(i.a)(this,void 0,void 0,(function*(){let i=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_get_byheader(o.a.resource_library+"/Academic/TextBook/Chapter/menu/"+n,{parentId:t},i)}))}get_resource_detail(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_get_byheader(o.a.resource_library+"/Academic/doc/"+t,{},n)}))}resource_add_view(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_get_byheader(o.a.resource_library+"/Academic/doc/view/"+t,{},n)}))}resource_collect(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_get_byheader(o.a.resource_library+"/Academic/doc/collect/"+t,{},n)}))}resource_cancel_collect(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_get_byheader(o.a.resource_library+"/Academic/doc/collect/cancel/"+t,{},n)}))}resource_like(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_get_byheader(o.a.resource_library+"/Academic/doc/like/"+t,{},n)}))}resource_cancel_like(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_get_byheader(o.a.resource_library+"/Academic/doc/like/cancel/"+t,{},n)}))}insert_rank(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_post_byheader(o.a.resource_library+"/Academic/doc/rank",t,n)}))}get_resource_comment_list(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_post_byheader(o.a.resource_library+"/Academic/doc/comment/list",t,n)}))}insert_resource_comment(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_post_byheader(o.a.resource_library+"/Academic/doc/comment/create",t,n)}))}delete_resource_comment(e,t){return Object(i.a)(this,void 0,void 0,(function*(){let n=(new r.e).append("Authorization","Bearer "+e);return this.http.generic_post_byheader(o.a.resource_library+"/Academic/doc/comment/delete",{id:t},n)}))}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](c.a),s["\u0275\u0275inject"](a.a))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},zxQZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("fXoL"),r=n("ofXK"),o=n("TEn/");function a(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",2),i["\u0275\u0275element"](1,"ion-spinner",3),i["\u0275\u0275elementEnd"]())}function c(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",4),i["\u0275\u0275element"](1,"img",5),i["\u0275\u0275elementEnd"]())}let s=(()=>{class e{constructor(){this.loading=!1}ngOnChanges(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-loading-process"]],inputs:{show:"show",loading:"loading"},features:[i["\u0275\u0275NgOnChangesFeature"]],decls:2,vars:2,consts:[["style","text-align: center;",4,"ngIf"],["slot","fixed","style","text-align: center;",4,"ngIf"],[2,"text-align","center"],["name","dots"],["slot","fixed",2,"text-align","center"],["src","assets/images/zanwushuju.png",2,"max-width","90%","max-height","50%","margin","auto"]],template:function(e,t){1&e&&(i["\u0275\u0275template"](0,a,2,0,"div",0),i["\u0275\u0275template"](1,c,2,0,"div",1)),2&e&&(i["\u0275\u0275property"]("ngIf",1==t.loading),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.show&&1==t.show&&0==t.loading))},directives:[r.NgIf,o.IonSpinner],styles:[""]}),e})()}}]);