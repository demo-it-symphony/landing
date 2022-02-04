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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget_widget_html__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__widget_widget_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__widget_widget_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_widget__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_widget_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_widget_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__widget_widget_css__);




function app(window) {
  console.log("Chat-Widget starting");
  var defaultTitle = document.title;
  var globalObject = window[window["Chat-Widget"]];
  var queue = globalObject.q;
  var config = queue[0][0];
  var message;

  if (queue) {
    var _ref, _config$userToken, _document$getElementB, _config$linkName, _config$urlLink, _config$popupMode, _config$startMode, _config$startMessageW, _config$newMessageTex;

    if (!config.urlToWidget) {
      config = {
        urlToWidget: queue[0][0],
        urlToCss: queue[0][1],
        urlToButtonCss: queue[0][2],
        newMessageText: queue[0][3],
        userToken: queue[0][4],
        linkName: queue[0][5],
        urlLink: queue[0][6],
        popupMode: queue[0][7],
        startMode: queue[0][8],
        startMessageWithoutBot: queue[0][9],
        withoutLocation: queue[0][10],
        separeteOperatorNameAndTimeSent: queue[0][11],
        changeSendButtonIcon: queue[0][12]
      };
    }

    Object(__WEBPACK_IMPORTED_MODULE_1__widget_widget__["a" /* LoadButtonStyle */])(config.urlToButtonCss);
    var content = document.createElement('div');
    content.innerHTML = __WEBPACK_IMPORTED_MODULE_0__widget_widget_html___default.a;
    document.body.appendChild(content);
    var account = (_ref = (_config$userToken = config.userToken) !== null && _config$userToken !== void 0 ? _config$userToken : (_document$getElementB = document.getElementById('user-token')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.value) !== null && _ref !== void 0 ? _ref : null;
    var linkName = (_config$linkName = config.linkName) !== null && _config$linkName !== void 0 ? _config$linkName : "it-symphony";
    var linkUrl = (_config$urlLink = config.urlLink) !== null && _config$urlLink !== void 0 ? _config$urlLink : "http://it-symphony.com/";
    var popupMode = (_config$popupMode = config.popupMode) !== null && _config$popupMode !== void 0 ? _config$popupMode : "byUser";
    var startMode = (_config$startMode = config.startMode) !== null && _config$startMode !== void 0 ? _config$startMode : "auto";
    var startMessageWithoutBot = (_config$startMessageW = config.startMessageWithoutBot) !== null && _config$startMessageW !== void 0 ? _config$startMessageW : "Задайте ваш вопрос";
    var withoutLocation = config.withoutLocation;
    var separeteOperatorNameAndTimeSent = config.separeteOperatorNameAndTimeSent;
    var changeSendButtonIcon = config.changeSendButtonIcon;
    var src = config.urlToWidget + "&css=" + config.urlToCss + "&parent=" + document.URL + "&account=".concat(account) + "&linkName=".concat(linkName) + "&linkUrl=".concat(linkUrl) + "&popupMode=".concat(popupMode) + "&startMode=".concat(startMode) + "&startMessageWithoutBot=".concat(startMessageWithoutBot) + "&withoutLocation=".concat(withoutLocation) + "&separeteOperatorNameAndTimeSent=".concat(separeteOperatorNameAndTimeSent) + "&changeSendButtonIcon=".concat(changeSendButtonIcon);
    message = (_config$newMessageTex = config.newMessageText) !== null && _config$newMessageTex !== void 0 ? _config$newMessageTex : "*New message*";
    Object(__WEBPACK_IMPORTED_MODULE_1__widget_widget__["b" /* Widget */])(src);
    console.log("Chat-Widget started", src);
  } // get message to show 'new message' in tab name


  var eventer = window["addEventListener"];
  eventer("message", function (e) {
    if (e.data === "newMessage" && (document.hidden || document.querySelector("#chat-widget__content").getAttribute('style') === 'display: none;')) {
      setTitleBlinking(true);
      openChat();
    } else if (e.data === "focus") {
      setTitleBlinking(false);
    } else if (e.data === "getGeolocation") {
      navigator.geolocation.getCurrentPosition(sendGeolocationEvent);
    } else if (e.data.type !== "webpackOk") {
      sendChatEvent(e.data);
    }
  });

  var sendGeolocationEvent = function sendGeolocationEvent(location) {
    var documentWindow = document.querySelector("iframe").contentWindow;
    var windowUrl = document.querySelector("iframe").src;
    var obj = JSON.stringify({
      coords: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }
    });
    documentWindow.postMessage(obj, windowUrl);
  };

  var sendChatEvent = function sendChatEvent(a) {
    if (a.length === 2) {
      dataLayer.push({
        'event': 'itsymphony event',
        'category': 'itsymphony',
        'action': a[0],
        'label': a[1]
      });
    }
  };

  var blur;

  var setTitleBlinking = function setTitleBlinking(enable) {
    if (enable === true && !blur) {
      setTimeout(function tick() {
        if (document.title == defaultTitle) {
          document.title = message;
        } else {
          document.title = defaultTitle;
        }

        ;
        blur = setTimeout(tick, 1000);
      }, 1000);
    } else if (enable === false) {
      clearTimeout(blur);
      blur = null;
      document.title = defaultTitle;
    }
  };

  var openChat = function openChat() {
    var button = document.getElementById("chat-widget__button--expand");

    if (getComputedStyle(button).display == 'block') {
      button.click();
    }
  };
}

