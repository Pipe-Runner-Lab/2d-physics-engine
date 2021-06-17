/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/base.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/base.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n  margin: 0px;\n  padding: 0px;\n}\n\ncanvas {\n  /* TODO canvas has a bottom margin caused due to line height of inline-elements */\n  display: block;\n}\n\n#scene-wrapper {\n  padding: 16px;\n  border-radius: 4px;\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n}\n\n#scene-container {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/base.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,iFAAiF;EACjF,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB","sourcesContent":["html, body {\n  margin: 0px;\n  padding: 0px;\n}\n\ncanvas {\n  /* TODO canvas has a bottom margin caused due to line height of inline-elements */\n  display: block;\n}\n\n#scene-wrapper {\n  padding: 16px;\n  border-radius: 4px;\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n}\n\n#scene-container {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/base.css":
/*!**********************!*\
  !*** ./src/base.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./base.css */ "./node_modules/css-loader/dist/cjs.js!./src/base.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/ball/ball.ts":
/*!*********************************!*\
  !*** ./src/assets/ball/ball.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/constant */ "./src/utils/constant.ts");
/* harmony import */ var utils_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/vector */ "./src/utils/vector.ts");


var Ball = /** @class */ (function () {
    function Ball(_a) {
        var x = _a.x, y = _a.y, _b = _a.radius, radius = _b === void 0 ? 1 : _b, _c = _a.mass, mass = _c === void 0 ? 1 : _c;
        this.vel = new utils_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2D(0, 0);
        this.isGrabbed = false;
        this.guideLines = false;
        this.isFixed = false;
        this.radius = radius * mass;
        this.mass = mass;
        this.pos = new utils_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2D(x, y);
        this.grabPos = new utils_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2D(x, y);
    }
    Ball.prototype.setGuideLines = function (value) {
        this.guideLines = value;
    };
    Ball.prototype.shouldGrab = function (x, y) {
        return Math.pow((x - this.pos.i), 2) + Math.pow((y - this.pos.j), 2) < Math.pow(this.radius, 2);
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Ball.prototype.setGrab = function (x, y) {
        this.isGrabbed = true;
    };
    Ball.prototype.unsetGrab = function () {
        this.isGrabbed = false;
    };
    Ball.prototype.calculateNextState = function (_a) {
        var dt = _a.dt, force = _a.force;
        var acc = utils_constant__WEBPACK_IMPORTED_MODULE_0__.ACC_GRAVITY;
        acc = force ? acc.add(force).mul(1 / this.mass) : acc;
        var dVel = acc === null || acc === void 0 ? void 0 : acc.mul(dt);
        var dPos = this.vel.mul(dt);
        if (dVel)
            this.vel = this.vel.add(dVel);
        this.pos = this.pos.add(dPos);
        this.grabPos = this.pos;
    };
    Ball.prototype.render = function (ctx) {
        ctx.beginPath();
        ctx.fillStyle = 'orange';
        if (this.isGrabbed)
            ctx.fillStyle = 'red';
        if (this.vel.mag())
            ctx.fillStyle = 'blue';
        ctx.strokeStyle = 'red';
        ctx.arc(this.pos.i, this.pos.j, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    };
    return Ball;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);
/**
 * 1. We are not considering t = 0 case
 * 2. Calculate dVel and dPost first, then update together
 */


/***/ }),

/***/ "./src/assets/ball/index.ts":
/*!**********************************!*\
  !*** ./src/assets/ball/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball */ "./src/assets/ball/ball.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ball__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./src/assets/wall/index.ts":
/*!**********************************!*\
  !*** ./src/assets/wall/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wall */ "./src/assets/wall/wall.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_wall__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./src/assets/wall/wall.ts":
/*!*********************************!*\
  !*** ./src/assets/wall/wall.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/vector */ "./src/utils/vector.ts");

var Wall = /** @class */ (function () {
    function Wall(_a) {
        var x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2;
        this.vel = new utils_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 0);
        this.isGrabbed = false;
        this.guideLines = false;
        this.isFixed = true;
        this.startPos = new utils_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2D(x1, y1);
        this.endPos = new utils_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2D(x2, y2);
        this.mass = Number.POSITIVE_INFINITY;
        this.grabPos = new utils_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2D((x1 + x2) / 2, (y1 + y2) / 2);
    }
    Wall.prototype.setGuideLines = function (value) {
        this.guideLines = value;
    };
    Wall.prototype.shouldGrab = function (x, y) {
        return !this.isFixed;
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Wall.prototype.setGrab = function (x, y) {
        this.isGrabbed = true;
    };
    Wall.prototype.unsetGrab = function () {
        this.isGrabbed = false;
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // eslint-disable-next-line class-methods-use-this
    Wall.prototype.calculateNextState = function (_a) {
        var dt = _a.dt, force = _a.force;
    };
    Wall.prototype.render = function (ctx) {
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.moveTo(this.startPos.i, this.startPos.j);
        ctx.lineTo(this.endPos.i, this.endPos.j);
        ctx.stroke();
        ctx.closePath();
    };
    return Wall;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wall);


/***/ }),

/***/ "./src/engine/engine.ts":
/*!******************************!*\
  !*** ./src/engine/engine.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var scene_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scene/types */ "./src/scene/types.ts");
/* harmony import */ var utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/constant */ "./src/utils/constant.ts");
/* harmony import */ var utils_vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/vector */ "./src/utils/vector.ts");
/* harmony import */ var _utils_penetration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/penetration */ "./src/engine/utils/penetration.ts");
/* harmony import */ var _utils_collision__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/collision */ "./src/engine/utils/collision.ts");





var Engine = /** @class */ (function () {
    function Engine(_a) {
        var _this = this;
        var scene = _a.scene, _b = _a.guideLines, guideLines = _b === void 0 ? false : _b;
        this.scene = scene;
        // array of all objects add to engine
        this.assetList = [];
        // variables to deal with mouse grabs
        this.grabbedAsset = null;
        this.mousePos = new utils_vector__WEBPACK_IMPORTED_MODULE_2__.Vector2D(0, 0);
        // if activated, helper lines will be available
        this.guideLines = guideLines;
        // Event to deal with mouse grab events
        this.scene.registerObserver(scene_types__WEBPACK_IMPORTED_MODULE_0__.SceneEventType.MOUSE_DOWN, this.findGrabbedAsset.bind(this));
        this.scene.registerObserver(scene_types__WEBPACK_IMPORTED_MODULE_0__.SceneEventType.MOUSE_MOVE, function (x, y) {
            _this.mousePos.i = x;
            _this.mousePos.j = y;
        });
        this.scene.registerObserver(scene_types__WEBPACK_IMPORTED_MODULE_0__.SceneEventType.MOUSE_UP, function (x, y) {
            var _a;
            (_a = _this.grabbedAsset) === null || _a === void 0 ? void 0 : _a.unsetGrab();
            _this.grabbedAsset = null;
        });
    }
    Engine.prototype.addAsset = function (asset) {
        asset.setGuideLines(this.guideLines);
        this.assetList.push(asset);
    };
    Engine.prototype.findGrabbedAsset = function (x, y) {
        var _this = this;
        this.assetList.forEach(function (asset) {
            if (asset.shouldGrab(x, y)) {
                asset.setGrab(x, y);
                _this.grabbedAsset = asset;
            }
        });
    };
    Engine.prototype.renderGuideLines = function () {
        this.scene.ctx.save();
        this.scene.ctx.beginPath();
        this.scene.ctx.strokeStyle = 'green';
        this.scene.ctx.moveTo(this.grabbedAsset.grabPos.i, this.grabbedAsset.grabPos.j);
        this.scene.ctx.lineTo(this.mousePos.i, this.mousePos.j);
        this.scene.ctx.stroke();
        this.scene.ctx.closePath();
        this.scene.ctx.restore();
    };
    Engine.prototype.render = function (t) {
        this.scene.cleanUp();
        for (var i = 0, len = this.assetList.length; i < len; i += 1) {
            var asset = this.assetList[i];
            if (asset === this.grabbedAsset) {
                var forceVec = new utils_vector__WEBPACK_IMPORTED_MODULE_2__.Vector2D(this.mousePos.i - this.grabbedAsset.grabPos.i, this.mousePos.j - this.grabbedAsset.grabPos.j);
                asset.calculateNextState({
                    dt: utils_constant__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_TIME_DELTA,
                    force: forceVec.mul(utils_constant__WEBPACK_IMPORTED_MODULE_1__.FORCE_DILUTION_FACTOR)
                });
            }
            else {
                asset.calculateNextState({ dt: utils_constant__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_TIME_DELTA });
            }
        }
        for (var i = 0, iLen = this.assetList.length; i < iLen - 1; i += 1) {
            var assetL = this.assetList[i];
            for (var j = i + 1; j < iLen; j += 1) {
                var assetR = this.assetList[j];
                var _a = _utils_penetration__WEBPACK_IMPORTED_MODULE_3__.PenetrationKit.isPenetrating(assetL, assetR), isPenetrating = _a.isPenetrating, computationCache = _a.computationCache;
                if (isPenetrating) {
                    _utils_penetration__WEBPACK_IMPORTED_MODULE_3__.PenetrationKit.resolvePenetration(assetL, assetR, computationCache);
                    _utils_collision__WEBPACK_IMPORTED_MODULE_4__.CollisionKit.resolveCollision(assetL, assetR, computationCache);
                }
            }
        }
        for (var i = 0, len = this.assetList.length; i < len; i += 1) {
            var asset = this.assetList[i];
            this.scene.ctx.save();
            asset.render(this.scene.ctx);
            this.scene.ctx.restore();
        }
        if (this.guideLines && this.grabbedAsset)
            this.renderGuideLines();
    };
    return Engine;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Engine);
/**
 * 1. The means of interaction between objects and world is Force and Torque
 * 2. For each frame both force and torque should be nulled to 0 in order to avoid leaks
 */


/***/ }),

