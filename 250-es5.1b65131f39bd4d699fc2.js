function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{TQnS:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),a=n("tyNb"),l=n("mrSG"),c=n("RUQT"),s=n("nE/I"),u=n("fXoL");function d(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"ion-item-sliding",null,8),u["\u0275\u0275elementStart"](2,"ion-item"),u["\u0275\u0275elementStart"](3,"ion-thumbnail",0),u["\u0275\u0275elementStart"](4,"ion-img",9),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](n);var e=t.$implicit;return u["\u0275\u0275nextContext"](2).open(e)})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"ion-label",10),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](n);var e=t.$implicit;return u["\u0275\u0275nextContext"](2).open(e)})),u["\u0275\u0275elementStart"](6,"h3"),u["\u0275\u0275text"](7),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](8,"p"),u["\u0275\u0275text"](9),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](10,"p"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](11,"ion-item-options"),u["\u0275\u0275elementStart"](12,"ion-button",11),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](n);var e=t.index,i=t.$implicit,o=u["\u0275\u0275reference"](1);return u["\u0275\u0275nextContext"](2).deleteData(e,i,o)})),u["\u0275\u0275element"](13,"ion-icon",12),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){var i=t.$implicit;u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("src",i.coverURL),u["\u0275\u0275advance"](3),u["\u0275\u0275textInterpolate1"](" ",i.title," "),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate1"](" ",i.createTime," ")}}function f(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p",13),u["\u0275\u0275text"](1," ---\u6211\u662f\u6709\u5e95\u7ebf\u7684--- "),u["\u0275\u0275elementEnd"]())}function m(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"div"),u["\u0275\u0275elementStart"](1,"ion-list"),u["\u0275\u0275template"](2,d,14,3,"ion-item-sliding",4),u["\u0275\u0275template"](3,f,2,0,"p",5),u["\u0275\u0275elementStart"](4,"ion-infinite-scroll",6),u["\u0275\u0275listener"]("ionInfinite",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().load_more(e)})),u["\u0275\u0275element"](5,"ion-infinite-scroll-content",7),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){var i=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngForOf",i.videos),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",!i.hasMore)}}function p(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div"),u["\u0275\u0275element"](1,"ion-img",14),u["\u0275\u0275elementEnd"]())}var v,h,g=[{path:"",component:(v=function(){function e(t,n){_classCallCheck(this,e),this.router=t,this.videoService=n,this.noData=!1,this.videos=[],this.hasMore=!0,this.filter=new c.c,this.restore_filter()}return _createClass(e,[{key:"restore_filter",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.filter.page=1,this.filter.page_size=16;case 1:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnInit",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.videoService.get_collection_by_user(this.filter);case 2:this.videoInfo=e.sent,this.videos=this.videoInfo.data,0===this.videoInfo.count&&(this.noData=!0);case 5:case"end":return e.stop()}}),e,this)})))}},{key:"ionViewWillEnter",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))}},{key:"open",value:function(e){this.router.navigate(["/video-player",{id:e.id}])}},{key:"load_more",value:function(e){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:setTimeout((function(){return Object(l.a)(n,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.filter.page+=1,t.next=3,this.videoService.get_collection_by_user(this.filter);case 3:this.videoInfo=t.sent,console.log("\u4e0a\u6ed1\u52a0\u8f7d"),this.videos=this.videos.concat(this.videoInfo.data),e.target.complete(),this.videoInfo.count===this.videos.length&&(e.target.disabled=!0,this.hasMore=!1);case 8:case"end":return t.stop()}}),t,this)})))}),500);case 1:case"end":return t.stop()}}),t)})))}},{key:"deleteData",value:function(e,t,n){var i=this;n.close(),this.videoService.delete_collection(t.id).then((function(t){i.videos.splice(e,1)}))}}]),e}(),v.\u0275fac=function(e){return new(e||v)(u["\u0275\u0275directiveInject"](a.g),u["\u0275\u0275directiveInject"](s.a))},v.\u0275cmp=u["\u0275\u0275defineComponent"]({type:v,selectors:[["app-collection"]],viewQuery:function(e,t){var n;1&e&&u["\u0275\u0275viewQuery"](r.IonInfiniteScroll,!0),2&e&&u["\u0275\u0275queryRefresh"](n=u["\u0275\u0275loadQuery"]())&&(t.infiniteScroll=n.first)},decls:9,vars:2,consts:[["slot","start"],["defaultHref","tabs"],["scrollY","true",1,"fullscreen"],[4,"ngIf"],[4,"ngFor","ngForOf"],["style","font-size: x-small; text-align: center;",4,"ngIf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","\u66f4\u591a..."],["slide",""],[2,"width","120px","height","70px",3,"src","click"],[2,"padding-left","50px","padding-top","15px",3,"click"],["color","danger","expand","full",2,"width","15%","height","90%",3,"click"],["slot","icon-only","name","trash"],[2,"font-size","x-small","text-align","center"],["src","assets/images/zanwushuju.png",2,"max-width","90%","max-height","50%","margin","auto"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"ion-header"),u["\u0275\u0275elementStart"](1,"ion-toolbar"),u["\u0275\u0275elementStart"](2,"ion-buttons",0),u["\u0275\u0275element"](3,"ion-back-button",1),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"ion-title"),u["\u0275\u0275text"](5," \u770b\u8bfe\u6536\u85cf "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"ion-content",2),u["\u0275\u0275template"](7,m,6,2,"div",3),u["\u0275\u0275template"](8,p,2,0,"div",3),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](7),u["\u0275\u0275property"]("ngIf",t.videos),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.noData||!t.videos||0===t.videos.length))},directives:[r.IonHeader,r.IonToolbar,r.IonButtons,r.IonBackButton,r.IonBackButtonDelegate,r.IonTitle,r.IonContent,i.NgIf,r.IonList,i.NgForOf,r.IonInfiniteScroll,r.IonInfiniteScrollContent,r.IonItemSliding,r.IonItem,r.IonThumbnail,r.IonImg,r.IonLabel,r.IonItemOptions,r.IonButton,r.IonIcon],styles:[""]}),v)}],I=((h=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:h}),h.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||h)},imports:[[a.i.forChild(g)],a.i]}),h);n.d(t,"CollectionPageModule",(function(){return w}));var x,w=((x=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:x}),x.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||x)},imports:[[i.CommonModule,o.FormsModule,r.IonicModule,I]]}),x)}}]);