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
  window.addEventListener('orientationchange', function () {
    window.location.reload();
  });
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
                      results.classList.add("noBg");
                    } else {
                      makePredictBtn.classList.remove('hide');
                      results.classList.remove("noBg");
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
                if (currentStage < 3) {
                  playoffPredictor.classList.add('_lock');
                } else {
                  updatePlayoffPosition();
                }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvY2F0aW9uIiwicmVsb2FkIiwiYXBpVVJMIiwic3RhZ2VzRGF0YSIsImRhdGEiLCJEYXRlIiwiY3VycmVudERhdGUiLCJjdXJyZW50U3RhZ2UiLCJOdW1iZXIiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInN0YWdlcyIsInN0YWdlQWN0aXZlIiwic3RhZ2VzVGFicyIsInBsYXlvZmZTdGFnZSIsInJlc3VsdHMiLCJwcmVkaWN0b3IiLCJwbGF5b2ZmUHJlZGljdG9yIiwidGVhbVRleHRQb3B1cHMiLCJwb3B1cHNXcmFwIiwibWFrZVByZWRpY3RCdG4iLCJwcmVkaWN0b3JDaGVja0luIiwicGxheW9mZlN0YWdlcyIsInF1YXJ0ZXJGaW5hbHMiLCJzZW1pRmluYWxzIiwiZmluYWxzIiwid2lubmVyIiwicXVhcnRlckZpbmFsc1BhaXJzIiwic2VtaUZpbmFsc1BhaXJzIiwid2lubmVyUGFpcnMiLCJzZW1pRmluYWxzUGFpcnNCdG5zIiwiZmluYWxzUGFpcnNCdG5zIiwid2lubmVyQ2FyZCIsInBsYXlvZmZTZW1pRmluYWxQb3B1cCIsInBsYXlvZmZGaW5hbFBvcHVwIiwicGxheW9mZldpbm5lclBvcHVwIiwic2VtaUZpbmFsc1RlYW1zIiwiZmluYWxzVGVhbXMiLCJ3aW5uZXJzIiwidWtMZW5nIiwiZW5MZW5nIiwidG9nZ2xlQ2xhc3NlcyIsImVsZW1lbnRzIiwiY2xhc3NOYW1lIiwiZm9yRWFjaCIsImVsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlVHJhbnNsYXRlcyIsImRhdGFBdHRyIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaTE4bkRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0ZWFtcyIsInRlYW0iLCJiaWdMb3NlIiwiYmlnV2luIiwidGVhbXNXaW4iLCJKU09OIiwicGFyc2UiLCJzdGFnZXNSZXN1bHQiLCJkZWZhdXRWYWx1ZSIsInRlYW1zQmV0Iiwib3V0Y29tZSIsInF1b3RlckZpbmFsc0RhdGEiLCJsb2FkZXJCdG4iLCJsb2NhbGUiLCJkZWJ1ZyIsIm90aGVyc0FycmF5IiwiaW5kZXhDYXJkIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlbmRlclRlYW1CbG9ja3MiLCJwb3B1cEF0dHIiLCJwb3B1cCIsImNvbnRhaW5lciIsInRlYW1CbG9jayIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInRyYW5zbGF0ZSIsInNlbmRQcmVkaWN0Iiwib3RoZXJUZWFtcyIsInByZWRpY3RCb2R5IiwidXNlcmlkIiwiYmV0IiwiYmlnV2lubmVyIiwiYmlnTG9zZXIiLCJtZXRob2QiLCJib2R5Iiwic3RyaW5naWZ5Iiwic3VjY2VzcyIsInNldEN1cnJlbnRQcmVkaWN0IiwiZ2V0VXNlclByZWRpY3QiLCJwcmVkaWN0Iiwic3RhZ2VCZXQiLCJ3YXJuIiwiYWRkIiwic3RhZ2VPdGhlcnMiLCJzdGFnZU90aGVyQ2FyZHMiLCJzdGFnZVdpbkNhcmQiLCJzdGFnZVdpbkNhcmRUZWFtIiwic3RhZ2VMb3NlQ2FyZCIsInN0YWdlTG9zZUNhcmRUZWFtIiwicHJlZGljdE90aGVyVGVhbXMiLCJwcmVkaWN0V2lubmVyIiwicHJlZGljdExvc2VyIiwicmVtb3ZlIiwic2V0SXRlbSIsInRleHRDb250ZW50IiwidHJhbnNsYXRlS2V5IiwiY2FyZCIsImkiLCJjYXJkVGVhbU5hbWUiLCJjaGVja1VzZXJBdXRoIiwic2V0UGxheW9mZiIsInF1YXJ0ZXJGaW5hbHNDYXJkcyIsInNlbWlGaW5hbHNDYXJkcyIsIkZpbmFsc0NhcmRzIiwid2lubmVyQ2FyZHMiLCJ0ZWFtQ2FyZE5hbWUiLCJmaW5kIiwiaXRlbSIsImhpZGVMb2FkZXIiLCJzdHlsZSIsIm92ZXJmbG93IiwibG9hZFRpbWUiLCJzZXRUaW1lb3V0Iiwic2hvd0VsZW1lbnRzIiwiaGlkZUVsZW1lbnRzIiwicmVzb2x2ZSIsInJlcG9ydEVycm9yIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImhyZWYiLCJlcnJvclRleHQiLCJ0ZXh0IiwibWVzc2FnZSIsInR5cGUiLCJuYW1lIiwic3RhY2siLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInJlbmRlclVzZXJzIiwid2VlayIsInVzZXJzIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsInJlc3VsdHNUYWJsZSIsInJlc3VsdHNUYWJsZU90aGVyIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwiaXNUb3BDdXJyZW50VXNlciIsInNsaWNlIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsInVzZXJEYXRhIiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIm5laWdoYm9yIiwidXNlclJvdyIsInVzZXJQbGFjZSIsImluZGV4T2YiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJtYXNrVXNlcklkIiwicG9pbnRzIiwiYXBwZW5kIiwiaW5kZXgiLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwidG9TdHJpbmciLCJzZXRTdGF0ZVBpY2tTdGFnZSIsInN0YWdlIiwic3RhZ2VDYXJkc1dyYXAiLCJzdGFnZUNhcmRzIiwic3RhZ2VDYXJkV2luIiwic3RhZ2VDYXJkTG9zZSIsInN0YWdlQ2FyZFdpbk5hbWUiLCJzdGFnZUNhcmRMb3NlTmFtZSIsInN0YWdlTnVtIiwic3RhZ2VTdGF0ZSIsInN0YWdlUmVzdWx0RGF0YSIsIm90aGVyc1RlYW1zIiwiYmlnV2luVGVhbSIsImJpZ0xvc2VUZWFtIiwidGVhbU5hbWUiLCJjdXJyZW50RGF0YSIsIm9wZW5Qb3B1cCIsImN1cnJlbnRQb3B1cCIsImNsb3NlUG9wdXAiLCJwb3B1cHMiLCJhbGxQb3B1cHNUZWFtVGFicyIsInBsYWNlIiwiZXh0cmFjdFRlYW1EYXRhIiwicGFpckVsZW1lbnQiLCJ0ZWFtU2VsZWN0b3IiLCJncm91cEF0dHIiLCJBcnJheSIsImZyb20iLCJtYXAiLCJwYWlyTnVtIiwiY2xvc2VzdCIsImFkZFRlYW1zRnJvbVBhaXIiLCJwYWlycyIsInRlYW1zQXJyYXkiLCJyZXN1bHQiLCJwYWlyIiwiZXh0cmFjdGVkIiwicmVuZGVyUGxheW9mZlBvcHVwIiwicG9wdXBFbGVtZW50IiwidGVhbXNQbGF5b2ZmIiwiZGF0YU5hbWUiLCJ0ZW1wb3JhcnlEYXRhTmFtZSIsInNjcm9sbENvbnRhaW5lciIsInNhdmVkRGF0YSIsInRlYW1EaXYiLCJkYXRhc2V0IiwiaWNvbkRpdiIsInRleHREaXYiLCJidG5EaXYiLCJ0ZWFtVGFicyIsInRlYW1UYWIiLCJzZWxlY3RlZFRlYW0iLCJ0b0xvd2VyQ2FzZSIsImoiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsInVzZXJTdGFnZXMiLCJidG4iLCJjb25maXJtUHJlZGljdEJ0biIsImJ0blRlYW1OYW1lIiwidGVtcG9yYXJ5RGF0YSIsImJ0bkN1cnJlbnREYXRhIiwiZSIsImJ0blBhaXJOdW1iZXIiLCJwcmVkaWN0UGFpckRhdGEiLCJwdXNoIiwidmFsaWRQYWlyTnVtcyIsImZpbHRlciIsImluY2x1ZGVzIiwiY29uZmlybUhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9wIiwiYm90dG9tIiwidGltZXIiLCJwbGF5b2ZmV3JhcCIsInRhYiIsInRhcmdldCIsInRhcmdldFN0YWdlVmFsdWUiLCJ0YXJnZXRTdGFnZSIsInQiLCJhY3RpdmVTdGFnZSIsInBvcHVwc0Nsb3NlQnRuIiwiY2xpY2tlZENhcmQiLCJjYXJkQmlnV2luIiwiY2FyZEJpZ0xvc2UiLCJiaWdXaW5Qb3B1cCIsImJpZ0xvc2VQb3B1cCIsIk90aGVyc1BvcHVwIiwicG9wdXBzVGVhbSIsIm90aGVyc0NhcmQiLCJhbGxQb3B1cHNUZWFtIiwiY2xpY2tlZFRlYW1OYW1lIiwiYWN0aXZlQmlnV2luIiwiYWN0aXZlQmlnV2luVGVhbSIsImFjdGl2ZUJpZ0xvc2UiLCJhY3RpdmVCaWdMb3NlVGVhbSIsImJpZ1dpblBvcHVwc1RlYW0iLCJiaWdMb3NlUG9wdXBzVGVhbSIsIm90aGVyc1BvcHVwc1RlYW0iLCJjb25maXJtQ2hvb3NlQnRuIiwib3RoZXJzQ29uZmlybUJ0biIsImJpZ1dpbkNvbmZpcm1CdG4iLCJiaWdMb3NlQ29uZmlybUJ0biIsImFjdGl2ZU90aGVycyIsInJlbW92ZUl0ZW0iLCJ0ZWFtV3JhcCIsImlzU2VsZWN0ZWRUZWFtIiwiaXNTZWxlY3RlZEJpZ1dpbiIsImlzU2VsZWN0ZWRCaWdMb3NlIiwiY3VycmVudFRlYW0iLCJ0ZW1vcG9yYXJ5VGVhbXMiLCJzZWxlY3RlZFRlYW1zIiwidGVhbURhdGFBdHRyIiwidGVhbU5hbWVXaW4iLCJ0ZWFtTmFtZUxvc2UiLCJpc1NlbGVjdGVkVGVhbVdpbiIsImlzU2VsZWN0ZWRUZWFtTG9zZSIsIm5ld1ByZWRpY3QiLCJhbHJlYWR5QWRkZWQiLCJpc1ByZWRpY3RGdWxsIiwidXBkYXRlZExlbmd0aCIsImNvbnRhaW5zIiwiYmlnV2luUHJlZGljdCIsImJpZ0xvc2VQcmVkaWN0Iiwib3RoZXJUZWFtc1ByZWRpY3QiLCJjdXJyZW50Q2FyZFRlYW1OYW1lIiwiY2xpY2tlZFRhYiIsInVwZGF0ZVBsYXlvZmZQb3NpdGlvbiIsImluaXRpYWxPZmZzZXRMZWZ0IiwiaW5uZXJXaWR0aCIsInRyYW5zZm9ybSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJjdXJyZW50TGVmdCIsInNoaWZ0IiwicGxheW9mZlBoYXNlcyIsInBsYXlvZmZDb250YWluZXIiLCJwbGF5b2ZmTmV4dCIsInBsYXlvZmZQcmV2IiwicGhhc2VDb3VudCIsImlzTW9iaWxlIiwic2V0Q3VycmVudFBoYXNlIiwicGhhc2VzIiwiY3VycmVudCIsInBoYXNlIiwic2hvd0FsbFBoYXNlcyIsImhpZGVBbGxFeGNlcHRDdXJyZW50IiwiaGFuZGxlTmV4dCIsImhhbmRsZVByZXYiLCJ0b3VjaFN0YXJ0WCIsInRvdWNoRW5kWCIsImhhbmRsZVN3aXBlIiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJjaGFuZ2VkVG91Y2hlcyIsInNjcmVlblgiLCJub3dNb2JpbGUiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsInRhcmdldE5vZGUiLCJnZXRFbGVtZW50QnlJZCIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwibG5nQnRuIiwiYXV0aEJ0biIsIm92ZXJsYXkiLCJwb3B1cFdpbiIsInBvcHVwTG9zZSIsInBvcHVwT3RoZXIiLCJzdGFnZTEiLCJzdGFnZTIiLCJzYXZlZERhdGUiLCJuZXdEYXRlIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUFBO0VBRVRBLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsWUFBWTtJQUNyREQs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LGFBQWEsQ0FBQztJQUV2RCxJQUFNcVksT0FBTyxHQUFHRCxTQUFTLEtBQUtELE1BQU0sR0FBR0QsTUFBTSxHQUFHQyxNQUFNO0lBQ3REcFksY0FBYyxDQUFDMkgsT0FBTyxDQUFDLGFBQWEsRUFBRTJRLE9BQU8sQ0FBQztJQUU5Qy9ZLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO0VBQ3JCLENBQUMsQ0FBQztBQUdOLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSlcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfY2xpY2tfcGljaydcblxuICAgIGNvbnN0IHN0YWdlc0RhdGEgPSBbXG4gICAgICAgIHsgZGF0YTogbmV3IERhdGUoXCIyMDI1LTA1LTIwVDAwOjAwOjAwKzAzOjAwXCIpIH0sXG4gICAgICAgIHsgZGF0YTogbmV3IERhdGUoXCIyMDI1LTA1LTI1VDAwOjAwOjAwKzAzOjAwXCIpIH0sXG4gICAgICAgIHsgZGF0YTogbmV3IERhdGUoXCIyMDI1LTA1LTMwVDAwOjAwOjAwKzAzOjAwXCIpIH0sXG4gICAgICAgIHsgZGF0YTogbmV3IERhdGUoXCIyMDI1LTA2LTA1VDAwOjAwOjAwKzAzOjAwXCIpIH1cbiAgICBdO1xuXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZShcIjIwMjUtMDQtMDVUMDA6MDA6MDArMDM6MDBcIik7XG5cbiAgICAvLyBsZXQgY3VycmVudFN0YWdlID0gc3RhZ2VzRGF0YS5maWx0ZXIoc3RhZ2UgPT4gc3RhZ2UuZGF0YSA8PSBjdXJyZW50RGF0ZSkubGVuZ3RoID8/IDM7XG5cbiAgICBsZXQgY3VycmVudFN0YWdlID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50RGF0ZVwiKSlcblxuICAgIC8vIGxldCBjdXJyZW50U3RhZ2UgPSA0XG5cbiAgICBjb25zb2xlLmxvZyhjdXJyZW50U3RhZ2UpO1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgc3RhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXN0YWdlXVwiKSxcbiAgICAgICAgc3RhZ2VBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zdGFnZT1cIiR7Y3VycmVudFN0YWdlICsgMX1cIl1gKSxcbiAgICAgICAgc3RhZ2VzVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zdGFnZS10YWJdXCIpLFxuICAgICAgICBwbGF5b2ZmU3RhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZcIiksXG4gICAgICAgIHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdHNcIiksXG4gICAgICAgIHByZWRpY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdG9yXCIpLFxuICAgICAgICBwbGF5b2ZmUHJlZGljdG9yID0gcHJlZGljdG9yLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZlwiKSxcbiAgICAgICAgdGVhbVRleHRQb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fY2hvb3NlLXRlYW0tdGV4dCcpLFxuICAgICAgICBwb3B1cHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cHNcIiksXG4gICAgICAgIG1ha2VQcmVkaWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1ha2UtcHJlZGljdCcpLFxuICAgICAgICBwcmVkaWN0b3JDaGVja0luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3Rvcl9fY2hlY2tpbicpO1xuXG4gICAgY29uc3QgcGxheW9mZlN0YWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXlvZmYtc3RhZ2VdJyksXG4gICAgICAgIHF1YXJ0ZXJGaW5hbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGF5b2ZmLXN0YWdlPVwiMVwiXScpLFxuICAgICAgICBzZW1pRmluYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGxheW9mZi1zdGFnZT1cIjJcIl0nKSxcbiAgICAgICAgZmluYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGxheW9mZi1zdGFnZT1cIjNcIl0nKSxcbiAgICAgICAgd2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGxheW9mZi1zdGFnZT1cIjRcIl0nKSxcbiAgICAgICAgcXVhcnRlckZpbmFsc1BhaXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZVtkYXRhLWNob29zZS1zZW1pZmluYWxdJyksXG4gICAgICAgIHNlbWlGaW5hbHNQYWlycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19jaG9vc2VbZGF0YS1jaG9vc2UtZmluYWxdJyksXG4gICAgICAgIHdpbm5lclBhaXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZVtkYXRhLWNob29zZS13aW5uZXJdJyksXG4gICAgICAgIHNlbWlGaW5hbHNQYWlyc0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fY2hvb3NlLXRlYW1bZGF0YS1jaG9vc2Utc2VtaWZpbmFsXScpLFxuICAgICAgICBmaW5hbHNQYWlyc0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fY2hvb3NlLXRlYW1bZGF0YS1jaG9vc2UtZmluYWxdJyksXG4gICAgICAgIHdpbm5lckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fY2FyZCcpLFxuICAgICAgICBwbGF5b2ZmU2VtaUZpbmFsUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wb3B1cD1cInBsYXlvZmZTZW1pRmluYWxcIl0nKSxcbiAgICAgICAgcGxheW9mZkZpbmFsUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wb3B1cD1cInBsYXlvZmZGaW5hbFwiXScpLFxuICAgICAgICBwbGF5b2ZmV2lubmVyUG9wdXA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBvcHVwPVwid2lubmVyXCJdJyk7XG5cbiAgICBsZXQgc2VtaUZpbmFsc1RlYW1zID0gW11cbiAgICBsZXQgZmluYWxzVGVhbXMgPSBbXVxuICAgIGxldCB3aW5uZXJzID0gW11cblxuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0ZWFtcyA9IFtcbiAgICAgICAgeyB0ZWFtOiBcIkNvbXBsZXhpdHlcIiwgZGF0YUF0dHI6IFwiY29tcGxleGl0eVwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJGYWxjb25zXCIsIGRhdGFBdHRyOiBcImZhbGNvbnNcIiB9LFxuICAgICAgICB7IHRlYW06IFwiVml0YWxpdHlcIiwgZGF0YUF0dHI6IFwidml0YWxpdHlcIiB9LFxuICAgICAgICB7IHRlYW06IFwiSGVyb2ljXCIsIGRhdGFBdHRyOiBcImhlcm9pY1wiIH0sXG4gICAgICAgIHsgdGVhbTogXCJGYXplXCIsIGRhdGFBdHRyOiBcImZhemVcIiB9LFxuICAgICAgICB7IHRlYW06IFwiU3Bpcml0XCIsIGRhdGFBdHRyOiBcInNwaXJpdFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJCOFwiLCBkYXRhQXR0cjogXCJCOFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCIzRE1BWFwiLCBkYXRhQXR0cjogXCIzRE1BWFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJNT1VaXCIsIGRhdGFBdHRyOiBcIk1PVVpcIiB9LFxuICAgICAgICB7IHRlYW06IFwiV2lsZGNhcmRcIiwgZGF0YUF0dHI6IFwid2lsZGNhcmRcIiB9LFxuICAgICAgICB7IHRlYW06IFwiVmlydHVzLnByb1wiLCBkYXRhQXR0cjogXCJ2aXJ0dXNQcm9cIiB9LFxuICAgICAgICB7IHRlYW06IFwiVGhlIE1vbmdvbHpcIiwgZGF0YUF0dHI6IFwidGhlTW9uZ29selwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJGbHlRdWVzdFwiLCBkYXRhQXR0cjogXCJmbHlRdWVzdFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJGdXJpYVwiLCBkYXRhQXR0cjogXCJmdXJpYVwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJBdXJvcmFcIiwgZGF0YUF0dHI6IFwiYXVyb3JhXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkx5bm4gVmlzaW9uXCIsIGRhdGFBdHRyOiBcImx5bm5WaXNpb25cIiB9LFxuICAgICAgICB7IHRlYW06IFwiTUlCUlwiLCBkYXRhQXR0cjogXCJNSUJSXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk5hdHVzIFZpbmNlcmVcIiwgZGF0YUF0dHI6IFwibmF0dXNWaW5jZXJlXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk5SR1wiLCBkYXRhQXR0cjogXCJOUkdcIiB9LFxuICAgICAgICB7IHRlYW06IFwiUGFpTlwiLCBkYXRhQXR0cjogXCJQYWlOXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkcyXCIsIGRhdGFBdHRyOiBcIkcyXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkNoaW5nZ2lzIFdhcnJpb3JzXCIsIGRhdGFBdHRyOiBcImNoaW5nZ2lzV2FycmlvcnNcIiB9LFxuICAgICAgICB7IHRlYW06IFwiTTgwXCIsIGRhdGFBdHRyOiBcIk04MFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJMaXF1aWRcIiwgZGF0YUF0dHI6IFwibGlxdWlkXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk5lbWlnYVwiLCBkYXRhQXR0cjogXCJuZW1pZ2FcIiB9LFxuICAgICAgICB7IHRlYW06IFwiSW1wZXJpYWxcIiwgZGF0YUF0dHI6IFwiaW1wZXJpYWxcIiB9LFxuICAgICAgICB7IHRlYW06IFwiRmx1eG9cIiwgZGF0YUF0dHI6IFwiZmx1eG9cIiB9LFxuICAgICAgICB7IHRlYW06IFwiTWV0aXpwb3J0XCIsIGRhdGFBdHRyOiBcIm1ldGl6cG9ydFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJPR1wiLCBkYXRhQXR0cjogXCJPR1wiIH0sXG4gICAgICAgIHsgdGVhbTogXCJCZXN0aWFcIiwgZGF0YUF0dHI6IFwiYmVzdGlhXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIlR5bG9vXCIsIGRhdGFBdHRyOiBcInR5bG9vXCIgfVxuICAgIF07XG5cbiAgICBsZXQgYmlnTG9zZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdMb3NlXCIpXG4gICAgbGV0IGJpZ1dpbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdXaW5cIilcblxuICAgIGxldCB0ZWFtc1dpbiA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRlYW1zV2luXCIpKSA/PyBbXVxuXG4gICAgY29uc3Qgc3RhZ2VzUmVzdWx0ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBkZWZhdXRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlYW1zQmV0OltcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiQ29tcGxleGl0eVwiLCBkYXRhQXR0cjogXCJjb21wbGV4aXR5XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiRmFsY29uc1wiLCBkYXRhQXR0cjogXCJmYWxjb25zXCIsIG91dGNvbWU6IHRydWV9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJWaXRhbGl0eVwiLCBkYXRhQXR0cjogXCJ2aXRhbGl0eVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkhlcm9pY1wiLCBkYXRhQXR0cjogXCJoZXJvaWNcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJGYXplXCIsIGRhdGFBdHRyOiBcImZhemVcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJTcGlyaXRcIiwgZGF0YUF0dHI6IFwic3Bpcml0XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiQjhcIiwgZGF0YUF0dHI6IFwiQjhcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJpZ1dpbjogeyB0ZWFtOiBcIlBhaU5cIiwgZGF0YUF0dHI6IFwiUGFpTlwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICBiaWdMb3NlOiB7IHRlYW06IFwiTlJHXCIsIGRhdGFBdHRyOiBcIk5SR1wiLCBvdXRjb21lOiB0cnVlIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGVmYXV0VmFsdWU6IHRydWUsXG4gICAgICAgICAgICB0ZWFtc0JldDpbXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkNvbXBsZXhpdHlcIiwgZGF0YUF0dHI6IFwiY29tcGxleGl0eVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkZhbGNvbnNcIiwgZGF0YUF0dHI6IFwiZmFsY29uc1wiLCBvdXRjb21lOiB0cnVlfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiVml0YWxpdHlcIiwgZGF0YUF0dHI6IFwidml0YWxpdHlcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJIZXJvaWNcIiwgZGF0YUF0dHI6IFwiaGVyb2ljXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiRmF6ZVwiLCBkYXRhQXR0cjogXCJmYXplXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiU3Bpcml0XCIsIGRhdGFBdHRyOiBcInNwaXJpdFwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkI4XCIsIGRhdGFBdHRyOiBcIkI4XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBiaWdXaW46IHsgdGVhbTogXCJGYWxjb25zXCIsIGRhdGFBdHRyOiBcImZhbGNvbnNcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgYmlnTG9zZTogeyB0ZWFtOiBcIk5SR1wiLCBkYXRhQXR0cjogXCJOUkdcIiwgb3V0Y29tZTogdHJ1ZSB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRlZmF1dFZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgdGVhbXNCZXQ6W1xuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJDb21wbGV4aXR5XCIsIGRhdGFBdHRyOiBcImNvbXBsZXhpdHlcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJGYWxjb25zXCIsIGRhdGFBdHRyOiBcImZhbGNvbnNcIiwgb3V0Y29tZTogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIlZpdGFsaXR5XCIsIGRhdGFBdHRyOiBcInZpdGFsaXR5XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiSGVyb2ljXCIsIGRhdGFBdHRyOiBcImhlcm9pY1wiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkZhemVcIiwgZGF0YUF0dHI6IFwiZmF6ZVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIlNwaXJpdFwiLCBkYXRhQXR0cjogXCJzcGlyaXRcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJCOFwiLCBkYXRhQXR0cjogXCJCOFwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYmlnV2luOiB7IHRlYW06IFwiUGFpTlwiLCBkYXRhQXR0cjogXCJQYWlOXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgIGJpZ0xvc2U6IHsgdGVhbTogXCJOUkdcIiwgZGF0YUF0dHI6IFwiTlJHXCIsIG91dGNvbWU6IHRydWUgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkZWZhdXRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlYW1zQmV0OltcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiQ29tcGxleGl0eVwiLCBkYXRhQXR0cjogXCJjb21wbGV4aXR5XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiRmFsY29uc1wiLCBkYXRhQXR0cjogXCJmYWxjb25zXCIsIG91dGNvbWU6IHRydWV9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJWaXRhbGl0eVwiLCBkYXRhQXR0cjogXCJ2aXRhbGl0eVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkhlcm9pY1wiLCBkYXRhQXR0cjogXCJoZXJvaWNcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJGYXplXCIsIGRhdGFBdHRyOiBcImZhemVcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJTcGlyaXRcIiwgZGF0YUF0dHI6IFwic3Bpcml0XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiQjhcIiwgZGF0YUF0dHI6IFwiQjhcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJpZ1dpbjogeyB0ZWFtOiBcIlBhaU5cIiwgZGF0YUF0dHI6IFwiUGFpTlwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICBiaWdMb3NlOiB7IHRlYW06IFwiTlJHXCIsIGRhdGFBdHRyOiBcIk5SR1wiLCBvdXRjb21lOiB0cnVlIH1cbiAgICAgICAgfVxuXG4gICAgXVxuXG4gICAgbGV0IHF1b3RlckZpbmFsc0RhdGEgPSBbLi4uc3RhZ2VzUmVzdWx0WzJdLnRlYW1zQmV0LCBzdGFnZXNSZXN1bHRbMl0uYmlnV2luIF1cblxuICAgIGxldCBsb2FkZXJCdG4gPSBmYWxzZVxuXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgPz8gXCJlblwiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSB0cnVlXG5cbiAgICBsZXQgb3RoZXJzQXJyYXkgPSBbXVxuICAgIGxldCBpbmRleENhcmQgPSBmYWxzZVxuXG4gICAgLy8gaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICBsZXQgdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpKSA/PyA3Nzc3Nzc3OTtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICAvLyByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAvLyBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUZWFtQmxvY2tzKHBvcHVwQXR0ciwgdGVhbXMpIHtcbiAgICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3B1cD1cIiR7cG9wdXBBdHRyfVwiXWApO1xuICAgICAgICBjb25zb2xlLmxvZyhwb3B1cClcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gcG9wdXAucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX3BvcHVwLXNjcm9sbCcpO1xuXG4gICAgICAgIGlmICghY29udGFpbmVyKSByZXR1cm47XG5cbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIHRlYW1zLmZvckVhY2goKHsgZGF0YUF0dHIgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVhbUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0ZWFtQmxvY2suY2xhc3NOYW1lID0gJ3BsYXlvZmZfX2Nob29zZS10ZWFtIF9vcGVuJzsgLy8g0LzQvtC20LXRiCDQtNC40L3QsNC80ZbRh9C90L4g0LfQvNGW0L3RjtCy0LDRgtC4INC90LAgX3NlbGVjdGVkXG5cbiAgICAgICAgICAgIHRlYW1CbG9jay5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheW9mZl9fY2hvb3NlLXRlYW0taWNvblwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXlvZmZfX2Nob29zZS10ZWFtLXRleHRcIiBkYXRhLXRyYW5zbGF0ZT1cIiR7ZGF0YUF0dHJ9XCIgZGF0YS10ZWFtPVwiJHtkYXRhQXR0cn1cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXlvZmZfX2Nob29zZS10ZWFtLWJ0blwiPjwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGVhbUJsb2NrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRyYW5zbGF0ZSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VuZFByZWRpY3QoKXtcbiAgICAgICAgaWYoY3VycmVudFN0YWdlIDw9IDIpe1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJUZWFtcyA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRlYW1zV2luXCIpKTtcbiAgICAgICAgICAgIGNvbnN0IGJpZ1dpbiA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ1dpblwiKSk7XG4gICAgICAgICAgICBjb25zdCBiaWdMb3NlID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnTG9zZVwiKSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG90aGVyVGVhbXMsIGJpZ1dpbiwgYmlnTG9zZSk7XG5cblxuICAgICAgICAgICAgY29uc3QgcHJlZGljdEJvZHkgPSB7XG4gICAgICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICAgICAgYmV0OiB7XG4gICAgICAgICAgICAgICAgICAgIHRlYW1zQmV0OiBbLi4ub3RoZXJUZWFtc10sXG4gICAgICAgICAgICAgICAgICAgIGJpZ1dpbm5lcjogey4uLmJpZ1dpbn0sXG4gICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VyOiB7Li4uYmlnTG9zZX0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXF1ZXN0KGAvYmV0L3N0YWdlLyR7Y3VycmVudFN0YWdlICsgMX1gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJlZGljdEJvZHkpLFxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJlZGljdCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByZWRpY3RCb2R5KVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50UHJlZGljdCgpIHtcbiAgICAgICAgZ2V0VXNlclByZWRpY3QoKS50aGVuKHByZWRpY3QgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhZ2VCZXQgPSBwcmVkaWN0Py5bYHN0YWdlJHtjdXJyZW50U3RhZ2UgKyAxfUJldGBdO1xuXG4gICAgICAgICAgICBpZiAoIXN0YWdlQmV0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBObyBiZXRzIGZvciBzdGFnZSAke2N1cnJlbnRTdGFnZSArIDF9YCk7XG4gICAgICAgICAgICAgICAgcHJlZGljdG9yQ2hlY2tJbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzdGFnZU90aGVycyA9IHN0YWdlQWN0aXZlLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX3dyYXBcIiksXG4gICAgICAgICAgICAgICAgc3RhZ2VPdGhlckNhcmRzID0gc3RhZ2VPdGhlcnMucXVlcnlTZWxlY3RvckFsbChcIi5zdGFnZV9fY2FyZFwiKSxcbiAgICAgICAgICAgICAgICBzdGFnZVdpbkNhcmQgPSBzdGFnZUFjdGl2ZS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1iaWctc3RhZ2U9XCJiaWdXaW5cIl1gKSxcbiAgICAgICAgICAgICAgICBzdGFnZVdpbkNhcmRUZWFtID0gc3RhZ2VXaW5DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX2NhcmQtdGV4dFwiKSxcbiAgICAgICAgICAgICAgICBzdGFnZUxvc2VDYXJkID0gc3RhZ2VBY3RpdmUucXVlcnlTZWxlY3RvcihgW2RhdGEtYmlnLXN0YWdlPVwiYmlnTG9zZVwiXWApLFxuICAgICAgICAgICAgICAgIHN0YWdlTG9zZUNhcmRUZWFtID0gc3RhZ2VMb3NlQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19jYXJkLXRleHRcIiksXG4gICAgICAgICAgICAgICAgcHJlZGljdE90aGVyVGVhbXMgPSBzdGFnZUJldC50ZWFtc0JldCxcbiAgICAgICAgICAgICAgICBwcmVkaWN0V2lubmVyID0gc3RhZ2VCZXQuYmlnV2lubmVyLFxuICAgICAgICAgICAgICAgIHByZWRpY3RMb3NlciA9IHN0YWdlQmV0LmJpZ0xvc2VyO1xuXG4gICAgICAgICAgICBwcmVkaWN0b3JDaGVja0luLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInRlYW1zV2luXCIsIEpTT04uc3RyaW5naWZ5KHByZWRpY3RPdGhlclRlYW1zKSk7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmlnV2luXCIsIEpTT04uc3RyaW5naWZ5KHByZWRpY3RXaW5uZXIpKTtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdMb3NlXCIsIEpTT04uc3RyaW5naWZ5KHByZWRpY3RMb3NlcikpO1xuICAgICAgICAgICAgdGVhbXNXaW4gPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0ZWFtc1dpblwiKSk7XG4gICAgICAgICAgICBiaWdXaW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnV2luXCIpO1xuICAgICAgICAgICAgYmlnTG9zZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdMb3NlXCIpO1xuXG5cbiAgICAgICAgICAgIHN0YWdlV2luQ2FyZC5jbGFzc0xpc3QuYWRkKFwiX3NlbGVjdGVkXCIpO1xuICAgICAgICAgICAgc3RhZ2VXaW5DYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfb3BlblwiKTtcbiAgICAgICAgICAgIHN0YWdlTG9zZUNhcmQuY2xhc3NMaXN0LmFkZChcIl9zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHN0YWdlTG9zZUNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGVuXCIpO1xuXG4gICAgICAgICAgICBzdGFnZVdpbkNhcmRUZWFtLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KHByZWRpY3RXaW5uZXIuZGF0YUF0dHIpO1xuICAgICAgICAgICAgc3RhZ2VMb3NlQ2FyZFRlYW0udGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkocHJlZGljdExvc2VyLmRhdGFBdHRyKTtcblxuICAgICAgICAgICAgc3RhZ2VPdGhlckNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkVGVhbU5hbWUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX2NhcmQtdGV4dFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZWFtID0gdGVhbXNXaW5baV07XG4gICAgICAgICAgICAgICAgLy8gaWYgKCF0ZWFtKSByZXR1cm47IC8vINGP0LrRidC+INGA0LDQv9GC0L7QvCDQvNC10L3RiNC1INC60L7QvNCw0L3QtCDRgyDRgdGC0LDQstGG0ZZcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhQXR0ciA9IHRlYW0uZGF0YUF0dHI7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhQXR0cik7XG5cblxuXG4gICAgICAgICAgICAgICAgY2FyZFRlYW1OYW1lLnNldEF0dHJpYnV0ZShcImRhdGEtdGVhbVwiLCBkYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgY2FyZFRlYW1OYW1lLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KGRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfb3BlblwiKTtcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGVhbSlcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjYXJkKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGVkIHVzZXIgcHJlZGljdGlvbjpcIiwgc3RhZ2VCZXQpO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIHVzZXIgcHJlZGljdGlvblwiLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UGxheW9mZihxdWFydGVyRmluYWxzLCBzZW1pRmluYWxzLCBmaW5hbHMsIHdpbm5lcil7XG5cblxuXG4gICAgICAgIGNvbnN0IHF1YXJ0ZXJGaW5hbHNDYXJkcyA9IHF1YXJ0ZXJGaW5hbHMucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5b2ZmX19jaG9vc2UtdGVhbVwiKTtcbiAgICAgICAgY29uc3Qgc2VtaUZpbmFsc0NhcmRzID0gc2VtaUZpbmFscy5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtXCIpO1xuICAgICAgICBjb25zdCBGaW5hbHNDYXJkcyA9IGZpbmFscy5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtXCIpO1xuICAgICAgICBjb25zdCB3aW5uZXJDYXJkcyA9IHdpbm5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbWlGaW5hbHNDYXJkcyk7XG5cbiAgICAgICAgcXVhcnRlckZpbmFsc0NhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGVhbUNhcmROYW1lID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtLXRleHRcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IHRlYW0gPSBxdW90ZXJGaW5hbHNEYXRhW2ldO1xuXG4gICAgICAgICAgICB0ZWFtQ2FyZE5hbWUuc2V0QXR0cmlidXRlKFwiZGF0YS10ZWFtXCIsIHRlYW0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRlYW1cIiwgdGVhbS5kYXRhQXR0cik7XG4gICAgICAgICAgICB0ZWFtQ2FyZE5hbWUudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkodGVhbS5kYXRhQXR0cik7XG5cbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcIl9kb25lXCIpO1xuXG5cblxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbWlGaW5hbHNDYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfZG9uZVwiLCBcIl9zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcIl9vcGVuXCIpO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclByZWRpY3QoKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QoJy9zdGFnZScpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZmluZChpdGVtID0+IGl0ZW0udXNlcmlkID09PSB1c2VySWQpKTtcbiAgICAgICAgcmV0dXJuIHJlcy5maW5kKGl0ZW0gPT4gaXRlbS51c2VyaWQgPT09IHVzZXJJZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgY29uc3QgbG9hZFRpbWUgPSAyMDA7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93RWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIGNvbnN0IGhpZGVFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuXG4gICAgICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyh1bmF1dGhNc2dzKTtcbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhpZGVFbGVtZW50cyh1bmF1dGhNc2dzKTtcbiAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgfSwgbG9hZFRpbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MobWFpblBhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobG9jYWxlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vycyh3ZWVrKSB7XG4gICAgICAgIHJlcXVlc3QoYC91c2Vycy8ke3dlZWt9YClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gZGF0YTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIHVzZXJJZCwgd2Vlayk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQsIHdlZWspIHtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHVzZXJzLnNsaWNlKDAsIDEwKS5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCB0b3BVc2Vyc0xlbmd0aCA9ICF1c2VySWQgfHwgaXNUb3BDdXJyZW50VXNlciAgPyAxMyA6IDEwO1xuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIHRvcFVzZXJzTGVuZ3RoKTtcbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UsIHdlZWspO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gZGVidWcgPyBudWxsIDogZ2V0UHJpemVUcmFuc2xhdGlvbktleSh1c2VyUGxhY2UsIHdlZWspO1xuXG4gICAgICAgICAgICBpZiAodXNlclBsYWNlIDw9IDMpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoYHBsYWNlJHt1c2VyUGxhY2V9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaWdobGlnaHQgfHwgaXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3lvdScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlclBsYWNlIDwgMTAgPyAnMCcgKyB1c2VyUGxhY2UgOiB1c2VyUGxhY2V9XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/ICc8c3BhbiBjbGFzcz1cInlvdVwiPicgKyB0cmFuc2xhdGVLZXkoXCJ5b3VcIikgKyAnPC9zcGFuPicgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJEYXRhLnBvaW50c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmVlZEtleSA9IGRlYnVnID8ga2V5IDogYCotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSoga2V5OiAke2tleX1gXG5cbiAgICAgICAgZGVmYXVsdFZhbHVlID0gIG5lZWRLZXkgfHwga2V5O1xuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIFwiKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFN0YXRlUGlja1N0YWdlKHN0YWdlKXtcbiAgICAgICAgY29uc3Qgc3RhZ2VDYXJkc1dyYXAgPSBzdGFnZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jYXJkcy13cmFwPVwic3RhZ2VcIl0nKVxuICAgICAgICBpZighc3RhZ2VDYXJkc1dyYXApIHJldHVyblxuICAgICAgICBjb25zdCBzdGFnZUNhcmRzID0gc3RhZ2VDYXJkc1dyYXAucXVlcnlTZWxlY3RvckFsbCgnLnN0YWdlX19jYXJkJyk7XG4gICAgICAgIGNvbnN0IHN0YWdlQ2FyZFdpbiA9IHN0YWdlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJpZy1zdGFnZT1cImJpZ1dpblwiXScpO1xuICAgICAgICBjb25zdCBzdGFnZUNhcmRMb3NlID0gc3RhZ2UucXVlcnlTZWxlY3RvcignW2RhdGEtYmlnLXN0YWdlPVwiYmlnTG9zZVwiXScpO1xuICAgICAgICBjb25zdCBzdGFnZUNhcmRXaW5OYW1lID0gc3RhZ2VDYXJkV2luLnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZV9fY2FyZC10ZXh0Jyk7XG4gICAgICAgIGNvbnN0IHN0YWdlQ2FyZExvc2VOYW1lID0gc3RhZ2VDYXJkTG9zZS5xdWVyeVNlbGVjdG9yKCcuc3RhZ2VfX2NhcmQtdGV4dCcpO1xuXG4gICAgICAgIGNvbnN0IHN0YWdlTnVtID0gTnVtYmVyKHN0YWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFnZScpKTtcbiAgICAgICAgbGV0IHN0YWdlU3RhdGUgPSBzdGFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGljay1zdGFnZScpO1xuICAgICAgICBjb25zdCBzdGFnZVJlc3VsdERhdGEgPSBzdGFnZXNSZXN1bHRbc3RhZ2VOdW0gLTFdXG5cbiAgICAgICAgbGV0IG90aGVyc1RlYW1zID0gc3RhZ2VSZXN1bHREYXRhLnRlYW1zQmV0XG4gICAgICAgIGxldCBiaWdXaW5UZWFtID0gc3RhZ2VSZXN1bHREYXRhLmJpZ1dpblxuICAgICAgICBsZXQgYmlnTG9zZVRlYW0gPSBzdGFnZVJlc3VsdERhdGEuYmlnTG9zZVxuXG4gICAgICAgIHN0YWdlQ2FyZFdpbi5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicsICdfc2VsZWN0ZWQnLCAnX2xvc2UnLCAnX3dpbicpO1xuICAgICAgICBzdGFnZUNhcmRMb3NlLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJywgJ19zZWxlY3RlZCcsICdfbG9zZScsICdfd2luJyk7XG5cbiAgICAgICAgaWYoc3RhZ2VTdGF0ZSA9PT0gXCJkb25lXCIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhZ2VDYXJkcylcbiAgICAgICAgICAgIHN0YWdlQ2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1OYW1lID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuc3RhZ2VfX2NhcmQtdGV4dCcpO1xuICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nLCAnX3NlbGVjdGVkJywgJ19sb3NlJywgJ193aW4nLCBcIl9kb25lXCIpO1xuICAgICAgICAgICAgICAgIGlmKHN0YWdlUmVzdWx0RGF0YS5kZWZhdXRWYWx1ZSkgY2FyZC5jbGFzc0xpc3QuYWRkKCdfZG9uZScpO1xuXG4gICAgICAgICAgICAgICAgdGVhbU5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nLCBvdGhlcnNUZWFtc1tpXS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgdGVhbU5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIG90aGVyc1RlYW1zW2ldLmRhdGFBdHRyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RhZ2VDYXJkV2luTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScsIGJpZ1dpblRlYW0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgc3RhZ2VDYXJkV2luTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYmlnV2luVGVhbS5kYXRhQXR0cik7XG4gICAgICAgICAgICBzdGFnZUNhcmRMb3NlTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScsIGJpZ0xvc2VUZWFtLmRhdGFBdHRyKTtcbiAgICAgICAgICAgIHN0YWdlQ2FyZExvc2VOYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBiaWdMb3NlVGVhbS5kYXRhQXR0cik7XG5cblxuICAgICAgICAgICAgaWYoc3RhZ2VSZXN1bHREYXRhLmRlZmF1dFZhbHVlKXtcbiAgICAgICAgICAgICAgICBzdGFnZUNhcmRXaW4uY2xhc3NMaXN0LmFkZCgnX2RvbmUnKTtcbiAgICAgICAgICAgICAgICBzdGFnZUNhcmRMb3NlLmNsYXNzTGlzdC5hZGQoJ19kb25lJyk7XG4gICAgICAgICAgICAgICAgc3RhZ2VDYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PntcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiX2RvbmVcIilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYmlnV2luVGVhbS5vdXRjb21lKVxuICAgICAgICAgICAgICAgIHN0YWdlQ2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gb3RoZXJzVGVhbXNbaV1cbiAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudERhdGEub3V0Y29tZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ193aW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ19sb3NlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmKGJpZ1dpblRlYW0ub3V0Y29tZSl7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlQ2FyZFdpbi5jbGFzc0xpc3QuYWRkKCdfd2luJyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YWdlQ2FyZFdpbilcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VDYXJkV2luLmNsYXNzTGlzdC5hZGQoJ19sb3NlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGJpZ0xvc2VUZWFtLm91dGNvbWUpe1xuICAgICAgICAgICAgICAgICAgICBzdGFnZUNhcmRMb3NlLmNsYXNzTGlzdC5hZGQoJ193aW4nKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VDYXJkTG9zZS5jbGFzc0xpc3QuYWRkKCdfbG9zZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgfVxuICAgICAgICBpZihzdGFnZVN0YXRlID09PSBcImFjdGl2ZVwiKXtcbiAgICAgICAgICAgIHN0YWdlQ2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1OYW1lID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuc3RhZ2VfX2NhcmQtdGV4dCcpO1xuICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nLCAnX3NlbGVjdGVkJywgJ19sb3NlJywgJ193aW4nLCBcIl9kb25lXCIpO1xuICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnX29wZW4nKTtcblxuICAgICAgICAgICAgICAgIHRlYW1OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBcInBvcHVwTG9zZVRpdGxlXCIgKTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHN0YWdlQ2FyZFdpbi5jbGFzc0xpc3QuYWRkKFwiX29wZW5cIilcbiAgICAgICAgICAgIHN0YWdlQ2FyZExvc2UuY2xhc3NMaXN0LmFkZChcIl9vcGVuXCIpXG5cbiAgICAgICAgICAgIHN0YWdlQ2FyZFdpbk5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIFwicG9wdXBMb3NlVGl0bGVcIik7XG4gICAgICAgICAgICBzdGFnZUNhcmRMb3NlTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgXCJwb3B1cExvc2VUaXRsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0cmFuc2xhdGUoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW5Qb3B1cChkYXRhQXR0ciwgY29udGFpbmVyKXtcbiAgICAgICAgY29uc3QgY3VycmVudFBvcHVwID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwPVwiJHtkYXRhQXR0cn1cIl1gKTtcblxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1vcGFjaXR5Jyk7XG5cbiAgICAgICAgY3VycmVudFBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZVBvcHVwKGNvbnRhaW5lcil7XG4gICAgICAgIGNvbnN0IHBvcHVwcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fcG9wdXAnKTtcbiAgICAgICAgY29uc3QgYWxsUG9wdXBzVGVhbVRhYnMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5b2ZmX19jaG9vc2UtdGVhbVwiKTtcblxuICAgICAgICBhbGxQb3B1cHNUZWFtVGFicy5mb3JFYWNoKCh0ZWFtKSA9PiB7XG4gICAgICAgICAgICB0ZWFtLmNsYXNzTGlzdC5yZW1vdmUoJ19zZWxlY3RlZCcpO1xuICAgICAgICAgICAgdGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICAgICAgdGVhbS5jbGFzc0xpc3QuYWRkKCdfb3BlbicpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHBvcHVwcy5mb3JFYWNoKHBvcHVwID0+IHtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktb3BhY2l0eScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG5cbiAgICAgICAgY29uc29sZS5sb2codGVhbXNXaW4pXG5cbiAgICAgICAgaWYodGVhbXNXaW4gJiYgdGVhbXNXaW4ubGVuZ3RoID09PSA2ICYmIGJpZ0xvc2UgJiYgYmlnV2luKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJlZGljdFwiKVxuICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LnJlbW92ZShcIl9sb2NrXCIpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UsIHdlZWspIHtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDMpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0ke3BsYWNlfWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTQtMTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMS0yNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTI2LTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tNTEtNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNzYtMTAwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEwMS0xMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTI2LTE1MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNTEtMTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDIwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE3Ni0yMDBgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4dHJhY3RUZWFtRGF0YShwYWlyRWxlbWVudCwgdGVhbVNlbGVjdG9yLCBncm91cEF0dHIpIHtcbiAgICAgICAgY29uc3QgdGVhbXMgPSBwYWlyRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRlYW1TZWxlY3Rvcik7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRlYW1zKS5tYXAodGVhbSA9PiAoe1xuICAgICAgICAgICAgZGF0YUF0dHI6IHRlYW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nKSxcbiAgICAgICAgICAgIHBhaXJOdW06IE51bWJlcih0ZWFtLmNsb3Nlc3QoYFske2dyb3VwQXR0cn1dYCk/LmdldEF0dHJpYnV0ZShncm91cEF0dHIpKVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVGVhbXNGcm9tUGFpcihwYWlycywgdGVhbXNBcnJheSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gWy4uLnRlYW1zQXJyYXldO1xuICAgICAgICBwYWlycy5mb3JFYWNoKHBhaXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXh0cmFjdGVkID0gZXh0cmFjdFRlYW1EYXRhKHBhaXIsICcucGxheW9mZl9fY2hvb3NlLXRlYW1bZGF0YS10ZWFtXScsICdkYXRhLWNob29zZS1zZW1pZmluYWwnKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IFsuLi5yZXN1bHQsIC4uLmV4dHJhY3RlZF07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclBsYXlvZmZQb3B1cChwb3B1cEVsZW1lbnQsIHRlYW1zUGxheW9mZiwgZGF0YU5hbWUsIHRlbXBvcmFyeURhdGFOYW1lKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IHBvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fcG9wdXAtc2Nyb2xsJyk7XG4gICAgICAgIGlmICghc2Nyb2xsQ29udGFpbmVyKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgc2F2ZWREYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGRhdGFOYW1lKSkgfHwgbnVsbDtcblxuICAgICAgICBpZiAoIXNhdmVkRGF0YSkge1xuICAgICAgICAgICAgcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fcG9wdXAtYnRuXCIpLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGxDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgdGVhbXNQbGF5b2ZmLmZvckVhY2godGVhbSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZWFtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0ZWFtRGl2LmNsYXNzTmFtZSA9ICdwbGF5b2ZmX19jaG9vc2UtdGVhbSBfb3Blbic7XG4gICAgICAgICAgICB0ZWFtRGl2LmRhdGFzZXQudGVhbSA9IHRlYW0uZGF0YUF0dHI7XG5cbiAgICAgICAgICAgIGNvbnN0IGljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGljb25EaXYuY2xhc3NOYW1lID0gJ3BsYXlvZmZfX2Nob29zZS10ZWFtLWljb24nO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0ZXh0RGl2LmNsYXNzTmFtZSA9ICdwbGF5b2ZmX19jaG9vc2UtdGVhbS10ZXh0JztcbiAgICAgICAgICAgIHRleHREaXYuZGF0YXNldC50ZWFtID0gdGVhbS5kYXRhQXR0cjtcbiAgICAgICAgICAgIHRleHREaXYudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkodGVhbS5kYXRhQXR0cik7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYnRuRGl2LmNsYXNzTmFtZSA9ICdwbGF5b2ZmX19jaG9vc2UtdGVhbS1idG4nO1xuXG4gICAgICAgICAgICB0ZWFtRGl2LmFwcGVuZChpY29uRGl2LCB0ZXh0RGl2LCBidG5EaXYpO1xuICAgICAgICAgICAgc2Nyb2xsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlYW1EaXYpO1xuXG4gICAgICAgICAgICBpZiAoc2F2ZWREYXRhICYmIHNhdmVkRGF0YS5kYXRhQXR0ciA9PT0gdGVhbS5kYXRhQXR0cikge1xuICAgICAgICAgICAgICAgIHRlYW1EaXYuY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGVhbURpdi5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB0ZWFtVGFicyA9IHNjcm9sbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fY2hvb3NlLXRlYW0nKTtcblxuICAgICAgICB0ZWFtVGFicy5mb3JFYWNoKCh0ZWFtVGFiLCBpKSA9PiB7XG4gICAgICAgICAgICB0ZWFtVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1OYW1lID0gdGVhbVRhYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVGVhbSA9IHRlYW1zUGxheW9mZi5maW5kKHRlYW0gPT4gdGVhbS5kYXRhQXR0ci50b0xvd2VyQ2FzZSgpID09PSB0ZWFtTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICBwb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmX19wb3B1cC1idG5cIikuY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRlbXBvcmFyeURhdGFOYW1lLCBKU09OLnN0cmluZ2lmeShzZWxlY3RlZFRlYW0pKTtcblxuICAgICAgICAgICAgICAgIHRlYW1UYWJzLmZvckVhY2goKGl0ZW0sIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdfc2VsZWN0ZWQnLCBpID09PSBqKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdfb3BlbicsIGkgIT09IGopO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIHJlcXVlc3QoJy9zdGFnZScpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJTdGFnZXMgPSByZXMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpXG5cbiAgICAgICAgICAgICAgICBpZih1c2VyU3RhZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlc1Jlc3VsdC5mb3JFYWNoKChzdGFnZSwgaSkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1c2VyU3RhZ2VzW2BzdGFnZSR7aSArIDF9QmV0YF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlc1Jlc3VsdFtpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbXNCZXQ6IFsuLi51c2VyU3RhZ2VzW2BzdGFnZSR7aSArIDF9QmV0YF0udGVhbXNCZXRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW46IHVzZXJTdGFnZXNbYHN0YWdlJHtpICsgMX1CZXRgXS5iaWdXaW5uZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2U6IHVzZXJTdGFnZXNbYHN0YWdlJHtpICsgMX1CZXRgXS5iaWdMb3NlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBxdW90ZXJGaW5hbHNEYXRhID0gWy4uLnN0YWdlc1Jlc3VsdFsyXS50ZWFtc0JldCwgc3RhZ2VzUmVzdWx0WzJdLmJpZ1dpbiBdO1xuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFN0YWdlID09PSAzKXtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhxdWFydGVyRmluYWxzKVxuXG4gICAgICAgICAgICAgICAgICAgIHNldFBsYXlvZmYocXVhcnRlckZpbmFscywgc2VtaUZpbmFscywgZmluYWxzLCB3aW5uZXIpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VtaUZpbmFsc1RlYW1zID0gWy4uLmFkZFRlYW1zRnJvbVBhaXIocXVhcnRlckZpbmFsc1BhaXJzLCBbXSldO1xuICAgICAgICAgICAgICAgICAgICBmaW5hbHNUZWFtcyA9IFsuLi5hZGRUZWFtc0Zyb21QYWlyKHNlbWlGaW5hbHNQYWlycywgW10pXTtcbiAgICAgICAgICAgICAgICAgICAgd2lubmVycyA9IFsuLi5hZGRUZWFtc0Zyb21QYWlyKHdpbm5lclBhaXJzLCBbXSldO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgc2VtaUZpbmFsc1BhaXJzQnRucy5mb3JFYWNoKChidG4sIGkpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlybVByZWRpY3RCdG4gPSBwbGF5b2ZmU2VtaUZpbmFsUG9wdXAucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmX19wb3B1cC1idG5cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuVGVhbU5hbWUgPSBidG4ucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX2Nob29zZS10ZWFtLXRleHQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBvcmFyeURhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGBzZW1pRmluYWxzVGVtcG9yYXJ5JHtpICsgMX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYHNlbWlGaW5hbHMke2kgKyAxfWAsIHRlbXBvcmFyeURhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnRuQ3VycmVudERhdGEgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYHNlbWlGaW5hbHMke2kgKyAxfWApKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VtaUZpbmFsc1RlYW1zLmxlbmd0aCA8IDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QcmVkaWN0QnRuLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUHJlZGljdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYnRuQ3VycmVudERhdGEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS10ZWFtXCIsIGJ0bkN1cnJlbnREYXRhLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5UZWFtTmFtZS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShidG5DdXJyZW50RGF0YS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKHBvcHVwc1dyYXApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW1pRmluYWxzVGVhbXMgPSBbLi4uYWRkVGVhbXNGcm9tUGFpcihxdWFydGVyRmluYWxzUGFpcnMsIFtdKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuUGFpck51bWJlciA9IE51bWJlcihidG4uZ2V0QXR0cmlidXRlKFwiZGF0YS1jaG9vc2Utc2VtaWZpbmFsXCIpKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJlZGljdFBhaXJEYXRhID0gW11cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbWlGaW5hbHNUZWFtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW1pRmluYWxzVGVhbXMuZm9yRWFjaCh0ZWFtID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0ZWFtLnBhaXJOdW0gPT09IGJ0blBhaXJOdW1iZXIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdFBhaXJEYXRhLnB1c2godGVhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbWlGaW5hbHNUZWFtcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJQbGF5b2ZmUG9wdXAocGxheW9mZlNlbWlGaW5hbFBvcHVwLCBwcmVkaWN0UGFpckRhdGEsYHNlbWlGaW5hbHMke2kgKyAxfWAsIGBzZW1pRmluYWxzVGVtcG9yYXJ5JHtpICsgMX1gKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwKFwicGxheW9mZlNlbWlGaW5hbFwiLCBwb3B1cHNXcmFwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QcmVkaWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wb3JhcnlEYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgc2VtaUZpbmFsc1RlbXBvcmFyeSR7aSArIDF9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYHNlbWlGaW5hbHMke2kgKyAxfWAsIHRlbXBvcmFyeURhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkN1cnJlbnREYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGBzZW1pRmluYWxzJHtpICsgMX1gKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYnRuQ3VycmVudERhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJ0bkN1cnJlbnREYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRlYW1cIiwgYnRuQ3VycmVudERhdGEuZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuVGVhbU5hbWUudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkoYnRuQ3VycmVudERhdGEuZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbWlGaW5hbHNUZWFtcy5sZW5ndGggPCA0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QcmVkaWN0QnRuLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVByZWRpY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKHBvcHVwc1dyYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBmaW5hbHNQYWlyc0J0bnMuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtUHJlZGljdEJ0biA9IHBsYXlvZmZGaW5hbFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fcG9wdXAtYnRuXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0blRlYW1OYW1lID0gYnRuLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbS10ZXh0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wb3JhcnlEYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgZmluYWxzVGVtcG9yYXJ5JHtpICsgMX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYGZpbmFscyR7aSArIDF9YCwgdGVtcG9yYXJ5RGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidG5DdXJyZW50RGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgZmluYWxzJHtpICsgMX1gKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG5DdXJyZW50RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS10ZWFtXCIsIGJ0bkN1cnJlbnREYXRhLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5UZWFtTmFtZS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShidG5DdXJyZW50RGF0YS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAocG9wdXBzV3JhcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsc1RlYW1zID0gWy4uLmFkZFRlYW1zRnJvbVBhaXIoc2VtaUZpbmFsc1BhaXJzLCBbXSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0blBhaXJOdW1iZXIgPSBOdW1iZXIoYnRuLmdldEF0dHJpYnV0ZShcImRhdGEtY2hvb3NlLWZpbmFsXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtUHJlZGljdEJ0biA9IHBsYXlvZmZGaW5hbFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fcG9wdXAtYnRuXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsaWRQYWlyTnVtcyA9IGJ0blBhaXJOdW1iZXIgPT09IDEgPyBbMSwgMl0gOiBbMywgNF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVkaWN0UGFpckRhdGEgPSBmaW5hbHNUZWFtcy5maWx0ZXIodGVhbSA9PiB2YWxpZFBhaXJOdW1zLmluY2x1ZGVzKHRlYW0ucGFpck51bSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyUGxheW9mZlBvcHVwKHBsYXlvZmZGaW5hbFBvcHVwLCBwcmVkaWN0UGFpckRhdGEsIGBmaW5hbHMke2kgKyAxfWAsIGBmaW5hbHNUZW1wb3Jhcnkke2kgKyAxfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cChcInBsYXlvZmZGaW5hbFwiLCBwb3B1cHNXcmFwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1IYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wb3JhcnlEYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgZmluYWxzVGVtcG9yYXJ5JHtpICsgMX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShgZmluYWxzJHtpICsgMX1gLCB0ZW1wb3JhcnlEYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5DdXJyZW50RGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgZmluYWxzJHtpICsgMX1gKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ0bkN1cnJlbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS10ZWFtXCIsIGJ0bkN1cnJlbnREYXRhLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0blRlYW1OYW1lLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KGJ0bkN1cnJlbnREYXRhLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QcmVkaWN0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maXJtSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAocG9wdXBzV3JhcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QcmVkaWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maXJtSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2lubmVyQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lubmVycyA9IFsuLi5hZGRUZWFtc0Zyb21QYWlyKHdpbm5lclBhaXJzLCBbXSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlybVByZWRpY3RCdG4gPSBwbGF5b2ZmV2lubmVyUG9wdXAucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmX19wb3B1cC1idG5cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuVGVhbU5hbWUgPSB3aW5uZXJDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fY2FyZC10ZXh0XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJQbGF5b2ZmUG9wdXAocGxheW9mZldpbm5lclBvcHVwLCB3aW5uZXJzLCBgd2lubmVyYCwgYHdpbm5lclRlbXBvcmFyeWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwKFwid2lubmVyXCIsIHBvcHVwc1dyYXApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wb3JhcnlEYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgd2lubmVyVGVtcG9yYXJ5YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShgd2lubmVyYCwgdGVtcG9yYXJ5RGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidG5DdXJyZW50RGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgd2lubmVyYCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ0bkN1cnJlbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbm5lckNhcmQuY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbm5lckNhcmQuc2V0QXR0cmlidXRlKFwiZGF0YS10ZWFtXCIsIGJ0bkN1cnJlbnREYXRhLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuVGVhbU5hbWUudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkoYnRuQ3VycmVudERhdGEuZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QcmVkaWN0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maXJtSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cChwb3B1cHNXcmFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QcmVkaWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maXJtSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhZ2VzLmZvckVhY2goKHN0YWdlLCBpKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0YWdlID4gc3RhZ2VzLmxlbmd0aCAtIDEgPyBjdXJyZW50U3RhZ2UgPSBzdGFnZXMubGVuZ3RoIC0gMSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdGFnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScsIGkgPT09IGN1cnJlbnRTdGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlc1RhYnNbaV0uY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScsIGkgPT09IGN1cnJlbnRTdGFnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9wID0gc3RhZ2UucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fdG9wXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib3R0b20gPSBzdGFnZS5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19ib3R0b21cIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc3RhZ2UucXVlcnlTZWxlY3RvcihcIi50aW1lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheW9mZldyYXAgPSBzdGFnZS5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX3dyYXBwZXJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiBjdXJyZW50U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcD8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b20/LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheW9mZldyYXA/LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXI/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1waWNrLXN0YWdlXCIsIFwibG9ja1wiKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbT8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmV3JhcD8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lcj8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZihpID09PSBjdXJyZW50U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlLnNldEF0dHJpYnV0ZShcImRhdGEtcGljay1zdGFnZVwiLCBcImFjdGl2ZVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKGkgPCBjdXJyZW50U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlLnNldEF0dHJpYnV0ZShcImRhdGEtcGljay1zdGFnZVwiLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlLmNsYXNzTGlzdC5hZGQoXCJfZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlUGlja1N0YWdlKHN0YWdlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFByZWRpY3QoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YWdlc1RhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5fYWN0aXZlJykpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RhZ2VWYWx1ZSA9IHRhYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhZ2UtdGFiJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXN0YWdlPVwiJHt0YXJnZXRTdGFnZVZhbHVlfVwiXWApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFnZXMuZm9yRWFjaChzdGFnZSA9PiBzdGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2VzVGFicy5mb3JFYWNoKHQgPT4gdC5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U3RhZ2U/LmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoTnVtYmVyKHRhcmdldFN0YWdlVmFsdWUpIC0gMSAhPT0gY3VycmVudFN0YWdlICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMuY2xhc3NMaXN0LmFkZChcIm5vQmdcIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMuY2xhc3NMaXN0LnJlbW92ZShcIm5vQmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJlbmRlclRlYW1CbG9ja3MoJ2JpZ1dpbicsIHRlYW1zKTtcbiAgICAgICAgICAgICAgICByZW5kZXJUZWFtQmxvY2tzKCdiaWdMb3NlJywgdGVhbXMpO1xuICAgICAgICAgICAgICAgIHJlbmRlclRlYW1CbG9ja3MoJ090aGVycycsIHRlYW1zKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN0YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtc3RhZ2VdLl9hY3RpdmVgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc0Nsb3NlQnRuID0gdGFyZ2V0LmNsb3Nlc3QoJy5wbGF5b2ZmX19wb3B1cC1jbG9zZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAgPSB0YXJnZXQuY2xvc2VzdCgnLnBsYXlvZmZfX3BvcHVwJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vINC70L7Qs9GW0LrQsCDQtNC70Y8g0L/QtdGA0YjQuNGFIDPRhSDQtdGC0LDQv9GW0LJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGFnZSA8PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGlja2VkQ2FyZCA9IHRhcmdldC5jbG9zZXN0KCcuc3RhZ2VfX2NhcmQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkQmlnV2luID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWJpZy1zdGFnZT1cImJpZ1dpblwiXScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRCaWdMb3NlID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWJpZy1zdGFnZT1cImJpZ0xvc2VcIl0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW5Qb3B1cCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1wb3B1cD1cImJpZ1dpblwiXScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VQb3B1cCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1wb3B1cD1cImJpZ0xvc2VcIl0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdGhlcnNQb3B1cCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1wb3B1cD1cIk90aGVyc1wiXScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0gPSB0YXJnZXQuY2xvc2VzdCgnLnBsYXlvZmZfX2Nob29zZS10ZWFtJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzQ2FyZCA9IHRhcmdldC5jbG9zZXN0KCcuc3RhZ2VfX2NhcmQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxQb3B1cHNUZWFtID0gdGFyZ2V0LmNsb3Nlc3QoXCIucGxheW9mZl9fcG9wdXBcIik/LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWRUZWFtTmFtZSA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZWFtXScpPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ1dpbiA9IGFjdGl2ZVN0YWdlPy5xdWVyeVNlbGVjdG9yKGBbZGF0YS1iaWctc3RhZ2U9XCJiaWdXaW5cIl1gKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdXaW5UZWFtID0gYWN0aXZlQmlnV2luPy5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19jYXJkLXRleHRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnTG9zZSA9IGFjdGl2ZVN0YWdlPy5xdWVyeVNlbGVjdG9yKGBbZGF0YS1iaWctc3RhZ2U9XCJiaWdMb3NlXCJdYCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnTG9zZVRlYW0gPSBhY3RpdmVCaWdMb3NlPy5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19jYXJkLXRleHRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luUG9wdXBzVGVhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwPVwiYmlnV2luXCJdYCkucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZS10ZWFtLXRleHQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdMb3NlUG9wdXBzVGVhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwPVwiYmlnTG9zZVwiXWApLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbS10ZXh0JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzUG9wdXBzVGVhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwPVwiT3RoZXJzXCJdYCkucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZS10ZWFtLXRleHQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQ2hvb3NlQnRuID0gdGFyZ2V0LmNsb3Nlc3QoJy5wbGF5b2ZmX19wb3B1cC1idG4nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcnNDb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCJPdGhlcnNcIl1gKS5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fcG9wdXAtYnRuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luQ29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwPVwiYmlnV2luXCJdYCkucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX3BvcHVwLWJ0bicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VDb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCJiaWdMb3NlXCJdYCkucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX3BvcHVwLWJ0bicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZU90aGVycyA9IGFjdGl2ZVN0YWdlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNhcmRzLXdyYXA9XCJzdGFnZVwiXWApLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFnZV9fY2FyZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQstGW0LTQutGA0LjRgtGC0Y8g0L/QvtC/0LDQv9GDINC90LAgMyAwXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYXJkQmlnV2luKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYmlnV2luVGVtcG9yYXJ5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJpZ1dpbil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ1dpbkNvbmZpcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ1dpblRlbXBvcmFyeVwiLCBiaWdXaW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnV2luVGVtcG9yYXJ5XCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luQ29uZmlybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ1dpbkNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnX2xvY2snKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ1dpblBvcHVwc1RlYW0uZm9yRWFjaCgodGVhbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTmFtZSA9IGFjdGl2ZVN0YWdlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJpZy1zdGFnZT1cImJpZ0xvc2VcIl1gKS5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19jYXJkLXRleHRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1XcmFwID0gdGVhbS5jbG9zZXN0KFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWRUZWFtID0gdGVhbU5hbWUuZ2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nKSA9PT0gdGVhbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkQmlnV2luID0gSlNPTi5wYXJzZShiaWdXaW4pPy5kYXRhQXR0ciA9PT0gdGVhbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlYW1cIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NlbGVjdGVkQmlnV2luKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNTZWxlY3RlZFRlYW0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cChcImJpZ1dpblwiLCBwb3B1cHNXcmFwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQstGW0LTQutGA0LjRgtGC0Y8g0L/QvtC/0LDQv9GDINC90LAgMCAzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYXJkQmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImJpZ0xvc2VUZW1wb3JhcnlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VDb25maXJtQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdMb3NlVGVtcG9yYXJ5XCIsIGJpZ0xvc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnTG9zZVRlbXBvcmFyeVwiKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VDb25maXJtQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZUNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnX2xvY2snKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdMb3NlUG9wdXBzVGVhbS5mb3JFYWNoKCh0ZWFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1OYW1lID0gYWN0aXZlU3RhZ2UucXVlcnlTZWxlY3RvcihgW2RhdGEtYmlnLXN0YWdlPVwiYmlnV2luXCJdYCkucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fY2FyZC10ZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtV3JhcCA9IHRlYW0uY2xvc2VzdChcIi5wbGF5b2ZmX19jaG9vc2UtdGVhbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkVGVhbSA9IHRlYW1OYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJykgPT09IHRlYW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZEJpZ0xvc2UgPSBKU09OLnBhcnNlKGJpZ0xvc2UpPy5kYXRhQXR0ciA9PT0gdGVhbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlYW1cIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NlbGVjdGVkQmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU2VsZWN0ZWRUZWFtKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cChcImJpZ0xvc2VcIiwgcG9wdXBzV3JhcClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LLQuNCx0ZbRgCDQv9GA0LXQtNGW0LrRgtGDINC90LAgMyAwXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihiaWdXaW5Qb3B1cCAmJiBwb3B1cHNUZWFtKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjbGlja2VkVGVhbU5hbWUgJiYgcG9wdXBzVGVhbSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzU2VsZWN0ZWRCaWdXaW4gPSBKU09OLnBhcnNlKGJpZ1dpbikgPz8gZmFsc2VcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NlbGVjdGVkQmlnV2luKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdXaW5UZW1wb3JhcnlcIiwgYmlnV2luKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGVhbSA9IHRlYW1zLmZpbmQodGVhbSA9PiB0ZWFtLmRhdGFBdHRyID09PSBjbGlja2VkVGVhbU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdXaW5UZW1wb3JhcnlcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRlYW0pKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBvcHVwc1RlYW0uZm9yRWFjaCgodGVhbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbS5jbGFzc0xpc3QuYWRkKCdfb3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdXaW5UZW1wb3JhcnlcIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luQ29uZmlybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luQ29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LLQuNCx0ZbRgCDQv9GA0LXQtNGW0LrRgtGDINC90LAgMCAzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihiaWdMb3NlUG9wdXAgJiYgcG9wdXBzVGVhbSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjbGlja2VkVGVhbU5hbWUpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc1NlbGVjdGVkQmlnTG9zZSA9IEpTT04ucGFyc2UoYmlnTG9zZSkgPz8gZmFsc2VcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NlbGVjdGVkQmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmlnTG9zZVRlbXBvcmFyeVwiLCBiaWdMb3NlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGVhbSA9IHRlYW1zLmZpbmQodGVhbSA9PiB0ZWFtLmRhdGFBdHRyID09PSBjbGlja2VkVGVhbU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdMb3NlVGVtcG9yYXJ5XCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUZWFtKSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxQb3B1cHNUZWFtLmZvckVhY2goKHRlYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uY2xhc3NMaXN0LmFkZCgnX29wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0/LmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0/LmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ0xvc2VUZW1wb3JhcnlcIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZUNvbmZpcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VDb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoJ19sb2NrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LLRltC00LrRgNC40YLRgtGPINC/0L7Qv9Cw0L/RgyDQvdCwINGW0L3RiNGWINC60L7QvNCw0L3QtNC4XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjbGlja2VkQ2FyZCAmJiAhY2FyZEJpZ1dpbiAmJiAhY2FyZEJpZ0xvc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbW9wb3JhcnlUZWFtcyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0ZWFtc1dpblRlbXBvcmFyeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRlYW1zID0gdGVhbXNXaW4/LmZpbHRlcihpdGVtID0+IGl0ZW0gJiYgaXRlbS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRUZWFtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidGVhbXNXaW5UZW1wb3JhcnlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxlY3RlZFRlYW1zICYmIHNlbGVjdGVkVGVhbXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ0ZWFtc1dpblRlbXBvcmFyeVwiLCBKU09OLnN0cmluZ2lmeShzZWxlY3RlZFRlYW1zKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRlbW9wb3JhcnlUZWFtcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyc0NvbmZpcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzQ29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzUG9wdXBzVGVhbS5mb3JFYWNoKCh0ZWFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1EYXRhQXR0ciA9IHRlYW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbVdyYXAgPSB0ZWFtLmNsb3Nlc3QoXCIucGxheW9mZl9fY2hvb3NlLXRlYW1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbU5hbWVXaW4gPSBhY3RpdmVTdGFnZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1iaWctc3RhZ2U9XCJiaWdXaW5cIl0gLnN0YWdlX19jYXJkLXRleHQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbU5hbWVMb3NlID0gYWN0aXZlU3RhZ2UucXVlcnlTZWxlY3RvcignW2RhdGEtYmlnLXN0YWdlPVwiYmlnTG9zZVwiXSAuc3RhZ2VfX2NhcmQtdGV4dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWRUZWFtID0gc2VsZWN0ZWRUZWFtcz8uc29tZShpdGVtID0+IGl0ZW0uZGF0YUF0dHIgPT09IHRlYW1EYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWRUZWFtV2luID0gdGVhbU5hbWVXaW4/LmdldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJykgPT09IHRlYW1EYXRhQXR0cjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZFRlYW1Mb3NlID0gdGVhbU5hbWVMb3NlPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpID09PSB0ZWFtRGF0YUF0dHI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2VsZWN0ZWRUZWFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZWN0ZWRUZWFtcz8ubGVuZ3RoID4gMCAmJiAhaXNTZWxlY3RlZFRlYW0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1NlbGVjdGVkVGVhbVdpbiB8fCBpc1NlbGVjdGVkVGVhbUxvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFjdGl2ZU90aGVycyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyc0FycmF5ID0gQXJyYXkuZnJvbShhY3RpdmVPdGhlcnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleENhcmQgPSBvdGhlcnNBcnJheS5pbmRleE9mKG90aGVyc0NhcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleENhcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cChcIk90aGVyc1wiLCBwb3B1cHNXcmFwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQt9Cw0LrRgNC40YLRgtGPINC/0L7Qv9Cw0L/RgyDQvdCwINGW0L3RiNGWINC60L7QvNCw0L3QtNC4XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwb3B1cHNDbG9zZUJ0biB8fCAhY2xpY2tlZENhcmQgJiYgIXBvcHVwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAocG9wdXBzV3JhcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCy0LjQsdGW0YAg0L/RgNC10LTRltC60YLRgyDQvdCwINCy0YHRliDRltC90YjRliDQutC+0LzQsNC90LTQuFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE90aGVyc1BvcHVwICYmIHBvcHVwc1RlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwb3B1cHNUZWFtLmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBvcHVwc1RlYW0uY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xpY2tlZFRlYW1OYW1lKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUZWFtID0gdGVhbXMuZmluZCh0ZWFtID0+IHRlYW0uZGF0YUF0dHIgPT09IGNsaWNrZWRUZWFtTmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUZWFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UHJlZGljdCA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRlYW1zV2luVGVtcG9yYXJ5XCIpKSB8fCBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxyZWFkeUFkZGVkID0gbmV3UHJlZGljdC5zb21lKGl0ZW0gPT4gaXRlbS5kYXRhQXR0ciA9PT0gY3VycmVudFRlYW0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNQcmVkaWN0RnVsbCA9IG5ld1ByZWRpY3QubGVuZ3RoID49IDc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYWxyZWFkeUFkZGVkICYmICFpc1ByZWRpY3RGdWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJlZGljdC5wdXNoKGN1cnJlbnRUZWFtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidGVhbXNXaW5UZW1wb3JhcnlcIiwgSlNPTi5zdHJpbmdpZnkobmV3UHJlZGljdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIEFkZGVkOlwiLCBjdXJyZW50VGVhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbS5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cHNUZWFtLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ByZWRpY3QgPSBuZXdQcmVkaWN0LmZpbHRlcih0ZWFtID0+IHRlYW0uZGF0YUF0dHIgIT09IGN1cnJlbnRUZWFtLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidGVhbXNXaW5UZW1wb3JhcnlcIiwgSlNPTi5zdHJpbmdpZnkobmV3UHJlZGljdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pqg77iPIFRlYW0gcmVtb3ZlZFwiLCBjdXJyZW50VGVhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cHNUZWFtLmNsYXNzTGlzdC5hZGQoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRMZW5ndGggPSBuZXdQcmVkaWN0Lmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRMZW5ndGggPCA3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzQ29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBvcHVwc1RlYW0uZm9yRWFjaCh0ZWFtID0+IHRlYW0uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHVwZGF0ZWRMZW5ndGggPT09IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcnNDb25maXJtQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsUG9wdXBzVGVhbS5mb3JFYWNoKHRlYW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVhbS5jbGFzc0xpc3QuY29udGFpbnMoJ19vcGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinYwgVGVhbSBub3QgZm91bmQgZm9yOlwiLCBjbGlja2VkVGVhbU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0L/RltC00YLQstC10YDQtNC20LXQvdC90Y8g0LLQuNCx0L7RgNGDINCyINC/0L7Qv9Cw0L/RllxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlybUNob29zZUJ0bil7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtc1dpbiA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRlYW1zV2luVGVtcG9yYXJ5XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0ZWFtc1dpbikgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInRlYW1zV2luXCIsIEpTT04uc3RyaW5naWZ5KHRlYW1zV2luKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdMb3NlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ0xvc2VUZW1wb3JhcnlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmlnTG9zZSkgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ0xvc2VcIiwgYmlnTG9zZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ1dpbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdXaW5UZW1wb3JhcnlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmlnV2luKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmlnV2luXCIsIGJpZ1dpbilcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmlnV2luUHJlZGljdCA9IEpTT04ucGFyc2UoYmlnV2luKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpZ0xvc2VQcmVkaWN0ID0gSlNPTi5wYXJzZShiaWdMb3NlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG90aGVyVGVhbXNQcmVkaWN0ID0gdGVhbXNXaW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiaWdMb3NlUHJlZGljdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ0xvc2UuY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdMb3NlLmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ0xvc2VUZWFtLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KGJpZ0xvc2VQcmVkaWN0LmRhdGFBdHRyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdMb3NlVGVhbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScsIGJpZ0xvc2VQcmVkaWN0LmRhdGFBdHRyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJpZ1dpblByZWRpY3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdXaW4uY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdXaW4uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnV2luVGVhbS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShiaWdXaW5QcmVkaWN0LmRhdGFBdHRyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdXaW5UZWFtLnNldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJywgYmlnV2luUHJlZGljdC5kYXRhQXR0cilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvdGhlclRlYW1zUHJlZGljdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyVGVhbXNQcmVkaWN0LmZvckVhY2goKHRlYW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDYXJkVGVhbU5hbWUgPSBhY3RpdmVPdGhlcnNbaV0ucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fY2FyZC10ZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudENhcmRUZWFtTmFtZSwgdGVhbSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlT3RoZXJzW2ldLmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVPdGhlcnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FyZFRlYW1OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJywgdGVhbS5kYXRhQXR0cilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXJkVGVhbU5hbWUudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkodGVhbS5kYXRhQXR0cilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRlYW1zV2luICYmIGJpZ1dpbiAmJiBiaWdMb3NlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKHBvcHVwc1dyYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0ZWFtc1dpbiAmJiBiaWdXaW4gJiYgYmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VQcmVkaWN0QnRuLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LfQsNC60YDQuNGC0YLRjyDQv9C+0L/QsNC/0YMg0L3QsCDRltC90YjRliDQutC+0LzQsNC90LTQuFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGlja2VkVGFiID0gdGFyZ2V0LmNsb3Nlc3QoXCIucGxheW9mZl9fY2hvb3NlLXRlYW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRDYXJkID0gdGFyZ2V0LmNsb3Nlc3QoXCIucGxheW9mZl9fY2FyZFwiKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwb3B1cHNDbG9zZUJ0biB8fCAhY2xpY2tlZFRhYiAmJiAhcG9wdXAgJiYgIWNsaWNrZWRDYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cChwb3B1cHNXcmFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFN0YWdlIDwgMyl7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlvZmZQcmVkaWN0b3IuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGxheW9mZlBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgc2VuZFByZWRpY3QoKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2V0VGltZW91dChoaWRlTG9hZGVyLCAxMDAwKVxuXG4gICAgICAgICAgICBsZXQgaW5pdGlhbE9mZnNldExlZnQgPSBudWxsO1xuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVQbGF5b2ZmUG9zaXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDEzMDAgJiYgd2luZG93LmlubmVyV2lkdGggPiA1NTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlvZmZTdGFnZS5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE9mZnNldExlZnQgPSBwbGF5b2ZmU3RhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZWZ0ID0gaW5pdGlhbE9mZnNldExlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaWZ0ID0gY3VycmVudExlZnQgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlvZmZTdGFnZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtzaGlmdH1weClgO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheW9mZlN0YWdlLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsT2Zmc2V0TGVmdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMClcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCB1cGRhdGVQbGF5b2ZmUG9zaXRpb24pO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlUGxheW9mZlBvc2l0aW9uKTtcblxuICAgICAgICAgICAgY29uc3QgcGxheW9mZlBoYXNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19zdGFnZScpO1xuICAgICAgICAgICAgY29uc3QgcGxheW9mZkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmJyk7XG4gICAgICAgICAgICBjb25zdCBwbGF5b2ZmTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19idG4tcmlnaHQnKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXlvZmZQcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX2J0bi1sZWZ0Jyk7XG5cbiAgICAgICAgICAgIGxldCBwaGFzZUNvdW50ID0gMztcbiAgICAgICAgICAgIGxldCBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDU1MDtcblxuICAgICAgICAgICAgY29uc3Qgc2V0Q3VycmVudFBoYXNlID0gKHBoYXNlcywgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHBoYXNlcy5mb3JFYWNoKChwaGFzZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwaGFzZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiLCBpICE9PSBjdXJyZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHNob3dBbGxQaGFzZXMgPSAocGhhc2VzKSA9PiB7XG4gICAgICAgICAgICAgICAgcGhhc2VzLmZvckVhY2gocGhhc2UgPT4gcGhhc2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIikpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgaGlkZUFsbEV4Y2VwdEN1cnJlbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFBoYXNlKHBsYXlvZmZQaGFzZXMsIHBoYXNlQ291bnQpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwaGFzZUNvdW50ID0gKHBoYXNlQ291bnQgKyAxKSAlIHBsYXlvZmZQaGFzZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGhpZGVBbGxFeGNlcHRDdXJyZW50KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVQcmV2ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBoYXNlQ291bnQgPSAocGhhc2VDb3VudCAtIDEgKyBwbGF5b2ZmUGhhc2VzLmxlbmd0aCkgJSBwbGF5b2ZmUGhhc2VzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBoaWRlQWxsRXhjZXB0Q3VycmVudCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IHRvdWNoU3RhcnRYID0gMDtcbiAgICAgICAgICAgIGxldCB0b3VjaEVuZFggPSAwO1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVTd2lwZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gdG91Y2hFbmRYIC0gdG91Y2hTdGFydFg7XG5cbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiA1MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgICAgIGhpZGVBbGxFeGNlcHRDdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgcGxheW9mZk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVOZXh0KTtcbiAgICAgICAgICAgICAgICBwbGF5b2ZmUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByZXYpO1xuXG4gICAgICAgICAgICAgICAgcGxheW9mZkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hTdGFydFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBwbGF5b2ZmQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hFbmRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTd2lwZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vd01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDU1MDtcblxuICAgICAgICAgICAgICAgIGlmIChub3dNb2JpbGUgJiYgIWlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTW9iaWxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUFsbEV4Y2VwdEN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheW9mZk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVOZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcGxheW9mZlByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQcmV2KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIW5vd01vYmlsZSAmJiBpc01vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICBpc01vYmlsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzaG93QWxsUGhhc2VzKHBsYXlvZmZQaGFzZXMpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmTmV4dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5leHQpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmUHJldi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByZXYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xpY2stcGlja1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpLnRoZW4oaW5pdClcblxuICAgIC8vdGVzdFxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tbG5nXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwidWtcIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG5cbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYXV0aFwiKVxuXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHVzZXJJZCl7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjc3Nzc3Nzc5XCIpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKTtcbiAgICBjb25zdCBwb3B1cFdpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW4tcG9wdXAnKTtcbiAgICBjb25zdCBwb3B1cExvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9zZS1wb3B1cCcpO1xuICAgIGNvbnN0IHBvcHVwT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3RoZXJzLXBvcHVwJyk7XG5cbiAgICBjb25zb2xlLmxvZyhwb3B1cFdpbi5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX3BvcHVwLWNsb3NlXCIpKVxuXG4gICAgLy8gZnVuY3Rpb24gc2V0SGlkZVBvcHVwKHBvcHVwKXtcbiAgICAvLyAgICAgY29uc29sZS5sb2cocG9wdXAucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmX19wb3B1cC1jbG9zZVwiKSk7XG4gICAgLy8gICAgIGNvbnN0IGNsb3NlQnRuID0gcG9wdXAucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX3BvcHVwLWNsb3NlJyk7XG4gICAgLy9cbiAgICAvLyAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAvLyAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS1vcGFjaXR5Jyk7XG4gICAgLy8gICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBzZXRIaWRlUG9wdXAocG9wdXBXaW4pO1xuICAgIC8vIHNldEhpZGVQb3B1cChwb3B1cExvc2UpO1xuICAgIC8vIHNldEhpZGVQb3B1cChwb3B1cE90aGVyKTtcblxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wb3B1cC13aW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXktb3BhY2l0eScpO1xuICAgICAgICBwb3B1cFdpbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIHBvcHVwTG9zZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHBvcHVwT3RoZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBvcHVwLWxvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXktb3BhY2l0eScpO1xuICAgICAgICBwb3B1cFdpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHBvcHVwTG9zZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIHBvcHVwT3RoZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBvcHVwLW90aGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LW9wYWNpdHknKTtcbiAgICAgICAgcG9wdXBXaW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBwb3B1cExvc2UuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBwb3B1cE90aGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi10aW1lcicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhZ2UxID0gJzEnXG4gICAgICAgIGNvbnN0IHN0YWdlMiA9ICc0J1xuXG4gICAgICAgIGNvbnN0IHNhdmVkRGF0ZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50RGF0ZVwiKTtcblxuICAgICAgICBjb25zdCBuZXdEYXRlID0gc2F2ZWREYXRlID09PSBzdGFnZTIgPyBzdGFnZTEgOiBzdGFnZTI7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50RGF0ZVwiLCBuZXdEYXRlKTtcblxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuXG59KSgpO1xuIl19
