var oe = Object.defineProperty;
var ae = (e, t, r) => t in e ? oe(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var L = (e, t, r) => ae(e, typeof t != "symbol" ? t + "" : t, r);
import {
    ao as commonjsGlobal,
    ap as getDefaultExportFromCjs,
    s as dayjs,
    r as ref,
    aX as standardFieldsStore,
    X as mapCustomValues,
    aR as parseAndFetchUserData,
    c as computed,
    R as usePreviewStore,
    y as useRouter,
    aY as defaultPadding,
    aZ as defaultShadow,
    a_ as fieldTypeMaxScore,
    a$ as fieldTypeSumScore,
    b0 as SCORE_FORMAT,
    D as useRuntimeConfig
} from "./B9OM7hcI.js";
import {
    e as countries,
    P as PaymentServices,
    a as attributionEventData,
    g as getSessionId,
    b as getSessionFingerprint,
    H as HISTORY_KEY,
    U as USER_SESSION_KEY,
    h as USER_SESSION_HISTORY_KEY,
    j as USER_FINGERPRINT_KEY,
    k as FIRST_EVENT_KEY
} from "./DsyfCw_n.js";
var customParseFormat$1 = {
    exports: {}
};
(function(e, t) {
    (function(r, a) {
        e.exports = a()
    })(commonjsGlobal, function() {
        var r = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            a = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
            s = /\d/,
            o = /\d\d/,
            i = /\d\d?/,
            u = /\d*[^-_:/,()\s\d]+/,
            g = {},
            c = function(d) {
                return (d = +d) + (d > 68 ? 1900 : 2e3)
            },
            l = function(d) {
                return function(n) {
                    this[d] = +n
                }
            },
            h = [/[+-]\d\d:?(\d\d)?|Z/, function(d) {
                (this.zone || (this.zone = {})).offset = function(n) {
                    if (!n || n === "Z") return 0;
                    var m = n.match(/([+-]|\d\d)/g),
                        y = 60 * m[1] + (+m[2] || 0);
                    return y === 0 ? 0 : m[0] === "+" ? -y : y
                }(d)
            }],
            f = function(d) {
                var n = g[d];
                return n && (n.indexOf ? n : n.s.concat(n.f))
            },
            F = function(d, n) {
                var m, y = g.meridiem;
                if (y) {
                    for (var p = 1; p <= 24; p += 1)
                        if (d.indexOf(y(p, 0, n)) > -1) {
                            m = p > 12;
                            break
                        }
                } else m = d === (n ? "pm" : "PM");
                return m
            },
            O = {
                A: [u, function(d) {
                    this.afternoon = F(d, !1)
                }],
                a: [u, function(d) {
                    this.afternoon = F(d, !0)
                }],
                Q: [s, function(d) {
                    this.month = 3 * (d - 1) + 1
                }],
                S: [s, function(d) {
                    this.milliseconds = 100 * +d
                }],
                SS: [o, function(d) {
                    this.milliseconds = 10 * +d
                }],
                SSS: [/\d{3}/, function(d) {
                    this.milliseconds = +d
                }],
                s: [i, l("seconds")],
                ss: [i, l("seconds")],
                m: [i, l("minutes")],
                mm: [i, l("minutes")],
                H: [i, l("hours")],
                h: [i, l("hours")],
                HH: [i, l("hours")],
                hh: [i, l("hours")],
                D: [i, l("day")],
                DD: [o, l("day")],
                Do: [u, function(d) {
                    var n = g.ordinal,
                        m = d.match(/\d+/);
                    if (this.day = m[0], n)
                        for (var y = 1; y <= 31; y += 1) n(y).replace(/\[|\]/g, "") === d && (this.day = y)
                }],
                w: [i, l("week")],
                ww: [o, l("week")],
                M: [i, l("month")],
                MM: [o, l("month")],
                MMM: [u, function(d) {
                    var n = f("months"),
                        m = (f("monthsShort") || n.map(function(y) {
                            return y.slice(0, 3)
                        })).indexOf(d) + 1;
                    if (m < 1) throw new Error;
                    this.month = m % 12 || m
                }],
                MMMM: [u, function(d) {
                    var n = f("months").indexOf(d) + 1;
                    if (n < 1) throw new Error;
                    this.month = n % 12 || n
                }],
                Y: [/[+-]?\d+/, l("year")],
                YY: [o, function(d) {
                    this.year = c(d)
                }],
                YYYY: [/\d{4}/, l("year")],
                Z: h,
                ZZ: h
            };

        function x(d) {
            var n, m;
            n = d, m = g && g.formats;
            for (var y = (d = n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(v, b, w) {
                    var E = w && w.toUpperCase();
                    return b || m[w] || r[w] || m[E].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(_, I, Y) {
                        return I || Y.slice(1)
                    })
                })).match(a), p = y.length, S = 0; S < p; S += 1) {
                var C = y[S],
                    T = O[C],
                    A = T && T[0],
                    P = T && T[1];
                y[S] = P ? {
                    regex: A,
                    parser: P
                } : C.replace(/^\[|\]$/g, "")
            }
            return function(v) {
                for (var b = {}, w = 0, E = 0; w < p; w += 1) {
                    var _ = y[w];
                    if (typeof _ == "string") E += _.length;
                    else {
                        var I = _.regex,
                            Y = _.parser,
                            K = v.slice(E),
                            D = I.exec(K)[0];
                        Y.call(b, D), v = v.replace(D, "")
                    }
                }
                return function(M) {
                    var U = M.afternoon;
                    if (U !== void 0) {
                        var R = M.hours;
                        U ? R < 12 && (M.hours += 12) : R === 12 && (M.hours = 0), delete M.afternoon
                    }
                }(b), b
            }
        }
        return function(d, n, m) {
            m.p.customParseFormat = !0, d && d.parseTwoDigitYear && (c = d.parseTwoDigitYear);
            var y = n.prototype,
                p = y.parse;
            y.parse = function(S) {
                var C = S.date,
                    T = S.utc,
                    A = S.args;
                this.$u = T;
                var P = A[1];
                if (typeof P == "string") {
                    var v = A[2] === !0,
                        b = A[3] === !0,
                        w = v || b,
                        E = A[2];
                    b && (E = A[2]), g = this.$locale(), !v && E && (g = m.Ls[E]), this.$d = function(K, D, M, U) {
                        try {
                            if (["x", "X"].indexOf(D) > -1) return new Date((D === "X" ? 1e3 : 1) * K);
                            var R = x(D)(K),
                                j = R.year,
                                N = R.month,
                                X = R.day,
                                W = R.hours,
                                ee = R.minutes,
                                te = R.seconds,
                                re = R.milliseconds,
                                q = R.zone,
                                G = R.week,
                                V = new Date,
                                k = X || (j || N ? 1 : V.getDate()),
                                H = j || V.getFullYear(),
                                B = 0;
                            j && !N || (B = N > 0 ? N - 1 : V.getMonth());
                            var $, Q = W || 0,
                                z = ee || 0,
                                J = te || 0,
                                Z = re || 0;
                            return q ? new Date(Date.UTC(H, B, k, Q, z, J, Z + 60 * q.offset * 1e3)) : M ? new Date(Date.UTC(H, B, k, Q, z, J, Z)) : ($ = new Date(H, B, k, Q, z, J, Z), G && ($ = U($).week(G).toDate()), $)
                        } catch {
                            return new Date("")
                        }
                    }(C, P, T, m), this.init(), E && E !== !0 && (this.$L = this.locale(E).$L), w && C != this.format(P) && (this.$d = new Date("")), g = {}
                } else if (P instanceof Array)
                    for (var _ = P.length, I = 1; I <= _; I += 1) {
                        A[1] = P[I - 1];
                        var Y = m.apply(this, A);
                        if (Y.isValid()) {
                            this.$d = Y.$d, this.$L = Y.$L, this.init();
                            break
                        }
                        I === _ && (this.$d = new Date(""))
                    } else p.call(this, S)
            }
        }
    })
})(customParseFormat$1);
var customParseFormatExports = customParseFormat$1.exports;
const customParseFormat = getDefaultExportFromCjs(customParseFormatExports);
dayjs.extend(customParseFormat);
const urlRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,10}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
    emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    validUrl = e => e ? urlRegex.test(e) : !0,
    isEmpty = e => e == null || typeof e == "string" && e.trim() === "",
    validPhone = (e, t) => {
        var a;
        if (!e) return !0;
        const r = (a = window == null ? void 0 : window.libphonenumber) == null ? void 0 : a.parsePhoneNumberFromString(e, t);
        return r ? r.isValid() : !1
    },
    validEmail = e => e ? emailRegex.test(e) : !0,
    verifyEmail = e => emailRegex.test(e),
    isDateEarlier = (e, t) => e ? dayjs(e, t).isBefore(dayjs()) : !0,
    hasAlphabet = e => /^[A-Za-z]+/.test(e);
