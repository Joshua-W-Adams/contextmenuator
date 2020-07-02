var contextmenuator =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * npm Entry File
 * (c) 2020 Joshua Adams
 */

/**
 * index.js is the default 'entry file' for npm.
 * This means that any require('package name') or import 'package name'
 * statements will refer to this file.
 */
var pkg = __webpack_require__(1); // export a file with the same name as the package by default


module.exports = __webpack_require__(2)("./".concat(pkg.name, ".js"));

/***/ }),
/* 1 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"contextmenuator\",\"version\":\"1.0.1\",\"description\":\"A JavaScript component for creating custom context menus\",\"main\":\"index.js\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/Joshua-W-Adams/context-menu.js.git\"},\"author\":\"Joshua Adams\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/Joshua-W-Adams/context-menu.js/issues\"},\"homepage\":\"https://github.com/Joshua-W-Adams/context-menu.js#readme\",\"devDependencies\":{\"@babel/core\":\"^7.8.4\",\"@babel/preset-env\":\"^7.8.4\",\"babel-loader\":\"^8.0.6\",\"eslint-config-airbnb-base\":\"^14.0.0\",\"eslint-plugin-import\":\"^2.20.0\",\"express\":\"^4.17.1\",\"gulp\":\"^4.0.2\",\"gulp-concat\":\"^2.6.1\",\"gulp-eslint\":\"^6.0.0\",\"gulp-minify-css\":\"^1.2.4\",\"gulp-rename\":\"^2.0.0\",\"gulp-sass\":\"^4.0.2\",\"gulp-stylelint\":\"^13.0.0\",\"stylelint\":\"^13.0.0\",\"stylelint-config-recommended\":\"^3.0.0\",\"webpack-stream\":\"^5.2.1\"},\"dependencies\":{\"gulp-nodemon\":\"^2.5.0\"}}");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./contextmenuator.js": 3
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Context Menu
 * UI custom context menu component
 * (c) 2020 Joshua Adams
 */

/* ============================== Import Modules ============================ */
// N/A

/* ================================ Variables =============================== */
// N/A

/* ============================= Private Methods ============================ */
function _addElement(parent, type) {
  var element = document.createElement(type);
  parent.appendChild(element);
  return element;
}

function _removeHoverEffect(menu) {
  var menuitems = menu.children;

  for (var i = 0; i < menuitems.length; i++) {
    var menuitem = menuitems[i];
    menuitem.style.borderLeft = '4px solid transparent';
    menuitem.style.backgroundColor = '';

    if (menuitem.tagName.toLowerCase() === 'menu') {
      menuitem.style.backgroundColor = 'rgba(255,255,255,1)';

      _removeHoverEffect(menuitem);
    }
  }
}

function _addHoverEffect(menuitem) {
  menuitem.style.borderLeft = '4px solid rgba(28,144,243,1)';
  menuitem.style.backgroundColor = 'rgba(232,240,254,1)';
}

function _displaySubMenu(menu, menuitem, submenu) {
  var dims = menuitem.getBoundingClientRect();
  submenu.style.display = 'block';
  submenu.style.left = "".concat(dims.right + parseFloat(menu.style.borderWidth) + 1, "px");
  submenu.style.top = "".concat(dims.top - dims.height / 2, "px");
}

function _displayMenu(event, menu) {
  var tagName = event.target.tagName.toLowerCase();

  if (tagName !== 'menu' && tagName !== 'menuitem') {
    menu.style.display = 'block';
    menu.style.left = "".concat(event.pageX - 10, "px");
    menu.style.top = "".concat(event.pageY - 10, "px");
  }
}

function _hideSubMenus(menu) {
  var menuitems = menu.children;

  for (var i = 0; i < menuitems.length; i++) {
    var menuitem = menuitems[i];

    if (menuitem.tagName.toLowerCase() === 'menu') {
      menuitem.style.display = 'none';
      menuitem.style.left = '';
      menuitem.style.top = '';

      _hideSubMenus(menuitem);
    }
  }
}

function _hideMenu(menu) {
  menu.style.display = 'none';
  menu.style.left = '';
  menu.style.top = '';

  _hideSubMenus(menu);
}

function _addListener(element, menu) {
  if (element.addEventListener) {
    // context menu event listener
    element.addEventListener('contextmenu', function listener(e) {
      _hideMenu(menu);

      _removeHoverEffect(menu);

      _displayMenu(e, menu);

      e.preventDefault();
    }, false); // single click event listener - added to entire html document so menu always
    // hiddden no matter where user clicks

    document.addEventListener('click', function listener() {
      _hideMenu(menu);
    }, false);
  } else {
    element.attachEvent('oncontextmenu', function listener() {
      window.event.returnValue = false;
    });
  }
}

