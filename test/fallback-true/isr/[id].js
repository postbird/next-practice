"use strict";
(() => {
var exports = {};
exports.id = 856;
exports.ids = [856];
exports.modules = {

/***/ 1079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Page = ({ post  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "getStaticProps"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: post?.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: post?.date
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);
const getStaticPaths = ()=>{
    const ids = Array.from(new Array(3)).map((_, index)=>index);
    const result = {
        paths: ids.map((item)=>({
                params: {
                    id: String(item)
                }
            })),
        fallback: true
    };
    return result;
};
const fetchPost = (id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("fetch id is ", id);
            const post = {
                title: Math.random().toString(),
                date: Date.now().toString(),
                id
            };
            resolve(post);
        }, 1000);
    });
};
const getStaticProps = async (ctx)=>{
    const id = ctx.params?.id;
    console.log("exec id is ", id);
    const post = await fetchPost(id);
    return {
        props: {
            post
        }
    };
};


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1079));
module.exports = __webpack_exports__;

})();