dayjs.extend(customParseFormat);
const fillDataForStandardFieldUri = async (e, t, r, a, s, o, i = {}, u = !1) => {
        const g = ref(r),
            c = ref(a),
            l = ref(s),
            h = ref(o);
        let f = e || t.query;
        u && (f = {});
        const F = standardFieldsStore.map(n => {
            var y;
            if (n in f)
                if (n === "phone" && f[n]) {
                    let p = f[n];
                    f[n][0] === " " && (p = p.split(""), p[0] = "+", p = p.join("")), g.value.phone = p
                } else n === "country" && f[n] && countries.hasOwnProperty(f[n]) ? c.value = countries[f[n]] : l.value[n] = (y = f[n]) == null ? void 0 : y.replace(/\+/g, " ")
        });
        await Promise.all(F);
        let O = [];
        const x = await Promise.all(h.value.map(n => {
            n.hiddenFieldQueryKey && O.push(n)
        }));
        await Promise.all(x);
        const d = O.map(n => {
            var y, p, S, C, T, A, P;
            if (n.hiddenFieldQueryKey in f)
                if (n.type === "phone" && f[n.hiddenFieldQueryKey]) {
                    let v = f[n.hiddenFieldQueryKey];
                    f[n.hiddenFieldQueryKey][0] === " " && (v = v.split(""), v[0] = "+", v = v.join("")), g.value[n.tag] = v
                } else if (n.type === "checkbox")
                if (f[n.hiddenFieldQueryKey].includes(",")) {
                    let v = f[n.hiddenFieldQueryKey].split(",");
                    l.value[n.tag] = v.map(b => b == null ? void 0 : b.trim())
                } else l.value[n.tag] = [f[n.hiddenFieldQueryKey]];
            else if (n.type === "email") l.value[n.tag] = (y = f[n.hiddenFieldQueryKey]) == null ? void 0 : y.replace(/ /g, "+");
            else if (n.type === "date") {
                const v = ((p = n.format) == null ? void 0 : p.replace(/-/g, n.separator || "-")) || "YYYY-MM-DD",
                    b = (S = f[n.hiddenFieldQueryKey]) == null ? void 0 : S.replace(/ /g, ""),
                    w = dayjs(b, [v, "MMMDoYYYY", "MMM Do YYYY"]).isValid() ? dayjs(b, [v, "MMMDoYYYY"]).format(v) : "";
                l.value[n.tag] = dayjs(w, v, !0).isValid() ? w : ""
            } else n.type === "monetory" ? l.value[n.tag] = (C = f[n.hiddenFieldQueryKey]) == null ? void 0 : C.replace(/[^\d.,]/g, "") : l.value[n.tag] = (T = f[n.hiddenFieldQueryKey]) == null ? void 0 : T.replace(/\+/g, " ");
            else {
                if (n.type === "phone" && n.hiddenFieldValue) {
                    let v = n.hiddenFieldValue;
                    n.hiddenFieldValue[0] === " " && (v = v.split(""), v[0] = "+", v = v.join("")), g.value[n.tag] = v
                }
                if (n.type === "date" && n.hiddenFieldValue) {
                    const v = ((A = n.format) == null ? void 0 : A.replace(/-/g, n.separator || "-")) || "YYYY-MM-DD",
                        b = mapCustomValues(n.hiddenFieldValue || l.value[n.tag]),
                        w = dayjs(b, [v, "MMMDoYYYY", "MMM Do YYYY"]).isValid() ? dayjs(b, [v, "MMMDoYYYY"]).format(v) : "";
                    l.value[n.tag] = dayjs(w, v, !0).isValid() ? w : ""
                } else n.hiddenFieldValue && (l.value[n.tag] = (P = mapCustomValues(n.hiddenFieldValue)) == null ? void 0 : P.replace(/\+/g, " "))
            }
        });
        return await Promise.all(d), {
            phoneCountryIncluded: g.value,
            formattedCountry: c.value,
            formFieldsValue: l.value,
            formFields: h.value
        }
    },
    fillDataFromCookie = async (e, t, r, a, s, o, i = {}) => {
        const u = ref(a),
            g = ref(s),
            c = ref(o),
            l = e || parseAndFetchUserData(t);
        if (!l) return;
        const h = standardFieldsStore.map(f => {
            if (r.includes(f))
                if (f === "phone") {
                    let F = l[f];
                    F && F[0] === " " && (F = F.split(""), F[0] = "+", F = F.join("")), g.value.phone = F
                } else f === "country" && l[f] ? c.value = countries[l[f]] : f === "address" && !l[f] && l.address1 ? u.value[f] = l.address1 : u.value[f] = l[f]
        });
        return await Promise.all(h), {
            formFieldsValue: u.value,
            formattedCountry: c.value,
            phoneCountryIncluded: g.value
        }
    },
    getCountryFieldValue = (e, t) => {
        const r = ref(e),
            a = ref(t);
        return a.value && (r.value.country = Object.keys(countries).find(s => countries[s] === a.value)), {
            formFieldsValue: r.value
        }
    },
    getHiddenFieldValue = async (e, t, r) => {
        const a = e.query,
            s = ref(r),
            o = t.map(i => {
                i.hidden && i.type != "source" && (!i.hiddenFieldQueryKey || !(i.hiddenFieldQueryKey in a)) && (s.value[i.tag] = s.value[i.tag] || i.hiddenFieldValue)
            });
        return await Promise.all(o), {
            formFieldsValue: s.value
        }
    },
    getTotalFilesSize = e => {
        let t = 0;
        return Object.keys(e).forEach(r => {
            if (e[r] instanceof File) t += e[r].size;
            else if (e[r] && e[r].hasOwnProperty("files")) {
                let a = e[r].files.length;
                for (let s = 0; s < a; s++) t += e[r].files[s].size
            }
        }), t
    },
    usePreviewStyle = () => {
        const e = ref({}),
            t = () => {
                var o, i, u, g, c, l, h, f, F, O, x, d, n, m, y, p, S, C, T, A, P, v, b, w;
                return {
                    backgroundColor: "#" + ((o = e.value) == null ? void 0 : o.bgColor),
                    color: "#" + ((i = e.value) == null ? void 0 : i.color),
                    border: ((u = e.value) == null ? void 0 : u.border) + "px " + ((g = e.value) == null ? void 0 : g.borderStyle) + " #" + e.value.borderColor,
                    borderRadius: e.value.radius + "px",
                    maxWidth: e.value.width + "px",
                    width: "100%",
                    marginTop: e.value.marginTop ? (c = e.value) == null ? void 0 : c.marginTop : "",
                    borderColor: "#" + ((l = e.value) == null ? void 0 : l.borderColor),
                    paddingTop: parseFloat((f = (h = e.value) == null ? void 0 : h.padding) == null ? void 0 : f.top) + "px",
                    paddingBottom: parseFloat((O = (F = e.value) == null ? void 0 : F.padding) == null ? void 0 : O.bottom) + "px",
                    paddingLeft: parseFloat((d = (x = e.value) == null ? void 0 : x.padding) == null ? void 0 : d.left) + "px",
                    paddingRight: parseFloat((m = (n = e.value) == null ? void 0 : n.padding) == null ? void 0 : m.right) + "px",
                    boxShadow: ((p = (y = e.value) == null ? void 0 : y.shadow) == null ? void 0 : p.horizontal) + "px " + ((C = (S = e.value) == null ? void 0 : S.shadow) == null ? void 0 : C.vertical) + "px " + ((A = (T = e.value) == null ? void 0 : T.shadow) == null ? void 0 : A.blur) + "px " + ((v = (P = e.value) == null ? void 0 : P.shadow) == null ? void 0 : v.spread) + "px #" + ((w = (b = e.value) == null ? void 0 : b.shadow) == null ? void 0 : w.color)
                }
            },
            r = () => {
                var o, i, u, g, c, l, h, f, F, O, x, d, n, m, y, p, S, C, T, A, P, v, b, w, E, _, I, Y;
                return {
                    backgroundColor: "#" + ((o = e.value) == null ? void 0 : o.bgColor),
                    color: "#" + ((i = e.value) == null ? void 0 : i.color),
                    border: ((u = e.value) == null ? void 0 : u.border) + "px " + ((g = e.value) == null ? void 0 : g.borderStyle) + " #" + ((c = e.value) == null ? void 0 : c.borderColor),
                    borderRadius: ((l = e.value) == null ? void 0 : l.radius) + "px",
                    maxWidth: ((h = e.value) == null ? void 0 : h.width) + "px",
                    width: "100%",
                    marginTop: (f = e.value) != null && f.marginTop ? (F = e.value) == null ? void 0 : F.marginTop : "",
                    borderColor: "#" + ((O = e.value) == null ? void 0 : O.borderColor),
                    paddingTop: parseFloat((d = (x = e.value) == null ? void 0 : x.padding) == null ? void 0 : d.top) + "px",
                    paddingBottom: parseFloat((m = (n = e.value) == null ? void 0 : n.padding) == null ? void 0 : m.bottom) + "px",
                    paddingLeft: ((p = (y = e.value) == null ? void 0 : y.padding) == null ? void 0 : p.left) + "px",
                    paddingRight: ((C = (S = e.value) == null ? void 0 : S.padding) == null ? void 0 : C.right) + "px",
                    boxShadow: ((A = (T = e.value) == null ? void 0 : T.shadow) == null ? void 0 : A.horizontal) + "px " + ((v = (P = e.value) == null ? void 0 : P.shadow) == null ? void 0 : v.vertical) + "px " + ((w = (b = e.value) == null ? void 0 : b.shadow) == null ? void 0 : w.blur) + "px " + ((_ = (E = e.value) == null ? void 0 : E.shadow) == null ? void 0 : _.spread) + "px #" + ((Y = (I = e.value) == null ? void 0 : I.shadow) == null ? void 0 : Y.color)
                }
            },
            a = (o, i) => {
                var u, g, c, l;
                e.value = {
                    bgColor: o == null ? void 0 : o.background,
                    border: (u = o == null ? void 0 : o.border) == null ? void 0 : u.border,
                    borderStyle: (g = o == null ? void 0 : o.border) == null ? void 0 : g.style,
                    borderColor: (c = o == null ? void 0 : o.border) == null ? void 0 : c.color,
                    radius: (l = o == null ? void 0 : o.border) == null ? void 0 : l.radius,
                    width: i,
                    padding: (o == null ? void 0 : o.padding) || defaultPadding,
                    shadow: (o == null ? void 0 : o.shadow) || defaultShadow,
                    marginTop: o == null ? void 0 : o.marginTop
                }
            };
        return {
            getFormWidth: computed(() => {
                var o;
                return ((o = e == null ? void 0 : e.value) == null ? void 0 : o.width) || "auto"
            }),
            getFormStyle: t,
            setFormStyle: a,
            getSurveyStyle: r
        }
    },
    verifyRedirectedPayment = async (e, t, r, a) => {
        try {
            const s = usePreviewStore();
            useRouter().replace({
                query: void 0
            });
            const i = s.value.locationId;
            let u;
            if (r) {
                const g = {
                    altId: i,
                    altType: "location",
                    transactionId: r
                };
                u = await PaymentServices.verifyGenernalPayment(g)
            } else {
                let g;
                const c = sessionStorage.getItem(`formOrderResponse-${t}`);
                c && (g = JSON.parse(c));
                const l = {
                    altId: i,
                    altType: "location",
                    orderId: g.order._id,
                    paymentIntentId: e,
                    setupIntentId: a,
                    isAuth: !!a,
                    attribution: {
                        eventData: attributionEventData(),
                        sessionId: getSessionId(i),
                        sessionFingerprint: getSessionFingerprint(i)
                    }
                };
                u = await PaymentServices.verifyStripePayment(l)
            }
            if (u.success) return u;
            throw new Error(u.message)
        } catch {
            return window.alert("An error occured while trying to process your payment. Please try again."), !1
        } finally {
            sessionStorage.removeItem("formOrderResponse"), sessionStorage.removeItem("formContactResponse"), sessionStorage.removeItem("submissionResponse")
        }
    },
    findIdByQueryKey = (e, t) => {
        for (const r of e)
            if (r.hiddenFieldQueryKey === t && (r.Id || r.id)) return r.Id || r.id;
        return null
    },
    calculateScore = (form, formFields, tdata) => {
        const data = { ...tdata
            },
            scoreFields = form == null ? void 0 : form.fields.filter(e => e.dataType === "SCORE"),
            operatorsAndNumbers = ["←", "(", ")", "*", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "/", "0", "."],
            results = scoreFields.map(scoreField => {
                const calculation = scoreField == null ? void 0 : scoreField.calculation;
                if (!(calculation != null && calculation.length)) return null;
                const expression = calculation.map((e, t) => {
                    var a, s, o;
                    const r = findIdByQueryKey(formFields, e);
                    if (r !== null && (e = r), data[e]) {
                        const i = form == null ? void 0 : form.fields.find(c => (c == null ? void 0 : c.id) === e),
                            u = i == null ? void 0 : i.enableCalculations;
                        if (Array.isArray(i == null ? void 0 : i.picklistOptions) && i.picklistOptions.length > 0 && !u) return 0;
                        let g;
                        if (u && (g = i == null ? void 0 : i.calculatedOptions), (i == null ? void 0 : i.dataType) === "TEXTBOX_LIST" && typeof data[e] == "object") {
                            let c = 0;
                            for (const l in data[e])
                                if (data[e].hasOwnProperty(l) && typeof data[e][l] == "string" && data[e][l].trim() !== "") {
                                    const h = (a = i.picklistOptions.find(F => F.id === l)) == null ? void 0 : a.label,
                                        f = (s = g.find(F => F.label === h)) == null ? void 0 : s.calculatedValue;
                                    h && f && (c += parseFloat(f))
                                }
                            return c
                        }
                        if ((i == null ? void 0 : i.dataType) === "RATING" && ((o = data[e]) != null && o.rating)) return data[e].rating;
                        if (g) {
                            if (Array.isArray(data[e])) return data[e].reduce((c, l) => {
                                const h = g.find(f => f.label === l);
                                return c + (h && h.calculatedValue ? h.calculatedValue : 0)
                            }, 0); {
                                const c = g.find(l => l.label === data[e]);
                                return c && c.calculatedValue ? c.calculatedValue : 0
                            }
                        } else return typeof data[e] == "string" ? isNaN(parseFloat(data[e])) ? 0 : parseFloat(data[e]) : data[e]
                    } else return operatorsAndNumbers.includes(e) ? e : 0
                }).join("").split(" ").reduce((e, t, r, a) => r < a.length - 1 && a[r + 1] !== "." && !isNaN(Number(a[r + 1])) ? e + t : e + t + " ", "").trim();
                try {
                    const result = parseFloat(eval(expression.replace(/--/g, "- -")).toFixed(2));
                    return {
                        hiddenFieldQueryKey: scoreField.tag,
                        result
                    }
                } catch (e) {
                    return console.error("Error evaluating expression:", expression, e), {
                        hiddenFieldQueryKey: scoreField.tag,
                        result: 0
                    }
                }
            });
        return results.filter(e => e !== null)
    },
    validURL = e => {
        var t = urlRegex;
        return !!t.test(e)
    },
    calculateProductScore = (e, t, r) => {
        let a = [];
        return a = t.reduce((o, i) => [...o, ...i.slideData], []), calculateScore({
            fields: a
        }, a, e).forEach(({
            hiddenFieldQueryKey: o,
            result: i
        }) => {
            e[o] = i
        }), e
    },
    imageLoaded = (e, t) => {
        e && t && window.parent.postMessage(["highlevel.setHeight", {
            height: t.clientHeight,
            id: e
        }], "*")
    },
    calculateCategoryBaseScore = (e, t) => {
        let r = {};
        const a = {};
        return e.forEach(s => {
            r[s.value] = 0, a[s.value] = 0
        }), r.overAllScore = 0, a.overAllScore = 0, t.forEach(s => {
            let o = {},
                i = 0;
            s.slideData.forEach(u => {
                if (u.scoreByCategory) {
                    let g = u.scoreByCategory;
                    if (fieldTypeMaxScore.includes(u.dataType)) {
                        const c = getMaxScoreFromOptions(g, a);
                        i = c.maxScoreOutOfAllOptions, o = c.initialFieldLevelCategorybase
                    } else {
                        const c = getSumScoreFromOptions(g, a);
                        i = c.maxScoreOutOfAllOptions, o = c.initialFieldLevelCategorybase
                    }
                }
            }), Object.keys(o).forEach(u => {
                if (u !== "overAllScore") {
                    const g = o[u];
                    r[u] += g, o[u] = 0
                }
            }), r.overAllScore += i
        }), r
    },
    getMaxScoreFromOptions = (e, t, r) => {
        let a = 0,
            s = Object.assign({}, t);
        return Object.keys(e).forEach(o => {
            const i = e[o],
                u = s[i.category] < i.score ? i.score : s[i.category];
            s[i.category] = u, a = a < i.score ? i.score : a
        }), {
            maxScoreOutOfAllOptions: a,
            initialFieldLevelCategorybase: s
        }
    },
    getSumScoreFromOptions = (e, t) => {
        let r = 0,
            a = Object.assign({}, t);
        return Object.keys(e).forEach(s => {
            const o = e[s];
            o.category !== "overAllScore" && (a[o.category] += o.score), r += o.score
        }), {
            maxScoreOutOfAllOptions: r,
            initialFieldLevelCategorybase: a
        }
    },
    convertDataToFormDataType = async e => {
        const t = new FormData,
            r = Object.keys(e),
            a = {};
        return r.forEach(async s => {
            var o;
            if (e[s] instanceof File) t.append(s, e[s]);
            else if ((o = e[s]) != null && o.files) {
                const i = Object.values(e[s].files);
                i.length && await Promise.all(i.map(u => {
                    t.append(s, u)
                }))
            } else a[s] = e[s]
        }), {
            bodyFormData: t,
            formData: a
        }
    },
    findFieldFromSlides = (e, t, r) => {
        var o;
        let a = t[e];
        return (o = r[a]) == null ? void 0 : o.slideData.find(i => i.tag === e)
    },
    calculateCategoryPointScored = (e, t, r, a) => {
        const s = Object.keys(t),
            o = {};
        return e.forEach(i => {
            o[i.value] = 0
        }), o.overAllScore = 0, s.forEach(i => {
            const u = findFieldFromSlides(i, r, a);
            if (u && u.scoreByCategory && Array.isArray(u.picklistOptions) && u.picklistOptions.length) {
                if (fieldTypeMaxScore.includes(u == null ? void 0 : u.dataType)) {
                    const g = ((u == null ? void 0 : u.picklistOptions) ? ? []).findIndex(l => l == t[i]),
                        c = u.scoreByCategory[g];
                    g >= 0 && c && (o[c.category] += c.score, o.overAllScore += c.category === "overAllScore" ? 0 : c.score)
                }
                fieldTypeSumScore.includes(u == null ? void 0 : u.dataType) && t[i].forEach(g => {
                    const c = ((u == null ? void 0 : u.picklistOptions) ? ? []).findIndex(h => h == g),
                        l = u.scoreByCategory[c];
                    c >= 0 && l && (o[l.category] += l.score, o.overAllScore += l.category === "overAllScore" ? 0 : l.score)
                })
            }
        }), o
    },
    percentage = (e, t) => parseFloat((e / t * 100).toFixed(2)) || 0,
    getScoreFormat = (e, t, r) => r === SCORE_FORMAT.PERCENTAGE ? percentage(e, t) : r === SCORE_FORMAT.OUT_OF_10 ? parseFloat((percentage(e, t) / 10).toFixed(2)) || 0 : e,
    calculateCategoryPercentage = (e, t, r, a) => {
        var F, O, x, d, n;
        const s = [],
            o = [],
            i = Object.keys(t),
            u = {},
            g = {},
            c = {},
            l = ((O = (F = a.sections.find(m => m.type === "categoryScoreSettings")) == null ? void 0 : F.config) == null ? void 0 : O.scoreFormat) || "percentage",
            h = ((d = (x = a.sections.find(m => m.type === "overallScoreSettings")) == null ? void 0 : x.config) == null ? void 0 : d.overallScoreFormat) || "percentage";
        e.forEach(m => u[m.value] = m.label), i.forEach(m => {
            if (m !== "overAllScore") {
                const y = e.find(C => C.value === m).id;
                s.push({
                    label: u[m],
                    value: m,
                    id: y
                });
                const p = getScoreFormat(r[m], t[m], l),
                    S = getTierForCategory(p, t[m], l, a.tiers);
                o.push(p), g[m] = p, c[y] = {
                    score: p,
                    tier: S.label
                }
            }
        });
        const f = getScoreFormat(r.overAllScore, t.overAllScore, h);
        return c.overAllScore = {
            score: f,
            tier: (n = getTierForCategory(f, t.overAllScore, h, a.tiers)) == null ? void 0 : n.label
        }, {
            category: s,
            categoryScore: o,
            overAllScore: f,
            categoryWithScore: g,
            categoryCustomFields: c
        }
    },
    calculatePercentage = (e, t, r) => r === SCORE_FORMAT.PERCENTAGE ? e : r === SCORE_FORMAT.ACTUAL_SCORE ? t ? (e / t * 100).toFixed(2) : 0 : r === SCORE_FORMAT.OUT_OF_10 ? e * 10 : e,
    getTierForCategory = (e, t, r, a) => {
        const s = calculatePercentage(e, t, r);
        return a == null ? void 0 : a.find(o => s >= o.fromPercent && s <= o.toPercent)
    },
    getContact = e => ({
        fullName: e.full_name,
        emailId: e.email,
        phoneNumber: e.phone,
        address: e.address1,
        city: e.city,
        state: e.state,
        zipcode: e.postal_code,
        country: e.country,
        companyName: e.company_name
    }),
    getHighestLowestScoreCategory = (e, t, r) => {
        var u, g;
        let a = {
                highestScoreCategory: "",
                highestScore: 0
            },
            s = {
                lowestScoreCategory: "",
                lowestScore: 1 / 0
            };
        const o = ((g = (u = r.sections.find(c => c.type === "categoryScoreSettings")) == null ? void 0 : u.config) == null ? void 0 : g.scoreFormat) || "percentage";
        for (const c in e) e[c] > a.highestScore && (a = {
            highestScoreCategory: t.find(l => l.value === c).label,
            highestScore: e[c]
        }), e[c] < s.lowestScore && (s = {
            lowestScoreCategory: t.find(l => l.value === c).label,
            lowestScore: e[c]
        });
        s.lowestScore = getScoreAsPerFormatWithSymbol(s.lowestScore, o), a.highestScore = getScoreAsPerFormatWithSymbol(a.highestScore, o);
        let i = {
            highestCategoryName: a.highestScoreCategory,
            highestCategoryScore: a.highestScore,
            lowestCategoryName: s.lowestScoreCategory,
            lowestCategoryScore: s.lowestScore
        };
        return {
            highestScoreCategory: a,
            lowestScoreCategory: s,
            customCategoryCustomField: i
        }
    },
    mapCustomFielsForCategory = (e, t) => ({
        categoryCustomFields: e.reduce((a, s) => {
            var o, i;
            if (t[s.categoryId]) return a = { ...a,
                [s.id]: s.type == "tier" ? (o = t[s.categoryId]) == null ? void 0 : o.tier : ((i = t[s.categoryId]) == null ? void 0 : i.score) ? ? t[s.categoryId]
            }
        }, {})
    }),
    configureFooterStyles = (e, t) => {
        var s, o, i, u, g, c, l, h, f, F, O, x, d, n, m, y;
        let r = {},
            a = {};
        if ("footerStyle" in e) {
            const p = e.footerStyle;
            p.progressBarStyle;
            const S = p.buttonStyle;
            if ((i = (o = (s = p == null ? void 0 : p.computedStyles) == null ? void 0 : s.styles) == null ? void 0 : o.footer) != null && i.fontFamily) {
                const C = `'${p.computedStyles.styles.footer.fontFamily}'`;
                p.computedStyles.styles.footer.fontFamily = C
            }
            r = {
                borderRadius: t().borderRadius || 0,
                theme: p.theme || "steps",
                enableProgressBar: p.enableProgressBar ? ? !0,
                stickyFooter: p.stickyFooter ? ? !1,
                buttonStyle: {
                    fontColor: S.fontColor || "FFFFFF",
                    prevBtnText: S.prevBtnText || "PREV",
                    nextBtnText: S.nextBtnText || "NEXT",
                    submitBtnText: S.submitBtnText || "SUBMIT"
                },
                computedStyles: p.computedStyles
            }
        }
        if ("mobileFooterStyle" in e && e.mobileFooterStyle) {
            const p = e.mobileFooterStyle,
                S = JSON.parse(JSON.stringify(p));
            if ((c = (g = (u = S == null ? void 0 : S.computedStyles) == null ? void 0 : u.styles) == null ? void 0 : g.footer) != null && c.fontFamily) {
                const C = `'${S.computedStyles.styles.footer.fontFamily}'`;
                S.computedStyles.styles.footer.fontFamily = C
            }
            if (p.fontFamily && ((h = (l = S == null ? void 0 : S.computedStyles) == null ? void 0 : l.styles) != null && h.footer)) {
                const C = `'${p.fontFamily}'`;
                S.computedStyles.styles.footer.fontFamily = C
            }
            a = {
                borderRadius: t().borderRadius || 0,
                theme: S.theme || r.theme || "steps",
                enableProgressBar: S.enableProgressBar ? ? r.enableProgressBar ? ? !0,
                stickyFooter: S.stickyFooter ? ? r.stickyFooter ? ? !1,
                buttonStyle: {
                    fontColor: ((f = S.buttonStyle) == null ? void 0 : f.fontColor) || ((F = r.buttonStyle) == null ? void 0 : F.fontColor) || "FFFFFF",
                    prevBtnText: ((O = S.buttonStyle) == null ? void 0 : O.prevBtnText) || ((x = r.buttonStyle) == null ? void 0 : x.prevBtnText) || "PREV",
                    nextBtnText: ((d = S.buttonStyle) == null ? void 0 : d.nextBtnText) || ((n = r.buttonStyle) == null ? void 0 : n.nextBtnText) || "NEXT",
                    submitBtnText: ((m = S.buttonStyle) == null ? void 0 : m.submitBtnText) || ((y = r.buttonStyle) == null ? void 0 : y.submitBtnText) || "SUBMIT"
                },
                computedStyles: S.computedStyles
            }
        } else a = r;
        return {
            footerStyle: r,
            mobileFooterStyle: a
        }
    },
    getScoreAsPerFormatWithSymbol = (e, t) => t === SCORE_FORMAT.PERCENTAGE ? e + "%" : t === SCORE_FORMAT.ACTUAL_SCORE ? e : t === SCORE_FORMAT.OUT_OF_10 ? e + "/10" : e;