/***/ "./src/engine/index.ts":
/*!*****************************!*\
  !*** ./src/engine/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ "./src/engine/engine.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_engine__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./src/engine/utils/collision.ts":
/*!***************************************!*\
  !*** ./src/engine/utils/collision.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollisionKit": () => (/* binding */ CollisionKit)
/* harmony export */ });
/* harmony import */ var assets_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/ball */ "./src/assets/ball/index.ts");
/* harmony import */ var assets_wall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/wall */ "./src/assets/wall/index.ts");


var CollisionKit;
(function (CollisionKit) {
    function resolveCollision(_assetL, _assetR, computationCache) {
        if (_assetL instanceof assets_ball__WEBPACK_IMPORTED_MODULE_0__.default && _assetR instanceof assets_ball__WEBPACK_IMPORTED_MODULE_0__.default) {
            var ballL = _assetL;
            var ballR = _assetR;
            var colNormalVec = computationCache.lineOfActionVector;
            var colNormalUnitVec = colNormalVec.unit();
            var normalInitialVelL = colNormalUnitVec.dot(ballL.vel);
            var normalInitialVelR = colNormalUnitVec.dot(ballR.vel);
            var massSum = ballL.mass + ballR.mass;
            var normalFinalVelL = (normalInitialVelL * (ballL.mass - ballR.mass) + 2 * ballR.mass * normalInitialVelR) /
                massSum;
            var normalFinalVelR = (normalInitialVelR * (ballR.mass - ballL.mass) + 2 * ballL.mass * normalInitialVelL) /
                massSum;
            ballL.vel = ballL.vel
                .add(colNormalUnitVec.mul(-normalInitialVelL))
                .add(colNormalUnitVec.mul(normalFinalVelL));
            ballR.vel = ballR.vel
                .add(colNormalUnitVec.mul(-normalInitialVelR))
                .add(colNormalUnitVec.mul(normalFinalVelR));
        }
        else if ((_assetL instanceof assets_ball__WEBPACK_IMPORTED_MODULE_0__.default && _assetR instanceof assets_wall__WEBPACK_IMPORTED_MODULE_1__.default) ||
            (_assetL instanceof assets_wall__WEBPACK_IMPORTED_MODULE_1__.default && _assetR instanceof assets_ball__WEBPACK_IMPORTED_MODULE_0__.default)) {
            var ball = (_assetL instanceof assets_ball__WEBPACK_IMPORTED_MODULE_0__.default ? _assetL : _assetR);
            var colNormalVec = computationCache.lineOfActionVector;
            var colNormalUnitVec = colNormalVec.unit();
            var normalInitialVelL = colNormalUnitVec.dot(ball.vel);
            ball.vel = ball.vel.add(colNormalUnitVec.mul(-2 * normalInitialVelL));
        }
    }
    CollisionKit.resolveCollision = resolveCollision;
})(CollisionKit || (CollisionKit = {}));


/***/ }),

/***/ "./src/engine/utils/penetration.ts":
/*!*****************************************!*\
  !*** ./src/engine/utils/penetration.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PenetrationKit": () => (/* binding */ PenetrationKit)
/* harmony export */ });
/* harmony import */ var assets_ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/ball */ "./src/assets/ball/index.ts");
/* harmony import */ var assets_wall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/wall */ "./src/assets/wall/index.ts");


var PenetrationKit;
(function (PenetrationKit) {
    function isPenetrating(_assetL, _assetR) {
        if (_assetL instanceof assets_ball__WEBPACK_IMPORTED_MODULE_0__.default && _assetR instanceof assets_ball__WEBPACK_IMPORTED_MODULE_0__.default) {
            var ballL = _assetL;
            var ballR = _assetR;
            if (ballL.pos.sub(ballR.pos).mag() < ballL.radius + ballR.radius) {
                return {
                    isPenetrating: true,
                    computationCache: {
                        lineOfActionVector: ballL.pos.sub(ballR.pos)
                    }
                };
            }
        }
        else if ((_assetL instanceof assets_ball__WEBPACK_IMPORTED_MODULE_0__.default && _assetR instanceof assets_wall__WEBPACK_IMPORTED_MODULE_1__.default) ||
            (_assetL instanceof assets_wall__WEBPACK_IMPORTED_MODULE_1__.default && _assetR instanceof assets_ball__WEBPACK_IMPORTED_MODULE_0__.default)) {
            var ball = (_assetL instanceof assets_ball__WEBPACK_IMPORTED_MODULE_0__.default ? _assetL : _assetR);
            var wall = (_assetR instanceof assets_wall__WEBPACK_IMPORTED_MODULE_1__.default ? _assetR : _assetL);
            var wallVec = wall.startPos.sub(wall.endPos);
            var wallUnitVec = wallVec.unit();
            var nearestPointOnLine = wall.startPos;
            var projectionVec = void 0;
            var projection = wall.startPos.sub(ball.pos).dot(wallUnitVec);
            if (projection > 0) {
                nearestPointOnLine = wall.endPos;
                var secondaryProjection = wall.endPos.sub(ball.pos).dot(wallUnitVec);
                if (secondaryProjection < 0) {
                    projectionVec = wallUnitVec.mul(projection);
                    nearestPointOnLine = wall.startPos.sub(projectionVec);
                }
            }
            if (ball.pos.sub(nearestPointOnLine).mag() < ball.radius) {
                return {
                    isPenetrating: true,
                    computationCache: {
                        lineOfActionVector: nearestPointOnLine.sub(ball.pos),
                        nearestPointOnLine: nearestPointOnLine
                    }
                };
            }
        }
        return { isPenetrating: false };
    }
    PenetrationKit.isPenetrating = isPenetrating;
    function resolvePenetration(_assetL, _assetR, computationCache) {
        if (_assetL instanceof assets_ball__WEBPACK_IMPORTED_MODULE_0__.default && _assetR instanceof assets_ball__WEBPACK_IMPORTED_MODULE_0__.default) {
            var ballL = _assetL;
            var ballR = _assetR;
            var penNormalVec = computationCache.lineOfActionVector;
            var penNormalUnitVec = penNormalVec.unit();
            var semiPenDist = (ballL.radius + ballR.radius - penNormalVec.mag()) / 2;
            ballL.pos = ballL.pos.add(penNormalUnitVec.mul(semiPenDist));
            ballR.pos = ballR.pos.add(penNormalUnitVec.mul(-semiPenDist));
        }
        else if ((_assetL instanceof assets_ball__WEBPACK_IMPORTED_MODULE_0__.default && _assetR instanceof assets_wall__WEBPACK_IMPORTED_MODULE_1__.default) ||
            (_assetL instanceof assets_wall__WEBPACK_IMPORTED_MODULE_1__.default && _assetR instanceof assets_ball__WEBPACK_IMPORTED_MODULE_0__.default)) {
            var ball = (_assetL instanceof assets_ball__WEBPACK_IMPORTED_MODULE_0__.default ? _assetL : _assetR);
            var penNormalVec = computationCache.lineOfActionVector, nearestPointOnLine = computationCache.nearestPointOnLine;
            var penDist = ball.radius - ball.pos.sub(nearestPointOnLine).mag();
            var penNormalUnitVec = penNormalVec.unit();
            ball.pos = ball.pos.add(penNormalUnitVec.mul(-penDist));
        }
    }
    PenetrationKit.resolvePenetration = resolvePenetration;
})(PenetrationKit || (PenetrationKit = {}));


/***/ }),

/***/ "./src/scene/index.ts":
/*!****************************!*\
  !*** ./src/scene/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene */ "./src/scene/scene.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_scene__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./src/scene/scene.ts":
/*!****************************!*\
  !*** ./src/scene/scene.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/scene/types.ts");

var Scene = /** @class */ (function () {
    function Scene(options) {
        var _a;
        this._mouseDownObserverList = [];
        this._mouseMoveObserverList = [];
        this._mouseUpObserverList = [];
        this.canvas = document.createElement('canvas');
        this.canvas.height = window.innerHeight - 100;
        this.canvas.width = window.innerWidth - 100;
        this.ctx = this.canvas.getContext('2d');
        var wrapper = document.createElement('div');
        wrapper.setAttribute('id', 'scene-wrapper');
        wrapper.appendChild(this.canvas);
        var container = document.createElement('div');
        container.setAttribute('id', 'scene-container');
        container.appendChild(wrapper);
        document.querySelector('body').appendChild(container);
        this._backgroundColor = (_a = options === null || options === void 0 ? void 0 : options.backgroundColor) !== null && _a !== void 0 ? _a : 'white';
        var rect = this.canvas.getBoundingClientRect();
        this._top = rect.top;
        this._left = rect.left;
        if (options.mouseEvents) {
            this.canvas.addEventListener(_types__WEBPACK_IMPORTED_MODULE_0__.SceneEventType.MOUSE_DOWN, this._triggerMouseDownObservers.bind(this));
            this.canvas.addEventListener(_types__WEBPACK_IMPORTED_MODULE_0__.SceneEventType.MOUSE_MOVE, this._triggerMouseMoveObserver.bind(this));
            this.canvas.addEventListener(_types__WEBPACK_IMPORTED_MODULE_0__.SceneEventType.MOUSE_UP, this._triggerMouseUpObservers.bind(this));
        }
        this.cleanUp();
    }
    Scene.prototype._triggerMouseDownObservers = function (event) {
        var _this = this;
        this._mouseDownObserverList.forEach(function (observer) {
            return observer(event.clientX - _this._left, event.clientY - _this._top);
        });
    };
    Scene.prototype._triggerMouseMoveObserver = function (event) {
        var _this = this;
        this._mouseMoveObserverList.forEach(function (observer) {
            return observer(event.clientX - _this._left, event.clientY - _this._top);
        });
    };
    Scene.prototype._triggerMouseUpObservers = function (event) {
        var _this = this;
        this._mouseUpObserverList.forEach(function (observer) {
            return observer(event.clientX - _this._left, event.clientY - _this._top);
        });
    };
    Scene.prototype.registerObserver = function (eventType, observer) {
        switch (eventType) {
            case _types__WEBPACK_IMPORTED_MODULE_0__.SceneEventType.MOUSE_DOWN:
                this._mouseDownObserverList.push(observer);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_0__.SceneEventType.MOUSE_MOVE:
                this._mouseMoveObserverList.push(observer);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_0__.SceneEventType.MOUSE_UP:
                this._mouseUpObserverList.push(observer);
                break;
            default:
                break;
        }
    };
    Scene.prototype.deregisterObserver = function (eventType, observer) {
        switch (eventType) {
            case _types__WEBPACK_IMPORTED_MODULE_0__.SceneEventType.MOUSE_DOWN:
                this._mouseDownObserverList = this._mouseDownObserverList.filter(function (item) { return item !== observer; });
                break;
            case _types__WEBPACK_IMPORTED_MODULE_0__.SceneEventType.MOUSE_MOVE:
                this._mouseMoveObserverList = this._mouseMoveObserverList.filter(function (item) { return item !== observer; });
                break;
            case _types__WEBPACK_IMPORTED_MODULE_0__.SceneEventType.MOUSE_UP:
                this._mouseUpObserverList = this._mouseUpObserverList.filter(function (item) { return item !== observer; });
                break;
            default:
                break;
        }
    };
    Scene.prototype.cleanUp = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = this._backgroundColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return Scene;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scene);


/***/ }),

