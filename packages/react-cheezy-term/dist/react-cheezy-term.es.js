import Se from "react";
var M = { exports: {} }, D = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function lr() {
  if (Te) return D;
  Te = 1;
  var P = Se, w = Symbol.for("react.element"), U = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, A = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(E, l, T) {
    var p, y = {}, b = null, $ = null;
    T !== void 0 && (b = "" + T), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && ($ = l.ref);
    for (p in l) m.call(l, p) && !I.hasOwnProperty(p) && (y[p] = l[p]);
    if (E && E.defaultProps) for (p in l = E.defaultProps, l) y[p] === void 0 && (y[p] = l[p]);
    return { $$typeof: w, type: E, key: b, ref: $, props: y, _owner: A.current };
  }
  return D.Fragment = U, D.jsx = j, D.jsxs = j, D;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function cr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var P = Se, w = Symbol.for("react.element"), U = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), E = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), H = Symbol.iterator, Pe = "@@iterator";
    function we(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = H && e[H] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var O = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        je("error", e, t);
      }
    }
    function je(e, r, t) {
      {
        var n = O.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var xe = !1, ke = !1, De = !1, Fe = !1, Ae = !1, Z;
    Z = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === I || Ae || e === A || e === T || e === p || Fe || e === $ || xe || ke || De || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === y || e.$$typeof === j || e.$$typeof === E || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function h(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case U:
          return "Portal";
        case I:
          return "Profiler";
        case A:
          return "StrictMode";
        case T:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return Q(r) + ".Consumer";
          case j:
            var t = e;
            return Q(t._context) + ".Provider";
          case l:
            return $e(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : h(e.type) || "Memo";
          case b: {
            var o = e, u = o._payload, i = o._init;
            try {
              return h(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, x = 0, ee, re, te, ne, ae, ie, oe;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function We() {
      {
        if (x === 0) {
          ee = console.log, re = console.info, te = console.warn, ne = console.error, ae = console.group, ie = console.groupCollapsed, oe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        x++;
      }
    }
    function Ye() {
      {
        if (x--, x === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, e, {
              value: ee
            }),
            info: R({}, e, {
              value: re
            }),
            warn: R({}, e, {
              value: te
            }),
            error: R({}, e, {
              value: ne
            }),
            group: R({}, e, {
              value: ae
            }),
            groupCollapsed: R({}, e, {
              value: ie
            }),
            groupEnd: R({}, e, {
              value: oe
            })
          });
        }
        x < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = O.ReactCurrentDispatcher, J;
    function W(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var q = !1, Y;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Le();
    }
    function se(e, r) {
      if (!e || q)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = N.current, N.current = null, We();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (d) {
              n = d;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (d) {
              n = d;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (d) {
            n = d;
          }
          e();
        }
      } catch (d) {
        if (d && n && typeof d.stack == "string") {
          for (var a = d.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, f = v.length - 1; s >= 1 && f >= 0 && a[s] !== v[f]; )
            f--;
          for (; s >= 1 && f >= 0; s--, f--)
            if (a[s] !== v[f]) {
              if (s !== 1 || f !== 1)
                do
                  if (s--, f--, f < 0 || a[s] !== v[f]) {
                    var g = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, g), g;
                  }
                while (s >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        q = !1, N.current = u, Ye(), Error.prepareStackTrace = o;
      }
      var S = e ? e.displayName || e.name : "", _ = S ? W(S) : "";
      return typeof e == "function" && Y.set(e, _), _;
    }
    function Ve(e, r, t) {
      return se(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return se(e, Me(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case T:
          return W("Suspense");
        case p:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ve(e.render);
          case y:
            return L(e.type, r, t);
          case b: {
            var n = e, o = n._payload, u = n._init;
            try {
              return L(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var k = Object.prototype.hasOwnProperty, fe = {}, le = O.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        le.setExtraStackFrame(t);
      } else
        le.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, o) {
      {
        var u = Function.call.bind(k);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (V(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), V(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, V(o), c("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Ne = Array.isArray;
    function B(e) {
      return Ne(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return ce(e), !1;
      } catch {
        return !0;
      }
    }
    function ce(e) {
      return "" + e;
    }
    function ve(e) {
      if (qe(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), ce(e);
    }
    var de = O.ReactCurrentOwner, Be = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, ge;
    function Ke(e) {
      if (k.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (k.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ge(e, r) {
      typeof e.ref == "string" && de.current;
    }
    function Xe(e, r) {
      {
        var t = function() {
          pe || (pe = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function He(e, r) {
      {
        var t = function() {
          ge || (ge = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: w,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Qe(e, r, t, n, o) {
      {
        var u, i = {}, a = null, v = null;
        t !== void 0 && (ve(t), a = "" + t), ze(r) && (ve(r.key), a = "" + r.key), Ke(r) && (v = r.ref, Ge(r, o));
        for (u in r)
          k.call(r, u) && !Be.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || v) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Xe(i, f), v && He(i, f);
        }
        return Ze(e, a, v, o, n, de.current, i);
      }
    }
    var K = O.ReactCurrentOwner, ye = O.ReactDebugCurrentFrame;
    function C(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function G(e) {
      return typeof e == "object" && e !== null && e.$$typeof === w;
    }
    function he() {
      {
        if (K.current) {
          var e = h(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function er(e) {
      return "";
    }
    var Ee = {};
    function rr(e) {
      {
        var r = he();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = rr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + h(e._owner.type) + "."), C(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), C(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (B(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            G(n) && be(n, r);
          }
        else if (G(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = we(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              G(i.value) && be(i.value, r);
        }
      }
    }
    function tr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = h(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var o = h(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            C(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), C(null);
            break;
          }
        }
        e.ref !== null && (C(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), C(null));
      }
    }
    var _e = {};
    function me(e, r, t, n, o, u) {
      {
        var i = Ie(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = er();
          v ? a += v : a += he();
          var s;
          e === null ? s = "null" : B(e) ? s = "array" : e !== void 0 && e.$$typeof === w ? (s = "<" + (h(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var f = Qe(e, r, t, o, u);
        if (f == null)
          return f;
        if (i) {
          var g = r.children;
          if (g !== void 0)
            if (n)
              if (B(g)) {
                for (var S = 0; S < g.length; S++)
                  Re(g[S], e);
                Object.freeze && Object.freeze(g);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(g, e);
        }
        if (k.call(r, "key")) {
          var _ = h(e), d = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), X = d.length > 0 ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_e[_ + X]) {
            var sr = d.length > 0 ? "{" + d.join(": ..., ") + ": ...}" : "{}";
            c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, X, _, sr, _), _e[_ + X] = !0;
          }
        }
        return e === m ? nr(f) : tr(f), f;
      }
    }
    function ar(e, r, t) {
      return me(e, r, t, !0);
    }
    function ir(e, r, t) {
      return me(e, r, t, !1);
    }
    var or = ir, ur = ar;
    F.Fragment = m, F.jsx = or, F.jsxs = ur;
  }()), F;
}
var Ce;
function vr() {
  return Ce || (Ce = 1, process.env.NODE_ENV === "production" ? M.exports = lr() : M.exports = cr()), M.exports;
}
var dr = vr();
const gr = ({ message: P = "Cheeeezy!" }) => /* @__PURE__ */ dr.jsx("div", { style: { fontFamily: "monospace", padding: "1rem", background: "#333", color: "#fff" }, children: P });
export {
  gr as CheezyTerm
};
