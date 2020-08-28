webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _imageUrlBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imageUrlBuilder */ \"./imageUrlBuilder.js\");\n/* harmony import */ var _components_instagram__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/instagram */ \"./components/instagram.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Image */ \"./node_modules/react-bootstrap/esm/Image.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n// React/Next.js imports\n\n // Sanity.io\n\n\n // Custom components\n\n // Bootstrap components\n\n\n\n\n\nvar Home = function Home(props) {\n  var _props$images = props.images,\n      images = _props$images === void 0 ? [] : _props$images; // Assigns variables to specific images to maintain order (without this images would show up in random orders, and for ex. the index 0 would not necessarily correspond with imageOne - mostly for client so the titles in Sanity studio correspond with the placement of the specific image)\n\n  var imageOne = images.filter(function (image) {\n    return image.title === \"Image One\";\n  });\n  var imageTwo = images.filter(function (image) {\n    return image.title === \"Image Two\";\n  });\n  var imageThree = images.filter(function (image) {\n    return image.title === \"Image Three\";\n  });\n  var imageFour = images.filter(function (image) {\n    return image.title === \"Image Four\";\n  }); // imageUrlBuilder method from Sanity.io in order to retrieve higher quality images\n  // Show sub modal when page first loads..need to work on\n  // const [modalShow, setModalShow] = React.useState(false);\n  // useEffect(() => {\n  //   setModalShow(true);\n  // }, []);\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, \"OJOS\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  })), __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    fluid: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: imageOne[0].url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-one\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(imageOne[0].image).quality(100).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: imageOne[0].url,\n    className: \"image-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }, imageOne[0].description)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 7,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: imageTwo[0].url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-two\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(imageTwo[0].image).quality(100).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: imageTwo[0].url,\n    className: \"image-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 17\n    }\n  }, imageTwo[0].description))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: imageThree[0].url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-three\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(imageThree[0].image).quality(100).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: imageThree[0].url,\n    className: \"image-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }, imageThree[0].description)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: imageFour[0].url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-four\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(imageFour[0].image).quality(100).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: imageFour[0].url,\n    className: \"image-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 17\n    }\n  }, imageFour[0].description)))))), __jsx(\"h4\", {\n    className: \"follow-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }\n  }, \"FOLLOW OJOS ON INSTAGRAM\"), __jsx(_components_instagram__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }\n  }));\n}; // Fetching data from Sanity.io with GROQ query\n\n\n_c = Home;\nHome.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch(\"\\n  *[_type == \\\"homepage\\\"]{url, description, title, image}\\n  \");\n\n        case 2:\n          _context.t0 = _context.sent;\n          return _context.abrupt(\"return\", {\n            images: _context.t0\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJpbWFnZXMiLCJpbWFnZU9uZSIsImZpbHRlciIsImltYWdlIiwidGl0bGUiLCJpbWFnZVR3byIsImltYWdlVGhyZWUiLCJpbWFnZUZvdXIiLCJ1cmwiLCJ1cmxGb3IiLCJxdWFsaXR5IiwiZGVzY3JpcHRpb24iLCJnZXRJbml0aWFsUHJvcHMiLCJjbGllbnQiLCJmZXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtDQUdBOztDQUdBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQSxzQkFDRUEsS0FERixDQUNkQyxNQURjO0FBQUEsTUFDZEEsTUFEYyw4QkFDTCxFQURLLGtCQUd0Qjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLFVBQUNDLEtBQUQsRUFBVztBQUN4QyxXQUFPQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsV0FBdkI7QUFDRCxHQUZnQixDQUFqQjtBQUlBLE1BQU1DLFFBQVEsR0FBR0wsTUFBTSxDQUFDRSxNQUFQLENBQWMsVUFBQ0MsS0FBRCxFQUFXO0FBQ3hDLFdBQU9BLEtBQUssQ0FBQ0MsS0FBTixLQUFnQixXQUF2QjtBQUNELEdBRmdCLENBQWpCO0FBSUEsTUFBTUUsVUFBVSxHQUFHTixNQUFNLENBQUNFLE1BQVAsQ0FBYyxVQUFDQyxLQUFELEVBQVc7QUFDMUMsV0FBT0EsS0FBSyxDQUFDQyxLQUFOLEtBQWdCLGFBQXZCO0FBQ0QsR0FGa0IsQ0FBbkI7QUFJQSxNQUFNRyxTQUFTLEdBQUdQLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLFVBQUNDLEtBQUQsRUFBVztBQUN6QyxXQUFPQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsWUFBdkI7QUFDRCxHQUZpQixDQUFs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QUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBRyxRQUFJLEVBQUVELFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUMsR0FBdEI7QUFBMkIsYUFBUyxFQUFDLG1CQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUksV0FEaEIsQ0FMRixDQURGLENBREYsQ0FkRixDQTdCRixDQUxGLEVBK0RFO0FBQUksYUFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0EvREYsRUFnRUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEVGLENBREY7QUFvRUQsQ0FqR0QsQyxDQW1HQTs7O0tBbkdNYixJO0FBb0dOQSxJQUFJLENBQUNjLGVBQUwsaU1BQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNQQywrQ0FBTSxDQUFDQyxLQUFQLG9FQURPOztBQUFBO0FBQUE7QUFBQTtBQUNyQmQsa0JBRHFCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdkI7QUFNZUYsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFJlYWN0L05leHQuanMgaW1wb3J0c1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBTYW5pdHkuaW9cbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2NsaWVudFwiO1xuaW1wb3J0IHVybEZvciBmcm9tIFwiLi4vaW1hZ2VVcmxCdWlsZGVyXCI7XG5cbi8vIEN1c3RvbSBjb21wb25lbnRzXG5pbXBvcnQgSW5zdGFncmFtIGZyb20gXCIuLi9jb21wb25lbnRzL2luc3RhZ3JhbVwiO1xuXG4vLyBCb290c3RyYXAgY29tcG9uZW50c1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJyZWFjdC1ib290c3RyYXAvSW1hZ2VcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaW1hZ2VzID0gW10gfSA9IHByb3BzO1xuXG4gIC8vIEFzc2lnbnMgdmFyaWFibGVzIHRvIHNwZWNpZmljIGltYWdlcyB0byBtYWludGFpbiBvcmRlciAod2l0aG91dCB0aGlzIGltYWdlcyB3b3VsZCBzaG93IHVwIGluIHJhbmRvbSBvcmRlcnMsIGFuZCBmb3IgZXguIHRoZSBpbmRleCAwIHdvdWxkIG5vdCBuZWNlc3NhcmlseSBjb3JyZXNwb25kIHdpdGggaW1hZ2VPbmUgLSBtb3N0bHkgZm9yIGNsaWVudCBzbyB0aGUgdGl0bGVzIGluIFNhbml0eSBzdHVkaW8gY29ycmVzcG9uZCB3aXRoIHRoZSBwbGFjZW1lbnQgb2YgdGhlIHNwZWNpZmljIGltYWdlKVxuICBjb25zdCBpbWFnZU9uZSA9IGltYWdlcy5maWx0ZXIoKGltYWdlKSA9PiB7XG4gICAgcmV0dXJuIGltYWdlLnRpdGxlID09PSBcIkltYWdlIE9uZVwiO1xuICB9KTtcblxuICBjb25zdCBpbWFnZVR3byA9IGltYWdlcy5maWx0ZXIoKGltYWdlKSA9PiB7XG4gICAgcmV0dXJuIGltYWdlLnRpdGxlID09PSBcIkltYWdlIFR3b1wiO1xuICB9KTtcblxuICBjb25zdCBpbWFnZVRocmVlID0gaW1hZ2VzLmZpbHRlcigoaW1hZ2UpID0+IHtcbiAgICByZXR1cm4gaW1hZ2UudGl0bGUgPT09IFwiSW1hZ2UgVGhyZWVcIjtcbiAgfSk7XG5cbiAgY29uc3QgaW1hZ2VGb3VyID0gaW1hZ2VzLmZpbHRlcigoaW1hZ2UpID0+IHtcbiAgICByZXR1cm4gaW1hZ2UudGl0bGUgPT09IFwiSW1hZ2UgRm91clwiO1xuICB9KTtcblxuICAvLyBpbWFnZVVybEJ1aWxkZXIgbWV0aG9kIGZyb20gU2FuaXR5LmlvIGluIG9yZGVyIHRvIHJldHJpZXZlIGhpZ2hlciBxdWFsaXR5IGltYWdlc1xuXG4gIC8vIFNob3cgc3ViIG1vZGFsIHdoZW4gcGFnZSBmaXJzdCBsb2Fkcy4ubmVlZCB0byB3b3JrIG9uXG4gIC8vIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzZXRNb2RhbFNob3codHJ1ZSk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9KT1M8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXs1fT5cbiAgICAgICAgICAgIDxhIGhyZWY9e2ltYWdlT25lWzBdLnVybH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy1pbWFnZS1vbmVcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihpbWFnZU9uZVswXS5pbWFnZSkucXVhbGl0eSgxMDApLnVybCgpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17aW1hZ2VPbmVbMF0udXJsfSBjbGFzc05hbWU9XCJpbWFnZS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAge2ltYWdlT25lWzBdLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezd9PlxuICAgICAgICAgICAgPGEgaHJlZj17aW1hZ2VUd29bMF0udXJsfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLWltYWdlLXR3b1wiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKGltYWdlVHdvWzBdLmltYWdlKS5xdWFsaXR5KDEwMCkudXJsKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtpbWFnZVR3b1swXS51cmx9IGNsYXNzTmFtZT1cImltYWdlLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICB7aW1hZ2VUd29bMF0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgPGEgaHJlZj17aW1hZ2VUaHJlZVswXS51cmx9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmctaW1hZ2UtdGhyZWVcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihpbWFnZVRocmVlWzBdLmltYWdlKS5xdWFsaXR5KDEwMCkudXJsKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtpbWFnZVRocmVlWzBdLnVybH0gY2xhc3NOYW1lPVwiaW1hZ2UtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgIHtpbWFnZVRocmVlWzBdLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgPGEgaHJlZj17aW1hZ2VGb3VyWzBdLnVybH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy1pbWFnZS1mb3VyXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoaW1hZ2VGb3VyWzBdLmltYWdlKS5xdWFsaXR5KDEwMCkudXJsKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtpbWFnZUZvdXJbMF0udXJsfSBjbGFzc05hbWU9XCJpbWFnZS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAge2ltYWdlRm91clswXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbGxvdy1oZWFkZXJcIj5GT0xMT1cgT0pPUyBPTiBJTlNUQUdSQU08L2g0PlxuICAgICAgPEluc3RhZ3JhbSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gRmV0Y2hpbmcgZGF0YSBmcm9tIFNhbml0eS5pbyB3aXRoIEdST1EgcXVlcnlcbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcbiAgaW1hZ2VzOiBhd2FpdCBjbGllbnQuZmV0Y2goYFxuICAqW190eXBlID09IFwiaG9tZXBhZ2VcIl17dXJsLCBkZXNjcmlwdGlvbiwgdGl0bGUsIGltYWdlfVxuICBgKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})