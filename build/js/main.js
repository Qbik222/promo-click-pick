"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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

  // let currentStage = Number(sessionStorage.getItem("currentDate"))

  var currentStage = 3;
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
  var playoffStages = document.querySelector('[data-playoff-stage]'),
    quarterFinals = document.querySelector('[data-playoff-stage="1"]'),
    semiFinals = document.querySelector('[data-playoff-stage="2"]'),
    finals = document.querySelector('[data-playoff-stage="3"]'),
    winner = document.querySelector('[data-playoff-stage="4"]'),
    quarterFinalsPairs = document.querySelectorAll('.playoff__choose[data-choose-semifinal]'),
    semiFinalsPairs = document.querySelectorAll('.playoff__choose[data-choose-final]'),
    winnerPairs = document.querySelectorAll('.playoff__choose[data-choose-winner]'),
    semiFinalsPairsBtns = document.querySelectorAll('.playoff__choose-team[data-choose-semifinal]'),
    finalsPairsBtns = document.querySelectorAll('.playoff__choose-team[data-choose-final]'),
    winnerCard = document.querySelector('.playoff__card'),
    playoffSemiFinalPopup = document.querySelector('[data-popup="playoffSemiFinal"]'),
    playoffFinalPopup = document.querySelector('[data-popup="playoffFinal"]'),
    playoffWinnerPopup = document.querySelector('[data-popup="winner"]');
  var semiFinalsTeams = [];
  var finalsTeams = [];
  var winners = [];
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
  var quoterFinalsData = [].concat(_toConsumableArray(stagesResult[2].teamsBet), [stagesResult[2].bigWin]);
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
  function setPlayoff(quarterFinals, semiFinals, finals, winner) {
    var quarterFinalsCards = quarterFinals.querySelectorAll(".playoff__choose-team");
    var semiFinalsCards = semiFinals.querySelectorAll(".playoff__choose-team");
    var FinalsCards = finals.querySelectorAll(".playoff__choose-team");
    var winnerCards = winner.querySelectorAll(".playoff__choose-team");
    console.log(semiFinalsCards);
    quarterFinalsCards.forEach(function (card, i) {
      var teamCardName = card.querySelector(".playoff__choose-team-text");
      var team = quoterFinalsData[i];
      teamCardName.setAttribute("data-team", team.dataAttr);
      card.setAttribute("data-team", team.dataAttr);
      teamCardName.textContent = translateKey(team.dataAttr);
      card.classList.add("_done");
    });
    semiFinalsCards.forEach(function (card, i) {
      card.classList.remove("_done", "_selected");
      card.classList.add("_open");
    });
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
        stageCards.forEach(function (card, i) {
          card.classList.add("_done");
        });
      } else {
        console.log(bigWinTeam.outcome);
        stageCards.forEach(function (card, i) {
          var currentData = othersTeams[i];
          if (currentData.outcome) {
            card.classList.add('_win');
          } else {
            card.classList.add('_lose');
          }
        });
        if (bigWinTeam.outcome) {
          stageCardWin.classList.add('_win');
        } else {
          console.log(stageCardWin);
          stageCardWin.classList.add('_lose');
        }
        if (bigLoseTeam.outcome) {
          stageCardLose.classList.add('_win');
        } else {
          stageCardLose.classList.add('_lose');
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
    if (teamsWin && teamsWin.length === 6 && bigLose && bigWin) {
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
  function extractTeamData(pairElement, teamSelector, groupAttr) {
    var teams = pairElement.querySelectorAll(teamSelector);
    return Array.from(teams).map(function (team) {
      var _team$closest;
      return {
        dataAttr: team.getAttribute('data-team'),
        pairNum: Number((_team$closest = team.closest("[".concat(groupAttr, "]"))) === null || _team$closest === void 0 ? void 0 : _team$closest.getAttribute(groupAttr))
      };
    });
  }
  function addTeamsFromPair(pairs, teamsArray) {
    var result = _toConsumableArray(teamsArray);
    pairs.forEach(function (pair) {
      var extracted = extractTeamData(pair, '.playoff__choose-team[data-team]', 'data-choose-semifinal');
      result = [].concat(_toConsumableArray(result), _toConsumableArray(extracted));
    });
    return result;
  }
  function renderPlayoffPopup(popupElement, teamsPlayoff, dataName, temporaryDataName) {
    var scrollContainer = popupElement.querySelector('.playoff__popup-scroll');
    if (!scrollContainer) return;
    var savedData = JSON.parse(sessionStorage.getItem(dataName)) || null;
    if (!savedData) {
      popupElement.querySelector(".playoff__popup-btn").classList.add('_lock');
    }
    scrollContainer.innerHTML = '';
    teamsPlayoff.forEach(function (team) {
      var teamDiv = document.createElement('div');
      teamDiv.className = 'playoff__choose-team _open';
      teamDiv.dataset.team = team.dataAttr;
      var iconDiv = document.createElement('div');
      iconDiv.className = 'playoff__choose-team-icon';
      var textDiv = document.createElement('div');
      textDiv.className = 'playoff__choose-team-text';
      textDiv.dataset.team = team.dataAttr;
      textDiv.textContent = translateKey(team.dataAttr);
      var btnDiv = document.createElement('div');
      btnDiv.className = 'playoff__choose-team-btn';
      teamDiv.append(iconDiv, textDiv, btnDiv);
      scrollContainer.appendChild(teamDiv);
      if (savedData && savedData.dataAttr === team.dataAttr) {
        teamDiv.classList.add('_selected');
        teamDiv.classList.remove('_open');
      }
    });
    var teamTabs = scrollContainer.querySelectorAll('.playoff__choose-team');
    teamTabs.forEach(function (teamTab, i) {
      teamTab.addEventListener('click', function () {
        var teamName = teamTab.getAttribute('data-team');
        var selectedTeam = teamsPlayoff.find(function (team) {
          return team.dataAttr.toLowerCase() === teamName.toLowerCase();
        });
        popupElement.querySelector(".playoff__popup-btn").classList.remove('_lock');
        sessionStorage.setItem(temporaryDataName, JSON.stringify(selectedTeam));
        teamTabs.forEach(function (item, j) {
          item.classList.toggle('_selected', i === j);
          item.classList.toggle('_open', i !== j);
        });
      });
    });
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
                  quoterFinalsData = [].concat(_toConsumableArray(stagesResult[2].teamsBet), [stagesResult[2].bigWin]);
                }
                if (currentStage === 3) {
                  console.log(quarterFinals);
                  setPlayoff(quarterFinals, semiFinals, finals, winner);
                  semiFinalsTeams = _toConsumableArray(addTeamsFromPair(quarterFinalsPairs, []));
                  finalsTeams = _toConsumableArray(addTeamsFromPair(semiFinalsPairs, []));
                  winners = _toConsumableArray(addTeamsFromPair(winnerPairs, []));
                  semiFinalsPairsBtns.forEach(function (btn, i) {
                    var confirmPredictBtn = playoffSemiFinalPopup.querySelector(".playoff__popup-btn"),
                      btnTeamName = btn.querySelector('.playoff__choose-team-text');
                    var temporaryData = sessionStorage.getItem("semiFinalsTemporary".concat(i + 1));
                    sessionStorage.setItem("semiFinals".concat(i + 1), temporaryData);
                    var btnCurrentData = JSON.parse(sessionStorage.getItem("semiFinals".concat(i + 1)));
                    if (semiFinalsTeams.length < 4) {
                      confirmPredictBtn.classList.add('_lock');
                    } else {
                      confirmPredictBtn.classList.remove('_lock');
                    }
                    if (btnCurrentData) {
                      btn.classList.add('_selected');
                      btn.setAttribute("data-team", btnCurrentData.dataAttr);
                      btnTeamName.textContent = translateKey(btnCurrentData.dataAttr);
                    } else {
                      btn.classList.remove('_selected');
                      btn.classList.add('_open');
                    }
                    closePopup(popupsWrap);
                    btn.addEventListener('click', function (e) {
                      semiFinalsTeams = _toConsumableArray(addTeamsFromPair(quarterFinalsPairs, []));
                      var btnPairNumber = Number(btn.getAttribute("data-choose-semifinal"));
                      var predictPairData = [];
                      console.log(semiFinalsTeams);
                      semiFinalsTeams.forEach(function (team) {
                        if (team.pairNum === btnPairNumber) {
                          predictPairData.push(team);
                        }
                      });
                      console.log(semiFinalsTeams);
                      renderPlayoffPopup(playoffSemiFinalPopup, predictPairData, "semiFinals".concat(i + 1), "semiFinalsTemporary".concat(i + 1));
                      openPopup("playoffSemiFinal", popupsWrap);
                      confirmPredictBtn.addEventListener("click", function (e) {
                        temporaryData = sessionStorage.getItem("semiFinalsTemporary".concat(i + 1));
                        sessionStorage.setItem("semiFinals".concat(i + 1), temporaryData);
                        btnCurrentData = JSON.parse(sessionStorage.getItem("semiFinals".concat(i + 1)));
                        console.log(btnCurrentData);
                        if (btnCurrentData) {
                          btn.classList.add('_selected');
                          btn.setAttribute("data-team", btnCurrentData.dataAttr);
                          btnTeamName.textContent = translateKey(btnCurrentData.dataAttr);
                        }
                        if (semiFinalsTeams.length < 4) {
                          confirmPredictBtn.classList.add('_lock');
                        } else {
                          confirmPredictBtn.classList.remove('_lock');
                        }
                        closePopup(popupsWrap);
                      });
                    });
                  });
                  finalsPairsBtns.forEach(function (btn, i) {
                    var confirmPredictBtn = playoffFinalPopup.querySelector(".playoff__popup-btn"),
                      btnTeamName = btn.querySelector('.playoff__choose-team-text');
                    var temporaryData = sessionStorage.getItem("finalsTemporary".concat(i + 1));
                    sessionStorage.setItem("finals".concat(i + 1), temporaryData);
                    var btnCurrentData = JSON.parse(sessionStorage.getItem("finals".concat(i + 1)));
                    if (btnCurrentData) {
                      btn.classList.add('_selected');
                      btn.setAttribute("data-team", btnCurrentData.dataAttr);
                      btnTeamName.textContent = translateKey(btnCurrentData.dataAttr);
                    } else {
                      btn.classList.remove('_selected');
                      btn.classList.add('_open');
                    }
                    closePopup(popupsWrap);
                    btn.addEventListener('click', function (e) {
                      finalsTeams = _toConsumableArray(addTeamsFromPair(semiFinalsPairs, []));
                      var btnPairNumber = Number(btn.getAttribute("data-choose-final"));
                      var confirmPredictBtn = playoffFinalPopup.querySelector(".playoff__popup-btn");
                      var validPairNums = btnPairNumber === 1 ? [1, 2] : [3, 4];
                      var predictPairData = finalsTeams.filter(function (team) {
                        return validPairNums.includes(team.pairNum);
                      });
                      renderPlayoffPopup(playoffFinalPopup, predictPairData, "finals".concat(i + 1), "finalsTemporary".concat(i + 1));
                      openPopup("playoffFinal", popupsWrap);
                      var confirmHandler = function confirmHandler() {
                        temporaryData = sessionStorage.getItem("finalsTemporary".concat(i + 1));
                        sessionStorage.setItem("finals".concat(i + 1), temporaryData);
                        btnCurrentData = JSON.parse(sessionStorage.getItem("finals".concat(i + 1)));
                        if (btnCurrentData) {
                          btn.classList.add('_selected');
                          btn.setAttribute("data-team", btnCurrentData.dataAttr);
                          btnTeamName.textContent = translateKey(btnCurrentData.dataAttr);
                        }
                        confirmPredictBtn.removeEventListener("click", confirmHandler);
                        closePopup(popupsWrap);
                      };
                      confirmPredictBtn.addEventListener("click", confirmHandler);
                    });
                  });
                  winnerCard.addEventListener('click', function (e) {
                    winners = _toConsumableArray(addTeamsFromPair(winnerPairs, []));
                    var confirmPredictBtn = playoffWinnerPopup.querySelector(".playoff__popup-btn"),
                      btnTeamName = winnerCard.querySelector(".playoff__card-text");
                    renderPlayoffPopup(playoffWinnerPopup, winners, "winner", "winnerTemporary");
                    openPopup("winner", popupsWrap);
                    var confirmHandler = function confirmHandler() {
                      var temporaryData = sessionStorage.getItem("winnerTemporary");
                      sessionStorage.setItem("winner", temporaryData);
                      var btnCurrentData = JSON.parse(sessionStorage.getItem("winner"));
                      if (btnCurrentData) {
                        winnerCard.classList.add('_selected');
                        winnerCard.setAttribute("data-team", btnCurrentData.dataAttr);
                        btnTeamName.textContent = translateKey(btnCurrentData.dataAttr);
                      }
                      confirmPredictBtn.removeEventListener("click", confirmHandler);
                      closePopup(popupsWrap);
                    };
                    confirmPredictBtn.addEventListener("click", confirmHandler);
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
                  setCurrentPredict();
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
                    if (Number(targetStageValue) - 1 !== currentStage) {
                      makePredictBtn.classList.add('hide');
                    } else {
                      makePredictBtn.classList.remove('hide');
                    }
                  });
                });
                renderTeamBlocks('bigWin', teams);
                renderTeamBlocks('bigLose', teams);
                renderTeamBlocks('Others', teams);
                document.addEventListener("click", function (e) {
                  var target = e.target,
                    activeStage = document.querySelector("[data-stage]._active"),
                    popupsCloseBtn = target.closest('.playoff__popup-close'),
                    popup = target.closest('.playoff__popup');
                  // логіка для перших 3х етапів
                  if (currentStage <= 2) {
                    var _target$closest, _target$querySelector;
                    var clickedCard = target.closest('.stage__card'),
                      cardBigWin = target.closest('[data-big-stage="bigWin"]'),
                      cardBigLose = target.closest('[data-big-stage="bigLose"]'),
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
                    if (teamsWin && bigWin && bigLose) {
                      makePredictBtn.classList.remove('_lock');
                    } else {
                      makePredictBtn.classList.add('_lock');
                    }
                  } else {
                    // закриття попапу на інші команди

                    var clickedTab = target.closest(".playoff__choose-team");
                    var _clickedCard = target.closest(".playoff__card");
                    if (popupsCloseBtn || !clickedTab && !popup && !_clickedCard) {
                      closePopup(popupsWrap);
                    }
                  }
                });
              });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwic3RhZ2VzRGF0YSIsImRhdGEiLCJEYXRlIiwiY3VycmVudERhdGUiLCJjdXJyZW50U3RhZ2UiLCJjb25zb2xlIiwibG9nIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInN0YWdlcyIsInN0YWdlQWN0aXZlIiwic3RhZ2VzVGFicyIsInBsYXlvZmZTdGFnZSIsInJlc3VsdHMiLCJwcmVkaWN0b3IiLCJwbGF5b2ZmUHJlZGljdG9yIiwidGVhbVRleHRQb3B1cHMiLCJwb3B1cHNXcmFwIiwibWFrZVByZWRpY3RCdG4iLCJwcmVkaWN0b3JDaGVja0luIiwicGxheW9mZlN0YWdlcyIsInF1YXJ0ZXJGaW5hbHMiLCJzZW1pRmluYWxzIiwiZmluYWxzIiwid2lubmVyIiwicXVhcnRlckZpbmFsc1BhaXJzIiwic2VtaUZpbmFsc1BhaXJzIiwid2lubmVyUGFpcnMiLCJzZW1pRmluYWxzUGFpcnNCdG5zIiwiZmluYWxzUGFpcnNCdG5zIiwid2lubmVyQ2FyZCIsInBsYXlvZmZTZW1pRmluYWxQb3B1cCIsInBsYXlvZmZGaW5hbFBvcHVwIiwicGxheW9mZldpbm5lclBvcHVwIiwic2VtaUZpbmFsc1RlYW1zIiwiZmluYWxzVGVhbXMiLCJ3aW5uZXJzIiwidWtMZW5nIiwiZW5MZW5nIiwidG9nZ2xlQ2xhc3NlcyIsImVsZW1lbnRzIiwiY2xhc3NOYW1lIiwiZm9yRWFjaCIsImVsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlVHJhbnNsYXRlcyIsImRhdGFBdHRyIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaTE4bkRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0ZWFtcyIsInRlYW0iLCJiaWdMb3NlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiYmlnV2luIiwidGVhbXNXaW4iLCJKU09OIiwicGFyc2UiLCJzdGFnZXNSZXN1bHQiLCJkZWZhdXRWYWx1ZSIsInRlYW1zQmV0Iiwib3V0Y29tZSIsInF1b3RlckZpbmFsc0RhdGEiLCJsb2FkZXJCdG4iLCJsb2NhbGUiLCJkZWJ1ZyIsIm90aGVyc0FycmF5IiwiaW5kZXhDYXJkIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJOdW1iZXIiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlbmRlclRlYW1CbG9ja3MiLCJwb3B1cEF0dHIiLCJwb3B1cCIsImNvbnRhaW5lciIsInRlYW1CbG9jayIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInRyYW5zbGF0ZSIsInNlbmRQcmVkaWN0Iiwib3RoZXJUZWFtcyIsInByZWRpY3RCb2R5IiwidXNlcmlkIiwiYmV0IiwiYmlnV2lubmVyIiwiYmlnTG9zZXIiLCJtZXRob2QiLCJib2R5Iiwic3RyaW5naWZ5Iiwic3VjY2VzcyIsInNldEN1cnJlbnRQcmVkaWN0IiwiZ2V0VXNlclByZWRpY3QiLCJwcmVkaWN0Iiwic3RhZ2VCZXQiLCJ3YXJuIiwiYWRkIiwic3RhZ2VPdGhlcnMiLCJzdGFnZU90aGVyQ2FyZHMiLCJzdGFnZVdpbkNhcmQiLCJzdGFnZVdpbkNhcmRUZWFtIiwic3RhZ2VMb3NlQ2FyZCIsInN0YWdlTG9zZUNhcmRUZWFtIiwicHJlZGljdE90aGVyVGVhbXMiLCJwcmVkaWN0V2lubmVyIiwicHJlZGljdExvc2VyIiwicmVtb3ZlIiwic2V0SXRlbSIsInRleHRDb250ZW50IiwidHJhbnNsYXRlS2V5IiwiY2FyZCIsImkiLCJjYXJkVGVhbU5hbWUiLCJjaGVja1VzZXJBdXRoIiwic2V0UGxheW9mZiIsInF1YXJ0ZXJGaW5hbHNDYXJkcyIsInNlbWlGaW5hbHNDYXJkcyIsIkZpbmFsc0NhcmRzIiwid2lubmVyQ2FyZHMiLCJ0ZWFtQ2FyZE5hbWUiLCJmaW5kIiwiaXRlbSIsImhpZGVMb2FkZXIiLCJzdHlsZSIsIm92ZXJmbG93IiwibG9hZFRpbWUiLCJzZXRUaW1lb3V0Iiwic2hvd0VsZW1lbnRzIiwiaGlkZUVsZW1lbnRzIiwicmVzb2x2ZSIsInJlcG9ydEVycm9yIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsImdldEF0dHJpYnV0ZSIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsImVsZW1lbnQiLCJsYW5nIiwicmVuZGVyVXNlcnMiLCJ3ZWVrIiwidXNlcnMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJjdXJyZW50VXNlciIsInVzZXIiLCJpc1RvcEN1cnJlbnRVc2VyIiwic2xpY2UiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93IiwidXNlckRhdGEiLCJvcHRpb25zIiwiaGlnaGxpZ2h0IiwibmVpZ2hib3IiLCJ1c2VyUm93IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsIm1hc2tVc2VySWQiLCJwb2ludHMiLCJhcHBlbmQiLCJpbmRleCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJ0b1N0cmluZyIsInNldFN0YXRlUGlja1N0YWdlIiwic3RhZ2UiLCJzdGFnZUNhcmRzV3JhcCIsInN0YWdlQ2FyZHMiLCJzdGFnZUNhcmRXaW4iLCJzdGFnZUNhcmRMb3NlIiwic3RhZ2VDYXJkV2luTmFtZSIsInN0YWdlQ2FyZExvc2VOYW1lIiwic3RhZ2VOdW0iLCJzdGFnZVN0YXRlIiwic3RhZ2VSZXN1bHREYXRhIiwib3RoZXJzVGVhbXMiLCJiaWdXaW5UZWFtIiwiYmlnTG9zZVRlYW0iLCJ0ZWFtTmFtZSIsImN1cnJlbnREYXRhIiwib3BlblBvcHVwIiwiY3VycmVudFBvcHVwIiwiY2xvc2VQb3B1cCIsInBvcHVwcyIsImFsbFBvcHVwc1RlYW1UYWJzIiwicGxhY2UiLCJleHRyYWN0VGVhbURhdGEiLCJwYWlyRWxlbWVudCIsInRlYW1TZWxlY3RvciIsImdyb3VwQXR0ciIsIkFycmF5IiwiZnJvbSIsIm1hcCIsInBhaXJOdW0iLCJjbG9zZXN0IiwiYWRkVGVhbXNGcm9tUGFpciIsInBhaXJzIiwidGVhbXNBcnJheSIsInJlc3VsdCIsInBhaXIiLCJleHRyYWN0ZWQiLCJyZW5kZXJQbGF5b2ZmUG9wdXAiLCJwb3B1cEVsZW1lbnQiLCJ0ZWFtc1BsYXlvZmYiLCJkYXRhTmFtZSIsInRlbXBvcmFyeURhdGFOYW1lIiwic2Nyb2xsQ29udGFpbmVyIiwic2F2ZWREYXRhIiwidGVhbURpdiIsImRhdGFzZXQiLCJpY29uRGl2IiwidGV4dERpdiIsImJ0bkRpdiIsInRlYW1UYWJzIiwidGVhbVRhYiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZWxlY3RlZFRlYW0iLCJ0b0xvd2VyQ2FzZSIsImoiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsInVzZXJTdGFnZXMiLCJidG4iLCJjb25maXJtUHJlZGljdEJ0biIsImJ0blRlYW1OYW1lIiwidGVtcG9yYXJ5RGF0YSIsImJ0bkN1cnJlbnREYXRhIiwiZSIsImJ0blBhaXJOdW1iZXIiLCJwcmVkaWN0UGFpckRhdGEiLCJwdXNoIiwidmFsaWRQYWlyTnVtcyIsImZpbHRlciIsImluY2x1ZGVzIiwiY29uZmlybUhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9wIiwiYm90dG9tIiwidGltZXIiLCJwbGF5b2ZmV3JhcCIsInRhYiIsInRhcmdldCIsInRhcmdldFN0YWdlVmFsdWUiLCJ0YXJnZXRTdGFnZSIsInQiLCJhY3RpdmVTdGFnZSIsInBvcHVwc0Nsb3NlQnRuIiwiY2xpY2tlZENhcmQiLCJjYXJkQmlnV2luIiwiY2FyZEJpZ0xvc2UiLCJiaWdXaW5Qb3B1cCIsImJpZ0xvc2VQb3B1cCIsIk90aGVyc1BvcHVwIiwicG9wdXBzVGVhbSIsIm90aGVyc0NhcmQiLCJhbGxQb3B1cHNUZWFtIiwiY2xpY2tlZFRlYW1OYW1lIiwiYWN0aXZlQmlnV2luIiwiYWN0aXZlQmlnV2luVGVhbSIsImFjdGl2ZUJpZ0xvc2UiLCJhY3RpdmVCaWdMb3NlVGVhbSIsImJpZ1dpblBvcHVwc1RlYW0iLCJiaWdMb3NlUG9wdXBzVGVhbSIsIm90aGVyc1BvcHVwc1RlYW0iLCJjb25maXJtQ2hvb3NlQnRuIiwib3RoZXJzQ29uZmlybUJ0biIsImJpZ1dpbkNvbmZpcm1CdG4iLCJiaWdMb3NlQ29uZmlybUJ0biIsImFjdGl2ZU90aGVycyIsInJlbW92ZUl0ZW0iLCJ0ZWFtV3JhcCIsImlzU2VsZWN0ZWRUZWFtIiwiaXNTZWxlY3RlZEJpZ1dpbiIsImlzU2VsZWN0ZWRCaWdMb3NlIiwiY3VycmVudFRlYW0iLCJ0ZW1vcG9yYXJ5VGVhbXMiLCJzZWxlY3RlZFRlYW1zIiwidGVhbURhdGFBdHRyIiwidGVhbU5hbWVXaW4iLCJ0ZWFtTmFtZUxvc2UiLCJpc1NlbGVjdGVkVGVhbVdpbiIsImlzU2VsZWN0ZWRUZWFtTG9zZSIsIm5ld1ByZWRpY3QiLCJhbHJlYWR5QWRkZWQiLCJpc1ByZWRpY3RGdWxsIiwidXBkYXRlZExlbmd0aCIsImNvbnRhaW5zIiwiYmlnV2luUHJlZGljdCIsImJpZ0xvc2VQcmVkaWN0Iiwib3RoZXJUZWFtc1ByZWRpY3QiLCJjdXJyZW50Q2FyZFRlYW1OYW1lIiwiY2xpY2tlZFRhYiIsImluaXRpYWxPZmZzZXRMZWZ0IiwidXBkYXRlUGxheW9mZlBvc2l0aW9uIiwiaW5uZXJXaWR0aCIsInRyYW5zZm9ybSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJjdXJyZW50TGVmdCIsInNoaWZ0IiwicGxheW9mZlBoYXNlcyIsInBsYXlvZmZDb250YWluZXIiLCJwbGF5b2ZmTmV4dCIsInBsYXlvZmZQcmV2IiwicGhhc2VDb3VudCIsImlzTW9iaWxlIiwic2V0Q3VycmVudFBoYXNlIiwicGhhc2VzIiwiY3VycmVudCIsInBoYXNlIiwic2hvd0FsbFBoYXNlcyIsImhpZGVBbGxFeGNlcHRDdXJyZW50IiwiaGFuZGxlTmV4dCIsImhhbmRsZVByZXYiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoRW5kWCIsImhhbmRsZVN3aXBlIiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJjaGFuZ2VkVG91Y2hlcyIsInNjcmVlblgiLCJub3dNb2JpbGUiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsInRhcmdldE5vZGUiLCJnZXRFbGVtZW50QnlJZCIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwibG5nQnRuIiwicmVsb2FkIiwiYXV0aEJ0biIsIm92ZXJsYXkiLCJwb3B1cFdpbiIsInBvcHVwTG9zZSIsInBvcHVwT3RoZXIiLCJzdGFnZTEiLCJzdGFnZTIiLCJzYXZlZERhdGUiLCJuZXdEYXRlIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUFBO0VBRVQsSUFBTUEsTUFBTSxHQUFHLHFDQUFxQztFQUVwRCxJQUFNQyxVQUFVLEdBQUcsQ0FD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QUFTLENBQUNvRSxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzlCcVIsU0FBUyxDQUFDelYsU0FBUyxDQUFDOEUsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQzRRLFVBQVUsQ0FBQzFWLFNBQVMsQ0FBQ29FLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFDcEMsQ0FBQyxDQUFDO0VBRUY5RyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDd1AsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDdEV3SSxPQUFPLENBQUN2VixTQUFTLENBQUM4RSxNQUFNLENBQUMsaUJBQWlCLENBQUM7SUFDM0MwUSxRQUFRLENBQUN4VixTQUFTLENBQUNvRSxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzlCcVIsU0FBUyxDQUFDelYsU0FBUyxDQUFDb0UsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMvQnNSLFVBQVUsQ0FBQzFWLFNBQVMsQ0FBQzhFLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDdkMsQ0FBQyxDQUFDO0VBRUYsMEJBQUF4SCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUMsMkRBQXBDLHVCQUFzQ3dQLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ2xFLElBQU00SSxNQUFNLEdBQUcsR0FBRztJQUNsQixJQUFNQyxNQUFNLEdBQUcsR0FBRztJQUVsQixJQUFNQyxTQUFTLEdBQUdsVixjQUFjLENBQUNDLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFFdkQsSUFBTWtWLE9BQU8sR0FBR0QsU0FBUyxLQUFLRCxNQUFNLEdBQUdELE1BQU0sR0FBR0MsTUFBTTtJQUN0RGpWLGNBQWMsQ0FBQ29FLE9BQU8sQ0FBQyxhQUFhLEVBQUUrUSxPQUFPLENBQUM7SUFFOUNwUCxRQUFRLENBQUMyTyxNQUFNLEVBQUU7RUFDckIsQ0FBQyxDQUFDO0FBR04sQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9jbGlja19waWNrJ1xuXG4gICAgY29uc3Qgc3RhZ2VzRGF0YSA9IFtcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMjBUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMjVUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMzBUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDYtMDVUMDA6MDA6MDArMDM6MDBcIikgfVxuICAgIF07XG5cbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0wNC0wNVQwMDowMDowMCswMzowMFwiKTtcblxuICAgIC8vIGxldCBjdXJyZW50U3RhZ2UgPSBzdGFnZXNEYXRhLmZpbHRlcihzdGFnZSA9PiBzdGFnZS5kYXRhIDw9IGN1cnJlbnREYXRlKS5sZW5ndGggPz8gMztcblxuICAgIC8vIGxldCBjdXJyZW50U3RhZ2UgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnREYXRlXCIpKVxuXG4gICAgbGV0IGN1cnJlbnRTdGFnZSA9IDNcblxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdGFnZSk7XG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICBzdGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc3RhZ2VdXCIpLFxuICAgICAgICBzdGFnZUFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXN0YWdlPVwiJHtjdXJyZW50U3RhZ2UgKyAxfVwiXWApLFxuICAgICAgICBzdGFnZXNUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXN0YWdlLXRhYl1cIiksXG4gICAgICAgIHBsYXlvZmZTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZlwiKSxcbiAgICAgICAgcmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0c1wiKSxcbiAgICAgICAgcHJlZGljdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0b3JcIiksXG4gICAgICAgIHBsYXlvZmZQcmVkaWN0b3IgPSBwcmVkaWN0b3IucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmXCIpLFxuICAgICAgICB0ZWFtVGV4dFBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbS10ZXh0JyksXG4gICAgICAgIHBvcHVwc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwc1wiKSxcbiAgICAgICAgbWFrZVByZWRpY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFrZS1wcmVkaWN0JyksXG4gICAgICAgIHByZWRpY3RvckNoZWNrSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdG9yX19jaGVja2luJyk7XG5cbiAgICBjb25zdCBwbGF5b2ZmU3RhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGxheW9mZi1zdGFnZV0nKSxcbiAgICAgICAgcXVhcnRlckZpbmFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXlvZmYtc3RhZ2U9XCIxXCJdJyksXG4gICAgICAgIHNlbWlGaW5hbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGF5b2ZmLXN0YWdlPVwiMlwiXScpLFxuICAgICAgICBmaW5hbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGF5b2ZmLXN0YWdlPVwiM1wiXScpLFxuICAgICAgICB3aW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGF5b2ZmLXN0YWdlPVwiNFwiXScpLFxuICAgICAgICBxdWFydGVyRmluYWxzUGFpcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fY2hvb3NlW2RhdGEtY2hvb3NlLXNlbWlmaW5hbF0nKSxcbiAgICAgICAgc2VtaUZpbmFsc1BhaXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZVtkYXRhLWNob29zZS1maW5hbF0nKSxcbiAgICAgICAgd2lubmVyUGFpcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fY2hvb3NlW2RhdGEtY2hvb3NlLXdpbm5lcl0nKSxcbiAgICAgICAgc2VtaUZpbmFsc1BhaXJzQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbVtkYXRhLWNob29zZS1zZW1pZmluYWxdJyksXG4gICAgICAgIGZpbmFsc1BhaXJzQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbVtkYXRhLWNob29zZS1maW5hbF0nKSxcbiAgICAgICAgd2lubmVyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19jYXJkJyksXG4gICAgICAgIHBsYXlvZmZTZW1pRmluYWxQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBvcHVwPVwicGxheW9mZlNlbWlGaW5hbFwiXScpLFxuICAgICAgICBwbGF5b2ZmRmluYWxQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBvcHVwPVwicGxheW9mZkZpbmFsXCJdJyksXG4gICAgICAgIHBsYXlvZmZXaW5uZXJQb3B1cD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcG9wdXA9XCJ3aW5uZXJcIl0nKTtcblxuICAgIGxldCBzZW1pRmluYWxzVGVhbXMgPSBbXVxuICAgIGxldCBmaW5hbHNUZWFtcyA9IFtdXG4gICAgbGV0IHdpbm5lcnMgPSBbXVxuXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRlYW1zID0gW1xuICAgICAgICB7IHRlYW06IFwiQ29tcGxleGl0eVwiLCBkYXRhQXR0cjogXCJjb21wbGV4aXR5XCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkZhbGNvbnNcIiwgZGF0YUF0dHI6IFwiZmFsY29uc1wiIH0sXG4gICAgICAgIHsgdGVhbTogXCJWaXRhbGl0eVwiLCBkYXRhQXR0cjogXCJ2aXRhbGl0eVwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJIZXJvaWNcIiwgZGF0YUF0dHI6IFwiaGVyb2ljXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkZhemVcIiwgZGF0YUF0dHI6IFwiZmF6ZVwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJTcGlyaXRcIiwgZGF0YUF0dHI6IFwic3Bpcml0XCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkI4XCIsIGRhdGFBdHRyOiBcIkI4XCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIjNETUFYXCIsIGRhdGFBdHRyOiBcIjNETUFYXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk1PVVpcIiwgZGF0YUF0dHI6IFwiTU9VWlwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJXaWxkY2FyZFwiLCBkYXRhQXR0cjogXCJ3aWxkY2FyZFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJWaXJ0dXMucHJvXCIsIGRhdGFBdHRyOiBcInZpcnR1c1Byb1wiIH0sXG4gICAgICAgIHsgdGVhbTogXCJUaGUgTW9uZ29selwiLCBkYXRhQXR0cjogXCJ0aGVNb25nb2x6XCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkZseVF1ZXN0XCIsIGRhdGFBdHRyOiBcImZseVF1ZXN0XCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkZ1cmlhXCIsIGRhdGFBdHRyOiBcImZ1cmlhXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkF1cm9yYVwiLCBkYXRhQXR0cjogXCJhdXJvcmFcIiB9LFxuICAgICAgICB7IHRlYW06IFwiTHlubiBWaXNpb25cIiwgZGF0YUF0dHI6IFwibHlublZpc2lvblwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJNSUJSXCIsIGRhdGFBdHRyOiBcIk1JQlJcIiB9LFxuICAgICAgICB7IHRlYW06IFwiTmF0dXMgVmluY2VyZVwiLCBkYXRhQXR0cjogXCJuYXR1c1ZpbmNlcmVcIiB9LFxuICAgICAgICB7IHRlYW06IFwiTlJHXCIsIGRhdGFBdHRyOiBcIk5SR1wiIH0sXG4gICAgICAgIHsgdGVhbTogXCJQYWlOXCIsIGRhdGFBdHRyOiBcIlBhaU5cIiB9LFxuICAgICAgICB7IHRlYW06IFwiRzJcIiwgZGF0YUF0dHI6IFwiRzJcIiB9LFxuICAgICAgICB7IHRlYW06IFwiQ2hpbmdnaXMgV2FycmlvcnNcIiwgZGF0YUF0dHI6IFwiY2hpbmdnaXNXYXJyaW9yc1wiIH0sXG4gICAgICAgIHsgdGVhbTogXCJNODBcIiwgZGF0YUF0dHI6IFwiTTgwXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkxpcXVpZFwiLCBkYXRhQXR0cjogXCJsaXF1aWRcIiB9LFxuICAgICAgICB7IHRlYW06IFwiTmVtaWdhXCIsIGRhdGFBdHRyOiBcIm5lbWlnYVwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJJbXBlcmlhbFwiLCBkYXRhQXR0cjogXCJpbXBlcmlhbFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJGbHV4b1wiLCBkYXRhQXR0cjogXCJmbHV4b1wiIH0sXG4gICAgICAgIHsgdGVhbTogXCJNZXRpenBvcnRcIiwgZGF0YUF0dHI6IFwibWV0aXpwb3J0XCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk9HXCIsIGRhdGFBdHRyOiBcIk9HXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkJlc3RpYVwiLCBkYXRhQXR0cjogXCJiZXN0aWFcIiB9LFxuICAgICAgICB7IHRlYW06IFwiVHlsb29cIiwgZGF0YUF0dHI6IFwidHlsb29cIiB9XG4gICAgXTtcblxuICAgIGxldCBiaWdMb3NlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ0xvc2VcIilcbiAgICBsZXQgYmlnV2luID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ1dpblwiKVxuXG4gICAgbGV0IHRlYW1zV2luID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidGVhbXNXaW5cIikpID8/IFtdXG5cbiAgICBjb25zdCBzdGFnZXNSZXN1bHQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRlZmF1dFZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgdGVhbXNCZXQ6W1xuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJDb21wbGV4aXR5XCIsIGRhdGFBdHRyOiBcImNvbXBsZXhpdHlcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJGYWxjb25zXCIsIGRhdGFBdHRyOiBcImZhbGNvbnNcIiwgb3V0Y29tZTogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIlZpdGFsaXR5XCIsIGRhdGFBdHRyOiBcInZpdGFsaXR5XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiSGVyb2ljXCIsIGRhdGFBdHRyOiBcImhlcm9pY1wiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkZhemVcIiwgZGF0YUF0dHI6IFwiZmF6ZVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIlNwaXJpdFwiLCBkYXRhQXR0cjogXCJzcGlyaXRcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJCOFwiLCBkYXRhQXR0cjogXCJCOFwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYmlnV2luOiB7IHRlYW06IFwiUGFpTlwiLCBkYXRhQXR0cjogXCJQYWlOXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgIGJpZ0xvc2U6IHsgdGVhbTogXCJOUkdcIiwgZGF0YUF0dHI6IFwiTlJHXCIsIG91dGNvbWU6IHRydWUgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkZWZhdXRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlYW1zQmV0OltcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiQ29tcGxleGl0eVwiLCBkYXRhQXR0cjogXCJjb21wbGV4aXR5XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiRmFsY29uc1wiLCBkYXRhQXR0cjogXCJmYWxjb25zXCIsIG91dGNvbWU6IHRydWV9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJWaXRhbGl0eVwiLCBkYXRhQXR0cjogXCJ2aXRhbGl0eVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkhlcm9pY1wiLCBkYXRhQXR0cjogXCJoZXJvaWNcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJGYXplXCIsIGRhdGFBdHRyOiBcImZhemVcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJTcGlyaXRcIiwgZGF0YUF0dHI6IFwic3Bpcml0XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiQjhcIiwgZGF0YUF0dHI6IFwiQjhcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJpZ1dpbjogeyB0ZWFtOiBcIkZhbGNvbnNcIiwgZGF0YUF0dHI6IFwiZmFsY29uc1wiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICBiaWdMb3NlOiB7IHRlYW06IFwiTlJHXCIsIGRhdGFBdHRyOiBcIk5SR1wiLCBvdXRjb21lOiB0cnVlIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGVmYXV0VmFsdWU6IHRydWUsXG4gICAgICAgICAgICB0ZWFtc0JldDpbXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkNvbXBsZXhpdHlcIiwgZGF0YUF0dHI6IFwiY29tcGxleGl0eVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkZhbGNvbnNcIiwgZGF0YUF0dHI6IFwiZmFsY29uc1wiLCBvdXRjb21lOiB0cnVlfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiVml0YWxpdHlcIiwgZGF0YUF0dHI6IFwidml0YWxpdHlcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJIZXJvaWNcIiwgZGF0YUF0dHI6IFwiaGVyb2ljXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiRmF6ZVwiLCBkYXRhQXR0cjogXCJmYXplXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiU3Bpcml0XCIsIGRhdGFBdHRyOiBcInNwaXJpdFwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkI4XCIsIGRhdGFBdHRyOiBcIkI4XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBiaWdXaW46IHsgdGVhbTogXCJQYWlOXCIsIGRhdGFBdHRyOiBcIlBhaU5cIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgYmlnTG9zZTogeyB0ZWFtOiBcIk5SR1wiLCBkYXRhQXR0cjogXCJOUkdcIiwgb3V0Y29tZTogdHJ1ZSB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRlZmF1dFZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgdGVhbXNCZXQ6W1xuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJDb21wbGV4aXR5XCIsIGRhdGFBdHRyOiBcImNvbXBsZXhpdHlcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJGYWxjb25zXCIsIGRhdGFBdHRyOiBcImZhbGNvbnNcIiwgb3V0Y29tZTogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIlZpdGFsaXR5XCIsIGRhdGFBdHRyOiBcInZpdGFsaXR5XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiSGVyb2ljXCIsIGRhdGFBdHRyOiBcImhlcm9pY1wiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkZhemVcIiwgZGF0YUF0dHI6IFwiZmF6ZVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIlNwaXJpdFwiLCBkYXRhQXR0cjogXCJzcGlyaXRcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJCOFwiLCBkYXRhQXR0cjogXCJCOFwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYmlnV2luOiB7IHRlYW06IFwiUGFpTlwiLCBkYXRhQXR0cjogXCJQYWlOXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgIGJpZ0xvc2U6IHsgdGVhbTogXCJOUkdcIiwgZGF0YUF0dHI6IFwiTlJHXCIsIG91dGNvbWU6IHRydWUgfVxuICAgICAgICB9XG5cbiAgICBdXG5cbiAgICBsZXQgcXVvdGVyRmluYWxzRGF0YSA9IFsuLi5zdGFnZXNSZXN1bHRbMl0udGVhbXNCZXQsIHN0YWdlc1Jlc3VsdFsyXS5iaWdXaW4gXVxuXG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG5cbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSA/PyBcImVuXCJcblxuICAgIGlmICh1a0xlbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IHRydWVcblxuICAgIGxldCBvdGhlcnNBcnJheSA9IFtdXG4gICAgbGV0IGluZGV4Q2FyZCA9IGZhbHNlXG5cbiAgICAvLyBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIGxldCB1c2VySWQgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykpID8/IDc3Nzc3Nzc5O1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIC8vIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclRlYW1CbG9ja3MocG9wdXBBdHRyLCB0ZWFtcykge1xuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwPVwiJHtwb3B1cEF0dHJ9XCJdYCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBvcHVwKVxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fcG9wdXAtc2Nyb2xsJyk7XG5cbiAgICAgICAgaWYgKCFjb250YWluZXIpIHJldHVybjtcblxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgdGVhbXMuZm9yRWFjaCgoeyBkYXRhQXR0ciB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZWFtQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRlYW1CbG9jay5jbGFzc05hbWUgPSAncGxheW9mZl9fY2hvb3NlLXRlYW0gX29wZW4nOyAvLyDQvNC+0LbQtdGIINC00LjQvdCw0LzRltGH0L3QviDQt9C80ZbQvdGO0LLQsNGC0Lgg0L3QsCBfc2VsZWN0ZWRcblxuICAgICAgICAgICAgdGVhbUJsb2NrLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5b2ZmX19jaG9vc2UtdGVhbS1pY29uXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheW9mZl9fY2hvb3NlLXRlYW0tdGV4dFwiIGRhdGEtdHJhbnNsYXRlPVwiJHtkYXRhQXR0cn1cIiBkYXRhLXRlYW09XCIke2RhdGFBdHRyfVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheW9mZl9fY2hvb3NlLXRlYW0tYnRuXCI+PC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZWFtQmxvY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgdHJhbnNsYXRlKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZW5kUHJlZGljdCgpe1xuICAgICAgICBpZihjdXJyZW50U3RhZ2UgPD0gMil7XG4gICAgICAgICAgICBjb25zdCBvdGhlclRlYW1zID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidGVhbXNXaW5cIikpO1xuICAgICAgICAgICAgY29uc3QgYmlnV2luID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnV2luXCIpKTtcbiAgICAgICAgICAgIGNvbnN0IGJpZ0xvc2UgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdMb3NlXCIpKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3RoZXJUZWFtcywgYmlnV2luLCBiaWdMb3NlKTtcblxuXG4gICAgICAgICAgICBjb25zdCBwcmVkaWN0Qm9keSA9IHtcbiAgICAgICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgICAgICBiZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdGVhbXNCZXQ6IFsuLi5vdGhlclRlYW1zXSxcbiAgICAgICAgICAgICAgICAgICAgYmlnV2lubmVyOiB7Li4uYmlnV2lufSxcbiAgICAgICAgICAgICAgICAgICAgYmlnTG9zZXI6IHsuLi5iaWdMb3NlfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcXVlc3QoYC9iZXQvc3RhZ2UvJHtjdXJyZW50U3RhZ2UgKyAxfWAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcmVkaWN0Qm9keSksXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcmVkaWN0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJlZGljdEJvZHkpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRQcmVkaWN0KCkge1xuICAgICAgICBnZXRVc2VyUHJlZGljdCgpLnRoZW4ocHJlZGljdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGFnZUJldCA9IHByZWRpY3Q/Lltgc3RhZ2Uke2N1cnJlbnRTdGFnZSArIDF9QmV0YF07XG5cbiAgICAgICAgICAgIGlmICghc3RhZ2VCZXQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE5vIGJldHMgZm9yIHN0YWdlICR7Y3VycmVudFN0YWdlICsgMX1gKTtcbiAgICAgICAgICAgICAgICBwcmVkaWN0b3JDaGVja0luLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YWdlT3RoZXJzID0gc3RhZ2VBY3RpdmUucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fd3JhcFwiKSxcbiAgICAgICAgICAgICAgICBzdGFnZU90aGVyQ2FyZHMgPSBzdGFnZU90aGVycy5xdWVyeVNlbGVjdG9yQWxsKFwiLnN0YWdlX19jYXJkXCIpLFxuICAgICAgICAgICAgICAgIHN0YWdlV2luQ2FyZCA9IHN0YWdlQWN0aXZlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJpZy1zdGFnZT1cImJpZ1dpblwiXWApLFxuICAgICAgICAgICAgICAgIHN0YWdlV2luQ2FyZFRlYW0gPSBzdGFnZVdpbkNhcmQucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fY2FyZC10ZXh0XCIpLFxuICAgICAgICAgICAgICAgIHN0YWdlTG9zZUNhcmQgPSBzdGFnZUFjdGl2ZS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1iaWctc3RhZ2U9XCJiaWdMb3NlXCJdYCksXG4gICAgICAgICAgICAgICAgc3RhZ2VMb3NlQ2FyZFRlYW0gPSBzdGFnZUxvc2VDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX2NhcmQtdGV4dFwiKSxcbiAgICAgICAgICAgICAgICBwcmVkaWN0T3RoZXJUZWFtcyA9IHN0YWdlQmV0LnRlYW1zQmV0LFxuICAgICAgICAgICAgICAgIHByZWRpY3RXaW5uZXIgPSBzdGFnZUJldC5iaWdXaW5uZXIsXG4gICAgICAgICAgICAgICAgcHJlZGljdExvc2VyID0gc3RhZ2VCZXQuYmlnTG9zZXI7XG5cbiAgICAgICAgICAgIHByZWRpY3RvckNoZWNrSW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidGVhbXNXaW5cIiwgSlNPTi5zdHJpbmdpZnkocHJlZGljdE90aGVyVGVhbXMpKTtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdXaW5cIiwgSlNPTi5zdHJpbmdpZnkocHJlZGljdFdpbm5lcikpO1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ0xvc2VcIiwgSlNPTi5zdHJpbmdpZnkocHJlZGljdExvc2VyKSk7XG4gICAgICAgICAgICB0ZWFtc1dpbiA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRlYW1zV2luXCIpKTtcbiAgICAgICAgICAgIGJpZ1dpbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdXaW5cIik7XG4gICAgICAgICAgICBiaWdMb3NlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ0xvc2VcIik7XG5cblxuICAgICAgICAgICAgc3RhZ2VXaW5DYXJkLmNsYXNzTGlzdC5hZGQoXCJfc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBzdGFnZVdpbkNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGVuXCIpO1xuICAgICAgICAgICAgc3RhZ2VMb3NlQ2FyZC5jbGFzc0xpc3QuYWRkKFwiX3NlbGVjdGVkXCIpO1xuICAgICAgICAgICAgc3RhZ2VMb3NlQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX29wZW5cIik7XG5cbiAgICAgICAgICAgIHN0YWdlV2luQ2FyZFRlYW0udGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkocHJlZGljdFdpbm5lci5kYXRhQXR0cik7XG4gICAgICAgICAgICBzdGFnZUxvc2VDYXJkVGVhbS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShwcmVkaWN0TG9zZXIuZGF0YUF0dHIpO1xuXG4gICAgICAgICAgICBzdGFnZU90aGVyQ2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRUZWFtTmFtZSA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fY2FyZC10ZXh0XCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlYW0gPSB0ZWFtc1dpbltpXTtcbiAgICAgICAgICAgICAgICAvLyBpZiAoIXRlYW0pIHJldHVybjsgLy8g0Y/QutGJ0L4g0YDQsNC/0YLQvtC8INC80LXQvdGI0LUg0LrQvtC80LDQvdC0INGDINGB0YLQsNCy0YbRllxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFBdHRyID0gdGVhbS5kYXRhQXR0cjtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFBdHRyKTtcblxuXG5cbiAgICAgICAgICAgICAgICBjYXJkVGVhbU5hbWUuc2V0QXR0cmlidXRlKFwiZGF0YS10ZWFtXCIsIGRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICBjYXJkVGVhbU5hbWUudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkoZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGVuXCIpO1xuICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcIl9zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZWFtKVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNhcmQpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkZWQgdXNlciBwcmVkaWN0aW9uOlwiLCBzdGFnZUJldCk7XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgdXNlciBwcmVkaWN0aW9uXCIsIGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQbGF5b2ZmKHF1YXJ0ZXJGaW5hbHMsIHNlbWlGaW5hbHMsIGZpbmFscywgd2lubmVyKXtcblxuXG5cbiAgICAgICAgY29uc3QgcXVhcnRlckZpbmFsc0NhcmRzID0gcXVhcnRlckZpbmFscy5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtXCIpO1xuICAgICAgICBjb25zdCBzZW1pRmluYWxzQ2FyZHMgPSBzZW1pRmluYWxzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheW9mZl9fY2hvb3NlLXRlYW1cIik7XG4gICAgICAgIGNvbnN0IEZpbmFsc0NhcmRzID0gZmluYWxzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheW9mZl9fY2hvb3NlLXRlYW1cIik7XG4gICAgICAgIGNvbnN0IHdpbm5lckNhcmRzID0gd2lubmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheW9mZl9fY2hvb3NlLXRlYW1cIik7XG5cbiAgICAgICAgY29uc29sZS5sb2coc2VtaUZpbmFsc0NhcmRzKTtcblxuICAgICAgICBxdWFydGVyRmluYWxzQ2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0ZWFtQ2FyZE5hbWUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fY2hvb3NlLXRlYW0tdGV4dFwiKTtcblxuICAgICAgICAgICAgY29uc3QgdGVhbSA9IHF1b3RlckZpbmFsc0RhdGFbaV07XG5cbiAgICAgICAgICAgIHRlYW1DYXJkTmFtZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRlYW1cIiwgdGVhbS5kYXRhQXR0cik7XG4gICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZShcImRhdGEtdGVhbVwiLCB0ZWFtLmRhdGFBdHRyKTtcbiAgICAgICAgICAgIHRlYW1DYXJkTmFtZS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleSh0ZWFtLmRhdGFBdHRyKTtcblxuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiX2RvbmVcIik7XG5cblxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2VtaUZpbmFsc0NhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+IHtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9kb25lXCIsIFwiX3NlbGVjdGVkXCIpO1xuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiX29wZW5cIik7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyUHJlZGljdCgpIHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdCgnL3N0YWdlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5maW5kKGl0ZW0gPT4gaXRlbS51c2VyaWQgPT09IHVzZXJJZCkpO1xuICAgICAgICByZXR1cm4gcmVzLmZpbmQoaXRlbSA9PiBpdGVtLnVzZXJpZCA9PT0gdXNlcklkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBjb25zdCBsb2FkVGltZSA9IDIwMDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgY29uc3QgaGlkZUVsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG5cbiAgICAgICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyh1bmF1dGhNc2dzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICB9LCBsb2FkVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWspIHtcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzLyR7d2Vla31gKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgdXNlcklkLCB3ZWVrKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2Vlaykge1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzTGVuZ3RoID0gIXVzZXJJZCB8fCBpc1RvcEN1cnJlbnRVc2VyICA/IDEzIDogMTA7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlckRhdGEucG9pbnRzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U3RhdGVQaWNrU3RhZ2Uoc3RhZ2Upe1xuICAgICAgICBjb25zdCBzdGFnZUNhcmRzV3JhcCA9IHN0YWdlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNhcmRzLXdyYXA9XCJzdGFnZVwiXScpXG4gICAgICAgIGlmKCFzdGFnZUNhcmRzV3JhcCkgcmV0dXJuXG4gICAgICAgIGNvbnN0IHN0YWdlQ2FyZHMgPSBzdGFnZUNhcmRzV3JhcC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhZ2VfX2NhcmQnKTtcbiAgICAgICAgY29uc3Qgc3RhZ2VDYXJkV2luID0gc3RhZ2UucXVlcnlTZWxlY3RvcignW2RhdGEtYmlnLXN0YWdlPVwiYmlnV2luXCJdJyk7XG4gICAgICAgIGNvbnN0IHN0YWdlQ2FyZExvc2UgPSBzdGFnZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1iaWctc3RhZ2U9XCJiaWdMb3NlXCJdJyk7XG4gICAgICAgIGNvbnN0IHN0YWdlQ2FyZFdpbk5hbWUgPSBzdGFnZUNhcmRXaW4ucXVlcnlTZWxlY3RvcignLnN0YWdlX19jYXJkLXRleHQnKTtcbiAgICAgICAgY29uc3Qgc3RhZ2VDYXJkTG9zZU5hbWUgPSBzdGFnZUNhcmRMb3NlLnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZV9fY2FyZC10ZXh0Jyk7XG5cbiAgICAgICAgY29uc3Qgc3RhZ2VOdW0gPSBOdW1iZXIoc3RhZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YWdlJykpO1xuICAgICAgICBsZXQgc3RhZ2VTdGF0ZSA9IHN0YWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1waWNrLXN0YWdlJyk7XG4gICAgICAgIGNvbnN0IHN0YWdlUmVzdWx0RGF0YSA9IHN0YWdlc1Jlc3VsdFtzdGFnZU51bSAtMV1cblxuICAgICAgICBsZXQgb3RoZXJzVGVhbXMgPSBzdGFnZVJlc3VsdERhdGEudGVhbXNCZXRcbiAgICAgICAgbGV0IGJpZ1dpblRlYW0gPSBzdGFnZVJlc3VsdERhdGEuYmlnV2luXG4gICAgICAgIGxldCBiaWdMb3NlVGVhbSA9IHN0YWdlUmVzdWx0RGF0YS5iaWdMb3NlXG5cbiAgICAgICAgc3RhZ2VDYXJkV2luLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJywgJ19zZWxlY3RlZCcsICdfbG9zZScsICdfd2luJyk7XG4gICAgICAgIHN0YWdlQ2FyZExvc2UuY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nLCAnX3NlbGVjdGVkJywgJ19sb3NlJywgJ193aW4nKTtcblxuICAgICAgICBpZihzdGFnZVN0YXRlID09PSBcImRvbmVcIil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGFnZUNhcmRzKVxuICAgICAgICAgICAgc3RhZ2VDYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVhbU5hbWUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZV9fY2FyZC10ZXh0Jyk7XG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicsICdfc2VsZWN0ZWQnLCAnX2xvc2UnLCAnX3dpbicsIFwiX2RvbmVcIik7XG4gICAgICAgICAgICAgICAgaWYoc3RhZ2VSZXN1bHREYXRhLmRlZmF1dFZhbHVlKSBjYXJkLmNsYXNzTGlzdC5hZGQoJ19kb25lJyk7XG5cbiAgICAgICAgICAgICAgICB0ZWFtTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScsIG90aGVyc1RlYW1zW2ldLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICB0ZWFtTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgb3RoZXJzVGVhbXNbaV0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdGFnZUNhcmRXaW5OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJywgYmlnV2luVGVhbS5kYXRhQXR0cik7XG4gICAgICAgICAgICBzdGFnZUNhcmRXaW5OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBiaWdXaW5UZWFtLmRhdGFBdHRyKTtcbiAgICAgICAgICAgIHN0YWdlQ2FyZExvc2VOYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJywgYmlnTG9zZVRlYW0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgc3RhZ2VDYXJkTG9zZU5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGJpZ0xvc2VUZWFtLmRhdGFBdHRyKTtcblxuXG4gICAgICAgICAgICBpZihzdGFnZVJlc3VsdERhdGEuZGVmYXV0VmFsdWUpe1xuICAgICAgICAgICAgICAgIHN0YWdlQ2FyZFdpbi5jbGFzc0xpc3QuYWRkKCdfZG9uZScpO1xuICAgICAgICAgICAgICAgIHN0YWdlQ2FyZExvc2UuY2xhc3NMaXN0LmFkZCgnX2RvbmUnKTtcbiAgICAgICAgICAgICAgICBzdGFnZUNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+e1xuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfZG9uZVwiKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhiaWdXaW5UZWFtLm91dGNvbWUpXG4gICAgICAgICAgICAgICAgc3RhZ2VDYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGEgPSBvdGhlcnNUZWFtc1tpXVxuICAgICAgICAgICAgICAgICAgICBpZihjdXJyZW50RGF0YS5vdXRjb21lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnX3dpbicpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnX2xvc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgaWYoYmlnV2luVGVhbS5vdXRjb21lKXtcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VDYXJkV2luLmNsYXNzTGlzdC5hZGQoJ193aW4nKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RhZ2VDYXJkV2luKVxuICAgICAgICAgICAgICAgICAgICBzdGFnZUNhcmRXaW4uY2xhc3NMaXN0LmFkZCgnX2xvc2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoYmlnTG9zZVRlYW0ub3V0Y29tZSl7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlQ2FyZExvc2UuY2xhc3NMaXN0LmFkZCgnX3dpbicpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBzdGFnZUNhcmRMb3NlLmNsYXNzTGlzdC5hZGQoJ19sb3NlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICB9XG4gICAgICAgIGlmKHN0YWdlU3RhdGUgPT09IFwiYWN0aXZlXCIpe1xuICAgICAgICAgICAgc3RhZ2VDYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVhbU5hbWUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZV9fY2FyZC10ZXh0Jyk7XG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicsICdfc2VsZWN0ZWQnLCAnX2xvc2UnLCAnX3dpbicsIFwiX2RvbmVcIik7XG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdfb3BlbicpO1xuXG4gICAgICAgICAgICAgICAgdGVhbU5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIFwicG9wdXBMb3NlVGl0bGVcIiApO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc3RhZ2VDYXJkV2luLmNsYXNzTGlzdC5hZGQoXCJfb3BlblwiKVxuICAgICAgICAgICAgc3RhZ2VDYXJkTG9zZS5jbGFzc0xpc3QuYWRkKFwiX29wZW5cIilcblxuICAgICAgICAgICAgc3RhZ2VDYXJkV2luTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgXCJwb3B1cExvc2VUaXRsZVwiKTtcbiAgICAgICAgICAgIHN0YWdlQ2FyZExvc2VOYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBcInBvcHVwTG9zZVRpdGxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRyYW5zbGF0ZSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3BlblBvcHVwKGRhdGFBdHRyLCBjb250YWluZXIpe1xuICAgICAgICBjb25zdCBjdXJyZW50UG9wdXAgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCIke2RhdGFBdHRyfVwiXWApO1xuXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LW9wYWNpdHknKTtcblxuICAgICAgICBjdXJyZW50UG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlUG9wdXAoY29udGFpbmVyKXtcbiAgICAgICAgY29uc3QgcG9wdXBzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19wb3B1cCcpO1xuICAgICAgICBjb25zdCBhbGxQb3B1cHNUZWFtVGFicyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtXCIpO1xuXG4gICAgICAgIGFsbFBvcHVwc1RlYW1UYWJzLmZvckVhY2goKHRlYW0pID0+IHtcbiAgICAgICAgICAgIHRlYW0uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB0ZWFtLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICB0ZWFtLmNsYXNzTGlzdC5hZGQoJ19vcGVuJyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcG9wdXBzLmZvckVhY2gocG9wdXAgPT4ge1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICB9KVxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS1vcGFjaXR5Jyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcblxuICAgICAgICBjb25zb2xlLmxvZyh0ZWFtc1dpbilcblxuICAgICAgICBpZih0ZWFtc1dpbiAmJiB0ZWFtc1dpbi5sZW5ndGggPT09IDYgJiYgYmlnTG9zZSAmJiBiaWdXaW4pe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcmVkaWN0XCIpXG4gICAgICAgICAgICBtYWtlUHJlZGljdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiX2xvY2tcIilcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSwgd2Vlaykge1xuICAgICAgICBpZiAocGxhY2UgPD0gMykgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LSR7cGxhY2V9YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNC0xMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTExLTI1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMjYtNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS01MS03NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS03Ni0xMDBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTAxLTEyNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMjYtMTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE1MS0xNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTc2LTIwMGA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXh0cmFjdFRlYW1EYXRhKHBhaXJFbGVtZW50LCB0ZWFtU2VsZWN0b3IsIGdyb3VwQXR0cikge1xuICAgICAgICBjb25zdCB0ZWFtcyA9IHBhaXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGVhbVNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGVhbXMpLm1hcCh0ZWFtID0+ICh7XG4gICAgICAgICAgICBkYXRhQXR0cjogdGVhbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpLFxuICAgICAgICAgICAgcGFpck51bTogTnVtYmVyKHRlYW0uY2xvc2VzdChgWyR7Z3JvdXBBdHRyfV1gKT8uZ2V0QXR0cmlidXRlKGdyb3VwQXR0cikpXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUZWFtc0Zyb21QYWlyKHBhaXJzLCB0ZWFtc0FycmF5KSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbLi4udGVhbXNBcnJheV07XG4gICAgICAgIHBhaXJzLmZvckVhY2gocGFpciA9PiB7XG4gICAgICAgICAgICBjb25zdCBleHRyYWN0ZWQgPSBleHRyYWN0VGVhbURhdGEocGFpciwgJy5wbGF5b2ZmX19jaG9vc2UtdGVhbVtkYXRhLXRlYW1dJywgJ2RhdGEtY2hvb3NlLXNlbWlmaW5hbCcpO1xuICAgICAgICAgICAgcmVzdWx0ID0gWy4uLnJlc3VsdCwgLi4uZXh0cmFjdGVkXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyUGxheW9mZlBvcHVwKHBvcHVwRWxlbWVudCwgdGVhbXNQbGF5b2ZmLCBkYXRhTmFtZSwgdGVtcG9yYXJ5RGF0YU5hbWUpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19wb3B1cC1zY3JvbGwnKTtcbiAgICAgICAgaWYgKCFzY3JvbGxDb250YWluZXIpIHJldHVybjtcblxuICAgICAgICBjb25zdCBzYXZlZERhdGEgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oZGF0YU5hbWUpKSB8fCBudWxsO1xuXG4gICAgICAgIGlmICghc2F2ZWREYXRhKSB7XG4gICAgICAgICAgICBwb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmX19wb3B1cC1idG5cIikuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjcm9sbENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICB0ZWFtc1BsYXlvZmYuZm9yRWFjaCh0ZWFtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlYW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRlYW1EaXYuY2xhc3NOYW1lID0gJ3BsYXlvZmZfX2Nob29zZS10ZWFtIF9vcGVuJztcbiAgICAgICAgICAgIHRlYW1EaXYuZGF0YXNldC50ZWFtID0gdGVhbS5kYXRhQXR0cjtcblxuICAgICAgICAgICAgY29uc3QgaWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaWNvbkRpdi5jbGFzc05hbWUgPSAncGxheW9mZl9fY2hvb3NlLXRlYW0taWNvbic7XG5cbiAgICAgICAgICAgIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRleHREaXYuY2xhc3NOYW1lID0gJ3BsYXlvZmZfX2Nob29zZS10ZWFtLXRleHQnO1xuICAgICAgICAgICAgdGV4dERpdi5kYXRhc2V0LnRlYW0gPSB0ZWFtLmRhdGFBdHRyO1xuICAgICAgICAgICAgdGV4dERpdi50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleSh0ZWFtLmRhdGFBdHRyKTtcblxuICAgICAgICAgICAgY29uc3QgYnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBidG5EaXYuY2xhc3NOYW1lID0gJ3BsYXlvZmZfX2Nob29zZS10ZWFtLWJ0bic7XG5cbiAgICAgICAgICAgIHRlYW1EaXYuYXBwZW5kKGljb25EaXYsIHRleHREaXYsIGJ0bkRpdik7XG4gICAgICAgICAgICBzY3JvbGxDb250YWluZXIuYXBwZW5kQ2hpbGQodGVhbURpdik7XG5cbiAgICAgICAgICAgIGlmIChzYXZlZERhdGEgJiYgc2F2ZWREYXRhLmRhdGFBdHRyID09PSB0ZWFtLmRhdGFBdHRyKSB7XG4gICAgICAgICAgICAgICAgdGVhbURpdi5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB0ZWFtRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHRlYW1UYWJzID0gc2Nyb2xsQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbScpO1xuXG4gICAgICAgIHRlYW1UYWJzLmZvckVhY2goKHRlYW1UYWIsIGkpID0+IHtcbiAgICAgICAgICAgIHRlYW1UYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVhbU5hbWUgPSB0ZWFtVGFiLmdldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUZWFtID0gdGVhbXNQbGF5b2ZmLmZpbmQodGVhbSA9PiB0ZWFtLmRhdGFBdHRyLnRvTG93ZXJDYXNlKCkgPT09IHRlYW1OYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgIHBvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX3BvcHVwLWJ0blwiKS5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odGVtcG9yYXJ5RGF0YU5hbWUsIEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkVGVhbSkpO1xuXG4gICAgICAgICAgICAgICAgdGVhbVRhYnMuZm9yRWFjaCgoaXRlbSwgaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ19zZWxlY3RlZCcsIGkgPT09IGopO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ19vcGVuJywgaSAhPT0gaik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICByZXF1ZXN0KCcvc3RhZ2UnKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyU3RhZ2VzID0gcmVzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKVxuXG4gICAgICAgICAgICAgICAgaWYodXNlclN0YWdlcykge1xuICAgICAgICAgICAgICAgICAgICBzdGFnZXNSZXN1bHQuZm9yRWFjaCgoc3RhZ2UsIGkpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXNlclN0YWdlc1tgc3RhZ2Uke2kgKyAxfUJldGBdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFnZXNSZXN1bHRbaV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1zQmV0OiBbLi4udXNlclN0YWdlc1tgc3RhZ2Uke2kgKyAxfUJldGBdLnRlYW1zQmV0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luOiB1c2VyU3RhZ2VzW2BzdGFnZSR7aSArIDF9QmV0YF0uYmlnV2lubmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdMb3NlOiB1c2VyU3RhZ2VzW2BzdGFnZSR7aSArIDF9QmV0YF0uYmlnTG9zZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgcXVvdGVyRmluYWxzRGF0YSA9IFsuLi5zdGFnZXNSZXN1bHRbMl0udGVhbXNCZXQsIHN0YWdlc1Jlc3VsdFsyXS5iaWdXaW4gXTtcblxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRTdGFnZSA9PT0gMyl7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocXVhcnRlckZpbmFscylcblxuICAgICAgICAgICAgICAgICAgICBzZXRQbGF5b2ZmKHF1YXJ0ZXJGaW5hbHMsIHNlbWlGaW5hbHMsIGZpbmFscywgd2lubmVyKVxuXG4gICAgICAgICAgICAgICAgICAgIHNlbWlGaW5hbHNUZWFtcyA9IFsuLi5hZGRUZWFtc0Zyb21QYWlyKHF1YXJ0ZXJGaW5hbHNQYWlycywgW10pXTtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxzVGVhbXMgPSBbLi4uYWRkVGVhbXNGcm9tUGFpcihzZW1pRmluYWxzUGFpcnMsIFtdKV07XG4gICAgICAgICAgICAgICAgICAgIHdpbm5lcnMgPSBbLi4uYWRkVGVhbXNGcm9tUGFpcih3aW5uZXJQYWlycywgW10pXTtcblxuXG4gICAgICAgICAgICAgICAgICAgIHNlbWlGaW5hbHNQYWlyc0J0bnMuZm9yRWFjaCgoYnRuLCBpKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1QcmVkaWN0QnRuID0gcGxheW9mZlNlbWlGaW5hbFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fcG9wdXAtYnRuXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0blRlYW1OYW1lID0gYnRuLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbS10ZXh0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wb3JhcnlEYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgc2VtaUZpbmFsc1RlbXBvcmFyeSR7aSArIDF9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGBzZW1pRmluYWxzJHtpICsgMX1gLCB0ZW1wb3JhcnlEYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0bkN1cnJlbnREYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGBzZW1pRmluYWxzJHtpICsgMX1gKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbWlGaW5hbHNUZWFtcy5sZW5ndGggPCA0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUHJlZGljdEJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVByZWRpY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJ0bkN1cnJlbnREYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtdGVhbVwiLCBidG5DdXJyZW50RGF0YS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuVGVhbU5hbWUudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkoYnRuQ3VycmVudERhdGEuZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdfb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cChwb3B1cHNXcmFwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VtaUZpbmFsc1RlYW1zID0gWy4uLmFkZFRlYW1zRnJvbVBhaXIocXVhcnRlckZpbmFsc1BhaXJzLCBbXSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0blBhaXJOdW1iZXIgPSBOdW1iZXIoYnRuLmdldEF0dHJpYnV0ZShcImRhdGEtY2hvb3NlLXNlbWlmaW5hbFwiKSlcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZWRpY3RQYWlyRGF0YSA9IFtdXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZW1pRmluYWxzVGVhbXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VtaUZpbmFsc1RlYW1zLmZvckVhY2godGVhbSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGVhbS5wYWlyTnVtID09PSBidG5QYWlyTnVtYmVyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3RQYWlyRGF0YS5wdXNoKHRlYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZW1pRmluYWxzVGVhbXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyUGxheW9mZlBvcHVwKHBsYXlvZmZTZW1pRmluYWxQb3B1cCwgcHJlZGljdFBhaXJEYXRhLGBzZW1pRmluYWxzJHtpICsgMX1gLCBgc2VtaUZpbmFsc1RlbXBvcmFyeSR7aSArIDF9YClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cChcInBsYXlvZmZTZW1pRmluYWxcIiwgcG9wdXBzV3JhcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUHJlZGljdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcG9yYXJ5RGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYHNlbWlGaW5hbHNUZW1wb3Jhcnkke2kgKyAxfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGBzZW1pRmluYWxzJHtpICsgMX1gLCB0ZW1wb3JhcnlEYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5DdXJyZW50RGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgc2VtaUZpbmFscyR7aSArIDF9YCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ0bkN1cnJlbnREYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihidG5DdXJyZW50RGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS10ZWFtXCIsIGJ0bkN1cnJlbnREYXRhLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0blRlYW1OYW1lLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KGJ0bkN1cnJlbnREYXRhLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZW1pRmluYWxzVGVhbXMubGVuZ3RoIDwgNCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUHJlZGljdEJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QcmVkaWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cChwb3B1cHNXcmFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgZmluYWxzUGFpcnNCdG5zLmZvckVhY2goKGJ0biwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlybVByZWRpY3RCdG4gPSBwbGF5b2ZmRmluYWxQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX3BvcHVwLWJ0blwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5UZWFtTmFtZSA9IGJ0bi5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fY2hvb3NlLXRlYW0tdGV4dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcG9yYXJ5RGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYGZpbmFsc1RlbXBvcmFyeSR7aSArIDF9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGBmaW5hbHMke2kgKyAxfWAsIHRlbXBvcmFyeURhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnRuQ3VycmVudERhdGEgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYGZpbmFscyR7aSArIDF9YCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuQ3VycmVudERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtdGVhbVwiLCBidG5DdXJyZW50RGF0YS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuVGVhbU5hbWUudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkoYnRuQ3VycmVudERhdGEuZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdfb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKHBvcHVwc1dyYXApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbHNUZWFtcyA9IFsuLi5hZGRUZWFtc0Zyb21QYWlyKHNlbWlGaW5hbHNQYWlycywgW10pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidG5QYWlyTnVtYmVyID0gTnVtYmVyKGJ0bi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNob29zZS1maW5hbFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlybVByZWRpY3RCdG4gPSBwbGF5b2ZmRmluYWxQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX3BvcHVwLWJ0blwiKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbGlkUGFpck51bXMgPSBidG5QYWlyTnVtYmVyID09PSAxID8gWzEsIDJdIDogWzMsIDRdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlZGljdFBhaXJEYXRhID0gZmluYWxzVGVhbXMuZmlsdGVyKHRlYW0gPT4gdmFsaWRQYWlyTnVtcy5pbmNsdWRlcyh0ZWFtLnBhaXJOdW0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclBsYXlvZmZQb3B1cChwbGF5b2ZmRmluYWxQb3B1cCwgcHJlZGljdFBhaXJEYXRhLCBgZmluYWxzJHtpICsgMX1gLCBgZmluYWxzVGVtcG9yYXJ5JHtpICsgMX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXAoXCJwbGF5b2ZmRmluYWxcIiwgcG9wdXBzV3JhcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcG9yYXJ5RGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYGZpbmFsc1RlbXBvcmFyeSR7aSArIDF9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYGZpbmFscyR7aSArIDF9YCwgdGVtcG9yYXJ5RGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuQ3VycmVudERhdGEgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYGZpbmFscyR7aSArIDF9YCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG5DdXJyZW50RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtdGVhbVwiLCBidG5DdXJyZW50RGF0YS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5UZWFtTmFtZS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShidG5DdXJyZW50RGF0YS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUHJlZGljdEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uZmlybUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKHBvcHVwc1dyYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUHJlZGljdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uZmlybUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHdpbm5lckNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbm5lcnMgPSBbLi4uYWRkVGVhbXNGcm9tUGFpcih3aW5uZXJQYWlycywgW10pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1QcmVkaWN0QnRuID0gcGxheW9mZldpbm5lclBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fcG9wdXAtYnRuXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0blRlYW1OYW1lID0gd2lubmVyQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX2NhcmQtdGV4dFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyUGxheW9mZlBvcHVwKHBsYXlvZmZXaW5uZXJQb3B1cCwgd2lubmVycywgYHdpbm5lcmAsIGB3aW5uZXJUZW1wb3JhcnlgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cChcIndpbm5lclwiLCBwb3B1cHNXcmFwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlybUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcG9yYXJ5RGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYHdpbm5lclRlbXBvcmFyeWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYHdpbm5lcmAsIHRlbXBvcmFyeURhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuQ3VycmVudERhdGEgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYHdpbm5lcmApKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG5DdXJyZW50RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5uZXJDYXJkLmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5uZXJDYXJkLnNldEF0dHJpYnV0ZShcImRhdGEtdGVhbVwiLCBidG5DdXJyZW50RGF0YS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0blRlYW1OYW1lLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KGJ0bkN1cnJlbnREYXRhLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUHJlZGljdEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uZmlybUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAocG9wdXBzV3JhcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUHJlZGljdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uZmlybUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhZ2VzLmZvckVhY2goKHN0YWdlLCBpKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0YWdlID4gc3RhZ2VzLmxlbmd0aCAtIDEgPyBjdXJyZW50U3RhZ2UgPSBzdGFnZXMubGVuZ3RoIC0gMSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdGFnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScsIGkgPT09IGN1cnJlbnRTdGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlc1RhYnNbaV0uY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScsIGkgPT09IGN1cnJlbnRTdGFnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9wID0gc3RhZ2UucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fdG9wXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib3R0b20gPSBzdGFnZS5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19ib3R0b21cIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc3RhZ2UucXVlcnlTZWxlY3RvcihcIi50aW1lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheW9mZldyYXAgPSBzdGFnZS5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX3dyYXBwZXJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiBjdXJyZW50U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcD8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b20/LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheW9mZldyYXA/LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXI/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1waWNrLXN0YWdlXCIsIFwibG9ja1wiKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbT8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmV3JhcD8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lcj8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZihpID09PSBjdXJyZW50U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlLnNldEF0dHJpYnV0ZShcImRhdGEtcGljay1zdGFnZVwiLCBcImFjdGl2ZVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKGkgPCBjdXJyZW50U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlLnNldEF0dHJpYnV0ZShcImRhdGEtcGljay1zdGFnZVwiLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlLmNsYXNzTGlzdC5hZGQoXCJfZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlUGlja1N0YWdlKHN0YWdlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFByZWRpY3QoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YWdlc1RhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5fYWN0aXZlJykpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RhZ2VWYWx1ZSA9IHRhYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhZ2UtdGFiJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXN0YWdlPVwiJHt0YXJnZXRTdGFnZVZhbHVlfVwiXWApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFnZXMuZm9yRWFjaChzdGFnZSA9PiBzdGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2VzVGFicy5mb3JFYWNoKHQgPT4gdC5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U3RhZ2U/LmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoTnVtYmVyKHRhcmdldFN0YWdlVmFsdWUpIC0gMSAhPT0gY3VycmVudFN0YWdlICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmVuZGVyVGVhbUJsb2NrcygnYmlnV2luJywgdGVhbXMpO1xuICAgICAgICAgICAgICAgIHJlbmRlclRlYW1CbG9ja3MoJ2JpZ0xvc2UnLCB0ZWFtcyk7XG4gICAgICAgICAgICAgICAgcmVuZGVyVGVhbUJsb2NrcygnT3RoZXJzJywgdGVhbXMpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU3RhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zdGFnZV0uX2FjdGl2ZWApLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzQ2xvc2VCdG4gPSB0YXJnZXQuY2xvc2VzdCgnLnBsYXlvZmZfX3BvcHVwLWNsb3NlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1cCA9IHRhcmdldC5jbG9zZXN0KCcucGxheW9mZl9fcG9wdXAnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g0LvQvtCz0ZbQutCwINC00LvRjyDQv9C10YDRiNC40YUgM9GFINC10YLQsNC/0ZbQslxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YWdlIDw9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRDYXJkID0gdGFyZ2V0LmNsb3Nlc3QoJy5zdGFnZV9fY2FyZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRCaWdXaW4gPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtYmlnLXN0YWdlPVwiYmlnV2luXCJdJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEJpZ0xvc2UgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtYmlnLXN0YWdlPVwiYmlnTG9zZVwiXScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ1dpblBvcHVwID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXBvcHVwPVwiYmlnV2luXCJdJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZVBvcHVwID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXBvcHVwPVwiYmlnTG9zZVwiXScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE90aGVyc1BvcHVwID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXBvcHVwPVwiT3RoZXJzXCJdJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbSA9IHRhcmdldC5jbG9zZXN0KCcucGxheW9mZl9fY2hvb3NlLXRlYW0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcnNDYXJkID0gdGFyZ2V0LmNsb3Nlc3QoJy5zdGFnZV9fY2FyZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBvcHVwc1RlYW0gPSB0YXJnZXQuY2xvc2VzdChcIi5wbGF5b2ZmX19wb3B1cFwiKT8ucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZS10ZWFtJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2tlZFRlYW1OYW1lID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlYW1dJyk/LmdldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnV2luID0gYWN0aXZlU3RhZ2U/LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJpZy1zdGFnZT1cImJpZ1dpblwiXWApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ1dpblRlYW0gPSBhY3RpdmVCaWdXaW4/LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX2NhcmQtdGV4dFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdMb3NlID0gYWN0aXZlU3RhZ2U/LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJpZy1zdGFnZT1cImJpZ0xvc2VcIl1gKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdMb3NlVGVhbSA9IGFjdGl2ZUJpZ0xvc2U/LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX2NhcmQtdGV4dFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW5Qb3B1cHNUZWFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCJiaWdXaW5cIl1gKS5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fY2hvb3NlLXRlYW0tdGV4dCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VQb3B1cHNUZWFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCJiaWdMb3NlXCJdYCkucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZS10ZWFtLXRleHQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcnNQb3B1cHNUZWFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCJPdGhlcnNcIl1gKS5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fY2hvb3NlLXRlYW0tdGV4dCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1DaG9vc2VCdG4gPSB0YXJnZXQuY2xvc2VzdCgnLnBsYXlvZmZfX3BvcHVwLWJ0bicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyc0NvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3B1cD1cIk90aGVyc1wiXWApLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19wb3B1cC1idG4nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW5Db25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCJiaWdXaW5cIl1gKS5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fcG9wdXAtYnRuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZUNvbmZpcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3B1cD1cImJpZ0xvc2VcIl1gKS5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fcG9wdXAtYnRuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlT3RoZXJzID0gYWN0aXZlU3RhZ2UucXVlcnlTZWxlY3RvcihgW2RhdGEtY2FyZHMtd3JhcD1cInN0YWdlXCJdYCkucXVlcnlTZWxlY3RvckFsbCgnLnN0YWdlX19jYXJkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCy0ZbQtNC60YDQuNGC0YLRjyDQv9C+0L/QsNC/0YMg0L3QsCAzIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhcmRCaWdXaW4pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJiaWdXaW5UZW1wb3JhcnlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmlnV2luKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luQ29uZmlybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmlnV2luVGVtcG9yYXJ5XCIsIGJpZ1dpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdXaW5UZW1wb3JhcnlcIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW5Db25maXJtQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luQ29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luUG9wdXBzVGVhbS5mb3JFYWNoKCh0ZWFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1OYW1lID0gYWN0aXZlU3RhZ2UucXVlcnlTZWxlY3RvcihgW2RhdGEtYmlnLXN0YWdlPVwiYmlnTG9zZVwiXWApLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX2NhcmQtdGV4dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbVdyYXAgPSB0ZWFtLmNsb3Nlc3QoXCIucGxheW9mZl9fY2hvb3NlLXRlYW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZFRlYW0gPSB0ZWFtTmFtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpID09PSB0ZWFtLmdldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWRCaWdXaW4gPSBKU09OLnBhcnNlKGJpZ1dpbik/LmRhdGFBdHRyID09PSB0ZWFtLmdldEF0dHJpYnV0ZShcImRhdGEtdGVhbVwiKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU2VsZWN0ZWRCaWdXaW4pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NlbGVjdGVkVGVhbSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwKFwiYmlnV2luXCIsIHBvcHVwc1dyYXApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCy0ZbQtNC60YDQuNGC0YLRjyDQv9C+0L/QsNC/0YMg0L3QsCAwIDNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNhcmRCaWdMb3NlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYmlnTG9zZVRlbXBvcmFyeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiaWdMb3NlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZUNvbmZpcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ0xvc2VUZW1wb3JhcnlcIiwgYmlnTG9zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdMb3NlVGVtcG9yYXJ5XCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZUNvbmZpcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdMb3NlQ29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VQb3B1cHNUZWFtLmZvckVhY2goKHRlYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbU5hbWUgPSBhY3RpdmVTdGFnZS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1iaWctc3RhZ2U9XCJiaWdXaW5cIl1gKS5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19jYXJkLXRleHRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1XcmFwID0gdGVhbS5jbG9zZXN0KFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWRUZWFtID0gdGVhbU5hbWUuZ2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nKSA9PT0gdGVhbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkQmlnTG9zZSA9IEpTT04ucGFyc2UoYmlnTG9zZSk/LmRhdGFBdHRyID09PSB0ZWFtLmdldEF0dHJpYnV0ZShcImRhdGEtdGVhbVwiKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU2VsZWN0ZWRCaWdMb3NlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNTZWxlY3RlZFRlYW0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwKFwiYmlnTG9zZVwiLCBwb3B1cHNXcmFwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQstC40LHRltGAINC/0YDQtdC00ZbQutGC0YMg0L3QsCAzIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJpZ1dpblBvcHVwICYmIHBvcHVwc1RlYW0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNsaWNrZWRUZWFtTmFtZSAmJiBwb3B1cHNUZWFtKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNTZWxlY3RlZEJpZ1dpbiA9IEpTT04ucGFyc2UoYmlnV2luKSA/PyBmYWxzZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU2VsZWN0ZWRCaWdXaW4pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ1dpblRlbXBvcmFyeVwiLCBiaWdXaW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUZWFtID0gdGVhbXMuZmluZCh0ZWFtID0+IHRlYW0uZGF0YUF0dHIgPT09IGNsaWNrZWRUZWFtTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ1dpblRlbXBvcmFyeVwiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGVhbSkpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsUG9wdXBzVGVhbS5mb3JFYWNoKCh0ZWFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmNsYXNzTGlzdC5yZW1vdmUoJ19zZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmNsYXNzTGlzdC5hZGQoJ19vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbS5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cHNUZWFtLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ1dpblRlbXBvcmFyeVwiKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW5Db25maXJtQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW5Db25maXJtQnRuLmNsYXNzTGlzdC5hZGQoJ19sb2NrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQstC40LHRltGAINC/0YDQtdC00ZbQutGC0YMg0L3QsCAwIDNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJpZ0xvc2VQb3B1cCAmJiBwb3B1cHNUZWFtKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNsaWNrZWRUZWFtTmFtZSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzU2VsZWN0ZWRCaWdMb3NlID0gSlNPTi5wYXJzZShiaWdMb3NlKSA/PyBmYWxzZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU2VsZWN0ZWRCaWdMb3NlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdMb3NlVGVtcG9yYXJ5XCIsIGJpZ0xvc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUZWFtID0gdGVhbXMuZmluZCh0ZWFtID0+IHRlYW0uZGF0YUF0dHIgPT09IGNsaWNrZWRUZWFtTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ0xvc2VUZW1wb3JhcnlcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRlYW0pKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBvcHVwc1RlYW0uZm9yRWFjaCgodGVhbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbS5jbGFzc0xpc3QuYWRkKCdfb3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbT8uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbT8uY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnTG9zZVRlbXBvcmFyeVwiKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdMb3NlQ29uZmlybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZUNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnX2xvY2snKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQstGW0LTQutGA0LjRgtGC0Y8g0L/QvtC/0LDQv9GDINC90LAg0ZbQvdGI0ZYg0LrQvtC80LDQvdC00LhcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNsaWNrZWRDYXJkICYmICFjYXJkQmlnV2luICYmICFjYXJkQmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtb3BvcmFyeVRlYW1zID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRlYW1zV2luVGVtcG9yYXJ5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVGVhbXMgPSB0ZWFtc1dpbj8uZmlsdGVyKGl0ZW0gPT4gaXRlbSAmJiBpdGVtLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFRlYW1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0ZWFtc1dpblRlbXBvcmFyeVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGVjdGVkVGVhbXMgJiYgc2VsZWN0ZWRUZWFtcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInRlYW1zV2luVGVtcG9yYXJ5XCIsIEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkVGVhbXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGVtb3BvcmFyeVRlYW1zKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzQ29uZmlybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcnNDb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcnNQb3B1cHNUZWFtLmZvckVhY2goKHRlYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbURhdGFBdHRyID0gdGVhbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtV3JhcCA9IHRlYW0uY2xvc2VzdChcIi5wbGF5b2ZmX19jaG9vc2UtdGVhbVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTmFtZVdpbiA9IGFjdGl2ZVN0YWdlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJpZy1zdGFnZT1cImJpZ1dpblwiXSAuc3RhZ2VfX2NhcmQtdGV4dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTmFtZUxvc2UgPSBhY3RpdmVTdGFnZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1iaWctc3RhZ2U9XCJiaWdMb3NlXCJdIC5zdGFnZV9fY2FyZC10ZXh0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZFRlYW0gPSBzZWxlY3RlZFRlYW1zPy5zb21lKGl0ZW0gPT4gaXRlbS5kYXRhQXR0ciA9PT0gdGVhbURhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZFRlYW1XaW4gPSB0ZWFtTmFtZVdpbj8uZ2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nKSA9PT0gdGVhbURhdGFBdHRyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkVGVhbUxvc2UgPSB0ZWFtTmFtZUxvc2U/LmdldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJykgPT09IHRlYW1EYXRhQXR0cjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNTZWxlY3RlZFRlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxlY3RlZFRlYW1zPy5sZW5ndGggPiAwICYmICFpc1NlbGVjdGVkVGVhbSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2VsZWN0ZWRUZWFtV2luIHx8IGlzU2VsZWN0ZWRUZWFtTG9zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYWN0aXZlT3RoZXJzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzQXJyYXkgPSBBcnJheS5mcm9tKGFjdGl2ZU90aGVycyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Q2FyZCA9IG90aGVyc0FycmF5LmluZGV4T2Yob3RoZXJzQ2FyZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4Q2FyZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXAoXCJPdGhlcnNcIiwgcG9wdXBzV3JhcClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LfQsNC60YDQuNGC0YLRjyDQv9C+0L/QsNC/0YMg0L3QsCDRltC90YjRliDQutC+0LzQsNC90LTQuFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocG9wdXBzQ2xvc2VCdG4gfHwgIWNsaWNrZWRDYXJkICYmICFwb3B1cCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKHBvcHVwc1dyYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQstC40LHRltGAINC/0YDQtdC00ZbQutGC0YMg0L3QsCDQstGB0ZYg0ZbQvdGI0ZYg0LrQvtC80LDQvdC00LhcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPdGhlcnNQb3B1cCAmJiBwb3B1cHNUZWFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcG9wdXBzVGVhbS5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwb3B1cHNUZWFtLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNsaWNrZWRUZWFtTmFtZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGVhbSA9IHRlYW1zLmZpbmQodGVhbSA9PiB0ZWFtLmRhdGFBdHRyID09PSBjbGlja2VkVGVhbU5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGVhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ByZWRpY3QgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0ZWFtc1dpblRlbXBvcmFyeVwiKSkgfHwgW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFscmVhZHlBZGRlZCA9IG5ld1ByZWRpY3Quc29tZShpdGVtID0+IGl0ZW0uZGF0YUF0dHIgPT09IGN1cnJlbnRUZWFtLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzUHJlZGljdEZ1bGwgPSBuZXdQcmVkaWN0Lmxlbmd0aCA+PSA3O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFscmVhZHlBZGRlZCAmJiAhaXNQcmVkaWN0RnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ByZWRpY3QucHVzaChjdXJyZW50VGVhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInRlYW1zV2luVGVtcG9yYXJ5XCIsIEpTT04uc3RyaW5naWZ5KG5ld1ByZWRpY3QpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSBBZGRlZDpcIiwgY3VycmVudFRlYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcmVkaWN0ID0gbmV3UHJlZGljdC5maWx0ZXIodGVhbSA9PiB0ZWFtLmRhdGFBdHRyICE9PSBjdXJyZW50VGVhbS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInRlYW1zV2luVGVtcG9yYXJ5XCIsIEpTT04uc3RyaW5naWZ5KG5ld1ByZWRpY3QpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKaoO+4jyBUZWFtIHJlbW92ZWRcIiwgY3VycmVudFRlYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbS5jbGFzc0xpc3QuYWRkKCdfb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkTGVuZ3RoID0gbmV3UHJlZGljdC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkTGVuZ3RoIDwgNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyc0NvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxQb3B1cHNUZWFtLmZvckVhY2godGVhbSA9PiB0ZWFtLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh1cGRhdGVkTGVuZ3RoID09PSA3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzQ29uZmlybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBvcHVwc1RlYW0uZm9yRWFjaCh0ZWFtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlYW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdfb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4p2MIFRlYW0gbm90IGZvdW5kIGZvcjpcIiwgY2xpY2tlZFRlYW1OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINC/0ZbQtNGC0LLQtdGA0LTQttC10L3QvdGPINCy0LjQsdC+0YDRgyDQsiDQv9C+0L/QsNC/0ZZcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvbmZpcm1DaG9vc2VCdG4pe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbXNXaW4gPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0ZWFtc1dpblRlbXBvcmFyeVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGVhbXNXaW4pIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ0ZWFtc1dpblwiLCBKU09OLnN0cmluZ2lmeSh0ZWFtc1dpbikpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdMb3NlVGVtcG9yYXJ5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJpZ0xvc2UpIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdMb3NlXCIsIGJpZ0xvc2UpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnV2luVGVtcG9yYXJ5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJpZ1dpbikgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ1dpblwiLCBiaWdXaW4pXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpZ1dpblByZWRpY3QgPSBKU09OLnBhcnNlKGJpZ1dpbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiaWdMb3NlUHJlZGljdCA9IEpTT04ucGFyc2UoYmlnTG9zZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvdGhlclRlYW1zUHJlZGljdCA9IHRlYW1zV2luO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmlnTG9zZVByZWRpY3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdMb3NlLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnTG9zZS5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdMb3NlVGVhbS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShiaWdMb3NlUHJlZGljdC5kYXRhQXR0cilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnTG9zZVRlYW0uc2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nLCBiaWdMb3NlUHJlZGljdC5kYXRhQXR0cilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiaWdXaW5QcmVkaWN0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnV2luLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnV2luLmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ1dpblRlYW0udGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkoYmlnV2luUHJlZGljdC5kYXRhQXR0cilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnV2luVGVhbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScsIGJpZ1dpblByZWRpY3QuZGF0YUF0dHIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob3RoZXJUZWFtc1ByZWRpY3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlclRlYW1zUHJlZGljdC5mb3JFYWNoKCh0ZWFtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Q2FyZFRlYW1OYW1lID0gYWN0aXZlT3RoZXJzW2ldLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX2NhcmQtdGV4dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRDYXJkVGVhbU5hbWUsIHRlYW0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZU90aGVyc1tpXS5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlT3RoZXJzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudENhcmRUZWFtTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScsIHRlYW0uZGF0YUF0dHIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FyZFRlYW1OYW1lLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KHRlYW0uZGF0YUF0dHIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0ZWFtc1dpbiAmJiBiaWdXaW4gJiYgYmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VQcmVkaWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VQcmVkaWN0QnRuLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cChwb3B1cHNXcmFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGVhbXNXaW4gJiYgYmlnV2luICYmIGJpZ0xvc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VQcmVkaWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWtlUHJlZGljdEJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINC30LDQutGA0LjRgtGC0Y8g0L/QvtC/0LDQv9GDINC90LAg0ZbQvdGI0ZYg0LrQvtC80LDQvdC00LhcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xpY2tlZFRhYiA9IHRhcmdldC5jbG9zZXN0KFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGlja2VkQ2FyZCA9IHRhcmdldC5jbG9zZXN0KFwiLnBsYXlvZmZfX2NhcmRcIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocG9wdXBzQ2xvc2VCdG4gfHwgIWNsaWNrZWRUYWIgJiYgIXBvcHVwICYmICFjbGlja2VkQ2FyZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAocG9wdXBzV3JhcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIG1ha2VQcmVkaWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgIHNlbmRQcmVkaWN0KClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMTAwMClcblxuICAgICAgICAgICAgbGV0IGluaXRpYWxPZmZzZXRMZWZ0ID0gbnVsbDtcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlUGxheW9mZlBvc2l0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMzAwICYmIHdpbmRvdy5pbm5lcldpZHRoID4gNTUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmU3RhZ2Uuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxPZmZzZXRMZWZ0ID0gcGxheW9mZlN0YWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50TGVmdCA9IGluaXRpYWxPZmZzZXRMZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlmdCA9IGN1cnJlbnRMZWZ0IC0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmU3RhZ2Uuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7c2hpZnR9cHgpYDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlvZmZTdGFnZS5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE9mZnNldExlZnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTApXG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmKGN1cnJlbnRTdGFnZSA8IDMpe1xuICAgICAgICAgICAgICAgIHBsYXlvZmZQcmVkaWN0b3IuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHVwZGF0ZVBsYXlvZmZQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIHVwZGF0ZVBsYXlvZmZQb3NpdGlvbik7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVQbGF5b2ZmUG9zaXRpb24pO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5b2ZmUGhhc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX3N0YWdlJyk7XG4gICAgICAgICAgICBjb25zdCBwbGF5b2ZmQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlvZmYnKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXlvZmZOZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX2J0bi1yaWdodCcpO1xuICAgICAgICAgICAgY29uc3QgcGxheW9mZlByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fYnRuLWxlZnQnKTtcblxuICAgICAgICAgICAgbGV0IHBoYXNlQ291bnQgPSAzO1xuICAgICAgICAgICAgbGV0IGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPD0gNTUwO1xuXG4gICAgICAgICAgICBjb25zdCBzZXRDdXJyZW50UGhhc2UgPSAocGhhc2VzLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcGhhc2VzLmZvckVhY2goKHBoYXNlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBoYXNlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIsIGkgIT09IGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qgc2hvd0FsbFBoYXNlcyA9IChwaGFzZXMpID0+IHtcbiAgICAgICAgICAgICAgICBwaGFzZXMuZm9yRWFjaChwaGFzZSA9PiBwaGFzZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBoaWRlQWxsRXhjZXB0Q3VycmVudCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGhhc2UocGxheW9mZlBoYXNlcywgcGhhc2VDb3VudCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBoYXNlQ291bnQgPSAocGhhc2VDb3VudCArIDEpICUgcGxheW9mZlBoYXNlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaGlkZUFsbEV4Y2VwdEN1cnJlbnQoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGhhc2VDb3VudCA9IChwaGFzZUNvdW50IC0gMSArIHBsYXlvZmZQaGFzZXMubGVuZ3RoKSAlIHBsYXlvZmZQaGFzZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGhpZGVBbGxFeGNlcHRDdXJyZW50KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgdG91Y2hTdGFydFggPSAwO1xuICAgICAgICAgICAgbGV0IHRvdWNoRW5kWCA9IDA7XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVN3aXBlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0b3VjaEVuZFggLSB0b3VjaFN0YXJ0WDtcblxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUHJldigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgaGlkZUFsbEV4Y2VwdEN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICBwbGF5b2ZmTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5leHQpO1xuICAgICAgICAgICAgICAgIHBsYXlvZmZQcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJldik7XG5cbiAgICAgICAgICAgICAgICBwbGF5b2ZmQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaFN0YXJ0WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHBsYXlvZmZDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaEVuZFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN3aXBlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93TW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPD0gNTUwO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5vd01vYmlsZSAmJiAhaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNb2JpbGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBoaWRlQWxsRXhjZXB0Q3VycmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5leHQpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByZXYpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghbm93TW9iaWxlICYmIGlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTW9iaWxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGxQaGFzZXMocGxheW9mZlBoYXNlcyk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlvZmZOZXh0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTmV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlvZmZQcmV2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJldik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGljay1waWNrXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKCkudGhlbihpbml0KVxuXG4gICAgLy90ZXN0XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1sbmdcIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJ1a1wiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1hdXRoXCIpXG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIFwiNzc3Nzc3NzlcIilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpO1xuICAgIGNvbnN0IHBvcHVwV2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbi1wb3B1cCcpO1xuICAgIGNvbnN0IHBvcHVwTG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3NlLXBvcHVwJyk7XG4gICAgY29uc3QgcG9wdXBPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdGhlcnMtcG9wdXAnKTtcblxuICAgIGNvbnNvbGUubG9nKHBvcHVwV2luLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fcG9wdXAtY2xvc2VcIikpXG5cbiAgICAvLyBmdW5jdGlvbiBzZXRIaWRlUG9wdXAocG9wdXApe1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX3BvcHVwLWNsb3NlXCIpKTtcbiAgICAvLyAgICAgY29uc3QgY2xvc2VCdG4gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fcG9wdXAtY2xvc2UnKTtcbiAgICAvL1xuICAgIC8vICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgIC8vICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LW9wYWNpdHknKTtcbiAgICAvLyAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIHNldEhpZGVQb3B1cChwb3B1cFdpbik7XG4gICAgLy8gc2V0SGlkZVBvcHVwKHBvcHVwTG9zZSk7XG4gICAgLy8gc2V0SGlkZVBvcHVwKHBvcHVwT3RoZXIpO1xuXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBvcHVwLXdpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1vcGFjaXR5Jyk7XG4gICAgICAgIHBvcHVwV2luLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBMb3NlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBPdGhlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcG9wdXAtbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1vcGFjaXR5Jyk7XG4gICAgICAgIHBvcHVwV2luLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBMb3NlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBPdGhlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcG9wdXAtb3RoZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXktb3BhY2l0eScpO1xuICAgICAgICBwb3B1cFdpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHBvcHVwTG9zZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHBvcHVwT3RoZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXRpbWVyJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdGFnZTEgPSAnMSdcbiAgICAgICAgY29uc3Qgc3RhZ2UyID0gJzQnXG5cbiAgICAgICAgY29uc3Qgc2F2ZWREYXRlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnREYXRlXCIpO1xuXG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBzYXZlZERhdGUgPT09IHN0YWdlMiA/IHN0YWdlMSA6IHN0YWdlMjtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnREYXRlXCIsIG5ld0RhdGUpO1xuXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG5cbn0pKCk7XG4iXX0=
