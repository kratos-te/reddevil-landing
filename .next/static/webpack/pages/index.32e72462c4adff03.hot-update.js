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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst teamMembers = [\n    {\n        avatar: \"images/990.jpg\",\n        name: \"Marco\",\n        role: \"Founder\"\n    },\n    {\n        avatar: \"images/972.jpg\",\n        name: \"Nik\",\n        role: \"Head Manager\"\n    },\n    {\n        avatar: \"images/835.jpg\",\n        name: \"Arjun\",\n        role: \"CMO\"\n    },\n    {\n        avatar: \"images/810.jpg\",\n        name: \"Jesulayomi\",\n        role: \"Artist\"\n    }\n];\nconst Team = ()=>{\n    _s();\n    const [domLoaded, setDomLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setDomLoaded(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: domLoaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center mb-10 px-10 bg-[url('/back.jpg')] bg-cover\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    translateY: 50\n                },\n                whileInView: {\n                    opacity: 1,\n                    translateY: 0\n                },\n                transition: {\n                    delay: 0.2\n                },\n                className: \"flex flex-col container mt-32 sm:mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between sm:mt-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"lg:text-4xl font-extrabold text-red-800 text-left md: text-[28px] font-[900] font-[FeastOfFlesh] tracking-widest\",\n                                children: \"Meet Our Team\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"next-btn w-[50px] h-[50px] px-3 py-2 bg-[#5051F90D] rounded-lg mr-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"images/arrow-left.png\",\n                                            alt: \"left\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"prev-btn w-[50px] h-[50px] px-3 py-2 bg-[#5051F90D] rounded-lg mr-4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"images/arrow-right.png\",\n                                            alt: \"right\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                        modules: [\n                            swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation\n                        ],\n                        spaceBetween: 30,\n                        slidesPerView: 1,\n                        style: {\n                            overflow: \"hidden\"\n                        },\n                        className: \"w-full mt-6\",\n                        loop: true,\n                        navigation: {\n                            nextEl: \".prev-btn\",\n                            prevEl: \".next-btn\"\n                        },\n                        breakpoints: {\n                            640: {\n                                slidesPerView: 2\n                            },\n                            1280: {\n                                slidesPerView: 3\n                            },\n                            1536: {\n                                slidesPerView: 4\n                            }\n                        },\n                        children: teamMembers.map((member, j)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"slider-item bg-white p-5 bg-gradient-to-b from-black to-red-800 shadow-lg my-10 border-4 border-indigo-500/100\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center flex-col space-y-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: member.avatar,\n                                                    alt: member.name,\n                                                    className: \" rounded-full\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex flex-col items-center ml-3\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                            className: \"text-blue-900 text-2xl font-[FeastOfFlesh] tracking-widest\",\n                                                            children: member.name\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                                            lineNumber: 95,\n                                                            columnNumber: 27\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"text-white text-xl\",\n                                                            children: member.role\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                                            lineNumber: 98,\n                                                            columnNumber: 27\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, j, false, {\n                                fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n                lineNumber: 42,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"E:\\\\work\\\\Red_devil2023-02-21\\\\VantaSite-Next-Tailwind\\\\components\\\\Team\\\\index.tsx\",\n            lineNumber: 41,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(Team, \"g3JnpRdQtWlWJYoR/ne40Sr+efY=\");\n_c = Team;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Team);\nvar _c;\n$RefreshReg$(_c, \"Team\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RlYW0vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBa0Q7QUFDWjtBQUNIO0FBQ2U7QUFFL0I7QUFFbkIsTUFBTU8sY0FBYztJQUNsQjtRQUNFQyxRQUFRO1FBQ1JDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsUUFBUTtRQUNSQyxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VGLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRixRQUFRO1FBQ1JDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0NBQ0Q7QUFFRCxNQUFNQyxPQUFPLElBQU07O0lBQ2pCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWhERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RZLGFBQWEsSUFBSTtJQUNuQixHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDR0QsMkJBQ0MsOERBQUNFO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNaLHFEQUFVO2dCQUNUYSxTQUFTO29CQUFFQyxTQUFTO29CQUFHQyxZQUFZO2dCQUFHO2dCQUN0Q0MsYUFBYTtvQkFBRUYsU0FBUztvQkFBR0MsWUFBWTtnQkFBRTtnQkFDekNFLFlBQVk7b0JBQUVDLE9BQU87Z0JBQUk7Z0JBQ3pCTixXQUFVOztrQ0FFViw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDTztnQ0FBR1AsV0FBVTswQ0FBbUg7Ozs7OzswQ0FHakksOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1E7d0NBQU9SLFdBQVU7a0RBQ2hCLDRFQUFDUzs0Q0FBSUMsS0FBSTs0Q0FBd0JDLEtBQUk7Ozs7Ozs7Ozs7O2tEQUV2Qyw4REFBQ0g7d0NBQU9SLFdBQVU7a0RBQ2hCLDRFQUFDUzs0Q0FBSUMsS0FBSTs0Q0FBeUJDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUk1Qyw4REFBQ3JCLGdEQUFNQTt3QkFDTHNCLFNBQVM7NEJBQUN2Qiw4Q0FBVUE7eUJBQUM7d0JBQ3JCd0IsY0FBYzt3QkFDZEMsZUFBZTt3QkFDZkMsT0FBTzs0QkFBRUMsVUFBVTt3QkFBUzt3QkFDNUJoQixXQUFVO3dCQUNWaUIsSUFBSTt3QkFDSkMsWUFBWTs0QkFDVkMsUUFBUTs0QkFDUkMsUUFBUTt3QkFDVjt3QkFDQUMsYUFBYTs0QkFDWCxLQUFLO2dDQUNIUCxlQUFlOzRCQUNqQjs0QkFDQSxNQUFNO2dDQUNKQSxlQUFlOzRCQUNqQjs0QkFDQSxNQUFNO2dDQUNKQSxlQUFlOzRCQUNqQjt3QkFDRjtrQ0FFQ3RCLFlBQVk4QixHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsa0JBQ3hCLDhEQUFDakMscURBQVdBOzBDQUNWLDRFQUFDUTtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNEOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ1M7b0RBQ0NDLEtBQUthLE9BQU85QixNQUFNO29EQUNsQmtCLEtBQUtZLE9BQU83QixJQUFJO29EQUNoQk0sV0FBVTs7Ozs7OzhEQUVaLDhEQUFDRDtvREFBSUMsV0FBVTs7c0VBQ2IsOERBQUN5Qjs0REFBR3pCLFdBQVU7c0VBQ1h1QixPQUFPN0IsSUFBSTs7Ozs7O3NFQUVkLDhEQUFDZ0M7NERBQUUxQixXQUFVO3NFQUFzQnVCLE9BQU81QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQWJ0QzZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0NsQztHQTFGTTVCO0tBQUFBO0FBNEZOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGVhbS9pbmRleC50c3g/NmRlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnc3dpcGVyJ1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0J1xyXG5cclxuaW1wb3J0ICdzd2lwZXIvY3NzJ1xyXG5cclxuY29uc3QgdGVhbU1lbWJlcnMgPSBbXHJcbiAge1xyXG4gICAgYXZhdGFyOiAnaW1hZ2VzLzk5MC5qcGcnLFxyXG4gICAgbmFtZTogJ01hcmNvJyxcclxuICAgIHJvbGU6ICdGb3VuZGVyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGF2YXRhcjogJ2ltYWdlcy85NzIuanBnJyxcclxuICAgIG5hbWU6ICdOaWsnLFxyXG4gICAgcm9sZTogJ0hlYWQgTWFuYWdlcicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBhdmF0YXI6ICdpbWFnZXMvODM1LmpwZycsXHJcbiAgICBuYW1lOiAnQXJqdW4nLFxyXG4gICAgcm9sZTogJ0NNTycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBhdmF0YXI6ICdpbWFnZXMvODEwLmpwZycsXHJcbiAgICBuYW1lOiAnSmVzdWxheW9taScsXHJcbiAgICByb2xlOiAnQXJ0aXN0JyxcclxuICB9LFxyXG5dXHJcblxyXG5jb25zdCBUZWFtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkb21Mb2FkZWQsIHNldERvbUxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldERvbUxvYWRlZCh0cnVlKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2RvbUxvYWRlZCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1iLTEwIHB4LTEwIGJnLVt1cmwoJy9iYWNrLmpwZycpXSBiZy1jb3ZlclwiPlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB0cmFuc2xhdGVZOiA1MCB9fVxyXG4gICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB0cmFuc2xhdGVZOiAwIH19XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuMiB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbnRhaW5lciBtdC0zMiBzbTptdC0xMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHNtOm10LTEwXCI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxnOnRleHQtNHhsIGZvbnQtZXh0cmFib2xkIHRleHQtcmVkLTgwMCB0ZXh0LWxlZnQgbWQ6IHRleHQtWzI4cHhdIGZvbnQtWzkwMF0gZm9udC1bRmVhc3RPZkZsZXNoXSB0cmFja2luZy13aWRlc3RcIj5cclxuICAgICAgICAgICAgICAgIE1lZXQgT3VyIFRlYW1cclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmV4dC1idG4gdy1bNTBweF0gaC1bNTBweF0gcHgtMyBweS0yIGJnLVsjNTA1MUY5MERdIHJvdW5kZWQtbGcgbXItNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9hcnJvdy1sZWZ0LnBuZ1wiIGFsdD1cImxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByZXYtYnRuIHctWzUwcHhdIGgtWzUwcHhdIHB4LTMgcHktMiBiZy1bIzUwNTFGOTBEXSByb3VuZGVkLWxnIG1yLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvYXJyb3ctcmlnaHQucG5nXCIgYWx0PVwicmlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8U3dpcGVyXHJcbiAgICAgICAgICAgICAgbW9kdWxlcz17W05hdmlnYXRpb25dfVxyXG4gICAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MzB9XHJcbiAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtNlwiXHJcbiAgICAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgICAgIG5hdmlnYXRpb249e3tcclxuICAgICAgICAgICAgICAgIG5leHRFbDogJy5wcmV2LWJ0bicsXHJcbiAgICAgICAgICAgICAgICBwcmV2RWw6ICcubmV4dC1idG4nLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgYnJlYWtwb2ludHM9e3tcclxuICAgICAgICAgICAgICAgIDY0MDoge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDEyODA6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxNTM2OiB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGVhbU1lbWJlcnMubWFwKChtZW1iZXIsIGopID0+IChcclxuICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2p9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1pdGVtIGJnLXdoaXRlIHAtNSBiZy1ncmFkaWVudC10by1iIGZyb20tYmxhY2sgdG8tcmVkLTgwMCBzaGFkb3ctbGcgbXktMTAgYm9yZGVyLTQgYm9yZGVyLWluZGlnby01MDAvMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtY29sIHNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXttZW1iZXIuYXZhdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17bWVtYmVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtOTAwIHRleHQtMnhsIGZvbnQtW0ZlYXN0T2ZGbGVzaF0gdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVtYmVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGxcIj57bWVtYmVyLnJvbGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21lbWJlci5kZXRhaWwubWFwKChkLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgcHktMSBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHRleHQtZ3JheS00MDAgcm91bmRlZCBtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiTmF2aWdhdGlvbiIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwidGVhbU1lbWJlcnMiLCJhdmF0YXIiLCJuYW1lIiwicm9sZSIsIlRlYW0iLCJkb21Mb2FkZWQiLCJzZXREb21Mb2FkZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwib3BhY2l0eSIsInRyYW5zbGF0ZVkiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkZWxheSIsImgxIiwiYnV0dG9uIiwiaW1nIiwic3JjIiwiYWx0IiwibW9kdWxlcyIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJzdHlsZSIsIm92ZXJmbG93IiwibG9vcCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJicmVha3BvaW50cyIsIm1hcCIsIm1lbWJlciIsImoiLCJoMiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Team/index.tsx\n"));

/***/ })

});