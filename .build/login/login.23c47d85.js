/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./login/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./login/login.css":
/*!*************************!*\
  !*** ./login/login.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5jc3M/Yzc0NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL2xvZ2luL2xvZ2luLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./login/login.css\n");

/***/ }),

/***/ "./login/login.js":
/*!************************!*\
  !*** ./login/login.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.css */ \"./login/login.css\");\n/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_login_css__WEBPACK_IMPORTED_MODULE_0__);\n// import '../lib/bootstrap.css';\n// import '../lib/animate.min.css';\n\n// require('../common/common.js');\n$(document).ready(function(){\n    var $signinBtn = $('#signin');\n\n    var parseParams = function(search){\n          var obj ={}; \n          var params = search.slice(1);\n          var arr = params.split('&');\n          arr.map(function(ele,index){\n               var  inner_arr = ele.split('=');\n               var key = inner_arr[0];\n               var value = inner_arr[1];\n               obj[key]=value;\n          });\n          return obj;\n    }\n\n    var init = function(){\n        addEvent();\n    }\n    var addEvent = function(){\n         $signinBtn.on('click',function(){\n             var data = {\n                 userName:$('.signin-form input[name=name]').val(),\n                 password:$('.signin-form input[name=password]').val(),\n                 appInfo:parseParams(location.search) \n             }\n            $.post('/ssoLogin/signin',data,(result)=>{\n                if(result.code === 302){\n                    if (result.appInfo){\n                    window.location.href =result.appInfo.backUrl+'?tgc='+result.appInfo.tgc;\n                    }else{\n                        window.location.href = '/';\n                    }\n                }else if(result.code === 500){\n                    alert('login failed');\n                }\n            })\n         });\n       \n    }\n\n    init();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5qcz9iMDA3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFVBQVU7O0FBRVY7O0FBRUE7QUFDQSxDQUFDIiwiZmlsZSI6Ii4vbG9naW4vbG9naW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJy4uL2xpYi9ib290c3RyYXAuY3NzJztcbi8vIGltcG9ydCAnLi4vbGliL2FuaW1hdGUubWluLmNzcyc7XG5pbXBvcnQgJy4vbG9naW4uY3NzJztcbi8vIHJlcXVpcmUoJy4uL2NvbW1vbi9jb21tb24uanMnKTtcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgdmFyICRzaWduaW5CdG4gPSAkKCcjc2lnbmluJyk7XG5cbiAgICB2YXIgcGFyc2VQYXJhbXMgPSBmdW5jdGlvbihzZWFyY2gpe1xuICAgICAgICAgIHZhciBvYmogPXt9OyBcbiAgICAgICAgICB2YXIgcGFyYW1zID0gc2VhcmNoLnNsaWNlKDEpO1xuICAgICAgICAgIHZhciBhcnIgPSBwYXJhbXMuc3BsaXQoJyYnKTtcbiAgICAgICAgICBhcnIubWFwKGZ1bmN0aW9uKGVsZSxpbmRleCl7XG4gICAgICAgICAgICAgICB2YXIgIGlubmVyX2FyciA9IGVsZS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgdmFyIGtleSA9IGlubmVyX2FyclswXTtcbiAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGlubmVyX2FyclsxXTtcbiAgICAgICAgICAgICAgIG9ialtrZXldPXZhbHVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbigpe1xuICAgICAgICBhZGRFdmVudCgpO1xuICAgIH1cbiAgICB2YXIgYWRkRXZlbnQgPSBmdW5jdGlvbigpe1xuICAgICAgICAgJHNpZ25pbkJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgIHVzZXJOYW1lOiQoJy5zaWduaW4tZm9ybSBpbnB1dFtuYW1lPW5hbWVdJykudmFsKCksXG4gICAgICAgICAgICAgICAgIHBhc3N3b3JkOiQoJy5zaWduaW4tZm9ybSBpbnB1dFtuYW1lPXBhc3N3b3JkXScpLnZhbCgpLFxuICAgICAgICAgICAgICAgICBhcHBJbmZvOnBhcnNlUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCkgXG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgJC5wb3N0KCcvc3NvTG9naW4vc2lnbmluJyxkYXRhLChyZXN1bHQpPT57XG4gICAgICAgICAgICAgICAgaWYocmVzdWx0LmNvZGUgPT09IDMwMil7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuYXBwSW5mbyl7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID1yZXN1bHQuYXBwSW5mby5iYWNrVXJsKyc/dGdjPScrcmVzdWx0LmFwcEluZm8udGdjO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzdWx0LmNvZGUgPT09IDUwMCl7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdsb2dpbiBmYWlsZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgfSk7XG4gICAgICAgXG4gICAgfVxuXG4gICAgaW5pdCgpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./login/login.js\n");

/***/ })

/******/ });