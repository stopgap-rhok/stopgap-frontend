(this["webpackJsonpstopgap-frontend"] =
  this["webpackJsonpstopgap-frontend"] || []).push([
  [0],
  {
    138: function(e, n, a) {
      e.exports = { main: "App_main__2l94Q" };
    },
    143: function(e, n, a) {
      e.exports = a(308);
    },
    308: function(e, n, a) {
      "use strict";
      a.r(n);
      var t = a(0),
        o = a.n(t),
        r = a(84),
        i = a.n(r),
        s = a(54),
        c = a(32),
        l = a(38),
        u = a(3),
        m = a.n(u),
        d = a(319),
        p = a(312),
        h = a(316),
        g = a(317),
        b = a(318),
        f = a(320),
        v = a(315),
        O = a(321),
        E = a(139),
        w = a(9),
        y = a.n(w);
      function _(e, n) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          n &&
            (t = t.filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            a.push.apply(a, t);
        }
        return a;
      }
      function N(e) {
        for (var n = 1; n < arguments.length; n++) {
          var a = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? _(a, !0).forEach(function(n) {
                Object(l.a)(e, n, a[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : _(a).forEach(function(n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(a, n),
                );
              });
        }
        return e;
      }
      var I = d.a.Types,
        S = {
          singleStep: I.BooleanType().isRequired("This field is required"),
          nonResidential: I.BooleanType().isRequired("This field is required"),
        },
        k = {
          name: I.StringType().isRequired("Business name is required"),
          address: I.StringType().isRequired("Business address is required"),
          userIsOwner: I.BooleanType().isRequired("This field is required"),
        },
        T = { attachments: I.ArrayType() },
        j = {
          sidewalkFlat: I.BooleanType(),
          stepIsWide: I.BooleanType(),
          correctHeight: I.BooleanType(),
        },
        F = {
          canContact: I.BooleanType().isRequired("This field is required"),
          email: I.StringType().isEmail("Invalid email address"),
        },
        C =
          (d.a.Model({
            environment: I.ObjectType()
              .shape(S)
              .isRequired(),
            business: I.ObjectType()
              .shape(k)
              .isRequired(),
            contact: I.ObjectType()
              .shape(F)
              .isRequired(),
            info: I.ObjectType()
              .shape(j)
              .isRequired(),
            image: I.ObjectType()
              .shape(T)
              .isRequired(),
            extraInfo: I.StringType(),
          }),
          [
            "ENVIRONMENT_INFO",
            "BUSINESS_INFO",
            "IMAGE",
            "ADDITIONAL_INFO",
            "CONTACT_INFO",
          ]),
        B = C.reduce(function(e, n, a) {
          return N({}, e, Object(l.a)({}, n, a));
        }, {}),
        R = B[C[0]],
        q = B[C[C.length - 1]];
      function A(e) {
        var n = e.onSubmit,
          a = Object(t.useState)(R),
          r = Object(c.a)(a, 2),
          i = r[0],
          s = r[1],
          u = Object(t.useState)({}),
          m = Object(c.a)(u, 2),
          d = m[0],
          p = m[1];
        function h(e) {
          return function(n) {
            p(N({}, d, Object(l.a)({}, e, n)));
          };
        }
        function g(e) {
          e === q
            ? n(d)
            : s(
                (function(e) {
                  return console.assert(e < q), e + 1;
                })(e),
              );
        }
        function b(e) {
          s(
            (function(e) {
              return console.assert(e > R), e - 1;
            })(e),
          );
        }
        return o.a.createElement(
          o.a.Fragment,
          null,
          i === B.ENVIRONMENT_INFO &&
            o.a.createElement(W, {
              value: d.environment,
              onChange: h("environment"),
              onSubmit: g,
              goBack: b,
            }),
          i === B.BUSINESS_INFO &&
            o.a.createElement(P, {
              value: d.business,
              onChange: h("business"),
              onSubmit: g,
              goBack: b,
            }),
          i === B.IMAGE &&
            o.a.createElement(H, {
              value: d.image,
              onChange: h("image"),
              onSubmit: g,
              goBack: b,
            }),
          i === B.ADDITIONAL_INFO &&
            o.a.createElement(D, {
              value: d.additional,
              onChange: h("additional"),
              onSubmit: g,
              goBack: b,
            }),
          i === B.CONTACT_INFO &&
            o.a.createElement(G, {
              isOwner: d.business.userIsOwner,
              value: d.contact,
              onChange: h("contact"),
              onSubmit: g,
              goBack: b,
            }),
        );
      }
      function x(e) {
        var n = e.children,
          a = e.className,
          t = Object(s.a)(e, ["children", "className"]);
        return o.a.createElement(
          p.a,
          null,
          o.a.createElement("p", { className: y.a.question }, n),
          o.a.createElement(
            h.a,
            Object.assign(
              { className: m()(a, y.a.radioGroup), accepter: g.a },
              t,
            ),
            o.a.createElement(b.a, { className: y.a.radio, value: !0 }, "Yes."),
            o.a.createElement(b.a, { className: y.a.radio, value: !1 }, "No."),
          ),
        );
      }
      function W(e) {
        var n = e.goBack,
          a = e.value,
          t = e.onChange,
          r = e.onSubmit;
        return o.a.createElement(
          M,
          {
            schema: S,
            value: a,
            onChange: t,
            onSubmit: r,
            step: B.ENVIRONMENT_INFO,
            goBack: n,
            heading:
              "Tell us about an Ottawa business that could use a StopGap ramp.",
          },
          o.a.createElement(
            x,
            { name: "singleStep" },
            "Is the location inaccessible due to a single step?",
          ),
          o.a.createElement(
            x,
            { name: "nonResidential" },
            "Is the location non-residential?",
          ),
        );
      }
      function P(e) {
        var n = e.goBack,
          a = e.value,
          t = e.onChange,
          r = e.onSubmit;
        return o.a.createElement(
          M,
          {
            schema: k,
            value: a,
            onChange: t,
            onSubmit: r,
            step: B.BUSINESS_INFO,
            goBack: n,
            heading: "Where would you like a ramp?",
            subheading: "* mandatory",
          },
          o.a.createElement(
            p.a,
            null,
            o.a.createElement(
              f.a,
              { className: y.a.label },
              "Business name *",
              o.a.createElement(h.a, { name: "name" }),
            ),
          ),
          o.a.createElement(
            p.a,
            null,
            o.a.createElement(
              f.a,
              { className: y.a.label },
              "Address *",
              o.a.createElement(h.a, { name: "address" }),
            ),
          ),
          o.a.createElement(
            x,
            { name: "userIsOwner" },
            "Are you the owner of this business?",
          ),
        );
      }
      function D(e) {
        var n = e.goBack,
          a = e.value,
          t = e.onChange,
          r = e.onSubmit;
        return o.a.createElement(
          "div",
          { className: y.a.additionInfo },
          o.a.createElement(
            M,
            {
              schema: j,
              value: a,
              onChange: t,
              onSubmit: r,
              step: B.ADDITIONAL_INFO,
              goBack: n,
              heading: "Give us some extra information.",
            },
            o.a.createElement(
              x,
              { name: "sidewalkFlat" },
              "Is the sidewalk flat?",
            ),
            o.a.createElement(
              x,
              { name: "stepIsWide" },
              "Is the step 34 inches or wider?",
            ),
            o.a.createElement(
              x,
              { name: "correctHeight" },
              "Is the step taller than 2 inches and shorter than 9 inches?",
            ),
          ),
        );
      }
      function G(e) {
        var n = e.isOwner,
          a = e.goBack,
          t = e.value,
          r = e.onChange,
          i = e.onSubmit;
        return o.a.createElement(
          M,
          {
            schema: n
              ? N({}, F, {
                  email: I.StringType()
                    .isEmail()
                    .isRequired("This field is required"),
                })
              : F,
            value: t,
            onChange: r,
            onSubmit: i,
            step: B.CONTACT_INFO,
            goBack: a,
            heading: n
              ? "We'll drop you a line soon."
              : "Can we contact you about this request?",
          },
          n ||
            o.a.createElement(
              x,
              { name: "canContact" },
              "Can we contact you about this request?",
            ),
          o.a.createElement(
            p.a,
            null,
            o.a.createElement(
              f.a,
              null,
              "Email address",
              o.a.createElement(h.a, { name: "email", isRequired: n }),
            ),
          ),
        );
      }
      function H(e) {
        var n = e.goBack,
          a = e.value,
          t = e.onChange,
          r = e.onSubmit;
        return o.a.createElement(
          "div",
          { className: y.a.imageForm },
          o.a.createElement(
            M,
            {
              heading: "Add a photo or two.",
              schema: T,
              step: B.IMAGE,
              onSubmit: r,
              onChange: t,
              value: a,
              goBack: n,
            },
            o.a.createElement(
              "p",
              { className: y.a.imagequestion },
              "Be sure to show the step and entryway.",
            ),
            o.a.createElement(h.a, {
              accepter: v.a,
              accept: "image/*",
              listType: "picture",
              multiple: !0,
              name: "attachments",
              autoUpload: !1,
              removable: !0,
            }),
          ),
        );
      }
      function M(e) {
        var n = e.children,
          a = e.goBack,
          r = e.value,
          i = e.onChange,
          c = e.onSubmit,
          l = e.step,
          u = e.schema,
          m = e.heading,
          p = Object(s.a)(e, [
            "children",
            "goBack",
            "value",
            "onChange",
            "onSubmit",
            "step",
            "schema",
            "heading",
          ]),
          h = Object(t.useRef)(null),
          g = Object(t.useMemo)(
            function() {
              return d.a.Model(u);
            },
            [u],
          );
        return o.a.createElement(
          U,
          Object.assign(
            {
              ref: h,
              fluid: !0,
              model: g,
              formValue: r,
              onChange: i,
              onSubmit: function(e) {
                e.preventDefault(), h.current.check() && c(l);
              },
              step: l,
              goBack: a,
              heading: m,
            },
            p,
          ),
          n,
        );
      }
      var U = Object(t.forwardRef)(function(e, n) {
          var a = e.children,
            t = e.className,
            r = e.heading,
            i = e.subheading,
            c = e.step,
            u = e.goBack,
            d = Object(s.a)(e, [
              "children",
              "className",
              "heading",
              "subheading",
              "step",
              "goBack",
            ]);
          return o.a.createElement(
            O.a,
            Object.assign({ ref: n, className: m()(y.a.container, t) }, d),
            o.a.createElement(
              "h2",
              { className: y.a.heading },
              r,
              i && o.a.createElement("small", { className: y.a.subheading }, i),
            ),
            a,
            o.a.createElement(
              "div",
              { className: y.a.buttonContainer },
              c !== R &&
                o.a.createElement(
                  E.a,
                  {
                    appearance: "subtle",
                    size: "lg",
                    type: "button",
                    onClick: function() {
                      return u(c);
                    },
                    className: y.a.navbutton,
                  },
                  "< Back",
                ),
              o.a.createElement(
                E.a,
                {
                  appearance: "primary",
                  size: "lg",
                  type: "submit",
                  className: m()(
                    y.a.submit,
                    Object(l.a)({}, y.a.actuallySubmit, c === q),
                  ),
                },
                c === q ? "Submit." : "Next >",
              ),
            ),
          );
        }),
        L = a(13),
        V = a.n(L),
        Y = a(25),
        z = a(136),
        J = a(141),
        Q = a(52),
        X = a(137),
        Z = a(140),
        $ = a(142);
      Object(Z.a)(Error);
      function K(e, n, a) {
        return ee.apply(this, arguments);
      }
      function ee() {
        return (ee = Object(Y.a)(
          V.a.mark(function e(n, a, t) {
            var o;
            return V.a.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), window.fetch(n, a);
                    case 3:
                      if (!(o = e.sent).ok) {
                        e.next = 8;
                        break;
                      }
                      return (e.next = 7), o.json();
                    case 7:
                      return e.abrupt("return", e.sent);
                    case 8:
                      e.next = 13;
                      break;
                    case 10:
                      (e.prev = 10),
                        (e.t0 = e.catch(0)),
                        ae().then(function(e) {
                          return e
                            .transaction("outbox", "readwrite")
                            .objectStore("outbox")
                            .put({
                              body: t,
                              url:
                                "https://us-east4-rhok11-stopgap.cloudfunctions.net/uploadRampRequest",
                            });
                        });
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]],
            );
          }),
        )).apply(this, arguments);
      }
      function ne(e, n, a) {
        return K(e, { method: "POST", mode: "no-cors", body: n }, a);
      }
      function ae() {
        return te.apply(this, arguments);
      }
      function te() {
        return (te = Object(Y.a)(
          V.a.mark(function e() {
            return V.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      Object($.a)("reports", 1, {
                        upgrade: function(e) {
                          e.createObjectStore("outbox", {
                            autoIncrement: !0,
                            keyPath: "id",
                          });
                        },
                      })
                    );
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      var oe = {
        NEW_REPORT:
          "https://us-east4-rhok11-stopgap.cloudfunctions.net/uploadRampRequest",
      };
      function re(e) {
        return ie.apply(this, arguments);
      }
      function ie() {
        return (ie = Object(Y.a)(
          V.a.mark(function e(n) {
            var a, t;
            return V.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log(n),
                      (a = new FormData()),
                      (t = {
                        businessName: n.business.name,
                        businessAddress: n.business.address,
                        attachments: [],
                        singleStep: n.environment.singleStep,
                        nonResidential: n.environment.nonResidential,
                        userIsOwner: n.business.userIsOwner,
                        canContact: n.contact.canContact,
                      }),
                      a.set("businessName", n.business.name),
                      a.set("businessAddress", n.business.address),
                      a.set("singleStep", n.environment.singleStep),
                      a.set("nonResidential", n.environment.nonResidential),
                      a.set("canContact", n.contact.canContact),
                      n.business.details &&
                        (a.set("businessDetails", n.business.details),
                        (t.businessDetails = n.business.details)),
                      n.contact.email &&
                        (a.set("userEmail", n.contact.email),
                        (t.userEmail = n.contact.email)),
                      a.set("userIsOwner", n.business.userIsOwner),
                      n.image &&
                        n.image.attachments &&
                        n.image.attachments.forEach(function(e) {
                          a.append("attachments", e.blobFile, e.name),
                            t.attachments.push(e);
                        }),
                      n.additional &&
                        (n.additional.sidewalkFlat &&
                          (a.set("sidewalkFlat", n.additional.sidewalkFlat),
                          (t.sidewalkFlat = n.additional.sidewalkFlat)),
                        n.additional.stepIsWide &&
                          (a.set("stepIsWide", n.additional.stepIsWide),
                          (t.stepIsWide = n.additional.stepIsWide)),
                        n.additional.correctHeight &&
                          (a.set("correctHeight", n.additional.correctHeight),
                          (t.correctHeight = n.additional.correctHeight))),
                      (e.next = 15),
                      ne(oe.NEW_REPORT, a, t)
                    );
                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      var se = a(138),
        ce = a.n(se);
      var le = function() {
          return o.a.createElement(
            "main",
            { className: ce.a.main },
            o.a.createElement(A, { onSubmit: re }),
          );
        },
        ue = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
            ),
        );
      function me(e, n) {
        navigator.serviceWorker
          .register(e)
          .then(function(e) {
            e.onupdatefound = function() {
              var a = e.installing;
              null != a &&
                (a.onstatechange = function() {
                  "installed" === a.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA.",
                        ),
                        n && n.onUpdate && n.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        n && n.onSuccess && n.onSuccess(e)));
                });
            };
          })
          .catch(function(e) {
            console.error("Error during service worker registration:", e);
          });
      }
      a(307);
      i.a.render(o.a.createElement(le, null), document.getElementById("root")),
        (function(e) {
          console.log("production");
          var n = new URL("", window.location.href);
          console.log(n.origin),
            console.log(window.location.origin),
            n.origin === window.location.origin &&
              window.addEventListener("load", function() {
                var n = "".concat("", "/sw.js");
                console.log(n),
                  ue
                    ? (!(function(e, n) {
                        fetch(e)
                          .then(function(a) {
                            var t = a.headers.get("content-type");
                            404 === a.status ||
                            (null != t && -1 === t.indexOf("javascript"))
                              ? navigator.serviceWorker.ready.then(function(e) {
                                  e.unregister().then(function() {
                                    window.location.reload();
                                  });
                                })
                              : me(e, n);
                          })
                          .catch(function() {
                            console.log(
                              "No internet connection found. App is running in offline mode.",
                            );
                          });
                      })(n, e),
                      navigator.serviceWorker.ready.then(function(e) {
                        e.sync.register("sendReports"),
                          console.log(
                            "This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA",
                          );
                      }))
                    : me(n, e);
              });
        })();
    },
    9: function(e, n, a) {
      e.exports = {
        container: "Form_container__2pLXI",
        buttonContainer: "Form_buttonContainer__24Fal",
        navbutton: "Form_navbutton__2YhHT",
        submit: "Form_submit__3yNoO Form_navbutton__2YhHT",
        radioGroup: "Form_radioGroup__1G91H",
        radio: "Form_radio__2rw5C",
        label: "Form_label__3G2px",
        heading: "Form_heading__34apI",
        subheading: "Form_subheading__2Rd1n",
        actuallySubmit: "Form_actuallySubmit__1-Z7A",
        question: "Form_question__vQjhP",
        additionInfo: "Form_additionInfo__1ylv7",
        imageForm: "Form_imageForm__1j9UI",
        imagequestion: "Form_imagequestion__1a_e3",
      };
    },
  },
  [[143, 1, 2]],
]);
//# sourceMappingURL=main.5718f43d.chunk.js.map
