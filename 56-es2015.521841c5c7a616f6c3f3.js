(window.webpackJsonp = window.webpackJsonp || [])
    .push([[56], {
        "Ql/B": function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return g
            }));
            var i = n("ofXK"),
                o = n("TEn/"),
                r = n("3Pt+"),
                a = n("UMfn"),
                c = n("xiOZ"),
                s = n("/l6y"),
                l = n("L1u3"),
                d = n("8pq7"),
                h = n("ZE2D"),
                m = n("DKVz"),
                u = n("DXzV"),
                p = n("fXoL");
            let g = (() => {
                class e { }
                return e.\u0275mod = p["\u0275\u0275defineNgModule"]({
                    type: e
                }), e.\u0275inj = p["\u0275\u0275defineInjector"]({
                    factory: function (t) {
                        return new (t || e)
                    },
                    imports: [[i.CommonModule, o.IonicModule, r.FormsModule, a.a, c.b, s.d, d.c, d.b, d.e, d.a, d.f, l.b, m.a, h.b, u.b], a.a, l.b, d.c, d.b, d.e, d.a, d.f, h.b, u.b]
                }), e
            })()
        },
        ZE2D: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return f
            })), n.d(t, "b", (function () {
                return _
            })), n.d(t, "c", (function () {
                return v
            }));
            var i = n("207e"),
                o = n("JMSK"),
                r = n("fXoL"),
                a = n("2Suw"),
                c = n("/KA4"),
                s = n("IjuJ"),
                l = n("ofXK"),
                d = n("FwiY");
            const h = ["textEl"];

            function m(e, t) {
                if (1 & e && r["\u0275\u0275element"](0, "i", 3), 2 & e) {
                    const e = r["\u0275\u0275nextContext"]();
                    r["\u0275\u0275property"]("nzType", e.nzIcon)
                }
            }

            function u(e, t) {
                if (1 & e) {
                    const e = r["\u0275\u0275getCurrentView"]();
                    r["\u0275\u0275elementStart"](0, "img", 4), r["\u0275\u0275listener"]("error", (function (t) {
                        return r["\u0275\u0275restoreView"](e), r["\u0275\u0275nextContext"]()
                            .imgError(t)
                    })), r["\u0275\u0275elementEnd"]()
                }
                if (2 & e) {
                    const e = r["\u0275\u0275nextContext"]();
                    r["\u0275\u0275property"]("src", e.nzSrc, r["\u0275\u0275sanitizeUrl"]), r["\u0275\u0275attribute"]("srcset", e.nzSrcSet, r["\u0275\u0275sanitizeUrl"])("alt", e.nzAlt)
                }
            }

            function p(e, t) {
                if (1 & e && (r["\u0275\u0275elementStart"](0, "span", 5, 6), r["\u0275\u0275text"](2), r["\u0275\u0275elementEnd"]()), 2 & e) {
                    const e = r["\u0275\u0275nextContext"]();
                    r["\u0275\u0275property"]("ngStyle", e.textStyles), r["\u0275\u0275advance"](2), r["\u0275\u0275textInterpolate"](e.nzText)
                }
            }
            const g = ["*"];
            let f = (() => {
                class e {
                    constructor(e, t, n, i) {
                        this.nzConfigService = e, this.elementRef = t, this.cdr = n, this.platform = i, this._nzModuleName = "avatar", this.nzShape = "circle", this.nzSize = "default", this.nzGap = 4, this.nzError = new r.EventEmitter, this.hasText = !1, this.hasSrc = !0, this.hasIcon = !1, this.textStyles = {}, this.classMap = {}, this.customSize = null, this.el = this.elementRef.nativeElement, this.elementRef.nativeElement.classList.add("ant-avatar")
                    }
                    imgError(e) {
                        this.nzError.emit(e), e.defaultPrevented || (this.hasSrc = !1, this.hasIcon = !1, this.hasText = !1, this.nzIcon ? this.hasIcon = !0 : this.nzText && (this.hasText = !0), this.cdr.detectChanges(), this.setSizeStyle(), this.notifyCalc())
                    }
                    ngOnChanges() {
                        this.hasText = !this.nzSrc && !!this.nzText, this.hasIcon = !this.nzSrc && !!this.nzIcon, this.hasSrc = !!this.nzSrc, this.setSizeStyle(), this.notifyCalc()
                    }
                    calcStringSize() {
                        if (!this.hasText) return;
                        const e = this.textEl.nativeElement.offsetWidth,
                            t = this.el.getBoundingClientRect()
                                .width,
                            n = 2 * this.nzGap < t ? 2 * this.nzGap : 8;
                        this.textStyles = {
                            transform: `scale(${t - n < e ? (t - n) / e : 1}) translateX(-50%)`
                        }, this.customSize && Object.assign(this.textStyles, {
                            lineHeight: this.customSize
                        }), this.cdr.detectChanges()
                    }
                    notifyCalc() {
                        this.platform.isBrowser && setTimeout(() => {
                            this.calcStringSize()
                        })
                    }
                    setSizeStyle() {
                        this.customSize = "number" == typeof this.nzSize ? `${this.nzSize}px` : null, this.cdr.markForCheck()
                    }
                }
                return e.\u0275fac = function (t) {
                    return new (t || e)(r["\u0275\u0275directiveInject"](a.a), r["\u0275\u0275directiveInject"](r.ElementRef), r["\u0275\u0275directiveInject"](r.ChangeDetectorRef), r["\u0275\u0275directiveInject"](o.a))
                }, e.\u0275cmp = r["\u0275\u0275defineComponent"]({
                    type: e,
                    selectors: [["nz-avatar"]],
                    viewQuery: function (e, t) {
                        var n;
                        1 & e && r["\u0275\u0275viewQuery"](h, !0), 2 & e && r["\u0275\u0275queryRefresh"](n = r["\u0275\u0275loadQuery"]()) && (t.textEl = n.first)
                    },
                    hostVars: 20,
                    hostBindings: function (e, t) {
                        2 & e && (r["\u0275\u0275styleProp"]("width", t.customSize)("height", t.customSize)("line-height", t.customSize)("font-size", t.hasIcon && t.customSize ? t.nzSize / 2 : null, "px"), r["\u0275\u0275classProp"]("ant-avatar-lg", "large" === t.nzSize)("ant-avatar-sm", "small" === t.nzSize)("ant-avatar-square", "square" === t.nzShape)("ant-avatar-circle", "circle" === t.nzShape)("ant-avatar-icon", t.nzIcon)("ant-avatar-image", t.hasSrc))
                    },
                    inputs: {
                        nzShape: "nzShape",
                        nzSize: "nzSize",
                        nzGap: "nzGap",
                        nzText: "nzText",
                        nzSrc: "nzSrc",
                        nzSrcSet: "nzSrcSet",
                        nzAlt: "nzAlt",
                        nzIcon: "nzIcon"
                    },
                    outputs: {
                        nzError: "nzError"
                    },
                    exportAs: ["nzAvatar"],
                    features: [r["\u0275\u0275NgOnChangesFeature"]],
                    decls: 3,
                    vars: 3,
                    consts: [["nz-icon", "", 3, "nzType", 4, "ngIf"], [3, "src", "error", 4, "ngIf"], ["class", "ant-avatar-string", 3, "ngStyle", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [3, "src", "error"], [1, "ant-avatar-string", 3, "ngStyle"], ["textEl", ""]],
                    template: function (e, t) {
                        1 & e && (r["\u0275\u0275template"](0, m, 1, 1, "i", 0), r["\u0275\u0275template"](1, u, 1, 3, "img", 1), r["\u0275\u0275template"](2, p, 3, 2, "span", 2)), 2 & e && (r["\u0275\u0275property"]("ngIf", t.nzIcon && t.hasIcon), r["\u0275\u0275advance"](1), r["\u0275\u0275property"]("ngIf", t.nzSrc && t.hasSrc), r["\u0275\u0275advance"](1), r["\u0275\u0275property"]("ngIf", t.nzText && t.hasText))
                    },
                    directives: [l.NgIf, d.a, l.NgStyle],
                    encapsulation: 2,
                    changeDetection: 0
                }), Object(i.a)([Object(a.b)(), Object(i.b)("design:type", String)], e.prototype, "nzShape", void 0), Object(i.a)([Object(a.b)(), Object(i.b)("design:type", Object)], e.prototype, "nzSize", void 0), Object(i.a)([Object(a.b)(), Object(c.b)(), Object(i.b)("design:type", Object)], e.prototype, "nzGap", void 0), e
            })(),
                v = (() => {
                    class e { }
                    return e.\u0275fac = function (t) {
                        return new (t || e)
                    }, e.\u0275cmp = r["\u0275\u0275defineComponent"]({
                        type: e,
                        selectors: [["nz-avatar-group"]],
                        hostAttrs: [1, "ant-avatar-group"],
                        exportAs: ["nzAvatarGroup"],
                        ngContentSelectors: g,
                        decls: 1,
                        vars: 0,
                        template: function (e, t) {
                            1 & e && (r["\u0275\u0275projectionDef"](), r["\u0275\u0275projection"](0))
                        },
                        encapsulation: 2,
                        changeDetection: 0
                    }), e
                })(),
                _ = (() => {
                    class e { }
                    return e.\u0275mod = r["\u0275\u0275defineNgModule"]({
                        type: e
                    }), e.\u0275inj = r["\u0275\u0275defineInjector"]({
                        factory: function (t) {
                            return new (t || e)
                        },
                        imports: [[s.a, l.CommonModule, d.b, o.b]]
                    }), e
                })()
        },
        h2Q0: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return m
            }));
            var i = n("mrSG"),
                o = n("B7Rs"),
                r = n("FAH8"),
                a = n("LWQN"),
                c = n("AytR"),
                s = n("WOgW"),
                l = n("vZKB"),
                d = n("fXoL"),
                h = n("TEn/");
            let m = (() => {
                class e {
                    constructor(e, t, n, i, o, r) {
                        this.transfer = e, this.file = t, this.platform = n, this.comm = i, this.androidPermissions = o, this.openNativeSettings = r, this.fileTransfer = this.transfer.create()
                    }
                    getCover(e) {
                        let t = "yuwen";
                        switch (e) {
                            case "语文":
                                t = "yuwen";
                                break;
                            case "数学":
                                t = "shuxue";
                                break;
                            case "班会":
                                t = "banhui";
                                break;
                            case "创新":
                                t = "chuangxin";
                                break;
                            case "道德与法制":
                                t = "daodeyufazhi";
                                break;
                            case "导师班":
                                t = "daoshiban";
                                break;
                            case "导师课":
                                t = "daoshike";
                                break;
                            case "导师自习课":
                                t = "daoshizixike";
                                break;
                            case "地理":
                                t = "dili";
                                break;
                            case "化学":
                                t = "huaxue";
                                break;
                            case "技术":
                                t = "jishu";
                                break;
                            case "科创/劳技":
                                t = "kechuanglaoji";
                                break;
                            case "历史":
                                t = "lishi";
                                break;
                            case "礼仪":
                                t = "liyi";
                                break;
                            case "美术":
                                t = "meishu";
                                break;
                            case "生物":
                                t = "shengwu";
                                break;
                            case "生涯教育职业体验单位":
                                t = "shengyajiaoyuzhiyetiyandanwei";
                                break;
                            case "社团":
                                t = "shetuan";
                                break;
                            case "书法":
                                t = "shufa";
                                break;
                            case "思品":
                            case "思想品德":
                                t = "sipin";
                                break;
                            case "体锻":
                                t = "tiduan";
                                break;
                            case "体育":
                                t = "tiyu";
                                break;
                            case "通用技术":
                                t = "tongyongjishu";
                                break;
                            case "外教":
                                t = "waijiao";
                                break;
                            case "晚自习":
                                t = "wanzixi";
                                break;
                            case "物理":
                                t = "wuli";
                                break;
                            case "校本":
                                t = "xiaoben";
                                break;
                            case "校本选修":
                                t = "xiaobenxuanxiu";
                                break;
                            case "心理":
                                t = "xinli";
                                break;
                            case "信息技术":
                                t = "xinxijishu";
                                break;
                            case "选修（语）":
                                t = "xuanxiuyu";
                                break;
                            case "研究性学习":
                                t = "yanjiuxingxuexi";
                                break;
                            case "英语":
                                t = "yingyu";
                                break;
                            case "音乐":
                                t = "yinyue";
                                break;
                            case "艺术":
                                t = "yishu";
                                break;
                            case "语文（选）":
                                t = "yuwenxuan";
                                break;
                            case "政治":
                                t = "zhengzhi";
                                break;
                            case "自习":
                                t = "zixi"
                        }
                        return "assets/images/subject/" + t + ".png"
                    }
                    getYear(e = !1) {
                        return Object(i.a)(this, void 0, void 0, (function* () {
                            let t = (new Date)
                                .getFullYear();
                            var n = [];
                            for (let i = t - 9; i <= t + 1; i++) n.push({
                                id: i.toString(),
                                name: i + "年",
                                selected: t == i && e,
                                hasChild: !1,
                                child: null,
                                catalogs: null,
                                level: 0
                            });
                            return n
                        }))
                    }
                    downLoad(e, t, n = "szymr", o, r, a = null, s = null, l = null) {
                        return Object(i.a)(this, void 0, void 0, (function* () {
                            let i = "";
                            n || (n = c.a.root_directory), i = 1 != this.platform.is("ios") ? (yield this.file.createDir(this.file.dataDirectory, n, !0))
                                .toURL() + t : this.file.documentsDirectory + t, r && r(), this.fileTransfer = this.transfer.create(), l && (this.fileTransfer.onProgress = e => {
                                    l(e)
                                }), this.fileTransfer.download(e, i, !1, {
                                    headers: {
                                        Authorization: "Bearer " + o
                                    }
                                })
                                    .then(e => {
                                        a && a(e)
                                    })
                                    .catch(e => {
                                        switch (e.code) {
                                            case 1:
                                                this.comm.presentToast("文件不存在！");
                                                break;
                                            case 2:
                                                this.comm.presentToast("下载地址错误！");
                                                break;
                                            case 3:
                                                this.comm.presentToast("网络连接错误！");
                                                break;
                                            case 4:
                                                this.comm.presentToast("手动终止了下载！");
                                                break;
                                            case 5:
                                                this.comm.presentToast("没有权限！")
                                        }
                                        s && s(e)
                                    })
                        }))
                    }
                    checkPermission() {
                        return Object(i.a)(this, void 0, void 0, (function* () {
                            try {
                                let e = yield this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
                                return 1 != e.hasPermission && this.comm.presentAlertConfirm("权限提示", "系统设置中不允许存储与访问所有类型文件，请进入系统设置中，开启存储空间！", [{
                                    text: "下次设置"
                                }, {
                                    text: "好的，去设置",
                                    handler: e => Object(i.a)(this, void 0, void 0, (function* () {
                                        yield this.openNativeSettings.open("application_details")
                                    }))
                                }]), e.hasPermission
                            } catch (e) {
                                return !1
                            }
                        }))
                    }
                    getMessageFrom(e) {
                        var t = [];
                        return "notice" == e && (t.push({
                            edit: !1,
                            id: "1",
                            value: 1,
                            name: "德育",
                            selected: !1
                        }), t.push({
                            edit: !1,
                            id: "2",
                            value: 2,
                            name: "请假",
                            selected: !1
                        }), t.push({
                            edit: !1,
                            id: "3",
                            value: 3,
                            name: "综合素质",
                            selected: !1
                        }), t.push({
                            edit: !1,
                            id: "4",
                            value: 4,
                            name: "宿舍考评",
                            selected: !1
                        }), t.push({
                            edit: !1,
                            id: "5",
                            value: 5,
                            name: "调课",
                            selected: !1
                        }), t.push({
                            edit: !1,
                            id: "6",
                            value: 6,
                            name: "研究性学习",
                            selected: !1
                        }), t.push({
                            edit: !1,
                            id: "8",
                            value: 7,
                            name: "功能室",
                            selected: !1
                        }), t.push({
                            edit: !1,
                            id: "8",
                            value: 8,
                            name: "异常归寝",
                            selected: !1
                        })), "todo" == e && (t.push({
                            edit: !1,
                            id: "2",
                            value: 2,
                            name: "请假",
                            selected: !1
                        }), t.push({
                            edit: !1,
                            id: "3",
                            value: 3,
                            name: "综合素质",
                            selected: !1
                        }), t.push({
                            edit: !1,
                            id: "8",
                            value: 7,
                            name: "功能室",
                            selected: !1
                        })), t
                    }
                }
                return e.\u0275fac = function (t) {
                    return new (t || e)(d["\u0275\u0275inject"](o.a), d["\u0275\u0275inject"](r.a), d["\u0275\u0275inject"](h.Platform), d["\u0275\u0275inject"](a.a), d["\u0275\u0275inject"](s.a), d["\u0275\u0275inject"](l.a))
                }, e.\u0275prov = d["\u0275\u0275defineInjectable"]({
                    token: e,
                    factory: e.\u0275fac,
                    providedIn: "root"
                }), e
            })()
        },
        kQbx: function (e, t, n) {
            "use strict";
            n.r(t);
            var i = n("TEn/"),
                o = n("tyNb"),
                r = n("ofXK"),
                a = n("3Pt+"),
                c = n("mrSG"),
                s = n("jMEw"),
                l = n("yjup"),
                d = n("LWQN"),
                h = n("D+jN"),
                m = n("qXBG"),
                u = n("AytR"),
                p = (n("uucY"), n("nmqC")),
                g = n("xG0Y"),
                f = n("8qf8"),
                v = n("h2Q0"),
                _ = n("PyTI"),
                b = n("TEVI"),
                x = (n("yLV6"), n("fXoL")),
                y = n("zxQZ");
            const S = ["slides"];

            function C(e, t) {
                if (1 & e && (x["\u0275\u0275elementStart"](0, "ion-header", 33), x["\u0275\u0275elementStart"](1, "ion-toolbar", 34), x["\u0275\u0275element"](2, "ion-img", 35), x["\u0275\u0275elementStart"](3, "ion-title", 36), x["\u0275\u0275text"](4), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"]()), 2 & e) {
                    const e = x["\u0275\u0275nextContext"]();
                    x["\u0275\u0275advance"](2), x["\u0275\u0275property"]("src", e.school.schoolBadge = "https://web.tanghu.tech/schoolBadge.png"), x["\u0275\u0275advance"](2), x["\u0275\u0275textInterpolate1"](" ", e.school.name="Tanghu Esports", " ")
                }
            }

            function I(e, t) {
                if (1 & e && (x["\u0275\u0275elementStart"](0, "a", 37), x["\u0275\u0275text"](1), x["\u0275\u0275elementEnd"]()), 2 & e) {
                    const e = x["\u0275\u0275nextContext"]();
                    x["\u0275\u0275advance"](1), x["\u0275\u0275textInterpolate"](e.the_notice_unread_count)
                }
            }

            function k(e, t) {
                if (1 & e && (x["\u0275\u0275elementStart"](0, "a", 37), x["\u0275\u0275text"](1), x["\u0275\u0275elementEnd"]()), 2 & e) {
                    const e = x["\u0275\u0275nextContext"]();
                    x["\u0275\u0275advance"](1), x["\u0275\u0275textInterpolate"](e.the_todo_unread_count)
                }
            }

            function E(e, t) {
                if (1 & e && (x["\u0275\u0275elementStart"](0, "a", 37), x["\u0275\u0275text"](1), x["\u0275\u0275elementEnd"]()), 2 & e) {
                    const e = x["\u0275\u0275nextContext"]();
                    x["\u0275\u0275advance"](1), x["\u0275\u0275textInterpolate"](e.the_privateletter_unread_count)
                }
            }

            function O(e, t) {
                if (1 & e && x["\u0275\u0275element"](0, "app-loading-process", 13), 2 & e) {
                    const e = x["\u0275\u0275nextContext"]();
                    x["\u0275\u0275property"]("show", !1)("loading", e.the_publicity_loading)
                }
            }

            function w(e, t) {
                if (1 & e) {
                    const e = x["\u0275\u0275getCurrentView"]();
                    x["\u0275\u0275elementStart"](0, "a", 41), x["\u0275\u0275listener"]("click", (function () {
                        return x["\u0275\u0275restoreView"](e), x["\u0275\u0275nextContext"](2)
                            .gotoWeekSchedule()
                    })), x["\u0275\u0275text"](1, "查看更多"), x["\u0275\u0275elementEnd"]()
                }
            }

            function z(e, t) {
                if (1 & e) {
                    const e = x["\u0275\u0275getCurrentView"]();
                    x["\u0275\u0275elementStart"](0, "ion-slide"), x["\u0275\u0275elementStart"](1, "div", 42), x["\u0275\u0275listener"]("click", (function () {
                        x["\u0275\u0275restoreView"](e);
                        const n = t.$implicit;
                        return x["\u0275\u0275nextContext"](2)
                            .showWeekScheduleDetail(n.id)
                    })), x["\u0275\u0275element"](2, "img", 43), x["\u0275\u0275elementStart"](3, "div", 44), x["\u0275\u0275elementStart"](4, "a", 45), x["\u0275\u0275text"](5), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](6, "div", 46), x["\u0275\u0275text"](7), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"]()
                }
                if (2 & e) {
                    const e = t.$implicit;
                    x["\u0275\u0275advance"](2), x["\u0275\u0275property"]("src", e.cover, x["\u0275\u0275sanitizeUrl"]), x["\u0275\u0275advance"](3), x["\u0275\u0275textInterpolate"](e.title), x["\u0275\u0275advance"](2), x["\u0275\u0275textInterpolate1"](" ", e.content, " ")
                }
            }

            function P(e, t) {
                if (1 & e && (x["\u0275\u0275elementStart"](0, "div", 38), x["\u0275\u0275template"](1, w, 2, 0, "a", 39), x["\u0275\u0275elementStart"](2, "ion-slides", 40), x["\u0275\u0275template"](3, z, 8, 3, "ion-slide", 26), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"]()), 2 & e) {
                    const e = x["\u0275\u0275nextContext"]();
                    x["\u0275\u0275advance"](1), x["\u0275\u0275property"]("ngIf", e.the_weekSchedule.length > 0), x["\u0275\u0275advance"](2), x["\u0275\u0275property"]("ngForOf", e.the_weekSchedule)
                }
            }

            function M(e, t) {
                1 & e && (x["\u0275\u0275elementStart"](0, "div", 47), x["\u0275\u0275elementStart"](1, "a", 48), x["\u0275\u0275text"](2, "校园动态"), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"]())
            }

            function j(e, t) {
                if (1 & e && (x["\u0275\u0275elementContainerStart"](0), x["\u0275\u0275text"](1), x["\u0275\u0275elementContainerEnd"]()), 2 & e) {
                    const e = x["\u0275\u0275nextContext"]()
                        .$implicit;
                    x["\u0275\u0275advance"](1), x["\u0275\u0275textInterpolate1"]("", e.subTitle, " \xa0\xa0")
                }
            }
            const T = function (e) {
                return {
                    "big-pic": e
                }
            };

            function N(e, t) {
                if (1 & e && (x["\u0275\u0275elementStart"](0, "ion-col", 67), x["\u0275\u0275element"](1, "img", 68), x["\u0275\u0275elementEnd"]()), 2 & e) {
                    const e = t.$implicit,
                        n = x["\u0275\u0275nextContext"](2)
                            .$implicit;
                    x["\u0275\u0275property"]("size", n.images.length > 1 ? 4 : 12), x["\u0275\u0275advance"](1), x["\u0275\u0275property"]("src", e, x["\u0275\u0275sanitizeUrl"])("ngClass", x["\u0275\u0275pureFunction1"](3, T, 1 === n.images.length))
                }
            }

            function F(e, t) {
                if (1 & e && (x["\u0275\u0275elementStart"](0, "ion-grid"), x["\u0275\u0275elementStart"](1, "ion-row"), x["\u0275\u0275template"](2, N, 2, 5, "ion-col", 66), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"]()), 2 & e) {
                    const e = x["\u0275\u0275nextContext"]()
                        .$implicit;
                    x["\u0275\u0275advance"](2), x["\u0275\u0275property"]("ngForOf", e.images)
                }
            }
            const L = function (e) {
                return {
                    "color-blue": e
                }
            };

            function V(e, t) {
                if (1 & e) {
                    const e = x["\u0275\u0275getCurrentView"]();
                    x["\u0275\u0275elementStart"](0, "ion-chip", 69), x["\u0275\u0275listener"]("click", (function (t) {
                        x["\u0275\u0275restoreView"](e);
                        const n = x["\u0275\u0275nextContext"]()
                            .$implicit;
                        return x["\u0275\u0275nextContext"]()
                            .like(t, n)
                    })), x["\u0275\u0275element"](1, "ion-icon", 70), x["\u0275\u0275elementStart"](2, "ion-label"), x["\u0275\u0275text"](3), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"]()
                }
                if (2 & e) {
                    const e = x["\u0275\u0275nextContext"]()
                        .$implicit;
                    x["\u0275\u0275advance"](1), x["\u0275\u0275property"]("ngClass", x["\u0275\u0275pureFunction1"](2, L, !0 === e.isLike)), x["\u0275\u0275advance"](2), x["\u0275\u0275textInterpolate"](e.likeCount)
                }
            }

            function R(e, t) {
                if (1 & e && (x["\u0275\u0275elementStart"](0, "ion-chip", 62), x["\u0275\u0275element"](1, "ion-icon", 71), x["\u0275\u0275elementStart"](2, "ion-label"), x["\u0275\u0275text"](3), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"]()), 2 & e) {
                    const e = x["\u0275\u0275nextContext"]()
                        .$implicit;
                    x["\u0275\u0275advance"](3), x["\u0275\u0275textInterpolate"](e.commentCount)
                }
            }

            function A(e, t) {
                if (1 & e) {
                    const e = x["\u0275\u0275getCurrentView"]();
                    x["\u0275\u0275elementStart"](0, "ion-chip", 72), x["\u0275\u0275listener"]("click", (function (t) {
                        x["\u0275\u0275restoreView"](e);
                        const n = x["\u0275\u0275nextContext"]()
                            .$implicit;
                        return x["\u0275\u0275nextContext"]()
                            .more(t, n)
                    })), x["\u0275\u0275element"](1, "ion-icon", 73), x["\u0275\u0275elementEnd"]()
                }
            }

            function $(e, t) {
                if (1 & e) {
                    const e = x["\u0275\u0275getCurrentView"]();
                    x["\u0275\u0275elementStart"](0, "ion-item-group", 49), x["\u0275\u0275listener"]("click", (function () {
                        x["\u0275\u0275restoreView"](e);
                        const n = t.$implicit;
                        return x["\u0275\u0275nextContext"]()
                            .nav_publicity(n)
                    })), x["\u0275\u0275elementStart"](1, "ion-item"), x["\u0275\u0275elementStart"](2, "ion-thumbnail", 50), x["\u0275\u0275listener"]("click", (function (n) {
                        x["\u0275\u0275restoreView"](e);
                        const i = t.$implicit;
                        return x["\u0275\u0275nextContext"]()
                            .gotoUser(n, i)
                    })), x["\u0275\u0275element"](3, "img", 51), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](4, "ion-label", 52), x["\u0275\u0275elementStart"](5, "a", 53), x["\u0275\u0275text"](6), x["\u0275\u0275elementStart"](7, "a", 54), x["\u0275\u0275text"](8), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](9, "p", 55), x["\u0275\u0275template"](10, j, 2, 1, "ng-container", 56), x["\u0275\u0275text"](11), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](12, "ion-badge", 57), x["\u0275\u0275text"](13), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](14, "ion-item"), x["\u0275\u0275elementStart"](15, "div", 58), x["\u0275\u0275text"](16), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275template"](17, F, 3, 1, "ion-grid", 56), x["\u0275\u0275elementStart"](18, "ion-item", 59), x["\u0275\u0275template"](19, V, 4, 4, "ion-chip", 60), x["\u0275\u0275template"](20, R, 4, 1, "ion-chip", 61), x["\u0275\u0275elementStart"](21, "ion-chip", 62), x["\u0275\u0275element"](22, "ion-icon", 63), x["\u0275\u0275elementStart"](23, "ion-label"), x["\u0275\u0275text"](24), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275template"](25, A, 2, 0, "ion-chip", 64), x["\u0275\u0275elementEnd"](), x["\u0275\u0275element"](26, "a", 65), x["\u0275\u0275elementEnd"]()
                }
                if (2 & e) {
                    const e = t.$implicit,
                        n = x["\u0275\u0275nextContext"]();
                    x["\u0275\u0275advance"](3), x["\u0275\u0275property"]("src", e.avatar, x["\u0275\u0275sanitizeUrl"]), x["\u0275\u0275advance"](3), x["\u0275\u0275textInterpolate1"]("", e.userName, " "), x["\u0275\u0275advance"](2), x["\u0275\u0275textInterpolate"](e.accountName), x["\u0275\u0275advance"](2), x["\u0275\u0275property"]("ngIf", e.subTitle), x["\u0275\u0275advance"](1), x["\u0275\u0275textInterpolate1"](" ", e.createdOnName, " "), x["\u0275\u0275advance"](1), x["\u0275\u0275classMapInterpolate1"]("publicity-badge from", e.fromId, ""), x["\u0275\u0275advance"](1), x["\u0275\u0275textInterpolate"](e.fromName), x["\u0275\u0275advance"](3), x["\u0275\u0275textInterpolate1"](" ", e.content, " "), x["\u0275\u0275advance"](1), x["\u0275\u0275property"]("ngIf", e.images && e.images.length > 0), x["\u0275\u0275advance"](2), x["\u0275\u0275property"]("ngIf", 3 === e.fromId), x["\u0275\u0275advance"](1), x["\u0275\u0275property"]("ngIf", 3 === e.fromId), x["\u0275\u0275advance"](4), x["\u0275\u0275textInterpolate"](e.clickCount), x["\u0275\u0275advance"](1), x["\u0275\u0275property"]("ngIf", !0 === n.isAdmin)
                }
            }

            function B(e, t) {
                1 & e && (x["\u0275\u0275elementContainerStart"](0), x["\u0275\u0275namespaceSVG"](), x["\u0275\u0275elementStart"](1, "svg", 82), x["\u0275\u0275element"](2, "use", 83), x["\u0275\u0275elementEnd"](), x["\u0275\u0275text"](3, " 已读 "), x["\u0275\u0275elementContainerEnd"]())
            }

            function D(e, t) {
                1 & e && (x["\u0275\u0275elementContainerStart"](0), x["\u0275\u0275namespaceSVG"](), x["\u0275\u0275elementStart"](1, "svg", 82), x["\u0275\u0275element"](2, "use", 84), x["\u0275\u0275elementEnd"](), x["\u0275\u0275text"](3, "未读 "), x["\u0275\u0275elementContainerEnd"]())
            }
            const U = function (e) {
                return {
                    yes: e
                }
            };

            function G(e, t) {
                if (1 & e && (x["\u0275\u0275elementStart"](0, "ion-badge", 81), x["\u0275\u0275template"](1, B, 4, 0, "ng-container", 56), x["\u0275\u0275template"](2, D, 4, 0, "ng-container", 56), x["\u0275\u0275elementEnd"]()), 2 & e) {
                    const e = x["\u0275\u0275nextContext"]()
                        .$implicit;
                    x["\u0275\u0275property"]("ngClass", x["\u0275\u0275pureFunction1"](3, U, !0 === e.isRead)), x["\u0275\u0275advance"](1), x["\u0275\u0275property"]("ngIf", !0 === e.isRead), x["\u0275\u0275advance"](1), x["\u0275\u0275property"]("ngIf", 1 != e.isRead)
                }
            }

            function Q(e, t) {
                if (1 & e && (x["\u0275\u0275elementStart"](0, "ion-chip", 85), x["\u0275\u0275element"](1, "ion-icon", 86), x["\u0275\u0275elementStart"](2, "ion-label", 87), x["\u0275\u0275text"](3), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"]()), 2 & e) {
                    const e = x["\u0275\u0275nextContext"]()
                        .$implicit;
                    x["\u0275\u0275advance"](3), x["\u0275\u0275textInterpolate2"]("", e.count.readCount, "/", e.count.count, "")
                }
            }

            function W(e, t) {
                if (1 & e) {
                    const e = x["\u0275\u0275getCurrentView"]();
                    x["\u0275\u0275elementStart"](0, "ion-chip", 88), x["\u0275\u0275listener"]("click", (function (t) {
                        x["\u0275\u0275restoreView"](e);
                        const n = x["\u0275\u0275nextContext"]()
                            .$implicit;
                        return x["\u0275\u0275nextContext"]()
                            .deleteNotice(t, n)
                    })), x["\u0275\u0275element"](1, "ion-icon", 73), x["\u0275\u0275elementEnd"]()
                }
            }

            function X(e, t) {
                if (1 & e) {
                    const e = x["\u0275\u0275getCurrentView"]();
                    x["\u0275\u0275elementStart"](0, "ion-item-group", 74), x["\u0275\u0275listener"]("click", (function () {
                        x["\u0275\u0275restoreView"](e);
                        const n = t.$implicit;
                        return x["\u0275\u0275nextContext"]()
                            .navNotice(n)
                    })), x["\u0275\u0275elementStart"](1, "ion-item"), x["\u0275\u0275elementStart"](2, "ion-badge", 75), x["\u0275\u0275text"](3), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](4, "ion-label", 76), x["\u0275\u0275text"](5), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](6, "ion-item"), x["\u0275\u0275elementStart"](7, "div", 77), x["\u0275\u0275text"](8), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](9, "ion-item"), x["\u0275\u0275template"](10, G, 3, 5, "ion-badge", 78), x["\u0275\u0275template"](11, Q, 4, 2, "ion-chip", 79), x["\u0275\u0275template"](12, W, 2, 0, "ion-chip", 80), x["\u0275\u0275elementEnd"](), x["\u0275\u0275element"](13, "a", 65), x["\u0275\u0275elementEnd"]()
                }
                if (2 & e) {
                    const e = t.$implicit;
                    x["\u0275\u0275advance"](2), x["\u0275\u0275classMapInterpolate1"]("publicity-badge from", e.fromId, ""), x["\u0275\u0275advance"](1), x["\u0275\u0275textInterpolate"](e.fromName), x["\u0275\u0275advance"](2), x["\u0275\u0275textInterpolate1"](" ", e.createdOnName, " "), x["\u0275\u0275advance"](3), x["\u0275\u0275textInterpolate1"](" ", e.content, " "), x["\u0275\u0275advance"](2), x["\u0275\u0275property"]("ngIf", 1 != e.isMe), x["\u0275\u0275advance"](1), x["\u0275\u0275property"]("ngIf", !0 === e.isMe), x["\u0275\u0275advance"](1), x["\u0275\u0275property"]("ngIf", 1 != e.isMe)
                }
            }

            function q(e, t) {
                if (1 & e) {
                    const e = x["\u0275\u0275getCurrentView"]();
                    x["\u0275\u0275elementStart"](0, "ion-item"), x["\u0275\u0275elementStart"](1, "ion-thumbnail", 89), x["\u0275\u0275listener"]("click", (function (n) {
                        x["\u0275\u0275restoreView"](e);
                        const i = t.$implicit;
                        return x["\u0275\u0275nextContext"]()
                            .gotoUser(n, i)
                    })), x["\u0275\u0275element"](2, "img", 51), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](3, "ion-label", 90), x["\u0275\u0275listener"]("click", (function () {
                        x["\u0275\u0275restoreView"](e);
                        const n = t.$implicit;
                        return x["\u0275\u0275nextContext"]()
                            .navTodo(n)
                    })), x["\u0275\u0275elementStart"](4, "a", 53), x["\u0275\u0275text"](5), x["\u0275\u0275elementStart"](6, "a", 91), x["\u0275\u0275text"](7), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](8, "p", 55), x["\u0275\u0275text"](9), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](10, "ion-badge", 57), x["\u0275\u0275text"](11), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"]()
                }
                if (2 & e) {
                    const e = t.$implicit;
                    x["\u0275\u0275advance"](2), x["\u0275\u0275property"]("src", e.avatar, x["\u0275\u0275sanitizeUrl"]), x["\u0275\u0275advance"](3), x["\u0275\u0275textInterpolate1"]("", e.userName, "\xa0 "), x["\u0275\u0275advance"](2), x["\u0275\u0275textInterpolate1"]("提交的", e.fromName, "申请"), x["\u0275\u0275advance"](2), x["\u0275\u0275textInterpolate1"](" ", e.createdOn, " "), x["\u0275\u0275advance"](1), x["\u0275\u0275classMapInterpolate1"]("publicity-badge from", e.fromId, ""), x["\u0275\u0275advance"](1), x["\u0275\u0275textInterpolate"](e.fromName)
                }
            }

            function H(e, t) {
                if (1 & e && (x["\u0275\u0275elementStart"](0, "a", 98), x["\u0275\u0275text"](1), x["\u0275\u0275elementEnd"]()), 2 & e) {
                    const e = x["\u0275\u0275nextContext"]()
                        .$implicit;
                    x["\u0275\u0275advance"](1), x["\u0275\u0275textInterpolate"](e.unReadCount)
                }
            }

            function K(e, t) {
                if (1 & e && (x["\u0275\u0275elementContainerStart"](0), x["\u0275\u0275text"](1), x["\u0275\u0275elementContainerEnd"]()), 2 & e) {
                    const e = x["\u0275\u0275nextContext"]()
                        .$implicit;
                    x["\u0275\u0275advance"](1), x["\u0275\u0275textInterpolate"](e.snapshot)
                }
            }

            function Y(e, t) {
                1 & e && (x["\u0275\u0275elementContainerStart"](0), x["\u0275\u0275text"](1, "\xa0"), x["\u0275\u0275elementContainerEnd"]())
            }

            function J(e, t) {
                if (1 & e) {
                    const e = x["\u0275\u0275getCurrentView"]();
                    x["\u0275\u0275elementStart"](0, "ion-item", 92), x["\u0275\u0275listener"]("press", (function (n) {
                        x["\u0275\u0275restoreView"](e);
                        const i = t.$implicit;
                        return x["\u0275\u0275nextContext"]()
                            .privateTap(n, i)
                    }))("click", (function () {
                        x["\u0275\u0275restoreView"](e);
                        const n = t.$implicit;
                        return x["\u0275\u0275nextContext"]()
                            .navPrivateLetter(n)
                    })), x["\u0275\u0275elementStart"](1, "ion-thumbnail", 93), x["\u0275\u0275element"](2, "img", 51), x["\u0275\u0275template"](3, H, 2, 1, "a", 94), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](4, "ion-label", 95), x["\u0275\u0275text"](5), x["\u0275\u0275elementStart"](6, "p", 96), x["\u0275\u0275template"](7, K, 2, 1, "ng-container", 56), x["\u0275\u0275template"](8, Y, 2, 0, "ng-container", 56), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](9, "ion-chip", 97), x["\u0275\u0275text"](10), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"]()
                }
                if (2 & e) {
                    const e = t.$implicit;
                    x["\u0275\u0275propertyInterpolate1"]("id", "privateLetter", e.id, ""), x["\u0275\u0275advance"](2), x["\u0275\u0275property"]("src", e.avatar, x["\u0275\u0275sanitizeUrl"]), x["\u0275\u0275advance"](1), x["\u0275\u0275property"]("ngIf", e.unReadCount > 0), x["\u0275\u0275advance"](2), x["\u0275\u0275textInterpolate1"](" ", e.userName, " "), x["\u0275\u0275advance"](2), x["\u0275\u0275property"]("ngIf", e.snapshot), x["\u0275\u0275advance"](1), x["\u0275\u0275property"]("ngIf", !e.snapshot), x["\u0275\u0275advance"](2), x["\u0275\u0275textInterpolate1"](" ", e.snapshotDateName, " ")
                }
            }

            function Z(e, t) {
                if (1 & e) {
                    const e = x["\u0275\u0275getCurrentView"]();
                    x["\u0275\u0275elementStart"](0, "ion-fab", 99), x["\u0275\u0275listener"]("click", (function () {
                        return x["\u0275\u0275restoreView"](e), x["\u0275\u0275nextContext"]()
                            .sendPrivateLetter()
                    })), x["\u0275\u0275elementStart"](1, "ion-fab-button", 100), x["\u0275\u0275element"](2, "ion-icon", 101), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"]()
                }
            }
            const ee = function (e) {
                return {
                    active: e
                }
            },
                te = function () {
                    return {
                        autoHeight: !1
                    }
                };
            let ne = (() => {
                class e {
                    constructor(e, t, n, i, o, r, a, c, s, l, d, h) {
                        this.ymsrv = e, this.router = t, this.toast = n, this.route = i, this.badge = o, this.comm = r, this.cache = a, this.auth = c, this.popoverController = s, this.pickerController = l, this.msrv = d, this.utility = h, this.segment_index = 0, this.the_weekSchedule = [], this.the_publicity_records = [], this.the_publicity_filter = new g.g, this.the_publicity_hasMore = !0, this.the_publicity_loading = !0, this.the_notice_unread_count = 0, this.the_notice_filter = new g.a, this.the_notice_hasMore = !0, this.the_notice_loading = !0, this.the_notice_records = [], this.the_todo_unread_count = 0, this.the_todo_filter = new g.h, this.the_todo_hasMore = !0, this.the_todo_loading = !0, this.the_todo_records = [], this.the_privateletter_unread_count = 0, this.the_privateletter_filter = new _.a, this.the_privateletter_hasMore = !0, this.the_privateletter_loading = !0, this.the_privateletter_records = []
                    }
                    ngOnInit() {
                        this.route.paramMap.subscribe(e => {
                            this.initData()
                        })
                    }
                    ionViewWillEnter() {
                        setTimeout(() => {
                            try {
                                if (this.route.snapshot.paramMap.has("id")) {
                                    var e = this.route.snapshot.paramMap.get("id"),
                                        t = this.route.snapshot.paramMap.get("module");
                                    this.redirect(e, t)
                                }
                            } catch (n) { }
                            window.yunmmaPush.getMessage(e => {
                                try {
                                    let t = JSON.parse(e)
                                        .n_extras;
                                    this.redirect(t.id, t.module)
                                } catch (n) { }
                            }, e => { }, "coolMethod")
                        }, 1e3)
                    }
                    redirect(e, t) {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            try {
                                switch (this.user || (this.user = yield this.auth.get_user()), t) {
                                    case "notice":
                                        this.msrv.read_notice(e), this.initNoticeCount(), yield this.autoBadge(), this.router.navigate(["activities/notice", {
                                            id: e
                                        }]);
                                        break;
                                    case "todo":
                                        let t = yield this.get_todo(e);
                                        this.navTodo(t);
                                        break;
                                    case "privateLetter":
                                        this.msrv.read_privateletter(e), yield this.initPrivateLetterUnreadCount(), this.autoBadge(), this.router.navigate(["activities/private-letter", {
                                            id: e
                                        }]);
                                        break;
                                    case "weekSchedule":
                                        this.router.navigate(["/features/events/events-details", {
                                            id: e
                                        }])
                                }
                            } catch (n) { }
                        }))
                    }
                    initData() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            this.user = yield this.auth.get_user(), this.isAdmin = yield this.auth.is_admin(), this.isStudent = yield this.auth.is_student() || true, yield this.initSchool(), this.the_publicity_filter.schoolId = this.user.serialNo, yield this.initNoticeCount(), yield this.initTodoUnreadCount(), yield this.initPrivateLetterUnreadCount(), this.slideChange(null), yield this.autoBadge()
                        }))
                    }
                    initSchool() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            this.school = yield this.auth.get_setting(this.user.serialNo), this.school.schoolBadge && null != this.school.schoolBadge && "" != this.school.schoolBadge || (this.school.schoolBadge = "assets/images/default_avatar.png")
                        }))
                    }
                    autoBadge() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            try {
                                var e = this.the_todo_unread_count + this.the_notice_unread_count + this.the_privateletter_unread_count;
                                yield this.badge.set(e)
                            } catch (t) { }
                        }))
                    }
                    initWeekSchedule() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            this.the_publicity_loading = !0;
                            let e = yield this.msrv.get_weekschedule_hotlist();
                            0 == e.code && (e.data.forEach(e => {
                                e.cover || (e.cover = "assets/images/week_schedule.png"), e.content = this.comm.removeHtml(decodeURIComponent(e.content))
                            }), this.the_weekSchedule = e.data, this.the_publicity_loading = !1)
                        }))
                    }
                    showWeekScheduleDetail(e) {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            this.router.navigate(["features/events/events-details", {
                                id: e
                            }])
                        }))
                    }
                    gotoWeekSchedule() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            this.router.navigate(["features/events"])
                        }))
                    }
                    initPublicity() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            this.the_publicity_loading = !0;
                            let e = yield this.get_publicity_data();
                            this.the_publicity_records = e, this.the_publicity_loading = !1
                        }))
                    }
                    get_publicity_data() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            let e = yield this.msrv.get_publicity_list(this.the_publicity_filter);
                            return 0 != e.code ? [] : (e.data.filter(e => !e.avatar)
                                .forEach(e => e.avatar = u.a.default_avatar), e.data)
                        }))
                    }
                    more(e, t) {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            e.stopPropagation(), this.comm.presentAlertConfirm("温馨提示", "您确定要删除该条公示吗？", [{
                                text: "取消"
                            }, {
                                text: "确定",
                                handler: e => {
                                    this.the_publicity_records.splice(this.the_publicity_records.findIndex(e => e.id == t.id), 1), this.msrv.delete_publicity(t.id)
                                }
                            }])
                        }))
                    }
                    nav_publicity(e) {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            e.clickCount += 1, this.msrv.publicity_click(e.id), yield this.cache.set("publicity", e), this.router.navigate(["activities/publicity", {
                                id: e.id
                            }])
                        }))
                    }
                    like(e, t) {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            e.stopPropagation(), t.isLike = !t.isLike;
                            let n = !0;
                            !0 === t.isLike ? (n = !0, t.likeCount += 1) : (t.likeCount -= 1, n = !1), this.msrv.like_publicity(t.id, n)
                        }))
                    }
                    initNoticeCount() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            let e = yield this.msrv.get_notice_unread_count();
                            0 == e.code && (this.the_notice_unread_count = e.data)
                        }))
                    }
                    openNoticeFilter() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            let e = [],
                                t = [{
                                    text: "全部",
                                    value: ""
                                }],
                                n = yield this.msrv.get_notice_from();
                            if (0 != n.code) return void this.comm.presentToast(n.msg);
                            n.data.forEach(e => {
                                t.push({
                                    text: e.name,
                                    value: e.id.toString()
                                })
                            });
                            let i = 0;
                            this.the_notice_filter.fromId && (i = n.data.findIndex(e => e.id == this.the_notice_filter.fromId) + 1), e.push({
                                name: "1",
                                selectedIndex: i,
                                options: t
                            }), (yield this.pickerController.create({
                                buttons: [{
                                    role: "cancel",
                                    text: "取消",
                                    handler: () => { }
                                }, {
                                    text: "确定",
                                    handler: e => {
                                        this.the_notice_filter.PageIndex = 1, this.the_notice_filter.fromId = e[1].value, this.the_notice_filter.fromName = e[1].text, this.initNotice()
                                    }
                                }],
                                columns: e
                            }))
                                .present()
                        }))
                    }
                    initNotice() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            this.the_notice_loading = !0;
                            let e = yield this.get_notice_data();
                            this.the_notice_records = e, this.the_notice_loading = !1
                        }))
                    }
                    get_notice_data() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            let e = yield this.msrv.get_notice_list(this.the_notice_filter);
                            return 0 != e.code ? [] : e.data
                        }))
                    }
                    deleteNotice(e, t) {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            e.stopPropagation(), !0 !== t.isMe && this.comm.presentAlertConfirm("温馨提示", "您确定要删除该条消息吗？", [{
                                text: "取消"
                            }, {
                                text: "确定",
                                handler: e => Object(c.a)(this, void 0, void 0, (function* () {
                                    this.the_notice_records.splice(this.the_notice_records.findIndex(e => e.id == t.id), 1), this.msrv.delete_notice(t.id), yield this.initNoticeCount(), yield this.autoBadge()
                                }))
                            }])
                        }))
                    }
                    navNotice(e) {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            1 != e.isMe && (e.isRead = !0, this.msrv.read_notice(e.id), this.the_notice_unread_count -= 1, yield this.autoBadge()), this.router.navigate(["activities/notice", {
                                id: e.id
                            }])
                        }))
                    }
                    noticeReadAll() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            this.comm.presentAlertConfirm("温馨提示", "您确定要全部标记已读吗？", [{
                                text: "取消"
                            }, {
                                text: "确定",
                                handler: e => Object(c.a)(this, void 0, void 0, (function* () {
                                    this.the_notice_records.forEach(e => {
                                        1 != e.isMe && (e.isRead = !0)
                                    }), this.the_notice_unread_count = 0, this.msrv.read_notice_all(), yield this.autoBadge()
                                }))
                            }])
                        }))
                    }
                    initTodoUnreadCount() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            let e = yield this.msrv.get_todo_unread_count();
                            0 == e.code && (this.the_todo_unread_count = e.data)
                        }))
                    }
                    initTodo() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            this.the_todo_loading = !0;
                            let e = yield this.get_todo_data();
                            this.the_todo_records = e, this.the_todo_loading = !1
                        }))
                    }
                    get_todo_data() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            let e = yield this.msrv.get_todo_list(this.the_todo_filter);
                            return 0 != e.code ? [] : (e.data.filter(e => !e.avatar)
                                .forEach(e => e.avatar = u.a.default_avatar), e.data)
                        }))
                    }
                    get_todo(e) {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            this.comm.loadingPresent();
                            var t = yield this.msrv.get_todo(e);
                            if (this.comm.loadingDismiss(), 0 == t.code) return t.data;
                            this.comm.presentToast(t.msg)
                        }))
                    }
                    openTodoFilter() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            let e = [],
                                t = [{
                                    text: "全部",
                                    value: ""
                                }],
                                n = yield this.msrv.get_todo_from();
                            if (0 != n.code) return void this.comm.presentToast(n.msg);
                            n.data.forEach(e => {
                                t.push({
                                    text: e.name,
                                    value: e.id.toString()
                                })
                            });
                            let i = 0;
                            this.the_notice_filter.fromId && (i = n.data.findIndex(e => e.id == this.the_notice_filter.fromId) + 1), e.push({
                                name: "1",
                                selectedIndex: i,
                                options: t
                            }), (yield this.pickerController.create({
                                buttons: [{
                                    role: "cancel",
                                    text: "取消",
                                    handler: () => { }
                                }, {
                                    text: "确定",
                                    handler: e => {
                                        this.the_todo_filter.PageIndex = 1, this.the_todo_filter.fromId = e[1].value, this.the_todo_filter.fromName = e[1].text, this.initTodo()
                                    }
                                }],
                                columns: e
                            }))
                                .present()
                        }))
                    }
                    navTodo(e) {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            2 === e.fromId ? this.router.navigate(["features/leaves/leaves-detail", {
                                id: e.outTradeId
                            }]) : 3 === e.fromId ? this.router.navigate(["features/integrated-capability/integrated-capability-audit", {
                                id: e.outTradeId
                            }]) : 7 == e.fromId && this.router.navigate(["/features/function-room/function-room-audit/function-room-audit-detail", {
                                id: e.outTradeId,
                                isManager: !0
                            }])
                        }))
                    }
                    initPrivateLetterUnreadCount() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            let e = yield this.msrv.get_privateletter_unread_count();
                            0 == e.code && (this.the_privateletter_unread_count = e.data)
                        }))
                    }
                    initPrivateLetter() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            this.the_privateletter_loading = !0, this.the_privateletter_filter.PageIndex = 1, this.the_privateletter_records = yield this.get_privateletter_data(), this.the_privateletter_loading = !1
                        }))
                    }
                    get_privateletter_data() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            let e = yield this.msrv.get_privateletter_list(this.the_privateletter_filter);
                            return 0 != e.code ? [] : (e.data.filter(e => !e.avatar)
                                .forEach(e => e.avatar = u.a.default_avatar), e.data)
                        }))
                    }
                    sendPrivateLetter() {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            // Allowing students to talk, we need freedom!!!!!!!!
                            this.school.isAllowStudentSendMessage = true;
                            let e = yield this.comm.presentModal(b.a, "", {})
                            var t = yield e.onDidDismiss();
                            if (t.data) {
                                var n = yield this.msrv.create_privateletter(t.data.userId, t.data.userCode, t.data.userTypeId);
                                if (0 != n.code) return void this.comm.presentToast(n.msg);
                                this.initPrivateLetter(), this.router.navigate(["activities/private-letter", {
                                    id: n.data
                                }])
                            }
                        }))
                    }
                    navPrivateLetter(e) {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            this.msrv.read_privateletter(e.id), yield this.initPrivateLetterUnreadCount(), this.autoBadge(), e.unReadCount = 0, this.router.navigate(["activities/private-letter", {
                                id: e.id
                            }])
                        }))
                    }
                    privateTap(e, t) {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            document.getElementById("privateLetter" + t.id)
                                .classList.add("selected");
                            var n = [];
                            if (n.push({
                                title: "删除会话",
                                code: "delete",
                                color: "#FF004F"
                            }), 0 == n.length) return;
                            const i = yield this.popoverController.create({
                                component: f.a,
                                translucent: !1,
                                event: e,
                                cssClass: "pop-panel",
                                showBackdrop: !1,
                                componentProps: {
                                    data: n
                                }
                            });
                            yield i.present(), i.onDidDismiss()
                                .then(e => {
                                    "delete" == e.data.code && this.comm.presentAlertConfirm("温馨提示", "你确定要删除该会话吗，", [{
                                        text: "取消"
                                    }, {
                                        text: "确定",
                                        handler: e => Object(c.a)(this, void 0, void 0, (function* () {
                                            this.the_privateletter_records.splice(this.the_privateletter_records.findIndex(e => e.id == t.id), 1), this.msrv.delete_privateletter(t.id), this.the_privateletter_unread_count -= t.unReadCount
                                        }))
                                    }])
                                })
                        }))
                    }
                    load_more(e) {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            switch (this.segment_index) {
                                case 0:
                                    if (!0 === this.the_publicity_hasMore) {
                                        this.the_publicity_filter.PageIndex += 1;
                                        let e = yield this.get_publicity_data();
                                        e.length > 0 ? this.the_publicity_records = this.the_publicity_records.concat(e) : this.the_publicity_hasMore = !1
                                    }
                                    break;
                                case 1:
                                    if (!0 === this.the_notice_hasMore) {
                                        this.the_notice_filter.PageIndex += 1;
                                        let e = yield this.get_notice_data();
                                        e.length > 0 ? this.the_notice_records = this.the_notice_records.concat(e) : this.the_notice_hasMore = !1
                                    }
                                    break;
                                case 2:
                                    if (!0 === this.the_todo_hasMore) {
                                        this.the_todo_filter.PageIndex += 1;
                                        let e = yield this.get_todo_data();
                                        e.length > 0 ? this.the_todo_records = this.the_todo_records.concat(e) : this.the_todo_hasMore = !1
                                    }
                            }
                            e.target.complete()
                        }))
                    }
                    refresh(e) {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            switch (this.segment_index) {
                                case 0:
                                    this.the_publicity_filter.PageIndex = 1, this.the_publicity_filter.schoolId = this.user.serialNo, yield this.initPublicity(), yield this.initWeekSchedule();
                                    break;
                                case 1:
                                    this.the_notice_filter.PageIndex = 1, this.the_notice_filter.fromId = null, this.the_notice_filter.fromName = "", yield this.initNotice(), yield this.initNoticeCount();
                                    break;
                                case 2:
                                    this.the_todo_filter.PageIndex = 1, this.the_todo_filter.fromId = null, this.the_todo_filter.fromName = "", yield this.initTodo(), yield this.initTodoUnreadCount();
                                    break;
                                case 3:
                                    this.the_privateletter_filter.PageIndex = 1, yield this.initPrivateLetter(), yield this.initPrivateLetterUnreadCount()
                            }
                            yield this.autoBadge(), e.target.complete()
                        }))
                    }
                    slideChange(e) {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            e && e.stopPropagation();
                            var t = yield this.slider.getActiveIndex();
                            switch (t) {
                                case 0:
                                    yield this.initPublicity(), yield this.initWeekSchedule();
                                    break;
                                case 1:
                                    yield this.initNotice();
                                    break;
                                case 2:
                                    yield this.initTodo();
                                    break;
                                case 3:
                                    yield this.initPrivateLetter()
                            }
                            this.segment_index = t, this.content.scrollToTop()
                        }))
                    }
                    segmentChange(e) {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            this.segment_index = e, this.slider.slideTo(e)
                        }))
                    }
                    gotoUser(e, t) {
                        return Object(c.a)(this, void 0, void 0, (function* () {
                            e.stopPropagation(), !0 !== this.isStudent && t.userCode && this.router.navigate(["features/students/display-student", {
                                id: t.userCode
                            }])
                        }))
                    }
                }
                return e.\u0275fac = function (t) {
                    return new (t || e)(x["\u0275\u0275directiveInject"](s.a), x["\u0275\u0275directiveInject"](o.g), x["\u0275\u0275directiveInject"](i.ToastController), x["\u0275\u0275directiveInject"](o.a), x["\u0275\u0275directiveInject"](l.a), x["\u0275\u0275directiveInject"](d.a), x["\u0275\u0275directiveInject"](h.a), x["\u0275\u0275directiveInject"](m.a), x["\u0275\u0275directiveInject"](i.PopoverController), x["\u0275\u0275directiveInject"](i.PickerController), x["\u0275\u0275directiveInject"](p.a), x["\u0275\u0275directiveInject"](v.a))
                }, e.\u0275cmp = x["\u0275\u0275defineComponent"]({
                    type: e,
                    selectors: [["app-activities"]],
                    viewQuery: function (e, t) {
                        var n;
                        1 & e && (x["\u0275\u0275viewQuery"](i.IonContent, !0), x["\u0275\u0275viewQuery"](S, !0)), 2 & e && (x["\u0275\u0275queryRefresh"](n = x["\u0275\u0275loadQuery"]()) && (t.content = n.first), x["\u0275\u0275queryRefresh"](n = x["\u0275\u0275loadQuery"]()) && (t.slider = n.first))
                    },
                    decls: 70,
                    vars: 41,
                    consts: [["class", "ion-no-border", 4, "ngIf"], [1, "segment"], [3, "ngClass", "click"], [1, "title"], [1, "border-sm"], ["class", "badge", 4, "ngIf"], [1, "bgfff", 3, "fullscreen"], [3, "show", "loading", 4, "ngIf"], ["style", "position: relative;", "class", "mt10", 4, "ngIf"], [3, "options", "ionSlideDidChange"], ["slides", ""], [2, "width", "100%", "position", "relative", "text-align", "left"], ["class", "padding-left-right-20 padding-top-bottom-10 no-backgroud", 4, "ngIf"], [3, "show", "loading"], ["lines", "none"], ["class", "padding-top-bottom-10", 3, "click", 4, "ngFor", "ngForOf"], [2, "width", "100%"], [1, "display-table"], [1, "table-cell", "text-left", 2, "width", "50%"], [1, "color-1e1f20", "font-14", "padding-left-10", 3, "click"], ["aria-hidden", "true", 1, "icon", "filter"], [0, "xlink", "href", "#iconInterface58-24px"], [1, "table-cell", "text-right", "padding-right-20", 2, "width", "50%"], [1, "font-16", "color-999", 3, "click"], ["lines", "none", 1, "mt10"], [3, "click", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "id", "press", "click", 4, "ngFor", "ngForOf"], ["threshold", "100px", 3, "ionInfinite"], ["loadingSpinner", "bubbles", "loadingText", "更多..."], ["slot", "fixed", 3, "ionRefresh"], ["pullingIcon", "arrow-down-sharp", "pullingText", "下拉刷新", "refreshingSpinner", "circles", "refreshingText", "刷新..."], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 3, "click", 4, "ngIf"], [1, "ion-no-border"], [1, "logo"], [2, "width", "3.5rem", "margin-left", "1rem", 3, "src"], ["color", "blues", 2, "font-weight", "900", "font-size", "larger", "text-align", "left"], [1, "badge"], [1, "mt10", 2, "position", "relative"], ["class", "week-schedule-more", 3, "click", 4, "ngIf"], [1, "padding-bottom-10"], [1, "week-schedule-more", 3, "click"], [1, "week-schedule-box", 3, "click"], [1, "cover", 3, "src"], [1, "content"], [1, "title", "text-hidden"], [1, "sub-title", "text-hidden-2"], [1, "padding-left-right-20", "padding-top-bottom-10", "no-backgroud"], [1, "font-18", "color-425060", "b-50"], [1, "padding-top-bottom-10", 3, "click"], [1, "avatar", 3, "click"], [1, "avatar-image", 3, "src"], [1, "ml10"], [1, "font-20", "color-000", "b"], [1, "font-16", "color-000", "b-50"], [1, "mt5"], [4, "ngIf"], ["slot", "end"], [1, "font-18", "color-333", "display-block"], [1, "height-2"], ["color", "_", "slot", "start", 3, "click", 4, "ngIf"], ["color", "_", "slot", "start", 4, "ngIf"], ["color", "_", "slot", "start"], ["name", "eye-outline", "color", "dark", 2, "font-size", "1rem", "width", "1.5rem", "margin-right", "2px"], ["color", "_", "slot", "end", 3, "click", 4, "ngIf"], [1, "line"], [3, "size", 4, "ngFor", "ngForOf"], [3, "size"], [1, "list-pic", 3, "src", "ngClass"], ["color", "_", "slot", "start", 3, "click"], [1, "iconfont", "ym-font", "iconInterface94-24px", 3, "ngClass"], ["color", "dark", 1, "iconfont", "ym-font", "iconCommunication37-24px"], ["color", "_", "slot", "end", 3, "click"], [1, "iconfont", "ym-font", "iconInterface66-24px", "color-ff6110", 2, "font-size", "1.5rem", "width", "1.5rem"], [3, "click"], ["slot", "start"], [1, "color-8c", "font-18"], [1, "font-16", "color-333", "display-block"], ["class", "read-badge", 3, "ngClass", 4, "ngIf"], ["color", "_", 4, "ngIf"], ["color", "_", "slot", "end", "style", "width: 2rem;", 3, "click", 4, "ngIf"], [1, "read-badge", 3, "ngClass"], ["aria-hidden", "true", 1, "icon"], [0, "xlink", "href", "#iconchat-check-fill"], [0, "xlink", "href", "#iconchat-4-line"], ["color", "_"], [1, "iconfont", "ym-font", "iconCommunication6-24px", "color-blue"], [1, "color-blue"], ["color", "_", "slot", "end", 2, "width", "2rem", 3, "click"], ["slot", "start", 1, "avatar", 2, "position", "relative", 3, "click"], [1, "ml10", 3, "click"], [1, "b-no"], [3, "id", "press", "click"], ["slot", "start", 1, "avatar", 2, "position", "relative"], ["class", "spot-letter", 4, "ngIf"], [1, "b", "font-18", "color-000"], [1, "font-16", "color-636674", "b-no", "mt10"], ["color", "_", "slot", "end", 1, "font-16", "color-8c"], [1, "spot-letter"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 3, "click"], ["color", "Success"], ["name", "add-outline", "size", "large", 1, "color-blue"]],
                    template: function (e, t) {
                        1 & e && (x["\u0275\u0275template"](0, C, 5, 2, "ion-header", 0), x["\u0275\u0275elementStart"](1, "ion-toolbar"), x["\u0275\u0275elementStart"](2, "ul", 1), x["\u0275\u0275elementStart"](3, "li", 2), x["\u0275\u0275listener"]("click", (function () {
                            return t.segmentChange(0)
                        })), x["\u0275\u0275elementStart"](4, "a", 3), x["\u0275\u0275text"](5, "校园动态"), x["\u0275\u0275elementEnd"](), x["\u0275\u0275element"](6, "div", 4), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](7, "li", 2), x["\u0275\u0275listener"]("click", (function () {
                            return t.segmentChange(1)
                        })), x["\u0275\u0275elementStart"](8, "a", 3), x["\u0275\u0275text"](9, "消息与通知"), x["\u0275\u0275elementEnd"](), x["\u0275\u0275template"](10, I, 2, 1, "a", 5), x["\u0275\u0275element"](11, "div", 4), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](12, "li", 2), x["\u0275\u0275listener"]("click", (function () {
                            return t.segmentChange(2)
                        })), x["\u0275\u0275elementStart"](13, "a", 3), x["\u0275\u0275text"](14, "我的待办"), x["\u0275\u0275elementEnd"](), x["\u0275\u0275template"](15, k, 2, 1, "a", 5), x["\u0275\u0275element"](16, "div", 4), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](17, "li", 2), x["\u0275\u0275listener"]("click", (function () {
                            return t.segmentChange(3)
                        })), x["\u0275\u0275elementStart"](18, "a", 3), x["\u0275\u0275text"](19, "私信"), x["\u0275\u0275elementEnd"](), x["\u0275\u0275template"](20, E, 2, 1, "a", 5), x["\u0275\u0275element"](21, "div", 4), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](22, "ion-content", 6), x["\u0275\u0275template"](23, O, 1, 2, "app-loading-process", 7), x["\u0275\u0275template"](24, P, 4, 2, "div", 8), x["\u0275\u0275elementStart"](25, "ion-slides", 9, 10), x["\u0275\u0275listener"]("ionSlideDidChange", (function (e) {
                            return t.slideChange(e)
                        })), x["\u0275\u0275elementStart"](27, "ion-slide"), x["\u0275\u0275elementStart"](28, "div", 11), x["\u0275\u0275template"](29, M, 3, 0, "div", 12), x["\u0275\u0275element"](30, "app-loading-process", 13), x["\u0275\u0275elementStart"](31, "ion-list", 14), x["\u0275\u0275template"](32, $, 27, 15, "ion-item-group", 15), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](33, "ion-slide"), x["\u0275\u0275elementStart"](34, "div", 16), x["\u0275\u0275element"](35, "app-loading-process", 13), x["\u0275\u0275elementStart"](36, "div", 17), x["\u0275\u0275elementStart"](37, "div", 18), x["\u0275\u0275elementStart"](38, "a", 19), x["\u0275\u0275listener"]("click", (function () {
                            return t.openNoticeFilter()
                        })), x["\u0275\u0275namespaceSVG"](), x["\u0275\u0275elementStart"](39, "svg", 20), x["\u0275\u0275element"](40, "use", 21), x["\u0275\u0275elementEnd"](), x["\u0275\u0275text"](41), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275namespaceHTML"](), x["\u0275\u0275elementStart"](42, "div", 22), x["\u0275\u0275elementStart"](43, "a", 23), x["\u0275\u0275listener"]("click", (function () {
                            return t.noticeReadAll()
                        })), x["\u0275\u0275text"](44, "全部标记已读"), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275element"](45, "app-loading-process", 13), x["\u0275\u0275elementStart"](46, "ion-list", 24), x["\u0275\u0275template"](47, X, 14, 9, "ion-item-group", 25), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](48, "ion-slide"), x["\u0275\u0275elementStart"](49, "div", 16), x["\u0275\u0275element"](50, "app-loading-process", 13), x["\u0275\u0275elementStart"](51, "div", 17), x["\u0275\u0275elementStart"](52, "div", 18), x["\u0275\u0275elementStart"](53, "a", 19), x["\u0275\u0275listener"]("click", (function () {
                            return t.openTodoFilter()
                        })), x["\u0275\u0275namespaceSVG"](), x["\u0275\u0275elementStart"](54, "svg", 20), x["\u0275\u0275element"](55, "use", 21), x["\u0275\u0275elementEnd"](), x["\u0275\u0275text"](56), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275namespaceHTML"](), x["\u0275\u0275element"](57, "app-loading-process", 13), x["\u0275\u0275elementStart"](58, "ion-list"), x["\u0275\u0275template"](59, q, 12, 8, "ion-item", 26), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](60, "ion-slide"), x["\u0275\u0275elementStart"](61, "div", 16), x["\u0275\u0275element"](62, "app-loading-process", 13), x["\u0275\u0275elementStart"](63, "ion-list"), x["\u0275\u0275template"](64, J, 11, 7, "ion-item", 27), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](65, "ion-infinite-scroll", 28), x["\u0275\u0275listener"]("ionInfinite", (function (e) {
                            return t.load_more(e)
                        })), x["\u0275\u0275element"](66, "ion-infinite-scroll-content", 29), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementStart"](67, "ion-refresher", 30), x["\u0275\u0275listener"]("ionRefresh", (function (e) {
                            return t.refresh(e)
                        })), x["\u0275\u0275element"](68, "ion-refresher-content", 31), x["\u0275\u0275elementEnd"](), x["\u0275\u0275elementEnd"](), x["\u0275\u0275template"](69, Z, 3, 0, "ion-fab", 32)), 2 & e && (x["\u0275\u0275property"]("ngIf", t.school), x["\u0275\u0275advance"](3), x["\u0275\u0275property"]("ngClass", x["\u0275\u0275pureFunction1"](32, ee, 0 === t.segment_index)), x["\u0275\u0275advance"](4), x["\u0275\u0275property"]("ngClass", x["\u0275\u0275pureFunction1"](34, ee, 1 === t.segment_index)), x["\u0275\u0275advance"](3), x["\u0275\u0275property"]("ngIf", t.the_notice_unread_count > 0), x["\u0275\u0275advance"](2), x["\u0275\u0275property"]("ngClass", x["\u0275\u0275pureFunction1"](36, ee, 2 === t.segment_index)), x["\u0275\u0275advance"](3), x["\u0275\u0275property"]("ngIf", t.the_todo_unread_count > 0), x["\u0275\u0275advance"](2), x["\u0275\u0275property"]("ngClass", x["\u0275\u0275pureFunction1"](38, ee, 3 === t.segment_index)), x["\u0275\u0275advance"](3), x["\u0275\u0275property"]("ngIf", t.the_privateletter_unread_count > 0), x["\u0275\u0275advance"](2), x["\u0275\u0275property"]("fullscreen", !0), x["\u0275\u0275advance"](1), x["\u0275\u0275property"]("ngIf", 0 === t.segment_index), x["\u0275\u0275advance"](1), x["\u0275\u0275property"]("ngIf", 0 === t.segment_index), x["\u0275\u0275advance"](1), x["\u0275\u0275property"]("options", x["\u0275\u0275pureFunction0"](40, te)), x["\u0275\u0275advance"](4), x["\u0275\u0275property"]("ngIf", 1 != t.the_publicity_loading), x["\u0275\u0275advance"](1), x["\u0275\u0275property"]("show", !t.the_publicity_records || 0 == t.the_publicity_records.length)("loading", !1), x["\u0275\u0275advance"](2), x["\u0275\u0275property"]("ngForOf", t.the_publicity_records), x["\u0275\u0275advance"](3), x["\u0275\u0275property"]("show", !1)("loading", t.the_notice_loading), x["\u0275\u0275advance"](6), x["\u0275\u0275textInterpolate1"](" ", t.the_notice_filter.fromName || "分类筛选", ""), x["\u0275\u0275advance"](4), x["\u0275\u0275property"]("show", !t.the_notice_records || 0 == t.the_notice_records.length)("loading", !1), x["\u0275\u0275advance"](2), x["\u0275\u0275property"]("ngForOf", t.the_notice_records), x["\u0275\u0275advance"](3), x["\u0275\u0275property"]("show", !1)("loading", t.the_todo_loading), x["\u0275\u0275advance"](6), x["\u0275\u0275textInterpolate1"](" ", t.the_todo_filter.fromName || "分类筛选", ""), x["\u0275\u0275advance"](1), x["\u0275\u0275property"]("show", !t.the_todo_records || 0 == t.the_todo_records.length)("loading", !1), x["\u0275\u0275advance"](2), x["\u0275\u0275property"]("ngForOf", t.the_todo_records), x["\u0275\u0275advance"](3), x["\u0275\u0275property"]("show", !t.the_privateletter_records || 0 == t.the_privateletter_records.length)("loading", t.the_privateletter_loading), x["\u0275\u0275advance"](2), x["\u0275\u0275property"]("ngForOf", t.the_privateletter_records), x["\u0275\u0275advance"](5), x["\u0275\u0275property"]("ngIf", 3 == t.segment_index && (t.school.isAllowStudentSendMessage = true)))
                    },
                    directives: [r.NgIf, i.IonToolbar, r.NgClass, i.IonContent, i.IonSlides, i.IonSlide, y.a, i.IonList, r.NgForOf, i.IonInfiniteScroll, i.IonInfiniteScrollContent, i.IonRefresher, i.IonRefresherContent, i.IonHeader, i.IonImg, i.IonTitle, i.IonItemGroup, i.IonItem, i.IonThumbnail, i.IonLabel, i.IonBadge, i.IonChip, i.IonIcon, i.IonGrid, i.IonRow, i.IonCol, i.IonFab, i.IonFabButton],
                    styles: ["ion-header[_ngcontent-%COMP%]{padding-top:env(safe-area-inset-top)}.logo[_ngcontent-%COMP%]{padding-top:0!important}ion-content[_ngcontent-%COMP%]{--padding-bottom:1rem}ion-grid[_ngcontent-%COMP%]{padding:0 1rem}ion-col[_ngcontent-%COMP%]{--ion-grid-column-padding:5px 0;text-align:center}.segment[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.segment[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;padding:.5rem 1.5rem 1rem .5rem;position:relative}.segment[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#8f92a1;font-size:.9rem;display:block}.segment[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1rem;color:#1982ff;font-weight:700}.segment[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .border-sm[_ngcontent-%COMP%]{display:none}.segment[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .border-sm[_ngcontent-%COMP%]{display:block;position:absolute;width:1rem;height:3px;background:#1982ff;border-radius:3px;margin:.5rem auto;transform:translate(-50%,-50%);left:40%}.segment[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{width:1.2rem;height:1.2rem;line-height:1.2rem;text-align:center;background:#f93c65;border-radius:50%;opacity:1;color:#fff;font-size:.5rem;position:absolute;top:0;right:0}.week-schedule-box[_ngcontent-%COMP%]{padding:0 .5rem;width:calc(100% - 1rem);border-radius:.5rem;height:8.75rem;position:relative}.week-schedule-box[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]{width:100%;top:0;border-radius:.5rem}.week-schedule-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:absolute;top:0;width:100%;width:calc(100% - 1rem);height:100%;border-radius:.5rem;background-image:linear-gradient(rgba(25,130,255,0),rgba(25,130,255,.1),rgba(25,130,255,.4),rgba(25,130,255,.8));text-align:left;padding:0 1rem}.week-schedule-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#fff;font-size:1rem;font-weight:700;margin-top:4rem;display:block}.week-schedule-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{font-size:.7rem;color:#fff;margin-top:1rem}.week-schedule-more[_ngcontent-%COMP%]{position:absolute;text-align:center;padding:0 .5rem;height:20px;background:#fff;border:1px solid #1982ff;opacity:1;border-radius:12px;z-index:99;font-size:.7rem;color:#1982ff;top:6px;right:24px}.no-backgroud[_ngcontent-%COMP%]{background:#f5f6fa!important;--background:#f5f6fa!important}.publicity-badge[_ngcontent-%COMP%]{min-width:1.25rem;text-align:center;padding:0 1rem;height:1.625rem;line-height:1.625rem;border-radius:.5rem;font-weight:400}.publicity-badge.from1[_ngcontent-%COMP%]{color:#f1cb1a;background:rgba(241,203,26,.1)}.publicity-badge.from2[_ngcontent-%COMP%]{color:#4bb2ff;background:rgba(75,178,255,.1)}.publicity-badge.from3[_ngcontent-%COMP%]{color:#ff004f;background:rgba(255,0,79,.1)}.publicity-badge.from4[_ngcontent-%COMP%], .publicity-badge.from5[_ngcontent-%COMP%], .publicity-badge.from6[_ngcontent-%COMP%], .publicity-badge.from7[_ngcontent-%COMP%], .publicity-badge.from8[_ngcontent-%COMP%]{color:#f1cb1a;background:rgba(241,203,26,.1)}.line[_ngcontent-%COMP%]{height:1px;background:#e4e4e4;display:block;margin:.5rem 0}.list-pic[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;width:6.6rem;height:6.6rem}.list-pic.big-pic[_ngcontent-%COMP%]{width:100%;height:100%}ion-content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}ion-chip[_ngcontent-%COMP%]{padding:0;background-color:#fff}.icon[_ngcontent-%COMP%]{width:2rem;height:2rem;vertical-align:-.15em;fill:currentColor;overflow:hidden}.icon.filter[_ngcontent-%COMP%]{vertical-align:-1em}.spot[_ngcontent-%COMP%]{width:.625rem;height:.625rem;right:1px}.spot[_ngcontent-%COMP%], .spot-letter[_ngcontent-%COMP%]{position:absolute;background:#f93c65;border-radius:50%}.spot-letter[_ngcontent-%COMP%]{width:1rem;height:1rem;line-height:1rem;color:#fff;right:-.5rem;top:-.5rem;font-size:.8rem;text-align:center}.read-badge[_ngcontent-%COMP%]{background:#fff;border:1px solid #e4e4e4;border-radius:.5rem;color:#666;font-size:.75rem}.read-badge.yes[_ngcontent-%COMP%]{color:#1982ff;border:1px solid #93c5ff}.read-badge[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:1.5em;height:1.5em;vertical-align:-.5em;margin-right:2px}.height-2[_ngcontent-%COMP%]{height:2rem}ion-item.selected[_ngcontent-%COMP%]{--background:#f2f2f2}"]
                }), e
            })();
            var ie = n("qtYk"),
                oe = n("Ql/B"),
                re = n("jhN1");
            n.d(t, "ActivitiesPageModule", (function () {
                return ae
            }));
            let ae = (() => {
                class e { }
                return e.\u0275mod = x["\u0275\u0275defineNgModule"]({
                    type: e
                }), e.\u0275inj = x["\u0275\u0275defineInjector"]({
                    factory: function (t) {
                        return new (t || e)
                    },
                    imports: [[i.IonicModule, r.CommonModule, a.FormsModule, ie.a, o.i.forChild([{
                        path: "",
                        component: ne
                    }]), oe.a, re.c]]
                }), e
            })()
        }
    }]);