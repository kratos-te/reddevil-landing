"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/categories",{

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Login */ \"./components/Login/index.tsx\");\n/* harmony import */ var _JoinUs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../JoinUs */ \"./components/JoinUs/index.tsx\");\n/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SignUp */ \"./components/SignUp/index.tsx\");\n/* harmony import */ var _mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Twitter */ \"./node_modules/@mui/icons-material/Twitter.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import { motion } from 'framer-motion'\n\n\nfunction Header() {\n    _s();\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const closeJoinUs = ()=>setShow(false);\n    const [loginOpened, setLoginOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [signupOpened, setSignupOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"mt-8 w-full backdrop-blur-sm bg-black/30 fixed font-[FeastOfFlesh] tracking-widest\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center md:w-[80%] md:mx-auto p-4 justify-between opacity-100\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/logo.png\",\n                    className: \"w-16\",\n                    alt: \"logo\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \" items-center font-regular md:flex hidden\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            className: \" text-2xl text-white transition-all duration-500 mx-5 font-bold\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/story\",\n                            className: \"text-2xl text-white transition-all duration-500 mx-5\",\n                            children: \"Story\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/#team\",\n                            scroll: true,\n                            className: \"text-2xl text-white transition-all duration-500 mx-5\",\n                            children: \"Team\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/categories\",\n                            className: \"text-2xl text-white transition-all duration-500 mx-5\",\n                            children: \"Mint\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            className: \"text-white\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Header\\\\index.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Login__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    opened: loginOpened,\n                    open: ()=>setLoginOpen(true),\n                    close: ()=>setLoginOpen(false),\n                    signupOpen: ()=>setSignupOpen(true)\n                }, void 0, false, {\n                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignUp__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    opened: signupOpened,\n                    open: ()=>setSignupOpen(true),\n                    close: ()=>setSignupOpen(false),\n                    loginOpen: ()=>setLoginOpen(true)\n                }, void 0, false, {\n                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_JoinUs__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    open: show,\n                    closeJoinUs: closeJoinUs\n                }, void 0, false, {\n                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Header\\\\index.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Header\\\\index.tsx\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Header\\\\index.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"YI5oudvEZWZh4HUk8BLQdzDYslA=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFDWDtBQUNBO0FBQ0U7QUFDOUIseUNBQXlDO0FBQ1g7QUFDd0I7QUFFdkMsU0FBU08sU0FBUzs7SUFDL0IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFVLEtBQUs7SUFDL0MsTUFBTVMsY0FBYyxJQUFNRCxRQUFRLEtBQUs7SUFFdkMsTUFBTSxDQUFDRSxhQUFhQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFVLEtBQUs7SUFDM0QsTUFBTSxDQUFDWSxjQUFjQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFVLEtBQUs7SUFFN0QscUJBQ0UsOERBQUNjO1FBQU9DLFdBQVU7a0JBTWQsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDRTtvQkFBSUMsS0FBSTtvQkFBWUgsV0FBVTtvQkFBT0ksS0FBSTs7Ozs7OzhCQUMxQyw4REFBQ0M7b0JBQUlMLFdBQVU7O3NDQUNiLDhEQUFDZCxrREFBSUE7NEJBQ0hvQixNQUFLOzRCQUNMTixXQUFVO3NDQUNYOzs7Ozs7c0NBR0QsOERBQUNkLGtEQUFJQTs0QkFDSG9CLE1BQUs7NEJBQ0xOLFdBQVU7c0NBQ1g7Ozs7OztzQ0FHSCw4REFBQ2Qsa0RBQUlBOzRCQUNIb0IsTUFBSzs0QkFDTEMsUUFBUSxJQUFJOzRCQUNaUCxXQUFVO3NDQUF1RDs7Ozs7O3NDQUdqRSw4REFBQ2Qsa0RBQUlBOzRCQUNIb0IsTUFBSzs0QkFDTE4sV0FBVTtzQ0FDWDs7Ozs7O3NDQUdELDhEQUFDVixtRUFBV0E7NEJBQUNVLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFvQnpCLDhEQUFDYiw4Q0FBS0E7b0JBQ0pxQixRQUFRYjtvQkFDUmMsTUFBTSxJQUFNYixhQUFhLElBQUk7b0JBQzdCYyxPQUFPLElBQU1kLGFBQWEsS0FBSztvQkFDL0JlLFlBQVksSUFBTWIsY0FBYyxJQUFJOzs7Ozs7OEJBRXRDLDhEQUFDVCwrQ0FBTUE7b0JBQ0xtQixRQUFRWDtvQkFDUlksTUFBTSxJQUFNWCxjQUFjLElBQUk7b0JBQzlCWSxPQUFPLElBQU1aLGNBQWMsS0FBSztvQkFDaENjLFdBQVcsSUFBTWhCLGFBQWEsSUFBSTs7Ozs7OzhCQUVwQyw4REFBQ1IsK0NBQU1BO29CQUFDcUIsTUFBTWpCO29CQUFNRSxhQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0MsQ0FBQztHQTlFdUJIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeD9mMmI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9Mb2dpbidcclxuaW1wb3J0IEpvaW5VcyBmcm9tICcuLi9Kb2luVXMnXHJcbi8vIGltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCBTaWduVXAgZnJvbSAnLi4vU2lnblVwJ1xyXG5pbXBvcnQgVHdpdHRlckljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ud2l0dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBjbG9zZUpvaW5VcyA9ICgpID0+IHNldFNob3coZmFsc2UpXHJcblxyXG4gIGNvbnN0IFtsb2dpbk9wZW5lZCwgc2V0TG9naW5PcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtzaWdudXBPcGVuZWQsIHNldFNpZ251cE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm10LTggdy1mdWxsIGJhY2tkcm9wLWJsdXItc20gYmctYmxhY2svMzAgZml4ZWQgZm9udC1bRmVhc3RPZkZsZXNoXSB0cmFja2luZy13aWRlc3RcIj5cclxuICAgICAgey8qIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB0cmFuc2xhdGVZOiAtNTAgfX1cclxuICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB0cmFuc2xhdGVZOiAwIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC4yIH19XHJcbiAgICAgID4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtZDp3LVs4MCVdIG1kOm14LWF1dG8gcC00IGp1c3RpZnktYmV0d2VlbiBvcGFjaXR5LTEwMFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBjbGFzc05hbWU9XCJ3LTE2XCIgYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIiBpdGVtcy1jZW50ZXIgZm9udC1yZWd1bGFyIG1kOmZsZXggaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB0ZXh0LTJ4bCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBteC01IGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL3N0b3J5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBteC01XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN0b3J5XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCIvI3RlYW1cIlxyXG4gICAgICAgICAgICBzY3JvbGw9e3RydWV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIG14LTVcIj5cclxuICAgICAgICAgICAgICBUZWFtXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL2NhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIG14LTVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTWludFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxUd2l0dGVySWNvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIvPlxyXG4gICAgICAgICAgICB7LyogPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL2NhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIG14LTVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgbXgtNVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TG9naW5PcGVuKHRydWUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTWlzc2lvblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLW1haW4gcm91bmRlZC1sZyBweC04IHB5LTIgIHRleHQtd2hpdGUgdGV4dC1sZyBmb250LXNlbWlib2xkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBteC01XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KHRydWUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSk9JTiBOT1dcclxuICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8TG9naW5cclxuICAgICAgICAgICAgb3BlbmVkPXtsb2dpbk9wZW5lZH1cclxuICAgICAgICAgICAgb3Blbj17KCkgPT4gc2V0TG9naW5PcGVuKHRydWUpfVxyXG4gICAgICAgICAgICBjbG9zZT17KCkgPT4gc2V0TG9naW5PcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgc2lnbnVwT3Blbj17KCkgPT4gc2V0U2lnbnVwT3Blbih0cnVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U2lnblVwXHJcbiAgICAgICAgICAgIG9wZW5lZD17c2lnbnVwT3BlbmVkfVxyXG4gICAgICAgICAgICBvcGVuPXsoKSA9PiBzZXRTaWdudXBPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICBjbG9zZT17KCkgPT4gc2V0U2lnbnVwT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgIGxvZ2luT3Blbj17KCkgPT4gc2V0TG9naW5PcGVuKHRydWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxKb2luVXMgb3Blbj17c2hvd30gY2xvc2VKb2luVXM9e2Nsb3NlSm9pblVzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPC9tb3Rpb24uZGl2PiAqL31cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJMb2dpbiIsIkpvaW5VcyIsIlNpZ25VcCIsIlR3aXR0ZXJJY29uIiwiSGVhZGVyIiwic2hvdyIsInNldFNob3ciLCJjbG9zZUpvaW5VcyIsImxvZ2luT3BlbmVkIiwic2V0TG9naW5PcGVuIiwic2lnbnVwT3BlbmVkIiwic2V0U2lnbnVwT3BlbiIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImltZyIsInNyYyIsImFsdCIsIm5hdiIsImhyZWYiLCJzY3JvbGwiLCJvcGVuZWQiLCJvcGVuIiwiY2xvc2UiLCJzaWdudXBPcGVuIiwibG9naW5PcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n"));

/***/ })

});