function internalLog(...e) {
    getUriParams("internalLog") && getUriParams("internalLog") == "ghl_team" && console.log(e)
}

function isInIframe() {
    try {
        return window.self !== window.top
    } catch {
        return !0
    }
}

function guessUrl(e, t) {
    let r = e;
    if (e || (r = document.location.href), r && t) {
        let a = new URL(r);
        internalLog("function guessUrl: ", r, t), Object.keys(t).forEach(s => {
            a.searchParams.has(s) || a.searchParams.append(s, t[s])
        }), internalLog("function guessUrl newer url: ", a.href), r = a.href
    }
    return !e && isInIframe() && (r = document.referrer || r), r
}

function uriParams(e) {
    const t = {};
    if (!e) return t;
    try {
        return new URL(e).searchParams.forEach((a, s) => {
            t[s] = a
        }), t
    } catch {
        return console.error("full url missing: ", e), t
    }
}

function getUriParams(e, t) {
    const r = uriParams(t || guessUrl());
    return e in r ? r[e] : ""
}

function getCampaign(e) {
    return getUriParams("utm_campaign", e) || getUriParams("campaign", e)
}

function getKeyword(e) {
    return getUriParams("keyword", e) || getUriParams("utm_term", e) || getUriParams("utm_content", e)
}

