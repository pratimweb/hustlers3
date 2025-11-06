import {
    m as f,
    b4 as i,
    b5 as p,
    F as u,
    d as g,
    f as h,
    b6 as b,
    a as t,
    b as d,
    e as l,
    n as y,
    u as c,
    h as k,
    J as v,
    an as m
} from "./B9OM7hcI.js";
import {
    u as w
} from "./BIT_1gNy.js";
const x = f({
        loader() {
            const o = window._$delayHydration || Promise.resolve();
            return new Promise(s => {
                o.then(() => {
                    s((e, {
                        slots: n
                    }) => {
                        var a;
                        return i(u, [i(p, "nuxt-delay-hydration-component"), (a = n.default) == null ? void 0 : a.call(n, e)])
                    })
                })
            })
        },
        suspensible: !1
    }),
    A = {
        key: 1
    },
    $ = g({
        __name: "page",
        setup(o) {
            const {
                locale: s
            } = h();
            w({
                htmlAttrs: {
                    lang: s
                }
            });
            const e = b(),
                n = e == null ? void 0 : e.isOptimisePageLoad,
                a = e == null ? void 0 : e.backgroundSettingsClass;
            return (r, B) => {
                const _ = x;
                return t(), d(u, null, [l("div", {
                    class: y(["bg-fixed", c(a)])
                }, null, 2), c(n) ? (t(), k(_, {
                    key: 0
                }, {
                    default: v(() => [l("div", null, [m(r.$slots, "default")])]),
                    _: 3
                })) : (t(), d("div", A, [m(r.$slots, "default")]))], 64)
            }
        }
    });
export {
    $ as
    default
};