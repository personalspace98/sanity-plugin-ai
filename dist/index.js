"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var sanity = require("sanity"), jsxRuntime = require("react/jsx-runtime"), ui = require("@sanity/ui"), generativeAi = require("@google/generative-ai"), toolkit = require("@reduxjs/toolkit"), OpenAI = require("openai"), reactRedux = require("react-redux"), reduxObservable = require("redux-observable"), r = require("react"), studioSecrets = require("@sanity/studio-secrets");
function _interopDefaultCompat(e) {
  return e && typeof e == "object" && "default" in e ? e : { default: e };
}
var OpenAI__default = /* @__PURE__ */ _interopDefaultCompat(OpenAI), r__default = /* @__PURE__ */ _interopDefaultCompat(r), extendStatics = function(d, b) {
  return extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) Object.prototype.hasOwnProperty.call(b2, p) && (d2[p] = b2[p]);
  }, extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b != "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f2, y2, t, g2 = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return g2.next = verb(0), g2.throw = verb(1), g2.return = verb(2), typeof Symbol == "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n) {
    return function(v2) {
      return step([n, v2]);
    };
  }
  function step(op) {
    if (f2) throw new TypeError("Generator is already executing.");
    for (; g2 && (g2 = 0, op[0] && (_2 = 0)), _2; ) try {
      if (f2 = 1, y2 && (t = op[0] & 2 ? y2.return : op[0] ? y2.throw || ((t = y2.return) && t.call(y2), 0) : y2.next) && !(t = t.call(y2, op[1])).done) return t;
      switch (y2 = 0, t && (op = [op[0] & 2, t.value]), op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          return _2.label++, { value: op[1], done: !1 };
        case 5:
          _2.label++, y2 = op[1], op = [0];
          continue;
        case 7:
          op = _2.ops.pop(), _2.trys.pop();
          continue;
        default:
          if (t = _2.trys, !(t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _2 = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _2.label = op[1];
            break;
          }
          if (op[0] === 6 && _2.label < t[1]) {
            _2.label = t[1], t = op;
            break;
          }
          if (t && _2.label < t[2]) {
            _2.label = t[2], _2.ops.push(op);
            break;
          }
          t[2] && _2.ops.pop(), _2.trys.pop();
          continue;
      }
      op = body.call(thisArg, _2);
    } catch (e) {
      op = [6, e], y2 = 0;
    } finally {
      f2 = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: !0 };
  }
}
function __values(o) {
  var s = typeof Symbol == "function" && Symbol.iterator, m2 = s && o[s], i = 0;
  if (m2) return m2.call(o);
  if (o && typeof o.length == "number") return {
    next: function() {
      return o && i >= o.length && (o = void 0), { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m2 = typeof Symbol == "function" && o[Symbol.iterator];
  if (!m2) return o;
  var i = m2.call(o), r2, ar = [], e;
  try {
    for (; (n === void 0 || n-- > 0) && !(r2 = i.next()).done; ) ar.push(r2.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      r2 && !r2.done && (m2 = i.return) && m2.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spreadArray$1(to, from2, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from2.length, ar; i < l; i++)
    (ar || !(i in from2)) && (ar || (ar = Array.prototype.slice.call(from2, 0, i)), ar[i] = from2[i]);
  return to.concat(ar || Array.prototype.slice.call(from2));
}
function __await(v2) {
  return this instanceof __await ? (this.v = v2, this) : new __await(v2);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g2 = generator.apply(thisArg, _arguments || []), i, q2 = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f2) {
    return function(v2) {
      return Promise.resolve(v2).then(f2, reject);
    };
  }
  function verb(n, f2) {
    g2[n] && (i[n] = function(v2) {
      return new Promise(function(a, b) {
        q2.push([n, v2, a, b]) > 1 || resume(n, v2);
      });
    }, f2 && (i[n] = f2(i[n])));
  }
  function resume(n, v2) {
    try {
      step(g2[n](v2));
    } catch (e) {
      settle(q2[0][3], e);
    }
  }
  function step(r2) {
    r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f2, v2) {
    f2(v2), q2.shift(), q2.length && resume(q2[0][0], q2[0][1]);
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m2 = o[Symbol.asyncIterator], i;
  return m2 ? m2.call(o) : (o = typeof __values == "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v2) {
      return new Promise(function(resolve, reject) {
        v2 = o[n](v2), settle(resolve, reject, v2.done, v2.value);
      });
    };
  }
  function settle(resolve, reject, d, v2) {
    Promise.resolve(v2).then(function(v3) {
      resolve({ value: v3, done: d });
    }, reject);
  }
}
function isFunction(value) {
  return typeof value == "function";
}
function createErrorClass(createImpl) {
  var _super = function(instance) {
    Error.call(instance), instance.stack = new Error().stack;
  }, ctorFunc = createImpl(_super);
  return ctorFunc.prototype = Object.create(Error.prototype), ctorFunc.prototype.constructor = ctorFunc, ctorFunc;
}
var UnsubscriptionError = createErrorClass(function(_super) {
  return function(errors) {
    _super(this), this.message = errors ? errors.length + ` errors occurred during unsubscription:
` + errors.map(function(err, i) {
      return i + 1 + ") " + err.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = errors;
  };
});
function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}
var Subscription = function() {
  function Subscription2(initialTeardown) {
    this.initialTeardown = initialTeardown, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return Subscription2.prototype.unsubscribe = function() {
    var e_1, _a, e_2, _b, errors;
    if (!this.closed) {
      this.closed = !0;
      var _parentage = this._parentage;
      if (_parentage)
        if (this._parentage = null, Array.isArray(_parentage))
          try {
            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              _parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return) && _a.call(_parentage_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        else
          _parentage.remove(this);
      var initialFinalizer = this.initialTeardown;
      if (isFunction(initialFinalizer))
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof UnsubscriptionError ? e.errors : [e];
        }
      var _finalizers = this._finalizers;
      if (_finalizers) {
        this._finalizers = null;
        try {
          for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;
            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors ?? [], err instanceof UnsubscriptionError ? errors = __spreadArray$1(__spreadArray$1([], __read(errors)), __read(err.errors)) : errors.push(err);
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            _finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return) && _b.call(_finalizers_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
      if (errors)
        throw new UnsubscriptionError(errors);
    }
  }, Subscription2.prototype.add = function(teardown) {
    var _a;
    if (teardown && teardown !== this)
      if (this.closed)
        execFinalizer(teardown);
      else {
        if (teardown instanceof Subscription2) {
          if (teardown.closed || teardown._hasParent(this))
            return;
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
  }, Subscription2.prototype._hasParent = function(parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  }, Subscription2.prototype._addParent = function(parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  }, Subscription2.prototype._removeParent = function(parent) {
    var _parentage = this._parentage;
    _parentage === parent ? this._parentage = null : Array.isArray(_parentage) && arrRemove(_parentage, parent);
  }, Subscription2.prototype.remove = function(teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove(_finalizers, teardown), teardown instanceof Subscription2 && teardown._removeParent(this);
  }, Subscription2.EMPTY = function() {
    var empty = new Subscription2();
    return empty.closed = !0, empty;
  }(), Subscription2;
}();
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  isFunction(finalizer) ? finalizer() : finalizer.unsubscribe();
}
var config = {
  Promise: void 0
}, timeoutProvider = {
  setTimeout: function(handler, timeout) {
    for (var args = [], _i = 2; _i < arguments.length; _i++)
      args[_i - 2] = arguments[_i];
    return setTimeout.apply(void 0, __spreadArray$1([handler, timeout], __read(args)));
  },
  clearTimeout: function(handle) {
    return clearTimeout(handle);
  },
  delegate: void 0
};
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function() {
    throw err;
  });
}
function noop() {
}
function errorContext(cb) {
  cb();
}
var Subscriber = function(_super) {
  __extends(Subscriber2, _super);
  function Subscriber2(destination) {
    var _this = _super.call(this) || this;
    return _this.isStopped = !1, destination ? (_this.destination = destination, isSubscription(destination) && destination.add(_this)) : _this.destination = EMPTY_OBSERVER, _this;
  }
  return Subscriber2.create = function(next2, error, complete) {
    return new SafeSubscriber(next2, error, complete);
  }, Subscriber2.prototype.next = function(value) {
    this.isStopped || this._next(value);
  }, Subscriber2.prototype.error = function(err) {
    this.isStopped || (this.isStopped = !0, this._error(err));
  }, Subscriber2.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, Subscriber2.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, _super.prototype.unsubscribe.call(this), this.destination = null);
  }, Subscriber2.prototype._next = function(value) {
    this.destination.next(value);
  }, Subscriber2.prototype._error = function(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  }, Subscriber2.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, Subscriber2;
}(Subscription), ConsumerObserver = function() {
  function ConsumerObserver2(partialObserver) {
    this.partialObserver = partialObserver;
  }
  return ConsumerObserver2.prototype.next = function(value) {
    var partialObserver = this.partialObserver;
    if (partialObserver.next)
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
  }, ConsumerObserver2.prototype.error = function(err) {
    var partialObserver = this.partialObserver;
    if (partialObserver.error)
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    else
      handleUnhandledError(err);
  }, ConsumerObserver2.prototype.complete = function() {
    var partialObserver = this.partialObserver;
    if (partialObserver.complete)
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
  }, ConsumerObserver2;
}(), SafeSubscriber = function(_super) {
  __extends(SafeSubscriber2, _super);
  function SafeSubscriber2(observerOrNext, error, complete) {
    var _this = _super.call(this) || this, partialObserver;
    return isFunction(observerOrNext) || !observerOrNext ? partialObserver = {
      next: observerOrNext ?? void 0,
      error: error ?? void 0,
      complete: complete ?? void 0
    } : partialObserver = observerOrNext, _this.destination = new ConsumerObserver(partialObserver), _this;
  }
  return SafeSubscriber2;
}(Subscriber);
function handleUnhandledError(error) {
  reportUnhandledError(error);
}
function defaultErrorHandler(err) {
  throw err;
}
var EMPTY_OBSERVER = {
  closed: !0,
  next: noop,
  error: defaultErrorHandler,
  complete: noop
}, observable = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function identity(x2) {
  return x2;
}
function pipeFromArray(fns) {
  return fns.length === 0 ? identity : fns.length === 1 ? fns[0] : function(input) {
    return fns.reduce(function(prev2, fn) {
      return fn(prev2);
    }, input);
  };
}
var Observable = function() {
  function Observable2(subscribe) {
    subscribe && (this._subscribe = subscribe);
  }
  return Observable2.prototype.lift = function(operator) {
    var observable2 = new Observable2();
    return observable2.source = this, observable2.operator = operator, observable2;
  }, Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
    var _this = this, subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
    return errorContext(function() {
      var _a = _this, operator = _a.operator, source = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    }), subscriber;
  }, Observable2.prototype._trySubscribe = function(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  }, Observable2.prototype.forEach = function(next2, promiseCtor) {
    var _this = this;
    return promiseCtor = getPromiseCtor(promiseCtor), new promiseCtor(function(resolve, reject) {
      var subscriber = new SafeSubscriber({
        next: function(value) {
          try {
            next2(value);
          } catch (err) {
            reject(err), subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      _this.subscribe(subscriber);
    });
  }, Observable2.prototype._subscribe = function(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  }, Observable2.prototype[observable] = function() {
    return this;
  }, Observable2.prototype.pipe = function() {
    for (var operations = [], _i = 0; _i < arguments.length; _i++)
      operations[_i] = arguments[_i];
    return pipeFromArray(operations)(this);
  }, Observable2.prototype.toPromise = function(promiseCtor) {
    var _this = this;
    return promiseCtor = getPromiseCtor(promiseCtor), new promiseCtor(function(resolve, reject) {
      var value;
      _this.subscribe(function(x2) {
        return value = x2;
      }, function(err) {
        return reject(err);
      }, function() {
        return resolve(value);
      });
    });
  }, Observable2.create = function(subscribe) {
    return new Observable2(subscribe);
  }, Observable2;
}();
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor ?? config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}
function hasLift(source) {
  return isFunction(source?.lift);
}
function operate(init) {
  return function(source) {
    if (hasLift(source))
      return source.lift(function(liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = function(_super) {
  __extends(OperatorSubscriber2, _super);
  function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    var _this = _super.call(this, destination) || this;
    return _this.onFinalize = onFinalize, _this.shouldUnsubscribe = shouldUnsubscribe, _this._next = onNext ? function(value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next, _this._error = onError ? function(err) {
      try {
        onError(err);
      } catch (err2) {
        destination.error(err2);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error, _this._complete = onComplete ? function() {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete, _this;
  }
  return OperatorSubscriber2.prototype.unsubscribe = function() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var closed_1 = this.closed;
      _super.prototype.unsubscribe.call(this), !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 || _a.call(this));
    }
  }, OperatorSubscriber2;
}(Subscriber);
function isScheduler(value) {
  return value && isFunction(value.schedule);
}
function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return isFunction(last(args)) ? args.pop() : void 0;
}
function popScheduler(args) {
  return isScheduler(last(args)) ? args.pop() : void 0;
}
var isArrayLike = function(x2) {
  return x2 && typeof x2.length == "number" && typeof x2 != "function";
};
function isPromise(value) {
  return isFunction(value?.then);
}
function isInteropObservable(input) {
  return isFunction(input[observable]);
}
function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction(obj?.[Symbol.asyncIterator]);
}
function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && typeof input == "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function getSymbolIterator() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var iterator = getSymbolIterator();
function isIterable(input) {
  return isFunction(input?.[iterator]);
}
function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function() {
    var reader, _a, value, done;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          reader = readableStream.getReader(), _b.label = 1;
        case 1:
          _b.trys.push([1, , 9, 10]), _b.label = 2;
        case 2:
          return [4, __await(reader.read())];
        case 3:
          return _a = _b.sent(), value = _a.value, done = _a.done, done ? [4, __await(void 0)] : [3, 5];
        case 4:
          return [2, _b.sent()];
        case 5:
          return [4, __await(value)];
        case 6:
          return [4, _b.sent()];
        case 7:
          return _b.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return reader.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function isReadableStreamLike(obj) {
  return isFunction(obj?.getReader);
}
function innerFrom(input) {
  if (input instanceof Observable)
    return input;
  if (input != null) {
    if (isInteropObservable(input))
      return fromInteropObservable(input);
    if (isArrayLike(input))
      return fromArrayLike(input);
    if (isPromise(input))
      return fromPromise(input);
    if (isAsyncIterable(input))
      return fromAsyncIterable(input);
    if (isIterable(input))
      return fromIterable(input);
    if (isReadableStreamLike(input))
      return fromReadableStreamLike(input);
  }
  throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
  return new Observable(function(subscriber) {
    var obs = obj[observable]();
    if (isFunction(obs.subscribe))
      return obs.subscribe(subscriber);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function fromArrayLike(array) {
  return new Observable(function(subscriber) {
    for (var i = 0; i < array.length && !subscriber.closed; i++)
      subscriber.next(array[i]);
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new Observable(function(subscriber) {
    promise.then(function(value) {
      subscriber.closed || (subscriber.next(value), subscriber.complete());
    }, function(err) {
      return subscriber.error(err);
    }).then(null, reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new Observable(function(subscriber) {
    var e_1, _a;
    try {
      for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        if (subscriber.next(value), subscriber.closed)
          return;
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return) && _a.call(iterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new Observable(function(subscriber) {
    process$1(asyncIterable, subscriber).catch(function(err) {
      return subscriber.error(err);
    });
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process$1(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1, e_2, _a;
  return __awaiter(this, void 0, void 0, function() {
    var value, e_2_1;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 11]), asyncIterable_1 = __asyncValues(asyncIterable), _b.label = 1;
        case 1:
          return [4, asyncIterable_1.next()];
        case 2:
          if (asyncIterable_1_1 = _b.sent(), !!asyncIterable_1_1.done) return [3, 4];
          if (value = asyncIterable_1_1.value, subscriber.next(value), subscriber.closed)
            return [2];
          _b.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return e_2_1 = _b.sent(), e_2 = { error: e_2_1 }, [3, 11];
        case 6:
          return _b.trys.push([6, , 9, 10]), asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return) ? [4, _a.call(asyncIterable_1)] : [3, 8];
        case 7:
          _b.sent(), _b.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (e_2) throw e_2.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return subscriber.complete(), [2];
      }
    });
  });
}
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
  delay === void 0 && (delay = 0), repeat === void 0 && (repeat = !1);
  var scheduleSubscription = scheduler.schedule(function() {
    work(), repeat ? parentSubscription.add(this.schedule(null, delay)) : this.unsubscribe();
  }, delay);
  if (parentSubscription.add(scheduleSubscription), !repeat)
    return scheduleSubscription;
}
function observeOn(scheduler, delay) {
  return delay === void 0 && (delay = 0), operate(function(source, subscriber) {
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.next(value);
      }, delay);
    }, function() {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.complete();
      }, delay);
    }, function(err) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.error(err);
      }, delay);
    }));
  });
}
function subscribeOn(scheduler, delay) {
  return delay === void 0 && (delay = 0), operate(function(source, subscriber) {
    subscriber.add(scheduler.schedule(function() {
      return source.subscribe(subscriber);
    }, delay));
  });
}
function scheduleObservable(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
function schedulePromise(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
function scheduleArray(input, scheduler) {
  return new Observable(function(subscriber) {
    var i = 0;
    return scheduler.schedule(function() {
      i === input.length ? subscriber.complete() : (subscriber.next(input[i++]), subscriber.closed || this.schedule());
    });
  });
}
function scheduleIterable(input, scheduler) {
  return new Observable(function(subscriber) {
    var iterator$1;
    return executeSchedule(subscriber, scheduler, function() {
      iterator$1 = input[iterator](), executeSchedule(subscriber, scheduler, function() {
        var _a, value, done;
        try {
          _a = iterator$1.next(), value = _a.value, done = _a.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }
        done ? subscriber.complete() : subscriber.next(value);
      }, 0, !0);
    }), function() {
      return isFunction(iterator$1?.return) && iterator$1.return();
    };
  });
}
function scheduleAsyncIterable(input, scheduler) {
  if (!input)
    throw new Error("Iterable cannot be null");
  return new Observable(function(subscriber) {
    executeSchedule(subscriber, scheduler, function() {
      var iterator2 = input[Symbol.asyncIterator]();
      executeSchedule(subscriber, scheduler, function() {
        iterator2.next().then(function(result) {
          result.done ? subscriber.complete() : subscriber.next(result.value);
        });
      }, 0, !0);
    });
  });
}
function scheduleReadableStreamLike(input, scheduler) {
  return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input))
      return scheduleObservable(input, scheduler);
    if (isArrayLike(input))
      return scheduleArray(input, scheduler);
    if (isPromise(input))
      return schedulePromise(input, scheduler);
    if (isAsyncIterable(input))
      return scheduleAsyncIterable(input, scheduler);
    if (isIterable(input))
      return scheduleIterable(input, scheduler);
    if (isReadableStreamLike(input))
      return scheduleReadableStreamLike(input, scheduler);
  }
  throw createInvalidObservableTypeError(input);
}
function from$1(input, scheduler) {
  return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}
function of() {
  for (var args = [], _i = 0; _i < arguments.length; _i++)
    args[_i] = arguments[_i];
  var scheduler = popScheduler(args);
  return from$1(args, scheduler);
}
function throwError(errorOrErrorFactory, scheduler) {
  var errorFactory = isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
    return errorOrErrorFactory;
  }, init = function(subscriber) {
    return subscriber.error(errorFactory());
  };
  return new Observable(init);
}
function map(project, thisArg) {
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  var buffer = [], active = 0, index = 0, isComplete = !1, checkComplete = function() {
    isComplete && !buffer.length && !active && subscriber.complete();
  }, outerNext = function(value) {
    return active < concurrent ? doInnerSub(value) : buffer.push(value);
  }, doInnerSub = function(value) {
    active++;
    var innerComplete = !1;
    innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function(innerValue) {
      subscriber.next(innerValue);
    }, function() {
      innerComplete = !0;
    }, void 0, function() {
      if (innerComplete)
        try {
          active--;
          for (var _loop_1 = function() {
            var bufferedValue = buffer.shift();
            innerSubScheduler || doInnerSub(bufferedValue);
          }; buffer.length && active < concurrent; )
            _loop_1();
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
    }));
  };
  return source.subscribe(createOperatorSubscriber(subscriber, outerNext, function() {
    isComplete = !0, checkComplete();
  })), function() {
  };
}
function mergeMap(project, resultSelector, concurrent) {
  return concurrent === void 0 && (concurrent = 1 / 0), isFunction(resultSelector) ? mergeMap(function(a, i) {
    return map(function(b, ii) {
      return resultSelector(a, b, i, ii);
    })(innerFrom(project(a, i)));
  }, concurrent) : (typeof resultSelector == "number" && (concurrent = resultSelector), operate(function(source, subscriber) {
    return mergeInternals(source, subscriber, project, concurrent);
  }));
}
function filter$1(predicate, thisArg) {
  return operate(function(source, subscriber) {
    var index = 0;
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return predicate.call(thisArg, value, index++) && subscriber.next(value);
    }));
  });
}
function catchError(selector) {
  return operate(function(source, subscriber) {
    var innerSub = null, syncUnsub = !1, handledResult;
    innerSub = source.subscribe(createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
      handledResult = innerFrom(selector(err, catchError(selector)(source))), innerSub ? (innerSub.unsubscribe(), innerSub = null, handledResult.subscribe(subscriber)) : syncUnsub = !0;
    })), syncUnsub && (innerSub.unsubscribe(), innerSub = null, handledResult.subscribe(subscriber));
  });
}
function switchMap(project, resultSelector) {
  return operate(function(source, subscriber) {
    var innerSubscriber = null, index = 0, isComplete = !1, checkComplete = function() {
      return isComplete && !innerSubscriber && subscriber.complete();
    };
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      innerSubscriber?.unsubscribe();
      var innerIndex = 0, outerIndex = index++;
      innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = createOperatorSubscriber(subscriber, function(innerValue) {
        return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
      }, function() {
        innerSubscriber = null, checkComplete();
      }));
    }, function() {
      isComplete = !0, checkComplete();
    }));
  });
}
function withLatestFrom() {
  for (var inputs = [], _i = 0; _i < arguments.length; _i++)
    inputs[_i] = arguments[_i];
  var project = popResultSelector(inputs);
  return operate(function(source, subscriber) {
    for (var len = inputs.length, otherValues = new Array(len), hasValue = inputs.map(function() {
      return !1;
    }), ready = !1, _loop_1 = function(i2) {
      innerFrom(inputs[i2]).subscribe(createOperatorSubscriber(subscriber, function(value) {
        otherValues[i2] = value, !ready && !hasValue[i2] && (hasValue[i2] = !0, (ready = hasValue.every(identity)) && (hasValue = null));
      }, noop));
    }, i = 0; i < len; i++)
      _loop_1(i);
    source.subscribe(createOperatorSubscriber(subscriber, function(value) {
      if (ready) {
        var values = __spreadArray$1([value], __read(otherValues));
        subscriber.next(project ? project.apply(void 0, __spreadArray$1([], __read(values))) : values);
      }
    }));
  });
}
function groq(strings, ...keys) {
  const lastIndex = strings.length - 1;
  return strings.slice(0, lastIndex).reduce((acc, str, i) => acc + str + keys[i], "") + strings[lastIndex];
}
const ORDER_DICTIONARY = {
  _createdAt: {
    asc: "Last created: Oldest first",
    desc: "Last created: Newest first"
  },
  _updatedAt: {
    asc: "Last updated: Oldest first",
    desc: "Last updated: Newest first"
  },
  mimeType: {
    asc: "MIME type: A to Z",
    desc: "MIME type: Z to A"
  },
  originalFilename: {
    asc: "File name: A to Z",
    desc: "File name: Z to A"
  },
  size: {
    asc: "File size: Smallest first",
    desc: "File size: Largest first"
  }
}, getOrderTitle = (field, direction) => ORDER_DICTIONARY[field][direction], checkTemplateName = (client, title) => function(source) {
  return source.pipe(
    mergeMap(() => from$1(
      client.fetch(groq`count(*[_type == "template" && title == $title])`, {
        title
      })
    )),
    mergeMap((existingTemplateCount) => existingTemplateCount > 0 ? throwError(
      () => ({
        message: "Template already exists",
        statusCode: 409
      })
    ) : of(!0))
  );
}, ORDER_OPTIONS = [
  {
    direction: "desc",
    field: "_createdAt"
  },
  {
    direction: "asc",
    field: "_createdAt"
  },
  {
    direction: "desc",
    field: "_updatedAt"
  },
  {
    direction: "asc",
    field: "_updatedAt"
  },
  {
    direction: "asc",
    field: "originalFilename"
  },
  {
    direction: "desc",
    field: "originalFilename"
  },
  // Divider
  null,
  {
    direction: "desc",
    field: "size"
  },
  {
    direction: "asc",
    field: "size"
  }
], administrator = "administrator", documentSanityPrefix = "sanity.", constructFilter = (props) => {
  let defaultFilter = `
    _type == "${props.type}"
  `;
  return props.filterValue && (defaultFilter += `&& title match "*${props.filterValue}*" || prompt match "*${props.filterValue}*"`), groq`${defaultFilter}`;
}, defaultOrder = ORDER_OPTIONS[0], initialState$7 = {
  filteredTemplates: [],
  allTemplates: [],
  allIds: [],
  byIds: {},
  inProgress: !1,
  creatingError: void 0,
  fetchCount: -1,
  fetching: !1,
  fetchingError: void 0,
  panelVisible: !0,
  pageIndex: 0,
  pageSize: 2,
  order: {
    direction: defaultOrder.direction,
    field: defaultOrder.field,
    title: getOrderTitle(defaultOrder.field, defaultOrder.direction)
  }
}, templateSlice = toolkit.createSlice({
  name: "templates",
  initialState: initialState$7,
  reducers: {
    createRequest(state, _action) {
      state.inProgress = !0, delete state.creatingError;
    },
    createComplete(state, action) {
      const { id, template } = action.payload;
      state.inProgress = !1, state.allTemplates.find((t) => t._id === id) || (template._id = id, state.allTemplates.push(template));
    },
    updateRequest(state, _action) {
      state.inProgress = !0, delete state.creatingError;
    },
    updateComplete(state, action) {
      const { id, template } = action.payload, templateIndex = state.allTemplates.findIndex((t) => t._id === id);
      state.allTemplates[templateIndex] = template, state.inProgress = !1;
    },
    createDelete(state, _action) {
      state.inProgress = !0, delete state.creatingError;
    },
    deleteComplete(state, action) {
      state.inProgress = !1;
      const templateIndex = state.allTemplates.findIndex((t) => t._id === action.payload.id);
      state.allTemplates.splice(templateIndex, 1);
    },
    createError(state, action) {
      state.inProgress = !1, state.creatingError = action.payload.error;
    },
    loadPageIndex(state, action) {
      state.pageIndex = action.payload.pageIndex;
    },
    loadNextPage() {
    },
    setSelectedValue(state, action) {
      const { template, value } = action.payload, templateToUpdate = state.allTemplates.find((t) => t._id === template._id);
      templateToUpdate && (templateToUpdate.selected = value);
    },
    filterItems(state, _action) {
      state.inProgress = !0, delete state.creatingError;
    },
    fetchComplete(state, action) {
      const { isFilter, templates } = action.payload;
      isFilter && (state.allTemplates = []), templates && templates.forEach((template) => {
        state.allTemplates.find((t) => t._id === template._id) || state.allTemplates.push(template);
      }), state.fetching = !1, state.inProgress = !1, state.fetchCount = templates.length || 0, delete state.fetchingError;
    },
    fetchRequest: {
      reducer: (state, _action) => {
        state.fetching = !0, delete state.fetchingError;
      },
      prepare: ({
        queryFilter,
        selector = "",
        sort = groq`order(_updatedAt desc)`,
        isFilter = !1
      }) => ({ payload: { query: groq`
          *[${queryFilter}] {
                _id,
                _createdAt,
                _updatedAt,
                prompt,
                title,
                promptPlaceholders,
                promptFieldBased
           } ${sort || selector ? "|" : ""} ${sort} ${selector}
        `, isFilter } })
    }
  }
}), templateUpdateEpic = (action$, state$, { client }) => action$.pipe(
  filter$1(templateSlice.actions.updateRequest.match),
  withLatestFrom(state$),
  mergeMap(([action, _state]) => {
    const { template } = action.payload;
    return of(action).pipe(
      mergeMap(
        () => client.observable.patch(template._id).set({ ...template }).commit()
      ),
      mergeMap((result) => of(templateSlice.actions.updateComplete({ id: result._id, template }))),
      catchError((error) => of(
        templateSlice.actions.createError({
          error: {
            message: error?.message || "Internal error",
            statusCode: error?.statusCode || 500
          },
          template
        })
      ))
    );
  })
), templateCreateEpic = (action$, state$, { client }) => action$.pipe(
  filter$1(templateSlice.actions.createRequest.match),
  withLatestFrom(state$),
  mergeMap(([action, _state]) => {
    const { template } = action.payload;
    return of(action).pipe(
      checkTemplateName(client, template.title),
      mergeMap(
        () => client.observable.create({
          _type: "template",
          ...template
        })
      ),
      mergeMap((result) => of(templateSlice.actions.createComplete({ id: result._id, template }))),
      catchError((error) => of(
        templateSlice.actions.createError({
          error: {
            message: error?.message || "Internal error",
            statusCode: error?.statusCode || 500
          },
          template
        })
      ))
    );
  })
), templateDeleteEpic = (action$, state$, { client }) => action$.pipe(
  filter$1(templateSlice.actions.createDelete.match),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    const { template } = action.payload;
    return of(action).pipe(
      mergeMap(() => client.observable.delete(template._id)),
      mergeMap((_result) => of(
        templateSlice.actions.deleteComplete({
          id: template._id,
          pageIndex: state.templates.pageIndex
        })
      )),
      catchError((error) => of(
        templateSlice.actions.createError({
          error: {
            message: error?.message || "Internal error",
            statusCode: error?.statusCode || 500
          },
          template
        })
      ))
    );
  })
), templatesFetchPageIndexEpic = (action$, state$) => action$.pipe(
  reduxObservable.ofType(templateActions.loadPageIndex.type, templateActions.deleteComplete.type),
  withLatestFrom(state$),
  switchMap(([action, state]) => {
    const isFilter = action.payload.isFilter, pageSize = state.templates.pageSize, start = action.payload.pageIndex * pageSize, end = start + pageSize, constructedFilter = constructFilter({
      type: "template"
    });
    return of(
      templateActions.fetchRequest({
        isFilter,
        queryFilter: constructedFilter,
        selector: groq`[${start}...${end}]`,
        sort: groq`order(${state.templates.order.direction})`
      })
    );
  })
), templatesFetchEpic = (action$, state$, { client }) => action$.pipe(
  filter$1(templateActions.fetchRequest.match),
  withLatestFrom(state$),
  switchMap(([action, _state]) => {
    const query = action.payload?.query, isFilter = action.payload?.isFilter ?? !1;
    return of(action).pipe(
      mergeMap(() => client.observable.fetch(query)),
      mergeMap((result) => of(templateActions.fetchComplete({ templates: result, isFilter }))),
      catchError(
        (error) => of(
          templateActions.createError({
            error: {
              message: error?.message || "Internal error",
              statusCode: error?.statusCode || 500
            }
          })
        )
      )
    );
  })
), templateFetchNextPageEpic = (action$, state$) => action$.pipe(
  filter$1(templateActions.loadNextPage.match),
  withLatestFrom(state$),
  switchMap(
    ([_action, state]) => of(templateActions.loadPageIndex({ pageIndex: state.templates.pageIndex + 1 }))
  )
), filterTemplatesEpic = (action$, state$) => action$.pipe(
  filter$1(templateActions.filterItems.match),
  withLatestFrom(state$),
  switchMap(([action, state]) => {
    const filterValue = action.payload.filter, constructedFilter = constructFilter({
      type: "template",
      filterValue
    });
    return of(
      templateActions.fetchRequest({
        queryFilter: constructedFilter,
        sort: groq`order(${state.templates.order.direction})`,
        isFilter: !0
      })
    );
  })
), selectAllTemplates = (state) => state.templates.allTemplates;
var templatesReducer = templateSlice.reducer;
const templateActions = templateSlice.actions, initialState$6 = {
  items: []
}, promptFieldBasedSlice = toolkit.createSlice({
  name: "promptFieldBased",
  initialState: initialState$6,
  reducers: {
    // Clear all items
    clear(state) {
      state.items = [];
    },
    // Clear specific item
    clearItem(state, action) {
      const name = action.payload?.fieldName;
      state.items = state.items.filter((item) => item.fieldName !== name);
    },
    // add user input item
    addItem(state, action) {
      state.items.push(action.payload.field);
    }
  }
}), selectAllFieldBasedPrompts = (state) => state.promptFieldBased.items, clearPromptFieldBased = (action$, state$) => action$.pipe(
  reduxObservable.ofType(templateActions.createComplete.type, templateActions.updateComplete.type),
  withLatestFrom(state$),
  mergeMap(([_action, _state]) => of(promptFieldBasedSlice.actions.clear()))
), promptFieldBasedActions = promptFieldBasedSlice.actions;
var promptFieldBasedReducer = promptFieldBasedSlice.reducer;
const initialState$5 = {
  inProgress: !1,
  prompt: "",
  generateImage: !1,
  configured: !1
}, geminiSlice = toolkit.createSlice({
  name: "gemini",
  initialState: initialState$5,
  reducers: {
    // Clear all dialogs
    clear(state) {
      state.prompt = "";
    },
    createRequest(state, _action) {
      state.inProgress = !0, delete state.creatingError;
    },
    createComplete(state, action) {
      state.inProgress = !1, state.prompt = action.payload.response;
    },
    createError(state, action) {
      state.inProgress = !1, state.creatingError = action.payload.error;
    },
    setConfigured(state, action) {
      state.configured = action.payload.isConfigured;
    },
    checkConfigured(_state) {
    }
  }
}), setIsConfiguredEpic = (action$, state$, props) => action$.pipe(
  filter$1(geminiSlice.actions.checkConfigured.match),
  withLatestFrom(state$),
  mergeMap(
    ([_action, _state]) => of(
      geminiSlice.actions.setConfigured({
        isConfigured: typeof props.geminiClient < "u"
      })
    )
  )
), generateGeminiPromptEpic = (action$, state$, props) => action$.pipe(
  filter$1(geminiSlice.actions.createRequest.match),
  withLatestFrom(state$),
  mergeMap(([action, _state]) => {
    const { template, prompt, model, instructions } = action.payload;
    return of(action).pipe(
      mergeMap(
        () => of(
          props.geminiClient?.getGenerativeModel({
            systemInstruction: instructions,
            model
          })
        )
      ),
      filter$1((genModel) => !!genModel),
      mergeMap(async (result) => await result.generateContent(prompt)),
      mergeMap((result) => of(
        geminiSlice.actions.createComplete({
          template,
          response: result.response.text()
        })
      )),
      catchError((error) => of(
        geminiSlice.actions.createError({
          error: {
            message: error?.message || "Internal error",
            statusCode: error?.statusCode || 500
          },
          template
        })
      ))
    );
  })
), geminiActions = geminiSlice.actions;
var geminiReducer = geminiSlice.reducer;
const initialState$4 = {
  items: []
}, dialogSlice = toolkit.createSlice({
  name: "dialog",
  initialState: initialState$4,
  reducers: {
    clear(state) {
      state.items = [];
    },
    clearItem(state, action) {
      const id = action.payload?.id;
      state.items = state.items.filter((item) => item.id !== id);
    },
    showTemplateDialog(state, action) {
      const { template } = action.payload, item = {
        id: "modifyTemplateDialog",
        type: "modifyTemplateDialog",
        template
      };
      template || delete item.template, state.items.push(item);
    },
    showsConfirmDeleteTemplateDialog(state, action) {
      state.items.push({
        id: "confirmDeleteTemplateDialog",
        type: "confirmDeleteTemplateDialog",
        template: action.payload.template
      });
    },
    showTemplatesDialog(state) {
      state.items.push({
        id: "dialogTemplates",
        type: "dialogTemplates"
      });
    },
    showCreatePromptDialog(state, action) {
      state.items.push({
        id: "dialogCreatePromptProperties",
        type: "dialogCreatePromptProperties",
        template: action.payload.template
      });
    }
  }
}), clearModifyDialog = (action$, state$) => action$.pipe(
  reduxObservable.ofType(templateActions.createComplete.type, templateActions.updateComplete.type),
  withLatestFrom(state$),
  mergeMap(([_action, _state]) => of(dialogActions.clear()))
), dialogActions = dialogSlice.actions;
var dialogReducer = dialogSlice.reducer;
const initialState$3 = {
  imageUrl: "",
  inProgress: !1
}, generateImageSlice = toolkit.createSlice({
  name: "generateImage",
  initialState: initialState$3,
  reducers: {
    // Clear all items
    clear(state) {
      state.imageUrl = "";
    },
    // Set image url
    setImageUrl(state, action) {
      state.imageUrl = action.payload.url, state.inProgress = !1;
    },
    startUploadImage(state, action) {
      state.inProgress = !0;
    },
    createError(state, action) {
      const { error } = action.payload;
      state.inProgress = !1, state.error = {
        message: error.message,
        statusCode: error.statusCode
      };
    }
  }
}), uploadImage = (action$, state$, { client }) => action$.pipe(
  filter$1(generateImageActions.startUploadImage.match),
  withLatestFrom(state$),
  mergeMap(
    ([action, _state]) => from$1(fetch(`data:image/png;base64,${action.payload.openAiImageUrl}`)).pipe(
      mergeMap((response) => response.blob())
    )
  ),
  mergeMap((blob) => from$1(client.observable.assets.upload("image", blob))),
  filter$1((result) => result.type === "response"),
  mergeMap((result) => of(generateImageActions.setImageUrl({ url: result?.body?.document?._id }))),
  catchError((error) => (console.error(error), of(
    generateImageActions.createError({
      error: {
        message: error?.message || "Internal error",
        statusCode: error?.statusCode || 500
      }
    })
  )))
), generateImageActions = generateImageSlice.actions;
var generatedImageReducer = generateImageSlice.reducer;
const initialState$2 = {
  inProgress: !1,
  prompt: "",
  generateImage: !1
}, openAiSlice = toolkit.createSlice({
  name: "openAi",
  initialState: initialState$2,
  reducers: {
    // Clear all dialogs
    clearPrompt(state) {
      state.prompt = "";
    },
    setGenerateImage(state, action) {
      state.generateImage = action.payload.value;
    },
    createRequest(state, _action) {
      state.inProgress = !0, delete state.creatingError;
    },
    createComplete(state, action) {
      const response = action.payload.response;
      state.prompt = response.choices[0].message.content, state.inProgress = !1;
    },
    createError(state, action) {
      state.inProgress = !1, state.creatingError = action.payload.error;
    }
  }
}), generateOpenAiPromptEpic = (action$, state$, props) => action$.pipe(
  filter$1(openAiSlice.actions.createRequest.match),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    const { template, prompt, model, role } = action.payload, generateImage = state.openAi.generateImage, message = {
      role,
      prompt
    };
    return of(action).pipe(
      mergeMap(() => from$1(
        generateImage ? props.openAiClient.images.generate({
          prompt,
          // eslint-disable-next-line camelcase
          response_format: "b64_json",
          size: "1024x1024",
          n: 1
        }) : props.openAiClient.chat.completions.create({
          messages: [message],
          model
        })
      )),
      mergeMap((response) => "data" in response && response.data ? of(
        generateImageActions.startUploadImage({
          openAiImageUrl: response.data[0].b64_json
        })
      ) : of(
        openAiSlice.actions.createComplete({
          template,
          response
        })
      )),
      catchError((error) => of(
        openAiSlice.actions.createError({
          error: {
            message: error?.message || "Internal error",
            statusCode: error?.statusCode || 500
          },
          template
        })
      ))
    );
  })
), openAiActions = openAiSlice.actions;
var openAiReducer = openAiSlice.reducer;
const initialState$1 = {
  items: []
}, notificationsSlice = toolkit.createSlice({
  name: "notifications",
  initialState: initialState$1,
  reducers: {
    addTemplateNotification(state, action) {
      const { template, status, title } = action.payload;
      state.items.push({
        template,
        status,
        title
      });
    },
    addAiNotification(state, action) {
      const { status, title } = action.payload;
      state.items.push({
        status,
        title
      });
    }
  }
}), notificationsGenericErrorEpic = (action$) => action$.pipe(
  reduxObservable.ofType(templateActions.createError.type),
  mergeMap((action) => {
    const error = action.payload?.error;
    return console.error(error), of(
      notificationsSlice.actions.addTemplateNotification({
        status: "error",
        title: `An error occurred: ${error.message}`
      })
    );
  })
), notificationsTemplateCreateCompleteEpic = (action$) => action$.pipe(
  filter$1(templateActions.createComplete.match),
  mergeMap(
    () => of(
      notificationsSlice.actions.addTemplateNotification({
        status: "success",
        title: "Template created"
      })
    )
  )
), notificationTemplateUpdateEpic = (action$) => action$.pipe(
  filter$1(templateActions.updateComplete.match),
  mergeMap(
    () => of(
      notificationsSlice.actions.addTemplateNotification({
        status: "success",
        title: "Template updated"
      })
    )
  )
), notificationTemplateDeleteEpic = (action$) => action$.pipe(
  filter$1(templateActions.deleteComplete.match),
  mergeMap(
    () => of(
      notificationsSlice.actions.addTemplateNotification({
        status: "error",
        title: "Template deleted"
      })
    )
  )
);
var notificationReducer = notificationsSlice.reducer;
const initialState = {
  placeholders: [],
  deletedPlaceholders: []
}, promptPlaceholderSlice = toolkit.createSlice({
  name: "promptPlaceHolder",
  initialState,
  reducers: {
    // add user input item
    addItem(state, action) {
      state.placeholders.push(action.payload.placeholder);
    },
    // Clear all items
    clear(state) {
      state.placeholders = [];
    },
    // Clear specific item
    deleteItem(state, action) {
      const name = action.payload.name;
      state.placeholders = state.placeholders.filter((item) => (item.name === name && (item.deleted = !0), !0));
    }
  }
}), selectAllPlaceholdersPrompts = (state) => state.promptPlaceholders.placeholders, selectAllDeletedPrompts = (state) => state.promptPlaceholders.deletedPlaceholders, clearPromptPlaceholders = (action$, state$) => action$.pipe(
  reduxObservable.ofType(templateActions.createComplete.type, templateActions.updateComplete.type),
  withLatestFrom(state$),
  mergeMap(([_action, _state]) => of(promptPlaceholderSlice.actions.clear()))
), promptPlaceHolderActions = promptPlaceholderSlice.actions;
var promptPlaceholders = promptPlaceholderSlice.reducer;
const rootEpic = reduxObservable.combineEpics(
  templateCreateEpic,
  notificationsTemplateCreateCompleteEpic,
  notificationTemplateUpdateEpic,
  notificationTemplateDeleteEpic,
  notificationsGenericErrorEpic,
  templatesFetchPageIndexEpic,
  templatesFetchEpic,
  templateUpdateEpic,
  templateDeleteEpic,
  templateFetchNextPageEpic,
  generateGeminiPromptEpic,
  clearPromptPlaceholders,
  clearModifyDialog,
  filterTemplatesEpic,
  generateOpenAiPromptEpic,
  uploadImage,
  setIsConfiguredEpic,
  clearPromptFieldBased
), rootReducers = {
  gemini: geminiReducer,
  openAi: openAiReducer,
  templates: templatesReducer,
  dialog: dialogReducer,
  notifications: notificationReducer,
  promptPlaceholders,
  generatedImage: generatedImageReducer,
  promptFieldBased: promptFieldBasedReducer
};
toolkit.combineReducers(rootReducers);
const ReduxProvider = (props) => {
  const epicMiddleware = reduxObservable.createEpicMiddleware({
    dependencies: {
      client: props.client,
      openAiClient: createOpenAiClient(props.apiKeys.openAiApiKey),
      geminiClient: createGeminiClient(props.apiKeys.geminiApiKey)
    }
  }), store = toolkit.configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: !1,
      thunk: !1
    }).prepend(epicMiddleware)
  });
  return epicMiddleware.run(rootEpic), /* @__PURE__ */ jsxRuntime.jsxs(reactRedux.Provider, { store, children: [
    " ",
    props.children,
    " "
  ] });
}, createOpenAiClient = (key) => {
  if (key)
    return new OpenAI__default.default({
      apiKey: key,
      dangerouslyAllowBrowser: !0
    });
}, createGeminiClient = (key) => {
  if (key)
    return new generativeAi.GoogleGenerativeAI(key);
}, useVersionedClient = () => sanity.useClient({ apiVersion: "2022-10-01" }), useTypedSelector = reactRedux.useSelector, defaultConfig = {
  geminiModel: "gemini-1.5-flash",
  instructions: "You are a friendly and helpful assistant and you should not use text markup when generating",
  openAiModel: "gpt-3.5-turbo",
  role: "assistant"
}, namespaceApis = "aiModelConfig", pluginConfigKeys = [
  {
    key: "geminiModel",
    title: "Gemini model (default gemini-1.5-flash)"
  },
  {
    key: "geminiInstructions",
    title: "Gemini instructions"
  },
  {
    key: "openAiModel",
    title: "OpenAI model (default gpt-3.5-turbo)"
  },
  {
    key: "openAiRole",
    title: "OpenAI Role"
  }
], useGetSecrets = () => studioSecrets.useSecrets(namespaceApis), useGetModelConfig = (getGeminiConfig) => {
  const { secrets } = useGetSecrets();
  return getGeminiConfig ? {
    model: secrets?.geminiModel || defaultConfig.geminiModel,
    instructions: secrets?.instructions || defaultConfig.instructions
  } : {
    model: secrets?.openAiModel || defaultConfig.openAiModel,
    role: secrets?.role || defaultConfig.role
  };
}, visualizePromptPlaceholder = (name) => `[${name.replace(" ", "_").toUpperCase()}]`, visualizePromptFieldBased = (field) => `[${field.documentType.replaceAll(" ", "_").toUpperCase()}.${field.fieldName.replaceAll(" ", "").toUpperCase()}]`, capitalizeWord = (value) => `${value.charAt(0).toUpperCase()}${value.slice(1)}`, Dialog = (props) => /* @__PURE__ */ jsxRuntime.jsx(ui.Dialog, { ...props, style: { position: "fixed" } }), AccessDeniedIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "access-denied",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M18.1568 6.84315C21.281 9.96734 21.281 15.0327 18.1568 18.1569C15.0326 21.281 9.96733 21.281 6.84313 18.1569C3.71894 15.0327 3.71894 9.96734 6.84313 6.84315C9.96733 3.71895 15.0326 3.71895 18.1568 6.84315ZM18.1568 6.84315L6.844 18.156",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
AccessDeniedIcon.displayName = "ForwardRef(AccessDeniedIcon)";
const ActivityIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "activity",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M21 15H19L15.5 7L11 18L8 12L6 15H4",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ActivityIcon.displayName = "ForwardRef(ActivityIcon)";
const AddCircleIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "add-circle",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M8 12.4H17M12.5 8V17M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
AddCircleIcon.displayName = "ForwardRef(AddCircleIcon)";
const AddCommentIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "add-comment",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M13 6.5H7.5C6.39543 6.5 5.5 7.39543 5.5 8.5V14.5C5.5 15.6046 6.39543 16.5 7.5 16.5H9.5V20.5L13.5 16.5H16.5C17.6046 16.5 18.5 15.6046 18.5 14.5V12M15 6.5H22M18.5 10V3",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
AddCommentIcon.displayName = "ForwardRef(AddCommentIcon)";
const AddDocumentIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "add-document",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 4.5V9.5H6.5", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M11.5 4.5H18.5V12M11.5 4.5L6.5 9.5M11.5 4.5V9.5H6.5M6.5 9.5V19.5H11M20 17.5H16.5M16.5 17.5H13M16.5 17.5V14M16.5 17.5V21",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
AddDocumentIcon.displayName = "ForwardRef(AddDocumentIcon)";
const AddIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "add",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12.5 5V20M5 12.5H20",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
AddIcon.displayName = "ForwardRef(AddIcon)";
const AddUserIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "add-user",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M4.17857 15.2368C3.10714 15.7632 1.5 16.8158 1.5 20.5H16.5C16.5 16.8158 15.2589 15.943 13.8214 15.2368C12.75 14.7105 10.6071 14.7105 10.6071 13.1316C10.6071 11.5526 11.6786 10.7632 11.6786 8.65789C11.6786 6.55263 10.6071 5.5 9 5.5C7.39285 5.5 6.32142 6.55263 6.32142 8.65789C6.32142 10.7632 7.39286 11.5526 7.39286 13.1316C7.39286 14.7105 5.25 14.7105 4.17857 15.2368Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M19.5 7V14M16 10.5H23",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
AddUserIcon.displayName = "ForwardRef(AddUserIcon)";
const ApiIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "api",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M5.93047 13.2107L6.66782 10.3728H6.73089L7.45854 13.2107H5.93047ZM8.17164 16H9.66089L7.56041 9H5.93047L3.82999 16H5.20767L5.65396 14.2876H7.73505L8.17164 16Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M10.5389 9V16H11.9166V13.7782H13.0323C14.541 13.7782 15.5015 12.8517 15.5015 11.3964C15.5015 9.92654 14.5701 9 13.1003 9H10.5389ZM11.9166 10.1303H12.751C13.6533 10.1303 14.1044 10.5475 14.1044 11.3867C14.1044 12.2308 13.6533 12.6431 12.751 12.6431H11.9166V10.1303Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M21.1675 16V14.8164H19.717V10.1836H21.1675V9H16.8889V10.1836H18.3393V14.8164H16.8889V16H21.1675Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
ApiIcon.displayName = "ForwardRef(ApiIcon)";
const ArchiveIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "archive",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12.5 10V17M20.5 7.5V20.5H4.5V7.5L7.5 4.5H17.5L20.5 7.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M4.5 7.5H20.5M16 14L12.5 17.5L9 14",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
ArchiveIcon.displayName = "ForwardRef(ArchiveIcon)";
const ArrowDownIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "arrow-down",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.5 19.5V5", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M18 14L12.5 19.5L7 14",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
ArrowDownIcon.displayName = "ForwardRef(ArrowDownIcon)";
const ArrowLeftIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "arrow-left",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5.5 12.5H20", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M11 18L5.5 12.5L11 7",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
ArrowLeftIcon.displayName = "ForwardRef(ArrowLeftIcon)";
const ArrowRightIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "arrow-right",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19.5 12.5H5", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M14 7L19.5 12.5L14 18",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
ArrowRightIcon.displayName = "ForwardRef(ArrowRightIcon)";
const ArrowTopRightIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "arrow-top-right",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.5 8.5L7 18", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9 8.5H16.5V16", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" })
      ]
    }
  );
});
ArrowTopRightIcon.displayName = "ForwardRef(ArrowTopRightIcon)";
const ArrowUpIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "arrow-up",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M7 11L12.5 5.5L18 11",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.5 5.5V20", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" })
      ]
    }
  );
});
ArrowUpIcon.displayName = "ForwardRef(ArrowUpIcon)";
const AsteriskIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "asterisk",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12.5 4V21M16.75 5.13879L8.25 19.8612M19.8612 8.25L5.13878 16.75M4.00002 12.5H21M5.13881 8.25L19.8612 16.75M8.25002 5.13879L16.75 19.8612",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
AsteriskIcon.displayName = "ForwardRef(AsteriskIcon)";
const BarChartIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "bar-chart",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M5.5 5V19.5H20M8.5 18V13M11.5 18V9M14.5 18V11M17.5 18V7",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
BarChartIcon.displayName = "ForwardRef(BarChartIcon)";
const BasketIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "basket",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M8.5 10.5H5L6.5 19.5H18.5L20 10.5H16.5M8.5 10.5L10.2721 5.18377C10.4082 4.77543 10.7903 4.5 11.2208 4.5H13.7792C14.2097 4.5 14.5918 4.77543 14.7279 5.18377L16.5 10.5M8.5 10.5H16.5M8.5 10.5L9.5 19.5M16.5 10.5L15.5 19.5M12.5 10.5V19.5M19.5 13.5H5.5M19 16.5H6",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
BasketIcon.displayName = "ForwardRef(BasketIcon)";
const BellIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "bell",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M10.5 17.5V18.5C10.5 20 11.5 20.5 12.5 20.5C13.5 20.5 14.5 20 14.5 18.5V17.5M5.5 17.5C6.5 16 6.5 15 6.5 12C6.5 8 8.5 5.5 12.5 5.5C16.5 5.5 18.5 8 18.5 12C18.5 15 18.5 16 19.5 17.5H5.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
BellIcon.displayName = "ForwardRef(BellIcon)";
const BillIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "bill",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M6.50001 5.5C8.50003 5.5 8.50003 8 8.50003 8V9.5M6.50001 5.5C4.5 5.5 4.5 8 4.5 8L4.50001 9.5H8.50003M6.50001 5.5C6.50001 5.5 15.8333 5.5 17.6667 5.5C19.5 5.5 19.5 8.5 19.5 8.5V20L17.6667 19L15.8333 20L14 19L12.1667 20L10.3334 19L8.50003 20V9.5M11 12.5H15M11 9.5H16M11 15.5H16",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
BillIcon.displayName = "ForwardRef(BillIcon)";
const BinaryDocumentIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "binary-document",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 4.5V9.5H6.5", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M9.5 12.5V17.5M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5ZM12.5 12.5V17.5H15.5V12.5H12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinecap: "square",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
BinaryDocumentIcon.displayName = "ForwardRef(BinaryDocumentIcon)";
const BlockContentIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "block-content",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21 7.60002L11 7.60003V6.40003L21 6.40002V7.60002Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21 11.2667L12.4833 11.2667V10.0667L21 10.0667V11.2667Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21 14.9334H13.9254V13.7334L21 13.7334V14.9334Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21 18.6002H4V17.4002H21V18.6002Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M9.86438 15.6H11.2L8.27623 7.60003H6.92377L4 15.6H5.29072L6.0371 13.4767H9.12362L9.86438 15.6ZM7.53546 9.05255H7.63086L8.80374 12.4344H6.35698L7.53546 9.05255Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
BlockContentIcon.displayName = "ForwardRef(BlockContentIcon)";
const BlockElementIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "block-element",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M5 19.5H20M5 5.5H20M6.5 8.5H18.5V16.5H6.5V8.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
BlockElementIcon.displayName = "ForwardRef(BlockElementIcon)";
const BlockquoteIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "blockquote",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M10 17.5H19M6 7.5H19M10 12.5H17M6.5 12V18",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
BlockquoteIcon.displayName = "ForwardRef(BlockquoteIcon)";
const BoldIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "bold",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M13.2087 18C15.5322 18 16.9731 16.793 16.9731 14.8844C16.9731 13.4812 15.9245 12.3949 14.4836 12.2892V12.1534C15.6001 11.9875 16.4526 10.9841 16.4526 9.82991C16.4526 8.14761 15.1927 7.11409 13.0804 7.11409H8.32019V18H13.2087ZM10.5985 8.85674H12.4995C13.5859 8.85674 14.212 9.37727 14.212 10.2448C14.212 11.1199 13.5406 11.6254 12.3109 11.6254H10.5985V8.85674ZM10.5985 16.2574V13.1643H12.575C13.9178 13.1643 14.6496 13.6924 14.6496 14.6882C14.6496 15.7066 13.9404 16.2574 12.6278 16.2574H10.5985Z",
          fill: "currentColor"
        }
      )
    }
  );
});
BoldIcon.displayName = "ForwardRef(BoldIcon)";
const BoltIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "bolt",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M18 11.5L9 21L11 13.5H7L16 4L14 11.5H18Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
BoltIcon.displayName = "ForwardRef(BoltIcon)";
const BookIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "book",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M20.5 17.5V5.5L12.5 6.5M20.5 17.5L12.5 18.5M20.5 17.5V18.5M4.5 17.5V5.5L12.5 6.5M4.5 17.5L12.5 18.5M4.5 17.5V18.5M12.5 18.5L4.5 19.5V18.5M12.5 18.5L20.5 19.5V18.5M12.5 18.5V6.5M12.5 18.5H4.5M12.5 18.5H20.5",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
BookIcon.displayName = "ForwardRef(BookIcon)";
const BottleIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "bottle",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M7.5 17.5L17.5 17.5M17.5 13C17.5 12.087 17.5 11.3518 17.5 11C17.5 8.5 14.5 9 14.5 7.37494L14.5 5.5M17.5 13C17.5 15.1229 17.5 18.7543 17.5 20.5022C17.5 21.0545 17.0523 21.5 16.5 21.5L8.5 21.5C7.94772 21.5 7.5 21.0547 7.5 20.5024C7.5 18.8157 7.5 15.3546 7.5 13M17.5 13L7.5 13M7.5 13C7.5 12.2538 7.5 11.5648 7.5 11C7.5 8.5 10.5 9 10.5 7.37494L10.5 5.5M10.5 5.5L10.5 3.99999C10.5 3.72385 10.7239 3.49999 11 3.49999L14 3.49999C14.2761 3.49999 14.5 3.72385 14.5 3.99999L14.5 5.5M10.5 5.5L14.5 5.5",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
BottleIcon.displayName = "ForwardRef(BottleIcon)";
const BugIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "bug",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M8.5 9.5V8.9C8.16863 8.9 7.9 9.16863 7.9 9.5H8.5ZM16.5 9.5H17.1C17.1 9.16863 16.8314 8.9 16.5 8.9V9.5ZM8.5 10.1H9.5V8.9H8.5V10.1ZM9.5 10.1H15.5V8.9H9.5V10.1ZM15.5 10.1H16.5V8.9H15.5V10.1ZM15.9 9.5V13.5H17.1V9.5H15.9ZM15.9 13.5C15.9 14.395 15.678 15.0264 15.3758 15.4797C15.0711 15.9367 14.6605 16.2489 14.2317 16.4633C13.8005 16.6789 13.3621 16.7897 13.0264 16.8457C12.8599 16.8734 12.7226 16.887 12.6291 16.8937C12.5825 16.897 12.5472 16.8986 12.5249 16.8994C12.5138 16.8997 12.506 16.8999 12.5018 16.9C12.4997 16.9 12.4984 16.9 12.4981 16.9C12.498 16.9 12.4981 16.9 12.4984 16.9C12.4985 16.9 12.4987 16.9 12.499 16.9C12.4991 16.9 12.4994 16.9 12.4995 16.9C12.4997 16.9 12.5 16.9 12.5 17.5C12.5 18.1 12.5003 18.1 12.5006 18.1C12.5008 18.1 12.5011 18.1 12.5014 18.1C12.5019 18.1 12.5025 18.1 12.5031 18.1C12.5044 18.1 12.5059 18.1 12.5077 18.1C12.5112 18.0999 12.5157 18.0999 12.5212 18.0998C12.532 18.0996 12.5467 18.0993 12.5649 18.0987C12.6013 18.0975 12.6519 18.0951 12.7146 18.0907C12.8399 18.0817 13.0151 18.0641 13.2236 18.0293C13.6379 17.9603 14.1995 17.8211 14.7683 17.5367C15.3395 17.2511 15.9289 16.8133 16.3742 16.1453C16.822 15.4736 17.1 14.605 17.1 13.5H15.9ZM12.5 17.5C12.5 16.9 12.5003 16.9 12.5005 16.9C12.5006 16.9 12.5009 16.9 12.501 16.9C12.5013 16.9 12.5015 16.9 12.5016 16.9C12.5019 16.9 12.502 16.9 12.5019 16.9C12.5016 16.9 12.5003 16.9 12.4982 16.9C12.494 16.8999 12.4862 16.8997 12.4751 16.8994C12.4528 16.8986 12.4175 16.897 12.3709 16.8937C12.2774 16.887 12.1401 16.8734 11.9736 16.8457C11.6379 16.7897 11.1995 16.6789 10.7683 16.4633C10.3395 16.2489 9.92894 15.9367 9.62423 15.4797C9.32203 15.0264 9.1 14.395 9.1 13.5H7.9C7.9 14.605 8.17797 15.4736 8.62577 16.1453C9.07106 16.8133 9.66049 17.2511 10.2317 17.5367C10.8005 17.8211 11.3621 17.9603 11.7764 18.0293C11.9849 18.0641 12.1601 18.0817 12.2854 18.0907C12.3481 18.0951 12.3987 18.0975 12.4351 18.0987C12.4533 18.0993 12.468 18.0996 12.4788 18.0998C12.4843 18.0999 12.4888 18.0999 12.4923 18.1C12.4941 18.1 12.4956 18.1 12.4969 18.1C12.4975 18.1 12.4981 18.1 12.4986 18.1C12.4989 18.1 12.4992 18.1 12.4994 18.1C12.4997 18.1 12.5 18.1 12.5 17.5ZM9.1 13.5V9.5H7.9V13.5H9.1ZM9.5 9.5C10.1 9.5 10.1 9.50028 10.1 9.50055C10.1 9.50063 10.1 9.50089 10.1 9.50104C10.1 9.50134 10.1 9.5016 10.1 9.50182C10.1 9.50225 10.1 9.5025 10.1 9.50259C10.1 9.50276 10.1 9.50224 10.1 9.50107C10.1001 9.49872 10.1002 9.49374 10.1004 9.4863C10.1009 9.4714 10.102 9.44678 10.1043 9.41384C10.1091 9.34776 10.1188 9.24945 10.1387 9.12989C10.179 8.88793 10.2586 8.5745 10.4117 8.26833C10.5636 7.96451 10.782 7.67894 11.0984 7.46798C11.4111 7.25953 11.855 7.1 12.5 7.1V5.9C11.645 5.9 10.9639 6.11547 10.4328 6.46952C9.90549 6.82106 9.56143 7.28549 9.33834 7.73167C9.11643 8.1755 9.00846 8.61207 8.95504 8.93261C8.92809 9.0943 8.91438 9.23036 8.90738 9.32835C8.90388 9.37744 8.90203 9.41727 8.90107 9.44632C8.90058 9.46085 8.90031 9.47272 8.90017 9.48172C8.9001 9.48622 8.90005 9.49001 8.90003 9.49306C8.90002 9.49459 8.90001 9.49593 8.90001 9.49709C8.9 9.49767 8.9 9.4982 8.9 9.49869C8.9 9.49893 8.9 9.49926 8.9 9.49938C8.9 9.4997 8.9 9.5 9.5 9.5ZM12.5 7.1C13.145 7.1 13.5889 7.25953 13.9016 7.46798C14.218 7.67894 14.4364 7.96451 14.5883 8.26833C14.7414 8.5745 14.821 8.88793 14.8613 9.12989C14.8812 9.24945 14.8909 9.34776 14.8957 9.41384C14.898 9.44678 14.8991 9.4714 14.8996 9.4863C14.8998 9.49374 14.8999 9.49872 14.9 9.50107C14.9 9.50224 14.9 9.50276 14.9 9.50259C14.9 9.5025 14.9 9.50225 14.9 9.50182C14.9 9.5016 14.9 9.50134 14.9 9.50104C14.9 9.50089 14.9 9.50063 14.9 9.50055C14.9 9.50028 14.9 9.5 15.5 9.5C16.1 9.5 16.1 9.4997 16.1 9.49938C16.1 9.49926 16.1 9.49893 16.1 9.49869C16.1 9.4982 16.1 9.49767 16.1 9.49709C16.1 9.49593 16.1 9.49459 16.1 9.49306C16.0999 9.49001 16.0999 9.48622 16.0998 9.48172C16.0997 9.47272 16.0994 9.46085 16.0989 9.44632C16.098 9.41727 16.0961 9.37744 16.0926 9.32835C16.0856 9.23036 16.0719 9.0943 16.045 8.93261C15.9915 8.61207 15.8836 8.1755 15.6617 7.73167C15.4386 7.28549 15.0945 6.82106 14.5672 6.46952C14.0361 6.11547 13.355 5.9 12.5 5.9V7.1ZM11.9 9.5V17.5H13.1V9.5H11.9ZM8.5 9.9C7.71525 9.9 7.10887 9.51034 6.67426 9.07574C6.45859 8.86006 6.29547 8.64279 6.18673 8.47968C6.1327 8.39863 6.09302 8.33235 6.06782 8.28825C6.05524 8.26624 6.04634 8.24988 6.04113 8.24011C6.03853 8.23523 6.03685 8.232 6.0361 8.23055C6.03573 8.22983 6.03559 8.22955 6.03568 8.22973C6.03573 8.22982 6.03583 8.23003 6.03599 8.23035C6.03607 8.23051 6.03617 8.2307 6.03628 8.23092C6.03634 8.23103 6.03643 8.23122 6.03646 8.23127C6.03656 8.23147 6.03666 8.23167 5.5 8.5C4.96334 8.76833 4.96345 8.76855 4.96357 8.76877C4.96361 8.76886 4.96372 8.76909 4.96381 8.76926C4.96398 8.7696 4.96417 8.76998 4.96437 8.77038C4.96478 8.77119 4.96525 8.77212 4.96579 8.77317C4.96685 8.77527 4.96818 8.77786 4.96976 8.78092C4.97292 8.78704 4.9771 8.79505 4.98231 8.80481C4.99272 8.82434 5.00726 8.85094 5.02593 8.88362C5.06323 8.9489 5.1173 9.03887 5.18827 9.14532C5.32953 9.35721 5.54141 9.63994 5.82574 9.92426C6.39113 10.4897 7.28475 11.1 8.5 11.1V9.9ZM16.5 11.1C17.7153 11.1 18.6089 10.4897 19.1743 9.92426C19.4586 9.63994 19.6705 9.35721 19.8117 9.14532C19.8827 9.03887 19.9368 8.9489 19.9741 8.88362C19.9927 8.85094 20.0073 8.82434 20.0177 8.80481C20.0229 8.79505 20.0271 8.78704 20.0302 8.78092C20.0318 8.77786 20.0331 8.77527 20.0342 8.77317C20.0347 8.77212 20.0352 8.77119 20.0356 8.77038C20.0358 8.76998 20.036 8.7696 20.0362 8.76926C20.0363 8.76909 20.0364 8.76886 20.0364 8.76877C20.0365 8.76855 20.0367 8.76833 19.5 8.5C18.9633 8.23167 18.9634 8.23147 18.9635 8.23127C18.9636 8.23122 18.9637 8.23103 18.9637 8.23092C18.9638 8.2307 18.9639 8.23051 18.964 8.23035C18.9642 8.23003 18.9643 8.22982 18.9643 8.22973C18.9644 8.22955 18.9643 8.22983 18.9639 8.23055C18.9632 8.232 18.9615 8.23523 18.9589 8.24011C18.9537 8.24988 18.9448 8.26624 18.9322 8.28825C18.907 8.33235 18.8673 8.39863 18.8133 8.47968C18.7045 8.64279 18.5414 8.86006 18.3257 9.07574C17.8911 9.51034 17.2847 9.9 16.5 9.9V11.1ZM16.5 13.1H20V11.9H16.5V13.1ZM16.5 15.1C17.2847 15.1 17.8911 15.4897 18.3257 15.9243C18.5414 16.1399 18.7045 16.3572 18.8133 16.5203C18.8673 16.6014 18.907 16.6676 18.9322 16.7117C18.9448 16.7338 18.9537 16.7501 18.9589 16.7599C18.9615 16.7648 18.9632 16.768 18.9639 16.7694C18.9643 16.7702 18.9644 16.7705 18.9643 16.7703C18.9643 16.7702 18.9642 16.77 18.964 16.7697C18.9639 16.7695 18.9638 16.7693 18.9637 16.7691C18.9637 16.769 18.9636 16.7688 18.9635 16.7687C18.9634 16.7685 18.9633 16.7683 19.5 16.5C20.0367 16.2317 20.0365 16.2315 20.0364 16.2312C20.0364 16.2311 20.0363 16.2309 20.0362 16.2307C20.036 16.2304 20.0358 16.23 20.0356 16.2296C20.0352 16.2288 20.0347 16.2279 20.0342 16.2268C20.0331 16.2247 20.0318 16.2221 20.0302 16.2191C20.0271 16.213 20.0229 16.205 20.0177 16.1952C20.0073 16.1757 19.9927 16.1491 19.9741 16.1164C19.9368 16.0511 19.8827 15.9611 19.8117 15.8547C19.6705 15.6428 19.4586 15.3601 19.1743 15.0757C18.6089 14.5103 17.7153 13.9 16.5 13.9V15.1ZM8.5 13.9C7.28475 13.9 6.39113 14.5103 5.82574 15.0757C5.54141 15.3601 5.32953 15.6428 5.18827 15.8547C5.1173 15.9611 5.06323 16.0511 5.02593 16.1164C5.00726 16.1491 4.99272 16.1757 4.98231 16.1952C4.9771 16.205 4.97292 16.213 4.96976 16.2191C4.96818 16.2221 4.96685 16.2247 4.96579 16.2268C4.96525 16.2279 4.96478 16.2288 4.96437 16.2296C4.96417 16.23 4.96398 16.2304 4.96381 16.2307C4.96372 16.2309 4.96361 16.2311 4.96357 16.2312C4.96345 16.2315 4.96334 16.2317 5.5 16.5C6.03666 16.7683 6.03656 16.7685 6.03646 16.7687C6.03643 16.7688 6.03634 16.769 6.03628 16.7691C6.03617 16.7693 6.03607 16.7695 6.03599 16.7697C6.03583 16.77 6.03573 16.7702 6.03568 16.7703C6.03559 16.7705 6.03573 16.7702 6.0361 16.7694C6.03685 16.768 6.03853 16.7648 6.04113 16.7599C6.04634 16.7501 6.05524 16.7338 6.06782 16.7117C6.09302 16.6676 6.1327 16.6014 6.18673 16.5203C6.29547 16.3572 6.45859 16.1399 6.67426 15.9243C7.10887 15.4897 7.71525 15.1 8.5 15.1V13.9ZM8.5 11.9H5V13.1H8.5V11.9Z",
          fill: "currentColor"
        }
      )
    }
  );
});
BugIcon.displayName = "ForwardRef(BugIcon)";
const BulbFilledIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "bulb-filled",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M16.4272 14.3368C15.8273 15.1773 15.5 16.1794 15.5 17.212V18.5C15.5 19.0523 15.0523 19.5 14.5 19.5H14V20.5C14 21.0523 13.5523 21.5 13 21.5H12C11.4477 21.5 11 21.0523 11 20.5V19.5H10.5C9.94772 19.5 9.5 19.0523 9.5 18.5V17.212C9.5 16.1794 9.17266 15.1773 8.57284 14.3368C7.60216 12.9767 7 11.94 7 10C7 7 9.5 4.5 12.5 4.5C15.5 4.5 18 7 18 10C18 11.94 17.3978 12.9767 16.4272 14.3368Z",
          fill: "currentColor",
          stroke: "currentColor",
          strokeWidth: 1.2
        }
      )
    }
  );
});
BulbFilledIcon.displayName = "ForwardRef(BulbFilledIcon)";
const BulbOutlineIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "bulb-outline",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M9.5 16.5H15.5M11 20V20.5C11 21.0523 11.4477 21.5 12 21.5H13C13.5523 21.5 14 21.0523 14 20.5V20M18 10C18 11.94 17.3978 12.9767 16.4272 14.3368C15.8273 15.1773 15.5 16.1794 15.5 17.212V18.5C15.5 19.0523 15.0523 19.5 14.5 19.5H10.5C9.94772 19.5 9.5 19.0523 9.5 18.5V17.212C9.5 16.1794 9.17266 15.1773 8.57284 14.3368C7.60216 12.9767 7 11.94 7 10C7 7 9.5 4.5 12.5 4.5C15.5 4.5 18 7 18 10Z",
          stroke: "currentColor",
          strokeWidth: 1.2
        }
      )
    }
  );
});
BulbOutlineIcon.displayName = "ForwardRef(BulbOutlineIcon)";
const CalendarIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "calendar",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M5.5 18.5H19.5V6.5H5.5V18.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M16.5 8V4M8.5 8V4M8 12.5H10M8 15.5H10M11.5 12.5H13.5M11.5 15.5H13.5M15 12.5H17M15 15.5H17M12.5 8V4M5.5 9.5H19.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
CalendarIcon.displayName = "ForwardRef(CalendarIcon)";
const CaseIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "case",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M9 8.5122V6C9 5.44772 9.44772 5 10 5H15C15.5523 5 16 5.44772 16 6V8.5122M4.5 12V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H19.5C20.0523 19.5 20.5 19.0523 20.5 18.5V12M4.5 12V9.5122C4.5 8.95991 4.94772 8.5122 5.5 8.5122H19.5C20.0523 8.5122 20.5 8.95991 20.5 9.5122V12M4.5 12L11.7978 14.7367C12.2505 14.9064 12.7495 14.9064 13.2022 14.7367L20.5 12",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
CaseIcon.displayName = "ForwardRef(CaseIcon)";
const ChartUpwardIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "chart-upward",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M5.5 5V19.5H20M7.5 16L11.5 11.5L15.5 14L19.5 8.5",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ChartUpwardIcon.displayName = "ForwardRef(ChartUpwardIcon)";
const CheckmarkCircleIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "checkmark-circle",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M9.5 12.1316L11.7414 14.5L16 10M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
CheckmarkCircleIcon.displayName = "ForwardRef(CheckmarkCircleIcon)";
const CheckmarkIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "checkmark",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M5.5 11.5L10.5 16.5L19.5 7.60001",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
CheckmarkIcon.displayName = "ForwardRef(CheckmarkIcon)";
const ChevronDownIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "chevron-down",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M16 10.5L12.5 14L9 10.5",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ChevronDownIcon.displayName = "ForwardRef(ChevronDownIcon)";
const ChevronLeftIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "chevron-left",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M14.5 16L11 12.5L14.5 9",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ChevronLeftIcon.displayName = "ForwardRef(ChevronLeftIcon)";
const ChevronRightIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "chevron-right",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M10.5 9L14 12.5L10.5 16",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ChevronRightIcon.displayName = "ForwardRef(ChevronRightIcon)";
const ChevronUpIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "chevron-up",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M9 14.5L12.5 11L16 14.5",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ChevronUpIcon.displayName = "ForwardRef(ChevronUpIcon)";
const CircleIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "circle",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "circle",
        {
          cx: 12.5,
          cy: 12.5,
          r: 8,
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
CircleIcon.displayName = "ForwardRef(CircleIcon)";
const ClipboardIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "clipboard",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M8 5.5H6.5V19.5H18.5V5.5H17M12.5 3C11.5 3 11.5 4.5 11 4.5C10 4.5 9.5 5 9.5 6.5H15.6C15.6 5 15 4.5 14 4.5C13.5 4.5 13.5 3 12.5 3Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ClipboardIcon.displayName = "ForwardRef(ClipboardIcon)";
const ClipboardImageIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "clipboard-image",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M8 5.5H6.5V19.5H10.5M17 5.5H18.5V11.5M10.5 18.5L12.73 15.8983C13.1327 15.4285 13.8613 15.4335 14.2575 15.909L15.299 17.1588C15.6754 17.6105 16.3585 17.6415 16.7743 17.2257L16.9903 17.0097C17.2947 16.7053 17.7597 16.6298 18.1447 16.8223L20.5 18M10.5 11.5H20.5V21.5H10.5V11.5ZM12.5 3C11.5 3 11.5 4.5 11 4.5C10 4.5 9.5 5 9.5 6.5H15.6C15.6 5 15 4.5 14 4.5C13.5 4.5 13.5 3 12.5 3Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ClipboardImageIcon.displayName = "ForwardRef(ClipboardImageIcon)";
const ClockIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "clock",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12.5 8V12.5L15.5 15.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ClockIcon.displayName = "ForwardRef(ClockIcon)";
const CloseCircleIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "close-circle",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M9.5 15.5L12.5 12.5M12.5 12.5L15.5 9.5M12.5 12.5L9.5 9.5M12.5 12.5L15.5 15.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
CloseCircleIcon.displayName = "ForwardRef(CloseCircleIcon)";
const CloseIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "close",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M18 7L7 18M7 7L18 18",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
CloseIcon.displayName = "ForwardRef(CloseIcon)";
const CodeBlockIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "code-block",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M11 15L8.5 12.5L11 10M14 10L16.5 12.5L14 15M5.5 6.5H19.5V18.5H5.5V6.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
CodeBlockIcon.displayName = "ForwardRef(CodeBlockIcon)";
const CodeIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "code",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M11 16L7.5 12.5L11 9M14 9L17.5 12.5L14 16",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
CodeIcon.displayName = "ForwardRef(CodeIcon)";
const CogIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "cog",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M14.0666 6.19428L13.719 5.32531C13.5196 4.82685 13.0369 4.5 12.5 4.5C11.9631 4.5 11.4804 4.82685 11.281 5.32531L10.9334 6.19428C10.7984 6.53187 10.5328 6.80068 10.1969 6.93982C9.86098 7.07896 9.48313 7.07666 9.14894 6.93343L8.2887 6.56476C7.79525 6.35328 7.22276 6.46353 6.84315 6.84315C6.46353 7.22276 6.35328 7.79525 6.56476 8.2887L6.93343 9.14894C7.07666 9.48313 7.07896 9.86098 6.93982 10.1969C6.80068 10.5328 6.53187 10.7984 6.19428 10.9334L5.32531 11.281C4.82685 11.4804 4.5 11.9631 4.5 12.5C4.5 13.0369 4.82685 13.5196 5.32531 13.719L6.19428 14.0666C6.53187 14.2016 6.80068 14.4672 6.93982 14.8031C7.07896 15.139 7.07666 15.5169 6.93343 15.8511L6.56476 16.7113C6.35328 17.2048 6.46353 17.7772 6.84315 18.1569C7.22276 18.5365 7.79525 18.6467 8.2887 18.4352L9.14894 18.0666C9.48314 17.9233 9.86099 17.921 10.1969 18.0602C10.5328 18.1993 10.7984 18.4681 10.9334 18.8057L11.281 19.6747C11.4804 20.1732 11.9631 20.5 12.5 20.5C13.0369 20.5 13.5196 20.1731 13.719 19.6747L14.0666 18.8057C14.2016 18.4681 14.4672 18.1993 14.8031 18.0602C15.139 17.921 15.5169 17.9233 15.8511 18.0666L16.7113 18.4352C17.2047 18.6467 17.7772 18.5365 18.1569 18.1569C18.5365 17.7772 18.6467 17.2047 18.4352 16.7113L18.0666 15.8511C17.9233 15.5169 17.921 15.139 18.0602 14.8031C18.1993 14.4672 18.4681 14.2016 18.8057 14.0666L19.6747 13.719C20.1731 13.5196 20.5 13.0369 20.5 12.5C20.5 11.9631 20.1731 11.4804 19.6747 11.281L18.8057 10.9334C18.4681 10.7984 18.1993 10.5328 18.0602 10.1969C17.921 9.86098 17.9233 9.48313 18.0666 9.14894L18.4352 8.2887C18.6467 7.79525 18.5365 7.22276 18.1569 6.84314C17.7772 6.46353 17.2048 6.35328 16.7113 6.56476L15.8511 6.93343C15.5169 7.07666 15.139 7.07896 14.8031 6.93982C14.4672 6.80068 14.2016 6.53187 14.0666 6.19428Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M16 12.5C16 14.433 14.433 16 12.5 16C10.567 16 9 14.433 9 12.5C9 10.567 10.567 9 12.5 9C14.433 9 16 10.567 16 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
CogIcon.displayName = "ForwardRef(CogIcon)";
const CollapseIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "collapse",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M6 14.5L10.5 14.5V19M19 10.5H14.5L14.5 6",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M10.5 14.5L6 19M14.5 10.5L19 6",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
CollapseIcon.displayName = "ForwardRef(CollapseIcon)";
const ColorWheelIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "color-wheel",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M9.43853 5.10896L11.1606 9.26642M13.8394 15.7336L15.5615 19.891M15.7336 11.1606L19.891 9.43853M9.26642 13.8394L5.10896 15.5615M5.3139 9.52342L9.23359 11.147M15.7664 13.853L19.6861 15.4766M13.853 9.23359L15.4766 5.3139M9.52342 19.6861L11.147 15.7664M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5ZM16 12.5C16 14.433 14.433 16 12.5 16C10.567 16 9 14.433 9 12.5C9 10.567 10.567 9 12.5 9C14.433 9 16 10.567 16 12.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ColorWheelIcon.displayName = "ForwardRef(ColorWheelIcon)";
const CommentIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "comment",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M7.5 16.5H9.5V20.5L13.5 16.5H17.5C18.6046 16.5 19.5 15.6046 19.5 14.5V8.5C19.5 7.39543 18.6046 6.5 17.5 6.5H7.5C6.39543 6.5 5.5 7.39543 5.5 8.5V14.5C5.5 15.6046 6.39543 16.5 7.5 16.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
CommentIcon.displayName = "ForwardRef(CommentIcon)";
const ComponentIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "component",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M8.5 8.5L12.5 12.5M12.5 12.5L16.5 16.5M12.5 12.5L16.5 8.5M12.5 12.5L8.5 16.5M12.5 4L21 12.5L12.5 21L4 12.5L12.5 4Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ComponentIcon.displayName = "ForwardRef(ComponentIcon)";
const ComposeIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "compose",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M17 6L19 8M14 5.5H5.5V19.5H19.5V11M9 16L9.5 13.5L19 4L21 6L11.5 15.5L9 16Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ComposeIcon.displayName = "ForwardRef(ComposeIcon)";
const ConfettiIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "confetti",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M16.5 6.25C16.9142 6.25 17.25 5.91421 17.25 5.5C17.25 5.08579 16.9142 4.75 16.5 4.75C16.0858 4.75 15.75 5.08579 15.75 5.5C15.75 5.91421 16.0858 6.25 16.5 6.25Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M19.5 16.25C19.9142 16.25 20.25 15.9142 20.25 15.5C20.25 15.0858 19.9142 14.75 19.5 14.75C19.0858 14.75 18.75 15.0858 18.75 15.5C18.75 15.9142 19.0858 16.25 19.5 16.25Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M13 4C11 6 14.5 5.5 12.5 7.5M21 12C19 14 19.5 10.5 17.5 12.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M16.066 16.4904C15.3965 17.1598 13.1126 15.9613 10.9647 13.8135C8.81684 11.6656 7.61835 9.38165 8.28782 8.71218M16.066 16.4904C16.7355 15.8209 15.537 13.537 13.3891 11.3891C11.2412 9.2412 8.95729 8.04271 8.28782 8.71218M16.066 16.4904C15.8661 16.6902 15.6277 16.8474 15.3657 16.952L6.99288 20.296C6.26931 20.5849 5.44878 20.4193 4.9038 19.8744C4.35883 19.3294 4.19324 18.5089 4.48221 17.7853L7.82614 9.41242C7.93077 9.15042 8.08793 8.91208 8.28782 8.71218M20 5C20 14 11.5 5.32688 11.5 14.3269",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
ConfettiIcon.displayName = "ForwardRef(ConfettiIcon)";
const ControlsIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "controls",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M6.5 5V7.5M6.5 7.5C5.39543 7.5 4.5 8.39543 4.5 9.5C4.5 10.6046 5.39543 11.5 6.5 11.5M6.5 7.5C7.60457 7.5 8.5 8.39543 8.5 9.5C8.5 10.6046 7.60457 11.5 6.5 11.5M6.5 11.5V20M12.5 5V13.5M12.5 13.5C11.3954 13.5 10.5 14.3954 10.5 15.5C10.5 16.6046 11.3954 17.5 12.5 17.5M12.5 13.5C13.6046 13.5 14.5 14.3954 14.5 15.5C14.5 16.6046 13.6046 17.5 12.5 17.5M12.5 17.5V20M18.5 5V7.5M18.5 7.5C17.3954 7.5 16.5 8.39543 16.5 9.5C16.5 10.6046 17.3954 11.5 18.5 11.5M18.5 7.5C19.6046 7.5 20.5 8.39543 20.5 9.5C20.5 10.6046 19.6046 11.5 18.5 11.5M18.5 11.5V20",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ControlsIcon.displayName = "ForwardRef(ControlsIcon)";
const CopyIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "copy",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M8.5 8.5H5.5V20.5H16.5V16.5M19.5 4.5H8.5V16.5H19.5V4.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
CopyIcon.displayName = "ForwardRef(CopyIcon)";
const CreditCardIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "credit-card",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M20.5 9.5H4.5V11.5H20.5V9.5Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M7 15.5H14M5.5 18.5H19.5C20.0523 18.5 20.5 18.0523 20.5 17.5V7.5C20.5 6.94772 20.0523 6.5 19.5 6.5H5.5C4.94772 6.5 4.5 6.94772 4.5 7.5V17.5C4.5 18.0523 4.94772 18.5 5.5 18.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
CreditCardIcon.displayName = "ForwardRef(CreditCardIcon)";
const CropIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "crop",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M9.5 5V15.5H20M5 9.5H15.5V20",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
CropIcon.displayName = "ForwardRef(CropIcon)";
const CubeIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "cube",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M4.5 8L12.5 3L20.5 8V17L12.5 22L4.5 17V8Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12.5 22V13M12.5 13L4.5 8M12.5 13L20.5 8",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
CubeIcon.displayName = "ForwardRef(CubeIcon)";
const DashboardIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "dashboard",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M14.5 19.5V12.5M10.5 12.5V5.5M5.5 12.5H19.5M5.5 19.5H19.5V5.5H5.5V19.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
DashboardIcon.displayName = "ForwardRef(DashboardIcon)";
const DatabaseIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "database",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M18.5 7V17.5C18.5 19.0594 16.0504 20.5 12.5 20.5C8.9496 20.5 6.5 19.0594 6.5 17.5V7M18.5 7C18.5 8.45543 15.8137 9.5 12.5 9.5C9.18629 9.5 6.5 8.45543 6.5 7C6.5 5.54457 9.18629 4.5 12.5 4.5C15.8137 4.5 18.5 5.54457 18.5 7Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
DatabaseIcon.displayName = "ForwardRef(DatabaseIcon)";
const DesktopIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "desktop",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M4.5 13.5V15.5C4.5 16.0523 4.94772 16.5 5.5 16.5H12.5M4.5 13.5V6.5C4.5 5.94772 4.94772 5.5 5.5 5.5H19.5C20.0523 5.5 20.5 5.94772 20.5 6.5V13.5M4.5 13.5H20.5M20.5 13.5V15.5C20.5 16.0523 20.0523 16.5 19.5 16.5H12.5M12.5 16.5V19.5M12.5 19.5H8M12.5 19.5H17",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
DesktopIcon.displayName = "ForwardRef(DesktopIcon)";
const DiamondIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "diamond",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M21 10.5L12.5 21M21 10.5L18 5.5H11M21 10.5H16M12.5 21L4 10.5M12.5 21L9 10.5M12.5 21L16 10.5M4 10.5L7 5.5H11M4 10.5H9M9 10.5H12.5H16M9 10.5L11 5.5M16 10.5L14.5 5.5H11",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
DiamondIcon.displayName = "ForwardRef(DiamondIcon)";
const DocumentIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "document",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 4.5V9.5H6.5", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M11.5 4.5H18.5V20.5H6.5L6.5 9.5M11.5 4.5L6.5 9.5M11.5 4.5V9.5H6.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
DocumentIcon.displayName = "ForwardRef(DocumentIcon)";
const DocumentPdfIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "document-pdf",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12.7127 13.8012L12.7193 13.77C12.8488 13.2366 13.0117 12.5716 12.8845 11.969C12.7997 11.4937 12.4493 11.3084 12.1503 11.295C11.7977 11.2794 11.483 11.4803 11.4049 11.7726C11.2576 12.3082 11.3893 13.0402 11.6303 13.973C11.3268 14.6961 10.8425 15.7472 10.4877 16.3721C9.8271 16.7135 8.94113 17.2402 8.80946 17.9053C8.78268 18.028 8.81392 18.1842 8.88757 18.3248C8.97014 18.481 9.10181 18.6015 9.25579 18.6596C9.32274 18.6841 9.40308 18.7042 9.49681 18.7042C9.88959 18.7042 10.5256 18.3873 11.3736 16.9322C11.5031 16.8898 11.637 16.8452 11.7664 16.8006C12.3734 16.5953 13.0028 16.381 13.5718 16.2851C14.2012 16.622 14.9175 16.8385 15.404 16.8385C15.8861 16.8385 16.0758 16.5529 16.1472 16.381C16.2722 16.0797 16.2119 15.7004 16.0088 15.4973C15.7143 15.2072 14.9979 15.1313 13.882 15.2696C13.3331 14.9349 12.9738 14.4796 12.7127 13.8012ZM10.2645 17.1911C9.95431 17.6419 9.71998 17.8673 9.59278 17.9655C9.7423 17.691 10.0346 17.4009 10.2645 17.1911ZM12.2195 11.9355C12.3355 12.1341 12.3199 12.7345 12.2306 13.038C12.1213 12.5939 12.1056 11.9645 12.1704 11.8909L12.2195 11.9355ZM12.1837 14.6247C12.4225 15.0376 12.7238 15.3924 13.0563 15.6557C12.5743 15.7651 12.1346 15.9458 11.7419 16.1065C11.6481 16.1445 11.5566 16.1824 11.4674 16.2181C11.7642 15.6803 12.0119 15.071 12.1837 14.6247ZM15.6562 16.0864L15.6428 16.1065C15.6428 16.1065 15.4375 16.2315 14.6497 15.9213C15.5558 15.8789 15.6562 16.0864 15.6562 16.0864Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 4.5V9.5H6.5", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
DocumentPdfIcon.displayName = "ForwardRef(DocumentPdfIcon)";
const DocumentRemoveIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "document-remove",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 4.5V9.5H6.5", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M6.5 14V20.5H18.5V14M6.5 11V9.5L11.5 4.5H18.5V11M3 12.5H22",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
DocumentRemoveIcon.displayName = "ForwardRef(DocumentRemoveIcon)";
const DocumentSheetIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "document-sheet",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 4.5V9.5H6.5", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M10.4 19V16.4M10.4 16.4L10.4 13.4M10.4 16.4H8M10.4 16.4H14.4M10.4 13.4V11M10.4 13.4H8M10.4 13.4H14.4M14.4 19V16.4M14.4 16.4V13.4M14.4 16.4H17M14.4 13.4V11M14.4 13.4H17M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
DocumentSheetIcon.displayName = "ForwardRef(DocumentSheetIcon)";
const DocumentTextIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "document-text",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 4.5V9.5H6.5", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M16 13H9M14 16H9M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
DocumentTextIcon.displayName = "ForwardRef(DocumentTextIcon)";
const DocumentVideoIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "document-video",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M11.5 16.5V13.5L14 15L11.5 16.5Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: 1.2
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 4.5V9.5H6.5", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
DocumentVideoIcon.displayName = "ForwardRef(DocumentVideoIcon)";
const DocumentWordIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "document-word",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12.4699 13.4588H12.5263L13.6328 17H14.5435L16 12H14.9952L14.0656 15.7214H14.0129L12.929 12H12.0672L10.9984 15.7214H10.9419L10.0124 12H9L10.4565 17H11.371L12.4699 13.4588Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 4.5V9.5H6.5", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
DocumentWordIcon.displayName = "ForwardRef(DocumentWordIcon)";
const DocumentZipIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "document-zip",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M11.5 4.5V9.5H6.5", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M15 4.5L13.5 5L15.5 6L13.5 7L15.5 8L13.5 9L15.5 10L13.5 11L14.5 11.5V13M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5ZM13.5 13H15.5L16 17H13L13.5 13Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
DocumentZipIcon.displayName = "ForwardRef(DocumentZipIcon)";
const DocumentsIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "documents",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.5 4.5V9.5H5.5", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M16.5 7.5H19.5V21.5H8.5V18.5M10.5 4.5H16.5V18.5H5.5V9.5L10.5 4.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
DocumentsIcon.displayName = "ForwardRef(DocumentsIcon)";
const DotIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "dot",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "circle",
        {
          cx: 12.5,
          cy: 12.5,
          r: 2.5,
          fill: "currentColor",
          stroke: "currentColor",
          strokeWidth: 1.2
        }
      )
    }
  );
});
DotIcon.displayName = "ForwardRef(DotIcon)";
const DoubleChevronDownIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "double-chevron-down",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M16 8L12.5 11.5L9 8M16 13L12.5 16.5L9 13",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
DoubleChevronDownIcon.displayName = "ForwardRef(DoubleChevronDownIcon)";
const DoubleChevronLeftIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "double-chevron-left",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12 16L8.5 12.5L12 9M17 16L13.5 12.5L17 9",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
DoubleChevronLeftIcon.displayName = "ForwardRef(DoubleChevronLeftIcon)";
const DoubleChevronRightIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "double-chevron-right",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M13 9L16.5 12.5L13 16M8 9L11.5 12.5L8 16",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
DoubleChevronRightIcon.displayName = "ForwardRef(DoubleChevronRightIcon)";
const DoubleChevronUpIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "double-chevron-up",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M9 12L12.5 8.5L16 12M9 17L12.5 13.5L16 17",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
DoubleChevronUpIcon.displayName = "ForwardRef(DoubleChevronUpIcon)";
const DownloadIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "download",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M19.5 17V19.5H5.5V17M12.5 16L12.5 5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M17.5 11L12.5 16L7.5 11",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
DownloadIcon.displayName = "ForwardRef(DownloadIcon)";
const DragHandleIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "drag-handle",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M9.5 8C10.3284 8 11 7.32843 11 6.5C11 5.67157 10.3284 5 9.5 5C8.67157 5 8 5.67157 8 6.5C8 7.32843 8.67157 8 9.5 8Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M9.5 14C10.3284 14 11 13.3284 11 12.5C11 11.6716 10.3284 11 9.5 11C8.67157 11 8 11.6716 8 12.5C8 13.3284 8.67157 14 9.5 14Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M11 18.5C11 19.3284 10.3284 20 9.5 20C8.67157 20 8 19.3284 8 18.5C8 17.6716 8.67157 17 9.5 17C10.3284 17 11 17.6716 11 18.5Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M15.5 8C16.3284 8 17 7.32843 17 6.5C17 5.67157 16.3284 5 15.5 5C14.6716 5 14 5.67157 14 6.5C14 7.32843 14.6716 8 15.5 8Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M17 12.5C17 13.3284 16.3284 14 15.5 14C14.6716 14 14 13.3284 14 12.5C14 11.6716 14.6716 11 15.5 11C16.3284 11 17 11.6716 17 12.5Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M15.5 20C16.3284 20 17 19.3284 17 18.5C17 17.6716 16.3284 17 15.5 17C14.6716 17 14 17.6716 14 18.5C14 19.3284 14.6716 20 15.5 20Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
DragHandleIcon.displayName = "ForwardRef(DragHandleIcon)";
const DropIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "drop",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M18.5 14.5C18.5 18 16 20.5 12.5 20.5C9 20.5 6.5 18 6.5 14.5C6.5 11 9.5 7.50001 12.5 4.5C15.5 7.5 18.5 11 18.5 14.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
DropIcon.displayName = "ForwardRef(DropIcon)";
const EarthAmericasIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "earth-americas",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M7 13L5.5 9L10 5H15V10L14 9H11L9.5 11L10.5 12H12V13L13 14.5H15.5L18.5 17L15.5 19.5L10.5 20V17L12.5 15L9 13L7 10.5V13Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "circle",
          {
            cx: 12.5,
            cy: 12.5,
            r: 8,
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
EarthAmericasIcon.displayName = "ForwardRef(EarthAmericasIcon)";
const EarthGlobeIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "earth-globe",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M20.5 12.5H4.5M12.5 20.5C12.5 20.5 9.5 17.5 9.5 12.5C9.5 7.5 12.5 4.5 12.5 4.5C12.5 4.5 15.5 7.5 15.5 12.5C15.5 17.5 12.5 20.5 12.5 20.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
EarthGlobeIcon.displayName = "ForwardRef(EarthGlobeIcon)";
const EditIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "edit",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M15 7L18 10M6 19L7 15L17 5L20 8L10 18L6 19Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
EditIcon.displayName = "ForwardRef(EditIcon)";
const EllipsisHorizontalIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "ellipsis-horizontal",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M6.5 11C7.32843 11 8 11.6716 8 12.5C8 13.3284 7.32843 14 6.5 14C5.67157 14 5 13.3284 5 12.5C5 11.6716 5.67157 11 6.5 11Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12.5 11C13.3284 11 14 11.6716 14 12.5C14 13.3284 13.3284 14 12.5 14C11.6716 14 11 13.3284 11 12.5C11 11.6716 11.6716 11 12.5 11Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M18.5 11C19.3284 11 20 11.6716 20 12.5C20 13.3284 19.3284 14 18.5 14C17.6716 14 17 13.3284 17 12.5C17 11.6716 17.6716 11 18.5 11Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
EllipsisHorizontalIcon.displayName = "ForwardRef(EllipsisHorizontalIcon)";
const EllipsisVerticalIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "ellipsis-vertical",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M14 6.5C14 7.32843 13.3284 8 12.5 8C11.6716 8 11 7.32843 11 6.5C11 5.67157 11.6716 5 12.5 5C13.3284 5 14 5.67157 14 6.5Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M14 12.5C14 13.3284 13.3284 14 12.5 14C11.6716 14 11 13.3284 11 12.5C11 11.6716 11.6716 11 12.5 11C13.3284 11 14 11.6716 14 12.5Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M14 18.5C14 19.3284 13.3284 20 12.5 20C11.6716 20 11 19.3284 11 18.5C11 17.6716 11.6716 17 12.5 17C13.3284 17 14 17.6716 14 18.5Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
EllipsisVerticalIcon.displayName = "ForwardRef(EllipsisVerticalIcon)";
const EmptyIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "empty",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12.5 21V19.1111M8.25 19.8614L9.19445 18.2255M5.13878 16.7501L6.77461 15.8057M4 12.5H5.8889M5.13872 8.2499L6.77455 9.19436M8.25004 5.13876L9.19449 6.7746M12.5 5.88891V4M15.8055 6.77465L16.75 5.1388M18.2254 9.19449L19.8612 8.25004M19.1111 12.5001H21M18.2254 15.8056L19.8612 16.7501M15.8056 18.2255L16.75 19.8614",
          stroke: "currentColor",
          strokeWidth: 1.2
        }
      )
    }
  );
});
EmptyIcon.displayName = "ForwardRef(EmptyIcon)";
const EnterIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "enter",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 14.5H19.5V7", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M10 18.5L6 14.5L10 10.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
EnterIcon.displayName = "ForwardRef(EnterIcon)";
const EnterRightIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "enter-right",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M19 14.5H5.5V7", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M15 18.5L19 14.5L15 10.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
EnterRightIcon.displayName = "ForwardRef(EnterRightIcon)";
const EnvelopeIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "envelope",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M20.5 18.5H4.5V6.5H20.5V18.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M20.5 18.5L17.75 15.5L15 12.5M4.5 18.5L10 12.5M20.5 6.5L12.5 15L4.5 6.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
EnvelopeIcon.displayName = "ForwardRef(EnvelopeIcon)";
const EqualIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "equal",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7.5 4.5H3.5V20.5H7.5", stroke: "currentColor", strokeWidth: 1.2 }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M17.5 20.5L21.5 20.5L21.5 4.5L17.5 4.5", stroke: "currentColor", strokeWidth: 1.2 }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9 10.5H16", stroke: "currentColor", strokeWidth: 1.2 }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9 14.5H16", stroke: "currentColor", strokeWidth: 1.2 })
      ]
    }
  );
});
EqualIcon.displayName = "ForwardRef(EqualIcon)";
const ErrorFilledIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "error-filled",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4 12.5C4 7.80558 7.80558 4 12.5 4C17.1944 4 21 7.80558 21 12.5C21 17.1944 17.1944 21 12.5 21C7.80558 21 4 17.1944 4 12.5ZM13 14.5V16H12V14.5H13ZM12 9V13H13V9H12Z",
          fill: "currentColor"
        }
      )
    }
  );
});
ErrorFilledIcon.displayName = "ForwardRef(ErrorFilledIcon)";
const ErrorOutlineIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "error-outline",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12.5 16V14.5M12.5 9V13M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ErrorOutlineIcon.displayName = "ForwardRef(ErrorOutlineIcon)";
const ErrorScreenIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "error-screen",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M10 8.5L15 13.5M15 8.5L10 13.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12.5 16.5H5.5C4.94772 16.5 4.5 16.0523 4.5 15.5V6.5C4.5 5.94771 4.94772 5.5 5.5 5.5H19.5C20.0523 5.5 20.5 5.94772 20.5 6.5V15.5C20.5 16.0523 20.0523 16.5 19.5 16.5H12.5ZM12.5 16.5V19.5M12.5 19.5H8M12.5 19.5H17",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
ErrorScreenIcon.displayName = "ForwardRef(ErrorScreenIcon)";
const ExpandIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "expand",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M14 6.5H18.5V11M11 18.5H6.5V14",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M18.5 6.5L14 11M6.5 18.5L11 14",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
ExpandIcon.displayName = "ForwardRef(ExpandIcon)";
const EyeClosedIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "eye-closed",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M7 15.5L5.5 17.5M20.5 12.5C19.8612 13.5647 19.041 14.6294 18.0008 15.501M18.0008 15.501C16.5985 16.676 14.7965 17.5 12.5 17.5M18.0008 15.501L18 15.5M18.0008 15.501L19.5 17.5M12.5 17.5C8.5 17.5 6 15 4.5 12.5M12.5 17.5V20M15.5 17L16.5 19.5M9.5 17L8.5 19.5",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
EyeClosedIcon.displayName = "ForwardRef(EyeClosedIcon)";
const EyeOpenIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "eye-open",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.39999 12.5C9.39999 10.7879 10.7879 9.39999 12.5 9.39999C14.2121 9.39999 15.6 10.7879 15.6 12.5C15.6 14.2121 14.2121 15.6 12.5 15.6C10.7879 15.6 9.39999 14.2121 9.39999 12.5Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12.5 7.5C8.5 7.5 6 10 4.5 12.5C6 15 8.5 17.5 12.5 17.5C16.5 17.5 19 15 20.5 12.5C19 10 16.5 7.5 12.5 7.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
EyeOpenIcon.displayName = "ForwardRef(EyeOpenIcon)";
const FilterIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "filter",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M11 12L6 7V6L19 6L19 7L14 12V17L11 19V12Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      )
    }
  );
});
FilterIcon.displayName = "ForwardRef(FilterIcon)";
const FolderIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "folder",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M11.5 8.5H19.5V18.5H5.5V5.5H10.5L11.5 8.5ZM11.5 8.5H5.5",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
FolderIcon.displayName = "ForwardRef(FolderIcon)";
const GenerateIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "generate",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M9 5.30423C6.33576 6.60253 4.5 9.33688 4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5V14.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M16 11L12.5 14.5L9 11",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
GenerateIcon.displayName = "ForwardRef(GenerateIcon)";
const GroqIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "groq",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13 13H21L13 21L13 13Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 12V4L4 12H12Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 13H4L12 21V13Z", fill: "currentColor" })
      ]
    }
  );
});
GroqIcon.displayName = "ForwardRef(GroqIcon)";
const HashIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "hash",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8.33894 16.1002H5.44615L5.63077 14.9002H8.52356L9.26202 10.1002H6.36923L6.55384 8.90018H9.44663L9.89281 6H11.1069L10.6608 8.90018H15.4466L15.8928 6H17.1069L16.6608 8.90018H19.5539L19.3693 10.1002H16.4761L15.7377 14.9002H18.6308L18.4462 16.1002H15.5531L15.1069 19H13.8928L14.3389 16.1002H9.55306L9.10693 19H7.89281L8.33894 16.1002ZM10.4761 10.1002L9.73767 14.9002H14.5236L15.262 10.1002H10.4761Z",
          fill: "currentColor"
        }
      )
    }
  );
});
HashIcon.displayName = "ForwardRef(HashIcon)";
const HeartFilledIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "heart-filled",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z",
          fill: "currentColor",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
