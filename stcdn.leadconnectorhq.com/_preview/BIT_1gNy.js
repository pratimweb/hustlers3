import {
    b7 as o,
    r as u,
    b8 as f,
    w as d,
    M as v,
    b9 as l,
    ba as i,
    bb as b,
    b2 as h
} from "./B9OM7hcI.js";

function w(t, a = {}) {
    const e = a.head || o();
    if (e) return e.ssr ? e.push(t, a) : m(e, t, a)
}

function m(t, a, e = {}) {
    const s = u(!1),
        n = u({});
    f(() => {
        n.value = s.value ? {} : b(a)
    });
    const r = t.push(n.value, e);
    return d(n, c => {
        r.patch(c)
    }), h() && (v(() => {
        r.dispose()
    }), l(() => {
        s.value = !0
    }), i(() => {
        s.value = !1
    })), r
}
export {
    w as u
};