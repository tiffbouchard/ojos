webpackHotUpdate_N_E("pages/index",{

/***/ "./components/modal-subscribe.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_instagram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/instagram */ \"./components/instagram.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Image */ \"./node_modules/react-bootstrap/esm/Image.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Home = function Home(props) {\n  _s();\n\n  // Destructure props, extract images from props that were passed from getInitialProps\n  var _props$images = props.images,\n      images = _props$images === void 0 ? [] : _props$images; // Assign variables to specific images to maintain order (without this images would show up in random orders, and for ex. the index 0 would not necessarily correspond with imageOne - mostly for client so the titles in Sanity studio correspond with the placement of the specific image)\n\n  var imageOne = images.filter(function (image) {\n    return image.title === \"Image One\";\n  });\n  console.log(imageOne);\n  var imageTwo = images.filter(function (image) {\n    return image.title === \"Image Two\";\n  });\n  console.log(imageOne);\n  var imageThree = images.filter(function (image) {\n    return image.title === \"Image Three\";\n  });\n  console.log(imageOne);\n  var imageFour = images.filter(function (image) {\n    return image.title === \"Image Four\";\n  });\n  console.log(imageOne); // imageUrlBuilder method from Sanity.io in order to retrieve higher quality images\n\n  var builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n  function urlFor(source) {\n    return builder.image(source);\n  } // For subscribe modal\n\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      modalShow = _React$useState2[0],\n      setModalShow = _React$useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    setModalShow(true);\n  }, []);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, \"OJOS\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  })), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    fluid: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: imageOne[0].url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-one\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    fluid: true,\n    src: urlFor(imageOne[0].image).quality(100).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: imageOne[0].url,\n    className: \"image-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 17\n    }\n  }, imageOne[0].description)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 7,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: imageTwo[0].url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-two\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    fluid: true,\n    src: urlFor(imageTwo[0].image).quality(100).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: imageTwo[0].url,\n    className: \"image-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 17\n    }\n  }, imageTwo[0].description))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: imageThree[0].url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-three\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    fluid: true,\n    src: urlFor(imageThree[0].image).quality(100).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: imageThree[0].url,\n    className: \"image-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 17\n    }\n  }, imageThree[0].description)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: imageFour[0].url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-four\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    fluid: true,\n    src: urlFor(imageFour[0].image).quality(100).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: imageFour[0].url,\n    className: \"image-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 17\n    }\n  }, imageFour[0].description)))))), __jsx(\"h4\", {\n    className: \"follow-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }\n  }, \"FOLLOW OJOS ON INSTAGRAM\"), __jsx(_components_instagram__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }));\n}; // Fetching data from Sanity.io with GROQ query\n\n\n_s(Home, \"oG8czk+kkbltfDEh1aAE+8uN2jU=\");\n\n_c = Home;\nHome.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch(\"\\n  *[_type == \\\"homepage\\\"]{url, description, title, image}\\n  \");\n\n        case 2:\n          _context.t0 = _context.sent;\n          return _context.abrupt(\"return\", {\n            images: _context.t0\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJpbWFnZXMiLCJpbWFnZU9uZSIsImZpbHRlciIsImltYWdlIiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VUd28iLCJpbWFnZVRocmVlIiwiaW1hZ2VGb3VyIiwiYnVpbGRlciIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsInVybEZvciIsInNvdXJjZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJ1c2VFZmZlY3QiLCJ1cmwiLCJxdWFsaXR5IiwiZGVzY3JpcHRpb24iLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN0QjtBQURzQixzQkFFRUEsS0FGRixDQUVkQyxNQUZjO0FBQUEsTUFFZEEsTUFGYyw4QkFFTCxFQUZLLGtCQUl0Qjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLFVBQUNDLEtBQUQsRUFBVztBQUN4QyxXQUFPQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsV0FBdkI7QUFDRCxHQUZnQixDQUFqQjtBQUdBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsUUFBWjtBQUVBLE1BQU1NLFFBQVEsR0FBR1AsTUFBTSxDQUFDRSxNQUFQLENBQWMsVUFBQ0MsS0FBRCxFQUFXO0FBQ3hDLFdBQU9BLEtBQUssQ0FBQ0MsS0FBTixLQUFnQixXQUF2QjtBQUNELEdBRmdCLENBQWpCO0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFaO0FBRUEsTUFBTU8sVUFBVSxHQUFHUixNQUFNLENBQUNFLE1BQVAsQ0FBYyxV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N0dNeEIsSTs7S0FBQUEsSTtBQThHTkEsSUFBSSxDQUFDeUIsZUFBTCxpTUFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1BYLCtDQUFNLENBQUNZLEtBQVAsb0VBRE87O0FBQUE7QUFBQTtBQUFBO0FBQ3JCeEIsa0JBRHFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkI7QUFNZUYsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2NsaWVudFwiO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5pbXBvcnQgSW5zdGFncmFtIGZyb20gXCIuLi9jb21wb25lbnRzL2luc3RhZ3JhbVwiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbWFnZVwiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcbiAgLy8gRGVzdHJ1Y3R1cmUgcHJvcHMsIGV4dHJhY3QgaW1hZ2VzIGZyb20gcHJvcHMgdGhhdCB3ZXJlIHBhc3NlZCBmcm9tIGdldEluaXRpYWxQcm9wc1xuICBjb25zdCB7IGltYWdlcyA9IFtdIH0gPSBwcm9wcztcblxuICAvLyBBc3NpZ24gdmFyaWFibGVzIHRvIHNwZWNpZmljIGltYWdlcyB0byBtYWludGFpbiBvcmRlciAod2l0aG91dCB0aGlzIGltYWdlcyB3b3VsZCBzaG93IHVwIGluIHJhbmRvbSBvcmRlcnMsIGFuZCBmb3IgZXguIHRoZSBpbmRleCAwIHdvdWxkIG5vdCBuZWNlc3NhcmlseSBjb3JyZXNwb25kIHdpdGggaW1hZ2VPbmUgLSBtb3N0bHkgZm9yIGNsaWVudCBzbyB0aGUgdGl0bGVzIGluIFNhbml0eSBzdHVkaW8gY29ycmVzcG9uZCB3aXRoIHRoZSBwbGFjZW1lbnQgb2YgdGhlIHNwZWNpZmljIGltYWdlKVxuICBjb25zdCBpbWFnZU9uZSA9IGltYWdlcy5maWx0ZXIoKGltYWdlKSA9PiB7XG4gICAgcmV0dXJuIGltYWdlLnRpdGxlID09PSBcIkltYWdlIE9uZVwiO1xuICB9KTtcbiAgY29uc29sZS5sb2coaW1hZ2VPbmUpO1xuXG4gIGNvbnN0IGltYWdlVHdvID0gaW1hZ2VzLmZpbHRlcigoaW1hZ2UpID0+IHtcbiAgICByZXR1cm4gaW1hZ2UudGl0bGUgPT09IFwiSW1hZ2UgVHdvXCI7XG4gIH0pO1xuICBjb25zb2xlLmxvZyhpbWFnZU9uZSk7XG5cbiAgY29uc3QgaW1hZ2VUaHJlZSA9IGltYWdlcy5maWx0ZXIoKGltYWdlKSA9PiB7XG4gICAgcmV0dXJuIGltYWdlLnRpdGxlID09PSBcIkltYWdlIFRocmVlXCI7XG4gIH0pO1xuICBjb25zb2xlLmxvZyhpbWFnZU9uZSk7XG5cbiAgY29uc3QgaW1hZ2VGb3VyID0gaW1hZ2VzLmZpbHRlcigoaW1hZ2UpID0+IHtcbiAgICByZXR1cm4gaW1hZ2UudGl0bGUgPT09IFwiSW1hZ2UgRm91clwiO1xuICB9KTtcbiAgY29uc29sZS5sb2coaW1hZ2VPbmUpO1xuXG4gIC8vIGltYWdlVXJsQnVpbGRlciBtZXRob2QgZnJvbSBTYW5pdHkuaW8gaW4gb3JkZXIgdG8gcmV0cmlldmUgaGlnaGVyIHF1YWxpdHkgaW1hZ2VzXG4gIGNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KTtcblxuICBmdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gICAgcmV0dXJuIGJ1aWxkZXIuaW1hZ2Uoc291cmNlKTtcbiAgfVxuXG4gIC8vIEZvciBzdWJzY3JpYmUgbW9kYWxcbiAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+T0pPUzwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezV9PlxuICAgICAgICAgICAgPGEgaHJlZj17aW1hZ2VPbmVbMF0udXJsfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLWltYWdlLW9uZVwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKGltYWdlT25lWzBdLmltYWdlKS5xdWFsaXR5KDEwMCkudXJsKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtpbWFnZU9uZVswXS51cmx9IGNsYXNzTmFtZT1cImltYWdlLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICB7aW1hZ2VPbmVbMF0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17N30+XG4gICAgICAgICAgICA8YSBocmVmPXtpbWFnZVR3b1swXS51cmx9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmctaW1hZ2UtdHdvXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoaW1hZ2VUd29bMF0uaW1hZ2UpLnF1YWxpdHkoMTAwKS51cmwoKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2ltYWdlVHdvWzBdLnVybH0gY2xhc3NOYW1lPVwiaW1hZ2UtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgIHtpbWFnZVR3b1swXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICA8YSBocmVmPXtpbWFnZVRocmVlWzBdLnVybH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy1pbWFnZS10aHJlZVwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKGltYWdlVGhyZWVbMF0uaW1hZ2UpLnF1YWxpdHkoMTAwKS51cmwoKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2ltYWdlVGhyZWVbMF0udXJsfSBjbGFzc05hbWU9XCJpbWFnZS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAge2ltYWdlVGhyZWVbMF0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICA8YSBocmVmPXtpbWFnZUZvdXJbMF0udXJsfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLWltYWdlLWZvdXJcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihpbWFnZUZvdXJbMF0uaW1hZ2UpLnF1YWxpdHkoMTAwKS51cmwoKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2ltYWdlRm91clswXS51cmx9IGNsYXNzTmFtZT1cImltYWdlLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICB7aW1hZ2VGb3VyWzBdLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8aDQgY2xhc3NOYW1lPVwiZm9sbG93LWhlYWRlclwiPkZPTExPVyBPSk9TIE9OIElOU1RBR1JBTTwvaDQ+XG4gICAgICA8SW5zdGFncmFtIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyBGZXRjaGluZyBkYXRhIGZyb20gU2FuaXR5LmlvIHdpdGggR1JPUSBxdWVyeVxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICBpbWFnZXM6IGF3YWl0IGNsaWVudC5mZXRjaChgXG4gICpbX3R5cGUgPT0gXCJob21lcGFnZVwiXXt1cmwsIGRlc2NyaXB0aW9uLCB0aXRsZSwgaW1hZ2V9XG4gIGApLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})