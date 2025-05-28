"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
  var semiFinalChoose = [];
  var finalChoose = [];
  var winnerChoose = null;
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
    if (currentStage === 3) {}
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
  function extractPlayoffSelections(quarterFinals, semiFinals, finals, winner) {
    var quarterFinalsCards = quarterFinals.querySelectorAll(".playoff__choose-team");
    var semiFinalsCards = semiFinals.querySelectorAll(".playoff__choose-team");
    var FinalsCards = finals.querySelectorAll(".playoff__choose-team");
    var winnerCards = winner.querySelectorAll(".playoff__choose-team");

    // Отримати непорожні об'єкти з sessionStorage для півфіналів
    var semiFinalChoose = [];
    for (var i = 1; i <= 4; i++) {
      var item = sessionStorage.getItem("semiFinals".concat(i));
      if (item) {
        try {
          var parsed = JSON.parse(item);
          if (parsed && _typeof(parsed) === "object" && Object.keys(parsed).length > 0) {
            semiFinalChoose.push(parsed);
          }
        } catch (e) {
          console.warn("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0443 semiFinals".concat(i, ":"), e);
        }
      }
    }

    // Отримати непорожні об'єкти з sessionStorage для фіналів
    var finalChoose = [];
    for (var _i = 1; _i <= 2; _i++) {
      var _item = sessionStorage.getItem("finals".concat(_i));
      if (_item) {
        try {
          var _parsed = JSON.parse(_item);
          if (_parsed && _typeof(_parsed) === "object" && Object.keys(_parsed).length > 0) {
            finalChoose.push(_parsed);
          }
        } catch (e) {
          console.warn("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0443 finals".concat(_i, ":"), e);
        }
      }
    }

    // Отримати переможця, якщо він валідний
    var winnerChoose = {};
    var winnerItem = sessionStorage.getItem("winner");
    if (winnerItem) {
      try {
        var _parsed2 = JSON.parse(winnerItem);
        if (_parsed2 && _typeof(_parsed2) === "object" && !Array.isArray(_parsed2) && Object.keys(_parsed2).length > 0) {
          winnerChoose = _parsed2;
        }
      } catch (e) {
        console.warn("Помилка парсингу winner:", e);
      }
    }
    return {
      quarterFinalsCards: quarterFinalsCards,
      semiFinalsCards: semiFinalsCards,
      FinalsCards: FinalsCards,
      winnerCards: winnerCards,
      semiFinalChoose: semiFinalChoose,
      finalChoose: finalChoose,
      winnerChoose: winnerChoose
    };
  }
  function setPlayoff(quarterFinals, semiFinals, finals, winner) {
    var _extractPlayoffSelect = extractPlayoffSelections(quarterFinals, semiFinals, finals, winner),
      quarterFinalsCards = _extractPlayoffSelect.quarterFinalsCards,
      semiFinalsCards = _extractPlayoffSelect.semiFinalsCards,
      FinalsCards = _extractPlayoffSelect.FinalsCards,
      winnerCards = _extractPlayoffSelect.winnerCards,
      semiFinalChoose = _extractPlayoffSelect.semiFinalChoose,
      finalChoose = _extractPlayoffSelect.finalChoose,
      winnerChoose = _extractPlayoffSelect.winnerChoose;
    quarterFinalsCards.forEach(function (card, i) {
      var teamCardName = card.querySelector(".playoff__choose-team-text");
      var team = quoterFinalsData[i];
      teamCardName.setAttribute("data-team", team.dataAttr);
      card.setAttribute("data-team", team.dataAttr);
      teamCardName.textContent = translateKey(team.dataAttr);
      card.classList.add("_done");
    });
    FinalsCards.forEach(function (card, i) {
      if (semiFinalChoose.length < 4) {
        card.classList.add("_lock");
      } else {
        card.classList.remove("_lock");
      }
    });
    if (finalChoose.length < 2) {
      winnerCard.classList.add("_lock");
    } else {
      winnerCard.classList.remove("_lock");
    }
    console.log(winnerChoose);
    if (winnerChoose && Object.keys(winnerChoose).length > 0) {
      winnerCard.classList.add("_selected");
      winnerCard.classList.remove("_open");
      winnerCard.setAttribute("data-team", winnerChoose.dataAttr);
      winnerCard.querySelector(".playoff__card-text").textContent = translateKey(winnerChoose.dataAttr);
    }
    if (semiFinalChoose.length < 4 || finalChoose.length < 2 || !winnerChoose) {
      makePredictBtn.classList.add("_lock");
    } else {
      winnerCard.classList.remove("_lock");
    }
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
    for (var _i2 = 0, _arr = ['uk', 'en']; _i2 < _arr.length; _i2++) {
      var lang = _arr[_i2];
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
                    if (btnCurrentData) {
                      btn.classList.add('_selected');
                      btn.setAttribute("data-team", btnCurrentData.dataAttr);
                      btnTeamName.textContent = translateKey(btnCurrentData.dataAttr);
                    } else {
                      btn.classList.remove('_selected');
                      btn.classList.add('_open');
                    }
                    btn.addEventListener('click', function (e) {
                      semiFinalsTeams = _toConsumableArray(addTeamsFromPair(quarterFinalsPairs, []));
                      var btnPairNumber = Number(btn.getAttribute("data-choose-semifinal"));
                      var predictPairData = [];
                      semiFinalsTeams.forEach(function (team) {
                        if (team.pairNum === btnPairNumber) {
                          predictPairData.push(team);
                        }
                      });
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
                        setPlayoff(quarterFinals, semiFinals, finals, winner);
                      });
                    });
                  });
                  finalsPairsBtns.forEach(function (btn, i) {
                    var confirmPredictBtn = playoffFinalPopup.querySelector(".playoff__popup-btn"),
                      btnTeamName = btn.querySelector('.playoff__choose-team-text');
                    var temporaryData = sessionStorage.getItem("finalsTemporary".concat(i + 1));
                    sessionStorage.setItem("finals".concat(i + 1), temporaryData);
                    var btnCurrentData = JSON.parse(sessionStorage.getItem("finals".concat(i + 1)));
                    if (semiFinalChoose.length < 4) {
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
                    // closePopup(popupsWrap);
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
                        setPlayoff(quarterFinals, semiFinals, finals, winner);
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
                      setPlayoff(quarterFinals, semiFinals, finals, winner);
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
                      predictorCheckIn.classList.add('hide');
                    } else {
                      makePredictBtn.classList.remove('hide');
                      results.classList.remove("noBg");
                      predictorCheckIn.classList.remove('hide');
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
    var stage2 = '3';
    var savedDate = sessionStorage.getItem("currentDate");
    var newDate = savedDate === stage2 ? stage1 : stage2;
    sessionStorage.setItem("currentDate", newDate);
    location.reload();
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvY2F0aW9uIiwicmVsb2FkIiwiYXBpVVJMIiwic3RhZ2VzRGF0YSIsImRhdGEiLCJEYXRlIiwiY3VycmVudERhdGUiLCJjdXJyZW50U3RhZ2UiLCJOdW1iZXIiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInN0YWdlcyIsInN0YWdlQWN0aXZlIiwic3RhZ2VzVGFicyIsInBsYXlvZmZTdGFnZSIsInJlc3VsdHMiLCJwcmVkaWN0b3IiLCJwbGF5b2ZmUHJlZGljdG9yIiwidGVhbVRleHRQb3B1cHMiLCJwb3B1cHNXcmFwIiwibWFrZVByZWRpY3RCdG4iLCJwcmVkaWN0b3JDaGVja0luIiwicGxheW9mZlN0YWdlcyIsInF1YXJ0ZXJGaW5hbHMiLCJzZW1pRmluYWxzIiwiZmluYWxzIiwid2lubmVyIiwicXVhcnRlckZpbmFsc1BhaXJzIiwic2VtaUZpbmFsc1BhaXJzIiwid2lubmVyUGFpcnMiLCJzZW1pRmluYWxzUGFpcnNCdG5zIiwiZmluYWxzUGFpcnNCdG5zIiwid2lubmVyQ2FyZCIsInBsYXlvZmZTZW1pRmluYWxQb3B1cCIsInBsYXlvZmZGaW5hbFBvcHVwIiwicGxheW9mZldpbm5lclBvcHVwIiwic2VtaUZpbmFsc1RlYW1zIiwiZmluYWxzVGVhbXMiLCJ3aW5uZXJzIiwic2VtaUZpbmFsQ2hvb3NlIiwiZmluYWxDaG9vc2UiLCJ3aW5uZXJDaG9vc2UiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsInRlYW1zIiwidGVhbSIsImJpZ0xvc2UiLCJiaWdXaW4iLCJ0ZWFtc1dpbiIsIkpTT04iLCJwYXJzZSIsInN0YWdlc1Jlc3VsdCIsImRlZmF1dFZhbHVlIiwidGVhbXNCZXQiLCJvdXRjb21lIiwicXVvdGVyRmluYWxzRGF0YSIsImxvYWRlckJ0biIsImxvY2FsZSIsImRlYnVnIiwib3RoZXJzQXJyYXkiLCJpbmRleENhcmQiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZXJyIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwicmVuZGVyVGVhbUJsb2NrcyIsInBvcHVwQXR0ciIsInBvcHVwIiwiY29udGFpbmVyIiwidGVhbUJsb2NrIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwidHJhbnNsYXRlIiwic2VuZFByZWRpY3QiLCJvdGhlclRlYW1zIiwicHJlZGljdEJvZHkiLCJ1c2VyaWQiLCJiZXQiLCJiaWdXaW5uZXIiLCJiaWdMb3NlciIsIm1ldGhvZCIsImJvZHkiLCJzdHJpbmdpZnkiLCJzdWNjZXNzIiwic2V0Q3VycmVudFByZWRpY3QiLCJnZXRVc2VyUHJlZGljdCIsInByZWRpY3QiLCJzdGFnZUJldCIsIndhcm4iLCJhZGQiLCJzdGFnZU90aGVycyIsInN0YWdlT3RoZXJDYXJkcyIsInN0YWdlV2luQ2FyZCIsInN0YWdlV2luQ2FyZFRlYW0iLCJzdGFnZUxvc2VDYXJkIiwic3RhZ2VMb3NlQ2FyZFRlYW0iLCJwcmVkaWN0T3RoZXJUZWFtcyIsInByZWRpY3RXaW5uZXIiLCJwcmVkaWN0TG9zZXIiLCJyZW1vdmUiLCJzZXRJdGVtIiwidGV4dENvbnRlbnQiLCJ0cmFuc2xhdGVLZXkiLCJjYXJkIiwiaSIsImNhcmRUZWFtTmFtZSIsImNoZWNrVXNlckF1dGgiLCJleHRyYWN0UGxheW9mZlNlbGVjdGlvbnMiLCJxdWFydGVyRmluYWxzQ2FyZHMiLCJzZW1pRmluYWxzQ2FyZHMiLCJGaW5hbHNDYXJkcyIsIndpbm5lckNhcmRzIiwiaXRlbSIsInBhcnNlZCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJwdXNoIiwiZSIsIndpbm5lckl0ZW0iLCJBcnJheSIsImlzQXJyYXkiLCJzZXRQbGF5b2ZmIiwidGVhbUNhcmROYW1lIiwiZmluZCIsImhpZGVMb2FkZXIiLCJzdHlsZSIsIm92ZXJmbG93IiwibG9hZFRpbWUiLCJzZXRUaW1lb3V0Iiwic2hvd0VsZW1lbnRzIiwiaGlkZUVsZW1lbnRzIiwicmVzb2x2ZSIsInJlcG9ydEVycm9yIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImhyZWYiLCJlcnJvclRleHQiLCJ0ZXh0IiwibWVzc2FnZSIsInR5cGUiLCJuYW1lIiwic3RhY2siLCJlbGVtcyIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInJlbmRlclVzZXJzIiwid2VlayIsInVzZXJzIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsInJlc3VsdHNUYWJsZSIsInJlc3VsdHNUYWJsZU90aGVyIiwiY3VycmVudFVzZXIiLCJ1c2VyIiwiaXNUb3BDdXJyZW50VXNlciIsInNsaWNlIiwic29tZSIsInRvcFVzZXJzTGVuZ3RoIiwidG9wVXNlcnMiLCJkaXNwbGF5VXNlciIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsInVzZXJEYXRhIiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIm5laWdoYm9yIiwidXNlclJvdyIsInVzZXJQbGFjZSIsImluZGV4T2YiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJtYXNrVXNlcklkIiwicG9pbnRzIiwiYXBwZW5kIiwiaW5kZXgiLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwidG9TdHJpbmciLCJzZXRTdGF0ZVBpY2tTdGFnZSIsInN0YWdlIiwic3RhZ2VDYXJkc1dyYXAiLCJzdGFnZUNhcmRzIiwic3RhZ2VDYXJkV2luIiwic3RhZ2VDYXJkTG9zZSIsInN0YWdlQ2FyZFdpbk5hbWUiLCJzdGFnZUNhcmRMb3NlTmFtZSIsInN0YWdlTnVtIiwic3RhZ2VTdGF0ZSIsInN0YWdlUmVzdWx0RGF0YSIsIm90aGVyc1RlYW1zIiwiYmlnV2luVGVhbSIsImJpZ0xvc2VUZWFtIiwidGVhbU5hbWUiLCJjdXJyZW50RGF0YSIsIm9wZW5Qb3B1cCIsImN1cnJlbnRQb3B1cCIsImNsb3NlUG9wdXAiLCJwb3B1cHMiLCJhbGxQb3B1cHNUZWFtVGFicyIsInBsYWNlIiwiZXh0cmFjdFRlYW1EYXRhIiwicGFpckVsZW1lbnQiLCJ0ZWFtU2VsZWN0b3IiLCJncm91cEF0dHIiLCJmcm9tIiwibWFwIiwicGFpck51bSIsImNsb3Nlc3QiLCJhZGRUZWFtc0Zyb21QYWlyIiwicGFpcnMiLCJ0ZWFtc0FycmF5IiwicmVzdWx0IiwicGFpciIsImV4dHJhY3RlZCIsInJlbmRlclBsYXlvZmZQb3B1cCIsInBvcHVwRWxlbWVudCIsInRlYW1zUGxheW9mZiIsImRhdGFOYW1lIiwidGVtcG9yYXJ5RGF0YU5hbWUiLCJzY3JvbGxDb250YWluZXIiLCJzYXZlZERhdGEiLCJ0ZWFtRGl2IiwiZGF0YXNldCIsImljb25EaXYiLCJ0ZXh0RGl2IiwiYnRuRGl2IiwidGVhbVRhYnMiLCJ0ZWFtVGFiIiwic2VsZWN0ZWRUZWFtIiwidG9Mb3dlckNhc2UiLCJqIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJ1c2VyU3RhZ2VzIiwiYnRuIiwiY29uZmlybVByZWRpY3RCdG4iLCJidG5UZWFtTmFtZSIsInRlbXBvcmFyeURhdGEiLCJidG5DdXJyZW50RGF0YSIsImJ0blBhaXJOdW1iZXIiLCJwcmVkaWN0UGFpckRhdGEiLCJ2YWxpZFBhaXJOdW1zIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJjb25maXJtSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b3AiLCJib3R0b20iLCJ0aW1lciIsInBsYXlvZmZXcmFwIiwidGFiIiwidGFyZ2V0IiwidGFyZ2V0U3RhZ2VWYWx1ZSIsInRhcmdldFN0YWdlIiwidCIsImFjdGl2ZVN0YWdlIiwicG9wdXBzQ2xvc2VCdG4iLCJjbGlja2VkQ2FyZCIsImNhcmRCaWdXaW4iLCJjYXJkQmlnTG9zZSIsImJpZ1dpblBvcHVwIiwiYmlnTG9zZVBvcHVwIiwiT3RoZXJzUG9wdXAiLCJwb3B1cHNUZWFtIiwib3RoZXJzQ2FyZCIsImFsbFBvcHVwc1RlYW0iLCJjbGlja2VkVGVhbU5hbWUiLCJhY3RpdmVCaWdXaW4iLCJhY3RpdmVCaWdXaW5UZWFtIiwiYWN0aXZlQmlnTG9zZSIsImFjdGl2ZUJpZ0xvc2VUZWFtIiwiYmlnV2luUG9wdXBzVGVhbSIsImJpZ0xvc2VQb3B1cHNUZWFtIiwib3RoZXJzUG9wdXBzVGVhbSIsImNvbmZpcm1DaG9vc2VCdG4iLCJvdGhlcnNDb25maXJtQnRuIiwiYmlnV2luQ29uZmlybUJ0biIsImJpZ0xvc2VDb25maXJtQnRuIiwiYWN0aXZlT3RoZXJzIiwicmVtb3ZlSXRlbSIsInRlYW1XcmFwIiwiaXNTZWxlY3RlZFRlYW0iLCJpc1NlbGVjdGVkQmlnV2luIiwiaXNTZWxlY3RlZEJpZ0xvc2UiLCJjdXJyZW50VGVhbSIsInRlbW9wb3JhcnlUZWFtcyIsInNlbGVjdGVkVGVhbXMiLCJ0ZWFtRGF0YUF0dHIiLCJ0ZWFtTmFtZVdpbiIsInRlYW1OYW1lTG9zZSIsImlzU2VsZWN0ZWRUZWFtV2luIiwiaXNTZWxlY3RlZFRlYW1Mb3NlIiwibmV3UHJlZGljdCIsImFscmVhZHlBZGRlZCIsImlzUHJlZGljdEZ1bGwiLCJ1cGRhdGVkTGVuZ3RoIiwiY29udGFpbnMiLCJiaWdXaW5QcmVkaWN0IiwiYmlnTG9zZVByZWRpY3QiLCJvdGhlclRlYW1zUHJlZGljdCIsImN1cnJlbnRDYXJkVGVhbU5hbWUiLCJjbGlja2VkVGFiIiwidXBkYXRlUGxheW9mZlBvc2l0aW9uIiwiaW5pdGlhbE9mZnNldExlZnQiLCJpbm5lcldpZHRoIiwidHJhbnNmb3JtIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsImN1cnJlbnRMZWZ0Iiwic2hpZnQiLCJwbGF5b2ZmUGhhc2VzIiwicGxheW9mZkNvbnRhaW5lciIsInBsYXlvZmZOZXh0IiwicGxheW9mZlByZXYiLCJwaGFzZUNvdW50IiwiaXNNb2JpbGUiLCJzZXRDdXJyZW50UGhhc2UiLCJwaGFzZXMiLCJjdXJyZW50IiwicGhhc2UiLCJzaG93QWxsUGhhc2VzIiwiaGlkZUFsbEV4Y2VwdEN1cnJlbnQiLCJoYW5kbGVOZXh0IiwiaGFuZGxlUHJldiIsInRvdWNoU3RhcnRYIiwidG91Y2hFbmRYIiwiaGFuZGxlU3dpcGUiLCJkaWZmIiwiTWF0aCIsImFicyIsImNoYW5nZWRUb3VjaGVzIiwic2NyZWVuWCIsIm5vd01vYmlsZSIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidGFyZ2V0Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJsbmdCdG4iLCJhdXRoQnRuIiwib3ZlcmxheSIsInBvcHVwV2luIiwicG9wdXBMb3NlIiwicG9wdXBPdGhlciIsInN0YWdlMSIsInN0YWdlMiIsInNhdmVkRGF0ZSIsIm5ld0RhdGUiXSwibWFwcGluZ3MiOiI7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FB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OUJ1UixTQUFTLENBQUN4VixTQUFTLENBQUNpRSxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQy9Cd1IsVUFBVSxDQUFDelYsU0FBUyxDQUFDMkUsTUFBTSxDQUFDLE1BQU0sQ0FBQztFQUN2QyxDQUFDLENBQUM7RUFFRiwwQkFBQXhILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQywyREFBcEMsdUJBQXNDaEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDbEUsSUFBTXNaLE1BQU0sR0FBRyxHQUFHO0lBQ2xCLElBQU1DLE1BQU0sR0FBRyxHQUFHO0lBRWxCLElBQU1DLFNBQVMsR0FBRzlZLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUV2RCxJQUFNOFksT0FBTyxHQUFHRCxTQUFTLEtBQUtELE1BQU0sR0FBR0QsTUFBTSxHQUFHQyxNQUFNO0lBQ3REN1ksY0FBYyxDQUFDOEgsT0FBTyxDQUFDLGFBQWEsRUFBRWlSLE9BQU8sQ0FBQztJQUU5Q3haLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO0VBQ3JCLENBQUMsQ0FBQztBQUdOLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSlcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfY2xpY2tfcGljaydcblxuICAgIGNvbnN0IHN0YWdlc0RhdGEgPSBbXG4gICAgICAgIHsgZGF0YTogbmV3IERhdGUoXCIyMDI1LTA1LTIwVDAwOjAwOjAwKzAzOjAwXCIpIH0sXG4gICAgICAgIHsgZGF0YTogbmV3IERhdGUoXCIyMDI1LTA1LTI1VDAwOjAwOjAwKzAzOjAwXCIpIH0sXG4gICAgICAgIHsgZGF0YTogbmV3IERhdGUoXCIyMDI1LTA1LTMwVDAwOjAwOjAwKzAzOjAwXCIpIH0sXG4gICAgICAgIHsgZGF0YTogbmV3IERhdGUoXCIyMDI1LTA2LTA1VDAwOjAwOjAwKzAzOjAwXCIpIH1cbiAgICBdO1xuXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZShcIjIwMjUtMDQtMDVUMDA6MDA6MDArMDM6MDBcIik7XG5cbiAgICAvLyBsZXQgY3VycmVudFN0YWdlID0gc3RhZ2VzRGF0YS5maWx0ZXIoc3RhZ2UgPT4gc3RhZ2UuZGF0YSA8PSBjdXJyZW50RGF0ZSkubGVuZ3RoID8/IDM7XG5cbiAgICBsZXQgY3VycmVudFN0YWdlID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50RGF0ZVwiKSlcblxuICAgIC8vIGxldCBjdXJyZW50U3RhZ2UgPSA0XG5cbiAgICBjb25zb2xlLmxvZyhjdXJyZW50U3RhZ2UpO1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKSxcbiAgICAgICAgc3RhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXN0YWdlXVwiKSxcbiAgICAgICAgc3RhZ2VBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zdGFnZT1cIiR7Y3VycmVudFN0YWdlICsgMX1cIl1gKSxcbiAgICAgICAgc3RhZ2VzVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zdGFnZS10YWJdXCIpLFxuICAgICAgICBwbGF5b2ZmU3RhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZcIiksXG4gICAgICAgIHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdHNcIiksXG4gICAgICAgIHByZWRpY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlZGljdG9yXCIpLFxuICAgICAgICBwbGF5b2ZmUHJlZGljdG9yID0gcHJlZGljdG9yLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZlwiKSxcbiAgICAgICAgdGVhbVRleHRQb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fY2hvb3NlLXRlYW0tdGV4dCcpLFxuICAgICAgICBwb3B1cHNXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cHNcIiksXG4gICAgICAgIG1ha2VQcmVkaWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1ha2UtcHJlZGljdCcpLFxuICAgICAgICBwcmVkaWN0b3JDaGVja0luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWRpY3Rvcl9fY2hlY2tpbicpO1xuXG4gICAgY29uc3QgcGxheW9mZlN0YWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXlvZmYtc3RhZ2VdJyksXG4gICAgICAgIHF1YXJ0ZXJGaW5hbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGF5b2ZmLXN0YWdlPVwiMVwiXScpLFxuICAgICAgICBzZW1pRmluYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGxheW9mZi1zdGFnZT1cIjJcIl0nKSxcbiAgICAgICAgZmluYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGxheW9mZi1zdGFnZT1cIjNcIl0nKSxcbiAgICAgICAgd2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGxheW9mZi1zdGFnZT1cIjRcIl0nKSxcbiAgICAgICAgcXVhcnRlckZpbmFsc1BhaXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZVtkYXRhLWNob29zZS1zZW1pZmluYWxdJyksXG4gICAgICAgIHNlbWlGaW5hbHNQYWlycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19jaG9vc2VbZGF0YS1jaG9vc2UtZmluYWxdJyksXG4gICAgICAgIHdpbm5lclBhaXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZVtkYXRhLWNob29zZS13aW5uZXJdJyksXG4gICAgICAgIHNlbWlGaW5hbHNQYWlyc0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fY2hvb3NlLXRlYW1bZGF0YS1jaG9vc2Utc2VtaWZpbmFsXScpLFxuICAgICAgICBmaW5hbHNQYWlyc0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fY2hvb3NlLXRlYW1bZGF0YS1jaG9vc2UtZmluYWxdJyksXG4gICAgICAgIHdpbm5lckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fY2FyZCcpLFxuICAgICAgICBwbGF5b2ZmU2VtaUZpbmFsUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wb3B1cD1cInBsYXlvZmZTZW1pRmluYWxcIl0nKSxcbiAgICAgICAgcGxheW9mZkZpbmFsUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wb3B1cD1cInBsYXlvZmZGaW5hbFwiXScpLFxuICAgICAgICBwbGF5b2ZmV2lubmVyUG9wdXA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBvcHVwPVwid2lubmVyXCJdJyk7XG5cbiAgICBsZXQgc2VtaUZpbmFsc1RlYW1zID0gW11cbiAgICBsZXQgZmluYWxzVGVhbXMgPSBbXVxuICAgIGxldCB3aW5uZXJzID0gW11cblxuICAgIGxldCBzZW1pRmluYWxDaG9vc2UgPSBbXVxuICAgIGxldCBmaW5hbENob29zZSA9IFtdXG4gICAgbGV0IHdpbm5lckNob29zZSA9IG51bGxcblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdGVhbXMgPSBbXG4gICAgICAgIHsgdGVhbTogXCJDb21wbGV4aXR5XCIsIGRhdGFBdHRyOiBcImNvbXBsZXhpdHlcIiB9LFxuICAgICAgICB7IHRlYW06IFwiRmFsY29uc1wiLCBkYXRhQXR0cjogXCJmYWxjb25zXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIlZpdGFsaXR5XCIsIGRhdGFBdHRyOiBcInZpdGFsaXR5XCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkhlcm9pY1wiLCBkYXRhQXR0cjogXCJoZXJvaWNcIiB9LFxuICAgICAgICB7IHRlYW06IFwiRmF6ZVwiLCBkYXRhQXR0cjogXCJmYXplXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIlNwaXJpdFwiLCBkYXRhQXR0cjogXCJzcGlyaXRcIiB9LFxuICAgICAgICB7IHRlYW06IFwiQjhcIiwgZGF0YUF0dHI6IFwiQjhcIiB9LFxuICAgICAgICB7IHRlYW06IFwiM0RNQVhcIiwgZGF0YUF0dHI6IFwiM0RNQVhcIiB9LFxuICAgICAgICB7IHRlYW06IFwiTU9VWlwiLCBkYXRhQXR0cjogXCJNT1VaXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIldpbGRjYXJkXCIsIGRhdGFBdHRyOiBcIndpbGRjYXJkXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIlZpcnR1cy5wcm9cIiwgZGF0YUF0dHI6IFwidmlydHVzUHJvXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIlRoZSBNb25nb2x6XCIsIGRhdGFBdHRyOiBcInRoZU1vbmdvbHpcIiB9LFxuICAgICAgICB7IHRlYW06IFwiRmx5UXVlc3RcIiwgZGF0YUF0dHI6IFwiZmx5UXVlc3RcIiB9LFxuICAgICAgICB7IHRlYW06IFwiRnVyaWFcIiwgZGF0YUF0dHI6IFwiZnVyaWFcIiB9LFxuICAgICAgICB7IHRlYW06IFwiQXVyb3JhXCIsIGRhdGFBdHRyOiBcImF1cm9yYVwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJMeW5uIFZpc2lvblwiLCBkYXRhQXR0cjogXCJseW5uVmlzaW9uXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk1JQlJcIiwgZGF0YUF0dHI6IFwiTUlCUlwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJOYXR1cyBWaW5jZXJlXCIsIGRhdGFBdHRyOiBcIm5hdHVzVmluY2VyZVwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJOUkdcIiwgZGF0YUF0dHI6IFwiTlJHXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIlBhaU5cIiwgZGF0YUF0dHI6IFwiUGFpTlwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJHMlwiLCBkYXRhQXR0cjogXCJHMlwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJDaGluZ2dpcyBXYXJyaW9yc1wiLCBkYXRhQXR0cjogXCJjaGluZ2dpc1dhcnJpb3JzXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk04MFwiLCBkYXRhQXR0cjogXCJNODBcIiB9LFxuICAgICAgICB7IHRlYW06IFwiTGlxdWlkXCIsIGRhdGFBdHRyOiBcImxpcXVpZFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJOZW1pZ2FcIiwgZGF0YUF0dHI6IFwibmVtaWdhXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkltcGVyaWFsXCIsIGRhdGFBdHRyOiBcImltcGVyaWFsXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkZsdXhvXCIsIGRhdGFBdHRyOiBcImZsdXhvXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk1ldGl6cG9ydFwiLCBkYXRhQXR0cjogXCJtZXRpenBvcnRcIiB9LFxuICAgICAgICB7IHRlYW06IFwiT0dcIiwgZGF0YUF0dHI6IFwiT0dcIiB9LFxuICAgICAgICB7IHRlYW06IFwiQmVzdGlhXCIsIGRhdGFBdHRyOiBcImJlc3RpYVwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJUeWxvb1wiLCBkYXRhQXR0cjogXCJ0eWxvb1wiIH1cbiAgICBdO1xuXG4gICAgbGV0IGJpZ0xvc2UgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnTG9zZVwiKVxuICAgIGxldCBiaWdXaW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnV2luXCIpXG5cbiAgICBsZXQgdGVhbXNXaW4gPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0ZWFtc1dpblwiKSkgPz8gW11cblxuICAgIGNvbnN0IHN0YWdlc1Jlc3VsdCA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgZGVmYXV0VmFsdWU6IHRydWUsXG4gICAgICAgICAgICB0ZWFtc0JldDpbXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkNvbXBsZXhpdHlcIiwgZGF0YUF0dHI6IFwiY29tcGxleGl0eVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkZhbGNvbnNcIiwgZGF0YUF0dHI6IFwiZmFsY29uc1wiLCBvdXRjb21lOiB0cnVlfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiVml0YWxpdHlcIiwgZGF0YUF0dHI6IFwidml0YWxpdHlcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJIZXJvaWNcIiwgZGF0YUF0dHI6IFwiaGVyb2ljXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiRmF6ZVwiLCBkYXRhQXR0cjogXCJmYXplXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiU3Bpcml0XCIsIGRhdGFBdHRyOiBcInNwaXJpdFwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkI4XCIsIGRhdGFBdHRyOiBcIkI4XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBiaWdXaW46IHsgdGVhbTogXCJQYWlOXCIsIGRhdGFBdHRyOiBcIlBhaU5cIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgYmlnTG9zZTogeyB0ZWFtOiBcIk5SR1wiLCBkYXRhQXR0cjogXCJOUkdcIiwgb3V0Y29tZTogdHJ1ZSB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRlZmF1dFZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgdGVhbXNCZXQ6W1xuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJDb21wbGV4aXR5XCIsIGRhdGFBdHRyOiBcImNvbXBsZXhpdHlcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJGYWxjb25zXCIsIGRhdGFBdHRyOiBcImZhbGNvbnNcIiwgb3V0Y29tZTogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIlZpdGFsaXR5XCIsIGRhdGFBdHRyOiBcInZpdGFsaXR5XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiSGVyb2ljXCIsIGRhdGFBdHRyOiBcImhlcm9pY1wiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkZhemVcIiwgZGF0YUF0dHI6IFwiZmF6ZVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIlNwaXJpdFwiLCBkYXRhQXR0cjogXCJzcGlyaXRcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJCOFwiLCBkYXRhQXR0cjogXCJCOFwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYmlnV2luOiB7IHRlYW06IFwiRmFsY29uc1wiLCBkYXRhQXR0cjogXCJmYWxjb25zXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgIGJpZ0xvc2U6IHsgdGVhbTogXCJOUkdcIiwgZGF0YUF0dHI6IFwiTlJHXCIsIG91dGNvbWU6IHRydWUgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkZWZhdXRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlYW1zQmV0OltcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiQ29tcGxleGl0eVwiLCBkYXRhQXR0cjogXCJjb21wbGV4aXR5XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiRmFsY29uc1wiLCBkYXRhQXR0cjogXCJmYWxjb25zXCIsIG91dGNvbWU6IHRydWV9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJWaXRhbGl0eVwiLCBkYXRhQXR0cjogXCJ2aXRhbGl0eVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkhlcm9pY1wiLCBkYXRhQXR0cjogXCJoZXJvaWNcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJGYXplXCIsIGRhdGFBdHRyOiBcImZhemVcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJTcGlyaXRcIiwgZGF0YUF0dHI6IFwic3Bpcml0XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiQjhcIiwgZGF0YUF0dHI6IFwiQjhcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJpZ1dpbjogeyB0ZWFtOiBcIlBhaU5cIiwgZGF0YUF0dHI6IFwiUGFpTlwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICBiaWdMb3NlOiB7IHRlYW06IFwiTlJHXCIsIGRhdGFBdHRyOiBcIk5SR1wiLCBvdXRjb21lOiB0cnVlIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGVmYXV0VmFsdWU6IHRydWUsXG4gICAgICAgICAgICB0ZWFtc0JldDpbXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkNvbXBsZXhpdHlcIiwgZGF0YUF0dHI6IFwiY29tcGxleGl0eVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkZhbGNvbnNcIiwgZGF0YUF0dHI6IFwiZmFsY29uc1wiLCBvdXRjb21lOiB0cnVlfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiVml0YWxpdHlcIiwgZGF0YUF0dHI6IFwidml0YWxpdHlcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJIZXJvaWNcIiwgZGF0YUF0dHI6IFwiaGVyb2ljXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiRmF6ZVwiLCBkYXRhQXR0cjogXCJmYXplXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiU3Bpcml0XCIsIGRhdGFBdHRyOiBcInNwaXJpdFwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkI4XCIsIGRhdGFBdHRyOiBcIkI4XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBiaWdXaW46IHsgdGVhbTogXCJQYWlOXCIsIGRhdGFBdHRyOiBcIlBhaU5cIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgYmlnTG9zZTogeyB0ZWFtOiBcIk5SR1wiLCBkYXRhQXR0cjogXCJOUkdcIiwgb3V0Y29tZTogdHJ1ZSB9XG4gICAgICAgIH1cblxuICAgIF1cblxuICAgIGxldCBxdW90ZXJGaW5hbHNEYXRhID0gWy4uLnN0YWdlc1Jlc3VsdFsyXS50ZWFtc0JldCwgc3RhZ2VzUmVzdWx0WzJdLmJpZ1dpbiBdXG5cbiAgICBsZXQgbG9hZGVyQnRuID0gZmFsc2VcblxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpID8/IFwiZW5cIlxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gdHJ1ZVxuXG4gICAgbGV0IG90aGVyc0FycmF5ID0gW11cbiAgICBsZXQgaW5kZXhDYXJkID0gZmFsc2VcblxuICAgIC8vIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSkgPz8gNzc3Nzc3Nzk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgLy8gaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVGVhbUJsb2Nrcyhwb3B1cEF0dHIsIHRlYW1zKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCIke3BvcHVwQXR0cn1cIl1gKTtcbiAgICAgICAgY29uc29sZS5sb2cocG9wdXApXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19wb3B1cC1zY3JvbGwnKTtcblxuICAgICAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICB0ZWFtcy5mb3JFYWNoKCh7IGRhdGFBdHRyIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlYW1CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGVhbUJsb2NrLmNsYXNzTmFtZSA9ICdwbGF5b2ZmX19jaG9vc2UtdGVhbSBfb3Blbic7IC8vINC80L7QttC10Ygg0LTQuNC90LDQvNGW0YfQvdC+INC30LzRltC90Y7QstCw0YLQuCDQvdCwIF9zZWxlY3RlZFxuXG4gICAgICAgICAgICB0ZWFtQmxvY2suaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXlvZmZfX2Nob29zZS10ZWFtLWljb25cIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5b2ZmX19jaG9vc2UtdGVhbS10ZXh0XCIgZGF0YS10cmFuc2xhdGU9XCIke2RhdGFBdHRyfVwiIGRhdGEtdGVhbT1cIiR7ZGF0YUF0dHJ9XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5b2ZmX19jaG9vc2UtdGVhbS1idG5cIj48L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRlYW1CbG9jayk7XG4gICAgICAgIH0pO1xuICAgICAgICB0cmFuc2xhdGUoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbmRQcmVkaWN0KCl7XG4gICAgICAgIGlmKGN1cnJlbnRTdGFnZSA8PSAyKXtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyVGVhbXMgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0ZWFtc1dpblwiKSk7XG4gICAgICAgICAgICBjb25zdCBiaWdXaW4gPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdXaW5cIikpO1xuICAgICAgICAgICAgY29uc3QgYmlnTG9zZSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ0xvc2VcIikpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvdGhlclRlYW1zLCBiaWdXaW4sIGJpZ0xvc2UpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHByZWRpY3RCb2R5ID0ge1xuICAgICAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgICAgIGJldDoge1xuICAgICAgICAgICAgICAgICAgICB0ZWFtc0JldDogWy4uLm90aGVyVGVhbXNdLFxuICAgICAgICAgICAgICAgICAgICBiaWdXaW5uZXI6IHsuLi5iaWdXaW59LFxuICAgICAgICAgICAgICAgICAgICBiaWdMb3Nlcjogey4uLmJpZ0xvc2V9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxdWVzdChgL2JldC9zdGFnZS8ke2N1cnJlbnRTdGFnZSArIDF9YCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHByZWRpY3RCb2R5KSxcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFByZWRpY3QoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcmVkaWN0Qm9keSlcbiAgICAgICAgfVxuICAgICAgICBpZihjdXJyZW50U3RhZ2UgPT09IDMpe1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRQcmVkaWN0KCkge1xuICAgICAgICBnZXRVc2VyUHJlZGljdCgpLnRoZW4ocHJlZGljdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGFnZUJldCA9IHByZWRpY3Q/Lltgc3RhZ2Uke2N1cnJlbnRTdGFnZSArIDF9QmV0YF07XG5cbiAgICAgICAgICAgIGlmICghc3RhZ2VCZXQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE5vIGJldHMgZm9yIHN0YWdlICR7Y3VycmVudFN0YWdlICsgMX1gKTtcbiAgICAgICAgICAgICAgICBwcmVkaWN0b3JDaGVja0luLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YWdlT3RoZXJzID0gc3RhZ2VBY3RpdmUucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fd3JhcFwiKSxcbiAgICAgICAgICAgICAgICBzdGFnZU90aGVyQ2FyZHMgPSBzdGFnZU90aGVycy5xdWVyeVNlbGVjdG9yQWxsKFwiLnN0YWdlX19jYXJkXCIpLFxuICAgICAgICAgICAgICAgIHN0YWdlV2luQ2FyZCA9IHN0YWdlQWN0aXZlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJpZy1zdGFnZT1cImJpZ1dpblwiXWApLFxuICAgICAgICAgICAgICAgIHN0YWdlV2luQ2FyZFRlYW0gPSBzdGFnZVdpbkNhcmQucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fY2FyZC10ZXh0XCIpLFxuICAgICAgICAgICAgICAgIHN0YWdlTG9zZUNhcmQgPSBzdGFnZUFjdGl2ZS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1iaWctc3RhZ2U9XCJiaWdMb3NlXCJdYCksXG4gICAgICAgICAgICAgICAgc3RhZ2VMb3NlQ2FyZFRlYW0gPSBzdGFnZUxvc2VDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX2NhcmQtdGV4dFwiKSxcbiAgICAgICAgICAgICAgICBwcmVkaWN0T3RoZXJUZWFtcyA9IHN0YWdlQmV0LnRlYW1zQmV0LFxuICAgICAgICAgICAgICAgIHByZWRpY3RXaW5uZXIgPSBzdGFnZUJldC5iaWdXaW5uZXIsXG4gICAgICAgICAgICAgICAgcHJlZGljdExvc2VyID0gc3RhZ2VCZXQuYmlnTG9zZXI7XG5cbiAgICAgICAgICAgIHByZWRpY3RvckNoZWNrSW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidGVhbXNXaW5cIiwgSlNPTi5zdHJpbmdpZnkocHJlZGljdE90aGVyVGVhbXMpKTtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdXaW5cIiwgSlNPTi5zdHJpbmdpZnkocHJlZGljdFdpbm5lcikpO1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ0xvc2VcIiwgSlNPTi5zdHJpbmdpZnkocHJlZGljdExvc2VyKSk7XG4gICAgICAgICAgICB0ZWFtc1dpbiA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRlYW1zV2luXCIpKTtcbiAgICAgICAgICAgIGJpZ1dpbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdXaW5cIik7XG4gICAgICAgICAgICBiaWdMb3NlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ0xvc2VcIik7XG5cblxuICAgICAgICAgICAgc3RhZ2VXaW5DYXJkLmNsYXNzTGlzdC5hZGQoXCJfc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBzdGFnZVdpbkNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGVuXCIpO1xuICAgICAgICAgICAgc3RhZ2VMb3NlQ2FyZC5jbGFzc0xpc3QuYWRkKFwiX3NlbGVjdGVkXCIpO1xuICAgICAgICAgICAgc3RhZ2VMb3NlQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX29wZW5cIik7XG5cbiAgICAgICAgICAgIHN0YWdlV2luQ2FyZFRlYW0udGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkocHJlZGljdFdpbm5lci5kYXRhQXR0cik7XG4gICAgICAgICAgICBzdGFnZUxvc2VDYXJkVGVhbS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShwcmVkaWN0TG9zZXIuZGF0YUF0dHIpO1xuXG4gICAgICAgICAgICBzdGFnZU90aGVyQ2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRUZWFtTmFtZSA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fY2FyZC10ZXh0XCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlYW0gPSB0ZWFtc1dpbltpXTtcbiAgICAgICAgICAgICAgICAvLyBpZiAoIXRlYW0pIHJldHVybjsgLy8g0Y/QutGJ0L4g0YDQsNC/0YLQvtC8INC80LXQvdGI0LUg0LrQvtC80LDQvdC0INGDINGB0YLQsNCy0YbRllxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFBdHRyID0gdGVhbS5kYXRhQXR0cjtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFBdHRyKTtcblxuXG5cbiAgICAgICAgICAgICAgICBjYXJkVGVhbU5hbWUuc2V0QXR0cmlidXRlKFwiZGF0YS10ZWFtXCIsIGRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICBjYXJkVGVhbU5hbWUudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkoZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGVuXCIpO1xuICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcIl9zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZWFtKVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNhcmQpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkZWQgdXNlciBwcmVkaWN0aW9uOlwiLCBzdGFnZUJldCk7XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgdXNlciBwcmVkaWN0aW9uXCIsIGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHRyYWN0UGxheW9mZlNlbGVjdGlvbnMocXVhcnRlckZpbmFscywgc2VtaUZpbmFscywgZmluYWxzLCB3aW5uZXIpIHtcbiAgICAgICAgY29uc3QgcXVhcnRlckZpbmFsc0NhcmRzID0gcXVhcnRlckZpbmFscy5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtXCIpO1xuICAgICAgICBjb25zdCBzZW1pRmluYWxzQ2FyZHMgPSBzZW1pRmluYWxzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheW9mZl9fY2hvb3NlLXRlYW1cIik7XG4gICAgICAgIGNvbnN0IEZpbmFsc0NhcmRzID0gZmluYWxzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheW9mZl9fY2hvb3NlLXRlYW1cIik7XG4gICAgICAgIGNvbnN0IHdpbm5lckNhcmRzID0gd2lubmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheW9mZl9fY2hvb3NlLXRlYW1cIik7XG5cbiAgICAgICAgLy8g0J7RgtGA0LjQvNCw0YLQuCDQvdC10L/QvtGA0L7QttC90ZYg0L7QsSfRlNC60YLQuCDQtyBzZXNzaW9uU3RvcmFnZSDQtNC70Y8g0L/RltCy0YTRltC90LDQu9GW0LJcbiAgICAgICAgY29uc3Qgc2VtaUZpbmFsQ2hvb3NlID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYHNlbWlGaW5hbHMke2l9YCk7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWQgJiYgdHlwZW9mIHBhcnNlZCA9PT0gXCJvYmplY3RcIiAmJiBPYmplY3Qua2V5cyhwYXJzZWQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbWlGaW5hbENob29zZS5wdXNoKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihg0J/QvtC80LjQu9C60LAg0L/QsNGA0YHQuNC90LPRgyBzZW1pRmluYWxzJHtpfTpgLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQntGC0YDQuNC80LDRgtC4INC90LXQv9C+0YDQvtC20L3RliDQvtCxJ9GU0LrRgtC4INC3IHNlc3Npb25TdG9yYWdlINC00LvRjyDRhNGW0L3QsNC70ZbQslxuICAgICAgICBjb25zdCBmaW5hbENob29zZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGBmaW5hbHMke2l9YCk7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZWQgJiYgdHlwZW9mIHBhcnNlZCA9PT0gXCJvYmplY3RcIiAmJiBPYmplY3Qua2V5cyhwYXJzZWQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsQ2hvb3NlLnB1c2gocGFyc2VkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGDQn9C+0LzQuNC70LrQsCDQv9Cw0YDRgdC40L3Qs9GDIGZpbmFscyR7aX06YCwgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g0J7RgtGA0LjQvNCw0YLQuCDQv9C10YDQtdC80L7QttGG0Y8sINGP0LrRidC+INCy0ZbQvSDQstCw0LvRltC00L3QuNC5XG4gICAgICAgIGxldCB3aW5uZXJDaG9vc2UgPSB7fTtcbiAgICAgICAgY29uc3Qgd2lubmVySXRlbSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ3aW5uZXJcIik7XG4gICAgICAgIGlmICh3aW5uZXJJdGVtKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2Uod2lubmVySXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZCAmJiB0eXBlb2YgcGFyc2VkID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHBhcnNlZCkgJiYgT2JqZWN0LmtleXMocGFyc2VkKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbm5lckNob29zZSA9IHBhcnNlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi0J/QvtC80LjQu9C60LAg0L/QsNGA0YHQuNC90LPRgyB3aW5uZXI6XCIsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHF1YXJ0ZXJGaW5hbHNDYXJkcyxcbiAgICAgICAgICAgIHNlbWlGaW5hbHNDYXJkcyxcbiAgICAgICAgICAgIEZpbmFsc0NhcmRzLFxuICAgICAgICAgICAgd2lubmVyQ2FyZHMsXG4gICAgICAgICAgICBzZW1pRmluYWxDaG9vc2UsXG4gICAgICAgICAgICBmaW5hbENob29zZSxcbiAgICAgICAgICAgIHdpbm5lckNob29zZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFBsYXlvZmYocXVhcnRlckZpbmFscywgc2VtaUZpbmFscywgZmluYWxzLCB3aW5uZXIpe1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgcXVhcnRlckZpbmFsc0NhcmRzLFxuICAgICAgICAgICAgc2VtaUZpbmFsc0NhcmRzLFxuICAgICAgICAgICAgRmluYWxzQ2FyZHMsXG4gICAgICAgICAgICB3aW5uZXJDYXJkcyxcbiAgICAgICAgICAgIHNlbWlGaW5hbENob29zZSxcbiAgICAgICAgICAgIGZpbmFsQ2hvb3NlLFxuICAgICAgICAgICAgd2lubmVyQ2hvb3NlXG4gICAgICAgIH0gPSBleHRyYWN0UGxheW9mZlNlbGVjdGlvbnMocXVhcnRlckZpbmFscywgc2VtaUZpbmFscywgZmluYWxzLCB3aW5uZXIpXG5cbiAgICAgICAgcXVhcnRlckZpbmFsc0NhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGVhbUNhcmROYW1lID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtLXRleHRcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IHRlYW0gPSBxdW90ZXJGaW5hbHNEYXRhW2ldO1xuXG4gICAgICAgICAgICB0ZWFtQ2FyZE5hbWUuc2V0QXR0cmlidXRlKFwiZGF0YS10ZWFtXCIsIHRlYW0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRlYW1cIiwgdGVhbS5kYXRhQXR0cik7XG4gICAgICAgICAgICB0ZWFtQ2FyZE5hbWUudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkodGVhbS5kYXRhQXR0cik7XG5cbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcIl9kb25lXCIpO1xuXG5cbiAgICAgICAgfSlcblxuICAgICAgICBGaW5hbHNDYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICBpZihzZW1pRmluYWxDaG9vc2UubGVuZ3RoIDwgNCkge1xuICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcIl9sb2NrXCIpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX2xvY2tcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYoZmluYWxDaG9vc2UubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgd2lubmVyQ2FyZC5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgd2lubmVyQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX2xvY2tcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh3aW5uZXJDaG9vc2UpXG5cbiAgICAgICAgaWYod2lubmVyQ2hvb3NlICYmIE9iamVjdC5rZXlzKHdpbm5lckNob29zZSkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICB3aW5uZXJDYXJkLmNsYXNzTGlzdC5hZGQoXCJfc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB3aW5uZXJDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfb3BlblwiKTtcbiAgICAgICAgICAgIHdpbm5lckNhcmQuc2V0QXR0cmlidXRlKFwiZGF0YS10ZWFtXCIsIHdpbm5lckNob29zZS5kYXRhQXR0cik7XG4gICAgICAgICAgICB3aW5uZXJDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fY2FyZC10ZXh0XCIpLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KHdpbm5lckNob29zZS5kYXRhQXR0cik7XG4gICAgICAgIH1cblxuICAgICAgICBpZihzZW1pRmluYWxDaG9vc2UubGVuZ3RoIDwgNCB8fCBmaW5hbENob29zZS5sZW5ndGggPCAyIHx8ICF3aW5uZXJDaG9vc2UpIHtcbiAgICAgICAgICAgIG1ha2VQcmVkaWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB3aW5uZXJDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9ja1wiKTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyUHJlZGljdCgpIHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdCgnL3N0YWdlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5maW5kKGl0ZW0gPT4gaXRlbS51c2VyaWQgPT09IHVzZXJJZCkpO1xuICAgICAgICByZXR1cm4gcmVzLmZpbmQoaXRlbSA9PiBpdGVtLnVzZXJpZCA9PT0gdXNlcklkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBjb25zdCBsb2FkVGltZSA9IDIwMDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgY29uc3QgaGlkZUVsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG5cbiAgICAgICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyh1bmF1dGhNc2dzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICB9LCBsb2FkVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWspIHtcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzLyR7d2Vla31gKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgdXNlcklkLCB3ZWVrKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2Vlaykge1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzTGVuZ3RoID0gIXVzZXJJZCB8fCBpc1RvcEN1cnJlbnRVc2VyICA/IDEzIDogMTA7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlckRhdGEucG9pbnRzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U3RhdGVQaWNrU3RhZ2Uoc3RhZ2Upe1xuICAgICAgICBjb25zdCBzdGFnZUNhcmRzV3JhcCA9IHN0YWdlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNhcmRzLXdyYXA9XCJzdGFnZVwiXScpXG4gICAgICAgIGlmKCFzdGFnZUNhcmRzV3JhcCkgcmV0dXJuXG4gICAgICAgIGNvbnN0IHN0YWdlQ2FyZHMgPSBzdGFnZUNhcmRzV3JhcC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhZ2VfX2NhcmQnKTtcbiAgICAgICAgY29uc3Qgc3RhZ2VDYXJkV2luID0gc3RhZ2UucXVlcnlTZWxlY3RvcignW2RhdGEtYmlnLXN0YWdlPVwiYmlnV2luXCJdJyk7XG4gICAgICAgIGNvbnN0IHN0YWdlQ2FyZExvc2UgPSBzdGFnZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1iaWctc3RhZ2U9XCJiaWdMb3NlXCJdJyk7XG4gICAgICAgIGNvbnN0IHN0YWdlQ2FyZFdpbk5hbWUgPSBzdGFnZUNhcmRXaW4ucXVlcnlTZWxlY3RvcignLnN0YWdlX19jYXJkLXRleHQnKTtcbiAgICAgICAgY29uc3Qgc3RhZ2VDYXJkTG9zZU5hbWUgPSBzdGFnZUNhcmRMb3NlLnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZV9fY2FyZC10ZXh0Jyk7XG5cbiAgICAgICAgY29uc3Qgc3RhZ2VOdW0gPSBOdW1iZXIoc3RhZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YWdlJykpO1xuICAgICAgICBsZXQgc3RhZ2VTdGF0ZSA9IHN0YWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1waWNrLXN0YWdlJyk7XG4gICAgICAgIGNvbnN0IHN0YWdlUmVzdWx0RGF0YSA9IHN0YWdlc1Jlc3VsdFtzdGFnZU51bSAtMV1cblxuICAgICAgICBsZXQgb3RoZXJzVGVhbXMgPSBzdGFnZVJlc3VsdERhdGEudGVhbXNCZXRcbiAgICAgICAgbGV0IGJpZ1dpblRlYW0gPSBzdGFnZVJlc3VsdERhdGEuYmlnV2luXG4gICAgICAgIGxldCBiaWdMb3NlVGVhbSA9IHN0YWdlUmVzdWx0RGF0YS5iaWdMb3NlXG5cbiAgICAgICAgc3RhZ2VDYXJkV2luLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJywgJ19zZWxlY3RlZCcsICdfbG9zZScsICdfd2luJyk7XG4gICAgICAgIHN0YWdlQ2FyZExvc2UuY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nLCAnX3NlbGVjdGVkJywgJ19sb3NlJywgJ193aW4nKTtcblxuICAgICAgICBpZihzdGFnZVN0YXRlID09PSBcImRvbmVcIil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGFnZUNhcmRzKVxuICAgICAgICAgICAgc3RhZ2VDYXJkcy5mb3JFYWNoKChjYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVhbU5hbWUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZV9fY2FyZC10ZXh0Jyk7XG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicsICdfc2VsZWN0ZWQnLCAnX2xvc2UnLCAnX3dpbicsIFwiX2RvbmVcIik7XG4gICAgICAgICAgICAgICAgaWYoc3RhZ2VSZXN1bHREYXRhLmRlZmF1dFZhbHVlKSBjYXJkLmNsYXNzTGlzdC5hZGQoJ19kb25lJyk7XG5cbiAgICAgICAgICAgICAgICB0ZWFtTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScsIG90aGVyc1RlYW1zW2ldLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICB0ZWFtTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgb3RoZXJzVGVhbXNbaV0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdGFnZUNhcmRXaW5OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJywgYmlnV2luVGVhbS5kYXRhQXR0cik7XG4gICAgICAgICAgICBzdGFnZUNhcmRXaW5OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBiaWdXaW5UZWFtLmRhdGFBdHRyKTtcbiAgICAgICAgICAgIHN0YWdlQ2FyZExvc2VOYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJywgYmlnTG9zZVRlYW0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgc3RhZ2VDYXJkTG9zZU5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGJpZ0xvc2VUZWFtLmRhdGFBdHRyKTtcblxuXG4gICAgICAgICAgICBpZihzdGFnZVJlc3VsdERhdGEuZGVmYXV0VmFsdWUpe1xuICAgICAgICAgICAgICAgIHN0YWdlQ2FyZFdpbi5jbGFzc0xpc3QuYWRkKCdfZG9uZScpO1xuICAgICAgICAgICAgICAgIHN0YWdlQ2FyZExvc2UuY2xhc3NMaXN0LmFkZCgnX2RvbmUnKTtcbiAgICAgICAgICAgICAgICBzdGFnZUNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+e1xuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfZG9uZVwiKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBzdGFnZUNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0YSA9IG90aGVyc1RlYW1zW2ldXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnREYXRhLm91dGNvbWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdfd2luJyk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdfbG9zZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBpZihiaWdXaW5UZWFtLm91dGNvbWUpe1xuICAgICAgICAgICAgICAgICAgICBzdGFnZUNhcmRXaW4uY2xhc3NMaXN0LmFkZCgnX3dpbicpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGFnZUNhcmRXaW4pXG4gICAgICAgICAgICAgICAgICAgIHN0YWdlQ2FyZFdpbi5jbGFzc0xpc3QuYWRkKCdfbG9zZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihiaWdMb3NlVGVhbS5vdXRjb21lKXtcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VDYXJkTG9zZS5jbGFzc0xpc3QuYWRkKCdfd2luJyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlQ2FyZExvc2UuY2xhc3NMaXN0LmFkZCgnX2xvc2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgIH1cbiAgICAgICAgaWYoc3RhZ2VTdGF0ZSA9PT0gXCJhY3RpdmVcIil7XG4gICAgICAgICAgICBzdGFnZUNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTmFtZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLnN0YWdlX19jYXJkLXRleHQnKTtcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJywgJ19zZWxlY3RlZCcsICdfbG9zZScsICdfd2luJywgXCJfZG9uZVwiKTtcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ19vcGVuJyk7XG5cbiAgICAgICAgICAgICAgICB0ZWFtTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgXCJwb3B1cExvc2VUaXRsZVwiICk7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzdGFnZUNhcmRXaW4uY2xhc3NMaXN0LmFkZChcIl9vcGVuXCIpXG4gICAgICAgICAgICBzdGFnZUNhcmRMb3NlLmNsYXNzTGlzdC5hZGQoXCJfb3BlblwiKVxuXG4gICAgICAgICAgICBzdGFnZUNhcmRXaW5OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBcInBvcHVwTG9zZVRpdGxlXCIpO1xuICAgICAgICAgICAgc3RhZ2VDYXJkTG9zZU5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIFwicG9wdXBMb3NlVGl0bGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgdHJhbnNsYXRlKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuUG9wdXAoZGF0YUF0dHIsIGNvbnRhaW5lcil7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQb3B1cCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3B1cD1cIiR7ZGF0YUF0dHJ9XCJdYCk7XG5cbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXktb3BhY2l0eScpO1xuXG4gICAgICAgIGN1cnJlbnRQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VQb3B1cChjb250YWluZXIpe1xuICAgICAgICBjb25zdCBwb3B1cHMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX3BvcHVwJyk7XG4gICAgICAgIGNvbnN0IGFsbFBvcHVwc1RlYW1UYWJzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheW9mZl9fY2hvb3NlLXRlYW1cIik7XG5cbiAgICAgICAgYWxsUG9wdXBzVGVhbVRhYnMuZm9yRWFjaCgodGVhbSkgPT4ge1xuICAgICAgICAgICAgdGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIHRlYW0uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgIHRlYW0uY2xhc3NMaXN0LmFkZCgnX29wZW4nKTtcbiAgICAgICAgfSlcblxuICAgICAgICBwb3B1cHMuZm9yRWFjaChwb3B1cCA9PiB7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LW9wYWNpdHknKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRlYW1zV2luKVxuXG4gICAgICAgIGlmKHRlYW1zV2luICYmIHRlYW1zV2luLmxlbmd0aCA9PT0gNiAmJiBiaWdMb3NlICYmIGJpZ1dpbil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByZWRpY3RcIilcbiAgICAgICAgICAgIG1ha2VQcmVkaWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9ja1wiKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlLCB3ZWVrKSB7XG4gICAgICAgIGlmIChwbGFjZSA8PSAzKSByZXR1cm4gYHByaXplXyR7d2Vla30tJHtwbGFjZX1gO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS00LTEwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTEtMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0yNi01MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTUxLTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTc2LTEwMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMDEtMTI1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEyNi0xNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTUxLTE3NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNzYtMjAwYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleHRyYWN0VGVhbURhdGEocGFpckVsZW1lbnQsIHRlYW1TZWxlY3RvciwgZ3JvdXBBdHRyKSB7XG4gICAgICAgIGNvbnN0IHRlYW1zID0gcGFpckVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0ZWFtU2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0ZWFtcykubWFwKHRlYW0gPT4gKHtcbiAgICAgICAgICAgIGRhdGFBdHRyOiB0ZWFtLmdldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJyksXG4gICAgICAgICAgICBwYWlyTnVtOiBOdW1iZXIodGVhbS5jbG9zZXN0KGBbJHtncm91cEF0dHJ9XWApPy5nZXRBdHRyaWJ1dGUoZ3JvdXBBdHRyKSlcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRlYW1zRnJvbVBhaXIocGFpcnMsIHRlYW1zQXJyYXkpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFsuLi50ZWFtc0FycmF5XTtcbiAgICAgICAgcGFpcnMuZm9yRWFjaChwYWlyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZCA9IGV4dHJhY3RUZWFtRGF0YShwYWlyLCAnLnBsYXlvZmZfX2Nob29zZS10ZWFtW2RhdGEtdGVhbV0nLCAnZGF0YS1jaG9vc2Utc2VtaWZpbmFsJyk7XG4gICAgICAgICAgICByZXN1bHQgPSBbLi4ucmVzdWx0LCAuLi5leHRyYWN0ZWRdO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJQbGF5b2ZmUG9wdXAocG9wdXBFbGVtZW50LCB0ZWFtc1BsYXlvZmYsIGRhdGFOYW1lLCB0ZW1wb3JhcnlEYXRhTmFtZSkge1xuICAgICAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSBwb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX3BvcHVwLXNjcm9sbCcpO1xuICAgICAgICBpZiAoIXNjcm9sbENvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHNhdmVkRGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShkYXRhTmFtZSkpIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKCFzYXZlZERhdGEpIHtcbiAgICAgICAgICAgIHBvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX3BvcHVwLWJ0blwiKS5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2Nyb2xsQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIHRlYW1zUGxheW9mZi5mb3JFYWNoKHRlYW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVhbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGVhbURpdi5jbGFzc05hbWUgPSAncGxheW9mZl9fY2hvb3NlLXRlYW0gX29wZW4nO1xuICAgICAgICAgICAgdGVhbURpdi5kYXRhc2V0LnRlYW0gPSB0ZWFtLmRhdGFBdHRyO1xuXG4gICAgICAgICAgICBjb25zdCBpY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpY29uRGl2LmNsYXNzTmFtZSA9ICdwbGF5b2ZmX19jaG9vc2UtdGVhbS1pY29uJztcblxuICAgICAgICAgICAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGV4dERpdi5jbGFzc05hbWUgPSAncGxheW9mZl9fY2hvb3NlLXRlYW0tdGV4dCc7XG4gICAgICAgICAgICB0ZXh0RGl2LmRhdGFzZXQudGVhbSA9IHRlYW0uZGF0YUF0dHI7XG4gICAgICAgICAgICB0ZXh0RGl2LnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KHRlYW0uZGF0YUF0dHIpO1xuXG4gICAgICAgICAgICBjb25zdCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJ0bkRpdi5jbGFzc05hbWUgPSAncGxheW9mZl9fY2hvb3NlLXRlYW0tYnRuJztcblxuICAgICAgICAgICAgdGVhbURpdi5hcHBlbmQoaWNvbkRpdiwgdGV4dERpdiwgYnRuRGl2KTtcbiAgICAgICAgICAgIHNjcm9sbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZWFtRGl2KTtcblxuICAgICAgICAgICAgaWYgKHNhdmVkRGF0YSAmJiBzYXZlZERhdGEuZGF0YUF0dHIgPT09IHRlYW0uZGF0YUF0dHIpIHtcbiAgICAgICAgICAgICAgICB0ZWFtRGl2LmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRlYW1EaXYuY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdGVhbVRhYnMgPSBzY3JvbGxDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZS10ZWFtJyk7XG5cbiAgICAgICAgdGVhbVRhYnMuZm9yRWFjaCgodGVhbVRhYiwgaSkgPT4ge1xuICAgICAgICAgICAgdGVhbVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTmFtZSA9IHRlYW1UYWIuZ2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRlYW0gPSB0ZWFtc1BsYXlvZmYuZmluZCh0ZWFtID0+IHRlYW0uZGF0YUF0dHIudG9Mb3dlckNhc2UoKSA9PT0gdGVhbU5hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fcG9wdXAtYnRuXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh0ZW1wb3JhcnlEYXRhTmFtZSwgSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRUZWFtKSk7XG5cbiAgICAgICAgICAgICAgICB0ZWFtVGFicy5mb3JFYWNoKChpdGVtLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnX3NlbGVjdGVkJywgaSA9PT0gaik7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnX29wZW4nLCBpICE9PSBqKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICByZXF1ZXN0KCcvc3RhZ2UnKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyU3RhZ2VzID0gcmVzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gdXNlcklkKVxuXG4gICAgICAgICAgICAgICAgaWYodXNlclN0YWdlcykge1xuICAgICAgICAgICAgICAgICAgICBzdGFnZXNSZXN1bHQuZm9yRWFjaCgoc3RhZ2UsIGkpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodXNlclN0YWdlc1tgc3RhZ2Uke2kgKyAxfUJldGBdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFnZXNSZXN1bHRbaV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1zQmV0OiBbLi4udXNlclN0YWdlc1tgc3RhZ2Uke2kgKyAxfUJldGBdLnRlYW1zQmV0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luOiB1c2VyU3RhZ2VzW2BzdGFnZSR7aSArIDF9QmV0YF0uYmlnV2lubmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdMb3NlOiB1c2VyU3RhZ2VzW2BzdGFnZSR7aSArIDF9QmV0YF0uYmlnTG9zZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgcXVvdGVyRmluYWxzRGF0YSA9IFsuLi5zdGFnZXNSZXN1bHRbMl0udGVhbXNCZXQsIHN0YWdlc1Jlc3VsdFsyXS5iaWdXaW4gXTtcblxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRTdGFnZSA9PT0gMyl7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocXVhcnRlckZpbmFscylcblxuICAgICAgICAgICAgICAgICAgICBzZXRQbGF5b2ZmKHF1YXJ0ZXJGaW5hbHMsIHNlbWlGaW5hbHMsIGZpbmFscywgd2lubmVyKVxuXG4gICAgICAgICAgICAgICAgICAgIHNlbWlGaW5hbHNUZWFtcyA9IFsuLi5hZGRUZWFtc0Zyb21QYWlyKHF1YXJ0ZXJGaW5hbHNQYWlycywgW10pXTtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxzVGVhbXMgPSBbLi4uYWRkVGVhbXNGcm9tUGFpcihzZW1pRmluYWxzUGFpcnMsIFtdKV07XG4gICAgICAgICAgICAgICAgICAgIHdpbm5lcnMgPSBbLi4uYWRkVGVhbXNGcm9tUGFpcih3aW5uZXJQYWlycywgW10pXTtcblxuXG4gICAgICAgICAgICAgICAgICAgIHNlbWlGaW5hbHNQYWlyc0J0bnMuZm9yRWFjaCgoYnRuLCBpKSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1QcmVkaWN0QnRuID0gcGxheW9mZlNlbWlGaW5hbFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fcG9wdXAtYnRuXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0blRlYW1OYW1lID0gYnRuLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbS10ZXh0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wb3JhcnlEYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgc2VtaUZpbmFsc1RlbXBvcmFyeSR7aSArIDF9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGBzZW1pRmluYWxzJHtpICsgMX1gLCB0ZW1wb3JhcnlEYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0bkN1cnJlbnREYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGBzZW1pRmluYWxzJHtpICsgMX1gKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJ0bkN1cnJlbnREYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtdGVhbVwiLCBidG5DdXJyZW50RGF0YS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuVGVhbU5hbWUudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkoYnRuQ3VycmVudERhdGEuZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdfb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VtaUZpbmFsc1RlYW1zID0gWy4uLmFkZFRlYW1zRnJvbVBhaXIocXVhcnRlckZpbmFsc1BhaXJzLCBbXSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0blBhaXJOdW1iZXIgPSBOdW1iZXIoYnRuLmdldEF0dHJpYnV0ZShcImRhdGEtY2hvb3NlLXNlbWlmaW5hbFwiKSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVkaWN0UGFpckRhdGEgPSBbXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VtaUZpbmFsc1RlYW1zLmZvckVhY2godGVhbSA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGVhbS5wYWlyTnVtID09PSBidG5QYWlyTnVtYmVyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY3RQYWlyRGF0YS5wdXNoKHRlYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclBsYXlvZmZQb3B1cChwbGF5b2ZmU2VtaUZpbmFsUG9wdXAsIHByZWRpY3RQYWlyRGF0YSxgc2VtaUZpbmFscyR7aSArIDF9YCwgYHNlbWlGaW5hbHNUZW1wb3Jhcnkke2kgKyAxfWApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXAoXCJwbGF5b2ZmU2VtaUZpbmFsXCIsIHBvcHVwc1dyYXApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVByZWRpY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBvcmFyeURhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGBzZW1pRmluYWxzVGVtcG9yYXJ5JHtpICsgMX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShgc2VtaUZpbmFscyR7aSArIDF9YCwgdGVtcG9yYXJ5RGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuQ3VycmVudERhdGEgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYHNlbWlGaW5hbHMke2kgKyAxfWApKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhidG5DdXJyZW50RGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYnRuQ3VycmVudERhdGEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtdGVhbVwiLCBidG5DdXJyZW50RGF0YS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5UZWFtTmFtZS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShidG5DdXJyZW50RGF0YS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VtaUZpbmFsc1RlYW1zLmxlbmd0aCA8IDQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVByZWRpY3RCdG4uY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUHJlZGljdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAocG9wdXBzV3JhcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBsYXlvZmYocXVhcnRlckZpbmFscywgc2VtaUZpbmFscywgZmluYWxzLCB3aW5uZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBmaW5hbHNQYWlyc0J0bnMuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtUHJlZGljdEJ0biA9IHBsYXlvZmZGaW5hbFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fcG9wdXAtYnRuXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0blRlYW1OYW1lID0gYnRuLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbS10ZXh0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wb3JhcnlEYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgZmluYWxzVGVtcG9yYXJ5JHtpICsgMX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYGZpbmFscyR7aSArIDF9YCwgdGVtcG9yYXJ5RGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidG5DdXJyZW50RGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgZmluYWxzJHtpICsgMX1gKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbWlGaW5hbENob29zZS5sZW5ndGggPCA0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUHJlZGljdEJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVByZWRpY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG5DdXJyZW50RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS10ZWFtXCIsIGJ0bkN1cnJlbnREYXRhLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5UZWFtTmFtZS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShidG5DdXJyZW50RGF0YS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjbG9zZVBvcHVwKHBvcHVwc1dyYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxzVGVhbXMgPSBbLi4uYWRkVGVhbXNGcm9tUGFpcihzZW1pRmluYWxzUGFpcnMsIFtdKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuUGFpck51bWJlciA9IE51bWJlcihidG4uZ2V0QXR0cmlidXRlKFwiZGF0YS1jaG9vc2UtZmluYWxcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1QcmVkaWN0QnRuID0gcGxheW9mZkZpbmFsUG9wdXAucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmX19wb3B1cC1idG5cIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWxpZFBhaXJOdW1zID0gYnRuUGFpck51bWJlciA9PT0gMSA/IFsxLCAyXSA6IFszLCA0XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZWRpY3RQYWlyRGF0YSA9IGZpbmFsc1RlYW1zLmZpbHRlcih0ZWFtID0+IHZhbGlkUGFpck51bXMuaW5jbHVkZXModGVhbS5wYWlyTnVtKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJQbGF5b2ZmUG9wdXAocGxheW9mZkZpbmFsUG9wdXAsIHByZWRpY3RQYWlyRGF0YSwgYGZpbmFscyR7aSArIDF9YCwgYGZpbmFsc1RlbXBvcmFyeSR7aSArIDF9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwKFwicGxheW9mZkZpbmFsXCIsIHBvcHVwc1dyYXApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlybUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBvcmFyeURhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGBmaW5hbHNUZW1wb3Jhcnkke2kgKyAxfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGBmaW5hbHMke2kgKyAxfWAsIHRlbXBvcmFyeURhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkN1cnJlbnREYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGBmaW5hbHMke2kgKyAxfWApKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuQ3VycmVudERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRlYW1cIiwgYnRuQ3VycmVudERhdGEuZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuVGVhbU5hbWUudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkoYnRuQ3VycmVudERhdGEuZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVByZWRpY3RCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbmZpcm1IYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cChwb3B1cHNXcmFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGxheW9mZihxdWFydGVyRmluYWxzLCBzZW1pRmluYWxzLCBmaW5hbHMsIHdpbm5lcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVByZWRpY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbmZpcm1IYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB3aW5uZXJDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5uZXJzID0gWy4uLmFkZFRlYW1zRnJvbVBhaXIod2lubmVyUGFpcnMsIFtdKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtUHJlZGljdEJ0biA9IHBsYXlvZmZXaW5uZXJQb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX3BvcHVwLWJ0blwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5UZWFtTmFtZSA9IHdpbm5lckNhcmQucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmX19jYXJkLXRleHRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlclBsYXlvZmZQb3B1cChwbGF5b2ZmV2lubmVyUG9wdXAsIHdpbm5lcnMsIGB3aW5uZXJgLCBgd2lubmVyVGVtcG9yYXJ5YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuUG9wdXAoXCJ3aW5uZXJcIiwgcG9wdXBzV3JhcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1IYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBvcmFyeURhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGB3aW5uZXJUZW1wb3JhcnlgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGB3aW5uZXJgLCB0ZW1wb3JhcnlEYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0bkN1cnJlbnREYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGB3aW5uZXJgKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuQ3VycmVudERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lubmVyQ2FyZC5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lubmVyQ2FyZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRlYW1cIiwgYnRuQ3VycmVudERhdGEuZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5UZWFtTmFtZS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShidG5DdXJyZW50RGF0YS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVByZWRpY3RCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbmZpcm1IYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKHBvcHVwc1dyYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBsYXlvZmYocXVhcnRlckZpbmFscywgc2VtaUZpbmFscywgZmluYWxzLCB3aW5uZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUHJlZGljdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uZmlybUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHN0YWdlcy5mb3JFYWNoKChzdGFnZSwgaSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGFnZSA+IHN0YWdlcy5sZW5ndGggLSAxID8gY3VycmVudFN0YWdlID0gc3RhZ2VzLmxlbmd0aCAtIDEgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U3RhZ2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YWdlLmNsYXNzTGlzdC50b2dnbGUoJ19hY3RpdmUnLCBpID09PSBjdXJyZW50U3RhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBzdGFnZXNUYWJzW2ldLmNsYXNzTGlzdC50b2dnbGUoJ19hY3RpdmUnLCBpID09PSBjdXJyZW50U3RhZ2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IHN0YWdlLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX3RvcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm90dG9tID0gc3RhZ2UucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fYm90dG9tXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lciA9IHN0YWdlLnF1ZXJ5U2VsZWN0b3IoXCIudGltZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYXlvZmZXcmFwID0gc3RhZ2UucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmX193cmFwcGVyXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID4gY3VycmVudFN0YWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A/LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tPy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlvZmZXcmFwPy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlLnNldEF0dHJpYnV0ZShcImRhdGEtcGljay1zdGFnZVwiLCBcImxvY2tcIilcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcD8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b20/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheW9mZldyYXA/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXI/LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoaSA9PT0gY3VycmVudFN0YWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFnZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBpY2stc3RhZ2VcIiwgXCJhY3RpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihpIDwgY3VycmVudFN0YWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFnZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBpY2stc3RhZ2VcIiwgXCJkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFnZS5jbGFzc0xpc3QuYWRkKFwiX2RvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZVBpY2tTdGFnZShzdGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcmVkaWN0KClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGFnZXNUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuX2FjdGl2ZScpKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0YWdlVmFsdWUgPSB0YWIuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YWdlLXRhYicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zdGFnZT1cIiR7dGFyZ2V0U3RhZ2VWYWx1ZX1cIl1gKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2VzLmZvckVhY2goc3RhZ2UgPT4gc3RhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlc1RhYnMuZm9yRWFjaCh0ID0+IHQuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFN0YWdlPy5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKE51bWJlcih0YXJnZXRTdGFnZVZhbHVlKSAtIDEgIT09IGN1cnJlbnRTdGFnZSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VQcmVkaWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLmNsYXNzTGlzdC5hZGQoXCJub0JnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdG9yQ2hlY2tJbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VQcmVkaWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLmNsYXNzTGlzdC5yZW1vdmUoXCJub0JnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdG9yQ2hlY2tJbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJlbmRlclRlYW1CbG9ja3MoJ2JpZ1dpbicsIHRlYW1zKTtcbiAgICAgICAgICAgICAgICByZW5kZXJUZWFtQmxvY2tzKCdiaWdMb3NlJywgdGVhbXMpO1xuICAgICAgICAgICAgICAgIHJlbmRlclRlYW1CbG9ja3MoJ090aGVycycsIHRlYW1zKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN0YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtc3RhZ2VdLl9hY3RpdmVgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc0Nsb3NlQnRuID0gdGFyZ2V0LmNsb3Nlc3QoJy5wbGF5b2ZmX19wb3B1cC1jbG9zZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAgPSB0YXJnZXQuY2xvc2VzdCgnLnBsYXlvZmZfX3BvcHVwJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vINC70L7Qs9GW0LrQsCDQtNC70Y8g0L/QtdGA0YjQuNGFIDPRhSDQtdGC0LDQv9GW0LJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGFnZSA8PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGlja2VkQ2FyZCA9IHRhcmdldC5jbG9zZXN0KCcuc3RhZ2VfX2NhcmQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkQmlnV2luID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWJpZy1zdGFnZT1cImJpZ1dpblwiXScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRCaWdMb3NlID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWJpZy1zdGFnZT1cImJpZ0xvc2VcIl0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW5Qb3B1cCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1wb3B1cD1cImJpZ1dpblwiXScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VQb3B1cCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1wb3B1cD1cImJpZ0xvc2VcIl0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdGhlcnNQb3B1cCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1wb3B1cD1cIk90aGVyc1wiXScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0gPSB0YXJnZXQuY2xvc2VzdCgnLnBsYXlvZmZfX2Nob29zZS10ZWFtJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzQ2FyZCA9IHRhcmdldC5jbG9zZXN0KCcuc3RhZ2VfX2NhcmQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxQb3B1cHNUZWFtID0gdGFyZ2V0LmNsb3Nlc3QoXCIucGxheW9mZl9fcG9wdXBcIik/LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWRUZWFtTmFtZSA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZWFtXScpPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ1dpbiA9IGFjdGl2ZVN0YWdlPy5xdWVyeVNlbGVjdG9yKGBbZGF0YS1iaWctc3RhZ2U9XCJiaWdXaW5cIl1gKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdXaW5UZWFtID0gYWN0aXZlQmlnV2luPy5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19jYXJkLXRleHRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnTG9zZSA9IGFjdGl2ZVN0YWdlPy5xdWVyeVNlbGVjdG9yKGBbZGF0YS1iaWctc3RhZ2U9XCJiaWdMb3NlXCJdYCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnTG9zZVRlYW0gPSBhY3RpdmVCaWdMb3NlPy5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19jYXJkLXRleHRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luUG9wdXBzVGVhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwPVwiYmlnV2luXCJdYCkucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZS10ZWFtLXRleHQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdMb3NlUG9wdXBzVGVhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwPVwiYmlnTG9zZVwiXWApLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbS10ZXh0JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzUG9wdXBzVGVhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwPVwiT3RoZXJzXCJdYCkucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZS10ZWFtLXRleHQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQ2hvb3NlQnRuID0gdGFyZ2V0LmNsb3Nlc3QoJy5wbGF5b2ZmX19wb3B1cC1idG4nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcnNDb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCJPdGhlcnNcIl1gKS5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fcG9wdXAtYnRuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luQ29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwPVwiYmlnV2luXCJdYCkucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX3BvcHVwLWJ0bicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VDb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCJiaWdMb3NlXCJdYCkucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX3BvcHVwLWJ0bicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZU90aGVycyA9IGFjdGl2ZVN0YWdlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNhcmRzLXdyYXA9XCJzdGFnZVwiXWApLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFnZV9fY2FyZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQstGW0LTQutGA0LjRgtGC0Y8g0L/QvtC/0LDQv9GDINC90LAgMyAwXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYXJkQmlnV2luKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYmlnV2luVGVtcG9yYXJ5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJpZ1dpbil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ1dpbkNvbmZpcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ1dpblRlbXBvcmFyeVwiLCBiaWdXaW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnV2luVGVtcG9yYXJ5XCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luQ29uZmlybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ1dpbkNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnX2xvY2snKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ1dpblBvcHVwc1RlYW0uZm9yRWFjaCgodGVhbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTmFtZSA9IGFjdGl2ZVN0YWdlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJpZy1zdGFnZT1cImJpZ0xvc2VcIl1gKS5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19jYXJkLXRleHRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1XcmFwID0gdGVhbS5jbG9zZXN0KFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWRUZWFtID0gdGVhbU5hbWUuZ2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nKSA9PT0gdGVhbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkQmlnV2luID0gSlNPTi5wYXJzZShiaWdXaW4pPy5kYXRhQXR0ciA9PT0gdGVhbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlYW1cIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NlbGVjdGVkQmlnV2luKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNTZWxlY3RlZFRlYW0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cChcImJpZ1dpblwiLCBwb3B1cHNXcmFwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQstGW0LTQutGA0LjRgtGC0Y8g0L/QvtC/0LDQv9GDINC90LAgMCAzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYXJkQmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImJpZ0xvc2VUZW1wb3JhcnlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VDb25maXJtQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdMb3NlVGVtcG9yYXJ5XCIsIGJpZ0xvc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnTG9zZVRlbXBvcmFyeVwiKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VDb25maXJtQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZUNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnX2xvY2snKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdMb3NlUG9wdXBzVGVhbS5mb3JFYWNoKCh0ZWFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1OYW1lID0gYWN0aXZlU3RhZ2UucXVlcnlTZWxlY3RvcihgW2RhdGEtYmlnLXN0YWdlPVwiYmlnV2luXCJdYCkucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fY2FyZC10ZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtV3JhcCA9IHRlYW0uY2xvc2VzdChcIi5wbGF5b2ZmX19jaG9vc2UtdGVhbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkVGVhbSA9IHRlYW1OYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJykgPT09IHRlYW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZEJpZ0xvc2UgPSBKU09OLnBhcnNlKGJpZ0xvc2UpPy5kYXRhQXR0ciA9PT0gdGVhbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlYW1cIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NlbGVjdGVkQmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU2VsZWN0ZWRUZWFtKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cChcImJpZ0xvc2VcIiwgcG9wdXBzV3JhcClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LLQuNCx0ZbRgCDQv9GA0LXQtNGW0LrRgtGDINC90LAgMyAwXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihiaWdXaW5Qb3B1cCAmJiBwb3B1cHNUZWFtKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjbGlja2VkVGVhbU5hbWUgJiYgcG9wdXBzVGVhbSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzU2VsZWN0ZWRCaWdXaW4gPSBKU09OLnBhcnNlKGJpZ1dpbikgPz8gZmFsc2VcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NlbGVjdGVkQmlnV2luKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdXaW5UZW1wb3JhcnlcIiwgYmlnV2luKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGVhbSA9IHRlYW1zLmZpbmQodGVhbSA9PiB0ZWFtLmRhdGFBdHRyID09PSBjbGlja2VkVGVhbU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdXaW5UZW1wb3JhcnlcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRlYW0pKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBvcHVwc1RlYW0uZm9yRWFjaCgodGVhbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbS5jbGFzc0xpc3QuYWRkKCdfb3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdXaW5UZW1wb3JhcnlcIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luQ29uZmlybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luQ29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LLQuNCx0ZbRgCDQv9GA0LXQtNGW0LrRgtGDINC90LAgMCAzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihiaWdMb3NlUG9wdXAgJiYgcG9wdXBzVGVhbSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjbGlja2VkVGVhbU5hbWUpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc1NlbGVjdGVkQmlnTG9zZSA9IEpTT04ucGFyc2UoYmlnTG9zZSkgPz8gZmFsc2VcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NlbGVjdGVkQmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmlnTG9zZVRlbXBvcmFyeVwiLCBiaWdMb3NlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGVhbSA9IHRlYW1zLmZpbmQodGVhbSA9PiB0ZWFtLmRhdGFBdHRyID09PSBjbGlja2VkVGVhbU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdMb3NlVGVtcG9yYXJ5XCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUZWFtKSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxQb3B1cHNUZWFtLmZvckVhY2goKHRlYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uY2xhc3NMaXN0LmFkZCgnX29wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0/LmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0/LmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ0xvc2VUZW1wb3JhcnlcIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZUNvbmZpcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VDb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoJ19sb2NrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LLRltC00LrRgNC40YLRgtGPINC/0L7Qv9Cw0L/RgyDQvdCwINGW0L3RiNGWINC60L7QvNCw0L3QtNC4XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjbGlja2VkQ2FyZCAmJiAhY2FyZEJpZ1dpbiAmJiAhY2FyZEJpZ0xvc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbW9wb3JhcnlUZWFtcyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0ZWFtc1dpblRlbXBvcmFyeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRlYW1zID0gdGVhbXNXaW4/LmZpbHRlcihpdGVtID0+IGl0ZW0gJiYgaXRlbS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRUZWFtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidGVhbXNXaW5UZW1wb3JhcnlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxlY3RlZFRlYW1zICYmIHNlbGVjdGVkVGVhbXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ0ZWFtc1dpblRlbXBvcmFyeVwiLCBKU09OLnN0cmluZ2lmeShzZWxlY3RlZFRlYW1zKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRlbW9wb3JhcnlUZWFtcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyc0NvbmZpcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzQ29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzUG9wdXBzVGVhbS5mb3JFYWNoKCh0ZWFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1EYXRhQXR0ciA9IHRlYW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbVdyYXAgPSB0ZWFtLmNsb3Nlc3QoXCIucGxheW9mZl9fY2hvb3NlLXRlYW1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbU5hbWVXaW4gPSBhY3RpdmVTdGFnZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1iaWctc3RhZ2U9XCJiaWdXaW5cIl0gLnN0YWdlX19jYXJkLXRleHQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbU5hbWVMb3NlID0gYWN0aXZlU3RhZ2UucXVlcnlTZWxlY3RvcignW2RhdGEtYmlnLXN0YWdlPVwiYmlnTG9zZVwiXSAuc3RhZ2VfX2NhcmQtdGV4dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWRUZWFtID0gc2VsZWN0ZWRUZWFtcz8uc29tZShpdGVtID0+IGl0ZW0uZGF0YUF0dHIgPT09IHRlYW1EYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWRUZWFtV2luID0gdGVhbU5hbWVXaW4/LmdldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJykgPT09IHRlYW1EYXRhQXR0cjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZFRlYW1Mb3NlID0gdGVhbU5hbWVMb3NlPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpID09PSB0ZWFtRGF0YUF0dHI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2VsZWN0ZWRUZWFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZWN0ZWRUZWFtcz8ubGVuZ3RoID4gMCAmJiAhaXNTZWxlY3RlZFRlYW0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1NlbGVjdGVkVGVhbVdpbiB8fCBpc1NlbGVjdGVkVGVhbUxvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFjdGl2ZU90aGVycyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyc0FycmF5ID0gQXJyYXkuZnJvbShhY3RpdmVPdGhlcnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleENhcmQgPSBvdGhlcnNBcnJheS5pbmRleE9mKG90aGVyc0NhcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleENhcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cChcIk90aGVyc1wiLCBwb3B1cHNXcmFwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQt9Cw0LrRgNC40YLRgtGPINC/0L7Qv9Cw0L/RgyDQvdCwINGW0L3RiNGWINC60L7QvNCw0L3QtNC4XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwb3B1cHNDbG9zZUJ0biB8fCAhY2xpY2tlZENhcmQgJiYgIXBvcHVwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAocG9wdXBzV3JhcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCy0LjQsdGW0YAg0L/RgNC10LTRltC60YLRgyDQvdCwINCy0YHRliDRltC90YjRliDQutC+0LzQsNC90LTQuFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE90aGVyc1BvcHVwICYmIHBvcHVwc1RlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwb3B1cHNUZWFtLmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBvcHVwc1RlYW0uY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xpY2tlZFRlYW1OYW1lKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUZWFtID0gdGVhbXMuZmluZCh0ZWFtID0+IHRlYW0uZGF0YUF0dHIgPT09IGNsaWNrZWRUZWFtTmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUZWFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UHJlZGljdCA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRlYW1zV2luVGVtcG9yYXJ5XCIpKSB8fCBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxyZWFkeUFkZGVkID0gbmV3UHJlZGljdC5zb21lKGl0ZW0gPT4gaXRlbS5kYXRhQXR0ciA9PT0gY3VycmVudFRlYW0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNQcmVkaWN0RnVsbCA9IG5ld1ByZWRpY3QubGVuZ3RoID49IDc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYWxyZWFkeUFkZGVkICYmICFpc1ByZWRpY3RGdWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJlZGljdC5wdXNoKGN1cnJlbnRUZWFtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidGVhbXNXaW5UZW1wb3JhcnlcIiwgSlNPTi5zdHJpbmdpZnkobmV3UHJlZGljdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIEFkZGVkOlwiLCBjdXJyZW50VGVhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbS5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cHNUZWFtLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ByZWRpY3QgPSBuZXdQcmVkaWN0LmZpbHRlcih0ZWFtID0+IHRlYW0uZGF0YUF0dHIgIT09IGN1cnJlbnRUZWFtLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidGVhbXNXaW5UZW1wb3JhcnlcIiwgSlNPTi5zdHJpbmdpZnkobmV3UHJlZGljdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pqg77iPIFRlYW0gcmVtb3ZlZFwiLCBjdXJyZW50VGVhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cHNUZWFtLmNsYXNzTGlzdC5hZGQoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRMZW5ndGggPSBuZXdQcmVkaWN0Lmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRMZW5ndGggPCA3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzQ29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBvcHVwc1RlYW0uZm9yRWFjaCh0ZWFtID0+IHRlYW0uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHVwZGF0ZWRMZW5ndGggPT09IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcnNDb25maXJtQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsUG9wdXBzVGVhbS5mb3JFYWNoKHRlYW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVhbS5jbGFzc0xpc3QuY29udGFpbnMoJ19vcGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinYwgVGVhbSBub3QgZm91bmQgZm9yOlwiLCBjbGlja2VkVGVhbU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0L/RltC00YLQstC10YDQtNC20LXQvdC90Y8g0LLQuNCx0L7RgNGDINCyINC/0L7Qv9Cw0L/RllxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlybUNob29zZUJ0bil7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtc1dpbiA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRlYW1zV2luVGVtcG9yYXJ5XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0ZWFtc1dpbikgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInRlYW1zV2luXCIsIEpTT04uc3RyaW5naWZ5KHRlYW1zV2luKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdMb3NlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ0xvc2VUZW1wb3JhcnlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmlnTG9zZSkgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ0xvc2VcIiwgYmlnTG9zZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ1dpbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdXaW5UZW1wb3JhcnlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmlnV2luKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmlnV2luXCIsIGJpZ1dpbilcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmlnV2luUHJlZGljdCA9IEpTT04ucGFyc2UoYmlnV2luKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpZ0xvc2VQcmVkaWN0ID0gSlNPTi5wYXJzZShiaWdMb3NlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG90aGVyVGVhbXNQcmVkaWN0ID0gdGVhbXNXaW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiaWdMb3NlUHJlZGljdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ0xvc2UuY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdMb3NlLmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ0xvc2VUZWFtLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KGJpZ0xvc2VQcmVkaWN0LmRhdGFBdHRyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdMb3NlVGVhbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScsIGJpZ0xvc2VQcmVkaWN0LmRhdGFBdHRyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJpZ1dpblByZWRpY3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdXaW4uY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdXaW4uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnV2luVGVhbS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShiaWdXaW5QcmVkaWN0LmRhdGFBdHRyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdXaW5UZWFtLnNldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJywgYmlnV2luUHJlZGljdC5kYXRhQXR0cilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvdGhlclRlYW1zUHJlZGljdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyVGVhbXNQcmVkaWN0LmZvckVhY2goKHRlYW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDYXJkVGVhbU5hbWUgPSBhY3RpdmVPdGhlcnNbaV0ucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fY2FyZC10ZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudENhcmRUZWFtTmFtZSwgdGVhbSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlT3RoZXJzW2ldLmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVPdGhlcnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FyZFRlYW1OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJywgdGVhbS5kYXRhQXR0cilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXJkVGVhbU5hbWUudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkodGVhbS5kYXRhQXR0cilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRlYW1zV2luICYmIGJpZ1dpbiAmJiBiaWdMb3NlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKHBvcHVwc1dyYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0ZWFtc1dpbiAmJiBiaWdXaW4gJiYgYmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VQcmVkaWN0QnRuLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LfQsNC60YDQuNGC0YLRjyDQv9C+0L/QsNC/0YMg0L3QsCDRltC90YjRliDQutC+0LzQsNC90LTQuFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGlja2VkVGFiID0gdGFyZ2V0LmNsb3Nlc3QoXCIucGxheW9mZl9fY2hvb3NlLXRlYW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRDYXJkID0gdGFyZ2V0LmNsb3Nlc3QoXCIucGxheW9mZl9fY2FyZFwiKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwb3B1cHNDbG9zZUJ0biB8fCAhY2xpY2tlZFRhYiAmJiAhcG9wdXAgJiYgIWNsaWNrZWRDYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cChwb3B1cHNXcmFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFN0YWdlIDwgMyl7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlvZmZQcmVkaWN0b3IuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGxheW9mZlBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgc2VuZFByZWRpY3QoKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2V0VGltZW91dChoaWRlTG9hZGVyLCAxMDAwKVxuXG4gICAgICAgICAgICBsZXQgaW5pdGlhbE9mZnNldExlZnQgPSBudWxsO1xuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVQbGF5b2ZmUG9zaXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDEzMDAgJiYgd2luZG93LmlubmVyV2lkdGggPiA1NTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlvZmZTdGFnZS5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE9mZnNldExlZnQgPSBwbGF5b2ZmU3RhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZWZ0ID0gaW5pdGlhbE9mZnNldExlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaWZ0ID0gY3VycmVudExlZnQgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlvZmZTdGFnZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtzaGlmdH1weClgO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheW9mZlN0YWdlLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsT2Zmc2V0TGVmdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMClcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCB1cGRhdGVQbGF5b2ZmUG9zaXRpb24pO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlUGxheW9mZlBvc2l0aW9uKTtcblxuICAgICAgICAgICAgY29uc3QgcGxheW9mZlBoYXNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19zdGFnZScpO1xuICAgICAgICAgICAgY29uc3QgcGxheW9mZkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmJyk7XG4gICAgICAgICAgICBjb25zdCBwbGF5b2ZmTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19idG4tcmlnaHQnKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXlvZmZQcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX2J0bi1sZWZ0Jyk7XG5cbiAgICAgICAgICAgIGxldCBwaGFzZUNvdW50ID0gMztcbiAgICAgICAgICAgIGxldCBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDU1MDtcblxuICAgICAgICAgICAgY29uc3Qgc2V0Q3VycmVudFBoYXNlID0gKHBoYXNlcywgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHBoYXNlcy5mb3JFYWNoKChwaGFzZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwaGFzZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiLCBpICE9PSBjdXJyZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHNob3dBbGxQaGFzZXMgPSAocGhhc2VzKSA9PiB7XG4gICAgICAgICAgICAgICAgcGhhc2VzLmZvckVhY2gocGhhc2UgPT4gcGhhc2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIikpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgaGlkZUFsbEV4Y2VwdEN1cnJlbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFBoYXNlKHBsYXlvZmZQaGFzZXMsIHBoYXNlQ291bnQpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwaGFzZUNvdW50ID0gKHBoYXNlQ291bnQgKyAxKSAlIHBsYXlvZmZQaGFzZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGhpZGVBbGxFeGNlcHRDdXJyZW50KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVQcmV2ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBoYXNlQ291bnQgPSAocGhhc2VDb3VudCAtIDEgKyBwbGF5b2ZmUGhhc2VzLmxlbmd0aCkgJSBwbGF5b2ZmUGhhc2VzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBoaWRlQWxsRXhjZXB0Q3VycmVudCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IHRvdWNoU3RhcnRYID0gMDtcbiAgICAgICAgICAgIGxldCB0b3VjaEVuZFggPSAwO1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVTd2lwZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gdG91Y2hFbmRYIC0gdG91Y2hTdGFydFg7XG5cbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiA1MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgICAgIGhpZGVBbGxFeGNlcHRDdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgcGxheW9mZk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVOZXh0KTtcbiAgICAgICAgICAgICAgICBwbGF5b2ZmUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByZXYpO1xuXG4gICAgICAgICAgICAgICAgcGxheW9mZkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hTdGFydFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBwbGF5b2ZmQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hFbmRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTd2lwZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vd01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDU1MDtcblxuICAgICAgICAgICAgICAgIGlmIChub3dNb2JpbGUgJiYgIWlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTW9iaWxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUFsbEV4Y2VwdEN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheW9mZk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVOZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcGxheW9mZlByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQcmV2KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIW5vd01vYmlsZSAmJiBpc01vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICBpc01vYmlsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzaG93QWxsUGhhc2VzKHBsYXlvZmZQaGFzZXMpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmTmV4dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5leHQpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmUHJldi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByZXYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xpY2stcGlja1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpLnRoZW4oaW5pdClcblxuICAgIC8vdGVzdFxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tbG5nXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwidWtcIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG5cbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYXV0aFwiKVxuXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHVzZXJJZCl7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjc3Nzc3Nzc5XCIpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKTtcbiAgICBjb25zdCBwb3B1cFdpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW4tcG9wdXAnKTtcbiAgICBjb25zdCBwb3B1cExvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9zZS1wb3B1cCcpO1xuICAgIGNvbnN0IHBvcHVwT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3RoZXJzLXBvcHVwJyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBvcHVwLXdpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1vcGFjaXR5Jyk7XG4gICAgICAgIHBvcHVwV2luLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBMb3NlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBPdGhlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcG9wdXAtbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1vcGFjaXR5Jyk7XG4gICAgICAgIHBvcHVwV2luLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBMb3NlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBPdGhlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcG9wdXAtb3RoZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXktb3BhY2l0eScpO1xuICAgICAgICBwb3B1cFdpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHBvcHVwTG9zZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHBvcHVwT3RoZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXRpbWVyJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdGFnZTEgPSAnMSdcbiAgICAgICAgY29uc3Qgc3RhZ2UyID0gJzMnXG5cbiAgICAgICAgY29uc3Qgc2F2ZWREYXRlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnREYXRlXCIpO1xuXG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBzYXZlZERhdGUgPT09IHN0YWdlMiA/IHN0YWdlMSA6IHN0YWdlMjtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnREYXRlXCIsIG5ld0RhdGUpO1xuXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG5cbn0pKCk7XG4iXX0=