function getAdSource(e) {
    if (getUriParams("gclid", e)) return "adword";
    if (getUriParams("msclkid", e)) return "bing";
    if (getUriParams("dclid", e)) return "yahoo";
    const t = getUriParams("utm_source", e),
        r = getCampaign(e);
    return t && t.toLowerCase() == "facebook" && r ? "facebook" : t && t.toLowerCase() == "fb_ad" && r ? "fb_ad" : t && t.toLowerCase() == "linkedin_ad" && r ? "linkedin_ad" : t && t.toLowerCase() == "twitter_ad" && r ? "twitter_ad" : ""
}

function getBaseUrl() {
    return `${useRuntimeConfig().public.REST_API_URLS}/attribution_service`
}

function referrer(e, t) {
    const r = getUriParams("rf");
    if (r && typeof r == "string" && r == "false") return "";
    let a;
    try {
        t && typeof t == "string" && (a = new URL(t).host)
    } catch {}
    if (e && !e.includes(a)) return e;
    const s = getUriParams("hl_referrer");
    return s || (!isInIframe() && document.referrer && !document.referrer.includes(document.location.origin) ? document.referrer : "")
}

function getReferrerSource(e, t) {
    if (e === "") return "direct";
    if (e.includes("google")) return t.includes("gclid") ? "google paid" : "google organic";
    if (e.includes("twitter")) return "twitter";
    if (e.includes("bing")) return t.includes("msclkid") ? "bing paid" : "bing organic";
    if (e.includes("facebook")) return "facebook";
    if (e.includes("yahoo")) return t.includes("dclid") || t.includes("yahoo") ? "yahoo paid" : "yahoo organic";
    if (e.includes("duckduckgo")) return "duckduckgo"; {
        const r = document.createElement("a");
        return r.setAttribute("href", e), r.hostname
    }
}

