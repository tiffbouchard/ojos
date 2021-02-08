webpackHotUpdate_N_E("pages/collections/[handle]",{

/***/ "./pages/collections/[handle].js":
/*!***************************************!*\
  !*** ./pages/collections/[handle].js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_shopContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/shopContext */ \"./context/shopContext.js\");\n/* harmony import */ var _components_Collection_Collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Collection/Collection */ \"./components/Collection/Collection.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace.nosync/ojos/web/pages/collections/[handle].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar CollectionPage = function CollectionPage(props) {\n  _s();\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(_context_shopContext__WEBPACK_IMPORTED_MODULE_3__[\"ShopContext\"]),\n      fetchCollection = _React$useContext.fetchCollection;\n\n  var handle = props.params.handle;\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    console.log(handle); // let query = \"Accessories\";\n    // fetchCollection(query);\n    // return () => {};\n  }, []);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Collection_Collection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(CollectionPage, \"Rv8tzNoDnN+k8S+uDMtlA1zvJSA=\");\n\n_c = CollectionPage;\n\nCollectionPage.getStaticProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var params;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return context.query;\n\n          case 2:\n            params = _context.sent;\n            return _context.abrupt(\"return\", {\n              params: params\n            });\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CollectionPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"CollectionPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29sbGVjdGlvbnMvW2hhbmRsZV0uanM/MzkzZSJdLCJuYW1lcyI6WyJDb2xsZWN0aW9uUGFnZSIsInByb3BzIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiU2hvcENvbnRleHQiLCJmZXRjaENvbGxlY3Rpb24iLCJoYW5kbGUiLCJwYXJhbXMiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLDBCQUNKQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyxnRUFBakIsQ0FESTtBQUFBLE1BQ3hCQyxlQUR3QixxQkFDeEJBLGVBRHdCOztBQUdoQyxNQUFJQyxNQUFNLEdBQUdMLEtBQUssQ0FBQ00sTUFBTixDQUFhRCxNQUExQjtBQUNBSiw4Q0FBSyxDQUFDTSxTQUFOLENBQWdCLFlBQU07QUFDcEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFaLEVBRG9CLENBRXBCO0FBQ0E7QUFDQTtBQUNELEdBTEQsRUFLRyxFQUxIO0FBT0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQUtELENBaEJEOztHQUFNTixjOztLQUFBQSxjOztBQWtCTkEsY0FBYyxDQUFDVyxjQUFmO0FBQUEsOExBQWdDLGlCQUFnQkMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDVEEsT0FBTyxDQUFDQyxLQURDOztBQUFBO0FBQ3hCTixrQkFEd0I7QUFBQSw2Q0FFdkI7QUFBRUEsb0JBQU0sRUFBRUE7QUFBVixhQUZ1Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFoQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZVAsNkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb2xsZWN0aW9ucy9baGFuZGxlXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNob3BDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvc2hvcENvbnRleHRcIjtcbmltcG9ydCBDb2xsZWN0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbGxlY3Rpb24vQ29sbGVjdGlvblwiO1xuXG5jb25zdCBDb2xsZWN0aW9uUGFnZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGZldGNoQ29sbGVjdGlvbiB9ID0gUmVhY3QudXNlQ29udGV4dChTaG9wQ29udGV4dCk7XG5cbiAgbGV0IGhhbmRsZSA9IHByb3BzLnBhcmFtcy5oYW5kbGU7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coaGFuZGxlKVxuICAgIC8vIGxldCBxdWVyeSA9IFwiQWNjZXNzb3JpZXNcIjtcbiAgICAvLyBmZXRjaENvbGxlY3Rpb24ocXVlcnkpO1xuICAgIC8vIHJldHVybiAoKSA9PiB7fTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDb2xsZWN0aW9uIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Db2xsZWN0aW9uUGFnZS5nZXRTdGF0aWNQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtcyA9IGF3YWl0IGNvbnRleHQucXVlcnk7XG4gIHJldHVybiB7IHBhcmFtczogcGFyYW1zIH07XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25QYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/collections/[handle].js\n");

/***/ })

})