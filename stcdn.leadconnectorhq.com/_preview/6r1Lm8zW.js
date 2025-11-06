import {
    d as i,
    c as r,
    a as m,
    b as d,
    e as o,
    n,
    u as a,
    t as v
} from "./B9OM7hcI.js";
const f = {
        class: "background"
    },
    x = i({
        __name: "ProgressBar",
        props: {
            element: {
                type: Object,
                required: !0
            }
        },
        setup(l) {
            const t = l,
                c = r(() => {
                    const {
                        text: e
                    } = t.element.extra;
                    return e.value || ""
                }),
                u = r(() => {
                    const {
                        percentWidth: e
                    } = t.element.extra;
                    return [e && e.value ? e.value : "progress50"]
                }),
                p = r(() => {
                    const {
                        offsetColor: e,
                        progressBarSize: s
                    } = t.element.extra;
                    return [e && e.value ? e.value : "progressbarOffsetWhite", s && s.value ? s.value : "small"]
                });
            return (e, s) => (m(), d("div", f, [o("div", {
                class: n(["progress-outer", a(p)])
            }, [o("div", {
                class: n(["progress-inner", a(u)])
            }, v(a(c)), 3)], 2)]))
        }
    });
export {
    x as
    default
};