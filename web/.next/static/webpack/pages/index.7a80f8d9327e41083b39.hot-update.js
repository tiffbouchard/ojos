webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_instagram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/instagram */ \"./components/instagram.js\");\n/* harmony import */ var _components_modal_subscribe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/modal-subscribe */ \"./components/modal-subscribe.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Image */ \"./node_modules/react-bootstrap/esm/Image.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home(props) {\n  _s();\n\n  var _props$images = props.images,\n      images = _props$images === void 0 ? [] : _props$images; // Assign variables to specific images to maintain order (without this images would show up in random orders, and for ex. the index 0 would not necessarily correspond with imageOne - mostly for client so the titles in Sanity studio correspond with the placement of the specific image)\n\n  var imageOne = images.filter(function (image) {\n    return image.title === \"Image One\";\n  });\n  console.log(imageOne);\n  var imageTwo = images.filter(function (image) {\n    return image.title === \"Image Two\";\n  });\n  console.log(imageOne);\n  var imageThree = images.filter(function (image) {\n    return image.title === \"Image Three\";\n  });\n  console.log(imageOne);\n  var imageFour = images.filter(function (image) {\n    return image.title === \"Image Four\";\n  });\n  console.log(imageOne);\n  var builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n  function urlFor(source) {\n    return builder.image(source);\n  }\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      modalShow = _React$useState2[0],\n      setModalShow = _React$useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setModalShow(true);\n  }, []);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, \"OJOS\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  })), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    fluid: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: imageOne[0].url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-one\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    fluid: true,\n    src: urlFor(imageOne[0].image).quality(100).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: imageOne[0].url,\n    className: \"image-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }, imageOne[0].description)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 7,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: imageTwo[0].url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-two\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    fluid: true,\n    src: urlFor(imageTwo[0].image).quality(100).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: imageTwo[0].url,\n    className: \"image-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 17\n    }\n  }, imageTwo[0].description))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-three\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    fluid: true,\n    src: urlFor(imageThree[0].image).quality(100).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: \"/products/:id\",\n    className: \"image-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 17\n    }\n  }, imageThree[0].description)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-four\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    fluid: true,\n    src: urlFor(imageFour[0].image).quality(100).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: \"/products/:id\",\n    className: \"image-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 17\n    }\n  }, imageFour[0].description)))))), __jsx(\"h4\", {\n    className: \"follow-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }\n  }, \"FOLLOW OJOS ON INSTAGRAM\"), __jsx(_components_instagram__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Home, \"oG8czk+kkbltfDEh1aAE+8uN2jU=\");\n\n_c = Home;\nHome.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch(\"\\n  *[_type == \\\"homepage\\\"]{url, description, title, image}\\n  \");\n\n        case 2:\n          _context.t0 = _context.sent;\n          return _context.abrupt(\"return\", {\n            images: _context.t0\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJpbWFnZXMiLCJpbWFnZU9uZSIsImZpbHRlciIsImltYWdlIiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VUd28iLCJpbWFnZVRocmVlIiwiaW1hZ2VGb3VyIiwiYnVpbGRlciIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsInVybEZvciIsInNvdXJjZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJ1c2VFZmZlY3QiLCJ1cmwiLCJxdWFsaXR5IiwiZGVzY3JpcHRpb24iLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLHNCQUNFQSxLQURGLENBQ2RDLE1BRGM7QUFBQSxNQUNkQSxNQURjLDhCQUNMLEVBREssa0JBR3RCOztBQUNBLE1BQU1DLFFBQVEsR0FBR0QsTUFBTSxDQUFDRSxNQUFQLENBQWMsVUFBQ0MsS0FBRCxFQUFXO0FBQ3hDLFdBQU9BLEtBQUssQ0FBQ0MsS0FBTixLQUFnQixXQUF2QjtBQUNELEdBRmdCLENBQWpCO0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFaO0FBRUEsTUFBTU0sUUFBUSxHQUFHUCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxVQUFDQyxLQUFELEVBQVc7QUFDeEMsV0FBT0EsS0FBSyxDQUFDQyxLQUFOLEtBQWdCLFdBQXZCO0FBQ0QsR0FGZ0IsQ0FBakI7QUFHQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLFFBQVo7QUFFQSxNQUFNTyxVQUFVLEdBQUdSLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLFVB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkI7QUFNZUYsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2NsaWVudFwiO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5pbXBvcnQgSW5zdGFncmFtIGZyb20gXCIuLi9jb21wb25lbnRzL2luc3RhZ3JhbVwiO1xuaW1wb3J0IFN1YnNjcmliZU1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL21vZGFsLXN1YnNjcmliZVwiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbWFnZVwiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpbWFnZXMgPSBbXSB9ID0gcHJvcHM7XG5cbiAgLy8gQXNzaWduIHZhcmlhYmxlcyB0byBzcGVjaWZpYyBpbWFnZXMgdG8gbWFpbnRhaW4gb3JkZXIgKHdpdGhvdXQgdGhpcyBpbWFnZXMgd291bGQgc2hvdyB1cCBpbiByYW5kb20gb3JkZXJzLCBhbmQgZm9yIGV4LiB0aGUgaW5kZXggMCB3b3VsZCBub3QgbmVjZXNzYXJpbHkgY29ycmVzcG9uZCB3aXRoIGltYWdlT25lIC0gbW9zdGx5IGZvciBjbGllbnQgc28gdGhlIHRpdGxlcyBpbiBTYW5pdHkgc3R1ZGlvIGNvcnJlc3BvbmQgd2l0aCB0aGUgcGxhY2VtZW50IG9mIHRoZSBzcGVjaWZpYyBpbWFnZSlcbiAgY29uc3QgaW1hZ2VPbmUgPSBpbWFnZXMuZmlsdGVyKChpbWFnZSkgPT4ge1xuICAgIHJldHVybiBpbWFnZS50aXRsZSA9PT0gXCJJbWFnZSBPbmVcIjtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKGltYWdlT25lKTtcblxuICBjb25zdCBpbWFnZVR3byA9IGltYWdlcy5maWx0ZXIoKGltYWdlKSA9PiB7XG4gICAgcmV0dXJuIGltYWdlLnRpdGxlID09PSBcIkltYWdlIFR3b1wiO1xuICB9KTtcbiAgY29uc29sZS5sb2coaW1hZ2VPbmUpO1xuXG4gIGNvbnN0IGltYWdlVGhyZWUgPSBpbWFnZXMuZmlsdGVyKChpbWFnZSkgPT4ge1xuICAgIHJldHVybiBpbWFnZS50aXRsZSA9PT0gXCJJbWFnZSBUaHJlZVwiO1xuICB9KTtcbiAgY29uc29sZS5sb2coaW1hZ2VPbmUpO1xuXG4gIGNvbnN0IGltYWdlRm91ciA9IGltYWdlcy5maWx0ZXIoKGltYWdlKSA9PiB7XG4gICAgcmV0dXJuIGltYWdlLnRpdGxlID09PSBcIkltYWdlIEZvdXJcIjtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKGltYWdlT25lKTtcblxuICBjb25zdCBidWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCk7XG5cbiAgZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICAgIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSk7XG4gIH1cblxuICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TW9kYWxTaG93KHRydWUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5PSk9TPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17NX0+XG4gICAgICAgICAgICA8YSBocmVmPXtpbWFnZU9uZVswXS51cmx9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmctaW1hZ2Utb25lXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoaW1hZ2VPbmVbMF0uaW1hZ2UpLnF1YWxpdHkoMTAwKS51cmwoKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2ltYWdlT25lWzBdLnVybH0gY2xhc3NOYW1lPVwiaW1hZ2UtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgIHtpbWFnZU9uZVswXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXs3fT5cbiAgICAgICAgICAgIDxhIGhyZWY9e2ltYWdlVHdvWzBdLnVybH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy1pbWFnZS10d29cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihpbWFnZVR3b1swXS5pbWFnZSkucXVhbGl0eSgxMDApLnVybCgpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17aW1hZ2VUd29bMF0udXJsfSBjbGFzc05hbWU9XCJpbWFnZS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAge2ltYWdlVHdvWzBdLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLWltYWdlLXRocmVlXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoaW1hZ2VUaHJlZVswXS5pbWFnZSkucXVhbGl0eSgxMDApLnVybCgpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wcm9kdWN0cy86aWRcIiBjbGFzc05hbWU9XCJpbWFnZS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAge2ltYWdlVGhyZWVbMF0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy1pbWFnZS1mb3VyXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoaW1hZ2VGb3VyWzBdLmltYWdlKS5xdWFsaXR5KDEwMCkudXJsKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Byb2R1Y3RzLzppZFwiIGNsYXNzTmFtZT1cImltYWdlLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICB7aW1hZ2VGb3VyWzBdLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8aDQgY2xhc3NOYW1lPVwiZm9sbG93LWhlYWRlclwiPkZPTExPVyBPSk9TIE9OIElOU1RBR1JBTTwvaDQ+XG4gICAgICA8SW5zdGFncmFtIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XG4gIGltYWdlczogYXdhaXQgY2xpZW50LmZldGNoKGBcbiAgKltfdHlwZSA9PSBcImhvbWVwYWdlXCJde3VybCwgZGVzY3JpcHRpb24sIHRpdGxlLCBpbWFnZX1cbiAgYCksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})