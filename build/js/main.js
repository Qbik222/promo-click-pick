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
  var _JSON$parse, _sessionStorage$getIt, _Number, _document$querySelect3;
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
    teamTextPopups = document.querySelectorAll('.playoff__choose-team-text'),
    popupsWrap = document.querySelector(".popups");
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
  var bigLose = sessionStorage.getItem("bigLoose");
  var bigWin = sessionStorage.getItem("bigWin");
  var teamsWin = (_JSON$parse = JSON.parse(sessionStorage.getItem("teamsWin"))) !== null && _JSON$parse !== void 0 ? _JSON$parse : [];
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
      team: "Falcons",
      dataAttr: "falcons",
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
  var othersArray = [];
  var indexCard = false;

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
  function openPopup(dataAttr, container) {
    var currentPopup = container.querySelector("[data-popup=\"".concat(dataAttr, "\"]"));
    container.classList.remove('overlay-opacity');
    currentPopup.classList.remove('hide');
    document.body.style.overflow = "hidden";
  }
  function closePopup(container) {
    var popups = container.querySelectorAll('.playoff__popup');
    var allPopupsTeamTabs = container.querySelectorAll(".playoff__choose-team");
    allPopupsTeamTabs.forEach(function (team) {
      team.classList.remove('_selected');
      team.classList.remove('_lock');
      team.classList.add('_open');
    });
    popups.forEach(function (popup) {
      popup.classList.add('hide');
    });
    container.classList.add('overlay-opacity');
    document.body.style.overflow = "auto";
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
              document.addEventListener("click", function (e) {
                var _target$closest, _target$querySelector;
                var target = e.target,
                  clickedCard = target.closest('.stage__card'),
                  cardBigWin = target.closest('[data-big-stage="bigWin"]'),
                  cardBigLose = target.closest('[data-big-stage="bigLose"]'),
                  popupsCloseBtn = target.closest('.playoff__popup-close'),
                  popup = target.closest('.playoff__popup'),
                  bigWinPopup = target.closest('[data-popup="bigWin"]'),
                  bigLosePopup = target.closest('[data-popup="bigLose"]'),
                  OthersPopup = target.closest('[data-popup="Others"]'),
                  popupsTeam = target.closest('.playoff__choose-team'),
                  othersCard = target.closest('.stage__card'),
                  allPopupsTeam = (_target$closest = target.closest(".playoff__popup")) === null || _target$closest === void 0 ? void 0 : _target$closest.querySelectorAll('.playoff__choose-team'),
                  clickedTeamName = (_target$querySelector = target.querySelector('[data-team]')) === null || _target$querySelector === void 0 ? void 0 : _target$querySelector.getAttribute('data-team'),
                  activeStage = document.querySelector("[data-stage]._active"),
                  activeBigWin = activeStage.querySelector("[data-big-stage=\"bigWin\"]"),
                  activeBigWinTeam = activeBigWin.querySelector(".stage__card-text"),
                  activeBigLose = activeStage.querySelector("[data-big-stage=\"bigLose\"]"),
                  activeBigLoseTeam = activeBigLose.querySelector(".stage__card-text"),
                  activeOthers = activeStage.querySelector("[data-cards-wrap=\"stage\"]").querySelectorAll('.stage__card'),
                  bigWinPopupsTeam = document.querySelector("[data-popup=\"bigWin\"]").querySelectorAll('.playoff__choose-team-text'),
                  bigLosePopupsTeam = document.querySelector("[data-popup=\"bigLose\"]").querySelectorAll('.playoff__choose-team-text'),
                  othersPopupsTeam = document.querySelector("[data-popup=\"Others\"]").querySelectorAll('.playoff__choose-team-text'),
                  confirmChooseBtn = target.closest('.playoff__popup-btn'),
                  othersConfirmBtn = document.querySelector("[data-popup=\"Others\"]").querySelector('.playoff__popup-btn'),
                  bigWinConfirmBtn = document.querySelector("[data-popup=\"bigWin\"]").querySelector('.playoff__popup-btn'),
                  bigLoseConfirmBtn = document.querySelector("[data-popup=\"bigLose\"]").querySelector('.playoff__popup-btn');

                // console.log(activeOthers)

                // відкриття попапу на 3 0
                if (cardBigWin) {
                  sessionStorage.removeItem("bigWinTemporary");
                  if (bigWin) {
                    bigWinConfirmBtn.classList.remove('_lock');
                    sessionStorage.setItem("bigWinTemporary", bigWin);
                  }
                  if (sessionStorage.getItem("bigWinTemporary")) {
                    bigWinConfirmBtn.classList.remove('_lock');
                  } else {
                    bigWinConfirmBtn.classList.add('_lock');
                  }
                  bigWinPopupsTeam.forEach(function (team) {
                    var _JSON$parse2;
                    var teamName = activeStage.querySelector("[data-big-stage=\"bigLose\"]").querySelector(".stage__card-text");
                    var teamWrap = team.closest(".playoff__choose-team");
                    var isSelectedTeam = teamName.getAttribute('data-team') === team.getAttribute('data-team');
                    var isSelectedBigWin = ((_JSON$parse2 = JSON.parse(bigWin)) === null || _JSON$parse2 === void 0 ? void 0 : _JSON$parse2.dataAttr) === team.getAttribute("data-team");

                    // console.log(bigWin)
                    // console.log(team.getAttribute("data-team"))

                    // console.log(isSelectedBigWin)
                    // if(bigWin){
                    //     teamWrap.classList.add('_lock');
                    // }
                    if (isSelectedBigWin) {
                      teamWrap.classList.remove('_open');
                      teamWrap.classList.remove('_lock');
                      teamWrap.classList.add('_selected');
                    }
                    if (isSelectedTeam) {
                      teamWrap.classList.add('hide');
                    }
                  });
                  openPopup("bigWin", popupsWrap);
                }

                // відкриття попапу на 0 3
                if (cardBigLose) {
                  sessionStorage.removeItem("bigLoseTemporary");
                  if (bigLose) {
                    bigLoseConfirmBtn.classList.remove('_lock');
                    sessionStorage.setItem("bigLoseTemporary", bigLose);
                  }
                  if (sessionStorage.getItem("bigLoseTemporary")) {
                    bigLoseConfirmBtn.classList.remove('_lock');
                  } else {
                    bigLoseConfirmBtn.classList.add('_lock');
                  }
                  bigLosePopupsTeam.forEach(function (team) {
                    var _JSON$parse3;
                    var teamName = activeStage.querySelector("[data-big-stage=\"bigWin\"]").querySelector(".stage__card-text");
                    var teamWrap = team.closest(".playoff__choose-team");
                    var isSelectedTeam = teamName.getAttribute('data-team') === team.getAttribute('data-team');
                    var isSelectedBigLose = ((_JSON$parse3 = JSON.parse(bigLose)) === null || _JSON$parse3 === void 0 ? void 0 : _JSON$parse3.dataAttr) === team.getAttribute("data-team");
                    if (isSelectedBigLose) {
                      teamWrap.classList.remove('_open');
                      teamWrap.classList.remove('_lock');
                      teamWrap.classList.add('_selected');
                    }
                    if (isSelectedTeam) {
                      teamWrap.classList.add('hide');
                    } else {
                      teamWrap.classList.remove('hide');
                    }
                  });
                  openPopup("bigLose", popupsWrap);
                }

                // відкриття попапу на інші команди
                if (clickedCard && !cardBigWin && !cardBigLose) {
                  var _teamsWin;
                  var selectedTeams = (_teamsWin = teamsWin) === null || _teamsWin === void 0 ? void 0 : _teamsWin.filter(function (item) {
                    return item && item.dataAttr;
                  });
                  sessionStorage.removeItem("teamsWinTemporary");
                  if (selectedTeams && selectedTeams.length > 0) {
                    sessionStorage.setItem("teamsWinTemporary", JSON.stringify(selectedTeams));
                  }
                  othersPopupsTeam.forEach(function (team) {
                    var teamDataAttr = team.getAttribute('data-team');
                    var teamWrap = team.closest(".playoff__choose-team");
                    var teamNameWin = activeStage.querySelector('[data-big-stage="bigWin"] .stage__card-text');
                    var teamNameLose = activeStage.querySelector('[data-big-stage="bigLose"] .stage__card-text');
                    var isSelectedTeam = selectedTeams === null || selectedTeams === void 0 ? void 0 : selectedTeams.some(function (item) {
                      return item.dataAttr === teamDataAttr;
                    });
                    var isSelectedTeamWin = (teamNameWin === null || teamNameWin === void 0 ? void 0 : teamNameWin.getAttribute('data-team')) === teamDataAttr;
                    var isSelectedTeamLose = (teamNameLose === null || teamNameLose === void 0 ? void 0 : teamNameLose.getAttribute('data-team')) === teamDataAttr;
                    if (isSelectedTeam) {
                      teamWrap.classList.remove('_open');
                      teamWrap.classList.add('_selected');
                    }
                    if ((selectedTeams === null || selectedTeams === void 0 ? void 0 : selectedTeams.length) > 0 && !isSelectedTeam) {
                      teamWrap.classList.add('_lock');
                    }
                    if (isSelectedTeamWin || isSelectedTeamLose) {
                      teamWrap.classList.add('hide');
                    }
                  });
                  if (activeOthers) {
                    othersArray = Array.from(activeOthers);
                    indexCard = othersArray.indexOf(othersCard);
                    console.log(indexCard);
                  }
                  othersConfirmBtn.classList.add('_lock');
                  openPopup("Others", popupsWrap);
                }

                // закриття попапу на інші команди
                if (popupsCloseBtn || !clickedCard && !popup) {
                  closePopup(popupsWrap);
                }

                // вибір предікту на 3 0
                if (bigWinPopup && popupsTeam) {
                  if (clickedTeamName && popupsTeam) {
                    var _JSON$parse4;
                    var isSelectedBigWin = (_JSON$parse4 = JSON.parse(bigWin)) !== null && _JSON$parse4 !== void 0 ? _JSON$parse4 : false;
                    if (isSelectedBigWin) {
                      sessionStorage.setItem("bigWinTemporary", bigWin);
                    }
                    var currentTeam = teams.find(function (team) {
                      return team.dataAttr === clickedTeamName;
                    });
                    sessionStorage.setItem("bigWinTemporary", JSON.stringify(currentTeam));
                    allPopupsTeam.forEach(function (team) {
                      team.classList.remove('_selected');
                      team.classList.add('_open');
                    });
                    popupsTeam.classList.add('_selected');
                    popupsTeam.classList.remove('_open');
                    if (sessionStorage.getItem("bigWinTemporary")) {
                      bigWinConfirmBtn.classList.remove('_lock');
                    } else {
                      bigWinConfirmBtn.classList.add('_lock');
                    }
                  }
                }

                // вибір предікту на 0 3
                if (bigLosePopup && popupsTeam) {
                  if (clickedTeamName) {
                    var _JSON$parse5;
                    var isSelectedBigLose = (_JSON$parse5 = JSON.parse(bigLose)) !== null && _JSON$parse5 !== void 0 ? _JSON$parse5 : false;
                    if (isSelectedBigLose) {
                      sessionStorage.setItem("bigLoseTemporary", bigLose);
                    }
                    var _currentTeam = teams.find(function (team) {
                      return team.dataAttr === clickedTeamName;
                    });
                    sessionStorage.setItem("bigLoseTemporary", JSON.stringify(_currentTeam));
                    allPopupsTeam.forEach(function (team) {
                      team.classList.remove('_selected');
                      team.classList.add('_open');
                    });
                    popupsTeam === null || popupsTeam === void 0 ? void 0 : popupsTeam.classList.add('_selected');
                    popupsTeam === null || popupsTeam === void 0 ? void 0 : popupsTeam.classList.remove('_open');
                    if (sessionStorage.getItem("bigLoseTemporary")) {
                      bigLoseConfirmBtn.classList.remove('_lock');
                    } else {
                      bigLoseConfirmBtn.classList.add('_lock');
                    }
                  }
                }

                // вибір предікту на всі інші команди
                if (OthersPopup && popupsTeam) {
                  // popupsTeam.classList.add('_selected');
                  // popupsTeam.classList.remove('_open');
                  if (clickedTeamName) {
                    var _currentTeam2 = teams.find(function (team) {
                      return team.dataAttr === clickedTeamName;
                    });

                    // let isInside = indexCard !== -1;

                    // console.log(indexCard)

                    _currentTeam2 = _objectSpread(_objectSpread({}, _currentTeam2), {}, {
                      teamCardNum: indexCard
                    });
                    if (_currentTeam2) {
                      var newPredict = JSON.parse(sessionStorage.getItem("teamsWinTemporary")) || [];
                      var alreadyAdded = newPredict.some(function (item) {
                        return item.dataAttr === _currentTeam2.dataAttr;
                      });
                      var isPredictFull = newPredict.length >= 7;
                      if (!alreadyAdded && !isPredictFull) {
                        newPredict.push(_currentTeam2);
                        sessionStorage.setItem("teamsWinTemporary", JSON.stringify(newPredict));
                        console.log("✅ Added:", _currentTeam2);
                        popupsTeam.classList.add('_selected');
                        popupsTeam.classList.remove('_open');
                      } else {
                        newPredict = newPredict.filter(function (team) {
                          return team.dataAttr !== _currentTeam2.dataAttr;
                        });
                        sessionStorage.setItem("teamsWinTemporary", JSON.stringify(newPredict));
                        console.log("⚠️ Team removed", _currentTeam2);
                        popupsTeam.classList.remove('_selected');
                        popupsTeam.classList.add('_open');
                      }
                      var updatedLength = newPredict.length;
                      if (updatedLength < 7) {
                        othersConfirmBtn.classList.add('_lock');
                        allPopupsTeam.forEach(function (team) {
                          return team.classList.remove('_lock');
                        });
                      } else if (updatedLength === 7) {
                        othersConfirmBtn.classList.remove('_lock');
                        allPopupsTeam.forEach(function (team) {
                          if (team.classList.contains('_open')) {
                            team.classList.add('_lock');
                          }
                        });
                      }
                    } else {
                      console.log("❌ Team not found for:", clickedTeamName);
                    }
                  }
                }

                // підтвердження вибору в попапі
                if (confirmChooseBtn) {
                  teamsWin = JSON.parse(sessionStorage.getItem("teamsWinTemporary"));
                  if (teamsWin) sessionStorage.setItem("teamsWin", JSON.stringify(teamsWin));
                  bigLose = sessionStorage.getItem("bigLoseTemporary");
                  if (bigLose) sessionStorage.setItem("bigLose", bigLose);
                  bigWin = sessionStorage.getItem("bigWinTemporary");
                  if (bigWin) sessionStorage.setItem("bigWin", bigWin);
                  var bigWinPredict = JSON.parse(bigWin);
                  var bigLosePredict = JSON.parse(bigLose);
                  var otherTeamsPredict = teamsWin;
                  if (bigLosePredict) {
                    activeBigLose.classList.remove('_open');
                    activeBigLose.classList.add('_selected');
                    activeBigLoseTeam.textContent = translateKey(bigLosePredict.dataAttr);
                    activeBigLoseTeam.setAttribute('data-team', bigLosePredict.dataAttr);
                  }
                  if (bigWinPredict) {
                    activeBigWin.classList.remove('_open');
                    activeBigWin.classList.add('_selected');
                    activeBigWinTeam.textContent = translateKey(bigWinPredict.dataAttr);
                    activeBigWinTeam.setAttribute('data-team', bigWinPredict.dataAttr);
                  }
                  if (otherTeamsPredict) {
                    otherTeamsPredict.forEach(function (team, i) {
                      var currentCardTeamName = activeOthers[i].querySelector(".stage__card-text");
                      console.log(currentCardTeamName, team);
                      activeOthers[i].classList.add('_selected');
                      activeOthers[i].classList.remove('_open');
                      currentCardTeamName.setAttribute('data-team', team.dataAttr);
                      currentCardTeamName.textContent = translateKey(team.dataAttr);
                    });
                  }
                  closePopup(popupsWrap);
                }
              });
              setTimeout(hideLoader, 1000);
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

  // function setHidePopup(popup){
  //     console.log(popup.querySelector(".playoff__popup-close"));
  //     const closeBtn = popup.querySelector('.playoff__popup-close');
  //
  //     closeBtn.addEventListener('click', () =>{
  //         overlay.classList.add('overlay-opacity');
  //         popup.classList.add("hide")
  //     });
  // }
  //
  // setHidePopup(popupWin);
  // setHidePopup(popupLose);
  // setHidePopup(popupOther);

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwic3RhZ2VzRGF0YSIsImRhdGEiLCJEYXRlIiwiY3VycmVudERhdGUiLCJjdXJyZW50U3RhZ2UiLCJOdW1iZXIiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInN0YWdlcyIsInN0YWdlc1RhYnMiLCJwbGF5b2ZmU3RhZ2UiLCJyZXN1bHRzIiwicHJlZGljdG9yIiwicGxheW9mZlByZWRpY3RvciIsInRlYW1UZXh0UG9wdXBzIiwicG9wdXBzV3JhcCIsInVrTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImZvckVhY2giLCJlbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwidGVhbXMiLCJ0ZWFtIiwiYmlnTG9zZSIsImJpZ1dpbiIsInRlYW1zV2luIiwiSlNPTiIsInBhcnNlIiwic3RhZ2VzUmVzdWx0IiwiZGVmYXV0VmFsdWUiLCJ0ZWFtc0JldCIsIm91dGNvbWUiLCJsb2FkZXJCdG4iLCJsb2NhbGUiLCJkZWJ1ZyIsIm90aGVyc0FycmF5IiwiaW5kZXhDYXJkIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlbmRlclRlYW1CbG9ja3MiLCJwb3B1cEF0dHIiLCJwb3B1cCIsImNvbnRhaW5lciIsInRlYW1CbG9jayIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInRyYW5zbGF0ZSIsImhpZGVMb2FkZXIiLCJhZGQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInJlbW92ZSIsImNoZWNrVXNlckF1dGgiLCJsb2FkVGltZSIsInNldFRpbWVvdXQiLCJzaG93RWxlbWVudHMiLCJoaWRlRWxlbWVudHMiLCJyZXNvbHZlIiwicmVwb3J0RXJyb3IiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidXNlcmlkIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwic3RyaW5naWZ5Iiwid2FybiIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsImdldEF0dHJpYnV0ZSIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsImVsZW1lbnQiLCJsYW5nIiwicmVuZGVyVXNlcnMiLCJ3ZWVrIiwidXNlcnMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJjdXJyZW50VXNlciIsImZpbmQiLCJ1c2VyIiwiaXNUb3BDdXJyZW50VXNlciIsInNsaWNlIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsInVzZXJEYXRhIiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIm5laWdoYm9yIiwidXNlclJvdyIsInVzZXJQbGFjZSIsImluZGV4T2YiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJ0cmFuc2xhdGVLZXkiLCJtYXNrVXNlcklkIiwicG9pbnRzIiwiYXBwZW5kIiwiaW5kZXgiLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwidG9TdHJpbmciLCJzZXRTdGF0ZVBpY2tTdGFnZSIsInN0YWdlIiwic3RhZ2VDYXJkc1dyYXAiLCJzdGFnZUNhcmRzIiwic3RhZ2VDYXJkV2luIiwic3RhZ2VDYXJkTG9zZSIsInN0YWdlQ2FyZFdpbk5hbWUiLCJzdGFnZUNhcmRMb3NlTmFtZSIsInN0YWdlTnVtIiwic3RhZ2VTdGF0ZSIsInN0YWdlUmVzdWx0RGF0YSIsIm90aGVyc1RlYW1zIiwiYmlnV2luVGVhbSIsImJpZ0xvc2VUZWFtIiwiY2FyZCIsImkiLCJ0ZWFtTmFtZSIsIm9wZW5Qb3B1cCIsImN1cnJlbnRQb3B1cCIsImNsb3NlUG9wdXAiLCJwb3B1cHMiLCJhbGxQb3B1cHNUZWFtVGFicyIsInBsYWNlIiwicGFydGljaXBhdGUiLCJwYXJhbXMiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsInVzZXJTdGFnZXMiLCJiaWdXaW5uZXIiLCJiaWdMb3NlciIsInRvcCIsImJvdHRvbSIsInRpbWVyIiwicGxheW9mZldyYXAiLCJ0YWIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJ0YXJnZXRTdGFnZVZhbHVlIiwidGFyZ2V0U3RhZ2UiLCJ0IiwiY2xpY2tlZENhcmQiLCJjYXJkQmlnV2luIiwiY2FyZEJpZ0xvc2UiLCJwb3B1cHNDbG9zZUJ0biIsImJpZ1dpblBvcHVwIiwiYmlnTG9zZVBvcHVwIiwiT3RoZXJzUG9wdXAiLCJwb3B1cHNUZWFtIiwib3RoZXJzQ2FyZCIsImFsbFBvcHVwc1RlYW0iLCJjbGlja2VkVGVhbU5hbWUiLCJhY3RpdmVTdGFnZSIsImFjdGl2ZUJpZ1dpbiIsImFjdGl2ZUJpZ1dpblRlYW0iLCJhY3RpdmVCaWdMb3NlIiwiYWN0aXZlQmlnTG9zZVRlYW0iLCJhY3RpdmVPdGhlcnMiLCJiaWdXaW5Qb3B1cHNUZWFtIiwiYmlnTG9zZVBvcHVwc1RlYW0iLCJvdGhlcnNQb3B1cHNUZWFtIiwiY29uZmlybUNob29zZUJ0biIsIm90aGVyc0NvbmZpcm1CdG4iLCJiaWdXaW5Db25maXJtQnRuIiwiYmlnTG9zZUNvbmZpcm1CdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInRlYW1XcmFwIiwiaXNTZWxlY3RlZFRlYW0iLCJpc1NlbGVjdGVkQmlnV2luIiwiaXNTZWxlY3RlZEJpZ0xvc2UiLCJzZWxlY3RlZFRlYW1zIiwiZmlsdGVyIiwiaXRlbSIsInRlYW1EYXRhQXR0ciIsInRlYW1OYW1lV2luIiwidGVhbU5hbWVMb3NlIiwiaXNTZWxlY3RlZFRlYW1XaW4iLCJpc1NlbGVjdGVkVGVhbUxvc2UiLCJBcnJheSIsImZyb20iLCJjdXJyZW50VGVhbSIsInRlYW1DYXJkTnVtIiwibmV3UHJlZGljdCIsImFscmVhZHlBZGRlZCIsImlzUHJlZGljdEZ1bGwiLCJwdXNoIiwidXBkYXRlZExlbmd0aCIsImNvbnRhaW5zIiwiYmlnV2luUHJlZGljdCIsImJpZ0xvc2VQcmVkaWN0Iiwib3RoZXJUZWFtc1ByZWRpY3QiLCJ0ZXh0Q29udGVudCIsImN1cnJlbnRDYXJkVGVhbU5hbWUiLCJpbml0aWFsT2Zmc2V0TGVmdCIsInVwZGF0ZVBsYXlvZmZQb3NpdGlvbiIsImlubmVyV2lkdGgiLCJ0cmFuc2Zvcm0iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwiY3VycmVudExlZnQiLCJzaGlmdCIsInBsYXlvZmZQaGFzZXMiLCJwbGF5b2ZmQ29udGFpbmVyIiwicGxheW9mZk5leHQiLCJwbGF5b2ZmUHJldiIsInBoYXNlQ291bnQiLCJpc01vYmlsZSIsInNldEN1cnJlbnRQaGFzZSIsInBoYXNlcyIsImN1cnJlbnQiLCJwaGFzZSIsInNob3dBbGxQaGFzZXMiLCJoaWRlQWxsRXhjZXB0Q3VycmVudCIsImhhbmRsZU5leHQiLCJoYW5kbGVQcmV2IiwidG91Y2hTdGFydFgiLCJ0b3VjaEVuZFgiLCJoYW5kbGVTd2lwZSIsImRpZmYiLCJNYXRoIiwiYWJzIiwiY2hhbmdlZFRvdWNoZXMiLCJzY3JlZW5YIiwibm93TW9iaWxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidGFyZ2V0Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJsbmdCdG4iLCJyZWxvYWQiLCJhdXRoQnRuIiwib3ZlcmxheSIsInBvcHVwV2luIiwicG9wdXBMb3NlIiwicG9wdXBPdGhlciIsInN0YWdlMSIsInN0YWdlMiIsInNhdmVkRGF0ZSIsIm5ld0RhdGUiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBQUE7RUFFVCxJQUFNQSxNQUFNLEdBQUcscUNBQXFDO0VBRXBELElBQU1DLFVBQVUsR0FBRyxDQUNmO0lBQUVDLElBQUksRUFBRSxJQUFJQyxJQUFJLENBQUMsMkJBQTJCO0VBQUUsQ0FBQyxFQUMvQztJQUFFRCxJQUFJLEVBQUUsSUFBSUMsSUFBSSxDQUFDLDJCQUEyQjtFQUFFLENBQUMsRUFDL0M7SUFBRUQsSUFBSSxFQUFFLElBQUlDLElBQUksQ0FBQywyQkFBMkI7RUFBRSxDQUFDLEVBQy9DO0lBQUVELElBQUksRUFBRSxJQUFJQyxJQUFJLENBQUMsMkJBQTJCO0VBQUUsQ0FBQyxDQUNsRDtFQUVELElBQU1DLFdBQVcsR0FBRyxJQUFJRCxJQUFJLENBQUMsMkJBQTJCLENBQUM7O0VBRXpEOztFQUVBLElBQUlFLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sQ0FBQyxhQUFhLENB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R0MsTUFBTTtJQUN0RG5ULGNBQWMsQ0FBQ3VOLE9BQU8sQ0FBQyxhQUFhLEVBQUU4RixPQUFPLENBQUM7SUFFOUMxTixRQUFRLENBQUNpTixNQUFNLEVBQUU7RUFDckIsQ0FBQyxDQUFDO0FBR04sQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9jbGlja19waWNrJ1xuXG4gICAgY29uc3Qgc3RhZ2VzRGF0YSA9IFtcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMjBUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMjVUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMzBUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDYtMDVUMDA6MDA6MDArMDM6MDBcIikgfVxuICAgIF07XG5cbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0wNC0wNVQwMDowMDowMCswMzowMFwiKTtcblxuICAgIC8vIGxldCBjdXJyZW50U3RhZ2UgPSBzdGFnZXNEYXRhLmZpbHRlcihzdGFnZSA9PiBzdGFnZS5kYXRhIDw9IGN1cnJlbnREYXRlKS5sZW5ndGggPz8gMztcblxuICAgIGxldCBjdXJyZW50U3RhZ2UgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnREYXRlXCIpKVxuXG4gICAgY29uc29sZS5sb2coY3VycmVudFN0YWdlKTtcblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIHN0YWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zdGFnZV1cIiksXG4gICAgICAgIHN0YWdlc1RhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc3RhZ2UtdGFiXVwiKSxcbiAgICAgICAgcGxheW9mZlN0YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmXCIpLFxuICAgICAgICByZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRzXCIpLFxuICAgICAgICBwcmVkaWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZWRpY3RvclwiKSxcbiAgICAgICAgcGxheW9mZlByZWRpY3RvciA9IHByZWRpY3Rvci5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZcIiksXG4gICAgICAgIHRlYW1UZXh0UG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZS10ZWFtLXRleHQnKSxcbiAgICAgICAgcG9wdXBzV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBzXCIpO1xuXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuXG4gICAgY29uc3QgdGVhbXMgPSBbXG4gICAgICAgIHsgdGVhbTogXCJDb21wbGV4aXR5XCIsIGRhdGFBdHRyOiBcImNvbXBsZXhpdHlcIiB9LFxuICAgICAgICB7IHRlYW06IFwiRmFsY29uc1wiLCBkYXRhQXR0cjogXCJmYWxjb25zXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIlZpdGFsaXR5XCIsIGRhdGFBdHRyOiBcInZpdGFsaXR5XCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkhlcm9pY1wiLCBkYXRhQXR0cjogXCJoZXJvaWNcIiB9LFxuICAgICAgICB7IHRlYW06IFwiRmF6ZVwiLCBkYXRhQXR0cjogXCJmYXplXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIlNwaXJpdFwiLCBkYXRhQXR0cjogXCJzcGlyaXRcIiB9LFxuICAgICAgICB7IHRlYW06IFwiQjhcIiwgZGF0YUF0dHI6IFwiQjhcIiB9LFxuICAgICAgICB7IHRlYW06IFwiM0RNQVhcIiwgZGF0YUF0dHI6IFwiM0RNQVhcIiB9LFxuICAgICAgICB7IHRlYW06IFwiTU9VWlwiLCBkYXRhQXR0cjogXCJNT1VaXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIldpbGRjYXJkXCIsIGRhdGFBdHRyOiBcIndpbGRjYXJkXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIlZpcnR1cy5wcm9cIiwgZGF0YUF0dHI6IFwidmlydHVzUHJvXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIlRoZSBNb25nb2x6XCIsIGRhdGFBdHRyOiBcInRoZU1vbmdvbHpcIiB9LFxuICAgICAgICB7IHRlYW06IFwiRmx5UXVlc3RcIiwgZGF0YUF0dHI6IFwiZmx5UXVlc3RcIiB9LFxuICAgICAgICB7IHRlYW06IFwiRnVyaWFcIiwgZGF0YUF0dHI6IFwiZnVyaWFcIiB9LFxuICAgICAgICB7IHRlYW06IFwiQXVyb3JhXCIsIGRhdGFBdHRyOiBcImF1cm9yYVwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJMeW5uIFZpc2lvblwiLCBkYXRhQXR0cjogXCJseW5uVmlzaW9uXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk1JQlJcIiwgZGF0YUF0dHI6IFwiTUlCUlwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJOYXR1cyBWaW5jZXJlXCIsIGRhdGFBdHRyOiBcIm5hdHVzVmluY2VyZVwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJOUkdcIiwgZGF0YUF0dHI6IFwiTlJHXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIlBhaU5cIiwgZGF0YUF0dHI6IFwiUGFpTlwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJHMlwiLCBkYXRhQXR0cjogXCJHMlwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJDaGluZ2dpcyBXYXJyaW9yc1wiLCBkYXRhQXR0cjogXCJjaGluZ2dpc1dhcnJpb3JzXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk04MFwiLCBkYXRhQXR0cjogXCJNODBcIiB9LFxuICAgICAgICB7IHRlYW06IFwiTGlxdWlkXCIsIGRhdGFBdHRyOiBcImxpcXVpZFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJOZW1pZ2FcIiwgZGF0YUF0dHI6IFwibmVtaWdhXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkltcGVyaWFsXCIsIGRhdGFBdHRyOiBcImltcGVyaWFsXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkZsdXhvXCIsIGRhdGFBdHRyOiBcImZsdXhvXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk1ldGl6cG9ydFwiLCBkYXRhQXR0cjogXCJtZXRpenBvcnRcIiB9LFxuICAgICAgICB7IHRlYW06IFwiT0dcIiwgZGF0YUF0dHI6IFwiT0dcIiB9LFxuICAgICAgICB7IHRlYW06IFwiQmVzdGlhXCIsIGRhdGFBdHRyOiBcImJlc3RpYVwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJUeWxvb1wiLCBkYXRhQXR0cjogXCJ0eWxvb1wiIH1cbiAgICBdO1xuXG4gICAgbGV0IGJpZ0xvc2UgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnTG9vc2VcIilcbiAgICBsZXQgYmlnV2luID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ1dpblwiKVxuXG4gICAgbGV0IHRlYW1zV2luID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidGVhbXNXaW5cIikpID8/IFtdXG5cbiAgICBjb25zdCBzdGFnZXNSZXN1bHQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRlZmF1dFZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgdGVhbXNCZXQ6W1xuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJDb21wbGV4aXR5XCIsIGRhdGFBdHRyOiBcImNvbXBsZXhpdHlcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJGYWxjb25zXCIsIGRhdGFBdHRyOiBcImZhbGNvbnNcIiwgb3V0Y29tZTogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIlZpdGFsaXR5XCIsIGRhdGFBdHRyOiBcInZpdGFsaXR5XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiSGVyb2ljXCIsIGRhdGFBdHRyOiBcImhlcm9pY1wiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkZhemVcIiwgZGF0YUF0dHI6IFwiZmF6ZVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIlNwaXJpdFwiLCBkYXRhQXR0cjogXCJzcGlyaXRcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJCOFwiLCBkYXRhQXR0cjogXCJCOFwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYmlnV2luOiB7IHRlYW06IFwiUGFpTlwiLCBkYXRhQXR0cjogXCJQYWlOXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgIGJpZ0xvc2U6IHsgdGVhbTogXCJOUkdcIiwgZGF0YUF0dHI6IFwiTlJHXCIsIG91dGNvbWU6IHRydWUgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkZWZhdXRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlYW1zQmV0OltcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiQ29tcGxleGl0eVwiLCBkYXRhQXR0cjogXCJjb21wbGV4aXR5XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiRmFsY29uc1wiLCBkYXRhQXR0cjogXCJmYWxjb25zXCIsIG91dGNvbWU6IHRydWV9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJWaXRhbGl0eVwiLCBkYXRhQXR0cjogXCJ2aXRhbGl0eVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkhlcm9pY1wiLCBkYXRhQXR0cjogXCJoZXJvaWNcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJGYXplXCIsIGRhdGFBdHRyOiBcImZhemVcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJTcGlyaXRcIiwgZGF0YUF0dHI6IFwic3Bpcml0XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiQjhcIiwgZGF0YUF0dHI6IFwiQjhcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJpZ1dpbjogeyB0ZWFtOiBcIkZhbGNvbnNcIiwgZGF0YUF0dHI6IFwiZmFsY29uc1wiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICBiaWdMb3NlOiB7IHRlYW06IFwiTlJHXCIsIGRhdGFBdHRyOiBcIk5SR1wiLCBvdXRjb21lOiB0cnVlIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGVmYXV0VmFsdWU6IHRydWUsXG4gICAgICAgICAgICB0ZWFtc0JldDpbXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkNvbXBsZXhpdHlcIiwgZGF0YUF0dHI6IFwiY29tcGxleGl0eVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkZhbGNvbnNcIiwgZGF0YUF0dHI6IFwiZmFsY29uc1wiLCBvdXRjb21lOiB0cnVlfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiVml0YWxpdHlcIiwgZGF0YUF0dHI6IFwidml0YWxpdHlcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJIZXJvaWNcIiwgZGF0YUF0dHI6IFwiaGVyb2ljXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiRmF6ZVwiLCBkYXRhQXR0cjogXCJmYXplXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiU3Bpcml0XCIsIGRhdGFBdHRyOiBcInNwaXJpdFwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkI4XCIsIGRhdGFBdHRyOiBcIkI4XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBiaWdXaW46IHsgdGVhbTogXCJQYWlOXCIsIGRhdGFBdHRyOiBcIlBhaU5cIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgYmlnTG9zZTogeyB0ZWFtOiBcIk5SR1wiLCBkYXRhQXR0cjogXCJOUkdcIiwgb3V0Y29tZTogdHJ1ZSB9XG4gICAgICAgIH1cblxuICAgIF1cblxuXG5cbiAgICBsZXQgbG9hZGVyQnRuID0gZmFsc2VcblxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpID8/IFwiZW5cIlxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gdHJ1ZVxuXG4gICAgbGV0IG90aGVyc0FycmF5ID0gW11cbiAgICBsZXQgaW5kZXhDYXJkID0gZmFsc2VcblxuICAgIC8vIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSkgPz8gNzc3Nzc3Nzk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgLy8gaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVGVhbUJsb2Nrcyhwb3B1cEF0dHIsIHRlYW1zKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICAgICAgY29uc29sZS5sb2cocG9wdXApXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19wb3B1cC1zY3JvbGwnKTtcblxuICAgICAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICB0ZWFtcy5mb3JFYWNoKCh7IGRhdGFBdHRyIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlYW1CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGVhbUJsb2NrLmNsYXNzTmFtZSA9ICdwbGF5b2ZmX19jaG9vc2UtdGVhbSBfb3Blbic7IC8vINC80L7QttC10Ygg0LTQuNC90LDQvNGW0YfQvdC+INC30LzRltC90Y7QstCw0YLQuCDQvdCwIF9zZWxlY3RlZFxuXG4gICAgICAgICAgICB0ZWFtQmxvY2suaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXlvZmZfX2Nob29zZS10ZWFtLWljb25cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5b2ZmX19jaG9vc2UtdGVhbS10ZXh0XCIgZGF0YS10cmFuc2xhdGU9XCIke2RhdGFBdHRyfVwiIGRhdGEtdGVhbT1cIiR7ZGF0YUF0dHJ9XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5b2ZmX19jaG9vc2UtdGVhbS1idG5cIj48L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRlYW1CbG9jayk7XG4gICAgICAgIH0pO1xuICAgICAgICB0cmFuc2xhdGUoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRUaW1lID0gMjAwO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd0VsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICBjb25zdCBoaWRlRWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcblxuICAgICAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICBzaG93RWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoaWRlRWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgIH0sIGxvYWRUaW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vlaykge1xuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfWApXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VycyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCB1c2VySWQsIHdlZWspO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrKSB7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTMgOiAxMDtcbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCB0b3BVc2Vyc0xlbmd0aCk7XG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyRGF0YS5wb2ludHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRLZXkgPSBkZWJ1ZyA/IGtleSA6IGAqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qIGtleTogJHtrZXl9YFxuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICBuZWVkS2V5IHx8IGtleTtcbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTdGF0ZVBpY2tTdGFnZShzdGFnZSl7XG4gICAgICAgIGNvbnN0IHN0YWdlQ2FyZHNXcmFwID0gc3RhZ2UucXVlcnlTZWxlY3RvcignW2RhdGEtY2FyZHMtd3JhcD1cInN0YWdlXCJdJylcbiAgICAgICAgaWYoIXN0YWdlQ2FyZHNXcmFwKSByZXR1cm5cbiAgICAgICAgY29uc3Qgc3RhZ2VDYXJkcyA9IHN0YWdlQ2FyZHNXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFnZV9fY2FyZCcpO1xuICAgICAgICBjb25zdCBzdGFnZUNhcmRXaW4gPSBzdGFnZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1iaWctc3RhZ2U9XCJiaWdXaW5cIl0nKTtcbiAgICAgICAgY29uc3Qgc3RhZ2VDYXJkTG9zZSA9IHN0YWdlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJpZy1zdGFnZT1cImJpZ0xvc2VcIl0nKTtcbiAgICAgICAgY29uc3Qgc3RhZ2VDYXJkV2luTmFtZSA9IHN0YWdlQ2FyZFdpbi5xdWVyeVNlbGVjdG9yKCcuc3RhZ2VfX2NhcmQtdGV4dCcpO1xuICAgICAgICBjb25zdCBzdGFnZUNhcmRMb3NlTmFtZSA9IHN0YWdlQ2FyZExvc2UucXVlcnlTZWxlY3RvcignLnN0YWdlX19jYXJkLXRleHQnKTtcblxuICAgICAgICBjb25zdCBzdGFnZU51bSA9IE51bWJlcihzdGFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhZ2UnKSk7XG4gICAgICAgIGxldCBzdGFnZVN0YXRlID0gc3RhZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXBpY2stc3RhZ2UnKTtcbiAgICAgICAgY29uc3Qgc3RhZ2VSZXN1bHREYXRhID0gc3RhZ2VzUmVzdWx0W3N0YWdlTnVtIC0xXVxuXG4gICAgICAgIGxldCBvdGhlcnNUZWFtcyA9IHN0YWdlUmVzdWx0RGF0YS50ZWFtc0JldFxuICAgICAgICBsZXQgYmlnV2luVGVhbSA9IHN0YWdlUmVzdWx0RGF0YS5iaWdXaW5cbiAgICAgICAgbGV0IGJpZ0xvc2VUZWFtID0gc3RhZ2VSZXN1bHREYXRhLmJpZ0xvc2VcblxuICAgICAgICBzdGFnZUNhcmRXaW4uY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nLCAnX3NlbGVjdGVkJywgJ19sb3NlJywgJ193aW4nKTtcbiAgICAgICAgc3RhZ2VDYXJkTG9zZS5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicsICdfc2VsZWN0ZWQnLCAnX2xvc2UnLCAnX3dpbicpO1xuXG4gICAgICAgIGlmKHN0YWdlU3RhdGUgPT09IFwiZG9uZVwiKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YWdlQ2FyZHMpXG4gICAgICAgICAgICBzdGFnZUNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTmFtZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLnN0YWdlX19jYXJkLXRleHQnKTtcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJywgJ19zZWxlY3RlZCcsICdfbG9zZScsICdfd2luJywgXCJfZG9uZVwiKTtcbiAgICAgICAgICAgICAgICBpZihzdGFnZVJlc3VsdERhdGEuZGVmYXV0VmFsdWUpIGNhcmQuY2xhc3NMaXN0LmFkZCgnX2RvbmUnKTtcblxuICAgICAgICAgICAgICAgIHRlYW1OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJywgb3RoZXJzVGVhbXNbaV0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgIHRlYW1OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBvdGhlcnNUZWFtc1tpXS5kYXRhQXR0cik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0YWdlQ2FyZFdpbk5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nLCBiaWdXaW5UZWFtLmRhdGFBdHRyKTtcbiAgICAgICAgICAgIHN0YWdlQ2FyZFdpbk5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGJpZ1dpblRlYW0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgc3RhZ2VDYXJkTG9zZU5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nLCBiaWdMb3NlVGVhbS5kYXRhQXR0cik7XG4gICAgICAgICAgICBzdGFnZUNhcmRMb3NlTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYmlnTG9zZVRlYW0uZGF0YUF0dHIpO1xuXG5cbiAgICAgICAgICAgIGlmKHN0YWdlUmVzdWx0RGF0YS5kZWZhdXRWYWx1ZSl7XG4gICAgICAgICAgICAgICAgc3RhZ2VDYXJkV2luLmNsYXNzTGlzdC5hZGQoJ19kb25lJyk7XG4gICAgICAgICAgICAgICAgc3RhZ2VDYXJkTG9zZS5jbGFzc0xpc3QuYWRkKCdfZG9uZScpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaWYoYmlnV2luVGVhbS5vdXRjb21lKXtcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VDYXJkV2luLmNsYXNzTGlzdC5hZGQoJ193aW4nKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VDYXJkV2luLmNsYXNzTGlzdC5hZGQoJ19sb3NlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGJpZ0xvc2VUZWFtLm91dGNvbWUpe1xuICAgICAgICAgICAgICAgICAgICBzdGFnZUNhcmRXaW4uY2xhc3NMaXN0LmFkZCgnX3dpbicpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBzdGFnZUNhcmRXaW4uY2xhc3NMaXN0LmFkZCgnX2xvc2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgIH1cbiAgICAgICAgaWYoc3RhZ2VTdGF0ZSA9PT0gXCJhY3RpdmVcIil7XG4gICAgICAgICAgICBzdGFnZUNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTmFtZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLnN0YWdlX19jYXJkLXRleHQnKTtcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJywgJ19zZWxlY3RlZCcsICdfbG9zZScsICdfd2luJywgXCJfZG9uZVwiKTtcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ19vcGVuJyk7XG5cbiAgICAgICAgICAgICAgICB0ZWFtTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgXCJwb3B1cExvc2VUaXRsZVwiICk7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzdGFnZUNhcmRXaW4uY2xhc3NMaXN0LmFkZChcIl9vcGVuXCIpXG4gICAgICAgICAgICBzdGFnZUNhcmRMb3NlLmNsYXNzTGlzdC5hZGQoXCJfb3BlblwiKVxuXG4gICAgICAgICAgICBzdGFnZUNhcmRXaW5OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBcInBvcHVwTG9zZVRpdGxlXCIpO1xuICAgICAgICAgICAgc3RhZ2VDYXJkTG9zZU5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIFwicG9wdXBMb3NlVGl0bGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgdHJhbnNsYXRlKClcblxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3BlblBvcHVwKGRhdGFBdHRyLCBjb250YWluZXIpe1xuICAgICAgICBjb25zdCBjdXJyZW50UG9wdXAgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCIke2RhdGFBdHRyfVwiXWApO1xuXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LW9wYWNpdHknKTtcblxuICAgICAgICBjdXJyZW50UG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlUG9wdXAoY29udGFpbmVyKXtcbiAgICAgICAgY29uc3QgcG9wdXBzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19wb3B1cCcpO1xuICAgICAgICBjb25zdCBhbGxQb3B1cHNUZWFtVGFicyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtXCIpO1xuXG4gICAgICAgIGFsbFBvcHVwc1RlYW1UYWJzLmZvckVhY2goKHRlYW0pID0+IHtcbiAgICAgICAgICAgIHRlYW0uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB0ZWFtLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICB0ZWFtLmNsYXNzTGlzdC5hZGQoJ19vcGVuJyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcG9wdXBzLmZvckVhY2gocG9wdXAgPT4ge1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB9KVxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS1vcGFjaXR5Jyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UsIHdlZWspIHtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDMpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0ke3BsYWNlfWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTQtMTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMS0yNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTI2LTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tNTEtNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNzYtMTAwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEwMS0xMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTI2LTE1MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNTEtMTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDIwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE3Ni0yMDBgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGVyQnRuID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlcl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgIHJlcXVlc3QoJy9zdGFnZS8nKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyU3RhZ2VzID0gcmVzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKVxuXG4gICAgICAgICAgICAgICAgaWYodXNlclN0YWdlcykge1xuICAgICAgICAgICAgICAgICAgICBzdGFnZXNSZXN1bHQuZm9yRWFjaCgoc3RhZ2UsIGkpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXNlclN0YWdlc1tgc3RhZ2Uke2kgKyAxfUJldGBdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFnZXNSZXN1bHRbaV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1zQmV0OiBbLi4udXNlclN0YWdlc1tgc3RhZ2Uke2kgKyAxfUJldGBdLnRlYW1zQmV0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luOiB1c2VyU3RhZ2VzW2BzdGFnZSR7aSArIDF9QmV0YF0uYmlnV2lubmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdMb3NlOiB1c2VyU3RhZ2VzW2BzdGFnZSR7aSArIDF9QmV0YF0uYmlnTG9zZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhZ2VzLmZvckVhY2goKHN0YWdlLCBpKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0YWdlID4gc3RhZ2VzLmxlbmd0aCAtIDEgPyBjdXJyZW50U3RhZ2UgPSBzdGFnZXMubGVuZ3RoIC0gMSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdGFnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScsIGkgPT09IGN1cnJlbnRTdGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlc1RhYnNbaV0uY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScsIGkgPT09IGN1cnJlbnRTdGFnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9wID0gc3RhZ2UucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fdG9wXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib3R0b20gPSBzdGFnZS5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19ib3R0b21cIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc3RhZ2UucXVlcnlTZWxlY3RvcihcIi50aW1lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheW9mZldyYXAgPSBzdGFnZS5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX3dyYXBwZXJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiBjdXJyZW50U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcD8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b20/LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheW9mZldyYXA/LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXI/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1waWNrLXN0YWdlXCIsIFwibG9ja1wiKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbT8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmV3JhcD8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lcj8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZihpID09PSBjdXJyZW50U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlLnNldEF0dHJpYnV0ZShcImRhdGEtcGljay1zdGFnZVwiLCBcImFjdGl2ZVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKGkgPCBjdXJyZW50U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlLnNldEF0dHJpYnV0ZShcImRhdGEtcGljay1zdGFnZVwiLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlLmNsYXNzTGlzdC5hZGQoXCJfZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlUGlja1N0YWdlKHN0YWdlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGFnZXNUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuX2FjdGl2ZScpKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0YWdlVmFsdWUgPSB0YWIuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YWdlLXRhYicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zdGFnZT1cIiR7dGFyZ2V0U3RhZ2VWYWx1ZX1cIl1gKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2VzLmZvckVhY2goc3RhZ2UgPT4gc3RhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlc1RhYnMuZm9yRWFjaCh0ID0+IHQuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFN0YWdlPy5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcmVuZGVyVGVhbUJsb2NrcygnYmlnV2luJywgdGVhbXMpO1xuICAgICAgICAgICAgcmVuZGVyVGVhbUJsb2NrcygnYmlnTG9zZScsIHRlYW1zKTtcbiAgICAgICAgICAgIHJlbmRlclRlYW1CbG9ja3MoJ090aGVycycsIHRlYW1zKTtcblxuXG5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LFxuICAgICAgICAgICAgICAgIGNsaWNrZWRDYXJkID0gdGFyZ2V0LmNsb3Nlc3QoJy5zdGFnZV9fY2FyZCcpLFxuICAgICAgICAgICAgICAgIGNhcmRCaWdXaW4gPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtYmlnLXN0YWdlPVwiYmlnV2luXCJdJyksXG4gICAgICAgICAgICAgICAgY2FyZEJpZ0xvc2UgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtYmlnLXN0YWdlPVwiYmlnTG9zZVwiXScpLFxuICAgICAgICAgICAgICAgIHBvcHVwc0Nsb3NlQnRuID0gdGFyZ2V0LmNsb3Nlc3QoJy5wbGF5b2ZmX19wb3B1cC1jbG9zZScpLFxuICAgICAgICAgICAgICAgIHBvcHVwID0gdGFyZ2V0LmNsb3Nlc3QoJy5wbGF5b2ZmX19wb3B1cCcpLFxuICAgICAgICAgICAgICAgIGJpZ1dpblBvcHVwID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXBvcHVwPVwiYmlnV2luXCJdJyksXG4gICAgICAgICAgICAgICAgYmlnTG9zZVBvcHVwID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXBvcHVwPVwiYmlnTG9zZVwiXScpLFxuICAgICAgICAgICAgICAgIE90aGVyc1BvcHVwID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXBvcHVwPVwiT3RoZXJzXCJdJyksXG4gICAgICAgICAgICAgICAgcG9wdXBzVGVhbSA9IHRhcmdldC5jbG9zZXN0KCcucGxheW9mZl9fY2hvb3NlLXRlYW0nKSxcbiAgICAgICAgICAgICAgICBvdGhlcnNDYXJkID0gdGFyZ2V0LmNsb3Nlc3QoJy5zdGFnZV9fY2FyZCcpLFxuICAgICAgICAgICAgICAgIGFsbFBvcHVwc1RlYW0gPSB0YXJnZXQuY2xvc2VzdChcIi5wbGF5b2ZmX19wb3B1cFwiKT8ucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZS10ZWFtJyksXG4gICAgICAgICAgICAgICAgY2xpY2tlZFRlYW1OYW1lID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlYW1dJyk/LmdldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJyksXG4gICAgICAgICAgICAgICAgYWN0aXZlU3RhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zdGFnZV0uX2FjdGl2ZWApLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ1dpbiA9IGFjdGl2ZVN0YWdlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJpZy1zdGFnZT1cImJpZ1dpblwiXWApLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ1dpblRlYW0gPSBhY3RpdmVCaWdXaW4ucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fY2FyZC10ZXh0XCIpLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ0xvc2UgPSBhY3RpdmVTdGFnZS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1iaWctc3RhZ2U9XCJiaWdMb3NlXCJdYCksXG4gICAgICAgICAgICAgICAgYWN0aXZlQmlnTG9zZVRlYW0gPSBhY3RpdmVCaWdMb3NlLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX2NhcmQtdGV4dFwiKSxcbiAgICAgICAgICAgICAgICBhY3RpdmVPdGhlcnMgPSBhY3RpdmVTdGFnZS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jYXJkcy13cmFwPVwic3RhZ2VcIl1gKS5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhZ2VfX2NhcmQnKSxcbiAgICAgICAgICAgICAgICBiaWdXaW5Qb3B1cHNUZWFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCJiaWdXaW5cIl1gKS5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fY2hvb3NlLXRlYW0tdGV4dCcpLFxuICAgICAgICAgICAgICAgIGJpZ0xvc2VQb3B1cHNUZWFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCJiaWdMb3NlXCJdYCkucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZS10ZWFtLXRleHQnKSxcbiAgICAgICAgICAgICAgICBvdGhlcnNQb3B1cHNUZWFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCJPdGhlcnNcIl1gKS5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fY2hvb3NlLXRlYW0tdGV4dCcpLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1DaG9vc2VCdG4gPSB0YXJnZXQuY2xvc2VzdCgnLnBsYXlvZmZfX3BvcHVwLWJ0bicpLFxuICAgICAgICAgICAgICAgIG90aGVyc0NvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3B1cD1cIk90aGVyc1wiXWApLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19wb3B1cC1idG4nKSxcbiAgICAgICAgICAgICAgICBiaWdXaW5Db25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCJiaWdXaW5cIl1gKS5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fcG9wdXAtYnRuJyksXG4gICAgICAgICAgICAgICAgYmlnTG9zZUNvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3B1cD1cImJpZ0xvc2VcIl1gKS5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fcG9wdXAtYnRuJyk7XG5cblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZU90aGVycylcblxuICAgICAgICAgICAgICAgIC8vINCy0ZbQtNC60YDQuNGC0YLRjyDQv9C+0L/QsNC/0YMg0L3QsCAzIDBcbiAgICAgICAgICAgICAgICBpZihjYXJkQmlnV2luKXtcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImJpZ1dpblRlbXBvcmFyeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoYmlnV2luKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpZ1dpbkNvbmZpcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdXaW5UZW1wb3JhcnlcIiwgYmlnV2luKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnV2luVGVtcG9yYXJ5XCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpZ1dpbkNvbmZpcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpZ1dpbkNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnX2xvY2snKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYmlnV2luUG9wdXBzVGVhbS5mb3JFYWNoKCh0ZWFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTmFtZSA9IGFjdGl2ZVN0YWdlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJpZy1zdGFnZT1cImJpZ0xvc2VcIl1gKS5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19jYXJkLXRleHRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtV3JhcCA9IHRlYW0uY2xvc2VzdChcIi5wbGF5b2ZmX19jaG9vc2UtdGVhbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZFRlYW0gPSB0ZWFtTmFtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpID09PSB0ZWFtLmdldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkQmlnV2luID0gSlNPTi5wYXJzZShiaWdXaW4pPy5kYXRhQXR0ciA9PT0gdGVhbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlYW1cIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYmlnV2luKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGVhbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlYW1cIikpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlzU2VsZWN0ZWRCaWdXaW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZihiaWdXaW4pe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NlbGVjdGVkQmlnV2luKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NlbGVjdGVkVGVhbSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cChcImJpZ1dpblwiLCBwb3B1cHNXcmFwKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vINCy0ZbQtNC60YDQuNGC0YLRjyDQv9C+0L/QsNC/0YMg0L3QsCAwIDNcbiAgICAgICAgICAgICAgICBpZihjYXJkQmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJiaWdMb3NlVGVtcG9yYXJ5XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZihiaWdMb3NlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VDb25maXJtQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmlnTG9zZVRlbXBvcmFyeVwiLCBiaWdMb3NlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnTG9zZVRlbXBvcmFyeVwiKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBiaWdMb3NlQ29uZmlybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZUNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnX2xvY2snKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VQb3B1cHNUZWFtLmZvckVhY2goKHRlYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1OYW1lID0gYWN0aXZlU3RhZ2UucXVlcnlTZWxlY3RvcihgW2RhdGEtYmlnLXN0YWdlPVwiYmlnV2luXCJdYCkucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fY2FyZC10ZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbVdyYXAgPSB0ZWFtLmNsb3Nlc3QoXCIucGxheW9mZl9fY2hvb3NlLXRlYW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWRUZWFtID0gdGVhbU5hbWUuZ2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nKSA9PT0gdGVhbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZEJpZ0xvc2UgPSBKU09OLnBhcnNlKGJpZ0xvc2UpPy5kYXRhQXR0ciA9PT0gdGVhbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlYW1cIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNTZWxlY3RlZEJpZ0xvc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU2VsZWN0ZWRUZWFtKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cChcImJpZ0xvc2VcIiwgcG9wdXBzV3JhcClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDQstGW0LTQutGA0LjRgtGC0Y8g0L/QvtC/0LDQv9GDINC90LAg0ZbQvdGI0ZYg0LrQvtC80LDQvdC00LhcbiAgICAgICAgICAgICAgICBpZihjbGlja2VkQ2FyZCAmJiAhY2FyZEJpZ1dpbiAmJiAhY2FyZEJpZ0xvc2Upe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRlYW1zID0gdGVhbXNXaW4/LmZpbHRlcihpdGVtID0+IGl0ZW0gJiYgaXRlbS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0ZWFtc1dpblRlbXBvcmFyeVwiKVxuICAgICAgICAgICAgICAgICAgICBpZihzZWxlY3RlZFRlYW1zICYmIHNlbGVjdGVkVGVhbXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidGVhbXNXaW5UZW1wb3JhcnlcIiwgSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRUZWFtcykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG90aGVyc1BvcHVwc1RlYW0uZm9yRWFjaCgodGVhbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbURhdGFBdHRyID0gdGVhbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbVdyYXAgPSB0ZWFtLmNsb3Nlc3QoXCIucGxheW9mZl9fY2hvb3NlLXRlYW1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1OYW1lV2luID0gYWN0aXZlU3RhZ2UucXVlcnlTZWxlY3RvcignW2RhdGEtYmlnLXN0YWdlPVwiYmlnV2luXCJdIC5zdGFnZV9fY2FyZC10ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTmFtZUxvc2UgPSBhY3RpdmVTdGFnZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1iaWctc3RhZ2U9XCJiaWdMb3NlXCJdIC5zdGFnZV9fY2FyZC10ZXh0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWRUZWFtID0gc2VsZWN0ZWRUZWFtcz8uc29tZShpdGVtID0+IGl0ZW0uZGF0YUF0dHIgPT09IHRlYW1EYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkVGVhbVdpbiA9IHRlYW1OYW1lV2luPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpID09PSB0ZWFtRGF0YUF0dHI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkVGVhbUxvc2UgPSB0ZWFtTmFtZUxvc2U/LmdldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJykgPT09IHRlYW1EYXRhQXR0cjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2VsZWN0ZWRUZWFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkVGVhbXM/Lmxlbmd0aCA+IDAgJiYgIWlzU2VsZWN0ZWRUZWFtKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNTZWxlY3RlZFRlYW1XaW4gfHwgaXNTZWxlY3RlZFRlYW1Mb3NlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYoYWN0aXZlT3RoZXJzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyc0FycmF5ID0gQXJyYXkuZnJvbShhY3RpdmVPdGhlcnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDYXJkID0gb3RoZXJzQXJyYXkuaW5kZXhPZihvdGhlcnNDYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4Q2FyZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBvdGhlcnNDb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cChcIk90aGVyc1wiLCBwb3B1cHNXcmFwKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vINC30LDQutGA0LjRgtGC0Y8g0L/QvtC/0LDQv9GDINC90LAg0ZbQvdGI0ZYg0LrQvtC80LDQvdC00LhcbiAgICAgICAgICAgICAgICBpZihwb3B1cHNDbG9zZUJ0biB8fCAhY2xpY2tlZENhcmQgJiYgIXBvcHVwICkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAocG9wdXBzV3JhcCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAvLyDQstC40LHRltGAINC/0YDQtdC00ZbQutGC0YMg0L3QsCAzIDBcbiAgICAgICAgICAgICAgICBpZihiaWdXaW5Qb3B1cCAmJiBwb3B1cHNUZWFtKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoY2xpY2tlZFRlYW1OYW1lICYmIHBvcHVwc1RlYW0pe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNTZWxlY3RlZEJpZ1dpbiA9IEpTT04ucGFyc2UoYmlnV2luKSA/PyBmYWxzZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NlbGVjdGVkQmlnV2luKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmlnV2luVGVtcG9yYXJ5XCIsIGJpZ1dpbilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGVhbSA9IHRlYW1zLmZpbmQodGVhbSA9PiB0ZWFtLmRhdGFBdHRyID09PSBjbGlja2VkVGVhbU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmlnV2luVGVtcG9yYXJ5XCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUZWFtKSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsUG9wdXBzVGVhbS5mb3JFYWNoKCh0ZWFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uY2xhc3NMaXN0LmFkZCgnX29wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0uY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ1dpblRlbXBvcmFyeVwiKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luQ29uZmlybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW5Db25maXJtQnRuLmNsYXNzTGlzdC5hZGQoJ19sb2NrJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAvLyDQstC40LHRltGAINC/0YDQtdC00ZbQutGC0YMg0L3QsCAwIDNcbiAgICAgICAgICAgICAgICBpZihiaWdMb3NlUG9wdXAgJiYgcG9wdXBzVGVhbSl7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoY2xpY2tlZFRlYW1OYW1lKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzU2VsZWN0ZWRCaWdMb3NlID0gSlNPTi5wYXJzZShiaWdMb3NlKSA/PyBmYWxzZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NlbGVjdGVkQmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ0xvc2VUZW1wb3JhcnlcIiwgYmlnTG9zZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGVhbSA9IHRlYW1zLmZpbmQodGVhbSA9PiB0ZWFtLmRhdGFBdHRyID09PSBjbGlja2VkVGVhbU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmlnTG9zZVRlbXBvcmFyeVwiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGVhbSkpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBvcHVwc1RlYW0uZm9yRWFjaCgodGVhbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmNsYXNzTGlzdC5hZGQoJ19vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0/LmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1cHNUZWFtPy5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnTG9zZVRlbXBvcmFyeVwiKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZUNvbmZpcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKVxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZUNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnX2xvY2snKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g0LLQuNCx0ZbRgCDQv9GA0LXQtNGW0LrRgtGDINC90LAg0LLRgdGWINGW0L3RiNGWINC60L7QvNCw0L3QtNC4XG4gICAgICAgICAgICAgICAgaWYgKE90aGVyc1BvcHVwICYmIHBvcHVwc1RlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcG9wdXBzVGVhbS5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcG9wdXBzVGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2xpY2tlZFRlYW1OYW1lKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGVhbSA9IHRlYW1zLmZpbmQodGVhbSA9PiB0ZWFtLmRhdGFBdHRyID09PSBjbGlja2VkVGVhbU5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgaXNJbnNpZGUgPSBpbmRleENhcmQgIT09IC0xO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleENhcmQpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUZWFtID17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFRlYW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbUNhcmROdW06IGluZGV4Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UHJlZGljdCA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRlYW1zV2luVGVtcG9yYXJ5XCIpKSB8fCBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFscmVhZHlBZGRlZCA9IG5ld1ByZWRpY3Quc29tZShpdGVtID0+IGl0ZW0uZGF0YUF0dHIgPT09IGN1cnJlbnRUZWFtLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1ByZWRpY3RGdWxsID0gbmV3UHJlZGljdC5sZW5ndGggPj0gNztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYWxyZWFkeUFkZGVkICYmICFpc1ByZWRpY3RGdWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ByZWRpY3QucHVzaChjdXJyZW50VGVhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ0ZWFtc1dpblRlbXBvcmFyeVwiLCBKU09OLnN0cmluZ2lmeShuZXdQcmVkaWN0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIEFkZGVkOlwiLCBjdXJyZW50VGVhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0uY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcmVkaWN0ID0gbmV3UHJlZGljdC5maWx0ZXIodGVhbSA9PiB0ZWFtLmRhdGFBdHRyICE9PSBjdXJyZW50VGVhbS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ0ZWFtc1dpblRlbXBvcmFyeVwiLCBKU09OLnN0cmluZ2lmeShuZXdQcmVkaWN0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pqg77iPIFRlYW0gcmVtb3ZlZFwiLCBjdXJyZW50VGVhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0uY2xhc3NMaXN0LmFkZCgnX29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkTGVuZ3RoID0gbmV3UHJlZGljdC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlZExlbmd0aCA8IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzQ29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxQb3B1cHNUZWFtLmZvckVhY2godGVhbSA9PiB0ZWFtLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodXBkYXRlZExlbmd0aCA9PT0gNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcnNDb25maXJtQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBvcHVwc1RlYW0uZm9yRWFjaCh0ZWFtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZWFtLmNsYXNzTGlzdC5jb250YWlucygnX29wZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKdjCBUZWFtIG5vdCBmb3VuZCBmb3I6XCIsIGNsaWNrZWRUZWFtTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAvLyDQv9GW0LTRgtCy0LXRgNC00LbQtdC90L3RjyDQstC40LHQvtGA0YMg0LIg0L/QvtC/0LDQv9GWXG4gICAgICAgICAgICAgICAgaWYoY29uZmlybUNob29zZUJ0bil7XG5cbiAgICAgICAgICAgICAgICAgICAgdGVhbXNXaW4gPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0ZWFtc1dpblRlbXBvcmFyeVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRlYW1zV2luKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidGVhbXNXaW5cIiwgSlNPTi5zdHJpbmdpZnkodGVhbXNXaW4pKTtcblxuICAgICAgICAgICAgICAgICAgICBiaWdMb3NlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ0xvc2VUZW1wb3JhcnlcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmKGJpZ0xvc2UpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdMb3NlXCIsIGJpZ0xvc2UpXG5cbiAgICAgICAgICAgICAgICAgICAgYmlnV2luID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ1dpblRlbXBvcmFyeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoYmlnV2luKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmlnV2luXCIsIGJpZ1dpbilcblxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpZ1dpblByZWRpY3QgPSBKU09OLnBhcnNlKGJpZ1dpbilcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmlnTG9zZVByZWRpY3QgPSBKU09OLnBhcnNlKGJpZ0xvc2UpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG90aGVyVGVhbXNQcmVkaWN0ID0gdGVhbXNXaW47XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoYmlnTG9zZVByZWRpY3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnTG9zZS5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdMb3NlLmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdMb3NlVGVhbS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShiaWdMb3NlUHJlZGljdC5kYXRhQXR0cilcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ0xvc2VUZWFtLnNldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJywgYmlnTG9zZVByZWRpY3QuZGF0YUF0dHIpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZihiaWdXaW5QcmVkaWN0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ1dpbi5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdXaW4uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ1dpblRlYW0udGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkoYmlnV2luUHJlZGljdC5kYXRhQXR0cilcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ1dpblRlYW0uc2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nLCBiaWdXaW5QcmVkaWN0LmRhdGFBdHRyKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYob3RoZXJUZWFtc1ByZWRpY3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJUZWFtc1ByZWRpY3QuZm9yRWFjaCgodGVhbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDYXJkVGVhbU5hbWUgPSBhY3RpdmVPdGhlcnNbaV0ucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fY2FyZC10ZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRDYXJkVGVhbU5hbWUsIHRlYW0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVPdGhlcnNbaV0uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVPdGhlcnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudENhcmRUZWFtTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScsIHRlYW0uZGF0YUF0dHIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudENhcmRUZWFtTmFtZS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleSh0ZWFtLmRhdGFBdHRyKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKHBvcHVwc1dyYXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMTAwMClcblxuICAgICAgICAgICAgbGV0IGluaXRpYWxPZmZzZXRMZWZ0ID0gbnVsbDtcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlUGxheW9mZlBvc2l0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMzAwICYmIHdpbmRvdy5pbm5lcldpZHRoID4gNTUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmU3RhZ2Uuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxPZmZzZXRMZWZ0ID0gcGxheW9mZlN0YWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50TGVmdCA9IGluaXRpYWxPZmZzZXRMZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlmdCA9IGN1cnJlbnRMZWZ0IC0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmU3RhZ2Uuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7c2hpZnR9cHgpYDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlvZmZTdGFnZS5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE9mZnNldExlZnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTApXG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmKGN1cnJlbnRTdGFnZSA8IDMpe1xuICAgICAgICAgICAgICAgIHBsYXlvZmZQcmVkaWN0b3IuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHVwZGF0ZVBsYXlvZmZQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIHVwZGF0ZVBsYXlvZmZQb3NpdGlvbik7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVQbGF5b2ZmUG9zaXRpb24pO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5b2ZmUGhhc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX3N0YWdlJyk7XG4gICAgICAgICAgICBjb25zdCBwbGF5b2ZmQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlvZmYnKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXlvZmZOZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX2J0bi1yaWdodCcpO1xuICAgICAgICAgICAgY29uc3QgcGxheW9mZlByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fYnRuLWxlZnQnKTtcblxuICAgICAgICAgICAgbGV0IHBoYXNlQ291bnQgPSAzO1xuICAgICAgICAgICAgbGV0IGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPD0gNTUwO1xuXG4gICAgICAgICAgICBjb25zdCBzZXRDdXJyZW50UGhhc2UgPSAocGhhc2VzLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcGhhc2VzLmZvckVhY2goKHBoYXNlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBoYXNlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIsIGkgIT09IGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qgc2hvd0FsbFBoYXNlcyA9IChwaGFzZXMpID0+IHtcbiAgICAgICAgICAgICAgICBwaGFzZXMuZm9yRWFjaChwaGFzZSA9PiBwaGFzZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBoaWRlQWxsRXhjZXB0Q3VycmVudCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGhhc2UocGxheW9mZlBoYXNlcywgcGhhc2VDb3VudCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBoYXNlQ291bnQgPSAocGhhc2VDb3VudCArIDEpICUgcGxheW9mZlBoYXNlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaGlkZUFsbEV4Y2VwdEN1cnJlbnQoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGhhc2VDb3VudCA9IChwaGFzZUNvdW50IC0gMSArIHBsYXlvZmZQaGFzZXMubGVuZ3RoKSAlIHBsYXlvZmZQaGFzZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGhpZGVBbGxFeGNlcHRDdXJyZW50KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgdG91Y2hTdGFydFggPSAwO1xuICAgICAgICAgICAgbGV0IHRvdWNoRW5kWCA9IDA7XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVN3aXBlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0b3VjaEVuZFggLSB0b3VjaFN0YXJ0WDtcblxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUHJldigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgaGlkZUFsbEV4Y2VwdEN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICBwbGF5b2ZmTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5leHQpO1xuICAgICAgICAgICAgICAgIHBsYXlvZmZQcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJldik7XG5cbiAgICAgICAgICAgICAgICBwbGF5b2ZmQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaFN0YXJ0WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHBsYXlvZmZDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaEVuZFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN3aXBlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93TW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPD0gNTUwO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5vd01vYmlsZSAmJiAhaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNb2JpbGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBoaWRlQWxsRXhjZXB0Q3VycmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5leHQpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByZXYpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghbm93TW9iaWxlICYmIGlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTW9iaWxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGxQaGFzZXMocGxheW9mZlBoYXNlcyk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlvZmZOZXh0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTmV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlvZmZQcmV2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJldik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsaWNrLXBpY2tcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKS50aGVuKGluaXQpXG5cbiAgICAvL3Rlc3RcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWxuZ1wiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcInVrXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWF1dGhcIilcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCI3Nzc3Nzc3OVwiKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJyk7XG4gICAgY29uc3QgcG9wdXBXaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luLXBvcHVwJyk7XG4gICAgY29uc3QgcG9wdXBMb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvc2UtcG9wdXAnKTtcbiAgICBjb25zdCBwb3B1cE90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm90aGVycy1wb3B1cCcpO1xuXG4gICAgY29uc29sZS5sb2cocG9wdXBXaW4ucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmX19wb3B1cC1jbG9zZVwiKSlcblxuICAgIC8vIGZ1bmN0aW9uIHNldEhpZGVQb3B1cChwb3B1cCl7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fcG9wdXAtY2xvc2VcIikpO1xuICAgIC8vICAgICBjb25zdCBjbG9zZUJ0biA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19wb3B1cC1jbG9zZScpO1xuICAgIC8vXG4gICAgLy8gICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgLy8gICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktb3BhY2l0eScpO1xuICAgIC8vICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gc2V0SGlkZVBvcHVwKHBvcHVwV2luKTtcbiAgICAvLyBzZXRIaWRlUG9wdXAocG9wdXBMb3NlKTtcbiAgICAvLyBzZXRIaWRlUG9wdXAocG9wdXBPdGhlcik7XG5cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcG9wdXAtd2luJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LW9wYWNpdHknKTtcbiAgICAgICAgcG9wdXBXaW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBwb3B1cExvc2UuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBwb3B1cE90aGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wb3B1cC1sb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LW9wYWNpdHknKTtcbiAgICAgICAgcG9wdXBXaW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBwb3B1cExvc2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBwb3B1cE90aGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wb3B1cC1vdGhlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1vcGFjaXR5Jyk7XG4gICAgICAgIHBvcHVwV2luLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBMb3NlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBPdGhlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdGltZXInKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YWdlMSA9ICcxJ1xuICAgICAgICBjb25zdCBzdGFnZTIgPSAnNCdcblxuICAgICAgICBjb25zdCBzYXZlZERhdGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudERhdGVcIik7XG5cbiAgICAgICAgY29uc3QgbmV3RGF0ZSA9IHNhdmVkRGF0ZSA9PT0gc3RhZ2UyID8gc3RhZ2UxIDogc3RhZ2UyO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudERhdGVcIiwgbmV3RGF0ZSk7XG5cbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cblxufSkoKTtcbiJdfQ==