function isLocalStorageAccessible(e) {
    try {
        const t = window[e],
            r = "__storage_test__";
        return t.setItem(r, r), t.removeItem(r), !0
    } catch {
        return !1
    }
}

function getStorageItem(e) {
    if (isLocalStorageAccessible("localStorage")) return localStorage.getItem(e)
}

function setStorageItem(e, t) {
    isLocalStorageAccessible("localStorage") && localStorage.setItem(e, t)
}

function removeStorageItem(e) {
    isLocalStorageAccessible("localStorage") && localStorage.removeItem(e)
}

function getCookieFromLocalStore(e) {
    if (!isLocalStorageAccessible("localStorage")) return;
    const t = localStorage.getItem(e);
    if (!t) return null;
    const r = JSON.parse(t);
    return new Date().getTime() > r.expiry ? (localStorage.removeItem(e), null) : r.value
}

function getAttributionCookie(e) {
    const t = getCookieFromLocalStore(e);
    if (t) return t;
    const r = e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
        a = document.cookie.match(new RegExp("(^| )" + r + "=([^;]+)"));
    return a && a[2] ? a[2] : ""
}

function setCookiesOnLocalStorage(e, t, r) {
    if (!isLocalStorageAccessible("localStorage")) return;
    const s = {
        value: t,
        expiry: new Date().getTime() + r
    };
    localStorage.setItem(e, JSON.stringify(s))
}

