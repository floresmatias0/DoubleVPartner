/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[login]",{

/***/ "./pages/[login].js":
/*!**************************!*\
  !*** ./pages/[login].js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_matias_test_DoubleVPartners_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_matias_test_DoubleVPartners_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_matias_test_DoubleVPartners_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_matias_test_DoubleVPartners_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/matias/test-DoubleVPartners/pages/[login].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar User = function User() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {\n    var userFetch = /*#__PURE__*/function () {\n      var _ref = (0,_home_matias_test_DoubleVPartners_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_matias_test_DoubleVPartners_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(name) {\n        return _home_matias_test_DoubleVPartners_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"https://api.github.com/search/users?q=\".concat(name)).then(function (res) {\n                  return res.json();\n                }).then(function (data) {\n                  for (var i = 0; i < data.items.length; i++) {\n                    if (name === data.items[i].login) {\n                      setUser(data.items);\n                    }\n                  }\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function userFetch(_x) {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    userFetch(router.query.login);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n    className: \"jsx-1320427725\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        className: \"jsx-1320427725\",\n        children: \"\".concat(router.query.login)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }, _this), user && user.length > 0 ? user.map(function (point, i) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-1320427725\" + \" \" + \"card\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          className: \"jsx-1320427725\",\n          children: point.login\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"jsx-1320427725\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: point.avatar_url,\n            alt: \"profile\",\n            className: \"jsx-1320427725\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 15\n        }, _this)]\n      }, i, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }, _this);\n    }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      className: \"jsx-1320427725\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default()), {\n      id: \"1931235756\",\n      children: \"main.jsx-1320427725{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.card.jsx-1320427725{margin-top:2em;width:30em;text-align:center;border-radius:1em;border:2px solid darkgray;cursor:pointer;}.card.jsx-1320427725 div.jsx-1320427725{width:100%;}.card.jsx-1320427725 img.jsx-1320427725{width:100%;margin:1em;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGlhcy90ZXN0LURvdWJsZVZQYXJ0bmVycy9wYWdlcy9bbG9naW5dLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDSyxBQUdtQixBQU9LLEFBUUgsQUFHRixXQWpCRyxBQWVmLEFBR2EsSUFYQSxPQVliLElBWG9CLGtCQUNBLGtCQUNRLHVCQVRKLEdBVVAsZUFDakIsNERBVnlCLG1HQUNKLDZGQUNyQiIsImZpbGUiOiIvaG9tZS9tYXRpYXMvdGVzdC1Eb3VibGVWUGFydG5lcnMvcGFnZXMvW2xvZ2luXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBVc2VyID0gKCkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCB1c2VyRmV0Y2ggPSBhc3luYyhuYW1lKSA9PiB7XG4gICAgICAgIGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPSR7bmFtZX1gKVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRhdGEuaXRlbXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYobmFtZSA9PT0gZGF0YS5pdGVtc1tpXS5sb2dpbil7XG4gICAgICAgICAgICAgICAgc2V0VXNlcihkYXRhLml0ZW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB1c2VyRmV0Y2gocm91dGVyLnF1ZXJ5LmxvZ2luKTtcbiAgfSxbXSlcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPntgJHtyb3V0ZXIucXVlcnkubG9naW59YH08L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICB7dXNlciAmJiB1c2VyLmxlbmd0aCA+IDAgPyAoXG4gICAgICB1c2VyLm1hcCgocG9pbnQsaSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17aX0+XG4gICAgICAgICAgICAgIDxoMT57cG9pbnQubG9naW59PC9oMT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9pbnQuYXZhdGFyX3VybH0gYWx0PVwicHJvZmlsZVwiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgKSA6IChcbiAgICAgIDxwPjwvcD5cbiAgICApfVxuICAgIDxzdHlsZSBqc3g+XG4gICAge2BcbiAgICAgIG1haW57XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmNhcmR7XG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgd2lkdGg6IDMwZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JheTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgLmNhcmQgZGl2e1xuICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICB9XG4gICAgICAuY2FyZCBpbWd7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIG1hcmdpbjogMWVtO1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICB7YFxuICAgICAgaHRtbCxcbiAgICAgIGJvZHl7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDIzOCwxNzQsMjAyKTtcbiAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzgsMTc0LDIwMiwxKSAwJSwgcmdiYSgxNDgsMTg3LDIzMywxKSAxMDAlKTtcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXX0= */\\n/*@ sourceURL=/home/matias/test-DoubleVPartners/pages/[login].js */\"\n    }, void 0, false, void 0, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default()), {\n      id: \"2879121352\",\n      children: \"html,body{margin:0;padding:0;background:rgb(238,174,202);background:radial-gradient(circle,rgba(238,174,202,1) 0%,rgba(148,187,233,1) 100%);}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGlhcy90ZXN0LURvdWJsZVZQYXJ0bmVycy9wYWdlcy9bbG9naW5dLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFSyxBQUlrQixTQUNDLFVBQ2tCLDRCQUN5RCxtRkFDdkYiLCJmaWxlIjoiL2hvbWUvbWF0aWFzL3Rlc3QtRG91YmxlVlBhcnRuZXJzL3BhZ2VzL1tsb2dpbl0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3QgVXNlciA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgdXNlckZldGNoID0gYXN5bmMobmFtZSkgPT4ge1xuICAgICAgICBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvdXNlcnM/cT0ke25hbWV9YClcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLml0ZW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKG5hbWUgPT09IGRhdGEuaXRlbXNbaV0ubG9naW4pe1xuICAgICAgICAgICAgICAgIHNldFVzZXIoZGF0YS5pdGVtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdXNlckZldGNoKHJvdXRlci5xdWVyeS5sb2dpbik7XG4gIH0sW10pXG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57YCR7cm91dGVyLnF1ZXJ5LmxvZ2lufWB9PC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAge3VzZXIgJiYgdXNlci5sZW5ndGggPiAwID8gKFxuICAgICAgdXNlci5tYXAoKHBvaW50LGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICA8aDE+e3BvaW50LmxvZ2lufTwvaDE+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3BvaW50LmF2YXRhcl91cmx9IGFsdD1cInByb2ZpbGVcIi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9KVxuICAgICkgOiAoXG4gICAgICA8cD48L3A+XG4gICAgKX1cbiAgICA8c3R5bGUganN4PlxuICAgIHtgXG4gICAgICBtYWlue1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5jYXJke1xuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgIHdpZHRoOiAzMGVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgZGFya2dyYXk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIC5jYXJkIGRpdntcbiAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgfVxuICAgICAgLmNhcmQgaW1ne1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBtYXJnaW46IDFlbTtcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAge2BcbiAgICAgIGh0bWwsXG4gICAgICBib2R5e1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyMzgsMTc0LDIwMik7XG4gICAgICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjM4LDE3NCwyMDIsMSkgMCUsIHJnYmEoMTQ4LDE4NywyMzMsMSkgMTAwJSk7XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIl19 */\\n/*@ sourceURL=/home/matias/test-DoubleVPartners/pages/[login].js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(User, \"vM+0cQpbmcqvR1155uZ1Pw51794=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\nvar _c;\n\n$RefreshReg$(_c, \"User\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2xvZ2luXS5qcz8zYjNhIl0sIm5hbWVzIjpbIlVzZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlckZldGNoIiwibmFtZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiaSIsIml0ZW1zIiwibGVuZ3RoIiwibG9naW4iLCJxdWVyeSIsIm1hcCIsInBvaW50IiwiYXZhdGFyX3VybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFDT0MsK0NBQVEsRUFEZjtBQUFBLE1BQ1ZDLElBRFU7QUFBQSxNQUNKQyxPQURJOztBQUVqQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBR0FDLGtEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLFNBQVM7QUFBQSx1UkFBRyxpQkFBTUMsSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDVkMsS0FBSyxpREFBMENELElBQTFDLEVBQUwsQ0FDTEUsSUFESyxDQUNBLFVBQUFDLEdBQUc7QUFBQSx5QkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxpQkFESCxFQUVMRixJQUZLLENBRUEsVUFBQUcsSUFBSSxFQUFJO0FBQ1osdUJBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBV0MsTUFBOUIsRUFBc0NGLENBQUMsRUFBdkMsRUFBMEM7QUFDeEMsd0JBQUdOLElBQUksS0FBS0ssSUFBSSxDQUFDRSxLQUFMLENBQVdELENBQVgsRUFBY0csS0FBMUIsRUFBZ0M7QUFDNUJkLDZCQUFPLENBQUNVLElBQUksQ0FBQ0UsS0FBTixDQUFQO0FBQ0g7QUFDRjtBQUNGLGlCQVJLLENBRFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVFIsU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQVdBQSxhQUFTLENBQUNILE1BQU0sQ0FBQ2MsS0FBUCxDQUFhRCxLQUFkLENBQVQ7QUFDSCxHQWJRLEVBYVAsRUFiTyxDQUFUO0FBZUEsc0JBQ0U7QUFBQTtBQUFBLDRCQUNBLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBLDRCQUFXYixNQUFNLENBQUNjLEtBQVAsQ0FBYUQsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLEVBSUNmLElBQUksSUFBSUEsSUFBSSxDQUFDYyxNQUFMLEdBQWMsQ0FBdEIsR0FDQ2QsSUFBSSxDQUFDaUIsR0FBTCxDQUFTLFVBQUNDLEtBQUQsRUFBT04sQ0FBUCxFQUFhO0FBQ3BCLDBCQUNFO0FBQUEsNENBQWUsTUFBZjtBQUFBLGdDQUNJO0FBQUE7QUFBQSxvQkFBS00sS0FBSyxDQUFDSDtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUVHLEtBQUssQ0FBQ0MsVUFBaEI7QUFBNEIsZUFBRyxFQUFDLFNBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBLFNBQTJCUCxDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxLQVRELENBREQsZ0JBWUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwREQsQ0E5RUQ7O0dBQU1kLEk7VUFFV0ssa0Q7OztLQUZYTCxJO0FBZ0ZOLCtEQUFlQSxJQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW2xvZ2luXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBVc2VyID0gKCkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCB1c2VyRmV0Y2ggPSBhc3luYyhuYW1lKSA9PiB7XG4gICAgICAgIGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPSR7bmFtZX1gKVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRhdGEuaXRlbXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYobmFtZSA9PT0gZGF0YS5pdGVtc1tpXS5sb2dpbil7XG4gICAgICAgICAgICAgICAgc2V0VXNlcihkYXRhLml0ZW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB1c2VyRmV0Y2gocm91dGVyLnF1ZXJ5LmxvZ2luKTtcbiAgfSxbXSlcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPntgJHtyb3V0ZXIucXVlcnkubG9naW59YH08L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICB7dXNlciAmJiB1c2VyLmxlbmd0aCA+IDAgPyAoXG4gICAgICB1c2VyLm1hcCgocG9pbnQsaSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIGtleT17aX0+XG4gICAgICAgICAgICAgIDxoMT57cG9pbnQubG9naW59PC9oMT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9pbnQuYXZhdGFyX3VybH0gYWx0PVwicHJvZmlsZVwiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgKSA6IChcbiAgICAgIDxwPjwvcD5cbiAgICApfVxuICAgIDxzdHlsZSBqc3g+XG4gICAge2BcbiAgICAgIG1haW57XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmNhcmR7XG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgd2lkdGg6IDMwZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JheTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgLmNhcmQgZGl2e1xuICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICB9XG4gICAgICAuY2FyZCBpbWd7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIG1hcmdpbjogMWVtO1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICB7YFxuICAgICAgaHRtbCxcbiAgICAgIGJvZHl7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDIzOCwxNzQsMjAyKTtcbiAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSgyMzgsMTc0LDIwMiwxKSAwJSwgcmdiYSgxNDgsMTg3LDIzMywxKSAxMDAlKTtcbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[login].js\n");

/***/ })

});