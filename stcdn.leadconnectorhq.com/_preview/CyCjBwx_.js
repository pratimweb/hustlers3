import {
    E as d,
    I as R,
    H as B,
    aH as Q,
    au as V,
    L as j,
    bD as ee,
    bE as re,
    bF as Z,
    R as x,
    bG as te,
    aE as ie
} from "./B9OM7hcI.js";
import {
    s as G,
    f as Y,
    l as p,
    O as S,
    P as A,
    g as ae,
    b as ne,
    a as se,
    A as oe,
    d as le
} from "./DsyfCw_n.js";
import {
    F as ue
} from "./CnIBf1qr.js";
import {
    f as K
} from "./CbjVgXQI.js";
const Se = {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4"
            }
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
        }
    },
    we = (e, r, t) => {
        let s = [];
        return {
            updatedProducts: e.map(a => {
                if (a._id === t._id) {
                    if (r > a.max) return a.qty = a.qty, s.push(`A maximum of ${a.max} units of ${a.name} only can be purchased`), a;
                    if (r > a.price.availableQuantity && a.price.trackInventory && !a.price.allowOutOfStockPurchases) return a.qty = a.qty, s.push(`Only ${a.price.availableQuantity} units of ${a.name} are in stock`), a;
                    a.qty = r
                }
                return a
            }),
            errorMessages: s
        }
    },
    be = e => {
        var r, t, s;
        return ((r = e == null ? void 0 : e.price) == null ? void 0 : r.availableQuantity) <= 0 && ((t = e == null ? void 0 : e.price) == null ? void 0 : t.trackInventory) && !((s = e == null ? void 0 : e.price) != null && s.allowOutOfStockPurchases)
    },
    _e = (e, r) => r.find(t => t._id === e.id),
    de = async ({
        contactId: e,
        domain: r,
        pageUrl: t,
        locationId: s,
        productPreviewList: u,
        isCouponApplied: a,
        couponCode: n,
        couponSessionId: i,
        store: g,
        subType: c,
        traceId: w = "",
        reCaptchaToken: h,
        isEcommercePurchase: I,
        shippingRateId: o,
        toZip: v,
        toState: f,
        toCountry: O,
        toCity: C,
        toStreetAddress: M,
        shippingCarrierRateId: T,
        note: N,
        separateBillingAddress: k
    }) => {
        var b, _, E, m;
        try {
            const y = d("msgsndr_id").value,
                L = d("am_id").value,
                q = d("am_fingerprint").value,
                z = g.funnelName || "funnel";
            r || (r = window.location.hostname, t = window.location.pathname);
            const {
                funnelPageId: W,
                funnelId: J,
                stepId: P
            } = g, F = {
                altId: s,
                altType: "location",
                shippingRateId: o,
                shippingCarrierRateId: T,
                contactId: e,
                source: {
                    type: g.pageType === S.FUNNEL ? S.FUNNEL : S.WEBSITE,
                    subType: c,
                    id: J,
                    name: z,
                    meta: {
                        stepId: P,
                        pageId: W,
                        domain: r,
                        pageUrl: t,
                        affiliateManager: {
                            id: L,
                            fingerprint: q
                        }
                    }
                },
                products: u.map(l => ({
                    id: I ? l.selectedPrice._id : l._id,
                    qty: l.qty || l.quantity
                })),
                fingerprint: y,
                trackingId: B(),
                traceId: w,
                toZip: v,
                toState: f,
                toCountry: O,
                toCity: C,
                toStreetAddress: M,
                customerNote: N,
                separateBillingAddress: k
            };
            a && (F.couponCode = n, F.couponSessionId = i), h && (F.captchaToken = h);
            const U = await A.createOrder(F);
            if (!((b = U.order) == null ? void 0 : b._id)) throw new Error("Something went wrong while creating order. Please try again later.");
            return U
        } catch (y) {
            return console.error(y), {
                error: !0,
                message: (E = (_ = y == null ? void 0 : y.response) == null ? void 0 : _._data) == null ? void 0 : E.message,
                status: (m = y == null ? void 0 : y.response) == null ? void 0 : m.status
            }
        }
    },
    ge = async (e, r, t, s, u, a, n) => {
        var F, U, $;
        const i = d("msgsndr_id").value,
            g = d("am_id").value,
            c = d("am_fingerprint").value,
            w = ae(e.locationId),
            h = ne(e.locationId),
            I = se(),
            o = e.funnelName || "funnel";
        let {
            domain: v,
            page_url: f
        } = r.query;
        v || (v = window.location.hostname, f = window.location.pathname);
        const {
            funnelPageId: O,
            funnelId: C,
            stepId: M
        } = e, T = {
            eventType: "optin",
            domainName: v,
            pageUrl: f,
            funnelId: C,
            pageId: O,
            stepId: M
        }, {
            address: N,
            country: k,
            state: b,
            city: _,
            zipcode: E,
            fullName: m,
            phoneNumber: y,
            emailId: L,
            companyName: q
        } = t, z = {
            addressLine1: N,
            country: k || s,
            state: b,
            city: _,
            zip: E
        };
        I.medium = oe.OrderForm, I.mediumId = T.stepId;
        const W = le();
        I.fbEventId = W;
        const J = {
                lead: !0,
                eventData: I,
                source: o,
                pageId: O,
                funnelId: C,
                sessionId: w,
                funnelEventData: T,
                sessionFingerprint: h || null
            },
            P = {
                locationId: e.locationId,
                name: m,
                phone: y,
                email: (L == null ? void 0 : L.toLowerCase()) || "",
                companyName: q,
                address: z,
                attribution: J,
                timezone: ie(),
                amId: String(g),
                amFingerprint: c,
                orderFormType: "one_step_form_submission",
                captchaToken: u,
                billingAddress: n
            };
        a.enableStickyContact && (P.attribution.fingerprint = i, P.attribution.funnelEventData.fingerprint = i), a.enableForceCreate && (P.attribution.forceCreate = !0), a.enableEmailValidation && (P.attribution.session_d = Number(a.enableEmailValidation) || 0);
        try {
            const l = await ue.createContact(P);
            if (!l) throw new Error("Something went wrong. Please try again later.");
            if (l.fbEventId = W, i !== l.fingerprint) {
                e.fingerprint = i;
                const D = d("msgsndr_id", {
                    path: "/",
                    maxAge: 31536e3
                });
                D.value = l.fingerprint
            }
            B();
            const X = Q(l);
            V("_ud", X), j(() => {
                K("track", "SubmitApplication")
            });
            let H = l.sessionFingerprint;
            return I && (G({
                sessionId: l.sessionId || null,
                locationId: e.locationId
            }), H && Y(e.locationId, H)), l
        } catch (l) {
            return console.error(l), {
                error: !0,
                message: (U = (F = l == null ? void 0 : l.response) == null ? void 0 : F._data) == null ? void 0 : U.message,
                status: ($ = l == null ? void 0 : l.response) == null ? void 0 : $.status
            }
        }
    },
    Ee = async (e, r, t, s, u, a, n, i, g, c, w, h, I, o, v, f, O, C, M, T) => {
        var N, k, b, _, E;
        if ((!n || !n.id) && (n = await ge(e, r, t, s, u, a, C), u = void 0), n != null && n.error) {
            let m = {};
            return (n == null ? void 0 : n.status) === 429 ? (m = {
                error: !0,
                processingPayment: !1,
                showRecaptcha: !0
            }, m) : (m = {
                error: !0,
                processingPayment: !1,
                cardErrorMsg: n.message || "We're sorry, but something went wrong. Please try again"
            }, m)
        }
        if ((n.id && !i || !((N = i == null ? void 0 : i.order) != null && N._id)) && (i = await de({
                contactId: n == null ? void 0 : n.id,
                domain: e.domain,
                pageUrl: e.pageUrl,
                locationId: e.locationId,
                productPreviewList: c,
                isCouponApplied: g,
                couponCode: h,
                couponSessionId: w,
                store: e,
                subType: o,
                traceId: n == null ? void 0 : n.traceId,
                reCaptchaToken: u,
                isEcommercePurchase: I,
                shippingRateId: v,
                toZip: (t == null ? void 0 : t.zipcode) ? ? ((k = t.address) == null ? void 0 : k.zip),
                toState: f,
                toCountry: (t == null ? void 0 : t.country) ? ? ((b = t.address) == null ? void 0 : b.country),
                toCity: (t == null ? void 0 : t.city) ? ? ((_ = t.address) == null ? void 0 : _.city),
                toStreetAddress: ((E = t.address) == null ? void 0 : E.addressLine1) ? ? t.address,
                shippingCarrierRateId: O,
                note: M,
                separateBillingAddress: T
            }), u = void 0), i != null && i.error) {
            let m = {};
            return i.status === 429 ? (m = {
                error: !0,
                processingPayment: !1,
                showRecaptcha: !0,
                contactResponse: n
            }, m) : (m = {
                error: !0,
                processingPayment: !1,
                contactResponse: n,
                cardErrorMsg: i.message || "We're sorry, but something went wrong. Please try again"
            }, m)
        }
        return (i == null ? void 0 : i.success) === !1 ? {
            error: !0,
            cardErrorMsg: i == null ? void 0 : i.message,
            processingPayment: !1
        } : (sessionStorage.setItem("orderResponse", JSON.stringify(i)), o != p.TWO_STEP_ORDER_FORM && sessionStorage.setItem("contactResponse", JSON.stringify(n)), sessionStorage.setItem("orderResponse", JSON.stringify(i)), o != p.TWO_STEP_ORDER_FORM && sessionStorage.setItem("contactResponse", JSON.stringify(n)), sessionStorage.setItem("orderResponse", JSON.stringify(i)), o != p.TWO_STEP_ORDER_FORM && sessionStorage.setItem("contactResponse", JSON.stringify(n)), {
            contactResponse: n,
            orderResponse: i,
            reCaptchaToken: u
        })
    },
    me = (e, r, t, s) => {
        if (B() != (t == null ? void 0 : t.verifiedTrackingId)) {
            const a = d("tr", {
                path: "/",
                maxAge: 900
            });
            a.value = t == null ? void 0 : t.verifiedTrackingId
        }
        if (s !== p.TWO_STEP_ORDER_FORM) {
            if (e.fingerprint !== r) {
                const n = d("msgsndr_id", {
                    path: "/",
                    maxAge: 31536e3
                });
                n.value = e.fingerprint
            }
            const a = Q(e);
            V("_ud", a)
        }
        if (e.fbEventId) {
            let a = e.fbEventId;
            j(() => {
                K("track", "OrderFormPurchase", a)
            })
        } else console.warn("Facebook event Id missing from attribution!")
    },
    Pe = async (e, r, t, s, u) => {
        let a = !1,
            n = "";
        if (r != null && r.message && !(r != null && r.success)) throw new Error(r.message);
        t === ee && (r != null && r.pendingConfirmation) && (a = !0, n = "Order placed successfully! However your transaction is pending for review. Please contact the business owner");
        const i = d("msgsndr_id").value;
        await me(e, i, r, u);
        const g = d("provider");
        g.value = t === re ? "pp" : t === Z ? Z : "cc", await fe({
            sessionId: e.sessionId,
            sessionFingerprint: r == null ? void 0 : r.sessionFingerprint
        }, s);
        const c = sessionStorage.getItem("redirect");
        if (ce(s), c) {
            sessionStorage.removeItem("redirect"), window.location.href = c;
            return
        }
        return {
            paymentResponseData: r,
            authorizeOrderPendingConfirmation: a,
            authorizeOrderAlertMsg: n
        }
    },
    fe = (e, r) => {
        e && e.sessionId && (G({
            sessionId: e.sessionId || null,
            locationId: r
        }), e.sessionFingerprint && Y(r, e.sessionFingerprint))
    },
    Fe = e => {
        var t;
        (!(e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105) || !/^\d{0,2}$/.test((t = e.target) == null ? void 0 : t.value)) && e.keyCode !== 8 && e.preventDefault()
    },
    ce = e => {
        const r = R();
        return sessionStorage.setItem(`couponSessionId_${e}`, r), r
    },
    Oe = async (e, r, t = "", s, u, a, n, i) => {
        var g, c, w, h, I;
        try {
            const o = x(),
                v = {
                    altId: o.value.locationId,
                    altType: "location",
                    couponCode: t,
                    source: {
                        type: o.value.pageType === S.FUNNEL ? S.FUNNEL : S.WEBSITE,
                        subType: r,
                        id: o.value.funnelId,
                        name: o.value.funnelName,
                        meta: {
                            stepId: o.value.stepId,
                            pageId: o.value.funnelPageId,
                            domain: o.value.domain,
                            pageUrl: o.value.pageUrl,
                            affiliateManager: {
                                id: d("am_id").value,
                                fingerprint: d("msgsndr_id").value
                            }
                        }
                    },
                    products: e,
                    toCountry: s,
                    toState: u,
                    toZip: a,
                    toCity: n,
                    toStreetAddress: i
                },
                f = await A.getAmountSummary(v);
            return {
                total: f.summary.total,
                subtotal: f.summary.subtotal,
                taxSummary: f.summary.taxSummary,
                subtotalWithDiscount: f.summary.subtotalWithDiscount,
                futureRecurringPaymentAmount: (g = f.recurringSummary) == null ? void 0 : g.subtotalWithDiscount,
                additionalChargesSummary: f.summary.additionalChargesSummary
            }
        } catch (o) {
            return console.error(o), {
                error: !0,
                message: ((w = (c = o == null ? void 0 : o.response) == null ? void 0 : c._data) == null ? void 0 : w.message) || "Something went wrong while fetching order total. Please try again later",
                status: (I = (h = o == null ? void 0 : o.response) == null ? void 0 : h._data) == null ? void 0 : I.status
            }
        }
    },
    Ce = async (e, r) => {
        const t = await A.getLastPaymentMethodForTheCustomer({
            altId: e,
            altType: "location",
            contactId: r
        });
        return {
            paymentProvider: t == null ? void 0 : t.paymentProvider,
            paymentMethod: t == null ? void 0 : t.paymentMethod
        }
    },
    Te = async (e, r) => await A.getLastSquarePaymentMethodForTheCustomer({
        altId: e,
        altType: "location",
        contactId: r
    }),
    Ne = (e, r, t, s) => {
        const u = r <= 0 && !t,
            a = t && s <= 0,
            n = u || a;
        return !!(e && n || n)
    },
    ke = async () => {
        const e = x();
        try {
            const r = await A.getStatesInformation();
            if (r && r.error) throw te(r.error);
            e.value.countryList = (r == null ? void 0 : r.data) ? ? []
        } catch (r) {
            console.error("Failed to fetch country list", r)
        }
    },
    Ae = e => x().value.countryList.find(t => t.code === e),
    Me = (e, r, t) => {
        if (e.startsWith("+44") && r.match(/^07\d*$/)) {
            const s = e.replace("+44 1534", "+44").replace("1534", "");
            return window.libphonenumber.parsePhoneNumberFromString(s, "JE").formatInternational()
        }
        return t.formatInternational()
    },
    Le = async ({
        couponCode: e,
        products: r,
        subType: t
    }) => {
        var s, u, a, n;
        try {
            const i = x(),
                g = {
                    altId: i.value.locationId,
                    altType: "location",
                    code: e,
                    products: r,
                    source: {
                        type: i.value.pageType === S.FUNNEL ? S.FUNNEL : S.WEBSITE,
                        subType: t,
                        id: i.value.funnelId,
                        name: i.value.funnelName,
                        meta: {
                            stepId: i.value.stepId,
                            pageId: i.value.funnelPageId,
                            domain: i.value.domain,
                            pageUrl: i.value.pageUrl,
                            affiliateManager: {
                                id: d("am_id").value,
                                fingerprint: d("msgsndr_id").value
                            }
                        }
                    }
                };
            return await A.verifyCoupon(g)
        } catch (i) {
            return console.error(i), {
                error: !0,
                message: ((u = (s = i == null ? void 0 : i.response) == null ? void 0 : s._data) == null ? void 0 : u.message) || "Something went wrong while verifying coupon. Please try again later",
                status: (n = (a = i == null ? void 0 : i.response) == null ? void 0 : a._data) == null ? void 0 : n.status
            }
        }
    };
export {
    Oe as a, ke as b, ce as c, de as d, Te as e, Ce as f, Ae as g, Pe as h, Me as i, be as j, _e as k, we as l, Ee as m, Fe as n, Ne as p, Se as s, Le as v
};