/***/ "./src/scene/types.ts":
/*!****************************!*\
  !*** ./src/scene/types.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneEventType": () => (/* binding */ SceneEventType)
/* harmony export */ });
var SceneEventType;
(function (SceneEventType) {
    SceneEventType["MOUSE_DOWN"] = "mousedown";
    SceneEventType["MOUSE_MOVE"] = "mousemove";
    SceneEventType["MOUSE_UP"] = "mouseup";
})(SceneEventType || (SceneEventType = {}));


/***/ }),

/***/ "./src/utils/constant.ts":
/*!*******************************!*\
  !*** ./src/utils/constant.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_TIME_DELTA": () => (/* binding */ DEFAULT_TIME_DELTA),
/* harmony export */   "FORCE_DILUTION_FACTOR": () => (/* binding */ FORCE_DILUTION_FACTOR),
/* harmony export */   "ACC_DILUTION_FACTOR": () => (/* binding */ ACC_DILUTION_FACTOR),
/* harmony export */   "ACC_GRAVITY": () => (/* binding */ ACC_GRAVITY)
/* harmony export */ });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/utils/vector.ts");

var DEFAULT_TIME_DELTA = 1;
var FORCE_DILUTION_FACTOR = 0.1;
var ACC_DILUTION_FACTOR = 0.01;
var ACC_GRAVITY = new _vector__WEBPACK_IMPORTED_MODULE_0__.Vector2D(0, 9.8 * ACC_DILUTION_FACTOR);


/***/ }),

/***/ "./src/utils/vector.ts":
/*!*****************************!*\
  !*** ./src/utils/vector.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vector2D": () => (/* binding */ Vector2D)
/* harmony export */ });
var Vector2D = /** @class */ (function () {
    function Vector2D(i, j) {
        this.i = i;
        this.j = j;
    }
    Vector2D.prototype.add = function (vec) {
        return new Vector2D(this.i + vec.i, this.j + vec.j);
    };
    Vector2D.prototype.sub = function (vec) {
        return new Vector2D(this.i - vec.i, this.j - vec.j);
    };
    Vector2D.prototype.mul = function (scalar) {
        return new Vector2D(this.i * scalar, this.j * scalar);
    };
    Vector2D.prototype.magSqr = function () {
        return Math.pow(this.i, 2) + Math.pow(this.j, 2);
    };
    Vector2D.prototype.mag = function () {
        return Math.sqrt(Math.pow(this.i, 2) + Math.pow(this.j, 2));
    };
    Vector2D.prototype.unit = function () {
        var mag = this.mag();
        return this.mul(1 / mag);
    };
    Vector2D.prototype.dot = function (vec) {
        return this.i * vec.i + this.j * vec.j;
    };
    return Vector2D;
}());

/**
 * 1. Not returning a new object to avoid creation and save performance
 */


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scene */ "./src/scene/index.ts");
/* harmony import */ var engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! engine */ "./src/engine/index.ts");
/* harmony import */ var _base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.css */ "./src/base.css");
/* harmony import */ var assets_ball__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/ball */ "./src/assets/ball/index.ts");
/* harmony import */ var assets_wall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/wall */ "./src/assets/wall/index.ts");
// TODO Why were we using dynamic imports?


// import { test } from '../wasm';



