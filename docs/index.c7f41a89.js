// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6SQe6":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "528f41f0c7f41a89";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2uJkI":[function(require,module,exports) {
function t(t1) {
    return t1 && t1.__esModule ? t1.default : t1;
}
const e = {
    MESSAGES_HISTORY: document.querySelector(".messages"),
    MESSAGE_INPUT: document.getElementById("form__input"),
    FORMS: {
        SEND_MESSAGE: document.querySelector(".message-field__form"),
        AUTHENTIFICATION: document.querySelector(".authorization-form"),
        AUTHENTIFICATION_CODE: document.querySelector(".authorization-code-form"),
        SETTING_NAME: document.querySelector(".name-form")
    },
    CONTROLS: {
        SETTINGS: document.querySelector(".btn--settings"),
        AUTHORIZATION: document.querySelector(".btn--authorization")
    },
    MODAL: {
        COLLECTION: document.querySelectorAll(".modal"),
        SETTINGS: document.querySelector(".modal-settings"),
        AUTHENTIFICATION: document.querySelector(".modal-authorization"),
        AUTHENTIFICATION_CODE: document.querySelector(".modal-authorization-code"),
        CLOSE_BTN: document.querySelectorAll(".close-modal")
    },
    TEMPLATES: {
        MESSAGE: document.getElementById("message-template")
    }
}, n = "modal", r = "modal--hide", a = "input", o = "message--user", i = {
    WRONG_HTTP_STATUS: "Неверный статус",
    USER_NAME: "Неверное имя пользователя"
}, u = "Выйти";
function s(t2) {
    t2.closest(`.${n}`).classList.add(r);
}
function c(t3) {
    t3.classList.remove(r);
}
function d(t4) {
    t4.reset();
}
new Map([
    [
        e.CONTROLS.SETTINGS,
        e.MODAL.SETTINGS
    ],
    [
        e.CONTROLS.AUTHORIZATION,
        e.MODAL.AUTHENTIFICATION
    ]
]).forEach((t5, e1)=>{
    e1.addEventListener("click", function() {
        t5.classList.toggle(r);
    });
}), e.MODAL.CLOSE_BTN.forEach((t6)=>{
    t6.addEventListener("click", function() {
        e.MODAL.COLLECTION.forEach((t7)=>{
            t7.classList.remove(r), t7.classList.add(r);
        });
    });
});
var l = {};
async function h(e2, n1 = "GET", r1) {
    return await fetch(e2, {
        method: n1,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
            Authorization: `Bearer ${t(l).get("token")}`
        },
        body: JSON.stringify(r1)
    });
}
function f(t8) {
    return t8.status >= 200 && t8.status <= 299;
}
async function m(t9, e3, n2 = "GET", r2) {
    const a1 = {
        [r2]: gt(t9)
    }, o1 = await h(e3, n2, a1);
    return {
        succes: f(o1) ? o1.json() : null,
        error: !f(o1)
    };
}
l = function() {
    function t10(t11) {
        for(var e5 = 1; e5 < arguments.length; e5++){
            var n3 = arguments[e5];
            for(var r3 in n3)t11[r3] = n3[r3];
        }
        return t11;
    }
    function e4(n4, r4) {
        function a2(e6, a3, o3) {
            if ("undefined" != typeof document) {
                "number" == typeof (o3 = t10({}, r4, o3)).expires && (o3.expires = new Date(Date.now() + 864e5 * o3.expires)), o3.expires && (o3.expires = o3.expires.toUTCString()), e6 = encodeURIComponent(e6).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var i1 = "";
                for(var u1 in o3)o3[u1] && (i1 += "; " + u1, !0 !== o3[u1] && (i1 += "=" + o3[u1].split(";")[0]));
                return document.cookie = e6 + "=" + n4.write(a3, e6) + i1;
            }
        }
        function o2(t12) {
            if ("undefined" != typeof document && (!arguments.length || t12)) {
                for(var e7 = document.cookie ? document.cookie.split("; ") : [], r5 = {}, a4 = 0; a4 < e7.length; a4++){
                    var o4 = e7[a4].split("="), i2 = o4.slice(1).join("=");
                    try {
                        var u2 = decodeURIComponent(o4[0]);
                        if (r5[u2] = n4.read(i2, u2), t12 === u2) break;
                    } catch (t) {}
                }
                return t12 ? r5[t12] : r5;
            }
        }
        return Object.create({
            set: a2,
            get: o2,
            remove: function(e8, n5) {
                a2(e8, "", t10({}, n5, {
                    expires: -1
                }));
            },
            withAttributes: function(n6) {
                return e4(this.converter, t10({}, this.attributes, n6));
            },
            withConverter: function(n7) {
                return e4(t10({}, this.converter, n7), this.attributes);
            }
        }, {
            attributes: {
                value: Object.freeze(r4)
            },
            converter: {
                value: Object.freeze(n4)
            }
        });
    }
    return e4({
        read: function(t13) {
            return '"' === t13[0] && (t13 = t13.slice(1, -1)), t13.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
        },
        write: function(t14) {
            return encodeURIComponent(t14).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
        }
    }, {
        path: "/"
    });
}();
const g = "https://mighty-cove-31255.herokuapp.com/api/user", w = "https://mighty-cove-31255.herokuapp.com/api/messages", v = "wss://mighty-cove-31255.herokuapp.com/websockets?";
function T(t15, e9) {
    if (e9.length < t15) throw new TypeError(t15 + " argument" + (t15 > 1 ? "s" : "") + " required, but only " + e9.length + " present");
}
function y(t16) {
    return T(1, arguments), t16 instanceof Date || "object" == typeof t16 && "[object Date]" === Object.prototype.toString.call(t16);
}
function b(t17) {
    T(1, arguments);
    var e10 = Object.prototype.toString.call(t17);
    return t17 instanceof Date || "object" == typeof t17 && "[object Date]" === e10 ? new Date(t17.getTime()) : "number" == typeof t17 || "[object Number]" === e10 ? new Date(t17) : ("string" != typeof t17 && "[object String]" !== e10 || "undefined" == typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn((new Error).stack)), new Date(NaN));
}
function p(t18) {
    if (T(1, arguments), !y(t18) && "number" != typeof t18) return !1;
    var e11 = b(t18);
    return !isNaN(Number(e11));
}
var S = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
}, C = function(t19, e12, n8) {
    var r6, a5 = S[t19];
    return r6 = "string" == typeof a5 ? a5 : 1 === e12 ? a5.one : a5.other.replace("{{count}}", e12.toString()), null != n8 && n8.addSuffix ? n8.comparison && n8.comparison > 0 ? "in " + r6 : r6 + " ago" : r6;
};
function M(t20) {
    return function() {
        var e13 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n9 = e13.width ? String(e13.width) : t20.defaultWidth, r7 = t20.formats[n9] || t20.formats[t20.defaultWidth];
        return r7;
    };
}
var E = {
    date: M({
        formats: {
            full: "EEEE, MMMM do, y",
            long: "MMMM do, y",
            medium: "MMM d, y",
            short: "MM/dd/yyyy"
        },
        defaultWidth: "full"
    }),
    time: M({
        formats: {
            full: "h:mm:ss a zzzz",
            long: "h:mm:ss a z",
            medium: "h:mm:ss a",
            short: "h:mm a"
        },
        defaultWidth: "full"
    }),
    dateTime: M({
        formats: {
            full: "{{date}} 'at' {{time}}",
            long: "{{date}} 'at' {{time}}",
            medium: "{{date}}, {{time}}",
            short: "{{date}}, {{time}}"
        },
        defaultWidth: "full"
    })
}, O = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
function N(t21) {
    return function(e14, n10) {
        var r8, a6 = n10 || {};
        if ("formatting" === (a6.context ? String(a6.context) : "standalone") && t21.formattingValues) {
            var o5 = t21.defaultFormattingWidth || t21.defaultWidth, i3 = a6.width ? String(a6.width) : o5;
            r8 = t21.formattingValues[i3] || t21.formattingValues[o5];
        } else {
            var u3 = t21.defaultWidth, s1 = a6.width ? String(a6.width) : t21.defaultWidth;
            r8 = t21.values[s1] || t21.values[u3];
        }
        return r8[t21.argumentCallback ? t21.argumentCallback(e14) : e14];
    };
}
function D(t22) {
    return function(e15) {
        var n11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r9 = n11.width, a7 = r9 && t22.matchPatterns[r9] || t22.matchPatterns[t22.defaultMatchWidth], o6 = e15.match(a7);
        if (!o6) return null;
        var i4, u4 = o6[0], s2 = r9 && t22.parsePatterns[r9] || t22.parsePatterns[t22.defaultParseWidth], c1 = Array.isArray(s2) ? x(s2, function(t23) {
            return t23.test(u4);
        }) : U(s2, function(t24) {
            return t24.test(u4);
        });
        i4 = t22.valueCallback ? t22.valueCallback(c1) : c1, i4 = n11.valueCallback ? n11.valueCallback(i4) : i4;
        var d1 = e15.slice(u4.length);
        return {
            value: i4,
            rest: d1
        };
    };
}
function U(t25, e16) {
    for(var n12 in t25)if (t25.hasOwnProperty(n12) && e16(t25[n12])) return n12;
}
function x(t26, e17) {
    for(var n13 = 0; n13 < t26.length; n13++)if (e17(t26[n13])) return n13;
}
var A, k = {
    code: "en-US",
    formatDistance: C,
    formatLong: E,
    formatRelative: function(t27, e, n, r) {
        return O[t27];
    },
    localize: {
        ordinalNumber: function(t28, e) {
            var n14 = Number(t28), r10 = n14 % 100;
            if (r10 > 20 || r10 < 10) switch(r10 % 10){
                case 1:
                    return n14 + "st";
                case 2:
                    return n14 + "nd";
                case 3:
                    return n14 + "rd";
            }
            return n14 + "th";
        },
        era: N({
            values: {
                narrow: [
                    "B",
                    "A"
                ],
                abbreviated: [
                    "BC",
                    "AD"
                ],
                wide: [
                    "Before Christ",
                    "Anno Domini"
                ]
            },
            defaultWidth: "wide"
        }),
        quarter: N({
            values: {
                narrow: [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                abbreviated: [
                    "Q1",
                    "Q2",
                    "Q3",
                    "Q4"
                ],
                wide: [
                    "1st quarter",
                    "2nd quarter",
                    "3rd quarter",
                    "4th quarter"
                ]
            },
            defaultWidth: "wide",
            argumentCallback: function(t29) {
                return t29 - 1;
            }
        }),
        month: N({
            values: {
                narrow: [
                    "J",
                    "F",
                    "M",
                    "A",
                    "M",
                    "J",
                    "J",
                    "A",
                    "S",
                    "O",
                    "N",
                    "D"
                ],
                abbreviated: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                ],
                wide: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ]
            },
            defaultWidth: "wide"
        }),
        day: N({
            values: {
                narrow: [
                    "S",
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S"
                ],
                short: [
                    "Su",
                    "Mo",
                    "Tu",
                    "We",
                    "Th",
                    "Fr",
                    "Sa"
                ],
                abbreviated: [
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat"
                ],
                wide: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ]
            },
            defaultWidth: "wide"
        }),
        dayPeriod: N({
            values: {
                narrow: {
                    am: "a",
                    pm: "p",
                    midnight: "mi",
                    noon: "n",
                    morning: "morning",
                    afternoon: "afternoon",
                    evening: "evening",
                    night: "night"
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "midnight",
                    noon: "noon",
                    morning: "morning",
                    afternoon: "afternoon",
                    evening: "evening",
                    night: "night"
                },
                wide: {
                    am: "a.m.",
                    pm: "p.m.",
                    midnight: "midnight",
                    noon: "noon",
                    morning: "morning",
                    afternoon: "afternoon",
                    evening: "evening",
                    night: "night"
                }
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: {
                    am: "a",
                    pm: "p",
                    midnight: "mi",
                    noon: "n",
                    morning: "in the morning",
                    afternoon: "in the afternoon",
                    evening: "in the evening",
                    night: "at night"
                },
                abbreviated: {
                    am: "AM",
                    pm: "PM",
                    midnight: "midnight",
                    noon: "noon",
                    morning: "in the morning",
                    afternoon: "in the afternoon",
                    evening: "in the evening",
                    night: "at night"
                },
                wide: {
                    am: "a.m.",
                    pm: "p.m.",
                    midnight: "midnight",
                    noon: "noon",
                    morning: "in the morning",
                    afternoon: "in the afternoon",
                    evening: "in the evening",
                    night: "at night"
                }
            },
            defaultFormattingWidth: "wide"
        })
    },
    match: {
        ordinalNumber: (A = {
            matchPattern: /^(\d+)(th|st|nd|rd)?/i,
            parsePattern: /\d+/i,
            valueCallback: function(t30) {
                return parseInt(t30, 10);
            }
        }, function(t31) {
            var e18 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n15 = t31.match(A.matchPattern);
            if (!n15) return null;
            var r11 = n15[0], a8 = t31.match(A.parsePattern);
            if (!a8) return null;
            var o7 = A.valueCallback ? A.valueCallback(a8[0]) : a8[0];
            o7 = e18.valueCallback ? e18.valueCallback(o7) : o7;
            var i5 = t31.slice(r11.length);
            return {
                value: o7,
                rest: i5
            };
        }),
        era: D({
            matchPatterns: {
                narrow: /^(b|a)/i,
                abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                wide: /^(before christ|before common era|anno domini|common era)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                any: [
                    /^b/i,
                    /^(a|c)/i
                ]
            },
            defaultParseWidth: "any"
        }),
        quarter: D({
            matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^q[1234]/i,
                wide: /^[1234](th|st|nd|rd)? quarter/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                any: [
                    /1/i,
                    /2/i,
                    /3/i,
                    /4/i
                ]
            },
            defaultParseWidth: "any",
            valueCallback: function(t32) {
                return t32 + 1;
            }
        }),
        month: D({
            matchPatterns: {
                narrow: /^[jfmasond]/i,
                abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [
                    /^j/i,
                    /^f/i,
                    /^m/i,
                    /^a/i,
                    /^m/i,
                    /^j/i,
                    /^j/i,
                    /^a/i,
                    /^s/i,
                    /^o/i,
                    /^n/i,
                    /^d/i
                ],
                any: [
                    /^ja/i,
                    /^f/i,
                    /^mar/i,
                    /^ap/i,
                    /^may/i,
                    /^jun/i,
                    /^jul/i,
                    /^au/i,
                    /^s/i,
                    /^o/i,
                    /^n/i,
                    /^d/i
                ]
            },
            defaultParseWidth: "any"
        }),
        day: D({
            matchPatterns: {
                narrow: /^[smtwf]/i,
                short: /^(su|mo|tu|we|th|fr|sa)/i,
                abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [
                    /^s/i,
                    /^m/i,
                    /^t/i,
                    /^w/i,
                    /^t/i,
                    /^f/i,
                    /^s/i
                ],
                any: [
                    /^su/i,
                    /^m/i,
                    /^tu/i,
                    /^w/i,
                    /^th/i,
                    /^f/i,
                    /^sa/i
                ]
            },
            defaultParseWidth: "any"
        }),
        dayPeriod: D({
            matchPatterns: {
                narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
            },
            defaultMatchWidth: "any",
            parsePatterns: {
                any: {
                    am: /^a/i,
                    pm: /^p/i,
                    midnight: /^mi/i,
                    noon: /^no/i,
                    morning: /morning/i,
                    afternoon: /afternoon/i,
                    evening: /evening/i,
                    night: /night/i
                }
            },
            defaultParseWidth: "any"
        })
    },
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
function P(t33) {
    if (null === t33 || !0 === t33 || !1 === t33) return NaN;
    var e19 = Number(t33);
    return isNaN(e19) ? e19 : e19 < 0 ? Math.ceil(e19) : Math.floor(e19);
}
function I(t34, e20) {
    T(2, arguments);
    var n16 = b(t34).getTime(), r12 = P(e20);
    return new Date(n16 + r12);
}
function L(t35, e21) {
    T(2, arguments);
    var n17 = P(e21);
    return I(t35, -n17);
}
function W(t36) {
    T(1, arguments);
    var e22 = 1, n18 = b(t36), r13 = n18.getUTCDay(), a9 = (r13 < e22 ? 7 : 0) + r13 - e22;
    return n18.setUTCDate(n18.getUTCDate() - a9), n18.setUTCHours(0, 0, 0, 0), n18;
}
function H(t37) {
    T(1, arguments);
    var e23 = b(t37), n19 = e23.getUTCFullYear(), r14 = new Date(0);
    r14.setUTCFullYear(n19 + 1, 0, 4), r14.setUTCHours(0, 0, 0, 0);
    var a10 = W(r14), o8 = new Date(0);
    o8.setUTCFullYear(n19, 0, 4), o8.setUTCHours(0, 0, 0, 0);
    var i6 = W(o8);
    return e23.getTime() >= a10.getTime() ? n19 + 1 : e23.getTime() >= i6.getTime() ? n19 : n19 - 1;
}
function Y(t38) {
    T(1, arguments);
    var e24 = H(t38), n20 = new Date(0);
    n20.setUTCFullYear(e24, 0, 4), n20.setUTCHours(0, 0, 0, 0);
    var r15 = W(n20);
    return r15;
}
function q(t39, e25) {
    T(1, arguments);
    var n21 = e25 || {}, r16 = n21.locale, a11 = r16 && r16.options && r16.options.weekStartsOn, o9 = null == a11 ? 0 : P(a11), i7 = null == n21.weekStartsOn ? o9 : P(n21.weekStartsOn);
    if (!(i7 >= 0 && i7 <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var u5 = b(t39), s3 = u5.getUTCDay(), c2 = (s3 < i7 ? 7 : 0) + s3 - i7;
    return u5.setUTCDate(u5.getUTCDate() - c2), u5.setUTCHours(0, 0, 0, 0), u5;
}
function R(t40, e26) {
    T(1, arguments);
    var n22 = b(t40), r17 = n22.getUTCFullYear(), a12 = e26 || {}, o10 = a12.locale, i8 = o10 && o10.options && o10.options.firstWeekContainsDate, u6 = null == i8 ? 1 : P(i8), s4 = null == a12.firstWeekContainsDate ? u6 : P(a12.firstWeekContainsDate);
    if (!(s4 >= 1 && s4 <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var c3 = new Date(0);
    c3.setUTCFullYear(r17 + 1, 0, s4), c3.setUTCHours(0, 0, 0, 0);
    var d2 = q(c3, e26), l1 = new Date(0);
    l1.setUTCFullYear(r17, 0, s4), l1.setUTCHours(0, 0, 0, 0);
    var h1 = q(l1, e26);
    return n22.getTime() >= d2.getTime() ? r17 + 1 : n22.getTime() >= h1.getTime() ? r17 : r17 - 1;
}
function F(t41, e27) {
    T(1, arguments);
    var n23 = e27 || {}, r18 = n23.locale, a13 = r18 && r18.options && r18.options.firstWeekContainsDate, o11 = null == a13 ? 1 : P(a13), i9 = null == n23.firstWeekContainsDate ? o11 : P(n23.firstWeekContainsDate), u7 = R(t41, e27), s5 = new Date(0);
    s5.setUTCFullYear(u7, 0, i9), s5.setUTCHours(0, 0, 0, 0);
    var c4 = q(s5, e27);
    return c4;
}
function G(t42, e28) {
    for(var n24 = t42 < 0 ? "-" : "", r19 = Math.abs(t42).toString(); r19.length < e28;)r19 = "0" + r19;
    return n24 + r19;
}
var _ = {
    y: function(t43, e29) {
        var n25 = t43.getUTCFullYear(), r20 = n25 > 0 ? n25 : 1 - n25;
        return G("yy" === e29 ? r20 % 100 : r20, e29.length);
    },
    M: function(t44, e30) {
        var n26 = t44.getUTCMonth();
        return "M" === e30 ? String(n26 + 1) : G(n26 + 1, 2);
    },
    d: function(t45, e31) {
        return G(t45.getUTCDate(), e31.length);
    },
    a: function(t46, e32) {
        var n27 = t46.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch(e32){
            case "a":
            case "aa":
                return n27.toUpperCase();
            case "aaa":
                return n27;
            case "aaaaa":
                return n27[0];
            default:
                return "am" === n27 ? "a.m." : "p.m.";
        }
    },
    h: function(t47, e33) {
        return G(t47.getUTCHours() % 12 || 12, e33.length);
    },
    H: function(t48, e34) {
        return G(t48.getUTCHours(), e34.length);
    },
    m: function(t49, e35) {
        return G(t49.getUTCMinutes(), e35.length);
    },
    s: function(t50, e36) {
        return G(t50.getUTCSeconds(), e36.length);
    },
    S: function(t51, e37) {
        var n28 = e37.length, r21 = t51.getUTCMilliseconds();
        return G(Math.floor(r21 * Math.pow(10, n28 - 3)), e37.length);
    }
}, j = "midnight", z = "noon", B = "morning", Q = "afternoon", X = "evening", J = "night";
function $(t52, e38) {
    var n29 = t52 > 0 ? "-" : "+", r22 = Math.abs(t52), a14 = Math.floor(r22 / 60), o12 = r22 % 60;
    if (0 === o12) return n29 + String(a14);
    var i10 = e38 || "";
    return n29 + String(a14) + i10 + G(o12, 2);
}
function Z(t53, e39) {
    return t53 % 60 == 0 ? (t53 > 0 ? "-" : "+") + G(Math.abs(t53) / 60, 2) : V(t53, e39);
}
function V(t54, e40) {
    var n30 = e40 || "", r23 = t54 > 0 ? "-" : "+", a15 = Math.abs(t54);
    return r23 + G(Math.floor(a15 / 60), 2) + n30 + G(a15 % 60, 2);
}
var K = {
    G: function(t55, e41, n31) {
        var r24 = t55.getUTCFullYear() > 0 ? 1 : 0;
        switch(e41){
            case "G":
            case "GG":
            case "GGG":
                return n31.era(r24, {
                    width: "abbreviated"
                });
            case "GGGGG":
                return n31.era(r24, {
                    width: "narrow"
                });
            default:
                return n31.era(r24, {
                    width: "wide"
                });
        }
    },
    y: function(t56, e42, n32) {
        if ("yo" === e42) {
            var r25 = t56.getUTCFullYear(), a16 = r25 > 0 ? r25 : 1 - r25;
            return n32.ordinalNumber(a16, {
                unit: "year"
            });
        }
        return _.y(t56, e42);
    },
    Y: function(t57, e43, n33, r26) {
        var a17 = R(t57, r26), o13 = a17 > 0 ? a17 : 1 - a17;
        return "YY" === e43 ? G(o13 % 100, 2) : "Yo" === e43 ? n33.ordinalNumber(o13, {
            unit: "year"
        }) : G(o13, e43.length);
    },
    R: function(t58, e44) {
        return G(H(t58), e44.length);
    },
    u: function(t59, e45) {
        return G(t59.getUTCFullYear(), e45.length);
    },
    Q: function(t60, e46, n34) {
        var r27 = Math.ceil((t60.getUTCMonth() + 1) / 3);
        switch(e46){
            case "Q":
                return String(r27);
            case "QQ":
                return G(r27, 2);
            case "Qo":
                return n34.ordinalNumber(r27, {
                    unit: "quarter"
                });
            case "QQQ":
                return n34.quarter(r27, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "QQQQQ":
                return n34.quarter(r27, {
                    width: "narrow",
                    context: "formatting"
                });
            default:
                return n34.quarter(r27, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    q: function(t61, e47, n35) {
        var r28 = Math.ceil((t61.getUTCMonth() + 1) / 3);
        switch(e47){
            case "q":
                return String(r28);
            case "qq":
                return G(r28, 2);
            case "qo":
                return n35.ordinalNumber(r28, {
                    unit: "quarter"
                });
            case "qqq":
                return n35.quarter(r28, {
                    width: "abbreviated",
                    context: "standalone"
                });
            case "qqqqq":
                return n35.quarter(r28, {
                    width: "narrow",
                    context: "standalone"
                });
            default:
                return n35.quarter(r28, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    M: function(t62, e48, n36) {
        var r29 = t62.getUTCMonth();
        switch(e48){
            case "M":
            case "MM":
                return _.M(t62, e48);
            case "Mo":
                return n36.ordinalNumber(r29 + 1, {
                    unit: "month"
                });
            case "MMM":
                return n36.month(r29, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "MMMMM":
                return n36.month(r29, {
                    width: "narrow",
                    context: "formatting"
                });
            default:
                return n36.month(r29, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    L: function(t63, e49, n37) {
        var r30 = t63.getUTCMonth();
        switch(e49){
            case "L":
                return String(r30 + 1);
            case "LL":
                return G(r30 + 1, 2);
            case "Lo":
                return n37.ordinalNumber(r30 + 1, {
                    unit: "month"
                });
            case "LLL":
                return n37.month(r30, {
                    width: "abbreviated",
                    context: "standalone"
                });
            case "LLLLL":
                return n37.month(r30, {
                    width: "narrow",
                    context: "standalone"
                });
            default:
                return n37.month(r30, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    w: function(t64, e50, n38, r31) {
        var a18 = function(t65, e51) {
            T(1, arguments);
            var n39 = b(t65), r32 = q(n39, e51).getTime() - F(n39, e51).getTime();
            return Math.round(r32 / 6048e5) + 1;
        }(t64, r31);
        return "wo" === e50 ? n38.ordinalNumber(a18, {
            unit: "week"
        }) : G(a18, e50.length);
    },
    I: function(t66, e52, n40) {
        var r33 = function(t67) {
            T(1, arguments);
            var e53 = b(t67), n41 = W(e53).getTime() - Y(e53).getTime();
            return Math.round(n41 / 6048e5) + 1;
        }(t66);
        return "Io" === e52 ? n40.ordinalNumber(r33, {
            unit: "week"
        }) : G(r33, e52.length);
    },
    d: function(t68, e54, n42) {
        return "do" === e54 ? n42.ordinalNumber(t68.getUTCDate(), {
            unit: "date"
        }) : _.d(t68, e54);
    },
    D: function(t69, e55, n43) {
        var r34 = function(t70) {
            T(1, arguments);
            var e56 = b(t70), n44 = e56.getTime();
            e56.setUTCMonth(0, 1), e56.setUTCHours(0, 0, 0, 0);
            var r35 = e56.getTime(), a19 = n44 - r35;
            return Math.floor(a19 / 864e5) + 1;
        }(t69);
        return "Do" === e55 ? n43.ordinalNumber(r34, {
            unit: "dayOfYear"
        }) : G(r34, e55.length);
    },
    E: function(t71, e57, n45) {
        var r36 = t71.getUTCDay();
        switch(e57){
            case "E":
            case "EE":
            case "EEE":
                return n45.day(r36, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "EEEEE":
                return n45.day(r36, {
                    width: "narrow",
                    context: "formatting"
                });
            case "EEEEEE":
                return n45.day(r36, {
                    width: "short",
                    context: "formatting"
                });
            default:
                return n45.day(r36, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    e: function(t72, e58, n46, r37) {
        var a20 = t72.getUTCDay(), o14 = (a20 - r37.weekStartsOn + 8) % 7 || 7;
        switch(e58){
            case "e":
                return String(o14);
            case "ee":
                return G(o14, 2);
            case "eo":
                return n46.ordinalNumber(o14, {
                    unit: "day"
                });
            case "eee":
                return n46.day(a20, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "eeeee":
                return n46.day(a20, {
                    width: "narrow",
                    context: "formatting"
                });
            case "eeeeee":
                return n46.day(a20, {
                    width: "short",
                    context: "formatting"
                });
            default:
                return n46.day(a20, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    c: function(t73, e59, n47, r38) {
        var a21 = t73.getUTCDay(), o15 = (a21 - r38.weekStartsOn + 8) % 7 || 7;
        switch(e59){
            case "c":
                return String(o15);
            case "cc":
                return G(o15, e59.length);
            case "co":
                return n47.ordinalNumber(o15, {
                    unit: "day"
                });
            case "ccc":
                return n47.day(a21, {
                    width: "abbreviated",
                    context: "standalone"
                });
            case "ccccc":
                return n47.day(a21, {
                    width: "narrow",
                    context: "standalone"
                });
            case "cccccc":
                return n47.day(a21, {
                    width: "short",
                    context: "standalone"
                });
            default:
                return n47.day(a21, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    i: function(t74, e60, n48) {
        var r39 = t74.getUTCDay(), a22 = 0 === r39 ? 7 : r39;
        switch(e60){
            case "i":
                return String(a22);
            case "ii":
                return G(a22, e60.length);
            case "io":
                return n48.ordinalNumber(a22, {
                    unit: "day"
                });
            case "iii":
                return n48.day(r39, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "iiiii":
                return n48.day(r39, {
                    width: "narrow",
                    context: "formatting"
                });
            case "iiiiii":
                return n48.day(r39, {
                    width: "short",
                    context: "formatting"
                });
            default:
                return n48.day(r39, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    a: function(t75, e61, n49) {
        var r40 = t75.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch(e61){
            case "a":
            case "aa":
                return n49.dayPeriod(r40, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "aaa":
                return n49.dayPeriod(r40, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "aaaaa":
                return n49.dayPeriod(r40, {
                    width: "narrow",
                    context: "formatting"
                });
            default:
                return n49.dayPeriod(r40, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    b: function(t76, e62, n50) {
        var r41, a23 = t76.getUTCHours();
        switch(r41 = 12 === a23 ? z : 0 === a23 ? j : a23 / 12 >= 1 ? "pm" : "am", e62){
            case "b":
            case "bb":
                return n50.dayPeriod(r41, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "bbb":
                return n50.dayPeriod(r41, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "bbbbb":
                return n50.dayPeriod(r41, {
                    width: "narrow",
                    context: "formatting"
                });
            default:
                return n50.dayPeriod(r41, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    B: function(t77, e63, n51) {
        var r42, a24 = t77.getUTCHours();
        switch(r42 = a24 >= 17 ? X : a24 >= 12 ? Q : a24 >= 4 ? B : J, e63){
            case "B":
            case "BB":
            case "BBB":
                return n51.dayPeriod(r42, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "BBBBB":
                return n51.dayPeriod(r42, {
                    width: "narrow",
                    context: "formatting"
                });
            default:
                return n51.dayPeriod(r42, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    h: function(t78, e64, n52) {
        if ("ho" === e64) {
            var r43 = t78.getUTCHours() % 12;
            return 0 === r43 && (r43 = 12), n52.ordinalNumber(r43, {
                unit: "hour"
            });
        }
        return _.h(t78, e64);
    },
    H: function(t79, e65, n53) {
        return "Ho" === e65 ? n53.ordinalNumber(t79.getUTCHours(), {
            unit: "hour"
        }) : _.H(t79, e65);
    },
    K: function(t80, e66, n54) {
        var r44 = t80.getUTCHours() % 12;
        return "Ko" === e66 ? n54.ordinalNumber(r44, {
            unit: "hour"
        }) : G(r44, e66.length);
    },
    k: function(t81, e67, n55) {
        var r45 = t81.getUTCHours();
        return 0 === r45 && (r45 = 24), "ko" === e67 ? n55.ordinalNumber(r45, {
            unit: "hour"
        }) : G(r45, e67.length);
    },
    m: function(t82, e68, n56) {
        return "mo" === e68 ? n56.ordinalNumber(t82.getUTCMinutes(), {
            unit: "minute"
        }) : _.m(t82, e68);
    },
    s: function(t83, e69, n57) {
        return "so" === e69 ? n57.ordinalNumber(t83.getUTCSeconds(), {
            unit: "second"
        }) : _.s(t83, e69);
    },
    S: function(t84, e70) {
        return _.S(t84, e70);
    },
    X: function(t85, e71, n, r46) {
        var a25 = (r46._originalDate || t85).getTimezoneOffset();
        if (0 === a25) return "Z";
        switch(e71){
            case "X":
                return Z(a25);
            case "XXXX":
            case "XX":
                return V(a25);
            default:
                return V(a25, ":");
        }
    },
    x: function(t86, e72, n, r47) {
        var a26 = (r47._originalDate || t86).getTimezoneOffset();
        switch(e72){
            case "x":
                return Z(a26);
            case "xxxx":
            case "xx":
                return V(a26);
            default:
                return V(a26, ":");
        }
    },
    O: function(t87, e73, n, r48) {
        var a27 = (r48._originalDate || t87).getTimezoneOffset();
        switch(e73){
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + $(a27, ":");
            default:
                return "GMT" + V(a27, ":");
        }
    },
    z: function(t88, e74, n, r49) {
        var a28 = (r49._originalDate || t88).getTimezoneOffset();
        switch(e74){
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + $(a28, ":");
            default:
                return "GMT" + V(a28, ":");
        }
    },
    t: function(t89, e75, n, r50) {
        var a29 = r50._originalDate || t89;
        return G(Math.floor(a29.getTime() / 1e3), e75.length);
    },
    T: function(t90, e76, n, r51) {
        return G((r51._originalDate || t90).getTime(), e76.length);
    }
};
function tt(t91, e77) {
    switch(t91){
        case "P":
            return e77.date({
                width: "short"
            });
        case "PP":
            return e77.date({
                width: "medium"
            });
        case "PPP":
            return e77.date({
                width: "long"
            });
        default:
            return e77.date({
                width: "full"
            });
    }
}
function et(t92, e78) {
    switch(t92){
        case "p":
            return e78.time({
                width: "short"
            });
        case "pp":
            return e78.time({
                width: "medium"
            });
        case "ppp":
            return e78.time({
                width: "long"
            });
        default:
            return e78.time({
                width: "full"
            });
    }
}
var nt = {
    p: et,
    P: function(t93, e79) {
        var n58, r52 = t93.match(/(P+)(p+)?/) || [], a30 = r52[1], o16 = r52[2];
        if (!o16) return tt(t93, e79);
        switch(a30){
            case "P":
                n58 = e79.dateTime({
                    width: "short"
                });
                break;
            case "PP":
                n58 = e79.dateTime({
                    width: "medium"
                });
                break;
            case "PPP":
                n58 = e79.dateTime({
                    width: "long"
                });
                break;
            default:
                n58 = e79.dateTime({
                    width: "full"
                });
        }
        return n58.replace("{{date}}", tt(a30, e79)).replace("{{time}}", et(o16, e79));
    }
};
function rt(t94) {
    var e80 = new Date(Date.UTC(t94.getFullYear(), t94.getMonth(), t94.getDate(), t94.getHours(), t94.getMinutes(), t94.getSeconds(), t94.getMilliseconds()));
    return e80.setUTCFullYear(t94.getFullYear()), t94.getTime() - e80.getTime();
}
var at = [
    "D",
    "DD"
], ot = [
    "YY",
    "YYYY"
];
function it(t95) {
    return -1 !== at.indexOf(t95);
}
function ut(t96) {
    return -1 !== ot.indexOf(t96);
}
function st(t97, e81, n59) {
    if ("YYYY" === t97) throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e81, "`) for formatting years to the input `").concat(n59, "`; see: https://git.io/fxCyr"));
    if ("YY" === t97) throw new RangeError("Use `yy` instead of `YY` (in `".concat(e81, "`) for formatting years to the input `").concat(n59, "`; see: https://git.io/fxCyr"));
    if ("D" === t97) throw new RangeError("Use `d` instead of `D` (in `".concat(e81, "`) for formatting days of the month to the input `").concat(n59, "`; see: https://git.io/fxCyr"));
    if ("DD" === t97) throw new RangeError("Use `dd` instead of `DD` (in `".concat(e81, "`) for formatting days of the month to the input `").concat(n59, "`; see: https://git.io/fxCyr"));
}
var ct = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, dt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, lt = /^'([^]*?)'?$/, ht = /''/g, ft = /[a-zA-Z]/;
function mt(t98) {
    return t98.match(lt)[1].replace(ht, "'");
}
function gt(t99) {
    return t99.querySelector(a).value;
}
function wt(t100) {
    this.messageWrapper = t100.querySelector(".message"), this.messageContent = t100.querySelector(".text"), this.userName = t100.querySelector(".username"), this.messageTime = t100.querySelector(".time");
}
function vt(e82, n60) {
    n60.user.email === t(l).get("mail") && e82.messageWrapper.classList.add(o), e82.messageContent.textContent = n60.text, e82.userName.textContent = n60.user.name, e82.messageTime.textContent = function(t101, e83, n61) {
        T(2, arguments);
        var r53 = String(e83), a31 = n61 || {}, o17 = a31.locale || k, i11 = o17.options && o17.options.firstWeekContainsDate, u8 = null == i11 ? 1 : P(i11), s6 = null == a31.firstWeekContainsDate ? u8 : P(a31.firstWeekContainsDate);
        if (!(s6 >= 1 && s6 <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
        var c5 = o17.options && o17.options.weekStartsOn, d3 = null == c5 ? 0 : P(c5), l2 = null == a31.weekStartsOn ? d3 : P(a31.weekStartsOn);
        if (!(l2 >= 0 && l2 <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
        if (!o17.localize) throw new RangeError("locale must contain localize property");
        if (!o17.formatLong) throw new RangeError("locale must contain formatLong property");
        var h2 = b(t101);
        if (!p(h2)) throw new RangeError("Invalid time value");
        var f1 = rt(h2), m1 = L(h2, f1), g1 = {
            firstWeekContainsDate: s6,
            weekStartsOn: l2,
            locale: o17,
            _originalDate: h2
        };
        return r53.match(dt).map(function(t102) {
            var e84 = t102[0];
            return "p" === e84 || "P" === e84 ? (0, nt[e84])(t102, o17.formatLong, g1) : t102;
        }).join("").match(ct).map(function(n62) {
            if ("''" === n62) return "'";
            var r54 = n62[0];
            if ("'" === r54) return mt(n62);
            var i12 = K[r54];
            if (i12) return !a31.useAdditionalWeekYearTokens && ut(n62) && st(n62, e83, t101), !a31.useAdditionalDayOfYearTokens && it(n62) && st(n62, e83, t101), i12(m1, n62, o17.localize, g1);
            if (r54.match(ft)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + r54 + "`");
            return n62;
        }).join("");
    }(new Date(n60.createdAt), "HH:mm");
}
function Tt(t103) {
    const n63 = e.TEMPLATES.MESSAGE.content.cloneNode(!0);
    vt(new wt(n63), t103), e.MESSAGES_HISTORY.append(n63), e.MESSAGES_HISTORY.scrollTop = e.MESSAGES_HISTORY.scrollHeight;
}
async function yt() {
    const t104 = await async function() {
        try {
            const t105 = await h(w, "GET");
            if (!f(t105)) throw i.WRONG_HTTP_STATUS;
            return await t105.json();
        } catch (t106) {
            return void console.log(t106);
        }
    }(), e85 = await t104.messages;
    localStorage.setItem("messagesHistory", JSON.stringify(e85)), localStorage.setItem("rendered messages", JSON.stringify(e85.slice(-20))), e85.slice(-20).forEach((t107)=>{
        Tt(t107);
    });
}
function bt() {
    const n64 = t(l).get("token");
    if (!n64) return;
    e.CONTROLS.AUTHORIZATION.textContent = u;
    const r55 = new WebSocket(`${v}${n64}`);
    r55.addEventListener("open", function() {
        e.FORMS.SEND_MESSAGE.addEventListener("submit", function(t108) {
            t108.preventDefault(), function(t109, e86) {
                const n65 = gt(e86);
                t109.send(JSON.stringify({
                    text: n65
                })), d(e86);
            }(r55, this);
        });
    }), r55.addEventListener("message", function(t110) {
        Tt(JSON.parse(t110.data));
    });
}
document.addEventListener("DOMContentLoaded", ()=>{
    bt(), yt();
}), e.FORMS.AUTHENTIFICATION.addEventListener("submit", async function() {
    try {
        const n66 = await m(this, g, "POST", "email"), r56 = await n66.succes;
        if (await n66.error) throw i.WRONG_HTTP_STATUS;
        t(l).set("mail", r56.email), s(this), c(e.MODAL.AUTHENTIFICATION_CODE), e.CONTROLS.AUTHORIZATION.textContent = u;
    } catch (t111) {
        return void console.log(t111);
    } finally{
        d(this);
    }
}), e.FORMS.AUTHENTIFICATION_CODE.addEventListener("submit", function() {
    const n67 = gt(this);
    n67 && (t(l).set("token", n67), d(this), s(this), c(e.MODAL.SETTINGS));
}), e.FORMS.SETTING_NAME.addEventListener("submit", async function() {
    try {
        const t112 = await m(this, g, "PATCH", "name");
        if (await t112.error) throw i.WRONG_HTTP_STATUS;
        bt(), s(this);
    } catch (t113) {
        return void console.log(t113);
    } finally{
        d(this);
    }
}), e.MESSAGES_HISTORY.addEventListener("scroll", function() {
    const t114 = 0 === this.scrollTop, e87 = JSON.parse(localStorage.getItem("rendered messages"));
    console.log(e87), console.log(t114);
});

},{}]},["6SQe6","2uJkI"], "2uJkI", "parcelRequire25d8")

//# sourceMappingURL=index.c7f41a89.js.map
