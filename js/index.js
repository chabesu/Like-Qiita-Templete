!(function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var i = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
          for (var i in e)
            n.d(
              r,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 0));
  })([
    function (e, t, n) {
      "use strict";
      n.r(t);
      n(1), n(2), n(3);
      var r = n(4);
      (window.$ = r), (window.jQuery = r), n(5), n(6), n(7), n(8);
    },
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {
      var r;
      /*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */ !(function (t, n) {
        "use strict";
        "object" == typeof e.exports
          ? (e.exports = t.document
              ? n(t, !0)
              : function (e) {
                  if (!e.document) throw new Error("jQuery requires a window with a document");
                  return n(e);
                })
          : n(t);
      })("undefined" != typeof window ? window : this, function (n, i) {
        "use strict";
        var o = [],
          a = n.document,
          s = Object.getPrototypeOf,
          l = o.slice,
          u = o.concat,
          c = o.push,
          f = o.indexOf,
          p = {},
          d = p.toString,
          h = p.hasOwnProperty,
          g = h.toString,
          v = g.call(Object),
          m = {},
          y = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
          },
          x = function (e) {
            return null != e && e === e.window;
          },
          b = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function w(e, t, n) {
          var r,
            i,
            o = (n = n || a).createElement("script");
          if (((o.text = e), t)) for (r in b) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
          n.head.appendChild(o).parentNode.removeChild(o);
        }
        function C(e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? p[d.call(e)] || "object" : typeof e;
        }
        var T = "3.4.1",
          S = function (e, t) {
            return new S.fn.init(e, t);
          },
          N = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function E(e) {
          var t = !!e && "length" in e && e.length,
            n = C(e);
          return !y(e) && !x(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
        }
        (S.fn = S.prototype = {
          jquery: T,
          constructor: S,
          length: 0,
          toArray: function () {
            return l.call(this);
          },
          get: function (e) {
            return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e];
          },
          pushStack: function (e) {
            var t = S.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return S.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              S.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(l.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: c,
          sort: o.sort,
          splice: o.splice,
        }),
          (S.extend = S.fn.extend = function () {
            var e,
              t,
              n,
              r,
              i,
              o,
              a = arguments[0] || {},
              s = 1,
              l = arguments.length,
              u = !1;
            for ("boolean" == typeof a && ((u = a), (a = arguments[s] || {}), s++), "object" == typeof a || y(a) || (a = {}), s === l && ((a = this), s--); s < l; s++)
              if (null != (e = arguments[s])) for (t in e) (r = e[t]), "__proto__" !== t && a !== r && (u && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? ((n = a[t]), (o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}), (i = !1), (a[t] = S.extend(u, o, r))) : void 0 !== r && (a[t] = r));
            return a;
          }),
          S.extend({
            expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
              throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
              var t, n;
              return !(!e || "[object Object]" !== d.call(e) || ((t = s(e)) && ("function" != typeof (n = h.call(t, "constructor") && t.constructor) || g.call(n) !== v)));
            },
            isEmptyObject: function (e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            globalEval: function (e, t) {
              w(e, { nonce: t && t.nonce });
            },
            each: function (e, t) {
              var n,
                r = 0;
              if (E(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
              else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
              return e;
            },
            trim: function (e) {
              return null == e ? "" : (e + "").replace(N, "");
            },
            makeArray: function (e, t) {
              var n = t || [];
              return null != e && (E(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
            },
            inArray: function (e, t, n) {
              return null == t ? -1 : f.call(t, e, n);
            },
            merge: function (e, t) {
              for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
              return (e.length = i), e;
            },
            grep: function (e, t, n) {
              for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
              return r;
            },
            map: function (e, t, n) {
              var r,
                i,
                o = 0,
                a = [];
              if (E(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
              else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
              return u.apply([], a);
            },
            guid: 1,
            support: m,
          }),
          "function" == typeof Symbol && (S.fn[Symbol.iterator] = o[Symbol.iterator]),
          S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            p["[object " + t + "]"] = t.toLowerCase();
          });
        var k = (function (e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            s,
            l,
            u,
            c,
            f,
            p,
            d,
            h,
            g,
            v,
            m,
            y,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            C = 0,
            T = 0,
            S = le(),
            N = le(),
            E = le(),
            k = le(),
            A = function (e, t) {
              return e === t && (f = !0), 0;
            },
            j = {}.hasOwnProperty,
            D = [],
            L = D.pop,
            P = D.push,
            R = D.push,
            q = D.slice,
            O = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
              return -1;
            },
            _ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            $ = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + $ + "*(" + H + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + $ + "*\\]",
            I = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            B = new RegExp($ + "+", "g"),
            W = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"),
            F = new RegExp("^" + $ + "*," + $ + "*"),
            z = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"),
            U = new RegExp($ + "|>"),
            V = new RegExp(I),
            X = new RegExp("^" + H + "$"),
            G = {
              ID: new RegExp("^#(" + H + ")"),
              CLASS: new RegExp("^\\.(" + H + ")"),
              TAG: new RegExp("^(" + H + "|[*])"),
              ATTR: new RegExp("^" + M),
              PSEUDO: new RegExp("^" + I),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + _ + ")$", "i"),
              needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)", "i"),
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + $ + "?|(" + $ + ")|.)", "ig"),
            ne = function (e, t, n) {
              var r = "0x" + t - 65536;
              return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
              return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            oe = function () {
              p();
            },
            ae = be(
              function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            R.apply((D = q.call(w.childNodes)), w.childNodes), D[w.childNodes.length].nodeType;
          } catch (t) {
            R = {
              apply: D.length
                ? function (e, t) {
                    P.apply(e, q.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          function se(e, t, r, i) {
            var o,
              s,
              u,
              c,
              f,
              h,
              m,
              y = t && t.ownerDocument,
              C = t ? t.nodeType : 9;
            if (((r = r || []), "string" != typeof e || !e || (1 !== C && 9 !== C && 11 !== C))) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)) {
              if (11 !== C && (f = Z.exec(e)))
                if ((o = f[1])) {
                  if (9 === C) {
                    if (!(u = t.getElementById(o))) return r;
                    if (u.id === o) return r.push(u), r;
                  } else if (y && (u = y.getElementById(o)) && x(t, u) && u.id === o) return r.push(u), r;
                } else {
                  if (f[2]) return R.apply(r, t.getElementsByTagName(e)), r;
                  if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return R.apply(r, t.getElementsByClassName(o)), r;
                }
              if (n.qsa && !k[e + " "] && (!v || !v.test(e)) && (1 !== C || "object" !== t.nodeName.toLowerCase())) {
                if (((m = e), (y = t), 1 === C && U.test(e))) {
                  for ((c = t.getAttribute("id")) ? (c = c.replace(re, ie)) : t.setAttribute("id", (c = b)), s = (h = a(e)).length; s--; ) h[s] = "#" + c + " " + xe(h[s]);
                  (m = h.join(",")), (y = (ee.test(e) && me(t.parentNode)) || t);
                }
                try {
                  return R.apply(r, y.querySelectorAll(m)), r;
                } catch (t) {
                  k(e, !0);
                } finally {
                  c === b && t.removeAttribute("id");
                }
              }
            }
            return l(e.replace(W, "$1"), t, r, i);
          }
          function le() {
            var e = [];
            return function t(n, i) {
              return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
            };
          }
          function ue(e) {
            return (e[b] = !0), e;
          }
          function ce(e) {
            var t = d.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
          }
          function pe(e, t) {
            var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function de(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function ge(e) {
            return function (t) {
              return "form" in t ? (t.parentNode && !1 === t.disabled ? ("label" in t ? ("label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e) : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)) : t.disabled === e) : "label" in t && t.disabled === e;
            };
          }
          function ve(e) {
            return ue(function (t) {
              return (
                (t = +t),
                ue(function (n, r) {
                  for (var i, o = e([], n.length, t), a = o.length; a--; ) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function me(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = se.support = {}),
          (o = se.isXML = function (e) {
            var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || (n && n.nodeName) || "HTML");
          }),
          (p = se.setDocument = function (e) {
            var t,
              i,
              a = e ? e.ownerDocument || e : w;
            return (
              a !== d &&
                9 === a.nodeType &&
                a.documentElement &&
                ((h = (d = a).documentElement),
                (g = !o(d)),
                w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)),
                (n.attributes = ce(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (n.getElementsByTagName = ce(function (e) {
                  return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
                })),
                (n.getElementsByClassName = J.test(d.getElementsByClassName)),
                (n.getById = ce(function (e) {
                  return (h.appendChild(e).id = b), !d.getElementsByName || !d.getElementsByName(b).length;
                })),
                n.getById
                  ? ((r.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (r.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((r.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                    (r.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && g) {
                        var n,
                          r,
                          i,
                          o = t.getElementById(e);
                        if (o) {
                          if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                          for (i = t.getElementsByName(e), r = 0; (o = i[r++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        }
                        return [];
                      }
                    })),
                (r.find.TAG = n.getElementsByTagName
                  ? function (e, t) {
                      return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                    }
                  : function (e, t) {
                      var n,
                        r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                        return r;
                      }
                      return o;
                    }),
                (r.find.CLASS =
                  n.getElementsByClassName &&
                  function (e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                  }),
                (m = []),
                (v = []),
                (n.qsa = J.test(d.querySelectorAll)) &&
                  (ce(function (e) {
                    (h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + $ + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length || v.push("\\[" + $ + "*(?:value|" + _ + ")"),
                      e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="),
                      e.querySelectorAll(":checked").length || v.push(":checked"),
                      e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]");
                  }),
                  ce(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = d.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length && v.push("name" + $ + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                      (h.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      v.push(",.*:");
                  })),
                (n.matchesSelector = J.test((y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                  ce(function (e) {
                    (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), m.push("!=", I);
                  }),
                (v = v.length && new RegExp(v.join("|"))),
                (m = m.length && new RegExp(m.join("|"))),
                (t = J.test(h.compareDocumentPosition)),
                (x =
                  t || J.test(h.contains)
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                      }
                    : function (e, t) {
                        if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (A = t
                  ? function (e, t) {
                      if (e === t) return (f = !0), 0;
                      var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === r) ? (e === d || (e.ownerDocument === w && x(w, e)) ? -1 : t === d || (t.ownerDocument === w && x(w, t)) ? 1 : c ? O(c, e) - O(c, t) : 0) : 4 & r ? -1 : 1);
                    }
                  : function (e, t) {
                      if (e === t) return (f = !0), 0;
                      var n,
                        r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                      if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                      if (i === o) return pe(e, t);
                      for (n = e; (n = n.parentNode); ) a.unshift(n);
                      for (n = t; (n = n.parentNode); ) s.unshift(n);
                      for (; a[r] === s[r]; ) r++;
                      return r ? pe(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
                    })),
              d
            );
          }),
          (se.matches = function (e, t) {
            return se(e, null, null, t);
          }),
          (se.matchesSelector = function (e, t) {
            if (((e.ownerDocument || e) !== d && p(e), n.matchesSelector && g && !k[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))))
              try {
                var r = y.call(e, t);
                if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
              } catch (e) {
                k(t, !0);
              }
            return 0 < se(t, d, null, [e]).length;
          }),
          (se.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t);
          }),
          (se.attr = function (e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
              o = i && j.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
          }),
          (se.escape = function (e) {
            return (e + "").replace(re, ie);
          }),
          (se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (se.uniqueSort = function (e) {
            var t,
              r = [],
              i = 0,
              o = 0;
            if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(A), f)) {
              for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
              for (; i--; ) e.splice(r[i], 1);
            }
            return (c = null), e;
          }),
          (i = se.getText = function (e) {
            var t,
              n = "",
              r = 0,
              o = e.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
              } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += i(t);
            return n;
          }),
          ((r = se.selectors = {
            cacheLength: 50,
            createPseudo: ue,
            match: G,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
              ATTR: function (e) {
                return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
              },
              CHILD: function (e) {
                return (e[1] = e[1].toLowerCase()), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && se.error(e[0]), e;
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return G.CHILD.test(e[0]) ? null : (e[3] ? (e[2] = e[4] || e[5] || "") : n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(te, ne).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = S[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) &&
                    S(e, function (e) {
                      return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                    }))
                );
              },
              ATTR: function (e, t, n) {
                return function (r) {
                  var i = se.attr(r, e);
                  return null == i
                    ? "!=" === t
                    : !t || ((i += ""), "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace(B, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function (e, t, n, r, i) {
                var o = "nth" !== e.slice(0, 3),
                  a = "last" !== e.slice(-4),
                  s = "of-type" === t;
                return 1 === r && 0 === i
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, l) {
                      var u,
                        c,
                        f,
                        p,
                        d,
                        h,
                        g = o !== a ? "nextSibling" : "previousSibling",
                        v = t.parentNode,
                        m = s && t.nodeName.toLowerCase(),
                        y = !l && !s,
                        x = !1;
                      if (v) {
                        if (o) {
                          for (; g; ) {
                            for (p = t; (p = p[g]); ) if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                            h = g = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [a ? v.firstChild : v.lastChild]), a && y)) {
                          for (x = (d = (u = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === C && u[1]) && u[2], p = d && v.childNodes[d]; (p = (++d && p && p[g]) || (x = d = 0) || h.pop()); )
                            if (1 === p.nodeType && ++x && p === t) {
                              c[e] = [C, d, x];
                              break;
                            }
                        } else if ((y && (x = d = (u = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === C && u[1]), !1 === x))
                          for (; (p = (++d && p && p[g]) || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [C, x]), p !== t)); );
                        return (x -= i) === r || (x % r == 0 && 0 <= x / r);
                      }
                    };
              },
              PSEUDO: function (e, t) {
                var n,
                  i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                return i[b]
                  ? i(t)
                  : 1 < i.length
                  ? ((n = [e, e, "", t]),
                    r.setFilters.hasOwnProperty(e.toLowerCase())
                      ? ue(function (e, n) {
                          for (var r, o = i(e, t), a = o.length; a--; ) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                        })
                      : function (e) {
                          return i(e, 0, n);
                        })
                  : i;
              },
            },
            pseudos: {
              not: ue(function (e) {
                var t = [],
                  n = [],
                  r = s(e.replace(W, "$1"));
                return r[b]
                  ? ue(function (e, t, n, i) {
                      for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                    })
                  : function (e, i, o) {
                      return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                    };
              }),
              has: ue(function (e) {
                return function (t) {
                  return 0 < se(e, t).length;
                };
              }),
              contains: ue(function (e) {
                return (
                  (e = e.replace(te, ne)),
                  function (t) {
                    return -1 < (t.textContent || i(t)).indexOf(e);
                  }
                );
              }),
              lang: ue(function (e) {
                return (
                  X.test(e || "") || se.error("unsupported lang: " + e),
                  (e = e.replace(te, ne).toLowerCase()),
                  function (t) {
                    var n;
                    do {
                      if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === h;
              },
              focus: function (e) {
                return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
              },
              enabled: ge(!1),
              disabled: ge(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
              },
              selected: function (e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !r.pseudos.empty(e);
              },
              header: function (e) {
                return K.test(e.nodeName);
              },
              input: function (e) {
                return Q.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                var t;
                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
              },
              first: ve(function () {
                return [0];
              }),
              last: ve(function (e, t) {
                return [t - 1];
              }),
              eq: ve(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: ve(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: ve(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: ve(function (e, t, n) {
                for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
                return e;
              }),
              gt: ve(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              }),
            },
          }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = de(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
          function ye() {}
          function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function be(e, t, n) {
            var r = t.dir,
              i = t.next,
              o = i || r,
              a = n && "parentNode" === o,
              s = T++;
            return t.first
              ? function (t, n, i) {
                  for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, i);
                  return !1;
                }
              : function (t, n, l) {
                  var u,
                    c,
                    f,
                    p = [C, s];
                  if (l) {
                    for (; (t = t[r]); ) if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a)
                        if (((c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
                        else {
                          if ((u = c[o]) && u[0] === C && u[1] === s) return (p[2] = u[2]);
                          if (((c[o] = p)[2] = e(t, n, l))) return !0;
                        }
                  return !1;
                };
          }
          function we(e) {
            return 1 < e.length
              ? function (t, n, r) {
                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Ce(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), u && t.push(s)));
            return a;
          }
          function Te(e, t, n, r, i, o) {
            return (
              r && !r[b] && (r = Te(r)),
              i && !i[b] && (i = Te(i, o)),
              ue(function (o, a, s, l) {
                var u,
                  c,
                  f,
                  p = [],
                  d = [],
                  h = a.length,
                  g =
                    o ||
                    (function (e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                      return n;
                    })(t || "*", s.nodeType ? [s] : s, []),
                  v = !e || (!o && t) ? g : Ce(g, p, e, s, l),
                  m = n ? (i || (o ? e : h || r) ? [] : a) : v;
                if ((n && n(v, m, s, l), r)) for (u = Ce(m, d), r(u, [], s, l), c = u.length; c--; ) (f = u[c]) && (m[d[c]] = !(v[d[c]] = f));
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (u = [], c = m.length; c--; ) (f = m[c]) && u.push((v[c] = f));
                      i(null, (m = []), u, l);
                    }
                    for (c = m.length; c--; ) (f = m[c]) && -1 < (u = i ? O(o, f) : p[c]) && (o[u] = !(a[u] = f));
                  }
                } else (m = Ce(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, l) : R.apply(a, m);
              })
            );
          }
          function Se(e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                a = r.relative[e[0].type],
                s = a || r.relative[" "],
                l = a ? 1 : 0,
                c = be(
                  function (e) {
                    return e === t;
                  },
                  s,
                  !0
                ),
                f = be(
                  function (e) {
                    return -1 < O(t, e);
                  },
                  s,
                  !0
                ),
                p = [
                  function (e, n, r) {
                    var i = (!a && (r || n !== u)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return (t = null), i;
                  },
                ];
              l < o;
              l++
            )
              if ((n = r.relative[e[l].type])) p = [be(we(p), n)];
              else {
                if ((n = r.filter[e[l].type].apply(null, e[l].matches))[b]) {
                  for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                  return Te(1 < l && we(p), 1 < l && xe(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(W, "$1"), n, l < i && Se(e.slice(l, i)), i < o && Se((e = e.slice(i))), i < o && xe(e));
                }
                p.push(n);
              }
            return we(p);
          }
          return (
            (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (a = se.tokenize = function (e, t) {
              var n,
                i,
                o,
                a,
                s,
                l,
                u,
                c = N[e + " "];
              if (c) return t ? 0 : c.slice(0);
              for (s = e, l = [], u = r.preFilter; s; ) {
                for (a in ((n && !(i = F.exec(s))) || (i && (s = s.slice(i[0].length) || s), l.push((o = []))), (n = !1), (i = z.exec(s)) && ((n = i.shift()), o.push({ value: n, type: i[0].replace(W, " ") }), (s = s.slice(n.length))), r.filter))
                  !(i = G[a].exec(s)) || (u[a] && !(i = u[a](i))) || ((n = i.shift()), o.push({ value: n, type: a, matches: i }), (s = s.slice(n.length)));
                if (!n) break;
              }
              return t ? s.length : s ? se.error(e) : N(e, l).slice(0);
            }),
            (s = se.compile = function (e, t) {
              var n,
                i,
                o,
                s,
                l,
                c,
                f = [],
                h = [],
                v = E[e + " "];
              if (!v) {
                for (t || (t = a(e)), n = t.length; n--; ) (v = Se(t[n]))[b] ? f.push(v) : h.push(v);
                (v = E(
                  e,
                  ((i = h),
                  (s = 0 < (o = f).length),
                  (l = 0 < i.length),
                  (c = function (e, t, n, a, c) {
                    var f,
                      h,
                      v,
                      m = 0,
                      y = "0",
                      x = e && [],
                      b = [],
                      w = u,
                      T = e || (l && r.find.TAG("*", c)),
                      S = (C += null == w ? 1 : Math.random() || 0.1),
                      N = T.length;
                    for (c && (u = t === d || t || c); y !== N && null != (f = T[y]); y++) {
                      if (l && f) {
                        for (h = 0, t || f.ownerDocument === d || (p(f), (n = !g)); (v = i[h++]); )
                          if (v(f, t || d, n)) {
                            a.push(f);
                            break;
                          }
                        c && (C = S);
                      }
                      s && ((f = !v && f) && m--, e && x.push(f));
                    }
                    if (((m += y), s && y !== m)) {
                      for (h = 0; (v = o[h++]); ) v(x, b, t, n);
                      if (e) {
                        if (0 < m) for (; y--; ) x[y] || b[y] || (b[y] = L.call(a));
                        b = Ce(b);
                      }
                      R.apply(a, b), c && !e && 0 < b.length && 1 < m + o.length && se.uniqueSort(a);
                    }
                    return c && ((C = S), (u = w)), x;
                  }),
                  s ? ue(c) : c)
                )).selector = e;
              }
              return v;
            }),
            (l = se.select = function (e, t, n, i) {
              var o,
                l,
                u,
                c,
                f,
                p = "function" == typeof e && e,
                d = !i && a((e = p.selector || e));
              if (((n = n || []), 1 === d.length)) {
                if (2 < (l = d[0] = d[0].slice(0)).length && "ID" === (u = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
                  if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                  p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                }
                for (o = G.needsContext.test(e) ? 0 : l.length; o-- && ((u = l[o]), !r.relative[(c = u.type)]); )
                  if ((f = r.find[c]) && (i = f(u.matches[0].replace(te, ne), (ee.test(l[0].type) && me(t.parentNode)) || t))) {
                    if ((l.splice(o, 1), !(e = i.length && xe(l)))) return R.apply(n, i), n;
                    break;
                  }
              }
              return (p || s(e, d))(i, t, !g, n, !t || (ee.test(e) && me(t.parentNode)) || t), n;
            }),
            (n.sortStable = b.split("").sort(A).join("") === b),
            (n.detectDuplicates = !!f),
            p(),
            (n.sortDetached = ce(function (e) {
              return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
            })),
            ce(function (e) {
              return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
              fe("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ce(function (e) {
                return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
              })) ||
              fe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
              }),
            ce(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              fe(_, function (e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
              }),
            se
          );
        })(n);
        (S.find = k), (S.expr = k.selectors), (S.expr[":"] = S.expr.pseudos), (S.uniqueSort = S.unique = k.uniqueSort), (S.text = k.getText), (S.isXMLDoc = k.isXML), (S.contains = k.contains), (S.escapeSelector = k.escape);
        var A = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (i && S(e).is(n)) break;
                r.push(e);
              }
            return r;
          },
          j = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
          D = S.expr.match.needsContext;
        function L(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function R(e, t, n) {
          return y(t)
            ? S.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n;
              })
            : t.nodeType
            ? S.grep(e, function (e) {
                return (e === t) !== n;
              })
            : "string" != typeof t
            ? S.grep(e, function (e) {
                return -1 < f.call(t, e) !== n;
              })
            : S.filter(t, e, n);
        }
        (S.filter = function (e, t, n) {
          var r = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
              ? S.find.matchesSelector(r, e)
                ? [r]
                : []
              : S.find.matches(
                  e,
                  S.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        }),
          S.fn.extend({
            find: function (e) {
              var t,
                n,
                r = this.length,
                i = this;
              if ("string" != typeof e)
                return this.pushStack(
                  S(e).filter(function () {
                    for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
              return 1 < r ? S.uniqueSort(n) : n;
            },
            filter: function (e) {
              return this.pushStack(R(this, e || [], !1));
            },
            not: function (e) {
              return this.pushStack(R(this, e || [], !0));
            },
            is: function (e) {
              return !!R(this, "string" == typeof e && D.test(e) ? S(e) : e || [], !1).length;
            },
          });
        var q,
          O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((S.fn.init = function (e, t, n) {
          var r, i;
          if (!e) return this;
          if (((n = n || q), "string" == typeof e)) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : O.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
              if (((t = t instanceof S ? t[0] : t), S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), P.test(r[1]) && S.isPlainObject(t))) for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            }
            return (i = a.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
          }
          return e.nodeType ? ((this[0] = e), (this.length = 1), this) : y(e) ? (void 0 !== n.ready ? n.ready(e) : e(S)) : S.makeArray(e, this);
        }).prototype = S.fn),
          (q = S(a));
        var _ = /^(?:parents|prev(?:Until|All))/,
          $ = { children: !0, contents: !0, next: !0, prev: !0 };
        function H(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e;
        }
        S.fn.extend({
          has: function (e) {
            var t = S(e, this),
              n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
            });
          },
          closest: function (e, t) {
            var n,
              r = 0,
              i = this.length,
              o = [],
              a = "string" != typeof e && S(e);
            if (!D.test(e))
              for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                    o.push(n);
                    break;
                  }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
          },
          index: function (e) {
            return e ? ("string" == typeof e ? f.call(S(e), this[0]) : f.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
          },
          add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
          },
          addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
          },
        }),
          S.each(
            {
              parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function (e) {
                return A(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                return A(e, "parentNode", n);
              },
              next: function (e) {
                return H(e, "nextSibling");
              },
              prev: function (e) {
                return H(e, "previousSibling");
              },
              nextAll: function (e) {
                return A(e, "nextSibling");
              },
              prevAll: function (e) {
                return A(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                return A(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                return A(e, "previousSibling", n);
              },
              siblings: function (e) {
                return j((e.parentNode || {}).firstChild, e);
              },
              children: function (e) {
                return j(e.firstChild);
              },
              contents: function (e) {
                return void 0 !== e.contentDocument ? e.contentDocument : (L(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
              },
            },
            function (e, t) {
              S.fn[e] = function (n, r) {
                var i = S.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = S.filter(r, i)), 1 < this.length && ($[e] || S.uniqueSort(i), _.test(e) && i.reverse()), this.pushStack(i);
              };
            }
          );
        var M = /[^\x20\t\r\n\f]+/g;
        function I(e) {
          return e;
        }
        function B(e) {
          throw e;
        }
        function W(e, t, n, r) {
          var i;
          try {
            e && y((i = e.promise)) ? i.call(e).done(t).fail(n) : e && y((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }
        (S.Callbacks = function (e) {
          var t, n;
          e =
            "string" == typeof e
              ? ((t = e),
                (n = {}),
                S.each(t.match(M) || [], function (e, t) {
                  n[t] = !0;
                }),
                n)
              : S.extend({}, e);
          var r,
            i,
            o,
            a,
            s = [],
            l = [],
            u = -1,
            c = function () {
              for (a = a || e.once, o = r = !0; l.length; u = -1) for (i = l.shift(); ++u < s.length; ) !1 === s[u].apply(i[0], i[1]) && e.stopOnFalse && ((u = s.length), (i = !1));
              e.memory || (i = !1), (r = !1), a && (s = i ? [] : "");
            },
            f = {
              add: function () {
                return (
                  s &&
                    (i && !r && ((u = s.length - 1), l.push(i)),
                    (function t(n) {
                      S.each(n, function (n, r) {
                        y(r) ? (e.unique && f.has(r)) || s.push(r) : r && r.length && "string" !== C(r) && t(r);
                      });
                    })(arguments),
                    i && !r && c()),
                  this
                );
              },
              remove: function () {
                return (
                  S.each(arguments, function (e, t) {
                    for (var n; -1 < (n = S.inArray(t, s, n)); ) s.splice(n, 1), n <= u && u--;
                  }),
                  this
                );
              },
              has: function (e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length;
              },
              empty: function () {
                return s && (s = []), this;
              },
              disable: function () {
                return (a = l = []), (s = i = ""), this;
              },
              disabled: function () {
                return !s;
              },
              lock: function () {
                return (a = l = []), i || r || (s = i = ""), this;
              },
              locked: function () {
                return !!a;
              },
              fireWith: function (e, t) {
                return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), l.push(t), r || c()), this;
              },
              fire: function () {
                return f.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!o;
              },
            };
          return f;
        }),
          S.extend({
            Deferred: function (e) {
              var t = [
                  ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                  ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                  ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"],
                ],
                r = "pending",
                i = {
                  state: function () {
                    return r;
                  },
                  always: function () {
                    return o.done(arguments).fail(arguments), this;
                  },
                  catch: function (e) {
                    return i.then(null, e);
                  },
                  pipe: function () {
                    var e = arguments;
                    return S.Deferred(function (n) {
                      S.each(t, function (t, r) {
                        var i = y(e[r[4]]) && e[r[4]];
                        o[r[1]](function () {
                          var e = i && i.apply(this, arguments);
                          e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    }).promise();
                  },
                  then: function (e, r, i) {
                    var o = 0;
                    function a(e, t, r, i) {
                      return function () {
                        var s = this,
                          l = arguments,
                          u = function () {
                            var n, u;
                            if (!(e < o)) {
                              if ((n = r.apply(s, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                              (u = n && ("object" == typeof n || "function" == typeof n) && n.then), y(u) ? (i ? u.call(n, a(o, t, I, i), a(o, t, B, i)) : (o++, u.call(n, a(o, t, I, i), a(o, t, B, i), a(o, t, I, t.notifyWith)))) : (r !== I && ((s = void 0), (l = [n])), (i || t.resolveWith)(s, l));
                            }
                          },
                          c = i
                            ? u
                            : function () {
                                try {
                                  u();
                                } catch (n) {
                                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(n, c.stackTrace), o <= e + 1 && (r !== B && ((s = void 0), (l = [n])), t.rejectWith(s, l));
                                }
                              };
                        e ? c() : (S.Deferred.getStackHook && (c.stackTrace = S.Deferred.getStackHook()), n.setTimeout(c));
                      };
                    }
                    return S.Deferred(function (n) {
                      t[0][3].add(a(0, n, y(i) ? i : I, n.notifyWith)), t[1][3].add(a(0, n, y(e) ? e : I)), t[2][3].add(a(0, n, y(r) ? r : B));
                    }).promise();
                  },
                  promise: function (e) {
                    return null != e ? S.extend(e, i) : i;
                  },
                },
                o = {};
              return (
                S.each(t, function (e, n) {
                  var a = n[2],
                    s = n[5];
                  (i[n[1]] = a.add),
                    s &&
                      a.add(
                        function () {
                          r = s;
                        },
                        t[3 - e][2].disable,
                        t[3 - e][3].disable,
                        t[0][2].lock,
                        t[0][3].lock
                      ),
                    a.add(n[3].fire),
                    (o[n[0]] = function () {
                      return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
                    }),
                    (o[n[0] + "With"] = a.fireWith);
                }),
                i.promise(o),
                e && e.call(o, o),
                o
              );
            },
            when: function (e) {
              var t = arguments.length,
                n = t,
                r = Array(n),
                i = l.call(arguments),
                o = S.Deferred(),
                a = function (e) {
                  return function (n) {
                    (r[e] = this), (i[e] = 1 < arguments.length ? l.call(arguments) : n), --t || o.resolveWith(r, i);
                  };
                };
              if (t <= 1 && (W(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || y(i[n] && i[n].then))) return o.then();
              for (; n--; ) W(i[n], a(n), o.reject);
              return o.promise();
            },
          });
        var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (S.Deferred.exceptionHook = function (e, t) {
          n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
        }),
          (S.readyException = function (e) {
            n.setTimeout(function () {
              throw e;
            });
          });
        var z = S.Deferred();
        function U() {
          a.removeEventListener("DOMContentLoaded", U), n.removeEventListener("load", U), S.ready();
        }
        (S.fn.ready = function (e) {
          return (
            z.then(e).catch(function (e) {
              S.readyException(e);
            }),
            this
          );
        }),
          S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
              (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== e && 0 < --S.readyWait) || z.resolveWith(a, [S]);
            },
          }),
          (S.ready.then = z.then),
          "complete" === a.readyState || ("loading" !== a.readyState && !a.documentElement.doScroll) ? n.setTimeout(S.ready) : (a.addEventListener("DOMContentLoaded", U), n.addEventListener("load", U));
        var V = function (e, t, n, r, i, o, a) {
            var s = 0,
              l = e.length,
              u = null == n;
            if ("object" === C(n)) for (s in ((i = !0), n)) V(e, t, s, n[s], !0, o, a);
            else if (
              void 0 !== r &&
              ((i = !0),
              y(r) || (a = !0),
              u &&
                (a
                  ? (t.call(e, r), (t = null))
                  : ((u = t),
                    (t = function (e, t, n) {
                      return u.call(S(e), n);
                    }))),
              t)
            )
              for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
          },
          X = /^-ms-/,
          G = /-([a-z])/g;
        function Y(e, t) {
          return t.toUpperCase();
        }
        function Q(e) {
          return e.replace(X, "ms-").replace(G, Y);
        }
        var K = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
        function J() {
          this.expando = S.expando + J.uid++;
        }
        (J.uid = 1),
          (J.prototype = {
            cache: function (e) {
              var t = e[this.expando];
              return t || ((t = {}), K(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
              var r,
                i = this.cache(e);
              if ("string" == typeof t) i[Q(t)] = n;
              else for (r in t) i[Q(r)] = t[r];
              return i;
            },
            get: function (e, t) {
              return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)];
            },
            access: function (e, t, n) {
              return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
              var n,
                r = e[this.expando];
              if (void 0 !== r) {
                if (void 0 !== t) {
                  n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t)) in r ? [t] : t.match(M) || []).length;
                  for (; n--; ) delete r[t[n]];
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
              }
            },
            hasData: function (e) {
              var t = e[this.expando];
              return void 0 !== t && !S.isEmptyObject(t);
            },
          });
        var Z = new J(),
          ee = new J(),
          te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          ne = /[A-Z]/g;
        function re(e, t, n) {
          var r, i;
          if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(ne, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
              try {
                n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : te.test(i) ? JSON.parse(i) : i));
              } catch (e) {}
              ee.set(e, t, n);
            } else n = void 0;
          return n;
        }
        S.extend({
          hasData: function (e) {
            return ee.hasData(e) || Z.hasData(e);
          },
          data: function (e, t, n) {
            return ee.access(e, t, n);
          },
          removeData: function (e, t) {
            ee.remove(e, t);
          },
          _data: function (e, t, n) {
            return Z.access(e, t, n);
          },
          _removeData: function (e, t) {
            Z.remove(e, t);
          },
        }),
          S.fn.extend({
            data: function (e, t) {
              var n,
                r,
                i,
                o = this[0],
                a = o && o.attributes;
              if (void 0 === e) {
                if (this.length && ((i = ee.get(o)), 1 === o.nodeType && !Z.get(o, "hasDataAttrs"))) {
                  for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && ((r = Q(r.slice(5))), re(o, r, i[r]));
                  Z.set(o, "hasDataAttrs", !0);
                }
                return i;
              }
              return "object" == typeof e
                ? this.each(function () {
                    ee.set(this, e);
                  })
                : V(
                    this,
                    function (t) {
                      var n;
                      if (o && void 0 === t) return void 0 !== (n = ee.get(o, e)) ? n : void 0 !== (n = re(o, e)) ? n : void 0;
                      this.each(function () {
                        ee.set(this, e, t);
                      });
                    },
                    null,
                    t,
                    1 < arguments.length,
                    null,
                    !0
                  );
            },
            removeData: function (e) {
              return this.each(function () {
                ee.remove(this, e);
              });
            },
          }),
          S.extend({
            queue: function (e, t, n) {
              var r;
              if (e) return (t = (t || "fx") + "queue"), (r = Z.get(e, t)), n && (!r || Array.isArray(n) ? (r = Z.access(e, t, S.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
              t = t || "fx";
              var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
              "inprogress" === i && ((i = n.shift()), r--),
                i &&
                  ("fx" === t && n.unshift("inprogress"),
                  delete o.stop,
                  i.call(
                    e,
                    function () {
                      S.dequeue(e, t);
                    },
                    o
                  )),
                !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return (
                Z.get(e, n) ||
                Z.access(e, n, {
                  empty: S.Callbacks("once memory").add(function () {
                    Z.remove(e, [t + "queue", n]);
                  }),
                })
              );
            },
          }),
          S.fn.extend({
            queue: function (e, t) {
              var n = 2;
              return (
                "string" != typeof e && ((t = e), (e = "fx"), n--),
                arguments.length < n
                  ? S.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function () {
                      var n = S.queue(this, e, t);
                      S._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && S.dequeue(this, e);
                    })
              );
            },
            dequeue: function (e) {
              return this.each(function () {
                S.dequeue(this, e);
              });
            },
            clearQueue: function (e) {
              return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
              var n,
                r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                  --r || i.resolveWith(o, [o]);
                };
              for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (n = Z.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
              return s(), i.promise(t);
            },
          });
        var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          oe = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
          ae = ["Top", "Right", "Bottom", "Left"],
          se = a.documentElement,
          le = function (e) {
            return S.contains(e.ownerDocument, e);
          },
          ue = { composed: !0 };
        se.getRootNode &&
          (le = function (e) {
            return S.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument;
          });
        var ce = function (e, t) {
            return "none" === (e = t || e).style.display || ("" === e.style.display && le(e) && "none" === S.css(e, "display"));
          },
          fe = function (e, t, n, r) {
            var i,
              o,
              a = {};
            for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
            return i;
          };
        function pe(e, t, n, r) {
          var i,
            o,
            a = 20,
            s = r
              ? function () {
                  return r.cur();
                }
              : function () {
                  return S.css(e, t, "");
                },
            l = s(),
            u = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || ("px" !== u && +l)) && oe.exec(S.css(e, t));
          if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; a--; ) S.style(e, t, c + u), (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0), (c /= o);
            (c *= 2), S.style(e, t, c + u), (n = n || []);
          }
          return n && ((c = +c || +l || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = u), (r.start = c), (r.end = i))), i;
        }
        var de = {};
        function he(e, t) {
          for (var n, r, i, o, a, s, l, u = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style &&
              ((n = r.style.display),
              t
                ? ("none" === n && ((u[c] = Z.get(r, "display") || null), u[c] || (r.style.display = "")),
                  "" === r.style.display && ce(r) && (u[c] = ((l = a = o = void 0), (a = (i = r).ownerDocument), (s = i.nodeName), (l = de[s]) || ((o = a.body.appendChild(a.createElement(s))), (l = S.css(o, "display")), o.parentNode.removeChild(o), "none" === l && (l = "block"), (de[s] = l)))))
                : "none" !== n && ((u[c] = "none"), Z.set(r, "display", n)));
          for (c = 0; c < f; c++) null != u[c] && (e[c].style.display = u[c]);
          return e;
        }
        S.fn.extend({
          show: function () {
            return he(this, !0);
          },
          hide: function () {
            return he(this);
          },
          toggle: function (e) {
            return "boolean" == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function () {
                  ce(this) ? S(this).show() : S(this).hide();
                });
          },
        });
        var ge = /^(?:checkbox|radio)$/i,
          ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          me = /^$|^module$|\/(?:java|ecma)script/i,
          ye = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        function xe(e, t) {
          var n;
          return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && L(e, t)) ? S.merge([e], n) : n;
        }
        function be(e, t) {
          for (var n = 0, r = e.length; n < r; n++) Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
        }
        (ye.optgroup = ye.option), (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead), (ye.th = ye.td);
        var we,
          Ce,
          Te = /<|&#?\w+;/;
        function Se(e, t, n, r, i) {
          for (var o, a, s, l, u, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
              if ("object" === C(o)) S.merge(p, o.nodeType ? [o] : o);
              else if (Te.test(o)) {
                for (a = a || f.appendChild(t.createElement("div")), s = (ve.exec(o) || ["", ""])[1].toLowerCase(), l = ye[s] || ye._default, a.innerHTML = l[1] + S.htmlPrefilter(o) + l[2], c = l[0]; c--; ) a = a.lastChild;
                S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
              } else p.push(t.createTextNode(o));
          for (f.textContent = "", d = 0; (o = p[d++]); )
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (((u = le(o)), (a = xe(f.appendChild(o), "script")), u && be(a), n)) for (c = 0; (o = a[c++]); ) me.test(o.type || "") && n.push(o);
          return f;
        }
        (we = a.createDocumentFragment().appendChild(a.createElement("div"))),
          (Ce = a.createElement("input")).setAttribute("type", "radio"),
          Ce.setAttribute("checked", "checked"),
          Ce.setAttribute("name", "t"),
          we.appendChild(Ce),
          (m.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (we.innerHTML = "<textarea>x</textarea>"),
          (m.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue);
        var Ne = /^key/,
          Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          ke = /^([^.]*)(?:\.(.+)|)/;
        function Ae() {
          return !0;
        }
        function je() {
          return !1;
        }
        function De(e, t) {
          return (
            (e ===
              (function () {
                try {
                  return a.activeElement;
                } catch (e) {}
              })()) ==
            ("focus" === t)
          );
        }
        function Le(e, t, n, r, i, o) {
          var a, s;
          if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) Le(e, s, n, r, t[s], o);
            return e;
          }
          if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = je;
          else if (!i) return e;
          return (
            1 === o &&
              ((a = i),
              ((i = function (e) {
                return S().off(e), a.apply(this, arguments);
              }).guid = a.guid || (a.guid = S.guid++))),
            e.each(function () {
              S.event.add(this, t, i, r, n);
            })
          );
        }
        function Pe(e, t, n) {
          n
            ? (Z.set(e, t, !1),
              S.event.add(e, t, {
                namespace: !1,
                handler: function (e) {
                  var r,
                    i,
                    o = Z.get(this, t);
                  if (1 & e.isTrigger && this[t]) {
                    if (o.length) (S.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (((o = l.call(arguments)), Z.set(this, t, o), (r = n(this, t)), this[t](), o !== (i = Z.get(this, t)) || r ? Z.set(this, t, !1) : (i = {}), o !== i)) return e.stopImmediatePropagation(), e.preventDefault(), i.value;
                  } else o.length && (Z.set(this, t, { value: S.event.trigger(S.extend(o[0], S.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation());
                },
              }))
            : void 0 === Z.get(e, t) && S.event.add(e, t, Ae);
        }
        (S.event = {
          global: {},
          add: function (e, t, n, r, i) {
            var o,
              a,
              s,
              l,
              u,
              c,
              f,
              p,
              d,
              h,
              g,
              v = Z.get(e);
            if (v)
              for (
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                  i && S.find.matchesSelector(se, i),
                  n.guid || (n.guid = S.guid++),
                  (l = v.events) || (l = v.events = {}),
                  (a = v.handle) ||
                    (a = v.handle = function (t) {
                      return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0;
                    }),
                  u = (t = (t || "").match(M) || [""]).length;
                u--;
  
              )
                (d = g = (s = ke.exec(t[u]) || [])[1]),
                  (h = (s[2] || "").split(".").sort()),
                  d &&
                    ((f = S.event.special[d] || {}),
                    (d = (i ? f.delegateType : f.bindType) || d),
                    (f = S.event.special[d] || {}),
                    (c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                    (p = l[d]) || (((p = l[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(d, a))),
                    f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    (S.event.global[d] = !0));
          },
          remove: function (e, t, n, r, i) {
            var o,
              a,
              s,
              l,
              u,
              c,
              f,
              p,
              d,
              h,
              g,
              v = Z.hasData(e) && Z.get(e);
            if (v && (l = v.events)) {
              for (u = (t = (t || "").match(M) || [""]).length; u--; )
                if (((d = g = (s = ke.exec(t[u]) || [])[1]), (h = (s[2] || "").split(".").sort()), d)) {
                  for (f = S.event.special[d] || {}, p = l[(d = (r ? f.delegateType : f.bindType) || d)] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--; )
                    (c = p[o]), (!i && g !== c.origType) || (n && n.guid !== c.guid) || (s && !s.test(c.namespace)) || (r && r !== c.selector && ("**" !== r || !c.selector)) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                  a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || S.removeEvent(e, d, v.handle), delete l[d]);
                } else for (d in l) S.event.remove(e, d + t[u], n, r, !0);
              S.isEmptyObject(l) && Z.remove(e, "handle events");
            }
          },
          dispatch: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s = S.event.fix(e),
              l = new Array(arguments.length),
              u = (Z.get(this, "events") || {})[s.type] || [],
              c = S.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (((s.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, s))) {
              for (a = S.event.handlers.call(this, s, u), t = 0; (i = a[t++]) && !s.isPropagationStopped(); )
                for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                  (s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace)) || ((s.handleObj = o), (s.data = o.data), void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
              return c.postDispatch && c.postDispatch.call(this, s), s.result;
            }
          },
          handlers: function (e, t) {
            var n,
              r,
              i,
              o,
              a,
              s = [],
              l = t.delegateCount,
              u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
              for (; u !== this; u = u.parentNode || this)
                if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                  for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? -1 < S(i, this).index(u) : S.find(i, this, null, [u]).length), a[i] && o.push(r);
                  o.length && s.push({ elem: u, handlers: o });
                }
            return (u = this), l < t.length && s.push({ elem: u, handlers: t.slice(l) }), s;
          },
          addProp: function (e, t) {
            Object.defineProperty(S.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: y(t)
                ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                  }
                : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                  },
              set: function (t) {
                Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
              },
            });
          },
          fix: function (e) {
            return e[S.expando] ? e : new S.Event(e);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (e) {
                var t = this || e;
                return ge.test(t.type) && t.click && L(t, "input") && Pe(t, "click", Ae), !1;
              },
              trigger: function (e) {
                var t = this || e;
                return ge.test(t.type) && t.click && L(t, "input") && Pe(t, "click"), !0;
              },
              _default: function (e) {
                var t = e.target;
                return (ge.test(t.type) && t.click && L(t, "input") && Z.get(t, "click")) || L(t, "a");
              },
            },
            beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
              },
            },
          },
        }),
          (S.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
          (S.Event = function (e, t) {
            if (!(this instanceof S.Event)) return new S.Event(e, t);
            e && e.type
              ? ((this.originalEvent = e), (this.type = e.type), (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ae : je), (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target), (this.currentTarget = e.currentTarget), (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && S.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[S.expando] = !0);
          }),
          (S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: je,
            isPropagationStopped: je,
            isImmediatePropagationStopped: je,
            isSimulated: !1,
            preventDefault: function () {
              var e = this.originalEvent;
              (this.isDefaultPrevented = Ae), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
              var e = this.originalEvent;
              (this.isPropagationStopped = Ae), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = Ae), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
          }),
          S.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: function (e) {
                var t = e.button;
                return null == e.which && Ne.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Ee.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
              },
            },
            S.event.addProp
          ),
          S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            S.event.special[e] = {
              setup: function () {
                return Pe(this, e, De), !1;
              },
              trigger: function () {
                return Pe(this, e), !0;
              },
              delegateType: t,
            };
          }),
          S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
            S.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = e.relatedTarget,
                  i = e.handleObj;
                return (r && (r === this || S.contains(this, r))) || ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)), n;
              },
            };
          }),
          S.fn.extend({
            on: function (e, t, n, r) {
              return Le(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
              return Le(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
              var r, i;
              if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
              if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this;
              }
              return (
                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = je),
                this.each(function () {
                  S.event.remove(this, e, n, t);
                })
              );
            },
          });
        var Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          qe = /<script|<style|<link/i,
          Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
          _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function $e(e, t) {
          return (L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0]) || e;
        }
        function He(e) {
          return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
        }
        function Me(e) {
          return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
        }
        function Ie(e, t) {
          var n, r, i, o, a, s, l, u;
          if (1 === t.nodeType) {
            if (Z.hasData(e) && ((o = Z.access(e)), (a = Z.set(t, o)), (u = o.events))) for (i in (delete a.handle, (a.events = {}), u)) for (n = 0, r = u[i].length; n < r; n++) S.event.add(t, i, u[i][n]);
            ee.hasData(e) && ((s = ee.access(e)), (l = S.extend({}, s)), ee.set(t, l));
          }
        }
        function Be(e, t, n, r) {
          t = u.apply([], t);
          var i,
            o,
            a,
            s,
            l,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            h = t[0],
            g = y(h);
          if (g || (1 < p && "string" == typeof h && !m.checkClone && Oe.test(h)))
            return e.each(function (i) {
              var o = e.eq(i);
              g && (t[0] = h.call(this, i, o.html())), Be(o, t, n, r);
            });
          if (p && ((o = (i = Se(t, e[0].ownerDocument, !1, e, r)).firstChild), 1 === i.childNodes.length && (i = o), o || r)) {
            for (s = (a = S.map(xe(i, "script"), He)).length; f < p; f++) (l = i), f !== d && ((l = S.clone(l, !0, !0)), s && S.merge(a, xe(l, "script"))), n.call(e[f], l, f);
            if (s)
              for (c = a[a.length - 1].ownerDocument, S.map(a, Me), f = 0; f < s; f++)
                (l = a[f]), me.test(l.type || "") && !Z.access(l, "globalEval") && S.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && !l.noModule && S._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }) : w(l.textContent.replace(_e, ""), l, c));
          }
          return e;
        }
        function We(e, t, n) {
          for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(xe(r)), r.parentNode && (n && le(r) && be(xe(r, "script")), r.parentNode.removeChild(r));
          return e;
        }
        S.extend({
          htmlPrefilter: function (e) {
            return e.replace(Re, "<$1></$2>");
          },
          clone: function (e, t, n) {
            var r,
              i,
              o,
              a,
              s,
              l,
              u,
              c = e.cloneNode(!0),
              f = le(e);
            if (!(m.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || S.isXMLDoc(e))) for (a = xe(c), r = 0, i = (o = xe(e)).length; r < i; r++) (s = o[r]), "input" === (u = (l = a[r]).nodeName.toLowerCase()) && ge.test(s.type) ? (l.checked = s.checked) : ("input" !== u && "textarea" !== u) || (l.defaultValue = s.defaultValue);
            if (t)
              if (n) for (o = o || xe(e), a = a || xe(c), r = 0, i = o.length; r < i; r++) Ie(o[r], a[r]);
              else Ie(e, c);
            return 0 < (a = xe(c, "script")).length && be(a, !f && xe(e, "script")), c;
          },
          cleanData: function (e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
              if (K(n)) {
                if ((t = n[Z.expando])) {
                  if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                  n[Z.expando] = void 0;
                }
                n[ee.expando] && (n[ee.expando] = void 0);
              }
          },
        }),
          S.fn.extend({
            detach: function (e) {
              return We(this, e, !0);
            },
            remove: function (e) {
              return We(this, e);
            },
            text: function (e) {
              return V(
                this,
                function (e) {
                  return void 0 === e
                    ? S.text(this)
                    : this.empty().each(function () {
                        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                      });
                },
                null,
                e,
                arguments.length
              );
            },
            append: function () {
              return Be(this, arguments, function (e) {
                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || $e(this, e).appendChild(e);
              });
            },
            prepend: function () {
              return Be(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = $e(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function () {
              return Be(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function () {
              return Be(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(xe(e, !1)), (e.textContent = ""));
              return this;
            },
            clone: function (e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function () {
                  return S.clone(this, e, t);
                })
              );
            },
            html: function (e) {
              return V(
                this,
                function (e) {
                  var t = this[0] || {},
                    n = 0,
                    r = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if ("string" == typeof e && !qe.test(e) && !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                      for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(xe(t, !1)), (t.innerHTML = e));
                      t = 0;
                    } catch (e) {}
                  }
                  t && this.empty().append(e);
                },
                null,
                e,
                arguments.length
              );
            },
            replaceWith: function () {
              var e = [];
              return Be(
                this,
                arguments,
                function (t) {
                  var n = this.parentNode;
                  S.inArray(this, e) < 0 && (S.cleanData(xe(this)), n && n.replaceChild(t, this));
                },
                e
              );
            },
          }),
          S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            S.fn[e] = function (e) {
              for (var n, r = [], i = S(e), o = i.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), S(i[a])[t](n), c.apply(r, n.get());
              return this.pushStack(r);
            };
          });
        var Fe = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
          ze = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = n), t.getComputedStyle(e);
          },
          Ue = new RegExp(ae.join("|"), "i");
        function Ve(e, t, n) {
          var r,
            i,
            o,
            a,
            s = e.style;
          return (n = n || ze(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || le(e) || (a = S.style(e, t)), !m.pixelBoxStyles() && Fe.test(a) && Ue.test(t) && ((r = s.width), (i = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))), void 0 !== a ? a + "" : a;
        }
        function Xe(e, t) {
          return {
            get: function () {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get;
            },
          };
        }
        !(function () {
          function e() {
            if (c) {
              (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"), (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"), se.appendChild(u).appendChild(c);
              var e = n.getComputedStyle(c);
              (r = "1%" !== e.top), (l = 12 === t(e.marginLeft)), (c.style.right = "60%"), (s = 36 === t(e.right)), (i = 36 === t(e.width)), (c.style.position = "absolute"), (o = 12 === t(c.offsetWidth / 3)), se.removeChild(u), (c = null);
            }
          }
          function t(e) {
            return Math.round(parseFloat(e));
          }
          var r,
            i,
            o,
            s,
            l,
            u = a.createElement("div"),
            c = a.createElement("div");
          c.style &&
            ((c.style.backgroundClip = "content-box"),
            (c.cloneNode(!0).style.backgroundClip = ""),
            (m.clearCloneStyle = "content-box" === c.style.backgroundClip),
            S.extend(m, {
              boxSizingReliable: function () {
                return e(), i;
              },
              pixelBoxStyles: function () {
                return e(), s;
              },
              pixelPosition: function () {
                return e(), r;
              },
              reliableMarginLeft: function () {
                return e(), l;
              },
              scrollboxSize: function () {
                return e(), o;
              },
            }));
        })();
        var Ge = ["Webkit", "Moz", "ms"],
          Ye = a.createElement("div").style,
          Qe = {};
        function Ke(e) {
          return (
            S.cssProps[e] ||
            Qe[e] ||
            (e in Ye
              ? e
              : (Qe[e] =
                  (function (e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Ge.length; n--; ) if ((e = Ge[n] + t) in Ye) return e;
                  })(e) || e))
          );
        }
        var Je = /^(none|table(?!-c[ea]).+)/,
          Ze = /^--/,
          et = { position: "absolute", visibility: "hidden", display: "block" },
          tt = { letterSpacing: "0", fontWeight: "400" };
        function nt(e, t, n) {
          var r = oe.exec(t);
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
        }
        function rt(e, t, n, r, i, o) {
          var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
          if (n === (r ? "border" : "content")) return 0;
          for (; a < 4; a += 2)
            "margin" === n && (l += S.css(e, n + ae[a], !0, i)),
              r ? ("content" === n && (l -= S.css(e, "padding" + ae[a], !0, i)), "margin" !== n && (l -= S.css(e, "border" + ae[a] + "Width", !0, i))) : ((l += S.css(e, "padding" + ae[a], !0, i)), "padding" !== n ? (l += S.css(e, "border" + ae[a] + "Width", !0, i)) : (s += S.css(e, "border" + ae[a] + "Width", !0, i)));
          return !r && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - 0.5)) || 0), l;
        }
        function it(e, t, n) {
          var r = ze(e),
            i = (!m.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Ve(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
          if (Fe.test(a)) {
            if (!n) return a;
            a = "auto";
          }
          return ((!m.boxSizingReliable() && i) || "auto" === a || (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) && e.getClientRects().length && ((i = "border-box" === S.css(e, "boxSizing", !1, r)), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + rt(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
        }
        function ot(e, t, n, r, i) {
          return new ot.prototype.init(e, t, n, r, i);
        }
        S.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = Ve(e, "opacity");
                  return "" === n ? "1" : n;
                }
              },
            },
          },
          cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
          cssProps: {},
          style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i,
                o,
                a,
                s = Q(t),
                l = Ze.test(t),
                u = e.style;
              if ((l || (t = Ke(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
              "string" == (o = typeof n) && (i = oe.exec(n)) && i[1] && ((n = pe(e, t, i)), (o = "number")),
                null != n && n == n && ("number" !== o || l || (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (l ? u.setProperty(t, n) : (u[t] = n)));
            }
          },
          css: function (e, t, n, r) {
            var i,
              o,
              a,
              s = Q(t);
            return Ze.test(t) || (t = Ke(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ve(e, t, r)), "normal" === i && t in tt && (i = tt[t]), "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i;
          },
        }),
          S.each(["height", "width"], function (e, t) {
            S.cssHooks[t] = {
              get: function (e, n, r) {
                if (n)
                  return !Je.test(S.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                    ? it(e, t, r)
                    : fe(e, et, function () {
                        return it(e, t, r);
                      });
              },
              set: function (e, n, r) {
                var i,
                  o = ze(e),
                  a = !m.scrollboxSize() && "absolute" === o.position,
                  s = (a || r) && "border-box" === S.css(e, "boxSizing", !1, o),
                  l = r ? rt(e, t, r, s, o) : 0;
                return s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - rt(e, t, "border", !1, o) - 0.5)), l && (i = oe.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = S.css(e, t))), nt(0, n, l);
              },
            };
          }),
          (S.cssHooks.marginLeft = Xe(m.reliableMarginLeft, function (e, t) {
            if (t)
              return (
                (parseFloat(Ve(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                    fe(e, { marginLeft: 0 }, function () {
                      return e.getBoundingClientRect().left;
                    })) + "px"
              );
          })),
          S.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (S.cssHooks[e + t] = {
              expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ae[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
              },
            }),
              "margin" !== e && (S.cssHooks[e + t].set = nt);
          }),
          S.fn.extend({
            css: function (e, t) {
              return V(
                this,
                function (e, t, n) {
                  var r,
                    i,
                    o = {},
                    a = 0;
                  if (Array.isArray(t)) {
                    for (r = ze(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o;
                  }
                  return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                },
                e,
                t,
                1 < arguments.length
              );
            },
          }),
          (((S.Tween = ot).prototype = {
            constructor: ot,
            init: function (e, t, n, r, i, o) {
              (this.elem = e), (this.prop = n), (this.easing = i || S.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (S.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var e = ot.propHooks[this.prop];
              return e && e.get ? e.get(this) : ot.propHooks._default.get(this);
            },
            run: function (e) {
              var t,
                n = ot.propHooks[this.prop];
              return this.options.duration ? (this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e), (this.now = (this.end - this.start) * t + this.start), this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this;
            },
          }).init.prototype = ot.prototype),
          ((ot.propHooks = {
            _default: {
              get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
              },
              set: function (e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!S.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)]) ? (e.elem[e.prop] = e.now) : S.style(e.elem, e.prop, e.now + e.unit);
              },
            },
          }).scrollTop = ot.propHooks.scrollLeft = {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
          (S.easing = {
            linear: function (e) {
              return e;
            },
            swing: function (e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
          }),
          (S.fx = ot.prototype.init),
          (S.fx.step = {});
        var at,
          st,
          lt,
          ut,
          ct = /^(?:toggle|show|hide)$/,
          ft = /queueHooks$/;
        function pt() {
          st && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(pt) : n.setTimeout(pt, S.fx.interval), S.fx.tick());
        }
        function dt() {
          return (
            n.setTimeout(function () {
              at = void 0;
            }),
            (at = Date.now())
          );
        }
        function ht(e, t) {
          var n,
            r = 0,
            i = { height: e };
          for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ae[r])] = i["padding" + n] = e;
          return t && (i.opacity = i.width = e), i;
        }
        function gt(e, t, n) {
          for (var r, i = (vt.tweeners[t] || []).concat(vt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
        }
        function vt(e, t, n) {
          var r,
            i,
            o = 0,
            a = vt.prefilters.length,
            s = S.Deferred().always(function () {
              delete l.elem;
            }),
            l = function () {
              if (i) return !1;
              for (var t = at || dt(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(r);
              return s.notifyWith(e, [u, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1);
            },
            u = s.promise({
              elem: e,
              props: S.extend({}, t),
              opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, n),
              originalProperties: t,
              originalOptions: n,
              startTime: at || dt(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var r = S.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r), r;
              },
              stop: function (t) {
                var n = 0,
                  r = t ? u.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this;
              },
            }),
            c = u.props;
          for (
            (function (e, t) {
              var n, r, i, o, a;
              for (n in e)
                if (((i = t[(r = Q(n))]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = S.cssHooks[r]) && ("expand" in a))) for (n in ((o = a.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
                else t[r] = i;
            })(c, u.opts.specialEasing);
            o < a;
            o++
          )
            if ((r = vt.prefilters[o].call(u, e, c, u.opts))) return y(r.stop) && (S._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
          return S.map(c, gt, u), y(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), S.fx.timer(S.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u;
        }
        (S.Animation = S.extend(vt, {
          tweeners: {
            "*": [
              function (e, t) {
                var n = this.createTween(e, t);
                return pe(n.elem, e, oe.exec(t), n), n;
              },
            ],
          },
          tweener: function (e, t) {
            y(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
            for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (vt.tweeners[n] = vt.tweeners[n] || []), vt.tweeners[n].unshift(t);
          },
          prefilters: [
            function (e, t, n) {
              var r,
                i,
                o,
                a,
                s,
                l,
                u,
                c,
                f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ce(e),
                v = Z.get(e, "fxshow");
              for (r in (n.queue ||
                (null == (a = S._queueHooks(e, "fx")).unqueued &&
                  ((a.unqueued = 0),
                  (s = a.empty.fire),
                  (a.empty.fire = function () {
                    a.unqueued || s();
                  })),
                a.unqueued++,
                p.always(function () {
                  p.always(function () {
                    a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
                  });
                })),
              t))
                if (((i = t[r]), ct.test(i))) {
                  if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
                    if ("show" !== i || !v || void 0 === v[r]) continue;
                    g = !0;
                  }
                  d[r] = (v && v[r]) || S.style(e, r);
                }
              if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in (f &&
                  1 === e.nodeType &&
                  ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                  null == (u = v && v.display) && (u = Z.get(e, "display")),
                  "none" === (c = S.css(e, "display")) && (u ? (c = u) : (he([e], !0), (u = e.style.display || u), (c = S.css(e, "display")), he([e]))),
                  ("inline" === c || ("inline-block" === c && null != u)) &&
                    "none" === S.css(e, "float") &&
                    (l ||
                      (p.done(function () {
                        h.display = u;
                      }),
                      null == u && ((c = h.display), (u = "none" === c ? "" : c))),
                    (h.display = "inline-block"))),
                n.overflow &&
                  ((h.overflow = "hidden"),
                  p.always(function () {
                    (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                  })),
                (l = !1),
                d))
                  l ||
                    (v ? "hidden" in v && (g = v.hidden) : (v = Z.access(e, "fxshow", { display: u })),
                    o && (v.hidden = !g),
                    g && he([e], !0),
                    p.done(function () {
                      for (r in (g || he([e]), Z.remove(e, "fxshow"), d)) S.style(e, r, d[r]);
                    })),
                    (l = gt(g ? v[r] : 0, r, p)),
                    r in v || ((v[r] = l.start), g && ((l.end = l.start), (l.start = 0)));
            },
          ],
          prefilter: function (e, t) {
            t ? vt.prefilters.unshift(e) : vt.prefilters.push(e);
          },
        })),
          (S.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || (!n && t) || (y(e) && e), duration: e, easing: (n && t) || (t && !y(t) && t) };
            return (
              S.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in S.fx.speeds ? (r.duration = S.fx.speeds[r.duration]) : (r.duration = S.fx.speeds._default)),
              (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
              (r.old = r.complete),
              (r.complete = function () {
                y(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
              }),
              r
            );
          }),
          S.fn.extend({
            fadeTo: function (e, t, n, r) {
              return this.filter(ce).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
              var i = S.isEmptyObject(e),
                o = S.speed(t, n, r),
                a = function () {
                  var t = vt(this, S.extend({}, e), o);
                  (i || Z.get(this, "finish")) && t.stop(!0);
                };
              return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function (e, t, n) {
              var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
              };
              return (
                "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                t && !1 !== e && this.queue(e || "fx", []),
                this.each(function () {
                  var t = !0,
                    i = null != e && e + "queueHooks",
                    o = S.timers,
                    a = Z.get(this);
                  if (i) a[i] && a[i].stop && r(a[i]);
                  else for (i in a) a[i] && a[i].stop && ft.test(i) && r(a[i]);
                  for (i = o.length; i--; ) o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                  (!t && n) || S.dequeue(this, e);
                })
              );
            },
            finish: function (e) {
              return (
                !1 !== e && (e = e || "fx"),
                this.each(function () {
                  var t,
                    n = Z.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = S.timers,
                    a = r ? r.length : 0;
                  for (n.finish = !0, S.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                  for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                  delete n.finish;
                })
              );
            },
          }),
          S.each(["toggle", "show", "hide"], function (e, t) {
            var n = S.fn[t];
            S.fn[t] = function (e, r, i) {
              return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ht(t, !0), e, r, i);
            };
          }),
          S.each({ slideDown: ht("show"), slideUp: ht("hide"), slideToggle: ht("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            S.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }),
          (S.timers = []),
          (S.fx.tick = function () {
            var e,
              t = 0,
              n = S.timers;
            for (at = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || S.fx.stop(), (at = void 0);
          }),
          (S.fx.timer = function (e) {
            S.timers.push(e), S.fx.start();
          }),
          (S.fx.interval = 13),
          (S.fx.start = function () {
            st || ((st = !0), pt());
          }),
          (S.fx.stop = function () {
            st = null;
          }),
          (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (S.fn.delay = function (e, t) {
            return (
              (e = (S.fx && S.fx.speeds[e]) || e),
              (t = t || "fx"),
              this.queue(t, function (t, r) {
                var i = n.setTimeout(t, e);
                r.stop = function () {
                  n.clearTimeout(i);
                };
              })
            );
          }),
          (lt = a.createElement("input")),
          (ut = a.createElement("select").appendChild(a.createElement("option"))),
          (lt.type = "checkbox"),
          (m.checkOn = "" !== lt.value),
          (m.optSelected = ut.selected),
          ((lt = a.createElement("input")).value = "t"),
          (lt.type = "radio"),
          (m.radioValue = "t" === lt.value);
        var mt,
          yt = S.expr.attrHandle;
        S.fn.extend({
          attr: function (e, t) {
            return V(this, S.attr, e, t, 1 < arguments.length);
          },
          removeAttr: function (e) {
            return this.each(function () {
              S.removeAttr(this, e);
            });
          },
        }),
          S.extend({
            attr: function (e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute
                  ? S.prop(e, t, n)
                  : ((1 === o && S.isXMLDoc(e)) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? mt : void 0)),
                    void 0 !== n ? (null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  if (!m.radioValue && "radio" === t && L(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                },
              },
            },
            removeAttr: function (e, t) {
              var n,
                r = 0,
                i = t && t.match(M);
              if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
            },
          }),
          (mt = {
            set: function (e, t, n) {
              return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
          }),
          S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = yt[t] || S.find.attr;
            yt[t] = function (e, t, r) {
              var i,
                o,
                a = t.toLowerCase();
              return r || ((o = yt[a]), (yt[a] = i), (i = null != n(e, t, r) ? a : null), (yt[a] = o)), i;
            };
          });
        var xt = /^(?:input|select|textarea|button)$/i,
          bt = /^(?:a|area)$/i;
        function wt(e) {
          return (e.match(M) || []).join(" ");
        }
        function Ct(e) {
          return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function Tt(e) {
          return Array.isArray(e) ? e : ("string" == typeof e && e.match(M)) || [];
        }
        S.fn.extend({
          prop: function (e, t) {
            return V(this, S.prop, e, t, 1 < arguments.length);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[S.propFix[e] || e];
            });
          },
        }),
          S.extend({
            prop: function (e, t, n) {
              var r,
                i,
                o = e.nodeType;
              if (3 !== o && 8 !== o && 2 !== o) return (1 === o && S.isXMLDoc(e)) || ((t = S.propFix[t] || t), (i = S.propHooks[t])), void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
            },
            propHooks: {
              tabIndex: {
                get: function (e) {
                  var t = S.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : xt.test(e.nodeName) || (bt.test(e.nodeName) && e.href) ? 0 : -1;
                },
              },
            },
            propFix: { for: "htmlFor", class: "className" },
          }),
          m.optSelected ||
            (S.propHooks.selected = {
              get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
              },
              set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
              },
            }),
          S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            S.propFix[this.toLowerCase()] = this;
          }),
          S.fn.extend({
            addClass: function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                s,
                l = 0;
              if (y(e))
                return this.each(function (t) {
                  S(this).addClass(e.call(this, t, Ct(this)));
                });
              if ((t = Tt(e)).length)
                for (; (n = this[l++]); )
                  if (((i = Ct(n)), (r = 1 === n.nodeType && " " + wt(i) + " "))) {
                    for (a = 0; (o = t[a++]); ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    i !== (s = wt(r)) && n.setAttribute("class", s);
                  }
              return this;
            },
            removeClass: function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                s,
                l = 0;
              if (y(e))
                return this.each(function (t) {
                  S(this).removeClass(e.call(this, t, Ct(this)));
                });
              if (!arguments.length) return this.attr("class", "");
              if ((t = Tt(e)).length)
                for (; (n = this[l++]); )
                  if (((i = Ct(n)), (r = 1 === n.nodeType && " " + wt(i) + " "))) {
                    for (a = 0; (o = t[a++]); ) for (; -1 < r.indexOf(" " + o + " "); ) r = r.replace(" " + o + " ", " ");
                    i !== (s = wt(r)) && n.setAttribute("class", s);
                  }
              return this;
            },
            toggleClass: function (e, t) {
              var n = typeof e,
                r = "string" === n || Array.isArray(e);
              return "boolean" == typeof t && r
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : y(e)
                ? this.each(function (n) {
                    S(this).toggleClass(e.call(this, n, Ct(this), t), t);
                  })
                : this.each(function () {
                    var t, i, o, a;
                    if (r) for (i = 0, o = S(this), a = Tt(e); (t = a[i++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else (void 0 !== e && "boolean" !== n) || ((t = Ct(this)) && Z.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Z.get(this, "__className__") || ""));
                  });
            },
            hasClass: function (e) {
              var t,
                n,
                r = 0;
              for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && -1 < (" " + wt(Ct(n)) + " ").indexOf(t)) return !0;
              return !1;
            },
          });
        var St = /\r/g;
        S.fn.extend({
          val: function (e) {
            var t,
              n,
              r,
              i = this[0];
            return arguments.length
              ? ((r = y(e)),
                this.each(function (n) {
                  var i;
                  1 === this.nodeType &&
                    (null == (i = r ? e.call(this, n, S(this).val()) : e)
                      ? (i = "")
                      : "number" == typeof i
                      ? (i += "")
                      : Array.isArray(i) &&
                        (i = S.map(i, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    ((t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                }))
              : i
              ? (t = S.valHooks[i.type] || S.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value"))
                ? n
                : "string" == typeof (n = i.value)
                ? n.replace(St, "")
                : null == n
                ? ""
                : n
              : void 0;
          },
        }),
          S.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = S.find.attr(e, "value");
                  return null != t ? t : wt(S.text(e));
                },
              },
              select: {
                get: function (e) {
                  var t,
                    n,
                    r,
                    i = e.options,
                    o = e.selectedIndex,
                    a = "select-one" === e.type,
                    s = a ? null : [],
                    l = a ? o + 1 : i.length;
                  for (r = o < 0 ? l : a ? o : 0; r < l; r++)
                    if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))) {
                      if (((t = S(n).val()), a)) return t;
                      s.push(t);
                    }
                  return s;
                },
                set: function (e, t) {
                  for (var n, r, i = e.options, o = S.makeArray(t), a = i.length; a--; ) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                  return n || (e.selectedIndex = -1), o;
                },
              },
            },
          }),
          S.each(["radio", "checkbox"], function () {
            (S.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t)) return (e.checked = -1 < S.inArray(S(e).val(), t));
              },
            }),
              m.checkOn ||
                (S.valHooks[this].get = function (e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
                });
          }),
          (m.focusin = "onfocusin" in n);
        var Nt = /^(?:focusinfocus|focusoutblur)$/,
          Et = function (e) {
            e.stopPropagation();
          };
        S.extend(S.event, {
          trigger: function (e, t, r, i) {
            var o,
              s,
              l,
              u,
              c,
              f,
              p,
              d,
              g = [r || a],
              v = h.call(e, "type") ? e.type : e,
              m = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
              ((s = d = l = r = r || a),
              3 !== r.nodeType &&
                8 !== r.nodeType &&
                !Nt.test(v + S.event.triggered) &&
                (-1 < v.indexOf(".") && ((v = (m = v.split(".")).shift()), m.sort()),
                (c = v.indexOf(":") < 0 && "on" + v),
                ((e = e[S.expando] ? e : new S.Event(v, "object" == typeof e && e)).isTrigger = i ? 2 : 3),
                (e.namespace = m.join(".")),
                (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                (e.result = void 0),
                e.target || (e.target = r),
                (t = null == t ? [e] : S.makeArray(t, [e])),
                (p = S.event.special[v] || {}),
                i || !p.trigger || !1 !== p.trigger.apply(r, t)))
            ) {
              if (!i && !p.noBubble && !x(r)) {
                for (u = p.delegateType || v, Nt.test(u + v) || (s = s.parentNode); s; s = s.parentNode) g.push(s), (l = s);
                l === (r.ownerDocument || a) && g.push(l.defaultView || l.parentWindow || n);
              }
              for (o = 0; (s = g[o++]) && !e.isPropagationStopped(); ) (d = s), (e.type = 1 < o ? u : p.bindType || v), (f = (Z.get(s, "events") || {})[e.type] && Z.get(s, "handle")) && f.apply(s, t), (f = c && s[c]) && f.apply && K(s) && ((e.result = f.apply(s, t)), !1 === e.result && e.preventDefault());
              return (
                (e.type = v),
                i || e.isDefaultPrevented() || (p._default && !1 !== p._default.apply(g.pop(), t)) || !K(r) || (c && y(r[v]) && !x(r) && ((l = r[c]) && (r[c] = null), (S.event.triggered = v), e.isPropagationStopped() && d.addEventListener(v, Et), r[v](), e.isPropagationStopped() && d.removeEventListener(v, Et), (S.event.triggered = void 0), l && (r[c] = l))),
                e.result
              );
            }
          },
          simulate: function (e, t, n) {
            var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t);
          },
        }),
          S.fn.extend({
            trigger: function (e, t) {
              return this.each(function () {
                S.event.trigger(e, t, this);
              });
            },
            triggerHandler: function (e, t) {
              var n = this[0];
              if (n) return S.event.trigger(e, t, n, !0);
            },
          }),
          m.focusin ||
            S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              var n = function (e) {
                S.event.simulate(t, e.target, S.event.fix(e));
              };
              S.event.special[t] = {
                setup: function () {
                  var r = this.ownerDocument || this,
                    i = Z.access(r, t);
                  i || r.addEventListener(e, n, !0), Z.access(r, t, (i || 0) + 1);
                },
                teardown: function () {
                  var r = this.ownerDocument || this,
                    i = Z.access(r, t) - 1;
                  i ? Z.access(r, t, i) : (r.removeEventListener(e, n, !0), Z.remove(r, t));
                },
              };
            });
        var kt = n.location,
          At = Date.now(),
          jt = /\?/;
        S.parseXML = function (e) {
          var t;
          if (!e || "string" != typeof e) return null;
          try {
            t = new n.DOMParser().parseFromString(e, "text/xml");
          } catch (e) {
            t = void 0;
          }
          return (t && !t.getElementsByTagName("parsererror").length) || S.error("Invalid XML: " + e), t;
        };
        var Dt = /\[\]$/,
          Lt = /\r?\n/g,
          Pt = /^(?:submit|button|image|reset|file)$/i,
          Rt = /^(?:input|select|textarea|keygen)/i;
        function qt(e, t, n, r) {
          var i;
          if (Array.isArray(t))
            S.each(t, function (t, i) {
              n || Dt.test(e) ? r(e, i) : qt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
            });
          else if (n || "object" !== C(t)) r(e, t);
          else for (i in t) qt(e + "[" + i + "]", t[i], n, r);
        }
        (S.param = function (e, t) {
          var n,
            r = [],
            i = function (e, t) {
              var n = y(t) ? t() : t;
              r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
          if (null == e) return "";
          if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
            S.each(e, function () {
              i(this.name, this.value);
            });
          else for (n in e) qt(n, e[n], t, i);
          return r.join("&");
        }),
          S.fn.extend({
            serialize: function () {
              return S.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this;
              })
                .filter(function () {
                  var e = this.type;
                  return this.name && !S(this).is(":disabled") && Rt.test(this.nodeName) && !Pt.test(e) && (this.checked || !ge.test(e));
                })
                .map(function (e, t) {
                  var n = S(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? S.map(n, function (e) {
                        return { name: t.name, value: e.replace(Lt, "\r\n") };
                      })
                    : { name: t.name, value: n.replace(Lt, "\r\n") };
                })
                .get();
            },
          });
        var Ot = /%20/g,
          _t = /#.*$/,
          $t = /([?&])_=[^&]*/,
          Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Mt = /^(?:GET|HEAD)$/,
          It = /^\/\//,
          Bt = {},
          Wt = {},
          Ft = "*/".concat("*"),
          zt = a.createElement("a");
        function Ut(e) {
          return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
              i = 0,
              o = t.toLowerCase().match(M) || [];
            if (y(n)) for (; (r = o[i++]); ) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
          };
        }
        function Vt(e, t, n, r) {
          var i = {},
            o = e === Wt;
          function a(s) {
            var l;
            return (
              (i[s] = !0),
              S.each(e[s] || [], function (e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || o || i[u] ? (o ? !(l = u) : void 0) : (t.dataTypes.unshift(u), a(u), !1);
              }),
              l
            );
          }
          return a(t.dataTypes[0]) || (!i["*"] && a("*"));
        }
        function Xt(e, t) {
          var n,
            r,
            i = S.ajaxSettings.flatOptions || {};
          for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
          return r && S.extend(!0, e, r), e;
        }
        (zt.href = kt.href),
          S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: kt.href,
              type: "GET",
              isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: { "*": Ft, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
              converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
              return t ? Xt(Xt(e, S.ajaxSettings), t) : Xt(S.ajaxSettings, e);
            },
            ajaxPrefilter: Ut(Bt),
            ajaxTransport: Ut(Wt),
            ajax: function (e, t) {
              "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
              var r,
                i,
                o,
                s,
                l,
                u,
                c,
                f,
                p,
                d,
                h = S.ajaxSetup({}, t),
                g = h.context || h,
                v = h.context && (g.nodeType || g.jquery) ? S(g) : S.event,
                m = S.Deferred(),
                y = S.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                w = {},
                C = "canceled",
                T = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                    var t;
                    if (c) {
                      if (!s) for (s = {}; (t = Ht.exec(o)); ) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                      t = s[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return c ? o : null;
                  },
                  setRequestHeader: function (e, t) {
                    return null == c && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (b[e] = t)), this;
                  },
                  overrideMimeType: function (e) {
                    return null == c && (h.mimeType = e), this;
                  },
                  statusCode: function (e) {
                    var t;
                    if (e)
                      if (c) T.always(e[T.status]);
                      else for (t in e) x[t] = [x[t], e[t]];
                    return this;
                  },
                  abort: function (e) {
                    var t = e || C;
                    return r && r.abort(t), N(0, t), this;
                  },
                };
              if ((m.promise(T), (h.url = ((e || h.url || kt.href) + "").replace(It, kt.protocol + "//")), (h.type = t.method || t.type || h.method || h.type), (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]), null == h.crossDomain)) {
                u = a.createElement("a");
                try {
                  (u.href = h.url), (u.href = u.href), (h.crossDomain = zt.protocol + "//" + zt.host != u.protocol + "//" + u.host);
                } catch (e) {
                  h.crossDomain = !0;
                }
              }
              if ((h.data && h.processData && "string" != typeof h.data && (h.data = S.param(h.data, h.traditional)), Vt(Bt, h, t, T), c)) return T;
              for (p in ((f = S.event && h.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
              (h.type = h.type.toUpperCase()),
              (h.hasContent = !Mt.test(h.type)),
              (i = h.url.replace(_t, "")),
              h.hasContent
                ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ot, "+"))
                : ((d = h.url.slice(i.length)), h.data && (h.processData || "string" == typeof h.data) && ((i += (jt.test(i) ? "&" : "?") + h.data), delete h.data), !1 === h.cache && ((i = i.replace($t, "$1")), (d = (jt.test(i) ? "&" : "?") + "_=" + At++ + d)), (h.url = i + d)),
              h.ifModified && (S.lastModified[i] && T.setRequestHeader("If-Modified-Since", S.lastModified[i]), S.etag[i] && T.setRequestHeader("If-None-Match", S.etag[i])),
              ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) && T.setRequestHeader("Content-Type", h.contentType),
              T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]),
              h.headers))
                T.setRequestHeader(p, h.headers[p]);
              if (h.beforeSend && (!1 === h.beforeSend.call(g, T, h) || c)) return T.abort();
              if (((C = "abort"), y.add(h.complete), T.done(h.success), T.fail(h.error), (r = Vt(Wt, h, t, T)))) {
                if (((T.readyState = 1), f && v.trigger("ajaxSend", [T, h]), c)) return T;
                h.async &&
                  0 < h.timeout &&
                  (l = n.setTimeout(function () {
                    T.abort("timeout");
                  }, h.timeout));
                try {
                  (c = !1), r.send(b, N);
                } catch (e) {
                  if (c) throw e;
                  N(-1, e);
                }
              } else N(-1, "No Transport");
              function N(e, t, a, s) {
                var u,
                  p,
                  d,
                  b,
                  w,
                  C = t;
                c ||
                  ((c = !0),
                  l && n.clearTimeout(l),
                  (r = void 0),
                  (o = s || ""),
                  (T.readyState = 0 < e ? 4 : 0),
                  (u = (200 <= e && e < 300) || 304 === e),
                  a &&
                    (b = (function (e, t, n) {
                      for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                      if (r)
                        for (i in s)
                          if (s[i] && s[i].test(r)) {
                            l.unshift(i);
                            break;
                          }
                      if (l[0] in n) o = l[0];
                      else {
                        for (i in n) {
                          if (!l[0] || e.converters[i + " " + l[0]]) {
                            o = i;
                            break;
                          }
                          a || (a = i);
                        }
                        o = o || a;
                      }
                      if (o) return o !== l[0] && l.unshift(o), n[o];
                    })(h, T, a)),
                  (b = (function (e, t, n, r) {
                    var i,
                      o,
                      a,
                      s,
                      l,
                      u = {},
                      c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; )
                      if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = o), (o = c.shift())))
                        if ("*" === o) o = l;
                        else if ("*" !== l && l !== o) {
                          if (!(a = u[l + " " + o] || u["* " + o]))
                            for (i in u)
                              if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                !0 === a ? (a = u[i]) : !0 !== u[i] && ((o = s[0]), c.unshift(s[1]));
                                break;
                              }
                          if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else
                              try {
                                t = a(t);
                              } catch (e) {
                                return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + o };
                              }
                        }
                    return { state: "success", data: t };
                  })(h, b, T, u)),
                  u
                    ? (h.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (S.lastModified[i] = w), (w = T.getResponseHeader("etag")) && (S.etag[i] = w)), 204 === e || "HEAD" === h.type ? (C = "nocontent") : 304 === e ? (C = "notmodified") : ((C = b.state), (p = b.data), (u = !(d = b.error))))
                    : ((d = C), (!e && C) || ((C = "error"), e < 0 && (e = 0))),
                  (T.status = e),
                  (T.statusText = (t || C) + ""),
                  u ? m.resolveWith(g, [p, C, T]) : m.rejectWith(g, [T, C, d]),
                  T.statusCode(x),
                  (x = void 0),
                  f && v.trigger(u ? "ajaxSuccess" : "ajaxError", [T, h, u ? p : d]),
                  y.fireWith(g, [T, C]),
                  f && (v.trigger("ajaxComplete", [T, h]), --S.active || S.event.trigger("ajaxStop")));
              }
              return T;
            },
            getJSON: function (e, t, n) {
              return S.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return S.get(e, void 0, t, "script");
            },
          }),
          S.each(["get", "post"], function (e, t) {
            S[t] = function (e, n, r, i) {
              return y(n) && ((i = i || r), (r = n), (n = void 0)), S.ajax(S.extend({ url: e, type: t, dataType: i, data: n, success: r }, S.isPlainObject(e) && e));
            };
          }),
          (S._evalUrl = function (e, t) {
            return S.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: { "text script": function () {} },
              dataFilter: function (e) {
                S.globalEval(e, t);
              },
            });
          }),
          S.fn.extend({
            wrapAll: function (e) {
              var t;
              return (
                this[0] &&
                  (y(e) && (e = e.call(this[0])),
                  (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function () {
                      for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                      return e;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (e) {
              return y(e)
                ? this.each(function (t) {
                    S(this).wrapInner(e.call(this, t));
                  })
                : this.each(function () {
                    var t = S(this),
                      n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e);
                  });
            },
            wrap: function (e) {
              var t = y(e);
              return this.each(function (n) {
                S(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function (e) {
              return (
                this.parent(e)
                  .not("body")
                  .each(function () {
                    S(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (S.expr.pseudos.hidden = function (e) {
            return !S.expr.pseudos.visible(e);
          }),
          (S.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
          }),
          (S.ajaxSettings.xhr = function () {
            try {
              return new n.XMLHttpRequest();
            } catch (e) {}
          });
        var Gt = { 0: 200, 1223: 204 },
          Yt = S.ajaxSettings.xhr();
        (m.cors = !!Yt && "withCredentials" in Yt),
          (m.ajax = Yt = !!Yt),
          S.ajaxTransport(function (e) {
            var t, r;
            if (m.cors || (Yt && !e.crossDomain))
              return {
                send: function (i, o) {
                  var a,
                    s = e.xhr();
                  if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                  for (a in (e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i)) s.setRequestHeader(a, i[a]);
                  (t = function (e) {
                    return function () {
                      t &&
                        ((t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                        "abort" === e ? s.abort() : "error" === e ? ("number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText)) : o(Gt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                    };
                  }),
                    (s.onload = t()),
                    (r = s.onerror = s.ontimeout = t("error")),
                    void 0 !== s.onabort
                      ? (s.onabort = r)
                      : (s.onreadystatechange = function () {
                          4 === s.readyState &&
                            n.setTimeout(function () {
                              t && r();
                            });
                        }),
                    (t = t("abort"));
                  try {
                    s.send((e.hasContent && e.data) || null);
                  } catch (i) {
                    if (t) throw i;
                  }
                },
                abort: function () {
                  t && t();
                },
              };
          }),
          S.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
          }),
          S.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (e) {
                return S.globalEval(e), e;
              },
            },
          }),
          S.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
          }),
          S.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
              return {
                send: function (r, i) {
                  (t = S("<script>")
                    .attr(e.scriptAttrs || {})
                    .prop({ charset: e.scriptCharset, src: e.url })
                    .on(
                      "load error",
                      (n = function (e) {
                        t.remove(), (n = null), e && i("error" === e.type ? 404 : 200, e.type);
                      })
                    )),
                    a.head.appendChild(t[0]);
                },
                abort: function () {
                  n && n();
                },
              };
          });
        var Qt,
          Kt = [],
          Jt = /(=)\?(?=&|$)|\?\?/;
        S.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = Kt.pop() || S.expando + "_" + At++;
            return (this[e] = !0), e;
          },
        }),
          S.ajaxPrefilter("json jsonp", function (e, t, r) {
            var i,
              o,
              a,
              s = !1 !== e.jsonp && (Jt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0])
              return (
                (i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                s ? (e[s] = e[s].replace(Jt, "$1" + i)) : !1 !== e.jsonp && (e.url += (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                (e.converters["script json"] = function () {
                  return a || S.error(i + " was not called"), a[0];
                }),
                (e.dataTypes[0] = "json"),
                (o = n[i]),
                (n[i] = function () {
                  a = arguments;
                }),
                r.always(function () {
                  void 0 === o ? S(n).removeProp(i) : (n[i] = o), e[i] && ((e.jsonpCallback = t.jsonpCallback), Kt.push(i)), a && y(o) && o(a[0]), (a = o = void 0);
                }),
                "script"
              );
          }),
          (m.createHTMLDocument = (((Qt = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Qt.childNodes.length)),
          (S.parseHTML = function (e, t, n) {
            return "string" != typeof e
              ? []
              : ("boolean" == typeof t && ((n = t), (t = !1)),
                t || (m.createHTMLDocument ? (((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href), t.head.appendChild(r)) : (t = a)),
                (o = !n && []),
                (i = P.exec(e)) ? [t.createElement(i[1])] : ((i = Se([e], t, o)), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
            var r, i, o;
          }),
          (S.fn.load = function (e, t, n) {
            var r,
              i,
              o,
              a = this,
              s = e.indexOf(" ");
            return (
              -1 < s && ((r = wt(e.slice(s))), (e = e.slice(0, s))),
              y(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
              0 < a.length &&
                S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                  .done(function (e) {
                    (o = arguments), a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
                  })
                  .always(
                    n &&
                      function (e, t) {
                        a.each(function () {
                          n.apply(this, o || [e.responseText, t, e]);
                        });
                      }
                  ),
              this
            );
          }),
          S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            S.fn[t] = function (e) {
              return this.on(t, e);
            };
          }),
          (S.expr.pseudos.animated = function (e) {
            return S.grep(S.timers, function (t) {
              return e === t.elem;
            }).length;
          }),
          (S.offset = {
            setOffset: function (e, t, n) {
              var r,
                i,
                o,
                a,
                s,
                l,
                u = S.css(e, "position"),
                c = S(e),
                f = {};
              "static" === u && (e.style.position = "relative"),
                (s = c.offset()),
                (o = S.css(e, "top")),
                (l = S.css(e, "left")),
                ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? ((a = (r = c.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
                y(t) && (t = t.call(e, n, S.extend({}, s))),
                null != t.top && (f.top = t.top - s.top + a),
                null != t.left && (f.left = t.left - s.left + i),
                "using" in t ? t.using.call(e, f) : c.css(f);
            },
          }),
          S.fn.extend({
            offset: function (e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function (t) {
                      S.offset.setOffset(this, e, t);
                    });
              var t,
                n,
                r = this[0];
              return r ? (r.getClientRects().length ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
              if (this[0]) {
                var e,
                  t,
                  n,
                  r = this[0],
                  i = { top: 0, left: 0 };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                  for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"); ) e = e.parentNode;
                  e && e !== r && 1 === e.nodeType && (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)), (i.left += S.css(e, "borderLeftWidth", !0)));
                }
                return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (var e = this.offsetParent; e && "static" === S.css(e, "position"); ) e = e.offsetParent;
                return e || se;
              });
            },
          }),
          S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var n = "pageYOffset" === t;
            S.fn[e] = function (r) {
              return V(
                this,
                function (e, r, i) {
                  var o;
                  if ((x(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
                  o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
                },
                e,
                r,
                arguments.length
              );
            };
          }),
          S.each(["top", "left"], function (e, t) {
            S.cssHooks[t] = Xe(m.pixelPosition, function (e, n) {
              if (n) return (n = Ve(e, t)), Fe.test(n) ? S(e).position()[t] + "px" : n;
            });
          }),
          S.each({ Height: "height", Width: "width" }, function (e, t) {
            S.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
              S.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                  s = n || (!0 === i || !0 === o ? "margin" : "border");
                return V(
                  this,
                  function (t, n, i) {
                    var o;
                    return x(t) ? (0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e]) : 9 === t.nodeType ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? S.css(t, n, s) : S.style(t, n, i, s);
                  },
                  t,
                  a ? i : void 0,
                  a
                );
              };
            });
          }),
          S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            S.fn[t] = function (e, n) {
              return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
            };
          }),
          S.fn.extend({
            hover: function (e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            },
          }),
          S.fn.extend({
            bind: function (e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
              return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
              return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
              return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
          }),
          (S.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
              return (
                (r = l.call(arguments, 2)),
                ((i = function () {
                  return e.apply(t || this, r.concat(l.call(arguments)));
                }).guid = e.guid = e.guid || S.guid++),
                i
              );
          }),
          (S.holdReady = function (e) {
            e ? S.readyWait++ : S.ready(!0);
          }),
          (S.isArray = Array.isArray),
          (S.parseJSON = JSON.parse),
          (S.nodeName = L),
          (S.isFunction = y),
          (S.isWindow = x),
          (S.camelCase = Q),
          (S.type = C),
          (S.now = Date.now),
          (S.isNumeric = function (e) {
            var t = S.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
          }),
          void 0 ===
            (r = function () {
              return S;
            }.apply(t, [])) || (e.exports = r);
        var Zt = n.jQuery,
          en = n.$;
        return (
          (S.noConflict = function (e) {
            return n.$ === S && (n.$ = en), e && n.jQuery === S && (n.jQuery = Zt), S;
          }),
          i || (n.jQuery = n.$ = S),
          S
        );
      });
    },
    function (e, t) {
      "undefined" != typeof window && (window.PR_SHOULD_USE_CONTINUATION = !0),
        (function () {
          var e = "undefined" != typeof window ? window : {},
            t = ["break,continue,do,else,for,if,return,while"],
            n = [[t, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,restrict,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],
            r = [n, "alignas,alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,noexcept,noreturn,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
            i = [n, "abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
            o = [
              n,
              "abstract,add,alias,as,ascending,async,await,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,get,global,group,implicit,in,interface,internal,into,is,join,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,remove,sbyte,sealed,select,set,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,value,var,virtual,where,yield",
            ],
            a = [n, "abstract,async,await,constructor,debugger,enum,eval,export,from,function,get,import,implements,instanceof,interface,let,null,of,set,undefined,var,with,yield,Infinity,NaN"],
            s = "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
            l = [t, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
            u = [t, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
            c = [t, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
            f = /^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\d*)\b/;
          function p(e, t, n, r, i) {
            if (n) {
              var o = { sourceNode: e, pre: 1, langExtension: null, numberLines: null, sourceCode: n, spans: null, basePos: t, decorations: null };
              r(o), i.push.apply(i, o.decorations);
            }
          }
          var d = /\S/;
          function h(e) {
            for (var t = void 0, n = e.firstChild; n; n = n.nextSibling) {
              var r = n.nodeType;
              t = 1 === r ? (t ? e : n) : 3 === r && d.test(n.nodeValue) ? e : t;
            }
            return t === e ? void 0 : t;
          }
          function g(e, t) {
            var n,
              r = {};
            !(function () {
              for (var i = e.concat(t), o = [], a = {}, s = 0, l = i.length; s < l; ++s) {
                var u = i[s],
                  c = u[3];
                if (c) for (var f = c.length; --f >= 0; ) r[c.charAt(f)] = u;
                var p = u[1],
                  d = "" + p;
                a.hasOwnProperty(d) || (o.push(p), (a[d] = null));
              }
              o.push(/[\0-\uffff]/),
                (n = (function (e) {
                  for (var t = 0, n = !1, r = !1, i = 0, o = e.length; i < o; ++i) {
                    if ((p = e[i]).ignoreCase) r = !0;
                    else if (/[a-z]/i.test(p.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, ""))) {
                      (n = !0), (r = !1);
                      break;
                    }
                  }
                  var a = { b: 8, t: 9, n: 10, v: 11, f: 12, r: 13 };
                  function s(e) {
                    var t = e.charCodeAt(0);
                    if (92 !== t) return t;
                    var n = e.charAt(1);
                    return (t = a[n]) || ("0" <= n && n <= "7" ? parseInt(e.substring(1), 8) : "u" === n || "x" === n ? parseInt(e.substring(2), 16) : e.charCodeAt(1));
                  }
                  function l(e) {
                    if (e < 32) return (e < 16 ? "\\x0" : "\\x") + e.toString(16);
                    var t = String.fromCharCode(e);
                    return "\\" === t || "-" === t || "]" === t || "^" === t ? "\\" + t : t;
                  }
                  function u(e) {
                    var t = e.substring(1, e.length - 1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]", "g")),
                      n = [],
                      r = "^" === t[0],
                      i = ["["];
                    r && i.push("^");
                    for (var o = r ? 1 : 0, a = t.length; o < a; ++o) {
                      var u = t[o];
                      if (/\\[bdsw]/i.test(u)) i.push(u);
                      else {
                        var c,
                          f = s(u);
                        o + 2 < a && "-" === t[o + 1] ? ((c = s(t[o + 2])), (o += 2)) : (c = f), n.push([f, c]), c < 65 || f > 122 || (c < 65 || f > 90 || n.push([32 | Math.max(65, f), 32 | Math.min(c, 90)]), c < 97 || f > 122 || n.push([-33 & Math.max(97, f), -33 & Math.min(c, 122)]));
                      }
                    }
                    n.sort(function (e, t) {
                      return e[0] - t[0] || t[1] - e[1];
                    });
                    var p = [],
                      d = [];
                    for (o = 0; o < n.length; ++o) {
                      (h = n[o])[0] <= d[1] + 1 ? (d[1] = Math.max(d[1], h[1])) : p.push((d = h));
                    }
                    for (o = 0; o < p.length; ++o) {
                      var h = p[o];
                      i.push(l(h[0])), h[1] > h[0] && (h[1] + 1 > h[0] && i.push("-"), i.push(l(h[1])));
                    }
                    return i.push("]"), i.join("");
                  }
                  function c(e) {
                    for (var r = e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)", "g")), i = r.length, o = [], a = 0, s = 0; a < i; ++a) {
                      if ("(" === (f = r[a])) ++s;
                      else if ("\\" === f.charAt(0)) {
                        (c = +f.substring(1)) && (c <= s ? (o[c] = -1) : (r[a] = l(c)));
                      }
                    }
                    for (a = 1; a < o.length; ++a) -1 === o[a] && (o[a] = ++t);
                    for (a = 0, s = 0; a < i; ++a) {
                      if ("(" === (f = r[a])) o[++s] || (r[a] = "(?:");
                      else if ("\\" === f.charAt(0)) {
                        var c;
                        (c = +f.substring(1)) && c <= s && (r[a] = "\\" + o[c]);
                      }
                    }
                    for (a = 0; a < i; ++a) "^" === r[a] && "^" !== r[a + 1] && (r[a] = "");
                    if (e.ignoreCase && n)
                      for (a = 0; a < i; ++a) {
                        var f,
                          p = (f = r[a]).charAt(0);
                        f.length >= 2 && "[" === p
                          ? (r[a] = u(f))
                          : "\\" !== p &&
                            (r[a] = f.replace(/[a-zA-Z]/g, function (e) {
                              var t = e.charCodeAt(0);
                              return "[" + String.fromCharCode(-33 & t, 32 | t) + "]";
                            }));
                      }
                    return r.join("");
                  }
                  var f = [];
                  for (i = 0, o = e.length; i < o; ++i) {
                    var p;
                    if ((p = e[i]).global || p.multiline) throw new Error("" + p);
                    f.push("(?:" + c(p) + ")");
                  }
                  return new RegExp(f.join("|"), r ? "gi" : "g");
                })(o));
            })();
            var i = t.length,
              o = function (e) {
                for (var a = e.sourceCode, s = e.basePos, l = e.sourceNode, u = [s, "pln"], c = 0, f = a.match(n) || [], d = {}, h = 0, g = f.length; h < g; ++h) {
                  var v,
                    m = f[h],
                    y = d[m],
                    x = void 0;
                  if ("string" == typeof y) v = !1;
                  else {
                    var b = r[m.charAt(0)];
                    if (b) (x = m.match(b[1])), (y = b[0]);
                    else {
                      for (var C = 0; C < i; ++C)
                        if (((b = t[C]), (x = m.match(b[1])))) {
                          y = b[0];
                          break;
                        }
                      x || (y = "pln");
                    }
                    !(v = y.length >= 5 && "lang-" === y.substring(0, 5)) || (x && "string" == typeof x[1]) || ((v = !1), (y = "src")), v || (d[m] = y);
                  }
                  var T = c;
                  if (((c += m.length), v)) {
                    var S = x[1],
                      N = m.indexOf(S),
                      E = N + S.length;
                    x[2] && (N = (E = m.length - x[2].length) - S.length);
                    var k = y.substring(5);
                    p(l, s + T, m.substring(0, N), o, u), p(l, s + T + N, S, w(k, S), u), p(l, s + T + E, m.substring(E), o, u);
                  } else u.push(s + T, y);
                }
                e.decorations = u;
              };
            return o;
          }
          function v(e) {
            var t = [],
              n = [];
            e.tripleQuotedStrings
              ? t.push(["str", /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/, null, "'\""])
              : e.multiLineStrings
              ? t.push(["str", /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/, null, "'\"`"])
              : t.push(["str", /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/, null, "\"'"]),
              e.verbatimStrings && n.push(["str", /^@\"(?:[^\"]|\"\")*(?:\"|$)/, null]);
            var r = e.hashComments;
            r &&
              (e.cStyleComments
                ? (r > 1 ? t.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, null, "#"]) : t.push(["com", /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/, null, "#"]), n.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, null]))
                : t.push(["com", /^#[^\r\n]*/, null, "#"])),
              e.cStyleComments && (n.push(["com", /^\/\/[^\r\n]*/, null]), n.push(["com", /^\/\*[\s\S]*?(?:\*\/|$)/, null]));
            var i = e.regexLiterals;
            if (i) {
              var o = i > 1 ? "" : "\n\r",
                a = o ? "." : "[\\S\\s]",
                s = "/(?=[^/*" + o + "])(?:[^/\\x5B\\x5C" + o + "]|\\x5C" + a + "|\\x5B(?:[^\\x5C\\x5D" + o + "]|\\x5C" + a + ")*(?:\\x5D|$))+/";
              n.push(["lang-regex", RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(" + s + ")")]);
            }
            var l = e.types;
            l && n.push(["typ", l]);
            var u = ("" + e.keywords).replace(/^ | $/g, "");
            u.length && n.push(["kwd", new RegExp("^(?:" + u.replace(/[\s,]+/g, "|") + ")\\b"), null]), t.push(["pln", /^\s+/, null, " \r\n\t "]);
            var c = "^.[^\\s\\w.$@'\"`/\\\\]*";
            return (
              e.regexLiterals && (c += "(?!s*/)"),
              n.push(["lit", /^@[a-z_$][a-z_$@0-9]*/i, null], ["typ", /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/, null], ["pln", /^[a-z_$][a-z_$@0-9]*/i, null], ["lit", new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"), null, "0123456789"], ["pln", /^\\[\s\S]?/, null], ["pun", new RegExp(c), null]),
              g(t, n)
            );
          }
          var m = v({ keywords: [r, o, i, a, s, l, u, c], hashComments: !0, cStyleComments: !0, multiLineStrings: !0, regexLiterals: !0 });
          function y(e, t, n) {
            for (var r = /(?:^|\s)nocode(?:\s|$)/, i = /\r\n?|\n/, o = e.ownerDocument, a = o.createElement("li"); e.firstChild; ) a.appendChild(e.firstChild);
            var s = [a];
            function l(e) {
              var t = e.nodeType;
              if (1 != t || r.test(e.className)) {
                if ((3 == t || 4 == t) && n) {
                  var a = e.nodeValue,
                    s = a.match(i);
                  if (s) {
                    var c = a.substring(0, s.index);
                    e.nodeValue = c;
                    var f = a.substring(s.index + s[0].length);
                    if (f) e.parentNode.insertBefore(o.createTextNode(f), e.nextSibling);
                    u(e), c || e.parentNode.removeChild(e);
                  }
                }
              } else if ("br" === e.nodeName.toLowerCase()) u(e), e.parentNode && e.parentNode.removeChild(e);
              else for (var p = e.firstChild; p; p = p.nextSibling) l(p);
            }
            function u(e) {
              for (; !e.nextSibling; ) if (!(e = e.parentNode)) return;
              for (
                var t,
                  n = (function e(t, n) {
                    var r = n ? t.cloneNode(!1) : t,
                      i = t.parentNode;
                    if (i) {
                      var o = e(i, 1),
                        a = t.nextSibling;
                      o.appendChild(r);
                      for (var s = a; s; s = a) (a = s.nextSibling), o.appendChild(s);
                    }
                    return r;
                  })(e.nextSibling, 0);
                (t = n.parentNode) && 1 === t.nodeType;
  
              )
                n = t;
              s.push(n);
            }
            for (var c = 0; c < s.length; ++c) l(s[c]);
            t === (0 | t) && s[0].setAttribute("value", t);
            var f = o.createElement("ol");
            f.className = "linenums";
            for (var p = Math.max(0, (t - 1) | 0) || 0, d = ((c = 0), s.length); c < d; ++c) ((a = s[c]).className = "L" + ((c + p) % 10)), a.firstChild || a.appendChild(o.createTextNode(" ")), f.appendChild(a);
            e.appendChild(f);
          }
          var x = {};
          function b(t, n) {
            for (var r = n.length; --r >= 0; ) {
              var i = n[r];
              x.hasOwnProperty(i) ? e.console && console.warn("cannot override language handler %s", i) : (x[i] = t);
            }
          }
          function w(e, t) {
            return (e && x.hasOwnProperty(e)) || (e = /^\s*</.test(t) ? "default-markup" : "default-code"), x[e];
          }
          function C(t) {
            var n,
              r,
              i,
              o,
              a,
              s,
              l,
              u = t.langExtension;
            try {
              var c =
                  ((n = t.sourceNode),
                  (r = t.pre),
                  (i = /(?:^|\s)nocode(?:\s|$)/),
                  (o = []),
                  (a = 0),
                  (s = []),
                  (l = 0),
                  (function e(t) {
                    var n = t.nodeType;
                    if (1 == n) {
                      if (i.test(t.className)) return;
                      for (var u = t.firstChild; u; u = u.nextSibling) e(u);
                      var c = t.nodeName.toLowerCase();
                      ("br" !== c && "li" !== c) || ((o[l] = "\n"), (s[l << 1] = a++), (s[(l++ << 1) | 1] = t));
                    } else if (3 == n || 4 == n) {
                      var f = t.nodeValue;
                      f.length && ((f = r ? f.replace(/\r\n?/g, "\n") : f.replace(/[ \t\r\n]+/g, " ")), (o[l] = f), (s[l << 1] = a), (a += f.length), (s[(l++ << 1) | 1] = t));
                    }
                  })(n),
                  { sourceCode: o.join("").replace(/\n$/, ""), spans: s }),
                f = c.sourceCode;
              (t.sourceCode = f),
                (t.spans = c.spans),
                (t.basePos = 0),
                w(u, f)(t),
                (function (e) {
                  var t = /\bMSIE\s(\d+)/.exec(navigator.userAgent);
                  t = t && +t[1] <= 8;
                  var n,
                    r,
                    i = /\n/g,
                    o = e.sourceCode,
                    a = o.length,
                    s = 0,
                    l = e.spans,
                    u = l.length,
                    c = 0,
                    f = e.decorations,
                    p = f.length,
                    d = 0;
                  for (f[p] = a, r = n = 0; r < p; ) f[r] !== f[r + 2] ? ((f[n++] = f[r++]), (f[n++] = f[r++])) : (r += 2);
                  for (p = n, r = n = 0; r < p; ) {
                    for (var h = f[r], g = f[r + 1], v = r + 2; v + 2 <= p && f[v + 1] === g; ) v += 2;
                    (f[n++] = h), (f[n++] = g), (r = v);
                  }
                  p = f.length = n;
                  var m = e.sourceNode,
                    y = "";
                  m && ((y = m.style.display), (m.style.display = "none"));
                  try {
                    for (; c < u; ) {
                      l[c];
                      var x,
                        b = l[c + 2] || a,
                        w = f[d + 2] || a,
                        C = ((v = Math.min(b, w)), l[c + 1]);
                      if (1 !== C.nodeType && (x = o.substring(s, v))) {
                        t && (x = x.replace(i, "\r")), (C.nodeValue = x);
                        var T = C.ownerDocument,
                          S = T.createElement("span");
                        S.className = f[d + 1];
                        var N = C.parentNode;
                        N.replaceChild(S, C), S.appendChild(C), s < b && ((l[c + 1] = C = T.createTextNode(o.substring(v, b))), N.insertBefore(C, S.nextSibling));
                      }
                      (s = v) >= b && (c += 2), s >= w && (d += 2);
                    }
                  } finally {
                    m && (m.style.display = y);
                  }
                })(t);
            } catch (t) {
              e.console && console.log((t && t.stack) || t);
            }
          }
          function T(e, t, n) {
            var r = n || !1,
              i = t || null,
              o = document.createElement("div");
            return (o.innerHTML = "<pre>" + e + "</pre>"), (o = o.firstChild), r && y(o, r, !0), C({ langExtension: i, numberLines: r, sourceNode: o, pre: 1, sourceCode: null, basePos: null, spans: null, decorations: null }), o.innerHTML;
          }
          function S(t, n) {
            var r = n || document.body,
              i = r.ownerDocument || document;
            function o(e) {
              return r.getElementsByTagName(e);
            }
            for (var a = [o("pre"), o("code"), o("xmp")], s = [], l = 0; l < a.length; ++l) for (var u = 0, c = a[l].length; u < c; ++u) s.push(a[l][u]);
            a = null;
            var f = Date;
            f.now ||
              (f = {
                now: function () {
                  return +new Date();
                },
              });
            var p = 0,
              d = /\blang(?:uage)?-([\w.]+)(?!\S)/,
              g = /\bprettyprint\b/,
              v = /\bprettyprinted\b/,
              m = /pre|xmp/i,
              x = /^code$/i,
              b = /^(?:pre|code|xmp)$/i,
              w = {};
            !(function n() {
              for (var r = e.PR_SHOULD_USE_CONTINUATION ? f.now() + 250 : 1 / 0; p < s.length && f.now() < r; p++) {
                for (var o = s[p], a = w, l = o; (l = l.previousSibling); ) {
                  var u = l.nodeType,
                    c = (7 === u || 8 === u) && l.nodeValue;
                  if (c ? !/^\??prettify\b/.test(c) : 3 !== u || /\S/.test(l.nodeValue)) break;
                  if (c) {
                    (a = {}),
                      c.replace(/\b(\w+)=([\w:.%+-]+)/g, function (e, t, n) {
                        a[t] = n;
                      });
                    break;
                  }
                }
                var T = o.className;
                if ((a !== w || g.test(T)) && !v.test(T)) {
                  for (var S = !1, N = o.parentNode; N; N = N.parentNode) {
                    var E = N.tagName;
                    if (b.test(E) && N.className && g.test(N.className)) {
                      S = !0;
                      break;
                    }
                  }
                  if (!S) {
                    o.className += " prettyprinted";
                    var k,
                      A,
                      j = a.lang;
                    if (!j) !(j = T.match(d)) && (k = h(o)) && x.test(k.tagName) && (j = k.className.match(d)), j && (j = j[1]);
                    if (m.test(o.tagName)) A = 1;
                    else {
                      var D = o.currentStyle,
                        L = i.defaultView,
                        P = D ? D.whiteSpace : L && L.getComputedStyle ? L.getComputedStyle(o, null).getPropertyValue("white-space") : 0;
                      A = P && "pre" === P.substring(0, 3);
                    }
                    var R = a.linenums;
                    (R = "true" === R || +R) || (R = !!(R = T.match(/\blinenums\b(?::(\d+))?/)) && (!R[1] || !R[1].length || +R[1])), R && y(o, R, A), C({ langExtension: j, sourceNode: o, numberLines: R, pre: A, sourceCode: null, basePos: null, spans: null, decorations: null });
                  }
                }
              }
              p < s.length ? e.setTimeout(n, 250) : "function" == typeof t && t();
            })();
          }
          b(m, ["default-code"]),
            b(
              g(
                [],
                [
                  ["pln", /^[^<?]+/],
                  ["dec", /^<!\w[^>]*(?:>|$)/],
                  ["com", /^<\!--[\s\S]*?(?:-\->|$)/],
                  ["lang-", /^<\?([\s\S]+?)(?:\?>|$)/],
                  ["lang-", /^<%([\s\S]+?)(?:%>|$)/],
                  ["pun", /^(?:<[%?]|[%?]>)/],
                  ["lang-", /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],
                  ["lang-js", /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],
                  ["lang-css", /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],
                  ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i],
                ]
              ),
              ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]
            ),
            b(
              g(
                [
                  ["pln", /^[\s]+/, null, " \t\r\n"],
                  ["atv", /^(?:\"[^\"]*\"?|\'[^\']*\'?)/, null, "\"'"],
                ],
                [
                  ["tag", /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],
                  ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
                  ["lang-uq.val", /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
                  ["pun", /^[=<>\/]+/],
                  ["lang-js", /^on\w+\s*=\s*\"([^\"]+)\"/i],
                  ["lang-js", /^on\w+\s*=\s*\'([^\']+)\'/i],
                  ["lang-js", /^on\w+\s*=\s*([^\"\'>\s]+)/i],
                  ["lang-css", /^style\s*=\s*\"([^\"]+)\"/i],
                  ["lang-css", /^style\s*=\s*\'([^\']+)\'/i],
                  ["lang-css", /^style\s*=\s*([^\"\'>\s]+)/i],
                ]
              ),
              ["in.tag"]
            ),
            b(g([], [["atv", /^[\s\S]+/]]), ["uq.val"]),
            b(v({ keywords: r, hashComments: !0, cStyleComments: !0, types: f }), ["c", "cc", "cpp", "cxx", "cyc", "m"]),
            b(v({ keywords: "null,true,false" }), ["json"]),
            b(v({ keywords: o, hashComments: !0, cStyleComments: !0, verbatimStrings: !0, types: f }), ["cs"]),
            b(v({ keywords: i, cStyleComments: !0 }), ["java"]),
            b(v({ keywords: c, hashComments: !0, multiLineStrings: !0 }), ["bash", "bsh", "csh", "sh"]),
            b(v({ keywords: l, hashComments: !0, multiLineStrings: !0, tripleQuotedStrings: !0 }), ["cv", "py", "python"]),
            b(v({ keywords: s, hashComments: !0, multiLineStrings: !0, regexLiterals: 2 }), ["perl", "pl", "pm"]),
            b(v({ keywords: u, hashComments: !0, multiLineStrings: !0, regexLiterals: !0 }), ["rb", "ruby"]),
            b(v({ keywords: a, cStyleComments: !0, regexLiterals: !0 }), ["javascript", "js", "ts", "typescript"]),
            b(v({ keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes", hashComments: 3, cStyleComments: !0, multilineStrings: !0, tripleQuotedStrings: !0, regexLiterals: !0 }), ["coffee"]),
            b(g([], [["str", /^[\s\S]+/]]), ["regex"]);
          var N = (e.PR = {
              createSimpleLexer: g,
              registerLangHandler: b,
              sourceDecorator: v,
              PR_ATTRIB_NAME: "atn",
              PR_ATTRIB_VALUE: "atv",
              PR_COMMENT: "com",
              PR_DECLARATION: "dec",
              PR_KEYWORD: "kwd",
              PR_LITERAL: "lit",
              PR_NOCODE: "nocode",
              PR_PLAIN: "pln",
              PR_PUNCTUATION: "pun",
              PR_SOURCE: "src",
              PR_STRING: "str",
              PR_TAG: "tag",
              PR_TYPE: "typ",
              prettyPrintOne: (e.prettyPrintOne = T),
              prettyPrint: (e.prettyPrint = S),
            }),
            E = e.define;
          "function" == typeof E &&
            E.amd &&
            E("google-code-prettify", [], function () {
              return N;
            });
        })();
    },
    function (e, t) {
      /**
       * @license
       * Copyright (C) 2009 Google Inc.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *    http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      PR.registerLangHandler(
        PR.createSimpleLexer(
          [[PR.PR_PLAIN, /^[ \t\r\n\f]+/, null, " \t\r\n\f"]],
          [
            [PR.PR_STRING, /^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/, null],
            [PR.PR_STRING, /^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/, null],
            ["lang-css-str", /^url\(([^\)\"\']+)\)/i],
            [PR.PR_KEYWORD, /^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i, null],
            ["lang-css-kw", /^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],
            [PR.PR_COMMENT, /^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],
            [PR.PR_COMMENT, /^(?:<!--|-->)/],
            [PR.PR_LITERAL, /^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],
            [PR.PR_LITERAL, /^#(?:[0-9a-f]{3}){1,2}\b/i],
            [PR.PR_PLAIN, /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],
            [PR.PR_PUNCTUATION, /^[^\s\w\'\"]+/],
          ]
        ),
        ["css"]
      ),
        PR.registerLangHandler(PR.createSimpleLexer([], [[PR.PR_KEYWORD, /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]]), ["css-kw"]),
        PR.registerLangHandler(PR.createSimpleLexer([], [[PR.PR_STRING, /^[^\)\"\']+/]]), ["css-str"]);
    },
    function (e, t) {
      !(function (e) {
        (e.fn.stickyNavigator = function (t) {
          var n = e.extend({}, e.fn.stickyNavigator.defaults, t),
            r = e(this),
            i = e(n.wrapselector).find(n.targetselector);
          if (0 !== r.length && 0 !== i.length) {
            var o = [
              "<ul>",
              i
                .map(function () {
                  var t = e(this),
                    n = t.text(),
                    r = Math.floor(99999999 * Math.random()),
                    i = "js-nav-" + r;
                  t.addClass("js-nav"), t.addClass(i), t.data("num", r);
                  var o = "nav-" + t[0].tagName.toLowerCase();
                  return '<li class="' + (o = o + " nav-" + r) + '"><a href="#" data-href=".' + i + '">' + e("<dummy>").text(n).html() + "</li>";
                })
                .get()
                .join(""),
              "</ul>",
            ].join("");
            r.append(o),
              r.find("li>a").click(function (t) {
                var n = e(this).data("href"),
                  r = e(n);
                t.preventDefault(), e("html, body").animate({ scrollTop: r.offset().top }, 500);
              });
            var a = function (t) {
              // スクロールによる目次追従修正箇所
              console.log('e(t).scrollTop()',e(t).scrollTop());
              console.log('r.parent().offset().top', r.parent().offset().top);
              // 修正前
              // if (e(t).scrollTop() > r.parent().offset().top) {
              if (e(t).scrollTop() > 0) {
                var n = (function () {
                  var t = e(window).scrollTop(),
                    n = "";
                  return t < e(".js-nav:eq(0)").offset().top
                    ? n
                    : (e(".js-nav").each(function (r) {
                        if (0 !== r) return Math.floor(t) < Math.floor(e(this).offset().top) - 1 ? ((n = e(".js-nav:eq(" + (r - 1) + ")").data("num")), !1) : void 0;
                      }),
                      "" === n && (n = e(".js-nav:last").data("num")),
                      n);
                })();
                r.find("li").removeClass("current"), r.find("li.nav-" + n).addClass("current");
              }
            };
            return (
              e(window).scroll(function () {
                a(this);
              }),
              a(window),
              this
            );
          }
        }),
          (e.fn.stickyNavigator.defaults = { wrapselector: document, targetselector: "h3,h4,h5" });
      })(jQuery);
    },
    function (e, t) {
      $(function () {
        $(window).scroll(function () {
          $(".entry-content strong").each(function () {
            var e = $(this).offset().top;
            $(window).scrollTop() > e - $(window).height() && $(this).addClass("active");
          });
        }),
          (function () {
            $('<span id="page-top" class="link"><a href="#">^</a></span>').appendTo("body");
            var e = $("#page-top"),
              t = !1,
              n = function (n) {
                n > 100 ? 0 == t && ((t = !0), e.removeClass("hide")) : t && ((t = !1), e.addClass("hide"));
              };
            $(window).scroll(function () {
              n($(this).scrollTop());
            }),
              e.click(function () {
                return $("body,html").animate({ scrollTop: 0 }, 500), !1;
              }),
              n($(window).scrollTop());
          })(),
          $("pre.code").each(function () {
            var e = $(this),
              t = e.find("code"),
              n = t.text();
            e.addClass("prettyprint"), e.addClass("linenums"), t.empty().text(n);
          }),
          prettyPrint(),
          $(window).scroll(function () {
            $(this).scrollTop() > 100 ? $(".sidebar-wrapper").addClass("fixed") : $(".sidebar-wrapper").removeClass("fixed");
          }),
          $("#sticky-navigator").stickyNavigator({ wrapselector: ".entry-content" });
      });
    },
  ]);
  
  
  
  
  