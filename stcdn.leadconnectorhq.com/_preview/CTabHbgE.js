const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./ghl-payment-element.CtMdMWLI.css", "./PaymentElementComponent.BtAYlWo5.css", "./PaymentElementModal.P3XEehDC.css"]))) => i.map(i => d[i]);
import {
    d as qt,
    R as Ht,
    a0 as Jt,
    x as zt,
    X as Ae,
    r as y,
    c as Me,
    P as C,
    Z as Gt,
    o as Kt,
    a as k,
    b as L,
    u as g,
    n as ot,
    l as se,
    W as st,
    e as $,
    i as R,
    t as ee,
    k as Ue,
    A as Yt,
    C as Zt,
    q as Qt,
    h as Xt,
    F as jt,
    D as ea,
    E as le,
    bF as lt,
    a2 as it,
    a3 as ut,
    L as ta,
    au as ct,
    bV as Fe,
    aW as ve,
    bS as dt,
    bE as mt,
    bW as vt,
    bX as Oe,
    bY as pt,
    bD as yt,
    m as $e,
    p as Be
} from "./B9OM7hcI.js";
import {
    _ as aa
} from "./DYa7OZHt.js";
import {
    u as ra,
    S as E,
    E as Z
} from "./CEB7salD.js";
import {
    t as na,
    f as oa
} from "./CbjVgXQI.js";
import {
    O as pe,
    P as Q,
    l as sa,
    a as ke,
    g as Te,
    b as xe,
    d as la
} from "./DsyfCw_n.js";
import {
    F as ft
} from "./CnIBf1qr.js";
import {
    h as ia,
    f as De,
    b as ua,
    g as ca,
    d as da,
    e as ma
} from "./CyCjBwx_.js";
import {
    p as va
} from "./wwLfBoTf.js";
import {
    u as pa
} from "./DFjEOqR1.js";
import {
    _ as ya
} from "./cm-iVpCL.js";
import "./Beb5rGIG.js";
import "./CYdWzSOm.js";
import "./BY3P0NWT.js";
import "./BIT_1gNy.js";
import "./cU-0lJ0a.js";
import "./GYFywdtQ.js";
import "./ekdnFpMp.js";
import "./CJeQ8DBJ.js";
import "./DW-3PSLe.js";
import "./BzgFeTSe.js";
const fa = $e(() => Be(() =>
        import ("./DndcbSaU.js"), [],
        import.meta.url).then(p => p.default || p)),
    _a = $e(() => Be(() =>
        import ("./4YoHUd__.js"), __vite__mapDeps([0, 1]),
        import.meta.url).then(p => p.default || p)),
    ha = $e(() => Be(() =>
        import ("./C8izfCGX.js"), __vite__mapDeps([0, 2]),
        import.meta.url).then(p => p.default || p)),
    ga = ["id", "href", "target", "rel", "data-animation-class", "aria-label"],
    Pa = {
        key: 0,
        style: {
            "margin-right": "5px"
        },
        class: "button-icon-start"
    },
    Ia = {
        class: "main-heading-button"
    },
    ba = {
        key: 1,
        style: {
            "margin-left": "5px"
        },
        class: "button-icon-end"
    },
    Ea = {
        class: "sub-heading-button"
    },
    Sa = {
        key: 1,
        class: "recaptcha-container button-recaptcha-container"
    },
    wa = {
        key: 0
    },
    Oa = ["disabled", "data-animation-class", "id", "aria-label"],
    ka = {
        key: 0,
        class: "button-icon-start"
    },
    Ta = {
        class: "main-heading-button"
    },
    xa = {
        key: 1,
        class: "button-icon-end"
    },
    Ca = {
        class: "sub-heading-button"
    },
    La = {
        class: "btn-loader-position",
        style: {
            left: "50%",
            position: "absolute",
            top: "50%",
            transform: "translate(-50%, -50%)"
        }
    },
    Ra = {
        key: 0
    },
    Na = ["id"],
    Aa = {
        key: 0,
        class: "card-el-error-msg"
    },
    Ma = {
        key: 3,
        class: "card-el-error-msg error-message",
        style: {
            "justify-content": "center"
        }
    },
    Ua = {
        inheritAttrs: !1
    },
    rr = qt({ ...Ua,
        __name: "Button",
        props: {
            element: {
                type: Object,
                required: !0
            },
            classStyles: {
                type: Array,
                required: !0
            }
        },
        setup(p) {
            var Xe, je, et, tt, at, rt, nt;
            const i = p,
                a = Ht(),
                {
                    openPopup: _t
                } = ra(),
                ye = Jt(i.element),
                {
                    call: ht,
                    createMembershipToken: Ve,
                    mailTo: gt,
                    sms: Pt,
                    goToNextFunnelStep: ie,
                    openUrl: Ce,
                    downloadFile: It,
                    getNextFunnelStepURL: bt,
                    goToStep: Et
                } = pa(),
                St = zt(),
                {
                    $bus: We
                } = St;
            let te = (je = (Xe = i.element.extra) == null ? void 0 : Xe.text) == null ? void 0 : je.value;
            te = Ae(te);
            let ae = (tt = (et = i.element.extra) == null ? void 0 : et.subText) == null ? void 0 : tt.value;
            ae = Ae(ae);
            const wt = a.value.funnelId,
                Ot = a.value.stepId,
                kt = a.value.funnelPageId,
                h = a.value.locationId,
                W = (nt = (rt = (at = i.element.extra) == null ? void 0 : at.productId) == null ? void 0 : rt.value) == null ? void 0 : nt.id,
                _ = y(!1),
                fe = y(!1),
                Le = y(""),
                Re = y(""),
                O = y(),
                qe = y(!1),
                _e = y(""),
                re = y(""),
                N = y(!1),
                q = y(!1),
                Tt = Me(() => {
                    var e;
                    return ((e = O.value) == null ? void 0 : e.price.type) === "recurring"
                }),
                u = y(),
                A = y(""),
                ue = y(!1),
                H = y(),
                ce = y(""),
                He = y(!1),
                D = y(!0),
                J = y(),
                Je = ea(),
                ze = y(),
                z = y({
                    mode: "payment",
                    amount: 0,
                    currency: "",
                    contact: {
                        id: "",
                        full_name: "",
                        email: "",
                        phone: "",
                        shippingAddress: {
                            city: "",
                            state: "",
                            country: "",
                            zipCode: "",
                            line1: ""
                        }
                    }
                }),
                he = y(),
                ge = y(),
                U = y({
                    mode: "payment",
                    amount: 0,
                    currency: "usd",
                    enableBNPL: !0,
                    paymentMethodConfiguration: a.value.isLivePaymentMode ? Je.public.STRIPE_DEFAULT_CONFIGURATION_LIVE : Je.public.STRIPE_DEFAULT_CONFIGURATION_TEST
                }),
                Ge = y(""),
                X = y(!1),
                {
                    action: {
                        value: j
                    },
                    visitWebsite: {
                        value: B
                    }
                } = i.element.extra,
                G = Me(() => {
                    var e;
                    return ((e = a.value.paymentProviderDetails) == null ? void 0 : e.provider) === C.CUSTOM_PROVIDER && !!a.value.customProviderPublishableKey && j === E.SELL_PRODUCT
                }),
                xt = async e => {
                    e.type === "ready" ? (D.value = !1, J.value = "", _.value = !1) : e.type === "processing" ? (N.value = !0, J.value = "") : e.type === "error" ? (e.message === "Request failed with status code 429" ? (H.value = void 0, ue.value = !0) : J.value = e.message, N.value = !1, D.value = !1) : e.type === "success" ? (J.value = "", N.value = !1, await Ct(e)) : e.type === "close" && (J.value = "Payment cancelled", N.value = !1, D.value = !1)
                },
                Ct = async e => {
                    try {
                        let t = localStorage.getItem("_ud");
                        t && (t = JSON.parse(t));
                        const {
                            paymentResponseData: l
                        } = await ia(t, e.data, e.provider, h);
                        await de(l)
                    } catch (t) {
                        J.value = t
                    } finally {
                        sessionStorage.removeItem("orderResponse"), sessionStorage.removeItem("contactResponse")
                    }
                },
                Ke = () => {
                    const e = (te ? ? "") + " " + (ae ? ? "");
                    if (te || ae) return e;
                    if (j === E.GO_TO_URL) {
                        const {
                            visitWebsite: {
                                value: t
                            }
                        } = i.element.extra;
                        return t == null ? void 0 : t.url
                    }
                    return e
                },
                Lt = e => {
                    if (!e) {
                        ce.value = "Verification failed! Please try again";
                        return
                    }
                    ce.value = "", H.value = e
                },
                Ye = [E.CLICK_TO_CALL, E.CLICK_TO_SMS, E.GO_TO_URL, E.GO_TO_STEP];
            Ye.includes(j) && (fe.value = !0, Gt(B == null ? void 0 : B.url) || (Le.value = Qe())), Kt(() => {
                Ye.includes(j) && (fe.value = !0, Le.value = Qe()), a.value.orderFormVersion === 2 && W && j === E.SELL_PRODUCT && (Rt(), he.value = JSON.parse(localStorage.getItem("_ud") || "{}").country)
            });
            async function Rt() {
                var e, t, l, c, d, m, o, f, v, P;
                try {
                    const r = await ft.findProductById({
                        productId: W
                    });
                    let S = localStorage.getItem("pmc_id");
                    U.value.paymentMethodConfiguration = S;
                    const M = (e = r == null ? void 0 : r.price) == null ? void 0 : e.setupFee,
                        T = (t = r == null ? void 0 : r.price) == null ? void 0 : t.trialPeriod,
                        w = (l = r == null ? void 0 : r.price) == null ? void 0 : l.amount,
                        I = M ? T ? M : w + M : T ? 0 : w;
                    r.amount = I, O.value = { ...r,
                        qty: 1,
                        amount: r.amount
                    }, re.value = (c = r == null ? void 0 : r.price) == null ? void 0 : c.currency, z.value.amount = O.value.amount, z.value.currency = re.value, z.value.mode = ((d = O.value) == null ? void 0 : d.price.type) === "recurring" ? "subscription" : "payment", z.value.productDetails = [{
                        productId: (m = r == null ? void 0 : r.product) == null ? void 0 : m._id,
                        priceId: (o = r == null ? void 0 : r.price) == null ? void 0 : o._id
                    }], U.value.amount = O.value.amount, U.value.currency = re.value.toLowerCase(), ((f = O.value) == null ? void 0 : f.price.type) === "recurring" ? U.value.mode = "subscription" : O.value.amount ? U.value.mode = "payment" : (U.value.mode = "setup", U.value.amount = void 0);
                    let n = localStorage.getItem("_ud");
                    n && (n = JSON.parse(n), z.value.contact = {
                        id: n == null ? void 0 : n.id,
                        full_name: n == null ? void 0 : n.full_name,
                        email: n == null ? void 0 : n.email,
                        phone: n == null ? void 0 : n.phone,
                        shippingAddress: {
                            city: n == null ? void 0 : n.city,
                            state: ge.value,
                            country: n == null ? void 0 : n.country,
                            zipCode: n == null ? void 0 : n.postal_code,
                            line1: n == null ? void 0 : n.address1
                        }
                    }), setTimeout(() => {
                        He.value = !0
                    }, 1e3)
                } catch (r) {
                    const S = ((P = (v = r == null ? void 0 : r.response) == null ? void 0 : v.data) == null ? void 0 : P.message) || (r == null ? void 0 : r.message) || "Not able to fetch products!";
                    console.error(S), alert("Not able to fetch products!")
                }
            }
            async function Nt() {
                var t, l, c, d, m, o, f, v, P, r, S, M, T, w, I, n, F, V, oe, Pe, Ie, be, Ee, Se;
                const {
                    action: e
                } = i.element.extra;
                switch (e.value) {
                    case "openPopup":
                        {
                            const s = ((t = i.element.extra.popupId) == null ? void 0 : t.value) ? ? "";na(a.value.stepId),
                            _t(s);
                            break
                        }
                    case "url":
                        {
                            const {
                                visitWebsite: s
                            } = i.element.extra;Ce(s.value);
                            break
                        }
                    case E.SHOW_HIDE_ELEMENT:
                        {
                            const {
                                hideElements: s,
                                showElements: x
                            } = i.element.extra;ut(s.value),
                            it(x.value);
                            break
                        }
                    case E.HIDE_ELEMENT:
                        {
                            const {
                                hideElements: s
                            } = i.element.extra;ut(s.value);
                            break
                        }
                    case E.SHOW_ELEMENT:
                        {
                            const {
                                showElements: s
                            } = i.element.extra;it(s.value);
                            break
                        }
                    case "scroll-to-element":
                        {
                            const {
                                scrollToElement: s
                            } = i.element.extra;We.$emit("scroll-to-element", s.value);
                            break
                        }
                    case "go-to-next-funnel-step":
                        {
                            _.value = !0,
                            ie();
                            break
                        }
                    case E.GO_TO_STEP:
                        {
                            _.value = !0,
                            ie(i.element.extra.stepPath.value);
                            break
                        }
                    case "sell-product":
                        {
                            if (_.value) return;_.value = !0;
                            const s = `_pl_${a.value.funnelId}`,
                                x = localStorage.getItem(s);
                            let b;
                            if (x && (b = JSON.parse(x)), a.value.orderFormVersion === 2) {
                                const we = le("provider").value;
                                if (((l = O.value) == null ? void 0 : l.amount) === 0) {
                                    const Y = Ze();
                                    if (!Y) return;
                                    const me = await De(h, Y);
                                    if (me.paymentProvider === "free-checkout" || !a.value.requireCreditCard) {
                                        const Ne = {
                                                altId: a.value.locationId,
                                                altType: "location",
                                                source: {
                                                    type: a.value.pageType === pe.FUNNEL ? pe.FUNNEL : pe.WEBINAR ? pe.WEBINAR : pe.WEBSITE,
                                                    id: a.value.funnelId,
                                                    name: a.value.funnelName
                                                },
                                                products: [{
                                                    id: O.value._id,
                                                    qty: 1
                                                }]
                                            },
                                            $t = await Q.getAmountSummary(Ne),
                                            Bt = ((c = O.value) == null ? void 0 : c.price.type) === "recurring",
                                            Vt = ((d = $t.recurringSummary) == null ? void 0 : d.subtotalWithDiscount) > 0,
                                            Wt = me.paymentProvider === "free-checkout";
                                        if (Bt && Vt || Wt) {
                                            ((o = (m = a.value) == null ? void 0 : m.paymentProviderDetails) == null ? void 0 : o.provider) === C.SQUARE && a.value.squareMerchantGatewayId ? K(Oe) : (await ne(), X.value = !0);
                                            return
                                        } else await ne(), N.value = !1, await de({});
                                        return
                                    }
                                }
                                if (O.value.amount > 0 && le("provider").value !== "pp") {
                                    const Y = Ze();
                                    if (!Y) return;
                                    if ((await De(h, Y)).paymentProvider === "free-checkout") {
                                        ((v = (f = a.value) == null ? void 0 : f.paymentProviderDetails) == null ? void 0 : v.provider) === C.SQUARE && a.value.squareMerchantGatewayId ? K(Oe) : (await ne(), X.value = !0);
                                        return
                                    }
                                }
                                if (we === C.CUSTOM_PROVIDER && (b != null && b.manualPaymentMethodId)) {
                                    K(lt, b == null ? void 0 : b.manualPaymentMethodId);
                                    return
                                }
                                if (le("provider").value === "pp") {
                                    qe.value = !0, K(mt);
                                    return
                                } else {
                                    if ((((r = (P = a.value) == null ? void 0 : P.paymentProviderDetails) == null ? void 0 : r.provider) === C.AUTHORIZE_NET || ((M = (S = a.value) == null ? void 0 : S.paymentProviderDetails) == null ? void 0 : M.provider) === C.WHITE_LABEL && ((w = (T = a.value) == null ? void 0 : T.paymentProviderDetails) == null ? void 0 : w.whiteLabelProvider) === C.AUTHORIZE_NET) && a.value.merchantLoginId) {
                                        K(yt);
                                        return
                                    } else if ((((n = (I = a.value) == null ? void 0 : I.paymentProviderDetails) == null ? void 0 : n.provider) === C.NMI || ((V = (F = a.value) == null ? void 0 : F.paymentProviderDetails) == null ? void 0 : V.provider) === C.WHITE_LABEL && ((Pe = (oe = a.value) == null ? void 0 : oe.paymentProviderDetails) == null ? void 0 : Pe.whiteLabelProvider) === C.NMI) && a.value.nmiMerchantGatewayId) {
                                        K(pt);
                                        return
                                    } else if (((be = (Ie = a.value) == null ? void 0 : Ie.paymentProviderDetails) == null ? void 0 : be.provider) === C.SQUARE && a.value.squareMerchantGatewayId) {
                                        K(Oe);
                                        return
                                    } else if (G.value) {
                                        await Dt(C.CUSTOM_PROVIDER);
                                        return
                                    } else if (((Se = (Ee = a.value) == null ? void 0 : Ee.paymentProviderDetails) == null ? void 0 : Se.provider) === C.ADYEN) {
                                        K(vt);
                                        return
                                    }
                                    const Y = a.value.stripePublishableKey,
                                        me = a.value.stripeAccountId,
                                        Ne = a.value.stripePublishableKey;
                                    if (Y && Ne) _e.value = await va.loadStripe(Y, {
                                        stripeAccount: me || void 0
                                    });
                                    else {
                                        alert("Stripe account not found!");
                                        return
                                    }
                                    At()
                                }
                            } else Mt();
                            break
                        }
                    case "click-to-call":
                        {
                            const s = i.element.extra;ht(s[Z.PHONE_NUMBER].value);
                            break
                        }
                    case "click-to-sms":
                        {
                            const s = i.element.extra;Pt(s[Z.PHONE_NUMBER].value);
                            break
                        }
                    case "click-to-mail":
                        {
                            const s = i.element.extra;gt(s[Z.EMAIL_ADDRESS].value);
                            break
                        }
                    case E.DOWNLOAD_FILE:
                        {
                            const s = i.element.extra;
                            if (s[Z.DOWNLOAD_FILE].value && s[Z.DOWNLOAD_FILE].value.fileUrl) {
                                q.value = !0;
                                try {
                                    await It(s[Z.DOWNLOAD_FILE].value)
                                } catch (x) {
                                    console.error("Download failed:", x)
                                } finally {
                                    q.value = !1
                                }
                            }
                            break
                        }
                    case E.GO_TO_MEMBERSHIP:
                        {
                            try {
                                let s;
                                const x = a.value.locationId,
                                    {
                                        ct: b,
                                        previewUrl: we
                                    } = le(`_mf_${x}`).value;
                                location.hostname === "localhost" ? s = `http://localhost:4040/library/?domain=${we}&token=${b}&location_id=${x}` : s = `${we}/library?&token=${b}&location_id=${x}`, Ce({
                                    url: s,
                                    newTab: !1
                                })
                            } catch {
                                alert("Sorry something went wrong.")
                            }
                            break
                        }
                    default:
                        console.error(`Invalid action type received: ${e.value}`)
                }
            }
            const Ze = () => {
                let e = localStorage.getItem("_ud");
                e && (e = JSON.parse(e), sessionStorage.setItem("contactResponse", JSON.stringify(e)));
                const t = e == null ? void 0 : e.customer_id;
                if (!t) {
                    A.value = "Contact not found!";
                    return
                }
                return t
            };

            function de(e) {
                var t, l, c, d, m, o, f;
                try {
                    const v = e == null ? void 0 : e.membershipPurchase;
                    v != null && v.length && Ve(h, v[0].token);
                    const P = e == null ? void 0 : e.membershipToken;
                    P && Ve(h, P), ta(() => {
                        oa("track", "Upsell")
                    });
                    const {
                        saleAction: r,
                        stepPath: S,
                        visitWebsite: M
                    } = i.element.extra;
                    if (!r)
                        if (a.value.funnelNextStep) {
                            ie();
                            return
                        } else throw new Error("Redirect not handled");
                    if (a.value.orderFormVersion === 2) {
                        const T = `_pl_${a.value.funnelId}`,
                            w = localStorage.getItem(T);
                        if (w) {
                            let I = JSON.parse(w);
                            I.products.push(O.value), I.total += (l = (t = u.value) == null ? void 0 : t.order) == null ? void 0 : l.amount, I.tax = (m = (d = (c = u.value) == null ? void 0 : c.order) == null ? void 0 : d.taxSummary) == null ? void 0 : m.map(n => {
                                var V;
                                const F = (V = I == null ? void 0 : I.tax) == null ? void 0 : V.find(oe => oe._id === n._id);
                                return F ? { ...F,
                                    amount: F.amount + n.amount
                                } : n
                            }), I.orderIds = [u.value.order._id, ...I.orderIds], ct(T, JSON.stringify(I))
                        }
                    } else {
                        const T = `_pl_v1_${a.value.funnelId}`,
                            w = localStorage.getItem(T);
                        if (w) {
                            let I = JSON.parse(w);
                            I.push((f = (o = i == null ? void 0 : i.element.extra) == null ? void 0 : o.productId) == null ? void 0 : f.value), ct(T, JSON.stringify(I))
                        }
                    }
                    switch (r.value) {
                        case "url":
                            if (M && M.value && M.value.url) {
                                Ce(M.value);
                                break
                            } else throw new Error("Redirect not handled");
                        case "step-path":
                            if (S && S.value) {
                                ie(S.value);
                                break
                            } else throw new Error("Redirect not handled");
                        default:
                            if (a.value.funnelNextStep) {
                                ie();
                                break
                            } else throw new Error("Redirect not handled")
                    }
                } catch (v) {
                    {
                        const P = JSON.parse(localStorage.getItem("_ud") || "{}");
                        console.log(v);
                        const r = Fe.includes(localStorage.getItem(`pmt_${a.value.funnelId}_${P==null?void 0:P.id}`) || "") ? "We are proccessing your order with the bank. We'll confirm you order after bank's confirmation." : `Order successfully placed! 
 However, Something went wrong while displaying this webpage, please contact the seller.`;
                        alert(r)
                    }
                    _.value = !1;
                    return
                }
            }
            const ne = async () => {
                var c, d;
                a.value.countryList.length === 0 && await ua();
                const e = Me(() => {
                    var m;
                    return ((m = ca(he == null ? void 0 : he.value)) == null ? void 0 : m.states.map(o => ({
                        iso: o.code,
                        name: o.name
                    }))) ? ? []
                });
                let t = localStorage.getItem("_ud");
                t && (t = JSON.parse(t), sessionStorage.setItem("contactResponse", JSON.stringify(t)));
                const l = t == null ? void 0 : t.customer_id;
                if (!l) {
                    A.value = "Contact not found!";
                    return
                }
                if (ue.value && !H.value) {
                    ce.value = "Invalid Captcha!", N.value = !1, _.value = !1;
                    return
                }
                if (ge.value = ((c = e.value.find(m => m.name === (t == null ? void 0 : t.state))) == null ? void 0 : c.iso) ? ? "", z.value.contact.shippingAddress.state = ge.value, u.value = await da({
                        contactId: l,
                        domain: a.value.domain,
                        pageUrl: a.value.pageUrl,
                        locationId: h,
                        productPreviewList: [{
                            _id: W,
                            qty: 1
                        }],
                        store: a.value,
                        subType: sa.UPSELL,
                        traceId: t == null ? void 0 : t.traceId,
                        reCaptchaToken: H.value,
                        toZip: t.postal_code,
                        toState: ge.value,
                        toCountry: t.country,
                        toCity: t.city,
                        toStreetAddress: t.address1
                    }), H.value = void 0, (d = u.value) != null && d.error) {
                    u.value.status === 429 && (ue.value = !0), A.value = u.value.message ? ? "Error creating order!", N.value = !1, _.value = !1;
                    return
                }
                sessionStorage.setItem("orderResponse", JSON.stringify(u.value))
            };
            async function At() {
                var e, t, l, c, d, m, o, f, v, P;
                try {
                    if (!W) throw new Error("No product Id found for initiating stripe payment");
                    if (A.value = "", await ne(), U.value.amount = (t = (e = u.value) == null ? void 0 : e.order) == null ? void 0 : t.amount, U.value.currency = re.value.toLowerCase(), U.value.mode = ((l = O.value) == null ? void 0 : l.price.type) === "recurring" ? "subscription" : "payment", !((d = (c = u.value) == null ? void 0 : c.order) != null && d.amount) && ((m = O.value) == null ? void 0 : m.price.type) !== "recurring" && (U.value.mode = "setup"), !u.value || (o = u.value) != null && o.error) return;
                    let r = {};
                    r = {
                        altId: h,
                        altType: "location",
                        orderId: u.value.order._id,
                        reCaptchaToken: H.value
                    };
                    const S = JSON.parse(localStorage.getItem("_ud") || "{}");
                    Fe.includes(localStorage.getItem(`pmt_${a.value.funnelId}_${S==null?void 0:S.id}`) || "") && (r.paymentMethodTypes = [ve.sepa]);
                    const M = await De(h, (f = u.value.order) == null ? void 0 : f.contactId),
                        T = localStorage.getItem(`pmt_${a.value.funnelId}_${S==null?void 0:S.id}`) || "",
                        w = M.paymentMethod || T;
                    if (!!["klarna", "affirm", "afterpay_clearpay", "amazon_pay", "revolut_pay", "zip", "grabpay", "fpx"].includes(w) || ((v = u.value.order) == null ? void 0 : v.amount) === 0 && w === ve.bacs) {
                        X.value = !0;
                        return
                    }
                    const n = await Q.initiateStripePayment(r);
                    if (!n.success) {
                        A.value = n.message || "We're sorry, but something went wrong. Please try again.";
                        return
                    }
                    const {
                        clientSecret: F,
                        paymentMethodId: V
                    } = n;
                    if (F && ![ve.bacs, ve.cashapp].includes(w)) {
                        let b = {};
                        if (Fe.includes(T) ? b = await _e.value.confirmSepaDebitPayment(F, {
                                payment_method: V
                            }) : w === ve.becs ? b = await _e.value.confirmAuBecsDebitPayment(F, {
                                payment_method: V
                            }) : b = await _e.value.confirmCardPayment(F, {
                                payment_method: V,
                                setup_future_usage: "off_session"
                            }), b.error) {
                            console.error("Failed to confirm card payment!", b.error), b.error.message && alert(b.error.message);
                            return
                        }
                    }
                    const {
                        orderId: oe,
                        paymentIntentId: Pe,
                        subscriptionId: Ie,
                        invoiceId: be,
                        subId: Ee,
                        txnId: Se
                    } = n, s = {
                        altId: h,
                        altType: "location",
                        orderId: oe,
                        paymentIntentId: Pe,
                        subscriptionId: Ie,
                        invoiceId: be,
                        isAuth: !1,
                        subId: Ee,
                        txnId: Se,
                        attribution: {
                            eventData: ke(),
                            sessionId: Te(h),
                            sessionFingerprint: xe(h)
                        }
                    }, x = await Q.verifyStripePayment(s);
                    if (!x.success) {
                        A.value = x.message || "We're sorry, but something went wrong. Please try again.";
                        return
                    }
                    await de(x)
                } catch (r) {
                    if (((P = r == null ? void 0 : r.response) == null ? void 0 : P.status) === 429) {
                        ue.value = !0, N.value = !1, _.value = !1;
                        return
                    }
                    A.value = dt(r), _.value = !1, console.error(r)
                }
            }
            async function K(e, t) {
                var l, c, d, m, o;
                try {
                    if (!W) throw new Error(`No product Id found for initiating ${e||"stripe"} payment`);
                    if (N.value = !0, A.value = "", await ne(), !u.value || (l = u.value) != null && l.error) return;
                    let f;
                    if ((c = u.value) != null && c.order._id) {
                        f = {
                            altId: h,
                            altType: "location",
                            orderId: (d = u.value) == null ? void 0 : d.order._id,
                            attribution: {
                                eventData: ke(),
                                sessionId: Te(h),
                                sessionFingerprint: xe(h)
                            }
                        };
                        let v;
                        switch (e) {
                            case yt:
                                {
                                    v = await Q.authorizeNetOrderPayment(f);
                                    break
                                }
                            case pt:
                                {
                                    v = await Q.nmiOrderPayment(f);
                                    break
                                }
                            case lt:
                                {
                                    t && (f.manualPaymentMethodId = t),
                                    v = await Q.customProviderOrderPayment(f);
                                    break
                                }
                            case Oe:
                                {
                                    const P = await ma(h, (m = u.value.order) == null ? void 0 : m.contactId);
                                    if (!P || P === "false") {
                                        Ge.value = ((o = O.value) == null ? void 0 : o.price.type) === "recurring" ? "subscription" : "", X.value = !0, N.value = !1;
                                        return
                                    }
                                    v = await Q.squareOrderPayment({ ...f,
                                        saveCard: !1
                                    });
                                    break
                                }
                            case vt:
                                {
                                    v = await Q.adyenOrderPayment(f);
                                    break
                                }
                            case mt:
                                X.value = !0, N.value = !1;
                                return;
                            default:
                                console.log("Invalid payment provider");
                                break
                        }
                        if (console.error(v), N.value = !1, !v.success) {
                            A.value = v.message || "We're sorry, but something went wrong. Please try again.";
                            return
                        }
                        await de({
                            membershipPurchase: v.membershipPurchase,
                            membershipToken: v.membershipToken
                        })
                    }
                } catch (f) {
                    _.value = !1, N.value = !1, console.error(f), A.value = dt(f)
                }
            }
            async function Mt() {
                if (W) try {
                    const e = la(),
                        t = { ...ke(),
                            fbEventId: e
                        },
                        l = Te(h),
                        c = xe(h),
                        d = await ft.funnelPayment({
                            fingerprint: le("msgsndr_id").value,
                            productList: [W],
                            locationId: h,
                            funnelId: wt,
                            stepId: Ot,
                            pageId: kt,
                            domain: a.value.domain,
                            pageUrl: a.value.pageUrl,
                            source: "payment_button",
                            submissionType: 3,
                            eventData: t,
                            sessionId: l,
                            sessionFingerprint: c,
                            _mp: le("_mp").value
                        });
                    await de(d)
                } catch (e) {
                    console.error(e)
                } finally {
                    _.value = !0
                }
            }

            function Qe() {
                var t, l, c, d, m;
                let e = "";
                switch (j) {
                    case E.CLICK_TO_CALL:
                        {
                            let o = (t = i.element.extra[Z.PHONE_NUMBER]) == null ? void 0 : t.value;o = o == null ? void 0 : o.replace("tel:", ""),
                            e = `tel:${o}`;
                            break
                        }
                    case E.CLICK_TO_SMS:
                        {
                            let o = (l = i.element.extra[Z.PHONE_NUMBER]) == null ? void 0 : l.value;o = o == null ? void 0 : o.replace("sms:", ""),
                            e = `sms:${o}`;
                            break
                        }
                    case E.GO_TO_URL:
                        {
                            e = B == null ? void 0 : B.url,
                            e = Ae(e),
                            e && !e.startsWith("#") && !/^https?:/.test(e) && !e.toLowerCase().startsWith("mailto:") && !e.toLowerCase().startsWith("tel:") && !e.toLowerCase().startsWith("sms:") && (e = `https://${e}`),
                            Re.value = B != null && B.newTab ? "_blank" : "";
                            break
                        }
                    case E.GO_TO_STEP:
                        {
                            const o = (m = (d = (c = i.element) == null ? void 0 : c.extra) == null ? void 0 : d.stepPath) == null ? void 0 : m.value;e = bt(o, !1);
                            break
                        }
                }
                return e
            }
            async function Ut(e) {
                if (a.value.videoExistsInPage && We.$emit("handle-redirect"), j === E.GO_TO_STEP) {
                    const t = i.element.extra.stepPath.value;
                    Et(e, t)
                }
            }

            function Ft() {
                X.value = !1, _.value = !1, D.value = !1
            }
            async function Dt(e) {
                var l, c, d, m, o;
                if (!W) throw new Error("No product Id found for initiating stripe payment");
                if (A.value = "", await ne(), !((c = (l = u.value) == null ? void 0 : l.order) != null && c._id && e === C.CUSTOM_PROVIDER)) return;
                const t = {
                    source: "order",
                    sourceId: (m = (d = u == null ? void 0 : u.value) == null ? void 0 : d.order) == null ? void 0 : m._id,
                    sourceDetails: u.value.order,
                    traceId: u.value.traceId,
                    extra: {
                        attribution: {
                            eventData: ke(),
                            sessionId: Te(h),
                            sessionFingerprint: xe(h)
                        }
                    },
                    captchaToken: H.value
                };
                (o = ze.value) == null || o.confirmPayment(t)
            }
            return (e, t) => {
                const l = fa,
                    c = _a,
                    d = ha;
                return k(), L(jt, null, [fe.value ? (k(), L("a", {
                    key: 0,
                    id: `${p.element.id}_btn`,
                    href: Le.value,
                    target: Re.value,
                    rel: Re.value === "_blank" ? "noreferrer noopener" : void 0,
                    "data-animation-class": g(ye),
                    class: ot([p.classStyles, "text-center"]),
                    style: se(g(st)(g(ye)) ? "opacity: 0" : ""),
                    onClick: t[0] || (t[0] = m => Ut(m)),
                    "aria-label": Ke()
                }, [$("span", {
                    style: se(_.value ? "visibility: hidden;" : ""),
                    class: "main-heading-group"
                }, [p.element.extra.icon !== "" ? (k(), L("span", Pa)) : R("", !0), $("span", Ia, ee(g(te)), 1), p.element.extra.icon !== "" ? (k(), L("span", ba)) : R("", !0)], 4), p.element.extra.subText && p.element.extra.subText.value ? (k(), L("span", {
                    key: 0,
                    style: se(_.value ? "visibility: hidden;" : ""),
                    class: "sub-heading-group text-xs font-sans"
                }, [$("span", Ea, ee(g(ae)), 1)], 4)) : R("", !0)], 14, ga)) : R("", !0), ue.value ? (k(), L("section", Sa, [Ue(l, {
                    onExpired: t[1] || (t[1] = () => H.value = ""),
                    onVerify: Lt
                }), ce.value ? (k(), L("p", wa, ee(ce.value), 1)) : R("", !0)])) : R("", !0), fe.value ? R("", !0) : (k(), L("button", {
                    key: 2,
                    disabled: _.value || g(G) && D.value || q.value,
                    "data-animation-class": g(ye),
                    id: `${p.element.id}_btn`,
                    style: se(_.value || g(G) && D.value || q.value ? "cursor: default;" : g(st)(g(ye)) ? "opacity: 0" : ""),
                    class: ot([p.classStyles]),
                    onClick: Nt,
                    "aria-label": Ke()
                }, [$("div", {
                    style: se(_.value || g(G) && D.value || q.value ? "visibility: hidden;" : ""),
                    class: "main-heading-group"
                }, [p.element.extra.icon !== "" ? (k(), L("div", ka)) : R("", !0), $("div", Ta, ee(g(te)), 1), p.element.extra.icon !== "" ? (k(), L("div", xa)) : R("", !0)], 4), p.element.extra.subText && p.element.extra.subText.value ? (k(), L("div", {
                    key: 0,
                    style: se(_.value || g(G) && D.value || q.value ? "visibility: hidden;" : ""),
                    class: "text-xs font-sans"
                }, [$("div", Ca, ee(g(ae)), 1)], 4)) : R("", !0), Yt($("div", La, [Ue(ya, {
                    loading: _.value || g(G) && D.value || q.value,
                    color: "rgb(255, 255, 255)",
                    size: "30px"
                }, null, 8, ["loading"])], 512), [
                    [Zt, _.value || g(G) && D.value || q.value]
                ])], 14, Oa)), $("div", null, [He.value && g(a).funnelPageId && g(G) ? (k(), L("section", Ra, [$("div", {
                    id: `${p.element.id}-payment-form`,
                    class: "payment-form"
                }, [Ue(c, {
                    id: `${p.element.id}-payment-element`,
                    ref_key: "confirmPaymentRef",
                    ref: ze,
                    customProviderProps: z.value,
                    onPaymentCallback: xt
                }, null, 8, ["id", "customProviderProps"]), J.value ? (k(), L("div", Aa, [t[2] || (t[2] = $("img", {
                    src: aa,
                    alt: "alert"
                }, null, -1)), Qt(" " + ee(J.value), 1)])) : R("", !0)], 8, Na)])) : R("", !0)]), A.value ? (k(), L("div", Ma, ee(A.value), 1)) : R("", !0), X.value ? (k(), Xt(d, {
                    key: 4,
                    extra: i.element.extra,
                    stripeOptions: U.value,
                    order: u.value,
                    traceId: u.value.traceId,
                    element: i.element,
                    styles: p.classStyles,
                    squarePaymentMode: Ge.value,
                    showPaypal: qe.value && re.value,
                    customProviderProps: z.value,
                    paymentProps: {
                        currency: re.value,
                        mode: g(Tt) ? "subscription" : "onetime"
                    },
                    onClosePaymentElementModal: Ft
                }, null, 8, ["extra", "stripeOptions", "order", "traceId", "element", "styles", "squarePaymentMode", "showPaypal", "customProviderProps", "paymentProps"])) : R("", !0)], 64)
            }
        }
    });
export {
    rr as
    default
};