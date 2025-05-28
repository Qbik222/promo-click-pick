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
    var semiFinalChoose = [JSON.parse(sessionStorage.getItem("semiFinals1") || "{}"), JSON.parse(sessionStorage.getItem("semiFinals2") || "{}"), JSON.parse(sessionStorage.getItem("semiFinals3") || "{}"), JSON.parse(sessionStorage.getItem("semiFinals4") || "{}")];
    var finalChoose = [JSON.parse(sessionStorage.getItem("finals1") || "{}"), JSON.parse(sessionStorage.getItem("finals2") || "{}")];
    var winnerChoose = JSON.parse(sessionStorage.getItem("winner") || "{}");
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
    semiFinalChoose = [JSON.parse(sessionStorage.getItem("semiFinals1") || "{}"), JSON.parse(sessionStorage.getItem("semiFinals2") || "{}"), JSON.parse(sessionStorage.getItem("semiFinals3") || "{}"), JSON.parse(sessionStorage.getItem("semiFinals4") || "{}")];
    finalChoose = [JSON.parse(sessionStorage.getItem("finals1") || "{}"), JSON.parse(sessionStorage.getItem("finals2") || "{}")];
    winnerChoose = JSON.parse(sessionStorage.getItem("winner") || "{}");
    console.log(winnerChoose);
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
    winnerCard.classList.remove("_selected");
    winnerCard.classList.add("_open");
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
    var stage2 = '3';
    var savedDate = sessionStorage.getItem("currentDate");
    var newDate = savedDate === stage2 ? stage1 : stage2;
    sessionStorage.setItem("currentDate", newDate);
    location.reload();
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvY2F0aW9uIiwicmVsb2FkIiwiYXBpVVJMIiwic3RhZ2VzRGF0YSIsImRhdGEiLCJEYXRlIiwiY3VycmVudERhdGUiLCJjdXJyZW50U3RhZ2UiLCJOdW1iZXIiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInN0YWdlcyIsInN0YWdlQWN0aXZlIiwic3RhZ2VzVGFicyIsInBsYXlvZmZTdGFnZSIsInJlc3VsdHMiLCJwcmVkaWN0b3IiLCJwbGF5b2ZmUHJlZGljdG9yIiwidGVhbVRleHRQb3B1cHMiLCJwb3B1cHNXcmFwIiwibWFrZVByZWRpY3RCdG4iLCJwcmVkaWN0b3JDaGVja0luIiwicGxheW9mZlN0YWdlcyIsInF1YXJ0ZXJGaW5hbHMiLCJzZW1pRmluYWxzIiwiZmluYWxzIiwid2lubmVyIiwicXVhcnRlckZpbmFsc1BhaXJzIiwic2VtaUZpbmFsc1BhaXJzIiwid2lubmVyUGFpcnMiLCJzZW1pRmluYWxzUGFpcnNCdG5zIiwiZmluYWxzUGFpcnNCdG5zIiwid2lubmVyQ2FyZCIsInBsYXlvZmZTZW1pRmluYWxQb3B1cCIsInBsYXlvZmZGaW5hbFBvcHVwIiwicGxheW9mZldpbm5lclBvcHVwIiwic2VtaUZpbmFsc1RlYW1zIiwiZmluYWxzVGVhbXMiLCJ3aW5uZXJzIiwic2VtaUZpbmFsQ2hvb3NlIiwiZmluYWxDaG9vc2UiLCJ3aW5uZXJDaG9vc2UiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsInRlYW1zIiwidGVhbSIsImJpZ0xvc2UiLCJiaWdXaW4iLCJ0ZWFtc1dpbiIsIkpTT04iLCJwYXJzZSIsInN0YWdlc1Jlc3VsdCIsImRlZmF1dFZhbHVlIiwidGVhbXNCZXQiLCJvdXRjb21lIiwicXVvdGVyRmluYWxzRGF0YSIsImxvYWRlckJ0biIsImxvY2FsZSIsImRlYnVnIiwib3RoZXJzQXJyYXkiLCJpbmRleENhcmQiLCJ0cmFuc2xhdGVTdGF0ZSIsInVzZXJJZCIsInJlcXVlc3QiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiZmV0Y2giLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZXJyIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwicmVuZGVyVGVhbUJsb2NrcyIsInBvcHVwQXR0ciIsInBvcHVwIiwiY29udGFpbmVyIiwidGVhbUJsb2NrIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwidHJhbnNsYXRlIiwic2VuZFByZWRpY3QiLCJvdGhlclRlYW1zIiwicHJlZGljdEJvZHkiLCJ1c2VyaWQiLCJiZXQiLCJiaWdXaW5uZXIiLCJiaWdMb3NlciIsIm1ldGhvZCIsImJvZHkiLCJzdHJpbmdpZnkiLCJzdWNjZXNzIiwic2V0Q3VycmVudFByZWRpY3QiLCJnZXRVc2VyUHJlZGljdCIsInByZWRpY3QiLCJzdGFnZUJldCIsIndhcm4iLCJhZGQiLCJzdGFnZU90aGVycyIsInN0YWdlT3RoZXJDYXJkcyIsInN0YWdlV2luQ2FyZCIsInN0YWdlV2luQ2FyZFRlYW0iLCJzdGFnZUxvc2VDYXJkIiwic3RhZ2VMb3NlQ2FyZFRlYW0iLCJwcmVkaWN0T3RoZXJUZWFtcyIsInByZWRpY3RXaW5uZXIiLCJwcmVkaWN0TG9zZXIiLCJyZW1vdmUiLCJzZXRJdGVtIiwidGV4dENvbnRlbnQiLCJ0cmFuc2xhdGVLZXkiLCJjYXJkIiwiaSIsImNhcmRUZWFtTmFtZSIsImNoZWNrVXNlckF1dGgiLCJleHRyYWN0UGxheW9mZlNlbGVjdGlvbnMiLCJxdWFydGVyRmluYWxzQ2FyZHMiLCJzZW1pRmluYWxzQ2FyZHMiLCJGaW5hbHNDYXJkcyIsIndpbm5lckNhcmRzIiwic2V0UGxheW9mZiIsInRlYW1DYXJkTmFtZSIsImZpbmQiLCJpdGVtIiwiaGlkZUxvYWRlciIsInN0eWxlIiwib3ZlcmZsb3ciLCJsb2FkVGltZSIsInNldFRpbWVvdXQiLCJzaG93RWxlbWVudHMiLCJoaWRlRWxlbWVudHMiLCJyZXNvbHZlIiwicmVwb3J0RXJyb3IiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwiaHJlZiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsImVsZW1zIiwibGVuZ3RoIiwiZWxlbSIsImtleSIsImdldEF0dHJpYnV0ZSIsInJlZnJlc2hMb2NhbGl6ZWRDbGFzcyIsImVsZW1lbnQiLCJsYW5nIiwicmVuZGVyVXNlcnMiLCJ3ZWVrIiwidXNlcnMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJjdXJyZW50VXNlciIsInVzZXIiLCJpc1RvcEN1cnJlbnRVc2VyIiwic2xpY2UiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93IiwidXNlckRhdGEiLCJvcHRpb25zIiwiaGlnaGxpZ2h0IiwibmVpZ2hib3IiLCJ1c2VyUm93IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsIm1hc2tVc2VySWQiLCJwb2ludHMiLCJhcHBlbmQiLCJpbmRleCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJ0b1N0cmluZyIsInNldFN0YXRlUGlja1N0YWdlIiwic3RhZ2UiLCJzdGFnZUNhcmRzV3JhcCIsInN0YWdlQ2FyZHMiLCJzdGFnZUNhcmRXaW4iLCJzdGFnZUNhcmRMb3NlIiwic3RhZ2VDYXJkV2luTmFtZSIsInN0YWdlQ2FyZExvc2VOYW1lIiwic3RhZ2VOdW0iLCJzdGFnZVN0YXRlIiwic3RhZ2VSZXN1bHREYXRhIiwib3RoZXJzVGVhbXMiLCJiaWdXaW5UZWFtIiwiYmlnTG9zZVRlYW0iLCJ0ZWFtTmFtZSIsImN1cnJlbnREYXRhIiwib3BlblBvcHVwIiwiY3VycmVudFBvcHVwIiwiY2xvc2VQb3B1cCIsInBvcHVwcyIsImFsbFBvcHVwc1RlYW1UYWJzIiwicGxhY2UiLCJleHRyYWN0VGVhbURhdGEiLCJwYWlyRWxlbWVudCIsInRlYW1TZWxlY3RvciIsImdyb3VwQXR0ciIsIkFycmF5IiwiZnJvbSIsIm1hcCIsInBhaXJOdW0iLCJjbG9zZXN0IiwiYWRkVGVhbXNGcm9tUGFpciIsInBhaXJzIiwidGVhbXNBcnJheSIsInJlc3VsdCIsInBhaXIiLCJleHRyYWN0ZWQiLCJyZW5kZXJQbGF5b2ZmUG9wdXAiLCJwb3B1cEVsZW1lbnQiLCJ0ZWFtc1BsYXlvZmYiLCJkYXRhTmFtZSIsInRlbXBvcmFyeURhdGFOYW1lIiwic2Nyb2xsQ29udGFpbmVyIiwic2F2ZWREYXRhIiwidGVhbURpdiIsImRhdGFzZXQiLCJpY29uRGl2IiwidGV4dERpdiIsImJ0bkRpdiIsInRlYW1UYWJzIiwidGVhbVRhYiIsInNlbGVjdGVkVGVhbSIsInRvTG93ZXJDYXNlIiwiaiIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwidXNlclN0YWdlcyIsImJ0biIsImNvbmZpcm1QcmVkaWN0QnRuIiwiYnRuVGVhbU5hbWUiLCJ0ZW1wb3JhcnlEYXRhIiwiYnRuQ3VycmVudERhdGEiLCJlIiwiYnRuUGFpck51bWJlciIsInByZWRpY3RQYWlyRGF0YSIsInB1c2giLCJ2YWxpZFBhaXJOdW1zIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJjb25maXJtSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b3AiLCJib3R0b20iLCJ0aW1lciIsInBsYXlvZmZXcmFwIiwidGFiIiwidGFyZ2V0IiwidGFyZ2V0U3RhZ2VWYWx1ZSIsInRhcmdldFN0YWdlIiwidCIsImFjdGl2ZVN0YWdlIiwicG9wdXBzQ2xvc2VCdG4iLCJjbGlja2VkQ2FyZCIsImNhcmRCaWdXaW4iLCJjYXJkQmlnTG9zZSIsImJpZ1dpblBvcHVwIiwiYmlnTG9zZVBvcHVwIiwiT3RoZXJzUG9wdXAiLCJwb3B1cHNUZWFtIiwib3RoZXJzQ2FyZCIsImFsbFBvcHVwc1RlYW0iLCJjbGlja2VkVGVhbU5hbWUiLCJhY3RpdmVCaWdXaW4iLCJhY3RpdmVCaWdXaW5UZWFtIiwiYWN0aXZlQmlnTG9zZSIsImFjdGl2ZUJpZ0xvc2VUZWFtIiwiYmlnV2luUG9wdXBzVGVhbSIsImJpZ0xvc2VQb3B1cHNUZWFtIiwib3RoZXJzUG9wdXBzVGVhbSIsImNvbmZpcm1DaG9vc2VCdG4iLCJvdGhlcnNDb25maXJtQnRuIiwiYmlnV2luQ29uZmlybUJ0biIsImJpZ0xvc2VDb25maXJtQnRuIiwiYWN0aXZlT3RoZXJzIiwicmVtb3ZlSXRlbSIsInRlYW1XcmFwIiwiaXNTZWxlY3RlZFRlYW0iLCJpc1NlbGVjdGVkQmlnV2luIiwiaXNTZWxlY3RlZEJpZ0xvc2UiLCJjdXJyZW50VGVhbSIsInRlbW9wb3JhcnlUZWFtcyIsInNlbGVjdGVkVGVhbXMiLCJ0ZWFtRGF0YUF0dHIiLCJ0ZWFtTmFtZVdpbiIsInRlYW1OYW1lTG9zZSIsImlzU2VsZWN0ZWRUZWFtV2luIiwiaXNTZWxlY3RlZFRlYW1Mb3NlIiwibmV3UHJlZGljdCIsImFscmVhZHlBZGRlZCIsImlzUHJlZGljdEZ1bGwiLCJ1cGRhdGVkTGVuZ3RoIiwiY29udGFpbnMiLCJiaWdXaW5QcmVkaWN0IiwiYmlnTG9zZVByZWRpY3QiLCJvdGhlclRlYW1zUHJlZGljdCIsImN1cnJlbnRDYXJkVGVhbU5hbWUiLCJjbGlja2VkVGFiIiwidXBkYXRlUGxheW9mZlBvc2l0aW9uIiwiaW5pdGlhbE9mZnNldExlZnQiLCJpbm5lcldpZHRoIiwidHJhbnNmb3JtIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsImN1cnJlbnRMZWZ0Iiwic2hpZnQiLCJwbGF5b2ZmUGhhc2VzIiwicGxheW9mZkNvbnRhaW5lciIsInBsYXlvZmZOZXh0IiwicGxheW9mZlByZXYiLCJwaGFzZUNvdW50IiwiaXNNb2JpbGUiLCJzZXRDdXJyZW50UGhhc2UiLCJwaGFzZXMiLCJjdXJyZW50IiwicGhhc2UiLCJzaG93QWxsUGhhc2VzIiwiaGlkZUFsbEV4Y2VwdEN1cnJlbnQiLCJoYW5kbGVOZXh0IiwiaGFuZGxlUHJldiIsInRvdWNoU3RhcnRYIiwidG91Y2hFbmRYIiwiaGFuZGxlU3dpcGUiLCJkaWZmIiwiTWF0aCIsImFicyIsImNoYW5nZWRUb3VjaGVzIiwic2NyZWVuWCIsIm5vd01vYmlsZSIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidGFyZ2V0Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJsbmdCdG4iLCJhdXRoQnRuIiwib3ZlcmxheSIsInBvcHVwV2luIiwicG9wdXBMb3NlIiwicG9wdXBPdGhlciIsInN0YWdlMSIsInN0YWdlMiIsInNhdmVkRGF0ZSIsIm5ld0RhdGUiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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LEVBQUUsWUFBTTtJQUNsRSxJQUFNaVosTUFBTSxHQUFHLEdBQUc7SUFDbEIsSUFBTUMsTUFBTSxHQUFHLEdBQUc7SUFFbEIsSUFBTUMsU0FBUyxHQUFHelksY0FBYyxDQUFDQyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBRXZELElBQU15WSxPQUFPLEdBQUdELFNBQVMsS0FBS0QsTUFBTSxHQUFHRCxNQUFNLEdBQUdDLE1BQU07SUFDdER4WSxjQUFjLENBQUM4SCxPQUFPLENBQUMsYUFBYSxFQUFFNFEsT0FBTyxDQUFDO0lBRTlDblosUUFBUSxDQUFDQyxNQUFNLEVBQUU7RUFDckIsQ0FBQyxDQUFDO0FBR04sQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KVxuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9jbGlja19waWNrJ1xuXG4gICAgY29uc3Qgc3RhZ2VzRGF0YSA9IFtcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMjBUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMjVUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMzBUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDYtMDVUMDA6MDA6MDArMDM6MDBcIikgfVxuICAgIF07XG5cbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0wNC0wNVQwMDowMDowMCswMzowMFwiKTtcblxuICAgIC8vIGxldCBjdXJyZW50U3RhZ2UgPSBzdGFnZXNEYXRhLmZpbHRlcihzdGFnZSA9PiBzdGFnZS5kYXRhIDw9IGN1cnJlbnREYXRlKS5sZW5ndGggPz8gMztcblxuICAgIGxldCBjdXJyZW50U3RhZ2UgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnREYXRlXCIpKVxuXG4gICAgLy8gbGV0IGN1cnJlbnRTdGFnZSA9IDRcblxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdGFnZSk7XG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpLFxuICAgICAgICBzdGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc3RhZ2VdXCIpLFxuICAgICAgICBzdGFnZUFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXN0YWdlPVwiJHtjdXJyZW50U3RhZ2UgKyAxfVwiXWApLFxuICAgICAgICBzdGFnZXNUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXN0YWdlLXRhYl1cIiksXG4gICAgICAgIHBsYXlvZmZTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZlwiKSxcbiAgICAgICAgcmVzdWx0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0c1wiKSxcbiAgICAgICAgcHJlZGljdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVkaWN0b3JcIiksXG4gICAgICAgIHBsYXlvZmZQcmVkaWN0b3IgPSBwcmVkaWN0b3IucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmXCIpLFxuICAgICAgICB0ZWFtVGV4dFBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbS10ZXh0JyksXG4gICAgICAgIHBvcHVwc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwc1wiKSxcbiAgICAgICAgbWFrZVByZWRpY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFrZS1wcmVkaWN0JyksXG4gICAgICAgIHByZWRpY3RvckNoZWNrSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlZGljdG9yX19jaGVja2luJyk7XG5cbiAgICBjb25zdCBwbGF5b2ZmU3RhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGxheW9mZi1zdGFnZV0nKSxcbiAgICAgICAgcXVhcnRlckZpbmFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXlvZmYtc3RhZ2U9XCIxXCJdJyksXG4gICAgICAgIHNlbWlGaW5hbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGF5b2ZmLXN0YWdlPVwiMlwiXScpLFxuICAgICAgICBmaW5hbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGF5b2ZmLXN0YWdlPVwiM1wiXScpLFxuICAgICAgICB3aW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGF5b2ZmLXN0YWdlPVwiNFwiXScpLFxuICAgICAgICBxdWFydGVyRmluYWxzUGFpcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fY2hvb3NlW2RhdGEtY2hvb3NlLXNlbWlmaW5hbF0nKSxcbiAgICAgICAgc2VtaUZpbmFsc1BhaXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZVtkYXRhLWNob29zZS1maW5hbF0nKSxcbiAgICAgICAgd2lubmVyUGFpcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fY2hvb3NlW2RhdGEtY2hvb3NlLXdpbm5lcl0nKSxcbiAgICAgICAgc2VtaUZpbmFsc1BhaXJzQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbVtkYXRhLWNob29zZS1zZW1pZmluYWxdJyksXG4gICAgICAgIGZpbmFsc1BhaXJzQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbVtkYXRhLWNob29zZS1maW5hbF0nKSxcbiAgICAgICAgd2lubmVyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19jYXJkJyksXG4gICAgICAgIHBsYXlvZmZTZW1pRmluYWxQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBvcHVwPVwicGxheW9mZlNlbWlGaW5hbFwiXScpLFxuICAgICAgICBwbGF5b2ZmRmluYWxQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBvcHVwPVwicGxheW9mZkZpbmFsXCJdJyksXG4gICAgICAgIHBsYXlvZmZXaW5uZXJQb3B1cD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcG9wdXA9XCJ3aW5uZXJcIl0nKTtcblxuICAgIGxldCBzZW1pRmluYWxzVGVhbXMgPSBbXVxuICAgIGxldCBmaW5hbHNUZWFtcyA9IFtdXG4gICAgbGV0IHdpbm5lcnMgPSBbXVxuXG4gICAgbGV0IHNlbWlGaW5hbENob29zZSA9IFtdXG4gICAgbGV0IGZpbmFsQ2hvb3NlID0gW11cbiAgICBsZXQgd2lubmVyQ2hvb3NlID0gbnVsbFxuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB0ZWFtcyA9IFtcbiAgICAgICAgeyB0ZWFtOiBcIkNvbXBsZXhpdHlcIiwgZGF0YUF0dHI6IFwiY29tcGxleGl0eVwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJGYWxjb25zXCIsIGRhdGFBdHRyOiBcImZhbGNvbnNcIiB9LFxuICAgICAgICB7IHRlYW06IFwiVml0YWxpdHlcIiwgZGF0YUF0dHI6IFwidml0YWxpdHlcIiB9LFxuICAgICAgICB7IHRlYW06IFwiSGVyb2ljXCIsIGRhdGFBdHRyOiBcImhlcm9pY1wiIH0sXG4gICAgICAgIHsgdGVhbTogXCJGYXplXCIsIGRhdGFBdHRyOiBcImZhemVcIiB9LFxuICAgICAgICB7IHRlYW06IFwiU3Bpcml0XCIsIGRhdGFBdHRyOiBcInNwaXJpdFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJCOFwiLCBkYXRhQXR0cjogXCJCOFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCIzRE1BWFwiLCBkYXRhQXR0cjogXCIzRE1BWFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJNT1VaXCIsIGRhdGFBdHRyOiBcIk1PVVpcIiB9LFxuICAgICAgICB7IHRlYW06IFwiV2lsZGNhcmRcIiwgZGF0YUF0dHI6IFwid2lsZGNhcmRcIiB9LFxuICAgICAgICB7IHRlYW06IFwiVmlydHVzLnByb1wiLCBkYXRhQXR0cjogXCJ2aXJ0dXNQcm9cIiB9LFxuICAgICAgICB7IHRlYW06IFwiVGhlIE1vbmdvbHpcIiwgZGF0YUF0dHI6IFwidGhlTW9uZ29selwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJGbHlRdWVzdFwiLCBkYXRhQXR0cjogXCJmbHlRdWVzdFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJGdXJpYVwiLCBkYXRhQXR0cjogXCJmdXJpYVwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJBdXJvcmFcIiwgZGF0YUF0dHI6IFwiYXVyb3JhXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkx5bm4gVmlzaW9uXCIsIGRhdGFBdHRyOiBcImx5bm5WaXNpb25cIiB9LFxuICAgICAgICB7IHRlYW06IFwiTUlCUlwiLCBkYXRhQXR0cjogXCJNSUJSXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk5hdHVzIFZpbmNlcmVcIiwgZGF0YUF0dHI6IFwibmF0dXNWaW5jZXJlXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk5SR1wiLCBkYXRhQXR0cjogXCJOUkdcIiB9LFxuICAgICAgICB7IHRlYW06IFwiUGFpTlwiLCBkYXRhQXR0cjogXCJQYWlOXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkcyXCIsIGRhdGFBdHRyOiBcIkcyXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIkNoaW5nZ2lzIFdhcnJpb3JzXCIsIGRhdGFBdHRyOiBcImNoaW5nZ2lzV2FycmlvcnNcIiB9LFxuICAgICAgICB7IHRlYW06IFwiTTgwXCIsIGRhdGFBdHRyOiBcIk04MFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJMaXF1aWRcIiwgZGF0YUF0dHI6IFwibGlxdWlkXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIk5lbWlnYVwiLCBkYXRhQXR0cjogXCJuZW1pZ2FcIiB9LFxuICAgICAgICB7IHRlYW06IFwiSW1wZXJpYWxcIiwgZGF0YUF0dHI6IFwiaW1wZXJpYWxcIiB9LFxuICAgICAgICB7IHRlYW06IFwiRmx1eG9cIiwgZGF0YUF0dHI6IFwiZmx1eG9cIiB9LFxuICAgICAgICB7IHRlYW06IFwiTWV0aXpwb3J0XCIsIGRhdGFBdHRyOiBcIm1ldGl6cG9ydFwiIH0sXG4gICAgICAgIHsgdGVhbTogXCJPR1wiLCBkYXRhQXR0cjogXCJPR1wiIH0sXG4gICAgICAgIHsgdGVhbTogXCJCZXN0aWFcIiwgZGF0YUF0dHI6IFwiYmVzdGlhXCIgfSxcbiAgICAgICAgeyB0ZWFtOiBcIlR5bG9vXCIsIGRhdGFBdHRyOiBcInR5bG9vXCIgfVxuICAgIF07XG5cbiAgICBsZXQgYmlnTG9zZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdMb3NlXCIpXG4gICAgbGV0IGJpZ1dpbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdXaW5cIilcblxuICAgIGxldCB0ZWFtc1dpbiA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRlYW1zV2luXCIpKSA/PyBbXVxuXG4gICAgY29uc3Qgc3RhZ2VzUmVzdWx0ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBkZWZhdXRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlYW1zQmV0OltcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiQ29tcGxleGl0eVwiLCBkYXRhQXR0cjogXCJjb21wbGV4aXR5XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiRmFsY29uc1wiLCBkYXRhQXR0cjogXCJmYWxjb25zXCIsIG91dGNvbWU6IHRydWV9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJWaXRhbGl0eVwiLCBkYXRhQXR0cjogXCJ2aXRhbGl0eVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkhlcm9pY1wiLCBkYXRhQXR0cjogXCJoZXJvaWNcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJGYXplXCIsIGRhdGFBdHRyOiBcImZhemVcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJTcGlyaXRcIiwgZGF0YUF0dHI6IFwic3Bpcml0XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiQjhcIiwgZGF0YUF0dHI6IFwiQjhcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJpZ1dpbjogeyB0ZWFtOiBcIlBhaU5cIiwgZGF0YUF0dHI6IFwiUGFpTlwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICBiaWdMb3NlOiB7IHRlYW06IFwiTlJHXCIsIGRhdGFBdHRyOiBcIk5SR1wiLCBvdXRjb21lOiB0cnVlIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGVmYXV0VmFsdWU6IHRydWUsXG4gICAgICAgICAgICB0ZWFtc0JldDpbXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkNvbXBsZXhpdHlcIiwgZGF0YUF0dHI6IFwiY29tcGxleGl0eVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkZhbGNvbnNcIiwgZGF0YUF0dHI6IFwiZmFsY29uc1wiLCBvdXRjb21lOiB0cnVlfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiVml0YWxpdHlcIiwgZGF0YUF0dHI6IFwidml0YWxpdHlcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJIZXJvaWNcIiwgZGF0YUF0dHI6IFwiaGVyb2ljXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiRmF6ZVwiLCBkYXRhQXR0cjogXCJmYXplXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiU3Bpcml0XCIsIGRhdGFBdHRyOiBcInNwaXJpdFwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkI4XCIsIGRhdGFBdHRyOiBcIkI4XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBiaWdXaW46IHsgdGVhbTogXCJGYWxjb25zXCIsIGRhdGFBdHRyOiBcImZhbGNvbnNcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgYmlnTG9zZTogeyB0ZWFtOiBcIk5SR1wiLCBkYXRhQXR0cjogXCJOUkdcIiwgb3V0Y29tZTogdHJ1ZSB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRlZmF1dFZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgdGVhbXNCZXQ6W1xuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJDb21wbGV4aXR5XCIsIGRhdGFBdHRyOiBcImNvbXBsZXhpdHlcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJGYWxjb25zXCIsIGRhdGFBdHRyOiBcImZhbGNvbnNcIiwgb3V0Y29tZTogdHJ1ZX0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIlZpdGFsaXR5XCIsIGRhdGFBdHRyOiBcInZpdGFsaXR5XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiSGVyb2ljXCIsIGRhdGFBdHRyOiBcImhlcm9pY1wiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkZhemVcIiwgZGF0YUF0dHI6IFwiZmF6ZVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIlNwaXJpdFwiLCBkYXRhQXR0cjogXCJzcGlyaXRcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJCOFwiLCBkYXRhQXR0cjogXCJCOFwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYmlnV2luOiB7IHRlYW06IFwiUGFpTlwiLCBkYXRhQXR0cjogXCJQYWlOXCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgIGJpZ0xvc2U6IHsgdGVhbTogXCJOUkdcIiwgZGF0YUF0dHI6IFwiTlJHXCIsIG91dGNvbWU6IHRydWUgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkZWZhdXRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgIHRlYW1zQmV0OltcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiQ29tcGxleGl0eVwiLCBkYXRhQXR0cjogXCJjb21wbGV4aXR5XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiRmFsY29uc1wiLCBkYXRhQXR0cjogXCJmYWxjb25zXCIsIG91dGNvbWU6IHRydWV9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJWaXRhbGl0eVwiLCBkYXRhQXR0cjogXCJ2aXRhbGl0eVwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgeyB0ZWFtOiBcIkhlcm9pY1wiLCBkYXRhQXR0cjogXCJoZXJvaWNcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJGYXplXCIsIGRhdGFBdHRyOiBcImZhemVcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHsgdGVhbTogXCJTcGlyaXRcIiwgZGF0YUF0dHI6IFwic3Bpcml0XCIsIG91dGNvbWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICB7IHRlYW06IFwiQjhcIiwgZGF0YUF0dHI6IFwiQjhcIiwgb3V0Y29tZTogdHJ1ZSB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJpZ1dpbjogeyB0ZWFtOiBcIlBhaU5cIiwgZGF0YUF0dHI6IFwiUGFpTlwiLCBvdXRjb21lOiB0cnVlIH0sXG4gICAgICAgICAgICBiaWdMb3NlOiB7IHRlYW06IFwiTlJHXCIsIGRhdGFBdHRyOiBcIk5SR1wiLCBvdXRjb21lOiB0cnVlIH1cbiAgICAgICAgfVxuXG4gICAgXVxuXG4gICAgbGV0IHF1b3RlckZpbmFsc0RhdGEgPSBbLi4uc3RhZ2VzUmVzdWx0WzJdLnRlYW1zQmV0LCBzdGFnZXNSZXN1bHRbMl0uYmlnV2luIF1cblxuICAgIGxldCBsb2FkZXJCdG4gPSBmYWxzZVxuXG4gICAgbGV0IGxvY2FsZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikgPz8gXCJlblwiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSB0cnVlXG5cbiAgICBsZXQgb3RoZXJzQXJyYXkgPSBbXVxuICAgIGxldCBpbmRleENhcmQgPSBmYWxzZVxuXG4gICAgLy8gaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICBsZXQgdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpKSA/PyA3Nzc3Nzc3OTtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICAvLyByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAvLyBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJUZWFtQmxvY2tzKHBvcHVwQXR0ciwgdGVhbXMpIHtcbiAgICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3B1cD1cIiR7cG9wdXBBdHRyfVwiXWApO1xuICAgICAgICBjb25zb2xlLmxvZyhwb3B1cClcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gcG9wdXAucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX3BvcHVwLXNjcm9sbCcpO1xuXG4gICAgICAgIGlmICghY29udGFpbmVyKSByZXR1cm47XG5cbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICAgIHRlYW1zLmZvckVhY2goKHsgZGF0YUF0dHIgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVhbUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0ZWFtQmxvY2suY2xhc3NOYW1lID0gJ3BsYXlvZmZfX2Nob29zZS10ZWFtIF9vcGVuJzsgLy8g0LzQvtC20LXRiCDQtNC40L3QsNC80ZbRh9C90L4g0LfQvNGW0L3RjtCy0LDRgtC4INC90LAgX3NlbGVjdGVkXG5cbiAgICAgICAgICAgIHRlYW1CbG9jay5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxheW9mZl9fY2hvb3NlLXRlYW0taWNvblwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXlvZmZfX2Nob29zZS10ZWFtLXRleHRcIiBkYXRhLXRyYW5zbGF0ZT1cIiR7ZGF0YUF0dHJ9XCIgZGF0YS10ZWFtPVwiJHtkYXRhQXR0cn1cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXlvZmZfX2Nob29zZS10ZWFtLWJ0blwiPjwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGVhbUJsb2NrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRyYW5zbGF0ZSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VuZFByZWRpY3QoKXtcbiAgICAgICAgaWYoY3VycmVudFN0YWdlIDw9IDIpe1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJUZWFtcyA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRlYW1zV2luXCIpKTtcbiAgICAgICAgICAgIGNvbnN0IGJpZ1dpbiA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ1dpblwiKSk7XG4gICAgICAgICAgICBjb25zdCBiaWdMb3NlID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnTG9zZVwiKSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG90aGVyVGVhbXMsIGJpZ1dpbiwgYmlnTG9zZSk7XG5cblxuICAgICAgICAgICAgY29uc3QgcHJlZGljdEJvZHkgPSB7XG4gICAgICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICAgICAgYmV0OiB7XG4gICAgICAgICAgICAgICAgICAgIHRlYW1zQmV0OiBbLi4ub3RoZXJUZWFtc10sXG4gICAgICAgICAgICAgICAgICAgIGJpZ1dpbm5lcjogey4uLmJpZ1dpbn0sXG4gICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VyOiB7Li4uYmlnTG9zZX0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXF1ZXN0KGAvYmV0L3N0YWdlLyR7Y3VycmVudFN0YWdlICsgMX1gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJlZGljdEJvZHkpLFxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UHJlZGljdCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByZWRpY3RCb2R5KVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50UHJlZGljdCgpIHtcbiAgICAgICAgZ2V0VXNlclByZWRpY3QoKS50aGVuKHByZWRpY3QgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhZ2VCZXQgPSBwcmVkaWN0Py5bYHN0YWdlJHtjdXJyZW50U3RhZ2UgKyAxfUJldGBdO1xuXG4gICAgICAgICAgICBpZiAoIXN0YWdlQmV0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBObyBiZXRzIGZvciBzdGFnZSAke2N1cnJlbnRTdGFnZSArIDF9YCk7XG4gICAgICAgICAgICAgICAgcHJlZGljdG9yQ2hlY2tJbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzdGFnZU90aGVycyA9IHN0YWdlQWN0aXZlLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX3dyYXBcIiksXG4gICAgICAgICAgICAgICAgc3RhZ2VPdGhlckNhcmRzID0gc3RhZ2VPdGhlcnMucXVlcnlTZWxlY3RvckFsbChcIi5zdGFnZV9fY2FyZFwiKSxcbiAgICAgICAgICAgICAgICBzdGFnZVdpbkNhcmQgPSBzdGFnZUFjdGl2ZS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1iaWctc3RhZ2U9XCJiaWdXaW5cIl1gKSxcbiAgICAgICAgICAgICAgICBzdGFnZVdpbkNhcmRUZWFtID0gc3RhZ2VXaW5DYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX2NhcmQtdGV4dFwiKSxcbiAgICAgICAgICAgICAgICBzdGFnZUxvc2VDYXJkID0gc3RhZ2VBY3RpdmUucXVlcnlTZWxlY3RvcihgW2RhdGEtYmlnLXN0YWdlPVwiYmlnTG9zZVwiXWApLFxuICAgICAgICAgICAgICAgIHN0YWdlTG9zZUNhcmRUZWFtID0gc3RhZ2VMb3NlQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19jYXJkLXRleHRcIiksXG4gICAgICAgICAgICAgICAgcHJlZGljdE90aGVyVGVhbXMgPSBzdGFnZUJldC50ZWFtc0JldCxcbiAgICAgICAgICAgICAgICBwcmVkaWN0V2lubmVyID0gc3RhZ2VCZXQuYmlnV2lubmVyLFxuICAgICAgICAgICAgICAgIHByZWRpY3RMb3NlciA9IHN0YWdlQmV0LmJpZ0xvc2VyO1xuXG4gICAgICAgICAgICBwcmVkaWN0b3JDaGVja0luLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInRlYW1zV2luXCIsIEpTT04uc3RyaW5naWZ5KHByZWRpY3RPdGhlclRlYW1zKSk7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmlnV2luXCIsIEpTT04uc3RyaW5naWZ5KHByZWRpY3RXaW5uZXIpKTtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdMb3NlXCIsIEpTT04uc3RyaW5naWZ5KHByZWRpY3RMb3NlcikpO1xuICAgICAgICAgICAgdGVhbXNXaW4gPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0ZWFtc1dpblwiKSk7XG4gICAgICAgICAgICBiaWdXaW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnV2luXCIpO1xuICAgICAgICAgICAgYmlnTG9zZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdMb3NlXCIpO1xuXG5cbiAgICAgICAgICAgIHN0YWdlV2luQ2FyZC5jbGFzc0xpc3QuYWRkKFwiX3NlbGVjdGVkXCIpO1xuICAgICAgICAgICAgc3RhZ2VXaW5DYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfb3BlblwiKTtcbiAgICAgICAgICAgIHN0YWdlTG9zZUNhcmQuY2xhc3NMaXN0LmFkZChcIl9zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIHN0YWdlTG9zZUNhcmQuY2xhc3NMaXN0LnJlbW92ZShcIl9vcGVuXCIpO1xuXG4gICAgICAgICAgICBzdGFnZVdpbkNhcmRUZWFtLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KHByZWRpY3RXaW5uZXIuZGF0YUF0dHIpO1xuICAgICAgICAgICAgc3RhZ2VMb3NlQ2FyZFRlYW0udGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkocHJlZGljdExvc2VyLmRhdGFBdHRyKTtcblxuICAgICAgICAgICAgc3RhZ2VPdGhlckNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkVGVhbU5hbWUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX2NhcmQtdGV4dFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZWFtID0gdGVhbXNXaW5baV07XG4gICAgICAgICAgICAgICAgLy8gaWYgKCF0ZWFtKSByZXR1cm47IC8vINGP0LrRidC+INGA0LDQv9GC0L7QvCDQvNC10L3RiNC1INC60L7QvNCw0L3QtCDRgyDRgdGC0LDQstGG0ZZcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhQXR0ciA9IHRlYW0uZGF0YUF0dHI7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhQXR0cik7XG5cblxuXG4gICAgICAgICAgICAgICAgY2FyZFRlYW1OYW1lLnNldEF0dHJpYnV0ZShcImRhdGEtdGVhbVwiLCBkYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgY2FyZFRlYW1OYW1lLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KGRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfb3BlblwiKTtcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGVhbSlcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjYXJkKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGVkIHVzZXIgcHJlZGljdGlvbjpcIiwgc3RhZ2VCZXQpO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIHVzZXIgcHJlZGljdGlvblwiLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXh0cmFjdFBsYXlvZmZTZWxlY3Rpb25zKHF1YXJ0ZXJGaW5hbHMsIHNlbWlGaW5hbHMsIGZpbmFscywgd2lubmVyKSB7XG4gICAgICAgIGNvbnN0IHF1YXJ0ZXJGaW5hbHNDYXJkcyA9IHF1YXJ0ZXJGaW5hbHMucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5b2ZmX19jaG9vc2UtdGVhbVwiKTtcbiAgICAgICAgY29uc3Qgc2VtaUZpbmFsc0NhcmRzID0gc2VtaUZpbmFscy5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtXCIpO1xuICAgICAgICBjb25zdCBGaW5hbHNDYXJkcyA9IGZpbmFscy5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtXCIpO1xuICAgICAgICBjb25zdCB3aW5uZXJDYXJkcyA9IHdpbm5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtXCIpO1xuXG4gICAgICAgIGNvbnN0IHNlbWlGaW5hbENob29zZSA9IFtcbiAgICAgICAgICAgIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInNlbWlGaW5hbHMxXCIpIHx8IFwie31cIiksXG4gICAgICAgICAgICBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJzZW1pRmluYWxzMlwiKSB8fCBcInt9XCIpLFxuICAgICAgICAgICAgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwic2VtaUZpbmFsczNcIikgfHwgXCJ7fVwiKSxcbiAgICAgICAgICAgIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInNlbWlGaW5hbHM0XCIpIHx8IFwie31cIilcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBmaW5hbENob29zZSA9IFtcbiAgICAgICAgICAgIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImZpbmFsczFcIikgfHwgXCJ7fVwiKSxcbiAgICAgICAgICAgIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImZpbmFsczJcIikgfHwgXCJ7fVwiKVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IHdpbm5lckNob29zZSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcIndpbm5lclwiKSB8fCBcInt9XCIpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBxdWFydGVyRmluYWxzQ2FyZHMsXG4gICAgICAgICAgICBzZW1pRmluYWxzQ2FyZHMsXG4gICAgICAgICAgICBGaW5hbHNDYXJkcyxcbiAgICAgICAgICAgIHdpbm5lckNhcmRzLFxuICAgICAgICAgICAgc2VtaUZpbmFsQ2hvb3NlLFxuICAgICAgICAgICAgZmluYWxDaG9vc2UsXG4gICAgICAgICAgICB3aW5uZXJDaG9vc2VcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHNldFBsYXlvZmYocXVhcnRlckZpbmFscywgc2VtaUZpbmFscywgZmluYWxzLCB3aW5uZXIpe1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgcXVhcnRlckZpbmFsc0NhcmRzLFxuICAgICAgICAgICAgc2VtaUZpbmFsc0NhcmRzLFxuICAgICAgICAgICAgRmluYWxzQ2FyZHMsXG4gICAgICAgICAgICB3aW5uZXJDYXJkcyxcbiAgICAgICAgICAgIHNlbWlGaW5hbENob29zZSxcbiAgICAgICAgICAgIGZpbmFsQ2hvb3NlLFxuICAgICAgICAgICAgd2lubmVyQ2hvb3NlXG4gICAgICAgIH0gPSBleHRyYWN0UGxheW9mZlNlbGVjdGlvbnMocXVhcnRlckZpbmFscywgc2VtaUZpbmFscywgZmluYWxzLCB3aW5uZXIpO1xuXG4gICAgICAgIHNlbWlGaW5hbENob29zZSA9IFtcbiAgICAgICAgICAgIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInNlbWlGaW5hbHMxXCIpIHx8IFwie31cIiksXG4gICAgICAgICAgICBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJzZW1pRmluYWxzMlwiKSB8fCBcInt9XCIpLFxuICAgICAgICAgICAgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwic2VtaUZpbmFsczNcIikgfHwgXCJ7fVwiKSxcbiAgICAgICAgICAgIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInNlbWlGaW5hbHM0XCIpIHx8IFwie31cIilcbiAgICAgICAgXTtcblxuICAgICAgICBmaW5hbENob29zZSA9IFtcbiAgICAgICAgICAgIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImZpbmFsczFcIikgfHwgXCJ7fVwiKSxcbiAgICAgICAgICAgIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImZpbmFsczJcIikgfHwgXCJ7fVwiKSxcbiAgICAgICAgXTtcblxuICAgICAgICB3aW5uZXJDaG9vc2UgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ3aW5uZXJcIikgfHwgXCJ7fVwiKTtcblxuXG5cblxuXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbm5lckNob29zZSk7XG5cbiAgICAgICAgcXVhcnRlckZpbmFsc0NhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdGVhbUNhcmROYW1lID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtLXRleHRcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IHRlYW0gPSBxdW90ZXJGaW5hbHNEYXRhW2ldO1xuXG4gICAgICAgICAgICB0ZWFtQ2FyZE5hbWUuc2V0QXR0cmlidXRlKFwiZGF0YS10ZWFtXCIsIHRlYW0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRlYW1cIiwgdGVhbS5kYXRhQXR0cik7XG4gICAgICAgICAgICB0ZWFtQ2FyZE5hbWUudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkodGVhbS5kYXRhQXR0cik7XG5cbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcIl9kb25lXCIpO1xuXG5cbiAgICAgICAgfSlcblxuICAgICAgICBzZW1pRmluYWxzQ2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT4ge1xuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiX2RvbmVcIiwgXCJfc2VsZWN0ZWRcIik7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJfb3BlblwiKTtcbiAgICAgICAgfSlcblxuICAgICAgICB3aW5uZXJDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJfc2VsZWN0ZWRcIik7XG4gICAgICAgIHdpbm5lckNhcmQuY2xhc3NMaXN0LmFkZChcIl9vcGVuXCIpO1xuXG4gICAgfVxuXG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJQcmVkaWN0KCkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KCcvc3RhZ2UnKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmZpbmQoaXRlbSA9PiBpdGVtLnVzZXJpZCA9PT0gdXNlcklkKSk7XG4gICAgICAgIHJldHVybiByZXMuZmluZChpdGVtID0+IGl0ZW0udXNlcmlkID09PSB1c2VySWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRUaW1lID0gMjAwO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd0VsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICBjb25zdCBoaWRlRWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcblxuICAgICAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICBzaG93RWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoaWRlRWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgIH0sIGxvYWRUaW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vlaykge1xuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfWApXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VycyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCB1c2VySWQsIHdlZWspO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrKSB7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTMgOiAxMDtcbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCB0b3BVc2Vyc0xlbmd0aCk7XG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyRGF0YS5wb2ludHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRLZXkgPSBkZWJ1ZyA/IGtleSA6IGAqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qIGtleTogJHtrZXl9YFxuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICBuZWVkS2V5IHx8IGtleTtcbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTdGF0ZVBpY2tTdGFnZShzdGFnZSl7XG4gICAgICAgIGNvbnN0IHN0YWdlQ2FyZHNXcmFwID0gc3RhZ2UucXVlcnlTZWxlY3RvcignW2RhdGEtY2FyZHMtd3JhcD1cInN0YWdlXCJdJylcbiAgICAgICAgaWYoIXN0YWdlQ2FyZHNXcmFwKSByZXR1cm5cbiAgICAgICAgY29uc3Qgc3RhZ2VDYXJkcyA9IHN0YWdlQ2FyZHNXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFnZV9fY2FyZCcpO1xuICAgICAgICBjb25zdCBzdGFnZUNhcmRXaW4gPSBzdGFnZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1iaWctc3RhZ2U9XCJiaWdXaW5cIl0nKTtcbiAgICAgICAgY29uc3Qgc3RhZ2VDYXJkTG9zZSA9IHN0YWdlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJpZy1zdGFnZT1cImJpZ0xvc2VcIl0nKTtcbiAgICAgICAgY29uc3Qgc3RhZ2VDYXJkV2luTmFtZSA9IHN0YWdlQ2FyZFdpbi5xdWVyeVNlbGVjdG9yKCcuc3RhZ2VfX2NhcmQtdGV4dCcpO1xuICAgICAgICBjb25zdCBzdGFnZUNhcmRMb3NlTmFtZSA9IHN0YWdlQ2FyZExvc2UucXVlcnlTZWxlY3RvcignLnN0YWdlX19jYXJkLXRleHQnKTtcblxuICAgICAgICBjb25zdCBzdGFnZU51bSA9IE51bWJlcihzdGFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhZ2UnKSk7XG4gICAgICAgIGxldCBzdGFnZVN0YXRlID0gc3RhZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXBpY2stc3RhZ2UnKTtcbiAgICAgICAgY29uc3Qgc3RhZ2VSZXN1bHREYXRhID0gc3RhZ2VzUmVzdWx0W3N0YWdlTnVtIC0xXVxuXG4gICAgICAgIGxldCBvdGhlcnNUZWFtcyA9IHN0YWdlUmVzdWx0RGF0YS50ZWFtc0JldFxuICAgICAgICBsZXQgYmlnV2luVGVhbSA9IHN0YWdlUmVzdWx0RGF0YS5iaWdXaW5cbiAgICAgICAgbGV0IGJpZ0xvc2VUZWFtID0gc3RhZ2VSZXN1bHREYXRhLmJpZ0xvc2VcblxuICAgICAgICBzdGFnZUNhcmRXaW4uY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nLCAnX3NlbGVjdGVkJywgJ19sb3NlJywgJ193aW4nKTtcbiAgICAgICAgc3RhZ2VDYXJkTG9zZS5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicsICdfc2VsZWN0ZWQnLCAnX2xvc2UnLCAnX3dpbicpO1xuXG4gICAgICAgIGlmKHN0YWdlU3RhdGUgPT09IFwiZG9uZVwiKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YWdlQ2FyZHMpXG4gICAgICAgICAgICBzdGFnZUNhcmRzLmZvckVhY2goKGNhcmQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTmFtZSA9IGNhcmQucXVlcnlTZWxlY3RvcignLnN0YWdlX19jYXJkLXRleHQnKTtcbiAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJywgJ19zZWxlY3RlZCcsICdfbG9zZScsICdfd2luJywgXCJfZG9uZVwiKTtcbiAgICAgICAgICAgICAgICBpZihzdGFnZVJlc3VsdERhdGEuZGVmYXV0VmFsdWUpIGNhcmQuY2xhc3NMaXN0LmFkZCgnX2RvbmUnKTtcblxuICAgICAgICAgICAgICAgIHRlYW1OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJywgb3RoZXJzVGVhbXNbaV0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgIHRlYW1OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBvdGhlcnNUZWFtc1tpXS5kYXRhQXR0cik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0YWdlQ2FyZFdpbk5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nLCBiaWdXaW5UZWFtLmRhdGFBdHRyKTtcbiAgICAgICAgICAgIHN0YWdlQ2FyZFdpbk5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGJpZ1dpblRlYW0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgc3RhZ2VDYXJkTG9zZU5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nLCBiaWdMb3NlVGVhbS5kYXRhQXR0cik7XG4gICAgICAgICAgICBzdGFnZUNhcmRMb3NlTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYmlnTG9zZVRlYW0uZGF0YUF0dHIpO1xuXG5cbiAgICAgICAgICAgIGlmKHN0YWdlUmVzdWx0RGF0YS5kZWZhdXRWYWx1ZSl7XG4gICAgICAgICAgICAgICAgc3RhZ2VDYXJkV2luLmNsYXNzTGlzdC5hZGQoJ19kb25lJyk7XG4gICAgICAgICAgICAgICAgc3RhZ2VDYXJkTG9zZS5jbGFzc0xpc3QuYWRkKCdfZG9uZScpO1xuICAgICAgICAgICAgICAgIHN0YWdlQ2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT57XG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcIl9kb25lXCIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHN0YWdlQ2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gb3RoZXJzVGVhbXNbaV1cbiAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudERhdGEub3V0Y29tZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ193aW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ19sb3NlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGlmKGJpZ1dpblRlYW0ub3V0Y29tZSl7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlQ2FyZFdpbi5jbGFzc0xpc3QuYWRkKCdfd2luJyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YWdlQ2FyZFdpbilcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VDYXJkV2luLmNsYXNzTGlzdC5hZGQoJ19sb3NlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGJpZ0xvc2VUZWFtLm91dGNvbWUpe1xuICAgICAgICAgICAgICAgICAgICBzdGFnZUNhcmRMb3NlLmNsYXNzTGlzdC5hZGQoJ193aW4nKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VDYXJkTG9zZS5jbGFzc0xpc3QuYWRkKCdfbG9zZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgfVxuICAgICAgICBpZihzdGFnZVN0YXRlID09PSBcImFjdGl2ZVwiKXtcbiAgICAgICAgICAgIHN0YWdlQ2FyZHMuZm9yRWFjaCgoY2FyZCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1OYW1lID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuc3RhZ2VfX2NhcmQtdGV4dCcpO1xuICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nLCAnX3NlbGVjdGVkJywgJ19sb3NlJywgJ193aW4nLCBcIl9kb25lXCIpO1xuICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnX29wZW4nKTtcblxuICAgICAgICAgICAgICAgIHRlYW1OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBcInBvcHVwTG9zZVRpdGxlXCIgKTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHN0YWdlQ2FyZFdpbi5jbGFzc0xpc3QuYWRkKFwiX29wZW5cIilcbiAgICAgICAgICAgIHN0YWdlQ2FyZExvc2UuY2xhc3NMaXN0LmFkZChcIl9vcGVuXCIpXG5cbiAgICAgICAgICAgIHN0YWdlQ2FyZFdpbk5hbWUuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIFwicG9wdXBMb3NlVGl0bGVcIik7XG4gICAgICAgICAgICBzdGFnZUNhcmRMb3NlTmFtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgXCJwb3B1cExvc2VUaXRsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB0cmFuc2xhdGUoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW5Qb3B1cChkYXRhQXR0ciwgY29udGFpbmVyKXtcbiAgICAgICAgY29uc3QgY3VycmVudFBvcHVwID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwPVwiJHtkYXRhQXR0cn1cIl1gKTtcblxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1vcGFjaXR5Jyk7XG5cbiAgICAgICAgY3VycmVudFBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZVBvcHVwKGNvbnRhaW5lcil7XG4gICAgICAgIGNvbnN0IHBvcHVwcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fcG9wdXAnKTtcbiAgICAgICAgY29uc3QgYWxsUG9wdXBzVGVhbVRhYnMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5b2ZmX19jaG9vc2UtdGVhbVwiKTtcblxuICAgICAgICBhbGxQb3B1cHNUZWFtVGFicy5mb3JFYWNoKCh0ZWFtKSA9PiB7XG4gICAgICAgICAgICB0ZWFtLmNsYXNzTGlzdC5yZW1vdmUoJ19zZWxlY3RlZCcpO1xuICAgICAgICAgICAgdGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICAgICAgdGVhbS5jbGFzc0xpc3QuYWRkKCdfb3BlbicpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHBvcHVwcy5mb3JFYWNoKHBvcHVwID0+IHtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktb3BhY2l0eScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG5cbiAgICAgICAgY29uc29sZS5sb2codGVhbXNXaW4pXG5cbiAgICAgICAgaWYodGVhbXNXaW4gJiYgdGVhbXNXaW4ubGVuZ3RoID09PSA2ICYmIGJpZ0xvc2UgJiYgYmlnV2luKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJlZGljdFwiKVxuICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LnJlbW92ZShcIl9sb2NrXCIpXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UsIHdlZWspIHtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDMpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0ke3BsYWNlfWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTQtMTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMS0yNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTI2LTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tNTEtNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNzYtMTAwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEwMS0xMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTI2LTE1MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNTEtMTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDIwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE3Ni0yMDBgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4dHJhY3RUZWFtRGF0YShwYWlyRWxlbWVudCwgdGVhbVNlbGVjdG9yLCBncm91cEF0dHIpIHtcbiAgICAgICAgY29uc3QgdGVhbXMgPSBwYWlyRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRlYW1TZWxlY3Rvcik7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRlYW1zKS5tYXAodGVhbSA9PiAoe1xuICAgICAgICAgICAgZGF0YUF0dHI6IHRlYW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nKSxcbiAgICAgICAgICAgIHBhaXJOdW06IE51bWJlcih0ZWFtLmNsb3Nlc3QoYFske2dyb3VwQXR0cn1dYCk/LmdldEF0dHJpYnV0ZShncm91cEF0dHIpKVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVGVhbXNGcm9tUGFpcihwYWlycywgdGVhbXNBcnJheSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gWy4uLnRlYW1zQXJyYXldO1xuICAgICAgICBwYWlycy5mb3JFYWNoKHBhaXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXh0cmFjdGVkID0gZXh0cmFjdFRlYW1EYXRhKHBhaXIsICcucGxheW9mZl9fY2hvb3NlLXRlYW1bZGF0YS10ZWFtXScsICdkYXRhLWNob29zZS1zZW1pZmluYWwnKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IFsuLi5yZXN1bHQsIC4uLmV4dHJhY3RlZF07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclBsYXlvZmZQb3B1cChwb3B1cEVsZW1lbnQsIHRlYW1zUGxheW9mZiwgZGF0YU5hbWUsIHRlbXBvcmFyeURhdGFOYW1lKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IHBvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fcG9wdXAtc2Nyb2xsJyk7XG4gICAgICAgIGlmICghc2Nyb2xsQ29udGFpbmVyKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgc2F2ZWREYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGRhdGFOYW1lKSkgfHwgbnVsbDtcblxuICAgICAgICBpZiAoIXNhdmVkRGF0YSkge1xuICAgICAgICAgICAgcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fcG9wdXAtYnRuXCIpLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGxDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgdGVhbXNQbGF5b2ZmLmZvckVhY2godGVhbSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZWFtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0ZWFtRGl2LmNsYXNzTmFtZSA9ICdwbGF5b2ZmX19jaG9vc2UtdGVhbSBfb3Blbic7XG4gICAgICAgICAgICB0ZWFtRGl2LmRhdGFzZXQudGVhbSA9IHRlYW0uZGF0YUF0dHI7XG5cbiAgICAgICAgICAgIGNvbnN0IGljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGljb25EaXYuY2xhc3NOYW1lID0gJ3BsYXlvZmZfX2Nob29zZS10ZWFtLWljb24nO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0ZXh0RGl2LmNsYXNzTmFtZSA9ICdwbGF5b2ZmX19jaG9vc2UtdGVhbS10ZXh0JztcbiAgICAgICAgICAgIHRleHREaXYuZGF0YXNldC50ZWFtID0gdGVhbS5kYXRhQXR0cjtcbiAgICAgICAgICAgIHRleHREaXYudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkodGVhbS5kYXRhQXR0cik7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYnRuRGl2LmNsYXNzTmFtZSA9ICdwbGF5b2ZmX19jaG9vc2UtdGVhbS1idG4nO1xuXG4gICAgICAgICAgICB0ZWFtRGl2LmFwcGVuZChpY29uRGl2LCB0ZXh0RGl2LCBidG5EaXYpO1xuICAgICAgICAgICAgc2Nyb2xsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlYW1EaXYpO1xuXG4gICAgICAgICAgICBpZiAoc2F2ZWREYXRhICYmIHNhdmVkRGF0YS5kYXRhQXR0ciA9PT0gdGVhbS5kYXRhQXR0cikge1xuICAgICAgICAgICAgICAgIHRlYW1EaXYuY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgdGVhbURpdi5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB0ZWFtVGFicyA9IHNjcm9sbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcucGxheW9mZl9fY2hvb3NlLXRlYW0nKTtcblxuICAgICAgICB0ZWFtVGFicy5mb3JFYWNoKCh0ZWFtVGFiLCBpKSA9PiB7XG4gICAgICAgICAgICB0ZWFtVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1OYW1lID0gdGVhbVRhYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVGVhbSA9IHRlYW1zUGxheW9mZi5maW5kKHRlYW0gPT4gdGVhbS5kYXRhQXR0ci50b0xvd2VyQ2FzZSgpID09PSB0ZWFtTmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICBwb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmX19wb3B1cC1idG5cIikuY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRlbXBvcmFyeURhdGFOYW1lLCBKU09OLnN0cmluZ2lmeShzZWxlY3RlZFRlYW0pKTtcblxuICAgICAgICAgICAgICAgIHRlYW1UYWJzLmZvckVhY2goKGl0ZW0sIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdfc2VsZWN0ZWQnLCBpID09PSBqKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdfb3BlbicsIGkgIT09IGopO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIHJlcXVlc3QoJy9zdGFnZScpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJTdGFnZXMgPSByZXMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSB1c2VySWQpXG5cbiAgICAgICAgICAgICAgICBpZih1c2VyU3RhZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlc1Jlc3VsdC5mb3JFYWNoKChzdGFnZSwgaSkgPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih1c2VyU3RhZ2VzW2BzdGFnZSR7aSArIDF9QmV0YF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlc1Jlc3VsdFtpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbXNCZXQ6IFsuLi51c2VyU3RhZ2VzW2BzdGFnZSR7aSArIDF9QmV0YF0udGVhbXNCZXRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW46IHVzZXJTdGFnZXNbYHN0YWdlJHtpICsgMX1CZXRgXS5iaWdXaW5uZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2U6IHVzZXJTdGFnZXNbYHN0YWdlJHtpICsgMX1CZXRgXS5iaWdMb3NlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBxdW90ZXJGaW5hbHNEYXRhID0gWy4uLnN0YWdlc1Jlc3VsdFsyXS50ZWFtc0JldCwgc3RhZ2VzUmVzdWx0WzJdLmJpZ1dpbiBdO1xuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFN0YWdlID09PSAzKXtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhxdWFydGVyRmluYWxzKVxuXG4gICAgICAgICAgICAgICAgICAgIHNldFBsYXlvZmYocXVhcnRlckZpbmFscywgc2VtaUZpbmFscywgZmluYWxzLCB3aW5uZXIpXG5cbiAgICAgICAgICAgICAgICAgICAgc2VtaUZpbmFsc1RlYW1zID0gWy4uLmFkZFRlYW1zRnJvbVBhaXIocXVhcnRlckZpbmFsc1BhaXJzLCBbXSldO1xuICAgICAgICAgICAgICAgICAgICBmaW5hbHNUZWFtcyA9IFsuLi5hZGRUZWFtc0Zyb21QYWlyKHNlbWlGaW5hbHNQYWlycywgW10pXTtcbiAgICAgICAgICAgICAgICAgICAgd2lubmVycyA9IFsuLi5hZGRUZWFtc0Zyb21QYWlyKHdpbm5lclBhaXJzLCBbXSldO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgc2VtaUZpbmFsc1BhaXJzQnRucy5mb3JFYWNoKChidG4sIGkpID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlybVByZWRpY3RCdG4gPSBwbGF5b2ZmU2VtaUZpbmFsUG9wdXAucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmX19wb3B1cC1idG5cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuVGVhbU5hbWUgPSBidG4ucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX2Nob29zZS10ZWFtLXRleHQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBvcmFyeURhdGEgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGBzZW1pRmluYWxzVGVtcG9yYXJ5JHtpICsgMX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYHNlbWlGaW5hbHMke2kgKyAxfWAsIHRlbXBvcmFyeURhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnRuQ3VycmVudERhdGEgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYHNlbWlGaW5hbHMke2kgKyAxfWApKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYnRuQ3VycmVudERhdGEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS10ZWFtXCIsIGJ0bkN1cnJlbnREYXRhLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5UZWFtTmFtZS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShidG5DdXJyZW50RGF0YS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKHBvcHVwc1dyYXApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW1pRmluYWxzVGVhbXMgPSBbLi4uYWRkVGVhbXNGcm9tUGFpcihxdWFydGVyRmluYWxzUGFpcnMsIFtdKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnRuUGFpck51bWJlciA9IE51bWJlcihidG4uZ2V0QXR0cmlidXRlKFwiZGF0YS1jaG9vc2Utc2VtaWZpbmFsXCIpKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJlZGljdFBhaXJEYXRhID0gW11cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbWlGaW5hbHNUZWFtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW1pRmluYWxzVGVhbXMuZm9yRWFjaCh0ZWFtID0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0ZWFtLnBhaXJOdW0gPT09IGJ0blBhaXJOdW1iZXIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljdFBhaXJEYXRhLnB1c2godGVhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbWlGaW5hbHNUZWFtcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJQbGF5b2ZmUG9wdXAocGxheW9mZlNlbWlGaW5hbFBvcHVwLCBwcmVkaWN0UGFpckRhdGEsYHNlbWlGaW5hbHMke2kgKyAxfWAsIGBzZW1pRmluYWxzVGVtcG9yYXJ5JHtpICsgMX1gKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwKFwicGxheW9mZlNlbWlGaW5hbFwiLCBwb3B1cHNXcmFwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QcmVkaWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wb3JhcnlEYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgc2VtaUZpbmFsc1RlbXBvcmFyeSR7aSArIDF9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYHNlbWlGaW5hbHMke2kgKyAxfWAsIHRlbXBvcmFyeURhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkN1cnJlbnREYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGBzZW1pRmluYWxzJHtpICsgMX1gKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYnRuQ3VycmVudERhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJ0bkN1cnJlbnREYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRlYW1cIiwgYnRuQ3VycmVudERhdGEuZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuVGVhbU5hbWUudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkoYnRuQ3VycmVudERhdGEuZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbWlGaW5hbHNUZWFtcy5sZW5ndGggPCA0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QcmVkaWN0QnRuLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVByZWRpY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKHBvcHVwc1dyYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBmaW5hbHNQYWlyc0J0bnMuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtUHJlZGljdEJ0biA9IHBsYXlvZmZGaW5hbFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fcG9wdXAtYnRuXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0blRlYW1OYW1lID0gYnRuLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbS10ZXh0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wb3JhcnlEYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgZmluYWxzVGVtcG9yYXJ5JHtpICsgMX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYGZpbmFscyR7aSArIDF9YCwgdGVtcG9yYXJ5RGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidG5DdXJyZW50RGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgZmluYWxzJHtpICsgMX1gKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbWlGaW5hbENob29zZS5sZW5ndGggPCA0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtUHJlZGljdEJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVByZWRpY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG5DdXJyZW50RGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS10ZWFtXCIsIGJ0bkN1cnJlbnREYXRhLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5UZWFtTmFtZS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShidG5DdXJyZW50RGF0YS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAocG9wdXBzV3JhcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsc1RlYW1zID0gWy4uLmFkZFRlYW1zRnJvbVBhaXIoc2VtaUZpbmFsc1BhaXJzLCBbXSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ0blBhaXJOdW1iZXIgPSBOdW1iZXIoYnRuLmdldEF0dHJpYnV0ZShcImRhdGEtY2hvb3NlLWZpbmFsXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtUHJlZGljdEJ0biA9IHBsYXlvZmZGaW5hbFBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fcG9wdXAtYnRuXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsaWRQYWlyTnVtcyA9IGJ0blBhaXJOdW1iZXIgPT09IDEgPyBbMSwgMl0gOiBbMywgNF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVkaWN0UGFpckRhdGEgPSBmaW5hbHNUZWFtcy5maWx0ZXIodGVhbSA9PiB2YWxpZFBhaXJOdW1zLmluY2x1ZGVzKHRlYW0ucGFpck51bSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyUGxheW9mZlBvcHVwKHBsYXlvZmZGaW5hbFBvcHVwLCBwcmVkaWN0UGFpckRhdGEsIGBmaW5hbHMke2kgKyAxfWAsIGBmaW5hbHNUZW1wb3Jhcnkke2kgKyAxfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cChcInBsYXlvZmZGaW5hbFwiLCBwb3B1cHNXcmFwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1IYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wb3JhcnlEYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgZmluYWxzVGVtcG9yYXJ5JHtpICsgMX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShgZmluYWxzJHtpICsgMX1gLCB0ZW1wb3JhcnlEYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5DdXJyZW50RGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgZmluYWxzJHtpICsgMX1gKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ0bkN1cnJlbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS10ZWFtXCIsIGJ0bkN1cnJlbnREYXRhLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0blRlYW1OYW1lLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KGJ0bkN1cnJlbnREYXRhLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QcmVkaWN0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maXJtSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAocG9wdXBzV3JhcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QcmVkaWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maXJtSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2lubmVyQ2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lubmVycyA9IFsuLi5hZGRUZWFtc0Zyb21QYWlyKHdpbm5lclBhaXJzLCBbXSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlybVByZWRpY3RCdG4gPSBwbGF5b2ZmV2lubmVyUG9wdXAucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmX19wb3B1cC1idG5cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuVGVhbU5hbWUgPSB3aW5uZXJDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fY2FyZC10ZXh0XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJQbGF5b2ZmUG9wdXAocGxheW9mZldpbm5lclBvcHVwLCB3aW5uZXJzLCBgd2lubmVyYCwgYHdpbm5lclRlbXBvcmFyeWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlblBvcHVwKFwid2lubmVyXCIsIHBvcHVwc1dyYXApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wb3JhcnlEYXRhID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgd2lubmVyVGVtcG9yYXJ5YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShgd2lubmVyYCwgdGVtcG9yYXJ5RGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBidG5DdXJyZW50RGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShgd2lubmVyYCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ0bkN1cnJlbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbm5lckNhcmQuY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbm5lckNhcmQuc2V0QXR0cmlidXRlKFwiZGF0YS10ZWFtXCIsIGJ0bkN1cnJlbnREYXRhLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuVGVhbU5hbWUudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkoYnRuQ3VycmVudERhdGEuZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QcmVkaWN0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maXJtSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cChwb3B1cHNXcmFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QcmVkaWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maXJtSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhZ2VzLmZvckVhY2goKHN0YWdlLCBpKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0YWdlID4gc3RhZ2VzLmxlbmd0aCAtIDEgPyBjdXJyZW50U3RhZ2UgPSBzdGFnZXMubGVuZ3RoIC0gMSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRTdGFnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScsIGkgPT09IGN1cnJlbnRTdGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlc1RhYnNbaV0uY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScsIGkgPT09IGN1cnJlbnRTdGFnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9wID0gc3RhZ2UucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fdG9wXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib3R0b20gPSBzdGFnZS5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19ib3R0b21cIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc3RhZ2UucXVlcnlTZWxlY3RvcihcIi50aW1lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheW9mZldyYXAgPSBzdGFnZS5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX3dyYXBwZXJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiBjdXJyZW50U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcD8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b20/LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheW9mZldyYXA/LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXI/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1waWNrLXN0YWdlXCIsIFwibG9ja1wiKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbT8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmV3JhcD8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lcj8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZihpID09PSBjdXJyZW50U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlLnNldEF0dHJpYnV0ZShcImRhdGEtcGljay1zdGFnZVwiLCBcImFjdGl2ZVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKGkgPCBjdXJyZW50U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlLnNldEF0dHJpYnV0ZShcImRhdGEtcGljay1zdGFnZVwiLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlLmNsYXNzTGlzdC5hZGQoXCJfZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFN0YXRlUGlja1N0YWdlKHN0YWdlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFByZWRpY3QoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YWdlc1RhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5fYWN0aXZlJykpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RhZ2VWYWx1ZSA9IHRhYi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhZ2UtdGFiJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXN0YWdlPVwiJHt0YXJnZXRTdGFnZVZhbHVlfVwiXWApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFnZXMuZm9yRWFjaChzdGFnZSA9PiBzdGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhZ2VzVGFicy5mb3JFYWNoKHQgPT4gdC5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U3RhZ2U/LmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoTnVtYmVyKHRhcmdldFN0YWdlVmFsdWUpIC0gMSAhPT0gY3VycmVudFN0YWdlICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMuY2xhc3NMaXN0LmFkZChcIm5vQmdcIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMuY2xhc3NMaXN0LnJlbW92ZShcIm5vQmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJlbmRlclRlYW1CbG9ja3MoJ2JpZ1dpbicsIHRlYW1zKTtcbiAgICAgICAgICAgICAgICByZW5kZXJUZWFtQmxvY2tzKCdiaWdMb3NlJywgdGVhbXMpO1xuICAgICAgICAgICAgICAgIHJlbmRlclRlYW1CbG9ja3MoJ090aGVycycsIHRlYW1zKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN0YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtc3RhZ2VdLl9hY3RpdmVgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc0Nsb3NlQnRuID0gdGFyZ2V0LmNsb3Nlc3QoJy5wbGF5b2ZmX19wb3B1cC1jbG9zZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXAgPSB0YXJnZXQuY2xvc2VzdCgnLnBsYXlvZmZfX3BvcHVwJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vINC70L7Qs9GW0LrQsCDQtNC70Y8g0L/QtdGA0YjQuNGFIDPRhSDQtdGC0LDQv9GW0LJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGFnZSA8PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGlja2VkQ2FyZCA9IHRhcmdldC5jbG9zZXN0KCcuc3RhZ2VfX2NhcmQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkQmlnV2luID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWJpZy1zdGFnZT1cImJpZ1dpblwiXScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRCaWdMb3NlID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWJpZy1zdGFnZT1cImJpZ0xvc2VcIl0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdXaW5Qb3B1cCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1wb3B1cD1cImJpZ1dpblwiXScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VQb3B1cCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1wb3B1cD1cImJpZ0xvc2VcIl0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdGhlcnNQb3B1cCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1wb3B1cD1cIk90aGVyc1wiXScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0gPSB0YXJnZXQuY2xvc2VzdCgnLnBsYXlvZmZfX2Nob29zZS10ZWFtJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzQ2FyZCA9IHRhcmdldC5jbG9zZXN0KCcuc3RhZ2VfX2NhcmQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxQb3B1cHNUZWFtID0gdGFyZ2V0LmNsb3Nlc3QoXCIucGxheW9mZl9fcG9wdXBcIik/LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrZWRUZWFtTmFtZSA9IHRhcmdldC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZWFtXScpPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ1dpbiA9IGFjdGl2ZVN0YWdlPy5xdWVyeVNlbGVjdG9yKGBbZGF0YS1iaWctc3RhZ2U9XCJiaWdXaW5cIl1gKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdXaW5UZWFtID0gYWN0aXZlQmlnV2luPy5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19jYXJkLXRleHRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnTG9zZSA9IGFjdGl2ZVN0YWdlPy5xdWVyeVNlbGVjdG9yKGBbZGF0YS1iaWctc3RhZ2U9XCJiaWdMb3NlXCJdYCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnTG9zZVRlYW0gPSBhY3RpdmVCaWdMb3NlPy5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19jYXJkLXRleHRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luUG9wdXBzVGVhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwPVwiYmlnV2luXCJdYCkucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZS10ZWFtLXRleHQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdMb3NlUG9wdXBzVGVhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwPVwiYmlnTG9zZVwiXWApLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19jaG9vc2UtdGVhbS10ZXh0JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzUG9wdXBzVGVhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwPVwiT3RoZXJzXCJdYCkucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX2Nob29zZS10ZWFtLXRleHQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQ2hvb3NlQnRuID0gdGFyZ2V0LmNsb3Nlc3QoJy5wbGF5b2ZmX19wb3B1cC1idG4nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcnNDb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCJPdGhlcnNcIl1gKS5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fcG9wdXAtYnRuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luQ29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwPVwiYmlnV2luXCJdYCkucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX3BvcHVwLWJ0bicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VDb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXA9XCJiaWdMb3NlXCJdYCkucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX3BvcHVwLWJ0bicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZU90aGVycyA9IGFjdGl2ZVN0YWdlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNhcmRzLXdyYXA9XCJzdGFnZVwiXWApLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFnZV9fY2FyZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQstGW0LTQutGA0LjRgtGC0Y8g0L/QvtC/0LDQv9GDINC90LAgMyAwXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYXJkQmlnV2luKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYmlnV2luVGVtcG9yYXJ5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJpZ1dpbil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ1dpbkNvbmZpcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ1dpblRlbXBvcmFyeVwiLCBiaWdXaW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnV2luVGVtcG9yYXJ5XCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luQ29uZmlybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ1dpbkNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnX2xvY2snKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ1dpblBvcHVwc1RlYW0uZm9yRWFjaCgodGVhbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtTmFtZSA9IGFjdGl2ZVN0YWdlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWJpZy1zdGFnZT1cImJpZ0xvc2VcIl1gKS5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19jYXJkLXRleHRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1XcmFwID0gdGVhbS5jbG9zZXN0KFwiLnBsYXlvZmZfX2Nob29zZS10ZWFtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWRUZWFtID0gdGVhbU5hbWUuZ2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nKSA9PT0gdGVhbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkQmlnV2luID0gSlNPTi5wYXJzZShiaWdXaW4pPy5kYXRhQXR0ciA9PT0gdGVhbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlYW1cIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NlbGVjdGVkQmlnV2luKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNTZWxlY3RlZFRlYW0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cChcImJpZ1dpblwiLCBwb3B1cHNXcmFwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQstGW0LTQutGA0LjRgtGC0Y8g0L/QvtC/0LDQv9GDINC90LAgMCAzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjYXJkQmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImJpZ0xvc2VUZW1wb3JhcnlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VDb25maXJtQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdMb3NlVGVtcG9yYXJ5XCIsIGJpZ0xvc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmlnTG9zZVRlbXBvcmFyeVwiKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VDb25maXJtQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZUNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnX2xvY2snKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdMb3NlUG9wdXBzVGVhbS5mb3JFYWNoKCh0ZWFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1OYW1lID0gYWN0aXZlU3RhZ2UucXVlcnlTZWxlY3RvcihgW2RhdGEtYmlnLXN0YWdlPVwiYmlnV2luXCJdYCkucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fY2FyZC10ZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWFtV3JhcCA9IHRlYW0uY2xvc2VzdChcIi5wbGF5b2ZmX19jaG9vc2UtdGVhbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkVGVhbSA9IHRlYW1OYW1lLmdldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJykgPT09IHRlYW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZEJpZ0xvc2UgPSBKU09OLnBhcnNlKGJpZ0xvc2UpPy5kYXRhQXR0ciA9PT0gdGVhbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlYW1cIilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NlbGVjdGVkQmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzU2VsZWN0ZWRUZWFtKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cChcImJpZ0xvc2VcIiwgcG9wdXBzV3JhcClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LLQuNCx0ZbRgCDQv9GA0LXQtNGW0LrRgtGDINC90LAgMyAwXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihiaWdXaW5Qb3B1cCAmJiBwb3B1cHNUZWFtKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjbGlja2VkVGVhbU5hbWUgJiYgcG9wdXBzVGVhbSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzU2VsZWN0ZWRCaWdXaW4gPSBKU09OLnBhcnNlKGJpZ1dpbikgPz8gZmFsc2VcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NlbGVjdGVkQmlnV2luKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdXaW5UZW1wb3JhcnlcIiwgYmlnV2luKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGVhbSA9IHRlYW1zLmZpbmQodGVhbSA9PiB0ZWFtLmRhdGFBdHRyID09PSBjbGlja2VkVGVhbU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdXaW5UZW1wb3JhcnlcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRlYW0pKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBvcHVwc1RlYW0uZm9yRWFjaCgodGVhbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbS5jbGFzc0xpc3QuYWRkKCdfb3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdXaW5UZW1wb3JhcnlcIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luQ29uZmlybUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnV2luQ29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LLQuNCx0ZbRgCDQv9GA0LXQtNGW0LrRgtGDINC90LAgMCAzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihiaWdMb3NlUG9wdXAgJiYgcG9wdXBzVGVhbSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjbGlja2VkVGVhbU5hbWUpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc1NlbGVjdGVkQmlnTG9zZSA9IEpTT04ucGFyc2UoYmlnTG9zZSkgPz8gZmFsc2VcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc1NlbGVjdGVkQmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmlnTG9zZVRlbXBvcmFyeVwiLCBiaWdMb3NlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGVhbSA9IHRlYW1zLmZpbmQodGVhbSA9PiB0ZWFtLmRhdGFBdHRyID09PSBjbGlja2VkVGVhbU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJiaWdMb3NlVGVtcG9yYXJ5XCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUZWFtKSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxQb3B1cHNUZWFtLmZvckVhY2goKHRlYW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uY2xhc3NMaXN0LmFkZCgnX29wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0/LmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwc1RlYW0/LmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ0xvc2VUZW1wb3JhcnlcIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmlnTG9zZUNvbmZpcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ0xvc2VDb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoJ19sb2NrJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LLRltC00LrRgNC40YLRgtGPINC/0L7Qv9Cw0L/RgyDQvdCwINGW0L3RiNGWINC60L7QvNCw0L3QtNC4XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjbGlja2VkQ2FyZCAmJiAhY2FyZEJpZ1dpbiAmJiAhY2FyZEJpZ0xvc2Upe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbW9wb3JhcnlUZWFtcyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0ZWFtc1dpblRlbXBvcmFyeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRlYW1zID0gdGVhbXNXaW4/LmZpbHRlcihpdGVtID0+IGl0ZW0gJiYgaXRlbS5kYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRUZWFtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidGVhbXNXaW5UZW1wb3JhcnlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxlY3RlZFRlYW1zICYmIHNlbGVjdGVkVGVhbXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ0ZWFtc1dpblRlbXBvcmFyeVwiLCBKU09OLnN0cmluZ2lmeShzZWxlY3RlZFRlYW1zKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRlbW9wb3JhcnlUZWFtcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyc0NvbmZpcm1CdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzQ29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzUG9wdXBzVGVhbS5mb3JFYWNoKCh0ZWFtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1EYXRhQXR0ciA9IHRlYW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRlYW0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbVdyYXAgPSB0ZWFtLmNsb3Nlc3QoXCIucGxheW9mZl9fY2hvb3NlLXRlYW1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbU5hbWVXaW4gPSBhY3RpdmVTdGFnZS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1iaWctc3RhZ2U9XCJiaWdXaW5cIl0gLnN0YWdlX19jYXJkLXRleHQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbU5hbWVMb3NlID0gYWN0aXZlU3RhZ2UucXVlcnlTZWxlY3RvcignW2RhdGEtYmlnLXN0YWdlPVwiYmlnTG9zZVwiXSAuc3RhZ2VfX2NhcmQtdGV4dCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWRUZWFtID0gc2VsZWN0ZWRUZWFtcz8uc29tZShpdGVtID0+IGl0ZW0uZGF0YUF0dHIgPT09IHRlYW1EYXRhQXR0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWRUZWFtV2luID0gdGVhbU5hbWVXaW4/LmdldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJykgPT09IHRlYW1EYXRhQXR0cjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZFRlYW1Mb3NlID0gdGVhbU5hbWVMb3NlPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScpID09PSB0ZWFtRGF0YUF0dHI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2VsZWN0ZWRUZWFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtV3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdfb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZWN0ZWRUZWFtcz8ubGVuZ3RoID4gMCAmJiAhaXNTZWxlY3RlZFRlYW0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbVdyYXAuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1NlbGVjdGVkVGVhbVdpbiB8fCBpc1NlbGVjdGVkVGVhbUxvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1XcmFwLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFjdGl2ZU90aGVycyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyc0FycmF5ID0gQXJyYXkuZnJvbShhY3RpdmVPdGhlcnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleENhcmQgPSBvdGhlcnNBcnJheS5pbmRleE9mKG90aGVyc0NhcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleENhcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Qb3B1cChcIk90aGVyc1wiLCBwb3B1cHNXcmFwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQt9Cw0LrRgNC40YLRgtGPINC/0L7Qv9Cw0L/RgyDQvdCwINGW0L3RiNGWINC60L7QvNCw0L3QtNC4XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwb3B1cHNDbG9zZUJ0biB8fCAhY2xpY2tlZENhcmQgJiYgIXBvcHVwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAocG9wdXBzV3JhcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCy0LjQsdGW0YAg0L/RgNC10LTRltC60YLRgyDQvdCwINCy0YHRliDRltC90YjRliDQutC+0LzQsNC90LTQuFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE90aGVyc1BvcHVwICYmIHBvcHVwc1RlYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwb3B1cHNUZWFtLmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBvcHVwc1RlYW0uY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xpY2tlZFRlYW1OYW1lKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUZWFtID0gdGVhbXMuZmluZCh0ZWFtID0+IHRlYW0uZGF0YUF0dHIgPT09IGNsaWNrZWRUZWFtTmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUZWFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UHJlZGljdCA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRlYW1zV2luVGVtcG9yYXJ5XCIpKSB8fCBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxyZWFkeUFkZGVkID0gbmV3UHJlZGljdC5zb21lKGl0ZW0gPT4gaXRlbS5kYXRhQXR0ciA9PT0gY3VycmVudFRlYW0uZGF0YUF0dHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNQcmVkaWN0RnVsbCA9IG5ld1ByZWRpY3QubGVuZ3RoID49IDc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYWxyZWFkeUFkZGVkICYmICFpc1ByZWRpY3RGdWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJlZGljdC5wdXNoKGN1cnJlbnRUZWFtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidGVhbXNXaW5UZW1wb3JhcnlcIiwgSlNPTi5zdHJpbmdpZnkobmV3UHJlZGljdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pyFIEFkZGVkOlwiLCBjdXJyZW50VGVhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbS5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cHNUZWFtLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ByZWRpY3QgPSBuZXdQcmVkaWN0LmZpbHRlcih0ZWFtID0+IHRlYW0uZGF0YUF0dHIgIT09IGN1cnJlbnRUZWFtLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidGVhbXNXaW5UZW1wb3JhcnlcIiwgSlNPTi5zdHJpbmdpZnkobmV3UHJlZGljdCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi4pqg77iPIFRlYW0gcmVtb3ZlZFwiLCBjdXJyZW50VGVhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBzVGVhbS5jbGFzc0xpc3QucmVtb3ZlKCdfc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cHNUZWFtLmNsYXNzTGlzdC5hZGQoJ19vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRMZW5ndGggPSBuZXdQcmVkaWN0Lmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRMZW5ndGggPCA3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJzQ29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBvcHVwc1RlYW0uZm9yRWFjaCh0ZWFtID0+IHRlYW0uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHVwZGF0ZWRMZW5ndGggPT09IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcnNDb25maXJtQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsUG9wdXBzVGVhbS5mb3JFYWNoKHRlYW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVhbS5jbGFzc0xpc3QuY29udGFpbnMoJ19vcGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0uY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLinYwgVGVhbSBub3QgZm91bmQgZm9yOlwiLCBjbGlja2VkVGVhbU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0L/RltC00YLQstC10YDQtNC20LXQvdC90Y8g0LLQuNCx0L7RgNGDINCyINC/0L7Qv9Cw0L/RllxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlybUNob29zZUJ0bil7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtc1dpbiA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRlYW1zV2luVGVtcG9yYXJ5XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0ZWFtc1dpbikgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInRlYW1zV2luXCIsIEpTT04uc3RyaW5naWZ5KHRlYW1zV2luKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWdMb3NlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJpZ0xvc2VUZW1wb3JhcnlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmlnTG9zZSkgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJpZ0xvc2VcIiwgYmlnTG9zZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZ1dpbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiaWdXaW5UZW1wb3JhcnlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmlnV2luKSBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmlnV2luXCIsIGJpZ1dpbilcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmlnV2luUHJlZGljdCA9IEpTT04ucGFyc2UoYmlnV2luKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpZ0xvc2VQcmVkaWN0ID0gSlNPTi5wYXJzZShiaWdMb3NlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG90aGVyVGVhbXNQcmVkaWN0ID0gdGVhbXNXaW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihiaWdMb3NlUHJlZGljdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ0xvc2UuY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdMb3NlLmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUJpZ0xvc2VUZWFtLnRleHRDb250ZW50ID0gdHJhbnNsYXRlS2V5KGJpZ0xvc2VQcmVkaWN0LmRhdGFBdHRyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdMb3NlVGVhbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVhbScsIGJpZ0xvc2VQcmVkaWN0LmRhdGFBdHRyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJpZ1dpblByZWRpY3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdXaW4uY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdXaW4uY2xhc3NMaXN0LmFkZCgnX3NlbGVjdGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQmlnV2luVGVhbS50ZXh0Q29udGVudCA9IHRyYW5zbGF0ZUtleShiaWdXaW5QcmVkaWN0LmRhdGFBdHRyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCaWdXaW5UZWFtLnNldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJywgYmlnV2luUHJlZGljdC5kYXRhQXR0cilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvdGhlclRlYW1zUHJlZGljdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyVGVhbXNQcmVkaWN0LmZvckVhY2goKHRlYW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDYXJkVGVhbU5hbWUgPSBhY3RpdmVPdGhlcnNbaV0ucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fY2FyZC10ZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudENhcmRUZWFtTmFtZSwgdGVhbSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlT3RoZXJzW2ldLmNsYXNzTGlzdC5hZGQoJ19zZWxlY3RlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVPdGhlcnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnX29wZW4nKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FyZFRlYW1OYW1lLnNldEF0dHJpYnV0ZSgnZGF0YS10ZWFtJywgdGVhbS5kYXRhQXR0cilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXJkVGVhbU5hbWUudGV4dENvbnRlbnQgPSB0cmFuc2xhdGVLZXkodGVhbS5kYXRhQXR0cilcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRlYW1zV2luICYmIGJpZ1dpbiAmJiBiaWdMb3NlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKHBvcHVwc1dyYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0ZWFtc1dpbiAmJiBiaWdXaW4gJiYgYmlnTG9zZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2VQcmVkaWN0QnRuLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LfQsNC60YDQuNGC0YLRjyDQv9C+0L/QsNC/0YMg0L3QsCDRltC90YjRliDQutC+0LzQsNC90LTQuFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGlja2VkVGFiID0gdGFyZ2V0LmNsb3Nlc3QoXCIucGxheW9mZl9fY2hvb3NlLXRlYW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRDYXJkID0gdGFyZ2V0LmNsb3Nlc3QoXCIucGxheW9mZl9fY2FyZFwiKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwb3B1cHNDbG9zZUJ0biB8fCAhY2xpY2tlZFRhYiAmJiAhcG9wdXAgJiYgIWNsaWNrZWRDYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cChwb3B1cHNXcmFwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFN0YWdlIDwgMyl7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlvZmZQcmVkaWN0b3IuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGxheW9mZlBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbWFrZVByZWRpY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgc2VuZFByZWRpY3QoKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2V0VGltZW91dChoaWRlTG9hZGVyLCAxMDAwKVxuXG4gICAgICAgICAgICBsZXQgaW5pdGlhbE9mZnNldExlZnQgPSBudWxsO1xuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVQbGF5b2ZmUG9zaXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDEzMDAgJiYgd2luZG93LmlubmVyV2lkdGggPiA1NTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlvZmZTdGFnZS5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE9mZnNldExlZnQgPSBwbGF5b2ZmU3RhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMZWZ0ID0gaW5pdGlhbE9mZnNldExlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaWZ0ID0gY3VycmVudExlZnQgLSAxMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlvZmZTdGFnZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtzaGlmdH1weClgO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheW9mZlN0YWdlLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsT2Zmc2V0TGVmdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMClcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCB1cGRhdGVQbGF5b2ZmUG9zaXRpb24pO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlUGxheW9mZlBvc2l0aW9uKTtcblxuICAgICAgICAgICAgY29uc3QgcGxheW9mZlBoYXNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19zdGFnZScpO1xuICAgICAgICAgICAgY29uc3QgcGxheW9mZkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmJyk7XG4gICAgICAgICAgICBjb25zdCBwbGF5b2ZmTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19idG4tcmlnaHQnKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXlvZmZQcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX2J0bi1sZWZ0Jyk7XG5cbiAgICAgICAgICAgIGxldCBwaGFzZUNvdW50ID0gMztcbiAgICAgICAgICAgIGxldCBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDU1MDtcblxuICAgICAgICAgICAgY29uc3Qgc2V0Q3VycmVudFBoYXNlID0gKHBoYXNlcywgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHBoYXNlcy5mb3JFYWNoKChwaGFzZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwaGFzZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiLCBpICE9PSBjdXJyZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHNob3dBbGxQaGFzZXMgPSAocGhhc2VzKSA9PiB7XG4gICAgICAgICAgICAgICAgcGhhc2VzLmZvckVhY2gocGhhc2UgPT4gcGhhc2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIikpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgaGlkZUFsbEV4Y2VwdEN1cnJlbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFBoYXNlKHBsYXlvZmZQaGFzZXMsIHBoYXNlQ291bnQpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwaGFzZUNvdW50ID0gKHBoYXNlQ291bnQgKyAxKSAlIHBsYXlvZmZQaGFzZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGhpZGVBbGxFeGNlcHRDdXJyZW50KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVQcmV2ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBoYXNlQ291bnQgPSAocGhhc2VDb3VudCAtIDEgKyBwbGF5b2ZmUGhhc2VzLmxlbmd0aCkgJSBwbGF5b2ZmUGhhc2VzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBoaWRlQWxsRXhjZXB0Q3VycmVudCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IHRvdWNoU3RhcnRYID0gMDtcbiAgICAgICAgICAgIGxldCB0b3VjaEVuZFggPSAwO1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVTd2lwZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gdG91Y2hFbmRYIC0gdG91Y2hTdGFydFg7XG5cbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiA1MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgICAgIGhpZGVBbGxFeGNlcHRDdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgcGxheW9mZk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVOZXh0KTtcbiAgICAgICAgICAgICAgICBwbGF5b2ZmUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByZXYpO1xuXG4gICAgICAgICAgICAgICAgcGxheW9mZkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hTdGFydFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBwbGF5b2ZmQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hFbmRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTd2lwZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vd01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDU1MDtcblxuICAgICAgICAgICAgICAgIGlmIChub3dNb2JpbGUgJiYgIWlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTW9iaWxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUFsbEV4Y2VwdEN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheW9mZk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVOZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcGxheW9mZlByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQcmV2KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIW5vd01vYmlsZSAmJiBpc01vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICBpc01vYmlsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzaG93QWxsUGhhc2VzKHBsYXlvZmZQaGFzZXMpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmTmV4dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5leHQpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmUHJldi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByZXYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL25ldy10cmFuc2xhdGVzLyR7bG9jYWxlfWApXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xpY2stcGlja1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZFRyYW5zbGF0aW9ucygpLnRoZW4oaW5pdClcblxuICAgIC8vdGVzdFxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tbG5nXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwidWtcIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG5cbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYXV0aFwiKVxuXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHVzZXJJZCl7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjc3Nzc3Nzc5XCIpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKTtcbiAgICBjb25zdCBwb3B1cFdpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW4tcG9wdXAnKTtcbiAgICBjb25zdCBwb3B1cExvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9zZS1wb3B1cCcpO1xuICAgIGNvbnN0IHBvcHVwT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3RoZXJzLXBvcHVwJyk7XG5cbiAgICBjb25zb2xlLmxvZyhwb3B1cFdpbi5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX3BvcHVwLWNsb3NlXCIpKVxuXG4gICAgLy8gZnVuY3Rpb24gc2V0SGlkZVBvcHVwKHBvcHVwKXtcbiAgICAvLyAgICAgY29uc29sZS5sb2cocG9wdXAucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmX19wb3B1cC1jbG9zZVwiKSk7XG4gICAgLy8gICAgIGNvbnN0IGNsb3NlQnRuID0gcG9wdXAucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX3BvcHVwLWNsb3NlJyk7XG4gICAgLy9cbiAgICAvLyAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAvLyAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS1vcGFjaXR5Jyk7XG4gICAgLy8gICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBzZXRIaWRlUG9wdXAocG9wdXBXaW4pO1xuICAgIC8vIHNldEhpZGVQb3B1cChwb3B1cExvc2UpO1xuICAgIC8vIHNldEhpZGVQb3B1cChwb3B1cE90aGVyKTtcblxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wb3B1cC13aW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXktb3BhY2l0eScpO1xuICAgICAgICBwb3B1cFdpbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIHBvcHVwTG9zZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHBvcHVwT3RoZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBvcHVwLWxvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXktb3BhY2l0eScpO1xuICAgICAgICBwb3B1cFdpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHBvcHVwTG9zZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIHBvcHVwT3RoZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBvcHVwLW90aGVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LW9wYWNpdHknKTtcbiAgICAgICAgcG9wdXBXaW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBwb3B1cExvc2UuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBwb3B1cE90aGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi10aW1lcicpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhZ2UxID0gJzEnXG4gICAgICAgIGNvbnN0IHN0YWdlMiA9ICczJ1xuXG4gICAgICAgIGNvbnN0IHNhdmVkRGF0ZSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50RGF0ZVwiKTtcblxuICAgICAgICBjb25zdCBuZXdEYXRlID0gc2F2ZWREYXRlID09PSBzdGFnZTIgPyBzdGFnZTEgOiBzdGFnZTI7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50RGF0ZVwiLCBuZXdEYXRlKTtcblxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuXG59KSgpO1xuIl19