HeartFilledIcon.displayName = "ForwardRef(HeartFilledIcon)";
const HeartIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "heart",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
HeartIcon.displayName = "ForwardRef(HeartIcon)";
const HelpCircleIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "help-circle",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12.5 13C12.5 11 14 11.5 14 10C14 9.34375 13.5 8.5 12.5 8.5C11.5 8.5 11 9 10.5 9.5M12.5 16V14.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
HelpCircleIcon.displayName = "ForwardRef(HelpCircleIcon)";
const HighlightIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "highlight",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M17.5311 13.7141L8.0245 8.22547M17.5311 13.7141L20.25 9.00478M17.5311 13.7141L16.5 15.5L13.232 16.134L12 18L11.4142 17.6485M8.0245 8.22547L10.75 3.50479M8.0245 8.22547L6.99999 9.99998L7.99998 13L6.99998 15L7.58576 15.3514M7.58576 15.3514L4.90192 20L10.0566 20L11.4142 17.6485M7.58576 15.3514L11.4142 17.6485M13 20H20",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
HighlightIcon.displayName = "ForwardRef(HighlightIcon)";
const HomeIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "home",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M6.5 8.75V18.5H18.5V8.75M4.5 10L12.5 5L20.5 10M14.5 18.5V11.5H10.5V18.5",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
HomeIcon.displayName = "ForwardRef(HomeIcon)";
const IceCreamIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "ice-cream",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M9.5 13.5L12.5 20.5L15.5 13.5M12.5 8.26389C11.9692 7.78885 11.2684 7.5 10.5 7.5C8.84315 7.5 7.5 8.84315 7.5 10.5C7.5 12.1569 8.84315 13.5 10.5 13.5C11.2684 13.5 11.9692 13.2111 12.5 12.7361M9.5 7.5C9.5 5.84315 10.8431 4.5 12.5 4.5C14.1569 4.5 15.5 5.84315 15.5 7.5M17.5 10.5C17.5 12.1569 16.1569 13.5 14.5 13.5C12.8431 13.5 11.5 12.1569 11.5 10.5C11.5 8.84315 12.8431 7.5 14.5 7.5C16.1569 7.5 17.5 8.84315 17.5 10.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
IceCreamIcon.displayName = "ForwardRef(IceCreamIcon)";
const ImageIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "image",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M5.5 15.5L8.79289 12.2071C9.18342 11.8166 9.81658 11.8166 10.2071 12.2071L12.8867 14.8867C13.2386 15.2386 13.7957 15.2782 14.1938 14.9796L15.1192 14.2856C15.3601 14.1049 15.6696 14.0424 15.9618 14.1154L19.5 15M5.5 6.5H19.5V18.5H5.5V6.5ZM15.5 10.5C15.5 11.0523 15.0523 11.5 14.5 11.5C13.9477 11.5 13.5 11.0523 13.5 10.5C13.5 9.94772 13.9477 9.5 14.5 9.5C15.0523 9.5 15.5 9.94772 15.5 10.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ImageIcon.displayName = "ForwardRef(ImageIcon)";
const ImageRemoveIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "image-remove",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M5.5 11V6.5H19.5V11M5.5 14V18.5H19.5V14M3 12.5H22",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ImageRemoveIcon.displayName = "ForwardRef(ImageRemoveIcon)";
const ImagesIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "images",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M18.5 7.5H20.5V19.5H6.5V17.5M4.5 14.5L7.79289 11.2071C8.18342 10.8166 8.81658 10.8166 9.20711 11.2071L11.8867 13.8867C12.2386 14.2386 12.7957 14.2782 13.1938 13.9796L14.1192 13.2856C14.3601 13.1049 14.6696 13.0424 14.9618 13.1154L18.5 14M4.5 5.5H18.5V17.5H4.5V5.5ZM14.5 9.5C14.5 10.0523 14.0523 10.5 13.5 10.5C12.9477 10.5 12.5 10.0523 12.5 9.5C12.5 8.94772 12.9477 8.5 13.5 8.5C14.0523 8.5 14.5 8.94772 14.5 9.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ImagesIcon.displayName = "ForwardRef(ImagesIcon)";
const InfoFilledIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "info-filled",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M21 12.5C21 17.1944 17.1944 21 12.5 21C7.80558 21 4 17.1944 4 12.5C4 7.80558 7.80558 4 12.5 4C17.1944 4 21 7.80558 21 12.5ZM12 10.5V9H13V10.5H12ZM13 16V12H12V16H13Z",
          fill: "currentColor"
        }
      )
    }
  );
});
InfoFilledIcon.displayName = "ForwardRef(InfoFilledIcon)";
const InfoOutlineIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "info-outline",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12.5 10.5V9M12.5 12V16M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
InfoOutlineIcon.displayName = "ForwardRef(InfoOutlineIcon)";
const InlineElementIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "inline-element",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M5.5 5V20M19.5 5V20M8.5 6.5H16.5V18.5H8.5V6.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
InlineElementIcon.displayName = "ForwardRef(InlineElementIcon)";
const InlineIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "inline",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12.5 6.5H19.5V18.5H12.5M12.5 6.5H5.5V18.5H12.5M12.5 6.5V18.5",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
InlineIcon.displayName = "ForwardRef(InlineIcon)";
const InsertAboveIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "insert-above",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M14.5 10.5556L10.5 10.5556M12.5 12.5L12.5 8.5M18.5 5.5L6.5 5.5M18.5 19.5L6.5 19.5L6.5 15.5L18.5 15.5L18.5 19.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      )
    }
  );
});
InsertAboveIcon.displayName = "ForwardRef(InsertAboveIcon)";
const InsertBelowIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "insert-below",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M10.5 14.5H14.5M12.5 12.5V16.5M6.5 19.5H18.5M6.5 5.5H18.5V9.5H6.5V5.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinecap: "square",
          strokeLinejoin: "round"
        }
      )
    }
  );
});
InsertBelowIcon.displayName = "ForwardRef(InsertBelowIcon)";
const ItalicIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "italic",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M10.43 18H11.7276L13.4551 9.86763H12.1576L10.43 18ZM13.3043 8.29849C13.8022 8.29849 14.2095 7.89112 14.2095 7.39322C14.2095 6.89532 13.8022 6.48795 13.3043 6.48795C12.8064 6.48795 12.399 6.89532 12.399 7.39322C12.399 7.89112 12.8064 8.29849 13.3043 8.29849Z",
          fill: "currentColor"
        }
      )
    }
  );
});
ItalicIcon.displayName = "ForwardRef(ItalicIcon)";
const JoystickIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "joystick",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M9.5 16V14.5H15.5V16M13.5 10.5V14.5M11.5 10.5V14.5M15.5 7.5C15.5 9.15685 14.1569 10.5 12.5 10.5C10.8431 10.5 9.5 9.15685 9.5 7.5C9.5 5.84315 10.8431 4.5 12.5 4.5C14.1569 4.5 15.5 5.84315 15.5 7.5ZM18.5 19.5H6.5C5.94772 19.5 5.5 19.0523 5.5 18.5V17.5C5.5 16.9477 5.94772 16.5 6.5 16.5H18.5C19.0523 16.5 19.5 16.9477 19.5 17.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
JoystickIcon.displayName = "ForwardRef(JoystickIcon)";
const JsonIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "json",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M11 5.5H9.5C8.39543 5.5 7.5 6.39543 7.5 7.5V12.5M7.5 12.5H4M7.5 12.5V17.5C7.5 18.6046 8.39543 19.5 9.5 19.5H11M14 5.5H15.5C16.6046 5.5 17.5 6.39543 17.5 7.5V12.5M17.5 12.5H21M17.5 12.5V17.5C17.5 18.6046 16.6046 19.5 15.5 19.5H14",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
JsonIcon.displayName = "ForwardRef(JsonIcon)";
const LaunchIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "launch",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12 7.5H6.5V18.5H17.5V13M19.5 5.5L10.5 14.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14 5.5H19.5V11", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" })
      ]
    }
  );
});
LaunchIcon.displayName = "ForwardRef(LaunchIcon)";
const LeaveIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "leave",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M14.5 15V18.5H5.5V6.5H14.5V10M9 12.5H21.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M18 9L21.5 12.5L18 16",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
LeaveIcon.displayName = "ForwardRef(LeaveIcon)";
const LemonIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "lemon",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M10.6569 10.3431L6.41422 14.5858C7.58579 15.7574 9.12132 16.3431 10.6569 16.3431M10.6569 10.3431L14.8995 6.1005C16.0711 7.27208 16.6569 8.80761 16.6569 10.3431M10.6569 10.3431L10.6569 16.3431M10.6569 10.3431L16.6569 10.3431M10.6569 10.3431L14.8995 14.5858M14.8995 14.5858C13.7279 15.7574 12.1924 16.3431 10.6569 16.3431M14.8995 14.5858C16.0711 13.4142 16.6569 11.8787 16.6569 10.3431M16.3137 4.68629C19.4379 7.81049 19.4379 12.8758 16.3137 16C13.1895 19.1242 8.12419 19.1242 5 16L16.3137 4.68629Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
LemonIcon.displayName = "ForwardRef(LemonIcon)";
const LinkIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "link",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M11 12.5L12.5 14C13.281 14.781 14.719 14.781 15.5 14L18.5 11C19.281 10.219 19.281 8.78105 18.5 8L18 7.5C17.2189 6.71895 15.781 6.71895 15 7.5L13 9.5M12 15.5L10 17.5C9.21895 18.281 7.78105 18.281 7 17.5L6.5 17C5.71895 16.219 5.71896 14.781 6.5 14L9.50001 11C10.2811 10.219 11.719 10.2189 12.5 11L14 12.5",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
LinkIcon.displayName = "ForwardRef(LinkIcon)";
const LinkRemovedIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "link-removed",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M18.5 11C19.281 10.219 19.281 8.78108 18.5 8.00003L18 7.50003C17.2189 6.71898 15.781 6.71898 15 7.50003L13 9.50003M15.5 14C14.7189 14.7811 13.281 14.7811 12.5 14M6.5 14C5.71895 14.7811 5.71894 16.219 6.49999 17L6.99999 17.5C7.78104 18.2811 9.21894 18.2811 9.99999 17.5L12 15.5M12.5 11C11.719 10.219 10.281 10.219 9.5 11M3 12.5H22",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
LinkRemovedIcon.displayName = "ForwardRef(LinkRemovedIcon)";
const ListIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "list",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M6 6.5H19M6 14.5H19M6 10.5H19M6 18.5H19",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ListIcon.displayName = "ForwardRef(ListIcon)";
const LockIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "lock",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M15.5 11.5V8.5C15.5 6.5 14 5.5 12.5 5.5C11 5.5 9.5 6.5 9.5 8.5V11.5M7.5 11.5H17.5V19.5H7.5V11.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
LockIcon.displayName = "ForwardRef(LockIcon)";
const LogoJsIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "logo-js",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M20 5H5V20H20V5ZM12.5254 16.1572C12.5254 17.4189 11.7742 18.1536 10.4792 18.1536C9.24243 18.1536 8.49121 17.4189 8.45801 16.2942V16.261H9.67407V16.2859C9.69897 16.7466 9.9729 17.0703 10.4626 17.0703C10.9939 17.0703 11.272 16.7507 11.272 16.1489V12.011H12.5254V16.1572ZM18.2893 16.2153C18.2893 17.4023 17.3679 18.1536 15.8738 18.1536C14.4419 18.1536 13.5371 17.4688 13.4666 16.4062L13.4624 16.3398H14.6702L14.6743 16.3813C14.72 16.8296 15.2056 17.1326 15.907 17.1326C16.5752 17.1326 17.0359 16.813 17.0359 16.3523V16.3481C17.0359 15.9539 16.7412 15.7339 15.9983 15.5803L15.3674 15.4517C14.1223 15.1985 13.5869 14.6174 13.5869 13.7085V13.7043C13.5869 12.592 14.5415 11.8574 15.8696 11.8574C17.2683 11.8574 18.0901 12.5962 18.1689 13.5964L18.1731 13.6504H16.9944L16.9861 13.6006C16.9155 13.1731 16.5005 12.8743 15.8696 12.8743C15.2512 12.8784 14.8403 13.1606 14.8403 13.6089V13.613C14.8403 14.0032 15.1309 14.2356 15.8364 14.3809L16.4714 14.5095C17.7373 14.771 18.2893 15.2773 18.2893 16.2112V16.2153Z",
          fill: "currentColor"
        }
      )
    }
  );
});
LogoJsIcon.displayName = "ForwardRef(LogoJsIcon)";
const LogoTsIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "logo-ts",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M20 5H5V20H20V5ZM11.0769 18H9.82349V13.0444H8.02637V12.011H12.874V13.0444H11.0769V18ZM18.2893 16.2153C18.2893 17.4023 17.3679 18.1536 15.8738 18.1536C14.4419 18.1536 13.5371 17.4688 13.4666 16.4062L13.4624 16.3398H14.6702L14.6743 16.3813C14.72 16.8296 15.2056 17.1326 15.907 17.1326C16.5752 17.1326 17.0359 16.813 17.0359 16.3523V16.3481C17.0359 15.9539 16.7412 15.7339 15.9983 15.5803L15.3674 15.4517C14.1223 15.1985 13.5869 14.6174 13.5869 13.7085V13.7043C13.5869 12.592 14.5415 11.8574 15.8696 11.8574C17.2683 11.8574 18.0901 12.5962 18.1689 13.5964L18.1731 13.6504H16.9944L16.9861 13.6006C16.9155 13.1731 16.5005 12.8743 15.8696 12.8743C15.2512 12.8784 14.8403 13.1606 14.8403 13.6089V13.613C14.8403 14.0032 15.1309 14.2356 15.8364 14.3809L16.4714 14.5095C17.7373 14.771 18.2893 15.2773 18.2893 16.2112V16.2153Z",
          fill: "currentColor"
        }
      )
    }
  );
});
LogoTsIcon.displayName = "ForwardRef(LogoTsIcon)";
const MarkerIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "marker",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M6.5 10.5C6.5 7 9 4.5 12.5 4.5C16 4.5 18.5 7 18.5 10.5C18.5 14 15.5 17.5 12.5 20.5C9.5 17.5 6.5 14 6.5 10.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M14 10.5C14 11.3284 13.3284 12 12.5 12C11.6716 12 11 11.3284 11 10.5C11 9.67157 11.6716 9 12.5 9C13.3284 9 14 9.67157 14 10.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
MarkerIcon.displayName = "ForwardRef(MarkerIcon)";
const MarkerRemovedIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "marker-removed",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M7.39787 14C8.51075 16.2897 10.5054 18.5054 12.5 20.5C14.4946 18.5054 16.4892 16.2897 17.6021 14M6.52009 11C6.50681 10.8334 6.5 10.6667 6.5 10.5C6.5 7 9 4.5 12.5 4.5C16 4.5 18.5 7 18.5 10.5C18.5 10.6667 18.4932 10.8334 18.4799 11M3 12.5H22",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
MarkerRemovedIcon.displayName = "ForwardRef(MarkerRemovedIcon)";
const MasterDetailIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "master-detail",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M7 9.5H10M11.5 6.5V18.5M7 12.5H10M13 9.5H18M7 15.5H10M5.5 6.5H19.5V18.5H5.5V6.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
MasterDetailIcon.displayName = "ForwardRef(MasterDetailIcon)";
const MenuIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "menu",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M6 7.5H19M6 17.5H19M6 12.5H19",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
MenuIcon.displayName = "ForwardRef(MenuIcon)";
const MobileDeviceIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "mobile-device",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M7.5 6.5C7.5 5.39543 8.39543 4.5 9.5 4.5H15.5C16.6046 4.5 17.5 5.39543 17.5 6.5V18.5C17.5 19.6046 16.6046 20.5 15.5 20.5H9.5C8.39543 20.5 7.5 19.6046 7.5 18.5V6.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M13.5 17.5C13.5 18.0523 13.0523 18.5 12.5 18.5C11.9477 18.5 11.5 18.0523 11.5 17.5C11.5 16.9477 11.9477 16.5 12.5 16.5C13.0523 16.5 13.5 16.9477 13.5 17.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
MobileDeviceIcon.displayName = "ForwardRef(MobileDeviceIcon)";
const MoonIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "moon",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M19.6065 16.1775C18.9417 16.387 18.234 16.5 17.5 16.5C13.634 16.5 10.5 13.366 10.5 9.5C10.5 7.54163 11.3042 5.77109 12.6004 4.50062C12.567 4.50021 12.5335 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C15.5924 20.5 18.275 18.7454 19.6065 16.1775Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
MoonIcon.displayName = "ForwardRef(MoonIcon)";
const NumberIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "number",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M21.0165 17.6336H3.83636V16.4336H21.0165V17.6336Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M7.09808 13.3967V7.508H5.74066L3.83636 8.78241V10.091L5.65277 8.88495H5.74066V13.3967H3.84125V14.5539H8.89984V13.3967H7.09808Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M9.81781 9.63202V9.66132H11.1069V9.62714C11.1069 8.95331 11.5756 8.49432 12.2739 8.49432C12.9575 8.49432 13.4018 8.89471 13.4018 9.50507C13.4018 9.9787 13.1528 10.3498 12.1909 11.3117L9.89594 13.5822V14.5539H14.8618V13.3869H11.7807V13.299L13.1577 11.9855C14.3491 10.843 14.7543 10.1838 14.7543 9.41229C14.7543 8.19159 13.7729 7.36639 12.3178 7.36639C10.8383 7.36639 9.81781 8.28436 9.81781 9.63202Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M17.6694 11.4631H18.5092C19.3198 11.4631 19.8422 11.8683 19.8422 12.4982C19.8422 13.1183 19.3295 13.5139 18.5239 13.5139C17.767 13.5139 17.2592 13.133 17.2104 12.5324H15.9262C15.9897 13.8508 17.0248 14.6955 18.5629 14.6955C20.1401 14.6955 21.2192 13.841 21.2192 12.591C21.2192 11.6584 20.6528 11.0334 19.7006 10.9211V10.8332C20.4721 10.6769 20.9457 10.0666 20.9457 9.23651C20.9457 8.12323 19.9741 7.36639 18.5434 7.36639C17.0541 7.36639 16.1118 8.17694 16.0629 9.50018H17.2983C17.3422 8.88007 17.8061 8.48456 18.4995 8.48456C19.2075 8.48456 19.6567 8.85565 19.6567 9.44159C19.6567 10.0324 19.1977 10.4182 18.4946 10.4182H17.6694V11.4631Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
NumberIcon.displayName = "ForwardRef(NumberIcon)";
const OkHandIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "ok-hand",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M15.9957 11.5C14.8197 10.912 11.9957 9 10.4957 9C8.9957 9 5.17825 11.7674 6 13C7 14.5 9.15134 11.7256 10.4957 12C11.8401 12.2744 13 13.5 13 14.5C13 15.5 11.8401 16.939 10.4957 16.5C9.15134 16.061 8.58665 14.3415 7.4957 14C6.21272 13.5984 5.05843 14.6168 5.5 15.5C5.94157 16.3832 7.10688 17.6006 8.4957 19C9.74229 20.2561 11.9957 21.5 14.9957 20C17.9957 18.5 18.5 16.2498 18.5 13C18.5 11.5 13.7332 5.36875 11.9957 4.5C10.9957 4 10 5 10.9957 6.5C11.614 7.43149 13.5 9.27705 14 10.3751M15.5 8C15.5 8 15.3707 7.5 14.9957 6C14.4957 4 15.9957 3.5 16.4957 4.5C17.1281 5.76491 18.2872 10.9147 18.4957 13",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
OkHandIcon.displayName = "ForwardRef(OkHandIcon)";
const OlistIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "olist",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M10 7.5H19M10 12.5H19M10 17.5H19M5 18.5H7.5L7 17.5L7.5 16.5H5M5 6.5H6.5V8.5M5 8.5H6.5M6.5 8.5H8M8 13.5H6L7 11.5H5",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
OlistIcon.displayName = "ForwardRef(OlistIcon)";
const OverageIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "overage",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.5 11V6.5H14", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M6.5 18.5L9 16L12 13L18.5 6.5M3 13.5H22",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
OverageIcon.displayName = "ForwardRef(OverageIcon)";
const PackageIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "package",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12.5 13V22M12.5 13L4.5 8M12.5 13L20.5 8M8.5 5.5L16.5 10.5M4.5 8L12.5 3L20.5 8V17L12.5 22L4.5 17V8Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
PackageIcon.displayName = "ForwardRef(PackageIcon)";
const PanelLeftIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "panel-left",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M10.5 6.5H19.5V18.5H10.5M10.5 6.5H5.5V18.5H10.5M10.5 6.5V18.5",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
PanelLeftIcon.displayName = "ForwardRef(PanelLeftIcon)";
const PanelRightIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "panel-right",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M14.5 6.5H19.5V18.5H14.5M14.5 6.5H5.5V18.5H14.5M14.5 6.5V18.5",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
PanelRightIcon.displayName = "ForwardRef(PanelRightIcon)";
const PauseIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "pause",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.5 7.5H8.5V17.5H10.5V7.5Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.5 7.5H14.5V17.5H16.5V7.5Z", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.5 7.5H8.5V17.5H10.5V7.5Z", stroke: "currentColor", strokeWidth: 1.2 }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M16.5 7.5H14.5V17.5H16.5V7.5Z", stroke: "currentColor", strokeWidth: 1.2 })
      ]
    }
  );
});
PauseIcon.displayName = "ForwardRef(PauseIcon)";
const PinFilledIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "pin-filled",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M17 15H8V13.5C8 12 10.5 11 10.5 11V9L8.5 7V6H16.5V7L14.5 9V11C14.5 11 17 12 17 13.5V15Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12 15L12.5 20L13 15",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
PinFilledIcon.displayName = "ForwardRef(PinFilledIcon)";
const PinIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "pin",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12 15L12.5 20L13 15",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M17 15H8V13.5C8 12 10.5 11 10.5 11V9L8.5 7V6H16.5V7L14.5 9V11C14.5 11 17 12 17 13.5V15Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
PinIcon.displayName = "ForwardRef(PinIcon)";
const PinRemovedIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "pin-removed",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M7.39787 14C8.51075 16.2897 10.5054 18.5054 12.5 20.5C14.4946 18.5054 16.4892 16.2897 17.6021 14M6.52009 11C6.50681 10.8334 6.5 10.6667 6.5 10.5C6.5 7 9 4.5 12.5 4.5C16 4.5 18.5 7 18.5 10.5C18.5 10.6667 18.4932 10.8334 18.4799 11M3 12.5H22",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
PinRemovedIcon.displayName = "ForwardRef(PinRemovedIcon)";
const PlayIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "play",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M7.5 18.5V6.5L17.5 12.5L7.5 18.5Z",
          fill: "currentColor",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
