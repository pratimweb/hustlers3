import {
    c as _,
    d as c
} from "./CEB7salD.js";
import {
    d as h,
    c as e,
    a as v,
    b as g,
    e as m,
    k as r,
    u as t,
    n as l
} from "./B9OM7hcI.js";
import "./Beb5rGIG.js";
import "./DFjEOqR1.js";
import "./CYdWzSOm.js";
import "./BY3P0NWT.js";
import "./BIT_1gNy.js";
import "./cU-0lJ0a.js";
import "./GYFywdtQ.js";
import "./ekdnFpMp.js";
import "./DsyfCw_n.js";
import "./CnIBf1qr.js";
import "./CJeQ8DBJ.js";
import "./DW-3PSLe.js";
import "./BzgFeTSe.js";
const $ = {
        class: "img-container text-center"
    },
    y = {
        class: "txt-container"
    },
    A = h({
        __name: "ImageFeature",
        props: {
            element: {
                type: Object,
                required: !0
            }
        },
        setup(n) {
            const a = n,
                u = e(() => `${a.element.id}-img`),
                d = e(() => `${a.element.id}-headline`),
                p = e(() => `${a.element.id}-text`),
                f = e(() => ["featureHeadline"]),
                x = e(() => ["featureText"]),
                C = e(() => {
                    const {
                        featureColumnOrder: o,
                        featureColumnSize: i
                    } = a.element.class;
                    return Object.values({
                        featureColumnOrder: o,
                        featureColumnSize: i
                    }).filter(s => s && s.value).map(s => s.value).join(" ")
                });
            return (o, i) => (v(), g("div", {
                class: l(["img-feature-container", t(C)])
            }, [m("div", $, [r(_, {
                id: t(u),
                element: n.element,
                "force-inline-size": !0
            }, null, 8, ["id", "element"])]), m("div", y, [r(c, {
                id: t(d),
                content: n.element.extra.featureHeadline,
                class: l(t(f))
            }, null, 8, ["id", "content", "class"]), r(c, {
                id: t(p),
                content: n.element.extra.text,
                class: l(t(x))
            }, null, 8, ["id", "content", "class"])])], 2))
        }
    });
export {
    A as
    default
};