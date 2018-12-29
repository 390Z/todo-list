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
eval("__webpack_require__.r(__webpack_exports__);\nconst loadButton = (bId, bText) => {\n    const button = document.createElement('button');\n    // Set button's class\n    button.classList.add('button');\n    // Set button's id\n    button.id = bId;\n    // Set button's text\n    const buttonText = document.createTextNode(bText);\n    button.appendChild(buttonText);\n\n    return button;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadButton);\n\n//# sourceURL=webpack:///./src/components/button.js?");

/***/ }),

/***/ "./src/components/element.js":
/*!***********************************!*\
  !*** ./src/components/element.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loadElement = (tag, text, className) => {\n    // 'tag' parameter configuration\n    const element = document.createElement(`${tag}`);\n\n    // 'text' parameter configuration\n    if (text === null) {\n        text = null;\n    } else {\n        const textNode = document.createTextNode(`${text}`);\n        element.appendChild(textNode);\n    }\n    \n    // 'className' parameter configuration\n    if (className === null) {\n        className = null;\n    } else {\n        element.classList.add(`${className}`);\n    }\n\n    return element;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadElement);\n\n//# sourceURL=webpack:///./src/components/element.js?");

/***/ }),

/***/ "./src/components/iconBtn.js":
/*!***********************************!*\
  !*** ./src/components/iconBtn.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.js */ \"./src/components/button.js\");\n\n\nconst loadIconBtn = (bId, faIcon) => {\n    const icon = document.createElement('i');\n    icon.setAttribute('class', `fa fa-${faIcon}`);\n    icon.setAttribute('aria-hidden', 'true')\n\n    const button = Object(_button_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(bId, '');\n    button.appendChild(icon);\n\n    return button;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadIconBtn);\n\n//# sourceURL=webpack:///./src/components/iconBtn.js?");

/***/ }),

/***/ "./src/forms/formFunctions.js":
/*!************************************!*\
  !*** ./src/forms/formFunctions.js ***!
  \************************************/
/*! exports provided: showForm, hideForm, submitForm, fetchProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showForm\", function() { return showForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideForm\", function() { return hideForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submitForm\", function() { return submitForm; });\n/* harmony import */ var _sections_projectFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sections/projectFunctions.js */ \"./src/sections/projectFunctions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fetchProjects\", function() { return _sections_projectFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchProjects\"]; });\n\n\n\nconst showForm = () => {\n    const modal = document.querySelector('.npf-bg');\n    modal.style.display = 'block';\n}\n\nconst hideForm = () => {\n    const modal = document.querySelector('.npf-bg');\n    modal.style.display = 'none';\n}\n\nconst submitForm = () => {\n    console.log('Submit Form');\n    \n    // Get form values\n    const npName = document.querySelector('.npf-name').value;\n\n    // Init project object\n    const project = {\n        name: npName\n    }\n\n    // Test if form is empty, then test if projects is null\n    if (npName === '') {\n        return;\n    } else if (localStorage.getItem('projects') === null) {\n        const projects = [];\n        projects.push(project);\n        localStorage.setItem('projects', JSON.stringify(projects));\n    } else {\n        const projects = JSON.parse(localStorage.getItem('projects'));\n        projects.push(project);\n        localStorage.setItem('projects', JSON.stringify(projects));\n    }\n\n    Object(_sections_projectFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"fetchProjects\"])();\n    resetForm();\n}\n\nconst resetForm = () => {\n    document.querySelector('.npf-name').value = '';\n}\n\n\n\n//# sourceURL=webpack:///./src/forms/formFunctions.js?");

/***/ }),