PlayIcon.displayName = "ForwardRef(PlayIcon)";
const PlugIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "plug",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M13.25 8.5L16.75 5M16.25 11.5L19.75 8M9.25 15.5L5.25 19.5M7.75 14L9.75 12C8.25 10 8.75 9 9.75 8C10.15 7.6 11.25 6.5 11.25 6.5L18.25 13.5C18.25 13.5 17.3825 14.3675 16.75 15C15.75 16 14.75 16.5 12.75 15L10.75 17L7.75 14Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
PlugIcon.displayName = "ForwardRef(PlugIcon)";
const PresentationIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "presentation",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M10.5 18H5.5V8.5H19.5V18H14.5M10.5 18L9 22M10.5 18H14.5M14.5 18L16 22M4.5 8.5H20.5V6.5H4.5V8.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
PresentationIcon.displayName = "ForwardRef(PresentationIcon)";
const Progress50Icon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "progress-50",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M17 12.5C17 14.9853 14.9853 17 12.5 17V8C14.9853 8 17 10.0147 17 12.5Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
Progress50Icon.displayName = "ForwardRef(Progress50Icon)";
const Progress75Icon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "progress-75",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12.5 17C14.9853 17 17 14.9853 17 12.5C17 10.0147 14.9853 8 12.5 8V12.5H8C8 14.9853 10.0147 17 12.5 17Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
Progress75Icon.displayName = "ForwardRef(Progress75Icon)";
const ProjectsIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "projects",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M21 17.5H14M17.5 14V21M5.5 14.5H10.5V19.5H5.5V14.5ZM14.5 5.5H19.5V10.5H14.5V5.5ZM5.5 5.5H10.5V10.5H5.5V5.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ProjectsIcon.displayName = "ForwardRef(ProjectsIcon)";
const PublishIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "publish",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M4.99997 5.50006H20M12.5 9.00005V20",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M7.5 14L12.5 9.00006L17.5 14",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
PublishIcon.displayName = "ForwardRef(PublishIcon)";
const ReadOnlyIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "read-only",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M15 7L18 10M10 12L7 15L6 19L10 18L13 15M12 10L17 5L20 8L15 13M19 19L5 5",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ReadOnlyIcon.displayName = "ForwardRef(ReadOnlyIcon)";
const RedoIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "redo",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M19 9.5L10 9.5C7.51472 9.5 5.5 11.5147 5.5 14C5.5 16.4853 7.51472 18.5 10 18.5H19",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M15 13.5L19 9.5L15 5.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
RedoIcon.displayName = "ForwardRef(RedoIcon)";
const RefreshIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "refresh",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M19.5 13.5C19.5 17.366 16.366 20.5 12.5 20.5C8.63401 20.5 5.5 17.366 5.5 13.5C5.5 9.63401 8.63401 6.5 12.5 6.5H15.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M11.5 10.5L15.5 6.5L11.5 2.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
RefreshIcon.displayName = "ForwardRef(RefreshIcon)";
const RemoveCircleIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "remove-circle",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M8 12.4H17M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
RemoveCircleIcon.displayName = "ForwardRef(RemoveCircleIcon)";
const RemoveIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "remove",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M5 12.5H20", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" })
    }
  );
});
RemoveIcon.displayName = "ForwardRef(RemoveIcon)";
const ResetIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "reset",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M4.56189 13.5L4.14285 13.9294C4.25676 14.0406 4.41017 14.1019 4.56932 14.1C4.72847 14.098 4.88032 14.0329 4.99144 13.9189L4.56189 13.5ZM9.92427 15.9243L15.9243 9.92427L15.0757 9.07574L9.07574 15.0757L9.92427 15.9243ZM9.07574 9.92426L15.0757 15.9243L15.9243 15.0757L9.92426 9.07574L9.07574 9.92426ZM19.9 12.5C19.9 16.5869 16.5869 19.9 12.5 19.9V21.1C17.2496 21.1 21.1 17.2496 21.1 12.5H19.9ZM5.1 12.5C5.1 8.41309 8.41309 5.1 12.5 5.1V3.9C7.75035 3.9 3.9 7.75035 3.9 12.5H5.1ZM12.5 5.1C16.5869 5.1 19.9 8.41309 19.9 12.5H21.1C21.1 7.75035 17.2496 3.9 12.5 3.9V5.1ZM5.15728 13.4258C5.1195 13.1227 5.1 12.8138 5.1 12.5H3.9C3.9 12.8635 3.92259 13.2221 3.9665 13.5742L5.15728 13.4258ZM12.5 19.9C9.9571 19.9 7.71347 18.6179 6.38048 16.6621L5.38888 17.3379C6.93584 19.6076 9.54355 21.1 12.5 21.1V19.9ZM4.99144 13.9189L7.42955 11.4189L6.57045 10.5811L4.13235 13.0811L4.99144 13.9189ZM4.98094 13.0706L2.41905 10.5706L1.58095 11.4294L4.14285 13.9294L4.98094 13.0706Z",
          fill: "currentColor"
        }
      )
    }
  );
});
ResetIcon.displayName = "ForwardRef(ResetIcon)";
const RestoreIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "restore",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M5.88468 17C7.32466 19.1128 9.75033 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5C8.08172 4.5 4.5 8.08172 4.5 12.5V13.5M12.5 8V12.5L15.5 15.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M7 11L4.5 13.5L2 11",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
RestoreIcon.displayName = "ForwardRef(RestoreIcon)";
const RetrieveIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "retrieve",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M16 14L12.5 10.5L9 14M5.5 7.5H19.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12.5 10.5L12.5 17.5M19.5 7.5V19.5H5.5V7.5L7.5 5.5H17.5L19.5 7.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
RetrieveIcon.displayName = "ForwardRef(RetrieveIcon)";
const RetryIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "retry",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M19 9.5L10 9.5C7.51472 9.5 5.5 11.5147 5.5 14C5.5 16.4853 7.51472 18.5 10 18.5H19",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M15 13.5L19 9.5L15 5.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
RetryIcon.displayName = "ForwardRef(RetryIcon)";
const RevertIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "revert",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M6 9.5L15 9.5C17.4853 9.5 19.5 11.5147 19.5 14C19.5 16.4853 17.4853 18.5 15 18.5H6",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M10 13.5L6 9.5L10 5.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
RevertIcon.displayName = "ForwardRef(RevertIcon)";
const RobotIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "robot",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12.5 15.5V17.5M12.5 8.5V6.5M12.5 6.5C13.3284 6.5 14 5.82843 14 5C14 4.17157 13.3284 3.5 12.5 3.5C11.6716 3.5 11 4.17157 11 5C11 5.82843 11.6716 6.5 12.5 6.5ZM20.5 20.5V19.5C20.5 18.3954 19.6046 17.5 18.5 17.5H6.5C5.39543 17.5 4.5 18.3954 4.5 19.5V20.5H20.5ZM11.5 12C11.5 12.5523 11.0523 13 10.5 13C9.94772 13 9.5 12.5523 9.5 12C9.5 11.4477 9.94772 11 10.5 11C11.0523 11 11.5 11.4477 11.5 12ZM15.5 12C15.5 12.5523 15.0523 13 14.5 13C13.9477 13 13.5 12.5523 13.5 12C13.5 11.4477 13.9477 11 14.5 11C15.0523 11 15.5 11.4477 15.5 12ZM8.5 15.5H16.5C17.6046 15.5 18.5 14.6046 18.5 13.5V10.5C18.5 9.39543 17.6046 8.5 16.5 8.5H8.5C7.39543 8.5 6.5 9.39543 6.5 10.5V13.5C6.5 14.6046 7.39543 15.5 8.5 15.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
RobotIcon.displayName = "ForwardRef(RobotIcon)";
const RocketIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "rocket",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12.5 20.5L15.5 14M11 9.49999L4.5 12.5M9 14C9 14 7.54688 14.9531 6.5 16C5.5 17 4.5 20.5 4.5 20.5C4.5 20.5 8 19.5 9 18.5C10 17.5 11 16 11 16M9 14C9 14 10.1 9.9 12.5 7.5C15.5 4.5 20.5 4.5 20.5 4.5C20.5 4.5 20.5 9.5 17.5 12.5C15.7492 14.2508 11 16 11 16L9 14ZM16.5 9.99999C16.5 10.8284 15.8284 11.5 15 11.5C14.1716 11.5 13.5 10.8284 13.5 9.99999C13.5 9.17157 14.1716 8.49999 15 8.49999C15.8284 8.49999 16.5 9.17157 16.5 9.99999Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
RocketIcon.displayName = "ForwardRef(RocketIcon)";
const SchemaIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "schema",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12.5 9.5V12.5M12.5 12.5H8.5V15.5M12.5 12.5H16.5V15.5M10.5 5.5H14.5V9.5H10.5V5.5ZM6.5 15.5H10.5V19.5H6.5V15.5ZM14.5 15.5H18.5V19.5H14.5V15.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
SchemaIcon.displayName = "ForwardRef(SchemaIcon)";
const SearchIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "search",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M15.0355 15.0355L20 20M16.5 11.5C16.5 14.2614 14.2614 16.5 11.5 16.5C8.73858 16.5 6.5 14.2614 6.5 11.5C6.5 8.73858 8.73858 6.5 11.5 6.5C14.2614 6.5 16.5 8.73858 16.5 11.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
SearchIcon.displayName = "ForwardRef(SearchIcon)";
const SelectIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "select",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M16 15L12.5 18.5L9 15M9 10L12.5 6.5L16 10",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
SelectIcon.displayName = "ForwardRef(SelectIcon)";
const ShareIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "share",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M15 10.5H18.5V19.5H6.5L6.5 10.5H10M12.5 16V3.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9 7L12.5 3.5L16 7", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" })
      ]
    }
  );
});
ShareIcon.displayName = "ForwardRef(ShareIcon)";
const SortIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "sort",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M8.5 18.5V6M16.5 19V6.5M12 15L8.5 18.5L5 15M13 10L16.5 6.5L20 10",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
SortIcon.displayName = "ForwardRef(SortIcon)";
const SparkleIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "sparkle",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M10.5 10.5C8.5 12.5 5 12.5 5 12.5C5 12.5 8.5 12.5 10.5 14.5C12.5 16.5 12.5 20 12.5 20C12.5 20 12.5 16.5 14.5 14.5C16.5 12.5 20 12.5 20 12.5C20 12.5 16.5 12.5 14.5 10.5C12.5 8.5 12.5 5 12.5 5C12.5 5 12.5 8.5 10.5 10.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
SparkleIcon.displayName = "ForwardRef(SparkleIcon)";
const SparklesIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "sparkles",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M11 3.5V5M11 5V6.5M11 5H12.5M11 5H9.5M9.5 15C9.5 15 12.2308 14.7692 13.5 13.5C14.7692 12.2308 15 9.5 15 9.5C15 9.5 15.2308 12.2308 16.5 13.5C17.7692 14.7692 20.5 15 20.5 15C20.5 15 17.7692 15.2308 16.5 16.5C15.2308 17.7692 15 20.5 15 20.5C15 20.5 14.7692 17.7692 13.5 16.5C12.2308 15.2308 9.5 15 9.5 15ZM4.5 10C4.5 10 5.72308 9.87692 6.3 9.3C6.87692 8.72308 7 7.5 7 7.5C7 7.5 7.12308 8.72308 7.7 9.3C8.27692 9.87692 9.5 10 9.5 10C9.5 10 8.27692 10.1231 7.7 10.7C7.12308 11.2769 7 12.5 7 12.5C7 12.5 6.87692 11.2769 6.3 10.7C5.72308 10.1231 4.5 10 4.5 10Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
});
SparklesIcon.displayName = "ForwardRef(SparklesIcon)";
const SpinnerIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "spinner",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
SpinnerIcon.displayName = "ForwardRef(SpinnerIcon)";
const SplitHorizontalIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "split-horizontal",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M19.5 10.5V20.5H5.5V10.5M19.5 10.5H5.5M19.5 10.5V4.5H5.5V10.5M12.5 13V15.5M12.5 18V15.5M12.5 15.5H15M12.5 15.5H10",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
SplitHorizontalIcon.displayName = "ForwardRef(SplitHorizontalIcon)";
const SplitVerticalIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "split-vertical",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M10.5 5.5V19.5M13 12.5H15.5M18 12.5H15.5M15.5 12.5V15M15.5 12.5V10M4.5 5.5H20.5V19.5H4.5V5.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
SplitVerticalIcon.displayName = "ForwardRef(SplitVerticalIcon)";
const SquareIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "square",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          x: 5.5,
          y: 5.5,
          width: 14,
          height: 14,
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
SquareIcon.displayName = "ForwardRef(SquareIcon)";
const StackCompactIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "stack-compact",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M5.5 15.5V18.5H19.5V15.5M5.5 15.5H19.5M5.5 15.5V9.5M19.5 15.5V9.5M5.5 9.5V6.5H19.5V9.5M5.5 9.5H19.5M5.5 12.5H19.5",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
StackCompactIcon.displayName = "ForwardRef(StackCompactIcon)";
const StackIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "stack",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M5.5 12.5H19.5M5.5 18.5H19.5V6.5H5.5V18.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
StackIcon.displayName = "ForwardRef(StackIcon)";
const StarFilledIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "star-filled",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12.5 5L14.522 10.217L20.1085 10.5279L15.7716 14.063L17.2023 19.4721L12.5 16.44L7.79772 19.4721L9.22837 14.063L4.89155 10.5279L10.478 10.217L12.5 5Z",
          fill: "currentColor",
          stroke: "currentColor",
          strokeLinejoin: "round"
        }
      )
    }
  );
});
StarFilledIcon.displayName = "ForwardRef(StarFilledIcon)";
const StarIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "star",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12.5 5L14.522 10.217L20.1085 10.5279L15.7716 14.063L17.2023 19.4721L12.5 16.44L7.79772 19.4721L9.22837 14.063L4.89155 10.5279L10.478 10.217L12.5 5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
StarIcon.displayName = "ForwardRef(StarIcon)";
const StopIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "stop",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "rect",
        {
          x: 7.5,
          y: 7.5,
          width: 10,
          height: 10,
          fill: "currentColor",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
StopIcon.displayName = "ForwardRef(StopIcon)";
const StrikethroughIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "strikethrough",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12.5656 7.73438C11.0656 7.73438 10.0734 8.48438 10.0734 9.625C10.0734 10.2317 10.3649 10.6613 11.0519 11H8.90358C8.71703 10.6199 8.62813 10.1801 8.62813 9.67188C8.62813 7.75781 10.2297 6.46094 12.6125 6.46094C14.7922 6.46094 16.4172 7.75781 16.5344 9.57812H15.1203C14.925 8.42188 13.9719 7.73438 12.5656 7.73438Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12.4875 18.2656C10.0969 18.2656 8.44844 17 8.3 15.0547H9.72188C9.89375 16.2344 11.0188 16.9844 12.6203 16.9844C14.1359 16.9844 15.2531 16.1641 15.2531 15.0469C15.2531 14.6375 15.1255 14.292 14.8589 14H16.5912C16.6638 14.266 16.6984 14.5566 16.6984 14.875C16.6984 16.9453 15.0656 18.2656 12.4875 18.2656Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 13.1H18V11.9H7V13.1Z", fill: "currentColor" })
      ]
    }
  );
});
StrikethroughIcon.displayName = "ForwardRef(StrikethroughIcon)";
const StringIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "string",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M11.6748 15.5227H13.1855L9.87842 6.36304H8.34863L5.0415 15.5227H6.50146L7.3457 13.0916H10.8369L11.6748 15.5227ZM9.04053 8.02612H9.14844L10.4751 11.8982H7.70752L9.04053 8.02612Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M16.8101 14.488C16.0674 14.488 15.5278 14.1262 15.5278 13.5042C15.5278 12.8948 15.9595 12.571 16.9116 12.5076L18.6001 12.3997V12.9773C18.6001 13.8342 17.8384 14.488 16.8101 14.488ZM16.4609 15.637C17.3687 15.637 18.124 15.2434 18.5366 14.5515H18.6445V15.5227H19.9585V10.8C19.9585 9.34009 18.981 8.47681 17.248 8.47681C15.6802 8.47681 14.563 9.23853 14.4233 10.4255H15.7437C15.896 9.93677 16.4229 9.65747 17.1846 9.65747C18.1177 9.65747 18.6001 10.0701 18.6001 10.8V11.3967L16.7275 11.5046C15.0835 11.6062 14.1567 12.3235 14.1567 13.5676C14.1567 14.8308 15.1279 15.637 16.4609 15.637Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.9585 18.637L5.0415 18.637V17.437L19.9585 17.437V18.637Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
});
StringIcon.displayName = "ForwardRef(StringIcon)";
const SunIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "sun",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M19 12.5H22M3 12.5H6M12.5 6V3M12.5 22V19M17.3891 7.61091L19.5104 5.48959M5.48959 19.5104L7.61091 17.3891M7.61091 7.61091L5.48959 5.48959M19.5104 19.5104L17.3891 17.3891M16 12.5C16 14.433 14.433 16 12.5 16C10.567 16 9 14.433 9 12.5C9 10.567 10.567 9 12.5 9C14.433 9 16 10.567 16 12.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
SunIcon.displayName = "ForwardRef(SunIcon)";
const SyncIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "sync",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M13.5 4.5H12.5C8.08172 4.5 4.5 8.08172 4.5 12.5C4.5 15.6631 6.33576 18.3975 9 19.6958M11.5 20.5H12.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 9.33688 18.6642 6.60253 16 5.30423",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M14 17.5619L11.5 20.5L14.5 23.0619M11 7.43811L13.5 4.50001L10.5 1.93811",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
SyncIcon.displayName = "ForwardRef(SyncIcon)";
const TabletDeviceIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "tablet-device",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M5.5 5.5C5.5 4.94772 5.94772 4.5 6.5 4.5H18.5C19.0523 4.5 19.5 4.94772 19.5 5.5V19.5C19.5 20.0523 19.0523 20.5 18.5 20.5H6.5C5.94772 20.5 5.5 20.0523 5.5 19.5V5.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M13 18C13 18.2761 12.7761 18.5 12.5 18.5C12.2239 18.5 12 18.2761 12 18C12 17.7239 12.2239 17.5 12.5 17.5C12.7761 17.5 13 17.7239 13 18Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
TabletDeviceIcon.displayName = "ForwardRef(TabletDeviceIcon)";
const TagIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "tag",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12.5 20L5 20L5 12.5L12.5 5L20 12.5L12.5 20Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M11 15.5C11 16.3284 10.3284 17 9.5 17C8.67157 17 8 16.3284 8 15.5C8 14.6716 8.67157 14 9.5 14C10.3284 14 11 14.6716 11 15.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
TagIcon.displayName = "ForwardRef(TagIcon)";
const TagsIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "tags",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12.1562 7.93179L13.9717 6.11633L20.3553 12.5L13.9717 18.8836L10.6855 18.8836M11.0283 18.8836L17.4119 12.5L11.0283 6.11633L4.64462 12.5L4.64462 18.8836L11.0283 18.8836ZM9.75153 15.0534C9.75153 15.7585 9.17992 16.3302 8.47481 16.3302C7.76969 16.3302 7.19808 15.7585 7.19808 15.0534C7.19808 14.3483 7.76969 13.7767 8.47481 13.7767C9.17992 13.7767 9.75153 14.3483 9.75153 15.0534Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
TagsIcon.displayName = "ForwardRef(TagsIcon)";
const TaskIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "task",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M4.88281 10.75V19.75H20.8828V10.75M4.88281 10.75V5.75H20.8828V10.75M4.88281 10.75H12.8828H20.8828M17.8828 8.25V3.25M7.88281 8.25V3.25",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M10.083 14.7358L12.083 16.7358L15.683 13.1758",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
TaskIcon.displayName = "ForwardRef(TaskIcon)";
const TerminalIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "terminal",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M8.5 9.5L11.5 12.5L8.5 15.5M13 15.5H17M5.5 6.5H19.5V18.5H5.5V6.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
TerminalIcon.displayName = "ForwardRef(TerminalIcon)";
const TextIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "text",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M7.5 9V6.5H17.5V9M12.5 18.5V6.5M10 18.5H15",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
TextIcon.displayName = "ForwardRef(TextIcon)";
const ThLargeIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "th-large",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12.5 6.5V12.5M12.5 12.5V18.5M12.5 12.5H20.5M12.5 12.5H4.5M4.5 6.5H20.5V18.5H4.5V6.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ThLargeIcon.displayName = "ForwardRef(ThLargeIcon)";
const ThListIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "th-list",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M9.5 6.5V10.5M9.5 10.5V14.5M9.5 10.5H20.5M9.5 10.5H4.5M9.5 14.5V18.5M9.5 14.5H20.5M9.5 14.5H4.5M4.5 6.5H20.5V18.5H4.5V6.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ThListIcon.displayName = "ForwardRef(ThListIcon)";
const ThumbsDownIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "thumbs-down",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M9.5 15C9.5 15 12.5 16.5 12.5 18C12.5 19.5 13.5 19.5 13.5 19.5C13.5 19.5 14.5 19.5 14.5 18C14.5 16.5 14.5 15.5 14.5 15.5H18C18 15.5 18 15.5 18 15.5C18 15.5 19 15.5 19 14.5C19 13.5 19.5 14 19.5 13C19.5 12 19 11.5 19 10.5C19 9.5 18 9.5 18 8.5C18 7.5 17 7.5 16.5 7.5C16 7.5 9.5 7.5 9.5 7.5M9.5 7.5H6.5V15.5H9.5V7.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ThumbsDownIcon.displayName = "ForwardRef(ThumbsDownIcon)";
const ThumbsUpIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "thumbs-up",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M9.5 10C9.5 10 12.5 8.5 12.5 7C12.5 5.5 13.5 5.5 13.5 5.5C13.5 5.5 14.5 5.5 14.5 7C14.5 8.5 14.5 9.5 14.5 9.5H18C18 9.5 18 9.5 18 9.5C18 9.5 19 9.5 19 10.5C19 11.5 19.5 11 19.5 12C19.5 13 19 13.5 19 14.5C19 15.5 18 15.5 18 16.5C18 17.5 17 17.5 16.5 17.5C16 17.5 9.5 17.5 9.5 17.5M9.5 17.5H6.5V9.5H9.5V17.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ThumbsUpIcon.displayName = "ForwardRef(ThumbsUpIcon)";
const TiersIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "tiers",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M16.5 14.5L20.5 16.5L12.5 20.5L4.5 16.5L8.5 14.5M16.5 10.5L20.5 12.5L12.5 16.5L4.5 12.5L8.5 10.5M12.5 12.5L20.5 8.5L12.5 4.5L4.5 8.5L12.5 12.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
TiersIcon.displayName = "ForwardRef(TiersIcon)";
const TimelineIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "timeline",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.5 5V20", stroke: "currentColor", strokeWidth: 1.2 }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M5 8.5H11M7 12.5H11M9 16.5H11M13 16.5H20M13 12.5H18M13 8.5H16",
            stroke: "currentColor",
            strokeWidth: 1.2
          }
        )
      ]
    }
  );
});
TimelineIcon.displayName = "ForwardRef(TimelineIcon)";
const ToggleArrowRightIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "toggle-arrow-right",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M10.5 16V9L16 12.5L10.5 16Z",
          fill: "currentColor",
          stroke: "currentColor",
          strokeLinejoin: "round"
        }
      )
    }
  );
});
ToggleArrowRightIcon.displayName = "ForwardRef(ToggleArrowRightIcon)";
const TokenIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "token",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M17.5711 12.5C17.5711 15.2614 15.3325 17.5 12.5711 17.5M7.57107 12.5C7.57107 9.73858 9.80964 7.5 12.5711 7.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
TokenIcon.displayName = "ForwardRef(TokenIcon)";
const TransferIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "transfer",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M19.5 16.5H6M5.5 8.5L19 8.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M16 13L19.5 16.5L16 20M9 12L5.5 8.5L9 5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
TransferIcon.displayName = "ForwardRef(TransferIcon)";
const TranslateIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "translate",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9.4 5.4H4V6.6H13.2189C13.1612 6.78478 13.0895 6.99578 13.0025 7.22211C12.7032 8.00031 12.2402 8.91125 11.5757 9.57574L10 11.1515L9.42426 10.5757C8.72102 9.8725 8.25297 9.16987 7.96199 8.64611C7.81668 8.38455 7.71617 8.16874 7.65305 8.02146C7.62151 7.94787 7.59937 7.89154 7.5857 7.85534C7.57886 7.83725 7.57415 7.8242 7.57144 7.81657L7.56886 7.80922C7.56886 7.80922 7.56921 7.81026 7 8C6.43079 8.18974 6.43091 8.19009 6.43091 8.19009L6.43133 8.19135L6.43206 8.19351L6.4341 8.19948L6.44052 8.21786C6.44587 8.23292 6.45336 8.25357 6.46313 8.27942C6.48266 8.33112 6.5113 8.40369 6.55008 8.49416C6.62758 8.67501 6.74582 8.92795 6.91301 9.22889C7.24703 9.83013 7.77898 10.6275 8.57574 11.4243L9.15147 12L4.57964 16.5718L4.57655 16.5749L4.57577 16.5757L5.4243 17.4242L5.42688 17.4216L10.0368 12.8117L12.6159 14.9609L13.3841 14.0391L10.8888 11.9597L12.4243 10.4243C13.2598 9.58875 13.7968 8.49969 14.1225 7.65289C14.2818 7.23863 14.395 6.87072 14.4696 6.6H16V5.4H10.6V4H9.4V5.4ZM17.4405 10L21.553 19.7672H20.2509L19.1279 17.1H14.8721L13.7491 19.7672H12.447L16.5595 10H17.4405ZM15.3773 15.9H18.6227L17 12.0462L15.3773 15.9Z",
          fill: "currentColor"
        }
      )
    }
  );
});
TranslateIcon.displayName = "ForwardRef(TranslateIcon)";
const TrashIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "trash",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M5 6.5H20M10 6.5V4.5C10 3.94772 10.4477 3.5 11 3.5H14C14.5523 3.5 15 3.94772 15 4.5V6.5M12.5 9V17M15.5 9L15 17M9.5 9L10 17M18.5 6.5L17.571 18.5767C17.5309 19.0977 17.0965 19.5 16.574 19.5H8.42603C7.90349 19.5 7.46905 19.0977 7.42898 18.5767L6.5 6.5H18.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
TrashIcon.displayName = "ForwardRef(TrashIcon)";
const TrendUpwardIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "trend-upward",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M4.5 18.5L11.5 10.5L13.5 14.5L20.5 6.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M20.5 11V6.5H16", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" })
      ]
    }
  );
});
TrendUpwardIcon.displayName = "ForwardRef(TrendUpwardIcon)";
const TriangleOutlineIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "triangle-outline",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M20.5 18.5H4.5L12.5 5.5L20.5 18.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
TriangleOutlineIcon.displayName = "ForwardRef(TriangleOutlineIcon)";
const TrolleyIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "trolley",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M8 17.5L5.81763 6.26772C5.71013 5.81757 5.30779 5.5 4.84498 5.5H3M8 17.5H17M8 17.5C8.82843 17.5 9.5 18.1716 9.5 19C9.5 19.8284 8.82843 20.5 8 20.5C7.17157 20.5 6.5 19.8284 6.5 19C6.5 18.1716 7.17157 17.5 8 17.5ZM17 17.5C17.8284 17.5 18.5 18.1716 18.5 19C18.5 19.8284 17.8284 20.5 17 20.5C16.1716 20.5 15.5 19.8284 15.5 19C15.5 18.1716 16.1716 17.5 17 17.5ZM7.78357 14.5H17.5L19 7.5H6",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
TrolleyIcon.displayName = "ForwardRef(TrolleyIcon)";
const TruncateIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "truncate",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M5 12.5H20M8.5 19.5L12.5 15.5L16.5 19.5M16.5 5.5L12.5 9.5L8.5 5.5",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
TruncateIcon.displayName = "ForwardRef(TruncateIcon)";
const TwitterIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "twitter",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M18.8738 6.65751C18.1994 5.9447 17.2445 5.5 16.1857 5.5C14.1423 5.5 12.4857 7.15655 12.4857 9.2C12.4857 9.55263 12.535 9.89374 12.6272 10.2168C7.0826 9.56422 4.55703 6.02857 4.55703 6.02857C4.55703 6.02857 4.02846 9.2 6.14274 11.3143C5.08571 11.3143 4.55703 10.7857 4.55703 10.7857C4.55703 10.7857 4.55703 13.4286 7.19989 14.4857C6.67143 15.0143 5.61417 14.4857 5.61417 14.4857C5.97533 15.9303 7.45606 16.8562 8.82133 17.1358C6.67298 19.1676 3.5 18.7143 3.5 18.7143C5.14562 19.771 7.21334 20.3 9.31429 20.3C16.1214 20.3 19.8162 15.6315 19.8848 9.37762C20.8722 8.58943 22 7.08571 22 7.08571C22 7.08571 21.277 7.45458 19.6913 7.98315C21.277 6.92601 21.4714 5.5 21.4714 5.5C21.4714 5.5 20.4135 6.55789 18.8738 6.65751Z",
          fill: "currentColor"
        }
      )
    }
  );
});
TwitterIcon.displayName = "ForwardRef(TwitterIcon)";
const UlistIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "ulist",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M7.10153 17.5001C7.10153 17.8323 6.83221 18.1016 6.5 18.1016C6.16778 18.1016 5.89847 17.8323 5.89847 17.5001C5.89847 17.1678 6.16778 16.8985 6.5 16.8985C6.83221 16.8985 7.10153 17.1678 7.10153 17.5001Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M7.10153 7.5C7.10153 7.83221 6.83221 8.10153 6.5 8.10153C6.16778 8.10153 5.89847 7.83221 5.89847 7.5C5.89847 7.16778 6.16778 6.89847 6.5 6.89847C6.83221 6.89847 7.10153 7.16778 7.10153 7.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M7.10153 12.5C7.10153 12.8322 6.83221 13.1015 6.5 13.1015C6.16778 13.1015 5.89847 12.8322 5.89847 12.5C5.89847 12.1678 6.16778 11.8985 6.5 11.8985C6.83221 11.8985 7.10153 12.1678 7.10153 12.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M10 7.5H19M10 17.5H19M10 12.5H19",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
UlistIcon.displayName = "ForwardRef(UlistIcon)";
const UnarchiveIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "unarchive",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12.5 10.5V18M20.5 7.5V20.5H4.5V7.5L7.5 4.5H17.5L20.5 7.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M4.5 7.5H20.5M16 14L12.5 10.5L9 14",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
UnarchiveIcon.displayName = "ForwardRef(UnarchiveIcon)";
const UnderlineIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "underline",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M9.52791 7.11407H8.17V14.2582C8.17 16.5817 9.79195 18.2565 12.4927 18.2565C15.1934 18.2565 16.8154 16.5817 16.8154 14.2582V7.11407H15.4574V14.1677C15.4574 15.8122 14.3787 17.0042 12.4927 17.0042C10.6067 17.0042 9.52791 15.8122 9.52791 14.1677V7.11407Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M7 20.5H18", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" })
      ]
    }
  );
});
UnderlineIcon.displayName = "ForwardRef(UnderlineIcon)";
const UndoIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "undo",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M6 9.5L15 9.5C17.4853 9.5 19.5 11.5147 19.5 14C19.5 16.4853 17.4853 18.5 15 18.5H6",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M10 13.5L6 9.5L10 5.5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
UndoIcon.displayName = "ForwardRef(UndoIcon)";
const UnknownIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "unknown",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12.5 13C12.5 11 14 11.5 14 10C14 9.34375 13.5 8.5 12.5 8.5C11.5 8.5 11 9 10.5 9.5M12.5 16V14.5M5.5 5.5H19.5V19.5H5.5V5.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
UnknownIcon.displayName = "ForwardRef(UnknownIcon)";
const UnlinkIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "unlink",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M15 13.5L17.5 11C18.281 10.219 18.281 8.78105 17.5 8L17 7.5C16.2189 6.71895 14.781 6.71895 14 7.5L11.5 10M10 11.5L7.5 14C6.71896 14.781 6.71895 16.219 7.5 17L8 17.5C8.78105 18.281 10.2189 18.281 11 17.5L13.5 15M9.5 8V5M8 9.5H5M17 15.5H20M15.5 17V20",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
UnlinkIcon.displayName = "ForwardRef(UnlinkIcon)";
const UnlockIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "unlock",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M9.5 11.5V8.5C9.5 6.5 8 5.5 6.5 5.5C5 5.5 3.5 6.5 3.5 8.5V11.5M7.5 11.5H17.5V19.5H7.5V11.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
UnlockIcon.displayName = "ForwardRef(UnlockIcon)";
const UnpublishIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "unpublish",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M5 19.5H20M12.5 16V5",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M17.5 11L12.5 16L7.5 11",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
UnpublishIcon.displayName = "ForwardRef(UnpublishIcon)";
const UploadIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "svg",
    {
      "data-sanity-icon": "upload",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12.5 6.00003V15.5M5.5 15.5H19.5V19.5H5.5V15.5Z",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M7.5 11L12.5 6.00003L17.5 11",
            stroke: "currentColor",
            strokeWidth: 1.2,
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
UploadIcon.displayName = "ForwardRef(UploadIcon)";
const UserIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "user",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M8 14.5C7 15 5.5 16 5.5 19.5H19.5C19.5 16 18.3416 15.1708 17 14.5C16 14 14 14 14 12.5C14 11 15 10.25 15 8.25C15 6.25 14 5.25 12.5 5.25C11 5.25 10 6.25 10 8.25C10 10.25 11 11 11 12.5C11 14 9 14 8 14.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
UserIcon.displayName = "ForwardRef(UserIcon)";
const UsersIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "users",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M17.5 18.5H21.5C21.5 15 20.8416 14.1708 19.5 13.5C18.5 13 16.5 12.5 16.5 11C16.5 9.5 17.5 9 17.5 7C17.5 5 16.5 4 15 4C13.6628 4 12.723 4.79472 12.5347 6.38415M4.5 20.5C4.5 17 5.5 16 6.5 15.5C7.5 15 9.5 14.5 9.5 13C9.5 11.5 8.5 11 8.5 9C8.5 7 9.5 6 11 6C12.5 6 13.5 7 13.5 9C13.5 11 12.5 11.5 12.5 13C12.5 14.5 14.5 15 15.5 15.5C16.8416 16.1708 17.5 17 17.5 20.5H4.5Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
UsersIcon.displayName = "ForwardRef(UsersIcon)";
const WarningFilledIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "warning-filled",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M14.741 5.12637C13.7357 3.41737 11.2643 3.41737 10.259 5.12637L3.7558 16.1818C2.73624 17.915 3.98595 20.1 5.99683 20.1H19.0032C21.014 20.1 22.2637 17.915 21.2442 16.1818L14.741 5.12637ZM11.9 9V13H13.1V9H11.9ZM13.1 16V14.5H11.9V16H13.1Z",
          fill: "currentColor"
        }
      )
    }
  );
});
WarningFilledIcon.displayName = "ForwardRef(WarningFilledIcon)";
const WarningOutlineIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "warning-outline",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12.5 9V13M12.5 16V14.5M14.2239 5.43058L20.727 16.486C21.5113 17.8192 20.55 19.5 19.0032 19.5H5.99683C4.45 19.5 3.48869 17.8192 4.27297 16.486L10.7761 5.43058C11.5494 4.11596 13.4506 4.11596 14.2239 5.43058Z",
          stroke: "currentColor",
          strokeWidth: 1.2,
          strokeLinejoin: "round"
        }
      )
    }
  );
});
WarningOutlineIcon.displayName = "ForwardRef(WarningOutlineIcon)";
const WrenchIcon = r.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "svg",
    {
      "data-sanity-icon": "wrench",
      width: "1em",
      height: "1em",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M17.0407 5.14624L17.4649 5.57051C17.6166 5.41887 17.6758 5.19783 17.6202 4.99071C17.5646 4.78359 17.4027 4.62189 17.1955 4.56656L17.0407 5.14624ZM14.4013 7.7856L13.9771 7.36134C13.8288 7.50959 13.7687 7.72447 13.8185 7.92813L14.4013 7.7856ZM12.8778 6.26211L12.4535 5.83784L12.8778 6.26211ZM11.8309 10.6568L12.2552 11.0811C12.4152 10.9211 12.4716 10.6847 12.401 10.4697L11.8309 10.6568ZM5.63925 16.8485L5.21498 16.4242H5.21498L5.63925 16.8485ZM5.63925 19.935L6.06351 19.5108H6.06351L5.63925 19.935ZM8.72581 19.935L9.15007 20.3593L8.72581 19.935ZM15.1184 13.5425L15.2301 12.953C15.0351 12.916 14.8344 12.9779 14.6941 13.1182L15.1184 13.5425ZM18.9718 12.3561L18.5475 11.9318L18.9718 12.3561ZM20.0877 8.19324L20.6674 8.03843C20.612 7.83124 20.4503 7.66934 20.2432 7.61375C20.0361 7.55816 19.815 7.61734 19.6634 7.76898L20.0877 8.19324ZM17.4483 10.8326L17.3058 11.4154C17.5094 11.4652 17.7243 11.4051 17.8726 11.2569L17.4483 10.8326ZM15 10.2339L14.4172 10.3764C14.4704 10.5938 14.6401 10.7635 14.8575 10.8167L15 10.2339ZM16.6164 4.72198L13.9771 7.36134L14.8256 8.20986L17.4649 5.57051L16.6164 4.72198ZM13.3021 6.68637C14.2723 5.71612 15.6467 5.39501 16.8859 5.72593L17.1955 4.56656C15.5595 4.12966 13.7389 4.55245 12.4535 5.83784L13.3021 6.68637ZM12.401 10.4697C11.9779 9.18109 12.2794 7.70907 13.3021 6.68637L12.4535 5.83784C11.0986 7.19284 10.7021 9.14217 11.2608 10.844L12.401 10.4697ZM11.4066 10.2326L5.21498 16.4242L6.06351 17.2727L12.2552 11.0811L11.4066 10.2326ZM5.21498 16.4242C4.12834 17.5109 4.12834 19.2727 5.21498 20.3593L6.06351 19.5108C5.4455 18.8928 5.4455 17.8908 6.06351 17.2727L5.21498 16.4242ZM5.21498 20.3593C6.30163 21.446 8.06343 21.446 9.15007 20.3593L8.30155 19.5108C7.68353 20.1288 6.68153 20.1288 6.06351 19.5108L5.21498 20.3593ZM9.15007 20.3593L15.5426 13.9668L14.6941 13.1182L8.30155 19.5108L9.15007 20.3593ZM18.5475 11.9318C17.6463 12.8331 16.3968 13.1742 15.2301 12.953L15.0066 14.132C16.5466 14.4239 18.2023 13.9741 19.3961 12.7804L18.5475 11.9318ZM19.508 8.34804C19.8389 9.58721 19.5178 10.9616 18.5475 11.9318L19.3961 12.7804C20.6815 11.495 21.1043 9.67445 20.6674 8.03843L19.508 8.34804ZM17.8726 11.2569L20.5119 8.6175L19.6634 7.76898L17.024 10.4083L17.8726 11.2569ZM14.8575 10.8167L17.3058 11.4154L17.5908 10.2498L15.1426 9.65106L14.8575 10.8167ZM13.8185 7.92813L14.4172 10.3764L15.5829 10.0914L14.9841 7.64307L13.8185 7.92813Z",
          fill: "currentColor"
        }
      )
    }
  );
});
WrenchIcon.displayName = "ForwardRef(WrenchIcon)";
const icons = {
  "access-denied": AccessDeniedIcon,
  activity: ActivityIcon,
  "add-circle": AddCircleIcon,
  "add-comment": AddCommentIcon,
  "add-document": AddDocumentIcon,
  add: AddIcon,
  "add-user": AddUserIcon,
  api: ApiIcon,
  archive: ArchiveIcon,
  "arrow-down": ArrowDownIcon,
  "arrow-left": ArrowLeftIcon,
  "arrow-right": ArrowRightIcon,
  "arrow-top-right": ArrowTopRightIcon,
  "arrow-up": ArrowUpIcon,
  asterisk: AsteriskIcon,
  "bar-chart": BarChartIcon,
  basket: BasketIcon,
  bell: BellIcon,
  bill: BillIcon,
  "binary-document": BinaryDocumentIcon,
  "block-content": BlockContentIcon,
  "block-element": BlockElementIcon,
  blockquote: BlockquoteIcon,
  bold: BoldIcon,
  bolt: BoltIcon,
  book: BookIcon,
  bottle: BottleIcon,
  bug: BugIcon,
  "bulb-filled": BulbFilledIcon,
  "bulb-outline": BulbOutlineIcon,
  calendar: CalendarIcon,
  case: CaseIcon,
  "chart-upward": ChartUpwardIcon,
  "checkmark-circle": CheckmarkCircleIcon,
  checkmark: CheckmarkIcon,
  "chevron-down": ChevronDownIcon,
  "chevron-left": ChevronLeftIcon,
  "chevron-right": ChevronRightIcon,
  "chevron-up": ChevronUpIcon,
  circle: CircleIcon,
  clipboard: ClipboardIcon,
  "clipboard-image": ClipboardImageIcon,
  clock: ClockIcon,
  "close-circle": CloseCircleIcon,
  close: CloseIcon,
  "code-block": CodeBlockIcon,
  code: CodeIcon,
  cog: CogIcon,
  collapse: CollapseIcon,
  "color-wheel": ColorWheelIcon,
  comment: CommentIcon,
  component: ComponentIcon,
  compose: ComposeIcon,
  confetti: ConfettiIcon,
  controls: ControlsIcon,
  copy: CopyIcon,
  "credit-card": CreditCardIcon,
  crop: CropIcon,
  cube: CubeIcon,
  dashboard: DashboardIcon,
  database: DatabaseIcon,
  desktop: DesktopIcon,
  diamond: DiamondIcon,
  document: DocumentIcon,
  "document-pdf": DocumentPdfIcon,
  "document-remove": DocumentRemoveIcon,
  "document-sheet": DocumentSheetIcon,
  "document-text": DocumentTextIcon,
  "document-video": DocumentVideoIcon,
  "document-word": DocumentWordIcon,
  "document-zip": DocumentZipIcon,
  documents: DocumentsIcon,
  dot: DotIcon,
  "double-chevron-down": DoubleChevronDownIcon,
  "double-chevron-left": DoubleChevronLeftIcon,
  "double-chevron-right": DoubleChevronRightIcon,
  "double-chevron-up": DoubleChevronUpIcon,
  download: DownloadIcon,
  "drag-handle": DragHandleIcon,
  drop: DropIcon,
  "earth-americas": EarthAmericasIcon,
  "earth-globe": EarthGlobeIcon,
  edit: EditIcon,
  "ellipsis-horizontal": EllipsisHorizontalIcon,
  "ellipsis-vertical": EllipsisVerticalIcon,
  empty: EmptyIcon,
  enter: EnterIcon,
  "enter-right": EnterRightIcon,
  envelope: EnvelopeIcon,
  equal: EqualIcon,
  "error-filled": ErrorFilledIcon,
  "error-outline": ErrorOutlineIcon,
  "error-screen": ErrorScreenIcon,
  expand: ExpandIcon,
  "eye-closed": EyeClosedIcon,
  "eye-open": EyeOpenIcon,
  filter: FilterIcon,
  folder: FolderIcon,
  generate: GenerateIcon,
  groq: GroqIcon,
  hash: HashIcon,
  "heart-filled": HeartFilledIcon,
  heart: HeartIcon,
  "help-circle": HelpCircleIcon,
  highlight: HighlightIcon,
  home: HomeIcon,
  "ice-cream": IceCreamIcon,
  image: ImageIcon,
  "image-remove": ImageRemoveIcon,
  images: ImagesIcon,
  "info-filled": InfoFilledIcon,
  "info-outline": InfoOutlineIcon,
  "inline-element": InlineElementIcon,
  inline: InlineIcon,
  "insert-above": InsertAboveIcon,
  "insert-below": InsertBelowIcon,
  italic: ItalicIcon,
  joystick: JoystickIcon,
  json: JsonIcon,
  launch: LaunchIcon,
  leave: LeaveIcon,
  lemon: LemonIcon,
  link: LinkIcon,
  "link-removed": LinkRemovedIcon,
  list: ListIcon,
  lock: LockIcon,
  "logo-js": LogoJsIcon,
  "logo-ts": LogoTsIcon,
  marker: MarkerIcon,
  "marker-removed": MarkerRemovedIcon,
  "master-detail": MasterDetailIcon,
  menu: MenuIcon,
  "mobile-device": MobileDeviceIcon,
  moon: MoonIcon,
  number: NumberIcon,
  "ok-hand": OkHandIcon,
  olist: OlistIcon,
  overage: OverageIcon,
  package: PackageIcon,
  "panel-left": PanelLeftIcon,
  "panel-right": PanelRightIcon,
  pause: PauseIcon,
  "pin-filled": PinFilledIcon,
  pin: PinIcon,
  "pin-removed": PinRemovedIcon,
  play: PlayIcon,
  plug: PlugIcon,
  presentation: PresentationIcon,
  "progress-50": Progress50Icon,
  "progress-75": Progress75Icon,
  projects: ProjectsIcon,
  publish: PublishIcon,
  "read-only": ReadOnlyIcon,
  redo: RedoIcon,
  refresh: RefreshIcon,
  "remove-circle": RemoveCircleIcon,
  remove: RemoveIcon,
  reset: ResetIcon,
  restore: RestoreIcon,
  retrieve: RetrieveIcon,
  retry: RetryIcon,
  revert: RevertIcon,
  robot: RobotIcon,
  rocket: RocketIcon,
  schema: SchemaIcon,
  search: SearchIcon,
  select: SelectIcon,
  share: ShareIcon,
  sort: SortIcon,
  sparkle: SparkleIcon,
  sparkles: SparklesIcon,
  spinner: SpinnerIcon,
  "split-horizontal": SplitHorizontalIcon,
  "split-vertical": SplitVerticalIcon,
  square: SquareIcon,
  "stack-compact": StackCompactIcon,
  stack: StackIcon,
  "star-filled": StarFilledIcon,
  star: StarIcon,
  stop: StopIcon,
  strikethrough: StrikethroughIcon,
  string: StringIcon,
  sun: SunIcon,
  sync: SyncIcon,
  "tablet-device": TabletDeviceIcon,
  tag: TagIcon,
  tags: TagsIcon,
  task: TaskIcon,
  terminal: TerminalIcon,
  text: TextIcon,
  "th-large": ThLargeIcon,
  "th-list": ThListIcon,
  "thumbs-down": ThumbsDownIcon,
  "thumbs-up": ThumbsUpIcon,
  tiers: TiersIcon,
  timeline: TimelineIcon,
  "toggle-arrow-right": ToggleArrowRightIcon,
  token: TokenIcon,
  transfer: TransferIcon,
  translate: TranslateIcon,
  trash: TrashIcon,
  "trend-upward": TrendUpwardIcon,
  "triangle-outline": TriangleOutlineIcon,
  trolley: TrolleyIcon,
  truncate: TruncateIcon,
  twitter: TwitterIcon,
  ulist: UlistIcon,
  unarchive: UnarchiveIcon,
  underline: UnderlineIcon,
  undo: UndoIcon,
  unknown: UnknownIcon,
  unlink: UnlinkIcon,
  unlock: UnlockIcon,
  unpublish: UnpublishIcon,
  upload: UploadIcon,
  user: UserIcon,
  users: UsersIcon,
  "warning-filled": WarningFilledIcon,
  "warning-outline": WarningOutlineIcon,
  wrench: WrenchIcon
}, Icon = r.forwardRef(function(props, ref) {
  const { symbol, ...restProps } = props, IconComponent = icons[symbol];
  return IconComponent ? /* @__PURE__ */ jsxRuntime.jsx(IconComponent, { ...restProps, ref }) : null;
});
Icon.displayName = "ForwardRef(Icon)";
const PromptPlaceholderOverview = ({ isEdit }) => {
  const allPrompts = useTypedSelector((state) => selectAllPlaceholdersPrompts(state)), dispatch = reactRedux.useDispatch(), handleDeleteClick = (name) => {
    console.log("delete item", name), dispatch(promptPlaceHolderActions.deleteItem({ name }));
  };
  return /* @__PURE__ */ jsxRuntime.jsx(ui.Card, { paddingTop: 4, borderTop: !0, children: allPrompts.map((promptInput, _index) => !promptInput.deleted && /* @__PURE__ */ jsxRuntime.jsx(ui.Card, { borderLeft: !0, padding: 3, children: /* @__PURE__ */ jsxRuntime.jsxs(ui.Flex, { direction: "row", justify: "space-between", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(ui.Box, { paddingTop: 2, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(ui.Inline, { space: 4, children: [
        /* @__PURE__ */ jsxRuntime.jsxs(ui.Label, { size: 2, children: [
          "Name (",
          visualizePromptPlaceholder(promptInput.name),
          "):"
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(ui.Text, { size: 2, children: promptInput.name })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(ui.Inline, { space: 3, paddingTop: 2, children: [
        /* @__PURE__ */ jsxRuntime.jsx(ui.Label, { size: 2, children: "Description:" }),
        /* @__PURE__ */ jsxRuntime.jsx(ui.Text, { size: 2, children: promptInput.description })
      ] })
    ] }),
    isEdit && /* @__PURE__ */ jsxRuntime.jsx(ui.Box, { paddingTop: 2, children: /* @__PURE__ */ jsxRuntime.jsx(
      ui.Button,
      {
        fontSize: 1,
        iconRight: TrashIcon,
        padding: 3,
        radius: "full",
        text: "Delete",
        tone: "critical",
        onClick: () => handleDeleteClick(promptInput.name)
      }
    ) })
  ] }) }, promptInput.name.replaceAll(" ", "-").toLowerCase())) });
}, writeFieldValueToPrompt = (fields, startPrompt) => {
  let prompt = startPrompt;
  return fields.forEach((f2, _i) => {
    const value = String(sanity.useFormValue([f2.fieldName.toLowerCase()]));
    value !== "undefined" && (prompt = prompt.replace(`${visualizePromptFieldBased(f2)}`, value));
  }), prompt;
}, DialogCreatePrompt = (props) => {
  const {
    children,
    dialog: { id, template }
  } = props, startersPrompt = writeFieldValueToPrompt(template.promptFieldBased ?? [], template.prompt), [prompt, setPrompt] = r.useState(startersPrompt), hasGeminiConfigured = useTypedSelector((state) => state.gemini.configured), { model, role, instructions } = useGetModelConfig(hasGeminiConfigured), dispatch = reactRedux.useDispatch();
  return /* @__PURE__ */ jsxRuntime.jsx("div", { children: /* @__PURE__ */ jsxRuntime.jsx(Dialog, { header: "Create a prompt", id, width: 3, onClose: () => {
    dispatch(dialogActions.clearItem({ id }));
  }, children: /* @__PURE__ */ jsxRuntime.jsxs(ui.Grid, { columns: [1], gap: [1, 1, 2, 3], padding: 4, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(ui.Flex, { direction: "row", gap: 2, justify: "space-between", align: "center", children: [
      /* @__PURE__ */ jsxRuntime.jsx(ui.Text, { size: 2, children: "Create your prompt" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        ui.Button,
        {
          fontSize: 2,
          padding: 3,
          radius: "full",
          text: "Generate",
          tone: "default",
          onClick: () => {
            dispatch(
              hasGeminiConfigured ? geminiActions.createRequest({
                template,
                prompt,
                model,
                instructions
              }) : openAiActions.createRequest({ template, prompt, model, role })
            ), dispatch(dialogActions.clear()), dispatch(openAiActions.setGenerateImage({ value: !1 }));
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      ui.TextArea,
      {
        fontSize: 2,
        onChange: (event) => setPrompt(event.currentTarget.value),
        padding: [3, 3, 4],
        value: prompt
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(PromptPlaceholderOverview, { isEdit: !1 }),
    children
  ] }) }) });
}, DialogDeleteTemplate = (props) => {
  const {
    children,
    dialog: { id }
  } = props, dispatch = reactRedux.useDispatch();
  return /* @__PURE__ */ jsxRuntime.jsx("div", { children: /* @__PURE__ */ jsxRuntime.jsx(Dialog, { header: "Delete template", id, width: 3, onClose: () => {
    dispatch(dialogActions.clearItem({ id }));
  }, children: /* @__PURE__ */ jsxRuntime.jsxs(ui.Grid, { columns: [1], gap: [1, 1, 2, 3], padding: 4, children: [
    /* @__PURE__ */ jsxRuntime.jsx(ui.Label, { children: "After you delete this template its lost forever, are you sure you want to delete this template?" }),
    /* @__PURE__ */ jsxRuntime.jsx(
      ui.Button,
      {
        fontSize: [1, 1, 1],
        mode: "ghost",
        padding: [3, 3, 4],
        text: "Confirm",
        tone: "critical",
        onClick: () => {
          dispatch(templateActions.createDelete({ template: { ...props.dialog.template } })), dispatch(dialogActions.clearItem({ id }));
        }
      }
    ),
    children
  ] }) }) });
}, SearchField = () => {
  const dispatch = reactRedux.useDispatch(), filterInputChanged = (filter2) => {
    dispatch(filter2 ? templateActions.filterItems({ filter: filter2 }) : templateActions.loadPageIndex({ pageIndex: 0, isFilter: !0 }));
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    ui.TextInput,
    {
      fontSize: 1,
      onChange: (e) => filterInputChanged(e.currentTarget.value),
      padding: [3, 3, 4],
      placeholder: "Search",
      icon: SearchIcon
    }
  );
}, Pagination = () => {
  const dispatch = reactRedux.useDispatch(), templates = useTypedSelector((state) => state.templates), shouldLoadNewPagination = templates.allTemplates.length > templates.pageIndex * templates.pageSize;
  return /* @__PURE__ */ jsxRuntime.jsxs(ui.Inline, { space: [3, 3, 4], style: {
    margin: "auto",
    display: "block"
  }, children: [
    shouldLoadNewPagination && /* @__PURE__ */ jsxRuntime.jsx(
      ui.Button,
      {
        fontSize: [1, 1, 1],
        mode: "ghost",
        padding: [3, 3, 4],
        text: "Load more",
        onClick: () => {
          dispatch(templateActions.loadNextPage());
        },
        loading: templates.inProgress
      }
    ),
    !shouldLoadNewPagination && !templates.inProgress && /* @__PURE__ */ jsxRuntime.jsxs(ui.Text, { size: 1, children: [
      "There are no ",
      templates.allTemplates?.length ? "more" : "",
      " templates"
    ] })
  ] });
}, TemplatesVirtualization = ({ isEdit }) => {
  const dispatch = reactRedux.useDispatch(), templates = useTypedSelector((state) => selectAllTemplates(state)), handleTemplateUpdateClick = (template) => {
    template?.promptPlaceholders?.map(
      (p) => dispatch(promptPlaceHolderActions.addItem({ placeholder: p }))
    ), dispatch(templateActions.setSelectedValue({ template, value: !0 })), dispatch(dialogActions.showTemplateDialog({ template }));
  }, handleTemplateDeleteClick = (template) => {
    dispatch(dialogActions.showsConfirmDeleteTemplateDialog({ template }));
  }, handleSelectClick = (template) => {
    isEdit ? (dispatch(templateActions.setSelectedValue({ template, value: !0 })), dispatch(dialogActions.showTemplateDialog({ template }))) : dispatch(dialogActions.showCreatePromptDialog({ template }));
  };
  return /* @__PURE__ */ jsxRuntime.jsx(ui.Box, { padding: 4, children: templates.map((template) => template.title && template.prompt && /* @__PURE__ */ jsxRuntime.jsx(ui.Card, { padding: 4, radius: 25, border: !0, children: /* @__PURE__ */ jsxRuntime.jsxs(ui.Flex, { direction: "row", gap: 2, align: "flex-start", justify: "space-between", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(ui.Flex, { direction: "column", gap: 2, align: "flex-start", children: [
      /* @__PURE__ */ jsxRuntime.jsxs(ui.Inline, { space: [3], children: [
        /* @__PURE__ */ jsxRuntime.jsx(ui.Label, { size: 2, children: "Title" }),
        /* @__PURE__ */ jsxRuntime.jsx(ui.Text, { size: 2, children: template.title })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(ui.Inline, { space: [3], children: [
        /* @__PURE__ */ jsxRuntime.jsx(ui.Label, { size: 2, children: "prompt" }),
        /* @__PURE__ */ jsxRuntime.jsx(ui.Text, { size: 2, children: template.prompt })
      ] }),
      template._updatedAt && /* @__PURE__ */ jsxRuntime.jsxs(ui.Inline, { space: [3], children: [
        /* @__PURE__ */ jsxRuntime.jsx(ui.Label, { size: 2, children: "Last update:" }),
        /* @__PURE__ */ jsxRuntime.jsx(ui.Text, { size: 2, children: new Date(template._updatedAt).toLocaleDateString() })
      ] })
    ] }),
    isEdit && /* @__PURE__ */ jsxRuntime.jsx("div", { children: /* @__PURE__ */ jsxRuntime.jsxs(ui.Inline, { space: 3, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        ui.Button,
        {
          fontSize: 2,
          iconRight: EditIcon,
          padding: 3,
          radius: "full",
          text: "Edit",
          tone: "caution",
          onClick: () => handleTemplateUpdateClick(template)
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        ui.Button,
        {
          fontSize: 2,
          iconRight: TrashIcon,
          padding: 3,
          radius: "full",
          text: "Delete",
          tone: "critical",
          onClick: () => handleTemplateDeleteClick(template)
        }
      )
    ] }) }),
    !isEdit && /* @__PURE__ */ jsxRuntime.jsx(
      ui.Button,
      {
        fontSize: 2,
        padding: 3,
        radius: "full",
        text: "Select",
        tone: "default",
        onClick: () => handleSelectClick(template)
      }
    )
  ] }) }, template._id)) });
}, TemplatesOverview = ({ isEdit = !0 }) => (reactRedux.useDispatch()(templateActions.loadPageIndex({ pageIndex: 0 })), /* @__PURE__ */ jsxRuntime.jsxs(ui.Stack, { space: [3, 3, 4, 5], children: [
  /* @__PURE__ */ jsxRuntime.jsx(TemplatesVirtualization, { isEdit }),
  /* @__PURE__ */ jsxRuntime.jsx(Pagination, {})
] })), DialogOverviewTemplates = (props) => {
  const {
    children,
    dialog: { id }
  } = props, dispatch = reactRedux.useDispatch();
  return dispatch(templateActions.loadPageIndex({ pageIndex: 0 })), /* @__PURE__ */ jsxRuntime.jsx("div", { children: /* @__PURE__ */ jsxRuntime.jsx(Dialog, { header: "Choose a template", id, width: 3, onClose: () => {
    dispatch(dialogActions.clearItem({ id }));
  }, children: /* @__PURE__ */ jsxRuntime.jsxs(ui.Grid, { columns: [1], gap: [1, 1, 2, 3], padding: 4, children: [
    /* @__PURE__ */ jsxRuntime.jsx(ui.Box, { padding: 4, children: /* @__PURE__ */ jsxRuntime.jsx(SearchField, {}) }),
    /* @__PURE__ */ jsxRuntime.jsx(TemplatesOverview, { isEdit: !1 }),
    children
  ] }) }) });
}, combineArrays = (newItems, oldItems) => [...newItems, ...oldItems ?? []], FilterFields = () => (sanity.useSchema()._original?.types || []).flatMap(
  (type) => type.fields ? type.fields.filter((field) => type.name.includes(documentSanityPrefix) ? !1 : (field.type === "string" || field.type === "text") && !field.hidden ? (field.value = `${capitalizeWord(type.name)}.${capitalizeWord(field.name)}`, field) : !1) : []
), CreatePromptFieldBased = () => {
  const [selectedValue, setSelectedValue] = r.useState(""), filteredFields = FilterFields(), dispatch = reactRedux.useDispatch();
  return /* @__PURE__ */ jsxRuntime.jsxs(ui.Stack, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      ui.Autocomplete,
      {
        fontSize: [2, 2, 3],
        icon: SearchIcon,
        onSelect: (value) => setSelectedValue(value),
        id: "autocomplete",
        options: filteredFields,
        openButton: !0,
        placeholder: "Search options",
        renderValue: (value) => value
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(ui.Box, { paddingTop: 2, children: /* @__PURE__ */ jsxRuntime.jsx(
      ui.Button,
      {
        fontSize: 1,
        icon: CheckmarkIcon,
        tone: "default",
        padding: [3, 3, 4],
        text: "Add field",
        onClick: () => {
          const splitValues = selectedValue.split(".");
          dispatch(
            promptFieldBasedActions.addItem({
              field: {
                fieldName: splitValues[1],
                documentType: splitValues[0]
              }
            })
          );
        },
        disabled: !selectedValue
      }
    ) })
  ] });
}, CreatePromptPlaceholder = () => {
  const [name, setName] = r.useState(""), [description, setDescription] = r.useState(""), dispatch = reactRedux.useDispatch(), handleClick = () => {
    dispatch(promptPlaceHolderActions.addItem({ placeholder: { name, description, processed: !1 } })), clearFields();
  }, clearFields = () => {
    setName(""), setDescription("");
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(ui.Stack, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      ui.TextInput,
      {
        onChange: (event) => setName(event.currentTarget.value),
        placeholder: "Name",
        value: name,
        style: { marginTop: "8px" }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(ui.Box, { paddingTop: 2, children: /* @__PURE__ */ jsxRuntime.jsx(
      ui.TextInput,
      {
        onChange: (event) => setDescription(event.currentTarget.value),
        placeholder: "Description",
        value: description,
        style: { marginTop: "4px" }
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsx(ui.Box, { paddingTop: 2, children: /* @__PURE__ */ jsxRuntime.jsx(
      ui.Button,
      {
        fontSize: 1,
        icon: CheckmarkIcon,
        tone: "default",
        padding: [3, 3, 4],
        text: "Add placeholder",
        onClick: handleClick,
        disabled: !name
      }
    ) })
  ] });
}, PromptOptions = () => {
  const [id, setId] = r.useState("field-based-tab");
  return /* @__PURE__ */ jsxRuntime.jsxs(ui.Card, { paddingTop: 4, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(ui.TabList, { space: 2, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        ui.Tab,
        {
          "aria-controls": "field-based-panel",
          id: "field-based-tab",
          label: "Field based",
          onClick: () => setId("field-based-tab"),
          selected: id === "field-based-tab"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(
        ui.Tab,
        {
          "aria-controls": "user-input-panel",
          id: "user-input-tab",
          label: "User input",
          onClick: () => setId("user-input-tab"),
          selected: id === "user-input-tab"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      ui.TabPanel,
      {
        "aria-labelledby": "field-based-tab",
        hidden: id !== "field-based-tab",
        id: "field-based-panel",
        children: /* @__PURE__ */ jsxRuntime.jsx(ui.Card, { border: !0, marginTop: 2, padding: 4, radius: 2, children: /* @__PURE__ */ jsxRuntime.jsx(CreatePromptFieldBased, {}) })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      ui.TabPanel,
      {
        "aria-labelledby": "user-input-tab",
        hidden: id !== "user-input-tab",
        id: "user-input-tab",
        children: /* @__PURE__ */ jsxRuntime.jsxs(ui.Stack, { marginTop: 2, padding: 4, children: [
          /* @__PURE__ */ jsxRuntime.jsx(CreatePromptPlaceholder, {}),
          /* @__PURE__ */ jsxRuntime.jsx(PromptPlaceholderOverview, { isEdit: !0 })
        ] })
      }
    )
  ] });
}, DialogSaveTemplate = (props) => {
  const {
    children,
    dialog: { id, template }
  } = props, inProgress = useTypedSelector((state) => state.templates.inProgress), isEditDialog = typeof template < "u", [title, setTitle] = r.useState(template?.title), [prompt, setPrompt] = r.useState(template?.prompt), promptPlaceholders2 = useTypedSelector((state) => selectAllPlaceholdersPrompts(state)), promptFieldBased = useTypedSelector((state) => selectAllFieldBasedPrompts(state)), deletedPromptPlaceholders = useTypedSelector((state) => selectAllDeletedPrompts(state)), dispatch = reactRedux.useDispatch(), handleClose = () => {
    dispatch(dialogActions.clear());
  }, handleClick = () => {
    const updatedTemplate = {
      title,
      prompt,
      promptPlaceholders: promptPlaceholders2,
      promptFieldBased: combineArrays(promptFieldBased, template?.promptFieldBased)
    };
    isEditDialog ? (updatedTemplate._id = template?._id, updatedTemplate._updatedAt = (/* @__PURE__ */ new Date()).toDateString(), dispatch(templateActions.updateRequest({ template: updatedTemplate }))) : dispatch(
      templateActions.createRequest({
        template: updatedTemplate
      })
    ), dispatch(templateActions.setSelectedValue({ template: updatedTemplate, value: !1 }));
  };
  return r.useEffect(() => {
    let updatedPrompt = prompt ?? "";
    if (console.log("updatedpropt", updatedPrompt), promptPlaceholders2.forEach((pp) => {
      const virtualPlaceholder = visualizePromptPlaceholder(pp.name);
      pp.deleted && (console.log("delete the following prompt", pp), updatedPrompt = updatedPrompt.replaceAll(virtualPlaceholder, "")), updatedPrompt += ` ${virtualPlaceholder}`, console.log("updatedpropt II", updatedPrompt);
    }), console.log("last", updatedPrompt), setPrompt(updatedPrompt.trim()), promptFieldBased.length) {
      const lastItem = promptFieldBased[promptFieldBased.length - 1];
      setPrompt(`${prompt ?? ""} ${visualizePromptFieldBased(lastItem)}`);
    }
  }, [promptPlaceholders2, promptFieldBased, deletedPromptPlaceholders]), /* @__PURE__ */ jsxRuntime.jsx("div", { children: /* @__PURE__ */ jsxRuntime.jsx(
    Dialog,
    {
      header: "Create an new template for AI text generation",
      id,
      width: 3,
      onClose: handleClose,
      children: /* @__PURE__ */ jsxRuntime.jsxs(ui.Grid, { columns: [1], gap: [1, 1, 2, 3], padding: 4, children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          ui.TextInput,
          {
            onChange: (event) => setTitle(event.currentTarget.value),
            placeholder: "Template Title",
            value: title
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          ui.TextArea,
          {
            value: prompt,
            onChange: (e) => setPrompt(e.currentTarget.value),
            rows: 5,
            placeholder: "Enter your prompt"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(PromptOptions, {}),
        /* @__PURE__ */ jsxRuntime.jsx(
          ui.Button,
          {
            disabled: !title || !prompt,
            fontSize: [1, 1, 1],
            icon: isEditDialog ? CheckmarkCircleIcon : AddIcon,
            padding: [3, 3, 4],
            text: isEditDialog ? "Save changes" : "Add template",
            onClick: handleClick,
            loading: inProgress,
            tone: "default"
          }
        ),
        children
      ] })
    }
  ) });
}, Dialogs = () => {
  const currentDialogs = useTypedSelector((state) => state.dialog.items), renderDialogs = (dialogs, index) => {
    if (dialogs.length === 0 || index >= dialogs.length)
      return null;
    const dialog = dialogs[index], childDialogs = renderDialogs(dialogs, index + 1);
    return dialog.type === "modifyTemplateDialog" ? /* @__PURE__ */ jsxRuntime.jsx(DialogSaveTemplate, { dialog, children: childDialogs }, index) : dialog.type === "confirmDeleteTemplateDialog" ? /* @__PURE__ */ jsxRuntime.jsx(DialogDeleteTemplate, { dialog, children: childDialogs }, index) : dialog.type === "dialogTemplates" ? /* @__PURE__ */ jsxRuntime.jsx(DialogOverviewTemplates, { dialog, children: childDialogs }, index) : dialog.type === "dialogCreatePromptProperties" ? /* @__PURE__ */ jsxRuntime.jsx(DialogCreatePrompt, { dialog, children: childDialogs }, index) : null;
  };
  return renderDialogs(currentDialogs, 0);
};
var __assign = function() {
  return __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
    }
    return t;
  }, __assign.apply(this, arguments);
};
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from2.length, ar; i < l; i++)
    (ar || !(i in from2)) && (ar || (ar = Array.prototype.slice.call(from2, 0, i)), ar[i] = from2[i]);
  return to.concat(ar || Array.prototype.slice.call(from2));
}
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    return cache[arg] === void 0 && (cache[arg] = fn(arg)), cache[arg];
  };
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, isPropValid = /* @__PURE__ */ memoize(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
), MS = "-ms-", MOZ = "-moz-", WEBKIT = "-webkit-", COMMENT = "comm", RULESET = "rule", DECLARATION = "decl", IMPORT = "@import", KEYFRAMES = "@keyframes", LAYER = "@layer", abs = Math.abs, from = String.fromCharCode, assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search, position2) {
  return value.indexOf(search, position2);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
function filter(array, pattern) {
  return array.filter(function(value) {
    return !match(value, pattern);
  });
}
var line = 1, column = 1, length = 0, position = 0, character = 0, characters = "";
function node(value, root, parent, type, props, children, length2, siblings) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "", siblings };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
}
function lift(root) {
  for (; root.root; )
    root = copy(root.root, { children: [root] });
  append(root, root.siblings);
}
function char() {
  return character;
}
function prev() {
  return character = position > 0 ? charat(characters, --position) : 0, column--, character === 10 && (column = 1, line--), character;
}
function next() {
  return character = position < length ? charat(characters, position++) : 0, column++, character === 10 && (column = 1, line++), character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  for (; (character = peek()) && character < 33; )
    next();
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  for (; --count && next() && !(character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97); )
    ;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  for (; next(); )
    switch (character) {
      // ] ) " '
      case type:
        return position;
      // " '
      case 34:
      case 39:
        type !== 34 && type !== 39 && delimiter(character);
        break;
      // (
      case 40:
        type === 41 && delimiter(type);
        break;
      // \
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  for (; next() && type + character !== 57; )
    if (type + character === 84 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  for (; !token(peek()); )
    next();
  return slice(index, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  for (var index = 0, offset = 0, length2 = pseudo, atrule = 0, property = 0, previous = 0, variable = 1, scanning = 1, ampersand = 1, character2 = 0, type = "", props = rules, children = rulesets, reference = rule, characters2 = type; scanning; )
    switch (previous = character2, character2 = next()) {
      // (
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1 && (ampersand = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      // \
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      // /
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      // {
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      // } ; \0
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          // \0 }
          case 0:
          case 125:
            scanning = 0;
          // ;
          case 59 + offset:
            ampersand == -1 && (characters2 = replace(characters2, /\f/g, "")), property > 0 && strlen(characters2) - length2 && append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
            break;
          // @ ;
          case 59:
            characters2 += ";";
          // { rule/at-rule
          default:
            if (append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets), character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      // :
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          // &
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          // ,
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          // @
          case 64:
            peek() === 45 && (characters2 += delimit(next())), atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          // -
          case 45:
            previous === 45 && strlen(characters2) == 2 && (variable = 0);
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2, siblings) {
  for (var post = offset - 1, rule = offset === 0 ? rules : [""], size = sizeof(rule), i = 0, j2 = 0, k2 = 0; i < index; ++i)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i])), z2 = value; x2 < size; ++x2)
      (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2]))) && (props[k2++] = z2);
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
}
function comment(value, root, parent, siblings) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
function declaration(value, root, parent, length2, siblings) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
}
function prefix(value, length2, children) {
  switch (hash(value, length2)) {
    // color-adjust
    case 5103:
      return WEBKIT + "print-" + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // tab-size
    case 4789:
      return MOZ + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // writing-mode
    case 5936:
      switch (charat(value, length2 + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        // vertical-r(l)
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        // horizontal(-)tb
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return WEBKIT + value + MS + value + value;
    // order
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    // align-items
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    // align-self
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (match(value, /flex-|baseline/) ? "" : MS + "grid-row-" + replace(value, /flex-|-self/g, "")) + value;
    // align-content
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
    // flex-shrink
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    // flex-basis
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    // flex-grow
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    // transition
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    // cursor
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    // background, background-image
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    // justify-content
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    // justify-self
    case 4200:
      if (!match(value, /flex-|baseline/)) return MS + "grid-column-align" + substr(value, length2) + value;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return MS + replace(value, "template-", "") + value;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return children && children.some(function(element, index) {
        return length2 = index, match(element.props, /grid-\w+-end/);
      }) ? ~indexof(value + (children = children[length2].value), "span", 0) ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span", 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";" : MS + replace(value, "-start", "") + value;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return children && children.some(function(element) {
        return match(element.props, /grid-\w+-start/);
      }) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          // (s)tretch
          case 115:
            return ~indexof(value, "stretch", 0) ? prefix(replace(value, "stretch", "fill-available"), length2, children) + value : value;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_2, a, b, c, d, e, f2) {
        return MS + a + ":" + b + f2 + (c ? MS + a + "-span:" + (d ? e : +e - +b) + f2 : "") + value;
      });
    // position: sticky
    case 4949:
      if (charat(value, length2 + 6) === 121)
        return replace(value, ":", ":" + WEBKIT) + value;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        // (inline-)?gri(d)
        case 100:
          return replace(value, ":", ":" + MS) + value;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return replace(value, "scroll-", "scroll-snap-") + value;
  }
  return value;
}
function serialize(children, callback) {
  for (var output = "", i = 0; i < children.length; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      if (!strlen(element.value = element.props.join(","))) return "";
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    for (var output = "", i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    element.root || (element = element.return) && callback(element);
  };
}
function prefixer(element, index, children, callback) {
  if (element.length > -1 && !element.return)
    switch (element.type) {
      case DECLARATION:
        element.return = prefix(element.value, element.length, children);
        return;
      case KEYFRAMES:
        return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
      case RULESET:
        if (element.length)
          return combine(children = element.props, function(value) {
            switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] })), lift(copy(element, { props: [value] })), assign(element, { props: filter(children, callback) });
                break;
              // :placeholder
              case "::placeholder":
                lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] })), lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] })), lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] })), lift(copy(element, { props: [value] })), assign(element, { props: filter(children, callback) });
                break;
            }
            return "";
          });
    }
}
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, f = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", m = "active", y = "data-styled-version", v = "6.1.15", g = `/*!sc*/
`, S = typeof window < "u" && "HTMLElement" in window, w = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), E = /invalid hook call/i, N = /* @__PURE__ */ new Set(), P = function(t, n) {
  if (process.env.NODE_ENV !== "production") {
    var r$1 = n ? ' with the id of "'.concat(n, '"') : "", s = "The component ".concat(t).concat(r$1, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var a = !0;
      console.error = function(t2) {
        for (var n2 = [], r2 = 1; r2 < arguments.length; r2++) n2[r2 - 1] = arguments[r2];
        E.test(t2) ? (a = !1, N.delete(s)) : i.apply(void 0, __spreadArray([t2], n2, !1));
      }, r.useRef(), a && !N.has(s) && (console.warn(s), N.add(s));
    } catch (e) {
      E.test(e.message) && N.delete(s);
    } finally {
      console.error = i;
    }
  }
}, _ = Object.freeze([]), C = Object.freeze({});
function I(e, t, n) {
  return n === void 0 && (n = C), e.theme !== n.theme && e.theme || t || n.theme;
}
var A = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), O = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, D = /(^-|-$)/g;
function R(e) {
  return e.replace(O, "-").replace(D, "");
}
var T = /(a)(d)/gi, k = 52, j = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function x(e) {
  var t, n = "";
  for (t = Math.abs(e); t > k; t = t / k | 0) n = j(t % k) + n;
  return (j(t % k) + n).replace(T, "$1-$2");
}
var V, F = 5381, M = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, z = function(e) {
  return M(F, e);
};
function $(e) {
  return x(z(e) >>> 0);
}
function B(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function L(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var G = typeof Symbol == "function" && Symbol.for, Y = G ? Symbol.for("react.memo") : 60115, q = G ? Symbol.for("react.forward_ref") : 60112, W = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, H = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, U = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, J = ((V = {})[q] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, V[Y] = U, V);
function X(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Y ? U : "$$typeof" in e ? J[e.$$typeof] : W;
  var t;
}
var Z = Object.defineProperty, K = Object.getOwnPropertyNames, Q = Object.getOwnPropertySymbols, ee = Object.getOwnPropertyDescriptor, te = Object.getPrototypeOf, ne = Object.prototype;
function re(e, t, n) {
  if (typeof t != "string") {
    if (ne) {
      var r2 = te(t);
      r2 && r2 !== ne && re(e, r2, n);
    }
    var o = K(t);
    Q && (o = o.concat(Q(t)));
    for (var s = X(e), i = X(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in H || n && n[c] || i && c in i || s && c in s)) {
        var l = ee(t, c);
        try {
          Z(e, c, l);
        } catch {
        }
      }
    }
  }
  return e;
}
function oe(e) {
  return typeof e == "function";
}
function se(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ie(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ae(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r2 = 1; r2 < e.length; r2++) n += e[r2];
  return n;
}
function ce(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function le(e, t, n) {
  if (n === void 0 && (n = !1), !n && !ce(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r2 = 0; r2 < t.length; r2++) e[r2] = le(e[r2], t[r2]);
  else if (ce(t)) for (var r2 in t) e[r2] = le(e[r2], t[r2]);
  return e;
}
function ue(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var pe = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function de() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r2 = [], o = 1, s = e.length; o < s; o += 1) r2.push(e[o]);
  return r2.forEach(function(e2) {
    n = n.replace(/%[a-z]/, e2);
  }), n;
}
function he(t) {
  for (var n = [], r2 = 1; r2 < arguments.length; r2++) n[r2 - 1] = arguments[r2];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(de.apply(void 0, __spreadArray([pe[t]], n, !1)).trim());
}
var fe = function() {
  function e(e2) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e2;
  }
  return e.prototype.indexOfGroup = function(e2) {
    for (var t = 0, n = 0; n < e2; n++) t += this.groupSizes[n];
    return t;
  }, e.prototype.insertRules = function(e2, t) {
    if (e2 >= this.groupSizes.length) {
      for (var n = this.groupSizes, r2 = n.length, o = r2; e2 >= o; ) if ((o <<= 1) < 0) throw he(16, "".concat(e2));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
      for (var s = r2; s < o; s++) this.groupSizes[s] = 0;
    }
    for (var i = this.indexOfGroup(e2 + 1), a = (s = 0, t.length); s < a; s++) this.tag.insertRule(i, t[s]) && (this.groupSizes[e2]++, i++);
  }, e.prototype.clearGroup = function(e2) {
    if (e2 < this.length) {
      var t = this.groupSizes[e2], n = this.indexOfGroup(e2), r2 = n + t;
      this.groupSizes[e2] = 0;
      for (var o = n; o < r2; o++) this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(e2) {
    var t = "";
    if (e2 >= this.length || this.groupSizes[e2] === 0) return t;
    for (var n = this.groupSizes[e2], r2 = this.indexOfGroup(e2), o = r2 + n, s = r2; s < o; s++) t += "".concat(this.tag.getRule(s)).concat(g);
    return t;
  }, e;
}(), me = 1 << 30, ye = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), ge = 1, Se = function(e) {
  if (ye.has(e)) return ye.get(e);
  for (; ve.has(ge); ) ge++;
  var t = ge++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > me)) throw he(16, "".concat(t));
  return ye.set(e, t), ve.set(t, e), t;
}, we = function(e, t) {
  ge = t + 1, ye.set(e, t), ve.set(t, e);
}, be = "style[".concat(f, "][").concat(y, '="').concat(v, '"]'), Ee = new RegExp("^".concat(f, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ne = function(e, t, n) {
  for (var r2, o = n.split(","), s = 0, i = o.length; s < i; s++) (r2 = o[s]) && e.registerName(t, r2);
}, Pe = function(e, t) {
  for (var n, r2 = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(g), o = [], s = 0, i = r2.length; s < i; s++) {
    var a = r2[s].trim();
    if (a) {
      var c = a.match(Ee);
      if (c) {
        var l = 0 | parseInt(c[1], 10), u = c[2];
        l !== 0 && (we(u, l), Ne(e, u, c[3]), e.getTag().insertRules(l, o)), o.length = 0;
      } else o.push(a);
    }
  }
}, _e = function(e) {
  for (var t = document.querySelectorAll(be), n = 0, r2 = t.length; n < r2; n++) {
    var o = t[n];
    o && o.getAttribute(f) !== m && (Pe(e, o), o.parentNode && o.parentNode.removeChild(o));
  }
};
function Ce() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ie = function(e) {
  var t = document.head, n = e || t, r2 = document.createElement("style"), o = function(e2) {
    var t2 = Array.from(e2.querySelectorAll("style[".concat(f, "]")));
    return t2[t2.length - 1];
  }(n), s = o !== void 0 ? o.nextSibling : null;
  r2.setAttribute(f, m), r2.setAttribute(y, v);
  var i = Ce();
  return i && r2.setAttribute("nonce", i), n.insertBefore(r2, s), r2;
}, Ae = function() {
  function e(e2) {
    this.element = Ie(e2), this.element.appendChild(document.createTextNode("")), this.sheet = function(e3) {
      if (e3.sheet) return e3.sheet;
      for (var t = document.styleSheets, n = 0, r2 = t.length; n < r2; n++) {
        var o = t[n];
        if (o.ownerNode === e3) return o;
      }
      throw he(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(e2, t) {
    try {
      return this.sheet.insertRule(t, e2), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(e2) {
    this.sheet.deleteRule(e2), this.length--;
  }, e.prototype.getRule = function(e2) {
    var t = this.sheet.cssRules[e2];
    return t && t.cssText ? t.cssText : "";
  }, e;
}(), Oe = function() {
  function e(e2) {
    this.element = Ie(e2), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(e2, t) {
    if (e2 <= this.length && e2 >= 0) {
      var n = document.createTextNode(t);
      return this.element.insertBefore(n, this.nodes[e2] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(e2) {
    this.element.removeChild(this.nodes[e2]), this.length--;
  }, e.prototype.getRule = function(e2) {
    return e2 < this.length ? this.nodes[e2].textContent : "";
  }, e;
}(), De = function() {
  function e(e2) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(e2, t) {
    return e2 <= this.length && (this.rules.splice(e2, 0, t), this.length++, !0);
  }, e.prototype.deleteRule = function(e2) {
    this.rules.splice(e2, 1), this.length--;
  }, e.prototype.getRule = function(e2) {
    return e2 < this.length ? this.rules[e2] : "";
  }, e;
}(), Re = S, Te = { isServer: !S, useCSSOMInjection: !w }, ke = function() {
  function e(e2, n, r2) {
    e2 === void 0 && (e2 = C), n === void 0 && (n = {});
    var o = this;
    this.options = __assign(__assign({}, Te), e2), this.gs = n, this.names = new Map(r2), this.server = !!e2.isServer, !this.server && S && Re && (Re = !1, _e(this)), ue(this, function() {
      return function(e3) {
        for (var t = e3.getTag(), n2 = t.length, r3 = "", o2 = function(n3) {
          var o3 = function(e4) {
            return ve.get(e4);
          }(n3);
          if (o3 === void 0) return "continue";
          var s2 = e3.names.get(o3), i = t.getGroup(n3);
          if (s2 === void 0 || !s2.size || i.length === 0) return "continue";
          var a = "".concat(f, ".g").concat(n3, '[id="').concat(o3, '"]'), c = "";
          s2 !== void 0 && s2.forEach(function(e4) {
            e4.length > 0 && (c += "".concat(e4, ","));
          }), r3 += "".concat(i).concat(a, '{content:"').concat(c, '"}').concat(g);
        }, s = 0; s < n2; s++) o2(s);
        return r3;
      }(o);
    });
  }
  return e.registerId = function(e2) {
    return Se(e2);
  }, e.prototype.rehydrate = function() {
    !this.server && S && _e(this);
  }, e.prototype.reconstructWithOptions = function(n, r2) {
    return r2 === void 0 && (r2 = !0), new e(__assign(__assign({}, this.options), n), this.gs, r2 && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(e2) {
    return this.gs[e2] = (this.gs[e2] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (e2 = function(e3) {
      var t = e3.useCSSOMInjection, n = e3.target;
      return e3.isServer ? new De(n) : t ? new Ae(n) : new Oe(n);
    }(this.options), new fe(e2)));
    var e2;
  }, e.prototype.hasNameForId = function(e2, t) {
    return this.names.has(e2) && this.names.get(e2).has(t);
  }, e.prototype.registerName = function(e2, t) {
    if (Se(e2), this.names.has(e2)) this.names.get(e2).add(t);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(t), this.names.set(e2, n);
    }
  }, e.prototype.insertRules = function(e2, t, n) {
    this.registerName(e2, t), this.getTag().insertRules(Se(e2), n);
  }, e.prototype.clearNames = function(e2) {
    this.names.has(e2) && this.names.get(e2).clear();
  }, e.prototype.clearRules = function(e2) {
    this.getTag().clearGroup(Se(e2)), this.clearNames(e2);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), je = /&/g, xe = /^\s*\/\/.*$/gm;
function Ve(e, t) {
  return e.map(function(e2) {
    return e2.type === "rule" && (e2.value = "".concat(t, " ").concat(e2.value), e2.value = e2.value.replaceAll(",", ",".concat(t, " ")), e2.props = e2.props.map(function(e3) {
      return "".concat(t, " ").concat(e3);
    })), Array.isArray(e2.children) && e2.type !== "@keyframes" && (e2.children = Ve(e2.children, t)), e2;
  });
}
function Fe(e) {
  var t, n, r2, o = C, s = o.options, i = s === void 0 ? C : s, a = o.plugins, c = a === void 0 ? _ : a, l = function(e2, r3, o2) {
    return o2.startsWith(n) && o2.endsWith(n) && o2.replaceAll(n, "").length > 0 ? ".".concat(t) : e2;
  }, u = c.slice();
  u.push(function(e2) {
    e2.type === RULESET && e2.value.includes("&") && (e2.props[0] = e2.props[0].replace(je, n).replace(r2, l));
  }), i.prefix && u.push(prefixer), u.push(stringify);
  var p = function(e2, o2, s2, a2) {
    o2 === void 0 && (o2 = ""), s2 === void 0 && (s2 = ""), a2 === void 0 && (a2 = "&"), t = a2, n = o2, r2 = new RegExp("\\".concat(n, "\\b"), "g");
    var c2 = e2.replace(xe, ""), l2 = compile(s2 || o2 ? "".concat(s2, " ").concat(o2, " { ").concat(c2, " }") : c2);
    i.namespace && (l2 = Ve(l2, i.namespace));
    var p2 = [];
    return serialize(l2, middleware(u.concat(rulesheet(function(e3) {
      return p2.push(e3);
    })))), p2;
  };
  return p.hash = c.length ? c.reduce(function(e2, t2) {
    return t2.name || he(15), M(e2, t2.name);
  }, F).toString() : "", p;
}
var Me = new ke(), ze = Fe(), $e = r__default.default.createContext({ shouldForwardProp: void 0, styleSheet: Me, stylis: ze });
r__default.default.createContext(void 0);
function Ge() {
  return r.useContext($e);
}
var qe = function() {
  function e(e2, t) {
    var n = this;
    this.inject = function(e3, t2) {
      t2 === void 0 && (t2 = ze);
      var r2 = n.name + t2.hash;
      e3.hasNameForId(n.id, r2) || e3.insertRules(n.id, r2, t2(n.rules, r2, "@keyframes"));
    }, this.name = e2, this.id = "sc-keyframes-".concat(e2), this.rules = t, ue(this, function() {
      throw he(12, String(n.name));
    });
  }
  return e.prototype.getName = function(e2) {
    return e2 === void 0 && (e2 = ze), this.name + e2.hash;
  }, e;
}(), We = function(e) {
  return e >= "A" && e <= "Z";
};
function He(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r2 = e[n];
    if (n === 1 && r2 === "-" && e[0] === "-") return e;
    We(r2) ? t += "-" + r2.toLowerCase() : t += r2;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Ue = function(e) {
  return e == null || e === !1 || e === "";
}, Je = function(t) {
  var n, r2, o = [];
  for (var s in t) {
    var i = t[s];
    t.hasOwnProperty(s) && !Ue(i) && (Array.isArray(i) && i.isCss || oe(i) ? o.push("".concat(He(s), ":"), i, ";") : ce(i) ? o.push.apply(o, __spreadArray(__spreadArray(["".concat(s, " {")], Je(i), !1), ["}"], !1)) : o.push("".concat(He(s), ": ").concat((n = s, (r2 = i) == null || typeof r2 == "boolean" || r2 === "" ? "" : typeof r2 != "number" || r2 === 0 || n in unitlessKeys || n.startsWith("--") ? String(r2).trim() : "".concat(r2, "px")), ";")));
  }
  return o;
};
function Xe(e, t, n, r2) {
  if (Ue(e)) return [];
  if (se(e)) return [".".concat(e.styledComponentId)];
  if (oe(e)) {
    if (!oe(s = e) || s.prototype && s.prototype.isReactComponent || !t) return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof qe || ce(o) || o === null || console.error("".concat(B(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Xe(o, t, n, r2);
  }
  var s;
  return e instanceof qe ? n ? (e.inject(n, r2), [e.getName(r2)]) : [e] : ce(e) ? Je(e) : Array.isArray(e) ? Array.prototype.concat.apply(_, e.map(function(e2) {
    return Xe(e2, t, n, r2);
  })) : [e.toString()];
}
function Ze(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (oe(n) && !se(n)) return !1;
  }
  return !0;
}
var Ke = z(v), Qe = function() {
  function e(e2, t, n) {
    this.rules = e2, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Ze(e2), this.componentId = t, this.baseHash = M(Ke, t), this.baseStyle = n, ke.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(e2, t, n) {
    var r2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e2, t, n) : "";
    if (this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) r2 = ie(r2, this.staticRulesId);
    else {
      var o = ae(Xe(this.rules, e2, t, n)), s = x(M(this.baseHash, o) >>> 0);
      if (!t.hasNameForId(this.componentId, s)) {
        var i = n(o, ".".concat(s), void 0, this.componentId);
        t.insertRules(this.componentId, s, i);
      }
      r2 = ie(r2, s), this.staticRulesId = s;
    }
    else {
      for (var a = M(this.baseHash, n.hash), c = "", l = 0; l < this.rules.length; l++) {
        var u = this.rules[l];
        if (typeof u == "string") c += u, process.env.NODE_ENV !== "production" && (a = M(a, u));
        else if (u) {
          var p = ae(Xe(u, e2, t, n));
          a = M(a, p + l), c += p;
        }
      }
      if (c) {
        var d = x(a >>> 0);
        t.hasNameForId(this.componentId, d) || t.insertRules(this.componentId, d, n(c, ".".concat(d), void 0, this.componentId)), r2 = ie(r2, d);
      }
    }
    return r2;
  }, e;
}(), et = r__default.default.createContext(void 0), ot = {}, st = /* @__PURE__ */ new Set();
function it(e, o, s) {
  var i = se(e), a = e, c = !L(e), p = o.attrs, d = p === void 0 ? _ : p, h = o.componentId, f2 = h === void 0 ? function(e2, t) {
    var n = typeof e2 != "string" ? "sc" : R(e2);
    ot[n] = (ot[n] || 0) + 1;
    var r2 = "".concat(n, "-").concat($(v + n + ot[n]));
    return t ? "".concat(t, "-").concat(r2) : r2;
  }(o.displayName, o.parentComponentId) : h, m2 = o.displayName, y2 = m2 === void 0 ? function(e2) {
    return L(e2) ? "styled.".concat(e2) : "Styled(".concat(B(e2), ")");
  }(e) : m2, g2 = o.displayName && o.componentId ? "".concat(R(o.displayName), "-").concat(o.componentId) : o.componentId || f2, S2 = i && a.attrs ? a.attrs.concat(d).filter(Boolean) : d, w2 = o.shouldForwardProp;
  if (i && a.shouldForwardProp) {
    var b = a.shouldForwardProp;
    if (o.shouldForwardProp) {
      var E2 = o.shouldForwardProp;
      w2 = function(e2, t) {
        return b(e2, t) && E2(e2, t);
      };
    } else w2 = b;
  }
  var N2 = new Qe(s, g2, i ? a.componentStyle : void 0);
  function O2(e2, o2) {
    return function(e3, o3, s2) {
      var i2 = e3.attrs, a2 = e3.componentStyle, c2 = e3.defaultProps, p2 = e3.foldedComponentIds, d2 = e3.styledComponentId, h2 = e3.target, f3 = r__default.default.useContext(et), m3 = Ge(), y3 = e3.shouldForwardProp || m3.shouldForwardProp;
      process.env.NODE_ENV !== "production" && r.useDebugValue(d2);
      var v2 = I(o3, f3, c2) || C, g3 = function(e4, n, r2) {
        for (var o4, s3 = __assign(__assign({}, n), { className: void 0, theme: r2 }), i3 = 0; i3 < e4.length; i3 += 1) {
          var a3 = oe(o4 = e4[i3]) ? o4(s3) : o4;
          for (var c3 in a3) s3[c3] = c3 === "className" ? ie(s3[c3], a3[c3]) : c3 === "style" ? __assign(__assign({}, s3[c3]), a3[c3]) : a3[c3];
        }
        return n.className && (s3.className = ie(s3.className, n.className)), s3;
      }(i2, o3, v2), S3 = g3.as || h2, w3 = {};
      for (var b2 in g3) g3[b2] === void 0 || b2[0] === "$" || b2 === "as" || b2 === "theme" && g3.theme === v2 || (b2 === "forwardedAs" ? w3.as = g3.forwardedAs : y3 && !y3(b2, S3) || (w3[b2] = g3[b2], y3 || process.env.NODE_ENV !== "development" || isPropValid(b2) || st.has(b2) || !A.has(S3) || (st.add(b2), console.warn('styled-components: it looks like an unknown prop "'.concat(b2, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var E3 = function(e4, t) {
        var n = Ge(), r$1 = e4.generateAndInjectStyles(t, n.styleSheet, n.stylis);
        return process.env.NODE_ENV !== "production" && r.useDebugValue(r$1), r$1;
      }(a2, g3);
      process.env.NODE_ENV !== "production" && e3.warnTooManyClasses && e3.warnTooManyClasses(E3);
      var N3 = ie(p2, d2);
      return E3 && (N3 += " " + E3), g3.className && (N3 += " " + g3.className), w3[L(S3) && !A.has(S3) ? "class" : "className"] = N3, s2 && (w3.ref = s2), r.createElement(S3, w3);
    }(D2, e2, o2);
  }
  O2.displayName = y2;
  var D2 = r__default.default.forwardRef(O2);
  return D2.attrs = S2, D2.componentStyle = N2, D2.displayName = y2, D2.shouldForwardProp = w2, D2.foldedComponentIds = i ? ie(a.foldedComponentIds, a.styledComponentId) : "", D2.styledComponentId = g2, D2.target = i ? a.target : e, Object.defineProperty(D2, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(e2) {
    this._foldedDefaultProps = i ? function(e3) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      for (var r2 = 0, o2 = t; r2 < o2.length; r2++) le(e3, o2[r2], !0);
      return e3;
    }({}, a.defaultProps, e2) : e2;
  } }), process.env.NODE_ENV !== "production" && (P(y2, g2), D2.warnTooManyClasses = /* @__PURE__ */ function(e2, t) {
    var n = {}, r2 = !1;
    return function(o2) {
      if (!r2 && (n[o2] = !0, Object.keys(n).length >= 200)) {
        var s2 = t ? ' with the id of "'.concat(t, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(e2).concat(s2, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), r2 = !0, n = {};
      }
    };
  }(y2, g2)), ue(D2, function() {
    return ".".concat(D2.styledComponentId);
  }), c && re(D2, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), D2;
}
function at(e, t) {
  for (var n = [e[0]], r2 = 0, o = t.length; r2 < o; r2 += 1) n.push(t[r2], e[r2 + 1]);
  return n;
}
var ct = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function lt(t) {
  for (var n = [], r2 = 1; r2 < arguments.length; r2++) n[r2 - 1] = arguments[r2];
  if (oe(t) || ce(t)) return ct(Xe(at(_, __spreadArray([t], n, !0))));
  var o = t;
  return n.length === 0 && o.length === 1 && typeof o[0] == "string" ? Xe(o) : ct(Xe(at(o, n)));
}
function ut(n, r2, o) {
  if (o === void 0 && (o = C), !r2) throw he(1, r2);
  var s = function(t) {
    for (var s2 = [], i = 1; i < arguments.length; i++) s2[i - 1] = arguments[i];
    return n(r2, o, lt.apply(void 0, __spreadArray([t], s2, !1)));
  };
  return s.attrs = function(e) {
    return ut(n, r2, __assign(__assign({}, o), { attrs: Array.prototype.concat(o.attrs, e).filter(Boolean) }));
  }, s.withConfig = function(e) {
    return ut(n, r2, __assign(__assign({}, o), e));
  }, s;
}
var pt = function(e) {
  return ut(it, e);
}, dt = pt;
A.forEach(function(e) {
  dt[e] = pt(e);
});
function mt(t) {
  for (var n = [], r2 = 1; r2 < arguments.length; r2++) n[r2 - 1] = arguments[r2];
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var o = ae(lt.apply(void 0, __spreadArray([t], n, !1))), s = $(o);
  return new qe(s, o);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var wt = "__sc-".concat(f, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[wt] || (window[wt] = 0), window[wt] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[wt] += 1);
const glow = (color) => mt`
  0% {
    box-shadow: 0 0 5px ${color}80;
  }
  100% {
    box-shadow: 0 0 20px ${color};
  }
