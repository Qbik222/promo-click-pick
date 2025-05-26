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
(function () {
  var _sessionStorage$getIt, _sessionStorage$getIt2, _document$querySelect3;
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
    results = document.querySelector(".results");
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
  var loaderBtn = false;
  var locale = (_sessionStorage$getIt = sessionStorage.getItem("locale")) !== null && _sessionStorage$getIt !== void 0 ? _sessionStorage$getIt : "en";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = true;

  // if (debug) hideLoader()

  var i18nData = {};
  var translateState = true;
  var userId = (_sessionStorage$getIt2 = sessionStorage.getItem('userId')) !== null && _sessionStorage$getIt2 !== void 0 ? _sessionStorage$getIt2 : 100300268;
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
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
      return Promise.reject(err);
    });
  };
  function setCurrentStage() {}
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
        hideElements(redirectBtns);
        showElements(unauthMsgs);
        hideLoader();
        return Promise.resolve(false);
      }
      hideElements(unauthMsgs);
      return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
        if (res.userid) {
          hideElements(participateBtns);
          showElements(redirectBtns);
        } else {
          showElements(participateBtns);
          hideElements(redirectBtns);
        }
        hideLoader();
      });
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
              setTimeout(hideLoader, 1000);
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
                } else {
                  top === null || top === void 0 ? void 0 : top.classList.remove("hide");
                  bottom === null || bottom === void 0 ? void 0 : bottom.classList.remove("hide");
                  playoffWrap === null || playoffWrap === void 0 ? void 0 : playoffWrap.classList.remove("hide");
                  timer === null || timer === void 0 ? void 0 : timer.classList.add("hide");
                }
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
              updatePlayoffPosition();
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
      sessionStorage.setItem("userId", "100300268");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwic3RhZ2VzRGF0YSIsImRhdGEiLCJEYXRlIiwiY3VycmVudERhdGUiLCJjdXJyZW50U3RhZ2UiLCJOdW1iZXIiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInN0YWdlcyIsInN0YWdlc1RhYnMiLCJwbGF5b2ZmU3RhZ2UiLCJyZXN1bHRzIiwidWtMZW5nIiwiZW5MZW5nIiwidG9nZ2xlQ2xhc3NlcyIsImVsZW1lbnRzIiwiY2xhc3NOYW1lIiwiZm9yRWFjaCIsImVsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlVHJhbnNsYXRlcyIsImRhdGFBdHRyIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaTE4bkRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2FkZXJCdG4iLCJsb2NhbGUiLCJkZWJ1ZyIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwicmVxdWVzdCIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJzZXRDdXJyZW50U3RhZ2UiLCJoaWRlTG9hZGVyIiwiYWRkIiwiYm9keSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiY2hlY2tVc2VyQXV0aCIsImxvYWRUaW1lIiwic2V0VGltZW91dCIsInNob3dFbGVtZW50cyIsImhpZGVFbGVtZW50cyIsInJlc29sdmUiLCJ1c2VyaWQiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJ0cmFuc2xhdGUiLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInJlbmRlclVzZXJzIiwid2VlayIsInVzZXJzIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsInJlc3VsdHNUYWJsZSIsInJlc3VsdHNUYWJsZU90aGVyIiwiY3VycmVudFVzZXIiLCJmaW5kIiwidXNlciIsImlzVG9wQ3VycmVudFVzZXIiLCJzbGljZSIsInNvbWUiLCJ0b3BVc2Vyc0xlbmd0aCIsInRvcFVzZXJzIiwiZGlzcGxheVVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJ1c2VyRGF0YSIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsInRyYW5zbGF0ZUtleSIsIm1hc2tVc2VySWQiLCJwb2ludHMiLCJhcHBlbmQiLCJpbmRleCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJ0b1N0cmluZyIsInBsYWNlIiwicGFydGljaXBhdGUiLCJwYXJhbXMiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsInN0YWdlIiwiaSIsInRvcCIsImJvdHRvbSIsInRpbWVyIiwicGxheW9mZldyYXAiLCJ0YWIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJ0YXJnZXRTdGFnZVZhbHVlIiwidGFyZ2V0U3RhZ2UiLCJ0IiwiaW5pdGlhbE9mZnNldExlZnQiLCJ1cGRhdGVQbGF5b2ZmUG9zaXRpb24iLCJpbm5lcldpZHRoIiwidHJhbnNmb3JtIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsImN1cnJlbnRMZWZ0Iiwic2hpZnQiLCJwbGF5b2ZmUGhhc2VzIiwicGxheW9mZkNvbnRhaW5lciIsInBsYXlvZmZOZXh0IiwicGxheW9mZlByZXYiLCJwaGFzZUNvdW50IiwiaXNNb2JpbGUiLCJzZXRDdXJyZW50UGhhc2UiLCJwaGFzZXMiLCJjdXJyZW50IiwicGhhc2UiLCJzaG93QWxsUGhhc2VzIiwiaGlkZUFsbEV4Y2VwdEN1cnJlbnQiLCJoYW5kbGVOZXh0IiwiaGFuZGxlUHJldiIsInRvdWNoU3RhcnRYIiwidG91Y2hFbmRYIiwiaGFuZGxlU3dpcGUiLCJkaWZmIiwiTWF0aCIsImFicyIsImNoYW5nZWRUb3VjaGVzIiwic2NyZWVuWCIsIm5vd01vYmlsZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsInRhcmdldE5vZGUiLCJnZXRFbGVtZW50QnlJZCIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwibG5nQnRuIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJyZWxvYWQiLCJhdXRoQnRuIiwib3ZlcmxheSIsInBvcHVwV2luIiwicG9wdXBMb3NlIiwicG9wdXBPdGhlciIsInNldEhpZGVQb3B1cCIsInBvcHVwIiwiY2xvc2VCdG4iLCJzdGFnZTEiLCJzdGFnZTIiLCJzYXZlZERhdGUiLCJuZXdEYXRlIl0sIm1hcHBp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QUdELFNBQVMsS0FBS0QsTUFBTSxHQUFHRCxNQUFNLEdBQUdDLE1BQU07SUFDdER6TixjQUFjLENBQUM4TSxPQUFPLENBQUMsYUFBYSxFQUFFYSxPQUFPLENBQUM7SUFFOUN2SyxRQUFRLENBQUMySixNQUFNLEVBQUU7RUFDckIsQ0FBQyxDQUFDO0FBR04sQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV9jbGlja19waWNrJ1xuXG4gICAgY29uc3Qgc3RhZ2VzRGF0YSA9IFtcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMjBUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMjVUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMzBUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDYtMDVUMDA6MDA6MDArMDM6MDBcIikgfVxuICAgIF07XG5cbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0wNC0wNVQwMDowMDowMCswMzowMFwiKTtcblxuICAgIC8vIGxldCBjdXJyZW50U3RhZ2UgPSBzdGFnZXNEYXRhLmZpbHRlcihzdGFnZSA9PiBzdGFnZS5kYXRhIDw9IGN1cnJlbnREYXRlKS5sZW5ndGggPz8gMztcblxuICAgIGxldCBjdXJyZW50U3RhZ2UgPSBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnREYXRlXCIpKVxuXG4gICAgY29uc29sZS5sb2coY3VycmVudFN0YWdlKTtcblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIHN0YWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zdGFnZV1cIiksXG4gICAgICAgIHN0YWdlc1RhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc3RhZ2UtdGFiXVwiKSxcbiAgICAgICAgcGxheW9mZlN0YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmXCIpLFxuICAgICAgICByZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRzXCIpO1xuXG4gICAgY29uc3QgdWtMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBsZXQgbG9hZGVyQnRuID0gZmFsc2VcblxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpID8/IFwiZW5cIlxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gdHJ1ZVxuXG4gICAgLy8gaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICBsZXQgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJykgPz8gMTAwMzAwMjY4O1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEN1cnJlbnRTdGFnZSgpe1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgY29uc3QgbG9hZFRpbWUgPSAyMDA7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93RWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIGNvbnN0IGhpZGVFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuXG4gICAgICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyh1bmF1dGhNc2dzKTtcbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhpZGVFbGVtZW50cyh1bmF1dGhNc2dzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGxvYWRUaW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMod2Vlaykge1xuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvJHt3ZWVrfWApXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VycyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCB1c2VySWQsIHdlZWspO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkLCB3ZWVrKSB7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB1c2Vycy5zbGljZSgwLCAxMCkuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgdG9wVXNlcnNMZW5ndGggPSAhdXNlcklkIHx8IGlzVG9wQ3VycmVudFVzZXIgID8gMTMgOiAxMDtcbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCB0b3BVc2Vyc0xlbmd0aCk7XG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0IHx8IGlzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd5b3UnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgICAgICR7aXNDdXJyZW50VXNlciAmJiAhbmVpZ2hib3IgPyAnPHNwYW4gY2xhc3M9XCJ5b3VcIj4nICsgdHJhbnNsYXRlS2V5KFwieW91XCIpICsgJzwvc3Bhbj4nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyRGF0YS5wb2ludHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRLZXkgPSBkZWJ1ZyA/IGtleSA6IGAqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qIGtleTogJHtrZXl9YFxuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICBuZWVkS2V5IHx8IGtleTtcbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlLCB3ZWVrKSB7XG4gICAgICAgIGlmIChwbGFjZSA8PSAzKSByZXR1cm4gYHByaXplXyR7d2Vla30tJHtwbGFjZX1gO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS00LTEwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTEtMjVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0yNi01MGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSA3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTUxLTc1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTc2LTEwMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMDEtMTI1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEyNi0xNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTUxLTE3NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNzYtMjAwYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHVzZXJpZDogdXNlcklkIH07XG4gICAgICAgIGZldGNoKGFwaVVSTCArICcvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRlckJ0biA9IHRydWVcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJfcmVhZHlcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwiZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZUxvYWRlciwgMTAwMClcblxuICAgICAgICAgICAgc3RhZ2VzLmZvckVhY2goKHN0YWdlLCBpKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhZ2UgPiBzdGFnZXMubGVuZ3RoIC0gMSA/IGN1cnJlbnRTdGFnZSA9IHN0YWdlcy5sZW5ndGggLSAxIDogbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50U3RhZ2UpO1xuXG4gICAgICAgICAgICAgICAgc3RhZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScsIGkgPT09IGN1cnJlbnRTdGFnZSk7XG4gICAgICAgICAgICAgICAgc3RhZ2VzVGFic1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJywgaSA9PT0gY3VycmVudFN0YWdlKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IHN0YWdlLnF1ZXJ5U2VsZWN0b3IoXCIuc3RhZ2VfX3RvcFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBib3R0b20gPSBzdGFnZS5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX19ib3R0b21cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzdGFnZS5xdWVyeVNlbGVjdG9yKFwiLnRpbWVyXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXlvZmZXcmFwID0gc3RhZ2UucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmX193cmFwcGVyXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGkgPiBjdXJyZW50U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wPy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tPy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheW9mZldyYXA/LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aW1lcj8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG9wPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheW9mZldyYXA/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aW1lcj8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdGFnZXNUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLl9hY3RpdmUnKSkgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0YWdlVmFsdWUgPSB0YWIuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YWdlLXRhYicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTdGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXN0YWdlPVwiJHt0YXJnZXRTdGFnZVZhbHVlfVwiXWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YWdlcy5mb3JFYWNoKHN0YWdlID0+IHN0YWdlLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWdlc1RhYnMuZm9yRWFjaCh0ID0+IHQuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcblxuICAgICAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTdGFnZT8uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBsYXlvZmZTdGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC0gMTApXG5cblxuICAgICAgICAgICAgbGV0IGluaXRpYWxPZmZzZXRMZWZ0ID0gbnVsbDtcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlUGxheW9mZlBvc2l0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMzAwICYmIHdpbmRvdy5pbm5lcldpZHRoID4gNTUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmU3RhZ2Uuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxPZmZzZXRMZWZ0ID0gcGxheW9mZlN0YWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50TGVmdCA9IGluaXRpYWxPZmZzZXRMZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlmdCA9IGN1cnJlbnRMZWZ0IC0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmU3RhZ2Uuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7c2hpZnR9cHgpYDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlvZmZTdGFnZS5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE9mZnNldExlZnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTApXG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHVwZGF0ZVBsYXlvZmZQb3NpdGlvbigpO1xuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsIHVwZGF0ZVBsYXlvZmZQb3NpdGlvbik7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVQbGF5b2ZmUG9zaXRpb24pO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5b2ZmUGhhc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXlvZmZfX3N0YWdlJyk7XG4gICAgICAgICAgICBjb25zdCBwbGF5b2ZmQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlvZmYnKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXlvZmZOZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX2J0bi1yaWdodCcpO1xuICAgICAgICAgICAgY29uc3QgcGxheW9mZlByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fYnRuLWxlZnQnKTtcblxuICAgICAgICAgICAgbGV0IHBoYXNlQ291bnQgPSAzO1xuICAgICAgICAgICAgbGV0IGlzTW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPD0gNTUwO1xuXG4gICAgICAgICAgICBjb25zdCBzZXRDdXJyZW50UGhhc2UgPSAocGhhc2VzLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcGhhc2VzLmZvckVhY2goKHBoYXNlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHBoYXNlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIsIGkgIT09IGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qgc2hvd0FsbFBoYXNlcyA9IChwaGFzZXMpID0+IHtcbiAgICAgICAgICAgICAgICBwaGFzZXMuZm9yRWFjaChwaGFzZSA9PiBwaGFzZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBoaWRlQWxsRXhjZXB0Q3VycmVudCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGhhc2UocGxheW9mZlBoYXNlcywgcGhhc2VDb3VudCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBoYXNlQ291bnQgPSAocGhhc2VDb3VudCArIDEpICUgcGxheW9mZlBoYXNlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaGlkZUFsbEV4Y2VwdEN1cnJlbnQoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGhhc2VDb3VudCA9IChwaGFzZUNvdW50IC0gMSArIHBsYXlvZmZQaGFzZXMubGVuZ3RoKSAlIHBsYXlvZmZQaGFzZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGhpZGVBbGxFeGNlcHRDdXJyZW50KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsZXQgdG91Y2hTdGFydFggPSAwO1xuICAgICAgICAgICAgbGV0IHRvdWNoRW5kWCA9IDA7XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVN3aXBlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSB0b3VjaEVuZFggLSB0b3VjaFN0YXJ0WDtcblxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlTmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUHJldigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgaGlkZUFsbEV4Y2VwdEN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICBwbGF5b2ZmTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5leHQpO1xuICAgICAgICAgICAgICAgIHBsYXlvZmZQcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJldik7XG5cbiAgICAgICAgICAgICAgICBwbGF5b2ZmQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaFN0YXJ0WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHBsYXlvZmZDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaEVuZFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVN3aXBlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93TW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPD0gNTUwO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5vd01vYmlsZSAmJiAhaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNb2JpbGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBoaWRlQWxsRXhjZXB0Q3VycmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5leHQpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByZXYpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghbm93TW9iaWxlICYmIGlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTW9iaWxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGxQaGFzZXMocGxheW9mZlBoYXNlcyk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlvZmZOZXh0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTmV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlvZmZQcmV2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJldik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsaWNrLXBpY2tcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKS50aGVuKGluaXQpXG5cbiAgICAvL3Rlc3RcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWxuZ1wiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcInVrXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWF1dGhcIilcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCIxMDAzMDAyNjhcIilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpO1xuICAgIGNvbnN0IHBvcHVwV2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbi1wb3B1cCcpO1xuICAgIGNvbnN0IHBvcHVwTG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3NlLXBvcHVwJyk7XG4gICAgY29uc3QgcG9wdXBPdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdGhlcnMtcG9wdXAnKTtcblxuICAgIGNvbnNvbGUubG9nKHBvcHVwV2luLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fcG9wdXAtY2xvc2VcIikpXG5cbiAgICBmdW5jdGlvbiBzZXRIaWRlUG9wdXAocG9wdXApe1xuICAgICAgICBjb25zb2xlLmxvZyhwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlvZmZfX3BvcHVwLWNsb3NlXCIpKTtcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcucGxheW9mZl9fcG9wdXAtY2xvc2UnKTtcblxuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LW9wYWNpdHknKTtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldEhpZGVQb3B1cChwb3B1cFdpbik7XG4gICAgc2V0SGlkZVBvcHVwKHBvcHVwTG9zZSk7XG4gICAgc2V0SGlkZVBvcHVwKHBvcHVwT3RoZXIpO1xuXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBvcHVwLXdpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1vcGFjaXR5Jyk7XG4gICAgICAgIHBvcHVwV2luLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBMb3NlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBPdGhlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcG9wdXAtbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1vcGFjaXR5Jyk7XG4gICAgICAgIHBvcHVwV2luLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBMb3NlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBPdGhlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcG9wdXAtb3RoZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXktb3BhY2l0eScpO1xuICAgICAgICBwb3B1cFdpbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHBvcHVwTG9zZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIHBvcHVwT3RoZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXRpbWVyJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdGFnZTEgPSAnMSdcbiAgICAgICAgY29uc3Qgc3RhZ2UyID0gJzQnXG5cbiAgICAgICAgY29uc3Qgc2F2ZWREYXRlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnREYXRlXCIpO1xuXG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBzYXZlZERhdGUgPT09IHN0YWdlMiA/IHN0YWdlMSA6IHN0YWdlMjtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnREYXRlXCIsIG5ld0RhdGUpO1xuXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG5cbn0pKCk7XG4iXX0=