app(window);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-widget__container\">\r\n    <a id=\"chat-widget__button--expand\" class=\"chat-widget__button chat-widget__button--expand\">\r\n        <i class=\"chat-widget__button-icon chat-widget__button--expand-icon\">Задать вопрос</i>\r\n    </a>\r\n    <div id=\"chat-widget__content\" class=\"chat-widget__content\" style=\"display: none;\">\r\n        <a class=\"chat-widget__button chat-widget__button--close\">\r\n            <i class=\"chat-widget__button--close-icon\">+</i>\r\n        </a>\r\n        <iframe allow=\"microphone\"></iframe>\r\n    </div>\r\n</div>\r\n";

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = Widget;
/* harmony export (immutable) */ __webpack_exports__["a"] = LoadButtonStyle;
var isWidgetLoaded = false;
function Widget(src) {
  var getExpandButton = function getExpandButton() {
    return document.getElementById("chat-widget__button--expand");
  };

  var getContent = function getContent() {
    return document.getElementById("chat-widget__content");
  };

  var loadWidget = function loadWidget() {
    var content = getContent();
    content.addEventListener("click", closeWidget);
    content.querySelector("iframe").src = src;
  };

  var openWidget = function openWidget() {
    if (!isWidgetLoaded) {
      loadWidget();
      isWidgetLoaded = true;
    }

    var content = getContent();
    var expandButton = getExpandButton();
    content.style.display = "block";
    expandButton.style.display = "none";
    document.getElementsByClassName("chat-widget__container")[0].classList.add("expanded");
  };

  var closeWidget = function closeWidget() {
    var content = getContent();
    var expandButton = getExpandButton();
    content.style.display = "none";
    expandButton.style.display = "block";
    document.getElementsByClassName("chat-widget__container")[0].classList.remove("expanded");
  };

  var init = function init() {
    //To avoid a bug in chrome where the widget is not displayed
    var ifrm = getContent().querySelector("iframe");

    ifrm.onload = function () {
      ifrm.style.display = "none";
      setTimeout(function () {
        ifrm.style.display = "block";
      }, 20);
    };

    var expandButton = getExpandButton();
    expandButton.addEventListener("click", openWidget);
    setTimeout(function () {
      expandButton.style.display = "block";
    }, 50);
  };

  var openWidgetByUrl = function openWidgetByUrl() {
    if (document.location.href.includes("#bot")) {
      setTimeout(function () {
        return openWidget();
      }, 100);
    }
  };

  var openWidgetByPopupMode = function openWidgetByPopupMode() {
    var urlParams = new URLSearchParams(src);
    var popupMode = urlParams.get('popupMode');

    if (popupMode === "auto") {
      setTimeout(function () {
        return openWidget();
      }, 100);
    }
  };

  init();
  openWidgetByUrl();
  openWidgetByPopupMode();
}
function LoadButtonStyle(src) {
  if ((src === null || src === void 0 ? void 0 : src.lenght) === 0) return;
  var style = document.createElement('link');
  style.setAttribute('rel', 'stylesheet');
  style.setAttribute('href', src);
  document.head.appendChild(style);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/dist/cjs.js!./widget.css", function() {
			var newContent = require("!!../../node_modules/css-loader/dist/cjs.js!./widget.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chat-widget__container {\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n    z-index: 99999;\r\n}\r\n\r\n.chat-widget__container .chat-widget__button {\r\n    display: inline-block;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    color: #fff;\r\n    background-color: #559ded;\r\n    border: none;\r\n    border-radius: 50%;\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\r\n    font-size: 15px;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    letter-spacing: 0.5px;\r\n    outline: 0;\r\n    text-transform: uppercase;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    -webkit-tap-highlight-color: transparent;\r\n    vertical-align: middle;\r\n    -webkit-transition: 0.3s ease-out;\r\n    transition: 0.3s ease-out;\r\n}\r\n\r\n    .chat-widget__container .chat-widget__button:hover {\r\n        box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\r\n    }\r\n\r\n.chat-widget__container .chat-widget__button-icon {\r\n    display: inline-block;\r\n    width: inherit;\r\n    color: #fff;\r\n    font-size: 48px;\r\n    text-align: center;\r\n    letter-spacing: normal;\r\n    text-transform: none;\r\n    white-space: nowrap;\r\n    word-wrap: normal;\r\n    direction: ltr;\r\n}\r\n\r\n.chat-widget__container .chat-widget__content {\r\n    width: 400px;\r\n    position: fixed;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    right: 0px;\r\n}\r\n\r\n.chat-widget__container .chat-widget__content iframe {\r\n    width: 100%;\r\n    height: 100%;\r\n    border: none;\r\n}\r\n\r\n.chat-widget__container .chat-widget__button--expand {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    display: inline-block;\r\n    width: 56px;\r\n    height: 56px;\r\n    line-height: 54px;\r\n    margin: 10px;\r\n    z-index: 99999;\r\n    display: none;\r\n}   \r\n\r\n.chat-widget__container .chat-widget__button--close {\r\n    position: fixed;\r\n    top: 15px;\r\n    right: 410px;\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 40px;\r\n    line-height: 42px;\r\n    margin: 5px;\r\n    z-index: 1;\r\n}\r\n\r\n.chat-widget__container .chat-widget__button--close-icon {\r\n    line-height: 30px;\r\n    margin-left: 6px;\r\n    margin-top: -4px;\r\n}\r\n\r\n@media(max-width: 475px) {\r\n    .chat-widget__container .chat-widget__content iframe {\r\n        right: 0px;\r\n        left: 0px;\r\n        position: fixed;\r\n    }\r\n\r\n    .chat-widget__container {\r\n        top: 0rem;\r\n        right: 0rem;\r\n    }\r\n\r\n    .chat-widget__container .chat-widget__content {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n\r\n    .chat-widget__container .chat-widget__button--close {\r\n        top: 0px;\r\n        right: 0px;\r\n    }\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGUzNjA0ODVlOTE5YmNlZTYwYTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpZGdldC93aWRnZXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0L3dpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0L3dpZGdldC5jc3M/YmFjNyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0L3dpZGdldC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyJdLCJuYW1lcyI6WyJhcHAiLCJ3aW5kb3ciLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdFRpdGxlIiwiZG9jdW1lbnQiLCJ0aXRsZSIsImdsb2JhbE9iamVjdCIsInF1ZXVlIiwicSIsImNvbmZpZyIsIm1lc3NhZ2UiLCJ1cmxUb1dpZGdldCIsInVybFRvQ3NzIiwidXJsVG9CdXR0b25Dc3MiLCJuZXdNZXNzYWdlVGV4dCIsInVzZXJUb2tlbiIsImxpbmtOYW1lIiwidXJsTGluayIsInBvcHVwTW9kZSIsInN0YXJ0TW9kZSIsInN0YXJ0TWVzc2FnZVdpdGhvdXRCb3QiLCJ3aXRob3V0TG9jYXRpb24iLCJzZXBhcmV0ZU9wZXJhdG9yTmFtZUFuZFRpbWVTZW50IiwiY2hhbmdlU2VuZEJ1dHRvbkljb24iLCJMb2FkQnV0dG9uU3R5bGUiLCJjb250ZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIndpZGdldEh0bWwiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJhY2NvdW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImxpbmtVcmwiLCJzcmMiLCJVUkwiLCJXaWRnZXQiLCJldmVudGVyIiwiZSIsImRhdGEiLCJoaWRkZW4iLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwic2V0VGl0bGVCbGlua2luZyIsIm9wZW5DaGF0IiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJzZW5kR2VvbG9jYXRpb25FdmVudCIsInR5cGUiLCJzZW5kQ2hhdEV2ZW50IiwibG9jYXRpb24iLCJkb2N1bWVudFdpbmRvdyIsImNvbnRlbnRXaW5kb3ciLCJ3aW5kb3dVcmwiLCJvYmoiLCJKU09OIiwic3RyaW5naWZ5IiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJwb3N0TWVzc2FnZSIsImEiLCJsZW5ndGgiLCJkYXRhTGF5ZXIiLCJwdXNoIiwiYmx1ciIsImVuYWJsZSIsInNldFRpbWVvdXQiLCJ0aWNrIiwiY2xlYXJUaW1lb3V0IiwiYnV0dG9uIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRpc3BsYXkiLCJjbGljayIsImlzV2lkZ2V0TG9hZGVkIiwiZ2V0RXhwYW5kQnV0dG9uIiwiZ2V0Q29udGVudCIsImxvYWRXaWRnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2VXaWRnZXQiLCJvcGVuV2lkZ2V0IiwiZXhwYW5kQnV0dG9uIiwic3R5bGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaW5pdCIsImlmcm0iLCJvbmxvYWQiLCJvcGVuV2lkZ2V0QnlVcmwiLCJocmVmIiwiaW5jbHVkZXMiLCJvcGVuV2lkZ2V0QnlQb3B1cE1vZGUiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJnZXQiLCJsZW5naHQiLCJzZXRBdHRyaWJ1dGUiLCJoZWFkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxHQUFULENBQWFDLE1BQWIsRUFBcUI7QUFDakJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBRUEsTUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLEtBQTlCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHTixNQUFNLENBQUNBLE1BQU0sQ0FBQyxhQUFELENBQVAsQ0FBM0I7QUFDQSxNQUFNTyxLQUFLLEdBQUdELFlBQVksQ0FBQ0UsQ0FBM0I7QUFDQSxNQUFJQyxNQUFNLEdBQUdGLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUyxDQUFULENBQWI7QUFDQSxNQUFJRyxPQUFKOztBQUNBLE1BQUdILEtBQUgsRUFDQTtBQUFBOztBQUNJLFFBQUksQ0FBQ0UsTUFBTSxDQUFDRSxXQUFaLEVBQ0E7QUFDSUYsWUFBTSxHQUFHO0FBQ0xFLG1CQUFXLEVBQUVKLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUyxDQUFULENBRFI7QUFFTEssZ0JBQVEsRUFBRUwsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTLENBQVQsQ0FGTDtBQUdMTSxzQkFBYyxFQUFFTixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVMsQ0FBVCxDQUhYO0FBSUxPLHNCQUFjLEVBQUVQLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUyxDQUFULENBSlg7QUFLTFEsaUJBQVMsRUFBRVIsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTLENBQVQsQ0FMTjtBQU1MUyxnQkFBUSxFQUFFVCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVMsQ0FBVCxDQU5MO0FBT0xVLGVBQU8sRUFBRVYsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTLENBQVQsQ0FQSjtBQVFMVyxpQkFBUyxFQUFFWCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVMsQ0FBVCxDQVJOO0FBU0xZLGlCQUFTLEVBQUVaLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUyxDQUFULENBVE47QUFVTGEsOEJBQXNCLEVBQUViLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUyxDQUFULENBVm5CO0FBV0xjLHVCQUFlLEVBQUVkLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUyxFQUFULENBWFo7QUFZTGUsdUNBQStCLEVBQUVmLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUyxFQUFULENBWjVCO0FBYUxnQiw0QkFBb0IsRUFBRWhCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUyxFQUFUO0FBYmpCLE9BQVQ7QUFlSDs7QUFFRGlCLG1GQUFlLENBQUNmLE1BQU0sQ0FBQ0ksY0FBUixDQUFmO0FBRUEsUUFBSVksT0FBTyxHQUFHckIsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0FELFdBQU8sQ0FBQ0UsU0FBUixHQUFvQkMsMkRBQXBCO0FBQ0F4QixZQUFRLENBQUN5QixJQUFULENBQWNDLFdBQWQsQ0FBMEJMLE9BQTFCO0FBRUEsUUFBTU0sT0FBTyxnQ0FBR3RCLE1BQU0sQ0FBQ00sU0FBViwwRkFBdUJYLFFBQVEsQ0FBQzRCLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBdkIsMERBQXVCLHNCQUF1Q0MsS0FBOUQsdUNBQXVFLElBQXBGO0FBQ0EsUUFBTWpCLFFBQVEsdUJBQUdQLE1BQU0sQ0FBQ08sUUFBViwrREFBc0IsYUFBcEM7QUFDQSxRQUFNa0IsT0FBTyxzQkFBR3pCLE1BQU0sQ0FBQ1EsT0FBViw2REFBcUIseUJBQWxDO0FBQ0EsUUFBTUMsU0FBUyx3QkFBR1QsTUFBTSxDQUFDUyxTQUFWLGlFQUF1QixRQUF0QztBQUNBLFFBQU1DLFNBQVMsd0JBQUdWLE1BQU0sQ0FBQ1UsU0FBVixpRUFBdUIsTUFBdEM7QUFDQSxRQUFNQyxzQkFBc0IsNEJBQUdYLE1BQU0sQ0FBQ1csc0JBQVYseUVBQW9DLG9CQUFoRTtBQUNBLFFBQU1DLGVBQWUsR0FBR1osTUFBTSxDQUFDWSxlQUEvQjtBQUNBLFFBQU1DLCtCQUErQixHQUFHYixNQUFNLENBQUNhLCtCQUEvQztBQUNBLFFBQU1DLG9CQUFvQixHQUFHZCxNQUFNLENBQUNjLG9CQUFwQztBQUNBLFFBQU1ZLEdBQUcsR0FBRzFCLE1BQU0sQ0FBQ0UsV0FBUCxHQUFxQixPQUFyQixHQUErQkYsTUFBTSxDQUFDRyxRQUF0QyxHQUNnQixVQURoQixHQUM2QlIsUUFBUSxDQUFDZ0MsR0FEdEMsc0JBRTRCTCxPQUY1Qix3QkFFcURmLFFBRnJELHVCQUc0QmtCLE9BSDVCLHlCQUdzRGhCLFNBSHRELHlCQUk4QkMsU0FKOUIsc0NBSXVFQyxzQkFKdkUsK0JBS29DQyxlQUxwQywrQ0FNb0RDLCtCQU5wRCxvQ0FPeUNDLG9CQVB6QyxDQUFaO0FBUUFiLFdBQU8sNEJBQUdELE1BQU0sQ0FBQ0ssY0FBVix5RUFBNEIsZUFBbkM7QUFDQXVCLDBFQUFNLENBQUNGLEdBQUQsQ0FBTjtBQUNBbEMsV0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUNpQyxHQUFuQztBQUNILEdBdkRnQixDQXlEakI7OztBQUNBLE1BQU1HLE9BQU8sR0FBR3RDLE1BQU0sQ0FBQyxrQkFBRCxDQUF0QjtBQUNBc0MsU0FBTyxDQUFDLFNBQUQsRUFBWSxVQUFVQyxDQUFWLEVBQWE7QUFDNUIsUUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEtBQVcsWUFBWCxLQUE0QnBDLFFBQVEsQ0FBQ3FDLE1BQVQsSUFBbUJyQyxRQUFRLENBQUNzQyxhQUFULENBQXVCLHVCQUF2QixFQUFnREMsWUFBaEQsQ0FBNkQsT0FBN0QsTUFBMEUsZ0JBQXpILENBQUosRUFBZ0o7QUFDNUlDLHNCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDQUMsY0FBUTtBQUNYLEtBSEQsTUFHTyxJQUFJTixDQUFDLENBQUNDLElBQUYsS0FBVyxPQUFmLEVBQXdCO0FBQzNCSSxzQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0gsS0FGTSxNQUVBLElBQUlMLENBQUMsQ0FBQ0MsSUFBRixLQUFXLGdCQUFmLEVBQWlDO0FBQ3BDTSxlQUFTLENBQUNDLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUF5Q0Msb0JBQXpDO0FBQ0gsS0FGTSxNQUVBLElBQUlWLENBQUMsQ0FBQ0MsSUFBRixDQUFPVSxJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQ3BDQyxtQkFBYSxDQUFDWixDQUFDLENBQUNDLElBQUgsQ0FBYjtBQUNIO0FBQ0osR0FYTSxDQUFQOztBQWFBLE1BQU1TLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBVUcsUUFBVixFQUFvQjtBQUM3QyxRQUFJQyxjQUFjLEdBQUdqRCxRQUFRLENBQUNzQyxhQUFULENBQXVCLFFBQXZCLEVBQWlDWSxhQUF0RDtBQUNBLFFBQUlDLFNBQVMsR0FBR25ELFFBQVEsQ0FBQ3NDLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUNQLEdBQWpEO0FBQ0EsUUFBSXFCLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRUMsWUFBTSxFQUFFO0FBQUVDLGdCQUFRLEVBQUVSLFFBQVEsQ0FBQ08sTUFBVCxDQUFnQkMsUUFBNUI7QUFBc0NDLGlCQUFTLEVBQUVULFFBQVEsQ0FBQ08sTUFBVCxDQUFnQkU7QUFBakU7QUFBVixLQUFmLENBQVY7QUFDQVIsa0JBQWMsQ0FBQ1MsV0FBZixDQUEyQk4sR0FBM0IsRUFBZ0NELFNBQWhDO0FBQ0gsR0FMRDs7QUFPQSxNQUFNSixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQVVZLENBQVYsRUFBYTtBQUMvQixRQUFJQSxDQUFDLENBQUNDLE1BQUYsS0FBYSxDQUFqQixFQUFvQjtBQUNoQkMsZUFBUyxDQUFDQyxJQUFWLENBQWU7QUFDWCxpQkFBUyxrQkFERTtBQUVYLG9CQUFZLFlBRkQ7QUFHWCxrQkFBVUgsQ0FBQyxDQUFDLENBQUQsQ0FIQTtBQUlYLGlCQUFTQSxDQUFDLENBQUMsQ0FBRDtBQUpDLE9BQWY7QUFNSDtBQUNKLEdBVEQ7O0FBV0EsTUFBSUksSUFBSjs7QUFDQSxNQUFNdkIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFVd0IsTUFBVixFQUFrQjtBQUN2QyxRQUFJQSxNQUFNLEtBQUssSUFBWCxJQUFtQixDQUFDRCxJQUF4QixFQUE4QjtBQUMxQkUsZ0JBQVUsQ0FBQyxTQUFTQyxJQUFULEdBQWdCO0FBQ3ZCLFlBQUlsRSxRQUFRLENBQUNDLEtBQVQsSUFBa0JGLFlBQXRCLEVBQW9DO0FBQ2hDQyxrQkFBUSxDQUFDQyxLQUFULEdBQWlCSyxPQUFqQjtBQUNILFNBRkQsTUFHSztBQUNETixrQkFBUSxDQUFDQyxLQUFULEdBQWlCRixZQUFqQjtBQUNIOztBQUFBO0FBQ0RnRSxZQUFJLEdBQUdFLFVBQVUsQ0FBQ0MsSUFBRCxFQUFPLElBQVAsQ0FBakI7QUFDSCxPQVJTLEVBUVAsSUFSTyxDQUFWO0FBU0gsS0FWRCxNQVVPLElBQUlGLE1BQU0sS0FBSyxLQUFmLEVBQXNCO0FBQ3pCRyxrQkFBWSxDQUFDSixJQUFELENBQVo7QUFDQUEsVUFBSSxHQUFHLElBQVA7QUFDQS9ELGNBQVEsQ0FBQ0MsS0FBVCxHQUFpQkYsWUFBakI7QUFDSDtBQUNKLEdBaEJEOztBQWtCQSxNQUFNMEMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBWTtBQUN6QixRQUFJMkIsTUFBTSxHQUFHcEUsUUFBUSxDQUFDNEIsY0FBVCxDQUF3Qiw2QkFBeEIsQ0FBYjs7QUFDQSxRQUFJeUMsZ0JBQWdCLENBQUNELE1BQUQsQ0FBaEIsQ0FBeUJFLE9BQXpCLElBQW9DLE9BQXhDLEVBQWlEO0FBQzdDRixZQUFNLENBQUNHLEtBQVA7QUFDSDtBQUNKLEdBTEQ7QUFNSDs7QUFFRDVFLEdBQUcsQ0FBQ0MsTUFBRCxDQUFILEM7Ozs7OztBQzFIQSw4V0FBOFcsNk87Ozs7Ozs7QUNBOVc7QUFBQTtBQUFBLElBQUk0RSxjQUFjLEdBQUcsS0FBckI7QUFFTyxTQUFTdkMsTUFBVCxDQUFnQkYsR0FBaEIsRUFBcUI7QUFDeEIsTUFBTTBDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBVztBQUMvQixXQUFPekUsUUFBUSxDQUFDNEIsY0FBVCxDQUF3Qiw2QkFBeEIsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsTUFBTThDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVc7QUFDMUIsV0FBTzFFLFFBQVEsQ0FBQzRCLGNBQVQsQ0FBd0Isc0JBQXhCLENBQVA7QUFDSCxHQUZEOztBQUlBLE1BQU0rQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFXO0FBQzFCLFFBQU10RCxPQUFPLEdBQUdxRCxVQUFVLEVBQTFCO0FBQ0FyRCxXQUFPLENBQUN1RCxnQkFBUixDQUF5QixPQUF6QixFQUFrQ0MsV0FBbEM7QUFDQXhELFdBQU8sQ0FBQ2lCLGFBQVIsQ0FBc0IsUUFBdEIsRUFBZ0NQLEdBQWhDLEdBQXNDQSxHQUF0QztBQUNILEdBSkQ7O0FBTUEsTUFBTStDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVc7QUFDMUIsUUFBRyxDQUFDTixjQUFKLEVBQW9CO0FBQ2hCRyxnQkFBVTtBQUNWSCxvQkFBYyxHQUFHLElBQWpCO0FBQ0g7O0FBRUQsUUFBTW5ELE9BQU8sR0FBR3FELFVBQVUsRUFBMUI7QUFDQSxRQUFNSyxZQUFZLEdBQUdOLGVBQWUsRUFBcEM7QUFFQXBELFdBQU8sQ0FBQzJELEtBQVIsQ0FBY1YsT0FBZCxHQUF3QixPQUF4QjtBQUNBUyxnQkFBWSxDQUFDQyxLQUFiLENBQW1CVixPQUFuQixHQUE2QixNQUE3QjtBQUNBdEUsWUFBUSxDQUFDaUYsc0JBQVQsQ0FBZ0Msd0JBQWhDLEVBQTBELENBQTFELEVBQTZEQyxTQUE3RCxDQUF1RUMsR0FBdkUsQ0FBMkUsVUFBM0U7QUFDSCxHQVpEOztBQWNBLE1BQU1OLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVc7QUFDM0IsUUFBTXhELE9BQU8sR0FBR3FELFVBQVUsRUFBMUI7QUFDQSxRQUFNSyxZQUFZLEdBQUdOLGVBQWUsRUFBcEM7QUFFQXBELFdBQU8sQ0FBQzJELEtBQVIsQ0FBY1YsT0FBZCxHQUF3QixNQUF4QjtBQUNBUyxnQkFBWSxDQUFDQyxLQUFiLENBQW1CVixPQUFuQixHQUE2QixPQUE3QjtBQUNBdEUsWUFBUSxDQUFDaUYsc0JBQVQsQ0FBZ0Msd0JBQWhDLEVBQTBELENBQTFELEVBQTZEQyxTQUE3RCxDQUF1RUUsTUFBdkUsQ0FBOEUsVUFBOUU7QUFDSCxHQVBEOztBQVNBLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQVk7QUFDckI7QUFDQSxRQUFNQyxJQUFJLEdBQUdaLFVBQVUsR0FBR3BDLGFBQWIsQ0FBMkIsUUFBM0IsQ0FBYjs7QUFDQWdELFFBQUksQ0FBQ0MsTUFBTCxHQUFjLFlBQVk7QUFBRUQsVUFBSSxDQUFDTixLQUFMLENBQVdWLE9BQVgsR0FBcUIsTUFBckI7QUFBNkJMLGdCQUFVLENBQUMsWUFBTTtBQUFFcUIsWUFBSSxDQUFDTixLQUFMLENBQVdWLE9BQVgsR0FBcUIsT0FBckI7QUFBK0IsT0FBeEMsRUFBMEMsRUFBMUMsQ0FBVjtBQUF5RCxLQUFsSDs7QUFFQSxRQUFNUyxZQUFZLEdBQUdOLGVBQWUsRUFBcEM7QUFDQU0sZ0JBQVksQ0FBQ0gsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUNFLFVBQXZDO0FBQ0FiLGNBQVUsQ0FBQyxZQUFNO0FBQ2JjLGtCQUFZLENBQUNDLEtBQWIsQ0FBbUJWLE9BQW5CLEdBQTZCLE9BQTdCO0FBQ0gsS0FGUyxFQUVQLEVBRk8sQ0FBVjtBQUdILEdBVkQ7O0FBWUEsTUFBTWtCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBWTtBQUNoQyxRQUFJeEYsUUFBUSxDQUFDZ0QsUUFBVCxDQUFrQnlDLElBQWxCLENBQXVCQyxRQUF2QixDQUFnQyxNQUFoQyxDQUFKLEVBQTZDO0FBQ3pDekIsZ0JBQVUsQ0FBQztBQUFBLGVBQU1hLFVBQVUsRUFBaEI7QUFBQSxPQUFELEVBQXFCLEdBQXJCLENBQVY7QUFDSDtBQUNKLEdBSkQ7O0FBTUEsTUFBTWEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFXO0FBQ3JDLFFBQU1DLFNBQVMsR0FBRyxJQUFJQyxlQUFKLENBQW9COUQsR0FBcEIsQ0FBbEI7QUFDQSxRQUFNakIsU0FBUyxHQUFHOEUsU0FBUyxDQUFDRSxHQUFWLENBQWMsV0FBZCxDQUFsQjs7QUFDQSxRQUFJaEYsU0FBUyxLQUFLLE1BQWxCLEVBQTBCO0FBQ3RCbUQsZ0JBQVUsQ0FBQztBQUFBLGVBQU1hLFVBQVUsRUFBaEI7QUFBQSxPQUFELEVBQXFCLEdBQXJCLENBQVY7QUFDSDtBQUNKLEdBTkQ7O0FBUUFPLE1BQUk7QUFDSkcsaUJBQWU7QUFDZkcsdUJBQXFCO0FBQ3hCO0FBRU0sU0FBU3ZFLGVBQVQsQ0FBeUJXLEdBQXpCLEVBQThCO0FBQ2pDLE1BQUcsQ0FBQUEsR0FBRyxTQUFILElBQUFBLEdBQUcsV0FBSCxZQUFBQSxHQUFHLENBQUVnRSxNQUFMLE1BQWdCLENBQW5CLEVBQXNCO0FBQ3RCLE1BQU1mLEtBQUssR0FBR2hGLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBZDtBQUNBMEQsT0FBSyxDQUFDZ0IsWUFBTixDQUFtQixLQUFuQixFQUEwQixZQUExQjtBQUNBaEIsT0FBSyxDQUFDZ0IsWUFBTixDQUFtQixNQUFuQixFQUEyQmpFLEdBQTNCO0FBQ0EvQixVQUFRLENBQUNpRyxJQUFULENBQWN2RSxXQUFkLENBQTBCc0QsS0FBMUI7QUFDSCxDOzs7Ozs7QUM3RUQ7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsQ0FBMEQ7QUFDaEYsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWEsbUJBQU8sQ0FBQyxDQUFtRDtBQUN4RTtBQUNBO0FBQ0EsR0FBRyxLQUFVO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7OztBQ3pCQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLENBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsNEJBQTRCLHdCQUF3QixrQkFBa0IsaUJBQWlCLHVCQUF1QixLQUFLLHNEQUFzRCw4QkFBOEIsbUJBQW1CLHdCQUF3Qix5QkFBeUIsb0JBQW9CLGtDQUFrQyxxQkFBcUIsMkJBQTJCLHdIQUF3SCx3QkFBd0IsOEJBQThCLDJCQUEyQiw4QkFBOEIsbUJBQW1CLGtDQUFrQyxrQ0FBa0MsK0JBQStCLDhCQUE4QiwwQkFBMEIsaURBQWlELCtCQUErQiwwQ0FBMEMsa0NBQWtDLEtBQUssZ0VBQWdFLDRIQUE0SCxTQUFTLDJEQUEyRCw4QkFBOEIsdUJBQXVCLG9CQUFvQix3QkFBd0IsMkJBQTJCLCtCQUErQiw2QkFBNkIsNEJBQTRCLDBCQUEwQix1QkFBdUIsS0FBSyx1REFBdUQscUJBQXFCLHdCQUF3QixpQkFBaUIsb0JBQW9CLG1CQUFtQixLQUFLLDhEQUE4RCxvQkFBb0IscUJBQXFCLHFCQUFxQixLQUFLLDhEQUE4RCx3QkFBd0IsaUJBQWlCLGtCQUFrQiw4QkFBOEIsb0JBQW9CLHFCQUFxQiwwQkFBMEIscUJBQXFCLHVCQUF1QixzQkFBc0IsS0FBSyxnRUFBZ0Usd0JBQXdCLGtCQUFrQixxQkFBcUIsOEJBQThCLG9CQUFvQixxQkFBcUIsMEJBQTBCLG9CQUFvQixtQkFBbUIsS0FBSyxrRUFBa0UsMEJBQTBCLHlCQUF5Qix5QkFBeUIsS0FBSyxrQ0FBa0MsOERBQThELHVCQUF1QixzQkFBc0IsNEJBQTRCLFNBQVMscUNBQXFDLHNCQUFzQix3QkFBd0IsU0FBUywyREFBMkQsd0JBQXdCLHlCQUF5QixTQUFTLGlFQUFpRSxxQkFBcUIsdUJBQXVCLFNBQVMsS0FBSztBQUN4NkY7QUFDQTs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyxDQUFROztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM1V0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBIiwiZmlsZSI6IndpZGdldC1sb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwZTM2MDQ4NWU5MTliY2VlNjBhMSIsImltcG9ydCB3aWRnZXRIdG1sIGZyb20gXCIuL3dpZGdldC93aWRnZXQuaHRtbFwiO1xyXG5pbXBvcnQge1dpZGdldCwgTG9hZEJ1dHRvblN0eWxlfSBmcm9tIFwiLi93aWRnZXQvd2lkZ2V0XCI7XHJcblxyXG5pbXBvcnQgXCIuL3dpZGdldC93aWRnZXQuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBhcHAod2luZG93KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNoYXQtV2lkZ2V0IHN0YXJ0aW5nXCIpO1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRUaXRsZSA9IGRvY3VtZW50LnRpdGxlO1xyXG4gICAgY29uc3QgZ2xvYmFsT2JqZWN0ID0gd2luZG93W3dpbmRvd1tcIkNoYXQtV2lkZ2V0XCJdXTtcclxuICAgIGNvbnN0IHF1ZXVlID0gZ2xvYmFsT2JqZWN0LnE7XHJcbiAgICB2YXIgY29uZmlnID0gcXVldWVbMF1bMF07XHJcbiAgICBsZXQgbWVzc2FnZTtcclxuICAgIGlmKHF1ZXVlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghY29uZmlnLnVybFRvV2lkZ2V0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsVG9XaWRnZXQ6IHF1ZXVlWzBdWzBdLFxyXG4gICAgICAgICAgICAgICAgdXJsVG9Dc3M6IHF1ZXVlWzBdWzFdLFxyXG4gICAgICAgICAgICAgICAgdXJsVG9CdXR0b25Dc3M6IHF1ZXVlWzBdWzJdLFxyXG4gICAgICAgICAgICAgICAgbmV3TWVzc2FnZVRleHQ6IHF1ZXVlWzBdWzNdLFxyXG4gICAgICAgICAgICAgICAgdXNlclRva2VuOiBxdWV1ZVswXVs0XSxcclxuICAgICAgICAgICAgICAgIGxpbmtOYW1lOiBxdWV1ZVswXVs1XSxcclxuICAgICAgICAgICAgICAgIHVybExpbms6IHF1ZXVlWzBdWzZdLFxyXG4gICAgICAgICAgICAgICAgcG9wdXBNb2RlOiBxdWV1ZVswXVs3XSxcclxuICAgICAgICAgICAgICAgIHN0YXJ0TW9kZTogcXVldWVbMF1bOF0sXHJcbiAgICAgICAgICAgICAgICBzdGFydE1lc3NhZ2VXaXRob3V0Qm90OiBxdWV1ZVswXVs5XSwgXHJcbiAgICAgICAgICAgICAgICB3aXRob3V0TG9jYXRpb246IHF1ZXVlWzBdWzEwXSwgXHJcbiAgICAgICAgICAgICAgICBzZXBhcmV0ZU9wZXJhdG9yTmFtZUFuZFRpbWVTZW50OiBxdWV1ZVswXVsxMV0sXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VTZW5kQnV0dG9uSWNvbjogcXVldWVbMF1bMTJdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvYWRCdXR0b25TdHlsZShjb25maWcudXJsVG9CdXR0b25Dc3MpO1xyXG5cclxuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gd2lkZ2V0SHRtbDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gY29uZmlnLnVzZXJUb2tlbiA/PyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci10b2tlbicpPy52YWx1ZSA/PyBudWxsO1xyXG4gICAgICAgIGNvbnN0IGxpbmtOYW1lID0gY29uZmlnLmxpbmtOYW1lID8/IFwiaXQtc3ltcGhvbnlcIjtcclxuICAgICAgICBjb25zdCBsaW5rVXJsID0gY29uZmlnLnVybExpbmsgPz8gXCJodHRwOi8vaXQtc3ltcGhvbnkuY29tL1wiO1xyXG4gICAgICAgIGNvbnN0IHBvcHVwTW9kZSA9IGNvbmZpZy5wb3B1cE1vZGUgPz8gXCJieVVzZXJcIjtcclxuICAgICAgICBjb25zdCBzdGFydE1vZGUgPSBjb25maWcuc3RhcnRNb2RlID8/IFwiYXV0b1wiO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0TWVzc2FnZVdpdGhvdXRCb3QgPSBjb25maWcuc3RhcnRNZXNzYWdlV2l0aG91dEJvdCA/PyBcItCX0LDQtNCw0LnRgtC1INCy0LDRiCDQstC+0L/RgNC+0YFcIjtcclxuICAgICAgICBjb25zdCB3aXRob3V0TG9jYXRpb24gPSBjb25maWcud2l0aG91dExvY2F0aW9uO1xyXG4gICAgICAgIGNvbnN0IHNlcGFyZXRlT3BlcmF0b3JOYW1lQW5kVGltZVNlbnQgPSBjb25maWcuc2VwYXJldGVPcGVyYXRvck5hbWVBbmRUaW1lU2VudDtcclxuICAgICAgICBjb25zdCBjaGFuZ2VTZW5kQnV0dG9uSWNvbiA9IGNvbmZpZy5jaGFuZ2VTZW5kQnV0dG9uSWNvbjtcclxuICAgICAgICBjb25zdCBzcmMgPSBjb25maWcudXJsVG9XaWRnZXQgKyBcIiZjc3M9XCIgKyBjb25maWcudXJsVG9Dc3MgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiZwYXJlbnQ9XCIgKyBkb2N1bWVudC5VUkwgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJmFjY291bnQ9JHthY2NvdW50fWAgKyBgJmxpbmtOYW1lPSR7bGlua05hbWV9YCArIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJmxpbmtVcmw9JHtsaW5rVXJsfWAgKyBgJnBvcHVwTW9kZT0ke3BvcHVwTW9kZX1gICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAmc3RhcnRNb2RlPSR7c3RhcnRNb2RlfWAgKyBgJnN0YXJ0TWVzc2FnZVdpdGhvdXRCb3Q9JHtzdGFydE1lc3NhZ2VXaXRob3V0Qm90fWAgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJndpdGhvdXRMb2NhdGlvbj0ke3dpdGhvdXRMb2NhdGlvbn1gICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAmc2VwYXJldGVPcGVyYXRvck5hbWVBbmRUaW1lU2VudD0ke3NlcGFyZXRlT3BlcmF0b3JOYW1lQW5kVGltZVNlbnR9YCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAmY2hhbmdlU2VuZEJ1dHRvbkljb249JHtjaGFuZ2VTZW5kQnV0dG9uSWNvbn1gO1xyXG4gICAgICAgIG1lc3NhZ2UgPSBjb25maWcubmV3TWVzc2FnZVRleHQgPz8gXCIqTmV3IG1lc3NhZ2UqXCI7XHJcbiAgICAgICAgV2lkZ2V0KHNyYyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGF0LVdpZGdldCBzdGFydGVkXCIsIHNyYyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IG1lc3NhZ2UgdG8gc2hvdyAnbmV3IG1lc3NhZ2UnIGluIHRhYiBuYW1lXHJcbiAgICBjb25zdCBldmVudGVyID0gd2luZG93W1wiYWRkRXZlbnRMaXN0ZW5lclwiXTtcclxuICAgIGV2ZW50ZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YSA9PT0gXCJuZXdNZXNzYWdlXCIgJiYgKGRvY3VtZW50LmhpZGRlbiB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NoYXQtd2lkZ2V0X19jb250ZW50XCIpLmdldEF0dHJpYnV0ZSgnc3R5bGUnKSA9PT0gJ2Rpc3BsYXk6IG5vbmU7JykpIHtcclxuICAgICAgICAgICAgc2V0VGl0bGVCbGlua2luZyh0cnVlKTtcclxuICAgICAgICAgICAgb3BlbkNoYXQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YSA9PT0gXCJmb2N1c1wiKSB7XHJcbiAgICAgICAgICAgIHNldFRpdGxlQmxpbmtpbmcoZmFsc2UpOyAgIFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhID09PSBcImdldEdlb2xvY2F0aW9uXCIpIHtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzZW5kR2VvbG9jYXRpb25FdmVudCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSAhPT0gXCJ3ZWJwYWNrT2tcIikge1xyXG4gICAgICAgICAgICBzZW5kQ2hhdEV2ZW50KGUuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2VuZEdlb2xvY2F0aW9uRXZlbnQgPSBmdW5jdGlvbiAobG9jYXRpb24pIHtcclxuICAgICAgICBsZXQgZG9jdW1lbnRXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpLmNvbnRlbnRXaW5kb3c7XHJcbiAgICAgICAgbGV0IHdpbmRvd1VybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpZnJhbWVcIikuc3JjO1xyXG4gICAgICAgIGxldCBvYmogPSBKU09OLnN0cmluZ2lmeSh7IGNvb3JkczogeyBsYXRpdHVkZTogbG9jYXRpb24uY29vcmRzLmxhdGl0dWRlLCBsb25naXR1ZGU6IGxvY2F0aW9uLmNvb3Jkcy5sb25naXR1ZGUgfX0pO1xyXG4gICAgICAgIGRvY3VtZW50V2luZG93LnBvc3RNZXNzYWdlKG9iaiwgd2luZG93VXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZW5kQ2hhdEV2ZW50ID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICBpZiAoYS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgZGF0YUxheWVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgJ2V2ZW50JzogJ2l0c3ltcGhvbnkgZXZlbnQnLFxyXG4gICAgICAgICAgICAgICAgJ2NhdGVnb3J5JzogJ2l0c3ltcGhvbnknLFxyXG4gICAgICAgICAgICAgICAgJ2FjdGlvbic6IGFbMF0sXHJcbiAgICAgICAgICAgICAgICAnbGFiZWwnOiBhWzFdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgYmx1cjtcclxuICAgIGNvbnN0IHNldFRpdGxlQmxpbmtpbmcgPSBmdW5jdGlvbiAoZW5hYmxlKSB7XHJcbiAgICAgICAgaWYgKGVuYWJsZSA9PT0gdHJ1ZSAmJiAhYmx1cikge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpY2soKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQudGl0bGUgPT0gZGVmYXVsdFRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBtZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBkZWZhdWx0VGl0bGU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYmx1ciA9IHNldFRpbWVvdXQodGljaywgMTAwMCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfSBlbHNlIGlmIChlbmFibGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChibHVyKTtcclxuICAgICAgICAgICAgYmx1ciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gZGVmYXVsdFRpdGxlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IG9wZW5DaGF0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXQtd2lkZ2V0X19idXR0b24tLWV4cGFuZFwiKTtcclxuICAgICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShidXR0b24pLmRpc3BsYXkgPT0gJ2Jsb2NrJykge1xyXG4gICAgICAgICAgICBidXR0b24uY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5hcHAod2luZG93KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjaGF0LXdpZGdldF9fY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGEgaWQ9XFxcImNoYXQtd2lkZ2V0X19idXR0b24tLWV4cGFuZFxcXCIgY2xhc3M9XFxcImNoYXQtd2lkZ2V0X19idXR0b24gY2hhdC13aWRnZXRfX2J1dHRvbi0tZXhwYW5kXFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJjaGF0LXdpZGdldF9fYnV0dG9uLWljb24gY2hhdC13aWRnZXRfX2J1dHRvbi0tZXhwYW5kLWljb25cXFwiPtCX0LDQtNCw0YLRjCDQstC+0L/RgNC+0YE8L2k+XFxyXFxuICAgIDwvYT5cXHJcXG4gICAgPGRpdiBpZD1cXFwiY2hhdC13aWRnZXRfX2NvbnRlbnRcXFwiIGNsYXNzPVxcXCJjaGF0LXdpZGdldF9fY29udGVudFxcXCIgc3R5bGU9XFxcImRpc3BsYXk6IG5vbmU7XFxcIj5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJjaGF0LXdpZGdldF9fYnV0dG9uIGNoYXQtd2lkZ2V0X19idXR0b24tLWNsb3NlXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiY2hhdC13aWRnZXRfX2J1dHRvbi0tY2xvc2UtaWNvblxcXCI+KzwvaT5cXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgICAgIDxpZnJhbWUgYWxsb3c9XFxcIm1pY3JvcGhvbmVcXFwiPjwvaWZyYW1lPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy93aWRnZXQvd2lkZ2V0Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibGV0IGlzV2lkZ2V0TG9hZGVkID0gZmFsc2U7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gV2lkZ2V0KHNyYykge1xyXG4gICAgY29uc3QgZ2V0RXhwYW5kQnV0dG9uID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdC13aWRnZXRfX2J1dHRvbi0tZXhwYW5kXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdC13aWRnZXRfX2NvbnRlbnRcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvYWRXaWRnZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xyXG4gICAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlV2lkZ2V0KTtcclxuICAgICAgICBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJpZnJhbWVcIikuc3JjID0gc3JjO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wZW5XaWRnZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZighaXNXaWRnZXRMb2FkZWQpIHtcclxuICAgICAgICAgICAgbG9hZFdpZGdldCgpO1xyXG4gICAgICAgICAgICBpc1dpZGdldExvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xyXG4gICAgICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGdldEV4cGFuZEJ1dHRvbigpO1xyXG5cclxuICAgICAgICBjb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgZXhwYW5kQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hhdC13aWRnZXRfX2NvbnRhaW5lclwiKVswXS5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kZWRcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNsb3NlV2lkZ2V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnQoKTtcclxuICAgICAgICBjb25zdCBleHBhbmRCdXR0b24gPSBnZXRFeHBhbmRCdXR0b24oKTtcclxuXHJcbiAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZXhwYW5kQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoYXQtd2lkZ2V0X19jb250YWluZXJcIilbMF0uY2xhc3NMaXN0LnJlbW92ZShcImV4cGFuZGVkXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vVG8gYXZvaWQgYSBidWcgaW4gY2hyb21lIHdoZXJlIHRoZSB3aWRnZXQgaXMgbm90IGRpc3BsYXllZFxyXG4gICAgICAgIGNvbnN0IGlmcm0gPSBnZXRDb250ZW50KCkucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKTtcclxuICAgICAgICBpZnJtLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHsgaWZybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IHNldFRpbWVvdXQoKCkgPT4geyBpZnJtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IH0sIDIwKSB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGdldEV4cGFuZEJ1dHRvbigpO1xyXG4gICAgICAgIGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbldpZGdldCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGV4cGFuZEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIH0sIDUwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb3BlbldpZGdldEJ5VXJsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiI2JvdFwiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG9wZW5XaWRnZXQoKSwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3BlbldpZGdldEJ5UG9wdXBNb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzcmMpO1xyXG4gICAgICAgIGNvbnN0IHBvcHVwTW9kZSA9IHVybFBhcmFtcy5nZXQoJ3BvcHVwTW9kZScpO1xyXG4gICAgICAgIGlmIChwb3B1cE1vZGUgPT09IFwiYXV0b1wiKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3BlbldpZGdldCgpLCAxMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0KCk7XHJcbiAgICBvcGVuV2lkZ2V0QnlVcmwoKTtcclxuICAgIG9wZW5XaWRnZXRCeVBvcHVwTW9kZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9hZEJ1dHRvblN0eWxlKHNyYykge1xyXG4gICAgaWYoc3JjPy5sZW5naHQgPT09IDApIHJldHVybjtcclxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xyXG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdocmVmJywgc3JjKTtcclxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93aWRnZXQvd2lkZ2V0LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2lkZ2V0LmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93aWRnZXQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dpZGdldC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3dpZGdldC93aWRnZXQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2hhdC13aWRnZXRfX2NvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgei1pbmRleDogOTk5OTk7XFxyXFxufVxcclxcblxcclxcbi5jaGF0LXdpZGdldF9fY29udGFpbmVyIC5jaGF0LXdpZGdldF9fYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU5ZGVkO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5jaGF0LXdpZGdldF9fY29udGFpbmVyIC5jaGF0LXdpZGdldF9fYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDdweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gICAgfVxcclxcblxcclxcbi5jaGF0LXdpZGdldF9fY29udGFpbmVyIC5jaGF0LXdpZGdldF9fYnV0dG9uLWljb24ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiBpbmhlcml0O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxyXFxufVxcclxcblxcclxcbi5jaGF0LXdpZGdldF9fY29udGFpbmVyIC5jaGF0LXdpZGdldF9fY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgYm90dG9tOiAwcHg7XFxyXFxuICAgIHJpZ2h0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jaGF0LXdpZGdldF9fY29udGFpbmVyIC5jaGF0LXdpZGdldF9fY29udGVudCBpZnJhbWUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGF0LXdpZGdldF9fY29udGFpbmVyIC5jaGF0LXdpZGdldF9fYnV0dG9uLS1leHBhbmQge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDU2cHg7XFxyXFxuICAgIGhlaWdodDogNTZweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDU0cHg7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgei1pbmRleDogOTk5OTk7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufSAgIFxcclxcblxcclxcbi5jaGF0LXdpZGdldF9fY29udGFpbmVyIC5jaGF0LXdpZGdldF9fYnV0dG9uLS1jbG9zZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAxNXB4O1xcclxcbiAgICByaWdodDogNDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhdC13aWRnZXRfX2NvbnRhaW5lciAuY2hhdC13aWRnZXRfX2J1dHRvbi0tY2xvc2UtaWNvbiB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA0NzVweCkge1xcclxcbiAgICAuY2hhdC13aWRnZXRfX2NvbnRhaW5lciAuY2hhdC13aWRnZXRfX2NvbnRlbnQgaWZyYW1lIHtcXHJcXG4gICAgICAgIHJpZ2h0OiAwcHg7XFxyXFxuICAgICAgICBsZWZ0OiAwcHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNoYXQtd2lkZ2V0X19jb250YWluZXIge1xcclxcbiAgICAgICAgdG9wOiAwcmVtO1xcclxcbiAgICAgICAgcmlnaHQ6IDByZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNoYXQtd2lkZ2V0X19jb250YWluZXIgLmNoYXQtd2lkZ2V0X19jb250ZW50IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jaGF0LXdpZGdldF9fY29udGFpbmVyIC5jaGF0LXdpZGdldF9fYnV0dG9uLS1jbG9zZSB7XFxyXFxuICAgICAgICB0b3A6IDBweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zcmMvd2lkZ2V0L3dpZGdldC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmIChzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHR9O1xufSkoZnVuY3Rpb24gKHRhcmdldCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpXG59KTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=