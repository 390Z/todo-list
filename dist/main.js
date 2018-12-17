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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/button.js":
/*!**********************************!*\
  !*** ./src/components/button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loadButton = (bId) => {\n    const button = document.createElement('button');\n    button.classList.add('button');\n    button.id = bId;\n\n    return button;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadButton);\n\n//# sourceURL=webpack:///./src/components/button.js?");

/***/ }),

/***/ "./src/components/iconBtn.js":
/*!***********************************!*\
  !*** ./src/components/iconBtn.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.js */ \"./src/components/button.js\");\n\n\nconst loadIconBtn = (bId, faIcon) => {\n    const icon = document.createElement('i');\n    icon.setAttribute('class', `fa fa-${faIcon}`);\n    icon.setAttribute('aria-hidden', 'true')\n\n    const button = Object(_button_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(bId);\n    button.appendChild(icon);\n\n    return button;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadIconBtn);\n\n//# sourceURL=webpack:///./src/components/iconBtn.js?");

/***/ }),

/***/ "./src/components/nav.js":
/*!*******************************!*\
  !*** ./src/components/nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loadNav = () => {\n    const nav = document.createElement('div');\n    nav.classList.add('topnav');\n\n\n    return nav;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadNav);\n\n//# sourceURL=webpack:///./src/components/nav.js?");

/***/ }),

/***/ "./src/components/panelContainer.js":
/*!******************************************!*\
  !*** ./src/components/panelContainer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loadPanelContainer = () => {\n    const panelContainer = document.createElement('div');\n    panelContainer.classList.add('panel-container');\n\n    return panelContainer;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadPanelContainer);\n\n//# sourceURL=webpack:///./src/components/panelContainer.js?");

/***/ }),

/***/ "./src/forms/addProjectForm.js":
/*!*************************************!*\
  !*** ./src/forms/addProjectForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loadAddProjectForm = () => {\n    const addProject = document.createElement('form');\n    addProject.classList.add('add-project-form');\n\n    addProject.innerHTML =\n        '<input type=\"text\" placeholder=\"Project Name\" class=\"name\" required>' +\n        '<input type=\"submit\" value=\"Submit\">';\n\n    return addProject;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadAddProjectForm);\n\n//# sourceURL=webpack:///./src/forms/addProjectForm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/nav.js */ \"./src/components/nav.js\");\n/* harmony import */ var _components_iconBtn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/iconBtn.js */ \"./src/components/iconBtn.js\");\n/* harmony import */ var _components_panelContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/panelContainer.js */ \"./src/components/panelContainer.js\");\n/* harmony import */ var _forms_addProjectForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/addProjectForm.js */ \"./src/forms/addProjectForm.js\");\n\n\n\n\n\nconst content = document.querySelector('#content');\n\n//configure \"button nav\" and \"panel container\" elements\nconst nav = Object(_components_nav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst panelContainer = Object(_components_panelContainer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nconst btnLayout = Object(_components_iconBtn_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('layout', 'list-ul');\nconst btnColor = Object(_components_iconBtn_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('color', 'lightbulb-o');\nconst btnAddProject = Object(_components_iconBtn_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('add', 'plus');\n\nnav.appendChild(btnLayout);\nnav.appendChild(btnColor);\nnav.appendChild(btnAddProject);\n\ncontent.appendChild(nav);\ncontent.appendChild(panelContainer);\n\n//\"add project\" script\nconst addProjectForm = Object(_forms_addProjectForm_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\ndocument.querySelector('.add-project-form').onsubmit = () => {\n    const name = document.querySelector('.name').value;\n    \n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });