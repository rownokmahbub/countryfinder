"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/BackToTop.js


function App() {
    (0,external_react_.useEffect)(()=>{
        // 👇️ scroll to top on page load
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "relative",
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            className: "fixed bottom-8 right-8 bg-gradient-to-r from-purple-900 to-violet-800 px-3 py-3 shadow-lg rounded-full",
            onClick: ()=>{
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                });
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "w-8 h-8 -rotate-90",
                src: "/Assets/backtotop.gif",
                alt: ""
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/layout.js



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-gradient-to-r from-[#020222] via-[#110114] to-[#050515] ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    " ",
                    children
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(App, {})
        ]
    });
};
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(855));
module.exports = __webpack_exports__;

})();