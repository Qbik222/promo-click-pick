"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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

  // let currentStage = 4

  console.log(currentStage);
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join'),
    loader = document.querySelector(".spinner-overlay"),
    stages = document.querySelectorAll("[data-stage]"),
    stageActive = document.querySelector("[data-stage=\"".concat(currentStage + 1, "\"]")),
    stagesTabs = document.querySelectorAll("[data-stage-tab]"),
    playoffStage = document.querySelector(".playoff"),
    results = document.querySelector(".results"),
    predictor = document.querySelector(".predictor"),
    playoffPredictor = predictor.querySelector(".playoff"),
    teamTextPopups = document.querySelectorAll('.playoff__choose-team-text'),
    popupsWrap = document.querySelector(".popups"),
    makePredictBtn = document.querySelector('.make-predict'),
    predictorCheckIn = document.querySelector('.predictor__checkin');
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
  var bigLose = sessionStorage.getItem("bigLose");
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
  function sendPredict() {
    if (currentStage <= 2) {
      var otherTeams = JSON.parse(sessionStorage.getItem("teamsWin"));
      var _bigWin = JSON.parse(sessionStorage.getItem("bigWin"));
      var _bigLose = JSON.parse(sessionStorage.getItem("bigLose"));

      // console.log(otherTeams, bigWin, bigLose);

      var predictBody = {
        userid: userId,
        bet: {
          teamsBet: _toConsumableArray(otherTeams),
          bigWinner: _objectSpread({}, _bigWin),
          bigLoser: _objectSpread({}, _bigLose)
        }
      };
      request("/bet/stage/".concat(currentStage + 1), {
        method: 'POST',
        body: JSON.stringify(predictBody)
      }).then(function (res) {
        if (res.success) {
          setCurrentPredict();
        }
      });
      console.log(predictBody);
    }
  }
  function setCurrentPredict() {
    getUserPredict().then(function (predict) {
      var stageBet = predict === null || predict === void 0 ? void 0 : predict["stage".concat(currentStage + 1, "Bet")];
      if (!stageBet) {
        console.warn("No bets for stage ".concat(currentStage + 1));
        predictorCheckIn.classList.add('hide');
        return;
      }
      var stageOthers = stageActive.querySelector(".stage__wrap"),
        stageOtherCards = stageOthers.querySelectorAll(".stage__card"),
        stageWinCard = stageActive.querySelector("[data-big-stage=\"bigWin\"]"),
        stageWinCardTeam = stageWinCard.querySelector(".stage__card-text"),
        stageLoseCard = stageActive.querySelector("[data-big-stage=\"bigLose\"]"),
        stageLoseCardTeam = stageLoseCard.querySelector(".stage__card-text"),
        predictOtherTeams = stageBet.teamsBet,
        predictWinner = stageBet.bigWinner,
        predictLoser = stageBet.bigLoser;
      predictorCheckIn.classList.remove('hide');
      sessionStorage.setItem("teamsWin", JSON.stringify(predictOtherTeams));
      sessionStorage.setItem("bigWin", JSON.stringify(predictWinner));
      sessionStorage.setItem("bigLose", JSON.stringify(predictLoser));
      teamsWin = JSON.parse(sessionStorage.getItem("teamsWin"));
      bigWin = sessionStorage.getItem("bigWin");
      bigLose = sessionStorage.getItem("bigLose");
      stageWinCard.classList.add("_selected");
      stageWinCard.classList.remove("_open");
      stageLoseCard.classList.add("_selected");
      stageLoseCard.classList.remove("_open");
      stageWinCardTeam.textContent = translateKey(predictWinner.dataAttr);
      stageLoseCardTeam.textContent = translateKey(predictLoser.dataAttr);
      stageOtherCards.forEach(function (card, i) {
        var cardTeamName = card.querySelector(".stage__card-text");
        var team = teamsWin[i];
        // if (!team) return; // якщо раптом менше команд у ставці
        var dataAttr = team.dataAttr;
        console.log(dataAttr);
        cardTeamName.setAttribute("data-team", dataAttr);
        cardTeamName.textContent = translateKey(dataAttr);
        card.classList.remove("_open");
        card.classList.add("_selected");
        // console.log(team)
        // console.log(card)
      });

      console.log("Loaded user prediction:", stageBet);
    })["catch"](function (err) {
      console.error("Failed to load user prediction", err);
    });
    checkUserAuth();
  }
  function getUserPredict() {
    return _getUserPredict.apply(this, arguments);
  }
  function _getUserPredict() {
    _getUserPredict = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return request('/stage');
          case 2:
            res = _context.sent;
            console.log(res.find(function (item) {
              return item.userid === userId;
            }));
            return _context.abrupt("return", res.find(function (item) {
              return item.userid === userId;
            }));
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _getUserPredict.apply(this, arguments);
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
    console.log(teamsWin);
    if (teamsWin.length === 6 && bigLose && bigWin) {
      console.log("predict");
      makePredictBtn.classList.remove("_lock");
    }
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
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              request('/stage').then(function (res) {
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
                renderTeamBlocks('bigWin', teams);
                renderTeamBlocks('bigLose', teams);
                renderTeamBlocks('Others', teams);
                setCurrentPredict();
                document.addEventListener("click", function (e) {
                  var target = e.target,
                    activeStage = document.querySelector("[data-stage]._active");

                  // логіка для перших 3х етапів
                  if (currentStage <= 2) {
                    var _target$closest, _target$querySelector;
                    var clickedCard = target.closest('.stage__card'),
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
                      activeBigWin = activeStage === null || activeStage === void 0 ? void 0 : activeStage.querySelector("[data-big-stage=\"bigWin\"]"),
                      activeBigWinTeam = activeBigWin === null || activeBigWin === void 0 ? void 0 : activeBigWin.querySelector(".stage__card-text"),
                      activeBigLose = activeStage === null || activeStage === void 0 ? void 0 : activeStage.querySelector("[data-big-stage=\"bigLose\"]"),
                      activeBigLoseTeam = activeBigLose === null || activeBigLose === void 0 ? void 0 : activeBigLose.querySelector(".stage__card-text"),
                      bigWinPopupsTeam = document.querySelector("[data-popup=\"bigWin\"]").querySelectorAll('.playoff__choose-team-text'),
                      bigLosePopupsTeam = document.querySelector("[data-popup=\"bigLose\"]").querySelectorAll('.playoff__choose-team-text'),
                      othersPopupsTeam = document.querySelector("[data-popup=\"Others\"]").querySelectorAll('.playoff__choose-team-text'),
                      confirmChooseBtn = target.closest('.playoff__popup-btn'),
                      othersConfirmBtn = document.querySelector("[data-popup=\"Others\"]").querySelector('.playoff__popup-btn'),
                      bigWinConfirmBtn = document.querySelector("[data-popup=\"bigWin\"]").querySelector('.playoff__popup-btn'),
                      bigLoseConfirmBtn = document.querySelector("[data-popup=\"bigLose\"]").querySelector('.playoff__popup-btn'),
                      activeOthers = activeStage.querySelector("[data-cards-wrap=\"stage\"]").querySelectorAll('.stage__card');

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

                    // відкриття попапу на інші команди
                    if (clickedCard && !cardBigWin && !cardBigLose) {
                      var _teamsWin;
                      var temoporaryTeams = sessionStorage.getItem("teamsWinTemporary");
                      var selectedTeams = (_teamsWin = teamsWin) === null || _teamsWin === void 0 ? void 0 : _teamsWin.filter(function (item) {
                        return item && item.dataAttr;
                      });
                      console.log(selectedTeams);
                      sessionStorage.removeItem("teamsWinTemporary");
                      if (selectedTeams && selectedTeams.length > 0) {
                        sessionStorage.setItem("teamsWinTemporary", JSON.stringify(selectedTeams));
                      }
                      if (temoporaryTeams) {
                        othersConfirmBtn.classList.remove('_lock');
                      } else {
                        othersConfirmBtn.classList.add('_lock');
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
                      openPopup("Others", popupsWrap);
                    }

                    // закриття попапу на інші команди
                    if (popupsCloseBtn || !clickedCard && !popup) {
                      closePopup(popupsWrap);
                    }

                    // вибір предікту на всі інші команди
                    if (OthersPopup && popupsTeam) {
                      // popupsTeam.classList.add('_selected');
                      // popupsTeam.classList.remove('_open');
                      if (clickedTeamName) {
                        var _currentTeam2 = teams.find(function (team) {
                          return team.dataAttr === clickedTeamName;
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
                          // console.log(currentCardTeamName, team)

                          activeOthers[i].classList.add('_selected');
                          activeOthers[i].classList.remove('_open');
                          currentCardTeamName.setAttribute('data-team', team.dataAttr);
                          currentCardTeamName.textContent = translateKey(team.dataAttr);
                        });
                      }
                      if (teamsWin && bigWin && bigLose) {
                        makePredictBtn.classList.remove('_lock');
                      } else {
                        makePredictBtn.classList.add('_lock');
                      }
                      closePopup(popupsWrap);
                    }
                  } else {
                    var playoffStages = activeStage.querySelector('[data-playoff-stage]'),
                      quarterFinals = activeStage.querySelector('[data-playoff-stage="1"]'),
                      semiFinals = activeStage.querySelector('[data-playoff-stage="2"]'),
                      finals = activeStage.querySelector('[data-playoff-stage="3"]'),
                      winner = activeStage.querySelector('[data-playoff-stage="4"]');
                  }
                  if (teamsWin && bigWin && bigLose) {
                    makePredictBtn.classList.remove('_lock');
                  } else {
                    makePredictBtn.classList.add('_lock');
                  }
                  if (target.closest("[data-stage=\"4\"]")) console.log(target);
                });
              });

              // checkUserAuth();

              console.log(teamsWin, bigWin, bigLose);
              makePredictBtn.addEventListener('click', function () {
                sendPredict();
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
            _context2.next = 8;
            return waitForUserId;
          case 8:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwic3RhZ2VzRGF0YSIsImRhdGEiLCJEYXRlIiwiY3VycmVudERhdGUiLCJjdXJyZW50U3RhZ2UiLCJOdW1iZXIiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInN0YWdlcyIsInN0YWdlQWN0aXZlIiwic3RhZ2VzVGFicyIsInBsYXlvZmZTdGFnZSIsInJlc3VsdHMiLCJwcmVkaWN0b3IiLCJwbGF5b2ZmUHJlZGljdG9yIiwidGVhbVRleHRQb3B1cHMiLCJwb3B1cHNXcmFwIiwibWFrZVByZWRpY3RCdG4iLCJwcmVkaWN0b3JDaGVja0luIiwidWtMZW5nIiwiZW5MZW5nIiwidG9nZ2xlQ2xhc3NlcyIsImVsZW1lbnRzIiwiY2xhc3NOYW1lIiwiZm9yRWFjaCIsImVsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlVHJhbnNsYXRlcyIsImRhdGFBdHRyIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaTE4bkRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0ZWFtcyIsInRlYW0iLCJiaWdMb3NlIiwiYmlnV2luIiwidGVhbXNXaW4iLCJKU09OIiwicGFyc2UiLCJzdGFnZXNSZXN1bHQiLCJkZWZhdXRWYWx1ZSIsInRlYW1zQmV0Iiwib3V0Y29tZSIsImxvYWRlckJ0biIsImxvY2FsZSIsImRlYnVnIiwib3RoZXJzQXJyYXkiLCJpbmRleENhcmQiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZXJyIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwicmVuZGVyVGVhbUJsb2NrcyIsInBvcHVwQXR0ciIsInBvcHVwIiwiY29udGFpbmVyIiwidGVhbUJsb2NrIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwidHJhbnNsYXRlIiwic2VuZFByZWRpY3QiLCJvdGhlclRlYW1zIiwicHJlZGljdEJvZHkiLCJ1c2VyaWQiLCJiZXQiLCJiaWdXaW5uZXIiLCJiaWdMb3NlciIsIm1ldGhvZCIsImJvZHkiLCJzdHJpbmdpZnkiLCJzdWNjZXNzIiwic2V0Q3VycmVudFByZWRpY3QiLCJnZXRVc2VyUHJlZGljdCIsInByZWRpY3QiLCJzdGFnZUJldCIsIndhcm4iLCJhZGQiLCJzdGFnZU90aGVycyIsInN0YWdlT3RoZXJDYXJkcyIsInN0YWdlV2luQ2FyZCIsInN0YWdlV2luQ2FyZFRlYW0iLCJzdGFnZUxvc2VDYXJkIiwic3RhZ2VMb3NlQ2FyZFRlYW0iLCJwcmVkaWN0T3RoZXJUZWFtcyIsInByZWRpY3RXaW5uZXIiLCJwcmVkaWN0TG9zZXIiLCJyZW1vdmUiLCJzZXRJdGVtIiwidGV4dENvbnRlbnQiLCJ0cmFuc2xhdGVLZXkiLCJjYXJkIiwiaSIsImNhcmRUZWFtTmFtZSIsImNoZWNrVXNlckF1dGgiLCJmaW5kIiwiaXRlbSIsImhpZGVMb2FkZXIiLCJzdHlsZSIsIm92ZXJmbG93IiwibG9hZFRpbWUiLCJzZXRUaW1lb3V0Iiwic2hvd0VsZW1lbnRzIiwiaGlkZUVsZW1lbnRzIiwicmVzb2x2ZSIsInJlcG9ydEVycm9yIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsImdldEF0dHJpYnV0ZSIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsImVsZW1lbnQiLCJsYW5nIiwicmVuZGVyVXNlcnMiLCJ3ZWVrIiwidXNlcnMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJjdXJyZW50VXNlciIsInVzZXIiLCJpc1RvcEN1cnJlbnRVc2VyIiwic2xpY2UiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93IiwidXNlckRhdGEiLCJvcHRpb25zIiwiaGlnaGxpZ2h0IiwibmVpZ2hib3IiLCJ1c2VyUm93IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsIm1hc2tVc2VySWQiLCJwb2ludHMiLCJhcHBlbmQiLCJpbmRleCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJ0b1N0cmluZyIsInNldFN0YXRlUGlja1N0YWdlIiwic3RhZ2UiLCJzdGFnZUNhcmRzV3JhcCIsInN0YWdlQ2FyZHMiLCJzdGFnZUNhcmRXaW4iLCJzdGFnZUNhcmRMb3NlIiwic3RhZ2VDYXJkV2luTmFtZSIsInN0YWdlQ2FyZExvc2VOYW1lIiwic3RhZ2VOdW0iLCJzdGFnZVN0YXRlIiwic3RhZ2VSZXN1bHREYXRhIiwib3RoZXJzVGVhbXMiLCJiaWdXaW5UZWFtIiwiYmlnTG9zZVRlYW0iLCJ0ZWFtTmFtZSIsIm9wZW5Qb3B1cCIsImN1cnJlbnRQb3B1cCIsImNsb3NlUG9wdXAiLCJwb3B1cHMiLCJhbGxQb3B1cHNUZWFtVGFicyIsInBsYWNlIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJ1c2VyU3RhZ2VzIiwidG9wIiwiYm90dG9tIiwidGltZXIiLCJwbGF5b2ZmV3JhcCIsInRhYiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiY2xvc2VzdCIsInRhcmdldFN0YWdlVmFsdWUiLCJ0YXJnZXRTdGFnZSIsInQiLCJhY3RpdmVTdGFnZSIsImNsaWNrZWRDYXJkIiwiY2FyZEJpZ1dpbiIsImNhcmRCaWdMb3NlIiwicG9wdXBzQ2xvc2VCdG4iLCJiaWdXaW5Qb3B1cCIsImJpZ0xvc2VQb3B1cCIsIk90aGVyc1BvcHVwIiwicG9wdXBzVGVhbSIsIm90aGVyc0NhcmQiLCJhbGxQb3B1cHNUZWFtIiwiY2xpY2tlZFRlYW1OYW1lIiwiYWN0aXZlQmlnV2luIiwiYWN0aXZlQmlnV2luVGVhbSIsImFjdGl2ZUJpZ0xvc2UiLCJhY3RpdmVCaWdMb3NlVGVhbSIsImJpZ1dpblBvcHVwc1RlYW0iLCJiaWdMb3NlUG9wdXBzVGVhbSIsIm90aGVyc1BvcHVwc1RlYW0iLCJjb25maXJtQ2hvb3NlQnRuIiwib3RoZXJzQ29uZmlybUJ0biIsImJpZ1dpbkNvbmZpcm1CdG4iLCJiaWdMb3NlQ29uZmlybUJ0biIsImFjdGl2ZU90aGVycyIsInJlbW92ZUl0ZW0iLCJ0ZWFtV3JhcCIsImlzU2VsZWN0ZWRUZWFtIiwiaXNTZWxlY3RlZEJpZ1dpbiIsImlzU2VsZWN0ZWRCaWdMb3NlIiwiY3VycmVudFRlYW0iLCJ0ZW1vcG9yYXJ5VGVhbXMiLCJzZWxlY3RlZFRlYW1zIiwiZmlsdGVyIiwidGVhbURhdGFBdHRyIiwidGVhbU5hbWVXaW4iLCJ0ZWFtTmFtZUxvc2UiLCJpc1NlbGVjdGVkVGVhbVdpbiIsImlzU2VsZWN0ZWRUZWFtTG9zZSIsIkFycmF5IiwiZnJvbSIsIm5ld1ByZWRpY3QiLCJhbHJlYWR5QWRkZWQiLCJpc1ByZWRpY3RGdWxsIiwicHVzaCIsInVwZGF0ZWRMZW5ndGgiLCJjb250YWlucyIsImJpZ1dpblByZWRpY3QiLCJiaWdMb3NlUHJlZGljdCIsIm90aGVyVGVhbXNQcmVkaWN0IiwiY3VycmVudENhcmRUZWFtTmFtZSIsInBsYXlvZmZTdGFnZXMiLCJxdWFydGVyRmluYWxzIiwic2VtaUZpbmFscyIsImZpbmFscyIsIndpbm5lciIsImluaXRpYWxPZmZzZXRMZWZ0IiwidXBkYXRlUGxheW9mZlBvc2l0aW9uIiwiaW5uZXJXaWR0aCIsInRyYW5zZm9ybSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJjdXJyZW50TGVmdCIsInNoaWZ0IiwicGxheW9mZlBoYXNlcyIsInBsYXlvZmZDb250YWluZXIiLCJwbGF5b2ZmTmV4dCIsInBsYXlvZmZQcmV2IiwicGhhc2VDb3VudCIsImlzTW9iaWxlIiwic2V0Q3VycmVudFBoYXNlIiwicGhhc2VzIiwiY3VycmVudCIsInBoYXNlIiwic2hvd0FsbFBoYXNlcyIsImhpZGVBbGxFeGNlcHRDdXJyZW50IiwiaGFuZGxlTmV4dCIsImhhbmRsZVByZXYiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoRW5kWCIsImhhbmRsZVN3aXBlIiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJjaGFuZ2VkVG91Y2hlcyIsInNjcmVlblgiLCJub3dNb2JpbGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0YXJnZXROb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImxuZ0J0biIsInJlbG9hZCIsImF1dGhCdG4iLCJvdmVybGF5IiwicG9wdXBXaW4iLCJwb3B1cExvc2UiLCJwb3B1cE90aGVyIiwic3RhZ2UxIiwic3RhZ2UyIiwic2F2ZWREYXRlIiwibmV3RGF0ZSJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFBQTtFQUVULElBQU1BLE1BQU0s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U0FBUyxDQUFDMEUsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQ2tPLFVBQVUsQ0FBQzVTLFNBQVMsQ0FBQ2dFLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFDcEMsQ0FBQyxDQUFDO0VBRUZ6RixRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDd00sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDdEV5SCxPQUFPLENBQUN6UyxTQUFTLENBQUMwRSxNQUFNLENBQUMsaUJBQWlCLENBQUM7SUFDM0NnTyxRQUFRLENBQUMxUyxTQUFTLENBQUNnRSxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzlCMk8sU0FBUyxDQUFDM1MsU0FBUyxDQUFDZ0UsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMvQjRPLFVBQVUsQ0FBQzVTLFNBQVMsQ0FBQzBFLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDdkMsQ0FBQyxDQUFDO0VBRUYsMEJBQUFuRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUMsMkRBQXBDLHVCQUFzQ3dNLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ2xFLElBQU02SCxNQUFNLEdBQUcsR0FBRztJQUNsQixJQUFNQyxNQUFNLEdBQUcsR0FBRztJQUVsQixJQUFNQyxTQUFTLEdBQUc3VSxjQUFjLENBQUNDLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFFdkQsSUFBTTZVLE9BQU8sR0FBR0QsU0FBUyxLQUFLRCxNQUFNLEdBQUdELE1BQU0sR0FBR0MsTUFBTTtJQUN0RDVVLGNBQWMsQ0FBQ3lHLE9BQU8sQ0FBQyxhQUFhLEVBQUVxTyxPQUFPLENBQUM7SUFFOUNoTixRQUFRLENBQUN1TSxNQUFNLEVBQUU7RUFDckIsQ0FBQyxDQUFDO0FBR04sQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9jbGlja19waWNrJ1xuXG4gICAgY29uc3Qgc3RhZ2VzRGF0YSA9IFtcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMjBUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMjVUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMzBUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDYtMDVUMDA6MDA6MDArMDM6MDBcIikgfVxuICAgIF07XG5cbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0wNC0wNVQwMDowMDowMCswMzowMFwiKTtcblxuICAgIC8vIGxldCBjdXJyZW50U3RhZ2UgPSBzdGFnZXNEYXRhLmZpbHRlcihzdGFnZSA9PiBzdGFnZS5kYXRhIDw9IGN1cnJlbnREYXRlKS5sZW5ndGggPz8gMztcblxuICAgIGxldCBjdXJyZW50U3RhZ2UgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnREYXRlXCIpKVxuXG4gICAgLy8gbGV0IGN1cnJlbnRTdGFnZSA9IDRcblxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdGFnZSk7XG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICBzdGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc3RhZ2VdXCIpLFxuICAgICAgICBzdGFnZUFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXN0YWdlPVwiJHtjdXJyZW50U3RhZ2UgKyAxfVwiXWApLFxuICAgICAgICBzdGFnZXNUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXN0YWdlLXRhYl1cIiksXG4gICAgICAgIHBsYXlvZmZTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZlwiKSxcbiAgICAgICAgcmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0c1wiKSxcbiAgICAgICAgcHJlZGljdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0b3JcIiksXG4gICAgICAgIHBsYXlvZmZQcmVkaWN0b3IgPSBwcmVkaWN0b3IucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmXCIpLFxuICAgICAgICB0ZWFtVGV4dFBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbS10ZXh0JyksXG4gICAgICAgIHBvcHVwc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwc1wiKSxcbiAgICAgICAgbWFrZVByZWRpY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFrZS1wcmVkaWN0JyksXG4gICAgICAgIHByZWRpY3RvckNoZWNrSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdG9yX19jaGVja2luJyk7XG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRlYW1zID0gW1xuICAgICAgICB7IHRlYW06IFwiQ29tcGxleGl0eVwiLCBkYXRhQXR0cjogXCJjb21wbGV4aXR5XCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkZhbGNvbnNcIiwgZGF0YUF0dHI6IFwiZmFsY29uc1wiIH0sXG4gICAgICAgIHsgdGVhbTogXCJWaXRhbGl0eVwiLCBkYXRhQXR0cjogXCJ2aXRhbGl0eVwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJIZXJvaWNcIiwgZGF0YUF0dHI6IFwiaGVyb2ljXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkZhemVcIiwgZGF0YUF0dHI6IFwiZmF6ZVwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJTcGlyaXRcIiwgZGF0YUF0dHI6IFwic3Bpcml0XCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkI4XCIsIGRhdGFBdHRyOiBcIkI4XCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIjNETUFYXCIsIGRhdGFBdHRyOiBcIjNETUFYXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk1PVVpcIiwgZGF0YUF0dHI6IFwiTU9VWlwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJXaWxkY2FyZFwiLCBkYXRhQXR0cjogXCJ3aWxkY2FyZFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJWaXJ0dXMucHJvXCIsIGRhdGFBdHRyOiBcInZpcnR1c1Byb1wiIH0sXG4gICAgICAgIHsgdGVhbTogXCJUaGUgTW9uZ29selwiLCBkYXRhQXR0cjogXCJ0aGVNb25nb2x6XCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkZseVF1ZXN0XCIsIGRhdGFBdHRyOiBcImZseVF1ZXN0XCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkZ1cmlhXCIsIGRhdGFBdHRyOiBcImZ1cmlhXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkF1cm9yYVwiLCBkYXRhQXR0cjogXCJhdXJvcmFcIiB9LFxuICAgICAgICB7IHRlYW06IFwiTHlubiBWaXNpb25cIiwgZGF0YUF0dHI6IFwibHlublZpc2lvblwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJNSUJSXCIsIGRhdGFBdHRyOiBcIk1JQlJcIiB9LFxuICAgICAgICB7IHRlYW06IFwiTmF0dXMgVmluY2VyZVwiLCBkYXRhQXR0cjogXCJuYXR1c1ZpbmNlcmVcIiB9LFxuICAgICAgICB7IHRlYW06IFwiTlJHXCIsIGRhdGFBdHRyOiBcIk5SR1wiIH0sXG4gICAgICAgIHsgdGVhbTogXCJQYWlOXCIsIGRhdGFBdHRyOiBcIlBhaU5cIiB9LFxuICAgICAgICB7IHRlYW06IFwiRzJcIiwgZGF0YUF0dHI6IFwiRzJcIiB9LFxuICAgICAgICB7IHRlYW06IFwiQ2hpbmdnaXMgV2FycmlvcnNcIiwgZGF0YUF0dHI6IFwiY2hpbmdnaXNXYXJyaW9yc1wiIH0sXG4gICAgICAgIHsgdGVhbTogXCJNODBcIiwgZGF0YUF0dHI6IFwiTTgwXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkxpcXVpZFwiLCBkYXRhQXR0cjogXCJsaXF1aWRcIiB9LFxuICAgICAgICB7IHRlYW06IFwiTmVtaWdhXCIsIGRhdGFBdHRyOiBcIm5lbWlnYVwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJJbXBlcmlhbFwiLCBkYXRhQXR0cjogXCJpbXBlcmlhbFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJGbHV4b1wiLCBkYXRhQXR0cjogXCJmbHV4b1wiIH0sXG4gICAgICAgIHsgdGVhbTogXCJNZXRpenBvcnRcIiwgZGF0YUF0dHI6IFwibWV0aXpwb3J0XCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk9HXCIsIGRhdGFBdHRyOiBcIk9HXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkJlc3RpYVwiLCBkYXRhQXR0cjogXCJiZXN0aWFcIiB9LFxuICAgICAgICB7IHRlYW06IFwiVHlsb29cIiwgZGF0YUF0dHI6IFwidHlsb29cIiB9XG4gICAgXTtcblxuICAgIGxldCBiaWdMb3NlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ0xvc2VcIilcbiAgICBsZXQgYmlnV2luID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ1dpblwiKVxuXG4gICAgbGV0IHRlYW1zV2luID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidGVhbXNXaW5cIikpID8/IFtdXG5cbiAgICBjb25zdCBzdGFnZXNSZXN1bHQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRlZmF1dFZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgdGVhbXNCZXQ6W1xuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJDb21wbGV4aXR5XCIsIGRhdGFBdHRyOiBcImNvbXBsZXhpdHlcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJGYWxjb25zXCIsIGRhdGFBdHRyOiBcImZhbGNvbnNcIiwgb3V0Y29tZTogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIlZpdGFsaXR5XCIsIGRhdGFBdHRyOiBcInZpdGFsaXR5XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiSGVyb2ljXCIsIGRhdGFBdHRyOiBcImhlcm9pY1wiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkZhemVcIiwgZGF0YUF0dHI6IFwiZmF6ZVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIlNwaXJpdFwiLCBkYXRhQXR0cjogXCJzcGlyaXRcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJCOFwiLCBkYXRhQXR0cjogXCJCOFwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYmlnV2luOiB7IHRlYW06IFwiUGFpTlwiLCBkYXRhQXR0cjogXCJQYWlOXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgIGJpZ0xvc2U6IHsgdGVhbTogXCJOUkdcIiwgZGF0YUF0dHI6IFwiTlJHXCIsIG91dGNvbWU6IHRydWUgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkZWZhdXRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlYW1zQmV0OltcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiQ29tcGxleGl0eVwiLCBkYXRhQXR0cjogXCJjb21wbGV4aXR5XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiRmFsY29uc1wiLCBkYXRhQXR0cjogXCJmYWxjb25zXCIsIG91dGNvbWU6IHRydWV9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJWaXRhbGl0eVwiLCBkYXRhQXR0cjogXCJ2aXRhbGl0eVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkhlcm9pY1wiLCBkYXRhQXR0cjogXCJoZXJvaWNcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJGYXplXCIsIGRhdGFBdHRyOiBcImZhemVcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJTcGlyaXRcIiwgZGF0YUF0dHI6IFwic3Bpcml0XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiQjhcIiwgZGF0YUF0dHI6IFwiQjhcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJpZ1dpbjogeyB0ZWFtOiBcIkZhbGNvbnNcIiwgZGF0YUF0dHI6IFwiZmFsY29uc1wiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICBiaWdMb3NlOiB7IHRlYW06IFwiTlJHXCIsIGRhdGFBdHRyOiBcIk5SR1wiLCBvdXRjb21lOiB0cnVlIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGVmYXV0VmFsdWU6IHRydWUsXG4gICAgICAgICAgICB0ZWFtc0JldDpbXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkNvbXBsZXhpdHlcIiwgZGF0YUF0dHI6IFwiY29tcGxleGl0eVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkZhbGNvbnNcIiwgZGF0YUF0dHI6IFwiZmFsY29uc1wiLCBvdXRjb21lOiB0cnVlfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiVml0YWxpdHlcIiwgZGF0YUF0dHI6IFwidml0YWxpdHlcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJIZXJvaWNcIiwgZGF0YUF0dHI6IFwiaGVyb2ljXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiRmF6ZVwiLCBkYXRhQXR0cjogXCJmYXplXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiU3Bpcml0XCIsIGRhdGFBdHRyOiBcInNwaXJpdFwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkI4XCIsIGRhdGFBdHRyOiBcIkI4XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBiaWdXaW46IHsgdGVhbTogXCJQYWlOXCIsIGRhdGFBdHRyOiBcIlBhaU5cIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgYmlnTG9zZTogeyB0ZWFtOiBcIk5SR1wiLCBkYXRhQXR0cjogXCJOUkdcIiwgb3V0Y29tZTogdHJ1ZSB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRlZmF1dFZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgdGVhbXNCZXQ6W1xuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJDb21wbGV4aXR5XCIsIGRhdGFBdHRyOiBcImNvbXBsZXhpdHlcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJGYWxjb25zXCIsIGRhdGFBdHRyOiBcImZhbGNvbnNcIiwgb3V0Y29tZTogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIlZpdGFsaXR5XCIsIGRhdGFBdHRyOiBcInZpdGFsaXR5XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiSGVyb2ljXCIsIGRhdGFBdHRyOiBcImhlcm9pY1wiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkZhemVcIiwgZGF0YUF0dHI6IFwiZmF6ZVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIlNwaXJpdFwiLCBkYXRhQXR0cjogXCJzcGlyaXRcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJCOFwiLCBkYXRhQXR0cjogXCJCOFwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYmlnV2luOiB7IHRlYW06IFwiUGFpTlwiLCBkYXRhQXR0cjogXCJQYWlOXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgIGJpZ0xvc2U6IHsgdGVhbTogXCJOUkdcIiwgZGF0YUF0dHI6IFwiTlJHXCIsIG91dGNvbWU6IHRydWUgfVxuICAgICAgICB9XG5cbiAgICBdXG5cbiAgICBsZXQgbG9hZGVyQnRuID0gZmFsc2VcblxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpID8/IFwiZW5cIlxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gdHJ1ZVxuXG4gICAgbGV0IG90aGVyc0FycmF5ID0gW11cbiAgICBsZXQgaW5kZXhDYXJkID0gZmFsc2VcblxuICAgIC8vIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSkgPz8gNzc3Nzc3Nzk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgLy8gaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVGVhbUJsb2Nrcyhwb3B1cEF0dHIsIHRlYW1zKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICAgICAgY29uc29sZS5sb2cocG9wdXApXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19wb3B1cC1zY3JvbGwnKTtcblxuICAgICAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICB0ZWFtcy5mb3JFYWNoKCh7IGRhdGFBdHRyIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlYW1CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGVhbUJsb2NrLmNsYXNzTmFtZSA9ICdwbGF5b2ZmX19jaG9vc2UtdGVhbSBfb3Blbic7IC8vINC80L7QttC10Ygg0LTQuNC90LDQvNGW0YfQvdC+INC30LzRltC90Y7QstCw0YLQuCDQvdCwIF9zZWxlY3RlZFxuXG4gICAgICAgICAgICB0ZWFtQmxvY2suaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXlvZmZfX2Nob29zZS10ZWFtLWljb25cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5b2ZmX19jaG9vc2UtdGVhbS10ZXh0XCIgZGF0YS10cmFuc2xhdGU9XCIke2RhdGFBdHRyfVwiIGRhdGEtdGVhbT1cIiR7ZGF0YUF0dHJ9XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5b2ZmX19jaG9vc2UtdGVhbS1idG5cIj48L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRlYW1CbG9jayk7XG4gICAgICAgIH0pO1xuICAgICAgICB0cmFuc2xhdGUoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbmRQcmVkaWN0KCl7XG4gICAgICAgIGlmKGN1cnJlbnRTdGFnZSA8PSAyKXtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyVGVhbXMgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0ZWFtc1dpblwiKSk7XG4gICAgICAgICAgICBjb25zdCBiaWdXaW4gPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdXaW5cIikpO1xuICAgICAgICAgICAgY29uc3QgYmlnTG9zZSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ0xvc2VcIikpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvdGhlclRlYW1zLCBiaWdXaW4sIGJpZ0xvc2UpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHByZWRpY3RCb2R5ID0ge1xuICAgICAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgICAgIGJldDoge1xuICAgICAgICAgICAgICAgICAgICB0ZWFtc0JldDogWy4uLm90aGVyVGVhbXNdLFxuICAgICAgICAgICAgICAgICAgICBiaWdXaW5uZXI6IHsuLi5iaWdXaW59LFxuICAgICAgICAgICAgICAgICAgICBiaWdMb3Nlcjogey4uLmJpZ0xvc2V9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxdWVzdChgL2JldC9zdGFnZS8ke2N1cnJlbnRTdGFnZSArIDF9YCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHByZWRpY3RCb2R5KSxcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFByZWRpY3QoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcmVkaWN0Qm9keSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Q3VycmVudFByZWRpY3QoKSB7XG4gICAgICAgIGdldFVzZXJQcmVkaWN0KCkudGhlbihwcmVkaWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YWdlQmV0ID0gcHJlZGljdD8uW2BzdGFnZSR7Y3VycmVudFN0YWdlICsgMX1CZXRgXTtcblxuICAgICAgICAgICAgaWYgKCFzdGFnZUJldCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTm8gYmV0cyBmb3Igc3RhZ2UgJHtjdXJyZW50U3RhZ2UgKyAxfWApO1xuICAgICAgICAgICAgICAgIHByZWRpY3RvckNoZWNrSW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc3RhZ2VPdGhlcnMgPSBzdGFnZUFjdGl2ZS5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX193cmFwXCIpLFxuICAgICAgICAgICAgICAgIHN0YWdlT3RoZXJDYXJkcyA9IHN0YWdlT3RoZXJzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3RhZ2VfX2NhcmRcIiksXG4gICAgICAgICAgICAgICAgc3RhZ2VXaW5DYXJkID0gc3RhZ2VBY3RpdmUucXVlcnlTZWxlY3RvcihgW2RhdGEtYmlnLXN0YWdlPVwiYmlnV2luXCJdYCksXG4gICAgICAgICAgICAgICAgc3RhZ2VXaW5DYXJkVGVhbSA9IHN0YWdlV2luQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19jYXJkLXRleHRcIiksXG4gICAgICAgICAgICAgICAgc3RhZ2VMb3NlQ2FyZCA9IHN0YWdlQWN0aXZlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJpZy1zdGFnZT1cImJpZ0xvc2VcIl1gKSxcbiAgICAgICAgICAgICAgICBzdGFnZUxvc2VDYXJkVGVhbSA9IHN0YWdlTG9zZUNhcmQucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fY2FyZC10ZXh0XCIpLFxuICAgICAgICAgICAgICAgIHByZWRpY3RPdGhlclRlYW1zID0gc3RhZ2VCZXQudGVhbXNCZXQsXG4gICAgICAgICAgICAgICAgcHJlZGljdFdpbm5lciA9IHN0YWdlQmV0LmJpZ1dpbm5lcixcbiAgICAgICAgICAgICAgICBwcmVkaWN0TG9zZXIgPSBzdGFnZUJldC5iaWdMb3NlcjtcblxuICAgICAgICAgICAgcHJlZGljdG9yQ2hlY2tJbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ0ZWFtc1dpblwiLCBKU09OLnN0cmluZ2lmeShwcmVkaWN0T3RoZXJUZWFtcykpO1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ1dpblwiLCBKU09OLnN0cmluZ2lmeShwcmVkaWN0V2lubmVyKSk7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmlnTG9zZVwiLCBKU09OLnN0cmluZ2lmeShwcmVkaWN0TG9zZXIpKTtcbiAgICAgICAgICAgIHRlYW1zV2luID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidGVhbXNXaW5cIikpO1xuICAgICAgICAgICAgYmlnV2luID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ1dpblwiKTtcbiAgICAgICAgICAgIGJpZ0xvc2UgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnTG9zZVwiKTtcblxuXG4gICAgICAgICAgICBzdGFnZVdpbkNhcmQuY2xhc3NMaXN0LmFkZChcIl9zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHN0YWdlV2luQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX29wZW5cIik7XG4gICAgICAgICAgICBzdGFnZUxvc2VDYXJkLmNsYXNzTGlzdC5hZGQoXCJfc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBzdGFnZUxvc2VDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfb3BlblwiKTtcblxuICAgICAgICAgICAgc3RhZ2VXaW5DYXJkVGVhbS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShwcmVkaWN0V2lubmVyLmRhdGFBdHRyKTtcbiAgICAgICAgICAgIHN0YWdlTG9zZUNhcmRUZWFtLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KHByZWRpY3RMb3Nlci5kYXRhQXR0cik7XG5cbiAgICAgICAgICAgIHN0YWdlT3RoZXJDYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZFRlYW1OYW1lID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19jYXJkLXRleHRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVhbSA9IHRlYW1zV2luW2ldO1xuICAgICAgICAgICAgICAgIC8vIGlmICghdGVhbSkgcmV0dXJuOyAvLyDRj9C60YnQviDRgNCw0L/RgtC+0Lwg0LzQtdC90YjQtSDQutC+0LzQsNC90LQg0YMg0YHRgtCw0LLRhtGWXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YUF0dHIgPSB0ZWFtLmRhdGFBdHRyO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YUF0dHIpO1xuXG5cblxuICAgICAgICAgICAgICAgIGNhcmRUZWFtTmFtZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRlYW1cIiwgZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgIGNhcmRUZWFtTmFtZS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShkYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX29wZW5cIik7XG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiX3NlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRlYW0pXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2FyZClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRlZCB1c2VyIHByZWRpY3Rpb246XCIsIHN0YWdlQmV0KTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCB1c2VyIHByZWRpY3Rpb25cIiwgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgIH1cblxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclByZWRpY3QoKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QoJy9zdGFnZScpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZmluZChpdGVtID0+IGl0ZW0udXNlcmlkID09PSB1c2VySWQpKTtcbiAgICAgICAgcmV0dXJuIHJlcy5maW5kKGl0ZW0gPT4gaXRlbS51c2VyaWQgPT09IHVzZXJJZCk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBjb25zdCBsb2FkVGltZSA9IDIwMDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgY29uc3QgaGlkZUVsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG5cbiAgICAgICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyh1bmF1dGhNc2dzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICB9LCBsb2FkVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWspIHtcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzLyR7d2Vla31gKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgdXNlcklkLCB3ZWVrKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2Vlaykge1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzTGVuZ3RoID0gIXVzZXJJZCB8fCBpc1RvcEN1cnJlbnRVc2VyICA/IDEzIDogMTA7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlckRhdGEucG9pbnRzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U3RhdGVQaWNrU3RhZ2Uoc3RhZ2Upe1xuICAgICAgICBjb25zdCBzdGFnZUNhcmRzV3JhcCA9IHN0YWdlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNhcmRzLXdyYXA9XCJzdGFnZVwiXScpXG4gICAgICAgIGlmKCFzdGFnZUNhcmRzV3JhcCkgcmV0dXJuXG4gICAgICAgIGNvbnN0IHN0YWdlQ2FyZHMgPSBzdGFnZUNhcmRzV3JhcC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhZ2VfX2NhcmQnKTtcbiAgICAgICAgY29uc3Qgc3RhZ2VDYXJkV2luID0gc3RhZ2UucXVlcnlTZWxlY3RvcignW2RhdGEtYmlnLXN0YWdlPVwiYmlnV2luXCJdJyk7XG4gICAgICAgIGNvbnN0IHN0YWdlQ2FyZExvc2UgPSBzdGFnZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1iaWctc3RhZ2U9XCJiaWdMb3NlXCJdJyk7XG4gICAgICAgIGNvbnN0IHN0YWdlQ2FyZFdpbk5hbWUgPSBzdGFnZUNhcmRXaW4ucXVlcnlTZWxlY3RvcignLnN0YWdlX19jYXJkLXRleHQnKTtcbiAgICAgICAgY29uc3Qgc3RhZ2VDYXJkTG9zZU5hbWUgPSBzdGFnZUNhcmRMb3NlLnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZV9fY2FyZC10ZXh0Jyk7XG5cbiAgICAgICAgY29uc3Qgc3RhZ2VOdW0gPSBOdW1iZXIoc3RhZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YWdlJykpO1xuICAgICAgICBsZXQgc3RhZ2VTdGF0ZSA9IHN0YWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1waWNrLXN0YWdlJyk7XG4gICAgICAgIGNvbnN0IHN0YWdlUmVzdWx0RGF0YSA9IHN0YWdlc1Jlc3VsdFtzdGFnZU51bSAtMV1cblxuICAgICAgICBsZXQgb3RoZXJzVGVhbXMgPSBzdGFnZVJlc3VsdERhdGEudGVhbXNCZXRcbiAgICAgICAgbGV0IGJpZ1dpblRlYW0gPSBzdGFnZVJlc3VsdERhdGEuYmlnV2luXG4gICAgICAgIGxldCBiaWdMb3NlVGVhbSA9IHN0YWdlUmVzdWx0RGF0YS5iaWdMb3NlXG5cbiAgICAgICAgc3RhZ2VDYXJkV2luLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJywgJ19zZWxlY3RlZCcsICdfbG9zZScsICdfd2luJyk7XG4gICAgICAgIHN0YWdlQ2FyZExvc2UuY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nLCAnX3NlbGVjdGVkJywgJ19sb3NlJywgJ193aW4nKTtcblxuICAgICAgICBpZihzdGFnZVN0YXRlID09PSBcImRvbmVcIil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGFnZUNhcmRzKVxuICAgICAgICAgICAgc3RhZ2VDYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVhbU5hbWUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZV9fY2FyZC10ZXh0Jyk7XG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicsICdfc2VsZWN0ZWQnLCAnX2xvc2UnLCAnX3dpbicsIFwiX2RvbmVcIik7XG4gICAgICAgICAgICAgICAgaWYoc3RhZ2VSZXN1bHREYXRhLmRlZmF1dFZhbHVlKSBjYXJkLmNsYXNzTGlzdC5hZGQoJ19kb25lJyk7XG5cbiAgICAgICAgICAgICAgICB0ZWFtTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScsIG90aGVyc1RlYW1zW2ldLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICB0ZWFtTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgb3RoZXJzVGVhbXNbaV0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdGFnZUNhcmRXaW5OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJywgYmlnV2luVGVhbS5kYXRhQXR0cik7XG4gICAgICAgICAgICBzdGFnZUNhcmRXaW5OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBiaWdXaW5UZWFtLmRhdGFBdHRyKTtcbiAgICAgICAgICAgIHN0YWdlQ2FyZExvc2VOYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJywgYmlnTG9zZVRlYW0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgc3RhZ2VDYXJkTG9zZU5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGJpZ0xvc2VUZWFtLmRhdGFBdHRyKTtcblxuXG4gICAgICAgICAgICBpZihzdGFnZVJlc3VsdERhdGEuZGVmYXV0VmFsdWUpe1xuICAgICAgICAgICAgICAgIHN0YWdlQ2FyZFdpbi5jbGFzc0xpc3QuYWRkKCdfZG9uZScpO1xuICAgICAgICAgICAgICAgIHN0YWdlQ2FyZExvc2UuY2xhc3NMaXN0LmFkZCgnX2RvbmUnKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKGJpZ1dpblRlYW0ub3V0Y29tZSl7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlQ2FyZFdpbi5jbGFzc0xpc3QuYWRkKCdfd2luJyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlQ2FyZFdpbi5jbGFzc0xpc3QuYWRkKCdfbG9zZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihiaWdMb3NlVGVhbS5vdXRjb21lKXtcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VDYXJkV2luLmNsYXNzTGlzdC5hZGQoJ193aW4nKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VDYXJkV2luLmNsYXNzTGlzdC5hZGQoJ19sb3NlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICB9XG4gICAgICAgIGlmKHN0YWdlU3RhdGUgPT09IFwiYWN0aXZlXCIpe1xuICAgICAgICAgICAgc3RhZ2VDYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVhbU5hbWUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZV9fY2FyZC10ZXh0Jyk7XG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicsICdfc2VsZWN0ZWQnLCAnX2xvc2UnLCAnX3dpbicsIFwiX2RvbmVcIik7XG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdfb3BlbicpO1xuXG4gICAgICAgICAgICAgICAgdGVhbU5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIFwicG9wdXBMb3NlVGl0bGVcIiApO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc3RhZ2VDYXJkV2luLmNsYXNzTGlzdC5hZGQoXCJfb3BlblwiKVxuICAgICAgICAgICAgc3RhZ2VDYXJkTG9zZS5jbGFzc0xpc3QuYWRkKFwiX29wZW5cIilcblxuICAgICAgICAgICAgc3RhZ2VDYXJkV2luTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgXCJwb3B1cExvc2VUaXRsZVwiKTtcbiAgICAgICAgICAgIHN0YWdlQ2FyZExvc2VOYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBcInBvcHVwTG9zZVRpdGxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRyYW5zbGF0ZSgpXG5cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW5Qb3B1cChkYXRhQXR0ciwgY29udGFpbmVyKXtcbiAgICAgICAgY29uc3QgY3VycmVudFBvcHVwID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwPVwiJHtkYXRhQXR0cn1cIl1gKTtcblxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1vcGFjaXR5Jyk7XG5cbiAgICAgICAgY3VycmVudFBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZVBvcHVwKGNvbnRhaW5lcil7XG4gICAgICAgIGNvbnN0IHBvcHVwcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fcG9wdXAnKTtcbiAgICAgICAgY29uc3QgYWxsUG9wdXBzVGVhbVRhYnMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5b2ZmX19jaG9vc2UtdGVhbVwiKTtcblxuICAgICAgICBhbGxQb3B1cHNUZWFtVGFicy5mb3JFYWNoKCh0ZWFtKSA9PiB7XG4gICAgICAgICAgICB0ZWFtLmNsYXNzTGlzdC5yZW1vdmUoJ19zZWxlY3RlZCcpO1xuICAgICAgICAgICAgdGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICAgICAgdGVhbS5jbGFzc0xpc3QuYWRkKCdfb3BlbicpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHBvcHVwcy5mb3JFYWNoKHBvcHVwID0+IHtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktb3BhY2l0eScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG5cbiAgICAgICAgY29uc29sZS5sb2codGVhbXNXaW4pXG5cbiAgICAgICAgaWYodGVhbXNXaW4ubGVuZ3RoID09PSA2ICYmIGJpZ0xvc2UgJiYgYmlnV2luKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJlZGljdFwiKVxuICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LnJlbW92ZShcIl9sb2NrXCIpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UsIHdlZWspIHtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDMpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0ke3BsYWNlfWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTQtMTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMS0yNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTI2LTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tNTEtNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNzYtMTAwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEwMS0xMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTI2LTE1MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNTEtMTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDIwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE3Ni0yMDBgO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIHJlcXVlc3QoJy9zdGFnZScpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJTdGFnZXMgPSByZXMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpXG5cbiAgICAgICAgICAgICAgICBpZih1c2VyU3RhZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlc1Jlc3VsdC5mb3JFYWNoKChzdGFnZSwgaSkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1c2VyU3RhZ2VzW2BzdGFnZSR7aSArIDF9QmV0YF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlc1Jlc3VsdFtpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbXNCZXQ6IFsuLi51c2VyU3RhZ2VzW2BzdGFnZSR7aSArIDF9QmV0YF0udGVhbXNCZXRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW46IHVzZXJTdGFnZXNbYHN0YWdlJHtpICsgMX1CZXRgXS5iaWdXaW5uZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2U6IHVzZXJTdGFnZXNbYHN0YWdlJHtpICsgMX1CZXRgXS5iaWdMb3NlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBzdGFnZXMuZm9yRWFjaCgoc3RhZ2UsIGkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RhZ2UgPiBzdGFnZXMubGVuZ3RoIC0gMSA/IGN1cnJlbnRTdGFnZSA9IHN0YWdlcy5sZW5ndGggLSAxIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFN0YWdlKTtcblxuICAgICAgICAgICAgICAgICAgICBzdGFnZS5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJywgaSA9PT0gY3VycmVudFN0YWdlKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VzVGFic1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJywgaSA9PT0gY3VycmVudFN0YWdlKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3AgPSBzdGFnZS5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX190b3BcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvdHRvbSA9IHN0YWdlLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX2JvdHRvbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzdGFnZS5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5b2ZmV3JhcCA9IHN0YWdlLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fd3JhcHBlclwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IGN1cnJlbnRTdGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wPy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbT8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmV3JhcD8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lcj8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFnZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBpY2stc3RhZ2VcIiwgXCJsb2NrXCIpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlvZmZXcmFwPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyPy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgPT09IGN1cnJlbnRTdGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1waWNrLXN0YWdlXCIsIFwiYWN0aXZlXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoaSA8IGN1cnJlbnRTdGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1waWNrLXN0YWdlXCIsIFwiZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2UuY2xhc3NMaXN0LmFkZChcIl9kb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0U3RhdGVQaWNrU3RhZ2Uoc3RhZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YWdlc1RhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5fYWN0aXZlJykpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RhZ2VWYWx1ZSA9IHRhYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhZ2UtdGFiJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXN0YWdlPVwiJHt0YXJnZXRTdGFnZVZhbHVlfVwiXWApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFnZXMuZm9yRWFjaChzdGFnZSA9PiBzdGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2VzVGFicy5mb3JFYWNoKHQgPT4gdC5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U3RhZ2U/LmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZW5kZXJUZWFtQmxvY2tzKCdiaWdXaW4nLCB0ZWFtcyk7XG4gICAgICAgICAgICAgICAgcmVuZGVyVGVhbUJsb2NrcygnYmlnTG9zZScsIHRlYW1zKTtcbiAgICAgICAgICAgICAgICByZW5kZXJUZWFtQmxvY2tzKCdPdGhlcnMnLCB0ZWFtcyk7XG5cbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJlZGljdCgpXG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXN0YWdlXS5fYWN0aXZlYCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0LvQvtCz0ZbQutCwINC00LvRjyDQv9C10YDRiNC40YUgM9GFINC10YLQsNC/0ZbQslxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YWdlIDw9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRDYXJkID0gdGFyZ2V0LmNsb3Nlc3QoJy5zdGFnZV9fY2FyZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRCaWdXaW4gPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtYmlnLXN0YWdlPVwiYmlnV2luXCJdJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEJpZ0xvc2UgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtYmlnLXN0YWdlPVwiYmlnTG9zZVwiXScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc0Nsb3NlQnRuID0gdGFyZ2V0LmNsb3Nlc3QoJy5wbGF5b2ZmX19wb3B1cC1jbG9zZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwID0gdGFyZ2V0LmNsb3Nlc3QoJy5wbGF5b2ZmX19wb3B1cCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ1dpblBvcHVwID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXBvcHVwPVwiYmlnV2luXCJdJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZVBvcHVwID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXBvcHVwPVwiYmlnTG9zZVwiXScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE90aGVyc1BvcHVwID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXBvcHVwPVwiT3RoZXJzXCJdJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbSA9IHRhcmdldC5jbG9zZXN0KCcucGxheW9mZl9fY2hvb3NlLXRlYW0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcnNDYXJkID0gdGFyZ2V0LmNsb3Nlc3QoJy5zdGFnZV9fY2FyZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBvcHVwc1RlYW0gPSB0YXJnZXQuY2xvc2VzdChcIi5wbGF5b2ZmX19wb3B1cFwiKT8ucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZS10ZWFtJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZFRlYW1OYW1lID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlYW1dJyk/LmdldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnV2luID0gYWN0aXZlU3RhZ2U/LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJpZy1zdGFnZT1cImJpZ1dpblwiXWApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ1dpblRlYW0gPSBhY3RpdmVCaWdXaW4/LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX2NhcmQtdGV4dFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdMb3NlID0gYWN0aXZlU3RhZ2U/LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJpZy1zdGFnZT1cImJpZ0xvc2VcIl1gKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdMb3NlVGVhbSA9IGFjdGl2ZUJpZ0xvc2U/LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX2NhcmQtdGV4dFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW5Qb3B1cHNUZWFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCJiaWdXaW5cIl1gKS5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fY2hvb3NlLXRlYW0tdGV4dCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VQb3B1cHNUZWFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCJiaWdMb3NlXCJdYCkucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZS10ZWFtLXRleHQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcnNQb3B1cHNUZWFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCJPdGhlcnNcIl1gKS5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fY2hvb3NlLXRlYW0tdGV4dCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1DaG9vc2VCdG4gPSB0YXJnZXQuY2xvc2VzdCgnLnBsYXlvZmZfX3BvcHVwLWJ0bicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyc0NvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3B1cD1cIk90aGVyc1wiXWApLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19wb3B1cC1idG4nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW5Db25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCJiaWdXaW5cIl1gKS5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fcG9wdXAtYnRuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZUNvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3B1cD1cImJpZ0xvc2VcIl1gKS5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fcG9wdXAtYnRuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlT3RoZXJzID0gYWN0aXZlU3RhZ2UucXVlcnlTZWxlY3RvcihgW2RhdGEtY2FyZHMtd3JhcD1cInN0YWdlXCJdYCkucXVlcnlTZWxlY3RvckFsbCgnLnN0YWdlX19jYXJkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCy0ZbQtNC60YDQuNGC0YLRjyDQv9C+0L/QsNC/0YMg0L3QsCAzIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhcmRCaWdXaW4pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJiaWdXaW5UZW1wb3JhcnlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmlnV2luKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luQ29uZmlybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmlnV2luVGVtcG9yYXJ5XCIsIGJpZ1dpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdXaW5UZW1wb3JhcnlcIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW5Db25maXJtQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luQ29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luUG9wdXBzVGVhbS5mb3JFYWNoKCh0ZWFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1OYW1lID0gYWN0aXZlU3RhZ2UucXVlcnlTZWxlY3RvcihgW2RhdGEtYmlnLXN0YWdlPVwiYmlnTG9zZVwiXWApLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX2NhcmQtdGV4dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbVdyYXAgPSB0ZWFtLmNsb3Nlc3QoXCIucGxheW9mZl9fY2hvb3NlLXRlYW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZFRlYW0gPSB0ZWFtTmFtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpID09PSB0ZWFtLmdldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWRCaWdXaW4gPSBKU09OLnBhcnNlKGJpZ1dpbik/LmRhdGFBdHRyID09PSB0ZWFtLmdldEF0dHJpYnV0ZShcImRhdGEtdGVhbVwiKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU2VsZWN0ZWRCaWdXaW4pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NlbGVjdGVkVGVhbSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwKFwiYmlnV2luXCIsIHBvcHVwc1dyYXApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCy0ZbQtNC60YDQuNGC0YLRjyDQv9C+0L/QsNC/0YMg0L3QsCAwIDNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhcmRCaWdMb3NlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYmlnTG9zZVRlbXBvcmFyeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiaWdMb3NlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZUNvbmZpcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ0xvc2VUZW1wb3JhcnlcIiwgYmlnTG9zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdMb3NlVGVtcG9yYXJ5XCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZUNvbmZpcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdMb3NlQ29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VQb3B1cHNUZWFtLmZvckVhY2goKHRlYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbU5hbWUgPSBhY3RpdmVTdGFnZS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1iaWctc3RhZ2U9XCJiaWdXaW5cIl1gKS5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19jYXJkLXRleHRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1XcmFwID0gdGVhbS5jbG9zZXN0KFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWRUZWFtID0gdGVhbU5hbWUuZ2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nKSA9PT0gdGVhbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkQmlnTG9zZSA9IEpTT04ucGFyc2UoYmlnTG9zZSk/LmRhdGFBdHRyID09PSB0ZWFtLmdldEF0dHJpYnV0ZShcImRhdGEtdGVhbVwiKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU2VsZWN0ZWRCaWdMb3NlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNTZWxlY3RlZFRlYW0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwKFwiYmlnTG9zZVwiLCBwb3B1cHNXcmFwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQstC40LHRltGAINC/0YDQtdC00ZbQutGC0YMg0L3QsCAzIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJpZ1dpblBvcHVwICYmIHBvcHVwc1RlYW0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNsaWNrZWRUZWFtTmFtZSAmJiBwb3B1cHNUZWFtKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNTZWxlY3RlZEJpZ1dpbiA9IEpTT04ucGFyc2UoYmlnV2luKSA/PyBmYWxzZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU2VsZWN0ZWRCaWdXaW4pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ1dpblRlbXBvcmFyeVwiLCBiaWdXaW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUZWFtID0gdGVhbXMuZmluZCh0ZWFtID0+IHRlYW0uZGF0YUF0dHIgPT09IGNsaWNrZWRUZWFtTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ1dpblRlbXBvcmFyeVwiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGVhbSkpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsUG9wdXBzVGVhbS5mb3JFYWNoKCh0ZWFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmNsYXNzTGlzdC5yZW1vdmUoJ19zZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmNsYXNzTGlzdC5hZGQoJ19vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbS5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cHNUZWFtLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ1dpblRlbXBvcmFyeVwiKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW5Db25maXJtQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW5Db25maXJtQnRuLmNsYXNzTGlzdC5hZGQoJ19sb2NrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQstC40LHRltGAINC/0YDQtdC00ZbQutGC0YMg0L3QsCAwIDNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJpZ0xvc2VQb3B1cCAmJiBwb3B1cHNUZWFtKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNsaWNrZWRUZWFtTmFtZSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzU2VsZWN0ZWRCaWdMb3NlID0gSlNPTi5wYXJzZShiaWdMb3NlKSA/PyBmYWxzZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU2VsZWN0ZWRCaWdMb3NlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdMb3NlVGVtcG9yYXJ5XCIsIGJpZ0xvc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUZWFtID0gdGVhbXMuZmluZCh0ZWFtID0+IHRlYW0uZGF0YUF0dHIgPT09IGNsaWNrZWRUZWFtTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ0xvc2VUZW1wb3JhcnlcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRlYW0pKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBvcHVwc1RlYW0uZm9yRWFjaCgodGVhbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbS5jbGFzc0xpc3QuYWRkKCdfb3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbT8uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbT8uY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnTG9zZVRlbXBvcmFyeVwiKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdMb3NlQ29uZmlybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZUNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnX2xvY2snKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQstGW0LTQutGA0LjRgtGC0Y8g0L/QvtC/0LDQv9GDINC90LAg0ZbQvdGI0ZYg0LrQvtC80LDQvdC00LhcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNsaWNrZWRDYXJkICYmICFjYXJkQmlnV2luICYmICFjYXJkQmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtb3BvcmFyeVRlYW1zID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRlYW1zV2luVGVtcG9yYXJ5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVGVhbXMgPSB0ZWFtc1dpbj8uZmlsdGVyKGl0ZW0gPT4gaXRlbSAmJiBpdGVtLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFRlYW1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0ZWFtc1dpblRlbXBvcmFyeVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkVGVhbXMgJiYgc2VsZWN0ZWRUZWFtcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInRlYW1zV2luVGVtcG9yYXJ5XCIsIEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkVGVhbXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGVtb3BvcmFyeVRlYW1zKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzQ29uZmlybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcnNDb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcnNQb3B1cHNUZWFtLmZvckVhY2goKHRlYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbURhdGFBdHRyID0gdGVhbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtV3JhcCA9IHRlYW0uY2xvc2VzdChcIi5wbGF5b2ZmX19jaG9vc2UtdGVhbVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTmFtZVdpbiA9IGFjdGl2ZVN0YWdlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJpZy1zdGFnZT1cImJpZ1dpblwiXSAuc3RhZ2VfX2NhcmQtdGV4dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTmFtZUxvc2UgPSBhY3RpdmVTdGFnZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1iaWctc3RhZ2U9XCJiaWdMb3NlXCJdIC5zdGFnZV9fY2FyZC10ZXh0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZFRlYW0gPSBzZWxlY3RlZFRlYW1zPy5zb21lKGl0ZW0gPT4gaXRlbS5kYXRhQXR0ciA9PT0gdGVhbURhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZFRlYW1XaW4gPSB0ZWFtTmFtZVdpbj8uZ2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nKSA9PT0gdGVhbURhdGFBdHRyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkVGVhbUxvc2UgPSB0ZWFtTmFtZUxvc2U/LmdldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJykgPT09IHRlYW1EYXRhQXR0cjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNTZWxlY3RlZFRlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxlY3RlZFRlYW1zPy5sZW5ndGggPiAwICYmICFpc1NlbGVjdGVkVGVhbSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2VsZWN0ZWRUZWFtV2luIHx8IGlzU2VsZWN0ZWRUZWFtTG9zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYWN0aXZlT3RoZXJzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzQXJyYXkgPSBBcnJheS5mcm9tKGFjdGl2ZU90aGVycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Q2FyZCA9IG90aGVyc0FycmF5LmluZGV4T2Yob3RoZXJzQ2FyZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4Q2FyZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXAoXCJPdGhlcnNcIiwgcG9wdXBzV3JhcClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LfQsNC60YDQuNGC0YLRjyDQv9C+0L/QsNC/0YMg0L3QsCDRltC90YjRliDQutC+0LzQsNC90LTQuFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocG9wdXBzQ2xvc2VCdG4gfHwgIWNsaWNrZWRDYXJkICYmICFwb3B1cCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKHBvcHVwc1dyYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQstC40LHRltGAINC/0YDQtdC00ZbQutGC0YMg0L3QsCDQstGB0ZYg0ZbQvdGI0ZYg0LrQvtC80LDQvdC00LhcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPdGhlcnNQb3B1cCAmJiBwb3B1cHNUZWFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcG9wdXBzVGVhbS5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwb3B1cHNUZWFtLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsaWNrZWRUZWFtTmFtZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGVhbSA9IHRlYW1zLmZpbmQodGVhbSA9PiB0ZWFtLmRhdGFBdHRyID09PSBjbGlja2VkVGVhbU5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGVhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ByZWRpY3QgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0ZWFtc1dpblRlbXBvcmFyeVwiKSkgfHwgW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFscmVhZHlBZGRlZCA9IG5ld1ByZWRpY3Quc29tZShpdGVtID0+IGl0ZW0uZGF0YUF0dHIgPT09IGN1cnJlbnRUZWFtLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzUHJlZGljdEZ1bGwgPSBuZXdQcmVkaWN0Lmxlbmd0aCA+PSA3O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFscmVhZHlBZGRlZCAmJiAhaXNQcmVkaWN0RnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ByZWRpY3QucHVzaChjdXJyZW50VGVhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInRlYW1zV2luVGVtcG9yYXJ5XCIsIEpTT04uc3RyaW5naWZ5KG5ld1ByZWRpY3QpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSBBZGRlZDpcIiwgY3VycmVudFRlYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcmVkaWN0ID0gbmV3UHJlZGljdC5maWx0ZXIodGVhbSA9PiB0ZWFtLmRhdGFBdHRyICE9PSBjdXJyZW50VGVhbS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInRlYW1zV2luVGVtcG9yYXJ5XCIsIEpTT04uc3RyaW5naWZ5KG5ld1ByZWRpY3QpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKaoO+4jyBUZWFtIHJlbW92ZWRcIiwgY3VycmVudFRlYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbS5jbGFzc0xpc3QuYWRkKCdfb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkTGVuZ3RoID0gbmV3UHJlZGljdC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkTGVuZ3RoIDwgNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyc0NvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxQb3B1cHNUZWFtLmZvckVhY2godGVhbSA9PiB0ZWFtLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh1cGRhdGVkTGVuZ3RoID09PSA3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzQ29uZmlybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBvcHVwc1RlYW0uZm9yRWFjaCh0ZWFtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlYW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdfb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4p2MIFRlYW0gbm90IGZvdW5kIGZvcjpcIiwgY2xpY2tlZFRlYW1OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINC/0ZbQtNGC0LLQtdGA0LTQttC10L3QvdGPINCy0LjQsdC+0YDRgyDQsiDQv9C+0L/QsNC/0ZZcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvbmZpcm1DaG9vc2VCdG4pe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbXNXaW4gPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0ZWFtc1dpblRlbXBvcmFyeVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGVhbXNXaW4pIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ0ZWFtc1dpblwiLCBKU09OLnN0cmluZ2lmeSh0ZWFtc1dpbikpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdMb3NlVGVtcG9yYXJ5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJpZ0xvc2UpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdMb3NlXCIsIGJpZ0xvc2UpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnV2luVGVtcG9yYXJ5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJpZ1dpbikgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ1dpblwiLCBiaWdXaW4pXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpZ1dpblByZWRpY3QgPSBKU09OLnBhcnNlKGJpZ1dpbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiaWdMb3NlUHJlZGljdCA9IEpTT04ucGFyc2UoYmlnTG9zZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvdGhlclRlYW1zUHJlZGljdCA9IHRlYW1zV2luO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmlnTG9zZVByZWRpY3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdMb3NlLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnTG9zZS5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdMb3NlVGVhbS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShiaWdMb3NlUHJlZGljdC5kYXRhQXR0cilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnTG9zZVRlYW0uc2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nLCBiaWdMb3NlUHJlZGljdC5kYXRhQXR0cilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiaWdXaW5QcmVkaWN0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnV2luLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnV2luLmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ1dpblRlYW0udGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkoYmlnV2luUHJlZGljdC5kYXRhQXR0cilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnV2luVGVhbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScsIGJpZ1dpblByZWRpY3QuZGF0YUF0dHIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob3RoZXJUZWFtc1ByZWRpY3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlclRlYW1zUHJlZGljdC5mb3JFYWNoKCh0ZWFtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Q2FyZFRlYW1OYW1lID0gYWN0aXZlT3RoZXJzW2ldLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX2NhcmQtdGV4dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRDYXJkVGVhbU5hbWUsIHRlYW0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZU90aGVyc1tpXS5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlT3RoZXJzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudENhcmRUZWFtTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScsIHRlYW0uZGF0YUF0dHIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FyZFRlYW1OYW1lLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KHRlYW0uZGF0YUF0dHIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0ZWFtc1dpbiAmJiBiaWdXaW4gJiYgYmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VQcmVkaWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VQcmVkaWN0QnRuLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cChwb3B1cHNXcmFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheW9mZlN0YWdlcyA9IGFjdGl2ZVN0YWdlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXlvZmYtc3RhZ2VdJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhcnRlckZpbmFscyA9IGFjdGl2ZVN0YWdlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXlvZmYtc3RhZ2U9XCIxXCJdJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VtaUZpbmFscyA9IGFjdGl2ZVN0YWdlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXlvZmYtc3RhZ2U9XCIyXCJdJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxzID0gYWN0aXZlU3RhZ2UucXVlcnlTZWxlY3RvcignW2RhdGEtcGxheW9mZi1zdGFnZT1cIjNcIl0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5uZXIgPSBhY3RpdmVTdGFnZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGF5b2ZmLXN0YWdlPVwiNFwiXScpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKHRlYW1zV2luICYmIGJpZ1dpbiAmJiBiaWdMb3NlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VQcmVkaWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKHRhcmdldC5jbG9zZXN0KGBbZGF0YS1zdGFnZT1cIjRcIl1gKSkgY29uc29sZS5sb2codGFyZ2V0KVxuXG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gY2hlY2tVc2VyQXV0aCgpO1xuXG5cblxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZWFtc1dpbiwgYmlnV2luLCBiaWdMb3NlKTtcblxuXG5cbiAgICAgICAgICAgIG1ha2VQcmVkaWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgIHNlbmRQcmVkaWN0KClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMTAwMClcblxuICAgICAgICAgICAgbGV0IGluaXRpYWxPZmZzZXRMZWZ0ID0gbnVsbDtcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlUGxheW9mZlBvc2l0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMzAwICYmIHdpbmRvdy5pbm5lcldpZHRoID4gNTUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmU3RhZ2Uuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxPZmZzZXRMZWZ0ID0gcGxheW9mZlN0YWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50TGVmdCA9IGluaXRpYWxPZmZzZXRMZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlmdCA9IGN1cnJlbnRMZWZ0IC0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmU3RhZ2Uuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7c2hpZnR9cHgpYDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlvZmZTdGFnZS5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE9mZnNldExlZnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTApXG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmKGN1cnJlbnRTdGFnZSA8IDMpe1xuICAgICAgICAgICAgICAgIHBsYXlvZmZQcmVkaWN0b3IuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHVwZGF0ZVBsYXlvZmZQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIHVwZGF0ZVBsYXlvZmZQb3NpdGlvbik7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVQbGF5b2ZmUG9zaXRpb24pO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5b2ZmUGhhc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX3N0YWdlJyk7XG4gICAgICAgICAgICBjb25zdCBwbGF5b2ZmQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlvZmYnKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXlvZmZOZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX2J0bi1yaWdodCcpO1xuICAgICAgICAgICAgY29uc3QgcGxheW9mZlByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fYnRuLWxlZnQnKTtcblxuICAgICAgICAgICAgbGV0IHBoYXNlQ291bnQgPSAzO1xuICAgICAgICAgICAgbGV0IGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPD0gNTUwO1xuXG4gICAgICAgICAgICBjb25zdCBzZXRDdXJyZW50UGhhc2UgPSAocGhhc2VzLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcGhhc2VzLmZvckVhY2goKHBoYXNlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBoYXNlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIsIGkgIT09IGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qgc2hvd0FsbFBoYXNlcyA9IChwaGFzZXMpID0+IHtcbiAgICAgICAgICAgICAgICBwaGFzZXMuZm9yRWFjaChwaGFzZSA9PiBwaGFzZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBoaWRlQWxsRXhjZXB0Q3VycmVudCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGhhc2UocGxheW9mZlBoYXNlcywgcGhhc2VDb3VudCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBoYXNlQ291bnQgPSAocGhhc2VDb3VudCArIDEpICUgcGxheW9mZlBoYXNlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaGlkZUFsbEV4Y2VwdEN1cnJlbnQoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGhhc2VDb3VudCA9IChwaGFzZUNvdW50IC0gMSArIHBsYXlvZmZQaGFzZXMubGVuZ3RoKSAlIHBsYXlvZmZQaGFzZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGhpZGVBbGxFeGNlcHRDdXJyZW50KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgdG91Y2hTdGFydFggPSAwO1xuICAgICAgICAgICAgbGV0IHRvdWNoRW5kWCA9IDA7XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVN3aXBlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0b3VjaEVuZFggLSB0b3VjaFN0YXJ0WDtcblxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUHJldigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgaGlkZUFsbEV4Y2VwdEN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICBwbGF5b2ZmTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5leHQpO1xuICAgICAgICAgICAgICAgIHBsYXlvZmZQcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJldik7XG5cbiAgICAgICAgICAgICAgICBwbGF5b2ZmQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaFN0YXJ0WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHBsYXlvZmZDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaEVuZFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN3aXBlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93TW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPD0gNTUwO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5vd01vYmlsZSAmJiAhaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNb2JpbGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBoaWRlQWxsRXhjZXB0Q3VycmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5leHQpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByZXYpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghbm93TW9iaWxlICYmIGlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTW9iaWxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGxQaGFzZXMocGxheW9mZlBoYXNlcyk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlvZmZOZXh0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTmV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlvZmZQcmV2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJldik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGljay1waWNrXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKCkudGhlbihpbml0KVxuXG4gICAgLy90ZXN0XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1sbmdcIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJ1a1wiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1hdXRoXCIpXG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIFwiNzc3Nzc3NzlcIilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpO1xuICAgIGNvbnN0IHBvcHVwV2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbi1wb3B1cCcpO1xuICAgIGNvbnN0IHBvcHVwTG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3NlLXBvcHVwJyk7XG4gICAgY29uc3QgcG9wdXBPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdGhlcnMtcG9wdXAnKTtcblxuICAgIGNvbnNvbGUubG9nKHBvcHVwV2luLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fcG9wdXAtY2xvc2VcIikpXG5cbiAgICAvLyBmdW5jdGlvbiBzZXRIaWRlUG9wdXAocG9wdXApe1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX3BvcHVwLWNsb3NlXCIpKTtcbiAgICAvLyAgICAgY29uc3QgY2xvc2VCdG4gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fcG9wdXAtY2xvc2UnKTtcbiAgICAvL1xuICAgIC8vICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgIC8vICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LW9wYWNpdHknKTtcbiAgICAvLyAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIHNldEhpZGVQb3B1cChwb3B1cFdpbik7XG4gICAgLy8gc2V0SGlkZVBvcHVwKHBvcHVwTG9zZSk7XG4gICAgLy8gc2V0SGlkZVBvcHVwKHBvcHVwT3RoZXIpO1xuXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBvcHVwLXdpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1vcGFjaXR5Jyk7XG4gICAgICAgIHBvcHVwV2luLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBMb3NlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBPdGhlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcG9wdXAtbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1vcGFjaXR5Jyk7XG4gICAgICAgIHBvcHVwV2luLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBMb3NlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBPdGhlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcG9wdXAtb3RoZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXktb3BhY2l0eScpO1xuICAgICAgICBwb3B1cFdpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHBvcHVwTG9zZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHBvcHVwT3RoZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXRpbWVyJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdGFnZTEgPSAnMSdcbiAgICAgICAgY29uc3Qgc3RhZ2UyID0gJzQnXG5cbiAgICAgICAgY29uc3Qgc2F2ZWREYXRlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnREYXRlXCIpO1xuXG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBzYXZlZERhdGUgPT09IHN0YWdlMiA/IHN0YWdlMSA6IHN0YWdlMjtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnREYXRlXCIsIG5ld0RhdGUpO1xuXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG5cbn0pKCk7XG4iXX0=
