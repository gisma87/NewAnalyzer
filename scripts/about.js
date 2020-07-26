/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"about": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./about.js","vendors~about~analytic~main","vendors~about~main","vendors~about"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./about.js":
/*!******************!*\
  !*** ./about.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/about.css */ "./styles/about.css");
/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_about_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_components_CommitCardList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/CommitCardList */ "./js/components/CommitCardList.js");
/* harmony import */ var _js_components_CommitCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components/CommitCard */ "./js/components/CommitCard.js");
/* harmony import */ var _js_modules_GithubApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/modules/GithubApi */ "./js/modules/GithubApi.js");
/* harmony import */ var _js_constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/constants/constants */ "./js/constants/constants.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/js/swiper.esm.bundle.js");






var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_5__["default"]('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 16,
  fadeEffect: {
    crossFade: 'true'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
setTimeout(function () {
  mySwiper.update();
}, 1000);
var githubApi = new _js_modules_GithubApi__WEBPACK_IMPORTED_MODULE_3__["default"]('https://api.github.com/repos/gisma87/NewAnalyzer/commits');
var commitCard = new _js_components_CommitCard__WEBPACK_IMPORTED_MODULE_2__["default"]();
var commitCardList = new _js_components_CommitCardList__WEBPACK_IMPORTED_MODULE_1__["default"](_js_constants_constants__WEBPACK_IMPORTED_MODULE_4__["COMMIT_CONTAINER"], commitCard);
githubApi.getCommits().then(function (result) {
  return commitCardList.render(result);
}).catch(function (err) {
  console.log("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(err));
});

/***/ }),

/***/ "./js/components/CommitCard.js":
/*!*************************************!*\
  !*** ./js/components/CommitCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommitCard; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "../node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./js/constants/constants.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CommitCard = /*#__PURE__*/function () {
  function CommitCard(date, avatar_url, name, email, message, url) {
    _classCallCheck(this, CommitCard);

    this.commitElement = this.create(date, avatar_url, name, email, message, url);
  }

  _createClass(CommitCard, [{
    key: "create",
    value: function create(date, avatar_url, name, email, message) {
      var fragment = _constants_constants__WEBPACK_IMPORTED_MODULE_1__["TEMPLATE_COMMIT_CARD"].content.cloneNode(true);
      var commitsData = fragment.querySelector('.commits__data');
      var commitsAvatar = fragment.querySelector('.commits__img');
      var commitsName = fragment.querySelector('.commits__name');
      var commitsEmail = fragment.querySelector('.commits__email');
      var commitsParagraph = fragment.querySelector('.commits__paragraph');
      var newDate = new Date(date);
      commitsData.textContent = "".concat(newDate.toLocaleString("ru", {
        day: "numeric",
        month: 'long'
      }), ", ").concat(newDate.toLocaleString("ru", {
        year: 'numeric'
      }));

      if (avatar_url != null) {
        commitsAvatar.src = avatar_url;
      } else {
        commitsAvatar.src = './images/notphoto.png';
      }

      commitsName.textContent = name;
      commitsEmail.textContent = email;
      commitsParagraph.textContent = message;
      return fragment;
    }
  }]);

  return CommitCard;
}();



/***/ }),

/***/ "./js/components/CommitCardList.js":
/*!*****************************************!*\
  !*** ./js/components/CommitCardList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommitCardList; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CommitCardList = /*#__PURE__*/function () {
  function CommitCardList(container, commitElement) {
    _classCallCheck(this, CommitCardList);

    this.container = container;
    this.commitElement = commitElement;
  }

  _createClass(CommitCardList, [{
    key: "render",
    value: function render(commits) {
      // i = 20 - количество коммитов в блоке.
      for (var i = 0; i < 20; i++) {
        if (commits[i].commit != null) {
          var commit = this.commitElement.create(commits[i].commit.committer.date, commits[i].author.avatar_url, commits[i].commit.committer.name, commits[i].commit.committer.email, commits[i].commit.message);
          this.container.appendChild(commit);
        }
      }
    }
  }]);

  return CommitCardList;
}();



/***/ }),

/***/ "./js/constants/constants.js":
/*!***********************************!*\
  !*** ./js/constants/constants.js ***!
  \***********************************/