function _applyRender(element, properties) {
  var arr = Object.keys(properties);

  for (var i = 0; i < arr.length; i++) {
    var prop = arr[i];

    if (_typeof(properties[prop]) === 'object' && properties[prop] !== null) {
      _applyRender(element[prop], properties[prop]);
    } else {
      element[prop] = properties[prop];
    }
  }

  return element;
}

function _menuRenderer() {
  var menu = {};
  menu["class"] = 'context-menu-menu';
  menu.style = {};
  menu.style.fontFamily = 'Arial';
  menu.style.fontSize = '13px';
  menu.style.width = '175px';
  menu.style.padding = '0px';
  menu.style.border = '1px solid rgba(255,255,255,1)';
  menu.style.backgroundColor = 'rgba(255,255,255,1)';
  menu.style.whiteSpace = 'nowrap';
  menu.style.boxShadow = '2px 2px 4px 0 #ccc';
  menu.style.cursor = 'pointer';
  return menu;
}

function _menuItemRenderer() {
  var menuitem = {};
  menuitem["class"] = 'context-menu-menu__menuitem';
  menuitem.style = {};
  menuitem.style.padding = '5px';
  menuitem.style.borderLeft = '4px solid transparent';
  menuitem.style.borderBottom = 'solid 1px rgba(218,220,224,1)';
  return menuitem;
}

function _addMenu(frag, options) {
  var cnf = {
    renderer: options.menuRenderer || _menuRenderer
  };

  var menu = _addElement(frag, 'menu');

  menu.style.display = 'none';
  menu.style.position = 'fixed';
  menu.style.zIndex = 100;
  var render = cnf.renderer();

  _applyRender(menu, render);

  return menu;
}

function _addSubMenuIndicator(menuitem) {
  var indicator = _addElement(menuitem, 'table');

  indicator.innerHTML = '&#9658';
  indicator.style["float"] = 'right';
  indicator.style.fontSize = '10px';
}

function _addMenuItemsRecursive(menu, menuitems, renderer, options) {
  // add all items to context menu
  var props = Object.keys(menuitems);

  var _loop = function _loop(i) {
    var menuitem = _addElement(menu, 'menuitem');

    var render = renderer();
    var prop = props[i];
    menuitem.innerHTML = prop;
    menuitem.style.display = 'block';

    _applyRender(menuitem, render); // add menu item functionality


    menuitem.onmouseover = function onmouseover() {
      _removeHoverEffect(menuitem.parentNode);

      _addHoverEffect(menuitem);

      _hideSubMenus(menu);
    }; // rescursively call function if a submenu is found


    if (_typeof(menuitems[prop]) === 'object' && menuitems[prop] !== null) {
      _addSubMenuIndicator(menuitem);

      var submenu = _addMenu(menu, options);

      menuitem.onmouseover = function onmouseover() {
        _removeHoverEffect(menuitem.parentNode);

        _addHoverEffect(menuitem);

        _hideSubMenus(menu);

        return _displaySubMenu(menu, menuitem, submenu);
      };

      _addMenuItemsRecursive(submenu, menuitems[prop], renderer, options);
    } else {
      menuitem.onclick = menuitems[prop];
    }
  };

  for (var i = 0; i < props.length; i++) {
    _loop(i);
  }

  return menu;
}

function _addMenuItems(menu, options) {
  var cnf = {
    items: options.items,
    renderer: options.itemRenderer || _menuItemRenderer
  };

  _addMenuItemsRecursive(menu, cnf.items, cnf.renderer, options);
}
/* ============================== Public Methods ============================ */

/**
 * Example inputs for public API of module
 */
// const exampleOptions = {
//   // div to apply custom context menu to
//   'div': 'container',
//   // renderer for applying css and styles to entire context menu
//   'menuRenderer': function () {},
//   // renderer for applying css and styles to each row in the context menu
//   'itemRenderer': function () {},
//   // menu items and sub items
//   'items': {
//       // parent menu item example with on click function
//       'context-menu-item-1' : function() {},
//       'context-menu-item-2' : {
//         // child menu item example with onclick function
//         'context-menu-item-2.1': function() {},
//         'context-menu-item-2.2': {
//           "context-menu-item-2.2.1" : function() {},
//           "context-menu-item-2.2.2" : function() {}
//         }
//       }
//   }
// }


function init(options) {
  // Create DOM fragment
  var frag = document.createDocumentFragment(); // Create context menu

  var menu = _addMenu(frag, options); // Add context menu items


  _addMenuItems(menu, options); // Override default context menu


  var div = document.getElementById(options.div);

  _addListener(div, menu); // Append fragment to DOM


  div.appendChild(menu);
}
/* =========================== Export Public APIs =========================== */


module.exports = {
  init: init
};

/***/ })
/******/ ]);
//# sourceMappingURL=contextmenuator.js.map