function setCookie(e, t, r) {
    if (isLocalStorageAccessible("localStorage")) {
        var a = 31536e6;
        r && (a = r * 24 * 60 * 60 * 1e3), setCookiesOnLocalStorage(e, t, a)
    } else {
        let s = "";
        if (r) {
            let o = new Date;
            o.setTime(o.getTime() + r * 24 * 60 * 60 * 1e3), s = "; expires=" + o.toUTCString()
        }
        document.cookie = e + "=" + (t || "") + s + "; path=/"
    }
}

function setCookieMinute(e, t, r) {
    if (isLocalStorageAccessible("localStorage")) r || (r = 1), setCookiesOnLocalStorage(e, t, r * 60 * 1e3);
    else {
        let a = "";
        if (r) {
            const s = new Date;
            s.setTime(s.getTime() + r * 60 * 1e3), a = "; expires=" + s.toUTCString()
        }
        document.cookie = e + "=" + (t || "") + a + "; path=/"
    }
}

function historyKey(e) {
    return e = e || getAttributionCookie("location_id"), e ? `${HISTORY_KEY}_${e}` : HISTORY_KEY
}

function userSessionKey(e) {
    return e = e || getAttributionCookie("location_id"), e ? `${USER_SESSION_KEY}${e}_session_id` : `${USER_SESSION_KEY}id`
}