// console.log('I am a fun page');
// test();
var scene = new scene__WEBPACK_IMPORTED_MODULE_0__.default({
    backgroundColor: 'black',
    mouseEvents: true
});
var engine = new engine__WEBPACK_IMPORTED_MODULE_1__.default({ scene: scene, guideLines: true });
engine.addAsset(new assets_ball__WEBPACK_IMPORTED_MODULE_3__.default({ x: 100, y: 100, mass: 50 }));
engine.addAsset(new assets_ball__WEBPACK_IMPORTED_MODULE_3__.default({ x: 300, y: 300, mass: 30 }));
engine.addAsset(new assets_ball__WEBPACK_IMPORTED_MODULE_3__.default({ x: 600, y: 600, mass: 35 }));
engine.addAsset(new assets_ball__WEBPACK_IMPORTED_MODULE_3__.default({ x: 500, y: 100, mass: 40 }));
engine.addAsset(new assets_ball__WEBPACK_IMPORTED_MODULE_3__.default({ x: 150, y: 550, mass: 50 }));
engine.addAsset(new assets_wall__WEBPACK_IMPORTED_MODULE_4__.default({ x1: 40, y1: 40, x2: scene.canvas.width - 40, y2: 40 }));
engine.addAsset(new assets_wall__WEBPACK_IMPORTED_MODULE_4__.default({
    x1: scene.canvas.width - 40,
    y1: 40,
    x2: scene.canvas.width - 40,
    y2: scene.canvas.height - 40
}));
engine.addAsset(new assets_wall__WEBPACK_IMPORTED_MODULE_4__.default({
    x1: 40,
    y1: scene.canvas.height - 40,
    x2: scene.canvas.width - 40,
    y2: scene.canvas.height - 40
}));
engine.addAsset(new assets_wall__WEBPACK_IMPORTED_MODULE_4__.default({ x1: 40, y1: 40, x2: 40, y2: scene.canvas.height - 40 }));
function renderLoop(timestamp) {
    if (timestamp === void 0) { timestamp = 0; }
    engine.render(timestamp);
    requestAnimationFrame(renderLoop);
}
renderLoop();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yZC1waHlzaWNzLWVuZ2luZS8uL3NyYy9iYXNlLmNzcyIsIndlYnBhY2s6Ly8yZC1waHlzaWNzLWVuZ2luZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vMmQtcGh5c2ljcy1lbmdpbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8yZC1waHlzaWNzLWVuZ2luZS8uL3NyYy9iYXNlLmNzcz9lMDk1Iiwid2VicGFjazovLzJkLXBoeXNpY3MtZW5naW5lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLzJkLXBoeXNpY3MtZW5naW5lLy4vc3JjL2Fzc2V0cy9iYWxsL2JhbGwudHMiLCJ3ZWJwYWNrOi8vMmQtcGh5c2ljcy1lbmdpbmUvLi9zcmMvYXNzZXRzL2JhbGwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vMmQtcGh5c2ljcy1lbmdpbmUvLi9zcmMvYXNzZXRzL3dhbGwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vMmQtcGh5c2ljcy1lbmdpbmUvLi9zcmMvYXNzZXRzL3dhbGwvd2FsbC50cyIsIndlYnBhY2s6Ly8yZC1waHlzaWNzLWVuZ2luZS8uL3NyYy9lbmdpbmUvZW5naW5lLnRzIiwid2VicGFjazovLzJkLXBoeXNpY3MtZW5naW5lLy4vc3JjL2VuZ2luZS9pbmRleC50cyIsIndlYnBhY2s6Ly8yZC1waHlzaWNzLWVuZ2luZS8uL3NyYy9lbmdpbmUvdXRpbHMvY29sbGlzaW9uLnRzIiwid2VicGFjazovLzJkLXBoeXNpY3MtZW5naW5lLy4vc3JjL2VuZ2luZS91dGlscy9wZW5ldHJhdGlvbi50cyIsIndlYnBhY2s6Ly8yZC1waHlzaWNzLWVuZ2luZS8uL3NyYy9zY2VuZS9pbmRleC50cyIsIndlYnBhY2s6Ly8yZC1waHlzaWNzLWVuZ2luZS8uL3NyYy9zY2VuZS9zY2VuZS50cyIsIndlYnBhY2s6Ly8yZC1waHlzaWNzLWVuZ2luZS8uL3NyYy9zY2VuZS90eXBlcy50cyIsIndlYnBhY2s6Ly8yZC1waHlzaWNzLWVuZ2luZS8uL3NyYy91dGlscy9jb25zdGFudC50cyIsIndlYnBhY2s6Ly8yZC1waHlzaWNzLWVuZ2luZS8uL3NyYy91dGlscy92ZWN0b3IudHMiLCJ3ZWJwYWNrOi8vMmQtcGh5c2ljcy1lbmdpbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vMmQtcGh5c2ljcy1lbmdpbmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vMmQtcGh5c2ljcy1lbmdpbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzJkLXBoeXNpY3MtZW5naW5lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vMmQtcGh5c2ljcy1lbmdpbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8yZC1waHlzaWNzLWVuZ2luZS8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0Esc0RBQXNELGdCQUFnQixpQkFBaUIsR0FBRyxZQUFZLHlHQUF5RyxHQUFHLG9CQUFvQixrQkFBa0IsdUJBQXVCLDRDQUE0QyxHQUFHLHNCQUFzQixrQkFBa0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxPQUFPLCtFQUErRSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsc0NBQXND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Q0FBQyxJQUFJLGdEQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4RCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksZ0RBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXhELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxnREFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuRixNQUFNLENBQUMsUUFBUSxDQUNiLElBQUksZ0RBQUksQ0FBQztJQUNQLEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFO0lBQzNCLEVBQUUsRUFBRSxFQUFFO0lBQ04sRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUU7SUFDM0IsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUU7Q0FDN0IsQ0FBQyxDQUNILENBQUM7QUFDRixNQUFNLENBQUMsUUFBUSxDQUNiLElBQUksZ0RBQUksQ0FBQztJQUNQLEVBQUUsRUFBRSxFQUFFO0lBQ04sRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUU7SUFDNUIsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUU7SUFDM0IsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUU7Q0FDN0IsQ0FBQyxDQUNILENBQUM7QUFDRixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksZ0RBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFcEYsU0FBUyxVQUFVLENBQUMsU0FBYTtJQUFiLHlDQUFhO0lBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekIscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUVELFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5iZDNjNjQ3MGFkMmZmMTU5ODNiZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuY2FudmFzIHtcXG4gIC8qIFRPRE8gY2FudmFzIGhhcyBhIGJvdHRvbSBtYXJnaW4gY2F1c2VkIGR1ZSB0byBsaW5lIGhlaWdodCBvZiBpbmxpbmUtZWxlbWVudHMgKi9cXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jc2NlbmUtd3JhcHBlciB7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xcbn1cXG5cXG4jc2NlbmUtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYmFzZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUZBQWlGO0VBQ2pGLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5IHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG5jYW52YXMge1xcbiAgLyogVE9ETyBjYW52YXMgaGFzIGEgYm90dG9tIG1hcmdpbiBjYXVzZWQgZHVlIHRvIGxpbmUgaGVpZ2h0IG9mIGlubGluZS1lbGVtZW50cyAqL1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNzY2VuZS13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XFxufVxcblxcbiNzY2VuZS1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2UuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBBc3NldCwgU3RhdGVVcGRhdGVQcm9wIH0gZnJvbSAnYXNzZXRzL3R5cGVzJztcbmltcG9ydCB7IEFDQ19HUkFWSVRZIH0gZnJvbSAndXRpbHMvY29uc3RhbnQnO1xuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICd1dGlscy92ZWN0b3InO1xuaW1wb3J0IHsgQmFsbFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNsYXNzIEJhbGwgaW1wbGVtZW50cyBBc3NldCB7XG4gIG1hc3M6IG51bWJlcjtcblxuICBwb3M6IFZlY3RvcjJEO1xuXG4gIHZlbCA9IG5ldyBWZWN0b3IyRCgwLCAwKTtcblxuICBncmFiUG9zOiBWZWN0b3IyRDtcblxuICBpc0dyYWJiZWQgPSBmYWxzZTtcblxuICBndWlkZUxpbmVzID0gZmFsc2U7XG5cbiAgcmFkaXVzOiBudW1iZXI7XG5cbiAgaXNGaXhlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHsgeCwgeSwgcmFkaXVzID0gMSwgbWFzcyA9IDEgfTogQmFsbFByb3BzKSB7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXMgKiBtYXNzO1xuICAgIHRoaXMubWFzcyA9IG1hc3M7XG5cbiAgICB0aGlzLnBvcyA9IG5ldyBWZWN0b3IyRCh4LCB5KTtcblxuICAgIHRoaXMuZ3JhYlBvcyA9IG5ldyBWZWN0b3IyRCh4LCB5KTtcbiAgfVxuXG4gIHNldEd1aWRlTGluZXModmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmd1aWRlTGluZXMgPSB2YWx1ZTtcbiAgfVxuXG4gIHNob3VsZEdyYWIoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHggLSB0aGlzLnBvcy5pKSAqKiAyICsgKHkgLSB0aGlzLnBvcy5qKSAqKiAyIDwgdGhpcy5yYWRpdXMgKiogMjtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgc2V0R3JhYih4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaXNHcmFiYmVkID0gdHJ1ZTtcbiAgfVxuXG4gIHVuc2V0R3JhYigpOiB2b2lkIHtcbiAgICB0aGlzLmlzR3JhYmJlZCA9IGZhbHNlO1xuICB9XG5cbiAgY2FsY3VsYXRlTmV4dFN0YXRlKHsgZHQsIGZvcmNlIH06IFN0YXRlVXBkYXRlUHJvcCk6IHZvaWQge1xuICAgIGxldCBhY2MgPSBBQ0NfR1JBVklUWTtcbiAgICBhY2MgPSBmb3JjZSA/IGFjYy5hZGQoZm9yY2UpLm11bCgxIC8gdGhpcy5tYXNzKSA6IGFjYztcbiAgICBjb25zdCBkVmVsID0gYWNjPy5tdWwoZHQpO1xuICAgIGNvbnN0IGRQb3MgPSB0aGlzLnZlbC5tdWwoZHQpO1xuXG4gICAgaWYgKGRWZWwpIHRoaXMudmVsID0gdGhpcy52ZWwuYWRkKGRWZWwpO1xuXG4gICAgdGhpcy5wb3MgPSB0aGlzLnBvcy5hZGQoZFBvcyk7XG5cbiAgICB0aGlzLmdyYWJQb3MgPSB0aGlzLnBvcztcbiAgfVxuXG4gIHJlbmRlcihjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ29yYW5nZSc7XG4gICAgaWYgKHRoaXMuaXNHcmFiYmVkKSBjdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgaWYgKHRoaXMudmVsLm1hZygpKSBjdHguZmlsbFN0eWxlID0gJ2JsdWUnO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZWQnO1xuICAgIGN0eC5hcmModGhpcy5wb3MuaSwgdGhpcy5wb3MuaiwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFsbDtcblxuLyoqXG4gKiAxLiBXZSBhcmUgbm90IGNvbnNpZGVyaW5nIHQgPSAwIGNhc2VcbiAqIDIuIENhbGN1bGF0ZSBkVmVsIGFuZCBkUG9zdCBmaXJzdCwgdGhlbiB1cGRhdGUgdG9nZXRoZXJcbiAqL1xuIiwiaW1wb3J0IEJhbGwgZnJvbSAnLi9iYWxsJztcblxuZXhwb3J0IGRlZmF1bHQgQmFsbDtcbiIsImltcG9ydCBXYWxsIGZyb20gJy4vd2FsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGw7XG4iLCJpbXBvcnQgeyBBc3NldCwgU3RhdGVVcGRhdGVQcm9wIH0gZnJvbSAnYXNzZXRzL3R5cGVzJztcbmltcG9ydCB7IEFDQ19HUkFWSVRZIH0gZnJvbSAndXRpbHMvY29uc3RhbnQnO1xuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICd1dGlscy92ZWN0b3InO1xuaW1wb3J0IHsgV2FsbFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNsYXNzIFdhbGwgaW1wbGVtZW50cyBBc3NldCB7XG4gIG1hc3M6IG51bWJlcjtcblxuICBzdGFydFBvczogVmVjdG9yMkQ7XG5cbiAgZW5kUG9zOiBWZWN0b3IyRDtcblxuICB2ZWwgPSBuZXcgVmVjdG9yMkQoMCwgMCk7XG5cbiAgZ3JhYlBvczogVmVjdG9yMkQ7XG5cbiAgaXNHcmFiYmVkID0gZmFsc2U7XG5cbiAgZ3VpZGVMaW5lcyA9IGZhbHNlO1xuXG4gIHJhZGl1czogbnVtYmVyO1xuXG4gIGlzRml4ZWQgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHsgeDEsIHkxLCB4MiwgeTIgfTogV2FsbFByb3BzKSB7XG4gICAgdGhpcy5zdGFydFBvcyA9IG5ldyBWZWN0b3IyRCh4MSwgeTEpO1xuICAgIHRoaXMuZW5kUG9zID0gbmV3IFZlY3RvcjJEKHgyLCB5Mik7XG5cbiAgICB0aGlzLm1hc3MgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5cbiAgICB0aGlzLmdyYWJQb3MgPSBuZXcgVmVjdG9yMkQoKHgxICsgeDIpIC8gMiwgKHkxICsgeTIpIC8gMik7XG4gIH1cblxuICBzZXRHdWlkZUxpbmVzKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5ndWlkZUxpbmVzID0gdmFsdWU7XG4gIH1cblxuICBzaG91bGRHcmFiKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmlzRml4ZWQ7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIHNldEdyYWIoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmlzR3JhYmJlZCA9IHRydWU7XG4gIH1cblxuICB1bnNldEdyYWIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0dyYWJiZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgY2FsY3VsYXRlTmV4dFN0YXRlKHsgZHQsIGZvcmNlIH06IFN0YXRlVXBkYXRlUHJvcCk6IHZvaWQge31cblxuICByZW5kZXIoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ3doaXRlJztcbiAgICBjdHgubW92ZVRvKHRoaXMuc3RhcnRQb3MuaSwgdGhpcy5zdGFydFBvcy5qKTtcbiAgICBjdHgubGluZVRvKHRoaXMuZW5kUG9zLmksIHRoaXMuZW5kUG9zLmopO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2FsbDtcbiIsImltcG9ydCB7IEFzc2V0IH0gZnJvbSAnYXNzZXRzL3R5cGVzJztcbmltcG9ydCBTY2VuZSBmcm9tICdzY2VuZSc7XG5pbXBvcnQgeyBTY2VuZUV2ZW50VHlwZSB9IGZyb20gJ3NjZW5lL3R5cGVzJztcbmltcG9ydCB7IERFRkFVTFRfVElNRV9ERUxUQSwgRk9SQ0VfRElMVVRJT05fRkFDVE9SIH0gZnJvbSAndXRpbHMvY29uc3RhbnQnO1xuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICd1dGlscy92ZWN0b3InO1xuaW1wb3J0IHsgRW5naW5lUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFBlbmV0cmF0aW9uS2l0IH0gZnJvbSAnLi91dGlscy9wZW5ldHJhdGlvbic7XG5pbXBvcnQgeyBDb2xsaXNpb25LaXQgfSBmcm9tICcuL3V0aWxzL2NvbGxpc2lvbic7XG5cbmNsYXNzIEVuZ2luZSB7XG4gIHNjZW5lOiBTY2VuZTtcblxuICBhc3NldExpc3Q6IEFzc2V0W107XG5cbiAgZ3JhYmJlZEFzc2V0OiBBc3NldCB8IG51bGw7XG5cbiAgZ3VpZGVMaW5lczogYm9vbGVhbjtcblxuICBtb3VzZVBvczogVmVjdG9yMkQ7XG5cbiAgY29uc3RydWN0b3IoeyBzY2VuZSwgZ3VpZGVMaW5lcyA9IGZhbHNlIH06IEVuZ2luZVByb3BzKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuXG4gICAgLy8gYXJyYXkgb2YgYWxsIG9iamVjdHMgYWRkIHRvIGVuZ2luZVxuICAgIHRoaXMuYXNzZXRMaXN0ID0gW107XG5cbiAgICAvLyB2YXJpYWJsZXMgdG8gZGVhbCB3aXRoIG1vdXNlIGdyYWJzXG4gICAgdGhpcy5ncmFiYmVkQXNzZXQgPSBudWxsO1xuICAgIHRoaXMubW91c2VQb3MgPSBuZXcgVmVjdG9yMkQoMCwgMCk7XG5cbiAgICAvLyBpZiBhY3RpdmF0ZWQsIGhlbHBlciBsaW5lcyB3aWxsIGJlIGF2YWlsYWJsZVxuICAgIHRoaXMuZ3VpZGVMaW5lcyA9IGd1aWRlTGluZXM7XG5cbiAgICAvLyBFdmVudCB0byBkZWFsIHdpdGggbW91c2UgZ3JhYiBldmVudHNcbiAgICB0aGlzLnNjZW5lLnJlZ2lzdGVyT2JzZXJ2ZXIoU2NlbmVFdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5maW5kR3JhYmJlZEFzc2V0LmJpbmQodGhpcykpO1xuICAgIHRoaXMuc2NlbmUucmVnaXN0ZXJPYnNlcnZlcihTY2VuZUV2ZW50VHlwZS5NT1VTRV9NT1ZFLCAoeCwgeSkgPT4ge1xuICAgICAgdGhpcy5tb3VzZVBvcy5pID0geDtcbiAgICAgIHRoaXMubW91c2VQb3MuaiA9IHk7XG4gICAgfSk7XG4gICAgdGhpcy5zY2VuZS5yZWdpc3Rlck9ic2VydmVyKFNjZW5lRXZlbnRUeXBlLk1PVVNFX1VQLCAoeCwgeSkgPT4ge1xuICAgICAgdGhpcy5ncmFiYmVkQXNzZXQ/LnVuc2V0R3JhYigpO1xuICAgICAgdGhpcy5ncmFiYmVkQXNzZXQgPSBudWxsO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQXNzZXQoYXNzZXQ6IEFzc2V0KTogdm9pZCB7XG4gICAgYXNzZXQuc2V0R3VpZGVMaW5lcyh0aGlzLmd1aWRlTGluZXMpO1xuICAgIHRoaXMuYXNzZXRMaXN0LnB1c2goYXNzZXQpO1xuICB9XG5cbiAgZmluZEdyYWJiZWRBc3NldCh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYXNzZXRMaXN0LmZvckVhY2goKGFzc2V0KSA9PiB7XG4gICAgICBpZiAoYXNzZXQuc2hvdWxkR3JhYih4LCB5KSkge1xuICAgICAgICBhc3NldC5zZXRHcmFiKHgsIHkpO1xuICAgICAgICB0aGlzLmdyYWJiZWRBc3NldCA9IGFzc2V0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyR3VpZGVMaW5lcygpOiB2b2lkIHtcbiAgICB0aGlzLnNjZW5lLmN0eC5zYXZlKCk7XG4gICAgdGhpcy5zY2VuZS5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5zY2VuZS5jdHguc3Ryb2tlU3R5bGUgPSAnZ3JlZW4nO1xuICAgIHRoaXMuc2NlbmUuY3R4Lm1vdmVUbyh0aGlzLmdyYWJiZWRBc3NldC5ncmFiUG9zLmksIHRoaXMuZ3JhYmJlZEFzc2V0LmdyYWJQb3Muaik7XG4gICAgdGhpcy5zY2VuZS5jdHgubGluZVRvKHRoaXMubW91c2VQb3MuaSwgdGhpcy5tb3VzZVBvcy5qKTtcbiAgICB0aGlzLnNjZW5lLmN0eC5zdHJva2UoKTtcbiAgICB0aGlzLnNjZW5lLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLnNjZW5lLmN0eC5yZXN0b3JlKCk7XG4gIH1cblxuICByZW5kZXIodDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zY2VuZS5jbGVhblVwKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5hc3NldExpc3QubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGFzc2V0ID0gdGhpcy5hc3NldExpc3RbaV07XG5cbiAgICAgIGlmIChhc3NldCA9PT0gdGhpcy5ncmFiYmVkQXNzZXQpIHtcbiAgICAgICAgY29uc3QgZm9yY2VWZWMgPSBuZXcgVmVjdG9yMkQoXG4gICAgICAgICAgdGhpcy5tb3VzZVBvcy5pIC0gdGhpcy5ncmFiYmVkQXNzZXQuZ3JhYlBvcy5pLFxuICAgICAgICAgIHRoaXMubW91c2VQb3MuaiAtIHRoaXMuZ3JhYmJlZEFzc2V0LmdyYWJQb3MualxuICAgICAgICApO1xuICAgICAgICBhc3NldC5jYWxjdWxhdGVOZXh0U3RhdGUoe1xuICAgICAgICAgIGR0OiBERUZBVUxUX1RJTUVfREVMVEEsXG4gICAgICAgICAgZm9yY2U6IGZvcmNlVmVjLm11bChGT1JDRV9ESUxVVElPTl9GQUNUT1IpXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXNzZXQuY2FsY3VsYXRlTmV4dFN0YXRlKHsgZHQ6IERFRkFVTFRfVElNRV9ERUxUQSB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgaUxlbiA9IHRoaXMuYXNzZXRMaXN0Lmxlbmd0aDsgaSA8IGlMZW4gLSAxOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGFzc2V0TCA9IHRoaXMuYXNzZXRMaXN0W2ldO1xuXG4gICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBpTGVuOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgYXNzZXRSID0gdGhpcy5hc3NldExpc3Rbal07XG5cbiAgICAgICAgY29uc3QgeyBpc1BlbmV0cmF0aW5nLCBjb21wdXRhdGlvbkNhY2hlIH0gPSBQZW5ldHJhdGlvbktpdC5pc1BlbmV0cmF0aW5nKGFzc2V0TCwgYXNzZXRSKTtcbiAgICAgICAgaWYgKGlzUGVuZXRyYXRpbmcpIHtcbiAgICAgICAgICBQZW5ldHJhdGlvbktpdC5yZXNvbHZlUGVuZXRyYXRpb24oYXNzZXRMLCBhc3NldFIsIGNvbXB1dGF0aW9uQ2FjaGUpO1xuICAgICAgICAgIENvbGxpc2lvbktpdC5yZXNvbHZlQ29sbGlzaW9uKGFzc2V0TCwgYXNzZXRSLCBjb21wdXRhdGlvbkNhY2hlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmFzc2V0TGlzdC5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgYXNzZXQgPSB0aGlzLmFzc2V0TGlzdFtpXTtcblxuICAgICAgdGhpcy5zY2VuZS5jdHguc2F2ZSgpO1xuICAgICAgYXNzZXQucmVuZGVyKHRoaXMuc2NlbmUuY3R4KTtcbiAgICAgIHRoaXMuc2NlbmUuY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ndWlkZUxpbmVzICYmIHRoaXMuZ3JhYmJlZEFzc2V0KSB0aGlzLnJlbmRlckd1aWRlTGluZXMoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbmdpbmU7XG5cbi8qKlxuICogMS4gVGhlIG1lYW5zIG9mIGludGVyYWN0aW9uIGJldHdlZW4gb2JqZWN0cyBhbmQgd29ybGQgaXMgRm9yY2UgYW5kIFRvcnF1ZVxuICogMi4gRm9yIGVhY2ggZnJhbWUgYm90aCBmb3JjZSBhbmQgdG9ycXVlIHNob3VsZCBiZSBudWxsZWQgdG8gMCBpbiBvcmRlciB0byBhdm9pZCBsZWFrc1xuICovXG4iLCJpbXBvcnQgRW5naW5lIGZyb20gJy4vZW5naW5lJztcblxuZXhwb3J0IGRlZmF1bHQgRW5naW5lO1xuIiwiaW1wb3J0IEJhbGwgZnJvbSAnYXNzZXRzL2JhbGwnO1xuaW1wb3J0IHsgQXNzZXQgfSBmcm9tICdhc3NldHMvdHlwZXMnO1xuaW1wb3J0IFdhbGwgZnJvbSAnYXNzZXRzL3dhbGwnO1xuaW1wb3J0IHsgQ29tcHV0YXRpb25DYWNoZVByb3BzIH0gZnJvbSAnZW5naW5lL3R5cGVzJztcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAndXRpbHMvdmVjdG9yJztcblxuZXhwb3J0IG5hbWVzcGFjZSBDb2xsaXNpb25LaXQge1xuICBleHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUNvbGxpc2lvbihcbiAgICBfYXNzZXRMOiBBc3NldCxcbiAgICBfYXNzZXRSOiBBc3NldCxcbiAgICBjb21wdXRhdGlvbkNhY2hlOiBDb21wdXRhdGlvbkNhY2hlUHJvcHNcbiAgKTogdm9pZCB7XG4gICAgaWYgKF9hc3NldEwgaW5zdGFuY2VvZiBCYWxsICYmIF9hc3NldFIgaW5zdGFuY2VvZiBCYWxsKSB7XG4gICAgICBjb25zdCBiYWxsTCA9IF9hc3NldEwgYXMgQmFsbDtcbiAgICAgIGNvbnN0IGJhbGxSID0gX2Fzc2V0UiBhcyBCYWxsO1xuXG4gICAgICBjb25zdCB7IGxpbmVPZkFjdGlvblZlY3RvcjogY29sTm9ybWFsVmVjIH0gPSBjb21wdXRhdGlvbkNhY2hlO1xuICAgICAgY29uc3QgY29sTm9ybWFsVW5pdFZlYyA9IGNvbE5vcm1hbFZlYy51bml0KCk7XG5cbiAgICAgIGNvbnN0IG5vcm1hbEluaXRpYWxWZWxMID0gY29sTm9ybWFsVW5pdFZlYy5kb3QoYmFsbEwudmVsKTtcbiAgICAgIGNvbnN0IG5vcm1hbEluaXRpYWxWZWxSID0gY29sTm9ybWFsVW5pdFZlYy5kb3QoYmFsbFIudmVsKTtcblxuICAgICAgY29uc3QgbWFzc1N1bSA9IGJhbGxMLm1hc3MgKyBiYWxsUi5tYXNzO1xuXG4gICAgICBjb25zdCBub3JtYWxGaW5hbFZlbEwgPVxuICAgICAgICAobm9ybWFsSW5pdGlhbFZlbEwgKiAoYmFsbEwubWFzcyAtIGJhbGxSLm1hc3MpICsgMiAqIGJhbGxSLm1hc3MgKiBub3JtYWxJbml0aWFsVmVsUikgL1xuICAgICAgICBtYXNzU3VtO1xuICAgICAgY29uc3Qgbm9ybWFsRmluYWxWZWxSID1cbiAgICAgICAgKG5vcm1hbEluaXRpYWxWZWxSICogKGJhbGxSLm1hc3MgLSBiYWxsTC5tYXNzKSArIDIgKiBiYWxsTC5tYXNzICogbm9ybWFsSW5pdGlhbFZlbEwpIC9cbiAgICAgICAgbWFzc1N1bTtcblxuICAgICAgYmFsbEwudmVsID0gYmFsbEwudmVsXG4gICAgICAgIC5hZGQoY29sTm9ybWFsVW5pdFZlYy5tdWwoLW5vcm1hbEluaXRpYWxWZWxMKSlcbiAgICAgICAgLmFkZChjb2xOb3JtYWxVbml0VmVjLm11bChub3JtYWxGaW5hbFZlbEwpKTtcblxuICAgICAgYmFsbFIudmVsID0gYmFsbFIudmVsXG4gICAgICAgIC5hZGQoY29sTm9ybWFsVW5pdFZlYy5tdWwoLW5vcm1hbEluaXRpYWxWZWxSKSlcbiAgICAgICAgLmFkZChjb2xOb3JtYWxVbml0VmVjLm11bChub3JtYWxGaW5hbFZlbFIpKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKF9hc3NldEwgaW5zdGFuY2VvZiBCYWxsICYmIF9hc3NldFIgaW5zdGFuY2VvZiBXYWxsKSB8fFxuICAgICAgKF9hc3NldEwgaW5zdGFuY2VvZiBXYWxsICYmIF9hc3NldFIgaW5zdGFuY2VvZiBCYWxsKVxuICAgICkge1xuICAgICAgY29uc3QgYmFsbCA9IChfYXNzZXRMIGluc3RhbmNlb2YgQmFsbCA/IF9hc3NldEwgOiBfYXNzZXRSKSBhcyBCYWxsO1xuXG4gICAgICBjb25zdCB7IGxpbmVPZkFjdGlvblZlY3RvcjogY29sTm9ybWFsVmVjIH0gPSBjb21wdXRhdGlvbkNhY2hlO1xuXG4gICAgICBjb25zdCBjb2xOb3JtYWxVbml0VmVjID0gY29sTm9ybWFsVmVjLnVuaXQoKTtcblxuICAgICAgY29uc3Qgbm9ybWFsSW5pdGlhbFZlbEwgPSBjb2xOb3JtYWxVbml0VmVjLmRvdChiYWxsLnZlbCk7XG5cbiAgICAgIGJhbGwudmVsID0gYmFsbC52ZWwuYWRkKGNvbE5vcm1hbFVuaXRWZWMubXVsKC0yICogbm9ybWFsSW5pdGlhbFZlbEwpKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBCYWxsIGZyb20gJ2Fzc2V0cy9iYWxsJztcbmltcG9ydCB7IEFzc2V0IH0gZnJvbSAnYXNzZXRzL3R5cGVzJztcbmltcG9ydCBXYWxsIGZyb20gJ2Fzc2V0cy93YWxsJztcbmltcG9ydCB7IENvbXB1dGF0aW9uQ2FjaGVQcm9wcyB9IGZyb20gJ2VuZ2luZS90eXBlcyc7XG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gJ3V0aWxzL3ZlY3Rvcic7XG5cbmV4cG9ydCBuYW1lc3BhY2UgUGVuZXRyYXRpb25LaXQge1xuICBleHBvcnQgZnVuY3Rpb24gaXNQZW5ldHJhdGluZyhcbiAgICBfYXNzZXRMOiBBc3NldCxcbiAgICBfYXNzZXRSOiBBc3NldFxuICApOiB7IGlzUGVuZXRyYXRpbmc6IGJvb2xlYW47IGNvbXB1dGF0aW9uQ2FjaGU/OiBDb21wdXRhdGlvbkNhY2hlUHJvcHMgfSB7XG4gICAgaWYgKF9hc3NldEwgaW5zdGFuY2VvZiBCYWxsICYmIF9hc3NldFIgaW5zdGFuY2VvZiBCYWxsKSB7XG4gICAgICBjb25zdCBiYWxsTCA9IF9hc3NldEwgYXMgQmFsbDtcbiAgICAgIGNvbnN0IGJhbGxSID0gX2Fzc2V0UiBhcyBCYWxsO1xuICAgICAgaWYgKGJhbGxMLnBvcy5zdWIoYmFsbFIucG9zKS5tYWcoKSA8IGJhbGxMLnJhZGl1cyArIGJhbGxSLnJhZGl1cykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlzUGVuZXRyYXRpbmc6IHRydWUsXG4gICAgICAgICAgY29tcHV0YXRpb25DYWNoZToge1xuICAgICAgICAgICAgbGluZU9mQWN0aW9uVmVjdG9yOiBiYWxsTC5wb3Muc3ViKGJhbGxSLnBvcylcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIChfYXNzZXRMIGluc3RhbmNlb2YgQmFsbCAmJiBfYXNzZXRSIGluc3RhbmNlb2YgV2FsbCkgfHxcbiAgICAgIChfYXNzZXRMIGluc3RhbmNlb2YgV2FsbCAmJiBfYXNzZXRSIGluc3RhbmNlb2YgQmFsbClcbiAgICApIHtcbiAgICAgIGNvbnN0IGJhbGwgPSAoX2Fzc2V0TCBpbnN0YW5jZW9mIEJhbGwgPyBfYXNzZXRMIDogX2Fzc2V0UikgYXMgQmFsbDtcbiAgICAgIGNvbnN0IHdhbGwgPSAoX2Fzc2V0UiBpbnN0YW5jZW9mIFdhbGwgPyBfYXNzZXRSIDogX2Fzc2V0TCkgYXMgV2FsbDtcblxuICAgICAgY29uc3Qgd2FsbFZlYyA9IHdhbGwuc3RhcnRQb3Muc3ViKHdhbGwuZW5kUG9zKTtcbiAgICAgIGNvbnN0IHdhbGxVbml0VmVjID0gd2FsbFZlYy51bml0KCk7XG5cbiAgICAgIGxldCBuZWFyZXN0UG9pbnRPbkxpbmUgPSB3YWxsLnN0YXJ0UG9zO1xuICAgICAgbGV0IHByb2plY3Rpb25WZWM6IFZlY3RvcjJEO1xuICAgICAgY29uc3QgcHJvamVjdGlvbiA9IHdhbGwuc3RhcnRQb3Muc3ViKGJhbGwucG9zKS5kb3Qod2FsbFVuaXRWZWMpO1xuXG4gICAgICBpZiAocHJvamVjdGlvbiA+IDApIHtcbiAgICAgICAgbmVhcmVzdFBvaW50T25MaW5lID0gd2FsbC5lbmRQb3M7XG4gICAgICAgIGNvbnN0IHNlY29uZGFyeVByb2plY3Rpb24gPSB3YWxsLmVuZFBvcy5zdWIoYmFsbC5wb3MpLmRvdCh3YWxsVW5pdFZlYyk7XG5cbiAgICAgICAgaWYgKHNlY29uZGFyeVByb2plY3Rpb24gPCAwKSB7XG4gICAgICAgICAgcHJvamVjdGlvblZlYyA9IHdhbGxVbml0VmVjLm11bChwcm9qZWN0aW9uKTtcbiAgICAgICAgICBuZWFyZXN0UG9pbnRPbkxpbmUgPSB3YWxsLnN0YXJ0UG9zLnN1Yihwcm9qZWN0aW9uVmVjKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoYmFsbC5wb3Muc3ViKG5lYXJlc3RQb2ludE9uTGluZSkubWFnKCkgPCBiYWxsLnJhZGl1cykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlzUGVuZXRyYXRpbmc6IHRydWUsXG4gICAgICAgICAgY29tcHV0YXRpb25DYWNoZToge1xuICAgICAgICAgICAgbGluZU9mQWN0aW9uVmVjdG9yOiBuZWFyZXN0UG9pbnRPbkxpbmUuc3ViKGJhbGwucG9zKSxcbiAgICAgICAgICAgIG5lYXJlc3RQb2ludE9uTGluZVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBpc1BlbmV0cmF0aW5nOiBmYWxzZSB9O1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQZW5ldHJhdGlvbihcbiAgICBfYXNzZXRMOiBBc3NldCxcbiAgICBfYXNzZXRSOiBBc3NldCxcbiAgICBjb21wdXRhdGlvbkNhY2hlOiBDb21wdXRhdGlvbkNhY2hlUHJvcHNcbiAgKTogdm9pZCB7XG4gICAgaWYgKF9hc3NldEwgaW5zdGFuY2VvZiBCYWxsICYmIF9hc3NldFIgaW5zdGFuY2VvZiBCYWxsKSB7XG4gICAgICBjb25zdCBiYWxsTCA9IF9hc3NldEwgYXMgQmFsbDtcbiAgICAgIGNvbnN0IGJhbGxSID0gX2Fzc2V0UiBhcyBCYWxsO1xuXG4gICAgICBjb25zdCB7IGxpbmVPZkFjdGlvblZlY3RvcjogcGVuTm9ybWFsVmVjIH0gPSBjb21wdXRhdGlvbkNhY2hlO1xuICAgICAgY29uc3QgcGVuTm9ybWFsVW5pdFZlYyA9IHBlbk5vcm1hbFZlYy51bml0KCk7XG5cbiAgICAgIGNvbnN0IHNlbWlQZW5EaXN0ID0gKGJhbGxMLnJhZGl1cyArIGJhbGxSLnJhZGl1cyAtIHBlbk5vcm1hbFZlYy5tYWcoKSkgLyAyO1xuXG4gICAgICBiYWxsTC5wb3MgPSBiYWxsTC5wb3MuYWRkKHBlbk5vcm1hbFVuaXRWZWMubXVsKHNlbWlQZW5EaXN0KSk7XG4gICAgICBiYWxsUi5wb3MgPSBiYWxsUi5wb3MuYWRkKHBlbk5vcm1hbFVuaXRWZWMubXVsKC1zZW1pUGVuRGlzdCkpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAoX2Fzc2V0TCBpbnN0YW5jZW9mIEJhbGwgJiYgX2Fzc2V0UiBpbnN0YW5jZW9mIFdhbGwpIHx8XG4gICAgICAoX2Fzc2V0TCBpbnN0YW5jZW9mIFdhbGwgJiYgX2Fzc2V0UiBpbnN0YW5jZW9mIEJhbGwpXG4gICAgKSB7XG4gICAgICBjb25zdCBiYWxsID0gKF9hc3NldEwgaW5zdGFuY2VvZiBCYWxsID8gX2Fzc2V0TCA6IF9hc3NldFIpIGFzIEJhbGw7XG5cbiAgICAgIGNvbnN0IHsgbGluZU9mQWN0aW9uVmVjdG9yOiBwZW5Ob3JtYWxWZWMsIG5lYXJlc3RQb2ludE9uTGluZSB9ID0gY29tcHV0YXRpb25DYWNoZTtcblxuICAgICAgY29uc3QgcGVuRGlzdCA9IGJhbGwucmFkaXVzIC0gYmFsbC5wb3Muc3ViKG5lYXJlc3RQb2ludE9uTGluZSkubWFnKCk7XG4gICAgICBjb25zdCBwZW5Ob3JtYWxVbml0VmVjID0gcGVuTm9ybWFsVmVjLnVuaXQoKTtcblxuICAgICAgYmFsbC5wb3MgPSBiYWxsLnBvcy5hZGQocGVuTm9ybWFsVW5pdFZlYy5tdWwoLXBlbkRpc3QpKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBTY2VuZSBmcm9tICcuL3NjZW5lJztcblxuZXhwb3J0IGRlZmF1bHQgU2NlbmU7XG4iLCJpbXBvcnQgeyBTY2VuZU9wdGlvbnMsIFNjZW5lSW50ZXJmYWNlLCBTY2VuZUV2ZW50VHlwZSwgT2JzZXJ2ZXJDYWxsYmFjayB9IGZyb20gJy4vdHlwZXMnO1xuXG5jbGFzcyBTY2VuZSBpbXBsZW1lbnRzIFNjZW5lSW50ZXJmYWNlIHtcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcblxuICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBwcml2YXRlIF9iYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcblxuICBwcml2YXRlIF90b3A6IG51bWJlcjtcblxuICBwcml2YXRlIF9sZWZ0OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfbW91c2VEb3duT2JzZXJ2ZXJMaXN0OiBPYnNlcnZlckNhbGxiYWNrW10gPSBbXTtcblxuICBwcml2YXRlIF9tb3VzZU1vdmVPYnNlcnZlckxpc3Q6IE9ic2VydmVyQ2FsbGJhY2tbXSA9IFtdO1xuXG4gIHByaXZhdGUgX21vdXNlVXBPYnNlcnZlckxpc3Q6IE9ic2VydmVyQ2FsbGJhY2tbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBTY2VuZU9wdGlvbnMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDEwMDtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMTAwO1xuXG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzY2VuZS13cmFwcGVyJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzY2VuZS1jb250YWluZXInKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIHRoaXMuX2JhY2tncm91bmRDb2xvciA9IG9wdGlvbnM/LmJhY2tncm91bmRDb2xvciA/PyAnd2hpdGUnO1xuXG4gICAgY29uc3QgcmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuX3RvcCA9IHJlY3QudG9wO1xuICAgIHRoaXMuX2xlZnQgPSByZWN0LmxlZnQ7XG5cbiAgICBpZiAob3B0aW9ucy5tb3VzZUV2ZW50cykge1xuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgU2NlbmVFdmVudFR5cGUuTU9VU0VfRE9XTixcbiAgICAgICAgdGhpcy5fdHJpZ2dlck1vdXNlRG93bk9ic2VydmVycy5iaW5kKHRoaXMpXG4gICAgICApO1xuICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgU2NlbmVFdmVudFR5cGUuTU9VU0VfTU9WRSxcbiAgICAgICAgdGhpcy5fdHJpZ2dlck1vdXNlTW92ZU9ic2VydmVyLmJpbmQodGhpcylcbiAgICAgICk7XG4gICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBTY2VuZUV2ZW50VHlwZS5NT1VTRV9VUCxcbiAgICAgICAgdGhpcy5fdHJpZ2dlck1vdXNlVXBPYnNlcnZlcnMuYmluZCh0aGlzKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmNsZWFuVXAoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RyaWdnZXJNb3VzZURvd25PYnNlcnZlcnMoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9tb3VzZURvd25PYnNlcnZlckxpc3QuZm9yRWFjaCgob2JzZXJ2ZXIpID0+XG4gICAgICBvYnNlcnZlcihldmVudC5jbGllbnRYIC0gdGhpcy5fbGVmdCwgZXZlbnQuY2xpZW50WSAtIHRoaXMuX3RvcClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdHJpZ2dlck1vdXNlTW92ZU9ic2VydmVyKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fbW91c2VNb3ZlT2JzZXJ2ZXJMaXN0LmZvckVhY2goKG9ic2VydmVyKSA9PlxuICAgICAgb2JzZXJ2ZXIoZXZlbnQuY2xpZW50WCAtIHRoaXMuX2xlZnQsIGV2ZW50LmNsaWVudFkgLSB0aGlzLl90b3ApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RyaWdnZXJNb3VzZVVwT2JzZXJ2ZXJzKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fbW91c2VVcE9ic2VydmVyTGlzdC5mb3JFYWNoKChvYnNlcnZlcikgPT5cbiAgICAgIG9ic2VydmVyKGV2ZW50LmNsaWVudFggLSB0aGlzLl9sZWZ0LCBldmVudC5jbGllbnRZIC0gdGhpcy5fdG9wKVxuICAgICk7XG4gIH1cblxuICByZWdpc3Rlck9ic2VydmVyKGV2ZW50VHlwZTogU2NlbmVFdmVudFR5cGUsIG9ic2VydmVyOiBPYnNlcnZlckNhbGxiYWNrKTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICAgIGNhc2UgU2NlbmVFdmVudFR5cGUuTU9VU0VfRE9XTjpcbiAgICAgICAgdGhpcy5fbW91c2VEb3duT2JzZXJ2ZXJMaXN0LnB1c2gob2JzZXJ2ZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2NlbmVFdmVudFR5cGUuTU9VU0VfTU9WRTpcbiAgICAgICAgdGhpcy5fbW91c2VNb3ZlT2JzZXJ2ZXJMaXN0LnB1c2gob2JzZXJ2ZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU2NlbmVFdmVudFR5cGUuTU9VU0VfVVA6XG4gICAgICAgIHRoaXMuX21vdXNlVXBPYnNlcnZlckxpc3QucHVzaChvYnNlcnZlcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZGVyZWdpc3Rlck9ic2VydmVyKGV2ZW50VHlwZTogU2NlbmVFdmVudFR5cGUsIG9ic2VydmVyOiBPYnNlcnZlckNhbGxiYWNrKTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICAgIGNhc2UgU2NlbmVFdmVudFR5cGUuTU9VU0VfRE9XTjpcbiAgICAgICAgdGhpcy5fbW91c2VEb3duT2JzZXJ2ZXJMaXN0ID0gdGhpcy5fbW91c2VEb3duT2JzZXJ2ZXJMaXN0LmZpbHRlcihcbiAgICAgICAgICAoaXRlbSkgPT4gaXRlbSAhPT0gb2JzZXJ2ZXJcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNjZW5lRXZlbnRUeXBlLk1PVVNFX01PVkU6XG4gICAgICAgIHRoaXMuX21vdXNlTW92ZU9ic2VydmVyTGlzdCA9IHRoaXMuX21vdXNlTW92ZU9ic2VydmVyTGlzdC5maWx0ZXIoXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0gIT09IG9ic2VydmVyXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTY2VuZUV2ZW50VHlwZS5NT1VTRV9VUDpcbiAgICAgICAgdGhpcy5fbW91c2VVcE9ic2VydmVyTGlzdCA9IHRoaXMuX21vdXNlVXBPYnNlcnZlckxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBvYnNlcnZlcik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY2xlYW5VcCgpOiB2b2lkIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLl9iYWNrZ3JvdW5kQ29sb3I7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmU7XG4iLCJleHBvcnQgdHlwZSBTY2VuZU9wdGlvbnMgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICBtb3VzZUV2ZW50czogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NlbmVJbnRlcmZhY2Uge1xuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICByZWdpc3Rlck9ic2VydmVyOiAoZXZlbnRUeXBlOiBTY2VuZUV2ZW50VHlwZSwgb2JzZXJ2ZXI6IE9ic2VydmVyQ2FsbGJhY2spID0+IHZvaWQ7XG4gIGRlcmVnaXN0ZXJPYnNlcnZlcjogKGV2ZW50VHlwZTogU2NlbmVFdmVudFR5cGUsIG9ic2VydmVyOiBPYnNlcnZlckNhbGxiYWNrKSA9PiB2b2lkO1xuICBjbGVhblVwOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgdHlwZSBPYnNlcnZlckNhbGxiYWNrID0gKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB2b2lkO1xuXG5leHBvcnQgZW51bSBTY2VuZUV2ZW50VHlwZSB7XG4gIE1PVVNFX0RPV04gPSAnbW91c2Vkb3duJyxcbiAgTU9VU0VfTU9WRSA9ICdtb3VzZW1vdmUnLFxuICBNT1VTRV9VUCA9ICdtb3VzZXVwJ1xufVxuIiwiaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICcuL3ZlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1RJTUVfREVMVEEgPSAxO1xuXG5leHBvcnQgY29uc3QgRk9SQ0VfRElMVVRJT05fRkFDVE9SID0gMC4xO1xuXG5leHBvcnQgY29uc3QgQUNDX0RJTFVUSU9OX0ZBQ1RPUiA9IDAuMDE7XG5cbmV4cG9ydCBjb25zdCBBQ0NfR1JBVklUWSA9IG5ldyBWZWN0b3IyRCgwLCA5LjggKiBBQ0NfRElMVVRJT05fRkFDVE9SKTtcbiIsImV4cG9ydCBjbGFzcyBWZWN0b3IyRCB7XG4gIGk6IG51bWJlcjtcblxuICBqOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoaTogbnVtYmVyLCBqOiBudW1iZXIpIHtcbiAgICB0aGlzLmkgPSBpO1xuICAgIHRoaXMuaiA9IGo7XG4gIH1cblxuICBhZGQodmVjOiBWZWN0b3IyRCk6IFZlY3RvcjJEIHtcbiAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMuaSArIHZlYy5pLCB0aGlzLmogKyB2ZWMuaik7XG4gIH1cblxuICBzdWIodmVjOiBWZWN0b3IyRCk6IFZlY3RvcjJEIHtcbiAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMuaSAtIHZlYy5pLCB0aGlzLmogLSB2ZWMuaik7XG4gIH1cblxuICBtdWwoc2NhbGFyOiBudW1iZXIpOiBWZWN0b3IyRCB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLmkgKiBzY2FsYXIsIHRoaXMuaiAqIHNjYWxhcik7XG4gIH1cblxuICBtYWdTcXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5pICoqIDIgKyB0aGlzLmogKiogMjtcbiAgfVxuXG4gIG1hZygpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5pICoqIDIgKyB0aGlzLmogKiogMik7XG4gIH1cblxuICB1bml0KCk6IFZlY3RvcjJEIHtcbiAgICBjb25zdCBtYWcgPSB0aGlzLm1hZygpO1xuICAgIHJldHVybiB0aGlzLm11bCgxIC8gbWFnKTtcbiAgfVxuXG4gIGRvdCh2ZWM6IFZlY3RvcjJEKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5pICogdmVjLmkgKyB0aGlzLmogKiB2ZWMuajtcbiAgfVxufVxuXG4vKipcbiAqIDEuIE5vdCByZXR1cm5pbmcgYSBuZXcgb2JqZWN0IHRvIGF2b2lkIGNyZWF0aW9uIGFuZCBzYXZlIHBlcmZvcm1hbmNlXG4gKi9cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBUT0RPIFdoeSB3ZXJlIHdlIHVzaW5nIGR5bmFtaWMgaW1wb3J0cz9cbmltcG9ydCBTY2VuZSBmcm9tICdzY2VuZSc7XG5pbXBvcnQgRW5naW5lIGZyb20gJ2VuZ2luZSc7XG4vLyBpbXBvcnQgeyB0ZXN0IH0gZnJvbSAnLi4vd2FzbSc7XG5pbXBvcnQgJy4vYmFzZS5jc3MnO1xuaW1wb3J0IEJhbGwgZnJvbSAnYXNzZXRzL2JhbGwnO1xuaW1wb3J0IFdhbGwgZnJvbSAnYXNzZXRzL3dhbGwnO1xuXG4vLyBjb25zb2xlLmxvZygnSSBhbSBhIGZ1biBwYWdlJyk7XG5cbi8vIHRlc3QoKTtcblxuY29uc3Qgc2NlbmUgPSBuZXcgU2NlbmUoe1xuICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXG4gIG1vdXNlRXZlbnRzOiB0cnVlXG59KTtcblxuY29uc3QgZW5naW5lID0gbmV3IEVuZ2luZSh7IHNjZW5lLCBndWlkZUxpbmVzOiB0cnVlIH0pO1xuXG5lbmdpbmUuYWRkQXNzZXQobmV3IEJhbGwoeyB4OiAxMDAsIHk6IDEwMCwgbWFzczogNTAgfSkpO1xuZW5naW5lLmFkZEFzc2V0KG5ldyBCYWxsKHsgeDogMzAwLCB5OiAzMDAsIG1hc3M6IDMwIH0pKTtcbmVuZ2luZS5hZGRBc3NldChuZXcgQmFsbCh7IHg6IDYwMCwgeTogNjAwLCBtYXNzOiAzNSB9KSk7XG5lbmdpbmUuYWRkQXNzZXQobmV3IEJhbGwoeyB4OiA1MDAsIHk6IDEwMCwgbWFzczogNDAgfSkpO1xuZW5naW5lLmFkZEFzc2V0KG5ldyBCYWxsKHsgeDogMTUwLCB5OiA1NTAsIG1hc3M6IDUwIH0pKTtcblxuZW5naW5lLmFkZEFzc2V0KG5ldyBXYWxsKHsgeDE6IDQwLCB5MTogNDAsIHgyOiBzY2VuZS5jYW52YXMud2lkdGggLSA0MCwgeTI6IDQwIH0pKTtcbmVuZ2luZS5hZGRBc3NldChcbiAgbmV3IFdhbGwoe1xuICAgIHgxOiBzY2VuZS5jYW52YXMud2lkdGggLSA0MCxcbiAgICB5MTogNDAsXG4gICAgeDI6IHNjZW5lLmNhbnZhcy53aWR0aCAtIDQwLFxuICAgIHkyOiBzY2VuZS5jYW52YXMuaGVpZ2h0IC0gNDBcbiAgfSlcbik7XG5lbmdpbmUuYWRkQXNzZXQoXG4gIG5ldyBXYWxsKHtcbiAgICB4MTogNDAsXG4gICAgeTE6IHNjZW5lLmNhbnZhcy5oZWlnaHQgLSA0MCxcbiAgICB4Mjogc2NlbmUuY2FudmFzLndpZHRoIC0gNDAsXG4gICAgeTI6IHNjZW5lLmNhbnZhcy5oZWlnaHQgLSA0MFxuICB9KVxuKTtcbmVuZ2luZS5hZGRBc3NldChuZXcgV2FsbCh7IHgxOiA0MCwgeTE6IDQwLCB4MjogNDAsIHkyOiBzY2VuZS5jYW52YXMuaGVpZ2h0IC0gNDAgfSkpO1xuXG5mdW5jdGlvbiByZW5kZXJMb29wKHRpbWVzdGFtcCA9IDApOiB2b2lkIHtcbiAgZW5naW5lLnJlbmRlcih0aW1lc3RhbXApO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyTG9vcCk7XG59XG5cbnJlbmRlckxvb3AoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=