/***/ "./src/forms/newProjectForm.js":
/*!*************************************!*\
  !*** ./src/forms/newProjectForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/button.js */ \"./src/components/button.js\");\n/* harmony import */ var _forms_formFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forms/formFunctions.js */ \"./src/forms/formFunctions.js\");\n\n\n\nconst loadNewProjectForm = () => {\n    // Modal setup and new project form (npf) sections\n    const bg = document.createElement('div');\n    bg.classList.add('npf-bg');\n    \n    const npf = document.createElement('div');\n    const npfHeader = document.createElement('div');\n    const npfFields = document.createElement('div');\n    const npfButtons = document.createElement('div');\n\n    npf.classList.add('npf');\n    npfHeader.classList.add('npf-header');\n    npfFields.classList.add('npf-fields');\n    npfButtons.classList.add('npf-buttons');\n\n    // npf Header\n    const title = document.createElement('div');\n    const titleText = document.createTextNode('New Project');\n    title.classList.add('npf-title');\n    title.appendChild(titleText);\n\n    npfHeader.appendChild(title);\n\n    // npf Fields\n    const name = document.createElement('input');\n    name.classList.add('npf-name');\n    name.setAttribute('type', 'text');\n    name.setAttribute('placeholder', 'Project Name');\n\n    npfFields.appendChild(name);\n\n    // npf Buttons\n    const btnSubmit = Object(_components_button_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('add-project', 'Add Project');\n    btnSubmit.addEventListener('click', _forms_formFunctions_js__WEBPACK_IMPORTED_MODULE_1__[\"hideForm\"]);\n    btnSubmit.addEventListener('click', _forms_formFunctions_js__WEBPACK_IMPORTED_MODULE_1__[\"submitForm\"]);\n\n    const btnCancel = Object(_components_button_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('cancel', 'Cancel');\n    btnCancel.addEventListener('click', _forms_formFunctions_js__WEBPACK_IMPORTED_MODULE_1__[\"hideForm\"]);\n\n    npfButtons.appendChild(btnSubmit);\n    npfButtons.appendChild(btnCancel);\n\n    // Append parts to npf, npf to bg\n    npf.appendChild(npfHeader);\n    npf.appendChild(npfFields);\n    npf.appendChild(npfButtons);\n    bg.appendChild(npf);\n\n    return bg;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadNewProjectForm);\n\n//# sourceURL=webpack:///./src/forms/newProjectForm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sections_controlsNav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/controlsNav.js */ \"./src/sections/controlsNav.js\");\n/* harmony import */ var _sections_projectsDiv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/projectsDiv.js */ \"./src/sections/projectsDiv.js\");\n/* harmony import */ var _forms_newProjectForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/newProjectForm.js */ \"./src/forms/newProjectForm.js\");\n/* harmony import */ var _forms_formFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms/formFunctions.js */ \"./src/forms/formFunctions.js\");\n\n\n\n\n\nconst content = document.querySelector('#content');\n\n// Load controlsNav.js\nconst controlsNav = Object(_sections_controlsNav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst panelContainer = Object(_sections_projectsDiv_js__WEBPACK_IMPORTED_MODULE_1__[\"loadProjectsDiv\"])();\n\n// Load panelContainer\n\nconst npf = Object(_forms_newProjectForm_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\ncontent.appendChild(controlsNav);\ncontent.appendChild(panelContainer);\ncontent.appendChild(npf);\n\nwindow.onload = _forms_formFunctions_js__WEBPACK_IMPORTED_MODULE_3__[\"fetchProjects\"];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sections/controlsNav.js":
/*!*************************************!*\
  !*** ./src/sections/controlsNav.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_iconBtn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/iconBtn.js */ \"./src/components/iconBtn.js\");\n/* harmony import */ var _forms_formFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forms/formFunctions.js */ \"./src/forms/formFunctions.js\");\n\n\n\nconst loadControlsNav = () => {\n    //create nav to hold buttons\n    const nav = document.createElement('div');\n    nav.className += 'controls-nav';\n\n    //create buttons\n    const btnLayout = Object(_components_iconBtn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('layout', 'list-ul');\n    const btnColor = Object(_components_iconBtn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('color', 'lightbulb-o');\n    const btnAdd = Object(_components_iconBtn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('add', 'plus');\n\n    //add button functions\n    //btnLayout.addEventListener('click', btnLayoutFcn);\n    //btnColor.addEventListener('click', btnColorFcn);\n    btnAdd.addEventListener('click', _forms_formFunctions_js__WEBPACK_IMPORTED_MODULE_1__[\"showForm\"]);\n\n    //append buttons to nav\n    nav.appendChild(btnLayout);\n    nav.appendChild(btnColor);\n    nav.appendChild(btnAdd);\n\n    return nav;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadControlsNav);\n\n//# sourceURL=webpack:///./src/sections/controlsNav.js?");

/***/ }),