function contactSessionHistoriesKey(e) {
    return e = e || getAttributionCookie("location_id"), `${USER_SESSION_HISTORY_KEY}${e}`
}

function userFingerprintKey(e) {
    return e = e || getAttributionCookie("location_id"), `${USER_FINGERPRINT_KEY}${e}_fingerprint`
}

function firstSessionKey(e) {
    return `${FIRST_EVENT_KEY}${e}`
}

function isBot() {
    return /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent)
}
async function request(e, t) {
    try {
        var r = await fetch(e, {
            method: "POST",
            body: JSON.stringify(t),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await r.json()
    } catch {
        return {}
    }
}

function getFBP() {
    return getAttributionCookie("_fbp")
}

function getFBC() {
    return getAttributionCookie("_fbc")
}

function parseJSON(e) {
    if (!e) return null;
    try {
        return JSON.parse(e)
    } catch (t) {
        return console.error(t), null
    }
}
class UserSessionAttribution {
    constructor(t, r) {
        L(this, "baseUrl");
        L(this, "locationId");
        L(this, "fingerprint");
        L(this, "type");
        L(this, "parentId");
        L(this, "parentName");
        this.baseUrl = getBaseUrl(), this.locationId = t, this.fingerprint = r
    }
    eventData(t, r) {
        let a, s;
        if (this.locationId) {
            let i = getStorageItem(contactSessionHistoriesKey(this.locationId));
            i && (a = i), s = getAttributionCookie(firstSessionKey(this.locationId))
        }
        internalLog("function eventData: ", this.locationId, s);
        let o = guessUrl(t, s == null ? void 0 : s.url_params);
        return {
            source: getReferrerSource(referrer(r, t), document.location.href),
            referrer: referrer(r, t) || (s == null ? void 0 : s.referrer) || "",
            keyword: getKeyword(o),
            adSource: getAdSource(o),
            url_params: uriParams(o),
            page: {
                url: o,
                title: document.title
            },
            timestamp: Date.now(),
            campaign: getCampaign(o),
            contactSessionIds: parseJSON(a),
            fbp: getFBP(),
            fbc: getFBC()
        }
    }
    pageVisitData(t, r, a) {
        return internalLog("function pageVisitData: ", t, r, a), { ...this.eventData(t, r),
            type: "page-visit",
            parentId: getUriParams("trigger_link") ? getUriParams("trigger_link") : this.parentId || "",
            pageVisitType: getUriParams("trigger_link") ? "trigger-link" : this.type || "",
            domain: document.domain,
            version: "v3",
            parentName: this.parentName || "",
            fingerprint: null,
            documentURL: document == null ? void 0 : document.URL,
            ...a
        }
    }
    async store(t, r, a, s, o, i, u) {
        internalLog("extras form script: ", u), this.locationId = t;
        var g = this.fingerprint || getAttributionCookie("fingerprint"),
            c = getAttributionCookie(userSessionKey(t));
        if (this.type = r, this.parentId = a, this.parentName = s, isBot()) return;
        const l = referrer(i, o);
        if (c || setCookieMinute(userSessionKey(t), "temp", 1), c == "temp") return;
        c || (internalLog(`Not found sessionId so removing older sessions: ${userSessionKey(t)}`), removeStorageItem(historyKey(t))), c && setCookieMinute(userSessionKey(t), c, 30);
        let h = parseJSON(getStorageItem(historyKey(t)));
        if (internalLog("function store: history", h), h && h.sessions) {
            const d = h.sessions[h.sessions.length - 1],
                n = getAttributionCookie(firstSessionKey(t));
            let m = guessUrl(o, n == null ? void 0 : n.url_params);
            (d.referrer != (referrer(i, o) || (n == null ? void 0 : n.referrer) || "") || d.campaign != getCampaign(m)) && (internalLog(`Referrer and campaign change > newReferrer: ${referrer(i,o)} > old referrer: ${d.referrer}`), h = null, c = null, removeStorageItem(historyKey(t)))
        }
        if (h)
            if (c && h && r != "call-swap") {
                internalLog("function store: sessionId & history", c, h);
                var O = h.sessions,
                    x = this.pageVisitData(o, i, u);
                internalLog("function store: newSession", x);
                try {
                    var F = await request(`${this.baseUrl}/user_session_v3/update_session/${c}`, {
                        locationId: t,
                        sessions: x
                    });
                    x.fingerprint = F.fingerprint, setStorageItem(historyKey(t), JSON.stringify({
                        sessions: [...O, x]
                    }))
                } catch (d) {
                    console.error(d)
                }
            } else removeStorageItem(historyKey(t)), await this.store(t, r, a, s, o, i);
        else {
            var f = this.pageVisitData(o, i, u);
            internalLog("function store: sessions", f);
            try {
                var F = await request(`${this.baseUrl}/user_session_v3/create_session`, {
                    sessions: f,
                    initialReferrer: l,
                    locationId: t,
                    fingerprint: g,
                    sessionId: c
                });
                (!c || c != F.sessionId) && setCookieMinute(userSessionKey(t), F.sessionId, 30), f.fingerprint = F.fingerprint, setStorageItem(historyKey(t), JSON.stringify({
                    sessions: [f]
                }));
                let d = parseJSON(getStorageItem(contactSessionHistoriesKey(t)));
                d ? d.ids.push(F.sessionId) : (d = {
                    ids: [F.sessionId]
                }, setCookieMinute(firstSessionKey(t), f, 30)), internalLog("function store: contactSessionIds", d), setStorageItem(contactSessionHistoriesKey(t), JSON.stringify(d))
            } catch (d) {
                console.error(d), removeStorageItem(historyKey(t))
            }
        }
    }
    async create(t, r, a, s, o, i, u) {
        this.locationId = t;
        var g = getAttributionCookie(userSessionKey(t)),
            c = getUriParams("sessionId");
        let l = 10;
        (!g || g == "temp") && (l = 100), setTimeout(async () => {
            c && setCookie(userSessionKey(t), c, 365), await this.store(t, r, a, s, o, i, u)
        }, l)
    }
    update(t) {
        const r = t.sessionId || "",
            a = t.locationId || "";
        this.locationId = a, r && (setCookieMinute(userSessionKey(a), r, 30), removeStorageItem(contactSessionHistoriesKey(a)))
    }
    getCookie(t) {
        return getAttributionCookie(t)
    }
    setCookies(t, r) {
        t && r && setCookie(t, r)
    }
    getSessionId(t) {
        return getAttributionCookie(userSessionKey(t || this.locationId))
    }
    getUserFingerprint(t) {
        return getAttributionCookie(userFingerprintKey(t || this.locationId))
    }
    setUserFingerprint(t, r) {
        return setCookie(userFingerprintKey(t || this.locationId), r)
    }
}
const setupSession = async () => {
    var e = typeof window > "u" ? {} : window,
        t = e.userSessionAttribution;
    t || (t = e.userSessionAttribution = new UserSessionAttribution)
};
export {
    validPhone as A, validUrl as B, urlRegex as C, verifyEmail as D, validEmail as E, isDateEarlier as F, hasAlphabet as G, getFBC as a, calculateProductScore as b, customParseFormat as c, calculateCategoryBaseScore as d, fillDataForStandardFieldUri as e, fillDataFromCookie as f, getFBP as g, getTotalFilesSize as h, imageLoaded as i, getCountryFieldValue as j, getHiddenFieldValue as k, calculateCategoryPointScored as l, calculateCategoryPercentage as m, getHighestLowestScoreCategory as n, mapCustomFielsForCategory as o, convertDataToFormDataType as p, configureFooterStyles as q, referrer as r, setupSession as s, isEmpty as t, usePreviewStyle as u, validURL as v, emailRegex as w, verifyRedirectedPayment as x, calculateScore as y, getContact as z
};