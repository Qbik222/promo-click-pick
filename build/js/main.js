"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  var _sessionStorage$getIt, _Number, _document$querySelect3;
  var apiURL = 'https://fav-prom.com/api_click_pick';
  var stagesData = [{
    data: new Date("2025-05-20T00:00:00+03:00")
  }, {
    data: new Date("2025-05-25T00:00:00+03:00")
  }, {
    data: new Date("2025-05-30T00:00:00+03:00")
  }, {
    data: new Date("2025-06-05T00:00:00+03:00")
  }];
  var currentDate = new Date("2025-04-05T00:00:00+03:00");

  // let currentStage = stagesData.filter(stage => stage.data <= currentDate).length ?? 3;

  var currentStage = Number(sessionStorage.getItem("currentDate"));
  console.log(currentStage);
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join'),
    loader = document.querySelector(".spinner-overlay"),
    stages = document.querySelectorAll("[data-stage]"),
    stagesTabs = document.querySelectorAll("[data-stage-tab]"),
    playoffStage = document.querySelector(".playoff"),
    results = document.querySelector(".results"),
    predictor = document.querySelector(".predictor"),
    playoffPredictor = predictor.querySelector(".playoff"),
    teamTextPopups = document.querySelectorAll('.playoff__choose-team-text');
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
  var toggleClasses = function toggleClasses(elements, className) {
    return elements.forEach(function (el) {
      return el.classList.toggle("".concat(className));
    });
  };
  var toggleTranslates = function toggleTranslates(elements, dataAttr) {
    return elements.forEach(function (el) {
      el.setAttribute('data-translate', "".concat(dataAttr));
      el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
      el.removeAttribute('data-translate');
    });
  };
  var teams = [{
    team: "Complexity",
    dataAttr: "complexity"
  }, {
    team: "Falcons",
    dataAttr: "falcons"
  }, {
    team: "Vitality",
    dataAttr: "vitality"
  }, {
    team: "Heroic",
    dataAttr: "heroic"
  }, {
    team: "Faze",
    dataAttr: "faze"
  }, {
    team: "Spirit",
    dataAttr: "spirit"
  }, {
    team: "B8",
    dataAttr: "B8"
  }, {
    team: "3DMAX",
    dataAttr: "3DMAX"
  }, {
    team: "MOUZ",
    dataAttr: "MOUZ"
  }, {
    team: "Wildcard",
    dataAttr: "wildcard"
  }, {
    team: "Virtus.pro",
    dataAttr: "virtusPro"
  }, {
    team: "The Mongolz",
    dataAttr: "theMongolz"
  }, {
    team: "FlyQuest",
    dataAttr: "flyQuest"
  }, {
    team: "Furia",
    dataAttr: "furia"
  }, {
    team: "Aurora",
    dataAttr: "aurora"
  }, {
    team: "Lynn Vision",
    dataAttr: "lynnVision"
  }, {
    team: "MIBR",
    dataAttr: "MIBR"
  }, {
    team: "Natus Vincere",
    dataAttr: "natusVincere"
  }, {
    team: "NRG",
    dataAttr: "NRG"
  }, {
    team: "PaiN",
    dataAttr: "PaiN"
  }, {
    team: "G2",
    dataAttr: "G2"
  }, {
    team: "Chinggis Warriors",
    dataAttr: "chinggisWarriors"
  }, {
    team: "M80",
    dataAttr: "M80"
  }, {
    team: "Liquid",
    dataAttr: "liquid"
  }, {
    team: "Nemiga",
    dataAttr: "nemiga"
  }, {
    team: "Imperial",
    dataAttr: "imperial"
  }, {
    team: "Fluxo",
    dataAttr: "fluxo"
  }, {
    team: "Metizport",
    dataAttr: "metizport"
  }, {
    team: "OG",
    dataAttr: "OG"
  }, {
    team: "Bestia",
    dataAttr: "bestia"
  }, {
    team: "Tyloo",
    dataAttr: "tyloo"
  }];
  var bigLose = null;
  var bigWin = null;
  var teamsWin = [];
  var stagesResult = [{
    defautValue: true,
    teamsBet: [{
      team: "Complexity",
      dataAttr: "complexity",
      outcome: true
    }, {
      team: "Falcons",
      dataAttr: "falcons",
      outcome: true
    }, {
      team: "Vitality",
      dataAttr: "vitality",
      outcome: true
    }, {
      team: "Heroic",
      dataAttr: "heroic",
      outcome: true
    }, {
      team: "Faze",
      dataAttr: "faze",
      outcome: true
    }, {
      team: "Spirit",
      dataAttr: "spirit",
      outcome: true
    }, {
      team: "B8",
      dataAttr: "B8",
      outcome: true
    }],
    bigWin: {
      team: "PaiN",
      dataAttr: "PaiN",
      outcome: true
    },
    bigLose: {
      team: "NRG",
      dataAttr: "NRG",
      outcome: true
    }
  }, {
    defautValue: true,
    teamsBet: [{
      team: "Complexity",
      dataAttr: "complexity",
      outcome: true
    }, {
      team: "Falcons",
      dataAttr: "falcons",
      outcome: true
    }, {
      team: "Vitality",
      dataAttr: "vitality",
      outcome: true
    }, {
      team: "Heroic",
      dataAttr: "heroic",
      outcome: true
    }, {
      team: "Faze",
      dataAttr: "faze",
      outcome: true
    }, {
      team: "Spirit",
      dataAttr: "spirit",
      outcome: true
    }, {
      team: "B8",
      dataAttr: "B8",
      outcome: true
    }],
    bigWin: {
      team: "PaiN",
      dataAttr: "PaiN",
      outcome: true
    },
    bigLose: {
      team: "NRG",
      dataAttr: "NRG",
      outcome: true
    }
  }, {
    defautValue: true,
    teamsBet: [{
      team: "Complexity",
      dataAttr: "complexity",
      outcome: true
    }, {
      team: "Falcons",
      dataAttr: "falcons",
      outcome: true
    }, {
      team: "Vitality",
      dataAttr: "vitality",
      outcome: true
    }, {
      team: "Heroic",
      dataAttr: "heroic",
      outcome: true
    }, {
      team: "Faze",
      dataAttr: "faze",
      outcome: true
    }, {
      team: "Spirit",
      dataAttr: "spirit",
      outcome: true
    }, {
      team: "B8",
      dataAttr: "B8",
      outcome: true
    }],
    bigWin: {
      team: "PaiN",
      dataAttr: "PaiN",
      outcome: true
    },
    bigLose: {
      team: "NRG",
      dataAttr: "NRG",
      outcome: true
    }
  }];
  var loaderBtn = false;
  var locale = (_sessionStorage$getIt = sessionStorage.getItem("locale")) !== null && _sessionStorage$getIt !== void 0 ? _sessionStorage$getIt : "en";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = true;

  // if (debug) hideLoader()

  var i18nData = {};
  var translateState = true;
  var userId = (_Number = Number(sessionStorage.getItem('userId'))) !== null && _Number !== void 0 ? _Number : 77777779;
  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      if (!res.ok) throw new Error('API error');
      return res.json();
    })["catch"](function (err) {
      console.error('API request failed:', err);

      // reportError(err);

      // document.querySelector('.fav-page').style.display = 'none';
      // if (window.location.href.startsWith("https://www.favbet.hr/")) {
      //     window.location.href = '/promocije/promocija/stub/';
      // } else {
      //     window.location.href = '/promos/promo/stub/';
      // }

      return Promise.reject(err);
    });
  };
  function renderTeamBlocks(popupAttr, teams) {
    var popup = document.querySelector("[data-popup=\"".concat(popupAttr, "\"]"));
    console.log(popup);
    var container = popup.querySelector('.playoff__popup-scroll');
    if (!container) return;
    container.innerHTML = '';
    teams.forEach(function (_ref) {
      var dataAttr = _ref.dataAttr;
      var teamBlock = document.createElement('div');
      teamBlock.className = 'playoff__choose-team _open'; // можеш динамічно змінювати на _selected

      teamBlock.innerHTML = "\n            <div class=\"playoff__choose-team-icon\"></div>\n            <div class=\"playoff__choose-team-text\" data-translate=\"".concat(dataAttr, "\" data-team=\"").concat(dataAttr, "\">\n            </div>\n            <div class=\"playoff__choose-team-btn\"></div>\n        ");
      container.appendChild(teamBlock);
    });
    translate();
  }
  function hideLoader() {
    loader.classList.add("hide");
    document.body.style.overflow = "auto";
    mainPage.classList.remove("loading");
  }
  function checkUserAuth() {
    var loadTime = 200;
    setTimeout(function () {
      var showElements = function showElements(elements) {
        return elements.forEach(function (el) {
          return el.classList.remove('hide');
        });
      };
      var hideElements = function hideElements(elements) {
        return elements.forEach(function (el) {
          return el.classList.add('hide');
        });
      };
      if (!userId) {
        hideElements(participateBtns);
        showElements(unauthMsgs);
        hideLoader();
        return Promise.resolve(false);
      } else {
        showElements(participateBtns);
        hideElements(unauthMsgs);
      }
      hideElements(unauthMsgs);
      hideLoader();
    }, loadTime);
  }
  function reportError(err) {
    var reportData = {
      origin: window.location.href,
      userid: userId,
      errorText: (err === null || err === void 0 ? void 0 : err.error) || (err === null || err === void 0 ? void 0 : err.text) || (err === null || err === void 0 ? void 0 : err.message) || 'Unknown error',
      type: (err === null || err === void 0 ? void 0 : err.name) || 'UnknownError',
      stack: (err === null || err === void 0 ? void 0 : err.stack) || ''
    };
    fetch('https://fav-prom.com/api-cms/reports/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })["catch"](console.warn);
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      if (translateState) {
        elems.forEach(function (elem) {
          var key = elem.getAttribute('data-translate');
          elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
          if (i18nData[key]) {
            elem.removeAttribute('data-translate');
          }
        });
      } else {
        console.log("translation works!");
      }
    }
    refreshLocalizedClass(mainPage);
  }
  function refreshLocalizedClass(element) {
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(lang);
    }
    element.classList.add(locale);
  }
  function renderUsers(week) {
    request("/users/".concat(week)).then(function (data) {
      var users = data;
      populateUsersTable(users, userId, week);
    });
  }
  function populateUsersTable(users, currentUserId, week) {
    resultsTable.innerHTML = '';
    resultsTableOther.innerHTML = '';
    if (!(users !== null && users !== void 0 && users.length)) return;
    var currentUser = users.find(function (user) {
      return user.userid === currentUserId;
    });
    var isTopCurrentUser = currentUser && users.slice(0, 10).some(function (user) {
      return user.userid === currentUserId;
    });
    var topUsersLength = !userId || isTopCurrentUser ? 13 : 10;
    var topUsers = users.slice(0, topUsersLength);
    topUsers.forEach(function (user) {
      displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
    });
    if (!isTopCurrentUser && currentUser) {
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
  }
  function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
    var renderRow = function renderRow(userData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$highlight = options.highlight,
        highlight = _options$highlight === void 0 ? false : _options$highlight,
        _options$neighbor = options.neighbor,
        neighbor = _options$neighbor === void 0 ? false : _options$neighbor;
      var userRow = document.createElement('div');
      userRow.classList.add('table__row');
      var userPlace = users.indexOf(userData) + 1;
      var prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);
      if (userPlace <= 3) {
        userRow.classList.add("place".concat(userPlace));
      }
      if (highlight || isCurrentUser && !neighbor) {
        userRow.classList.add('you');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace < 10 ? '0' + userPlace : userPlace, "\n                ").concat(isCurrentUser && !neighbor ? '<span class="you">' + translateKey("you") + '</span>' : '', "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(isCurrentUser && !neighbor ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(userData.points, "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n        ");
      table.append(userRow);
    };
    if (isCurrentUser && !isTopCurrentUser) {
      var index = users.indexOf(user);
      if (users[index - 1]) {
        renderRow(users[index - 1], {
          neighbor: true
        });
      }
      renderRow(user, {
        highlight: true
      });
      if (users[index + 1]) {
        renderRow(users[index + 1], {
          neighbor: true
        });
      }
    } else {
      renderRow(user);
    }
  }
  function translateKey(key, defaultValue) {
    if (!key) {
      return;
    }
    var needKey = debug ? key : "*----NEED TO BE TRANSLATED----* key: ".concat(key);
    defaultValue = needKey || key;
    return i18nData[key] || defaultValue;
  }
  function maskUserId(userId) {
    return "**" + userId.toString().slice(2);
  }
  function setStatePickStage(stage) {
    var stageCardsWrap = stage.querySelector('[data-cards-wrap="stage"]');
    if (!stageCardsWrap) return;
    var stageCards = stageCardsWrap.querySelectorAll('.stage__card');
    var stageCardWin = stage.querySelector('[data-big-stage="bigWin"]');
    var stageCardLose = stage.querySelector('[data-big-stage="bigLose"]');
    var stageCardWinName = stageCardWin.querySelector('.stage__card-text');
    var stageCardLoseName = stageCardLose.querySelector('.stage__card-text');
    var stageNum = Number(stage.getAttribute('data-stage'));
    var stageState = stage.getAttribute('data-pick-stage');
    var stageResultData = stagesResult[stageNum - 1];
    var othersTeams = stageResultData.teamsBet;
    var bigWinTeam = stageResultData.bigWin;
    var bigLoseTeam = stageResultData.bigLose;
    stageCardWin.classList.remove('_open', '_selected', '_lose', '_win');
    stageCardLose.classList.remove('_open', '_selected', '_lose', '_win');
    if (stageState === "done") {
      console.log(stageCards);
      stageCards.forEach(function (card, i) {
        var teamName = card.querySelector('.stage__card-text');
        card.classList.remove('_open', '_selected', '_lose', '_win', "_done");
        if (stageResultData.defautValue) card.classList.add('_done');
        teamName.setAttribute('data-team', othersTeams[i].dataAttr);
        teamName.setAttribute('data-translate', othersTeams[i].dataAttr);
      });
      stageCardWinName.setAttribute('data-team', bigWinTeam.dataAttr);
      stageCardWinName.setAttribute('data-translate', bigWinTeam.dataAttr);
      stageCardLoseName.setAttribute('data-team', bigLoseTeam.dataAttr);
      stageCardLoseName.setAttribute('data-translate', bigLoseTeam.dataAttr);
      if (stageResultData.defautValue) {
        stageCardWin.classList.add('_done');
        stageCardLose.classList.add('_done');
      } else {
        if (bigWinTeam.outcome) {
          stageCardWin.classList.add('_win');
        } else {
          stageCardWin.classList.add('_lose');
        }
        if (bigLoseTeam.outcome) {
          stageCardWin.classList.add('_win');
        } else {
          stageCardWin.classList.add('_lose');
        }
      }
    }
    if (stageState === "active") {
      stageCards.forEach(function (card, i) {
        var teamName = card.querySelector('.stage__card-text');
        card.classList.remove('_open', '_selected', '_lose', '_win', "_done");
        card.classList.add('_open');
        teamName.setAttribute('data-translate', "popupLoseTitle");
      });
      stageCardWin.classList.add("_open");
      stageCardLose.classList.add("_open");
      stageCardWinName.setAttribute('data-translate', "popupLoseTitle");
      stageCardLoseName.setAttribute('data-translate', "popupLoseTitle");
    }
    translate();
  }
  function getPrizeTranslationKey(place, week) {
    if (place <= 3) return "prize_".concat(week, "-").concat(place);
    if (place <= 10) return "prize_".concat(week, "-4-10");
    if (place <= 25) return "prize_".concat(week, "-11-25");
    if (place <= 50) return "prize_".concat(week, "-26-50");
    if (place <= 75) return "prize_".concat(week, "-51-75");
    if (place <= 100) return "prize_".concat(week, "-76-100");
    if (place <= 125) return "prize_".concat(week, "-101-125");
    if (place <= 150) return "prize_".concat(week, "-126-150");
    if (place <= 175) return "prize_".concat(week, "-151-175");
    if (place <= 200) return "prize_".concat(week, "-176-200");
  }
  function participate() {
    if (!userId) {
      return;
    }
    var params = {
      userid: userId
    };
    fetch(apiURL + '/user/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(params)
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      loaderBtn = true;
      toggleClasses(participateBtns, "loader");
      toggleTranslates(participateBtns, "loader");
      setTimeout(function () {
        toggleTranslates(participateBtns, "loader_ready");
        toggleClasses(participateBtns, "done");
        toggleClasses(participateBtns, "loader");
      }, 500);
      setTimeout(function () {
        checkUserAuth();
      }, 1000);
    });
  }
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              checkUserAuth();
              request('/stage/').then(function (res) {
                var userStages = res.find(function (user) {
                  return user.userid === userId;
                });
                if (userStages) {
                  stagesResult.forEach(function (stage, i) {
                    if (userStages["stage".concat(i + 1, "Bet")]) {
                      stagesResult[i] = {
                        teamsBet: _toConsumableArray(userStages["stage".concat(i + 1, "Bet")].teamsBet),
                        bigWin: userStages["stage".concat(i + 1, "Bet")].bigWinner,
                        bigLose: userStages["stage".concat(i + 1, "Bet")].bigLoser
                      };
                    }
                  });
                }
              }).then(function (res) {
                stages.forEach(function (stage, i) {
                  currentStage > stages.length - 1 ? currentStage = stages.length - 1 : null;
                  console.log(currentStage);
                  stage.classList.toggle('_active', i === currentStage);
                  stagesTabs[i].classList.toggle('_active', i === currentStage);
                  var top = stage.querySelector(".stage__top");
                  var bottom = stage.querySelector(".stage__bottom");
                  var timer = stage.querySelector(".timer");
                  var playoffWrap = stage.querySelector(".playoff__wrapper");
                  if (i > currentStage) {
                    top === null || top === void 0 ? void 0 : top.classList.add("hide");
                    bottom === null || bottom === void 0 ? void 0 : bottom.classList.add("hide");
                    playoffWrap === null || playoffWrap === void 0 ? void 0 : playoffWrap.classList.add("hide");
                    timer === null || timer === void 0 ? void 0 : timer.classList.remove("hide");
                    stage.setAttribute("data-pick-stage", "lock");
                  } else {
                    top === null || top === void 0 ? void 0 : top.classList.remove("hide");
                    bottom === null || bottom === void 0 ? void 0 : bottom.classList.remove("hide");
                    playoffWrap === null || playoffWrap === void 0 ? void 0 : playoffWrap.classList.remove("hide");
                    timer === null || timer === void 0 ? void 0 : timer.classList.add("hide");
                  }
                  if (i === currentStage) {
                    stage.setAttribute("data-pick-stage", "active");
                  }
                  if (i < currentStage) {
                    stage.setAttribute("data-pick-stage", "done");
                    stage.classList.add("_done");
                  }
                  setStatePickStage(stage);
                });
                stagesTabs.forEach(function (tab) {
                  tab.addEventListener('click', function (e) {
                    if (e.target.closest('._active')) return;
                    var targetStageValue = tab.getAttribute('data-stage-tab');
                    var targetStage = document.querySelector("[data-stage=\"".concat(targetStageValue, "\"]"));
                    stages.forEach(function (stage) {
                      return stage.classList.remove('_active');
                    });
                    stagesTabs.forEach(function (t) {
                      return t.classList.remove('_active');
                    });
                    tab.classList.add('_active');
                    targetStage === null || targetStage === void 0 ? void 0 : targetStage.classList.add('_active');
                  });
                });
              });
              renderTeamBlocks('bigWin', teams);
              renderTeamBlocks('bigLose', teams);
              renderTeamBlocks('Others', teams);
              setTimeout(hideLoader, 1000);

              // console.log(playoffStage.getBoundingClientRect().left - 10)

              var initialOffsetLeft = null;
              var updatePlayoffPosition = function updatePlayoffPosition() {
                setTimeout(function () {
                  if (window.innerWidth <= 1300 && window.innerWidth > 550) {
                    playoffStage.style.transform = "";
                    initialOffsetLeft = playoffStage.getBoundingClientRect().left;
                    var currentLeft = initialOffsetLeft;
                    var shift = currentLeft - 10;
                    playoffStage.style.transform = "translateX(-".concat(shift, "px)");
                  } else {
                    playoffStage.style.transform = "";
                    initialOffsetLeft = null;
                  }
                }, 10);
              };
              if (currentStage < 3) {
                playoffPredictor.classList.add('_lock');
              } else {
                updatePlayoffPosition();
              }
              window.addEventListener("orientationchange", updatePlayoffPosition);
              window.addEventListener("resize", updatePlayoffPosition);
              var playoffPhases = document.querySelectorAll('.playoff__stage');
              var playoffContainer = document.querySelector('.playoff');
              var playoffNext = document.querySelector('.playoff__btn-right');
              var playoffPrev = document.querySelector('.playoff__btn-left');
              var phaseCount = 3;
              var isMobile = window.innerWidth <= 550;
              var setCurrentPhase = function setCurrentPhase(phases, current) {
                phases.forEach(function (phase, i) {
                  phase.classList.toggle("hide", i !== current);
                });
              };
              var showAllPhases = function showAllPhases(phases) {
                phases.forEach(function (phase) {
                  return phase.classList.remove("hide");
                });
              };
              var hideAllExceptCurrent = function hideAllExceptCurrent() {
                setCurrentPhase(playoffPhases, phaseCount);
              };
              var handleNext = function handleNext() {
                phaseCount = (phaseCount + 1) % playoffPhases.length;
                hideAllExceptCurrent();
              };
              var handlePrev = function handlePrev() {
                phaseCount = (phaseCount - 1 + playoffPhases.length) % playoffPhases.length;
                hideAllExceptCurrent();
              };
              var touchStartX = 0;
              var touchEndX = 0;
              var handleSwipe = function handleSwipe() {
                var diff = touchEndX - touchStartX;
                if (Math.abs(diff) > 50) {
                  if (diff < 0) {
                    handleNext();
                  } else {
                    handlePrev();
                  }
                }
              };
              if (isMobile) {
                hideAllExceptCurrent();
                playoffNext.addEventListener('click', handleNext);
                playoffPrev.addEventListener('click', handlePrev);
                playoffContainer.addEventListener('touchstart', function (e) {
                  touchStartX = e.changedTouches[0].screenX;
                });
                playoffContainer.addEventListener('touchend', function (e) {
                  touchEndX = e.changedTouches[0].screenX;
                  handleSwipe();
                });
              }
              window.addEventListener('resize', function () {
                var nowMobile = window.innerWidth <= 550;
                if (nowMobile && !isMobile) {
                  isMobile = true;
                  hideAllExceptCurrent();
                  playoffNext.addEventListener('click', handleNext);
                  playoffPrev.addEventListener('click', handlePrev);
                }
                if (!nowMobile && isMobile) {
                  isMobile = false;
                  showAllPhases(playoffPhases);
                  playoffNext.removeEventListener('click', handleNext);
                  playoffPrev.removeEventListener('click', handlePrev);
                }
              });
            };
            tryDetectUserId = function _tryDetectUserId() {
              if (window.store) {
                var state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
              } else if (window.g_user_id) {
                userId = window.g_user_id;
              }
            };
            attempts = 0;
            maxAttempts = 20;
            attemptInterval = 50;
            waitForUserId = new Promise(function (resolve) {
              var interval = setInterval(function () {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                  quickCheckAndRender();
                  clearInterval(interval);
                  resolve();
                }
                attempts++;
              }, attemptInterval);
            });
            _context.next = 8;
            return waitForUserId;
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
  }
  function loadTranslations() {
    return request("/new-translates/".concat(locale)).then(function (json) {
      i18nData = json;
      translate();
      var targetNode = document.getElementById("click-pick");
      var mutationObserver = new MutationObserver(function (mutations) {
        mutationObserver.disconnect();
        translate();
        mutationObserver.observe(targetNode, {
          childList: true,
          subtree: true
        });
      });
      mutationObserver.observe(targetNode, {
        childList: true,
        subtree: true
      });
    });
  }
  loadTranslations().then(init);

  //test

  document.querySelector('.dark-btn').addEventListener('click', function () {
    document.body.classList.toggle('dark');
  });
  var lngBtn = document.querySelector(".btn-lng");
  lngBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("locale")) {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "uk");
    }
    window.location.reload();
  });
  var authBtn = document.querySelector(".btn-auth");
  authBtn.addEventListener("click", function () {
    if (userId) {
      sessionStorage.removeItem("userId");
    } else {
      sessionStorage.setItem("userId", "77777779");
    }
    window.location.reload();
  });
  document.addEventListener("DOMContentLoaded", function () {
    var _document$querySelect;
    (_document$querySelect = document.querySelector(".menu-btn")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener("click", function () {
      var _document$querySelect2;
      (_document$querySelect2 = document.querySelector(".menu-test")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.classList.toggle("hide");
    });
  });
  var overlay = document.querySelector('.popups');
  var popupWin = document.querySelector('.win-popup');
  var popupLose = document.querySelector('.lose-popup');
  var popupOther = document.querySelector('.others-popup');
  console.log(popupWin.querySelector(".playoff__popup-close"));
  function setHidePopup(popup) {
    console.log(popup.querySelector(".playoff__popup-close"));
    var closeBtn = popup.querySelector('.playoff__popup-close');
    closeBtn.addEventListener('click', function () {
      overlay.classList.add('overlay-opacity');
      popup.classList.add("hide");
    });
  }
  setHidePopup(popupWin);
  setHidePopup(popupLose);
  setHidePopup(popupOther);
  document.querySelector('.btn-popup-win').addEventListener('click', function () {
    overlay.classList.remove('overlay-opacity');
    popupWin.classList.remove('hide');
    popupLose.classList.add('hide');
    popupOther.classList.add('hide');
  });
  document.querySelector('.btn-popup-lose').addEventListener('click', function () {
    overlay.classList.remove('overlay-opacity');
    popupWin.classList.add('hide');
    popupLose.classList.remove('hide');
    popupOther.classList.add('hide');
  });
  document.querySelector('.btn-popup-other').addEventListener('click', function () {
    overlay.classList.remove('overlay-opacity');
    popupWin.classList.add('hide');
    popupLose.classList.add('hide');
    popupOther.classList.remove('hide');
  });
  (_document$querySelect3 = document.querySelector('.btn-timer')) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.addEventListener('click', function () {
    var stage1 = '1';
    var stage2 = '4';
    var savedDate = sessionStorage.getItem("currentDate");
    var newDate = savedDate === stage2 ? stage1 : stage2;
    sessionStorage.setItem("currentDate", newDate);
    location.reload();
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwic3RhZ2VzRGF0YSIsImRhdGEiLCJEYXRlIiwiY3VycmVudERhdGUiLCJjdXJyZW50U3RhZ2UiLCJOdW1iZXIiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInN0YWdlcyIsInN0YWdlc1RhYnMiLCJwbGF5b2ZmU3RhZ2UiLCJyZXN1bHRzIiwicHJlZGljdG9yIiwicGxheW9mZlByZWRpY3RvciIsInRlYW1UZXh0UG9wdXBzIiwidWtMZW5nIiwiZW5MZW5nIiwidG9nZ2xlQ2xhc3NlcyIsImVsZW1lbnRzIiwiY2xhc3NOYW1lIiwiZm9yRWFjaCIsImVsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlVHJhbnNsYXRlcyIsImRhdGFBdHRyIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaTE4bkRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0ZWFtcyIsInRlYW0iLCJiaWdMb3NlIiwiYmlnV2luIiwidGVhbXNXaW4iLCJzdGFnZXNSZXN1bHQiLCJkZWZhdXRWYWx1ZSIsInRlYW1zQmV0Iiwib3V0Y29tZSIsImxvYWRlckJ0biIsImxvY2FsZSIsImRlYnVnIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlbmRlclRlYW1CbG9ja3MiLCJwb3B1cEF0dHIiLCJwb3B1cCIsImNvbnRhaW5lciIsInRlYW1CbG9jayIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInRyYW5zbGF0ZSIsImhpZGVMb2FkZXIiLCJhZGQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInJlbW92ZSIsImNoZWNrVXNlckF1dGgiLCJsb2FkVGltZSIsInNldFRpbWVvdXQiLCJzaG93RWxlbWVudHMiLCJoaWRlRWxlbWVudHMiLCJyZXNvbHZlIiwicmVwb3J0RXJyb3IiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidXNlcmlkIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInJlbmRlclVzZXJzIiwid2VlayIsInVzZXJzIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsInJlc3VsdHNUYWJsZSIsInJlc3VsdHNUYWJsZU90aGVyIiwiY3VycmVudFVzZXIiLCJmaW5kIiwidXNlciIsImlzVG9wQ3VycmVudFVzZXIiLCJzbGljZSIsInNvbWUiLCJ0b3BVc2Vyc0xlbmd0aCIsInRvcFVzZXJzIiwiZGlzcGxheVVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJ1c2VyRGF0YSIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwidHJhbnNsYXRlS2V5IiwibWFza1VzZXJJZCIsInBvaW50cyIsImFwcGVuZCIsImluZGV4IiwiZGVmYXVsdFZhbHVlIiwibmVlZEtleSIsInRvU3RyaW5nIiwic2V0U3RhdGVQaWNrU3RhZ2UiLCJzdGFnZSIsInN0YWdlQ2FyZHNXcmFwIiwic3RhZ2VDYXJkcyIsInN0YWdlQ2FyZFdpbiIsInN0YWdlQ2FyZExvc2UiLCJzdGFnZUNhcmRXaW5OYW1lIiwic3RhZ2VDYXJkTG9zZU5hbWUiLCJzdGFnZU51bSIsInN0YWdlU3RhdGUiLCJzdGFnZVJlc3VsdERhdGEiLCJvdGhlcnNUZWFtcyIsImJpZ1dpblRlYW0iLCJiaWdMb3NlVGVhbSIsImNhcmQiLCJpIiwidGVhbU5hbWUiLCJwbGFjZSIsInBhcnRpY2lwYXRlIiwicGFyYW1zIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJ1c2VyU3RhZ2VzIiwiYmlnV2lubmVyIiwiYmlnTG9zZXIiLCJ0b3AiLCJib3R0b20iLCJ0aW1lciIsInBsYXlvZmZXcmFwIiwidGFiIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwidGFyZ2V0U3RhZ2VWYWx1ZSIsInRhcmdldFN0YWdlIiwidCIsImluaXRpYWxPZmZzZXRMZWZ0IiwidXBkYXRlUGxheW9mZlBvc2l0aW9uIiwiaW5uZXJXaWR0aCIsInRyYW5zZm9ybSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJjdXJyZW50TGVmdCIsInNoaWZ0IiwicGxheW9mZlBoYXNlcyIsInBsYXlvZmZDb250YWluZXIiLCJwbGF5b2ZmTmV4dCIsInBsYXlvZmZQcmV2IiwicGhhc2VDb3VudCIsImlzTW9iaWxlIiwic2V0Q3VycmVudFBoYXNlIiwicGhhc2VzIiwiY3VycmVudCIsInBoYXNlIiwic2hvd0FsbFBoYXNlcyIsImhpZGVBbGxFeGNlcHRDdXJyZW50IiwiaGFuZGxlTmV4dCIsImhhbmRsZVByZXYiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoRW5kWCIsImhhbmRsZVN3aXBlIiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJjaGFuZ2VkVG91Y2hlcyIsInNjcmVlblgiLCJub3dNb2JpbGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0YXJnZXROb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImxuZ0J0biIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwicmVsb2FkIiwiYXV0aEJ0biIsIm92ZXJsYXkiLCJwb3B1cFdpbiIsInBvcHVwTG9zZSIsInBvcHVwT3RoZXIiLCJzZXRIaWRlUG9wdXAiLCJjbG9zZUJ0biIsInN0YWdlMSIsInN0YWdlMiIsInNhdmVkRGF0ZSIsIm5ld0RhdGUiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBQUE7RUFFVCxJQUFNQSxNQUFNLEdBQUcscUNBQXFDO0VBRXBELElBQU1DLFVBQVUsR0FBRyxDQUNmO0lBQUVDLElBQUksRUFBRSxJQUFJQyxJQUFJLENBQUMsMkJBQTJCO0VBQUUsQ0FBQyxFQUMvQztJQUFFRCxJQUFJLEVBQUUsSUFBSUMsSUFBSSxDQUFDLDJCQUEyQjtFQUFFLENBQUMsRUFDL0M7SUFBRUQsSUFBSSxFQUFFLElBQUlDLElBQUksQ0FBQywyQkFBMkI7RUFBRSxDQUFDLEVBQy9DO0lBQUVELElBQUksRUFBRSxJQUFJQyxJQUFJLENBQUMsMkJBQTJCO0VBQUUsQ0FBQyxDQUNsRDtFQUVELElBQU1DLFdBQVcsR0FBRyxJQUFJRCxJQUFJLENBQUMsMkJBQTJCLENBQUM7O0VBRXpEOztFQUVBLElBQUlFLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxjQUFjLENB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QU0sQ0FBQyxNQUFNLENBQUM7SUFDbEMwSyxVQUFVLENBQUMzTixTQUFTLENBQUM2QyxHQUFHLENBQUMsTUFBTSxDQUFDO0VBQ3BDLENBQUMsQ0FBQztFQUVGbEUsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQ3dLLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO0lBQ3RFb0UsT0FBTyxDQUFDeE4sU0FBUyxDQUFDaUQsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0lBQzNDd0ssUUFBUSxDQUFDek4sU0FBUyxDQUFDNkMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUM5QjZLLFNBQVMsQ0FBQzFOLFNBQVMsQ0FBQzZDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDL0I4SyxVQUFVLENBQUMzTixTQUFTLENBQUNpRCxNQUFNLENBQUMsTUFBTSxDQUFDO0VBQ3ZDLENBQUMsQ0FBQztFQUVGLDBCQUFBdEUsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDLDJEQUFwQyx1QkFBc0N3SyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNsRSxJQUFNMEUsTUFBTSxHQUFHLEdBQUc7SUFDbEIsSUFBTUMsTUFBTSxHQUFHLEdBQUc7SUFFbEIsSUFBTUMsU0FBUyxHQUFHMVAsY0FBYyxDQUFDQyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBRXZELElBQU0wUCxPQUFPLEdBQUdELFNBQVMsS0FBS0QsTUFBTSxHQUFHRCxNQUFNLEdBQUdDLE1BQU07SUFDdER6UCxjQUFjLENBQUMrTyxPQUFPLENBQUMsYUFBYSxFQUFFWSxPQUFPLENBQUM7SUFFOUNySyxRQUFRLENBQUMwSixNQUFNLEVBQUU7RUFDckIsQ0FBQyxDQUFDO0FBR04sQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9jbGlja19waWNrJ1xuXG4gICAgY29uc3Qgc3RhZ2VzRGF0YSA9IFtcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMjBUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMjVUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMzBUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDYtMDVUMDA6MDA6MDArMDM6MDBcIikgfVxuICAgIF07XG5cbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0wNC0wNVQwMDowMDowMCswMzowMFwiKTtcblxuICAgIC8vIGxldCBjdXJyZW50U3RhZ2UgPSBzdGFnZXNEYXRhLmZpbHRlcihzdGFnZSA9PiBzdGFnZS5kYXRhIDw9IGN1cnJlbnREYXRlKS5sZW5ndGggPz8gMztcblxuICAgIGxldCBjdXJyZW50U3RhZ2UgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnREYXRlXCIpKVxuXG4gICAgY29uc29sZS5sb2coY3VycmVudFN0YWdlKTtcblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIHN0YWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zdGFnZV1cIiksXG4gICAgICAgIHN0YWdlc1RhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc3RhZ2UtdGFiXVwiKSxcbiAgICAgICAgcGxheW9mZlN0YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmXCIpLFxuICAgICAgICByZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRzXCIpLFxuICAgICAgICBwcmVkaWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RvclwiKSxcbiAgICAgICAgcGxheW9mZlByZWRpY3RvciA9IHByZWRpY3Rvci5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZcIiksXG4gICAgICAgIHRlYW1UZXh0UG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZS10ZWFtLXRleHQnKVxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG5cbiAgICBjb25zdCB0ZWFtcyA9IFtcbiAgICAgICAgeyB0ZWFtOiBcIkNvbXBsZXhpdHlcIiwgZGF0YUF0dHI6IFwiY29tcGxleGl0eVwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJGYWxjb25zXCIsIGRhdGFBdHRyOiBcImZhbGNvbnNcIiB9LFxuICAgICAgICB7IHRlYW06IFwiVml0YWxpdHlcIiwgZGF0YUF0dHI6IFwidml0YWxpdHlcIiB9LFxuICAgICAgICB7IHRlYW06IFwiSGVyb2ljXCIsIGRhdGFBdHRyOiBcImhlcm9pY1wiIH0sXG4gICAgICAgIHsgdGVhbTogXCJGYXplXCIsIGRhdGFBdHRyOiBcImZhemVcIiB9LFxuICAgICAgICB7IHRlYW06IFwiU3Bpcml0XCIsIGRhdGFBdHRyOiBcInNwaXJpdFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJCOFwiLCBkYXRhQXR0cjogXCJCOFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCIzRE1BWFwiLCBkYXRhQXR0cjogXCIzRE1BWFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJNT1VaXCIsIGRhdGFBdHRyOiBcIk1PVVpcIiB9LFxuICAgICAgICB7IHRlYW06IFwiV2lsZGNhcmRcIiwgZGF0YUF0dHI6IFwid2lsZGNhcmRcIiB9LFxuICAgICAgICB7IHRlYW06IFwiVmlydHVzLnByb1wiLCBkYXRhQXR0cjogXCJ2aXJ0dXNQcm9cIiB9LFxuICAgICAgICB7IHRlYW06IFwiVGhlIE1vbmdvbHpcIiwgZGF0YUF0dHI6IFwidGhlTW9uZ29selwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJGbHlRdWVzdFwiLCBkYXRhQXR0cjogXCJmbHlRdWVzdFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJGdXJpYVwiLCBkYXRhQXR0cjogXCJmdXJpYVwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJBdXJvcmFcIiwgZGF0YUF0dHI6IFwiYXVyb3JhXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkx5bm4gVmlzaW9uXCIsIGRhdGFBdHRyOiBcImx5bm5WaXNpb25cIiB9LFxuICAgICAgICB7IHRlYW06IFwiTUlCUlwiLCBkYXRhQXR0cjogXCJNSUJSXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk5hdHVzIFZpbmNlcmVcIiwgZGF0YUF0dHI6IFwibmF0dXNWaW5jZXJlXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk5SR1wiLCBkYXRhQXR0cjogXCJOUkdcIiB9LFxuICAgICAgICB7IHRlYW06IFwiUGFpTlwiLCBkYXRhQXR0cjogXCJQYWlOXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkcyXCIsIGRhdGFBdHRyOiBcIkcyXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkNoaW5nZ2lzIFdhcnJpb3JzXCIsIGRhdGFBdHRyOiBcImNoaW5nZ2lzV2FycmlvcnNcIiB9LFxuICAgICAgICB7IHRlYW06IFwiTTgwXCIsIGRhdGFBdHRyOiBcIk04MFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJMaXF1aWRcIiwgZGF0YUF0dHI6IFwibGlxdWlkXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk5lbWlnYVwiLCBkYXRhQXR0cjogXCJuZW1pZ2FcIiB9LFxuICAgICAgICB7IHRlYW06IFwiSW1wZXJpYWxcIiwgZGF0YUF0dHI6IFwiaW1wZXJpYWxcIiB9LFxuICAgICAgICB7IHRlYW06IFwiRmx1eG9cIiwgZGF0YUF0dHI6IFwiZmx1eG9cIiB9LFxuICAgICAgICB7IHRlYW06IFwiTWV0aXpwb3J0XCIsIGRhdGFBdHRyOiBcIm1ldGl6cG9ydFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJPR1wiLCBkYXRhQXR0cjogXCJPR1wiIH0sXG4gICAgICAgIHsgdGVhbTogXCJCZXN0aWFcIiwgZGF0YUF0dHI6IFwiYmVzdGlhXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIlR5bG9vXCIsIGRhdGFBdHRyOiBcInR5bG9vXCIgfVxuICAgIF07XG5cbiAgICBsZXQgYmlnTG9zZSA9IG51bGxcbiAgICBsZXQgYmlnV2luID0gbnVsbFxuXG4gICAgY29uc3QgdGVhbXNXaW4gPSBbXTtcblxuICAgIGNvbnN0IHN0YWdlc1Jlc3VsdCA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgZGVmYXV0VmFsdWU6IHRydWUsXG4gICAgICAgICAgICB0ZWFtc0JldDpbXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkNvbXBsZXhpdHlcIiwgZGF0YUF0dHI6IFwiY29tcGxleGl0eVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkZhbGNvbnNcIiwgZGF0YUF0dHI6IFwiZmFsY29uc1wiLCBvdXRjb21lOiB0cnVlfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiVml0YWxpdHlcIiwgZGF0YUF0dHI6IFwidml0YWxpdHlcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJIZXJvaWNcIiwgZGF0YUF0dHI6IFwiaGVyb2ljXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiRmF6ZVwiLCBkYXRhQXR0cjogXCJmYXplXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiU3Bpcml0XCIsIGRhdGFBdHRyOiBcInNwaXJpdFwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkI4XCIsIGRhdGFBdHRyOiBcIkI4XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBiaWdXaW46IHsgdGVhbTogXCJQYWlOXCIsIGRhdGFBdHRyOiBcIlBhaU5cIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgYmlnTG9zZTogeyB0ZWFtOiBcIk5SR1wiLCBkYXRhQXR0cjogXCJOUkdcIiwgb3V0Y29tZTogdHJ1ZSB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRlZmF1dFZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgdGVhbXNCZXQ6W1xuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJDb21wbGV4aXR5XCIsIGRhdGFBdHRyOiBcImNvbXBsZXhpdHlcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJGYWxjb25zXCIsIGRhdGFBdHRyOiBcImZhbGNvbnNcIiwgb3V0Y29tZTogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIlZpdGFsaXR5XCIsIGRhdGFBdHRyOiBcInZpdGFsaXR5XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiSGVyb2ljXCIsIGRhdGFBdHRyOiBcImhlcm9pY1wiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkZhemVcIiwgZGF0YUF0dHI6IFwiZmF6ZVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIlNwaXJpdFwiLCBkYXRhQXR0cjogXCJzcGlyaXRcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJCOFwiLCBkYXRhQXR0cjogXCJCOFwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYmlnV2luOiB7IHRlYW06IFwiUGFpTlwiLCBkYXRhQXR0cjogXCJQYWlOXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgIGJpZ0xvc2U6IHsgdGVhbTogXCJOUkdcIiwgZGF0YUF0dHI6IFwiTlJHXCIsIG91dGNvbWU6IHRydWUgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkZWZhdXRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlYW1zQmV0OltcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiQ29tcGxleGl0eVwiLCBkYXRhQXR0cjogXCJjb21wbGV4aXR5XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiRmFsY29uc1wiLCBkYXRhQXR0cjogXCJmYWxjb25zXCIsIG91dGNvbWU6IHRydWV9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJWaXRhbGl0eVwiLCBkYXRhQXR0cjogXCJ2aXRhbGl0eVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkhlcm9pY1wiLCBkYXRhQXR0cjogXCJoZXJvaWNcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJGYXplXCIsIGRhdGFBdHRyOiBcImZhemVcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJTcGlyaXRcIiwgZGF0YUF0dHI6IFwic3Bpcml0XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiQjhcIiwgZGF0YUF0dHI6IFwiQjhcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJpZ1dpbjogeyB0ZWFtOiBcIlBhaU5cIiwgZGF0YUF0dHI6IFwiUGFpTlwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICBiaWdMb3NlOiB7IHRlYW06IFwiTlJHXCIsIGRhdGFBdHRyOiBcIk5SR1wiLCBvdXRjb21lOiB0cnVlIH1cbiAgICAgICAgfVxuXG4gICAgXVxuXG5cblxuICAgIGxldCBsb2FkZXJCdG4gPSBmYWxzZVxuXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgPz8gXCJlblwiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSB0cnVlXG5cbiAgICAvLyBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykpID8/IDc3Nzc3Nzc5O1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIC8vIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclRlYW1CbG9ja3MocG9wdXBBdHRyLCB0ZWFtcykge1xuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwPVwiJHtwb3B1cEF0dHJ9XCJdYCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBvcHVwKVxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fcG9wdXAtc2Nyb2xsJyk7XG5cbiAgICAgICAgaWYgKCFjb250YWluZXIpIHJldHVybjtcblxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgdGVhbXMuZm9yRWFjaCgoeyBkYXRhQXR0ciB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZWFtQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRlYW1CbG9jay5jbGFzc05hbWUgPSAncGxheW9mZl9fY2hvb3NlLXRlYW0gX29wZW4nOyAvLyDQvNC+0LbQtdGIINC00LjQvdCw0LzRltGH0L3QviDQt9C80ZbQvdGO0LLQsNGC0Lgg0L3QsCBfc2VsZWN0ZWRcblxuICAgICAgICAgICAgdGVhbUJsb2NrLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5b2ZmX19jaG9vc2UtdGVhbS1pY29uXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheW9mZl9fY2hvb3NlLXRlYW0tdGV4dFwiIGRhdGEtdHJhbnNsYXRlPVwiJHtkYXRhQXR0cn1cIiBkYXRhLXRlYW09XCIke2RhdGFBdHRyfVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheW9mZl9fY2hvb3NlLXRlYW0tYnRuXCI+PC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZWFtQmxvY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgdHJhbnNsYXRlKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBjb25zdCBsb2FkVGltZSA9IDIwMDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgY29uc3QgaGlkZUVsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG5cbiAgICAgICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyh1bmF1dGhNc2dzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICB9LCBsb2FkVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWspIHtcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzLyR7d2Vla31gKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgdXNlcklkLCB3ZWVrKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2Vlaykge1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzTGVuZ3RoID0gIXVzZXJJZCB8fCBpc1RvcEN1cnJlbnRVc2VyICA/IDEzIDogMTA7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlckRhdGEucG9pbnRzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U3RhdGVQaWNrU3RhZ2Uoc3RhZ2Upe1xuICAgICAgICBjb25zdCBzdGFnZUNhcmRzV3JhcCA9IHN0YWdlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNhcmRzLXdyYXA9XCJzdGFnZVwiXScpXG4gICAgICAgIGlmKCFzdGFnZUNhcmRzV3JhcCkgcmV0dXJuXG4gICAgICAgIGNvbnN0IHN0YWdlQ2FyZHMgPSBzdGFnZUNhcmRzV3JhcC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhZ2VfX2NhcmQnKTtcbiAgICAgICAgY29uc3Qgc3RhZ2VDYXJkV2luID0gc3RhZ2UucXVlcnlTZWxlY3RvcignW2RhdGEtYmlnLXN0YWdlPVwiYmlnV2luXCJdJyk7XG4gICAgICAgIGNvbnN0IHN0YWdlQ2FyZExvc2UgPSBzdGFnZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1iaWctc3RhZ2U9XCJiaWdMb3NlXCJdJyk7XG4gICAgICAgIGNvbnN0IHN0YWdlQ2FyZFdpbk5hbWUgPSBzdGFnZUNhcmRXaW4ucXVlcnlTZWxlY3RvcignLnN0YWdlX19jYXJkLXRleHQnKTtcbiAgICAgICAgY29uc3Qgc3RhZ2VDYXJkTG9zZU5hbWUgPSBzdGFnZUNhcmRMb3NlLnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZV9fY2FyZC10ZXh0Jyk7XG5cbiAgICAgICAgY29uc3Qgc3RhZ2VOdW0gPSBOdW1iZXIoc3RhZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YWdlJykpO1xuICAgICAgICBsZXQgc3RhZ2VTdGF0ZSA9IHN0YWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1waWNrLXN0YWdlJyk7XG4gICAgICAgIGNvbnN0IHN0YWdlUmVzdWx0RGF0YSA9IHN0YWdlc1Jlc3VsdFtzdGFnZU51bSAtMV1cblxuICAgICAgICBsZXQgb3RoZXJzVGVhbXMgPSBzdGFnZVJlc3VsdERhdGEudGVhbXNCZXRcbiAgICAgICAgbGV0IGJpZ1dpblRlYW0gPSBzdGFnZVJlc3VsdERhdGEuYmlnV2luXG4gICAgICAgIGxldCBiaWdMb3NlVGVhbSA9IHN0YWdlUmVzdWx0RGF0YS5iaWdMb3NlXG5cbiAgICAgICAgc3RhZ2VDYXJkV2luLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJywgJ19zZWxlY3RlZCcsICdfbG9zZScsICdfd2luJyk7XG4gICAgICAgIHN0YWdlQ2FyZExvc2UuY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nLCAnX3NlbGVjdGVkJywgJ19sb3NlJywgJ193aW4nKTtcblxuICAgICAgICBpZihzdGFnZVN0YXRlID09PSBcImRvbmVcIil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGFnZUNhcmRzKVxuICAgICAgICAgICAgc3RhZ2VDYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVhbU5hbWUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZV9fY2FyZC10ZXh0Jyk7XG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicsICdfc2VsZWN0ZWQnLCAnX2xvc2UnLCAnX3dpbicsIFwiX2RvbmVcIik7XG4gICAgICAgICAgICAgICAgaWYoc3RhZ2VSZXN1bHREYXRhLmRlZmF1dFZhbHVlKSBjYXJkLmNsYXNzTGlzdC5hZGQoJ19kb25lJyk7XG5cbiAgICAgICAgICAgICAgICB0ZWFtTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScsIG90aGVyc1RlYW1zW2ldLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICB0ZWFtTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgb3RoZXJzVGVhbXNbaV0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdGFnZUNhcmRXaW5OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJywgYmlnV2luVGVhbS5kYXRhQXR0cik7XG4gICAgICAgICAgICBzdGFnZUNhcmRXaW5OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBiaWdXaW5UZWFtLmRhdGFBdHRyKTtcbiAgICAgICAgICAgIHN0YWdlQ2FyZExvc2VOYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJywgYmlnTG9zZVRlYW0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgc3RhZ2VDYXJkTG9zZU5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGJpZ0xvc2VUZWFtLmRhdGFBdHRyKTtcblxuXG4gICAgICAgICAgICBpZihzdGFnZVJlc3VsdERhdGEuZGVmYXV0VmFsdWUpe1xuICAgICAgICAgICAgICAgIHN0YWdlQ2FyZFdpbi5jbGFzc0xpc3QuYWRkKCdfZG9uZScpO1xuICAgICAgICAgICAgICAgIHN0YWdlQ2FyZExvc2UuY2xhc3NMaXN0LmFkZCgnX2RvbmUnKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKGJpZ1dpblRlYW0ub3V0Y29tZSl7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlQ2FyZFdpbi5jbGFzc0xpc3QuYWRkKCdfd2luJyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlQ2FyZFdpbi5jbGFzc0xpc3QuYWRkKCdfbG9zZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihiaWdMb3NlVGVhbS5vdXRjb21lKXtcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VDYXJkV2luLmNsYXNzTGlzdC5hZGQoJ193aW4nKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VDYXJkV2luLmNsYXNzTGlzdC5hZGQoJ19sb3NlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICB9XG4gICAgICAgIGlmKHN0YWdlU3RhdGUgPT09IFwiYWN0aXZlXCIpe1xuICAgICAgICAgICAgc3RhZ2VDYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVhbU5hbWUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZV9fY2FyZC10ZXh0Jyk7XG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicsICdfc2VsZWN0ZWQnLCAnX2xvc2UnLCAnX3dpbicsIFwiX2RvbmVcIik7XG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdfb3BlbicpO1xuXG4gICAgICAgICAgICAgICAgdGVhbU5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIFwicG9wdXBMb3NlVGl0bGVcIiApO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc3RhZ2VDYXJkV2luLmNsYXNzTGlzdC5hZGQoXCJfb3BlblwiKVxuICAgICAgICAgICAgc3RhZ2VDYXJkTG9zZS5jbGFzc0xpc3QuYWRkKFwiX29wZW5cIilcblxuICAgICAgICAgICAgc3RhZ2VDYXJkV2luTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgXCJwb3B1cExvc2VUaXRsZVwiKTtcbiAgICAgICAgICAgIHN0YWdlQ2FyZExvc2VOYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBcInBvcHVwTG9zZVRpdGxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRyYW5zbGF0ZSgpXG5cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UsIHdlZWspIHtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDMpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0ke3BsYWNlfWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTQtMTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMS0yNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTI2LTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tNTEtNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNzYtMTAwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEwMS0xMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTI2LTE1MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNTEtMTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDIwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE3Ni0yMDBgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGVyQnRuID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlcl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgIHJlcXVlc3QoJy9zdGFnZS8nKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyU3RhZ2VzID0gcmVzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKVxuXG4gICAgICAgICAgICAgICAgaWYodXNlclN0YWdlcykge1xuICAgICAgICAgICAgICAgICAgICBzdGFnZXNSZXN1bHQuZm9yRWFjaCgoc3RhZ2UsIGkpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXNlclN0YWdlc1tgc3RhZ2Uke2kgKyAxfUJldGBdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFnZXNSZXN1bHRbaV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1zQmV0OiBbLi4udXNlclN0YWdlc1tgc3RhZ2Uke2kgKyAxfUJldGBdLnRlYW1zQmV0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luOiB1c2VyU3RhZ2VzW2BzdGFnZSR7aSArIDF9QmV0YF0uYmlnV2lubmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdMb3NlOiB1c2VyU3RhZ2VzW2BzdGFnZSR7aSArIDF9QmV0YF0uYmlnTG9zZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhZ2VzLmZvckVhY2goKHN0YWdlLCBpKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0YWdlID4gc3RhZ2VzLmxlbmd0aCAtIDEgPyBjdXJyZW50U3RhZ2UgPSBzdGFnZXMubGVuZ3RoIC0gMSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdGFnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScsIGkgPT09IGN1cnJlbnRTdGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlc1RhYnNbaV0uY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScsIGkgPT09IGN1cnJlbnRTdGFnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9wID0gc3RhZ2UucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fdG9wXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib3R0b20gPSBzdGFnZS5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19ib3R0b21cIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc3RhZ2UucXVlcnlTZWxlY3RvcihcIi50aW1lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheW9mZldyYXAgPSBzdGFnZS5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX3dyYXBwZXJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiBjdXJyZW50U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcD8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b20/LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheW9mZldyYXA/LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXI/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1waWNrLXN0YWdlXCIsIFwibG9ja1wiKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbT8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmV3JhcD8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lcj8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZihpID09PSBjdXJyZW50U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlLnNldEF0dHJpYnV0ZShcImRhdGEtcGljay1zdGFnZVwiLCBcImFjdGl2ZVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKGkgPCBjdXJyZW50U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlLnNldEF0dHJpYnV0ZShcImRhdGEtcGljay1zdGFnZVwiLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlLmNsYXNzTGlzdC5hZGQoXCJfZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlUGlja1N0YWdlKHN0YWdlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGFnZXNUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuX2FjdGl2ZScpKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0YWdlVmFsdWUgPSB0YWIuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YWdlLXRhYicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zdGFnZT1cIiR7dGFyZ2V0U3RhZ2VWYWx1ZX1cIl1gKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2VzLmZvckVhY2goc3RhZ2UgPT4gc3RhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlc1RhYnMuZm9yRWFjaCh0ID0+IHQuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFN0YWdlPy5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcmVuZGVyVGVhbUJsb2NrcygnYmlnV2luJywgdGVhbXMpO1xuICAgICAgICAgICAgcmVuZGVyVGVhbUJsb2NrcygnYmlnTG9zZScsIHRlYW1zKTtcbiAgICAgICAgICAgIHJlbmRlclRlYW1CbG9ja3MoJ090aGVycycsIHRlYW1zKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChoaWRlTG9hZGVyLCAxMDAwKVxuXG5cblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGxheW9mZlN0YWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLSAxMClcblxuXG4gICAgICAgICAgICBsZXQgaW5pdGlhbE9mZnNldExlZnQgPSBudWxsO1xuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVQbGF5b2ZmUG9zaXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDEzMDAgJiYgd2luZG93LmlubmVyV2lkdGggPiA1NTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlvZmZTdGFnZS5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE9mZnNldExlZnQgPSBwbGF5b2ZmU3RhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZWZ0ID0gaW5pdGlhbE9mZnNldExlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaWZ0ID0gY3VycmVudExlZnQgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlvZmZTdGFnZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtzaGlmdH1weClgO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheW9mZlN0YWdlLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsT2Zmc2V0TGVmdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMClcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYoY3VycmVudFN0YWdlIDwgMyl7XG4gICAgICAgICAgICAgICAgcGxheW9mZlByZWRpY3Rvci5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdXBkYXRlUGxheW9mZlBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIHVwZGF0ZVBsYXlvZmZQb3NpdGlvbik7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVQbGF5b2ZmUG9zaXRpb24pO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5b2ZmUGhhc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX3N0YWdlJyk7XG4gICAgICAgICAgICBjb25zdCBwbGF5b2ZmQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlvZmYnKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXlvZmZOZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX2J0bi1yaWdodCcpO1xuICAgICAgICAgICAgY29uc3QgcGxheW9mZlByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fYnRuLWxlZnQnKTtcblxuICAgICAgICAgICAgbGV0IHBoYXNlQ291bnQgPSAzO1xuICAgICAgICAgICAgbGV0IGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPD0gNTUwO1xuXG4gICAgICAgICAgICBjb25zdCBzZXRDdXJyZW50UGhhc2UgPSAocGhhc2VzLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcGhhc2VzLmZvckVhY2goKHBoYXNlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBoYXNlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIsIGkgIT09IGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qgc2hvd0FsbFBoYXNlcyA9IChwaGFzZXMpID0+IHtcbiAgICAgICAgICAgICAgICBwaGFzZXMuZm9yRWFjaChwaGFzZSA9PiBwaGFzZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBoaWRlQWxsRXhjZXB0Q3VycmVudCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGhhc2UocGxheW9mZlBoYXNlcywgcGhhc2VDb3VudCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBoYXNlQ291bnQgPSAocGhhc2VDb3VudCArIDEpICUgcGxheW9mZlBoYXNlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaGlkZUFsbEV4Y2VwdEN1cnJlbnQoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGhhc2VDb3VudCA9IChwaGFzZUNvdW50IC0gMSArIHBsYXlvZmZQaGFzZXMubGVuZ3RoKSAlIHBsYXlvZmZQaGFzZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGhpZGVBbGxFeGNlcHRDdXJyZW50KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgdG91Y2hTdGFydFggPSAwO1xuICAgICAgICAgICAgbGV0IHRvdWNoRW5kWCA9IDA7XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVN3aXBlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0b3VjaEVuZFggLSB0b3VjaFN0YXJ0WDtcblxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUHJldigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgaGlkZUFsbEV4Y2VwdEN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICBwbGF5b2ZmTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5leHQpO1xuICAgICAgICAgICAgICAgIHBsYXlvZmZQcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJldik7XG5cbiAgICAgICAgICAgICAgICBwbGF5b2ZmQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaFN0YXJ0WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHBsYXlvZmZDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaEVuZFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN3aXBlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93TW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPD0gNTUwO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5vd01vYmlsZSAmJiAhaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNb2JpbGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBoaWRlQWxsRXhjZXB0Q3VycmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5leHQpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByZXYpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghbm93TW9iaWxlICYmIGlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTW9iaWxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGxQaGFzZXMocGxheW9mZlBoYXNlcyk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlvZmZOZXh0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTmV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlvZmZQcmV2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJldik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsaWNrLXBpY2tcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKS50aGVuKGluaXQpXG5cbiAgICAvL3Rlc3RcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWxuZ1wiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcInVrXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWF1dGhcIilcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCI3Nzc3Nzc3OVwiKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJyk7XG4gICAgY29uc3QgcG9wdXBXaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luLXBvcHVwJyk7XG4gICAgY29uc3QgcG9wdXBMb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvc2UtcG9wdXAnKTtcbiAgICBjb25zdCBwb3B1cE90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm90aGVycy1wb3B1cCcpO1xuXG4gICAgY29uc29sZS5sb2cocG9wdXBXaW4ucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmX19wb3B1cC1jbG9zZVwiKSlcblxuICAgIGZ1bmN0aW9uIHNldEhpZGVQb3B1cChwb3B1cCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fcG9wdXAtY2xvc2VcIikpO1xuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19wb3B1cC1jbG9zZScpO1xuXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktb3BhY2l0eScpO1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0SGlkZVBvcHVwKHBvcHVwV2luKTtcbiAgICBzZXRIaWRlUG9wdXAocG9wdXBMb3NlKTtcbiAgICBzZXRIaWRlUG9wdXAocG9wdXBPdGhlcik7XG5cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcG9wdXAtd2luJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LW9wYWNpdHknKTtcbiAgICAgICAgcG9wdXBXaW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBwb3B1cExvc2UuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBwb3B1cE90aGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wb3B1cC1sb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LW9wYWNpdHknKTtcbiAgICAgICAgcG9wdXBXaW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBwb3B1cExvc2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBwb3B1cE90aGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wb3B1cC1vdGhlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1vcGFjaXR5Jyk7XG4gICAgICAgIHBvcHVwV2luLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBMb3NlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBPdGhlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdGltZXInKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YWdlMSA9ICcxJ1xuICAgICAgICBjb25zdCBzdGFnZTIgPSAnNCdcblxuICAgICAgICBjb25zdCBzYXZlZERhdGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudERhdGVcIik7XG5cbiAgICAgICAgY29uc3QgbmV3RGF0ZSA9IHNhdmVkRGF0ZSA9PT0gc3RhZ2UyID8gc3RhZ2UxIDogc3RhZ2UyO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudERhdGVcIiwgbmV3RGF0ZSk7XG5cbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cblxufSkoKTtcbiJdfQ==
