import {
    d as _,
    r as p,
    o as f,
    p as g,
    a as n,
    b as o,
    u as r,
    i as u,
    F as v
} from "./B9OM7hcI.js";
const h = ["innerHTML"],
    y = ["id"],
    w = _({
        __name: "HtmlPreview",
        props: {
            code: {
                type: String,
                default: ""
            },
            id: {
                type: String,
                required: !0
            }
        },
        setup(s) {
            var i;
            const t = s,
                a = new RegExp(/<s*(noscript)[^>]*>(.*?)<s*\/s*(noscript)>/g),
                c = p((i = t.code.replace(/\n/g, " /**/ ").match(a)) == null ? void 0 : i.join("").replace(/\/\*\*\//g, `
`)),
                e = p(t.code.replace(/\n/g, " /**/ ").replace(a, "").replace(/\/\*\*\//g, `
`));
            return f(async () => {
                if (e != null && e.value) {
                    const {
                        default: d
                    } = await g(async () => {
                            const {
                                default: l
                            } = await
                            import ("./EZfwXEMt.js").then(m => m.p);
                            return {
                                default: l
                            }
                        }, [],
                        import.meta.url);
                    d(`#${t.id}-hl-custom-code`, e.value)
                }
            }), (d, l) => (n(), o(v, null, [r(c) ? (n(), o("div", {
                key: 0,
                innerHTML: r(c)
            }, null, 8, h)) : u("", !0), r(e) ? (n(), o("div", {
                key: 1,
                id: s.id + "-hl-custom-code"
            }, null, 8, y)) : u("", !0)], 64))
        }
    });
export {
    w as _
};