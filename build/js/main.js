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
  var _stagesData$filter$le;
  var apiURL = 'https://fav-prom.com/api_your_promo';
  var stagesData = [{
    data: new Date("2025-05-20T00:00:00+03:00")
  }, {
    data: new Date("2025-05-25T00:00:00+03:00")
  }, {
    data: new Date("2025-05-30T00:00:00+03:00")
  }, {
    data: new Date("2025-06-05T00:00:00+03:00")
  }];
  var currentDate = new Date("2025-06-05T00:00:00+03:00");
  var currentStage = (_stagesData$filter$le = stagesData.filter(function (stage) {
    return stage.data <= currentDate;
  }).length) !== null && _stagesData$filter$le !== void 0 ? _stagesData$filter$le : 3;
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join'),
    loader = document.querySelector(".spinner-overlay"),
    stages = document.querySelectorAll("[data-stage]"),
    stagesTabs = document.querySelectorAll("[data-stage-tab]"),
    playoffStage = document.querySelector(".playoff");
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
  var locale = "en";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = true;

  // if (debug) hideLoader()

  var i18nData = {};
  var translateState = true;
  var userId = null;
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
              // checkUserAuth();

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
      var targetNode = document.getElementById("goals-or-zeros-leage");
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
  init();

  // loadTranslations().then(init) запуск ініту сторінки

  //test

  document.querySelector('.dark-btn').addEventListener('click', function () {
    document.body.classList.toggle('dark');
  });

  // const lngBtn = document.querySelector(".lng-btn")
  //
  // lngBtn.addEventListener("click", () => {
  //     if (sessionStorage.getItem("locale")) {
  //         sessionStorage.removeItem("locale");
  //     } else {
  //         sessionStorage.setItem("locale", "hr");
  //     }
  //     window.location.reload();
  // });

  // const authBtn = document.querySelector(".auth-btn")
  //
  // authBtn.addEventListener("click", () =>{
  //     if(userId){
  //         sessionStorage.removeItem("userId")
  //     }else{
  //         sessionStorage.setItem("userId", "11111222")
  //     }
  //     window.location.reload()
  // });

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
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwic3RhZ2VzRGF0YSIsImRhdGEiLCJEYXRlIiwiY3VycmVudERhdGUiLCJjdXJyZW50U3RhZ2UiLCJmaWx0ZXIiLCJzdGFnZSIsImxlbmd0aCIsIm1haW5QYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5hdXRoTXNncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJ0aWNpcGF0ZUJ0bnMiLCJyZWRpcmVjdEJ0bnMiLCJsb2FkZXIiLCJzdGFnZXMiLCJzdGFnZXNUYWJzIiwicGxheW9mZlN0YWdlIiwidWtMZW5nIiwiZW5MZW5nIiwidG9nZ2xlQ2xhc3NlcyIsImVsZW1lbnRzIiwiY2xhc3NOYW1lIiwiZm9yRWFjaCIsImVsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlVHJhbnNsYXRlcyIsImRhdGFBdHRyIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiaTE4bkRhdGEiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2FkZXJCdG4iLCJsb2NhbGUiLCJkZWJ1ZyIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwicmVxdWVzdCIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXBvcnRFcnJvciIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN0YXJ0c1dpdGgiLCJQcm9taXNlIiwicmVqZWN0Iiwic2V0Q3VycmVudFN0YWdlIiwiaGlkZUxvYWRlciIsImFkZCIsImJvZHkiLCJvdmVyZmxvdyIsInJlbW92ZSIsImNoZWNrVXNlckF1dGgiLCJsb2FkVGltZSIsInNldFRpbWVvdXQiLCJzaG93RWxlbWVudHMiLCJoaWRlRWxlbWVudHMiLCJyZXNvbHZlIiwidXNlcmlkIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwidHJhbnNsYXRlIiwiZWxlbXMiLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJyZW5kZXJVc2VycyIsIndlZWsiLCJ1c2VycyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImN1cnJlbnRVc2VyIiwiZmluZCIsInVzZXIiLCJpc1RvcEN1cnJlbnRVc2VyIiwic2xpY2UiLCJzb21lIiwidG9wVXNlcnNMZW5ndGgiLCJ0b3BVc2VycyIsImRpc3BsYXlVc2VyIiwiaXNDdXJyZW50VXNlciIsInRhYmxlIiwicmVuZGVyUm93IiwidXNlckRhdGEiLCJvcHRpb25zIiwiaGlnaGxpZ2h0IiwibmVpZ2hib3IiLCJ1c2VyUm93IiwiY3JlYXRlRWxlbWVudCIsInVzZXJQbGFjZSIsImluZGV4T2YiLCJwcml6ZUtleSIsImdldFByaXplVHJhbnNsYXRpb25LZXkiLCJ0cmFuc2xhdGVLZXkiLCJtYXNrVXNlcklkIiwicG9pbnRzIiwiYXBwZW5kIiwiaW5kZXgiLCJkZWZhdWx0VmFsdWUiLCJuZWVkS2V5IiwidG9TdHJpbmciLCJwbGFjZSIsInBhcnRpY2lwYXRlIiwicGFyYW1zIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJpIiwidG9wIiwiYm90dG9tIiwidGltZXIiLCJwbGF5b2ZmV3JhcCIsInRhYiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiY2xvc2VzdCIsInRhcmdldFN0YWdlVmFsdWUiLCJ0YXJnZXRTdGFnZSIsInQiLCJpbml0aWFsT2Zmc2V0TGVmdCIsInVwZGF0ZVBsYXlvZmZQb3NpdGlvbiIsImlubmVyV2lkdGgiLCJ0cmFuc2Zvcm0iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwiY3VycmVudExlZnQiLCJzaGlmdCIsInBsYXlvZmZQaGFzZXMiLCJwbGF5b2ZmQ29udGFpbmVyIiwicGxheW9mZk5leHQiLCJwbGF5b2ZmUHJldiIsInBoYXNlQ291bnQiLCJpc01vYmlsZSIsInNldEN1cnJlbnRQaGFzZSIsInBoYXNlcyIsImN1cnJlbnQiLCJwaGFzZSIsInNob3dBbGxQaGFzZXMiLCJoaWRlQWxsRXhjZXB0Q3VycmVudCIsImhhbmRsZU5leHQiLCJoYW5kbGVQcmV2IiwidG91Y2hTdGFydFgiLCJ0b3VjaEVuZFgiLCJoYW5kbGVTd2lwZSIsImRpZmYiLCJNYXRoIiwiYWJzIiwiY2hhbmdlZFRvdWNoZXMiLCJzY3JlZW5YIiwibm93TW9iaWxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidGFyZ2V0Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJvdmVybGF5IiwicG9wdXBXaW4iLCJwb3B1cExvc2UiLCJwb3B1cE90aGVyIiwic2V0SGlkZVBvcHVwIiwicG9wdXAiLCJjbG9zZUJ0biJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFBQTtFQUVULElBQU1BLE1BQU0sR0FBRyxxQ0FBcUM7RUFFcEQsSUFBTUMsVUFBVSxHQUFHLENBQ2Y7SUFB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QUN3QyxNQUFNLENBQUMsaUJBQWlCLENBQUM7SUFDM0M4SSxRQUFRLENBQUN0TCxTQUFTLENBQUN3QyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2pDK0ksU0FBUyxDQUFDdkwsU0FBUyxDQUFDcUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMvQm1KLFVBQVUsQ0FBQ3hMLFNBQVMsQ0FBQ3FDLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFDcEMsQ0FBQyxDQUFDO0VBRUZ0RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDc0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDckUrRCxPQUFPLENBQUNyTCxTQUFTLENBQUN3QyxNQUFNLENBQUMsaUJBQWlCLENBQUM7SUFDM0M4SSxRQUFRLENBQUN0TCxTQUFTLENBQUNxQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzlCa0osU0FBUyxDQUFDdkwsU0FBUyxDQUFDd0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQ2dKLFVBQVUsQ0FBQ3hMLFNBQVMsQ0FBQ3FDLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFDcEMsQ0FBQyxDQUFDO0VBRUZ0RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDc0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7SUFDdEUrRCxPQUFPLENBQUNyTCxTQUFTLENBQUN3QyxNQUFNLENBQUMsaUJBQWlCLENBQUM7SUFDM0M4SSxRQUFRLENBQUN0TCxTQUFTLENBQUNxQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzlCa0osU0FBUyxDQUFDdkwsU0FBUyxDQUFDcUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMvQm1KLFVBQVUsQ0FBQ3hMLFNBQVMsQ0FBQ3dDLE1BQU0sQ0FBQyxNQUFNLENBQUM7RUFDdkMsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxHQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuXG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV95b3VyX3Byb21vJ1xuXG4gICAgY29uc3Qgc3RhZ2VzRGF0YSA9IFtcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMjBUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMjVUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDUtMzBUMDA6MDA6MDArMDM6MDBcIikgfSxcbiAgICAgICAgeyBkYXRhOiBuZXcgRGF0ZShcIjIwMjUtMDYtMDVUMDA6MDA6MDArMDM6MDBcIikgfVxuICAgIF07XG5cbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0wNi0wNVQwMDowMDowMCswMzowMFwiKTtcblxuICAgIGxldCBjdXJyZW50U3RhZ2UgPSBzdGFnZXNEYXRhLmZpbHRlcihzdGFnZSA9PiBzdGFnZS5kYXRhIDw9IGN1cnJlbnREYXRlKS5sZW5ndGggPz8gMztcblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIiksXG4gICAgICAgIHN0YWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zdGFnZV1cIiksXG4gICAgICAgIHN0YWdlc1RhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtc3RhZ2UtdGFiXVwiKSxcbiAgICAgICAgcGxheW9mZlN0YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmXCIpXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3NlcyA9IChlbGVtZW50cywgY2xhc3NOYW1lKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoYCR7Y2xhc3NOYW1lfWApKTtcbiAgICBjb25zdCB0b2dnbGVUcmFuc2xhdGVzID0gKGVsZW1lbnRzLCBkYXRhQXR0cikgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnLCBgJHtkYXRhQXR0cn1gKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBpMThuRGF0YVtkYXRhQXR0cl0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsgZGF0YUF0dHI7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICB9KTtcblxuICAgIGxldCBsb2FkZXJCdG4gPSBmYWxzZVxuXG4gICAgbGV0IGxvY2FsZSA9IFwiZW5cIlxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gdHJ1ZVxuXG4gICAgLy8gaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICBsZXQgdXNlcklkID0gbnVsbDtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50U3RhZ2UoKXtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRUaW1lID0gMjAwO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd0VsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICBjb25zdCBoaWRlRWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcblxuICAgICAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICBzaG93RWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoaWRlRWxlbWVudHModW5hdXRoTXNncyk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHJlZGlyZWN0QnRucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBsb2FkVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWspIHtcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzLyR7d2Vla31gKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgdXNlcklkLCB3ZWVrKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2Vlaykge1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdXNlcnMuc2xpY2UoMCwgMTApLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzTGVuZ3RoID0gIXVzZXJJZCB8fCBpc1RvcEN1cnJlbnRVc2VyICA/IDEzIDogMTA7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgdG9wVXNlcnNMZW5ndGgpO1xuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSwgd2Vlayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspIHtcbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSwgd2Vlayk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCB8fCBpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgneW91Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgICAgICAke2lzQ3VycmVudFVzZXIgJiYgIW5laWdoYm9yID8gJzxzcGFuIGNsYXNzPVwieW91XCI+JyArIHRyYW5zbGF0ZUtleShcInlvdVwiKSArICc8L3NwYW4+JyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtpc0N1cnJlbnRVc2VyICYmICFuZWlnaGJvciA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlckRhdGEucG9pbnRzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSwgd2Vlaykge1xuICAgICAgICBpZiAocGxhY2UgPD0gMykgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LSR7cGxhY2V9YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNC0xMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTExLTI1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMjYtNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS01MS03NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS03Ni0xMDBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTAxLTEyNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMjYtMTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE1MS0xNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTc2LTIwMGA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyB1c2VyaWQ6IHVzZXJJZCB9O1xuICAgICAgICBmZXRjaChhcGlVUkwgKyAnL3VzZXIvJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkZXJCdG4gPSB0cnVlXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyX3JlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgLy8gY2hlY2tVc2VyQXV0aCgpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVMb2FkZXIsIDEwMDApXG5cbiAgICAgICAgICAgIHN0YWdlcy5mb3JFYWNoKChzdGFnZSwgaSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY3VycmVudFN0YWdlID4gc3RhZ2VzLmxlbmd0aCAtIDEgPyBjdXJyZW50U3RhZ2UgPSBzdGFnZXMubGVuZ3RoIC0gMSA6IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFN0YWdlKTtcblxuICAgICAgICAgICAgICAgIHN0YWdlLmNsYXNzTGlzdC50b2dnbGUoJ19hY3RpdmUnLCBpID09PSBjdXJyZW50U3RhZ2UpO1xuICAgICAgICAgICAgICAgIHN0YWdlc1RhYnNbaV0uY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScsIGkgPT09IGN1cnJlbnRTdGFnZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b3AgPSBzdGFnZS5xdWVyeVNlbGVjdG9yKFwiLnN0YWdlX190b3BcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgYm90dG9tID0gc3RhZ2UucXVlcnlTZWxlY3RvcihcIi5zdGFnZV9fYm90dG9tXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc3RhZ2UucXVlcnlTZWxlY3RvcihcIi50aW1lclwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5b2ZmV3JhcCA9IHN0YWdlLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fd3JhcHBlclwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChpID4gY3VycmVudFN0YWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcD8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbT8uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlvZmZXcmFwPy5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGltZXI/LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcD8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbT8uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlvZmZXcmFwPy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGltZXI/LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RhZ2VzVGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgICAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5fYWN0aXZlJykpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTdGFnZVZhbHVlID0gdGFiLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGFnZS10YWInKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zdGFnZT1cIiR7dGFyZ2V0U3RhZ2VWYWx1ZX1cIl1gKTtcblxuICAgICAgICAgICAgICAgICAgICBzdGFnZXMuZm9yRWFjaChzdGFnZSA9PiBzdGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuICAgICAgICAgICAgICAgICAgICBzdGFnZXNUYWJzLmZvckVhY2godCA9PiB0LmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U3RhZ2U/LmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5b2ZmU3RhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIDEwKVxuXG5cbiAgICAgICAgICAgIGxldCBpbml0aWFsT2Zmc2V0TGVmdCA9IG51bGw7XG5cbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVBsYXlvZmZQb3NpdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gMTMwMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IDU1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheW9mZlN0YWdlLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsT2Zmc2V0TGVmdCA9IHBsYXlvZmZTdGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudExlZnQgPSBpbml0aWFsT2Zmc2V0TGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpZnQgPSBjdXJyZW50TGVmdCAtIDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheW9mZlN0YWdlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3NoaWZ0fXB4KWA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmU3RhZ2Uuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxPZmZzZXRMZWZ0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwKVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB1cGRhdGVQbGF5b2ZmUG9zaXRpb24oKTtcblxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCB1cGRhdGVQbGF5b2ZmUG9zaXRpb24pO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdXBkYXRlUGxheW9mZlBvc2l0aW9uKTtcblxuICAgICAgICAgICAgY29uc3QgcGxheW9mZlBoYXNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5b2ZmX19zdGFnZScpO1xuICAgICAgICAgICAgY29uc3QgcGxheW9mZkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmJyk7XG4gICAgICAgICAgICBjb25zdCBwbGF5b2ZmTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19idG4tcmlnaHQnKTtcbiAgICAgICAgICAgIGNvbnN0IHBsYXlvZmZQcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlvZmZfX2J0bi1sZWZ0Jyk7XG5cbiAgICAgICAgICAgIGxldCBwaGFzZUNvdW50ID0gMztcbiAgICAgICAgICAgIGxldCBpc01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDU1MDtcblxuICAgICAgICAgICAgY29uc3Qgc2V0Q3VycmVudFBoYXNlID0gKHBoYXNlcywgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHBoYXNlcy5mb3JFYWNoKChwaGFzZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwaGFzZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiLCBpICE9PSBjdXJyZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHNob3dBbGxQaGFzZXMgPSAocGhhc2VzKSA9PiB7XG4gICAgICAgICAgICAgICAgcGhhc2VzLmZvckVhY2gocGhhc2UgPT4gcGhhc2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIikpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgaGlkZUFsbEV4Y2VwdEN1cnJlbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFBoYXNlKHBsYXlvZmZQaGFzZXMsIHBoYXNlQ291bnQpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBwaGFzZUNvdW50ID0gKHBoYXNlQ291bnQgKyAxKSAlIHBsYXlvZmZQaGFzZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGhpZGVBbGxFeGNlcHRDdXJyZW50KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVQcmV2ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBoYXNlQ291bnQgPSAocGhhc2VDb3VudCAtIDEgKyBwbGF5b2ZmUGhhc2VzLmxlbmd0aCkgJSBwbGF5b2ZmUGhhc2VzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBoaWRlQWxsRXhjZXB0Q3VycmVudCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGV0IHRvdWNoU3RhcnRYID0gMDtcbiAgICAgICAgICAgIGxldCB0b3VjaEVuZFggPSAwO1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVTd2lwZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gdG91Y2hFbmRYIC0gdG91Y2hTdGFydFg7XG5cbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiA1MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVByZXYoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICAgICAgICAgIGhpZGVBbGxFeGNlcHRDdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgcGxheW9mZk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVOZXh0KTtcbiAgICAgICAgICAgICAgICBwbGF5b2ZmUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByZXYpO1xuXG4gICAgICAgICAgICAgICAgcGxheW9mZkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hTdGFydFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBwbGF5b2ZmQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hFbmRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVTd2lwZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vd01vYmlsZSA9IHdpbmRvdy5pbm5lcldpZHRoIDw9IDU1MDtcblxuICAgICAgICAgICAgICAgIGlmIChub3dNb2JpbGUgJiYgIWlzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTW9iaWxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUFsbEV4Y2VwdEN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheW9mZk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVOZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcGxheW9mZlByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQcmV2KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIW5vd01vYmlsZSAmJiBpc01vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICBpc01vYmlsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzaG93QWxsUGhhc2VzKHBsYXlvZmZQaGFzZXMpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmTmV4dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5leHQpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5b2ZmUHJldi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByZXYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb2Fscy1vci16ZXJvcy1sZWFnZVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdCgpXG5cbiAgICAvLyBsb2FkVHJhbnNsYXRpb25zKCkudGhlbihpbml0KSDQt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG5cbiAgICAvL3Rlc3RcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcbiAgICB9KTtcblxuICAgIC8vIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuICAgIC8vXG4gICAgLy8gbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgLy8gICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImhyXCIpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAvLyB9KTtcblxuXG4gICAgLy8gY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcbiAgICAvL1xuICAgIC8vIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIC8vICAgICBpZih1c2VySWQpe1xuICAgIC8vICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgIC8vICAgICB9ZWxzZXtcbiAgICAvLyAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCIxMTExMTIyMlwiKVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIC8vIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJyk7XG4gICAgY29uc3QgcG9wdXBXaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luLXBvcHVwJyk7XG4gICAgY29uc3QgcG9wdXBMb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvc2UtcG9wdXAnKTtcbiAgICBjb25zdCBwb3B1cE90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm90aGVycy1wb3B1cCcpO1xuXG4gICAgY29uc29sZS5sb2cocG9wdXBXaW4ucXVlcnlTZWxlY3RvcihcIi5wbGF5b2ZmX19wb3B1cC1jbG9zZVwiKSlcblxuICAgIGZ1bmN0aW9uIHNldEhpZGVQb3B1cChwb3B1cCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucGxheW9mZl9fcG9wdXAtY2xvc2VcIikpO1xuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5b2ZmX19wb3B1cC1jbG9zZScpO1xuXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktb3BhY2l0eScpO1xuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0SGlkZVBvcHVwKHBvcHVwV2luKTtcbiAgICBzZXRIaWRlUG9wdXAocG9wdXBMb3NlKTtcbiAgICBzZXRIaWRlUG9wdXAocG9wdXBPdGhlcik7XG5cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcG9wdXAtd2luJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LW9wYWNpdHknKTtcbiAgICAgICAgcG9wdXBXaW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBwb3B1cExvc2UuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBwb3B1cE90aGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wb3B1cC1sb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVybGF5LW9wYWNpdHknKTtcbiAgICAgICAgcG9wdXBXaW4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBwb3B1cExvc2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBwb3B1cE90aGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1wb3B1cC1vdGhlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmxheS1vcGFjaXR5Jyk7XG4gICAgICAgIHBvcHVwV2luLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBMb3NlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgcG9wdXBPdGhlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfSlcblxufSkoKTtcbiJdfQ==
