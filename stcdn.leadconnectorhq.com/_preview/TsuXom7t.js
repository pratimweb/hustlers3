import {
    d as F,
    x as H,
    R as P,
    r as f,
    o as $,
    X as h,
    c as u,
    c8 as B,
    w as N,
    a as i,
    b as c,
    i as p,
    F as R,
    j as V,
    n as y,
    e as d,
    u as r,
    k as Q,
    J as S,
    l as j,
    $ as _,
    h as D,
    aq as G
} from "./B9OM7hcI.js";
import {
    _ as J
} from "./Beb5rGIG.js";
const X = {
        class: "hl-faq"
    },
    K = ["onClick"],
    U = {
        class: "hl-faq-child-head"
    },
    W = {
        key: 0,
        class: "hl-faq-child-heading-icon left fa"
    },
    Y = ["innerHTML"],
    Z = {
        key: 0,
        class: "hl-faq-child-heading-icon right fa"
    },
    ee = ["innerHTML"],
    ae = ["onClick", "src"],
    oe = F({
        __name: "FAQ",
        props: {
            element: {
                type: Object,
                required: !0
            }
        },
        setup(T) {
            var A;
            const l = T,
                {
                    $bus: M
                } = H(),
                x = (A = P().value) == null ? void 0 : A.imageOptimizationEnabled,
                v = f(!1),
                o = f([]),
                C = f([]),
                I = f([]);
            (() => {
                const s = l.element.extra.faqCustomOptions.value.firstItemOpen;
                l.element.extra.faqList.value.map((n, e) => {
                    const a = {};
                    a.id = n.id, a.image = n.image, a.showImage = n.showImage, a.compression = n.compression, e === 0 && s ? a.active = !0 : a.active = !1, a.showImage && !v.value && (v.value = !0), a.heading = h(n.heading), a.text = h(n.text), o.value.push(a)
                })
            })(), $(() => {
                const s = l.element.extra.faqCustomOptions.value.firstItemOpen,
                    n = l.element.extra.faqList.value.map((e, a) => {
                        const t = {};
                        return t.id = e.id, t.image = e.image, t.showImage = e.showImage, t.compression = e.compression, a === 0 && s ? t.active = !0 : t.active = !1, t.showImage && !v.value && (v.value = !0), t.heading = h(e.heading), t.text = h(e.text), C.value[a].innerHTML = t.heading, I.value[a].innerHTML = t.text, t
                    });
                o.value = n
            });
            const w = s => {
                    M.$emit("open-faq-popup", {
                        url: s.image ? s.image : g,
                        imageOptimizationEnabled: _(s.compression)
                    })
                },
                b = s => {
                    s.active = !s.active, k(s)
                },
                k = s => {
                    const n = o.value;
                    if (!q.value) {
                        const e = n.map(a => (a.id !== s.id && (a.active = !1), a));
                        o.value = e
                    }
                },
                z = () => {
                    const s = o.value,
                        e = !!(s.findIndex(t => !t.active) > -1),
                        a = s.map(t => (t.active = e, t));
                    o.value = a
                },
                m = u(() => l.element.extra.faqType.value),
                g = u(() => B),
                O = u(() => l.element.extra.faqCustomOptions.value.iconPosition),
                q = u(() => l.element.extra.faqCustomOptions.value.expandAll),
                E = u(() => l.element.extra.faqCustomOptions.value.expandAllToggle),
                L = u(() => l.element.extra.faqCustomOptions.value.showImagePopup);
            return N(() => q.value, s => {
                if (!s) {
                    const n = o.value[0];
                    n.active = !0, k(n)
                }
            }), (s, n) => (i(), c("div", X, [q.value && E.value ? (i(), c("button", {
                key: 0,
                class: "expand-collapse-all-button my-2",
                onClick: z
            }, " Expand/Collapse All ")) : p("", !0), (i(!0), c(R, null, V(r(o), (e, a) => (i(), c("div", {
                class: y(["hl-faq-child", {
                    active: e.active,
                    "faq-contained-child": m.value === "contained",
                    "faq-simple-child": m.value === "simple",
                    "faq-separated-child": m.value === "separated"
                }]),
                key: a
            }, [d("div", {
                class: y(["hl-faq-child-heading", {
                    active: e.active
                }]),
                onClick: t => b(e)
            }, [d("div", U, [O.value == "left" ? (i(), c("i", W)) : p("", !0), d("span", {
                ref_for: !0,
                ref: t => r(C)[a] = t,
                class: "hl-faq-child-heading-text",
                innerHTML: e.heading
            }, null, 8, Y)]), O.value == "right" ? (i(), c("i", Z)) : p("", !0)], 10, K), Q(G, null, {
                default: S(() => [d("div", {
                    style: j({
                        height: e.active ? "auto" : "0",
                        padding: e.active ? void 0 : "0",
                        opacity: e.active ? "1" : "0"
                    }),
                    class: "hl-faq-child-panel"
                }, [d("span", {
                    ref_for: !0,
                    ref: t => r(I)[a] = t,
                    class: "hl-faq-child-item-text item-text",
                    innerHTML: e.text
                }, null, 8, ee), e.showImage && !r(_)(e == null ? void 0 : e.compression, r(x)) ? (i(), c("img", {
                    key: 0,
                    onClick: t => L.value ? w(e) : void 0,
                    class: "item-img",
                    src: e.image ? e.image : g.value,
                    alt: "FAQ image",
                    loading: "lazy"
                }, null, 8, ae)) : p("", !0), e.showImage && r(_)(e == null ? void 0 : e.compression, r(x)) ? (i(), D(J, {
                    key: 1,
                    onClick: t => L.value ? w(e) : void 0,
                    class: "item-img",
                    url: e.image ? e.image : g.value,
                    size: 320,
                    alt: "FAQ image"
                }, null, 8, ["onClick", "url"])) : p("", !0)], 4)]),
                _: 2
            }, 1024)], 2))), 128))]))
        }
    });
export {
    oe as
    default
};