`, GlowingDiv = dt.div`
  padding: 4px;
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 10px;
  animation: ${({ borderColor }) => glow(borderColor)} 1.5s infinite alternate;
  width: 100%;
`, ImageGenerationField = ({ props }) => {
  const imageRev = useTypedSelector((state) => state.generatedImage.imageUrl), { onChange } = props;
  return r.useEffect(() => {
    const imageAsset = {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: imageRev
      }
    };
    imageRev && onChange(sanity.PatchEvent.from(sanity.set(imageAsset)));
  }, [imageRev]), props.renderDefault(props);
}, Logo = () => /* @__PURE__ */ jsxRuntime.jsxs("svg", { width: "25", height: "25", viewBox: "0 0 96 96", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsxRuntime.jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 48C0 21.4903 21.3699 0 47.7273 0C74.0863 0 95.4546 21.492 95.4546 48C95.4546 74.5097 74.0847 96 47.7273 96C21.3682 96 0 74.508 0 48ZM5.30303 48C5.30303 24.4359 24.2919 5.33333 47.7273 5.33333C71.1575 5.33333 90.1515 24.4307 90.1515 48C90.1515 71.5642 71.1627 90.6667 47.7273 90.6667C24.297 90.6667 5.30303 71.5693 5.30303 48Z",
      fill: "#084772"
    }
  ),
  /* @__PURE__ */ jsxRuntime.jsx(
    "path",
    {
      d: "M33.187 26.1815H20.1818C30.831 38.9323 54.6739 66.6797 54.6739 66.6797C54.6739 66.6797 56.9357 70.3633 62.0247 70.3633H74.1818L39.1242 29.865C37.7106 27.8816 35.7315 26.1815 33.187 26.1815Z",
      fill: "#084772"
    }
  ),
  /* @__PURE__ */ jsxRuntime.jsx(
    "path",
    {
      d: "M33.601 70.3635H20.7272C31.2688 57.6126 54.8709 29.8652 54.8709 29.8652C54.8709 29.8652 57.1098 26.1816 62.1474 26.1816H74.1817L39.4782 66.6799C38.0789 68.6633 36.1198 70.3635 33.601 70.3635Z",
      fill: "#ED6C25"
    }
  )
] }), InputField = ({ props }) => {
  const { elementProps, schemaType } = props, [value, setValue] = r.useState(props.value), [borderColor, setBorderColor] = r.useState("transparent"), prompt = useTypedSelector((state) => state.gemini.prompt || state.openAi.prompt), imageUrl = useTypedSelector((state) => state.generatedImage.imageUrl), inProgress = useTypedSelector(
    (state) => state.gemini.inProgress || state.openAi.inProgress || state.generatedImage.inProgress
  ), error = useTypedSelector(
    (state) => state.gemini.creatingError || state.openAi.creatingError || state.generatedImage.error
  ), dispatch = reactRedux.useDispatch();
  dispatch(geminiActions.checkConfigured());
  const imageStyle = {
    marginLeft: "12px",
    marginRight: "12px"
  }, inputStyle = {
    width: "100%"
  }, handleButtonClick = () => {
    schemaType.name === "image" && dispatch(openAiActions.setGenerateImage({ value: !0 })), dispatch(dialogActions.showTemplatesDialog());
  };
  return r.useEffect(() => {
    if (prompt) {
      const patch = prompt ? sanity.PatchEvent.from(sanity.set(prompt)) : sanity.PatchEvent.from(sanity.unset());
      props.onChange(patch), setValue(prompt), setBorderColor("green");
    } else imageUrl ? setBorderColor("green") : inProgress ? setBorderColor("orange") : error && setBorderColor("red");
  }, [prompt, inProgress, imageUrl]), /* @__PURE__ */ jsxRuntime.jsx(GlowingDiv, { borderColor, children: schemaType.name === "image" ? /* @__PURE__ */ jsxRuntime.jsxs(ui.Flex, { direction: "row", align: "flex-start", justify: "space-between", children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { style: inputStyle, children: /* @__PURE__ */ jsxRuntime.jsx(ImageGenerationField, { props }) }),
    /* @__PURE__ */ jsxRuntime.jsx(ui.Box, { style: imageStyle, onClick: handleButtonClick, children: /* @__PURE__ */ jsxRuntime.jsx(Logo, {}) })
  ] }) : /* @__PURE__ */ jsxRuntime.jsxs(ui.Flex, { direction: "row", align: schemaType.name === "string" ? "center" : "flex-start", children: [
    /* @__PURE__ */ jsxRuntime.jsxs(ui.Stack, { style: inputStyle, children: [
      schemaType.name === "text" && /* @__PURE__ */ jsxRuntime.jsx(ui.TextArea, { ...elementProps, value, rows: 10 }),
      schemaType.name === "string" && /* @__PURE__ */ jsxRuntime.jsx(ui.TextInput, { ...elementProps, value, style: inputStyle })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(ui.Box, { style: imageStyle, onClick: handleButtonClick, children: /* @__PURE__ */ jsxRuntime.jsx(Logo, {}) })
  ] }) });
}, Header = () => {
  const dispatch = reactRedux.useDispatch();
  return /* @__PURE__ */ jsxRuntime.jsx(ui.Box, { marginTop: 2, children: /* @__PURE__ */ jsxRuntime.jsxs(ui.Flex, { padding: 4, direction: "row", justify: "space-between", children: [
    /* @__PURE__ */ jsxRuntime.jsx(SearchField, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(ui.Inline, { space: 3, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        ui.Button,
        {
          fontSize: 1,
          icon: AddIcon,
          tone: "default",
          padding: [3, 3, 4],
          radius: "full",
          text: "Create Template",
          onClick: () => {
            dispatch(dialogActions.showTemplateDialog({ template: null }));
          }
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(AiModelSettingsView, {})
    ] })
  ] }) });
}, AiModelSettingsView = () => {
  const [showSettings, setShowSettings] = r.useState(!1), user = sanity.useCurrentUser();
  return sanity.userHasRole(user, administrator) ? /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      ui.Button,
      {
        fontSize: 1,
        iconRight: CogIcon,
        onClick: (e) => setShowSettings(!showSettings),
        padding: [3, 3, 4],
        radius: "full",
        text: "AI Settings",
        tone: "default"
      }
    ),
    showSettings && /* @__PURE__ */ jsxRuntime.jsx(
      studioSecrets.SettingsView,
      {
        title: "Configure your models",
        namespace: namespaceApis,
        keys: pluginConfigKeys,
        onClose: () => {
          setShowSettings(!1);
        }
      }
    )
  ] }) : /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
}, Notifications = () => {
  const items = useTypedSelector((state) => state.notifications.items), toast = ui.useToast();
  return r.useEffect(() => {
    if (items.length > 0) {
      const lastItem = items[items.length - 1];
      toast.push({
        closable: !0,
        status: lastItem.status,
        title: lastItem.title
      });
    }
  }, [items, items.length, toast]), null;
}, PluginIndex = (_props, apiKeys) => {
  const portalElement = useRootPortalElement("templates-portal"), scheme = sanity.useColorSchemeValue(), sanityClient = useVersionedClient();
  return /* @__PURE__ */ jsxRuntime.jsx(ui.PortalProvider, { element: portalElement, children: /* @__PURE__ */ jsxRuntime.jsx(ReduxProvider, { client: sanityClient, apiKeys, children: /* @__PURE__ */ jsxRuntime.jsx(ui.ThemeProvider, { scheme, theme: ui.studioTheme, children: /* @__PURE__ */ jsxRuntime.jsxs(ui.ToastProvider, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(Notifications, {}),
    /* @__PURE__ */ jsxRuntime.jsx(Dialogs, {}),
    /* @__PURE__ */ jsxRuntime.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntime.jsx(TemplatesOverview, {})
  ] }) }) }) });
}, useRootPortalElement = (className) => {
  const [container] = r.useState(() => document.createElement("div"));
  return r.useEffect(() => (container.classList.add(className), document.body.appendChild(container), () => {
    document.body.removeChild(container);
  }), [container]), container;
}, FieldIndex = (props, apiKeys) => {
  const portalElement = useRootPortalElement("field-portal"), scheme = sanity.useColorSchemeValue(), sanityClient = useVersionedClient();
  return /* @__PURE__ */ jsxRuntime.jsx(ui.PortalProvider, { element: portalElement, children: /* @__PURE__ */ jsxRuntime.jsx(ReduxProvider, { client: sanityClient, apiKeys, children: /* @__PURE__ */ jsxRuntime.jsx(ui.ThemeProvider, { scheme, theme: ui.studioTheme, children: /* @__PURE__ */ jsxRuntime.jsxs(ui.ToastProvider, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(Dialogs, {}),
    /* @__PURE__ */ jsxRuntime.jsx(InputField, { props })
  ] }) }) }) });
}, aiTextGenerationPlugin = sanity.definePlugin((config2) => !config2.geminiApiKey && !config2.openAiApiKey ? (console.error("Plugin not configured"), {}) : {
  name: "sanity-plugin-sanity-ai-text-generation",
  tools: (prev2) => [
    ...prev2,
    {
      name: "templates",
      title: "X Templates",
      component: (props) => PluginIndex({}, config2)
    }
  ],
  form: {
    components: {
      input: (props) => {
        const schemaType = props.schemaType?.name;
        return schemaType === "string" || schemaType === "text" || schemaType === "image" ? FieldIndex({ ...props }, config2) : props.renderDefault(props);
      }
    }
  }
});
exports.aiTextGenerationPlugin = aiTextGenerationPlugin;
//# sourceMappingURL=index.js.map