/*! exports provided: TEMPLATE_NEWS_CARD, SHOW_CARDS, SECTION_PRELOADER, SECTION_NOT_FOUND, SECTION_ERROR_SEARCH, CARD_CONTAINER, SECTION_SEARCH_RESULT, BUTTONS_MORE_CARDS, API_KEY, BASE_URL, FROM, TO, INPUT_SEARCH, FORM_SEARCH, ERROR_INPUT, RES_LOCAL_STORAGE, BUTTONS_SEARCH, DAY_IN_MS, WORD_QUERY, TOTAL_RESULT, WORD, SUM_WORD_IN_TITLE, MONTH, MONTHS_ARRAY, WEEK_IN_DAYS, DATE_NOW, DAY_IN_TABLE, PERCENT_IN_TABLE, TEMPLATE_COMMIT_CARD, COMMIT_CONTAINER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPLATE_NEWS_CARD", function() { return TEMPLATE_NEWS_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_CARDS", function() { return SHOW_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECTION_PRELOADER", function() { return SECTION_PRELOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECTION_NOT_FOUND", function() { return SECTION_NOT_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECTION_ERROR_SEARCH", function() { return SECTION_ERROR_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_CONTAINER", function() { return CARD_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECTION_SEARCH_RESULT", function() { return SECTION_SEARCH_RESULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTONS_MORE_CARDS", function() { return BUTTONS_MORE_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEY", function() { return API_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FROM", function() { return FROM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TO", function() { return TO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_SEARCH", function() { return INPUT_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_SEARCH", function() { return FORM_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_INPUT", function() { return ERROR_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RES_LOCAL_STORAGE", function() { return RES_LOCAL_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTONS_SEARCH", function() { return BUTTONS_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAY_IN_MS", function() { return DAY_IN_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORD_QUERY", function() { return WORD_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOTAL_RESULT", function() { return TOTAL_RESULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORD", function() { return WORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUM_WORD_IN_TITLE", function() { return SUM_WORD_IN_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTH", function() { return MONTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTHS_ARRAY", function() { return MONTHS_ARRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEK_IN_DAYS", function() { return WEEK_IN_DAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_NOW", function() { return DATE_NOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAY_IN_TABLE", function() { return DAY_IN_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERCENT_IN_TABLE", function() { return PERCENT_IN_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPLATE_COMMIT_CARD", function() { return TEMPLATE_COMMIT_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMIT_CONTAINER", function() { return COMMIT_CONTAINER; });
var API_KEY = '4ae594cae44745159670d56507226f52';
var BASE_URL = 'https://praktikum.tk/news/v2/everything?';
var TEMPLATE_NEWS_CARD = document.querySelector('#tmpl-card');
var TEMPLATE_COMMIT_CARD = document.querySelector('#tmpl-card-commit');
var CARD_CONTAINER = document.querySelector('.cards-container');
var COMMIT_CONTAINER = document.querySelector('.swiper-wrapper');
var SECTION_SEARCH_RESULT = document.querySelector('.search-result');
var SECTION_PRELOADER = document.querySelector('.wait');
var SECTION_NOT_FOUND = document.querySelector('.not-found');
var SECTION_ERROR_SEARCH = document.querySelector('.error-search');
var ERROR_INPUT = document.querySelector('.search__error');
var SHOW_CARDS = 3;
var BUTTONS_MORE_CARDS = document.querySelector('.search-result__button');
var BUTTONS_SEARCH = document.querySelector('.search__button');
var INPUT_SEARCH = document.querySelector('.search__input');
var FORM_SEARCH = document.querySelector('.search__form'); //количество миллисекунд в сутках

var DAY_IN_MS = 1000 * 60 * 60 * 24;
var WEEK_IN_MS = DAY_IN_MS * 7;
var TO = new Date();
var FROM = new Date(TO.getTime() - WEEK_IN_MS);
var RES_LOCAL_STORAGE = JSON.parse(localStorage.getItem('res'));
var WORD = localStorage.getItem('query');
var WORD_QUERY = document.querySelector('.analytic__query');
var TOTAL_RESULT = document.querySelector('.analytic__total-sum');
var SUM_WORD_IN_TITLE = document.querySelector('.analytic__title-sum');
var MONTH = document.querySelector('.analytic__month');
var MONTHS_ARRAY = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
var WEEK_IN_DAYS = 7;
var DATE_NOW = new Date();
var DAY_IN_TABLE = document.querySelectorAll('.analytic__table-day');
var PERCENT_IN_TABLE = document.querySelectorAll('.analytic__table-percent');


/***/ }),

/***/ "./js/modules/GithubApi.js":
/*!*********************************!*\
  !*** ./js/modules/GithubApi.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GithubApi; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GithubApi = /*#__PURE__*/function () {
  function GithubApi(baseUrl) {
    _classCallCheck(this, GithubApi);

    this.baseUrl = baseUrl;
  }

  _createClass(GithubApi, [{
    key: "getCommits",
    value: function getCommits() {
      return fetch(this.baseUrl).then(function (res) {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject("\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A: ".concat(res.status));
      });
    }
  }]);

  return GithubApi;
}();



/***/ }),

/***/ "./styles/about.css":
/*!**************************!*\
  !*** ./styles/about.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

/******/ });
//# sourceMappingURL=about.js.map