/***/ "./src/sections/projectFunctions.js":
/*!******************************************!*\
  !*** ./src/sections/projectFunctions.js ***!
  \******************************************/
/*! exports provided: fetchProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchProjects\", function() { return fetchProjects; });\n/* harmony import */ var _components_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/button.js */ \"./src/components/button.js\");\n/* harmony import */ var _components_iconBtn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/iconBtn.js */ \"./src/components/iconBtn.js\");\n/* harmony import */ var _components_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/element.js */ \"./src/components/element.js\");\n\n // Parameters: (bId, faIcon)\n // Parameters: (tag, text, className)\n\nconst fetchProjects = () => {\n    const projects = JSON.parse(localStorage.getItem('projects'));\n    const projectsDisplay = document.querySelector('.panel-container');\n    projectsDisplay.innerHTML = '';\n\n    for (let i = 0, n = projects.length; i < n; i++) {\n        const name = projects[i].name;\n        \n        const projectPanel = Object(_components_element_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('div', null, 'project-panel');\n        projectPanel.addEventListener('click', openProject);\n        const projectName = Object(_components_element_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('div', name, 'project-name');\n        const projectMenu = Object(_components_element_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('div', null, 'panel-buttons');\n        const menuButton = Object(_components_iconBtn_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('options', 'ellipsis-v');\n        menuButton.addEventListener('click', showProjectOptions);\n        const menuContents = Object(_components_element_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('div', null, 'menu-contents');\n        const btnDelete = Object(_components_element_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('button', 'Delete', null);\n        btnDelete.addEventListener('click', deleteProject);\n\n        menuContents.appendChild(btnDelete);\n        projectMenu.appendChild(menuButton);\n        projectMenu.appendChild(menuContents);\n        projectPanel.appendChild(projectMenu)\n        projectPanel.appendChild(projectName);\n        projectsDisplay.appendChild(projectPanel);\n    }\n}\n\nconst openProject = () => {\n\n}\n\nconst deleteProject = () => {\n    const projects = JSON.parse(localStorage.getItem('projects'));\n    //const projectName = document.querySelector('.project-name').innerHTML;\n    const projectIndex = projects.findIndex(project => project === ProjectName);\n}\n\nconst showProjectOptions = () => {\n    document.querySelector('.project-options-dropdown').classList.toggle('show');\n}\n\nconst hideProjectOptions = () => {\n    window.onclick = (e) => {\n        if (!e.target.matches('.options')) {\n            const optionsDropdown = document.querySelector('project-options-dropdown');\n            for (let i = 0, n = optionsDropdown.length; i < n; i++) {\n                const openDropdown = optionsDropdown[i];\n                if (openDropdown.classList.contains('show')) {\n                    openDropdown.classList.remove('show');\n                }\n            }\n        }\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/sections/projectFunctions.js?");

/***/ }),

/***/ "./src/sections/projectsDiv.js":
/*!*************************************!*\
  !*** ./src/sections/projectsDiv.js ***!
  \*************************************/
/*! exports provided: loadProjectsDiv, loadOptionsDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadProjectsDiv\", function() { return loadProjectsDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadOptionsDropdown\", function() { return loadOptionsDropdown; });\n// import functions from projectFunctions.js\n\n/*\n1) Load Options Dropdown Menu functionality\n    a) click Options btn -> SHOW  menu\n    b) click Delete btn -> DELETE project, HIDE menu\n            -SHOW confirm/cancel popup\n       click Anywhere Else -> HIDE menu\n\n2) Load 'Click' Project functionality\n    a) click Project -> OPEN project animation into full window\n*/\n\n\nconst loadProjectsDiv = () => {\n    const panelContainer = document.createElement('div');\n    panelContainer.classList.add('panel-container');\n\n    return panelContainer;\n}\n\nconst loadOptionsDropdown = () => {\n    const optionsDropdown = document.createElement('div');\n    optionsDropdown.classList.add('project-options-dropdown');\n\n    const btnDelete = document.createElement('button');\n    const btnDeleteText = document.createTextNode('Delete');\n    btnDelete.appendChild(btnDeleteText);\n    btnDelete.addEventListener('click', deleteProject);\n\n    optionsDropdown.appendChild(btnDelete);\n}\n\n\n\n//# sourceURL=webpack:///./src/sections/projectsDiv.js?");

/***/ })

/******/ });