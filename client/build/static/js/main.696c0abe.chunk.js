(this["webpackJsonptactual-lab"] = this["webpackJsonptactual-lab"] || []).push([
  [0],
  {
    187: function (e, t, a) {
      e.exports = a(324);
    },
    324: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        l = a(40),
        c = a.n(l),
        i = (a(192), a(41)),
        o = a(42),
        u = a(333),
        m = a(339),
        d = a(84),
        E = a(15),
        p = a(338);
      function s() {
        var e = Object(i.a)([
          "\n  &&&& {\n    /* background-color: lightgray; */\n  }\n",
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      var v = Object(o.a)(p.a)(s());
      var f = function () {
        var e = Object(n.useState)("/"),
          t = Object(d.a)(e, 2),
          a = t[0],
          l = t[1],
          c = Object(E.f)(),
          i = Object(E.g)();
        function o(e) {
          c.push(e), l(e);
        }
        return (
          Object(n.useEffect)(
            function () {
              l(i.pathname);
            },
            [i.pathname]
          ),
          r.a.createElement(
            v,
            { fixed: "top" },
            r.a.createElement(p.a.Item, {
              name: "Home",
              active: "/inventory" === a,
              onClick: function () {
                o("/inventory");
              },
            }),
            r.a.createElement(p.a.Item, {
              name: "Cart",
              active: "/cart" === a,
              position: "right",
              onClick: function () {
                o("/cart");
              },
            })
          )
        );
      };
      function h() {
        var e = Object(i.a)([
          "\n  text-align: center;\n  font-size: 0.81rem;\n  padding: 0.75rem 0;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px 0px inset;\n",
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      var y = o.a.div(h());
      var b = function () {
        return r.a.createElement(
          y,
          null,
          r.a.createElement(
            "a",
            { href: "https://www.tactuallabs.com/", target: " _blank" },
            "Terms & Conditions"
          ),
          r.a.createElement(
            "span",
            null,
            "- Identifi \xa0\xa0\xa0\xa0\xa0\xa9",
            " ",
            new Date().getFullYear(),
            " Tactual Labs, LLC."
          )
        );
      };
      var S = function () {
        var e = Object(n.useState)("/inventory"),
          t = Object(d.a)(e, 2),
          a = t[0],
          l = t[1],
          c = Object(E.f)(),
          i = Object(E.g)();
        function o(e) {
          c.push(e), l(e);
        }
        return (
          Object(n.useEffect)(
            function () {
              l(i.pathname);
            },
            [i.pathname]
          ),
          r.a.createElement(
            p.a,
            { vertical: !0, color: "grey" },
            r.a.createElement(
              p.a.Item,
              {
                active: "/inventory" === a,
                onClick: function () {
                  o("/inventory");
                },
              },
              "View Inventory"
            ),
            r.a.createElement(
              p.a.Item,
              {
                active: "/addStock" === a,
                onClick: function () {
                  o("/addStock");
                },
              },
              "Add Stock"
            ),
            r.a.createElement(
              p.a.Item,
              {
                active: "/orderHistory" === a,
                onClick: function () {
                  o("/orderHistory");
                },
              },
              "Order History"
            )
          )
        );
      };
      function g() {
        var e = Object(i.a)(["\n  /* background-color: lightgray; */\n"]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = Object(i.a)([
          "\n  min-height: 96vh;\n  overflow-y: auto;\n  padding-top: 4em;\n",
        ]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      var C = o.a.div(w()),
        k = o.a.div(g());
      var O = function (e) {
          var t = e.children;
          return r.a.createElement(
            k,
            { fluid: !0 },
            r.a.createElement(f, null),
            r.a.createElement(
              C,
              null,
              r.a.createElement(
                u.a,
                null,
                r.a.createElement(
                  m.a,
                  null,
                  r.a.createElement(
                    m.a.Column,
                    { width: 4 },
                    r.a.createElement(S, null)
                  ),
                  r.a.createElement(
                    m.a.Column,
                    { width: 12 },
                    r.a.createElement(u.a, null, t)
                  )
                )
              )
            ),
            r.a.createElement(b, null)
          );
        },
        j = a(61),
        H = a(336),
        N = {
          data: {
            products: [
              {
                id: 1,
                productName: "Television",
                description: "Viewing device",
                price: "99.00",
                quatity: "10",
              },
              {
                id: 2,
                productName: "Sensor",
                description: "Sound Sensor",
                price: "99.00",
                quatity: "10",
              },
              {
                id: 3,
                productName: "Sensor",
                description: "Sound Sensor",
                price: "99.00",
                quatity: "10",
              },
              {
                id: 4,
                productName: "Sensor",
                description: "Sound Sensor",
                price: "99.00",
                quatity: "10",
              },
              {
                id: 5,
                productName: "Sensor",
                description: "Sound Sensor",
                price: "99.00",
                quatity: "10",
              },
              {
                id: 6,
                productName: "Sensor",
                description: "Sound Sensor",
                price: "99.00",
                quatity: "10",
              },
              {
                id: 7,
                productName: "Sensor",
                description: "Sound Sensor",
                price: "99.00",
                quatity: "10",
              },
            ],
          },
        };
      var x = function () {
        return r.a.createElement(
          H.a,
          { celled: !0, selectable: !0 },
          r.a.createElement(
            H.a.Header,
            null,
            r.a.createElement(
              H.a.Row,
              null,
              r.a.createElement(H.a.HeaderCell, null, "#"),
              r.a.createElement(H.a.HeaderCell, null, "Product Name"),
              r.a.createElement(H.a.HeaderCell, null, "Description"),
              r.a.createElement(H.a.HeaderCell, null, "Price"),
              r.a.createElement(H.a.HeaderCell, null, "Quantity")
            )
          ),
          r.a.createElement(
            H.a.Body,
            null,
            N.data.products.map(function (e, t) {
              return r.a.createElement(
                H.a.Row,
                { key: e.id },
                r.a.createElement(H.a.Cell, null, t + 1),
                r.a.createElement(H.a.Cell, null, e.productName),
                r.a.createElement(H.a.Cell, null, e.description),
                r.a.createElement(H.a.Cell, null, e.price),
                r.a.createElement(H.a.Cell, null, e.quatity)
              );
            })
          )
        );
      };
      var q = function () {
        return r.a.createElement("div", null, "Cart");
      };
      var I = function () {
        return r.a.createElement("div", null, "OrderHistory");
      };
      var P = function () {
          return r.a.createElement("div", null, "Product");
        },
        F = a(340),
        D = a(334),
        B = a(337);
      var L = function () {
        return r.a.createElement(
          F.a,
          null,
          r.a.createElement(
            D.a,
            null,
            r.a.createElement(
              D.a.Field,
              null,
              r.a.createElement("label", null, "Product Name"),
              r.a.createElement("input", { placeholder: "Product Name" })
            ),
            r.a.createElement(
              D.a.Field,
              null,
              r.a.createElement("label", null, "Description"),
              r.a.createElement("input", { placeholder: "Description" })
            ),
            r.a.createElement(
              D.a.Group,
              { widths: "equal" },
              r.a.createElement(
                D.a.Field,
                null,
                r.a.createElement("label", null, "Quantity"),
                r.a.createElement("input", { type: "text", placeholder: "0" })
              ),
              r.a.createElement(
                D.a.Field,
                null,
                r.a.createElement("label", null, "Price"),
                r.a.createElement("input", { type: "text", placeholder: "0" })
              )
            ),
            r.a.createElement(B.a, { type: "submit", primary: !0 }, "Submit")
          )
        );
      };
      var T = function () {
        return r.a.createElement(
          E.c,
          null,
          r.a.createElement(E.a, { path: "/cart" }, r.a.createElement(q, null)),
          r.a.createElement(
            E.a,
            { path: "/inventory/products/:productId" },
            r.a.createElement(P, null)
          ),
          r.a.createElement(
            E.a,
            { path: "/orderHistory" },
            r.a.createElement(I, null)
          ),
          r.a.createElement(
            E.a,
            { path: "/addStock" },
            r.a.createElement(L, null)
          ),
          r.a.createElement(
            E.a,
            { path: "/inventory" },
            r.a.createElement(x, null)
          ),
          r.a.createElement(E.a, { path: "*" }, r.a.createElement(x, null))
        );
      };
      var J = function () {
        return r.a.createElement(
          j.a,
          null,
          r.a.createElement(O, null, r.a.createElement(T, null))
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      c.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(J, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[187, 1, 2]],
]);
//# sourceMappingURL=main.696c0abe.chunk.js.map
