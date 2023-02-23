"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Team/index.tsx":
/*!***********************************!*\
  !*** ./components/Team/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _JoinUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../JoinUs */ \"./components/JoinUs/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst teamMembers = [\n    {\n        avatar: \"images/990.jpg\",\n        name: \"Marco\",\n        role: \"Founder\"\n    },\n    {\n        avatar: \"images/972.jpg\",\n        name: \"Nik\",\n        role: \"Head Manager\"\n    },\n    {\n        avatar: \"images/835.jpg\",\n        name: \"Arjun\",\n        role: \"CMO\"\n    },\n    {\n        avatar: \"images/810.jpg\",\n        name: \"Jesulayomi\",\n        role: \"Artist\"\n    }\n];\nconst Team = ()=>{\n    _s();\n    const [domLoaded, setDomLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const closeJoinUs = ()=>setShow(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setDomLoaded(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: domLoaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col justify-center px-10 bg-[url('/back.jpg')] bg-cover\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        initial: {\n                            opacity: 0,\n                            translateY: 50\n                        },\n                        whileInView: {\n                            opacity: 1,\n                            translateY: 0\n                        },\n                        transition: {\n                            delay: 0.2\n                        },\n                        className: \"flex flex-col container mt-32 sm:mt-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between sm:mt-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"lg:text-4xl font-extrabold text-red-800 text-left md: text-[28px] font-[900] font-[FeastOfFlesh] tracking-widest\",\n                                        children: \"Meet Our Team\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"next-btn w-[50px] h-[50px] px-3 py-2 bg-[#5051F90D] rounded-lg mr-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"images/arrow-left.png\",\n                                                    alt: \"left\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"prev-btn w-[50px] h-[50px] px-3 py-2 bg-[#5051F90D] rounded-lg mr-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"images/arrow-right.png\",\n                                                    alt: \"right\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                                modules: [\n                                    swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation\n                                ],\n                                spaceBetween: 30,\n                                slidesPerView: 1,\n                                style: {\n                                    overflow: \"hidden\"\n                                },\n                                className: \"w-full mt-6\",\n                                loop: true,\n                                navigation: {\n                                    nextEl: \".prev-btn\",\n                                    prevEl: \".next-btn\"\n                                },\n                                breakpoints: {\n                                    640: {\n                                        slidesPerView: 2\n                                    },\n                                    1280: {\n                                        slidesPerView: 3\n                                    },\n                                    1536: {\n                                        slidesPerView: 4\n                                    }\n                                },\n                                children: teamMembers.map((member, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"slider-item bg-white p-5 bg-gradient-to-b from-black to-red-800 shadow-lg my-14 border-4 border-indigo-500/100\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex flex-col\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex items-center flex-col space-y-4\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: member.avatar,\n                                                            alt: member.name,\n                                                            className: \" rounded-full\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                                            lineNumber: 94,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"flex flex-col items-center ml-3\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                                    className: \"text-blue-900 text-2xl font-[FeastOfFlesh] tracking-widest\",\n                                                                    children: member.name\n                                                                }, void 0, false, {\n                                                                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                                                    lineNumber: 100,\n                                                                    columnNumber: 27\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                    className: \"text-white text-xl\",\n                                                                    children: member.role\n                                                                }, void 0, false, {\n                                                                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                                                    lineNumber: 103,\n                                                                    columnNumber: 27\n                                                                }, undefined)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                                            lineNumber: 99,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, j, false, {\n                                        fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 17\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:flex flex-row items-center justify-between overflow-x-hidden pb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lg:w-[59%] h-[100%] md:w-full md:pb-12 pr-[8.75%] pb-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-[46px] h-1/2 text-white pt-[30px] pl-[8.75%] font-[FeastOfFlesh] tracking-widest\",\n                                    children: \"About Us\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-[20px] h-1/2 text-white pt-[20px] pl-[8.75%]\",\n                                    children: \"Red Devils is a company focusing on Crypto and NFT. We raise funds from investors and launch NFT collections. We create long-term value products, special tools, alpha calls and many more.\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex lg:w-[41%] h-[100%] md: w-[50%]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setShow(true),\n                                    className: \"text-[18px] border-none text-center text-main w-[34.6%] h-[71.89px] rounded-[12px] bg-white transition-all duration-500 font-bold py-5 font-[FeastOfFlesh] tracking-widest\",\n                                    children: \"Our Discord\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                    lineNumber: 134,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_JoinUs__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    open: show,\n                                    closeJoinUs: closeJoinUs\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                    lineNumber: 140,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n            lineNumber: 45,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(Team, \"6NVeGFKYI7hphR2csdf7ijf5+B8=\");\n_c = Team;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Team);\nvar _c;\n$RefreshReg$(_c, \"Team\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O3NDQUtyRSw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDUTtvQ0FDQ21CLFNBQVMsSUFBTTlCLFFBQVEsSUFBSTtvQ0FDM0JHLFdBQVU7OENBQ1g7Ozs7Ozs4Q0FHRCw4REFBQ1osK0NBQU1BO29DQUFDd0MsTUFBTWhDO29DQUFNRSxhQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8vQztHQW5ITUw7S0FBQUE7QUFxSE4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZWFtL2luZGV4LnRzeD82ZGVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICdzd2lwZXInXHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnXHJcblxyXG5pbXBvcnQgJ3N3aXBlci9jc3MnXHJcbmltcG9ydCBKb2luVXMgZnJvbSAnLi4vSm9pblVzJ1xyXG5cclxuY29uc3QgdGVhbU1lbWJlcnMgPSBbXHJcbiAge1xyXG4gICAgYXZhdGFyOiAnaW1hZ2VzLzk5MC5qcGcnLFxyXG4gICAgbmFtZTogJ01hcmNvJyxcclxuICAgIHJvbGU6ICdGb3VuZGVyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGF2YXRhcjogJ2ltYWdlcy85NzIuanBnJyxcclxuICAgIG5hbWU6ICdOaWsnLFxyXG4gICAgcm9sZTogJ0hlYWQgTWFuYWdlcicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBhdmF0YXI6ICdpbWFnZXMvODM1LmpwZycsXHJcbiAgICBuYW1lOiAnQXJqdW4nLFxyXG4gICAgcm9sZTogJ0NNTycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBhdmF0YXI6ICdpbWFnZXMvODEwLmpwZycsXHJcbiAgICBuYW1lOiAnSmVzdWxheW9taScsXHJcbiAgICByb2xlOiAnQXJ0aXN0JyxcclxuICB9LFxyXG5dXHJcblxyXG5jb25zdCBUZWFtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkb21Mb2FkZWQsIHNldERvbUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBjbG9zZUpvaW5VcyA9ICgpID0+IHNldFNob3coZmFsc2UpXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RG9tTG9hZGVkKHRydWUpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7ZG9tTG9hZGVkICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgIHB4LTEwIGJnLVt1cmwoJy9iYWNrLmpwZycpXSBiZy1jb3ZlclwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgdHJhbnNsYXRlWTogNTAgfX1cclxuICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgdHJhbnNsYXRlWTogMCB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjIgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb250YWluZXIgbXQtMzIgc206bXQtMTBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBzbTptdC0xMFwiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsZzp0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCB0ZXh0LXJlZC04MDAgdGV4dC1sZWZ0IG1kOiB0ZXh0LVsyOHB4XSBmb250LVs5MDBdIGZvbnQtW0ZlYXN0T2ZGbGVzaF0gdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICBNZWV0IE91ciBUZWFtXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5leHQtYnRuIHctWzUwcHhdIGgtWzUwcHhdIHB4LTMgcHktMiBiZy1bIzUwNTFGOTBEXSByb3VuZGVkLWxnIG1yLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvYXJyb3ctbGVmdC5wbmdcIiBhbHQ9XCJsZWZ0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmV2LWJ0biB3LVs1MHB4XSBoLVs1MHB4XSBweC0zIHB5LTIgYmctWyM1MDUxRjkwRF0gcm91bmRlZC1sZyBtci00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Fycm93LXJpZ2h0LnBuZ1wiIGFsdD1cInJpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgICAgIG1vZHVsZXM9e1tOYXZpZ2F0aW9uXX1cclxuICAgICAgICAgICAgICBzcGFjZUJldHdlZW49ezMwfVxyXG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezF9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG10LTZcIlxyXG4gICAgICAgICAgICAgIGxvb3BcclxuICAgICAgICAgICAgICBuYXZpZ2F0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICBuZXh0RWw6ICcucHJldi1idG4nLFxyXG4gICAgICAgICAgICAgICAgcHJldkVsOiAnLm5leHQtYnRuJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnRzPXt7XHJcbiAgICAgICAgICAgICAgICA2NDA6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxMjgwOiB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgMTUzNjoge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RlYW1NZW1iZXJzLm1hcCgobWVtYmVyLCBqKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtqfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItaXRlbSBiZy13aGl0ZSBwLTUgYmctZ3JhZGllbnQtdG8tYiBmcm9tLWJsYWNrIHRvLXJlZC04MDAgc2hhZG93LWxnIG15LTE0IGJvcmRlci00IGJvcmRlci1pbmRpZ28tNTAwLzEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LWNvbCBzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bWVtYmVyLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e21lbWJlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG1sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTkwMCB0ZXh0LTJ4bCBmb250LVtGZWFzdE9mRmxlc2hdIHRyYWNraW5nLXdpZGVzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbWJlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsXCI+e21lbWJlci5yb2xlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW1iZXIuZGV0YWlsLm1hcCgoZCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTEgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCB0ZXh0LWdyYXktNDAwIHJvdW5kZWQgbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6ZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG92ZXJmbG93LXgtaGlkZGVuIHBiLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy1bNTklXSBoLVsxMDAlXSBtZDp3LWZ1bGwgbWQ6cGItMTIgcHItWzguNzUlXSBwYi0xMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bNDZweF0gaC0xLzIgdGV4dC13aGl0ZSBwdC1bMzBweF0gcGwtWzguNzUlXSBmb250LVtGZWFzdE9mRmxlc2hdIHRyYWNraW5nLXdpZGVzdFwiPlxyXG4gICAgICAgICAgICAgIEFib3V0IFVzXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBoLTEvMiB0ZXh0LXdoaXRlIHB0LVsyMHB4XSBwbC1bOC43NSVdXCI+XHJcbiAgICAgICAgICAgICAgUmVkIERldmlscyBpcyBhIGNvbXBhbnkgZm9jdXNpbmcgb24gQ3J5cHRvIGFuZCBORlQuIFdlIHJhaXNlIGZ1bmRzIGZyb20gaW52ZXN0b3JzIGFuZCBsYXVuY2ggTkZUIGNvbGxlY3Rpb25zLiBXZSBjcmVhdGUgbG9uZy10ZXJtIHZhbHVlIHByb2R1Y3RzLCBzcGVjaWFsIHRvb2xzLCBhbHBoYSBjYWxscyBhbmQgbWFueSBtb3JlLlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBsZzp3LVs0MSVdIGgtWzEwMCVdIG1kOiB3LVs1MCVdXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvdyh0cnVlKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWzE4cHhdIGJvcmRlci1ub25lIHRleHQtY2VudGVyIHRleHQtbWFpbiB3LVszNC42JV0gaC1bNzEuODlweF0gcm91bmRlZC1bMTJweF0gYmctd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGZvbnQtYm9sZCBweS01IGZvbnQtW0ZlYXN0T2ZGbGVzaF0gdHJhY2tpbmctd2lkZXN0XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBPdXIgRGlzY29yZFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxKb2luVXMgb3Blbj17c2hvd30gY2xvc2VKb2luVXM9e2Nsb3NlSm9pblVzfT48L0pvaW5Vcz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIk5hdmlnYXRpb24iLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIkpvaW5VcyIsInRlYW1NZW1iZXJzIiwiYXZhdGFyIiwibmFtZSIsInJvbGUiLCJUZWFtIiwiZG9tTG9hZGVkIiwic2V0RG9tTG9hZGVkIiwic2hvdyIsInNldFNob3ciLCJjbG9zZUpvaW5VcyIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwidHJhbnNsYXRlWSIsIndoaWxlSW5WaWV3IiwidHJhbnNpdGlvbiIsImRlbGF5IiwiaDEiLCJidXR0b24iLCJpbWciLCJzcmMiLCJhbHQiLCJtb2R1bGVzIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVzUGVyVmlldyIsInN0eWxlIiwib3ZlcmZsb3ciLCJsb29wIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwibWFwIiwibWVtYmVyIiwiaiIsImgyIiwicCIsIm9uQ2xpY2siLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Team/index.tsx\n"));

/***/ })

});