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

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sb2dpbi9sb2dpbi5jc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sb2dpbi9sb2dpbi5jc3M/Yzc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./login/login.css\n");

/***/ }),

/***/ "./login/login.js":
/*!************************!*\
  !*** ./login/login.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.css */ \"./login/login.css\");\n/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_login_css__WEBPACK_IMPORTED_MODULE_0__);\n// import '../lib/bootstrap.css';\n// import '../lib/animate.min.css';\n\n// require('../common/common.js');\n$(document).ready(function(){\n    var $signinBtn = $('#signin');\n\n    var parseParams = function(search){\n          var obj ={}; \n          var params = search.slice(1);\n          var arr = params.split('&');\n          arr.map(function(ele,index){\n               var  inner_arr = ele.split('=');\n               var key = inner_arr[0];\n               var value = inner_arr[1];\n               obj[key]=value;\n          });\n          return obj;\n    }\n\n    var init = function(){\n        addEvent();\n    }\n    var addEvent = function(){\n         $signinBtn.on('click',function(){\n             var data = {\n                 userName:$('.signin-form input[name=name]').val(),\n                 password:$('.signin-form input[name=password]').val(),\n                 appInfo:parseParams(location.search) \n             }\n            $.post('/ssoLogin/signin',data,(result)=>{\n                if(result.code === 302){\n                    if (result.appInfo){\n                    window.location.href =result.appInfo.backUrl+'?tgc='+result.appInfo.tgc;\n                    }else{\n                        window.location.href = '/';\n                    }\n                }else if(result.code === 500){\n                    alert('login failed');\n                }\n            })\n         });\n       \n    }\n\n    init();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sb2dpbi9sb2dpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xvZ2luL2xvZ2luLmpzP2IwMDciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuLi9saWIvYm9vdHN0cmFwLmNzcyc7XG4vLyBpbXBvcnQgJy4uL2xpYi9hbmltYXRlLm1pbi5jc3MnO1xuaW1wb3J0ICcuL2xvZ2luLmNzcyc7XG4vLyByZXF1aXJlKCcuLi9jb21tb24vY29tbW9uLmpzJyk7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgIHZhciAkc2lnbmluQnRuID0gJCgnI3NpZ25pbicpO1xuXG4gICAgdmFyIHBhcnNlUGFyYW1zID0gZnVuY3Rpb24oc2VhcmNoKXtcbiAgICAgICAgICB2YXIgb2JqID17fTsgXG4gICAgICAgICAgdmFyIHBhcmFtcyA9IHNlYXJjaC5zbGljZSgxKTtcbiAgICAgICAgICB2YXIgYXJyID0gcGFyYW1zLnNwbGl0KCcmJyk7XG4gICAgICAgICAgYXJyLm1hcChmdW5jdGlvbihlbGUsaW5kZXgpe1xuICAgICAgICAgICAgICAgdmFyICBpbm5lcl9hcnIgPSBlbGUuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgIHZhciBrZXkgPSBpbm5lcl9hcnJbMF07XG4gICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpbm5lcl9hcnJbMV07XG4gICAgICAgICAgICAgICBvYmpba2V5XT12YWx1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHZhciBpbml0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgYWRkRXZlbnQoKTtcbiAgICB9XG4gICAgdmFyIGFkZEV2ZW50ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICRzaWduaW5CdG4ub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgICB1c2VyTmFtZTokKCcuc2lnbmluLWZvcm0gaW5wdXRbbmFtZT1uYW1lXScpLnZhbCgpLFxuICAgICAgICAgICAgICAgICBwYXNzd29yZDokKCcuc2lnbmluLWZvcm0gaW5wdXRbbmFtZT1wYXNzd29yZF0nKS52YWwoKSxcbiAgICAgICAgICAgICAgICAgYXBwSW5mbzpwYXJzZVBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpIFxuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQucG9zdCgnL3Nzb0xvZ2luL3NpZ25pbicsZGF0YSwocmVzdWx0KT0+e1xuICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5jb2RlID09PSAzMDIpe1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmFwcEluZm8pe1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9cmVzdWx0LmFwcEluZm8uYmFja1VybCsnP3RnYz0nK3Jlc3VsdC5hcHBJbmZvLnRnYztcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHJlc3VsdC5jb2RlID09PSA1MDApe1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnbG9naW4gZmFpbGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgIH0pO1xuICAgICAgIFxuICAgIH1cblxuICAgIGluaXQoKTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./login/login.js\n");

/***/ })

/******/ });