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
/******/ 		"analytic": 0
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
/******/ 	deferredModules.push(["./analytic.js","vendors~about~analytic~main","vendors~analytic"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./analytic.js":
/*!*********************!*\
  !*** ./analytic.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "../node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_analytic_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/analytic.css */ "./styles/analytic.css");
/* harmony import */ var _styles_analytic_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_analytic_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/constants/constants */ "./js/constants/constants.js");
/* harmony import */ var _js_utils_countWordInObjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/utils/countWordInObjects */ "./js/utils/countWordInObjects.js");
/* harmony import */ var _js_components_Statistics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/components/Statistics */ "./js/components/Statistics.js");




 // определяем текущий месяц

function searchMonth(res) {
  var date = new Date(res[0].publishedAt.slice(0, 10));
  return _js_constants_constants__WEBPACK_IMPORTED_MODULE_2__["MONTHS_ARRAY"][date.getMonth()];
} // отображаем искомое слово


_js_constants_constants__WEBPACK_IMPORTED_MODULE_2__["WORD_QUERY"].textContent = _js_constants_constants__WEBPACK_IMPORTED_MODULE_2__["WORD"]; // отображаем количество статей за неделю

_js_constants_constants__WEBPACK_IMPORTED_MODULE_2__["TOTAL_RESULT"].textContent = _js_constants_constants__WEBPACK_IMPORTED_MODULE_2__["RES_LOCAL_STORAGE"].totalResults; // отображаем количество упоминаний в заголовках

var arr = _js_constants_constants__WEBPACK_IMPORTED_MODULE_2__["RES_LOCAL_STORAGE"].articles;
_js_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SUM_WORD_IN_TITLE"].textContent = Object(_js_utils_countWordInObjects__WEBPACK_IMPORTED_MODULE_3__["countWordInObjects"])(arr, 'title'); // вписываем в таблицу текущий месяц

_js_constants_constants__WEBPACK_IMPORTED_MODULE_2__["MONTH"].textContent = "(" + searchMonth(_js_constants_constants__WEBPACK_IMPORTED_MODULE_2__["RES_LOCAL_STORAGE"].articles) + ")"; // создаём экземпляр класса графической таблицы 'аналитика по дням'

var statistics = new _js_components_Statistics__WEBPACK_IMPORTED_MODULE_4__["default"](_js_constants_constants__WEBPACK_IMPORTED_MODULE_2__["RES_LOCAL_STORAGE"]); // получаем массив дат за последнюю неделю

var datesShort = statistics.getDates(_js_constants_constants__WEBPACK_IMPORTED_MODULE_2__["DATE_NOW"]); // вписываем даты в таблицу за последнюю неделю

statistics.renderDatesGraph(datesShort, _js_constants_constants__WEBPACK_IMPORTED_MODULE_2__["DAY_IN_TABLE"]); // получаем массив дат из всех найденных новостей

var cardsDates = statistics.cardDates(); // отрисовываем шкалы новостей по дням за последнюю неделю

statistics.renderGraph(cardsDates, datesShort);

/***/ }),

/***/ "./js/components/Statistics.js":
/*!*************************************!*\
  !*** ./js/components/Statistics.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataGraph; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "../node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map */ "../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/constants */ "./js/constants/constants.js");
/* harmony import */ var _utils_countWordInObjects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/countWordInObjects */ "./js/utils/countWordInObjects.js");






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var DataGraph = /*#__PURE__*/function () {
  function DataGraph(res) {
    _classCallCheck(this, DataGraph);

    this.res = res;
  } // создаёт массив дат, состоящий из WEEK_IN_DAYS элементов и заканчивающийся датой dateNow


  _createClass(DataGraph, [{
    key: "getDates",
    value: function getDates(dateNow) {
      var dates = [dateNow];

      for (var i = 1; i < _constants_constants__WEBPACK_IMPORTED_MODULE_5__["WEEK_IN_DAYS"]; i++) {
        dates.unshift(new Date(dateNow - _constants_constants__WEBPACK_IMPORTED_MODULE_5__["DAY_IN_MS"] * i));
      }

      return dates.map(function (item) {
        return "".concat(item.toLocaleString("ru", {
          day: "numeric"
        }), ", ").concat(item.toLocaleString("ru", {
          weekday: 'short'
        }));
      });
    } // вставляет данные из массива datesShort в массив DOM-элементов DAY_IN_TABLE через textContent

  }, {
    key: "renderDatesGraph",
    value: function renderDatesGraph(datesShort, DAY_IN_TABLE) {
      DAY_IN_TABLE.forEach(function (item, i) {
        item.textContent = datesShort[i];
      });
    } // Изменяем в массиве формат даты, устанавливаем по типу: [{day: "numeric", weekday: 'short'}]

  }, {
    key: "cardDates",
    value: function cardDates() {
      this.res.articles.forEach(function (item) {
        item.publishedAt = new Date(item.publishedAt);
      });
      return this.res.articles.map(function (item) {
        item.publishedAt = "".concat(item.publishedAt.toLocaleString("ru", {
          day: "numeric"
        }), ", ").concat(item.publishedAt.toLocaleString("ru", {
          weekday: 'short'
        }));
        return item;
      });
    } // проходит по массиву cardsDates находит повторяющиеся элементы datesShort[i] и отрисовыввает шкалу
    // в PERCENT_IN_TABLE основываясь на сумме WORD в title и description полученного массива в текущей итерации

  }, {
    key: "renderGraph",
    value: function renderGraph(cardsDates, datesShort) {
      var _loop = function _loop(i) {
        var arr = cardsDates.filter(function (item) {
          return item.publishedAt === datesShort[i];
        });
        var sumWords = Object(_utils_countWordInObjects__WEBPACK_IMPORTED_MODULE_6__["countWordInObjects"])(arr, 'title') + Object(_utils_countWordInObjects__WEBPACK_IMPORTED_MODULE_6__["countWordInObjects"])(arr, 'description');
        console.log('Сумма равна:  ' + sumWords);
        _constants_constants__WEBPACK_IMPORTED_MODULE_5__["PERCENT_IN_TABLE"][i].textContent = sumWords;
        _constants_constants__WEBPACK_IMPORTED_MODULE_5__["PERCENT_IN_TABLE"][i].style.width = "".concat(sumWords, "%");
      };

      for (var i = 0; i < _constants_constants__WEBPACK_IMPORTED_MODULE_5__["WEEK_IN_DAYS"]; i++) {
        _loop(i);
      }
    }
  }]);

  return DataGraph;
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

/***/ "./js/utils/countWordInObjects.js":
/*!****************************************!*\
  !*** ./js/utils/countWordInObjects.js ***!
  \****************************************/
/*! exports provided: countWordInObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countWordInObjects", function() { return countWordInObjects; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "../node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "../node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/constants */ "./js/constants/constants.js");







var countWordInObjects = function countWordInObjects(arr, field) {
  var sumWords = 0;
  arr.forEach(function (item, i) {
    if (arr[i][field]) {
      if (arr[i][field].toLowerCase().includes(_constants_constants__WEBPACK_IMPORTED_MODULE_4__["WORD"].toLowerCase())) {
        sumWords++;
      }
    }
  });
  return sumWords;
};

/***/ }),

/***/ "./styles/analytic.css":
/*!*****************************!*\
  !*** ./styles/analytic.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

/******/ });
//# sourceMappingURL=analytic.js.map