(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('crypto'), require('antd')) :
  typeof define === 'function' && define.amd ? define(['crypto', 'antd'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.require$$0, global.antd));
}(this, (function (require$$0, antd) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  (function () {
    /**
     * Create a cached version of a pure function.
     * @param {*} fn The function call to be cached
     * @void
     */

    function cached(fn) {
      var cache = Object.create(null);
      return function (str) {
        var key = isPrimitive(str) ? str : JSON.stringify(str);
        var hit = cache[key];
        return hit || (cache[key] = fn(str));
      };
    }

    /**
     * Hyphenate a camelCase string.
     */
    var hyphenate = cached(function (str) {
      return str.replace(/([A-Z])/g, function (m) {
        return '-' + m.toLowerCase();
      });
    });
    var hasOwn = Object.prototype.hasOwnProperty;

    /**
     * Simple Object.assign polyfill
     * @param {Object} to The object to be merged with
     * @returns {Object} The merged object
     */
    var merge = Object.assign || function (to) {
      var arguments$1 = arguments;
      for (var i = 1; i < arguments.length; i++) {
        var from = Object(arguments$1[i]);
        for (var key in from) {
          if (hasOwn.call(from, key)) {
            to[key] = from[key];
          }
        }
      }
      return to;
    };

    /**
     * Check if value is primitive
     * @param {*} value Checks if a value is primitive
     * @returns {Boolean} Result of the check
     */
    function isPrimitive(value) {
      return typeof value === 'string' || typeof value === 'number';
    }

    /**
     * Performs no operation.
     * @void
     */
    function noop() {}

    /**
     * Check if value is function
     * @param {*} obj Any javascript object
     * @returns {Boolean} True if the passed-in value is a function
     */
    function isFn(obj) {
      return typeof obj === 'function';
    }

    /**
     * Check if url is external
     * @param {String} string  url
     * @returns {Boolean} True if the passed-in url is external
     */
    function isExternal(url) {
      var match = url.match(/^([^:/?#]+:)?(?:\/{2,}([^/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
      if (typeof match[1] === 'string' && match[1].length > 0 && match[1].toLowerCase() !== location.protocol) {
        return true;
      }
      if (typeof match[2] === 'string' && match[2].length > 0 && match[2].replace(new RegExp(':(' + {
        'http:': 80,
        'https:': 443
      }[location.protocol] + ')?$'), '') !== location.host) {
        return true;
      }
      if (/^\/\\/.test(url)) {
        return true;
      }
      return false;
    }
    var inBrowser = !false;
    var isMobile = document.body.clientWidth <= 600;

    /**
     * @see https://github.com/MoOx/pjax/blob/master/lib/is-supported.js
     */
    var supportsPushState = function () {
      // Borrowed wholesale from https://github.com/defunkt/jquery-pjax
      return window.history && window.history.pushState && window.history.replaceState &&
      // PushState isn’t reliable on iOS until 5.
      !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/);
    }();
    var cacheNode = {};

    /**
     * Get Node
     * @param  {String|Element} el A DOM element
     * @param  {Boolean} noCache Flag to use or not use the cache
     * @return {Element} The found node element
     */
    function getNode(el, noCache) {
      if (noCache === void 0) noCache = false;
      if (typeof el === 'string') {
        if (typeof window.Vue !== 'undefined') {
          return find(el);
        }
        el = noCache ? find(el) : cacheNode[el] || (cacheNode[el] = find(el));
      }
      return el;
    }
    var $ = document;
    var body = $.body;
    var head = $.head;

    /**
     * Find elements
     * @param {String|Element} el The root element where to perform the search from
     * @param {Element} node The query
     * @returns {Element} The found DOM element
     * @example
     * find('nav') => document.querySelector('nav')
     * find(nav, 'a') => nav.querySelector('a')
     */
    function find(el, node) {
      return node ? el.querySelector(node) : $.querySelector(el);
    }

    /**
     * Find all elements
     * @param {String|Element} el The root element where to perform the search from
     * @param {Element} node The query
     * @returns {Array<Element>} An array of DOM elements
     * @example
     * findAll('a') => [].slice.call(document.querySelectorAll('a'))
     * findAll(nav, 'a') => [].slice.call(nav.querySelectorAll('a'))
     */
    function findAll(el, node) {
      return [].slice.call(node ? el.querySelectorAll(node) : $.querySelectorAll(el));
    }
    function create(node, tpl) {
      node = $.createElement(node);
      if (tpl) {
        node.innerHTML = tpl;
      }
      return node;
    }
    function appendTo(target, el) {
      return target.appendChild(el);
    }
    function before(target, el) {
      return target.insertBefore(el, target.children[0]);
    }
    function on(el, type, handler) {
      isFn(type) ? window.addEventListener(el, type) : el.addEventListener(type, handler);
    }
    function off(el, type, handler) {
      isFn(type) ? window.removeEventListener(el, type) : el.removeEventListener(type, handler);
    }

    /**
     * Toggle class
     * @param {String|Element} el The element that needs the class to be toggled
     * @param {Element} type The type of action to be performed on the classList (toggle by default)
     * @param {String} val Name of the class to be toggled
     * @void
     * @example
     * toggleClass(el, 'active') => el.classList.toggle('active')
     * toggleClass(el, 'add', 'active') => el.classList.add('active')
     */
    function toggleClass(el, type, val) {
      el && el.classList[val ? type : 'toggle'](val || type);
    }
    function style(content) {
      appendTo(head, create('style', content));
    }

    /**
     * Fork https://github.com/bendrucker/document-ready/blob/master/index.js
     * @param {Function} callback The callbacack to be called when the page is loaded
     * @returns {Number|void} If the page is already laoded returns the result of the setTimeout callback,
     *  otherwise it only attaches the callback to the DOMContentLoaded event
     */
    function documentReady(callback, doc) {
      if (doc === void 0) doc = document;
      var state = doc.readyState;
      if (state === 'complete' || state === 'interactive') {
        return setTimeout(callback, 0);
      }
      doc.addEventListener('DOMContentLoaded', callback);
    }
    var dom = /*#__PURE__*/Object.freeze({
      __proto__: null,
      getNode: getNode,
      $: $,
      body: body,
      head: head,
      find: find,
      findAll: findAll,
      create: create,
      appendTo: appendTo,
      before: before,
      on: on,
      off: off,
      toggleClass: toggleClass,
      style: style,
      documentReady: documentReady
    });
    function startsWith(str, prefix) {
      return str.indexOf(prefix) === 0;
    }
    function endsWith(str, suffix) {
      return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }
    var decode = decodeURIComponent;
    var encode = encodeURIComponent;
    function parseQuery(query) {
      var res = {};
      query = query.trim().replace(/^(\?|#|&)/, '');
      if (!query) {
        return res;
      }

      // Simple parse
      query.split('&').forEach(function (param) {
        var parts = param.replace(/\+/g, ' ').split('=');
        res[parts[0]] = parts[1] && decode(parts[1]);
      });
      return res;
    }
    function stringifyQuery(obj, ignores) {
      if (ignores === void 0) ignores = [];
      var qs = [];
      for (var key in obj) {
        if (ignores.indexOf(key) > -1) {
          continue;
        }
        qs.push(obj[key] ? (encode(key) + "=" + encode(obj[key])).toLowerCase() : encode(key));
      }
      return qs.length ? "?" + qs.join('&') : '';
    }
    var isAbsolutePath = cached(function (path) {
      return /(:|(\/{2}))/g.test(path);
    });
    var removeParams = cached(function (path) {
      return path.split(/[?#]/)[0];
    });
    var getParentPath = cached(function (path) {
      if (/\/$/g.test(path)) {
        return path;
      }
      var matchingParts = path.match(/(\S*\/)[^/]+$/);
      return matchingParts ? matchingParts[1] : '';
    });
    var cleanPath = cached(function (path) {
      return path.replace(/^\/+/, '/').replace(/([^:])\/{2,}/g, '$1/');
    });
    var resolvePath = cached(function (path) {
      var segments = path.replace(/^\//, '').split('/');
      var resolved = [];
      for (var i = 0, len = segments.length; i < len; i++) {
        var segment = segments[i];
        if (segment === '..') {
          resolved.pop();
        } else if (segment !== '.') {
          resolved.push(segment);
        }
      }
      return '/' + resolved.join('/');
    });

    /**
     * Normalises the URI path to handle the case where Docsify is
     * hosted off explicit files, i.e. /index.html. This function
     * eliminates any path segments that contain `#` fragments.
     *
     * This is used to map browser URIs to markdown file sources.
     *
     * For example:
     *
     * http://example.org/base/index.html#/blah
     *
     * would be mapped to:
     *
     * http://example.org/base/blah.md.
     *
     * See here for more information:
     *
     * https://github.com/docsifyjs/docsify/pull/1372
     *
     * @param {string} path The URI path to normalise
     * @return {string} { path, query }
     */

    function normaliseFragment(path) {
      return path.split('/').filter(function (p) {
        return p.indexOf('#') === -1;
      }).join('/');
    }
    function getPath() {
      var args = [],
        len = arguments.length;
      while (len--) args[len] = arguments[len];
      return cleanPath(args.map(normaliseFragment).join('/'));
    }
    var replaceSlug = cached(function (path) {
      return path.replace('#', '?id=');
    });
    var cached$1 = {};
    function getAlias(path, alias, last) {
      var match = Object.keys(alias).filter(function (key) {
        var re = cached$1[key] || (cached$1[key] = new RegExp("^" + key + "$"));
        return re.test(path) && path !== last;
      })[0];
      return match ? getAlias(path.replace(cached$1[match], alias[match]), alias, path) : path;
    }
    function getFileName(path, ext) {
      return new RegExp("\\.(" + ext.replace(/^\./, '') + "|html)$", 'g').test(path) ? path : /\/$/g.test(path) ? path + "README" + ext : "" + path + ext;
    }
    var History = function History(config) {
      this.config = config;
    };
    History.prototype.getBasePath = function getBasePath() {
      return this.config.basePath;
    };
    History.prototype.getFile = function getFile(path, isRelative) {
      if (path === void 0) path = this.getCurrentPath();
      var ref = this;
      var config = ref.config;
      var base = this.getBasePath();
      var ext = typeof config.ext === 'string' ? config.ext : '.md';
      path = config.alias ? getAlias(path, config.alias) : path;
      path = getFileName(path, ext);
      path = path === "/README" + ext ? config.homepage || path : path;
      path = isAbsolutePath(path) ? path : getPath(base, path);
      if (isRelative) {
        path = path.replace(new RegExp("^" + base), '');
      }
      return path;
    };
    History.prototype.onchange = function onchange(cb) {
      if (cb === void 0) cb = noop;
      cb();
    };
    History.prototype.getCurrentPath = function getCurrentPath() {};
    History.prototype.normalize = function normalize() {};
    History.prototype.parse = function parse() {};
    History.prototype.toURL = function toURL(path, params, currentRoute) {
      var local = currentRoute && path[0] === '#';
      var route = this.parse(replaceSlug(path));
      route.query = merge({}, route.query, params);
      path = route.path + stringifyQuery(route.query);
      path = path.replace(/\.md(\?)|\.md$/, '$1');
      if (local) {
        var idIndex = currentRoute.indexOf('?');
        path = (idIndex > 0 ? currentRoute.substring(0, idIndex) : currentRoute) + path;
      }
      if (this.config.relativePath && path.indexOf('/') !== 0) {
        var currentDir = currentRoute.substring(0, currentRoute.lastIndexOf('/') + 1);
        return cleanPath(resolvePath(currentDir + path));
      }
      return cleanPath('/' + path);
    };
    function replaceHash(path) {
      var i = location.href.indexOf('#');
      location.replace(location.href.slice(0, i >= 0 ? i : 0) + '#' + path);
    }
    var HashHistory = /*@__PURE__*/function (History) {
      function HashHistory(config) {
        History.call(this, config);
        this.mode = 'hash';
      }
      if (History) HashHistory.__proto__ = History;
      HashHistory.prototype = Object.create(History && History.prototype);
      HashHistory.prototype.constructor = HashHistory;
      HashHistory.prototype.getBasePath = function getBasePath() {
        var path = window.location.pathname || '';
        var base = this.config.basePath;

        // This handles the case where Docsify is served off an
        // explicit file path, i.e.`/base/index.html#/blah`. This
        // prevents the `/index.html` part of the URI from being
        // remove during routing.
        // See here: https://github.com/docsifyjs/docsify/pull/1372
        var basePath = endsWith(path, '.html') ? path + '#/' + base : path + '/' + base;
        return /^(\/|https?:)/g.test(base) ? base : cleanPath(basePath);
      };
      HashHistory.prototype.getCurrentPath = function getCurrentPath() {
        // We can't use location.hash here because it's not
        // consistent across browsers - Firefox will pre-decode it!
        var href = location.href;
        var index = href.indexOf('#');
        return index === -1 ? '' : href.slice(index + 1);
      };

      /** @param {((params: {source: TODO}) => void)} [cb] */
      HashHistory.prototype.onchange = function onchange(cb) {
        if (cb === void 0) cb = noop;

        // The hashchange event does not tell us if it originated from
        // a clicked link or by moving back/forward in the history;
        // therefore we set a `navigating` flag when a link is clicked
        // to be able to tell these two scenarios apart
        var navigating = false;
        on('click', function (e) {
          var el = e.target.tagName === 'A' ? e.target : e.target.parentNode;
          if (el && el.tagName === 'A' && !isExternal(el.href)) {
            navigating = true;
          }
        });
        on('hashchange', function (e) {
          var source = navigating ? 'navigate' : 'history';
          navigating = false;
          cb({
            event: e,
            source: source
          });
        });
      };
      HashHistory.prototype.normalize = function normalize() {
        var path = this.getCurrentPath();
        path = replaceSlug(path);
        if (path.charAt(0) === '/') {
          return replaceHash(path);
        }
        replaceHash('/' + path);
      };

      /**
       * Parse the url
       * @param {string} [path=location.herf] URL to be parsed
       * @return {object} { path, query }
       */
      HashHistory.prototype.parse = function parse(path) {
        if (path === void 0) path = location.href;
        var query = '';
        var hashIndex = path.indexOf('#');
        if (hashIndex >= 0) {
          path = path.slice(hashIndex + 1);
        }
        var queryIndex = path.indexOf('?');
        if (queryIndex >= 0) {
          query = path.slice(queryIndex + 1);
          path = path.slice(0, queryIndex);
        }
        return {
          path: path,
          file: this.getFile(path, true),
          query: parseQuery(query)
        };
      };
      HashHistory.prototype.toURL = function toURL(path, params, currentRoute) {
        return '#' + History.prototype.toURL.call(this, path, params, currentRoute);
      };
      return HashHistory;
    }(History);

    /** @typedef {any} TODO */

    var HTML5History = /*@__PURE__*/function (History) {
      function HTML5History(config) {
        History.call(this, config);
        this.mode = 'history';
      }
      if (History) HTML5History.__proto__ = History;
      HTML5History.prototype = Object.create(History && History.prototype);
      HTML5History.prototype.constructor = HTML5History;
      HTML5History.prototype.getCurrentPath = function getCurrentPath() {
        var base = this.getBasePath();
        var path = window.location.pathname;
        if (base && path.indexOf(base) === 0) {
          path = path.slice(base.length);
        }
        return (path || '/') + window.location.search + window.location.hash;
      };
      HTML5History.prototype.onchange = function onchange(cb) {
        if (cb === void 0) cb = noop;
        on('click', function (e) {
          var el = e.target.tagName === 'A' ? e.target : e.target.parentNode;
          if (el && el.tagName === 'A' && !isExternal(el.href)) {
            e.preventDefault();
            var url = el.href;
            window.history.pushState({
              key: url
            }, '', url);
            cb({
              event: e,
              source: 'navigate'
            });
          }
        });
        on('popstate', function (e) {
          cb({
            event: e,
            source: 'history'
          });
        });
      };

      /**
       * Parse the url
       * @param {string} [path=location.href] URL to be parsed
       * @return {object} { path, query }
       */
      HTML5History.prototype.parse = function parse(path) {
        if (path === void 0) path = location.href;
        var query = '';
        var queryIndex = path.indexOf('?');
        if (queryIndex >= 0) {
          query = path.slice(queryIndex + 1);
          path = path.slice(0, queryIndex);
        }
        var base = getPath(location.origin);
        var baseIndex = path.indexOf(base);
        if (baseIndex > -1) {
          path = path.slice(baseIndex + base.length);
        }
        return {
          path: path,
          file: this.getFile(path),
          query: parseQuery(query)
        };
      };
      return HTML5History;
    }(History);

    /**
     * @typedef {{
     *   path?: string
     * }} Route
     */

    /** @type {Route} */
    var lastRoute = {};

    /** @typedef {import('../Docsify').Constructor} Constructor */

    /**
     * @template {!Constructor} T
     * @param {T} Base - The class to extend
     */
    function Router(Base) {
      return /*@__PURE__*/function (Base) {
        function Router() {
          var args = [],
            len = arguments.length;
          while (len--) args[len] = arguments[len];
          Base.apply(this, args);
          this.route = {};
        }
        if (Base) Router.__proto__ = Base;
        Router.prototype = Object.create(Base && Base.prototype);
        Router.prototype.constructor = Router;
        Router.prototype.updateRender = function updateRender() {
          this.router.normalize();
          this.route = this.router.parse();
          body.setAttribute('data-page', this.route.file);
        };
        Router.prototype.initRouter = function initRouter() {
          var this$1 = this;
          var config = this.config;
          var mode = config.routerMode || 'hash';
          var router;
          if (mode === 'history' && supportsPushState) {
            router = new HTML5History(config);
          } else {
            router = new HashHistory(config);
          }
          this.router = router;
          this.updateRender();
          lastRoute = this.route;

          // eslint-disable-next-line no-unused-vars
          router.onchange(function (params) {
            this$1.updateRender();
            this$1._updateRender();
            if (lastRoute.path === this$1.route.path) {
              this$1.$resetEvents(params.source);
              return;
            }
            this$1.$fetch(noop, this$1.$resetEvents.bind(this$1, params.source));
            lastRoute = this$1.route;
          });
        };
        return Router;
      }(Base);
    }
    var RGX = /([^{]*?)\w(?=\})/g;
    var MAP = {
      YYYY: 'getFullYear',
      YY: 'getYear',
      MM: function MM(d) {
        return d.getMonth() + 1;
      },
      DD: 'getDate',
      HH: 'getHours',
      mm: 'getMinutes',
      ss: 'getSeconds',
      fff: 'getMilliseconds'
    };
    function tinydate(str, custom) {
      var parts = [],
        offset = 0;
      str.replace(RGX, function (key, _, idx) {
        // save preceding string
        parts.push(str.substring(offset, idx - 1));
        offset = idx += key.length + 1;
        // save function
        parts.push(custom && custom[key] || function (d) {
          return ('00' + (typeof MAP[key] === 'string' ? d[MAP[key]]() : MAP[key](d))).slice(-key.length);
        });
      });
      if (offset !== str.length) {
        parts.push(str.substring(offset));
      }
      return function (arg) {
        var out = '',
          i = 0,
          d = arg || new Date();
        for (; i < parts.length; i++) {
          out += typeof parts[i] === 'string' ? parts[i] : parts[i](d);
        }
        return out;
      };
    }
    var barEl;
    var timeId;

    /**
     * Init progress component
     */
    function init() {
      var div = create('div');
      div.classList.add('progress');
      appendTo(body, div);
      barEl = div;
    }

    /**
     * Render progress bar
     */
    function progressbar(ref) {
      var loaded = ref.loaded;
      var total = ref.total;
      var step = ref.step;
      var num;
      !barEl && init();
      if (step) {
        num = parseInt(barEl.style.width || 0, 10) + step;
        num = num > 80 ? 80 : num;
      } else {
        num = Math.floor(loaded / total * 100);
      }
      barEl.style.opacity = 1;
      barEl.style.width = num >= 95 ? '100%' : num + '%';
      if (num >= 95) {
        clearTimeout(timeId);
        // eslint-disable-next-line no-unused-vars
        timeId = setTimeout(function (_) {
          barEl.style.opacity = 0;
          barEl.style.width = '0%';
        }, 200);
      }
    }

    /* eslint-disable no-unused-vars */

    var cache = {};

    /**
     * Ajax GET implmentation
     * @param {string} url Resource URL
     * @param {boolean} [hasBar=false] Has progress bar
     * @param {String[]} headers Array of headers
     * @return {Promise} Promise response
     */
    function get(url, hasBar, headers) {
      if (hasBar === void 0) hasBar = false;
      if (headers === void 0) headers = {};
      var xhr = new XMLHttpRequest();
      var on = function on() {
        xhr.addEventListener.apply(xhr, arguments);
      };
      var cached = cache[url];
      if (cached) {
        return {
          then: function then(cb) {
            return cb(cached.content, cached.opt);
          },
          abort: noop
        };
      }
      xhr.open('GET', url);
      for (var i in headers) {
        if (hasOwn.call(headers, i)) {
          xhr.setRequestHeader(i, headers[i]);
        }
      }
      xhr.send();
      return {
        then: function then(success, error) {
          if (error === void 0) error = noop;
          if (hasBar) {
            var id = setInterval(function (_) {
              return progressbar({
                step: Math.floor(Math.random() * 5 + 1)
              });
            }, 500);
            on('progress', progressbar);
            on('loadend', function (evt) {
              progressbar(evt);
              clearInterval(id);
            });
          }
          on('error', error);
          on('load', function (ref) {
            var target = ref.target;
            if (target.status >= 400) {
              error(target);
            } else {
              var result = cache[url] = {
                content: target.response,
                opt: {
                  updatedAt: xhr.getResponseHeader('last-modified')
                }
              };
              success(result.content, result.opt);
            }
          });
        },
        abort: function abort(_) {
          return xhr.readyState !== 4 && xhr.abort();
        }
      };
    }
    function replaceVar(block, color) {
      block.innerHTML = block.innerHTML.replace(/var\(\s*--theme-color.*?\)/g, color);
    }
    function cssVars(color) {
      // Variable support
      if (window.CSS && window.CSS.supports && window.CSS.supports('(--v:red)')) {
        return;
      }
      var styleBlocks = findAll('style:not(.inserted),link');
      [].forEach.call(styleBlocks, function (block) {
        if (block.nodeName === 'STYLE') {
          replaceVar(block, color);
        } else if (block.nodeName === 'LINK') {
          var href = block.getAttribute('href');
          if (!/\.css$/.test(href)) {
            return;
          }
          get(href).then(function (res) {
            var style = create('style', res);
            head.appendChild(style);
            replaceVar(style, color);
          });
        }
      });
    }

    /* eslint-disable no-unused-vars */

    var title = $.title;
    /**
     * Toggle button
     * @param {Element} el Button to be toggled
     * @void
     */
    function btn(el) {
      var toggle = function toggle(_) {
        return body.classList.toggle('close');
      };
      el = getNode(el);
      if (el === null || el === undefined) {
        return;
      }
      on(el, 'click', function (e) {
        e.stopPropagation();
        toggle();
      });
      isMobile && on(body, 'click', function (_) {
        return body.classList.contains('close') && toggle();
      });
    }
    function collapse(el) {
      el = getNode(el);
      if (el === null || el === undefined) {
        return;
      }
      on(el, 'click', function (ref) {
        var target = ref.target;
        if (target.nodeName === 'A' && target.nextSibling && target.nextSibling.classList && target.nextSibling.classList.contains('app-sub-sidebar')) {
          toggleClass(target.parentNode, 'collapse');
        }
      });
    }
    function sticky() {
      var cover = getNode('section.cover');
      if (!cover) {
        return;
      }
      var coverHeight = cover.getBoundingClientRect().height;
      if (window.pageYOffset >= coverHeight || cover.classList.contains('hidden')) {
        toggleClass(body, 'add', 'sticky');
      } else {
        toggleClass(body, 'remove', 'sticky');
      }
    }

    /**
     * Get and active link
     * @param  {Object} router Router
     * @param  {String|Element} el Target element
     * @param  {Boolean} isParent Active parent
     * @param  {Boolean} autoTitle Automatically set title
     * @return {Element} Active element
     */
    function getAndActive(router, el, isParent, autoTitle) {
      el = getNode(el);
      var links = [];
      if (el !== null && el !== undefined) {
        links = findAll(el, 'a');
      }
      var hash = decodeURI(router.toURL(router.getCurrentPath()));
      var target;
      links.sort(function (a, b) {
        return b.href.length - a.href.length;
      }).forEach(function (a) {
        var href = decodeURI(a.getAttribute('href'));
        var node = isParent ? a.parentNode : a;
        a.title = a.title || a.innerText;
        if (hash.indexOf(href) === 0 && !target) {
          target = a;
          toggleClass(node, 'add', 'active');
        } else {
          toggleClass(node, 'remove', 'active');
        }
      });
      if (autoTitle) {
        $.title = target ? target.title || target.innerText + " - " + title : title;
      }
      return target;
    }
    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) {
            descriptor.writable = true;
          }
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) {
          defineProperties(Constructor.prototype, protoProps);
        }
        if (staticProps) {
          defineProperties(Constructor, staticProps);
        }
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var SingleTweener = function () {
      function SingleTweener() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, SingleTweener);
        this.start = opts.start;
        this.end = opts.end;
        this.decimal = opts.decimal;
      }
      _createClass(SingleTweener, [{
        key: "getIntermediateValue",
        value: function getIntermediateValue(tick) {
          if (this.decimal) {
            return tick;
          } else {
            return Math.round(tick);
          }
        }
      }, {
        key: "getFinalValue",
        value: function getFinalValue() {
          return this.end;
        }
      }]);
      return SingleTweener;
    }();
    var _createClass$1 = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) {
            descriptor.writable = true;
          }
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) {
          defineProperties(Constructor.prototype, protoProps);
        }
        if (staticProps) {
          defineProperties(Constructor, staticProps);
        }
        return Constructor;
      };
    }();
    function _classCallCheck$1(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Tweezer = function () {
      function Tweezer() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$1(this, Tweezer);
        this.duration = opts.duration || 1000;
        this.ease = opts.easing || this._defaultEase;
        this.tweener = opts.tweener || new SingleTweener(opts);
        this.start = this.tweener.start;
        this.end = this.tweener.end;
        this.frame = null;
        this.next = null;
        this.isRunning = false;
        this.events = {};
        this.direction = this.start < this.end ? 'up' : 'down';
      }
      _createClass$1(Tweezer, [{
        key: 'begin',
        value: function begin() {
          if (!this.isRunning && this.next !== this.end) {
            this.frame = window.requestAnimationFrame(this._tick.bind(this));
          }
          return this;
        }
      }, {
        key: 'stop',
        value: function stop() {
          window.cancelAnimationFrame(this.frame);
          this.isRunning = false;
          this.frame = null;
          this.timeStart = null;
          this.next = null;
          return this;
        }
      }, {
        key: 'on',
        value: function on(name, handler) {
          this.events[name] = this.events[name] || [];
          this.events[name].push(handler);
          return this;
        }
      }, {
        key: '_emit',
        value: function _emit(name, val) {
          var _this = this;
          var e = this.events[name];
          e && e.forEach(function (handler) {
            return handler.call(_this, val);
          });
        }
      }, {
        key: '_tick',
        value: function _tick(currentTime) {
          this.isRunning = true;
          var lastTick = this.next || this.start;
          if (!this.timeStart) {
            this.timeStart = currentTime;
          }
          this.timeElapsed = currentTime - this.timeStart;
          this.next = this.ease(this.timeElapsed, this.start, this.end - this.start, this.duration);
          if (this._shouldTick(lastTick)) {
            this._emit('tick', this.tweener.getIntermediateValue(this.next));
            this.frame = window.requestAnimationFrame(this._tick.bind(this));
          } else {
            this._emit('tick', this.tweener.getFinalValue());
            this._emit('done', null);
          }
        }
      }, {
        key: '_shouldTick',
        value: function _shouldTick(lastTick) {
          return {
            up: this.next < this.end && lastTick <= this.next,
            down: this.next > this.end && lastTick >= this.next
          }[this.direction];
        }
      }, {
        key: '_defaultEase',
        value: function _defaultEase(t, b, c, d) {
          if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
          }
          return -c / 2 * (--t * (t - 2) - 1) + b;
        }
      }]);
      return Tweezer;
    }();
    var currentScript = document.currentScript;

    /** @param {import('./Docsify').Docsify} vm */
    function config(vm) {
      var config = merge({
        auto2top: false,
        autoHeader: false,
        basePath: '',
        catchPluginErrors: true,
        cornerExternalLinkTarget: '_blank',
        coverpage: '',
        el: '#app',
        executeScript: null,
        ext: '.md',
        externalLinkRel: 'noopener',
        externalLinkTarget: '_blank',
        formatUpdated: '',
        ga: '',
        homepage: 'README.md',
        loadNavbar: null,
        loadSidebar: null,
        maxLevel: 6,
        mergeNavbar: false,
        name: '',
        nameLink: window.location.pathname,
        nativeEmoji: false,
        noCompileLinks: [],
        noEmoji: false,
        notFoundPage: true,
        relativePath: false,
        repo: '',
        routes: {},
        routerMode: 'hash',
        subMaxLevel: 0,
        themeColor: '',
        topMargin: 0
      }, typeof window.$docsify === 'function' ? window.$docsify(vm) : window.$docsify);
      var script = currentScript || [].slice.call(document.getElementsByTagName('script')).filter(function (n) {
        return /docsify\./.test(n.src);
      })[0];
      if (script) {
        for (var prop in config) {
          if (hasOwn.call(config, prop)) {
            var val = script.getAttribute('data-' + hyphenate(prop));
            if (isPrimitive(val)) {
              config[prop] = val === '' ? true : val;
            }
          }
        }
      }
      if (config.loadSidebar === true) {
        config.loadSidebar = '_sidebar' + config.ext;
      }
      if (config.loadNavbar === true) {
        config.loadNavbar = '_navbar' + config.ext;
      }
      if (config.coverpage === true) {
        config.coverpage = '_coverpage' + config.ext;
      }
      if (config.repo === true) {
        config.repo = '';
      }
      if (config.name === true) {
        config.name = '';
      }
      window.$docsify = config;
      return config;
    }
    var nav = {};
    var hoverOver = false;
    var scroller = null;
    var enableScrollEvent = true;
    var coverHeight = 0;
    function scrollTo(el, offset) {
      if (offset === void 0) offset = 0;
      if (scroller) {
        scroller.stop();
      }
      enableScrollEvent = false;
      scroller = new Tweezer({
        start: window.pageYOffset,
        end: Math.round(el.getBoundingClientRect().top) + window.pageYOffset - offset,
        duration: 500
      }).on('tick', function (v) {
        return window.scrollTo(0, v);
      }).on('done', function () {
        enableScrollEvent = true;
        scroller = null;
      }).begin();
    }
    function highlight(path) {
      if (!enableScrollEvent) {
        return;
      }
      var sidebar = getNode('.sidebar');
      var anchors = findAll('.anchor');
      var wrap = find(sidebar, '.sidebar-nav');
      var active = find(sidebar, 'li.active');
      var doc = document.documentElement;
      var top = (doc && doc.scrollTop || document.body.scrollTop) - coverHeight;
      var last;
      for (var i = 0, len = anchors.length; i < len; i += 1) {
        var node = anchors[i];
        if (node.offsetTop > top) {
          if (!last) {
            last = node;
          }
          break;
        } else {
          last = node;
        }
      }
      if (!last) {
        return;
      }
      var li = nav[getNavKey(path, last.getAttribute('data-id'))];
      if (!li || li === active) {
        return;
      }
      active && active.classList.remove('active');
      li.classList.add('active');
      active = li;

      // Scroll into view
      // https://github.com/vuejs/vuejs.org/blob/master/themes/vue/source/js/common.js#L282-L297
      if (!hoverOver && body.classList.contains('sticky')) {
        var height = sidebar.clientHeight;
        var curOffset = 0;
        var cur = active.offsetTop + active.clientHeight + 40;
        var isInView = active.offsetTop >= wrap.scrollTop && cur <= wrap.scrollTop + height;
        var notThan = cur - curOffset < height;
        sidebar.scrollTop = isInView ? wrap.scrollTop : notThan ? curOffset : cur - height;
      }
    }
    function getNavKey(path, id) {
      return decodeURIComponent(path) + "?id=" + decodeURIComponent(id);
    }
    function scrollActiveSidebar(router) {
      var cover = find('.cover.show');
      coverHeight = cover ? cover.offsetHeight : 0;
      var sidebar = getNode('.sidebar');
      var lis = [];
      if (sidebar !== null && sidebar !== undefined) {
        lis = findAll(sidebar, 'li');
      }
      for (var i = 0, len = lis.length; i < len; i += 1) {
        var li = lis[i];
        var a = li.querySelector('a');
        if (!a) {
          continue;
        }
        var href = a.getAttribute('href');
        if (href !== '/') {
          var ref = router.parse(href);
          var id = ref.query.id;
          var path$1 = ref.path;
          if (id) {
            href = getNavKey(path$1, id);
          }
        }
        if (href) {
          nav[decodeURIComponent(href)] = li;
        }
      }
      if (isMobile) {
        return;
      }
      var path = removeParams(router.getCurrentPath());
      off('scroll', function () {
        return highlight(path);
      });
      on('scroll', function () {
        return highlight(path);
      });
      on(sidebar, 'mouseover', function () {
        hoverOver = true;
      });
      on(sidebar, 'mouseleave', function () {
        hoverOver = false;
      });
    }
    function scrollIntoView(path, id) {
      if (!id) {
        return;
      }
      var topMargin = config().topMargin;
      var section = find('#' + id);
      section && scrollTo(section, topMargin);
      var li = nav[getNavKey(path, id)];
      var sidebar = getNode('.sidebar');
      var active = find(sidebar, 'li.active');
      active && active.classList.remove('active');
      li && li.classList.add('active');
    }
    var scrollEl = $.scrollingElement || $.documentElement;
    function scroll2Top(offset) {
      if (offset === void 0) offset = 0;
      scrollEl.scrollTop = offset === true ? 0 : Number(offset);
    }
    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
    function createCommonjsModule(fn, module) {
      return module = {
        exports: {}
      }, fn(module, module.exports), module.exports;
    }
    var defaults = createCommonjsModule(function (module) {
      function getDefaults() {
        return {
          baseUrl: null,
          breaks: false,
          gfm: true,
          headerIds: true,
          headerPrefix: '',
          highlight: null,
          langPrefix: 'language-',
          mangle: true,
          pedantic: false,
          renderer: null,
          sanitize: false,
          sanitizer: null,
          silent: false,
          smartLists: false,
          smartypants: false,
          tokenizer: null,
          walkTokens: null,
          xhtml: false
        };
      }
      function changeDefaults(newDefaults) {
        module.exports.defaults = newDefaults;
      }
      module.exports = {
        defaults: getDefaults(),
        getDefaults: getDefaults,
        changeDefaults: changeDefaults
      };
    });
    var defaults_1 = defaults.defaults;
    var defaults_2 = defaults.getDefaults;
    var defaults_3 = defaults.changeDefaults;

    /**
     * Helpers
     */
    var escapeTest = /[&<>"']/;
    var escapeReplace = /[&<>"']/g;
    var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
    var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
    var escapeReplacements = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    var getEscapeReplacement = function getEscapeReplacement(ch) {
      return escapeReplacements[ch];
    };
    function escape(html, encode) {
      if (encode) {
        if (escapeTest.test(html)) {
          return html.replace(escapeReplace, getEscapeReplacement);
        }
      } else {
        if (escapeTestNoEncode.test(html)) {
          return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
        }
      }
      return html;
    }
    var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
    function unescape(html) {
      // explicitly match decimal, hex, and named HTML entities
      return html.replace(unescapeTest, function (_, n) {
        n = n.toLowerCase();
        if (n === 'colon') {
          return ':';
        }
        if (n.charAt(0) === '#') {
          return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
        }
        return '';
      });
    }
    var caret = /(^|[^\[])\^/g;
    function edit(regex, opt) {
      regex = regex.source || regex;
      opt = opt || '';
      var obj = {
        replace: function replace(name, val) {
          val = val.source || val;
          val = val.replace(caret, '$1');
          regex = regex.replace(name, val);
          return obj;
        },
        getRegex: function getRegex() {
          return new RegExp(regex, opt);
        }
      };
      return obj;
    }
    var nonWordAndColonTest = /[^\w:]/g;
    var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
    function cleanUrl(sanitize, base, href) {
      if (sanitize) {
        var prot;
        try {
          prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
        } catch (e) {
          return null;
        }
        if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
          return null;
        }
      }
      if (base && !originIndependentUrl.test(href)) {
        href = resolveUrl(base, href);
      }
      try {
        href = encodeURI(href).replace(/%25/g, '%');
      } catch (e) {
        return null;
      }
      return href;
    }
    var baseUrls = {};
    var justDomain = /^[^:]+:\/*[^/]*$/;
    var protocol = /^([^:]+:)[\s\S]*$/;
    var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
    function resolveUrl(base, href) {
      if (!baseUrls[' ' + base]) {
        // we can ignore everything in base after the last slash of its path component,
        // but we might need to add _that_
        // https://tools.ietf.org/html/rfc3986#section-3
        if (justDomain.test(base)) {
          baseUrls[' ' + base] = base + '/';
        } else {
          baseUrls[' ' + base] = rtrim(base, '/', true);
        }
      }
      base = baseUrls[' ' + base];
      var relativeBase = base.indexOf(':') === -1;
      if (href.substring(0, 2) === '//') {
        if (relativeBase) {
          return href;
        }
        return base.replace(protocol, '$1') + href;
      } else if (href.charAt(0) === '/') {
        if (relativeBase) {
          return href;
        }
        return base.replace(domain, '$1') + href;
      } else {
        return base + href;
      }
    }
    var noopTest = {
      exec: function noopTest() {}
    };
    function merge$1(obj) {
      var arguments$1 = arguments;
      var i = 1,
        target,
        key;
      for (; i < arguments.length; i++) {
        target = arguments$1[i];
        for (key in target) {
          if (Object.prototype.hasOwnProperty.call(target, key)) {
            obj[key] = target[key];
          }
        }
      }
      return obj;
    }
    function splitCells(tableRow, count) {
      // ensure that every cell-delimiting pipe has a space
      // before it to distinguish it from an escaped pipe
      var row = tableRow.replace(/\|/g, function (match, offset, str) {
          var escaped = false,
            curr = offset;
          while (--curr >= 0 && str[curr] === '\\') {
            escaped = !escaped;
          }
          if (escaped) {
            // odd number of slashes means | is escaped
            // so we leave it alone
            return '|';
          } else {
            // add space before unescaped |
            return ' |';
          }
        }),
        cells = row.split(/ \|/);
      var i = 0;
      if (cells.length > count) {
        cells.splice(count);
      } else {
        while (cells.length < count) {
          cells.push('');
        }
      }
      for (; i < cells.length; i++) {
        // leading or trailing whitespace is ignored per the gfm spec
        cells[i] = cells[i].trim().replace(/\\\|/g, '|');
      }
      return cells;
    }

    // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
    // /c*$/ is vulnerable to REDOS.
    // invert: Remove suffix of non-c chars instead. Default falsey.
    function rtrim(str, c, invert) {
      var l = str.length;
      if (l === 0) {
        return '';
      }

      // Length of suffix matching the invert condition.
      var suffLen = 0;

      // Step left until we fail to match the invert condition.
      while (suffLen < l) {
        var currChar = str.charAt(l - suffLen - 1);
        if (currChar === c && !invert) {
          suffLen++;
        } else if (currChar !== c && invert) {
          suffLen++;
        } else {
          break;
        }
      }
      return str.substr(0, l - suffLen);
    }
    function findClosingBracket(str, b) {
      if (str.indexOf(b[1]) === -1) {
        return -1;
      }
      var l = str.length;
      var level = 0,
        i = 0;
      for (; i < l; i++) {
        if (str[i] === '\\') {
          i++;
        } else if (str[i] === b[0]) {
          level++;
        } else if (str[i] === b[1]) {
          level--;
          if (level < 0) {
            return i;
          }
        }
      }
      return -1;
    }
    function checkSanitizeDeprecation(opt) {
      if (opt && opt.sanitize && !opt.silent) {
        console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
      }
    }

    // copied from https://stackoverflow.com/a/5450113/806777
    function repeatString(pattern, count) {
      if (count < 1) {
        return '';
      }
      var result = '';
      while (count > 1) {
        if (count & 1) {
          result += pattern;
        }
        count >>= 1;
        pattern += pattern;
      }
      return result + pattern;
    }
    var helpers = {
      escape: escape,
      unescape: unescape,
      edit: edit,
      cleanUrl: cleanUrl,
      resolveUrl: resolveUrl,
      noopTest: noopTest,
      merge: merge$1,
      splitCells: splitCells,
      rtrim: rtrim,
      findClosingBracket: findClosingBracket,
      checkSanitizeDeprecation: checkSanitizeDeprecation,
      repeatString: repeatString
    };
    var defaults$1 = defaults.defaults;
    var rtrim$1 = helpers.rtrim;
    var splitCells$1 = helpers.splitCells;
    var escape$1 = helpers.escape;
    var findClosingBracket$1 = helpers.findClosingBracket;
    function outputLink(cap, link, raw) {
      var href = link.href;
      var title = link.title ? escape$1(link.title) : null;
      var text = cap[1].replace(/\\([\[\]])/g, '$1');
      if (cap[0].charAt(0) !== '!') {
        return {
          type: 'link',
          raw: raw,
          href: href,
          title: title,
          text: text
        };
      } else {
        return {
          type: 'image',
          raw: raw,
          href: href,
          title: title,
          text: escape$1(text)
        };
      }
    }
    function indentCodeCompensation(raw, text) {
      var matchIndentToCode = raw.match(/^(\s+)(?:```)/);
      if (matchIndentToCode === null) {
        return text;
      }
      var indentToCode = matchIndentToCode[1];
      return text.split('\n').map(function (node) {
        var matchIndentInNode = node.match(/^\s+/);
        if (matchIndentInNode === null) {
          return node;
        }
        var indentInNode = matchIndentInNode[0];
        if (indentInNode.length >= indentToCode.length) {
          return node.slice(indentToCode.length);
        }
        return node;
      }).join('\n');
    }

    /**
     * Tokenizer
     */
    var Tokenizer = /*@__PURE__*/function () {
      function Tokenizer(options) {
        this.options = options || defaults$1;
      }
      Tokenizer.prototype.space = function space(src) {
        var cap = this.rules.block.newline.exec(src);
        if (cap) {
          if (cap[0].length > 1) {
            return {
              type: 'space',
              raw: cap[0]
            };
          }
          return {
            raw: '\n'
          };
        }
      };
      Tokenizer.prototype.code = function code(src, tokens) {
        var cap = this.rules.block.code.exec(src);
        if (cap) {
          var lastToken = tokens[tokens.length - 1];
          // An indented code block cannot interrupt a paragraph.
          if (lastToken && lastToken.type === 'paragraph') {
            return {
              raw: cap[0],
              text: cap[0].trimRight()
            };
          }
          var text = cap[0].replace(/^ {1,4}/gm, '');
          return {
            type: 'code',
            raw: cap[0],
            codeBlockStyle: 'indented',
            text: !this.options.pedantic ? rtrim$1(text, '\n') : text
          };
        }
      };
      Tokenizer.prototype.fences = function fences(src) {
        var cap = this.rules.block.fences.exec(src);
        if (cap) {
          var raw = cap[0];
          var text = indentCodeCompensation(raw, cap[3] || '');
          return {
            type: 'code',
            raw: raw,
            lang: cap[2] ? cap[2].trim() : cap[2],
            text: text
          };
        }
      };
      Tokenizer.prototype.heading = function heading(src) {
        var cap = this.rules.block.heading.exec(src);
        if (cap) {
          var text = cap[2].trim();

          // remove trailing #s
          if (/#$/.test(text)) {
            var trimmed = rtrim$1(text, '#');
            if (this.options.pedantic) {
              text = trimmed.trim();
            } else if (!trimmed || / $/.test(trimmed)) {
              // CommonMark requires space before trailing #s
              text = trimmed.trim();
            }
          }
          return {
            type: 'heading',
            raw: cap[0],
            depth: cap[1].length,
            text: text
          };
        }
      };
      Tokenizer.prototype.nptable = function nptable(src) {
        var cap = this.rules.block.nptable.exec(src);
        if (cap) {
          var item = {
            type: 'table',
            header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
            align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : [],
            raw: cap[0]
          };
          if (item.header.length === item.align.length) {
            var l = item.align.length;
            var i;
            for (i = 0; i < l; i++) {
              if (/^ *-+: *$/.test(item.align[i])) {
                item.align[i] = 'right';
              } else if (/^ *:-+: *$/.test(item.align[i])) {
                item.align[i] = 'center';
              } else if (/^ *:-+ *$/.test(item.align[i])) {
                item.align[i] = 'left';
              } else {
                item.align[i] = null;
              }
            }
            l = item.cells.length;
            for (i = 0; i < l; i++) {
              item.cells[i] = splitCells$1(item.cells[i], item.header.length);
            }
            return item;
          }
        }
      };
      Tokenizer.prototype.hr = function hr(src) {
        var cap = this.rules.block.hr.exec(src);
        if (cap) {
          return {
            type: 'hr',
            raw: cap[0]
          };
        }
      };
      Tokenizer.prototype.blockquote = function blockquote(src) {
        var cap = this.rules.block.blockquote.exec(src);
        if (cap) {
          var text = cap[0].replace(/^ *> ?/gm, '');
          return {
            type: 'blockquote',
            raw: cap[0],
            text: text
          };
        }
      };
      Tokenizer.prototype.list = function list(src) {
        var cap = this.rules.block.list.exec(src);
        if (cap) {
          var raw = cap[0];
          var bull = cap[2];
          var isordered = bull.length > 1;
          var list = {
            type: 'list',
            raw: raw,
            ordered: isordered,
            start: isordered ? +bull.slice(0, -1) : '',
            loose: false,
            items: []
          };

          // Get each top-level item.
          var itemMatch = cap[0].match(this.rules.block.item);
          var next = false,
            item,
            space,
            bcurr,
            bnext,
            addBack,
            loose,
            istask,
            ischecked;
          var l = itemMatch.length;
          bcurr = this.rules.block.listItemStart.exec(itemMatch[0]);
          for (var i = 0; i < l; i++) {
            item = itemMatch[i];
            raw = item;

            // Determine whether the next list item belongs here.
            // Backpedal if it does not belong in this list.
            if (i !== l - 1) {
              bnext = this.rules.block.listItemStart.exec(itemMatch[i + 1]);
              if (!this.options.pedantic ? bnext[1].length > bcurr[0].length || bnext[1].length > 3 : bnext[1].length > bcurr[1].length) {
                // nested list
                itemMatch.splice(i, 2, itemMatch[i] + '\n' + itemMatch[i + 1]);
                i--;
                l--;
                continue;
              } else {
                if (
                // different bullet style
                !this.options.pedantic || this.options.smartLists ? bnext[2][bnext[2].length - 1] !== bull[bull.length - 1] : isordered === (bnext[2].length === 1)) {
                  addBack = itemMatch.slice(i + 1).join('\n');
                  list.raw = list.raw.substring(0, list.raw.length - addBack.length);
                  i = l - 1;
                }
              }
              bcurr = bnext;
            }

            // Remove the list item's bullet
            // so it is seen as the next token.
            space = item.length;
            item = item.replace(/^ *([*+-]|\d+[.)]) ?/, '');

            // Outdent whatever the
            // list item contains. Hacky.
            if (~item.indexOf('\n ')) {
              space -= item.length;
              item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
            }

            // Determine whether item is loose or not.
            // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
            // for discount behavior.
            loose = next || /\n\n(?!\s*$)/.test(item);
            if (i !== l - 1) {
              next = item.charAt(item.length - 1) === '\n';
              if (!loose) {
                loose = next;
              }
            }
            if (loose) {
              list.loose = true;
            }

            // Check for task list items
            if (this.options.gfm) {
              istask = /^\[[ xX]\] /.test(item);
              ischecked = undefined;
              if (istask) {
                ischecked = item[1] !== ' ';
                item = item.replace(/^\[[ xX]\] +/, '');
              }
            }
            list.items.push({
              type: 'list_item',
              raw: raw,
              task: istask,
              checked: ischecked,
              loose: loose,
              text: item
            });
          }
          return list;
        }
      };
      Tokenizer.prototype.html = function html(src) {
        var cap = this.rules.block.html.exec(src);
        if (cap) {
          return {
            type: this.options.sanitize ? 'paragraph' : 'html',
            raw: cap[0],
            pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$1(cap[0]) : cap[0]
          };
        }
      };
      Tokenizer.prototype.def = function def(src) {
        var cap = this.rules.block.def.exec(src);
        if (cap) {
          if (cap[3]) {
            cap[3] = cap[3].substring(1, cap[3].length - 1);
          }
          var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
          return {
            tag: tag,
            raw: cap[0],
            href: cap[2],
            title: cap[3]
          };
        }
      };
      Tokenizer.prototype.table = function table(src) {
        var cap = this.rules.block.table.exec(src);
        if (cap) {
          var item = {
            type: 'table',
            header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
            align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
          };
          if (item.header.length === item.align.length) {
            item.raw = cap[0];
            var l = item.align.length;
            var i;
            for (i = 0; i < l; i++) {
              if (/^ *-+: *$/.test(item.align[i])) {
                item.align[i] = 'right';
              } else if (/^ *:-+: *$/.test(item.align[i])) {
                item.align[i] = 'center';
              } else if (/^ *:-+ *$/.test(item.align[i])) {
                item.align[i] = 'left';
              } else {
                item.align[i] = null;
              }
            }
            l = item.cells.length;
            for (i = 0; i < l; i++) {
              item.cells[i] = splitCells$1(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
            }
            return item;
          }
        }
      };
      Tokenizer.prototype.lheading = function lheading(src) {
        var cap = this.rules.block.lheading.exec(src);
        if (cap) {
          return {
            type: 'heading',
            raw: cap[0],
            depth: cap[2].charAt(0) === '=' ? 1 : 2,
            text: cap[1]
          };
        }
      };
      Tokenizer.prototype.paragraph = function paragraph(src) {
        var cap = this.rules.block.paragraph.exec(src);
        if (cap) {
          return {
            type: 'paragraph',
            raw: cap[0],
            text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
          };
        }
      };
      Tokenizer.prototype.text = function text(src, tokens) {
        var cap = this.rules.block.text.exec(src);
        if (cap) {
          var lastToken = tokens[tokens.length - 1];
          if (lastToken && lastToken.type === 'text') {
            return {
              raw: cap[0],
              text: cap[0]
            };
          }
          return {
            type: 'text',
            raw: cap[0],
            text: cap[0]
          };
        }
      };
      Tokenizer.prototype.escape = function escape$1$1(src) {
        var cap = this.rules.inline.escape.exec(src);
        if (cap) {
          return {
            type: 'escape',
            raw: cap[0],
            text: escape$1(cap[1])
          };
        }
      };
      Tokenizer.prototype.tag = function tag(src, inLink, inRawBlock) {
        var cap = this.rules.inline.tag.exec(src);
        if (cap) {
          if (!inLink && /^<a /i.test(cap[0])) {
            inLink = true;
          } else if (inLink && /^<\/a>/i.test(cap[0])) {
            inLink = false;
          }
          if (!inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
            inRawBlock = true;
          } else if (inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
            inRawBlock = false;
          }
          return {
            type: this.options.sanitize ? 'text' : 'html',
            raw: cap[0],
            inLink: inLink,
            inRawBlock: inRawBlock,
            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$1(cap[0]) : cap[0]
          };
        }
      };
      Tokenizer.prototype.link = function link(src) {
        var cap = this.rules.inline.link.exec(src);
        if (cap) {
          var trimmedUrl = cap[2].trim();
          if (!this.options.pedantic && /^</.test(trimmedUrl)) {
            // commonmark requires matching angle brackets
            if (!/>$/.test(trimmedUrl)) {
              return;
            }

            // ending angle bracket cannot be escaped
            var rtrimSlash = rtrim$1(trimmedUrl.slice(0, -1), '\\');
            if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
              return;
            }
          } else {
            // find closing parenthesis
            var lastParenIndex = findClosingBracket$1(cap[2], '()');
            if (lastParenIndex > -1) {
              var start = cap[0].indexOf('!') === 0 ? 5 : 4;
              var linkLen = start + cap[1].length + lastParenIndex;
              cap[2] = cap[2].substring(0, lastParenIndex);
              cap[0] = cap[0].substring(0, linkLen).trim();
              cap[3] = '';
            }
          }
          var href = cap[2];
          var title = '';
          if (this.options.pedantic) {
            // split pedantic href and title
            var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
            if (link) {
              href = link[1];
              title = link[3];
            }
          } else {
            title = cap[3] ? cap[3].slice(1, -1) : '';
          }
          href = href.trim();
          if (/^</.test(href)) {
            if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
              // pedantic allows starting angle bracket without ending angle bracket
              href = href.slice(1);
            } else {
              href = href.slice(1, -1);
            }
          }
          return outputLink(cap, {
            href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
            title: title ? title.replace(this.rules.inline._escapes, '$1') : title
          }, cap[0]);
        }
      };
      Tokenizer.prototype.reflink = function reflink(src, links) {
        var cap;
        if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
          var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
          link = links[link.toLowerCase()];
          if (!link || !link.href) {
            var text = cap[0].charAt(0);
            return {
              type: 'text',
              raw: text,
              text: text
            };
          }
          return outputLink(cap, link, cap[0]);
        }
      };
      Tokenizer.prototype.strong = function strong(src, maskedSrc, prevChar) {
        if (prevChar === void 0) prevChar = '';
        var match = this.rules.inline.strong.start.exec(src);
        if (match && (!match[1] || match[1] && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))) {
          maskedSrc = maskedSrc.slice(-1 * src.length);
          var endReg = match[0] === '**' ? this.rules.inline.strong.endAst : this.rules.inline.strong.endUnd;
          endReg.lastIndex = 0;
          var cap;
          while ((match = endReg.exec(maskedSrc)) != null) {
            cap = this.rules.inline.strong.middle.exec(maskedSrc.slice(0, match.index + 3));
            if (cap) {
              return {
                type: 'strong',
                raw: src.slice(0, cap[0].length),
                text: src.slice(2, cap[0].length - 2)
              };
            }
          }
        }
      };
      Tokenizer.prototype.em = function em(src, maskedSrc, prevChar) {
        if (prevChar === void 0) prevChar = '';
        var match = this.rules.inline.em.start.exec(src);
        if (match && (!match[1] || match[1] && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))) {
          maskedSrc = maskedSrc.slice(-1 * src.length);
          var endReg = match[0] === '*' ? this.rules.inline.em.endAst : this.rules.inline.em.endUnd;
          endReg.lastIndex = 0;
          var cap;
          while ((match = endReg.exec(maskedSrc)) != null) {
            cap = this.rules.inline.em.middle.exec(maskedSrc.slice(0, match.index + 2));
            if (cap) {
              return {
                type: 'em',
                raw: src.slice(0, cap[0].length),
                text: src.slice(1, cap[0].length - 1)
              };
            }
          }
        }
      };
      Tokenizer.prototype.codespan = function codespan(src) {
        var cap = this.rules.inline.code.exec(src);
        if (cap) {
          var text = cap[2].replace(/\n/g, ' ');
          var hasNonSpaceChars = /[^ ]/.test(text);
          var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
          if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
            text = text.substring(1, text.length - 1);
          }
          text = escape$1(text, true);
          return {
            type: 'codespan',
            raw: cap[0],
            text: text
          };
        }
      };
      Tokenizer.prototype.br = function br(src) {
        var cap = this.rules.inline.br.exec(src);
        if (cap) {
          return {
            type: 'br',
            raw: cap[0]
          };
        }
      };
      Tokenizer.prototype.del = function del(src) {
        var cap = this.rules.inline.del.exec(src);
        if (cap) {
          return {
            type: 'del',
            raw: cap[0],
            text: cap[2]
          };
        }
      };
      Tokenizer.prototype.autolink = function autolink(src, mangle) {
        var cap = this.rules.inline.autolink.exec(src);
        if (cap) {
          var text, href;
          if (cap[2] === '@') {
            text = escape$1(this.options.mangle ? mangle(cap[1]) : cap[1]);
            href = 'mailto:' + text;
          } else {
            text = escape$1(cap[1]);
            href = text;
          }
          return {
            type: 'link',
            raw: cap[0],
            text: text,
            href: href,
            tokens: [{
              type: 'text',
              raw: text,
              text: text
            }]
          };
        }
      };
      Tokenizer.prototype.url = function url(src, mangle) {
        var cap;
        if (cap = this.rules.inline.url.exec(src)) {
          var text, href;
          if (cap[2] === '@') {
            text = escape$1(this.options.mangle ? mangle(cap[0]) : cap[0]);
            href = 'mailto:' + text;
          } else {
            // do extended autolink path validation
            var prevCapZero;
            do {
              prevCapZero = cap[0];
              cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
            } while (prevCapZero !== cap[0]);
            text = escape$1(cap[0]);
            if (cap[1] === 'www.') {
              href = 'http://' + text;
            } else {
              href = text;
            }
          }
          return {
            type: 'link',
            raw: cap[0],
            text: text,
            href: href,
            tokens: [{
              type: 'text',
              raw: text,
              text: text
            }]
          };
        }
      };
      Tokenizer.prototype.inlineText = function inlineText(src, inRawBlock, smartypants) {
        var cap = this.rules.inline.text.exec(src);
        if (cap) {
          var text;
          if (inRawBlock) {
            text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$1(cap[0]) : cap[0];
          } else {
            text = escape$1(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
          }
          return {
            type: 'text',
            raw: cap[0],
            text: text
          };
        }
      };
      return Tokenizer;
    }();
    var noopTest$1 = helpers.noopTest;
    var edit$1 = helpers.edit;
    var merge$2 = helpers.merge;

    /**
     * Block-Level Grammar
     */
    var block = {
      newline: /^(?: *(?:\n|$))+/,
      code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
      fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
      hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
      html: '^ {0,3}(?:' // optional indentation
      + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
      + '|comment[^\\n]*(\\n+|$)' // (2)
      + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
      + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
      + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
      + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
      + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
      + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
      + ')',
      def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
      nptable: noopTest$1,
      table: noopTest$1,
      lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
      // regex template, placeholders will be replaced according to different paragraph
      // interruption rules of commonmark and the original markdown spec:
      _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
      text: /^[^\n]+/
    };
    block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
    block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
    block.def = edit$1(block.def).replace('label', block._label).replace('title', block._title).getRegex();
    block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
    block.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/;
    block.item = edit$1(block.item, 'gm').replace(/bull/g, block.bullet).getRegex();
    block.listItemStart = edit$1(/^( *)(bull)/).replace('bull', block.bullet).getRegex();
    block.list = edit$1(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
    block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
    block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
    block.html = edit$1(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
    block.paragraph = edit$1(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
    .replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
    .getRegex();
    block.blockquote = edit$1(block.blockquote).replace('paragraph', block.paragraph).getRegex();

    /**
     * Normal Block Grammar
     */

    block.normal = merge$2({}, block);

    /**
     * GFM Block Grammar
     */

    block.gfm = merge$2({}, block.normal, {
      nptable: '^ *([^|\\n ].*\\|.*)\\n' // Header
      + ' {0,3}([-:]+ *\\|[-| :]*)' // Align
      + '(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
      // Cells
      table: '^ *\\|(.+)\\n' // Header
      + ' {0,3}\\|?( *[-:]+[-| :]*)' // Align
      + '(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells
    });
    block.gfm.nptable = edit$1(block.gfm.nptable).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
    .getRegex();
    block.gfm.table = edit$1(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
    .getRegex();

    /**
     * Pedantic grammar (original John Gruber's loose markdown specification)
     */

    block.pedantic = merge$2({}, block.normal, {
      html: edit$1('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
      + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: noopTest$1,
      // fences not supported
      paragraph: edit$1(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
    });

    /**
     * Inline-Level Grammar
     */
    var inline = {
      escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
      autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
      url: noopTest$1,
      tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
      + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
      + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
      + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
      + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
      // CDATA section
      link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
      reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
      nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
      reflinkSearch: 'reflink|nolink(?!\\()',
      strong: {
        start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,
        // (1) returns if starts w/ punctuation
        middle: /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,
        endAst: /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,
        // last char can't be punct, or final * must also be followed by punct (or endline)
        endUnd: /[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/ // last char can't be a space, and final _ must preceed punct or \s (or endline)
      },
      em: {
        start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,
        // (1) returns if starts w/ punctuation
        middle: /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,
        endAst: /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,
        // last char can't be punct, or final * must also be followed by punct (or endline)
        endUnd: /[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/ // last char can't be a space, and final _ must preceed punct or \s (or endline)
      },
      code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
      br: /^( {2,}|\\)\n(?!\s*$)/,
      del: noopTest$1,
      text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,
      punctuation: /^([\s*punctuation])/
    };

    // list of punctuation marks from common mark spec
    // without * and _ to workaround cases with double emphasis
    inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
    inline.punctuation = edit$1(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();

    // sequences em should skip over [title](link), `code`, <html>
    inline._blockSkip = '\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>';
    inline._overlapSkip = '__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*';
    inline._comment = edit$1(block._comment).replace('(?:-->|$)', '-->').getRegex();
    inline.em.start = edit$1(inline.em.start).replace(/punctuation/g, inline._punctuation).getRegex();
    inline.em.middle = edit$1(inline.em.middle).replace(/punctuation/g, inline._punctuation).replace(/overlapSkip/g, inline._overlapSkip).getRegex();
    inline.em.endAst = edit$1(inline.em.endAst, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
    inline.em.endUnd = edit$1(inline.em.endUnd, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
    inline.strong.start = edit$1(inline.strong.start).replace(/punctuation/g, inline._punctuation).getRegex();
    inline.strong.middle = edit$1(inline.strong.middle).replace(/punctuation/g, inline._punctuation).replace(/overlapSkip/g, inline._overlapSkip).getRegex();
    inline.strong.endAst = edit$1(inline.strong.endAst, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
    inline.strong.endUnd = edit$1(inline.strong.endUnd, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
    inline.blockSkip = edit$1(inline._blockSkip, 'g').getRegex();
    inline.overlapSkip = edit$1(inline._overlapSkip, 'g').getRegex();
    inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
    inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
    inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
    inline.autolink = edit$1(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
    inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
    inline.tag = edit$1(inline.tag).replace('comment', inline._comment).replace('attribute', inline._attribute).getRegex();
    inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
    inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
    inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
    inline.link = edit$1(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
    inline.reflink = edit$1(inline.reflink).replace('label', inline._label).getRegex();
    inline.reflinkSearch = edit$1(inline.reflinkSearch, 'g').replace('reflink', inline.reflink).replace('nolink', inline.nolink).getRegex();

    /**
     * Normal Inline Grammar
     */

    inline.normal = merge$2({}, inline);

    /**
     * Pedantic Inline Grammar
     */

    inline.pedantic = merge$2({}, inline.normal, {
      strong: {
        start: /^__|\*\*/,
        middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        endAst: /\*\*(?!\*)/g,
        endUnd: /__(?!_)/g
      },
      em: {
        start: /^_|\*/,
        middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
        endAst: /\*(?!\*)/g,
        endUnd: /_(?!_)/g
      },
      link: edit$1(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
      reflink: edit$1(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
    });

    /**
     * GFM Inline Grammar
     */

    inline.gfm = merge$2({}, inline.normal, {
      escape: edit$1(inline.escape).replace('])', '~|])').getRegex(),
      _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
    });
    inline.gfm.url = edit$1(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
    /**
     * GFM + Line Breaks Inline Grammar
     */

    inline.breaks = merge$2({}, inline.gfm, {
      br: edit$1(inline.br).replace('{2,}', '*').getRegex(),
      text: edit$1(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
    });
    var rules = {
      block: block,
      inline: inline
    };
    var defaults$2 = defaults.defaults;
    var block$1 = rules.block;
    var inline$1 = rules.inline;
    var repeatString$1 = helpers.repeatString;

    /**
     * smartypants text replacement
     */
    function smartypants(text) {
      return text
      // em-dashes
      .replace(/---/g, "\u2014")
      // en-dashes
      .replace(/--/g, "\u2013")
      // opening singles
      .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018")
      // closing singles & apostrophes
      .replace(/'/g, "\u2019")
      // opening doubles
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C")
      // closing doubles
      .replace(/"/g, "\u201D")
      // ellipses
      .replace(/\.{3}/g, "\u2026");
    }

    /**
     * mangle email addresses
     */
    function mangle(text) {
      var out = '',
        i,
        ch;
      var l = text.length;
      for (i = 0; i < l; i++) {
        ch = text.charCodeAt(i);
        if (Math.random() > 0.5) {
          ch = 'x' + ch.toString(16);
        }
        out += '&#' + ch + ';';
      }
      return out;
    }

    /**
     * Block Lexer
     */
    var Lexer = /*@__PURE__*/function () {
      function Lexer(options) {
        this.tokens = [];
        this.tokens.links = Object.create(null);
        this.options = options || defaults$2;
        this.options.tokenizer = this.options.tokenizer || new Tokenizer();
        this.tokenizer = this.options.tokenizer;
        this.tokenizer.options = this.options;
        var rules = {
          block: block$1.normal,
          inline: inline$1.normal
        };
        if (this.options.pedantic) {
          rules.block = block$1.pedantic;
          rules.inline = inline$1.pedantic;
        } else if (this.options.gfm) {
          rules.block = block$1.gfm;
          if (this.options.breaks) {
            rules.inline = inline$1.breaks;
          } else {
            rules.inline = inline$1.gfm;
          }
        }
        this.tokenizer.rules = rules;
      }
      var staticAccessors = {
        rules: {
          configurable: true
        }
      };

      /**
       * Expose Rules
       */
      staticAccessors.rules.get = function () {
        return {
          block: block$1,
          inline: inline$1
        };
      };

      /**
       * Static Lex Method
       */
      Lexer.lex = function lex(src, options) {
        var lexer = new Lexer(options);
        return lexer.lex(src);
      };

      /**
       * Static Lex Inline Method
       */
      Lexer.lexInline = function lexInline(src, options) {
        var lexer = new Lexer(options);
        return lexer.inlineTokens(src);
      };

      /**
       * Preprocessing
       */
      Lexer.prototype.lex = function lex(src) {
        src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
        this.blockTokens(src, this.tokens, true);
        this.inline(this.tokens);
        return this.tokens;
      };

      /**
       * Lexing
       */
      Lexer.prototype.blockTokens = function blockTokens(src, tokens, top) {
        if (tokens === void 0) tokens = [];
        if (top === void 0) top = true;
        if (this.options.pedantic) {
          src = src.replace(/^ +$/gm, '');
        }
        var token, i, l, lastToken;
        while (src) {
          // newline
          if (token = this.tokenizer.space(src)) {
            src = src.substring(token.raw.length);
            if (token.type) {
              tokens.push(token);
            }
            continue;
          }

          // code
          if (token = this.tokenizer.code(src, tokens)) {
            src = src.substring(token.raw.length);
            if (token.type) {
              tokens.push(token);
            } else {
              lastToken = tokens[tokens.length - 1];
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.text;
            }
            continue;
          }

          // fences
          if (token = this.tokenizer.fences(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }

          // heading
          if (token = this.tokenizer.heading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }

          // table no leading pipe (gfm)
          if (token = this.tokenizer.nptable(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }

          // hr
          if (token = this.tokenizer.hr(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }

          // blockquote
          if (token = this.tokenizer.blockquote(src)) {
            src = src.substring(token.raw.length);
            token.tokens = this.blockTokens(token.text, [], top);
            tokens.push(token);
            continue;
          }

          // list
          if (token = this.tokenizer.list(src)) {
            src = src.substring(token.raw.length);
            l = token.items.length;
            for (i = 0; i < l; i++) {
              token.items[i].tokens = this.blockTokens(token.items[i].text, [], false);
            }
            tokens.push(token);
            continue;
          }

          // html
          if (token = this.tokenizer.html(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }

          // def
          if (top && (token = this.tokenizer.def(src))) {
            src = src.substring(token.raw.length);
            if (!this.tokens.links[token.tag]) {
              this.tokens.links[token.tag] = {
                href: token.href,
                title: token.title
              };
            }
            continue;
          }

          // table (gfm)
          if (token = this.tokenizer.table(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }

          // lheading
          if (token = this.tokenizer.lheading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }

          // top-level paragraph
          if (top && (token = this.tokenizer.paragraph(src))) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }

          // text
          if (token = this.tokenizer.text(src, tokens)) {
            src = src.substring(token.raw.length);
            if (token.type) {
              tokens.push(token);
            } else {
              lastToken = tokens[tokens.length - 1];
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.text;
            }
            continue;
          }
          if (src) {
            var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
            if (this.options.silent) {
              console.error(errMsg);
              break;
            } else {
              throw new Error(errMsg);
            }
          }
        }
        return tokens;
      };
      Lexer.prototype.inline = function inline(tokens) {
        var i, j, k, l2, row, token;
        var l = tokens.length;
        for (i = 0; i < l; i++) {
          token = tokens[i];
          switch (token.type) {
            case 'paragraph':
            case 'text':
            case 'heading':
              {
                token.tokens = [];
                this.inlineTokens(token.text, token.tokens);
                break;
              }
            case 'table':
              {
                token.tokens = {
                  header: [],
                  cells: []
                };

                // header
                l2 = token.header.length;
                for (j = 0; j < l2; j++) {
                  token.tokens.header[j] = [];
                  this.inlineTokens(token.header[j], token.tokens.header[j]);
                }

                // cells
                l2 = token.cells.length;
                for (j = 0; j < l2; j++) {
                  row = token.cells[j];
                  token.tokens.cells[j] = [];
                  for (k = 0; k < row.length; k++) {
                    token.tokens.cells[j][k] = [];
                    this.inlineTokens(row[k], token.tokens.cells[j][k]);
                  }
                }
                break;
              }
            case 'blockquote':
              {
                this.inline(token.tokens);
                break;
              }
            case 'list':
              {
                l2 = token.items.length;
                for (j = 0; j < l2; j++) {
                  this.inline(token.items[j].tokens);
                }
                break;
              }
          }
        }
        return tokens;
      };

      /**
       * Lexing/Compiling
       */
      Lexer.prototype.inlineTokens = function inlineTokens(src, tokens, inLink, inRawBlock) {
        if (tokens === void 0) tokens = [];
        if (inLink === void 0) inLink = false;
        if (inRawBlock === void 0) inRawBlock = false;
        var token;

        // String with links masked to avoid interference with em and strong
        var maskedSrc = src;
        var match;
        var keepPrevChar, prevChar;

        // Mask out reflinks
        if (this.tokens.links) {
          var links = Object.keys(this.tokens.links);
          if (links.length > 0) {
            while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
              if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
                maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString$1('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
              }
            }
          }
        }
        // Mask out other blocks
        while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
          maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString$1('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        }
        while (src) {
          if (!keepPrevChar) {
            prevChar = '';
          }
          keepPrevChar = false;
          // escape
          if (token = this.tokenizer.escape(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }

          // tag
          if (token = this.tokenizer.tag(src, inLink, inRawBlock)) {
            src = src.substring(token.raw.length);
            inLink = token.inLink;
            inRawBlock = token.inRawBlock;
            tokens.push(token);
            continue;
          }

          // link
          if (token = this.tokenizer.link(src)) {
            src = src.substring(token.raw.length);
            if (token.type === 'link') {
              token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
            }
            tokens.push(token);
            continue;
          }

          // reflink, nolink
          if (token = this.tokenizer.reflink(src, this.tokens.links)) {
            src = src.substring(token.raw.length);
            if (token.type === 'link') {
              token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
            }
            tokens.push(token);
            continue;
          }

          // strong
          if (token = this.tokenizer.strong(src, maskedSrc, prevChar)) {
            src = src.substring(token.raw.length);
            token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
            tokens.push(token);
            continue;
          }

          // em
          if (token = this.tokenizer.em(src, maskedSrc, prevChar)) {
            src = src.substring(token.raw.length);
            token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
            tokens.push(token);
            continue;
          }

          // code
          if (token = this.tokenizer.codespan(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }

          // br
          if (token = this.tokenizer.br(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }

          // del (gfm)
          if (token = this.tokenizer.del(src)) {
            src = src.substring(token.raw.length);
            token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
            tokens.push(token);
            continue;
          }

          // autolink
          if (token = this.tokenizer.autolink(src, mangle)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }

          // url (gfm)
          if (!inLink && (token = this.tokenizer.url(src, mangle))) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }

          // text
          if (token = this.tokenizer.inlineText(src, inRawBlock, smartypants)) {
            src = src.substring(token.raw.length);
            prevChar = token.raw.slice(-1);
            keepPrevChar = true;
            tokens.push(token);
            continue;
          }
          if (src) {
            var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
            if (this.options.silent) {
              console.error(errMsg);
              break;
            } else {
              throw new Error(errMsg);
            }
          }
        }
        return tokens;
      };
      Object.defineProperties(Lexer, staticAccessors);
      return Lexer;
    }();
    var defaults$3 = defaults.defaults;
    var cleanUrl$1 = helpers.cleanUrl;
    var escape$2 = helpers.escape;

    /**
     * Renderer
     */
    var Renderer = /*@__PURE__*/function () {
      function Renderer(options) {
        this.options = options || defaults$3;
      }
      Renderer.prototype.code = function code(code$1, infostring, escaped) {
        var lang = (infostring || '').match(/\S*/)[0];
        if (this.options.highlight) {
          var out = this.options.highlight(code$1, lang);
          if (out != null && out !== code$1) {
            escaped = true;
            code$1 = out;
          }
        }
        code$1 = code$1.replace(/\n$/, '') + '\n';
        if (!lang) {
          return '<pre><code>' + (escaped ? code$1 : escape$2(code$1, true)) + '</code></pre>\n';
        }
        return '<pre><code class="' + this.options.langPrefix + escape$2(lang, true) + '">' + (escaped ? code$1 : escape$2(code$1, true)) + '</code></pre>\n';
      };
      Renderer.prototype.blockquote = function blockquote(quote) {
        return '<blockquote>\n' + quote + '</blockquote>\n';
      };
      Renderer.prototype.html = function html(html$1) {
        return html$1;
      };
      Renderer.prototype.heading = function heading(text, level, raw, slugger) {
        if (this.options.headerIds) {
          return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
        }
        // ignore IDs
        return '<h' + level + '>' + text + '</h' + level + '>\n';
      };
      Renderer.prototype.hr = function hr() {
        return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
      };
      Renderer.prototype.list = function list(body, ordered, start) {
        var type = ordered ? 'ol' : 'ul',
          startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
        return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
      };
      Renderer.prototype.listitem = function listitem(text) {
        return '<li>' + text + '</li>\n';
      };
      Renderer.prototype.checkbox = function checkbox(checked) {
        return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
      };
      Renderer.prototype.paragraph = function paragraph(text) {
        return '<p>' + text + '</p>\n';
      };
      Renderer.prototype.table = function table(header, body) {
        if (body) {
          body = '<tbody>' + body + '</tbody>';
        }
        return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
      };
      Renderer.prototype.tablerow = function tablerow(content) {
        return '<tr>\n' + content + '</tr>\n';
      };
      Renderer.prototype.tablecell = function tablecell(content, flags) {
        var type = flags.header ? 'th' : 'td';
        var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
        return tag + content + '</' + type + '>\n';
      };

      // span level renderer
      Renderer.prototype.strong = function strong(text) {
        return '<strong>' + text + '</strong>';
      };
      Renderer.prototype.em = function em(text) {
        return '<em>' + text + '</em>';
      };
      Renderer.prototype.codespan = function codespan(text) {
        return '<code>' + text + '</code>';
      };
      Renderer.prototype.br = function br() {
        return this.options.xhtml ? '<br/>' : '<br>';
      };
      Renderer.prototype.del = function del(text) {
        return '<del>' + text + '</del>';
      };
      Renderer.prototype.link = function link(href, title, text) {
        href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);
        if (href === null) {
          return text;
        }
        var out = '<a href="' + escape$2(href) + '"';
        if (title) {
          out += ' title="' + title + '"';
        }
        out += '>' + text + '</a>';
        return out;
      };
      Renderer.prototype.image = function image(href, title, text) {
        href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);
        if (href === null) {
          return text;
        }
        var out = '<img src="' + href + '" alt="' + text + '"';
        if (title) {
          out += ' title="' + title + '"';
        }
        out += this.options.xhtml ? '/>' : '>';
        return out;
      };
      Renderer.prototype.text = function text(text$1) {
        return text$1;
      };
      return Renderer;
    }();

    /**
     * TextRenderer
     * returns only the textual part of the token
     */
    var TextRenderer = /*@__PURE__*/function () {
      function TextRenderer() {}
      TextRenderer.prototype.strong = function strong(text) {
        return text;
      };
      TextRenderer.prototype.em = function em(text) {
        return text;
      };
      TextRenderer.prototype.codespan = function codespan(text) {
        return text;
      };
      TextRenderer.prototype.del = function del(text) {
        return text;
      };
      TextRenderer.prototype.html = function html(text) {
        return text;
      };
      TextRenderer.prototype.text = function text(text$1) {
        return text$1;
      };
      TextRenderer.prototype.link = function link(href, title, text) {
        return '' + text;
      };
      TextRenderer.prototype.image = function image(href, title, text) {
        return '' + text;
      };
      TextRenderer.prototype.br = function br() {
        return '';
      };
      return TextRenderer;
    }();

    /**
     * Slugger generates header id
     */
    var Slugger = /*@__PURE__*/function () {
      function Slugger() {
        this.seen = {};
      }
      Slugger.prototype.serialize = function serialize(value) {
        return value.toLowerCase().trim()
        // remove html tags
        .replace(/<[!\/a-z].*?>/ig, '')
        // remove unwanted chars
        .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');
      };

      /**
       * Finds the next safe (unique) slug to use
       */
      Slugger.prototype.getNextSafeSlug = function getNextSafeSlug(originalSlug, isDryRun) {
        var slug = originalSlug;
        var occurenceAccumulator = 0;
        if (this.seen.hasOwnProperty(slug)) {
          occurenceAccumulator = this.seen[originalSlug];
          do {
            occurenceAccumulator++;
            slug = originalSlug + '-' + occurenceAccumulator;
          } while (this.seen.hasOwnProperty(slug));
        }
        if (!isDryRun) {
          this.seen[originalSlug] = occurenceAccumulator;
          this.seen[slug] = 0;
        }
        return slug;
      };

      /**
       * Convert string to unique id
       * @param {object} options
       * @param {boolean} options.dryrun Generates the next unique slug without updating the internal accumulator.
       */
      Slugger.prototype.slug = function slug(value, options) {
        if (options === void 0) options = {};
        var slug = this.serialize(value);
        return this.getNextSafeSlug(slug, options.dryrun);
      };
      return Slugger;
    }();
    var defaults$4 = defaults.defaults;
    var unescape$1 = helpers.unescape;

    /**
     * Parsing & Compiling
     */
    var Parser = /*@__PURE__*/function () {
      function Parser(options) {
        this.options = options || defaults$4;
        this.options.renderer = this.options.renderer || new Renderer();
        this.renderer = this.options.renderer;
        this.renderer.options = this.options;
        this.textRenderer = new TextRenderer();
        this.slugger = new Slugger();
      }

      /**
       * Static Parse Method
       */
      Parser.parse = function parse(tokens, options) {
        var parser = new Parser(options);
        return parser.parse(tokens);
      };

      /**
       * Static Parse Inline Method
       */
      Parser.parseInline = function parseInline(tokens, options) {
        var parser = new Parser(options);
        return parser.parseInline(tokens);
      };

      /**
       * Parse Loop
       */
      Parser.prototype.parse = function parse(tokens, top) {
        if (top === void 0) top = true;
        var out = '',
          i,
          j,
          k,
          l2,
          l3,
          row,
          cell,
          header,
          body,
          token,
          ordered,
          start,
          loose,
          itemBody,
          item,
          checked,
          task,
          checkbox;
        var l = tokens.length;
        for (i = 0; i < l; i++) {
          token = tokens[i];
          switch (token.type) {
            case 'space':
              {
                continue;
              }
            case 'hr':
              {
                out += this.renderer.hr();
                continue;
              }
            case 'heading':
              {
                out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape$1(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
                continue;
              }
            case 'code':
              {
                out += this.renderer.code(token.text, token.lang, token.escaped);
                continue;
              }
            case 'table':
              {
                header = '';

                // header
                cell = '';
                l2 = token.header.length;
                for (j = 0; j < l2; j++) {
                  cell += this.renderer.tablecell(this.parseInline(token.tokens.header[j]), {
                    header: true,
                    align: token.align[j]
                  });
                }
                header += this.renderer.tablerow(cell);
                body = '';
                l2 = token.cells.length;
                for (j = 0; j < l2; j++) {
                  row = token.tokens.cells[j];
                  cell = '';
                  l3 = row.length;
                  for (k = 0; k < l3; k++) {
                    cell += this.renderer.tablecell(this.parseInline(row[k]), {
                      header: false,
                      align: token.align[k]
                    });
                  }
                  body += this.renderer.tablerow(cell);
                }
                out += this.renderer.table(header, body);
                continue;
              }
            case 'blockquote':
              {
                body = this.parse(token.tokens);
                out += this.renderer.blockquote(body);
                continue;
              }
            case 'list':
              {
                ordered = token.ordered;
                start = token.start;
                loose = token.loose;
                l2 = token.items.length;
                body = '';
                for (j = 0; j < l2; j++) {
                  item = token.items[j];
                  checked = item.checked;
                  task = item.task;
                  itemBody = '';
                  if (item.task) {
                    checkbox = this.renderer.checkbox(checked);
                    if (loose) {
                      if (item.tokens.length > 0 && item.tokens[0].type === 'text') {
                        item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                        if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                          item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                        }
                      } else {
                        item.tokens.unshift({
                          type: 'text',
                          text: checkbox
                        });
                      }
                    } else {
                      itemBody += checkbox;
                    }
                  }
                  itemBody += this.parse(item.tokens, loose);
                  body += this.renderer.listitem(itemBody, task, checked);
                }
                out += this.renderer.list(body, ordered, start);
                continue;
              }
            case 'html':
              {
                // TODO parse inline content if parameter markdown=1
                out += this.renderer.html(token.text);
                continue;
              }
            case 'paragraph':
              {
                out += this.renderer.paragraph(this.parseInline(token.tokens));
                continue;
              }
            case 'text':
              {
                body = token.tokens ? this.parseInline(token.tokens) : token.text;
                while (i + 1 < l && tokens[i + 1].type === 'text') {
                  token = tokens[++i];
                  body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
                }
                out += top ? this.renderer.paragraph(body) : body;
                continue;
              }
            default:
              {
                var errMsg = 'Token with "' + token.type + '" type was not found.';
                if (this.options.silent) {
                  console.error(errMsg);
                  return;
                } else {
                  throw new Error(errMsg);
                }
              }
          }
        }
        return out;
      };

      /**
       * Parse Inline Tokens
       */
      Parser.prototype.parseInline = function parseInline(tokens, renderer) {
        renderer = renderer || this.renderer;
        var out = '',
          i,
          token;
        var l = tokens.length;
        for (i = 0; i < l; i++) {
          token = tokens[i];
          switch (token.type) {
            case 'escape':
              {
                out += renderer.text(token.text);
                break;
              }
            case 'html':
              {
                out += renderer.html(token.text);
                break;
              }
            case 'link':
              {
                out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
                break;
              }
            case 'image':
              {
                out += renderer.image(token.href, token.title, token.text);
                break;
              }
            case 'strong':
              {
                out += renderer.strong(this.parseInline(token.tokens, renderer));
                break;
              }
            case 'em':
              {
                out += renderer.em(this.parseInline(token.tokens, renderer));
                break;
              }
            case 'codespan':
              {
                out += renderer.codespan(token.text);
                break;
              }
            case 'br':
              {
                out += renderer.br();
                break;
              }
            case 'del':
              {
                out += renderer.del(this.parseInline(token.tokens, renderer));
                break;
              }
            case 'text':
              {
                out += renderer.text(token.text);
                break;
              }
            default:
              {
                var errMsg = 'Token with "' + token.type + '" type was not found.';
                if (this.options.silent) {
                  console.error(errMsg);
                  return;
                } else {
                  throw new Error(errMsg);
                }
              }
          }
        }
        return out;
      };
      return Parser;
    }();
    var merge$3 = helpers.merge;
    var checkSanitizeDeprecation$1 = helpers.checkSanitizeDeprecation;
    var escape$3 = helpers.escape;
    var getDefaults = defaults.getDefaults;
    var changeDefaults = defaults.changeDefaults;
    var defaults$5 = defaults.defaults;

    /**
     * Marked
     */
    function marked(src, opt, callback) {
      // throw error in case of non string input
      if (typeof src === 'undefined' || src === null) {
        throw new Error('marked(): input parameter is undefined or null');
      }
      if (typeof src !== 'string') {
        throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
      }
      if (typeof opt === 'function') {
        callback = opt;
        opt = null;
      }
      opt = merge$3({}, marked.defaults, opt || {});
      checkSanitizeDeprecation$1(opt);
      if (callback) {
        var highlight = opt.highlight;
        var tokens;
        try {
          tokens = Lexer.lex(src, opt);
        } catch (e) {
          return callback(e);
        }
        var done = function done(err) {
          var out;
          if (!err) {
            try {
              out = Parser.parse(tokens, opt);
            } catch (e) {
              err = e;
            }
          }
          opt.highlight = highlight;
          return err ? callback(err) : callback(null, out);
        };
        if (!highlight || highlight.length < 3) {
          return done();
        }
        delete opt.highlight;
        if (!tokens.length) {
          return done();
        }
        var pending = 0;
        marked.walkTokens(tokens, function (token) {
          if (token.type === 'code') {
            pending++;
            setTimeout(function () {
              highlight(token.text, token.lang, function (err, code) {
                if (err) {
                  return done(err);
                }
                if (code != null && code !== token.text) {
                  token.text = code;
                  token.escaped = true;
                }
                pending--;
                if (pending === 0) {
                  done();
                }
              });
            }, 0);
          }
        });
        if (pending === 0) {
          done();
        }
        return;
      }
      try {
        var tokens$1 = Lexer.lex(src, opt);
        if (opt.walkTokens) {
          marked.walkTokens(tokens$1, opt.walkTokens);
        }
        return Parser.parse(tokens$1, opt);
      } catch (e) {
        e.message += '\nPlease report this to https://github.com/markedjs/marked.';
        if (opt.silent) {
          return '<p>An error occurred:</p><pre>' + escape$3(e.message + '', true) + '</pre>';
        }
        throw e;
      }
    }

    /**
     * Options
     */

    marked.options = marked.setOptions = function (opt) {
      merge$3(marked.defaults, opt);
      changeDefaults(marked.defaults);
      return marked;
    };
    marked.getDefaults = getDefaults;
    marked.defaults = defaults$5;

    /**
     * Use Extension
     */

    marked.use = function (extension) {
      var opts = merge$3({}, extension);
      if (extension.renderer) {
        var renderer = marked.defaults.renderer || new Renderer();
        var loop = function loop(prop) {
          var prevRenderer = renderer[prop];
          renderer[prop] = function () {
            var args = [],
              len = arguments.length;
            while (len--) args[len] = arguments[len];
            var ret = extension.renderer[prop].apply(renderer, args);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args);
            }
            return ret;
          };
        };
        for (var prop in extension.renderer) loop(prop);
        opts.renderer = renderer;
      }
      if (extension.tokenizer) {
        var tokenizer = marked.defaults.tokenizer || new Tokenizer();
        var loop$1 = function loop$1(prop) {
          var prevTokenizer = tokenizer[prop$1];
          tokenizer[prop$1] = function () {
            var args = [],
              len = arguments.length;
            while (len--) args[len] = arguments[len];
            var ret = extension.tokenizer[prop$1].apply(tokenizer, args);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args);
            }
            return ret;
          };
        };
        for (var prop$1 in extension.tokenizer) loop$1(prop);
        opts.tokenizer = tokenizer;
      }
      if (extension.walkTokens) {
        var walkTokens = marked.defaults.walkTokens;
        opts.walkTokens = function (token) {
          extension.walkTokens(token);
          if (walkTokens) {
            walkTokens(token);
          }
        };
      }
      marked.setOptions(opts);
    };

    /**
     * Run callback for every token
     */

    marked.walkTokens = function (tokens, callback) {
      for (var i$3 = 0, list$3 = tokens; i$3 < list$3.length; i$3 += 1) {
        var token = list$3[i$3];
        callback(token);
        switch (token.type) {
          case 'table':
            {
              for (var i = 0, list = token.tokens.header; i < list.length; i += 1) {
                var cell = list[i];
                marked.walkTokens(cell, callback);
              }
              for (var i$2 = 0, list$2 = token.tokens.cells; i$2 < list$2.length; i$2 += 1) {
                var row = list$2[i$2];
                for (var i$1 = 0, list$1 = row; i$1 < list$1.length; i$1 += 1) {
                  var cell$1 = list$1[i$1];
                  marked.walkTokens(cell$1, callback);
                }
              }
              break;
            }
          case 'list':
            {
              marked.walkTokens(token.items, callback);
              break;
            }
          default:
            {
              if (token.tokens) {
                marked.walkTokens(token.tokens, callback);
              }
            }
        }
      }
    };

    /**
     * Parse Inline
     */
    marked.parseInline = function (src, opt) {
      // throw error in case of non string input
      if (typeof src === 'undefined' || src === null) {
        throw new Error('marked.parseInline(): input parameter is undefined or null');
      }
      if (typeof src !== 'string') {
        throw new Error('marked.parseInline(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
      }
      opt = merge$3({}, marked.defaults, opt || {});
      checkSanitizeDeprecation$1(opt);
      try {
        var tokens = Lexer.lexInline(src, opt);
        if (opt.walkTokens) {
          marked.walkTokens(tokens, opt.walkTokens);
        }
        return Parser.parseInline(tokens, opt);
      } catch (e) {
        e.message += '\nPlease report this to https://github.com/markedjs/marked.';
        if (opt.silent) {
          return '<p>An error occurred:</p><pre>' + escape$3(e.message + '', true) + '</pre>';
        }
        throw e;
      }
    };

    /**
     * Expose
     */

    marked.Parser = Parser;
    marked.parser = Parser.parse;
    marked.Renderer = Renderer;
    marked.TextRenderer = TextRenderer;
    marked.Lexer = Lexer;
    marked.lexer = Lexer.lex;
    marked.Tokenizer = Tokenizer;
    marked.Slugger = Slugger;
    marked.parse = marked;
    var marked_1 = marked;

    /**
     * Render github corner
     * @param  {Object} data URL for the View Source on Github link
     * @param {String} cornerExternalLinkTarget value of the target attribute of the link
     * @return {String} SVG element as string
     */
    function corner(data, cornerExternalLinkTarget) {
      if (!data) {
        return '';
      }
      if (!/\/\//.test(data)) {
        data = 'https://github.com/' + data;
      }
      data = data.replace(/^git\+/, '');
      // Double check
      cornerExternalLinkTarget = cornerExternalLinkTarget || '_blank';
      return "<a href=\"" + data + "\" target=\"" + cornerExternalLinkTarget + "\" class=\"github-corner\" aria-label=\"View source on Github\">" + '<svg viewBox="0 0 250 250" aria-hidden="true">' + '<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>' + '<path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>' + '<path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>' + '</svg>' + '</a>';
    }

    /**
     * Renders main content
     * @param {Object} config Configuration object
     * @returns {String} HTML of the main content
     */
    function main(config) {
      var name = config.name ? config.name : '';
      var aside = '<button class="sidebar-toggle" aria-label="Menu">' + '<div class="sidebar-toggle-button">' + '<span></span><span></span><span></span>' + '</div>' + '</button>' + '<aside class="sidebar">' + (config.name ? "<h1 class=\"app-name\"><a class=\"app-name-link\" data-nosearch>" + (config.logo ? "<img alt=\"" + name + "\" src=" + config.logo + ">" : name) + "</a></h1>" : '') + '<div class="sidebar-nav"><!--sidebar--></div>' + '</aside>';
      return "<main>" + aside + '<section class="content">' + '<article class="markdown-section" id="main"><!--main--></article>' + '</section>' + '</main>';
    }

    /**
     * Cover Page
     * @returns {String} Cover page
     */
    function cover() {
      var SL = ', 100%, 85%';
      var bgc = 'linear-gradient(to left bottom, ' + "hsl(" + (Math.floor(Math.random() * 255) + SL) + ") 0%," + "hsl(" + (Math.floor(Math.random() * 255) + SL) + ") 100%)";
      return "<section class=\"cover show\" style=\"background: " + bgc + "\">" + '<div class="mask"></div>' + '<div class="cover-main"><!--cover--></div>' + '</section>';
    }

    /**
     * Render tree
     * @param  {Array} toc Array of TOC section links
     * @param  {String} tpl TPL list
     * @return {String} Rendered tree
     */
    function tree(toc, tpl) {
      if (tpl === void 0) tpl = '<ul class="app-sub-sidebar">{inner}</ul>';
      if (!toc || !toc.length) {
        return '';
      }
      var innerHTML = '';
      toc.forEach(function (node) {
        var title = node.title.replace(/(<([^>]+)>)/g, '');
        innerHTML += "<li><a class=\"section-link\" href=\"" + node.slug + "\" title=\"" + title + "\">" + node.title + "</a></li>";
        if (node.children) {
          innerHTML += tree(node.children, tpl);
        }
      });
      return tpl.replace('{inner}', innerHTML);
    }
    function helper(className, content) {
      return "<p class=\"" + className + "\">" + content.slice(5).trim() + "</p>";
    }
    function theme(color) {
      return "<style>:root{--theme-color: " + color + ";}</style>";
    }

    /**
     * Gen toc tree
     * @link https://github.com/killercup/grock/blob/5280ae63e16c5739e9233d9009bc235ed7d79a50/styles/solarized/assets/js/behavior.coffee#L54-L81
     * @param  {Array} toc List of TOC elements
     * @param  {Number} maxLevel Deep level
     * @return {Array} Headlines
     */
    function genTree(toc, maxLevel) {
      var headlines = [];
      var last = {};
      toc.forEach(function (headline) {
        var level = headline.level || 1;
        var len = level - 1;
        if (level > maxLevel) {
          return;
        }
        if (last[len]) {
          last[len].children = (last[len].children || []).concat(headline);
        } else {
          headlines.push(headline);
        }
        last[level] = headline;
      });
      return headlines;
    }
    var cache$1 = {};
    var re = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;
    function lower(string) {
      return string.toLowerCase();
    }
    function slugify(str) {
      if (typeof str !== 'string') {
        return '';
      }
      var slug = str.trim().replace(/[A-Z]+/g, lower).replace(/<[^>]+>/g, '').replace(re, '').replace(/\s/g, '-').replace(/-+/g, '-').replace(/^(\d)/, '_$1');
      var count = cache$1[slug];
      count = hasOwn.call(cache$1, slug) ? count + 1 : 0;
      cache$1[slug] = count;
      if (count) {
        slug = slug + '-' + count;
      }
      return slug;
    }
    slugify.clear = function () {
      cache$1 = {};
    };

    /* eslint-disable */

    // =============================================================================
    // DO NOT EDIT: This file is auto-generated by an /build/emoji.js
    // =============================================================================

    var emojiData = {
      "baseURL": "https://github.githubassets.com/images/icons/emoji/",
      "data": {
        "100": "unicode/1f4af.png?v8",
        "1234": "unicode/1f522.png?v8",
        "+1": "unicode/1f44d.png?v8",
        "-1": "unicode/1f44e.png?v8",
        "1st_place_medal": "unicode/1f947.png?v8",
        "2nd_place_medal": "unicode/1f948.png?v8",
        "3rd_place_medal": "unicode/1f949.png?v8",
        "8ball": "unicode/1f3b1.png?v8",
        "a": "unicode/1f170.png?v8",
        "ab": "unicode/1f18e.png?v8",
        "abacus": "unicode/1f9ee.png?v8",
        "abc": "unicode/1f524.png?v8",
        "abcd": "unicode/1f521.png?v8",
        "accept": "unicode/1f251.png?v8",
        "accessibility": "accessibility.png?v8",
        "accordion": "unicode/1fa97.png?v8",
        "adhesive_bandage": "unicode/1fa79.png?v8",
        "adult": "unicode/1f9d1.png?v8",
        "aerial_tramway": "unicode/1f6a1.png?v8",
        "afghanistan": "unicode/1f1e6-1f1eb.png?v8",
        "airplane": "unicode/2708.png?v8",
        "aland_islands": "unicode/1f1e6-1f1fd.png?v8",
        "alarm_clock": "unicode/23f0.png?v8",
        "albania": "unicode/1f1e6-1f1f1.png?v8",
        "alembic": "unicode/2697.png?v8",
        "algeria": "unicode/1f1e9-1f1ff.png?v8",
        "alien": "unicode/1f47d.png?v8",
        "ambulance": "unicode/1f691.png?v8",
        "american_samoa": "unicode/1f1e6-1f1f8.png?v8",
        "amphora": "unicode/1f3fa.png?v8",
        "anatomical_heart": "unicode/1fac0.png?v8",
        "anchor": "unicode/2693.png?v8",
        "andorra": "unicode/1f1e6-1f1e9.png?v8",
        "angel": "unicode/1f47c.png?v8",
        "anger": "unicode/1f4a2.png?v8",
        "angola": "unicode/1f1e6-1f1f4.png?v8",
        "angry": "unicode/1f620.png?v8",
        "anguilla": "unicode/1f1e6-1f1ee.png?v8",
        "anguished": "unicode/1f627.png?v8",
        "ant": "unicode/1f41c.png?v8",
        "antarctica": "unicode/1f1e6-1f1f6.png?v8",
        "antigua_barbuda": "unicode/1f1e6-1f1ec.png?v8",
        "apple": "unicode/1f34e.png?v8",
        "aquarius": "unicode/2652.png?v8",
        "argentina": "unicode/1f1e6-1f1f7.png?v8",
        "aries": "unicode/2648.png?v8",
        "armenia": "unicode/1f1e6-1f1f2.png?v8",
        "arrow_backward": "unicode/25c0.png?v8",
        "arrow_double_down": "unicode/23ec.png?v8",
        "arrow_double_up": "unicode/23eb.png?v8",
        "arrow_down": "unicode/2b07.png?v8",
        "arrow_down_small": "unicode/1f53d.png?v8",
        "arrow_forward": "unicode/25b6.png?v8",
        "arrow_heading_down": "unicode/2935.png?v8",
        "arrow_heading_up": "unicode/2934.png?v8",
        "arrow_left": "unicode/2b05.png?v8",
        "arrow_lower_left": "unicode/2199.png?v8",
        "arrow_lower_right": "unicode/2198.png?v8",
        "arrow_right": "unicode/27a1.png?v8",
        "arrow_right_hook": "unicode/21aa.png?v8",
        "arrow_up": "unicode/2b06.png?v8",
        "arrow_up_down": "unicode/2195.png?v8",
        "arrow_up_small": "unicode/1f53c.png?v8",
        "arrow_upper_left": "unicode/2196.png?v8",
        "arrow_upper_right": "unicode/2197.png?v8",
        "arrows_clockwise": "unicode/1f503.png?v8",
        "arrows_counterclockwise": "unicode/1f504.png?v8",
        "art": "unicode/1f3a8.png?v8",
        "articulated_lorry": "unicode/1f69b.png?v8",
        "artificial_satellite": "unicode/1f6f0.png?v8",
        "artist": "unicode/1f9d1-1f3a8.png?v8",
        "aruba": "unicode/1f1e6-1f1fc.png?v8",
        "ascension_island": "unicode/1f1e6-1f1e8.png?v8",
        "asterisk": "unicode/002a-20e3.png?v8",
        "astonished": "unicode/1f632.png?v8",
        "astronaut": "unicode/1f9d1-1f680.png?v8",
        "athletic_shoe": "unicode/1f45f.png?v8",
        "atm": "unicode/1f3e7.png?v8",
        "atom": "atom.png?v8",
        "atom_symbol": "unicode/269b.png?v8",
        "australia": "unicode/1f1e6-1f1fa.png?v8",
        "austria": "unicode/1f1e6-1f1f9.png?v8",
        "auto_rickshaw": "unicode/1f6fa.png?v8",
        "avocado": "unicode/1f951.png?v8",
        "axe": "unicode/1fa93.png?v8",
        "azerbaijan": "unicode/1f1e6-1f1ff.png?v8",
        "b": "unicode/1f171.png?v8",
        "baby": "unicode/1f476.png?v8",
        "baby_bottle": "unicode/1f37c.png?v8",
        "baby_chick": "unicode/1f424.png?v8",
        "baby_symbol": "unicode/1f6bc.png?v8",
        "back": "unicode/1f519.png?v8",
        "bacon": "unicode/1f953.png?v8",
        "badger": "unicode/1f9a1.png?v8",
        "badminton": "unicode/1f3f8.png?v8",
        "bagel": "unicode/1f96f.png?v8",
        "baggage_claim": "unicode/1f6c4.png?v8",
        "baguette_bread": "unicode/1f956.png?v8",
        "bahamas": "unicode/1f1e7-1f1f8.png?v8",
        "bahrain": "unicode/1f1e7-1f1ed.png?v8",
        "balance_scale": "unicode/2696.png?v8",
        "bald_man": "unicode/1f468-1f9b2.png?v8",
        "bald_woman": "unicode/1f469-1f9b2.png?v8",
        "ballet_shoes": "unicode/1fa70.png?v8",
        "balloon": "unicode/1f388.png?v8",
        "ballot_box": "unicode/1f5f3.png?v8",
        "ballot_box_with_check": "unicode/2611.png?v8",
        "bamboo": "unicode/1f38d.png?v8",
        "banana": "unicode/1f34c.png?v8",
        "bangbang": "unicode/203c.png?v8",
        "bangladesh": "unicode/1f1e7-1f1e9.png?v8",
        "banjo": "unicode/1fa95.png?v8",
        "bank": "unicode/1f3e6.png?v8",
        "bar_chart": "unicode/1f4ca.png?v8",
        "barbados": "unicode/1f1e7-1f1e7.png?v8",
        "barber": "unicode/1f488.png?v8",
        "baseball": "unicode/26be.png?v8",
        "basecamp": "basecamp.png?v8",
        "basecampy": "basecampy.png?v8",
        "basket": "unicode/1f9fa.png?v8",
        "basketball": "unicode/1f3c0.png?v8",
        "basketball_man": "unicode/26f9-2642.png?v8",
        "basketball_woman": "unicode/26f9-2640.png?v8",
        "bat": "unicode/1f987.png?v8",
        "bath": "unicode/1f6c0.png?v8",
        "bathtub": "unicode/1f6c1.png?v8",
        "battery": "unicode/1f50b.png?v8",
        "beach_umbrella": "unicode/1f3d6.png?v8",
        "bear": "unicode/1f43b.png?v8",
        "bearded_person": "unicode/1f9d4.png?v8",
        "beaver": "unicode/1f9ab.png?v8",
        "bed": "unicode/1f6cf.png?v8",
        "bee": "unicode/1f41d.png?v8",
        "beer": "unicode/1f37a.png?v8",
        "beers": "unicode/1f37b.png?v8",
        "beetle": "unicode/1fab2.png?v8",
        "beginner": "unicode/1f530.png?v8",
        "belarus": "unicode/1f1e7-1f1fe.png?v8",
        "belgium": "unicode/1f1e7-1f1ea.png?v8",
        "belize": "unicode/1f1e7-1f1ff.png?v8",
        "bell": "unicode/1f514.png?v8",
        "bell_pepper": "unicode/1fad1.png?v8",
        "bellhop_bell": "unicode/1f6ce.png?v8",
        "benin": "unicode/1f1e7-1f1ef.png?v8",
        "bento": "unicode/1f371.png?v8",
        "bermuda": "unicode/1f1e7-1f1f2.png?v8",
        "beverage_box": "unicode/1f9c3.png?v8",
        "bhutan": "unicode/1f1e7-1f1f9.png?v8",
        "bicyclist": "unicode/1f6b4.png?v8",
        "bike": "unicode/1f6b2.png?v8",
        "biking_man": "unicode/1f6b4-2642.png?v8",
        "biking_woman": "unicode/1f6b4-2640.png?v8",
        "bikini": "unicode/1f459.png?v8",
        "billed_cap": "unicode/1f9e2.png?v8",
        "biohazard": "unicode/2623.png?v8",
        "bird": "unicode/1f426.png?v8",
        "birthday": "unicode/1f382.png?v8",
        "bison": "unicode/1f9ac.png?v8",
        "black_cat": "unicode/1f408-2b1b.png?v8",
        "black_circle": "unicode/26ab.png?v8",
        "black_flag": "unicode/1f3f4.png?v8",
        "black_heart": "unicode/1f5a4.png?v8",
        "black_joker": "unicode/1f0cf.png?v8",
        "black_large_square": "unicode/2b1b.png?v8",
        "black_medium_small_square": "unicode/25fe.png?v8",
        "black_medium_square": "unicode/25fc.png?v8",
        "black_nib": "unicode/2712.png?v8",
        "black_small_square": "unicode/25aa.png?v8",
        "black_square_button": "unicode/1f532.png?v8",
        "blond_haired_man": "unicode/1f471-2642.png?v8",
        "blond_haired_person": "unicode/1f471.png?v8",
        "blond_haired_woman": "unicode/1f471-2640.png?v8",
        "blonde_woman": "unicode/1f471-2640.png?v8",
        "blossom": "unicode/1f33c.png?v8",
        "blowfish": "unicode/1f421.png?v8",
        "blue_book": "unicode/1f4d8.png?v8",
        "blue_car": "unicode/1f699.png?v8",
        "blue_heart": "unicode/1f499.png?v8",
        "blue_square": "unicode/1f7e6.png?v8",
        "blueberries": "unicode/1fad0.png?v8",
        "blush": "unicode/1f60a.png?v8",
        "boar": "unicode/1f417.png?v8",
        "boat": "unicode/26f5.png?v8",
        "bolivia": "unicode/1f1e7-1f1f4.png?v8",
        "bomb": "unicode/1f4a3.png?v8",
        "bone": "unicode/1f9b4.png?v8",
        "book": "unicode/1f4d6.png?v8",
        "bookmark": "unicode/1f516.png?v8",
        "bookmark_tabs": "unicode/1f4d1.png?v8",
        "books": "unicode/1f4da.png?v8",
        "boom": "unicode/1f4a5.png?v8",
        "boomerang": "unicode/1fa83.png?v8",
        "boot": "unicode/1f462.png?v8",
        "bosnia_herzegovina": "unicode/1f1e7-1f1e6.png?v8",
        "botswana": "unicode/1f1e7-1f1fc.png?v8",
        "bouncing_ball_man": "unicode/26f9-2642.png?v8",
        "bouncing_ball_person": "unicode/26f9.png?v8",
        "bouncing_ball_woman": "unicode/26f9-2640.png?v8",
        "bouquet": "unicode/1f490.png?v8",
        "bouvet_island": "unicode/1f1e7-1f1fb.png?v8",
        "bow": "unicode/1f647.png?v8",
        "bow_and_arrow": "unicode/1f3f9.png?v8",
        "bowing_man": "unicode/1f647-2642.png?v8",
        "bowing_woman": "unicode/1f647-2640.png?v8",
        "bowl_with_spoon": "unicode/1f963.png?v8",
        "bowling": "unicode/1f3b3.png?v8",
        "bowtie": "bowtie.png?v8",
        "boxing_glove": "unicode/1f94a.png?v8",
        "boy": "unicode/1f466.png?v8",
        "brain": "unicode/1f9e0.png?v8",
        "brazil": "unicode/1f1e7-1f1f7.png?v8",
        "bread": "unicode/1f35e.png?v8",
        "breast_feeding": "unicode/1f931.png?v8",
        "bricks": "unicode/1f9f1.png?v8",
        "bride_with_veil": "unicode/1f470-2640.png?v8",
        "bridge_at_night": "unicode/1f309.png?v8",
        "briefcase": "unicode/1f4bc.png?v8",
        "british_indian_ocean_territory": "unicode/1f1ee-1f1f4.png?v8",
        "british_virgin_islands": "unicode/1f1fb-1f1ec.png?v8",
        "broccoli": "unicode/1f966.png?v8",
        "broken_heart": "unicode/1f494.png?v8",
        "broom": "unicode/1f9f9.png?v8",
        "brown_circle": "unicode/1f7e4.png?v8",
        "brown_heart": "unicode/1f90e.png?v8",
        "brown_square": "unicode/1f7eb.png?v8",
        "brunei": "unicode/1f1e7-1f1f3.png?v8",
        "bubble_tea": "unicode/1f9cb.png?v8",
        "bucket": "unicode/1faa3.png?v8",
        "bug": "unicode/1f41b.png?v8",
        "building_construction": "unicode/1f3d7.png?v8",
        "bulb": "unicode/1f4a1.png?v8",
        "bulgaria": "unicode/1f1e7-1f1ec.png?v8",
        "bullettrain_front": "unicode/1f685.png?v8",
        "bullettrain_side": "unicode/1f684.png?v8",
        "burkina_faso": "unicode/1f1e7-1f1eb.png?v8",
        "burrito": "unicode/1f32f.png?v8",
        "burundi": "unicode/1f1e7-1f1ee.png?v8",
        "bus": "unicode/1f68c.png?v8",
        "business_suit_levitating": "unicode/1f574.png?v8",
        "busstop": "unicode/1f68f.png?v8",
        "bust_in_silhouette": "unicode/1f464.png?v8",
        "busts_in_silhouette": "unicode/1f465.png?v8",
        "butter": "unicode/1f9c8.png?v8",
        "butterfly": "unicode/1f98b.png?v8",
        "cactus": "unicode/1f335.png?v8",
        "cake": "unicode/1f370.png?v8",
        "calendar": "unicode/1f4c6.png?v8",
        "call_me_hand": "unicode/1f919.png?v8",
        "calling": "unicode/1f4f2.png?v8",
        "cambodia": "unicode/1f1f0-1f1ed.png?v8",
        "camel": "unicode/1f42b.png?v8",
        "camera": "unicode/1f4f7.png?v8",
        "camera_flash": "unicode/1f4f8.png?v8",
        "cameroon": "unicode/1f1e8-1f1f2.png?v8",
        "camping": "unicode/1f3d5.png?v8",
        "canada": "unicode/1f1e8-1f1e6.png?v8",
        "canary_islands": "unicode/1f1ee-1f1e8.png?v8",
        "cancer": "unicode/264b.png?v8",
        "candle": "unicode/1f56f.png?v8",
        "candy": "unicode/1f36c.png?v8",
        "canned_food": "unicode/1f96b.png?v8",
        "canoe": "unicode/1f6f6.png?v8",
        "cape_verde": "unicode/1f1e8-1f1fb.png?v8",
        "capital_abcd": "unicode/1f520.png?v8",
        "capricorn": "unicode/2651.png?v8",
        "car": "unicode/1f697.png?v8",
        "card_file_box": "unicode/1f5c3.png?v8",
        "card_index": "unicode/1f4c7.png?v8",
        "card_index_dividers": "unicode/1f5c2.png?v8",
        "caribbean_netherlands": "unicode/1f1e7-1f1f6.png?v8",
        "carousel_horse": "unicode/1f3a0.png?v8",
        "carpentry_saw": "unicode/1fa9a.png?v8",
        "carrot": "unicode/1f955.png?v8",
        "cartwheeling": "unicode/1f938.png?v8",
        "cat": "unicode/1f431.png?v8",
        "cat2": "unicode/1f408.png?v8",
        "cayman_islands": "unicode/1f1f0-1f1fe.png?v8",
        "cd": "unicode/1f4bf.png?v8",
        "central_african_republic": "unicode/1f1e8-1f1eb.png?v8",
        "ceuta_melilla": "unicode/1f1ea-1f1e6.png?v8",
        "chad": "unicode/1f1f9-1f1e9.png?v8",
        "chains": "unicode/26d3.png?v8",
        "chair": "unicode/1fa91.png?v8",
        "champagne": "unicode/1f37e.png?v8",
        "chart": "unicode/1f4b9.png?v8",
        "chart_with_downwards_trend": "unicode/1f4c9.png?v8",
        "chart_with_upwards_trend": "unicode/1f4c8.png?v8",
        "checkered_flag": "unicode/1f3c1.png?v8",
        "cheese": "unicode/1f9c0.png?v8",
        "cherries": "unicode/1f352.png?v8",
        "cherry_blossom": "unicode/1f338.png?v8",
        "chess_pawn": "unicode/265f.png?v8",
        "chestnut": "unicode/1f330.png?v8",
        "chicken": "unicode/1f414.png?v8",
        "child": "unicode/1f9d2.png?v8",
        "children_crossing": "unicode/1f6b8.png?v8",
        "chile": "unicode/1f1e8-1f1f1.png?v8",
        "chipmunk": "unicode/1f43f.png?v8",
        "chocolate_bar": "unicode/1f36b.png?v8",
        "chopsticks": "unicode/1f962.png?v8",
        "christmas_island": "unicode/1f1e8-1f1fd.png?v8",
        "christmas_tree": "unicode/1f384.png?v8",
        "church": "unicode/26ea.png?v8",
        "cinema": "unicode/1f3a6.png?v8",
        "circus_tent": "unicode/1f3aa.png?v8",
        "city_sunrise": "unicode/1f307.png?v8",
        "city_sunset": "unicode/1f306.png?v8",
        "cityscape": "unicode/1f3d9.png?v8",
        "cl": "unicode/1f191.png?v8",
        "clamp": "unicode/1f5dc.png?v8",
        "clap": "unicode/1f44f.png?v8",
        "clapper": "unicode/1f3ac.png?v8",
        "classical_building": "unicode/1f3db.png?v8",
        "climbing": "unicode/1f9d7.png?v8",
        "climbing_man": "unicode/1f9d7-2642.png?v8",
        "climbing_woman": "unicode/1f9d7-2640.png?v8",
        "clinking_glasses": "unicode/1f942.png?v8",
        "clipboard": "unicode/1f4cb.png?v8",
        "clipperton_island": "unicode/1f1e8-1f1f5.png?v8",
        "clock1": "unicode/1f550.png?v8",
        "clock10": "unicode/1f559.png?v8",
        "clock1030": "unicode/1f565.png?v8",
        "clock11": "unicode/1f55a.png?v8",
        "clock1130": "unicode/1f566.png?v8",
        "clock12": "unicode/1f55b.png?v8",
        "clock1230": "unicode/1f567.png?v8",
        "clock130": "unicode/1f55c.png?v8",
        "clock2": "unicode/1f551.png?v8",
        "clock230": "unicode/1f55d.png?v8",
        "clock3": "unicode/1f552.png?v8",
        "clock330": "unicode/1f55e.png?v8",
        "clock4": "unicode/1f553.png?v8",
        "clock430": "unicode/1f55f.png?v8",
        "clock5": "unicode/1f554.png?v8",
        "clock530": "unicode/1f560.png?v8",
        "clock6": "unicode/1f555.png?v8",
        "clock630": "unicode/1f561.png?v8",
        "clock7": "unicode/1f556.png?v8",
        "clock730": "unicode/1f562.png?v8",
        "clock8": "unicode/1f557.png?v8",
        "clock830": "unicode/1f563.png?v8",
        "clock9": "unicode/1f558.png?v8",
        "clock930": "unicode/1f564.png?v8",
        "closed_book": "unicode/1f4d5.png?v8",
        "closed_lock_with_key": "unicode/1f510.png?v8",
        "closed_umbrella": "unicode/1f302.png?v8",
        "cloud": "unicode/2601.png?v8",
        "cloud_with_lightning": "unicode/1f329.png?v8",
        "cloud_with_lightning_and_rain": "unicode/26c8.png?v8",
        "cloud_with_rain": "unicode/1f327.png?v8",
        "cloud_with_snow": "unicode/1f328.png?v8",
        "clown_face": "unicode/1f921.png?v8",
        "clubs": "unicode/2663.png?v8",
        "cn": "unicode/1f1e8-1f1f3.png?v8",
        "coat": "unicode/1f9e5.png?v8",
        "cockroach": "unicode/1fab3.png?v8",
        "cocktail": "unicode/1f378.png?v8",
        "coconut": "unicode/1f965.png?v8",
        "cocos_islands": "unicode/1f1e8-1f1e8.png?v8",
        "coffee": "unicode/2615.png?v8",
        "coffin": "unicode/26b0.png?v8",
        "coin": "unicode/1fa99.png?v8",
        "cold_face": "unicode/1f976.png?v8",
        "cold_sweat": "unicode/1f630.png?v8",
        "collision": "unicode/1f4a5.png?v8",
        "colombia": "unicode/1f1e8-1f1f4.png?v8",
        "comet": "unicode/2604.png?v8",
        "comoros": "unicode/1f1f0-1f1f2.png?v8",
        "compass": "unicode/1f9ed.png?v8",
        "computer": "unicode/1f4bb.png?v8",
        "computer_mouse": "unicode/1f5b1.png?v8",
        "confetti_ball": "unicode/1f38a.png?v8",
        "confounded": "unicode/1f616.png?v8",
        "confused": "unicode/1f615.png?v8",
        "congo_brazzaville": "unicode/1f1e8-1f1ec.png?v8",
        "congo_kinshasa": "unicode/1f1e8-1f1e9.png?v8",
        "congratulations": "unicode/3297.png?v8",
        "construction": "unicode/1f6a7.png?v8",
        "construction_worker": "unicode/1f477.png?v8",
        "construction_worker_man": "unicode/1f477-2642.png?v8",
        "construction_worker_woman": "unicode/1f477-2640.png?v8",
        "control_knobs": "unicode/1f39b.png?v8",
        "convenience_store": "unicode/1f3ea.png?v8",
        "cook": "unicode/1f9d1-1f373.png?v8",
        "cook_islands": "unicode/1f1e8-1f1f0.png?v8",
        "cookie": "unicode/1f36a.png?v8",
        "cool": "unicode/1f192.png?v8",
        "cop": "unicode/1f46e.png?v8",
        "copyright": "unicode/00a9.png?v8",
        "corn": "unicode/1f33d.png?v8",
        "costa_rica": "unicode/1f1e8-1f1f7.png?v8",
        "cote_divoire": "unicode/1f1e8-1f1ee.png?v8",
        "couch_and_lamp": "unicode/1f6cb.png?v8",
        "couple": "unicode/1f46b.png?v8",
        "couple_with_heart": "unicode/1f491.png?v8",
        "couple_with_heart_man_man": "unicode/1f468-2764-1f468.png?v8",
        "couple_with_heart_woman_man": "unicode/1f469-2764-1f468.png?v8",
        "couple_with_heart_woman_woman": "unicode/1f469-2764-1f469.png?v8",
        "couplekiss": "unicode/1f48f.png?v8",
        "couplekiss_man_man": "unicode/1f468-2764-1f48b-1f468.png?v8",
        "couplekiss_man_woman": "unicode/1f469-2764-1f48b-1f468.png?v8",
        "couplekiss_woman_woman": "unicode/1f469-2764-1f48b-1f469.png?v8",
        "cow": "unicode/1f42e.png?v8",
        "cow2": "unicode/1f404.png?v8",
        "cowboy_hat_face": "unicode/1f920.png?v8",
        "crab": "unicode/1f980.png?v8",
        "crayon": "unicode/1f58d.png?v8",
        "credit_card": "unicode/1f4b3.png?v8",
        "crescent_moon": "unicode/1f319.png?v8",
        "cricket": "unicode/1f997.png?v8",
        "cricket_game": "unicode/1f3cf.png?v8",
        "croatia": "unicode/1f1ed-1f1f7.png?v8",
        "crocodile": "unicode/1f40a.png?v8",
        "croissant": "unicode/1f950.png?v8",
        "crossed_fingers": "unicode/1f91e.png?v8",
        "crossed_flags": "unicode/1f38c.png?v8",
        "crossed_swords": "unicode/2694.png?v8",
        "crown": "unicode/1f451.png?v8",
        "cry": "unicode/1f622.png?v8",
        "crying_cat_face": "unicode/1f63f.png?v8",
        "crystal_ball": "unicode/1f52e.png?v8",
        "cuba": "unicode/1f1e8-1f1fa.png?v8",
        "cucumber": "unicode/1f952.png?v8",
        "cup_with_straw": "unicode/1f964.png?v8",
        "cupcake": "unicode/1f9c1.png?v8",
        "cupid": "unicode/1f498.png?v8",
        "curacao": "unicode/1f1e8-1f1fc.png?v8",
        "curling_stone": "unicode/1f94c.png?v8",
        "curly_haired_man": "unicode/1f468-1f9b1.png?v8",
        "curly_haired_woman": "unicode/1f469-1f9b1.png?v8",
        "curly_loop": "unicode/27b0.png?v8",
        "currency_exchange": "unicode/1f4b1.png?v8",
        "curry": "unicode/1f35b.png?v8",
        "cursing_face": "unicode/1f92c.png?v8",
        "custard": "unicode/1f36e.png?v8",
        "customs": "unicode/1f6c3.png?v8",
        "cut_of_meat": "unicode/1f969.png?v8",
        "cyclone": "unicode/1f300.png?v8",
        "cyprus": "unicode/1f1e8-1f1fe.png?v8",
        "czech_republic": "unicode/1f1e8-1f1ff.png?v8",
        "dagger": "unicode/1f5e1.png?v8",
        "dancer": "unicode/1f483.png?v8",
        "dancers": "unicode/1f46f.png?v8",
        "dancing_men": "unicode/1f46f-2642.png?v8",
        "dancing_women": "unicode/1f46f-2640.png?v8",
        "dango": "unicode/1f361.png?v8",
        "dark_sunglasses": "unicode/1f576.png?v8",
        "dart": "unicode/1f3af.png?v8",
        "dash": "unicode/1f4a8.png?v8",
        "date": "unicode/1f4c5.png?v8",
        "de": "unicode/1f1e9-1f1ea.png?v8",
        "deaf_man": "unicode/1f9cf-2642.png?v8",
        "deaf_person": "unicode/1f9cf.png?v8",
        "deaf_woman": "unicode/1f9cf-2640.png?v8",
        "deciduous_tree": "unicode/1f333.png?v8",
        "deer": "unicode/1f98c.png?v8",
        "denmark": "unicode/1f1e9-1f1f0.png?v8",
        "department_store": "unicode/1f3ec.png?v8",
        "dependabot": "dependabot.png?v8",
        "derelict_house": "unicode/1f3da.png?v8",
        "desert": "unicode/1f3dc.png?v8",
        "desert_island": "unicode/1f3dd.png?v8",
        "desktop_computer": "unicode/1f5a5.png?v8",
        "detective": "unicode/1f575.png?v8",
        "diamond_shape_with_a_dot_inside": "unicode/1f4a0.png?v8",
        "diamonds": "unicode/2666.png?v8",
        "diego_garcia": "unicode/1f1e9-1f1ec.png?v8",
        "disappointed": "unicode/1f61e.png?v8",
        "disappointed_relieved": "unicode/1f625.png?v8",
        "disguised_face": "unicode/1f978.png?v8",
        "diving_mask": "unicode/1f93f.png?v8",
        "diya_lamp": "unicode/1fa94.png?v8",
        "dizzy": "unicode/1f4ab.png?v8",
        "dizzy_face": "unicode/1f635.png?v8",
        "djibouti": "unicode/1f1e9-1f1ef.png?v8",
        "dna": "unicode/1f9ec.png?v8",
        "do_not_litter": "unicode/1f6af.png?v8",
        "dodo": "unicode/1f9a4.png?v8",
        "dog": "unicode/1f436.png?v8",
        "dog2": "unicode/1f415.png?v8",
        "dollar": "unicode/1f4b5.png?v8",
        "dolls": "unicode/1f38e.png?v8",
        "dolphin": "unicode/1f42c.png?v8",
        "dominica": "unicode/1f1e9-1f1f2.png?v8",
        "dominican_republic": "unicode/1f1e9-1f1f4.png?v8",
        "door": "unicode/1f6aa.png?v8",
        "doughnut": "unicode/1f369.png?v8",
        "dove": "unicode/1f54a.png?v8",
        "dragon": "unicode/1f409.png?v8",
        "dragon_face": "unicode/1f432.png?v8",
        "dress": "unicode/1f457.png?v8",
        "dromedary_camel": "unicode/1f42a.png?v8",
        "drooling_face": "unicode/1f924.png?v8",
        "drop_of_blood": "unicode/1fa78.png?v8",
        "droplet": "unicode/1f4a7.png?v8",
        "drum": "unicode/1f941.png?v8",
        "duck": "unicode/1f986.png?v8",
        "dumpling": "unicode/1f95f.png?v8",
        "dvd": "unicode/1f4c0.png?v8",
        "e-mail": "unicode/1f4e7.png?v8",
        "eagle": "unicode/1f985.png?v8",
        "ear": "unicode/1f442.png?v8",
        "ear_of_rice": "unicode/1f33e.png?v8",
        "ear_with_hearing_aid": "unicode/1f9bb.png?v8",
        "earth_africa": "unicode/1f30d.png?v8",
        "earth_americas": "unicode/1f30e.png?v8",
        "earth_asia": "unicode/1f30f.png?v8",
        "ecuador": "unicode/1f1ea-1f1e8.png?v8",
        "egg": "unicode/1f95a.png?v8",
        "eggplant": "unicode/1f346.png?v8",
        "egypt": "unicode/1f1ea-1f1ec.png?v8",
        "eight": "unicode/0038-20e3.png?v8",
        "eight_pointed_black_star": "unicode/2734.png?v8",
        "eight_spoked_asterisk": "unicode/2733.png?v8",
        "eject_button": "unicode/23cf.png?v8",
        "el_salvador": "unicode/1f1f8-1f1fb.png?v8",
        "electric_plug": "unicode/1f50c.png?v8",
        "electron": "electron.png?v8",
        "elephant": "unicode/1f418.png?v8",
        "elevator": "unicode/1f6d7.png?v8",
        "elf": "unicode/1f9dd.png?v8",
        "elf_man": "unicode/1f9dd-2642.png?v8",
        "elf_woman": "unicode/1f9dd-2640.png?v8",
        "email": "unicode/1f4e7.png?v8",
        "end": "unicode/1f51a.png?v8",
        "england": "unicode/1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png?v8",
        "envelope": "unicode/2709.png?v8",
        "envelope_with_arrow": "unicode/1f4e9.png?v8",
        "equatorial_guinea": "unicode/1f1ec-1f1f6.png?v8",
        "eritrea": "unicode/1f1ea-1f1f7.png?v8",
        "es": "unicode/1f1ea-1f1f8.png?v8",
        "estonia": "unicode/1f1ea-1f1ea.png?v8",
        "ethiopia": "unicode/1f1ea-1f1f9.png?v8",
        "eu": "unicode/1f1ea-1f1fa.png?v8",
        "euro": "unicode/1f4b6.png?v8",
        "european_castle": "unicode/1f3f0.png?v8",
        "european_post_office": "unicode/1f3e4.png?v8",
        "european_union": "unicode/1f1ea-1f1fa.png?v8",
        "evergreen_tree": "unicode/1f332.png?v8",
        "exclamation": "unicode/2757.png?v8",
        "exploding_head": "unicode/1f92f.png?v8",
        "expressionless": "unicode/1f611.png?v8",
        "eye": "unicode/1f441.png?v8",
        "eye_speech_bubble": "unicode/1f441-1f5e8.png?v8",
        "eyeglasses": "unicode/1f453.png?v8",
        "eyes": "unicode/1f440.png?v8",
        "face_exhaling": "unicode/1f62e-1f4a8.png?v8",
        "face_in_clouds": "unicode/1f636-1f32b.png?v8",
        "face_with_head_bandage": "unicode/1f915.png?v8",
        "face_with_spiral_eyes": "unicode/1f635-1f4ab.png?v8",
        "face_with_thermometer": "unicode/1f912.png?v8",
        "facepalm": "unicode/1f926.png?v8",
        "facepunch": "unicode/1f44a.png?v8",
        "factory": "unicode/1f3ed.png?v8",
        "factory_worker": "unicode/1f9d1-1f3ed.png?v8",
        "fairy": "unicode/1f9da.png?v8",
        "fairy_man": "unicode/1f9da-2642.png?v8",
        "fairy_woman": "unicode/1f9da-2640.png?v8",
        "falafel": "unicode/1f9c6.png?v8",
        "falkland_islands": "unicode/1f1eb-1f1f0.png?v8",
        "fallen_leaf": "unicode/1f342.png?v8",
        "family": "unicode/1f46a.png?v8",
        "family_man_boy": "unicode/1f468-1f466.png?v8",
        "family_man_boy_boy": "unicode/1f468-1f466-1f466.png?v8",
        "family_man_girl": "unicode/1f468-1f467.png?v8",
        "family_man_girl_boy": "unicode/1f468-1f467-1f466.png?v8",
        "family_man_girl_girl": "unicode/1f468-1f467-1f467.png?v8",
        "family_man_man_boy": "unicode/1f468-1f468-1f466.png?v8",
        "family_man_man_boy_boy": "unicode/1f468-1f468-1f466-1f466.png?v8",
        "family_man_man_girl": "unicode/1f468-1f468-1f467.png?v8",
        "family_man_man_girl_boy": "unicode/1f468-1f468-1f467-1f466.png?v8",
        "family_man_man_girl_girl": "unicode/1f468-1f468-1f467-1f467.png?v8",
        "family_man_woman_boy": "unicode/1f468-1f469-1f466.png?v8",
        "family_man_woman_boy_boy": "unicode/1f468-1f469-1f466-1f466.png?v8",
        "family_man_woman_girl": "unicode/1f468-1f469-1f467.png?v8",
        "family_man_woman_girl_boy": "unicode/1f468-1f469-1f467-1f466.png?v8",
        "family_man_woman_girl_girl": "unicode/1f468-1f469-1f467-1f467.png?v8",
        "family_woman_boy": "unicode/1f469-1f466.png?v8",
        "family_woman_boy_boy": "unicode/1f469-1f466-1f466.png?v8",
        "family_woman_girl": "unicode/1f469-1f467.png?v8",
        "family_woman_girl_boy": "unicode/1f469-1f467-1f466.png?v8",
        "family_woman_girl_girl": "unicode/1f469-1f467-1f467.png?v8",
        "family_woman_woman_boy": "unicode/1f469-1f469-1f466.png?v8",
        "family_woman_woman_boy_boy": "unicode/1f469-1f469-1f466-1f466.png?v8",
        "family_woman_woman_girl": "unicode/1f469-1f469-1f467.png?v8",
        "family_woman_woman_girl_boy": "unicode/1f469-1f469-1f467-1f466.png?v8",
        "family_woman_woman_girl_girl": "unicode/1f469-1f469-1f467-1f467.png?v8",
        "farmer": "unicode/1f9d1-1f33e.png?v8",
        "faroe_islands": "unicode/1f1eb-1f1f4.png?v8",
        "fast_forward": "unicode/23e9.png?v8",
        "fax": "unicode/1f4e0.png?v8",
        "fearful": "unicode/1f628.png?v8",
        "feather": "unicode/1fab6.png?v8",
        "feelsgood": "feelsgood.png?v8",
        "feet": "unicode/1f43e.png?v8",
        "female_detective": "unicode/1f575-2640.png?v8",
        "female_sign": "unicode/2640.png?v8",
        "ferris_wheel": "unicode/1f3a1.png?v8",
        "ferry": "unicode/26f4.png?v8",
        "field_hockey": "unicode/1f3d1.png?v8",
        "fiji": "unicode/1f1eb-1f1ef.png?v8",
        "file_cabinet": "unicode/1f5c4.png?v8",
        "file_folder": "unicode/1f4c1.png?v8",
        "film_projector": "unicode/1f4fd.png?v8",
        "film_strip": "unicode/1f39e.png?v8",
        "finland": "unicode/1f1eb-1f1ee.png?v8",
        "finnadie": "finnadie.png?v8",
        "fire": "unicode/1f525.png?v8",
        "fire_engine": "unicode/1f692.png?v8",
        "fire_extinguisher": "unicode/1f9ef.png?v8",
        "firecracker": "unicode/1f9e8.png?v8",
        "firefighter": "unicode/1f9d1-1f692.png?v8",
        "fireworks": "unicode/1f386.png?v8",
        "first_quarter_moon": "unicode/1f313.png?v8",
        "first_quarter_moon_with_face": "unicode/1f31b.png?v8",
        "fish": "unicode/1f41f.png?v8",
        "fish_cake": "unicode/1f365.png?v8",
        "fishing_pole_and_fish": "unicode/1f3a3.png?v8",
        "fishsticks": "fishsticks.png?v8",
        "fist": "unicode/270a.png?v8",
        "fist_left": "unicode/1f91b.png?v8",
        "fist_oncoming": "unicode/1f44a.png?v8",
        "fist_raised": "unicode/270a.png?v8",
        "fist_right": "unicode/1f91c.png?v8",
        "five": "unicode/0035-20e3.png?v8",
        "flags": "unicode/1f38f.png?v8",
        "flamingo": "unicode/1f9a9.png?v8",
        "flashlight": "unicode/1f526.png?v8",
        "flat_shoe": "unicode/1f97f.png?v8",
        "flatbread": "unicode/1fad3.png?v8",
        "fleur_de_lis": "unicode/269c.png?v8",
        "flight_arrival": "unicode/1f6ec.png?v8",
        "flight_departure": "unicode/1f6eb.png?v8",
        "flipper": "unicode/1f42c.png?v8",
        "floppy_disk": "unicode/1f4be.png?v8",
        "flower_playing_cards": "unicode/1f3b4.png?v8",
        "flushed": "unicode/1f633.png?v8",
        "fly": "unicode/1fab0.png?v8",
        "flying_disc": "unicode/1f94f.png?v8",
        "flying_saucer": "unicode/1f6f8.png?v8",
        "fog": "unicode/1f32b.png?v8",
        "foggy": "unicode/1f301.png?v8",
        "fondue": "unicode/1fad5.png?v8",
        "foot": "unicode/1f9b6.png?v8",
        "football": "unicode/1f3c8.png?v8",
        "footprints": "unicode/1f463.png?v8",
        "fork_and_knife": "unicode/1f374.png?v8",
        "fortune_cookie": "unicode/1f960.png?v8",
        "fountain": "unicode/26f2.png?v8",
        "fountain_pen": "unicode/1f58b.png?v8",
        "four": "unicode/0034-20e3.png?v8",
        "four_leaf_clover": "unicode/1f340.png?v8",
        "fox_face": "unicode/1f98a.png?v8",
        "fr": "unicode/1f1eb-1f1f7.png?v8",
        "framed_picture": "unicode/1f5bc.png?v8",
        "free": "unicode/1f193.png?v8",
        "french_guiana": "unicode/1f1ec-1f1eb.png?v8",
        "french_polynesia": "unicode/1f1f5-1f1eb.png?v8",
        "french_southern_territories": "unicode/1f1f9-1f1eb.png?v8",
        "fried_egg": "unicode/1f373.png?v8",
        "fried_shrimp": "unicode/1f364.png?v8",
        "fries": "unicode/1f35f.png?v8",
        "frog": "unicode/1f438.png?v8",
        "frowning": "unicode/1f626.png?v8",
        "frowning_face": "unicode/2639.png?v8",
        "frowning_man": "unicode/1f64d-2642.png?v8",
        "frowning_person": "unicode/1f64d.png?v8",
        "frowning_woman": "unicode/1f64d-2640.png?v8",
        "fu": "unicode/1f595.png?v8",
        "fuelpump": "unicode/26fd.png?v8",
        "full_moon": "unicode/1f315.png?v8",
        "full_moon_with_face": "unicode/1f31d.png?v8",
        "funeral_urn": "unicode/26b1.png?v8",
        "gabon": "unicode/1f1ec-1f1e6.png?v8",
        "gambia": "unicode/1f1ec-1f1f2.png?v8",
        "game_die": "unicode/1f3b2.png?v8",
        "garlic": "unicode/1f9c4.png?v8",
        "gb": "unicode/1f1ec-1f1e7.png?v8",
        "gear": "unicode/2699.png?v8",
        "gem": "unicode/1f48e.png?v8",
        "gemini": "unicode/264a.png?v8",
        "genie": "unicode/1f9de.png?v8",
        "genie_man": "unicode/1f9de-2642.png?v8",
        "genie_woman": "unicode/1f9de-2640.png?v8",
        "georgia": "unicode/1f1ec-1f1ea.png?v8",
        "ghana": "unicode/1f1ec-1f1ed.png?v8",
        "ghost": "unicode/1f47b.png?v8",
        "gibraltar": "unicode/1f1ec-1f1ee.png?v8",
        "gift": "unicode/1f381.png?v8",
        "gift_heart": "unicode/1f49d.png?v8",
        "giraffe": "unicode/1f992.png?v8",
        "girl": "unicode/1f467.png?v8",
        "globe_with_meridians": "unicode/1f310.png?v8",
        "gloves": "unicode/1f9e4.png?v8",
        "goal_net": "unicode/1f945.png?v8",
        "goat": "unicode/1f410.png?v8",
        "goberserk": "goberserk.png?v8",
        "godmode": "godmode.png?v8",
        "goggles": "unicode/1f97d.png?v8",
        "golf": "unicode/26f3.png?v8",
        "golfing": "unicode/1f3cc.png?v8",
        "golfing_man": "unicode/1f3cc-2642.png?v8",
        "golfing_woman": "unicode/1f3cc-2640.png?v8",
        "gorilla": "unicode/1f98d.png?v8",
        "grapes": "unicode/1f347.png?v8",
        "greece": "unicode/1f1ec-1f1f7.png?v8",
        "green_apple": "unicode/1f34f.png?v8",
        "green_book": "unicode/1f4d7.png?v8",
        "green_circle": "unicode/1f7e2.png?v8",
        "green_heart": "unicode/1f49a.png?v8",
        "green_salad": "unicode/1f957.png?v8",
        "green_square": "unicode/1f7e9.png?v8",
        "greenland": "unicode/1f1ec-1f1f1.png?v8",
        "grenada": "unicode/1f1ec-1f1e9.png?v8",
        "grey_exclamation": "unicode/2755.png?v8",
        "grey_question": "unicode/2754.png?v8",
        "grimacing": "unicode/1f62c.png?v8",
        "grin": "unicode/1f601.png?v8",
        "grinning": "unicode/1f600.png?v8",
        "guadeloupe": "unicode/1f1ec-1f1f5.png?v8",
        "guam": "unicode/1f1ec-1f1fa.png?v8",
        "guard": "unicode/1f482.png?v8",
        "guardsman": "unicode/1f482-2642.png?v8",
        "guardswoman": "unicode/1f482-2640.png?v8",
        "guatemala": "unicode/1f1ec-1f1f9.png?v8",
        "guernsey": "unicode/1f1ec-1f1ec.png?v8",
        "guide_dog": "unicode/1f9ae.png?v8",
        "guinea": "unicode/1f1ec-1f1f3.png?v8",
        "guinea_bissau": "unicode/1f1ec-1f1fc.png?v8",
        "guitar": "unicode/1f3b8.png?v8",
        "gun": "unicode/1f52b.png?v8",
        "guyana": "unicode/1f1ec-1f1fe.png?v8",
        "haircut": "unicode/1f487.png?v8",
        "haircut_man": "unicode/1f487-2642.png?v8",
        "haircut_woman": "unicode/1f487-2640.png?v8",
        "haiti": "unicode/1f1ed-1f1f9.png?v8",
        "hamburger": "unicode/1f354.png?v8",
        "hammer": "unicode/1f528.png?v8",
        "hammer_and_pick": "unicode/2692.png?v8",
        "hammer_and_wrench": "unicode/1f6e0.png?v8",
        "hamster": "unicode/1f439.png?v8",
        "hand": "unicode/270b.png?v8",
        "hand_over_mouth": "unicode/1f92d.png?v8",
        "handbag": "unicode/1f45c.png?v8",
        "handball_person": "unicode/1f93e.png?v8",
        "handshake": "unicode/1f91d.png?v8",
        "hankey": "unicode/1f4a9.png?v8",
        "hash": "unicode/0023-20e3.png?v8",
        "hatched_chick": "unicode/1f425.png?v8",
        "hatching_chick": "unicode/1f423.png?v8",
        "headphones": "unicode/1f3a7.png?v8",
        "headstone": "unicode/1faa6.png?v8",
        "health_worker": "unicode/1f9d1-2695.png?v8",
        "hear_no_evil": "unicode/1f649.png?v8",
        "heard_mcdonald_islands": "unicode/1f1ed-1f1f2.png?v8",
        "heart": "unicode/2764.png?v8",
        "heart_decoration": "unicode/1f49f.png?v8",
        "heart_eyes": "unicode/1f60d.png?v8",
        "heart_eyes_cat": "unicode/1f63b.png?v8",
        "heart_on_fire": "unicode/2764-1f525.png?v8",
        "heartbeat": "unicode/1f493.png?v8",
        "heartpulse": "unicode/1f497.png?v8",
        "hearts": "unicode/2665.png?v8",
        "heavy_check_mark": "unicode/2714.png?v8",
        "heavy_division_sign": "unicode/2797.png?v8",
        "heavy_dollar_sign": "unicode/1f4b2.png?v8",
        "heavy_exclamation_mark": "unicode/2757.png?v8",
        "heavy_heart_exclamation": "unicode/2763.png?v8",
        "heavy_minus_sign": "unicode/2796.png?v8",
        "heavy_multiplication_x": "unicode/2716.png?v8",
        "heavy_plus_sign": "unicode/2795.png?v8",
        "hedgehog": "unicode/1f994.png?v8",
        "helicopter": "unicode/1f681.png?v8",
        "herb": "unicode/1f33f.png?v8",
        "hibiscus": "unicode/1f33a.png?v8",
        "high_brightness": "unicode/1f506.png?v8",
        "high_heel": "unicode/1f460.png?v8",
        "hiking_boot": "unicode/1f97e.png?v8",
        "hindu_temple": "unicode/1f6d5.png?v8",
        "hippopotamus": "unicode/1f99b.png?v8",
        "hocho": "unicode/1f52a.png?v8",
        "hole": "unicode/1f573.png?v8",
        "honduras": "unicode/1f1ed-1f1f3.png?v8",
        "honey_pot": "unicode/1f36f.png?v8",
        "honeybee": "unicode/1f41d.png?v8",
        "hong_kong": "unicode/1f1ed-1f1f0.png?v8",
        "hook": "unicode/1fa9d.png?v8",
        "horse": "unicode/1f434.png?v8",
        "horse_racing": "unicode/1f3c7.png?v8",
        "hospital": "unicode/1f3e5.png?v8",
        "hot_face": "unicode/1f975.png?v8",
        "hot_pepper": "unicode/1f336.png?v8",
        "hotdog": "unicode/1f32d.png?v8",
        "hotel": "unicode/1f3e8.png?v8",
        "hotsprings": "unicode/2668.png?v8",
        "hourglass": "unicode/231b.png?v8",
        "hourglass_flowing_sand": "unicode/23f3.png?v8",
        "house": "unicode/1f3e0.png?v8",
        "house_with_garden": "unicode/1f3e1.png?v8",
        "houses": "unicode/1f3d8.png?v8",
        "hugs": "unicode/1f917.png?v8",
        "hungary": "unicode/1f1ed-1f1fa.png?v8",
        "hurtrealbad": "hurtrealbad.png?v8",
        "hushed": "unicode/1f62f.png?v8",
        "hut": "unicode/1f6d6.png?v8",
        "ice_cream": "unicode/1f368.png?v8",
        "ice_cube": "unicode/1f9ca.png?v8",
        "ice_hockey": "unicode/1f3d2.png?v8",
        "ice_skate": "unicode/26f8.png?v8",
        "icecream": "unicode/1f366.png?v8",
        "iceland": "unicode/1f1ee-1f1f8.png?v8",
        "id": "unicode/1f194.png?v8",
        "ideograph_advantage": "unicode/1f250.png?v8",
        "imp": "unicode/1f47f.png?v8",
        "inbox_tray": "unicode/1f4e5.png?v8",
        "incoming_envelope": "unicode/1f4e8.png?v8",
        "india": "unicode/1f1ee-1f1f3.png?v8",
        "indonesia": "unicode/1f1ee-1f1e9.png?v8",
        "infinity": "unicode/267e.png?v8",
        "information_desk_person": "unicode/1f481.png?v8",
        "information_source": "unicode/2139.png?v8",
        "innocent": "unicode/1f607.png?v8",
        "interrobang": "unicode/2049.png?v8",
        "iphone": "unicode/1f4f1.png?v8",
        "iran": "unicode/1f1ee-1f1f7.png?v8",
        "iraq": "unicode/1f1ee-1f1f6.png?v8",
        "ireland": "unicode/1f1ee-1f1ea.png?v8",
        "isle_of_man": "unicode/1f1ee-1f1f2.png?v8",
        "israel": "unicode/1f1ee-1f1f1.png?v8",
        "it": "unicode/1f1ee-1f1f9.png?v8",
        "izakaya_lantern": "unicode/1f3ee.png?v8",
        "jack_o_lantern": "unicode/1f383.png?v8",
        "jamaica": "unicode/1f1ef-1f1f2.png?v8",
        "japan": "unicode/1f5fe.png?v8",
        "japanese_castle": "unicode/1f3ef.png?v8",
        "japanese_goblin": "unicode/1f47a.png?v8",
        "japanese_ogre": "unicode/1f479.png?v8",
        "jeans": "unicode/1f456.png?v8",
        "jersey": "unicode/1f1ef-1f1ea.png?v8",
        "jigsaw": "unicode/1f9e9.png?v8",
        "jordan": "unicode/1f1ef-1f1f4.png?v8",
        "joy": "unicode/1f602.png?v8",
        "joy_cat": "unicode/1f639.png?v8",
        "joystick": "unicode/1f579.png?v8",
        "jp": "unicode/1f1ef-1f1f5.png?v8",
        "judge": "unicode/1f9d1-2696.png?v8",
        "juggling_person": "unicode/1f939.png?v8",
        "kaaba": "unicode/1f54b.png?v8",
        "kangaroo": "unicode/1f998.png?v8",
        "kazakhstan": "unicode/1f1f0-1f1ff.png?v8",
        "kenya": "unicode/1f1f0-1f1ea.png?v8",
        "key": "unicode/1f511.png?v8",
        "keyboard": "unicode/2328.png?v8",
        "keycap_ten": "unicode/1f51f.png?v8",
        "kick_scooter": "unicode/1f6f4.png?v8",
        "kimono": "unicode/1f458.png?v8",
        "kiribati": "unicode/1f1f0-1f1ee.png?v8",
        "kiss": "unicode/1f48b.png?v8",
        "kissing": "unicode/1f617.png?v8",
        "kissing_cat": "unicode/1f63d.png?v8",
        "kissing_closed_eyes": "unicode/1f61a.png?v8",
        "kissing_heart": "unicode/1f618.png?v8",
        "kissing_smiling_eyes": "unicode/1f619.png?v8",
        "kite": "unicode/1fa81.png?v8",
        "kiwi_fruit": "unicode/1f95d.png?v8",
        "kneeling_man": "unicode/1f9ce-2642.png?v8",
        "kneeling_person": "unicode/1f9ce.png?v8",
        "kneeling_woman": "unicode/1f9ce-2640.png?v8",
        "knife": "unicode/1f52a.png?v8",
        "knot": "unicode/1faa2.png?v8",
        "koala": "unicode/1f428.png?v8",
        "koko": "unicode/1f201.png?v8",
        "kosovo": "unicode/1f1fd-1f1f0.png?v8",
        "kr": "unicode/1f1f0-1f1f7.png?v8",
        "kuwait": "unicode/1f1f0-1f1fc.png?v8",
        "kyrgyzstan": "unicode/1f1f0-1f1ec.png?v8",
        "lab_coat": "unicode/1f97c.png?v8",
        "label": "unicode/1f3f7.png?v8",
        "lacrosse": "unicode/1f94d.png?v8",
        "ladder": "unicode/1fa9c.png?v8",
        "lady_beetle": "unicode/1f41e.png?v8",
        "lantern": "unicode/1f3ee.png?v8",
        "laos": "unicode/1f1f1-1f1e6.png?v8",
        "large_blue_circle": "unicode/1f535.png?v8",
        "large_blue_diamond": "unicode/1f537.png?v8",
        "large_orange_diamond": "unicode/1f536.png?v8",
        "last_quarter_moon": "unicode/1f317.png?v8",
        "last_quarter_moon_with_face": "unicode/1f31c.png?v8",
        "latin_cross": "unicode/271d.png?v8",
        "latvia": "unicode/1f1f1-1f1fb.png?v8",
        "laughing": "unicode/1f606.png?v8",
        "leafy_green": "unicode/1f96c.png?v8",
        "leaves": "unicode/1f343.png?v8",
        "lebanon": "unicode/1f1f1-1f1e7.png?v8",
        "ledger": "unicode/1f4d2.png?v8",
        "left_luggage": "unicode/1f6c5.png?v8",
        "left_right_arrow": "unicode/2194.png?v8",
        "left_speech_bubble": "unicode/1f5e8.png?v8",
        "leftwards_arrow_with_hook": "unicode/21a9.png?v8",
        "leg": "unicode/1f9b5.png?v8",
        "lemon": "unicode/1f34b.png?v8",
        "leo": "unicode/264c.png?v8",
        "leopard": "unicode/1f406.png?v8",
        "lesotho": "unicode/1f1f1-1f1f8.png?v8",
        "level_slider": "unicode/1f39a.png?v8",
        "liberia": "unicode/1f1f1-1f1f7.png?v8",
        "libra": "unicode/264e.png?v8",
        "libya": "unicode/1f1f1-1f1fe.png?v8",
        "liechtenstein": "unicode/1f1f1-1f1ee.png?v8",
        "light_rail": "unicode/1f688.png?v8",
        "link": "unicode/1f517.png?v8",
        "lion": "unicode/1f981.png?v8",
        "lips": "unicode/1f444.png?v8",
        "lipstick": "unicode/1f484.png?v8",
        "lithuania": "unicode/1f1f1-1f1f9.png?v8",
        "lizard": "unicode/1f98e.png?v8",
        "llama": "unicode/1f999.png?v8",
        "lobster": "unicode/1f99e.png?v8",
        "lock": "unicode/1f512.png?v8",
        "lock_with_ink_pen": "unicode/1f50f.png?v8",
        "lollipop": "unicode/1f36d.png?v8",
        "long_drum": "unicode/1fa98.png?v8",
        "loop": "unicode/27bf.png?v8",
        "lotion_bottle": "unicode/1f9f4.png?v8",
        "lotus_position": "unicode/1f9d8.png?v8",
        "lotus_position_man": "unicode/1f9d8-2642.png?v8",
        "lotus_position_woman": "unicode/1f9d8-2640.png?v8",
        "loud_sound": "unicode/1f50a.png?v8",
        "loudspeaker": "unicode/1f4e2.png?v8",
        "love_hotel": "unicode/1f3e9.png?v8",
        "love_letter": "unicode/1f48c.png?v8",
        "love_you_gesture": "unicode/1f91f.png?v8",
        "low_brightness": "unicode/1f505.png?v8",
        "luggage": "unicode/1f9f3.png?v8",
        "lungs": "unicode/1fac1.png?v8",
        "luxembourg": "unicode/1f1f1-1f1fa.png?v8",
        "lying_face": "unicode/1f925.png?v8",
        "m": "unicode/24c2.png?v8",
        "macau": "unicode/1f1f2-1f1f4.png?v8",
        "macedonia": "unicode/1f1f2-1f1f0.png?v8",
        "madagascar": "unicode/1f1f2-1f1ec.png?v8",
        "mag": "unicode/1f50d.png?v8",
        "mag_right": "unicode/1f50e.png?v8",
        "mage": "unicode/1f9d9.png?v8",
        "mage_man": "unicode/1f9d9-2642.png?v8",
        "mage_woman": "unicode/1f9d9-2640.png?v8",
        "magic_wand": "unicode/1fa84.png?v8",
        "magnet": "unicode/1f9f2.png?v8",
        "mahjong": "unicode/1f004.png?v8",
        "mailbox": "unicode/1f4eb.png?v8",
        "mailbox_closed": "unicode/1f4ea.png?v8",
        "mailbox_with_mail": "unicode/1f4ec.png?v8",
        "mailbox_with_no_mail": "unicode/1f4ed.png?v8",
        "malawi": "unicode/1f1f2-1f1fc.png?v8",
        "malaysia": "unicode/1f1f2-1f1fe.png?v8",
        "maldives": "unicode/1f1f2-1f1fb.png?v8",
        "male_detective": "unicode/1f575-2642.png?v8",
        "male_sign": "unicode/2642.png?v8",
        "mali": "unicode/1f1f2-1f1f1.png?v8",
        "malta": "unicode/1f1f2-1f1f9.png?v8",
        "mammoth": "unicode/1f9a3.png?v8",
        "man": "unicode/1f468.png?v8",
        "man_artist": "unicode/1f468-1f3a8.png?v8",
        "man_astronaut": "unicode/1f468-1f680.png?v8",
        "man_beard": "unicode/1f9d4-2642.png?v8",
        "man_cartwheeling": "unicode/1f938-2642.png?v8",
        "man_cook": "unicode/1f468-1f373.png?v8",
        "man_dancing": "unicode/1f57a.png?v8",
        "man_facepalming": "unicode/1f926-2642.png?v8",
        "man_factory_worker": "unicode/1f468-1f3ed.png?v8",
        "man_farmer": "unicode/1f468-1f33e.png?v8",
        "man_feeding_baby": "unicode/1f468-1f37c.png?v8",
        "man_firefighter": "unicode/1f468-1f692.png?v8",
        "man_health_worker": "unicode/1f468-2695.png?v8",
        "man_in_manual_wheelchair": "unicode/1f468-1f9bd.png?v8",
        "man_in_motorized_wheelchair": "unicode/1f468-1f9bc.png?v8",
        "man_in_tuxedo": "unicode/1f935-2642.png?v8",
        "man_judge": "unicode/1f468-2696.png?v8",
        "man_juggling": "unicode/1f939-2642.png?v8",
        "man_mechanic": "unicode/1f468-1f527.png?v8",
        "man_office_worker": "unicode/1f468-1f4bc.png?v8",
        "man_pilot": "unicode/1f468-2708.png?v8",
        "man_playing_handball": "unicode/1f93e-2642.png?v8",
        "man_playing_water_polo": "unicode/1f93d-2642.png?v8",
        "man_scientist": "unicode/1f468-1f52c.png?v8",
        "man_shrugging": "unicode/1f937-2642.png?v8",
        "man_singer": "unicode/1f468-1f3a4.png?v8",
        "man_student": "unicode/1f468-1f393.png?v8",
        "man_teacher": "unicode/1f468-1f3eb.png?v8",
        "man_technologist": "unicode/1f468-1f4bb.png?v8",
        "man_with_gua_pi_mao": "unicode/1f472.png?v8",
        "man_with_probing_cane": "unicode/1f468-1f9af.png?v8",
        "man_with_turban": "unicode/1f473-2642.png?v8",
        "man_with_veil": "unicode/1f470-2642.png?v8",
        "mandarin": "unicode/1f34a.png?v8",
        "mango": "unicode/1f96d.png?v8",
        "mans_shoe": "unicode/1f45e.png?v8",
        "mantelpiece_clock": "unicode/1f570.png?v8",
        "manual_wheelchair": "unicode/1f9bd.png?v8",
        "maple_leaf": "unicode/1f341.png?v8",
        "marshall_islands": "unicode/1f1f2-1f1ed.png?v8",
        "martial_arts_uniform": "unicode/1f94b.png?v8",
        "martinique": "unicode/1f1f2-1f1f6.png?v8",
        "mask": "unicode/1f637.png?v8",
        "massage": "unicode/1f486.png?v8",
        "massage_man": "unicode/1f486-2642.png?v8",
        "massage_woman": "unicode/1f486-2640.png?v8",
        "mate": "unicode/1f9c9.png?v8",
        "mauritania": "unicode/1f1f2-1f1f7.png?v8",
        "mauritius": "unicode/1f1f2-1f1fa.png?v8",
        "mayotte": "unicode/1f1fe-1f1f9.png?v8",
        "meat_on_bone": "unicode/1f356.png?v8",
        "mechanic": "unicode/1f9d1-1f527.png?v8",
        "mechanical_arm": "unicode/1f9be.png?v8",
        "mechanical_leg": "unicode/1f9bf.png?v8",
        "medal_military": "unicode/1f396.png?v8",
        "medal_sports": "unicode/1f3c5.png?v8",
        "medical_symbol": "unicode/2695.png?v8",
        "mega": "unicode/1f4e3.png?v8",
        "melon": "unicode/1f348.png?v8",
        "memo": "unicode/1f4dd.png?v8",
        "men_wrestling": "unicode/1f93c-2642.png?v8",
        "mending_heart": "unicode/2764-1fa79.png?v8",
        "menorah": "unicode/1f54e.png?v8",
        "mens": "unicode/1f6b9.png?v8",
        "mermaid": "unicode/1f9dc-2640.png?v8",
        "merman": "unicode/1f9dc-2642.png?v8",
        "merperson": "unicode/1f9dc.png?v8",
        "metal": "unicode/1f918.png?v8",
        "metro": "unicode/1f687.png?v8",
        "mexico": "unicode/1f1f2-1f1fd.png?v8",
        "microbe": "unicode/1f9a0.png?v8",
        "micronesia": "unicode/1f1eb-1f1f2.png?v8",
        "microphone": "unicode/1f3a4.png?v8",
        "microscope": "unicode/1f52c.png?v8",
        "middle_finger": "unicode/1f595.png?v8",
        "military_helmet": "unicode/1fa96.png?v8",
        "milk_glass": "unicode/1f95b.png?v8",
        "milky_way": "unicode/1f30c.png?v8",
        "minibus": "unicode/1f690.png?v8",
        "minidisc": "unicode/1f4bd.png?v8",
        "mirror": "unicode/1fa9e.png?v8",
        "mobile_phone_off": "unicode/1f4f4.png?v8",
        "moldova": "unicode/1f1f2-1f1e9.png?v8",
        "monaco": "unicode/1f1f2-1f1e8.png?v8",
        "money_mouth_face": "unicode/1f911.png?v8",
        "money_with_wings": "unicode/1f4b8.png?v8",
        "moneybag": "unicode/1f4b0.png?v8",
        "mongolia": "unicode/1f1f2-1f1f3.png?v8",
        "monkey": "unicode/1f412.png?v8",
        "monkey_face": "unicode/1f435.png?v8",
        "monocle_face": "unicode/1f9d0.png?v8",
        "monorail": "unicode/1f69d.png?v8",
        "montenegro": "unicode/1f1f2-1f1ea.png?v8",
        "montserrat": "unicode/1f1f2-1f1f8.png?v8",
        "moon": "unicode/1f314.png?v8",
        "moon_cake": "unicode/1f96e.png?v8",
        "morocco": "unicode/1f1f2-1f1e6.png?v8",
        "mortar_board": "unicode/1f393.png?v8",
        "mosque": "unicode/1f54c.png?v8",
        "mosquito": "unicode/1f99f.png?v8",
        "motor_boat": "unicode/1f6e5.png?v8",
        "motor_scooter": "unicode/1f6f5.png?v8",
        "motorcycle": "unicode/1f3cd.png?v8",
        "motorized_wheelchair": "unicode/1f9bc.png?v8",
        "motorway": "unicode/1f6e3.png?v8",
        "mount_fuji": "unicode/1f5fb.png?v8",
        "mountain": "unicode/26f0.png?v8",
        "mountain_bicyclist": "unicode/1f6b5.png?v8",
        "mountain_biking_man": "unicode/1f6b5-2642.png?v8",
        "mountain_biking_woman": "unicode/1f6b5-2640.png?v8",
        "mountain_cableway": "unicode/1f6a0.png?v8",
        "mountain_railway": "unicode/1f69e.png?v8",
        "mountain_snow": "unicode/1f3d4.png?v8",
        "mouse": "unicode/1f42d.png?v8",
        "mouse2": "unicode/1f401.png?v8",
        "mouse_trap": "unicode/1faa4.png?v8",
        "movie_camera": "unicode/1f3a5.png?v8",
        "moyai": "unicode/1f5ff.png?v8",
        "mozambique": "unicode/1f1f2-1f1ff.png?v8",
        "mrs_claus": "unicode/1f936.png?v8",
        "muscle": "unicode/1f4aa.png?v8",
        "mushroom": "unicode/1f344.png?v8",
        "musical_keyboard": "unicode/1f3b9.png?v8",
        "musical_note": "unicode/1f3b5.png?v8",
        "musical_score": "unicode/1f3bc.png?v8",
        "mute": "unicode/1f507.png?v8",
        "mx_claus": "unicode/1f9d1-1f384.png?v8",
        "myanmar": "unicode/1f1f2-1f1f2.png?v8",
        "nail_care": "unicode/1f485.png?v8",
        "name_badge": "unicode/1f4db.png?v8",
        "namibia": "unicode/1f1f3-1f1e6.png?v8",
        "national_park": "unicode/1f3de.png?v8",
        "nauru": "unicode/1f1f3-1f1f7.png?v8",
        "nauseated_face": "unicode/1f922.png?v8",
        "nazar_amulet": "unicode/1f9ff.png?v8",
        "neckbeard": "neckbeard.png?v8",
        "necktie": "unicode/1f454.png?v8",
        "negative_squared_cross_mark": "unicode/274e.png?v8",
        "nepal": "unicode/1f1f3-1f1f5.png?v8",
        "nerd_face": "unicode/1f913.png?v8",
        "nesting_dolls": "unicode/1fa86.png?v8",
        "netherlands": "unicode/1f1f3-1f1f1.png?v8",
        "neutral_face": "unicode/1f610.png?v8",
        "new": "unicode/1f195.png?v8",
        "new_caledonia": "unicode/1f1f3-1f1e8.png?v8",
        "new_moon": "unicode/1f311.png?v8",
        "new_moon_with_face": "unicode/1f31a.png?v8",
        "new_zealand": "unicode/1f1f3-1f1ff.png?v8",
        "newspaper": "unicode/1f4f0.png?v8",
        "newspaper_roll": "unicode/1f5de.png?v8",
        "next_track_button": "unicode/23ed.png?v8",
        "ng": "unicode/1f196.png?v8",
        "ng_man": "unicode/1f645-2642.png?v8",
        "ng_woman": "unicode/1f645-2640.png?v8",
        "nicaragua": "unicode/1f1f3-1f1ee.png?v8",
        "niger": "unicode/1f1f3-1f1ea.png?v8",
        "nigeria": "unicode/1f1f3-1f1ec.png?v8",
        "night_with_stars": "unicode/1f303.png?v8",
        "nine": "unicode/0039-20e3.png?v8",
        "ninja": "unicode/1f977.png?v8",
        "niue": "unicode/1f1f3-1f1fa.png?v8",
        "no_bell": "unicode/1f515.png?v8",
        "no_bicycles": "unicode/1f6b3.png?v8",
        "no_entry": "unicode/26d4.png?v8",
        "no_entry_sign": "unicode/1f6ab.png?v8",
        "no_good": "unicode/1f645.png?v8",
        "no_good_man": "unicode/1f645-2642.png?v8",
        "no_good_woman": "unicode/1f645-2640.png?v8",
        "no_mobile_phones": "unicode/1f4f5.png?v8",
        "no_mouth": "unicode/1f636.png?v8",
        "no_pedestrians": "unicode/1f6b7.png?v8",
        "no_smoking": "unicode/1f6ad.png?v8",
        "non-potable_water": "unicode/1f6b1.png?v8",
        "norfolk_island": "unicode/1f1f3-1f1eb.png?v8",
        "north_korea": "unicode/1f1f0-1f1f5.png?v8",
        "northern_mariana_islands": "unicode/1f1f2-1f1f5.png?v8",
        "norway": "unicode/1f1f3-1f1f4.png?v8",
        "nose": "unicode/1f443.png?v8",
        "notebook": "unicode/1f4d3.png?v8",
        "notebook_with_decorative_cover": "unicode/1f4d4.png?v8",
        "notes": "unicode/1f3b6.png?v8",
        "nut_and_bolt": "unicode/1f529.png?v8",
        "o": "unicode/2b55.png?v8",
        "o2": "unicode/1f17e.png?v8",
        "ocean": "unicode/1f30a.png?v8",
        "octocat": "octocat.png?v8",
        "octopus": "unicode/1f419.png?v8",
        "oden": "unicode/1f362.png?v8",
        "office": "unicode/1f3e2.png?v8",
        "office_worker": "unicode/1f9d1-1f4bc.png?v8",
        "oil_drum": "unicode/1f6e2.png?v8",
        "ok": "unicode/1f197.png?v8",
        "ok_hand": "unicode/1f44c.png?v8",
        "ok_man": "unicode/1f646-2642.png?v8",
        "ok_person": "unicode/1f646.png?v8",
        "ok_woman": "unicode/1f646-2640.png?v8",
        "old_key": "unicode/1f5dd.png?v8",
        "older_adult": "unicode/1f9d3.png?v8",
        "older_man": "unicode/1f474.png?v8",
        "older_woman": "unicode/1f475.png?v8",
        "olive": "unicode/1fad2.png?v8",
        "om": "unicode/1f549.png?v8",
        "oman": "unicode/1f1f4-1f1f2.png?v8",
        "on": "unicode/1f51b.png?v8",
        "oncoming_automobile": "unicode/1f698.png?v8",
        "oncoming_bus": "unicode/1f68d.png?v8",
        "oncoming_police_car": "unicode/1f694.png?v8",
        "oncoming_taxi": "unicode/1f696.png?v8",
        "one": "unicode/0031-20e3.png?v8",
        "one_piece_swimsuit": "unicode/1fa71.png?v8",
        "onion": "unicode/1f9c5.png?v8",
        "open_book": "unicode/1f4d6.png?v8",
        "open_file_folder": "unicode/1f4c2.png?v8",
        "open_hands": "unicode/1f450.png?v8",
        "open_mouth": "unicode/1f62e.png?v8",
        "open_umbrella": "unicode/2602.png?v8",
        "ophiuchus": "unicode/26ce.png?v8",
        "orange": "unicode/1f34a.png?v8",
        "orange_book": "unicode/1f4d9.png?v8",
        "orange_circle": "unicode/1f7e0.png?v8",
        "orange_heart": "unicode/1f9e1.png?v8",
        "orange_square": "unicode/1f7e7.png?v8",
        "orangutan": "unicode/1f9a7.png?v8",
        "orthodox_cross": "unicode/2626.png?v8",
        "otter": "unicode/1f9a6.png?v8",
        "outbox_tray": "unicode/1f4e4.png?v8",
        "owl": "unicode/1f989.png?v8",
        "ox": "unicode/1f402.png?v8",
        "oyster": "unicode/1f9aa.png?v8",
        "package": "unicode/1f4e6.png?v8",
        "page_facing_up": "unicode/1f4c4.png?v8",
        "page_with_curl": "unicode/1f4c3.png?v8",
        "pager": "unicode/1f4df.png?v8",
        "paintbrush": "unicode/1f58c.png?v8",
        "pakistan": "unicode/1f1f5-1f1f0.png?v8",
        "palau": "unicode/1f1f5-1f1fc.png?v8",
        "palestinian_territories": "unicode/1f1f5-1f1f8.png?v8",
        "palm_tree": "unicode/1f334.png?v8",
        "palms_up_together": "unicode/1f932.png?v8",
        "panama": "unicode/1f1f5-1f1e6.png?v8",
        "pancakes": "unicode/1f95e.png?v8",
        "panda_face": "unicode/1f43c.png?v8",
        "paperclip": "unicode/1f4ce.png?v8",
        "paperclips": "unicode/1f587.png?v8",
        "papua_new_guinea": "unicode/1f1f5-1f1ec.png?v8",
        "parachute": "unicode/1fa82.png?v8",
        "paraguay": "unicode/1f1f5-1f1fe.png?v8",
        "parasol_on_ground": "unicode/26f1.png?v8",
        "parking": "unicode/1f17f.png?v8",
        "parrot": "unicode/1f99c.png?v8",
        "part_alternation_mark": "unicode/303d.png?v8",
        "partly_sunny": "unicode/26c5.png?v8",
        "partying_face": "unicode/1f973.png?v8",
        "passenger_ship": "unicode/1f6f3.png?v8",
        "passport_control": "unicode/1f6c2.png?v8",
        "pause_button": "unicode/23f8.png?v8",
        "paw_prints": "unicode/1f43e.png?v8",
        "peace_symbol": "unicode/262e.png?v8",
        "peach": "unicode/1f351.png?v8",
        "peacock": "unicode/1f99a.png?v8",
        "peanuts": "unicode/1f95c.png?v8",
        "pear": "unicode/1f350.png?v8",
        "pen": "unicode/1f58a.png?v8",
        "pencil": "unicode/1f4dd.png?v8",
        "pencil2": "unicode/270f.png?v8",
        "penguin": "unicode/1f427.png?v8",
        "pensive": "unicode/1f614.png?v8",
        "people_holding_hands": "unicode/1f9d1-1f91d-1f9d1.png?v8",
        "people_hugging": "unicode/1fac2.png?v8",
        "performing_arts": "unicode/1f3ad.png?v8",
        "persevere": "unicode/1f623.png?v8",
        "person_bald": "unicode/1f9d1-1f9b2.png?v8",
        "person_curly_hair": "unicode/1f9d1-1f9b1.png?v8",
        "person_feeding_baby": "unicode/1f9d1-1f37c.png?v8",
        "person_fencing": "unicode/1f93a.png?v8",
        "person_in_manual_wheelchair": "unicode/1f9d1-1f9bd.png?v8",
        "person_in_motorized_wheelchair": "unicode/1f9d1-1f9bc.png?v8",
        "person_in_tuxedo": "unicode/1f935.png?v8",
        "person_red_hair": "unicode/1f9d1-1f9b0.png?v8",
        "person_white_hair": "unicode/1f9d1-1f9b3.png?v8",
        "person_with_probing_cane": "unicode/1f9d1-1f9af.png?v8",
        "person_with_turban": "unicode/1f473.png?v8",
        "person_with_veil": "unicode/1f470.png?v8",
        "peru": "unicode/1f1f5-1f1ea.png?v8",
        "petri_dish": "unicode/1f9eb.png?v8",
        "philippines": "unicode/1f1f5-1f1ed.png?v8",
        "phone": "unicode/260e.png?v8",
        "pick": "unicode/26cf.png?v8",
        "pickup_truck": "unicode/1f6fb.png?v8",
        "pie": "unicode/1f967.png?v8",
        "pig": "unicode/1f437.png?v8",
        "pig2": "unicode/1f416.png?v8",
        "pig_nose": "unicode/1f43d.png?v8",
        "pill": "unicode/1f48a.png?v8",
        "pilot": "unicode/1f9d1-2708.png?v8",
        "pinata": "unicode/1fa85.png?v8",
        "pinched_fingers": "unicode/1f90c.png?v8",
        "pinching_hand": "unicode/1f90f.png?v8",
        "pineapple": "unicode/1f34d.png?v8",
        "ping_pong": "unicode/1f3d3.png?v8",
        "pirate_flag": "unicode/1f3f4-2620.png?v8",
        "pisces": "unicode/2653.png?v8",
        "pitcairn_islands": "unicode/1f1f5-1f1f3.png?v8",
        "pizza": "unicode/1f355.png?v8",
        "placard": "unicode/1faa7.png?v8",
        "place_of_worship": "unicode/1f6d0.png?v8",
        "plate_with_cutlery": "unicode/1f37d.png?v8",
        "play_or_pause_button": "unicode/23ef.png?v8",
        "pleading_face": "unicode/1f97a.png?v8",
        "plunger": "unicode/1faa0.png?v8",
        "point_down": "unicode/1f447.png?v8",
        "point_left": "unicode/1f448.png?v8",
        "point_right": "unicode/1f449.png?v8",
        "point_up": "unicode/261d.png?v8",
        "point_up_2": "unicode/1f446.png?v8",
        "poland": "unicode/1f1f5-1f1f1.png?v8",
        "polar_bear": "unicode/1f43b-2744.png?v8",
        "police_car": "unicode/1f693.png?v8",
        "police_officer": "unicode/1f46e.png?v8",
        "policeman": "unicode/1f46e-2642.png?v8",
        "policewoman": "unicode/1f46e-2640.png?v8",
        "poodle": "unicode/1f429.png?v8",
        "poop": "unicode/1f4a9.png?v8",
        "popcorn": "unicode/1f37f.png?v8",
        "portugal": "unicode/1f1f5-1f1f9.png?v8",
        "post_office": "unicode/1f3e3.png?v8",
        "postal_horn": "unicode/1f4ef.png?v8",
        "postbox": "unicode/1f4ee.png?v8",
        "potable_water": "unicode/1f6b0.png?v8",
        "potato": "unicode/1f954.png?v8",
        "potted_plant": "unicode/1fab4.png?v8",
        "pouch": "unicode/1f45d.png?v8",
        "poultry_leg": "unicode/1f357.png?v8",
        "pound": "unicode/1f4b7.png?v8",
        "pout": "unicode/1f621.png?v8",
        "pouting_cat": "unicode/1f63e.png?v8",
        "pouting_face": "unicode/1f64e.png?v8",
        "pouting_man": "unicode/1f64e-2642.png?v8",
        "pouting_woman": "unicode/1f64e-2640.png?v8",
        "pray": "unicode/1f64f.png?v8",
        "prayer_beads": "unicode/1f4ff.png?v8",
        "pregnant_woman": "unicode/1f930.png?v8",
        "pretzel": "unicode/1f968.png?v8",
        "previous_track_button": "unicode/23ee.png?v8",
        "prince": "unicode/1f934.png?v8",
        "princess": "unicode/1f478.png?v8",
        "printer": "unicode/1f5a8.png?v8",
        "probing_cane": "unicode/1f9af.png?v8",
        "puerto_rico": "unicode/1f1f5-1f1f7.png?v8",
        "punch": "unicode/1f44a.png?v8",
        "purple_circle": "unicode/1f7e3.png?v8",
        "purple_heart": "unicode/1f49c.png?v8",
        "purple_square": "unicode/1f7ea.png?v8",
        "purse": "unicode/1f45b.png?v8",
        "pushpin": "unicode/1f4cc.png?v8",
        "put_litter_in_its_place": "unicode/1f6ae.png?v8",
        "qatar": "unicode/1f1f6-1f1e6.png?v8",
        "question": "unicode/2753.png?v8",
        "rabbit": "unicode/1f430.png?v8",
        "rabbit2": "unicode/1f407.png?v8",
        "raccoon": "unicode/1f99d.png?v8",
        "racehorse": "unicode/1f40e.png?v8",
        "racing_car": "unicode/1f3ce.png?v8",
        "radio": "unicode/1f4fb.png?v8",
        "radio_button": "unicode/1f518.png?v8",
        "radioactive": "unicode/2622.png?v8",
        "rage": "unicode/1f621.png?v8",
        "rage1": "rage1.png?v8",
        "rage2": "rage2.png?v8",
        "rage3": "rage3.png?v8",
        "rage4": "rage4.png?v8",
        "railway_car": "unicode/1f683.png?v8",
        "railway_track": "unicode/1f6e4.png?v8",
        "rainbow": "unicode/1f308.png?v8",
        "rainbow_flag": "unicode/1f3f3-1f308.png?v8",
        "raised_back_of_hand": "unicode/1f91a.png?v8",
        "raised_eyebrow": "unicode/1f928.png?v8",
        "raised_hand": "unicode/270b.png?v8",
        "raised_hand_with_fingers_splayed": "unicode/1f590.png?v8",
        "raised_hands": "unicode/1f64c.png?v8",
        "raising_hand": "unicode/1f64b.png?v8",
        "raising_hand_man": "unicode/1f64b-2642.png?v8",
        "raising_hand_woman": "unicode/1f64b-2640.png?v8",
        "ram": "unicode/1f40f.png?v8",
        "ramen": "unicode/1f35c.png?v8",
        "rat": "unicode/1f400.png?v8",
        "razor": "unicode/1fa92.png?v8",
        "receipt": "unicode/1f9fe.png?v8",
        "record_button": "unicode/23fa.png?v8",
        "recycle": "unicode/267b.png?v8",
        "red_car": "unicode/1f697.png?v8",
        "red_circle": "unicode/1f534.png?v8",
        "red_envelope": "unicode/1f9e7.png?v8",
        "red_haired_man": "unicode/1f468-1f9b0.png?v8",
        "red_haired_woman": "unicode/1f469-1f9b0.png?v8",
        "red_square": "unicode/1f7e5.png?v8",
        "registered": "unicode/00ae.png?v8",
        "relaxed": "unicode/263a.png?v8",
        "relieved": "unicode/1f60c.png?v8",
        "reminder_ribbon": "unicode/1f397.png?v8",
        "repeat": "unicode/1f501.png?v8",
        "repeat_one": "unicode/1f502.png?v8",
        "rescue_worker_helmet": "unicode/26d1.png?v8",
        "restroom": "unicode/1f6bb.png?v8",
        "reunion": "unicode/1f1f7-1f1ea.png?v8",
        "revolving_hearts": "unicode/1f49e.png?v8",
        "rewind": "unicode/23ea.png?v8",
        "rhinoceros": "unicode/1f98f.png?v8",
        "ribbon": "unicode/1f380.png?v8",
        "rice": "unicode/1f35a.png?v8",
        "rice_ball": "unicode/1f359.png?v8",
        "rice_cracker": "unicode/1f358.png?v8",
        "rice_scene": "unicode/1f391.png?v8",
        "right_anger_bubble": "unicode/1f5ef.png?v8",
        "ring": "unicode/1f48d.png?v8",
        "ringed_planet": "unicode/1fa90.png?v8",
        "robot": "unicode/1f916.png?v8",
        "rock": "unicode/1faa8.png?v8",
        "rocket": "unicode/1f680.png?v8",
        "rofl": "unicode/1f923.png?v8",
        "roll_eyes": "unicode/1f644.png?v8",
        "roll_of_paper": "unicode/1f9fb.png?v8",
        "roller_coaster": "unicode/1f3a2.png?v8",
        "roller_skate": "unicode/1f6fc.png?v8",
        "romania": "unicode/1f1f7-1f1f4.png?v8",
        "rooster": "unicode/1f413.png?v8",
        "rose": "unicode/1f339.png?v8",
        "rosette": "unicode/1f3f5.png?v8",
        "rotating_light": "unicode/1f6a8.png?v8",
        "round_pushpin": "unicode/1f4cd.png?v8",
        "rowboat": "unicode/1f6a3.png?v8",
        "rowing_man": "unicode/1f6a3-2642.png?v8",
        "rowing_woman": "unicode/1f6a3-2640.png?v8",
        "ru": "unicode/1f1f7-1f1fa.png?v8",
        "rugby_football": "unicode/1f3c9.png?v8",
        "runner": "unicode/1f3c3.png?v8",
        "running": "unicode/1f3c3.png?v8",
        "running_man": "unicode/1f3c3-2642.png?v8",
        "running_shirt_with_sash": "unicode/1f3bd.png?v8",
        "running_woman": "unicode/1f3c3-2640.png?v8",
        "rwanda": "unicode/1f1f7-1f1fc.png?v8",
        "sa": "unicode/1f202.png?v8",
        "safety_pin": "unicode/1f9f7.png?v8",
        "safety_vest": "unicode/1f9ba.png?v8",
        "sagittarius": "unicode/2650.png?v8",
        "sailboat": "unicode/26f5.png?v8",
        "sake": "unicode/1f376.png?v8",
        "salt": "unicode/1f9c2.png?v8",
        "samoa": "unicode/1f1fc-1f1f8.png?v8",
        "san_marino": "unicode/1f1f8-1f1f2.png?v8",
        "sandal": "unicode/1f461.png?v8",
        "sandwich": "unicode/1f96a.png?v8",
        "santa": "unicode/1f385.png?v8",
        "sao_tome_principe": "unicode/1f1f8-1f1f9.png?v8",
        "sari": "unicode/1f97b.png?v8",
        "sassy_man": "unicode/1f481-2642.png?v8",
        "sassy_woman": "unicode/1f481-2640.png?v8",
        "satellite": "unicode/1f4e1.png?v8",
        "satisfied": "unicode/1f606.png?v8",
        "saudi_arabia": "unicode/1f1f8-1f1e6.png?v8",
        "sauna_man": "unicode/1f9d6-2642.png?v8",
        "sauna_person": "unicode/1f9d6.png?v8",
        "sauna_woman": "unicode/1f9d6-2640.png?v8",
        "sauropod": "unicode/1f995.png?v8",
        "saxophone": "unicode/1f3b7.png?v8",
        "scarf": "unicode/1f9e3.png?v8",
        "school": "unicode/1f3eb.png?v8",
        "school_satchel": "unicode/1f392.png?v8",
        "scientist": "unicode/1f9d1-1f52c.png?v8",
        "scissors": "unicode/2702.png?v8",
        "scorpion": "unicode/1f982.png?v8",
        "scorpius": "unicode/264f.png?v8",
        "scotland": "unicode/1f3f4-e0067-e0062-e0073-e0063-e0074-e007f.png?v8",
        "scream": "unicode/1f631.png?v8",
        "scream_cat": "unicode/1f640.png?v8",
        "screwdriver": "unicode/1fa9b.png?v8",
        "scroll": "unicode/1f4dc.png?v8",
        "seal": "unicode/1f9ad.png?v8",
        "seat": "unicode/1f4ba.png?v8",
        "secret": "unicode/3299.png?v8",
        "see_no_evil": "unicode/1f648.png?v8",
        "seedling": "unicode/1f331.png?v8",
        "selfie": "unicode/1f933.png?v8",
        "senegal": "unicode/1f1f8-1f1f3.png?v8",
        "serbia": "unicode/1f1f7-1f1f8.png?v8",
        "service_dog": "unicode/1f415-1f9ba.png?v8",
        "seven": "unicode/0037-20e3.png?v8",
        "sewing_needle": "unicode/1faa1.png?v8",
        "seychelles": "unicode/1f1f8-1f1e8.png?v8",
        "shallow_pan_of_food": "unicode/1f958.png?v8",
        "shamrock": "unicode/2618.png?v8",
        "shark": "unicode/1f988.png?v8",
        "shaved_ice": "unicode/1f367.png?v8",
        "sheep": "unicode/1f411.png?v8",
        "shell": "unicode/1f41a.png?v8",
        "shield": "unicode/1f6e1.png?v8",
        "shinto_shrine": "unicode/26e9.png?v8",
        "ship": "unicode/1f6a2.png?v8",
        "shipit": "shipit.png?v8",
        "shirt": "unicode/1f455.png?v8",
        "shit": "unicode/1f4a9.png?v8",
        "shoe": "unicode/1f45e.png?v8",
        "shopping": "unicode/1f6cd.png?v8",
        "shopping_cart": "unicode/1f6d2.png?v8",
        "shorts": "unicode/1fa73.png?v8",
        "shower": "unicode/1f6bf.png?v8",
        "shrimp": "unicode/1f990.png?v8",
        "shrug": "unicode/1f937.png?v8",
        "shushing_face": "unicode/1f92b.png?v8",
        "sierra_leone": "unicode/1f1f8-1f1f1.png?v8",
        "signal_strength": "unicode/1f4f6.png?v8",
        "singapore": "unicode/1f1f8-1f1ec.png?v8",
        "singer": "unicode/1f9d1-1f3a4.png?v8",
        "sint_maarten": "unicode/1f1f8-1f1fd.png?v8",
        "six": "unicode/0036-20e3.png?v8",
        "six_pointed_star": "unicode/1f52f.png?v8",
        "skateboard": "unicode/1f6f9.png?v8",
        "ski": "unicode/1f3bf.png?v8",
        "skier": "unicode/26f7.png?v8",
        "skull": "unicode/1f480.png?v8",
        "skull_and_crossbones": "unicode/2620.png?v8",
        "skunk": "unicode/1f9a8.png?v8",
        "sled": "unicode/1f6f7.png?v8",
        "sleeping": "unicode/1f634.png?v8",
        "sleeping_bed": "unicode/1f6cc.png?v8",
        "sleepy": "unicode/1f62a.png?v8",
        "slightly_frowning_face": "unicode/1f641.png?v8",
        "slightly_smiling_face": "unicode/1f642.png?v8",
        "slot_machine": "unicode/1f3b0.png?v8",
        "sloth": "unicode/1f9a5.png?v8",
        "slovakia": "unicode/1f1f8-1f1f0.png?v8",
        "slovenia": "unicode/1f1f8-1f1ee.png?v8",
        "small_airplane": "unicode/1f6e9.png?v8",
        "small_blue_diamond": "unicode/1f539.png?v8",
        "small_orange_diamond": "unicode/1f538.png?v8",
        "small_red_triangle": "unicode/1f53a.png?v8",
        "small_red_triangle_down": "unicode/1f53b.png?v8",
        "smile": "unicode/1f604.png?v8",
        "smile_cat": "unicode/1f638.png?v8",
        "smiley": "unicode/1f603.png?v8",
        "smiley_cat": "unicode/1f63a.png?v8",
        "smiling_face_with_tear": "unicode/1f972.png?v8",
        "smiling_face_with_three_hearts": "unicode/1f970.png?v8",
        "smiling_imp": "unicode/1f608.png?v8",
        "smirk": "unicode/1f60f.png?v8",
        "smirk_cat": "unicode/1f63c.png?v8",
        "smoking": "unicode/1f6ac.png?v8",
        "snail": "unicode/1f40c.png?v8",
        "snake": "unicode/1f40d.png?v8",
        "sneezing_face": "unicode/1f927.png?v8",
        "snowboarder": "unicode/1f3c2.png?v8",
        "snowflake": "unicode/2744.png?v8",
        "snowman": "unicode/26c4.png?v8",
        "snowman_with_snow": "unicode/2603.png?v8",
        "soap": "unicode/1f9fc.png?v8",
        "sob": "unicode/1f62d.png?v8",
        "soccer": "unicode/26bd.png?v8",
        "socks": "unicode/1f9e6.png?v8",
        "softball": "unicode/1f94e.png?v8",
        "solomon_islands": "unicode/1f1f8-1f1e7.png?v8",
        "somalia": "unicode/1f1f8-1f1f4.png?v8",
        "soon": "unicode/1f51c.png?v8",
        "sos": "unicode/1f198.png?v8",
        "sound": "unicode/1f509.png?v8",
        "south_africa": "unicode/1f1ff-1f1e6.png?v8",
        "south_georgia_south_sandwich_islands": "unicode/1f1ec-1f1f8.png?v8",
        "south_sudan": "unicode/1f1f8-1f1f8.png?v8",
        "space_invader": "unicode/1f47e.png?v8",
        "spades": "unicode/2660.png?v8",
        "spaghetti": "unicode/1f35d.png?v8",
        "sparkle": "unicode/2747.png?v8",
        "sparkler": "unicode/1f387.png?v8",
        "sparkles": "unicode/2728.png?v8",
        "sparkling_heart": "unicode/1f496.png?v8",
        "speak_no_evil": "unicode/1f64a.png?v8",
        "speaker": "unicode/1f508.png?v8",
        "speaking_head": "unicode/1f5e3.png?v8",
        "speech_balloon": "unicode/1f4ac.png?v8",
        "speedboat": "unicode/1f6a4.png?v8",
        "spider": "unicode/1f577.png?v8",
        "spider_web": "unicode/1f578.png?v8",
        "spiral_calendar": "unicode/1f5d3.png?v8",
        "spiral_notepad": "unicode/1f5d2.png?v8",
        "sponge": "unicode/1f9fd.png?v8",
        "spoon": "unicode/1f944.png?v8",
        "squid": "unicode/1f991.png?v8",
        "sri_lanka": "unicode/1f1f1-1f1f0.png?v8",
        "st_barthelemy": "unicode/1f1e7-1f1f1.png?v8",
        "st_helena": "unicode/1f1f8-1f1ed.png?v8",
        "st_kitts_nevis": "unicode/1f1f0-1f1f3.png?v8",
        "st_lucia": "unicode/1f1f1-1f1e8.png?v8",
        "st_martin": "unicode/1f1f2-1f1eb.png?v8",
        "st_pierre_miquelon": "unicode/1f1f5-1f1f2.png?v8",
        "st_vincent_grenadines": "unicode/1f1fb-1f1e8.png?v8",
        "stadium": "unicode/1f3df.png?v8",
        "standing_man": "unicode/1f9cd-2642.png?v8",
        "standing_person": "unicode/1f9cd.png?v8",
        "standing_woman": "unicode/1f9cd-2640.png?v8",
        "star": "unicode/2b50.png?v8",
        "star2": "unicode/1f31f.png?v8",
        "star_and_crescent": "unicode/262a.png?v8",
        "star_of_david": "unicode/2721.png?v8",
        "star_struck": "unicode/1f929.png?v8",
        "stars": "unicode/1f320.png?v8",
        "station": "unicode/1f689.png?v8",
        "statue_of_liberty": "unicode/1f5fd.png?v8",
        "steam_locomotive": "unicode/1f682.png?v8",
        "stethoscope": "unicode/1fa7a.png?v8",
        "stew": "unicode/1f372.png?v8",
        "stop_button": "unicode/23f9.png?v8",
        "stop_sign": "unicode/1f6d1.png?v8",
        "stopwatch": "unicode/23f1.png?v8",
        "straight_ruler": "unicode/1f4cf.png?v8",
        "strawberry": "unicode/1f353.png?v8",
        "stuck_out_tongue": "unicode/1f61b.png?v8",
        "stuck_out_tongue_closed_eyes": "unicode/1f61d.png?v8",
        "stuck_out_tongue_winking_eye": "unicode/1f61c.png?v8",
        "student": "unicode/1f9d1-1f393.png?v8",
        "studio_microphone": "unicode/1f399.png?v8",
        "stuffed_flatbread": "unicode/1f959.png?v8",
        "sudan": "unicode/1f1f8-1f1e9.png?v8",
        "sun_behind_large_cloud": "unicode/1f325.png?v8",
        "sun_behind_rain_cloud": "unicode/1f326.png?v8",
        "sun_behind_small_cloud": "unicode/1f324.png?v8",
        "sun_with_face": "unicode/1f31e.png?v8",
        "sunflower": "unicode/1f33b.png?v8",
        "sunglasses": "unicode/1f60e.png?v8",
        "sunny": "unicode/2600.png?v8",
        "sunrise": "unicode/1f305.png?v8",
        "sunrise_over_mountains": "unicode/1f304.png?v8",
        "superhero": "unicode/1f9b8.png?v8",
        "superhero_man": "unicode/1f9b8-2642.png?v8",
        "superhero_woman": "unicode/1f9b8-2640.png?v8",
        "supervillain": "unicode/1f9b9.png?v8",
        "supervillain_man": "unicode/1f9b9-2642.png?v8",
        "supervillain_woman": "unicode/1f9b9-2640.png?v8",
        "surfer": "unicode/1f3c4.png?v8",
        "surfing_man": "unicode/1f3c4-2642.png?v8",
        "surfing_woman": "unicode/1f3c4-2640.png?v8",
        "suriname": "unicode/1f1f8-1f1f7.png?v8",
        "sushi": "unicode/1f363.png?v8",
        "suspect": "suspect.png?v8",
        "suspension_railway": "unicode/1f69f.png?v8",
        "svalbard_jan_mayen": "unicode/1f1f8-1f1ef.png?v8",
        "swan": "unicode/1f9a2.png?v8",
        "swaziland": "unicode/1f1f8-1f1ff.png?v8",
        "sweat": "unicode/1f613.png?v8",
        "sweat_drops": "unicode/1f4a6.png?v8",
        "sweat_smile": "unicode/1f605.png?v8",
        "sweden": "unicode/1f1f8-1f1ea.png?v8",
        "sweet_potato": "unicode/1f360.png?v8",
        "swim_brief": "unicode/1fa72.png?v8",
        "swimmer": "unicode/1f3ca.png?v8",
        "swimming_man": "unicode/1f3ca-2642.png?v8",
        "swimming_woman": "unicode/1f3ca-2640.png?v8",
        "switzerland": "unicode/1f1e8-1f1ed.png?v8",
        "symbols": "unicode/1f523.png?v8",
        "synagogue": "unicode/1f54d.png?v8",
        "syria": "unicode/1f1f8-1f1fe.png?v8",
        "syringe": "unicode/1f489.png?v8",
        "t-rex": "unicode/1f996.png?v8",
        "taco": "unicode/1f32e.png?v8",
        "tada": "unicode/1f389.png?v8",
        "taiwan": "unicode/1f1f9-1f1fc.png?v8",
        "tajikistan": "unicode/1f1f9-1f1ef.png?v8",
        "takeout_box": "unicode/1f961.png?v8",
        "tamale": "unicode/1fad4.png?v8",
        "tanabata_tree": "unicode/1f38b.png?v8",
        "tangerine": "unicode/1f34a.png?v8",
        "tanzania": "unicode/1f1f9-1f1ff.png?v8",
        "taurus": "unicode/2649.png?v8",
        "taxi": "unicode/1f695.png?v8",
        "tea": "unicode/1f375.png?v8",
        "teacher": "unicode/1f9d1-1f3eb.png?v8",
        "teapot": "unicode/1fad6.png?v8",
        "technologist": "unicode/1f9d1-1f4bb.png?v8",
        "teddy_bear": "unicode/1f9f8.png?v8",
        "telephone": "unicode/260e.png?v8",
        "telephone_receiver": "unicode/1f4de.png?v8",
        "telescope": "unicode/1f52d.png?v8",
        "tennis": "unicode/1f3be.png?v8",
        "tent": "unicode/26fa.png?v8",
        "test_tube": "unicode/1f9ea.png?v8",
        "thailand": "unicode/1f1f9-1f1ed.png?v8",
        "thermometer": "unicode/1f321.png?v8",
        "thinking": "unicode/1f914.png?v8",
        "thong_sandal": "unicode/1fa74.png?v8",
        "thought_balloon": "unicode/1f4ad.png?v8",
        "thread": "unicode/1f9f5.png?v8",
        "three": "unicode/0033-20e3.png?v8",
        "thumbsdown": "unicode/1f44e.png?v8",
        "thumbsup": "unicode/1f44d.png?v8",
        "ticket": "unicode/1f3ab.png?v8",
        "tickets": "unicode/1f39f.png?v8",
        "tiger": "unicode/1f42f.png?v8",
        "tiger2": "unicode/1f405.png?v8",
        "timer_clock": "unicode/23f2.png?v8",
        "timor_leste": "unicode/1f1f9-1f1f1.png?v8",
        "tipping_hand_man": "unicode/1f481-2642.png?v8",
        "tipping_hand_person": "unicode/1f481.png?v8",
        "tipping_hand_woman": "unicode/1f481-2640.png?v8",
        "tired_face": "unicode/1f62b.png?v8",
        "tm": "unicode/2122.png?v8",
        "togo": "unicode/1f1f9-1f1ec.png?v8",
        "toilet": "unicode/1f6bd.png?v8",
        "tokelau": "unicode/1f1f9-1f1f0.png?v8",
        "tokyo_tower": "unicode/1f5fc.png?v8",
        "tomato": "unicode/1f345.png?v8",
        "tonga": "unicode/1f1f9-1f1f4.png?v8",
        "tongue": "unicode/1f445.png?v8",
        "toolbox": "unicode/1f9f0.png?v8",
        "tooth": "unicode/1f9b7.png?v8",
        "toothbrush": "unicode/1faa5.png?v8",
        "top": "unicode/1f51d.png?v8",
        "tophat": "unicode/1f3a9.png?v8",
        "tornado": "unicode/1f32a.png?v8",
        "tr": "unicode/1f1f9-1f1f7.png?v8",
        "trackball": "unicode/1f5b2.png?v8",
        "tractor": "unicode/1f69c.png?v8",
        "traffic_light": "unicode/1f6a5.png?v8",
        "train": "unicode/1f68b.png?v8",
        "train2": "unicode/1f686.png?v8",
        "tram": "unicode/1f68a.png?v8",
        "transgender_flag": "unicode/1f3f3-26a7.png?v8",
        "transgender_symbol": "unicode/26a7.png?v8",
        "triangular_flag_on_post": "unicode/1f6a9.png?v8",
        "triangular_ruler": "unicode/1f4d0.png?v8",
        "trident": "unicode/1f531.png?v8",
        "trinidad_tobago": "unicode/1f1f9-1f1f9.png?v8",
        "tristan_da_cunha": "unicode/1f1f9-1f1e6.png?v8",
        "triumph": "unicode/1f624.png?v8",
        "trolleybus": "unicode/1f68e.png?v8",
        "trollface": "trollface.png?v8",
        "trophy": "unicode/1f3c6.png?v8",
        "tropical_drink": "unicode/1f379.png?v8",
        "tropical_fish": "unicode/1f420.png?v8",
        "truck": "unicode/1f69a.png?v8",
        "trumpet": "unicode/1f3ba.png?v8",
        "tshirt": "unicode/1f455.png?v8",
        "tulip": "unicode/1f337.png?v8",
        "tumbler_glass": "unicode/1f943.png?v8",
        "tunisia": "unicode/1f1f9-1f1f3.png?v8",
        "turkey": "unicode/1f983.png?v8",
        "turkmenistan": "unicode/1f1f9-1f1f2.png?v8",
        "turks_caicos_islands": "unicode/1f1f9-1f1e8.png?v8",
        "turtle": "unicode/1f422.png?v8",
        "tuvalu": "unicode/1f1f9-1f1fb.png?v8",
        "tv": "unicode/1f4fa.png?v8",
        "twisted_rightwards_arrows": "unicode/1f500.png?v8",
        "two": "unicode/0032-20e3.png?v8",
        "two_hearts": "unicode/1f495.png?v8",
        "two_men_holding_hands": "unicode/1f46c.png?v8",
        "two_women_holding_hands": "unicode/1f46d.png?v8",
        "u5272": "unicode/1f239.png?v8",
        "u5408": "unicode/1f234.png?v8",
        "u55b6": "unicode/1f23a.png?v8",
        "u6307": "unicode/1f22f.png?v8",
        "u6708": "unicode/1f237.png?v8",
        "u6709": "unicode/1f236.png?v8",
        "u6e80": "unicode/1f235.png?v8",
        "u7121": "unicode/1f21a.png?v8",
        "u7533": "unicode/1f238.png?v8",
        "u7981": "unicode/1f232.png?v8",
        "u7a7a": "unicode/1f233.png?v8",
        "uganda": "unicode/1f1fa-1f1ec.png?v8",
        "uk": "unicode/1f1ec-1f1e7.png?v8",
        "ukraine": "unicode/1f1fa-1f1e6.png?v8",
        "umbrella": "unicode/2614.png?v8",
        "unamused": "unicode/1f612.png?v8",
        "underage": "unicode/1f51e.png?v8",
        "unicorn": "unicode/1f984.png?v8",
        "united_arab_emirates": "unicode/1f1e6-1f1ea.png?v8",
        "united_nations": "unicode/1f1fa-1f1f3.png?v8",
        "unlock": "unicode/1f513.png?v8",
        "up": "unicode/1f199.png?v8",
        "upside_down_face": "unicode/1f643.png?v8",
        "uruguay": "unicode/1f1fa-1f1fe.png?v8",
        "us": "unicode/1f1fa-1f1f8.png?v8",
        "us_outlying_islands": "unicode/1f1fa-1f1f2.png?v8",
        "us_virgin_islands": "unicode/1f1fb-1f1ee.png?v8",
        "uzbekistan": "unicode/1f1fa-1f1ff.png?v8",
        "v": "unicode/270c.png?v8",
        "vampire": "unicode/1f9db.png?v8",
        "vampire_man": "unicode/1f9db-2642.png?v8",
        "vampire_woman": "unicode/1f9db-2640.png?v8",
        "vanuatu": "unicode/1f1fb-1f1fa.png?v8",
        "vatican_city": "unicode/1f1fb-1f1e6.png?v8",
        "venezuela": "unicode/1f1fb-1f1ea.png?v8",
        "vertical_traffic_light": "unicode/1f6a6.png?v8",
        "vhs": "unicode/1f4fc.png?v8",
        "vibration_mode": "unicode/1f4f3.png?v8",
        "video_camera": "unicode/1f4f9.png?v8",
        "video_game": "unicode/1f3ae.png?v8",
        "vietnam": "unicode/1f1fb-1f1f3.png?v8",
        "violin": "unicode/1f3bb.png?v8",
        "virgo": "unicode/264d.png?v8",
        "volcano": "unicode/1f30b.png?v8",
        "volleyball": "unicode/1f3d0.png?v8",
        "vomiting_face": "unicode/1f92e.png?v8",
        "vs": "unicode/1f19a.png?v8",
        "vulcan_salute": "unicode/1f596.png?v8",
        "waffle": "unicode/1f9c7.png?v8",
        "wales": "unicode/1f3f4-e0067-e0062-e0077-e006c-e0073-e007f.png?v8",
        "walking": "unicode/1f6b6.png?v8",
        "walking_man": "unicode/1f6b6-2642.png?v8",
        "walking_woman": "unicode/1f6b6-2640.png?v8",
        "wallis_futuna": "unicode/1f1fc-1f1eb.png?v8",
        "waning_crescent_moon": "unicode/1f318.png?v8",
        "waning_gibbous_moon": "unicode/1f316.png?v8",
        "warning": "unicode/26a0.png?v8",
        "wastebasket": "unicode/1f5d1.png?v8",
        "watch": "unicode/231a.png?v8",
        "water_buffalo": "unicode/1f403.png?v8",
        "water_polo": "unicode/1f93d.png?v8",
        "watermelon": "unicode/1f349.png?v8",
        "wave": "unicode/1f44b.png?v8",
        "wavy_dash": "unicode/3030.png?v8",
        "waxing_crescent_moon": "unicode/1f312.png?v8",
        "waxing_gibbous_moon": "unicode/1f314.png?v8",
        "wc": "unicode/1f6be.png?v8",
        "weary": "unicode/1f629.png?v8",
        "wedding": "unicode/1f492.png?v8",
        "weight_lifting": "unicode/1f3cb.png?v8",
        "weight_lifting_man": "unicode/1f3cb-2642.png?v8",
        "weight_lifting_woman": "unicode/1f3cb-2640.png?v8",
        "western_sahara": "unicode/1f1ea-1f1ed.png?v8",
        "whale": "unicode/1f433.png?v8",
        "whale2": "unicode/1f40b.png?v8",
        "wheel_of_dharma": "unicode/2638.png?v8",
        "wheelchair": "unicode/267f.png?v8",
        "white_check_mark": "unicode/2705.png?v8",
        "white_circle": "unicode/26aa.png?v8",
        "white_flag": "unicode/1f3f3.png?v8",
        "white_flower": "unicode/1f4ae.png?v8",
        "white_haired_man": "unicode/1f468-1f9b3.png?v8",
        "white_haired_woman": "unicode/1f469-1f9b3.png?v8",
        "white_heart": "unicode/1f90d.png?v8",
        "white_large_square": "unicode/2b1c.png?v8",
        "white_medium_small_square": "unicode/25fd.png?v8",
        "white_medium_square": "unicode/25fb.png?v8",
        "white_small_square": "unicode/25ab.png?v8",
        "white_square_button": "unicode/1f533.png?v8",
        "wilted_flower": "unicode/1f940.png?v8",
        "wind_chime": "unicode/1f390.png?v8",
        "wind_face": "unicode/1f32c.png?v8",
        "window": "unicode/1fa9f.png?v8",
        "wine_glass": "unicode/1f377.png?v8",
        "wink": "unicode/1f609.png?v8",
        "wolf": "unicode/1f43a.png?v8",
        "woman": "unicode/1f469.png?v8",
        "woman_artist": "unicode/1f469-1f3a8.png?v8",
        "woman_astronaut": "unicode/1f469-1f680.png?v8",
        "woman_beard": "unicode/1f9d4-2640.png?v8",
        "woman_cartwheeling": "unicode/1f938-2640.png?v8",
        "woman_cook": "unicode/1f469-1f373.png?v8",
        "woman_dancing": "unicode/1f483.png?v8",
        "woman_facepalming": "unicode/1f926-2640.png?v8",
        "woman_factory_worker": "unicode/1f469-1f3ed.png?v8",
        "woman_farmer": "unicode/1f469-1f33e.png?v8",
        "woman_feeding_baby": "unicode/1f469-1f37c.png?v8",
        "woman_firefighter": "unicode/1f469-1f692.png?v8",
        "woman_health_worker": "unicode/1f469-2695.png?v8",
        "woman_in_manual_wheelchair": "unicode/1f469-1f9bd.png?v8",
        "woman_in_motorized_wheelchair": "unicode/1f469-1f9bc.png?v8",
        "woman_in_tuxedo": "unicode/1f935-2640.png?v8",
        "woman_judge": "unicode/1f469-2696.png?v8",
        "woman_juggling": "unicode/1f939-2640.png?v8",
        "woman_mechanic": "unicode/1f469-1f527.png?v8",
        "woman_office_worker": "unicode/1f469-1f4bc.png?v8",
        "woman_pilot": "unicode/1f469-2708.png?v8",
        "woman_playing_handball": "unicode/1f93e-2640.png?v8",
        "woman_playing_water_polo": "unicode/1f93d-2640.png?v8",
        "woman_scientist": "unicode/1f469-1f52c.png?v8",
        "woman_shrugging": "unicode/1f937-2640.png?v8",
        "woman_singer": "unicode/1f469-1f3a4.png?v8",
        "woman_student": "unicode/1f469-1f393.png?v8",
        "woman_teacher": "unicode/1f469-1f3eb.png?v8",
        "woman_technologist": "unicode/1f469-1f4bb.png?v8",
        "woman_with_headscarf": "unicode/1f9d5.png?v8",
        "woman_with_probing_cane": "unicode/1f469-1f9af.png?v8",
        "woman_with_turban": "unicode/1f473-2640.png?v8",
        "woman_with_veil": "unicode/1f470-2640.png?v8",
        "womans_clothes": "unicode/1f45a.png?v8",
        "womans_hat": "unicode/1f452.png?v8",
        "women_wrestling": "unicode/1f93c-2640.png?v8",
        "womens": "unicode/1f6ba.png?v8",
        "wood": "unicode/1fab5.png?v8",
        "woozy_face": "unicode/1f974.png?v8",
        "world_map": "unicode/1f5fa.png?v8",
        "worm": "unicode/1fab1.png?v8",
        "worried": "unicode/1f61f.png?v8",
        "wrench": "unicode/1f527.png?v8",
        "wrestling": "unicode/1f93c.png?v8",
        "writing_hand": "unicode/270d.png?v8",
        "x": "unicode/274c.png?v8",
        "yarn": "unicode/1f9f6.png?v8",
        "yawning_face": "unicode/1f971.png?v8",
        "yellow_circle": "unicode/1f7e1.png?v8",
        "yellow_heart": "unicode/1f49b.png?v8",
        "yellow_square": "unicode/1f7e8.png?v8",
        "yemen": "unicode/1f1fe-1f1ea.png?v8",
        "yen": "unicode/1f4b4.png?v8",
        "yin_yang": "unicode/262f.png?v8",
        "yo_yo": "unicode/1fa80.png?v8",
        "yum": "unicode/1f60b.png?v8",
        "zambia": "unicode/1f1ff-1f1f2.png?v8",
        "zany_face": "unicode/1f92a.png?v8",
        "zap": "unicode/26a1.png?v8",
        "zebra": "unicode/1f993.png?v8",
        "zero": "unicode/0030-20e3.png?v8",
        "zimbabwe": "unicode/1f1ff-1f1fc.png?v8",
        "zipper_mouth_face": "unicode/1f910.png?v8",
        "zombie": "unicode/1f9df.png?v8",
        "zombie_man": "unicode/1f9df-2642.png?v8",
        "zombie_woman": "unicode/1f9df-2640.png?v8",
        "zzz": "unicode/1f4a4.png?v8"
      }
    };
    function replaceEmojiShorthand(m, $1, useNativeEmoji) {
      var emojiMatch = emojiData.data[$1];
      var result = m;
      if (emojiMatch) {
        if (useNativeEmoji && /unicode/.test(emojiMatch)) {
          var emojiUnicode = emojiMatch.replace('unicode/', '').replace(/\.png.*/, '').split('-').map(function (u) {
            return "&#x" + u + ";";
          })
          // Separate multi-character emoji with zero width joiner sequence (ZWJ)
          // Hat tip: https://about.gitlab.com/blog/2018/05/30/journey-in-native-unicode-emoji/#emoji-made-up-of-multiple-characters
          .join('&zwj;').concat('&#xFE0E;');
          result = "<span class=\"emoji\">" + emojiUnicode + "</span>";
        } else {
          result = "<img src=\"" + emojiData.baseURL + emojiMatch + ".png\" alt=\"" + $1 + "\" class=\"emoji\" loading=\"lazy\">";
        }
      }
      return result;
    }
    function emojify(text, useNativeEmoji) {
      return text
      // Mark colons in tags
      .replace(/<(code|pre|script|template)[^>]*?>[\s\S]+?<\/(code|pre|script|template)>/g, function (m) {
        return m.replace(/:/g, '__colon__');
      })
      // Mark colons in comments
      .replace(/<!--[\s\S]+?-->/g, function (m) {
        return m.replace(/:/g, '__colon__');
      })
      // Mark colons in URIs
      .replace(/([a-z]{2,}:)?\/\/[^\s'">)]+/gi, function (m) {
        return m.replace(/:/g, '__colon__');
      })
      // Replace emoji shorthand codes
      .replace(/:([a-z0-9_\-+]+?):/g, function (m, $1) {
        return replaceEmojiShorthand(m, $1, useNativeEmoji);
      })
      // Restore colons in tags and comments
      .replace(/__colon__/g, ':');
    }

    /**
     * Converts a colon formatted string to a object with properties.
     *
     * This is process a provided string and look for any tokens in the format
     * of `:name[=value]` and then convert it to a object and return.
     * An example of this is ':include :type=code :fragment=demo' is taken and
     * then converted to:
     *
     * ```
     * {
     *  include: '',
     *  type: 'code',
     *  fragment: 'demo'
     * }
     * ```
     *
     * @param {string}   str   The string to parse.
     *
     * @return {object}  The original string and parsed object, { str, config }.
     */
    function getAndRemoveConfig(str) {
      if (str === void 0) str = '';
      var config = {};
      if (str) {
        str = str.replace(/^('|")/, '').replace(/('|")$/, '').replace(/(?:^|\s):([\w-]+:?)=?([\w-%]+)?/g, function (m, key, value) {
          if (key.indexOf(':') === -1) {
            config[key] = value && value.replace(/&quot;/g, '') || true;
            return '';
          }
          return m;
        }).trim();
      }
      return {
        str: str,
        config: config
      };
    }

    /**
     * Remove the <a> tag from sidebar when the header with link, details see issue 1069
     * @param {string}   str   The string to deal with.
     *
     * @return {string}   str   The string after delete the <a> element.
     */
    function removeAtag(str) {
      if (str === void 0) str = '';
      return str.replace(/(<\/?a.*?>)/gi, '');
    }
    var imageCompiler = function imageCompiler(ref) {
      var renderer = ref.renderer;
      var contentBase = ref.contentBase;
      var router = ref.router;
      return renderer.image = function (href, title, text) {
        var url = href;
        var attrs = [];
        var ref = getAndRemoveConfig(title);
        var str = ref.str;
        var config = ref.config;
        title = str;
        if (config['no-zoom']) {
          attrs.push('data-no-zoom');
        }
        if (title) {
          attrs.push("title=\"" + title + "\"");
        }
        if (config.size) {
          var ref$1 = config.size.split('x');
          var width = ref$1[0];
          var height = ref$1[1];
          if (height) {
            attrs.push("width=\"" + width + "\" height=\"" + height + "\"");
          } else {
            attrs.push("width=\"" + width + "\"");
          }
        }
        if (config.class) {
          attrs.push("class=\"" + config.class + "\"");
        }
        if (config.id) {
          attrs.push("id=\"" + config.id + "\"");
        }
        if (!isAbsolutePath(href)) {
          url = getPath(contentBase, getParentPath(router.getCurrentPath()), href);
        }
        if (attrs.length > 0) {
          return "<img src=\"" + url + "\" data-origin=\"" + href + "\" alt=\"" + text + "\" " + attrs.join(' ') + " />";
        }
        return "<img src=\"" + url + "\" data-origin=\"" + href + "\" alt=\"" + text + "\"" + attrs + ">";
      };
    };
    var prism = createCommonjsModule(function (module) {
      /* **********************************************
           Begin prism-core.js
      ********************************************** */

      /// <reference lib="WebWorker"/>

      var _self = typeof window !== 'undefined' ? window // if in browser
      : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
      : {} // if in node js
      ;

      /**
       * Prism: Lightweight, robust, elegant syntax highlighting
       *
       * @license MIT <https://opensource.org/licenses/MIT>
       * @author Lea Verou <https://lea.verou.me>
       * @namespace
       * @public
       */
      var Prism = function (_self) {
        // Private helper vars
        var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
        var uniqueId = 0;

        // The grammar object for plaintext
        var plainTextGrammar = {};
        var _ = {
          /**
           * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
           * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
           * additional languages or plugins yourself.
           *
           * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
           *
           * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
           * empty Prism object into the global scope before loading the Prism script like this:
           *
           * ```js
           * window.Prism = window.Prism || {};
           * Prism.manual = true;
           * // add a new <script> to load Prism's script
           * ```
           *
           * @default false
           * @type {boolean}
           * @memberof Prism
           * @public
           */
          manual: _self.Prism && _self.Prism.manual,
          /**
           * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
           * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
           * own worker, you don't want it to do this.
           *
           * By setting this value to `true`, Prism will not add its own listeners to the worker.
           *
           * You obviously have to change this value before Prism executes. To do this, you can add an
           * empty Prism object into the global scope before loading the Prism script like this:
           *
           * ```js
           * window.Prism = window.Prism || {};
           * Prism.disableWorkerMessageHandler = true;
           * // Load Prism's script
           * ```
           *
           * @default false
           * @type {boolean}
           * @memberof Prism
           * @public
           */
          disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
          /**
           * A namespace for utility methods.
           *
           * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
           * change or disappear at any time.
           *
           * @namespace
           * @memberof Prism
           */
          util: {
            encode: function encode(tokens) {
              if (tokens instanceof Token) {
                return new Token(tokens.type, encode(tokens.content), tokens.alias);
              } else if (Array.isArray(tokens)) {
                return tokens.map(encode);
              } else {
                return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
              }
            },
            /**
             * Returns the name of the type of the given value.
             *
             * @param {any} o
             * @returns {string}
             * @example
             * type(null)      === 'Null'
             * type(undefined) === 'Undefined'
             * type(123)       === 'Number'
             * type('foo')     === 'String'
             * type(true)      === 'Boolean'
             * type([1, 2])    === 'Array'
             * type({})        === 'Object'
             * type(String)    === 'Function'
             * type(/abc+/)    === 'RegExp'
             */
            type: function type(o) {
              return Object.prototype.toString.call(o).slice(8, -1);
            },
            /**
             * Returns a unique number for the given object. Later calls will still return the same number.
             *
             * @param {Object} obj
             * @returns {number}
             */
            objId: function objId(obj) {
              if (!obj['__id']) {
                Object.defineProperty(obj, '__id', {
                  value: ++uniqueId
                });
              }
              return obj['__id'];
            },
            /**
             * Creates a deep clone of the given object.
             *
             * The main intended use of this function is to clone language definitions.
             *
             * @param {T} o
             * @param {Record<number, any>} [visited]
             * @returns {T}
             * @template T
             */
            clone: function deepClone(o, visited) {
              visited = visited || {};
              var clone;
              var id;
              switch (_.util.type(o)) {
                case 'Object':
                  id = _.util.objId(o);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone = /** @type {Record<string, any>} */{};
                  visited[id] = clone;
                  for (var key in o) {
                    if (o.hasOwnProperty(key)) {
                      clone[key] = deepClone(o[key], visited);
                    }
                  }
                  return /** @type {any} */clone;
                case 'Array':
                  id = _.util.objId(o);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone = [];
                  visited[id] = clone;
                  ( /** @type {Array} */ /** @type {any} */o).forEach(function (v, i) {
                    clone[i] = deepClone(v, visited);
                  });
                  return /** @type {any} */clone;
                default:
                  return o;
              }
            },
            /**
             * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
             *
             * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
             *
             * @param {Element} element
             * @returns {string}
             */
            getLanguage: function getLanguage(element) {
              while (element) {
                var m = lang.exec(element.className);
                if (m) {
                  return m[1].toLowerCase();
                }
                element = element.parentElement;
              }
              return 'none';
            },
            /**
             * Sets the Prism `language-xxxx` class of the given element.
             *
             * @param {Element} element
             * @param {string} language
             * @returns {void}
             */
            setLanguage: function setLanguage(element, language) {
              // remove all `language-xxxx` classes
              // (this might leave behind a leading space)
              element.className = element.className.replace(RegExp(lang, 'gi'), '');

              // add the new `language-xxxx` class
              // (using `classList` will automatically clean up spaces for us)
              element.classList.add('language-' + language);
            },
            /**
             * Returns the script element that is currently executing.
             *
             * This does __not__ work for line script element.
             *
             * @returns {HTMLScriptElement | null}
             */
            currentScript: function currentScript() {
              if (typeof document === 'undefined') {
                return null;
              }
              if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
                return /** @type {any} */document.currentScript;
              }

              // IE11 workaround
              // we'll get the src of the current script by parsing IE11's error stack trace
              // this will not work for inline scripts

              try {
                throw new Error();
              } catch (err) {
                // Get file src url from stack. Specifically works with the format of stack traces in IE.
                // A stack will look like this:
                //
                // Error
                //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
                //    at Global code (http://localhost/components/prism-core.js:606:1)

                var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
                if (src) {
                  var scripts = document.getElementsByTagName('script');
                  for (var i in scripts) {
                    if (scripts[i].src == src) {
                      return scripts[i];
                    }
                  }
                }
                return null;
              }
            },
            /**
             * Returns whether a given class is active for `element`.
             *
             * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
             * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
             * given class is just the given class with a `no-` prefix.
             *
             * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
             * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
             * ancestors have the given class or the negated version of it, then the default activation will be returned.
             *
             * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
             * version of it, the class is considered active.
             *
             * @param {Element} element
             * @param {string} className
             * @param {boolean} [defaultActivation=false]
             * @returns {boolean}
             */
            isActive: function isActive(element, className, defaultActivation) {
              var no = 'no-' + className;
              while (element) {
                var classList = element.classList;
                if (classList.contains(className)) {
                  return true;
                }
                if (classList.contains(no)) {
                  return false;
                }
                element = element.parentElement;
              }
              return !!defaultActivation;
            }
          },
          /**
           * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
           *
           * @namespace
           * @memberof Prism
           * @public
           */
          languages: {
            /**
             * The grammar for plain, unformatted text.
             */
            plain: plainTextGrammar,
            plaintext: plainTextGrammar,
            text: plainTextGrammar,
            txt: plainTextGrammar,
            /**
             * Creates a deep copy of the language with the given id and appends the given tokens.
             *
             * If a token in `redef` also appears in the copied language, then the existing token in the copied language
             * will be overwritten at its original position.
             *
             * ## Best practices
             *
             * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
             * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
             * understand the language definition because, normally, the order of tokens matters in Prism grammars.
             *
             * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
             * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
             *
             * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
             * @param {Grammar} redef The new tokens to append.
             * @returns {Grammar} The new language created.
             * @public
             * @example
             * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
             *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
             *     // at its original position
             *     'comment': { ... },
             *     // CSS doesn't have a 'color' token, so this token will be appended
             *     'color': /\b(?:red|green|blue)\b/
             * });
             */
            extend: function extend(id, redef) {
              var lang = _.util.clone(_.languages[id]);
              for (var key in redef) {
                lang[key] = redef[key];
              }
              return lang;
            },
            /**
             * Inserts tokens _before_ another token in a language definition or any other grammar.
             *
             * ## Usage
             *
             * This helper method makes it easy to modify existing languages. For example, the CSS language definition
             * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
             * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
             * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
             * this:
             *
             * ```js
             * Prism.languages.markup.style = {
             *     // token
             * };
             * ```
             *
             * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
             * before existing tokens. For the CSS example above, you would use it like this:
             *
             * ```js
             * Prism.languages.insertBefore('markup', 'cdata', {
             *     'style': {
             *         // token
             *     }
             * });
             * ```
             *
             * ## Special cases
             *
             * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
             * will be ignored.
             *
             * This behavior can be used to insert tokens after `before`:
             *
             * ```js
             * Prism.languages.insertBefore('markup', 'comment', {
             *     'comment': Prism.languages.markup.comment,
             *     // tokens after 'comment'
             * });
             * ```
             *
             * ## Limitations
             *
             * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
             * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
             * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
             * deleting properties which is necessary to insert at arbitrary positions.
             *
             * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
             * Instead, it will create a new object and replace all references to the target object with the new one. This
             * can be done without temporarily deleting properties, so the iteration order is well-defined.
             *
             * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
             * you hold the target object in a variable, then the value of the variable will not change.
             *
             * ```js
             * var oldMarkup = Prism.languages.markup;
             * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
             *
             * assert(oldMarkup !== Prism.languages.markup);
             * assert(newMarkup === Prism.languages.markup);
             * ```
             *
             * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
             * object to be modified.
             * @param {string} before The key to insert before.
             * @param {Grammar} insert An object containing the key-value pairs to be inserted.
             * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
             * object to be modified.
             *
             * Defaults to `Prism.languages`.
             * @returns {Grammar} The new grammar object.
             * @public
             */
            insertBefore: function insertBefore(inside, before, insert, root) {
              root = root || ( /** @type {any} */_.languages);
              var grammar = root[inside];
              /** @type {Grammar} */
              var ret = {};
              for (var token in grammar) {
                if (grammar.hasOwnProperty(token)) {
                  if (token == before) {
                    for (var newToken in insert) {
                      if (insert.hasOwnProperty(newToken)) {
                        ret[newToken] = insert[newToken];
                      }
                    }
                  }

                  // Do not insert token which also occur in insert. See #1525
                  if (!insert.hasOwnProperty(token)) {
                    ret[token] = grammar[token];
                  }
                }
              }
              var old = root[inside];
              root[inside] = ret;

              // Update references in other language definitions
              _.languages.DFS(_.languages, function (key, value) {
                if (value === old && key != inside) {
                  this[key] = ret;
                }
              });
              return ret;
            },
            // Traverse a language definition with Depth First Search
            DFS: function DFS(o, callback, type, visited) {
              visited = visited || {};
              var objId = _.util.objId;
              for (var i in o) {
                if (o.hasOwnProperty(i)) {
                  callback.call(o, i, o[i], type || i);
                  var property = o[i];
                  var propertyType = _.util.type(property);
                  if (propertyType === 'Object' && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, null, visited);
                  } else if (propertyType === 'Array' && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, i, visited);
                  }
                }
              }
            }
          },
          plugins: {},
          /**
           * This is the most high-level function in Prism’s API.
           * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
           * each one of them.
           *
           * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
           *
           * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
           * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
           * @memberof Prism
           * @public
           */
          highlightAll: function highlightAll(async, callback) {
            _.highlightAllUnder(document, async, callback);
          },
          /**
           * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
           * {@link Prism.highlightElement} on each one of them.
           *
           * The following hooks will be run:
           * 1. `before-highlightall`
           * 2. `before-all-elements-highlight`
           * 3. All hooks of {@link Prism.highlightElement} for each element.
           *
           * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
           * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
           * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
           * @memberof Prism
           * @public
           */
          highlightAllUnder: function highlightAllUnder(container, async, callback) {
            var env = {
              callback: callback,
              container: container,
              selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            _.hooks.run('before-highlightall', env);
            env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
            _.hooks.run('before-all-elements-highlight', env);
            for (var i = 0, element; element = env.elements[i++];) {
              _.highlightElement(element, async === true, env.callback);
            }
          },
          /**
           * Highlights the code inside a single element.
           *
           * The following hooks will be run:
           * 1. `before-sanity-check`
           * 2. `before-highlight`
           * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
           * 4. `before-insert`
           * 5. `after-highlight`
           * 6. `complete`
           *
           * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
           * the element's language.
           *
           * @param {Element} element The element containing the code.
           * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
           * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
           * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
           * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
           *
           * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
           * asynchronous highlighting to work. You can build your own bundle on the
           * [Download page](https://prismjs.com/download.html).
           * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
           * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
           * @memberof Prism
           * @public
           */
          highlightElement: function highlightElement(element, async, callback) {
            // Find language
            var language = _.util.getLanguage(element);
            var grammar = _.languages[language];

            // Set language on the element, if not present
            _.util.setLanguage(element, language);

            // Set language on the parent, for styling
            var parent = element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === 'pre') {
              _.util.setLanguage(parent, language);
            }
            var code = element.textContent;
            var env = {
              element: element,
              language: language,
              grammar: grammar,
              code: code
            };
            function insertHighlightedCode(highlightedCode) {
              env.highlightedCode = highlightedCode;
              _.hooks.run('before-insert', env);
              env.element.innerHTML = env.highlightedCode;
              _.hooks.run('after-highlight', env);
              _.hooks.run('complete', env);
              callback && callback.call(env.element);
            }
            _.hooks.run('before-sanity-check', env);

            // plugins may change/add the parent/element
            parent = env.element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
              parent.setAttribute('tabindex', '0');
            }
            if (!env.code) {
              _.hooks.run('complete', env);
              callback && callback.call(env.element);
              return;
            }
            _.hooks.run('before-highlight', env);
            if (!env.grammar) {
              insertHighlightedCode(_.util.encode(env.code));
              return;
            }
            if (async && _self.Worker) {
              var worker = new Worker(_.filename);
              worker.onmessage = function (evt) {
                insertHighlightedCode(evt.data);
              };
              worker.postMessage(JSON.stringify({
                language: env.language,
                code: env.code,
                immediateClose: true
              }));
            } else {
              insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
            }
          },
          /**
           * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
           * and the language definitions to use, and returns a string with the HTML produced.
           *
           * The following hooks will be run:
           * 1. `before-tokenize`
           * 2. `after-tokenize`
           * 3. `wrap`: On each {@link Token}.
           *
           * @param {string} text A string with the code to be highlighted.
           * @param {Grammar} grammar An object containing the tokens to use.
           *
           * Usually a language definition like `Prism.languages.markup`.
           * @param {string} language The name of the language definition passed to `grammar`.
           * @returns {string} The highlighted HTML.
           * @memberof Prism
           * @public
           * @example
           * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
           */
          highlight: function highlight(text, grammar, language) {
            var env = {
              code: text,
              grammar: grammar,
              language: language
            };
            _.hooks.run('before-tokenize', env);
            if (!env.grammar) {
              throw new Error('The language "' + env.language + '" has no grammar.');
            }
            env.tokens = _.tokenize(env.code, env.grammar);
            _.hooks.run('after-tokenize', env);
            return Token.stringify(_.util.encode(env.tokens), env.language);
          },
          /**
           * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
           * and the language definitions to use, and returns an array with the tokenized code.
           *
           * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
           *
           * This method could be useful in other contexts as well, as a very crude parser.
           *
           * @param {string} text A string with the code to be highlighted.
           * @param {Grammar} grammar An object containing the tokens to use.
           *
           * Usually a language definition like `Prism.languages.markup`.
           * @returns {TokenStream} An array of strings and tokens, a token stream.
           * @memberof Prism
           * @public
           * @example
           * let code = `var foo = 0;`;
           * let tokens = Prism.tokenize(code, Prism.languages.javascript);
           * tokens.forEach(token => {
           *     if (token instanceof Prism.Token && token.type === 'number') {
           *         console.log(`Found numeric literal: ${token.content}`);
           *     }
           * });
           */
          tokenize: function tokenize(text, grammar) {
            var rest = grammar.rest;
            if (rest) {
              for (var token in rest) {
                grammar[token] = rest[token];
              }
              delete grammar.rest;
            }
            var tokenList = new LinkedList();
            addAfter(tokenList, tokenList.head, text);
            matchGrammar(text, tokenList, grammar, tokenList.head, 0);
            return toArray(tokenList);
          },
          /**
           * @namespace
           * @memberof Prism
           * @public
           */
          hooks: {
            all: {},
            /**
             * Adds the given callback to the list of callbacks for the given hook.
             *
             * The callback will be invoked when the hook it is registered for is run.
             * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
             *
             * One callback function can be registered to multiple hooks and the same hook multiple times.
             *
             * @param {string} name The name of the hook.
             * @param {HookCallback} callback The callback function which is given environment variables.
             * @public
             */
            add: function add(name, callback) {
              var hooks = _.hooks.all;
              hooks[name] = hooks[name] || [];
              hooks[name].push(callback);
            },
            /**
             * Runs a hook invoking all registered callbacks with the given environment variables.
             *
             * Callbacks will be invoked synchronously and in the order in which they were registered.
             *
             * @param {string} name The name of the hook.
             * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
             * @public
             */
            run: function run(name, env) {
              var callbacks = _.hooks.all[name];
              if (!callbacks || !callbacks.length) {
                return;
              }
              for (var i = 0, callback; callback = callbacks[i++];) {
                callback(env);
              }
            }
          },
          Token: Token
        };
        _self.Prism = _;

        // Typescript note:
        // The following can be used to import the Token type in JSDoc:
        //
        //   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

        /**
         * Creates a new token.
         *
         * @param {string} type See {@link Token#type type}
         * @param {string | TokenStream} content See {@link Token#content content}
         * @param {string|string[]} [alias] The alias(es) of the token.
         * @param {string} [matchedStr=""] A copy of the full string this token was created from.
         * @class
         * @global
         * @public
         */
        function Token(type, content, alias, matchedStr) {
          /**
           * The type of the token.
           *
           * This is usually the key of a pattern in a {@link Grammar}.
           *
           * @type {string}
           * @see GrammarToken
           * @public
           */
          this.type = type;
          /**
           * The strings or tokens contained by this token.
           *
           * This will be a token stream if the pattern matched also defined an `inside` grammar.
           *
           * @type {string | TokenStream}
           * @public
           */
          this.content = content;
          /**
           * The alias(es) of the token.
           *
           * @type {string|string[]}
           * @see GrammarToken
           * @public
           */
          this.alias = alias;
          // Copy of the full string this token was created from
          this.length = (matchedStr || '').length | 0;
        }

        /**
         * A token stream is an array of strings and {@link Token Token} objects.
         *
         * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
         * them.
         *
         * 1. No adjacent strings.
         * 2. No empty strings.
         *
         *    The only exception here is the token stream that only contains the empty string and nothing else.
         *
         * @typedef {Array<string | Token>} TokenStream
         * @global
         * @public
         */

        /**
         * Converts the given token or token stream to an HTML representation.
         *
         * The following hooks will be run:
         * 1. `wrap`: On each {@link Token}.
         *
         * @param {string | Token | TokenStream} o The token or token stream to be converted.
         * @param {string} language The name of current language.
         * @returns {string} The HTML representation of the token or token stream.
         * @memberof Token
         * @static
         */
        Token.stringify = function stringify(o, language) {
          if (typeof o == 'string') {
            return o;
          }
          if (Array.isArray(o)) {
            var s = '';
            o.forEach(function (e) {
              s += stringify(e, language);
            });
            return s;
          }
          var env = {
            type: o.type,
            content: stringify(o.content, language),
            tag: 'span',
            classes: ['token', o.type],
            attributes: {},
            language: language
          };
          var aliases = o.alias;
          if (aliases) {
            if (Array.isArray(aliases)) {
              Array.prototype.push.apply(env.classes, aliases);
            } else {
              env.classes.push(aliases);
            }
          }
          _.hooks.run('wrap', env);
          var attributes = '';
          for (var name in env.attributes) {
            attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
          }
          return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
        };

        /**
         * @param {RegExp} pattern
         * @param {number} pos
         * @param {string} text
         * @param {boolean} lookbehind
         * @returns {RegExpExecArray | null}
         */
        function matchPattern(pattern, pos, text, lookbehind) {
          pattern.lastIndex = pos;
          var match = pattern.exec(text);
          if (match && lookbehind && match[1]) {
            // change the match to remove the text matched by the Prism lookbehind group
            var lookbehindLength = match[1].length;
            match.index += lookbehindLength;
            match[0] = match[0].slice(lookbehindLength);
          }
          return match;
        }

        /**
         * @param {string} text
         * @param {LinkedList<string | Token>} tokenList
         * @param {any} grammar
         * @param {LinkedListNode<string | Token>} startNode
         * @param {number} startPos
         * @param {RematchOptions} [rematch]
         * @returns {void}
         * @private
         *
         * @typedef RematchOptions
         * @property {string} cause
         * @property {number} reach
         */
        function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
          for (var token in grammar) {
            if (!grammar.hasOwnProperty(token) || !grammar[token]) {
              continue;
            }
            var patterns = grammar[token];
            patterns = Array.isArray(patterns) ? patterns : [patterns];
            for (var j = 0; j < patterns.length; ++j) {
              if (rematch && rematch.cause == token + ',' + j) {
                return;
              }
              var patternObj = patterns[j];
              var inside = patternObj.inside;
              var lookbehind = !!patternObj.lookbehind;
              var greedy = !!patternObj.greedy;
              var alias = patternObj.alias;
              if (greedy && !patternObj.pattern.global) {
                // Without the global flag, lastIndex won't work
                var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
              }

              /** @type {RegExp} */
              var pattern = patternObj.pattern || patternObj;
              for (
              // iterate the token list and keep track of the current token/string position
              var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
                if (rematch && pos >= rematch.reach) {
                  break;
                }
                var str = currentNode.value;
                if (tokenList.length > text.length) {
                  // Something went terribly wrong, ABORT, ABORT!
                  return;
                }
                if (str instanceof Token) {
                  continue;
                }
                var removeCount = 1; // this is the to parameter of removeBetween
                var match;
                if (greedy) {
                  match = matchPattern(pattern, pos, text, lookbehind);
                  if (!match || match.index >= text.length) {
                    break;
                  }
                  var from = match.index;
                  var to = match.index + match[0].length;
                  var p = pos;

                  // find the node that contains the match
                  p += currentNode.value.length;
                  while (from >= p) {
                    currentNode = currentNode.next;
                    p += currentNode.value.length;
                  }
                  // adjust pos (and p)
                  p -= currentNode.value.length;
                  pos = p;

                  // the current node is a Token, then the match starts inside another Token, which is invalid
                  if (currentNode.value instanceof Token) {
                    continue;
                  }

                  // find the last node which is affected by this match
                  for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === 'string'); k = k.next) {
                    removeCount++;
                    p += k.value.length;
                  }
                  removeCount--;

                  // replace with the new match
                  str = text.slice(pos, p);
                  match.index -= pos;
                } else {
                  match = matchPattern(pattern, 0, str, lookbehind);
                  if (!match) {
                    continue;
                  }
                }

                // eslint-disable-next-line no-redeclare
                var from = match.index;
                var matchStr = match[0];
                var before = str.slice(0, from);
                var after = str.slice(from + matchStr.length);
                var reach = pos + str.length;
                if (rematch && reach > rematch.reach) {
                  rematch.reach = reach;
                }
                var removeFrom = currentNode.prev;
                if (before) {
                  removeFrom = addAfter(tokenList, removeFrom, before);
                  pos += before.length;
                }
                removeRange(tokenList, removeFrom, removeCount);
                var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                currentNode = addAfter(tokenList, removeFrom, wrapped);
                if (after) {
                  addAfter(tokenList, currentNode, after);
                }
                if (removeCount > 1) {
                  // at least one Token object was removed, so we have to do some rematching
                  // this can only happen if the current pattern is greedy

                  /** @type {RematchOptions} */
                  var nestedRematch = {
                    cause: token + ',' + j,
                    reach: reach
                  };
                  matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

                  // the reach might have been extended because of the rematching
                  if (rematch && nestedRematch.reach > rematch.reach) {
                    rematch.reach = nestedRematch.reach;
                  }
                }
              }
            }
          }
        }

        /**
         * @typedef LinkedListNode
         * @property {T} value
         * @property {LinkedListNode<T> | null} prev The previous node.
         * @property {LinkedListNode<T> | null} next The next node.
         * @template T
         * @private
         */

        /**
         * @template T
         * @private
         */
        function LinkedList() {
          /** @type {LinkedListNode<T>} */
          var head = {
            value: null,
            prev: null,
            next: null
          };
          /** @type {LinkedListNode<T>} */
          var tail = {
            value: null,
            prev: head,
            next: null
          };
          head.next = tail;

          /** @type {LinkedListNode<T>} */
          this.head = head;
          /** @type {LinkedListNode<T>} */
          this.tail = tail;
          this.length = 0;
        }

        /**
         * Adds a new node with the given value to the list.
         *
         * @param {LinkedList<T>} list
         * @param {LinkedListNode<T>} node
         * @param {T} value
         * @returns {LinkedListNode<T>} The added node.
         * @template T
         */
        function addAfter(list, node, value) {
          // assumes that node != list.tail && values.length >= 0
          var next = node.next;
          var newNode = {
            value: value,
            prev: node,
            next: next
          };
          node.next = newNode;
          next.prev = newNode;
          list.length++;
          return newNode;
        }
        /**
         * Removes `count` nodes after the given node. The given node will not be removed.
         *
         * @param {LinkedList<T>} list
         * @param {LinkedListNode<T>} node
         * @param {number} count
         * @template T
         */
        function removeRange(list, node, count) {
          var next = node.next;
          for (var i = 0; i < count && next !== list.tail; i++) {
            next = next.next;
          }
          node.next = next;
          next.prev = node;
          list.length -= i;
        }
        /**
         * @param {LinkedList<T>} list
         * @returns {T[]}
         * @template T
         */
        function toArray(list) {
          var array = [];
          var node = list.head.next;
          while (node !== list.tail) {
            array.push(node.value);
            node = node.next;
          }
          return array;
        }
        if (!_self.document) {
          if (!_self.addEventListener) {
            // in Node.js
            return _;
          }
          if (!_.disableWorkerMessageHandler) {
            // In worker
            _self.addEventListener('message', function (evt) {
              var message = JSON.parse(evt.data);
              var lang = message.language;
              var code = message.code;
              var immediateClose = message.immediateClose;
              _self.postMessage(_.highlight(code, _.languages[lang], lang));
              if (immediateClose) {
                _self.close();
              }
            }, false);
          }
          return _;
        }

        // Get current script and highlight
        var script = _.util.currentScript();
        if (script) {
          _.filename = script.src;
          if (script.hasAttribute('data-manual')) {
            _.manual = true;
          }
        }
        function highlightAutomaticallyCallback() {
          if (!_.manual) {
            _.highlightAll();
          }
        }
        if (!_.manual) {
          // If the document state is "loading", then we'll use DOMContentLoaded.
          // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
          // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
          // might take longer one animation frame to execute which can create a race condition where only some plugins have
          // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
          // See https://github.com/PrismJS/prism/issues/2102
          var readyState = document.readyState;
          if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
            document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
          } else {
            if (window.requestAnimationFrame) {
              window.requestAnimationFrame(highlightAutomaticallyCallback);
            } else {
              window.setTimeout(highlightAutomaticallyCallback, 16);
            }
          }
        }
        return _;
      }(_self);
      if (module.exports) {
        module.exports = Prism;
      }

      // hack for components to work correctly in node.js
      if (typeof commonjsGlobal !== 'undefined') {
        commonjsGlobal.Prism = Prism;
      }

      // some additional documentation/types

      /**
       * The expansion of a simple `RegExp` literal to support additional properties.
       *
       * @typedef GrammarToken
       * @property {RegExp} pattern The regular expression of the token.
       * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
       * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
       * @property {boolean} [greedy=false] Whether the token is greedy.
       * @property {string|string[]} [alias] An optional alias or list of aliases.
       * @property {Grammar} [inside] The nested grammar of this token.
       *
       * The `inside` grammar will be used to tokenize the text value of each token of this kind.
       *
       * This can be used to make nested and even recursive language definitions.
       *
       * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
       * each another.
       * @global
       * @public
       */

      /**
       * @typedef Grammar
       * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
       * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
       * @global
       * @public
       */

      /**
       * A function which will invoked after an element was successfully highlighted.
       *
       * @callback HighlightCallback
       * @param {Element} element The element successfully highlighted.
       * @returns {void}
       * @global
       * @public
       */

      /**
       * @callback HookCallback
       * @param {Object<string, any>} env The environment variables of the hook.
       * @returns {void}
       * @global
       * @public
       */

      /* **********************************************
           Begin prism-markup.js
      ********************************************** */

      Prism.languages.markup = {
        'comment': {
          pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
          greedy: true
        },
        'prolog': {
          pattern: /<\?[\s\S]+?\?>/,
          greedy: true
        },
        'doctype': {
          // https://www.w3.org/TR/xml/#NT-doctypedecl
          pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: true,
          inside: {
            'internal-subset': {
              pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
              lookbehind: true,
              greedy: true,
              inside: null // see below
            },
            'string': {
              pattern: /"[^"]*"|'[^']*'/,
              greedy: true
            },
            'punctuation': /^<!|>$|[[\]]/,
            'doctype-tag': /^DOCTYPE/i,
            'name': /[^\s<>'"]+/
          }
        },
        'cdata': {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          greedy: true
        },
        'tag': {
          pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: true,
          inside: {
            'tag': {
              pattern: /^<\/?[^\s>\/]+/,
              inside: {
                'punctuation': /^<\/?/,
                'namespace': /^[^\s>\/:]+:/
              }
            },
            'special-attr': [],
            'attr-value': {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                'punctuation': [{
                  pattern: /^=/,
                  alias: 'attr-equals'
                }, {
                  pattern: /^(\s*)["']|["']$/,
                  lookbehind: true
                }]
              }
            },
            'punctuation': /\/?>/,
            'attr-name': {
              pattern: /[^\s>\/]+/,
              inside: {
                'namespace': /^[^\s>\/:]+:/
              }
            }
          }
        },
        'entity': [{
          pattern: /&[\da-z]{1,8};/i,
          alias: 'named-entity'
        }, /&#x?[\da-f]{1,8};/i]
      };
      Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity'];
      Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

      // Plugin to make entity title show the real entity, idea by Roman Komarov
      Prism.hooks.add('wrap', function (env) {
        if (env.type === 'entity') {
          env.attributes['title'] = env.content.replace(/&amp;/, '&');
        }
      });
      Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
        /**
         * Adds an inlined language to markup.
         *
         * An example of an inlined language is CSS with `<style>` tags.
         *
         * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
         * case insensitive.
         * @param {string} lang The language key.
         * @example
         * addInlined('style', 'css');
         */
        value: function addInlined(tagName, lang) {
          var includedCdataInside = {};
          includedCdataInside['language-' + lang] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: true,
            inside: Prism.languages[lang]
          };
          includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
          var inside = {
            'included-cdata': {
              pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
              inside: includedCdataInside
            }
          };
          inside['language-' + lang] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[lang]
          };
          var def = {};
          def[tagName] = {
            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
              return tagName;
            }), 'i'),
            lookbehind: true,
            greedy: true,
            inside: inside
          };
          Prism.languages.insertBefore('markup', 'cdata', def);
        }
      });
      Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
        /**
         * Adds an pattern to highlight languages embedded in HTML attributes.
         *
         * An example of an inlined language is CSS with `style` attributes.
         *
         * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
         * case insensitive.
         * @param {string} lang The language key.
         * @example
         * addAttribute('style', 'css');
         */
        value: function value(attrName, lang) {
          Prism.languages.markup.tag.inside['special-attr'].push({
            pattern: RegExp(/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
            lookbehind: true,
            inside: {
              'attr-name': /^[^\s=]+/,
              'attr-value': {
                pattern: /=[\s\S]+/,
                inside: {
                  'value': {
                    pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                    lookbehind: true,
                    alias: [lang, 'language-' + lang],
                    inside: Prism.languages[lang]
                  },
                  'punctuation': [{
                    pattern: /^=/,
                    alias: 'attr-equals'
                  }, /"|'/]
                }
              }
            }
          });
        }
      });
      Prism.languages.html = Prism.languages.markup;
      Prism.languages.mathml = Prism.languages.markup;
      Prism.languages.svg = Prism.languages.markup;
      Prism.languages.xml = Prism.languages.extend('markup', {});
      Prism.languages.ssml = Prism.languages.xml;
      Prism.languages.atom = Prism.languages.xml;
      Prism.languages.rss = Prism.languages.xml;

      /* **********************************************
           Begin prism-css.js
      ********************************************** */

      (function (Prism) {
        var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        Prism.languages.css = {
          'comment': /\/\*[\s\S]*?\*\//,
          'atrule': {
            pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + string.source + ')*?' + /(?:;|(?=\s*\{))/.source),
            inside: {
              'rule': /^@[\w-]+/,
              'selector-function-argument': {
                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: true,
                alias: 'selector'
              },
              'keyword': {
                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                lookbehind: true
              }
              // See rest below
            }
          },
          'url': {
            // https://drafts.csswg.org/css-values-3/#urls
            pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
            greedy: true,
            inside: {
              'function': /^url/i,
              'punctuation': /^\(|\)$/,
              'string': {
                pattern: RegExp('^' + string.source + '$'),
                alias: 'url'
              }
            }
          },
          'selector': {
            pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
            lookbehind: true
          },
          'string': {
            pattern: string,
            greedy: true
          },
          'property': {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: true
          },
          'important': /!important\b/i,
          'function': {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: true
          },
          'punctuation': /[(){};:,]/
        };
        Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
        var markup = Prism.languages.markup;
        if (markup) {
          markup.tag.addInlined('style', 'css');
          markup.tag.addAttribute('style', 'css');
        }
      })(Prism);

      /* **********************************************
           Begin prism-clike.js
      ********************************************** */

      Prism.languages.clike = {
        'comment': [{
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: true,
          greedy: true
        }, {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: true,
          greedy: true
        }],
        'string': {
          pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        'class-name': {
          pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
          lookbehind: true,
          inside: {
            'punctuation': /[.\\]/
          }
        },
        'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        'boolean': /\b(?:false|true)\b/,
        'function': /\b\w+(?=\()/,
        'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        'punctuation': /[{}[\];(),.:]/
      };

      /* **********************************************
           Begin prism-javascript.js
      ********************************************** */

      Prism.languages.javascript = Prism.languages.extend('clike', {
        'class-name': [Prism.languages.clike['class-name'], {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: true
        }],
        'keyword': [{
          pattern: /((?:^|\})\s*)catch\b/,
          lookbehind: true
        }, {
          pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: true
        }],
        // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
        'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        'number': {
          pattern: RegExp(/(^|[^\w$])/.source + '(?:' + (
          // constant
          /NaN|Infinity/.source + '|' +
          // binary integer
          /0[bB][01]+(?:_[01]+)*n?/.source + '|' +
          // octal integer
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source + '|' +
          // hexadecimal integer
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + '|' +
          // decimal bigint
          /\d+(?:_\d+)*n/.source + '|' +
          // decimal number (integer or float) but no bigint
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ')' + /(?![\w$])/.source),
          lookbehind: true
        },
        'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
      });
      Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
      Prism.languages.insertBefore('javascript', 'keyword', {
        'regex': {
          pattern: RegExp(
          // lookbehind
          // eslint-disable-next-line regexp/no-dupe-characters-character-class
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
          // Regex pattern:
          // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
          // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
          // with the only syntax, so we have to define 2 different regex patterns.
          /\//.source + '(?:' + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + '|' +
          // `v` flag syntax. This supports 3 levels of nested character classes.
          /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ')' +
          // lookahead
          /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
          lookbehind: true,
          greedy: true,
          inside: {
            'regex-source': {
              pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
              lookbehind: true,
              alias: 'language-regex',
              inside: Prism.languages.regex
            },
            'regex-delimiter': /^\/|\/$/,
            'regex-flags': /^[a-z]+$/
          }
        },
        // This must be declared before keyword because we use "function" inside the look-forward
        'function-variable': {
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
          alias: 'function'
        },
        'parameter': [{
          pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: true,
          inside: Prism.languages.javascript
        }, {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: true,
          inside: Prism.languages.javascript
        }, {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: true,
          inside: Prism.languages.javascript
        }, {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: true,
          inside: Prism.languages.javascript
        }],
        'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
      });
      Prism.languages.insertBefore('javascript', 'string', {
        'hashbang': {
          pattern: /^#!.*/,
          greedy: true,
          alias: 'comment'
        },
        'template-string': {
          pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
          greedy: true,
          inside: {
            'template-punctuation': {
              pattern: /^`|`$/,
              alias: 'string'
            },
            'interpolation': {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
              lookbehind: true,
              inside: {
                'interpolation-punctuation': {
                  pattern: /^\$\{|\}$/,
                  alias: 'punctuation'
                },
                rest: Prism.languages.javascript
              }
            },
            'string': /[\s\S]+/
          }
        },
        'string-property': {
          pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
          lookbehind: true,
          greedy: true,
          alias: 'property'
        }
      });
      Prism.languages.insertBefore('javascript', 'operator', {
        'literal-property': {
          pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
          lookbehind: true,
          alias: 'property'
        }
      });
      if (Prism.languages.markup) {
        Prism.languages.markup.tag.addInlined('script', 'javascript');

        // add attribute support for all DOM events.
        // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
        Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript');
      }
      Prism.languages.js = Prism.languages.javascript;

      /* **********************************************
           Begin prism-file-highlight.js
      ********************************************** */

      (function () {
        if (typeof Prism === 'undefined' || typeof document === 'undefined') {
          return;
        }

        // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
        if (!Element.prototype.matches) {
          Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        }
        var LOADING_MESSAGE = 'Loading…';
        var FAILURE_MESSAGE = function FAILURE_MESSAGE(status, message) {
          return '✖ Error ' + status + ' while fetching file: ' + message;
        };
        var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';
        var EXTENSIONS = {
          'js': 'javascript',
          'py': 'python',
          'rb': 'ruby',
          'ps1': 'powershell',
          'psm1': 'powershell',
          'sh': 'bash',
          'bat': 'batch',
          'h': 'c',
          'tex': 'latex'
        };
        var STATUS_ATTR = 'data-src-status';
        var STATUS_LOADING = 'loading';
        var STATUS_LOADED = 'loaded';
        var STATUS_FAILED = 'failed';
        var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])' + ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

        /**
         * Loads the given file.
         *
         * @param {string} src The URL or path of the source file to load.
         * @param {(result: string) => void} success
         * @param {(reason: string) => void} error
         */
        function loadFile(src, success, error) {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', src, true);
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              if (xhr.status < 400 && xhr.responseText) {
                success(xhr.responseText);
              } else {
                if (xhr.status >= 400) {
                  error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
                } else {
                  error(FAILURE_EMPTY_MESSAGE);
                }
              }
            }
          };
          xhr.send(null);
        }

        /**
         * Parses the given range.
         *
         * This returns a range with inclusive ends.
         *
         * @param {string | null | undefined} range
         * @returns {[number, number | undefined] | undefined}
         */
        function parseRange(range) {
          var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || '');
          if (m) {
            var start = Number(m[1]);
            var comma = m[2];
            var end = m[3];
            if (!comma) {
              return [start, start];
            }
            if (!end) {
              return [start, undefined];
            }
            return [start, Number(end)];
          }
          return undefined;
        }
        Prism.hooks.add('before-highlightall', function (env) {
          env.selector += ', ' + SELECTOR;
        });
        Prism.hooks.add('before-sanity-check', function (env) {
          var pre = /** @type {HTMLPreElement} */env.element;
          if (pre.matches(SELECTOR)) {
            env.code = ''; // fast-path the whole thing and go to complete

            pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

            // add code element with loading message
            var code = pre.appendChild(document.createElement('CODE'));
            code.textContent = LOADING_MESSAGE;
            var src = pre.getAttribute('data-src');
            var language = env.language;
            if (language === 'none') {
              // the language might be 'none' because there is no language set;
              // in this case, we want to use the extension as the language
              var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
              language = EXTENSIONS[extension] || extension;
            }

            // set language classes
            Prism.util.setLanguage(code, language);
            Prism.util.setLanguage(pre, language);

            // preload the language
            var autoloader = Prism.plugins.autoloader;
            if (autoloader) {
              autoloader.loadLanguages(language);
            }

            // load file
            loadFile(src, function (text) {
              // mark as loaded
              pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

              // handle data-range
              var range = parseRange(pre.getAttribute('data-range'));
              if (range) {
                var lines = text.split(/\r\n?|\n/g);

                // the range is one-based and inclusive on both ends
                var start = range[0];
                var end = range[1] == null ? lines.length : range[1];
                if (start < 0) {
                  start += lines.length;
                }
                start = Math.max(0, Math.min(start - 1, lines.length));
                if (end < 0) {
                  end += lines.length;
                }
                end = Math.max(0, Math.min(end, lines.length));
                text = lines.slice(start, end).join('\n');

                // add data-start for line numbers
                if (!pre.hasAttribute('data-start')) {
                  pre.setAttribute('data-start', String(start + 1));
                }
              }

              // highlight code
              code.textContent = text;
              Prism.highlightElement(code);
            }, function (error) {
              // mark as failed
              pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
              code.textContent = error;
            });
          }
        });
        Prism.plugins.fileHighlight = {
          /**
           * Executes the File Highlight plugin for all matching `pre` elements under the given container.
           *
           * Note: Elements which are already loaded or currently loading will not be touched by this method.
           *
           * @param {ParentNode} [container=document]
           */
          highlight: function highlight(container) {
            var elements = (container || document).querySelectorAll(SELECTOR);
            for (var i = 0, element; element = elements[i++];) {
              Prism.highlightElement(element);
            }
          }
        };
        var logged = false;
        /** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
        Prism.fileHighlight = function () {
          if (!logged) {
            console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
            logged = true;
          }
          Prism.plugins.fileHighlight.highlight.apply(this, arguments);
        };
      })();
    });
    (function (Prism) {
      /**
       * Returns the placeholder for the given language id and index.
       *
       * @param {string} language
       * @param {string|number} index
       * @returns {string}
       */
      function getPlaceholder(language, index) {
        return '___' + language.toUpperCase() + index + '___';
      }
      Object.defineProperties(Prism.languages['markup-templating'] = {}, {
        buildPlaceholders: {
          /**
           * Tokenize all inline templating expressions matching `placeholderPattern`.
           *
           * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
           * `true` will be replaced.
           *
           * @param {object} env The environment of the `before-tokenize` hook.
           * @param {string} language The language id.
           * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
           * @param {(match: string) => boolean} [replaceFilter]
           */
          value: function value(env, language, placeholderPattern, replaceFilter) {
            if (env.language !== language) {
              return;
            }
            var tokenStack = env.tokenStack = [];
            env.code = env.code.replace(placeholderPattern, function (match) {
              if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
                return match;
              }
              var i = tokenStack.length;
              var placeholder;

              // Check for existing strings
              while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
                ++i;
              }

              // Create a sparse array
              tokenStack[i] = match;
              return placeholder;
            });

            // Switch the grammar to markup
            env.grammar = Prism.languages.markup;
          }
        },
        tokenizePlaceholders: {
          /**
           * Replace placeholders with proper tokens after tokenizing.
           *
           * @param {object} env The environment of the `after-tokenize` hook.
           * @param {string} language The language id.
           */
          value: function value(env, language) {
            if (env.language !== language || !env.tokenStack) {
              return;
            }

            // Switch the grammar back
            env.grammar = Prism.languages[language];
            var j = 0;
            var keys = Object.keys(env.tokenStack);
            function walkTokens(tokens) {
              for (var i = 0; i < tokens.length; i++) {
                // all placeholders are replaced already
                if (j >= keys.length) {
                  break;
                }
                var token = tokens[i];
                if (typeof token === 'string' || token.content && typeof token.content === 'string') {
                  var k = keys[j];
                  var t = env.tokenStack[k];
                  var s = typeof token === 'string' ? token : token.content;
                  var placeholder = getPlaceholder(language, k);
                  var index = s.indexOf(placeholder);
                  if (index > -1) {
                    ++j;
                    var before = s.substring(0, index);
                    var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
                    var after = s.substring(index + placeholder.length);
                    var replacement = [];
                    if (before) {
                      replacement.push.apply(replacement, walkTokens([before]));
                    }
                    replacement.push(middle);
                    if (after) {
                      replacement.push.apply(replacement, walkTokens([after]));
                    }
                    if (typeof token === 'string') {
                      tokens.splice.apply(tokens, [i, 1].concat(replacement));
                    } else {
                      token.content = replacement;
                    }
                  }
                } else if (token.content /* && typeof token.content !== 'string' */) {
                  walkTokens(token.content);
                }
              }
              return tokens;
            }
            walkTokens(env.tokens);
          }
        }
      });
    })(Prism);
    var highlightCodeCompiler = function highlightCodeCompiler(ref) {
      var renderer = ref.renderer;
      return renderer.code = function (code, lang) {
        if (lang === void 0) lang = 'markup';
        var langOrMarkup = prism.languages[lang] || prism.languages.markup;
        var text = prism.highlight(code.replace(/@DOCSIFY_QM@/g, '`'), langOrMarkup, lang);
        return "<pre v-pre data-lang=\"" + lang + "\"><code class=\"lang-" + lang + "\">" + text + "</code></pre>";
      };
    };
    var paragraphCompiler = function paragraphCompiler(ref) {
      var renderer = ref.renderer;
      return renderer.paragraph = function (text) {
        var result;
        if (/^!&gt;/.test(text)) {
          result = helper('tip', text);
        } else if (/^\?&gt;/.test(text)) {
          result = helper('warn', text);
        } else {
          result = "<p>" + text + "</p>";
        }
        return result;
      };
    };
    var taskListCompiler = function taskListCompiler(ref) {
      var renderer = ref.renderer;
      return renderer.list = function (body, ordered, start) {
        var isTaskList = /<li class="task-list-item">/.test(body.split('class="task-list"')[0]);
        var isStartReq = start && start > 1;
        var tag = ordered ? 'ol' : 'ul';
        var tagAttrs = [isTaskList ? 'class="task-list"' : '', isStartReq ? "start=\"" + start + "\"" : ''].join(' ').trim();
        return "<" + tag + " " + tagAttrs + ">" + body + "</" + tag + ">";
      };
    };
    var taskListItemCompiler = function taskListItemCompiler(ref) {
      var renderer = ref.renderer;
      return renderer.listitem = function (text) {
        var isTaskItem = /^(<input.*type="checkbox"[^>]*>)/.test(text);
        var html = isTaskItem ? "<li class=\"task-list-item\"><label>" + text + "</label></li>" : "<li>" + text + "</li>";
        return html;
      };
    };
    var linkCompiler = function linkCompiler(ref) {
      var renderer = ref.renderer;
      var router = ref.router;
      var linkTarget = ref.linkTarget;
      var linkRel = ref.linkRel;
      var compilerClass = ref.compilerClass;
      return renderer.link = function (href, title, text) {
        if (title === void 0) title = '';
        var attrs = [];
        var ref = getAndRemoveConfig(title);
        var str = ref.str;
        var config = ref.config;
        linkTarget = config.target || linkTarget;
        linkRel = linkTarget === '_blank' ? compilerClass.config.externalLinkRel || 'noopener' : '';
        title = str;
        if (!isAbsolutePath(href) && !compilerClass._matchNotCompileLink(href) && !config.ignore) {
          if (href === compilerClass.config.homepage) {
            href = 'README';
          }
          href = router.toURL(href, null, router.getCurrentPath());
        } else {
          if (!isAbsolutePath(href) && href.slice(0, 2) === './') {
            href = document.URL.replace(/\/(?!.*\/).*/, '/').replace('#/./', '') + href;
          }
          attrs.push(href.indexOf('mailto:') === 0 ? '' : "target=\"" + linkTarget + "\"");
          attrs.push(href.indexOf('mailto:') === 0 ? '' : linkRel !== '' ? " rel=\"" + linkRel + "\"" : '');
        }
        if (config.disabled) {
          attrs.push('disabled');
          href = 'javascript:void(0)';
        }
        if (config.class) {
          attrs.push("class=\"" + config.class + "\"");
        }
        if (config.id) {
          attrs.push("id=\"" + config.id + "\"");
        }
        if (title) {
          attrs.push("title=\"" + title + "\"");
        }
        return "<a href=\"" + href + "\" " + attrs.join(' ') + ">" + text + "</a>";
      };
    };
    var cachedLinks = {};
    var compileMedia = {
      markdown: function markdown(url) {
        return {
          url: url
        };
      },
      mermaid: function mermaid(url) {
        return {
          url: url
        };
      },
      iframe: function iframe(url, title) {
        return {
          html: "<iframe src=\"" + url + "\" " + (title || 'width=100% height=400') + "></iframe>"
        };
      },
      video: function video(url, title) {
        return {
          html: "<video src=\"" + url + "\" " + (title || 'controls') + ">Not Support</video>"
        };
      },
      audio: function audio(url, title) {
        return {
          html: "<audio src=\"" + url + "\" " + (title || 'controls') + ">Not Support</audio>"
        };
      },
      code: function code(url, title) {
        var lang = url.match(/\.(\w+)$/);
        lang = title || lang && lang[1];
        if (lang === 'md') {
          lang = 'markdown';
        }
        return {
          url: url,
          lang: lang
        };
      }
    };
    var Compiler = function Compiler(config, router) {
      var this$1 = this;
      this.config = config;
      this.router = router;
      this.cacheTree = {};
      this.toc = [];
      this.cacheTOC = {};
      this.linkTarget = config.externalLinkTarget || '_blank';
      this.linkRel = this.linkTarget === '_blank' ? config.externalLinkRel || 'noopener' : '';
      this.contentBase = router.getBasePath();
      var renderer = this._initRenderer();
      this.heading = renderer.heading;
      var compile;
      var mdConf = config.markdown || {};
      if (isFn(mdConf)) {
        compile = mdConf(marked_1, renderer);
      } else {
        marked_1.setOptions(merge(mdConf, {
          renderer: merge(renderer, mdConf.renderer)
        }));
        compile = marked_1;
      }
      this._marked = compile;
      this.compile = function (text) {
        var isCached = true;
        // eslint-disable-next-line no-unused-vars
        var result = cached(function (_) {
          isCached = false;
          var html = '';
          if (!text) {
            return text;
          }
          if (isPrimitive(text)) {
            html = compile(text);
          } else {
            html = compile.parser(text);
          }
          html = config.noEmoji ? html : emojify(html, config.nativeEmoji);
          slugify.clear();
          return html;
        })(text);
        var curFileName = this$1.router.parse().file;
        if (isCached) {
          this$1.toc = this$1.cacheTOC[curFileName];
        } else {
          this$1.cacheTOC[curFileName] = [].concat(this$1.toc);
        }
        return result;
      };
    };

    /**
     * Pulls content from file and renders inline on the page as a embedded item.
     *
     * This allows you to embed different file types on the returned
     * page.
     * The basic format is:
     * ```
     * [filename](_media/example.md ':include')
     * ```
     *
     * @param {string} href The href to the file to embed in the page.
     * @param {string} titleTitle of the link used to make the embed.
     *
     * @return {type} Return value description.
     */
    Compiler.prototype.compileEmbed = function compileEmbed(href, title) {
      var ref = getAndRemoveConfig(title);
      var str = ref.str;
      var config = ref.config;
      var embed;
      title = str;
      if (config.include) {
        if (!isAbsolutePath(href)) {
          href = getPath(this.contentBase, getParentPath(this.router.getCurrentPath()), href);
        }
        var media;
        if (config.type && (media = compileMedia[config.type])) {
          embed = media.call(this, href, title);
          embed.type = config.type;
        } else {
          var type = 'code';
          if (/\.(md|markdown)/.test(href)) {
            type = 'markdown';
          } else if (/\.mmd/.test(href)) {
            type = 'mermaid';
          } else if (/\.html?/.test(href)) {
            type = 'iframe';
          } else if (/\.(mp4|ogg)/.test(href)) {
            type = 'video';
          } else if (/\.mp3/.test(href)) {
            type = 'audio';
          }
          embed = compileMedia[type].call(this, href, title);
          embed.type = type;
        }
        embed.fragment = config.fragment;
        return embed;
      }
    };
    Compiler.prototype._matchNotCompileLink = function _matchNotCompileLink(link) {
      var links = this.config.noCompileLinks || [];
      for (var i = 0; i < links.length; i++) {
        var n = links[i];
        var re = cachedLinks[n] || (cachedLinks[n] = new RegExp("^" + n + "$"));
        if (re.test(link)) {
          return link;
        }
      }
    };
    Compiler.prototype._initRenderer = function _initRenderer() {
      var renderer = new marked_1.Renderer();
      var ref = this;
      var linkTarget = ref.linkTarget;
      var linkRel = ref.linkRel;
      var router = ref.router;
      var contentBase = ref.contentBase;
      var _self = this;
      var origin = {};

      /**
       * Render anchor tag
       * @link https://github.com/markedjs/marked#overriding-renderer-methods
       * @param {String} text Text content
       * @param {Number} level Type of heading (h<level> tag)
       * @returns {String} Heading element
       */
      origin.heading = renderer.heading = function (text, level) {
        var ref = getAndRemoveConfig(text);
        var str = ref.str;
        var config = ref.config;
        var nextToc = {
          level: level,
          title: removeAtag(str)
        };
        if (/<!-- {docsify-ignore} -->/g.test(str)) {
          str = str.replace('<!-- {docsify-ignore} -->', '');
          nextToc.title = removeAtag(str);
          nextToc.ignoreSubHeading = true;
        }
        if (/{docsify-ignore}/g.test(str)) {
          str = str.replace('{docsify-ignore}', '');
          nextToc.title = removeAtag(str);
          nextToc.ignoreSubHeading = true;
        }
        if (/<!-- {docsify-ignore-all} -->/g.test(str)) {
          str = str.replace('<!-- {docsify-ignore-all} -->', '');
          nextToc.title = removeAtag(str);
          nextToc.ignoreAllSubs = true;
        }
        if (/{docsify-ignore-all}/g.test(str)) {
          str = str.replace('{docsify-ignore-all}', '');
          nextToc.title = removeAtag(str);
          nextToc.ignoreAllSubs = true;
        }
        var slug = slugify(config.id || str);
        var url = router.toURL(router.getCurrentPath(), {
          id: slug
        });
        nextToc.slug = url;
        _self.toc.push(nextToc);
        return "<h" + level + " id=\"" + slug + "\"><a href=\"" + url + "\" data-id=\"" + slug + "\" class=\"anchor\"><span>" + str + "</span></a></h" + level + ">";
      };
      origin.code = highlightCodeCompiler({
        renderer: renderer
      });
      origin.link = linkCompiler({
        renderer: renderer,
        router: router,
        linkTarget: linkTarget,
        linkRel: linkRel,
        compilerClass: _self
      });
      origin.paragraph = paragraphCompiler({
        renderer: renderer
      });
      origin.image = imageCompiler({
        renderer: renderer,
        contentBase: contentBase,
        router: router
      });
      origin.list = taskListCompiler({
        renderer: renderer
      });
      origin.listitem = taskListItemCompiler({
        renderer: renderer
      });
      renderer.origin = origin;
      return renderer;
    };

    /**
     * Compile sidebar
     * @param {String} text Text content
     * @param {Number} level Type of heading (h<level> tag)
     * @returns {String} Sidebar element
     */
    Compiler.prototype.sidebar = function sidebar(text, level) {
      var ref = this;
      var toc = ref.toc;
      var currentPath = this.router.getCurrentPath();
      var html = '';
      if (text) {
        html = this.compile(text);
      } else {
        for (var i = 0; i < toc.length; i++) {
          if (toc[i].ignoreSubHeading) {
            var deletedHeaderLevel = toc[i].level;
            toc.splice(i, 1);
            // Remove headers who are under current header
            for (var j = i; j < toc.length && deletedHeaderLevel < toc[j].level; j++) {
              toc.splice(j, 1) && j-- && i++;
            }
            i--;
          }
        }
        var tree$1 = this.cacheTree[currentPath] || genTree(toc, level);
        html = tree(tree$1, '<ul>{inner}</ul>');
        this.cacheTree[currentPath] = tree$1;
      }
      return html;
    };
    Compiler.prototype.genTree = genTree;
    Compiler.prototype.tree = tree;

    /**
     * Compile sub sidebar
     * @param {Number} level Type of heading (h<level> tag)
     * @returns {String} Sub-sidebar element
     */
    Compiler.prototype.subSidebar = function subSidebar(level) {
      if (!level) {
        this.toc = [];
        return;
      }
      var currentPath = this.router.getCurrentPath();
      var ref = this;
      var cacheTree = ref.cacheTree;
      var toc = ref.toc;
      toc[0] && toc[0].ignoreAllSubs && toc.splice(0);
      toc[0] && toc[0].level === 1 && toc.shift();
      for (var i = 0; i < toc.length; i++) {
        toc[i].ignoreSubHeading && toc.splice(i, 1) && i--;
      }
      var tree$1 = cacheTree[currentPath] || genTree(toc, level);
      cacheTree[currentPath] = tree$1;
      this.toc = [];
      return tree(tree$1);
    };
    Compiler.prototype.header = function header(text, level) {
      return this.heading(text, level);
    };
    Compiler.prototype.article = function article(text) {
      return this.compile(text);
    };

    /**
     * Compile cover page
     * @param {Text} text Text content
     * @returns {String} Cover page
     */
    Compiler.prototype.cover = function cover(text) {
      var cacheToc = this.toc.slice();
      var html = this.compile(text);
      this.toc = cacheToc.slice();
      return html;
    };
    var minIndent = function minIndent(string) {
      var match = string.match(/^[ \t]*(?=\S)/gm);
      if (!match) {
        return 0;
      }
      return match.reduce(function (r, a) {
        return Math.min(r, a.length);
      }, Infinity);
    };
    var stripIndent = function stripIndent(string) {
      var indent = minIndent(string);
      if (indent === 0) {
        return string;
      }
      var regex = new RegExp("^[ \\t]{" + indent + "}", 'gm');
      return string.replace(regex, '');
    };
    var cached$2 = {};
    function walkFetchEmbed(ref, cb) {
      var embedTokens = ref.embedTokens;
      var compile = ref.compile;
      var fetch = ref.fetch;
      var token;
      var step = 0;
      var count = 1;
      if (!embedTokens.length) {
        return cb({});
      }
      while (token = embedTokens[step++]) {
        // eslint-disable-next-line no-shadow
        var next = function (token) {
          return function (text) {
            var embedToken;
            if (text) {
              if (token.embed.type === 'markdown') {
                var path = token.embed.url.split('/');
                path.pop();
                path = path.join('/');
                // Resolves relative links to absolute
                text = text.replace(/\[([^[\]]+)\]\(([^)]+)\)/g, function (x) {
                  var linkBeginIndex = x.indexOf('(');
                  if (x.slice(linkBeginIndex, linkBeginIndex + 2) === '(.') {
                    return x.substring(0, linkBeginIndex) + "(" + window.location.protocol + "//" + window.location.host + path + "/" + x.substring(linkBeginIndex + 1, x.length - 1) + ')';
                  }
                  return x;
                });

                // This may contain YAML front matter and will need to be stripped.
                var frontMatterInstalled = ($docsify.frontMatter || {}).installed || false;
                if (frontMatterInstalled === true) {
                  text = $docsify.frontMatter.parseMarkdown(text);
                }
                embedToken = compile.lexer(text);
              } else if (token.embed.type === 'code') {
                if (token.embed.fragment) {
                  var fragment = token.embed.fragment;
                  var pattern = new RegExp("(?:###|\\/\\/\\/)\\s*\\[" + fragment + "\\]([\\s\\S]*)(?:###|\\/\\/\\/)\\s*\\[" + fragment + "\\]");
                  text = stripIndent((text.match(pattern) || [])[1] || '').trim();
                }
                embedToken = compile.lexer('```' + token.embed.lang + '\n' + text.replace(/`/g, '@DOCSIFY_QM@') + '\n```\n');
              } else if (token.embed.type === 'mermaid') {
                embedToken = [{
                  type: 'html',
                  text: "<div class=\"mermaid\">\n" + text + "\n</div>"
                }];
                embedToken.links = {};
              } else {
                embedToken = [{
                  type: 'html',
                  text: text
                }];
                embedToken.links = {};
              }
            }
            cb({
              token: token,
              embedToken: embedToken
            });
            if (++count >= step) {
              cb({});
            }
          };
        }(token);
        if (token.embed.url) {
          {
            get(token.embed.url).then(next);
          }
        } else {
          next(token.embed.html);
        }
      }
    }
    function prerenderEmbed(ref, done) {
      var compiler = ref.compiler;
      var raw = ref.raw;
      if (raw === void 0) raw = '';
      var fetch = ref.fetch;
      var hit = cached$2[raw];
      if (hit) {
        var copy = hit.slice();
        copy.links = hit.links;
        return done(copy);
      }
      var compile = compiler._marked;
      var tokens = compile.lexer(raw);
      var embedTokens = [];
      var linkRE = compile.Lexer.rules.inline.link;
      var links = tokens.links;
      tokens.forEach(function (token, index) {
        if (token.type === 'paragraph') {
          token.text = token.text.replace(new RegExp(linkRE.source, 'g'), function (src, filename, href, title) {
            var embed = compiler.compileEmbed(href, title);
            if (embed) {
              embedTokens.push({
                index: index,
                embed: embed
              });
            }
            return src;
          });
        }
      });

      // keep track of which tokens have been embedded so far
      // so that we know where to insert the embedded tokens as they
      // are returned
      var moves = [];
      walkFetchEmbed({
        compile: compile,
        embedTokens: embedTokens,
        fetch: fetch
      }, function (ref) {
        var embedToken = ref.embedToken;
        var token = ref.token;
        if (token) {
          // iterate through the array of previously inserted tokens
          // to determine where the current embedded tokens should be inserted
          var index = token.index;
          moves.forEach(function (pos) {
            if (index > pos.start) {
              index += pos.length;
            }
          });
          merge(links, embedToken.links);
          tokens = tokens.slice(0, index).concat(embedToken, tokens.slice(index + 1));
          moves.push({
            start: index,
            length: embedToken.length - 1
          });
        } else {
          cached$2[raw] = tokens.concat();
          tokens.links = cached$2[raw].links = links;
          done(tokens);
        }
      });
    }

    /* eslint-disable no-unused-vars */

    var vueGlobalData;
    function executeScript() {
      var script = findAll('.markdown-section>script').filter(function (s) {
        return !/template/.test(s.type);
      })[0];
      if (!script) {
        return false;
      }
      var code = script.innerText.trim();
      if (!code) {
        return false;
      }
      new Function(code)();
    }
    function formatUpdated(html, updated, fn) {
      updated = typeof fn === 'function' ? fn(updated) : typeof fn === 'string' ? tinydate(fn)(new Date(updated)) : updated;
      return html.replace(/{docsify-updated}/g, updated);
    }
    function renderMain(html) {
      var docsifyConfig = this.config;
      var markdownElm = find('.markdown-section');
      var vueVersion = 'Vue' in window && window.Vue.version && Number(window.Vue.version.charAt(0));
      var isMountedVue = function isMountedVue(elm) {
        var isVue2 = Boolean(elm.__vue__ && elm.__vue__._isVue);
        var isVue3 = Boolean(elm._vnode && elm._vnode.__v_skip);
        return isVue2 || isVue3;
      };
      if (!html) {
        html = '<h1>404 - Not found</h1>';
      }
      if ('Vue' in window) {
        var mountedElms = findAll('.markdown-section > *').filter(function (elm) {
          return isMountedVue(elm);
        });

        // Destroy/unmount existing Vue instances
        for (var i = 0, list = mountedElms; i < list.length; i += 1) {
          var mountedElm = list[i];
          if (vueVersion === 2) {
            mountedElm.__vue__.$destroy();
          } else if (vueVersion === 3) {
            mountedElm.__vue_app__.unmount();
          }
        }
      }
      this._renderTo(markdownElm, html);

      // Render sidebar with the TOC
      !docsifyConfig.loadSidebar && this._renderSidebar();

      // Execute markdown <script>
      if (docsifyConfig.executeScript || 'Vue' in window && docsifyConfig.executeScript !== false) {
        executeScript();
      }

      // Handle Vue content not mounted by markdown <script>
      if ('Vue' in window) {
        var vueMountData = [];
        var vueComponentNames = Object.keys(docsifyConfig.vueComponents || {});

        // Register global vueComponents
        if (vueVersion === 2 && vueComponentNames.length) {
          vueComponentNames.forEach(function (name) {
            var isNotRegistered = !window.Vue.options.components[name];
            if (isNotRegistered) {
              window.Vue.component(name, docsifyConfig.vueComponents[name]);
            }
          });
        }

        // Store global data() return value as shared data object
        if (!vueGlobalData && docsifyConfig.vueGlobalOptions && typeof docsifyConfig.vueGlobalOptions.data === 'function') {
          vueGlobalData = docsifyConfig.vueGlobalOptions.data();
        }

        // vueMounts
        vueMountData.push.apply(vueMountData, Object.keys(docsifyConfig.vueMounts || {}).map(function (cssSelector) {
          return [find(markdownElm, cssSelector), docsifyConfig.vueMounts[cssSelector]];
        }).filter(function (ref) {
          var elm = ref[0];
          var vueConfig = ref[1];
          return elm;
        }));

        // Template syntax, vueComponents, vueGlobalOptions
        if (docsifyConfig.vueGlobalOptions || vueComponentNames.length) {
          var reHasBraces = /{{2}[^{}]*}{2}/;
          // Matches Vue full and shorthand syntax as attributes in HTML tags.
          //
          // Full syntax examples:
          // v-foo, v-foo[bar], v-foo-bar, v-foo:bar-baz.prop
          //
          // Shorthand syntax examples:
          // @foo, @foo.bar, @foo.bar.baz, @[foo], :foo, :[foo]
          //
          // Markup examples:
          // <div v-html>{{ html }}</div>
          // <div v-text="msg"></div>
          // <div v-bind:text-content.prop="text">
          // <button v-on:click="doThis"></button>
          // <button v-on:click.once="doThis"></button>
          // <button v-on:[event]="doThis"></button>
          // <button @click.stop.prevent="doThis">
          // <a :href="url">
          // <a :[key]="url">
          var reHasDirective = /<[^>/]+\s([@:]|v-)[\w-:.[\]]+[=>\s]/;
          vueMountData.push.apply(vueMountData, findAll('.markdown-section > *')
          // Remove duplicates
          .filter(function (elm) {
            return !vueMountData.some(function (ref) {
              var e = ref[0];
              var c = ref[1];
              return e === elm;
            });
          })
          // Detect Vue content
          .filter(function (elm) {
            var isVueMount =
            // is a component
            elm.tagName.toLowerCase() in (docsifyConfig.vueComponents || {}) ||
            // has a component(s)
            elm.querySelector(vueComponentNames.join(',') || null) ||
            // has curly braces
            reHasBraces.test(elm.outerHTML) ||
            // has content directive
            reHasDirective.test(elm.outerHTML);
            return isVueMount;
          }).map(function (elm) {
            // Clone global configuration
            var vueConfig = merge({}, docsifyConfig.vueGlobalOptions || {});

            // Replace vueGlobalOptions data() return value with shared data object.
            // This provides a global store for all Vue instances that receive
            // vueGlobalOptions as their configuration.
            if (vueGlobalData) {
              vueConfig.data = function () {
                return vueGlobalData;
              };
            }
            return [elm, vueConfig];
          }));
        }

        // Mount
        for (var i$1 = 0, list$1 = vueMountData; i$1 < list$1.length; i$1 += 1) {
          var ref = list$1[i$1];
          var mountElm = ref[0];
          var vueConfig = ref[1];
          var isVueAttr = 'data-isvue';
          var isSkipElm =
          // Is an invalid tag
          mountElm.matches('pre, script') ||
          // Is a mounted instance
          isMountedVue(mountElm) ||
          // Has mounted instance(s)
          mountElm.querySelector("[" + isVueAttr + "]");
          if (!isSkipElm) {
            mountElm.setAttribute(isVueAttr, '');
            if (vueVersion === 2) {
              vueConfig.el = undefined;
              new window.Vue(vueConfig).$mount(mountElm);
            } else if (vueVersion === 3) {
              var app = window.Vue.createApp(vueConfig);

              // Register global vueComponents
              vueComponentNames.forEach(function (name) {
                var config = docsifyConfig.vueComponents[name];
                app.component(name, config);
              });
              app.mount(mountElm);
            }
          }
        }
      }
    }
    function renderNameLink(vm) {
      var el = getNode('.app-name-link');
      var nameLink = vm.config.nameLink;
      var path = vm.route.path;
      if (!el) {
        return;
      }
      if (isPrimitive(vm.config.nameLink)) {
        el.setAttribute('href', nameLink);
      } else if (_typeof(nameLink) === 'object') {
        var match = Object.keys(nameLink).filter(function (key) {
          return path.indexOf(key) > -1;
        })[0];
        el.setAttribute('href', nameLink[match]);
      }
    }

    /** @typedef {import('../Docsify').Constructor} Constructor */

    /**
     * @template {!Constructor} T
     * @param {T} Base - The class to extend
     */
    function Render(Base) {
      return /*@__PURE__*/function (Base) {
        function Render() {
          Base.apply(this, arguments);
        }
        if (Base) Render.__proto__ = Base;
        Render.prototype = Object.create(Base && Base.prototype);
        Render.prototype.constructor = Render;
        Render.prototype._renderTo = function _renderTo(el, content, replace) {
          var node = getNode(el);
          if (node) {
            node[replace ? 'outerHTML' : 'innerHTML'] = content;
          }
        };
        Render.prototype._renderSidebar = function _renderSidebar(text) {
          var ref = this.config;
          var maxLevel = ref.maxLevel;
          var subMaxLevel = ref.subMaxLevel;
          var loadSidebar = ref.loadSidebar;
          var hideSidebar = ref.hideSidebar;
          if (hideSidebar) {
            // FIXME : better styling solution
            [document.querySelector('aside.sidebar'), document.querySelector('button.sidebar-toggle')].filter(function (e) {
              return !!e;
            }).forEach(function (node) {
              return node.parentNode.removeChild(node);
            });
            document.querySelector('section.content').style.right = 'unset';
            document.querySelector('section.content').style.left = 'unset';
            document.querySelector('section.content').style.position = 'relative';
            document.querySelector('section.content').style.width = '100%';
            return null;
          }
          this._renderTo('.sidebar-nav', this.compiler.sidebar(text, maxLevel));
          var activeEl = getAndActive(this.router, '.sidebar-nav', true, true);
          if (loadSidebar && activeEl) {
            activeEl.parentNode.innerHTML += this.compiler.subSidebar(subMaxLevel) || '';
          } else {
            // Reset toc
            this.compiler.subSidebar();
          }

          // Bind event
          this._bindEventOnRendered(activeEl);
        };
        Render.prototype._bindEventOnRendered = function _bindEventOnRendered(activeEl) {
          var ref = this.config;
          var autoHeader = ref.autoHeader;
          scrollActiveSidebar(this.router);
          if (autoHeader && activeEl) {
            var main = getNode('#main');
            var firstNode = main.children[0];
            if (firstNode && firstNode.tagName !== 'H1') {
              var h1 = this.compiler.header(activeEl.innerText, 1);
              var wrapper = create('div', h1);
              before(main, wrapper.children[0]);
            }
          }
        };
        Render.prototype._renderNav = function _renderNav(text) {
          text && this._renderTo('nav', this.compiler.compile(text));
          if (this.config.loadNavbar) {
            getAndActive(this.router, 'nav');
          }
        };
        Render.prototype._renderMain = function _renderMain(text, opt, next) {
          var this$1 = this;
          if (opt === void 0) opt = {};
          if (!text) {
            return renderMain.call(this, text);
          }
          this.callHook('beforeEach', text, function (result) {
            var html;
            var callback = function callback() {
              if (opt.updatedAt) {
                html = formatUpdated(html, opt.updatedAt, this$1.config.formatUpdated);
              }
              this$1.callHook('afterEach', html, function (hookData) {
                renderMain.call(this$1, hookData);
                next();
              });
            };
            if (this$1.isHTML) {
              html = this$1.result = text;
              callback();
            } else {
              prerenderEmbed({
                compiler: this$1.compiler,
                raw: result
              }, function (tokens) {
                html = this$1.compiler.compile(tokens);
                callback();
              });
            }
          });
        };
        Render.prototype._renderCover = function _renderCover(text, coverOnly) {
          var el = getNode('.cover');
          toggleClass(getNode('main'), coverOnly ? 'add' : 'remove', 'hidden');
          if (!text) {
            toggleClass(el, 'remove', 'show');
            return;
          }
          toggleClass(el, 'add', 'show');
          var html = this.coverIsHTML ? text : this.compiler.cover(text);
          var m = html.trim().match('<p><img.*?data-origin="(.*?)"[^a]+alt="(.*?)">([^<]*?)</p>$');
          if (m) {
            if (m[2] === 'color') {
              el.style.background = m[1] + (m[3] || '');
            } else {
              var path = m[1];
              toggleClass(el, 'add', 'has-mask');
              if (!isAbsolutePath(m[1])) {
                path = getPath(this.router.getBasePath(), m[1]);
              }
              el.style.backgroundImage = "url(" + path + ")";
              el.style.backgroundSize = 'cover';
              el.style.backgroundPosition = 'center center';
            }
            html = html.replace(m[0], '');
          }
          this._renderTo('.cover-main', html);
          sticky();
        };
        Render.prototype._updateRender = function _updateRender() {
          // Render name link
          renderNameLink(this);
        };
        Render.prototype.initRender = function initRender() {
          var config = this.config;

          // Init markdown compiler
          this.compiler = new Compiler(config, this.router);
          {
            /* eslint-disable-next-line camelcase */
            window.__current_docsify_compiler__ = this.compiler;
          }
          var id = config.el || '#app';
          var navEl = find('nav') || create('nav');
          var el = find(id);
          var html = '';
          var navAppendToTarget = body;
          if (el) {
            if (config.repo) {
              html += corner(config.repo, config.cornerExternalLinkTarget);
            }
            if (config.coverpage) {
              html += cover();
            }
            if (config.logo) {
              var isBase64 = /^data:image/.test(config.logo);
              var isExternal = /(?:http[s]?:)?\/\//.test(config.logo);
              var isRelative = /^\./.test(config.logo);
              if (!isBase64 && !isExternal && !isRelative) {
                config.logo = getPath(this.router.getBasePath(), config.logo);
              }
            }
            html += main(config);
            // Render main app
            this._renderTo(el, html, true);
          } else {
            this.rendered = true;
          }
          if (config.mergeNavbar && isMobile) {
            navAppendToTarget = find('.sidebar');
          } else {
            navEl.classList.add('app-nav');
            if (!config.repo) {
              navEl.classList.add('no-badge');
            }
          }

          // Add nav
          if (config.loadNavbar) {
            before(navAppendToTarget, navEl);
          }
          if (config.themeColor) {
            $.head.appendChild(create('div', theme(config.themeColor)).firstElementChild);
            // Polyfll
            cssVars(config.themeColor);
          }
          this._updateRender();
          toggleClass(body, 'ready');
        };
        return Render;
      }(Base);
    }

    /* eslint-disable no-unused-vars */

    function loadNested(path, qs, file, next, vm, first) {
      path = first ? path : path.replace(/\/$/, '');
      path = getParentPath(path);
      if (!path) {
        return;
      }
      get(vm.router.getFile(path + file) + qs, false, vm.config.requestHeaders).then(next, function (_) {
        return loadNested(path, qs, file, next, vm);
      });
    }

    /** @typedef {import('../Docsify').Constructor} Constructor */

    /**
     * @template {!Constructor} T
     * @param {T} Base - The class to extend
     */
    function Fetch(Base) {
      var last;
      var abort = function abort() {
        return last && last.abort && last.abort();
      };
      var request = function request(url, hasbar, requestHeaders) {
        abort();
        last = get(url, true, requestHeaders);
        return last;
      };
      var get404Path = function get404Path(path, config) {
        var notFoundPage = config.notFoundPage;
        var ext = config.ext;
        var defaultPath = '_404' + (ext || '.md');
        var key;
        var path404;
        switch (_typeof(notFoundPage)) {
          case 'boolean':
            path404 = defaultPath;
            break;
          case 'string':
            path404 = notFoundPage;
            break;
          case 'object':
            key = Object.keys(notFoundPage).sort(function (a, b) {
              return b.length - a.length;
            }).filter(function (k) {
              return path.match(new RegExp('^' + k));
            })[0];
            path404 = key && notFoundPage[key] || defaultPath;
            break;
        }
        return path404;
      };
      return /*@__PURE__*/function (Base) {
        function Fetch() {
          Base.apply(this, arguments);
        }
        if (Base) Fetch.__proto__ = Base;
        Fetch.prototype = Object.create(Base && Base.prototype);
        Fetch.prototype.constructor = Fetch;
        Fetch.prototype._loadSideAndNav = function _loadSideAndNav(path, qs, loadSidebar, cb) {
          var this$1 = this;
          return function () {
            if (!loadSidebar) {
              return cb();
            }
            var fn = function fn(result) {
              this$1._renderSidebar(result);
              cb();
            };

            // Load sidebar
            loadNested(path, qs, loadSidebar, fn, this$1, true);
          };
        };
        Fetch.prototype._fetch = function _fetch(cb) {
          var this$1 = this;
          if (cb === void 0) cb = noop;
          var ref = this.route;
          var query = ref.query;
          var ref$1 = this.route;
          var path = ref$1.path;

          // Prevent loading remote content via URL hash
          // Ex: https://foo.com/#//bar.com/file.md
          if (isExternal(path)) {
            history.replaceState(null, '', '#');
            this.router.normalize();
          } else {
            var qs = stringifyQuery(query, ['id']);
            var ref$2 = this.config;
            var loadNavbar = ref$2.loadNavbar;
            var requestHeaders = ref$2.requestHeaders;
            var loadSidebar = ref$2.loadSidebar;
            // Abort last request

            var file = this.router.getFile(path);
            this.isRemoteUrl = isExternal(file);
            // Current page is html
            this.isHTML = /\.html$/g.test(file);

            // create a handler that should be called if content was fetched successfully
            var contentFetched = function contentFetched(text, opt) {
              this$1._renderMain(text, opt, this$1._loadSideAndNav(path, qs, loadSidebar, cb));
            };

            // and a handler that is called if content failed to fetch
            var contentFailedToFetch = function contentFailedToFetch(_) {
              this$1._fetchFallbackPage(path, qs, cb) || this$1._fetch404(file, qs, cb);
            };

            // attempt to fetch content from a virtual route, and fallback to fetching the actual file
            if (!this.isRemoteUrl) {
              this.matchVirtualRoute(path).then(function (contents) {
                if (typeof contents === 'string') {
                  contentFetched(contents);
                } else {
                  request(file + qs, true, requestHeaders).then(contentFetched, contentFailedToFetch);
                }
              });
            } else {
              // if the requested url is not local, just fetch the file
              request(file + qs, true, requestHeaders).then(contentFetched, contentFailedToFetch);
            }

            // Load nav
            loadNavbar && loadNested(path, qs, loadNavbar, function (text) {
              return this$1._renderNav(text);
            }, this, true);
          }
        };
        Fetch.prototype._fetchCover = function _fetchCover() {
          var this$1 = this;
          var ref = this.config;
          var coverpage = ref.coverpage;
          var requestHeaders = ref.requestHeaders;
          var query = this.route.query;
          var root = getParentPath(this.route.path);
          if (coverpage) {
            var path = null;
            var routePath = this.route.path;
            if (typeof coverpage === 'string') {
              if (routePath === '/') {
                path = coverpage;
              }
            } else if (Array.isArray(coverpage)) {
              path = coverpage.indexOf(routePath) > -1 && '_coverpage';
            } else {
              var cover = coverpage[routePath];
              path = cover === true ? '_coverpage' : cover;
            }
            var coverOnly = Boolean(path) && this.config.onlyCover;
            if (path) {
              path = this.router.getFile(root + path);
              this.coverIsHTML = /\.html$/g.test(path);
              get(path + stringifyQuery(query, ['id']), false, requestHeaders).then(function (text) {
                return this$1._renderCover(text, coverOnly);
              });
            } else {
              this._renderCover(null, coverOnly);
            }
            return coverOnly;
          }
        };
        Fetch.prototype.$fetch = function $fetch(cb, $resetEvents) {
          var this$1 = this;
          if (cb === void 0) cb = noop;
          if ($resetEvents === void 0) $resetEvents = this.$resetEvents.bind(this);
          var done = function done() {
            this$1.callHook('doneEach');
            cb();
          };
          var onlyCover = this._fetchCover();
          if (onlyCover) {
            done();
          } else {
            this._fetch(function () {
              $resetEvents();
              done();
            });
          }
        };
        Fetch.prototype._fetchFallbackPage = function _fetchFallbackPage(path, qs, cb) {
          var this$1 = this;
          if (cb === void 0) cb = noop;
          var ref = this.config;
          var requestHeaders = ref.requestHeaders;
          var fallbackLanguages = ref.fallbackLanguages;
          var loadSidebar = ref.loadSidebar;
          if (!fallbackLanguages) {
            return false;
          }
          var local = path.split('/')[1];
          if (fallbackLanguages.indexOf(local) === -1) {
            return false;
          }
          var newPath = this.router.getFile(path.replace(new RegExp("^/" + local), ''));
          var req = request(newPath + qs, true, requestHeaders);
          req.then(function (text, opt) {
            return this$1._renderMain(text, opt, this$1._loadSideAndNav(path, qs, loadSidebar, cb));
          }, function () {
            return this$1._fetch404(path, qs, cb);
          });
          return true;
        };

        /**
         * Load the 404 page
         * @param {String} path URL to be loaded
         * @param {*} qs TODO: define
         * @param {Function} cb Callback
         * @returns {Boolean} True if the requested page is not found
         * @private
         */
        Fetch.prototype._fetch404 = function _fetch404(path, qs, cb) {
          var this$1 = this;
          if (cb === void 0) cb = noop;
          var ref = this.config;
          var loadSidebar = ref.loadSidebar;
          var requestHeaders = ref.requestHeaders;
          var notFoundPage = ref.notFoundPage;
          var fnLoadSideAndNav = this._loadSideAndNav(path, qs, loadSidebar, cb);
          if (notFoundPage) {
            var path404 = get404Path(path, this.config);
            request(this.router.getFile(path404), true, requestHeaders).then(function (text, opt) {
              return this$1._renderMain(text, opt, fnLoadSideAndNav);
            }, function () {
              return this$1._renderMain(null, {}, fnLoadSideAndNav);
            });
            return true;
          }
          this._renderMain(null, {}, fnLoadSideAndNav);
          return false;
        };
        Fetch.prototype.initFetch = function initFetch() {
          var this$1 = this;
          var ref = this.config;
          var loadSidebar = ref.loadSidebar;

          // Server-Side Rendering
          if (this.rendered) {
            var activeEl = getAndActive(this.router, '.sidebar-nav', true, true);
            if (loadSidebar && activeEl) {
              activeEl.parentNode.innerHTML += window.__SUB_SIDEBAR__;
            }
            this._bindEventOnRendered(activeEl);
            this.$resetEvents();
            this.callHook('doneEach');
            this.callHook('ready');
          } else {
            this.$fetch(function (_) {
              return this$1.callHook('ready');
            });
          }
        };
        return Fetch;
      }(Base);
    }

    /** @typedef {import('../Docsify').Constructor} Constructor */

    /**
     * @template {!Constructor} T
     * @param {T} Base - The class to extend
     */
    function Events(Base) {
      return /*@__PURE__*/function (Base) {
        function Events() {
          Base.apply(this, arguments);
        }
        if (Base) Events.__proto__ = Base;
        Events.prototype = Object.create(Base && Base.prototype);
        Events.prototype.constructor = Events;
        Events.prototype.$resetEvents = function $resetEvents(source) {
          var this$1 = this;
          var ref = this.config;
          var auto2top = ref.auto2top;
          (function () {
            // Rely on the browser's scroll auto-restoration when going back or forward
            if (source === 'history') {
              return;
            }
            // Scroll to ID if specified
            if (this$1.route.query.id) {
              scrollIntoView(this$1.route.path, this$1.route.query.id);
            }
            // Scroll to top if a link was clicked and auto2top is enabled
            if (source === 'navigate') {
              auto2top && scroll2Top(auto2top);
            }
          })();
          if (this.config.loadNavbar) {
            getAndActive(this.router, 'nav');
          }
        };
        Events.prototype.initEvent = function initEvent() {
          // Bind toggle button
          btn('button.sidebar-toggle', this.router);
          collapse('.sidebar', this.router);
          // Bind sticky effect
          if (this.config.coverpage) {
            !isMobile && on('scroll', sticky);
          } else {
            body.classList.add('sticky');
          }
        };
        return Events;
      }(Base);
    }

    /**
     * Adds beginning of input (^) and end of input ($) assertions if needed into a regex string
     * @param {string} matcher the string to match
     * @returns {string}
     */
    function makeExactMatcher(matcher) {
      var matcherWithBeginningOfInput = startsWith(matcher, '^') ? matcher : "^" + matcher;
      var matcherWithBeginningAndEndOfInput = endsWith(matcherWithBeginningOfInput, '$') ? matcherWithBeginningOfInput : matcherWithBeginningOfInput + "$";
      return matcherWithBeginningAndEndOfInput;
    }

    /** @typedef {((value: any) => void) => void} OnNext */
    /** @typedef {(value: any) => void} NextFunction */

    /**
     * Creates a pair of a function and an event emitter.
     * When the function is called, the event emitter calls the given callback with the value that was passed to the function.
     * @returns {[NextFunction, OnNext]}
     */
    function createNextFunction() {
      var storedCb = function storedCb() {
        return null;
      };
      function next(value) {
        storedCb(value);
      }
      function onNext(cb) {
        storedCb = cb;
      }
      return [next, onNext];
    }

    /** @typedef {import('../Docsify').Constructor} Constructor */

    /** @typedef {Record<string, string | VirtualRouteHandler>} VirtualRoutesMap */
    /** @typedef {(route: string, match: RegExpMatchArray | null) => string | void | Promise<string | void> } VirtualRouteHandler */

    /**
     * @template {!Constructor} T
     * @param {T} Base - The class to extend
     */
    function VirtualRoutes(Base) {
      return /*@__PURE__*/function (Base) {
        function VirtualRoutes() {
          Base.apply(this, arguments);
        }
        if (Base) VirtualRoutes.__proto__ = Base;
        VirtualRoutes.prototype = Object.create(Base && Base.prototype);
        VirtualRoutes.prototype.constructor = VirtualRoutes;
        VirtualRoutes.prototype.routes = function routes() {
          return this.config.routes || {};
        };

        /**
         * Attempts to match the given path with a virtual route.
         * @param {string} path the path of the route to match
         * @returns {Promise<string | null>} resolves to string if route was matched, otherwise null
         */
        VirtualRoutes.prototype.matchVirtualRoute = function matchVirtualRoute(path) {
          var virtualRoutes = this.routes();
          var virtualRoutePaths = Object.keys(virtualRoutes);
          var done = function done() {
            return null;
          };

          /**
           * This is a tail recursion that iterates over all the available routes.
           * It can result in one of two ways:
           * 1. Call itself (essentially reviewing the next route)
           * 2. Call the "done" callback with the result (either the contents, or "null" if no match was found)
           */
          function asyncMatchNextRoute() {
            var virtualRoutePath = virtualRoutePaths.shift();
            if (!virtualRoutePath) {
              return done(null);
            }
            var matcher = makeExactMatcher(virtualRoutePath);
            var matched = path.match(matcher);
            if (!matched) {
              return asyncMatchNextRoute();
            }
            var virtualRouteContentOrFn = virtualRoutes[virtualRoutePath];
            if (typeof virtualRouteContentOrFn === 'string') {
              var contents = virtualRouteContentOrFn;
              return done(contents);
            }
            if (typeof virtualRouteContentOrFn === 'function') {
              var fn = virtualRouteContentOrFn;
              var ref = createNextFunction();
              var next = ref[0];
              var onNext = ref[1];
              onNext(function (contents) {
                if (typeof contents === 'string') {
                  return done(contents);
                } else if (contents === false) {
                  return done(null);
                } else {
                  return asyncMatchNextRoute();
                }
              });
              if (fn.length <= 2) {
                var returnedValue = fn(path, matched);
                return next(returnedValue);
              } else {
                return fn(path, matched, next);
              }
            }
            return asyncMatchNextRoute();
          }
          return {
            then: function then(cb) {
              done = cb;
              asyncMatchNextRoute();
            }
          };
        };
        return VirtualRoutes;
      }(Base);
    }
    var util = /*#__PURE__*/Object.freeze({
      __proto__: null,
      cached: cached,
      hyphenate: hyphenate,
      hasOwn: hasOwn,
      merge: merge,
      isPrimitive: isPrimitive,
      noop: noop,
      isFn: isFn,
      isExternal: isExternal,
      inBrowser: inBrowser,
      isMobile: isMobile,
      supportsPushState: supportsPushState,
      parseQuery: parseQuery,
      stringifyQuery: stringifyQuery,
      isAbsolutePath: isAbsolutePath,
      removeParams: removeParams,
      getParentPath: getParentPath,
      cleanPath: cleanPath,
      resolvePath: resolvePath,
      getPath: getPath,
      replaceSlug: replaceSlug
    });

    // TODO This is deprecated, kept for backwards compatibility. Remove in next
    // major release. We'll tell people to get everything from the DOCSIFY global
    // when using the global build, but we'll highly recommend for them to import
    // from the ESM build (f.e. lib/docsify.esm.js and lib/docsify.min.esm.js).
    function initGlobalAPI() {
      window.Docsify = {
        util: util,
        dom: dom,
        get: get,
        slugify: slugify,
        version: '4.13.1'
      };
      window.DocsifyCompiler = Compiler;
      window.marked = marked_1;
      window.Prism = prism;
    }

    /** @typedef {import('../Docsify').Constructor} Constructor */

    /**
     * @template {!Constructor} T
     * @param {T} Base - The class to extend
     */
    function Lifecycle(Base) {
      return /*@__PURE__*/function (Base) {
        function Lifecycle() {
          Base.apply(this, arguments);
        }
        if (Base) Lifecycle.__proto__ = Base;
        Lifecycle.prototype = Object.create(Base && Base.prototype);
        Lifecycle.prototype.constructor = Lifecycle;
        Lifecycle.prototype.initLifecycle = function initLifecycle() {
          var this$1 = this;
          var hooks = ['init', 'mounted', 'beforeEach', 'afterEach', 'doneEach', 'ready'];
          this._hooks = {};
          this._lifecycle = {};
          hooks.forEach(function (hook) {
            var arr = this$1._hooks[hook] = [];
            this$1._lifecycle[hook] = function (fn) {
              return arr.push(fn);
            };
          });
        };
        Lifecycle.prototype.callHook = function callHook(hookName, data, next) {
          if (next === void 0) next = noop;
          var queue = this._hooks[hookName];
          var catchPluginErrors = this.config.catchPluginErrors;
          var step = function step(index) {
            var hookFn = queue[index];
            if (index >= queue.length) {
              next(data);
            } else if (typeof hookFn === 'function') {
              var errTitle = 'Docsify plugin error';
              if (hookFn.length === 2) {
                try {
                  hookFn(data, function (result) {
                    data = result;
                    step(index + 1);
                  });
                } catch (err) {
                  if (catchPluginErrors) {
                    console.error(errTitle, err);
                  } else {
                    throw err;
                  }
                  step(index + 1);
                }
              } else {
                try {
                  var result = hookFn(data);
                  data = result === undefined ? data : result;
                  step(index + 1);
                } catch (err) {
                  if (catchPluginErrors) {
                    console.error(errTitle, err);
                  } else {
                    throw err;
                  }
                  step(index + 1);
                }
              }
            } else {
              step(index + 1);
            }
          };
          step(0);
        };
        return Lifecycle;
      }(Base);
    }

    /** @typedef {new (...args: any[]) => any} Constructor */

    // eslint-disable-next-line new-cap
    var Docsify = /*@__PURE__*/function (superclass) {
      function Docsify() {
        superclass.call(this);
        this.config = config(this);
        this.initLifecycle(); // Init hooks
        this.initPlugin(); // Install plugins
        this.callHook('init');
        this.initRouter(); // Add router
        this.initRender(); // Render base DOM
        this.initEvent(); // Bind events
        this.initFetch(); // Fetch data
        this.callHook('mounted');
      }
      if (superclass) Docsify.__proto__ = superclass;
      Docsify.prototype = Object.create(superclass && superclass.prototype);
      Docsify.prototype.constructor = Docsify;
      Docsify.prototype.initPlugin = function initPlugin() {
        var this$1 = this;
        [].concat(this.config.plugins).forEach(function (fn) {
          try {
            isFn(fn) && fn(this$1._lifecycle, this$1);
          } catch (err) {
            if (this$1.config.catchPluginErrors) {
              var errTitle = 'Docsify plugin error';
              console.error(errTitle, err);
            } else {
              throw err;
            }
          }
        });
      };
      return Docsify;
    }(Fetch(
    // eslint-disable-next-line new-cap
    Events(Render(VirtualRoutes(Router(Lifecycle(Object)))))));

    /**
     * Global API
     */
    initGlobalAPI();

    /**
     * Run Docsify
     */
    // eslint-disable-next-line no-unused-vars
    documentReady(function (_) {
      window._docsify = new Docsify();
    });
  })();

  function macau(raw) {
    var reg = /`{3}<([^`]+)>\n([^`]+)`{3}/g;
    return raw.replace(reg, function (_, c, p) {
      var slot = '';
      var props = '';
      p.split(/\n/).forEach(function (q) {
        var _q$trim$split = q.trim().split(':'),
          _q$trim$split2 = _toArray(_q$trim$split),
          prop = _q$trim$split2[0],
          rest = _q$trim$split2.slice(1);
        var value = rest.join(':');
        if (typeof prop === 'string') {
          if (value) {
            props += " ".concat(prop, "=\"").concat(value, "\"");
          } else {
            slot = prop;
          }
        }
      });
      return "<".concat(c).concat(props, ">").concat(slot, "</").concat(c, ">");
    });
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  		path: basedir,
  		exports: {},
  		require: function (path, base) {
  			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  		}
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var core = createCommonjsModule(function (module, exports) {
  (function (root, factory) {
  	{
  		// CommonJS
  		module.exports = exports = factory();
  	}
  }(commonjsGlobal, function () {

  	/*globals window, global, require*/

  	/**
  	 * CryptoJS core components.
  	 */
  	var CryptoJS = CryptoJS || (function (Math, undefined$1) {

  	    var crypto;

  	    // Native crypto from window (Browser)
  	    if (typeof window !== 'undefined' && window.crypto) {
  	        crypto = window.crypto;
  	    }

  	    // Native crypto in web worker (Browser)
  	    if (typeof self !== 'undefined' && self.crypto) {
  	        crypto = self.crypto;
  	    }

  	    // Native crypto from worker
  	    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
  	        crypto = globalThis.crypto;
  	    }

  	    // Native (experimental IE 11) crypto from window (Browser)
  	    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
  	        crypto = window.msCrypto;
  	    }

  	    // Native crypto from global (NodeJS)
  	    if (!crypto && typeof commonjsGlobal !== 'undefined' && commonjsGlobal.crypto) {
  	        crypto = commonjsGlobal.crypto;
  	    }

  	    // Native crypto import via require (NodeJS)
  	    if (!crypto && typeof commonjsRequire === 'function') {
  	        try {
  	            crypto = require$$0__default['default'];
  	        } catch (err) {}
  	    }

  	    /*
  	     * Cryptographically secure pseudorandom number generator
  	     *
  	     * As Math.random() is cryptographically not safe to use
  	     */
  	    var cryptoSecureRandomInt = function () {
  	        if (crypto) {
  	            // Use getRandomValues method (Browser)
  	            if (typeof crypto.getRandomValues === 'function') {
  	                try {
  	                    return crypto.getRandomValues(new Uint32Array(1))[0];
  	                } catch (err) {}
  	            }

  	            // Use randomBytes method (NodeJS)
  	            if (typeof crypto.randomBytes === 'function') {
  	                try {
  	                    return crypto.randomBytes(4).readInt32LE();
  	                } catch (err) {}
  	            }
  	        }

  	        throw new Error('Native crypto module could not be used to get secure random number.');
  	    };

  	    /*
  	     * Local polyfill of Object.create

  	     */
  	    var create = Object.create || (function () {
  	        function F() {}

  	        return function (obj) {
  	            var subtype;

  	            F.prototype = obj;

  	            subtype = new F();

  	            F.prototype = null;

  	            return subtype;
  	        };
  	    }());

  	    /**
  	     * CryptoJS namespace.
  	     */
  	    var C = {};

  	    /**
  	     * Library namespace.
  	     */
  	    var C_lib = C.lib = {};

  	    /**
  	     * Base object for prototypal inheritance.
  	     */
  	    var Base = C_lib.Base = (function () {


  	        return {
  	            /**
  	             * Creates a new object that inherits from this object.
  	             *
  	             * @param {Object} overrides Properties to copy into the new object.
  	             *
  	             * @return {Object} The new object.
  	             *
  	             * @static
  	             *
  	             * @example
  	             *
  	             *     var MyType = CryptoJS.lib.Base.extend({
  	             *         field: 'value',
  	             *
  	             *         method: function () {
  	             *         }
  	             *     });
  	             */
  	            extend: function (overrides) {
  	                // Spawn
  	                var subtype = create(this);

  	                // Augment
  	                if (overrides) {
  	                    subtype.mixIn(overrides);
  	                }

  	                // Create default initializer
  	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
  	                    subtype.init = function () {
  	                        subtype.$super.init.apply(this, arguments);
  	                    };
  	                }

  	                // Initializer's prototype is the subtype object
  	                subtype.init.prototype = subtype;

  	                // Reference supertype
  	                subtype.$super = this;

  	                return subtype;
  	            },

  	            /**
  	             * Extends this object and runs the init method.
  	             * Arguments to create() will be passed to init().
  	             *
  	             * @return {Object} The new object.
  	             *
  	             * @static
  	             *
  	             * @example
  	             *
  	             *     var instance = MyType.create();
  	             */
  	            create: function () {
  	                var instance = this.extend();
  	                instance.init.apply(instance, arguments);

  	                return instance;
  	            },

  	            /**
  	             * Initializes a newly created object.
  	             * Override this method to add some logic when your objects are created.
  	             *
  	             * @example
  	             *
  	             *     var MyType = CryptoJS.lib.Base.extend({
  	             *         init: function () {
  	             *             // ...
  	             *         }
  	             *     });
  	             */
  	            init: function () {
  	            },

  	            /**
  	             * Copies properties into this object.
  	             *
  	             * @param {Object} properties The properties to mix in.
  	             *
  	             * @example
  	             *
  	             *     MyType.mixIn({
  	             *         field: 'value'
  	             *     });
  	             */
  	            mixIn: function (properties) {
  	                for (var propertyName in properties) {
  	                    if (properties.hasOwnProperty(propertyName)) {
  	                        this[propertyName] = properties[propertyName];
  	                    }
  	                }

  	                // IE won't copy toString using the loop above
  	                if (properties.hasOwnProperty('toString')) {
  	                    this.toString = properties.toString;
  	                }
  	            },

  	            /**
  	             * Creates a copy of this object.
  	             *
  	             * @return {Object} The clone.
  	             *
  	             * @example
  	             *
  	             *     var clone = instance.clone();
  	             */
  	            clone: function () {
  	                return this.init.prototype.extend(this);
  	            }
  	        };
  	    }());

  	    /**
  	     * An array of 32-bit words.
  	     *
  	     * @property {Array} words The array of 32-bit words.
  	     * @property {number} sigBytes The number of significant bytes in this word array.
  	     */
  	    var WordArray = C_lib.WordArray = Base.extend({
  	        /**
  	         * Initializes a newly created word array.
  	         *
  	         * @param {Array} words (Optional) An array of 32-bit words.
  	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
  	         *
  	         * @example
  	         *
  	         *     var wordArray = CryptoJS.lib.WordArray.create();
  	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
  	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
  	         */
  	        init: function (words, sigBytes) {
  	            words = this.words = words || [];

  	            if (sigBytes != undefined$1) {
  	                this.sigBytes = sigBytes;
  	            } else {
  	                this.sigBytes = words.length * 4;
  	            }
  	        },

  	        /**
  	         * Converts this word array to a string.
  	         *
  	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
  	         *
  	         * @return {string} The stringified word array.
  	         *
  	         * @example
  	         *
  	         *     var string = wordArray + '';
  	         *     var string = wordArray.toString();
  	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
  	         */
  	        toString: function (encoder) {
  	            return (encoder || Hex).stringify(this);
  	        },

  	        /**
  	         * Concatenates a word array to this word array.
  	         *
  	         * @param {WordArray} wordArray The word array to append.
  	         *
  	         * @return {WordArray} This word array.
  	         *
  	         * @example
  	         *
  	         *     wordArray1.concat(wordArray2);
  	         */
  	        concat: function (wordArray) {
  	            // Shortcuts
  	            var thisWords = this.words;
  	            var thatWords = wordArray.words;
  	            var thisSigBytes = this.sigBytes;
  	            var thatSigBytes = wordArray.sigBytes;

  	            // Clamp excess bits
  	            this.clamp();

  	            // Concat
  	            if (thisSigBytes % 4) {
  	                // Copy one byte at a time
  	                for (var i = 0; i < thatSigBytes; i++) {
  	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
  	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
  	                }
  	            } else {
  	                // Copy one word at a time
  	                for (var j = 0; j < thatSigBytes; j += 4) {
  	                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
  	                }
  	            }
  	            this.sigBytes += thatSigBytes;

  	            // Chainable
  	            return this;
  	        },

  	        /**
  	         * Removes insignificant bits.
  	         *
  	         * @example
  	         *
  	         *     wordArray.clamp();
  	         */
  	        clamp: function () {
  	            // Shortcuts
  	            var words = this.words;
  	            var sigBytes = this.sigBytes;

  	            // Clamp
  	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
  	            words.length = Math.ceil(sigBytes / 4);
  	        },

  	        /**
  	         * Creates a copy of this word array.
  	         *
  	         * @return {WordArray} The clone.
  	         *
  	         * @example
  	         *
  	         *     var clone = wordArray.clone();
  	         */
  	        clone: function () {
  	            var clone = Base.clone.call(this);
  	            clone.words = this.words.slice(0);

  	            return clone;
  	        },

  	        /**
  	         * Creates a word array filled with random bytes.
  	         *
  	         * @param {number} nBytes The number of random bytes to generate.
  	         *
  	         * @return {WordArray} The random word array.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
  	         */
  	        random: function (nBytes) {
  	            var words = [];

  	            for (var i = 0; i < nBytes; i += 4) {
  	                words.push(cryptoSecureRandomInt());
  	            }

  	            return new WordArray.init(words, nBytes);
  	        }
  	    });

  	    /**
  	     * Encoder namespace.
  	     */
  	    var C_enc = C.enc = {};

  	    /**
  	     * Hex encoding strategy.
  	     */
  	    var Hex = C_enc.Hex = {
  	        /**
  	         * Converts a word array to a hex string.
  	         *
  	         * @param {WordArray} wordArray The word array.
  	         *
  	         * @return {string} The hex string.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
  	         */
  	        stringify: function (wordArray) {
  	            // Shortcuts
  	            var words = wordArray.words;
  	            var sigBytes = wordArray.sigBytes;

  	            // Convert
  	            var hexChars = [];
  	            for (var i = 0; i < sigBytes; i++) {
  	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
  	                hexChars.push((bite >>> 4).toString(16));
  	                hexChars.push((bite & 0x0f).toString(16));
  	            }

  	            return hexChars.join('');
  	        },

  	        /**
  	         * Converts a hex string to a word array.
  	         *
  	         * @param {string} hexStr The hex string.
  	         *
  	         * @return {WordArray} The word array.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
  	         */
  	        parse: function (hexStr) {
  	            // Shortcut
  	            var hexStrLength = hexStr.length;

  	            // Convert
  	            var words = [];
  	            for (var i = 0; i < hexStrLength; i += 2) {
  	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
  	            }

  	            return new WordArray.init(words, hexStrLength / 2);
  	        }
  	    };

  	    /**
  	     * Latin1 encoding strategy.
  	     */
  	    var Latin1 = C_enc.Latin1 = {
  	        /**
  	         * Converts a word array to a Latin1 string.
  	         *
  	         * @param {WordArray} wordArray The word array.
  	         *
  	         * @return {string} The Latin1 string.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
  	         */
  	        stringify: function (wordArray) {
  	            // Shortcuts
  	            var words = wordArray.words;
  	            var sigBytes = wordArray.sigBytes;

  	            // Convert
  	            var latin1Chars = [];
  	            for (var i = 0; i < sigBytes; i++) {
  	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
  	                latin1Chars.push(String.fromCharCode(bite));
  	            }

  	            return latin1Chars.join('');
  	        },

  	        /**
  	         * Converts a Latin1 string to a word array.
  	         *
  	         * @param {string} latin1Str The Latin1 string.
  	         *
  	         * @return {WordArray} The word array.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
  	         */
  	        parse: function (latin1Str) {
  	            // Shortcut
  	            var latin1StrLength = latin1Str.length;

  	            // Convert
  	            var words = [];
  	            for (var i = 0; i < latin1StrLength; i++) {
  	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
  	            }

  	            return new WordArray.init(words, latin1StrLength);
  	        }
  	    };

  	    /**
  	     * UTF-8 encoding strategy.
  	     */
  	    var Utf8 = C_enc.Utf8 = {
  	        /**
  	         * Converts a word array to a UTF-8 string.
  	         *
  	         * @param {WordArray} wordArray The word array.
  	         *
  	         * @return {string} The UTF-8 string.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
  	         */
  	        stringify: function (wordArray) {
  	            try {
  	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
  	            } catch (e) {
  	                throw new Error('Malformed UTF-8 data');
  	            }
  	        },

  	        /**
  	         * Converts a UTF-8 string to a word array.
  	         *
  	         * @param {string} utf8Str The UTF-8 string.
  	         *
  	         * @return {WordArray} The word array.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
  	         */
  	        parse: function (utf8Str) {
  	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  	        }
  	    };

  	    /**
  	     * Abstract buffered block algorithm template.
  	     *
  	     * The property blockSize must be implemented in a concrete subtype.
  	     *
  	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
  	     */
  	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
  	        /**
  	         * Resets this block algorithm's data buffer to its initial state.
  	         *
  	         * @example
  	         *
  	         *     bufferedBlockAlgorithm.reset();
  	         */
  	        reset: function () {
  	            // Initial values
  	            this._data = new WordArray.init();
  	            this._nDataBytes = 0;
  	        },

  	        /**
  	         * Adds new data to this block algorithm's buffer.
  	         *
  	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
  	         *
  	         * @example
  	         *
  	         *     bufferedBlockAlgorithm._append('data');
  	         *     bufferedBlockAlgorithm._append(wordArray);
  	         */
  	        _append: function (data) {
  	            // Convert string to WordArray, else assume WordArray already
  	            if (typeof data == 'string') {
  	                data = Utf8.parse(data);
  	            }

  	            // Append
  	            this._data.concat(data);
  	            this._nDataBytes += data.sigBytes;
  	        },

  	        /**
  	         * Processes available data blocks.
  	         *
  	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
  	         *
  	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
  	         *
  	         * @return {WordArray} The processed data.
  	         *
  	         * @example
  	         *
  	         *     var processedData = bufferedBlockAlgorithm._process();
  	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
  	         */
  	        _process: function (doFlush) {
  	            var processedWords;

  	            // Shortcuts
  	            var data = this._data;
  	            var dataWords = data.words;
  	            var dataSigBytes = data.sigBytes;
  	            var blockSize = this.blockSize;
  	            var blockSizeBytes = blockSize * 4;

  	            // Count blocks ready
  	            var nBlocksReady = dataSigBytes / blockSizeBytes;
  	            if (doFlush) {
  	                // Round up to include partial blocks
  	                nBlocksReady = Math.ceil(nBlocksReady);
  	            } else {
  	                // Round down to include only full blocks,
  	                // less the number of blocks that must remain in the buffer
  	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
  	            }

  	            // Count words ready
  	            var nWordsReady = nBlocksReady * blockSize;

  	            // Count bytes ready
  	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

  	            // Process blocks
  	            if (nWordsReady) {
  	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
  	                    // Perform concrete-algorithm logic
  	                    this._doProcessBlock(dataWords, offset);
  	                }

  	                // Remove processed words
  	                processedWords = dataWords.splice(0, nWordsReady);
  	                data.sigBytes -= nBytesReady;
  	            }

  	            // Return processed words
  	            return new WordArray.init(processedWords, nBytesReady);
  	        },

  	        /**
  	         * Creates a copy of this object.
  	         *
  	         * @return {Object} The clone.
  	         *
  	         * @example
  	         *
  	         *     var clone = bufferedBlockAlgorithm.clone();
  	         */
  	        clone: function () {
  	            var clone = Base.clone.call(this);
  	            clone._data = this._data.clone();

  	            return clone;
  	        },

  	        _minBufferSize: 0
  	    });

  	    /**
  	     * Abstract hasher template.
  	     *
  	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
  	     */
  	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
  	        /**
  	         * Configuration options.
  	         */
  	        cfg: Base.extend(),

  	        /**
  	         * Initializes a newly created hasher.
  	         *
  	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
  	         *
  	         * @example
  	         *
  	         *     var hasher = CryptoJS.algo.SHA256.create();
  	         */
  	        init: function (cfg) {
  	            // Apply config defaults
  	            this.cfg = this.cfg.extend(cfg);

  	            // Set initial values
  	            this.reset();
  	        },

  	        /**
  	         * Resets this hasher to its initial state.
  	         *
  	         * @example
  	         *
  	         *     hasher.reset();
  	         */
  	        reset: function () {
  	            // Reset data buffer
  	            BufferedBlockAlgorithm.reset.call(this);

  	            // Perform concrete-hasher logic
  	            this._doReset();
  	        },

  	        /**
  	         * Updates this hasher with a message.
  	         *
  	         * @param {WordArray|string} messageUpdate The message to append.
  	         *
  	         * @return {Hasher} This hasher.
  	         *
  	         * @example
  	         *
  	         *     hasher.update('message');
  	         *     hasher.update(wordArray);
  	         */
  	        update: function (messageUpdate) {
  	            // Append
  	            this._append(messageUpdate);

  	            // Update the hash
  	            this._process();

  	            // Chainable
  	            return this;
  	        },

  	        /**
  	         * Finalizes the hash computation.
  	         * Note that the finalize operation is effectively a destructive, read-once operation.
  	         *
  	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
  	         *
  	         * @return {WordArray} The hash.
  	         *
  	         * @example
  	         *
  	         *     var hash = hasher.finalize();
  	         *     var hash = hasher.finalize('message');
  	         *     var hash = hasher.finalize(wordArray);
  	         */
  	        finalize: function (messageUpdate) {
  	            // Final message update
  	            if (messageUpdate) {
  	                this._append(messageUpdate);
  	            }

  	            // Perform concrete-hasher logic
  	            var hash = this._doFinalize();

  	            return hash;
  	        },

  	        blockSize: 512/32,

  	        /**
  	         * Creates a shortcut function to a hasher's object interface.
  	         *
  	         * @param {Hasher} hasher The hasher to create a helper for.
  	         *
  	         * @return {Function} The shortcut function.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
  	         */
  	        _createHelper: function (hasher) {
  	            return function (message, cfg) {
  	                return new hasher.init(cfg).finalize(message);
  	            };
  	        },

  	        /**
  	         * Creates a shortcut function to the HMAC's object interface.
  	         *
  	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
  	         *
  	         * @return {Function} The shortcut function.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
  	         */
  	        _createHmacHelper: function (hasher) {
  	            return function (message, key) {
  	                return new C_algo.HMAC.init(hasher, key).finalize(message);
  	            };
  	        }
  	    });

  	    /**
  	     * Algorithm namespace.
  	     */
  	    var C_algo = C.algo = {};

  	    return C;
  	}(Math));


  	return CryptoJS;

  }));
  });

  var x64Core = createCommonjsModule(function (module, exports) {
  (function (root, factory) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function (undefined$1) {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var Base = C_lib.Base;
  	    var X32WordArray = C_lib.WordArray;

  	    /**
  	     * x64 namespace.
  	     */
  	    var C_x64 = C.x64 = {};

  	    /**
  	     * A 64-bit word.
  	     */
  	    var X64Word = C_x64.Word = Base.extend({
  	        /**
  	         * Initializes a newly created 64-bit word.
  	         *
  	         * @param {number} high The high 32 bits.
  	         * @param {number} low The low 32 bits.
  	         *
  	         * @example
  	         *
  	         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
  	         */
  	        init: function (high, low) {
  	            this.high = high;
  	            this.low = low;
  	        }

  	        /**
  	         * Bitwise NOTs this word.
  	         *
  	         * @return {X64Word} A new x64-Word object after negating.
  	         *
  	         * @example
  	         *
  	         *     var negated = x64Word.not();
  	         */
  	        // not: function () {
  	            // var high = ~this.high;
  	            // var low = ~this.low;

  	            // return X64Word.create(high, low);
  	        // },

  	        /**
  	         * Bitwise ANDs this word with the passed word.
  	         *
  	         * @param {X64Word} word The x64-Word to AND with this word.
  	         *
  	         * @return {X64Word} A new x64-Word object after ANDing.
  	         *
  	         * @example
  	         *
  	         *     var anded = x64Word.and(anotherX64Word);
  	         */
  	        // and: function (word) {
  	            // var high = this.high & word.high;
  	            // var low = this.low & word.low;

  	            // return X64Word.create(high, low);
  	        // },

  	        /**
  	         * Bitwise ORs this word with the passed word.
  	         *
  	         * @param {X64Word} word The x64-Word to OR with this word.
  	         *
  	         * @return {X64Word} A new x64-Word object after ORing.
  	         *
  	         * @example
  	         *
  	         *     var ored = x64Word.or(anotherX64Word);
  	         */
  	        // or: function (word) {
  	            // var high = this.high | word.high;
  	            // var low = this.low | word.low;

  	            // return X64Word.create(high, low);
  	        // },

  	        /**
  	         * Bitwise XORs this word with the passed word.
  	         *
  	         * @param {X64Word} word The x64-Word to XOR with this word.
  	         *
  	         * @return {X64Word} A new x64-Word object after XORing.
  	         *
  	         * @example
  	         *
  	         *     var xored = x64Word.xor(anotherX64Word);
  	         */
  	        // xor: function (word) {
  	            // var high = this.high ^ word.high;
  	            // var low = this.low ^ word.low;

  	            // return X64Word.create(high, low);
  	        // },

  	        /**
  	         * Shifts this word n bits to the left.
  	         *
  	         * @param {number} n The number of bits to shift.
  	         *
  	         * @return {X64Word} A new x64-Word object after shifting.
  	         *
  	         * @example
  	         *
  	         *     var shifted = x64Word.shiftL(25);
  	         */
  	        // shiftL: function (n) {
  	            // if (n < 32) {
  	                // var high = (this.high << n) | (this.low >>> (32 - n));
  	                // var low = this.low << n;
  	            // } else {
  	                // var high = this.low << (n - 32);
  	                // var low = 0;
  	            // }

  	            // return X64Word.create(high, low);
  	        // },

  	        /**
  	         * Shifts this word n bits to the right.
  	         *
  	         * @param {number} n The number of bits to shift.
  	         *
  	         * @return {X64Word} A new x64-Word object after shifting.
  	         *
  	         * @example
  	         *
  	         *     var shifted = x64Word.shiftR(7);
  	         */
  	        // shiftR: function (n) {
  	            // if (n < 32) {
  	                // var low = (this.low >>> n) | (this.high << (32 - n));
  	                // var high = this.high >>> n;
  	            // } else {
  	                // var low = this.high >>> (n - 32);
  	                // var high = 0;
  	            // }

  	            // return X64Word.create(high, low);
  	        // },

  	        /**
  	         * Rotates this word n bits to the left.
  	         *
  	         * @param {number} n The number of bits to rotate.
  	         *
  	         * @return {X64Word} A new x64-Word object after rotating.
  	         *
  	         * @example
  	         *
  	         *     var rotated = x64Word.rotL(25);
  	         */
  	        // rotL: function (n) {
  	            // return this.shiftL(n).or(this.shiftR(64 - n));
  	        // },

  	        /**
  	         * Rotates this word n bits to the right.
  	         *
  	         * @param {number} n The number of bits to rotate.
  	         *
  	         * @return {X64Word} A new x64-Word object after rotating.
  	         *
  	         * @example
  	         *
  	         *     var rotated = x64Word.rotR(7);
  	         */
  	        // rotR: function (n) {
  	            // return this.shiftR(n).or(this.shiftL(64 - n));
  	        // },

  	        /**
  	         * Adds this word with the passed word.
  	         *
  	         * @param {X64Word} word The x64-Word to add with this word.
  	         *
  	         * @return {X64Word} A new x64-Word object after adding.
  	         *
  	         * @example
  	         *
  	         *     var added = x64Word.add(anotherX64Word);
  	         */
  	        // add: function (word) {
  	            // var low = (this.low + word.low) | 0;
  	            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
  	            // var high = (this.high + word.high + carry) | 0;

  	            // return X64Word.create(high, low);
  	        // }
  	    });

  	    /**
  	     * An array of 64-bit words.
  	     *
  	     * @property {Array} words The array of CryptoJS.x64.Word objects.
  	     * @property {number} sigBytes The number of significant bytes in this word array.
  	     */
  	    var X64WordArray = C_x64.WordArray = Base.extend({
  	        /**
  	         * Initializes a newly created word array.
  	         *
  	         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
  	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
  	         *
  	         * @example
  	         *
  	         *     var wordArray = CryptoJS.x64.WordArray.create();
  	         *
  	         *     var wordArray = CryptoJS.x64.WordArray.create([
  	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
  	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
  	         *     ]);
  	         *
  	         *     var wordArray = CryptoJS.x64.WordArray.create([
  	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
  	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
  	         *     ], 10);
  	         */
  	        init: function (words, sigBytes) {
  	            words = this.words = words || [];

  	            if (sigBytes != undefined$1) {
  	                this.sigBytes = sigBytes;
  	            } else {
  	                this.sigBytes = words.length * 8;
  	            }
  	        },

  	        /**
  	         * Converts this 64-bit word array to a 32-bit word array.
  	         *
  	         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
  	         *
  	         * @example
  	         *
  	         *     var x32WordArray = x64WordArray.toX32();
  	         */
  	        toX32: function () {
  	            // Shortcuts
  	            var x64Words = this.words;
  	            var x64WordsLength = x64Words.length;

  	            // Convert
  	            var x32Words = [];
  	            for (var i = 0; i < x64WordsLength; i++) {
  	                var x64Word = x64Words[i];
  	                x32Words.push(x64Word.high);
  	                x32Words.push(x64Word.low);
  	            }

  	            return X32WordArray.create(x32Words, this.sigBytes);
  	        },

  	        /**
  	         * Creates a copy of this word array.
  	         *
  	         * @return {X64WordArray} The clone.
  	         *
  	         * @example
  	         *
  	         *     var clone = x64WordArray.clone();
  	         */
  	        clone: function () {
  	            var clone = Base.clone.call(this);

  	            // Clone "words" array
  	            var words = clone.words = this.words.slice(0);

  	            // Clone each X64Word object
  	            var wordsLength = words.length;
  	            for (var i = 0; i < wordsLength; i++) {
  	                words[i] = words[i].clone();
  	            }

  	            return clone;
  	        }
  	    });
  	}());


  	return CryptoJS;

  }));
  });

  var libTypedarrays = createCommonjsModule(function (module, exports) {
  (function (root, factory) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function () {
  	    // Check if typed arrays are supported
  	    if (typeof ArrayBuffer != 'function') {
  	        return;
  	    }

  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var WordArray = C_lib.WordArray;

  	    // Reference original init
  	    var superInit = WordArray.init;

  	    // Augment WordArray.init to handle typed arrays
  	    var subInit = WordArray.init = function (typedArray) {
  	        // Convert buffers to uint8
  	        if (typedArray instanceof ArrayBuffer) {
  	            typedArray = new Uint8Array(typedArray);
  	        }

  	        // Convert other array views to uint8
  	        if (
  	            typedArray instanceof Int8Array ||
  	            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
  	            typedArray instanceof Int16Array ||
  	            typedArray instanceof Uint16Array ||
  	            typedArray instanceof Int32Array ||
  	            typedArray instanceof Uint32Array ||
  	            typedArray instanceof Float32Array ||
  	            typedArray instanceof Float64Array
  	        ) {
  	            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
  	        }

  	        // Handle Uint8Array
  	        if (typedArray instanceof Uint8Array) {
  	            // Shortcut
  	            var typedArrayByteLength = typedArray.byteLength;

  	            // Extract bytes
  	            var words = [];
  	            for (var i = 0; i < typedArrayByteLength; i++) {
  	                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
  	            }

  	            // Initialize this word array
  	            superInit.call(this, words, typedArrayByteLength);
  	        } else {
  	            // Else call normal init
  	            superInit.apply(this, arguments);
  	        }
  	    };

  	    subInit.prototype = WordArray;
  	}());


  	return CryptoJS.lib.WordArray;

  }));
  });

  var encUtf16 = createCommonjsModule(function (module, exports) {
  (function (root, factory) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function () {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var WordArray = C_lib.WordArray;
  	    var C_enc = C.enc;

  	    /**
  	     * UTF-16 BE encoding strategy.
  	     */
  	    var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
  	        /**
  	         * Converts a word array to a UTF-16 BE string.
  	         *
  	         * @param {WordArray} wordArray The word array.
  	         *
  	         * @return {string} The UTF-16 BE string.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
  	         */
  	        stringify: function (wordArray) {
  	            // Shortcuts
  	            var words = wordArray.words;
  	            var sigBytes = wordArray.sigBytes;

  	            // Convert
  	            var utf16Chars = [];
  	            for (var i = 0; i < sigBytes; i += 2) {
  	                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
  	                utf16Chars.push(String.fromCharCode(codePoint));
  	            }

  	            return utf16Chars.join('');
  	        },

  	        /**
  	         * Converts a UTF-16 BE string to a word array.
  	         *
  	         * @param {string} utf16Str The UTF-16 BE string.
  	         *
  	         * @return {WordArray} The word array.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
  	         */
  	        parse: function (utf16Str) {
  	            // Shortcut
  	            var utf16StrLength = utf16Str.length;

  	            // Convert
  	            var words = [];
  	            for (var i = 0; i < utf16StrLength; i++) {
  	                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
  	            }

  	            return WordArray.create(words, utf16StrLength * 2);
  	        }
  	    };

  	    /**
  	     * UTF-16 LE encoding strategy.
  	     */
  	    C_enc.Utf16LE = {
  	        /**
  	         * Converts a word array to a UTF-16 LE string.
  	         *
  	         * @param {WordArray} wordArray The word array.
  	         *
  	         * @return {string} The UTF-16 LE string.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
  	         */
  	        stringify: function (wordArray) {
  	            // Shortcuts
  	            var words = wordArray.words;
  	            var sigBytes = wordArray.sigBytes;

  	            // Convert
  	            var utf16Chars = [];
  	            for (var i = 0; i < sigBytes; i += 2) {
  	                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
  	                utf16Chars.push(String.fromCharCode(codePoint));
  	            }

  	            return utf16Chars.join('');
  	        },

  	        /**
  	         * Converts a UTF-16 LE string to a word array.
  	         *
  	         * @param {string} utf16Str The UTF-16 LE string.
  	         *
  	         * @return {WordArray} The word array.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
  	         */
  	        parse: function (utf16Str) {
  	            // Shortcut
  	            var utf16StrLength = utf16Str.length;

  	            // Convert
  	            var words = [];
  	            for (var i = 0; i < utf16StrLength; i++) {
  	                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
  	            }

  	            return WordArray.create(words, utf16StrLength * 2);
  	        }
  	    };

  	    function swapEndian(word) {
  	        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
  	    }
  	}());


  	return CryptoJS.enc.Utf16;

  }));
  });

  var encBase64 = createCommonjsModule(function (module, exports) {
  (function (root, factory) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function () {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var WordArray = C_lib.WordArray;
  	    var C_enc = C.enc;

  	    /**
  	     * Base64 encoding strategy.
  	     */
  	    var Base64 = C_enc.Base64 = {
  	        /**
  	         * Converts a word array to a Base64 string.
  	         *
  	         * @param {WordArray} wordArray The word array.
  	         *
  	         * @return {string} The Base64 string.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
  	         */
  	        stringify: function (wordArray) {
  	            // Shortcuts
  	            var words = wordArray.words;
  	            var sigBytes = wordArray.sigBytes;
  	            var map = this._map;

  	            // Clamp excess bits
  	            wordArray.clamp();

  	            // Convert
  	            var base64Chars = [];
  	            for (var i = 0; i < sigBytes; i += 3) {
  	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
  	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
  	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

  	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

  	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
  	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
  	                }
  	            }

  	            // Add padding
  	            var paddingChar = map.charAt(64);
  	            if (paddingChar) {
  	                while (base64Chars.length % 4) {
  	                    base64Chars.push(paddingChar);
  	                }
  	            }

  	            return base64Chars.join('');
  	        },

  	        /**
  	         * Converts a Base64 string to a word array.
  	         *
  	         * @param {string} base64Str The Base64 string.
  	         *
  	         * @return {WordArray} The word array.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
  	         */
  	        parse: function (base64Str) {
  	            // Shortcuts
  	            var base64StrLength = base64Str.length;
  	            var map = this._map;
  	            var reverseMap = this._reverseMap;

  	            if (!reverseMap) {
  	                    reverseMap = this._reverseMap = [];
  	                    for (var j = 0; j < map.length; j++) {
  	                        reverseMap[map.charCodeAt(j)] = j;
  	                    }
  	            }

  	            // Ignore padding
  	            var paddingChar = map.charAt(64);
  	            if (paddingChar) {
  	                var paddingIndex = base64Str.indexOf(paddingChar);
  	                if (paddingIndex !== -1) {
  	                    base64StrLength = paddingIndex;
  	                }
  	            }

  	            // Convert
  	            return parseLoop(base64Str, base64StrLength, reverseMap);

  	        },

  	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  	    };

  	    function parseLoop(base64Str, base64StrLength, reverseMap) {
  	      var words = [];
  	      var nBytes = 0;
  	      for (var i = 0; i < base64StrLength; i++) {
  	          if (i % 4) {
  	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
  	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
  	              var bitsCombined = bits1 | bits2;
  	              words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
  	              nBytes++;
  	          }
  	      }
  	      return WordArray.create(words, nBytes);
  	    }
  	}());


  	return CryptoJS.enc.Base64;

  }));
  });

  var encBase64url = createCommonjsModule(function (module, exports) {
  (function (root, factory) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function () {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var WordArray = C_lib.WordArray;
  	    var C_enc = C.enc;

  	    /**
  	     * Base64url encoding strategy.
  	     */
  	    var Base64url = C_enc.Base64url = {
  	        /**
  	         * Converts a word array to a Base64url string.
  	         *
  	         * @param {WordArray} wordArray The word array.
  	         *
  	         * @param {boolean} urlSafe Whether to use url safe
  	         *
  	         * @return {string} The Base64url string.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
  	         */
  	        stringify: function (wordArray, urlSafe) {
  	            if (urlSafe === undefined) {
  	                urlSafe = true;
  	            }
  	            // Shortcuts
  	            var words = wordArray.words;
  	            var sigBytes = wordArray.sigBytes;
  	            var map = urlSafe ? this._safe_map : this._map;

  	            // Clamp excess bits
  	            wordArray.clamp();

  	            // Convert
  	            var base64Chars = [];
  	            for (var i = 0; i < sigBytes; i += 3) {
  	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
  	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
  	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

  	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

  	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
  	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
  	                }
  	            }

  	            // Add padding
  	            var paddingChar = map.charAt(64);
  	            if (paddingChar) {
  	                while (base64Chars.length % 4) {
  	                    base64Chars.push(paddingChar);
  	                }
  	            }

  	            return base64Chars.join('');
  	        },

  	        /**
  	         * Converts a Base64url string to a word array.
  	         *
  	         * @param {string} base64Str The Base64url string.
  	         *
  	         * @param {boolean} urlSafe Whether to use url safe
  	         *
  	         * @return {WordArray} The word array.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
  	         */
  	        parse: function (base64Str, urlSafe) {
  	            if (urlSafe === undefined) {
  	                urlSafe = true;
  	            }

  	            // Shortcuts
  	            var base64StrLength = base64Str.length;
  	            var map = urlSafe ? this._safe_map : this._map;
  	            var reverseMap = this._reverseMap;

  	            if (!reverseMap) {
  	                reverseMap = this._reverseMap = [];
  	                for (var j = 0; j < map.length; j++) {
  	                    reverseMap[map.charCodeAt(j)] = j;
  	                }
  	            }

  	            // Ignore padding
  	            var paddingChar = map.charAt(64);
  	            if (paddingChar) {
  	                var paddingIndex = base64Str.indexOf(paddingChar);
  	                if (paddingIndex !== -1) {
  	                    base64StrLength = paddingIndex;
  	                }
  	            }

  	            // Convert
  	            return parseLoop(base64Str, base64StrLength, reverseMap);

  	        },

  	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  	        _safe_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
  	    };

  	    function parseLoop(base64Str, base64StrLength, reverseMap) {
  	        var words = [];
  	        var nBytes = 0;
  	        for (var i = 0; i < base64StrLength; i++) {
  	            if (i % 4) {
  	                var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
  	                var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
  	                var bitsCombined = bits1 | bits2;
  	                words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
  	                nBytes++;
  	            }
  	        }
  	        return WordArray.create(words, nBytes);
  	    }
  	}());


  	return CryptoJS.enc.Base64url;

  }));
  });

  var md5 = createCommonjsModule(function (module, exports) {
  (function (root, factory) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function (Math) {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var WordArray = C_lib.WordArray;
  	    var Hasher = C_lib.Hasher;
  	    var C_algo = C.algo;

  	    // Constants table
  	    var T = [];

  	    // Compute constants
  	    (function () {
  	        for (var i = 0; i < 64; i++) {
  	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
  	        }
  	    }());

  	    /**
  	     * MD5 hash algorithm.
  	     */
  	    var MD5 = C_algo.MD5 = Hasher.extend({
  	        _doReset: function () {
  	            this._hash = new WordArray.init([
  	                0x67452301, 0xefcdab89,
  	                0x98badcfe, 0x10325476
  	            ]);
  	        },

  	        _doProcessBlock: function (M, offset) {
  	            // Swap endian
  	            for (var i = 0; i < 16; i++) {
  	                // Shortcuts
  	                var offset_i = offset + i;
  	                var M_offset_i = M[offset_i];

  	                M[offset_i] = (
  	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
  	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
  	                );
  	            }

  	            // Shortcuts
  	            var H = this._hash.words;

  	            var M_offset_0  = M[offset + 0];
  	            var M_offset_1  = M[offset + 1];
  	            var M_offset_2  = M[offset + 2];
  	            var M_offset_3  = M[offset + 3];
  	            var M_offset_4  = M[offset + 4];
  	            var M_offset_5  = M[offset + 5];
  	            var M_offset_6  = M[offset + 6];
  	            var M_offset_7  = M[offset + 7];
  	            var M_offset_8  = M[offset + 8];
  	            var M_offset_9  = M[offset + 9];
  	            var M_offset_10 = M[offset + 10];
  	            var M_offset_11 = M[offset + 11];
  	            var M_offset_12 = M[offset + 12];
  	            var M_offset_13 = M[offset + 13];
  	            var M_offset_14 = M[offset + 14];
  	            var M_offset_15 = M[offset + 15];

  	            // Working variables
  	            var a = H[0];
  	            var b = H[1];
  	            var c = H[2];
  	            var d = H[3];

  	            // Computation
  	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
  	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
  	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
  	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
  	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
  	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
  	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
  	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
  	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
  	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
  	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
  	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
  	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
  	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
  	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
  	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

  	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
  	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
  	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
  	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
  	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
  	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
  	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
  	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
  	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
  	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
  	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
  	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
  	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
  	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
  	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
  	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

  	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
  	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
  	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
  	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
  	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
  	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
  	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
  	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
  	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
  	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
  	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
  	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
  	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
  	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
  	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
  	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

  	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
  	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
  	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
  	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
  	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
  	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
  	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
  	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
  	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
  	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
  	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
  	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
  	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
  	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
  	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
  	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

  	            // Intermediate hash value
  	            H[0] = (H[0] + a) | 0;
  	            H[1] = (H[1] + b) | 0;
  	            H[2] = (H[2] + c) | 0;
  	            H[3] = (H[3] + d) | 0;
  	        },

  	        _doFinalize: function () {
  	            // Shortcuts
  	            var data = this._data;
  	            var dataWords = data.words;

  	            var nBitsTotal = this._nDataBytes * 8;
  	            var nBitsLeft = data.sigBytes * 8;

  	            // Add padding
  	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

  	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
  	            var nBitsTotalL = nBitsTotal;
  	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
  	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
  	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
  	            );
  	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
  	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
  	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
  	            );

  	            data.sigBytes = (dataWords.length + 1) * 4;

  	            // Hash final blocks
  	            this._process();

  	            // Shortcuts
  	            var hash = this._hash;
  	            var H = hash.words;

  	            // Swap endian
  	            for (var i = 0; i < 4; i++) {
  	                // Shortcut
  	                var H_i = H[i];

  	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
  	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
  	            }

  	            // Return final computed hash
  	            return hash;
  	        },

  	        clone: function () {
  	            var clone = Hasher.clone.call(this);
  	            clone._hash = this._hash.clone();

  	            return clone;
  	        }
  	    });

  	    function FF(a, b, c, d, x, s, t) {
  	        var n = a + ((b & c) | (~b & d)) + x + t;
  	        return ((n << s) | (n >>> (32 - s))) + b;
  	    }

  	    function GG(a, b, c, d, x, s, t) {
  	        var n = a + ((b & d) | (c & ~d)) + x + t;
  	        return ((n << s) | (n >>> (32 - s))) + b;
  	    }

  	    function HH(a, b, c, d, x, s, t) {
  	        var n = a + (b ^ c ^ d) + x + t;
  	        return ((n << s) | (n >>> (32 - s))) + b;
  	    }

  	    function II(a, b, c, d, x, s, t) {
  	        var n = a + (c ^ (b | ~d)) + x + t;
  	        return ((n << s) | (n >>> (32 - s))) + b;
  	    }

  	    /**
  	     * Shortcut function to the hasher's object interface.
  	     *
  	     * @param {WordArray|string} message The message to hash.
  	     *
  	     * @return {WordArray} The hash.
  	     *
  	     * @static
  	     *
  	     * @example
  	     *
  	     *     var hash = CryptoJS.MD5('message');
  	     *     var hash = CryptoJS.MD5(wordArray);
  	     */
  	    C.MD5 = Hasher._createHelper(MD5);

  	    /**
  	     * Shortcut function to the HMAC's object interface.
  	     *
  	     * @param {WordArray|string} message The message to hash.
  	     * @param {WordArray|string} key The secret key.
  	     *
  	     * @return {WordArray} The HMAC.
  	     *
  	     * @static
  	     *
  	     * @example
  	     *
  	     *     var hmac = CryptoJS.HmacMD5(message, key);
  	     */
  	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
  	}(Math));


  	return CryptoJS.MD5;

  }));
  });

  var sha1 = createCommonjsModule(function (module, exports) {
  (function (root, factory) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function () {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var WordArray = C_lib.WordArray;
  	    var Hasher = C_lib.Hasher;
  	    var C_algo = C.algo;

  	    // Reusable object
  	    var W = [];

  	    /**
  	     * SHA-1 hash algorithm.
  	     */
  	    var SHA1 = C_algo.SHA1 = Hasher.extend({
  	        _doReset: function () {
  	            this._hash = new WordArray.init([
  	                0x67452301, 0xefcdab89,
  	                0x98badcfe, 0x10325476,
  	                0xc3d2e1f0
  	            ]);
  	        },

  	        _doProcessBlock: function (M, offset) {
  	            // Shortcut
  	            var H = this._hash.words;

  	            // Working variables
  	            var a = H[0];
  	            var b = H[1];
  	            var c = H[2];
  	            var d = H[3];
  	            var e = H[4];

  	            // Computation
  	            for (var i = 0; i < 80; i++) {
  	                if (i < 16) {
  	                    W[i] = M[offset + i] | 0;
  	                } else {
  	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
  	                    W[i] = (n << 1) | (n >>> 31);
  	                }

  	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
  	                if (i < 20) {
  	                    t += ((b & c) | (~b & d)) + 0x5a827999;
  	                } else if (i < 40) {
  	                    t += (b ^ c ^ d) + 0x6ed9eba1;
  	                } else if (i < 60) {
  	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
  	                } else /* if (i < 80) */ {
  	                    t += (b ^ c ^ d) - 0x359d3e2a;
  	                }

  	                e = d;
  	                d = c;
  	                c = (b << 30) | (b >>> 2);
  	                b = a;
  	                a = t;
  	            }

  	            // Intermediate hash value
  	            H[0] = (H[0] + a) | 0;
  	            H[1] = (H[1] + b) | 0;
  	            H[2] = (H[2] + c) | 0;
  	            H[3] = (H[3] + d) | 0;
  	            H[4] = (H[4] + e) | 0;
  	        },

  	        _doFinalize: function () {
  	            // Shortcuts
  	            var data = this._data;
  	            var dataWords = data.words;

  	            var nBitsTotal = this._nDataBytes * 8;
  	            var nBitsLeft = data.sigBytes * 8;

  	            // Add padding
  	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
  	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
  	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
  	            data.sigBytes = dataWords.length * 4;

  	            // Hash final blocks
  	            this._process();

  	            // Return final computed hash
  	            return this._hash;
  	        },

  	        clone: function () {
  	            var clone = Hasher.clone.call(this);
  	            clone._hash = this._hash.clone();

  	            return clone;
  	        }
  	    });

  	    /**
  	     * Shortcut function to the hasher's object interface.
  	     *
  	     * @param {WordArray|string} message The message to hash.
  	     *
  	     * @return {WordArray} The hash.
  	     *
  	     * @static
  	     *
  	     * @example
  	     *
  	     *     var hash = CryptoJS.SHA1('message');
  	     *     var hash = CryptoJS.SHA1(wordArray);
  	     */
  	    C.SHA1 = Hasher._createHelper(SHA1);

  	    /**
  	     * Shortcut function to the HMAC's object interface.
  	     *
  	     * @param {WordArray|string} message The message to hash.
  	     * @param {WordArray|string} key The secret key.
  	     *
  	     * @return {WordArray} The HMAC.
  	     *
  	     * @static
  	     *
  	     * @example
  	     *
  	     *     var hmac = CryptoJS.HmacSHA1(message, key);
  	     */
  	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
  	}());


  	return CryptoJS.SHA1;

  }));
  });

  var sha256 = createCommonjsModule(function (module, exports) {
  (function (root, factory) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function (Math) {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var WordArray = C_lib.WordArray;
  	    var Hasher = C_lib.Hasher;
  	    var C_algo = C.algo;

  	    // Initialization and round constants tables
  	    var H = [];
  	    var K = [];

  	    // Compute constants
  	    (function () {
  	        function isPrime(n) {
  	            var sqrtN = Math.sqrt(n);
  	            for (var factor = 2; factor <= sqrtN; factor++) {
  	                if (!(n % factor)) {
  	                    return false;
  	                }
  	            }

  	            return true;
  	        }

  	        function getFractionalBits(n) {
  	            return ((n - (n | 0)) * 0x100000000) | 0;
  	        }

  	        var n = 2;
  	        var nPrime = 0;
  	        while (nPrime < 64) {
  	            if (isPrime(n)) {
  	                if (nPrime < 8) {
  	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
  	                }
  	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

  	                nPrime++;
  	            }

  	            n++;
  	        }
  	    }());

  	    // Reusable object
  	    var W = [];

  	    /**
  	     * SHA-256 hash algorithm.
  	     */
  	    var SHA256 = C_algo.SHA256 = Hasher.extend({
  	        _doReset: function () {
  	            this._hash = new WordArray.init(H.slice(0));
  	        },

  	        _doProcessBlock: function (M, offset) {
  	            // Shortcut
  	            var H = this._hash.words;

  	            // Working variables
  	            var a = H[0];
  	            var b = H[1];
  	            var c = H[2];
  	            var d = H[3];
  	            var e = H[4];
  	            var f = H[5];
  	            var g = H[6];
  	            var h = H[7];

  	            // Computation
  	            for (var i = 0; i < 64; i++) {
  	                if (i < 16) {
  	                    W[i] = M[offset + i] | 0;
  	                } else {
  	                    var gamma0x = W[i - 15];
  	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
  	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
  	                                   (gamma0x >>> 3);

  	                    var gamma1x = W[i - 2];
  	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
  	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
  	                                   (gamma1x >>> 10);

  	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
  	                }

  	                var ch  = (e & f) ^ (~e & g);
  	                var maj = (a & b) ^ (a & c) ^ (b & c);

  	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
  	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

  	                var t1 = h + sigma1 + ch + K[i] + W[i];
  	                var t2 = sigma0 + maj;

  	                h = g;
  	                g = f;
  	                f = e;
  	                e = (d + t1) | 0;
  	                d = c;
  	                c = b;
  	                b = a;
  	                a = (t1 + t2) | 0;
  	            }

  	            // Intermediate hash value
  	            H[0] = (H[0] + a) | 0;
  	            H[1] = (H[1] + b) | 0;
  	            H[2] = (H[2] + c) | 0;
  	            H[3] = (H[3] + d) | 0;
  	            H[4] = (H[4] + e) | 0;
  	            H[5] = (H[5] + f) | 0;
  	            H[6] = (H[6] + g) | 0;
  	            H[7] = (H[7] + h) | 0;
  	        },

  	        _doFinalize: function () {
  	            // Shortcuts
  	            var data = this._data;
  	            var dataWords = data.words;

  	            var nBitsTotal = this._nDataBytes * 8;
  	            var nBitsLeft = data.sigBytes * 8;

  	            // Add padding
  	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
  	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
  	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
  	            data.sigBytes = dataWords.length * 4;

  	            // Hash final blocks
  	            this._process();

  	            // Return final computed hash
  	            return this._hash;
  	        },

  	        clone: function () {
  	            var clone = Hasher.clone.call(this);
  	            clone._hash = this._hash.clone();

  	            return clone;
  	        }
  	    });

  	    /**
  	     * Shortcut function to the hasher's object interface.
  	     *
  	     * @param {WordArray|string} message The message to hash.
  	     *
  	     * @return {WordArray} The hash.
  	     *
  	     * @static
  	     *
  	     * @example
  	     *
  	     *     var hash = CryptoJS.SHA256('message');
  	     *     var hash = CryptoJS.SHA256(wordArray);
  	     */
  	    C.SHA256 = Hasher._createHelper(SHA256);

  	    /**
  	     * Shortcut function to the HMAC's object interface.
  	     *
  	     * @param {WordArray|string} message The message to hash.
  	     * @param {WordArray|string} key The secret key.
  	     *
  	     * @return {WordArray} The HMAC.
  	     *
  	     * @static
  	     *
  	     * @example
  	     *
  	     *     var hmac = CryptoJS.HmacSHA256(message, key);
  	     */
  	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
  	}(Math));


  	return CryptoJS.SHA256;

  }));
  });

  var sha224 = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, sha256);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function () {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var WordArray = C_lib.WordArray;
  	    var C_algo = C.algo;
  	    var SHA256 = C_algo.SHA256;

  	    /**
  	     * SHA-224 hash algorithm.
  	     */
  	    var SHA224 = C_algo.SHA224 = SHA256.extend({
  	        _doReset: function () {
  	            this._hash = new WordArray.init([
  	                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
  	                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
  	            ]);
  	        },

  	        _doFinalize: function () {
  	            var hash = SHA256._doFinalize.call(this);

  	            hash.sigBytes -= 4;

  	            return hash;
  	        }
  	    });

  	    /**
  	     * Shortcut function to the hasher's object interface.
  	     *
  	     * @param {WordArray|string} message The message to hash.
  	     *
  	     * @return {WordArray} The hash.
  	     *
  	     * @static
  	     *
  	     * @example
  	     *
  	     *     var hash = CryptoJS.SHA224('message');
  	     *     var hash = CryptoJS.SHA224(wordArray);
  	     */
  	    C.SHA224 = SHA256._createHelper(SHA224);

  	    /**
  	     * Shortcut function to the HMAC's object interface.
  	     *
  	     * @param {WordArray|string} message The message to hash.
  	     * @param {WordArray|string} key The secret key.
  	     *
  	     * @return {WordArray} The HMAC.
  	     *
  	     * @static
  	     *
  	     * @example
  	     *
  	     *     var hmac = CryptoJS.HmacSHA224(message, key);
  	     */
  	    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
  	}());


  	return CryptoJS.SHA224;

  }));
  });

  var sha512 = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, x64Core);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function () {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var Hasher = C_lib.Hasher;
  	    var C_x64 = C.x64;
  	    var X64Word = C_x64.Word;
  	    var X64WordArray = C_x64.WordArray;
  	    var C_algo = C.algo;

  	    function X64Word_create() {
  	        return X64Word.create.apply(X64Word, arguments);
  	    }

  	    // Constants
  	    var K = [
  	        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
  	        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
  	        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
  	        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
  	        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
  	        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
  	        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
  	        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
  	        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
  	        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
  	        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
  	        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
  	        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
  	        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
  	        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
  	        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
  	        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
  	        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
  	        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
  	        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
  	        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
  	        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
  	        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
  	        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
  	        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
  	        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
  	        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
  	        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
  	        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
  	        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
  	        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
  	        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
  	        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
  	        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
  	        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
  	        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
  	        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
  	        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
  	        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
  	        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
  	    ];

  	    // Reusable objects
  	    var W = [];
  	    (function () {
  	        for (var i = 0; i < 80; i++) {
  	            W[i] = X64Word_create();
  	        }
  	    }());

  	    /**
  	     * SHA-512 hash algorithm.
  	     */
  	    var SHA512 = C_algo.SHA512 = Hasher.extend({
  	        _doReset: function () {
  	            this._hash = new X64WordArray.init([
  	                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
  	                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
  	                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
  	                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
  	            ]);
  	        },

  	        _doProcessBlock: function (M, offset) {
  	            // Shortcuts
  	            var H = this._hash.words;

  	            var H0 = H[0];
  	            var H1 = H[1];
  	            var H2 = H[2];
  	            var H3 = H[3];
  	            var H4 = H[4];
  	            var H5 = H[5];
  	            var H6 = H[6];
  	            var H7 = H[7];

  	            var H0h = H0.high;
  	            var H0l = H0.low;
  	            var H1h = H1.high;
  	            var H1l = H1.low;
  	            var H2h = H2.high;
  	            var H2l = H2.low;
  	            var H3h = H3.high;
  	            var H3l = H3.low;
  	            var H4h = H4.high;
  	            var H4l = H4.low;
  	            var H5h = H5.high;
  	            var H5l = H5.low;
  	            var H6h = H6.high;
  	            var H6l = H6.low;
  	            var H7h = H7.high;
  	            var H7l = H7.low;

  	            // Working variables
  	            var ah = H0h;
  	            var al = H0l;
  	            var bh = H1h;
  	            var bl = H1l;
  	            var ch = H2h;
  	            var cl = H2l;
  	            var dh = H3h;
  	            var dl = H3l;
  	            var eh = H4h;
  	            var el = H4l;
  	            var fh = H5h;
  	            var fl = H5l;
  	            var gh = H6h;
  	            var gl = H6l;
  	            var hh = H7h;
  	            var hl = H7l;

  	            // Rounds
  	            for (var i = 0; i < 80; i++) {
  	                var Wil;
  	                var Wih;

  	                // Shortcut
  	                var Wi = W[i];

  	                // Extend message
  	                if (i < 16) {
  	                    Wih = Wi.high = M[offset + i * 2]     | 0;
  	                    Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
  	                } else {
  	                    // Gamma0
  	                    var gamma0x  = W[i - 15];
  	                    var gamma0xh = gamma0x.high;
  	                    var gamma0xl = gamma0x.low;
  	                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
  	                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

  	                    // Gamma1
  	                    var gamma1x  = W[i - 2];
  	                    var gamma1xh = gamma1x.high;
  	                    var gamma1xl = gamma1x.low;
  	                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
  	                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

  	                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
  	                    var Wi7  = W[i - 7];
  	                    var Wi7h = Wi7.high;
  	                    var Wi7l = Wi7.low;

  	                    var Wi16  = W[i - 16];
  	                    var Wi16h = Wi16.high;
  	                    var Wi16l = Wi16.low;

  	                    Wil = gamma0l + Wi7l;
  	                    Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
  	                    Wil = Wil + gamma1l;
  	                    Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
  	                    Wil = Wil + Wi16l;
  	                    Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

  	                    Wi.high = Wih;
  	                    Wi.low  = Wil;
  	                }

  	                var chh  = (eh & fh) ^ (~eh & gh);
  	                var chl  = (el & fl) ^ (~el & gl);
  	                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
  	                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

  	                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
  	                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
  	                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
  	                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

  	                // t1 = h + sigma1 + ch + K[i] + W[i]
  	                var Ki  = K[i];
  	                var Kih = Ki.high;
  	                var Kil = Ki.low;

  	                var t1l = hl + sigma1l;
  	                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
  	                var t1l = t1l + chl;
  	                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
  	                var t1l = t1l + Kil;
  	                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
  	                var t1l = t1l + Wil;
  	                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

  	                // t2 = sigma0 + maj
  	                var t2l = sigma0l + majl;
  	                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

  	                // Update working variables
  	                hh = gh;
  	                hl = gl;
  	                gh = fh;
  	                gl = fl;
  	                fh = eh;
  	                fl = el;
  	                el = (dl + t1l) | 0;
  	                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
  	                dh = ch;
  	                dl = cl;
  	                ch = bh;
  	                cl = bl;
  	                bh = ah;
  	                bl = al;
  	                al = (t1l + t2l) | 0;
  	                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
  	            }

  	            // Intermediate hash value
  	            H0l = H0.low  = (H0l + al);
  	            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
  	            H1l = H1.low  = (H1l + bl);
  	            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
  	            H2l = H2.low  = (H2l + cl);
  	            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
  	            H3l = H3.low  = (H3l + dl);
  	            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
  	            H4l = H4.low  = (H4l + el);
  	            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
  	            H5l = H5.low  = (H5l + fl);
  	            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
  	            H6l = H6.low  = (H6l + gl);
  	            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
  	            H7l = H7.low  = (H7l + hl);
  	            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
  	        },

  	        _doFinalize: function () {
  	            // Shortcuts
  	            var data = this._data;
  	            var dataWords = data.words;

  	            var nBitsTotal = this._nDataBytes * 8;
  	            var nBitsLeft = data.sigBytes * 8;

  	            // Add padding
  	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
  	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
  	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
  	            data.sigBytes = dataWords.length * 4;

  	            // Hash final blocks
  	            this._process();

  	            // Convert hash to 32-bit word array before returning
  	            var hash = this._hash.toX32();

  	            // Return final computed hash
  	            return hash;
  	        },

  	        clone: function () {
  	            var clone = Hasher.clone.call(this);
  	            clone._hash = this._hash.clone();

  	            return clone;
  	        },

  	        blockSize: 1024/32
  	    });

  	    /**
  	     * Shortcut function to the hasher's object interface.
  	     *
  	     * @param {WordArray|string} message The message to hash.
  	     *
  	     * @return {WordArray} The hash.
  	     *
  	     * @static
  	     *
  	     * @example
  	     *
  	     *     var hash = CryptoJS.SHA512('message');
  	     *     var hash = CryptoJS.SHA512(wordArray);
  	     */
  	    C.SHA512 = Hasher._createHelper(SHA512);

  	    /**
  	     * Shortcut function to the HMAC's object interface.
  	     *
  	     * @param {WordArray|string} message The message to hash.
  	     * @param {WordArray|string} key The secret key.
  	     *
  	     * @return {WordArray} The HMAC.
  	     *
  	     * @static
  	     *
  	     * @example
  	     *
  	     *     var hmac = CryptoJS.HmacSHA512(message, key);
  	     */
  	    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
  	}());


  	return CryptoJS.SHA512;

  }));
  });

  var sha384 = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, x64Core, sha512);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function () {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_x64 = C.x64;
  	    var X64Word = C_x64.Word;
  	    var X64WordArray = C_x64.WordArray;
  	    var C_algo = C.algo;
  	    var SHA512 = C_algo.SHA512;

  	    /**
  	     * SHA-384 hash algorithm.
  	     */
  	    var SHA384 = C_algo.SHA384 = SHA512.extend({
  	        _doReset: function () {
  	            this._hash = new X64WordArray.init([
  	                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
  	                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
  	                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
  	                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
  	            ]);
  	        },

  	        _doFinalize: function () {
  	            var hash = SHA512._doFinalize.call(this);

  	            hash.sigBytes -= 16;

  	            return hash;
  	        }
  	    });

  	    /**
  	     * Shortcut function to the hasher's object interface.
  	     *
  	     * @param {WordArray|string} message The message to hash.
  	     *
  	     * @return {WordArray} The hash.
  	     *
  	     * @static
  	     *
  	     * @example
  	     *
  	     *     var hash = CryptoJS.SHA384('message');
  	     *     var hash = CryptoJS.SHA384(wordArray);
  	     */
  	    C.SHA384 = SHA512._createHelper(SHA384);

  	    /**
  	     * Shortcut function to the HMAC's object interface.
  	     *
  	     * @param {WordArray|string} message The message to hash.
  	     * @param {WordArray|string} key The secret key.
  	     *
  	     * @return {WordArray} The HMAC.
  	     *
  	     * @static
  	     *
  	     * @example
  	     *
  	     *     var hmac = CryptoJS.HmacSHA384(message, key);
  	     */
  	    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
  	}());


  	return CryptoJS.SHA384;

  }));
  });

  var sha3 = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, x64Core);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function (Math) {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var WordArray = C_lib.WordArray;
  	    var Hasher = C_lib.Hasher;
  	    var C_x64 = C.x64;
  	    var X64Word = C_x64.Word;
  	    var C_algo = C.algo;

  	    // Constants tables
  	    var RHO_OFFSETS = [];
  	    var PI_INDEXES  = [];
  	    var ROUND_CONSTANTS = [];

  	    // Compute Constants
  	    (function () {
  	        // Compute rho offset constants
  	        var x = 1, y = 0;
  	        for (var t = 0; t < 24; t++) {
  	            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

  	            var newX = y % 5;
  	            var newY = (2 * x + 3 * y) % 5;
  	            x = newX;
  	            y = newY;
  	        }

  	        // Compute pi index constants
  	        for (var x = 0; x < 5; x++) {
  	            for (var y = 0; y < 5; y++) {
  	                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
  	            }
  	        }

  	        // Compute round constants
  	        var LFSR = 0x01;
  	        for (var i = 0; i < 24; i++) {
  	            var roundConstantMsw = 0;
  	            var roundConstantLsw = 0;

  	            for (var j = 0; j < 7; j++) {
  	                if (LFSR & 0x01) {
  	                    var bitPosition = (1 << j) - 1;
  	                    if (bitPosition < 32) {
  	                        roundConstantLsw ^= 1 << bitPosition;
  	                    } else /* if (bitPosition >= 32) */ {
  	                        roundConstantMsw ^= 1 << (bitPosition - 32);
  	                    }
  	                }

  	                // Compute next LFSR
  	                if (LFSR & 0x80) {
  	                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
  	                    LFSR = (LFSR << 1) ^ 0x71;
  	                } else {
  	                    LFSR <<= 1;
  	                }
  	            }

  	            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
  	        }
  	    }());

  	    // Reusable objects for temporary values
  	    var T = [];
  	    (function () {
  	        for (var i = 0; i < 25; i++) {
  	            T[i] = X64Word.create();
  	        }
  	    }());

  	    /**
  	     * SHA-3 hash algorithm.
  	     */
  	    var SHA3 = C_algo.SHA3 = Hasher.extend({
  	        /**
  	         * Configuration options.
  	         *
  	         * @property {number} outputLength
  	         *   The desired number of bits in the output hash.
  	         *   Only values permitted are: 224, 256, 384, 512.
  	         *   Default: 512
  	         */
  	        cfg: Hasher.cfg.extend({
  	            outputLength: 512
  	        }),

  	        _doReset: function () {
  	            var state = this._state = [];
  	            for (var i = 0; i < 25; i++) {
  	                state[i] = new X64Word.init();
  	            }

  	            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
  	        },

  	        _doProcessBlock: function (M, offset) {
  	            // Shortcuts
  	            var state = this._state;
  	            var nBlockSizeLanes = this.blockSize / 2;

  	            // Absorb
  	            for (var i = 0; i < nBlockSizeLanes; i++) {
  	                // Shortcuts
  	                var M2i  = M[offset + 2 * i];
  	                var M2i1 = M[offset + 2 * i + 1];

  	                // Swap endian
  	                M2i = (
  	                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
  	                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
  	                );
  	                M2i1 = (
  	                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
  	                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
  	                );

  	                // Absorb message into state
  	                var lane = state[i];
  	                lane.high ^= M2i1;
  	                lane.low  ^= M2i;
  	            }

  	            // Rounds
  	            for (var round = 0; round < 24; round++) {
  	                // Theta
  	                for (var x = 0; x < 5; x++) {
  	                    // Mix column lanes
  	                    var tMsw = 0, tLsw = 0;
  	                    for (var y = 0; y < 5; y++) {
  	                        var lane = state[x + 5 * y];
  	                        tMsw ^= lane.high;
  	                        tLsw ^= lane.low;
  	                    }

  	                    // Temporary values
  	                    var Tx = T[x];
  	                    Tx.high = tMsw;
  	                    Tx.low  = tLsw;
  	                }
  	                for (var x = 0; x < 5; x++) {
  	                    // Shortcuts
  	                    var Tx4 = T[(x + 4) % 5];
  	                    var Tx1 = T[(x + 1) % 5];
  	                    var Tx1Msw = Tx1.high;
  	                    var Tx1Lsw = Tx1.low;

  	                    // Mix surrounding columns
  	                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
  	                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
  	                    for (var y = 0; y < 5; y++) {
  	                        var lane = state[x + 5 * y];
  	                        lane.high ^= tMsw;
  	                        lane.low  ^= tLsw;
  	                    }
  	                }

  	                // Rho Pi
  	                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
  	                    var tMsw;
  	                    var tLsw;

  	                    // Shortcuts
  	                    var lane = state[laneIndex];
  	                    var laneMsw = lane.high;
  	                    var laneLsw = lane.low;
  	                    var rhoOffset = RHO_OFFSETS[laneIndex];

  	                    // Rotate lanes
  	                    if (rhoOffset < 32) {
  	                        tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
  	                        tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
  	                    } else /* if (rhoOffset >= 32) */ {
  	                        tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
  	                        tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
  	                    }

  	                    // Transpose lanes
  	                    var TPiLane = T[PI_INDEXES[laneIndex]];
  	                    TPiLane.high = tMsw;
  	                    TPiLane.low  = tLsw;
  	                }

  	                // Rho pi at x = y = 0
  	                var T0 = T[0];
  	                var state0 = state[0];
  	                T0.high = state0.high;
  	                T0.low  = state0.low;

  	                // Chi
  	                for (var x = 0; x < 5; x++) {
  	                    for (var y = 0; y < 5; y++) {
  	                        // Shortcuts
  	                        var laneIndex = x + 5 * y;
  	                        var lane = state[laneIndex];
  	                        var TLane = T[laneIndex];
  	                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
  	                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

  	                        // Mix rows
  	                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
  	                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
  	                    }
  	                }

  	                // Iota
  	                var lane = state[0];
  	                var roundConstant = ROUND_CONSTANTS[round];
  	                lane.high ^= roundConstant.high;
  	                lane.low  ^= roundConstant.low;
  	            }
  	        },

  	        _doFinalize: function () {
  	            // Shortcuts
  	            var data = this._data;
  	            var dataWords = data.words;
  	            var nBitsTotal = this._nDataBytes * 8;
  	            var nBitsLeft = data.sigBytes * 8;
  	            var blockSizeBits = this.blockSize * 32;

  	            // Add padding
  	            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
  	            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
  	            data.sigBytes = dataWords.length * 4;

  	            // Hash final blocks
  	            this._process();

  	            // Shortcuts
  	            var state = this._state;
  	            var outputLengthBytes = this.cfg.outputLength / 8;
  	            var outputLengthLanes = outputLengthBytes / 8;

  	            // Squeeze
  	            var hashWords = [];
  	            for (var i = 0; i < outputLengthLanes; i++) {
  	                // Shortcuts
  	                var lane = state[i];
  	                var laneMsw = lane.high;
  	                var laneLsw = lane.low;

  	                // Swap endian
  	                laneMsw = (
  	                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
  	                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
  	                );
  	                laneLsw = (
  	                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
  	                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
  	                );

  	                // Squeeze state to retrieve hash
  	                hashWords.push(laneLsw);
  	                hashWords.push(laneMsw);
  	            }

  	            // Return final computed hash
  	            return new WordArray.init(hashWords, outputLengthBytes);
  	        },

  	        clone: function () {
  	            var clone = Hasher.clone.call(this);

  	            var state = clone._state = this._state.slice(0);
  	            for (var i = 0; i < 25; i++) {
  	                state[i] = state[i].clone();
  	            }

  	            return clone;
  	        }
  	    });

  	    /**
  	     * Shortcut function to the hasher's object interface.
  	     *
  	     * @param {WordArray|string} message The message to hash.
  	     *
  	     * @return {WordArray} The hash.
  	     *
  	     * @static
  	     *
  	     * @example
  	     *
  	     *     var hash = CryptoJS.SHA3('message');
  	     *     var hash = CryptoJS.SHA3(wordArray);
  	     */
  	    C.SHA3 = Hasher._createHelper(SHA3);

  	    /**
  	     * Shortcut function to the HMAC's object interface.
  	     *
  	     * @param {WordArray|string} message The message to hash.
  	     * @param {WordArray|string} key The secret key.
  	     *
  	     * @return {WordArray} The HMAC.
  	     *
  	     * @static
  	     *
  	     * @example
  	     *
  	     *     var hmac = CryptoJS.HmacSHA3(message, key);
  	     */
  	    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
  	}(Math));


  	return CryptoJS.SHA3;

  }));
  });

  var ripemd160 = createCommonjsModule(function (module, exports) {
  (function (root, factory) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	/** @preserve
  	(c) 2012 by Cédric Mesnil. All rights reserved.

  	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

  	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
  	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

  	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  	*/

  	(function (Math) {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var WordArray = C_lib.WordArray;
  	    var Hasher = C_lib.Hasher;
  	    var C_algo = C.algo;

  	    // Constants table
  	    var _zl = WordArray.create([
  	        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
  	        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
  	        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
  	        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
  	        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
  	    var _zr = WordArray.create([
  	        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
  	        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
  	        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
  	        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
  	        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
  	    var _sl = WordArray.create([
  	         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
  	        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
  	        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
  	          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
  	        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
  	    var _sr = WordArray.create([
  	        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
  	        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
  	        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
  	        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
  	        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

  	    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
  	    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

  	    /**
  	     * RIPEMD160 hash algorithm.
  	     */
  	    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
  	        _doReset: function () {
  	            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
  	        },

  	        _doProcessBlock: function (M, offset) {

  	            // Swap endian
  	            for (var i = 0; i < 16; i++) {
  	                // Shortcuts
  	                var offset_i = offset + i;
  	                var M_offset_i = M[offset_i];

  	                // Swap
  	                M[offset_i] = (
  	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
  	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
  	                );
  	            }
  	            // Shortcut
  	            var H  = this._hash.words;
  	            var hl = _hl.words;
  	            var hr = _hr.words;
  	            var zl = _zl.words;
  	            var zr = _zr.words;
  	            var sl = _sl.words;
  	            var sr = _sr.words;

  	            // Working variables
  	            var al, bl, cl, dl, el;
  	            var ar, br, cr, dr, er;

  	            ar = al = H[0];
  	            br = bl = H[1];
  	            cr = cl = H[2];
  	            dr = dl = H[3];
  	            er = el = H[4];
  	            // Computation
  	            var t;
  	            for (var i = 0; i < 80; i += 1) {
  	                t = (al +  M[offset+zl[i]])|0;
  	                if (i<16){
  		            t +=  f1(bl,cl,dl) + hl[0];
  	                } else if (i<32) {
  		            t +=  f2(bl,cl,dl) + hl[1];
  	                } else if (i<48) {
  		            t +=  f3(bl,cl,dl) + hl[2];
  	                } else if (i<64) {
  		            t +=  f4(bl,cl,dl) + hl[3];
  	                } else {// if (i<80) {
  		            t +=  f5(bl,cl,dl) + hl[4];
  	                }
  	                t = t|0;
  	                t =  rotl(t,sl[i]);
  	                t = (t+el)|0;
  	                al = el;
  	                el = dl;
  	                dl = rotl(cl, 10);
  	                cl = bl;
  	                bl = t;

  	                t = (ar + M[offset+zr[i]])|0;
  	                if (i<16){
  		            t +=  f5(br,cr,dr) + hr[0];
  	                } else if (i<32) {
  		            t +=  f4(br,cr,dr) + hr[1];
  	                } else if (i<48) {
  		            t +=  f3(br,cr,dr) + hr[2];
  	                } else if (i<64) {
  		            t +=  f2(br,cr,dr) + hr[3];
  	                } else {// if (i<80) {
  		            t +=  f1(br,cr,dr) + hr[4];
  	                }
  	                t = t|0;
  	                t =  rotl(t,sr[i]) ;
  	                t = (t+er)|0;
  	                ar = er;
  	                er = dr;
  	                dr = rotl(cr, 10);
  	                cr = br;
  	                br = t;
  	            }
  	            // Intermediate hash value
  	            t    = (H[1] + cl + dr)|0;
  	            H[1] = (H[2] + dl + er)|0;
  	            H[2] = (H[3] + el + ar)|0;
  	            H[3] = (H[4] + al + br)|0;
  	            H[4] = (H[0] + bl + cr)|0;
  	            H[0] =  t;
  	        },

  	        _doFinalize: function () {
  	            // Shortcuts
  	            var data = this._data;
  	            var dataWords = data.words;

  	            var nBitsTotal = this._nDataBytes * 8;
  	            var nBitsLeft = data.sigBytes * 8;

  	            // Add padding
  	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
  	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
  	                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
  	                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
  	            );
  	            data.sigBytes = (dataWords.length + 1) * 4;

  	            // Hash final blocks
  	            this._process();

  	            // Shortcuts
  	            var hash = this._hash;
  	            var H = hash.words;

  	            // Swap endian
  	            for (var i = 0; i < 5; i++) {
  	                // Shortcut
  	                var H_i = H[i];

  	                // Swap
  	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
  	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
  	            }

  	            // Return final computed hash
  	            return hash;
  	        },

  	        clone: function () {
  	            var clone = Hasher.clone.call(this);
  	            clone._hash = this._hash.clone();

  	            return clone;
  	        }
  	    });


  	    function f1(x, y, z) {
  	        return ((x) ^ (y) ^ (z));

  	    }

  	    function f2(x, y, z) {
  	        return (((x)&(y)) | ((~x)&(z)));
  	    }

  	    function f3(x, y, z) {
  	        return (((x) | (~(y))) ^ (z));
  	    }

  	    function f4(x, y, z) {
  	        return (((x) & (z)) | ((y)&(~(z))));
  	    }

  	    function f5(x, y, z) {
  	        return ((x) ^ ((y) |(~(z))));

  	    }

  	    function rotl(x,n) {
  	        return (x<<n) | (x>>>(32-n));
  	    }


  	    /**
  	     * Shortcut function to the hasher's object interface.
  	     *
  	     * @param {WordArray|string} message The message to hash.
  	     *
  	     * @return {WordArray} The hash.
  	     *
  	     * @static
  	     *
  	     * @example
  	     *
  	     *     var hash = CryptoJS.RIPEMD160('message');
  	     *     var hash = CryptoJS.RIPEMD160(wordArray);
  	     */
  	    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

  	    /**
  	     * Shortcut function to the HMAC's object interface.
  	     *
  	     * @param {WordArray|string} message The message to hash.
  	     * @param {WordArray|string} key The secret key.
  	     *
  	     * @return {WordArray} The HMAC.
  	     *
  	     * @static
  	     *
  	     * @example
  	     *
  	     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
  	     */
  	    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
  	}());


  	return CryptoJS.RIPEMD160;

  }));
  });

  var hmac = createCommonjsModule(function (module, exports) {
  (function (root, factory) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function () {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var Base = C_lib.Base;
  	    var C_enc = C.enc;
  	    var Utf8 = C_enc.Utf8;
  	    var C_algo = C.algo;

  	    /**
  	     * HMAC algorithm.
  	     */
  	    var HMAC = C_algo.HMAC = Base.extend({
  	        /**
  	         * Initializes a newly created HMAC.
  	         *
  	         * @param {Hasher} hasher The hash algorithm to use.
  	         * @param {WordArray|string} key The secret key.
  	         *
  	         * @example
  	         *
  	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
  	         */
  	        init: function (hasher, key) {
  	            // Init hasher
  	            hasher = this._hasher = new hasher.init();

  	            // Convert string to WordArray, else assume WordArray already
  	            if (typeof key == 'string') {
  	                key = Utf8.parse(key);
  	            }

  	            // Shortcuts
  	            var hasherBlockSize = hasher.blockSize;
  	            var hasherBlockSizeBytes = hasherBlockSize * 4;

  	            // Allow arbitrary length keys
  	            if (key.sigBytes > hasherBlockSizeBytes) {
  	                key = hasher.finalize(key);
  	            }

  	            // Clamp excess bits
  	            key.clamp();

  	            // Clone key for inner and outer pads
  	            var oKey = this._oKey = key.clone();
  	            var iKey = this._iKey = key.clone();

  	            // Shortcuts
  	            var oKeyWords = oKey.words;
  	            var iKeyWords = iKey.words;

  	            // XOR keys with pad constants
  	            for (var i = 0; i < hasherBlockSize; i++) {
  	                oKeyWords[i] ^= 0x5c5c5c5c;
  	                iKeyWords[i] ^= 0x36363636;
  	            }
  	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

  	            // Set initial values
  	            this.reset();
  	        },

  	        /**
  	         * Resets this HMAC to its initial state.
  	         *
  	         * @example
  	         *
  	         *     hmacHasher.reset();
  	         */
  	        reset: function () {
  	            // Shortcut
  	            var hasher = this._hasher;

  	            // Reset
  	            hasher.reset();
  	            hasher.update(this._iKey);
  	        },

  	        /**
  	         * Updates this HMAC with a message.
  	         *
  	         * @param {WordArray|string} messageUpdate The message to append.
  	         *
  	         * @return {HMAC} This HMAC instance.
  	         *
  	         * @example
  	         *
  	         *     hmacHasher.update('message');
  	         *     hmacHasher.update(wordArray);
  	         */
  	        update: function (messageUpdate) {
  	            this._hasher.update(messageUpdate);

  	            // Chainable
  	            return this;
  	        },

  	        /**
  	         * Finalizes the HMAC computation.
  	         * Note that the finalize operation is effectively a destructive, read-once operation.
  	         *
  	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
  	         *
  	         * @return {WordArray} The HMAC.
  	         *
  	         * @example
  	         *
  	         *     var hmac = hmacHasher.finalize();
  	         *     var hmac = hmacHasher.finalize('message');
  	         *     var hmac = hmacHasher.finalize(wordArray);
  	         */
  	        finalize: function (messageUpdate) {
  	            // Shortcut
  	            var hasher = this._hasher;

  	            // Compute HMAC
  	            var innerHash = hasher.finalize(messageUpdate);
  	            hasher.reset();
  	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

  	            return hmac;
  	        }
  	    });
  	}());


  }));
  });

  var pbkdf2 = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, sha256, hmac);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function () {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var Base = C_lib.Base;
  	    var WordArray = C_lib.WordArray;
  	    var C_algo = C.algo;
  	    var SHA256 = C_algo.SHA256;
  	    var HMAC = C_algo.HMAC;

  	    /**
  	     * Password-Based Key Derivation Function 2 algorithm.
  	     */
  	    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
  	        /**
  	         * Configuration options.
  	         *
  	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
  	         * @property {Hasher} hasher The hasher to use. Default: SHA256
  	         * @property {number} iterations The number of iterations to perform. Default: 250000
  	         */
  	        cfg: Base.extend({
  	            keySize: 128/32,
  	            hasher: SHA256,
  	            iterations: 250000
  	        }),

  	        /**
  	         * Initializes a newly created key derivation function.
  	         *
  	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
  	         *
  	         * @example
  	         *
  	         *     var kdf = CryptoJS.algo.PBKDF2.create();
  	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
  	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
  	         */
  	        init: function (cfg) {
  	            this.cfg = this.cfg.extend(cfg);
  	        },

  	        /**
  	         * Computes the Password-Based Key Derivation Function 2.
  	         *
  	         * @param {WordArray|string} password The password.
  	         * @param {WordArray|string} salt A salt.
  	         *
  	         * @return {WordArray} The derived key.
  	         *
  	         * @example
  	         *
  	         *     var key = kdf.compute(password, salt);
  	         */
  	        compute: function (password, salt) {
  	            // Shortcut
  	            var cfg = this.cfg;

  	            // Init HMAC
  	            var hmac = HMAC.create(cfg.hasher, password);

  	            // Initial values
  	            var derivedKey = WordArray.create();
  	            var blockIndex = WordArray.create([0x00000001]);

  	            // Shortcuts
  	            var derivedKeyWords = derivedKey.words;
  	            var blockIndexWords = blockIndex.words;
  	            var keySize = cfg.keySize;
  	            var iterations = cfg.iterations;

  	            // Generate key
  	            while (derivedKeyWords.length < keySize) {
  	                var block = hmac.update(salt).finalize(blockIndex);
  	                hmac.reset();

  	                // Shortcuts
  	                var blockWords = block.words;
  	                var blockWordsLength = blockWords.length;

  	                // Iterations
  	                var intermediate = block;
  	                for (var i = 1; i < iterations; i++) {
  	                    intermediate = hmac.finalize(intermediate);
  	                    hmac.reset();

  	                    // Shortcut
  	                    var intermediateWords = intermediate.words;

  	                    // XOR intermediate with block
  	                    for (var j = 0; j < blockWordsLength; j++) {
  	                        blockWords[j] ^= intermediateWords[j];
  	                    }
  	                }

  	                derivedKey.concat(block);
  	                blockIndexWords[0]++;
  	            }
  	            derivedKey.sigBytes = keySize * 4;

  	            return derivedKey;
  	        }
  	    });

  	    /**
  	     * Computes the Password-Based Key Derivation Function 2.
  	     *
  	     * @param {WordArray|string} password The password.
  	     * @param {WordArray|string} salt A salt.
  	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
  	     *
  	     * @return {WordArray} The derived key.
  	     *
  	     * @static
  	     *
  	     * @example
  	     *
  	     *     var key = CryptoJS.PBKDF2(password, salt);
  	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
  	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
  	     */
  	    C.PBKDF2 = function (password, salt, cfg) {
  	        return PBKDF2.create(cfg).compute(password, salt);
  	    };
  	}());


  	return CryptoJS.PBKDF2;

  }));
  });

  var evpkdf = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, sha1, hmac);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function () {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var Base = C_lib.Base;
  	    var WordArray = C_lib.WordArray;
  	    var C_algo = C.algo;
  	    var MD5 = C_algo.MD5;

  	    /**
  	     * This key derivation function is meant to conform with EVP_BytesToKey.
  	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
  	     */
  	    var EvpKDF = C_algo.EvpKDF = Base.extend({
  	        /**
  	         * Configuration options.
  	         *
  	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
  	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
  	         * @property {number} iterations The number of iterations to perform. Default: 1
  	         */
  	        cfg: Base.extend({
  	            keySize: 128/32,
  	            hasher: MD5,
  	            iterations: 1
  	        }),

  	        /**
  	         * Initializes a newly created key derivation function.
  	         *
  	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
  	         *
  	         * @example
  	         *
  	         *     var kdf = CryptoJS.algo.EvpKDF.create();
  	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
  	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
  	         */
  	        init: function (cfg) {
  	            this.cfg = this.cfg.extend(cfg);
  	        },

  	        /**
  	         * Derives a key from a password.
  	         *
  	         * @param {WordArray|string} password The password.
  	         * @param {WordArray|string} salt A salt.
  	         *
  	         * @return {WordArray} The derived key.
  	         *
  	         * @example
  	         *
  	         *     var key = kdf.compute(password, salt);
  	         */
  	        compute: function (password, salt) {
  	            var block;

  	            // Shortcut
  	            var cfg = this.cfg;

  	            // Init hasher
  	            var hasher = cfg.hasher.create();

  	            // Initial values
  	            var derivedKey = WordArray.create();

  	            // Shortcuts
  	            var derivedKeyWords = derivedKey.words;
  	            var keySize = cfg.keySize;
  	            var iterations = cfg.iterations;

  	            // Generate key
  	            while (derivedKeyWords.length < keySize) {
  	                if (block) {
  	                    hasher.update(block);
  	                }
  	                block = hasher.update(password).finalize(salt);
  	                hasher.reset();

  	                // Iterations
  	                for (var i = 1; i < iterations; i++) {
  	                    block = hasher.finalize(block);
  	                    hasher.reset();
  	                }

  	                derivedKey.concat(block);
  	            }
  	            derivedKey.sigBytes = keySize * 4;

  	            return derivedKey;
  	        }
  	    });

  	    /**
  	     * Derives a key from a password.
  	     *
  	     * @param {WordArray|string} password The password.
  	     * @param {WordArray|string} salt A salt.
  	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
  	     *
  	     * @return {WordArray} The derived key.
  	     *
  	     * @static
  	     *
  	     * @example
  	     *
  	     *     var key = CryptoJS.EvpKDF(password, salt);
  	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
  	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
  	     */
  	    C.EvpKDF = function (password, salt, cfg) {
  	        return EvpKDF.create(cfg).compute(password, salt);
  	    };
  	}());


  	return CryptoJS.EvpKDF;

  }));
  });

  var cipherCore = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, evpkdf);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	/**
  	 * Cipher core components.
  	 */
  	CryptoJS.lib.Cipher || (function (undefined$1) {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var Base = C_lib.Base;
  	    var WordArray = C_lib.WordArray;
  	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
  	    var C_enc = C.enc;
  	    var Utf8 = C_enc.Utf8;
  	    var Base64 = C_enc.Base64;
  	    var C_algo = C.algo;
  	    var EvpKDF = C_algo.EvpKDF;

  	    /**
  	     * Abstract base cipher template.
  	     *
  	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
  	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
  	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
  	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
  	     */
  	    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
  	        /**
  	         * Configuration options.
  	         *
  	         * @property {WordArray} iv The IV to use for this operation.
  	         */
  	        cfg: Base.extend(),

  	        /**
  	         * Creates this cipher in encryption mode.
  	         *
  	         * @param {WordArray} key The key.
  	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
  	         *
  	         * @return {Cipher} A cipher instance.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
  	         */
  	        createEncryptor: function (key, cfg) {
  	            return this.create(this._ENC_XFORM_MODE, key, cfg);
  	        },

  	        /**
  	         * Creates this cipher in decryption mode.
  	         *
  	         * @param {WordArray} key The key.
  	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
  	         *
  	         * @return {Cipher} A cipher instance.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
  	         */
  	        createDecryptor: function (key, cfg) {
  	            return this.create(this._DEC_XFORM_MODE, key, cfg);
  	        },

  	        /**
  	         * Initializes a newly created cipher.
  	         *
  	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
  	         * @param {WordArray} key The key.
  	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
  	         *
  	         * @example
  	         *
  	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
  	         */
  	        init: function (xformMode, key, cfg) {
  	            // Apply config defaults
  	            this.cfg = this.cfg.extend(cfg);

  	            // Store transform mode and key
  	            this._xformMode = xformMode;
  	            this._key = key;

  	            // Set initial values
  	            this.reset();
  	        },

  	        /**
  	         * Resets this cipher to its initial state.
  	         *
  	         * @example
  	         *
  	         *     cipher.reset();
  	         */
  	        reset: function () {
  	            // Reset data buffer
  	            BufferedBlockAlgorithm.reset.call(this);

  	            // Perform concrete-cipher logic
  	            this._doReset();
  	        },

  	        /**
  	         * Adds data to be encrypted or decrypted.
  	         *
  	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
  	         *
  	         * @return {WordArray} The data after processing.
  	         *
  	         * @example
  	         *
  	         *     var encrypted = cipher.process('data');
  	         *     var encrypted = cipher.process(wordArray);
  	         */
  	        process: function (dataUpdate) {
  	            // Append
  	            this._append(dataUpdate);

  	            // Process available blocks
  	            return this._process();
  	        },

  	        /**
  	         * Finalizes the encryption or decryption process.
  	         * Note that the finalize operation is effectively a destructive, read-once operation.
  	         *
  	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
  	         *
  	         * @return {WordArray} The data after final processing.
  	         *
  	         * @example
  	         *
  	         *     var encrypted = cipher.finalize();
  	         *     var encrypted = cipher.finalize('data');
  	         *     var encrypted = cipher.finalize(wordArray);
  	         */
  	        finalize: function (dataUpdate) {
  	            // Final data update
  	            if (dataUpdate) {
  	                this._append(dataUpdate);
  	            }

  	            // Perform concrete-cipher logic
  	            var finalProcessedData = this._doFinalize();

  	            return finalProcessedData;
  	        },

  	        keySize: 128/32,

  	        ivSize: 128/32,

  	        _ENC_XFORM_MODE: 1,

  	        _DEC_XFORM_MODE: 2,

  	        /**
  	         * Creates shortcut functions to a cipher's object interface.
  	         *
  	         * @param {Cipher} cipher The cipher to create a helper for.
  	         *
  	         * @return {Object} An object with encrypt and decrypt shortcut functions.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
  	         */
  	        _createHelper: (function () {
  	            function selectCipherStrategy(key) {
  	                if (typeof key == 'string') {
  	                    return PasswordBasedCipher;
  	                } else {
  	                    return SerializableCipher;
  	                }
  	            }

  	            return function (cipher) {
  	                return {
  	                    encrypt: function (message, key, cfg) {
  	                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
  	                    },

  	                    decrypt: function (ciphertext, key, cfg) {
  	                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
  	                    }
  	                };
  	            };
  	        }())
  	    });

  	    /**
  	     * Abstract base stream cipher template.
  	     *
  	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
  	     */
  	    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
  	        _doFinalize: function () {
  	            // Process partial blocks
  	            var finalProcessedBlocks = this._process(!!'flush');

  	            return finalProcessedBlocks;
  	        },

  	        blockSize: 1
  	    });

  	    /**
  	     * Mode namespace.
  	     */
  	    var C_mode = C.mode = {};

  	    /**
  	     * Abstract base block cipher mode template.
  	     */
  	    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
  	        /**
  	         * Creates this mode for encryption.
  	         *
  	         * @param {Cipher} cipher A block cipher instance.
  	         * @param {Array} iv The IV words.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
  	         */
  	        createEncryptor: function (cipher, iv) {
  	            return this.Encryptor.create(cipher, iv);
  	        },

  	        /**
  	         * Creates this mode for decryption.
  	         *
  	         * @param {Cipher} cipher A block cipher instance.
  	         * @param {Array} iv The IV words.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
  	         */
  	        createDecryptor: function (cipher, iv) {
  	            return this.Decryptor.create(cipher, iv);
  	        },

  	        /**
  	         * Initializes a newly created mode.
  	         *
  	         * @param {Cipher} cipher A block cipher instance.
  	         * @param {Array} iv The IV words.
  	         *
  	         * @example
  	         *
  	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
  	         */
  	        init: function (cipher, iv) {
  	            this._cipher = cipher;
  	            this._iv = iv;
  	        }
  	    });

  	    /**
  	     * Cipher Block Chaining mode.
  	     */
  	    var CBC = C_mode.CBC = (function () {
  	        /**
  	         * Abstract base CBC mode.
  	         */
  	        var CBC = BlockCipherMode.extend();

  	        /**
  	         * CBC encryptor.
  	         */
  	        CBC.Encryptor = CBC.extend({
  	            /**
  	             * Processes the data block at offset.
  	             *
  	             * @param {Array} words The data words to operate on.
  	             * @param {number} offset The offset where the block starts.
  	             *
  	             * @example
  	             *
  	             *     mode.processBlock(data.words, offset);
  	             */
  	            processBlock: function (words, offset) {
  	                // Shortcuts
  	                var cipher = this._cipher;
  	                var blockSize = cipher.blockSize;

  	                // XOR and encrypt
  	                xorBlock.call(this, words, offset, blockSize);
  	                cipher.encryptBlock(words, offset);

  	                // Remember this block to use with next block
  	                this._prevBlock = words.slice(offset, offset + blockSize);
  	            }
  	        });

  	        /**
  	         * CBC decryptor.
  	         */
  	        CBC.Decryptor = CBC.extend({
  	            /**
  	             * Processes the data block at offset.
  	             *
  	             * @param {Array} words The data words to operate on.
  	             * @param {number} offset The offset where the block starts.
  	             *
  	             * @example
  	             *
  	             *     mode.processBlock(data.words, offset);
  	             */
  	            processBlock: function (words, offset) {
  	                // Shortcuts
  	                var cipher = this._cipher;
  	                var blockSize = cipher.blockSize;

  	                // Remember this block to use with next block
  	                var thisBlock = words.slice(offset, offset + blockSize);

  	                // Decrypt and XOR
  	                cipher.decryptBlock(words, offset);
  	                xorBlock.call(this, words, offset, blockSize);

  	                // This block becomes the previous block
  	                this._prevBlock = thisBlock;
  	            }
  	        });

  	        function xorBlock(words, offset, blockSize) {
  	            var block;

  	            // Shortcut
  	            var iv = this._iv;

  	            // Choose mixing block
  	            if (iv) {
  	                block = iv;

  	                // Remove IV for subsequent blocks
  	                this._iv = undefined$1;
  	            } else {
  	                block = this._prevBlock;
  	            }

  	            // XOR blocks
  	            for (var i = 0; i < blockSize; i++) {
  	                words[offset + i] ^= block[i];
  	            }
  	        }

  	        return CBC;
  	    }());

  	    /**
  	     * Padding namespace.
  	     */
  	    var C_pad = C.pad = {};

  	    /**
  	     * PKCS #5/7 padding strategy.
  	     */
  	    var Pkcs7 = C_pad.Pkcs7 = {
  	        /**
  	         * Pads data using the algorithm defined in PKCS #5/7.
  	         *
  	         * @param {WordArray} data The data to pad.
  	         * @param {number} blockSize The multiple that the data should be padded to.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
  	         */
  	        pad: function (data, blockSize) {
  	            // Shortcut
  	            var blockSizeBytes = blockSize * 4;

  	            // Count padding bytes
  	            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

  	            // Create padding word
  	            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

  	            // Create padding
  	            var paddingWords = [];
  	            for (var i = 0; i < nPaddingBytes; i += 4) {
  	                paddingWords.push(paddingWord);
  	            }
  	            var padding = WordArray.create(paddingWords, nPaddingBytes);

  	            // Add padding
  	            data.concat(padding);
  	        },

  	        /**
  	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
  	         *
  	         * @param {WordArray} data The data to unpad.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
  	         */
  	        unpad: function (data) {
  	            // Get number of padding bytes from last byte
  	            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

  	            // Remove padding
  	            data.sigBytes -= nPaddingBytes;
  	        }
  	    };

  	    /**
  	     * Abstract base block cipher template.
  	     *
  	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
  	     */
  	    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
  	        /**
  	         * Configuration options.
  	         *
  	         * @property {Mode} mode The block mode to use. Default: CBC
  	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
  	         */
  	        cfg: Cipher.cfg.extend({
  	            mode: CBC,
  	            padding: Pkcs7
  	        }),

  	        reset: function () {
  	            var modeCreator;

  	            // Reset cipher
  	            Cipher.reset.call(this);

  	            // Shortcuts
  	            var cfg = this.cfg;
  	            var iv = cfg.iv;
  	            var mode = cfg.mode;

  	            // Reset block mode
  	            if (this._xformMode == this._ENC_XFORM_MODE) {
  	                modeCreator = mode.createEncryptor;
  	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
  	                modeCreator = mode.createDecryptor;
  	                // Keep at least one block in the buffer for unpadding
  	                this._minBufferSize = 1;
  	            }

  	            if (this._mode && this._mode.__creator == modeCreator) {
  	                this._mode.init(this, iv && iv.words);
  	            } else {
  	                this._mode = modeCreator.call(mode, this, iv && iv.words);
  	                this._mode.__creator = modeCreator;
  	            }
  	        },

  	        _doProcessBlock: function (words, offset) {
  	            this._mode.processBlock(words, offset);
  	        },

  	        _doFinalize: function () {
  	            var finalProcessedBlocks;

  	            // Shortcut
  	            var padding = this.cfg.padding;

  	            // Finalize
  	            if (this._xformMode == this._ENC_XFORM_MODE) {
  	                // Pad data
  	                padding.pad(this._data, this.blockSize);

  	                // Process final blocks
  	                finalProcessedBlocks = this._process(!!'flush');
  	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
  	                // Process final blocks
  	                finalProcessedBlocks = this._process(!!'flush');

  	                // Unpad data
  	                padding.unpad(finalProcessedBlocks);
  	            }

  	            return finalProcessedBlocks;
  	        },

  	        blockSize: 128/32
  	    });

  	    /**
  	     * A collection of cipher parameters.
  	     *
  	     * @property {WordArray} ciphertext The raw ciphertext.
  	     * @property {WordArray} key The key to this ciphertext.
  	     * @property {WordArray} iv The IV used in the ciphering operation.
  	     * @property {WordArray} salt The salt used with a key derivation function.
  	     * @property {Cipher} algorithm The cipher algorithm.
  	     * @property {Mode} mode The block mode used in the ciphering operation.
  	     * @property {Padding} padding The padding scheme used in the ciphering operation.
  	     * @property {number} blockSize The block size of the cipher.
  	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
  	     */
  	    var CipherParams = C_lib.CipherParams = Base.extend({
  	        /**
  	         * Initializes a newly created cipher params object.
  	         *
  	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
  	         *
  	         * @example
  	         *
  	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
  	         *         ciphertext: ciphertextWordArray,
  	         *         key: keyWordArray,
  	         *         iv: ivWordArray,
  	         *         salt: saltWordArray,
  	         *         algorithm: CryptoJS.algo.AES,
  	         *         mode: CryptoJS.mode.CBC,
  	         *         padding: CryptoJS.pad.PKCS7,
  	         *         blockSize: 4,
  	         *         formatter: CryptoJS.format.OpenSSL
  	         *     });
  	         */
  	        init: function (cipherParams) {
  	            this.mixIn(cipherParams);
  	        },

  	        /**
  	         * Converts this cipher params object to a string.
  	         *
  	         * @param {Format} formatter (Optional) The formatting strategy to use.
  	         *
  	         * @return {string} The stringified cipher params.
  	         *
  	         * @throws Error If neither the formatter nor the default formatter is set.
  	         *
  	         * @example
  	         *
  	         *     var string = cipherParams + '';
  	         *     var string = cipherParams.toString();
  	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
  	         */
  	        toString: function (formatter) {
  	            return (formatter || this.formatter).stringify(this);
  	        }
  	    });

  	    /**
  	     * Format namespace.
  	     */
  	    var C_format = C.format = {};

  	    /**
  	     * OpenSSL formatting strategy.
  	     */
  	    var OpenSSLFormatter = C_format.OpenSSL = {
  	        /**
  	         * Converts a cipher params object to an OpenSSL-compatible string.
  	         *
  	         * @param {CipherParams} cipherParams The cipher params object.
  	         *
  	         * @return {string} The OpenSSL-compatible string.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
  	         */
  	        stringify: function (cipherParams) {
  	            var wordArray;

  	            // Shortcuts
  	            var ciphertext = cipherParams.ciphertext;
  	            var salt = cipherParams.salt;

  	            // Format
  	            if (salt) {
  	                wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
  	            } else {
  	                wordArray = ciphertext;
  	            }

  	            return wordArray.toString(Base64);
  	        },

  	        /**
  	         * Converts an OpenSSL-compatible string to a cipher params object.
  	         *
  	         * @param {string} openSSLStr The OpenSSL-compatible string.
  	         *
  	         * @return {CipherParams} The cipher params object.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
  	         */
  	        parse: function (openSSLStr) {
  	            var salt;

  	            // Parse base64
  	            var ciphertext = Base64.parse(openSSLStr);

  	            // Shortcut
  	            var ciphertextWords = ciphertext.words;

  	            // Test for salt
  	            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
  	                // Extract salt
  	                salt = WordArray.create(ciphertextWords.slice(2, 4));

  	                // Remove salt from ciphertext
  	                ciphertextWords.splice(0, 4);
  	                ciphertext.sigBytes -= 16;
  	            }

  	            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
  	        }
  	    };

  	    /**
  	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
  	     */
  	    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
  	        /**
  	         * Configuration options.
  	         *
  	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
  	         */
  	        cfg: Base.extend({
  	            format: OpenSSLFormatter
  	        }),

  	        /**
  	         * Encrypts a message.
  	         *
  	         * @param {Cipher} cipher The cipher algorithm to use.
  	         * @param {WordArray|string} message The message to encrypt.
  	         * @param {WordArray} key The key.
  	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
  	         *
  	         * @return {CipherParams} A cipher params object.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
  	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
  	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
  	         */
  	        encrypt: function (cipher, message, key, cfg) {
  	            // Apply config defaults
  	            cfg = this.cfg.extend(cfg);

  	            // Encrypt
  	            var encryptor = cipher.createEncryptor(key, cfg);
  	            var ciphertext = encryptor.finalize(message);

  	            // Shortcut
  	            var cipherCfg = encryptor.cfg;

  	            // Create and return serializable cipher params
  	            return CipherParams.create({
  	                ciphertext: ciphertext,
  	                key: key,
  	                iv: cipherCfg.iv,
  	                algorithm: cipher,
  	                mode: cipherCfg.mode,
  	                padding: cipherCfg.padding,
  	                blockSize: cipher.blockSize,
  	                formatter: cfg.format
  	            });
  	        },

  	        /**
  	         * Decrypts serialized ciphertext.
  	         *
  	         * @param {Cipher} cipher The cipher algorithm to use.
  	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
  	         * @param {WordArray} key The key.
  	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
  	         *
  	         * @return {WordArray} The plaintext.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
  	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
  	         */
  	        decrypt: function (cipher, ciphertext, key, cfg) {
  	            // Apply config defaults
  	            cfg = this.cfg.extend(cfg);

  	            // Convert string to CipherParams
  	            ciphertext = this._parse(ciphertext, cfg.format);

  	            // Decrypt
  	            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

  	            return plaintext;
  	        },

  	        /**
  	         * Converts serialized ciphertext to CipherParams,
  	         * else assumed CipherParams already and returns ciphertext unchanged.
  	         *
  	         * @param {CipherParams|string} ciphertext The ciphertext.
  	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
  	         *
  	         * @return {CipherParams} The unserialized ciphertext.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
  	         */
  	        _parse: function (ciphertext, format) {
  	            if (typeof ciphertext == 'string') {
  	                return format.parse(ciphertext, this);
  	            } else {
  	                return ciphertext;
  	            }
  	        }
  	    });

  	    /**
  	     * Key derivation function namespace.
  	     */
  	    var C_kdf = C.kdf = {};

  	    /**
  	     * OpenSSL key derivation function.
  	     */
  	    var OpenSSLKdf = C_kdf.OpenSSL = {
  	        /**
  	         * Derives a key and IV from a password.
  	         *
  	         * @param {string} password The password to derive from.
  	         * @param {number} keySize The size in words of the key to generate.
  	         * @param {number} ivSize The size in words of the IV to generate.
  	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
  	         *
  	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
  	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
  	         */
  	        execute: function (password, keySize, ivSize, salt, hasher) {
  	            // Generate random salt
  	            if (!salt) {
  	                salt = WordArray.random(64/8);
  	            }

  	            // Derive key and IV
  	            if (!hasher) {
  	                var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);
  	            } else {
  	                var key = EvpKDF.create({ keySize: keySize + ivSize, hasher: hasher }).compute(password, salt);
  	            }


  	            // Separate key and IV
  	            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
  	            key.sigBytes = keySize * 4;

  	            // Return params
  	            return CipherParams.create({ key: key, iv: iv, salt: salt });
  	        }
  	    };

  	    /**
  	     * A serializable cipher wrapper that derives the key from a password,
  	     * and returns ciphertext as a serializable cipher params object.
  	     */
  	    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
  	        /**
  	         * Configuration options.
  	         *
  	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
  	         */
  	        cfg: SerializableCipher.cfg.extend({
  	            kdf: OpenSSLKdf
  	        }),

  	        /**
  	         * Encrypts a message using a password.
  	         *
  	         * @param {Cipher} cipher The cipher algorithm to use.
  	         * @param {WordArray|string} message The message to encrypt.
  	         * @param {string} password The password.
  	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
  	         *
  	         * @return {CipherParams} A cipher params object.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
  	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
  	         */
  	        encrypt: function (cipher, message, password, cfg) {
  	            // Apply config defaults
  	            cfg = this.cfg.extend(cfg);

  	            // Derive key and other params
  	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, cfg.salt, cfg.hasher);

  	            // Add IV to config
  	            cfg.iv = derivedParams.iv;

  	            // Encrypt
  	            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

  	            // Mix in derived params
  	            ciphertext.mixIn(derivedParams);

  	            return ciphertext;
  	        },

  	        /**
  	         * Decrypts serialized ciphertext using a password.
  	         *
  	         * @param {Cipher} cipher The cipher algorithm to use.
  	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
  	         * @param {string} password The password.
  	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
  	         *
  	         * @return {WordArray} The plaintext.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
  	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
  	         */
  	        decrypt: function (cipher, ciphertext, password, cfg) {
  	            // Apply config defaults
  	            cfg = this.cfg.extend(cfg);

  	            // Convert string to CipherParams
  	            ciphertext = this._parse(ciphertext, cfg.format);

  	            // Derive key and other params
  	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt, cfg.hasher);

  	            // Add IV to config
  	            cfg.iv = derivedParams.iv;

  	            // Decrypt
  	            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

  	            return plaintext;
  	        }
  	    });
  	}());


  }));
  });

  var modeCfb = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, cipherCore);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	/**
  	 * Cipher Feedback block mode.
  	 */
  	CryptoJS.mode.CFB = (function () {
  	    var CFB = CryptoJS.lib.BlockCipherMode.extend();

  	    CFB.Encryptor = CFB.extend({
  	        processBlock: function (words, offset) {
  	            // Shortcuts
  	            var cipher = this._cipher;
  	            var blockSize = cipher.blockSize;

  	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

  	            // Remember this block to use with next block
  	            this._prevBlock = words.slice(offset, offset + blockSize);
  	        }
  	    });

  	    CFB.Decryptor = CFB.extend({
  	        processBlock: function (words, offset) {
  	            // Shortcuts
  	            var cipher = this._cipher;
  	            var blockSize = cipher.blockSize;

  	            // Remember this block to use with next block
  	            var thisBlock = words.slice(offset, offset + blockSize);

  	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

  	            // This block becomes the previous block
  	            this._prevBlock = thisBlock;
  	        }
  	    });

  	    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
  	        var keystream;

  	        // Shortcut
  	        var iv = this._iv;

  	        // Generate keystream
  	        if (iv) {
  	            keystream = iv.slice(0);

  	            // Remove IV for subsequent blocks
  	            this._iv = undefined;
  	        } else {
  	            keystream = this._prevBlock;
  	        }
  	        cipher.encryptBlock(keystream, 0);

  	        // Encrypt
  	        for (var i = 0; i < blockSize; i++) {
  	            words[offset + i] ^= keystream[i];
  	        }
  	    }

  	    return CFB;
  	}());


  	return CryptoJS.mode.CFB;

  }));
  });

  var modeCtr = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, cipherCore);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	/**
  	 * Counter block mode.
  	 */
  	CryptoJS.mode.CTR = (function () {
  	    var CTR = CryptoJS.lib.BlockCipherMode.extend();

  	    var Encryptor = CTR.Encryptor = CTR.extend({
  	        processBlock: function (words, offset) {
  	            // Shortcuts
  	            var cipher = this._cipher;
  	            var blockSize = cipher.blockSize;
  	            var iv = this._iv;
  	            var counter = this._counter;

  	            // Generate keystream
  	            if (iv) {
  	                counter = this._counter = iv.slice(0);

  	                // Remove IV for subsequent blocks
  	                this._iv = undefined;
  	            }
  	            var keystream = counter.slice(0);
  	            cipher.encryptBlock(keystream, 0);

  	            // Increment counter
  	            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0;

  	            // Encrypt
  	            for (var i = 0; i < blockSize; i++) {
  	                words[offset + i] ^= keystream[i];
  	            }
  	        }
  	    });

  	    CTR.Decryptor = Encryptor;

  	    return CTR;
  	}());


  	return CryptoJS.mode.CTR;

  }));
  });

  var modeCtrGladman = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, cipherCore);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	/** @preserve
  	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
  	 * derived from CryptoJS.mode.CTR
  	 * Jan Hruby jhruby.web@gmail.com
  	 */
  	CryptoJS.mode.CTRGladman = (function () {
  	    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

  		function incWord(word)
  		{
  			if (((word >> 24) & 0xff) === 0xff) { //overflow
  			var b1 = (word >> 16)&0xff;
  			var b2 = (word >> 8)&0xff;
  			var b3 = word & 0xff;

  			if (b1 === 0xff) // overflow b1
  			{
  			b1 = 0;
  			if (b2 === 0xff)
  			{
  				b2 = 0;
  				if (b3 === 0xff)
  				{
  					b3 = 0;
  				}
  				else
  				{
  					++b3;
  				}
  			}
  			else
  			{
  				++b2;
  			}
  			}
  			else
  			{
  			++b1;
  			}

  			word = 0;
  			word += (b1 << 16);
  			word += (b2 << 8);
  			word += b3;
  			}
  			else
  			{
  			word += (0x01 << 24);
  			}
  			return word;
  		}

  		function incCounter(counter)
  		{
  			if ((counter[0] = incWord(counter[0])) === 0)
  			{
  				// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
  				counter[1] = incWord(counter[1]);
  			}
  			return counter;
  		}

  	    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
  	        processBlock: function (words, offset) {
  	            // Shortcuts
  	            var cipher = this._cipher;
  	            var blockSize = cipher.blockSize;
  	            var iv = this._iv;
  	            var counter = this._counter;

  	            // Generate keystream
  	            if (iv) {
  	                counter = this._counter = iv.slice(0);

  	                // Remove IV for subsequent blocks
  	                this._iv = undefined;
  	            }

  				incCounter(counter);

  				var keystream = counter.slice(0);
  	            cipher.encryptBlock(keystream, 0);

  	            // Encrypt
  	            for (var i = 0; i < blockSize; i++) {
  	                words[offset + i] ^= keystream[i];
  	            }
  	        }
  	    });

  	    CTRGladman.Decryptor = Encryptor;

  	    return CTRGladman;
  	}());




  	return CryptoJS.mode.CTRGladman;

  }));
  });

  var modeOfb = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, cipherCore);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	/**
  	 * Output Feedback block mode.
  	 */
  	CryptoJS.mode.OFB = (function () {
  	    var OFB = CryptoJS.lib.BlockCipherMode.extend();

  	    var Encryptor = OFB.Encryptor = OFB.extend({
  	        processBlock: function (words, offset) {
  	            // Shortcuts
  	            var cipher = this._cipher;
  	            var blockSize = cipher.blockSize;
  	            var iv = this._iv;
  	            var keystream = this._keystream;

  	            // Generate keystream
  	            if (iv) {
  	                keystream = this._keystream = iv.slice(0);

  	                // Remove IV for subsequent blocks
  	                this._iv = undefined;
  	            }
  	            cipher.encryptBlock(keystream, 0);

  	            // Encrypt
  	            for (var i = 0; i < blockSize; i++) {
  	                words[offset + i] ^= keystream[i];
  	            }
  	        }
  	    });

  	    OFB.Decryptor = Encryptor;

  	    return OFB;
  	}());


  	return CryptoJS.mode.OFB;

  }));
  });

  var modeEcb = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, cipherCore);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	/**
  	 * Electronic Codebook block mode.
  	 */
  	CryptoJS.mode.ECB = (function () {
  	    var ECB = CryptoJS.lib.BlockCipherMode.extend();

  	    ECB.Encryptor = ECB.extend({
  	        processBlock: function (words, offset) {
  	            this._cipher.encryptBlock(words, offset);
  	        }
  	    });

  	    ECB.Decryptor = ECB.extend({
  	        processBlock: function (words, offset) {
  	            this._cipher.decryptBlock(words, offset);
  	        }
  	    });

  	    return ECB;
  	}());


  	return CryptoJS.mode.ECB;

  }));
  });

  var padAnsix923 = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, cipherCore);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	/**
  	 * ANSI X.923 padding strategy.
  	 */
  	CryptoJS.pad.AnsiX923 = {
  	    pad: function (data, blockSize) {
  	        // Shortcuts
  	        var dataSigBytes = data.sigBytes;
  	        var blockSizeBytes = blockSize * 4;

  	        // Count padding bytes
  	        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

  	        // Compute last byte position
  	        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

  	        // Pad
  	        data.clamp();
  	        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
  	        data.sigBytes += nPaddingBytes;
  	    },

  	    unpad: function (data) {
  	        // Get number of padding bytes from last byte
  	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

  	        // Remove padding
  	        data.sigBytes -= nPaddingBytes;
  	    }
  	};


  	return CryptoJS.pad.Ansix923;

  }));
  });

  var padIso10126 = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, cipherCore);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	/**
  	 * ISO 10126 padding strategy.
  	 */
  	CryptoJS.pad.Iso10126 = {
  	    pad: function (data, blockSize) {
  	        // Shortcut
  	        var blockSizeBytes = blockSize * 4;

  	        // Count padding bytes
  	        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

  	        // Pad
  	        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
  	             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
  	    },

  	    unpad: function (data) {
  	        // Get number of padding bytes from last byte
  	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

  	        // Remove padding
  	        data.sigBytes -= nPaddingBytes;
  	    }
  	};


  	return CryptoJS.pad.Iso10126;

  }));
  });

  var padIso97971 = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, cipherCore);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	/**
  	 * ISO/IEC 9797-1 Padding Method 2.
  	 */
  	CryptoJS.pad.Iso97971 = {
  	    pad: function (data, blockSize) {
  	        // Add 0x80 byte
  	        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

  	        // Zero pad the rest
  	        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
  	    },

  	    unpad: function (data) {
  	        // Remove zero padding
  	        CryptoJS.pad.ZeroPadding.unpad(data);

  	        // Remove one more byte -- the 0x80 byte
  	        data.sigBytes--;
  	    }
  	};


  	return CryptoJS.pad.Iso97971;

  }));
  });

  var padZeropadding = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, cipherCore);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	/**
  	 * Zero padding strategy.
  	 */
  	CryptoJS.pad.ZeroPadding = {
  	    pad: function (data, blockSize) {
  	        // Shortcut
  	        var blockSizeBytes = blockSize * 4;

  	        // Pad
  	        data.clamp();
  	        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
  	    },

  	    unpad: function (data) {
  	        // Shortcut
  	        var dataWords = data.words;

  	        // Unpad
  	        var i = data.sigBytes - 1;
  	        for (var i = data.sigBytes - 1; i >= 0; i--) {
  	            if (((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
  	                data.sigBytes = i + 1;
  	                break;
  	            }
  	        }
  	    }
  	};


  	return CryptoJS.pad.ZeroPadding;

  }));
  });

  var padNopadding = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, cipherCore);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	/**
  	 * A noop padding strategy.
  	 */
  	CryptoJS.pad.NoPadding = {
  	    pad: function () {
  	    },

  	    unpad: function () {
  	    }
  	};


  	return CryptoJS.pad.NoPadding;

  }));
  });

  var formatHex = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, cipherCore);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function (undefined$1) {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var CipherParams = C_lib.CipherParams;
  	    var C_enc = C.enc;
  	    var Hex = C_enc.Hex;
  	    var C_format = C.format;

  	    var HexFormatter = C_format.Hex = {
  	        /**
  	         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
  	         *
  	         * @param {CipherParams} cipherParams The cipher params object.
  	         *
  	         * @return {string} The hexadecimally encoded string.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
  	         */
  	        stringify: function (cipherParams) {
  	            return cipherParams.ciphertext.toString(Hex);
  	        },

  	        /**
  	         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
  	         *
  	         * @param {string} input The hexadecimally encoded string.
  	         *
  	         * @return {CipherParams} The cipher params object.
  	         *
  	         * @static
  	         *
  	         * @example
  	         *
  	         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
  	         */
  	        parse: function (input) {
  	            var ciphertext = Hex.parse(input);
  	            return CipherParams.create({ ciphertext: ciphertext });
  	        }
  	    };
  	}());


  	return CryptoJS.format.Hex;

  }));
  });

  var aes = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, encBase64, md5, evpkdf, cipherCore);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function () {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var BlockCipher = C_lib.BlockCipher;
  	    var C_algo = C.algo;

  	    // Lookup tables
  	    var SBOX = [];
  	    var INV_SBOX = [];
  	    var SUB_MIX_0 = [];
  	    var SUB_MIX_1 = [];
  	    var SUB_MIX_2 = [];
  	    var SUB_MIX_3 = [];
  	    var INV_SUB_MIX_0 = [];
  	    var INV_SUB_MIX_1 = [];
  	    var INV_SUB_MIX_2 = [];
  	    var INV_SUB_MIX_3 = [];

  	    // Compute lookup tables
  	    (function () {
  	        // Compute double table
  	        var d = [];
  	        for (var i = 0; i < 256; i++) {
  	            if (i < 128) {
  	                d[i] = i << 1;
  	            } else {
  	                d[i] = (i << 1) ^ 0x11b;
  	            }
  	        }

  	        // Walk GF(2^8)
  	        var x = 0;
  	        var xi = 0;
  	        for (var i = 0; i < 256; i++) {
  	            // Compute sbox
  	            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
  	            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
  	            SBOX[x] = sx;
  	            INV_SBOX[sx] = x;

  	            // Compute multiplication
  	            var x2 = d[x];
  	            var x4 = d[x2];
  	            var x8 = d[x4];

  	            // Compute sub bytes, mix columns tables
  	            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
  	            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
  	            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
  	            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
  	            SUB_MIX_3[x] = t;

  	            // Compute inv sub bytes, inv mix columns tables
  	            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
  	            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
  	            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
  	            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
  	            INV_SUB_MIX_3[sx] = t;

  	            // Compute next counter
  	            if (!x) {
  	                x = xi = 1;
  	            } else {
  	                x = x2 ^ d[d[d[x8 ^ x2]]];
  	                xi ^= d[d[xi]];
  	            }
  	        }
  	    }());

  	    // Precomputed Rcon lookup
  	    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

  	    /**
  	     * AES block cipher algorithm.
  	     */
  	    var AES = C_algo.AES = BlockCipher.extend({
  	        _doReset: function () {
  	            var t;

  	            // Skip reset of nRounds has been set before and key did not change
  	            if (this._nRounds && this._keyPriorReset === this._key) {
  	                return;
  	            }

  	            // Shortcuts
  	            var key = this._keyPriorReset = this._key;
  	            var keyWords = key.words;
  	            var keySize = key.sigBytes / 4;

  	            // Compute number of rounds
  	            var nRounds = this._nRounds = keySize + 6;

  	            // Compute number of key schedule rows
  	            var ksRows = (nRounds + 1) * 4;

  	            // Compute key schedule
  	            var keySchedule = this._keySchedule = [];
  	            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
  	                if (ksRow < keySize) {
  	                    keySchedule[ksRow] = keyWords[ksRow];
  	                } else {
  	                    t = keySchedule[ksRow - 1];

  	                    if (!(ksRow % keySize)) {
  	                        // Rot word
  	                        t = (t << 8) | (t >>> 24);

  	                        // Sub word
  	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

  	                        // Mix Rcon
  	                        t ^= RCON[(ksRow / keySize) | 0] << 24;
  	                    } else if (keySize > 6 && ksRow % keySize == 4) {
  	                        // Sub word
  	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
  	                    }

  	                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
  	                }
  	            }

  	            // Compute inv key schedule
  	            var invKeySchedule = this._invKeySchedule = [];
  	            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
  	                var ksRow = ksRows - invKsRow;

  	                if (invKsRow % 4) {
  	                    var t = keySchedule[ksRow];
  	                } else {
  	                    var t = keySchedule[ksRow - 4];
  	                }

  	                if (invKsRow < 4 || ksRow <= 4) {
  	                    invKeySchedule[invKsRow] = t;
  	                } else {
  	                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
  	                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
  	                }
  	            }
  	        },

  	        encryptBlock: function (M, offset) {
  	            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
  	        },

  	        decryptBlock: function (M, offset) {
  	            // Swap 2nd and 4th rows
  	            var t = M[offset + 1];
  	            M[offset + 1] = M[offset + 3];
  	            M[offset + 3] = t;

  	            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

  	            // Inv swap 2nd and 4th rows
  	            var t = M[offset + 1];
  	            M[offset + 1] = M[offset + 3];
  	            M[offset + 3] = t;
  	        },

  	        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
  	            // Shortcut
  	            var nRounds = this._nRounds;

  	            // Get input, add round key
  	            var s0 = M[offset]     ^ keySchedule[0];
  	            var s1 = M[offset + 1] ^ keySchedule[1];
  	            var s2 = M[offset + 2] ^ keySchedule[2];
  	            var s3 = M[offset + 3] ^ keySchedule[3];

  	            // Key schedule row counter
  	            var ksRow = 4;

  	            // Rounds
  	            for (var round = 1; round < nRounds; round++) {
  	                // Shift rows, sub bytes, mix columns, add round key
  	                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
  	                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
  	                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
  	                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

  	                // Update state
  	                s0 = t0;
  	                s1 = t1;
  	                s2 = t2;
  	                s3 = t3;
  	            }

  	            // Shift rows, sub bytes, add round key
  	            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
  	            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
  	            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
  	            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

  	            // Set output
  	            M[offset]     = t0;
  	            M[offset + 1] = t1;
  	            M[offset + 2] = t2;
  	            M[offset + 3] = t3;
  	        },

  	        keySize: 256/32
  	    });

  	    /**
  	     * Shortcut functions to the cipher's object interface.
  	     *
  	     * @example
  	     *
  	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
  	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
  	     */
  	    C.AES = BlockCipher._createHelper(AES);
  	}());


  	return CryptoJS.AES;

  }));
  });

  var tripledes = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, encBase64, md5, evpkdf, cipherCore);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function () {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var WordArray = C_lib.WordArray;
  	    var BlockCipher = C_lib.BlockCipher;
  	    var C_algo = C.algo;

  	    // Permuted Choice 1 constants
  	    var PC1 = [
  	        57, 49, 41, 33, 25, 17, 9,  1,
  	        58, 50, 42, 34, 26, 18, 10, 2,
  	        59, 51, 43, 35, 27, 19, 11, 3,
  	        60, 52, 44, 36, 63, 55, 47, 39,
  	        31, 23, 15, 7,  62, 54, 46, 38,
  	        30, 22, 14, 6,  61, 53, 45, 37,
  	        29, 21, 13, 5,  28, 20, 12, 4
  	    ];

  	    // Permuted Choice 2 constants
  	    var PC2 = [
  	        14, 17, 11, 24, 1,  5,
  	        3,  28, 15, 6,  21, 10,
  	        23, 19, 12, 4,  26, 8,
  	        16, 7,  27, 20, 13, 2,
  	        41, 52, 31, 37, 47, 55,
  	        30, 40, 51, 45, 33, 48,
  	        44, 49, 39, 56, 34, 53,
  	        46, 42, 50, 36, 29, 32
  	    ];

  	    // Cumulative bit shift constants
  	    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

  	    // SBOXes and round permutation constants
  	    var SBOX_P = [
  	        {
  	            0x0: 0x808200,
  	            0x10000000: 0x8000,
  	            0x20000000: 0x808002,
  	            0x30000000: 0x2,
  	            0x40000000: 0x200,
  	            0x50000000: 0x808202,
  	            0x60000000: 0x800202,
  	            0x70000000: 0x800000,
  	            0x80000000: 0x202,
  	            0x90000000: 0x800200,
  	            0xa0000000: 0x8200,
  	            0xb0000000: 0x808000,
  	            0xc0000000: 0x8002,
  	            0xd0000000: 0x800002,
  	            0xe0000000: 0x0,
  	            0xf0000000: 0x8202,
  	            0x8000000: 0x0,
  	            0x18000000: 0x808202,
  	            0x28000000: 0x8202,
  	            0x38000000: 0x8000,
  	            0x48000000: 0x808200,
  	            0x58000000: 0x200,
  	            0x68000000: 0x808002,
  	            0x78000000: 0x2,
  	            0x88000000: 0x800200,
  	            0x98000000: 0x8200,
  	            0xa8000000: 0x808000,
  	            0xb8000000: 0x800202,
  	            0xc8000000: 0x800002,
  	            0xd8000000: 0x8002,
  	            0xe8000000: 0x202,
  	            0xf8000000: 0x800000,
  	            0x1: 0x8000,
  	            0x10000001: 0x2,
  	            0x20000001: 0x808200,
  	            0x30000001: 0x800000,
  	            0x40000001: 0x808002,
  	            0x50000001: 0x8200,
  	            0x60000001: 0x200,
  	            0x70000001: 0x800202,
  	            0x80000001: 0x808202,
  	            0x90000001: 0x808000,
  	            0xa0000001: 0x800002,
  	            0xb0000001: 0x8202,
  	            0xc0000001: 0x202,
  	            0xd0000001: 0x800200,
  	            0xe0000001: 0x8002,
  	            0xf0000001: 0x0,
  	            0x8000001: 0x808202,
  	            0x18000001: 0x808000,
  	            0x28000001: 0x800000,
  	            0x38000001: 0x200,
  	            0x48000001: 0x8000,
  	            0x58000001: 0x800002,
  	            0x68000001: 0x2,
  	            0x78000001: 0x8202,
  	            0x88000001: 0x8002,
  	            0x98000001: 0x800202,
  	            0xa8000001: 0x202,
  	            0xb8000001: 0x808200,
  	            0xc8000001: 0x800200,
  	            0xd8000001: 0x0,
  	            0xe8000001: 0x8200,
  	            0xf8000001: 0x808002
  	        },
  	        {
  	            0x0: 0x40084010,
  	            0x1000000: 0x4000,
  	            0x2000000: 0x80000,
  	            0x3000000: 0x40080010,
  	            0x4000000: 0x40000010,
  	            0x5000000: 0x40084000,
  	            0x6000000: 0x40004000,
  	            0x7000000: 0x10,
  	            0x8000000: 0x84000,
  	            0x9000000: 0x40004010,
  	            0xa000000: 0x40000000,
  	            0xb000000: 0x84010,
  	            0xc000000: 0x80010,
  	            0xd000000: 0x0,
  	            0xe000000: 0x4010,
  	            0xf000000: 0x40080000,
  	            0x800000: 0x40004000,
  	            0x1800000: 0x84010,
  	            0x2800000: 0x10,
  	            0x3800000: 0x40004010,
  	            0x4800000: 0x40084010,
  	            0x5800000: 0x40000000,
  	            0x6800000: 0x80000,
  	            0x7800000: 0x40080010,
  	            0x8800000: 0x80010,
  	            0x9800000: 0x0,
  	            0xa800000: 0x4000,
  	            0xb800000: 0x40080000,
  	            0xc800000: 0x40000010,
  	            0xd800000: 0x84000,
  	            0xe800000: 0x40084000,
  	            0xf800000: 0x4010,
  	            0x10000000: 0x0,
  	            0x11000000: 0x40080010,
  	            0x12000000: 0x40004010,
  	            0x13000000: 0x40084000,
  	            0x14000000: 0x40080000,
  	            0x15000000: 0x10,
  	            0x16000000: 0x84010,
  	            0x17000000: 0x4000,
  	            0x18000000: 0x4010,
  	            0x19000000: 0x80000,
  	            0x1a000000: 0x80010,
  	            0x1b000000: 0x40000010,
  	            0x1c000000: 0x84000,
  	            0x1d000000: 0x40004000,
  	            0x1e000000: 0x40000000,
  	            0x1f000000: 0x40084010,
  	            0x10800000: 0x84010,
  	            0x11800000: 0x80000,
  	            0x12800000: 0x40080000,
  	            0x13800000: 0x4000,
  	            0x14800000: 0x40004000,
  	            0x15800000: 0x40084010,
  	            0x16800000: 0x10,
  	            0x17800000: 0x40000000,
  	            0x18800000: 0x40084000,
  	            0x19800000: 0x40000010,
  	            0x1a800000: 0x40004010,
  	            0x1b800000: 0x80010,
  	            0x1c800000: 0x0,
  	            0x1d800000: 0x4010,
  	            0x1e800000: 0x40080010,
  	            0x1f800000: 0x84000
  	        },
  	        {
  	            0x0: 0x104,
  	            0x100000: 0x0,
  	            0x200000: 0x4000100,
  	            0x300000: 0x10104,
  	            0x400000: 0x10004,
  	            0x500000: 0x4000004,
  	            0x600000: 0x4010104,
  	            0x700000: 0x4010000,
  	            0x800000: 0x4000000,
  	            0x900000: 0x4010100,
  	            0xa00000: 0x10100,
  	            0xb00000: 0x4010004,
  	            0xc00000: 0x4000104,
  	            0xd00000: 0x10000,
  	            0xe00000: 0x4,
  	            0xf00000: 0x100,
  	            0x80000: 0x4010100,
  	            0x180000: 0x4010004,
  	            0x280000: 0x0,
  	            0x380000: 0x4000100,
  	            0x480000: 0x4000004,
  	            0x580000: 0x10000,
  	            0x680000: 0x10004,
  	            0x780000: 0x104,
  	            0x880000: 0x4,
  	            0x980000: 0x100,
  	            0xa80000: 0x4010000,
  	            0xb80000: 0x10104,
  	            0xc80000: 0x10100,
  	            0xd80000: 0x4000104,
  	            0xe80000: 0x4010104,
  	            0xf80000: 0x4000000,
  	            0x1000000: 0x4010100,
  	            0x1100000: 0x10004,
  	            0x1200000: 0x10000,
  	            0x1300000: 0x4000100,
  	            0x1400000: 0x100,
  	            0x1500000: 0x4010104,
  	            0x1600000: 0x4000004,
  	            0x1700000: 0x0,
  	            0x1800000: 0x4000104,
  	            0x1900000: 0x4000000,
  	            0x1a00000: 0x4,
  	            0x1b00000: 0x10100,
  	            0x1c00000: 0x4010000,
  	            0x1d00000: 0x104,
  	            0x1e00000: 0x10104,
  	            0x1f00000: 0x4010004,
  	            0x1080000: 0x4000000,
  	            0x1180000: 0x104,
  	            0x1280000: 0x4010100,
  	            0x1380000: 0x0,
  	            0x1480000: 0x10004,
  	            0x1580000: 0x4000100,
  	            0x1680000: 0x100,
  	            0x1780000: 0x4010004,
  	            0x1880000: 0x10000,
  	            0x1980000: 0x4010104,
  	            0x1a80000: 0x10104,
  	            0x1b80000: 0x4000004,
  	            0x1c80000: 0x4000104,
  	            0x1d80000: 0x4010000,
  	            0x1e80000: 0x4,
  	            0x1f80000: 0x10100
  	        },
  	        {
  	            0x0: 0x80401000,
  	            0x10000: 0x80001040,
  	            0x20000: 0x401040,
  	            0x30000: 0x80400000,
  	            0x40000: 0x0,
  	            0x50000: 0x401000,
  	            0x60000: 0x80000040,
  	            0x70000: 0x400040,
  	            0x80000: 0x80000000,
  	            0x90000: 0x400000,
  	            0xa0000: 0x40,
  	            0xb0000: 0x80001000,
  	            0xc0000: 0x80400040,
  	            0xd0000: 0x1040,
  	            0xe0000: 0x1000,
  	            0xf0000: 0x80401040,
  	            0x8000: 0x80001040,
  	            0x18000: 0x40,
  	            0x28000: 0x80400040,
  	            0x38000: 0x80001000,
  	            0x48000: 0x401000,
  	            0x58000: 0x80401040,
  	            0x68000: 0x0,
  	            0x78000: 0x80400000,
  	            0x88000: 0x1000,
  	            0x98000: 0x80401000,
  	            0xa8000: 0x400000,
  	            0xb8000: 0x1040,
  	            0xc8000: 0x80000000,
  	            0xd8000: 0x400040,
  	            0xe8000: 0x401040,
  	            0xf8000: 0x80000040,
  	            0x100000: 0x400040,
  	            0x110000: 0x401000,
  	            0x120000: 0x80000040,
  	            0x130000: 0x0,
  	            0x140000: 0x1040,
  	            0x150000: 0x80400040,
  	            0x160000: 0x80401000,
  	            0x170000: 0x80001040,
  	            0x180000: 0x80401040,
  	            0x190000: 0x80000000,
  	            0x1a0000: 0x80400000,
  	            0x1b0000: 0x401040,
  	            0x1c0000: 0x80001000,
  	            0x1d0000: 0x400000,
  	            0x1e0000: 0x40,
  	            0x1f0000: 0x1000,
  	            0x108000: 0x80400000,
  	            0x118000: 0x80401040,
  	            0x128000: 0x0,
  	            0x138000: 0x401000,
  	            0x148000: 0x400040,
  	            0x158000: 0x80000000,
  	            0x168000: 0x80001040,
  	            0x178000: 0x40,
  	            0x188000: 0x80000040,
  	            0x198000: 0x1000,
  	            0x1a8000: 0x80001000,
  	            0x1b8000: 0x80400040,
  	            0x1c8000: 0x1040,
  	            0x1d8000: 0x80401000,
  	            0x1e8000: 0x400000,
  	            0x1f8000: 0x401040
  	        },
  	        {
  	            0x0: 0x80,
  	            0x1000: 0x1040000,
  	            0x2000: 0x40000,
  	            0x3000: 0x20000000,
  	            0x4000: 0x20040080,
  	            0x5000: 0x1000080,
  	            0x6000: 0x21000080,
  	            0x7000: 0x40080,
  	            0x8000: 0x1000000,
  	            0x9000: 0x20040000,
  	            0xa000: 0x20000080,
  	            0xb000: 0x21040080,
  	            0xc000: 0x21040000,
  	            0xd000: 0x0,
  	            0xe000: 0x1040080,
  	            0xf000: 0x21000000,
  	            0x800: 0x1040080,
  	            0x1800: 0x21000080,
  	            0x2800: 0x80,
  	            0x3800: 0x1040000,
  	            0x4800: 0x40000,
  	            0x5800: 0x20040080,
  	            0x6800: 0x21040000,
  	            0x7800: 0x20000000,
  	            0x8800: 0x20040000,
  	            0x9800: 0x0,
  	            0xa800: 0x21040080,
  	            0xb800: 0x1000080,
  	            0xc800: 0x20000080,
  	            0xd800: 0x21000000,
  	            0xe800: 0x1000000,
  	            0xf800: 0x40080,
  	            0x10000: 0x40000,
  	            0x11000: 0x80,
  	            0x12000: 0x20000000,
  	            0x13000: 0x21000080,
  	            0x14000: 0x1000080,
  	            0x15000: 0x21040000,
  	            0x16000: 0x20040080,
  	            0x17000: 0x1000000,
  	            0x18000: 0x21040080,
  	            0x19000: 0x21000000,
  	            0x1a000: 0x1040000,
  	            0x1b000: 0x20040000,
  	            0x1c000: 0x40080,
  	            0x1d000: 0x20000080,
  	            0x1e000: 0x0,
  	            0x1f000: 0x1040080,
  	            0x10800: 0x21000080,
  	            0x11800: 0x1000000,
  	            0x12800: 0x1040000,
  	            0x13800: 0x20040080,
  	            0x14800: 0x20000000,
  	            0x15800: 0x1040080,
  	            0x16800: 0x80,
  	            0x17800: 0x21040000,
  	            0x18800: 0x40080,
  	            0x19800: 0x21040080,
  	            0x1a800: 0x0,
  	            0x1b800: 0x21000000,
  	            0x1c800: 0x1000080,
  	            0x1d800: 0x40000,
  	            0x1e800: 0x20040000,
  	            0x1f800: 0x20000080
  	        },
  	        {
  	            0x0: 0x10000008,
  	            0x100: 0x2000,
  	            0x200: 0x10200000,
  	            0x300: 0x10202008,
  	            0x400: 0x10002000,
  	            0x500: 0x200000,
  	            0x600: 0x200008,
  	            0x700: 0x10000000,
  	            0x800: 0x0,
  	            0x900: 0x10002008,
  	            0xa00: 0x202000,
  	            0xb00: 0x8,
  	            0xc00: 0x10200008,
  	            0xd00: 0x202008,
  	            0xe00: 0x2008,
  	            0xf00: 0x10202000,
  	            0x80: 0x10200000,
  	            0x180: 0x10202008,
  	            0x280: 0x8,
  	            0x380: 0x200000,
  	            0x480: 0x202008,
  	            0x580: 0x10000008,
  	            0x680: 0x10002000,
  	            0x780: 0x2008,
  	            0x880: 0x200008,
  	            0x980: 0x2000,
  	            0xa80: 0x10002008,
  	            0xb80: 0x10200008,
  	            0xc80: 0x0,
  	            0xd80: 0x10202000,
  	            0xe80: 0x202000,
  	            0xf80: 0x10000000,
  	            0x1000: 0x10002000,
  	            0x1100: 0x10200008,
  	            0x1200: 0x10202008,
  	            0x1300: 0x2008,
  	            0x1400: 0x200000,
  	            0x1500: 0x10000000,
  	            0x1600: 0x10000008,
  	            0x1700: 0x202000,
  	            0x1800: 0x202008,
  	            0x1900: 0x0,
  	            0x1a00: 0x8,
  	            0x1b00: 0x10200000,
  	            0x1c00: 0x2000,
  	            0x1d00: 0x10002008,
  	            0x1e00: 0x10202000,
  	            0x1f00: 0x200008,
  	            0x1080: 0x8,
  	            0x1180: 0x202000,
  	            0x1280: 0x200000,
  	            0x1380: 0x10000008,
  	            0x1480: 0x10002000,
  	            0x1580: 0x2008,
  	            0x1680: 0x10202008,
  	            0x1780: 0x10200000,
  	            0x1880: 0x10202000,
  	            0x1980: 0x10200008,
  	            0x1a80: 0x2000,
  	            0x1b80: 0x202008,
  	            0x1c80: 0x200008,
  	            0x1d80: 0x0,
  	            0x1e80: 0x10000000,
  	            0x1f80: 0x10002008
  	        },
  	        {
  	            0x0: 0x100000,
  	            0x10: 0x2000401,
  	            0x20: 0x400,
  	            0x30: 0x100401,
  	            0x40: 0x2100401,
  	            0x50: 0x0,
  	            0x60: 0x1,
  	            0x70: 0x2100001,
  	            0x80: 0x2000400,
  	            0x90: 0x100001,
  	            0xa0: 0x2000001,
  	            0xb0: 0x2100400,
  	            0xc0: 0x2100000,
  	            0xd0: 0x401,
  	            0xe0: 0x100400,
  	            0xf0: 0x2000000,
  	            0x8: 0x2100001,
  	            0x18: 0x0,
  	            0x28: 0x2000401,
  	            0x38: 0x2100400,
  	            0x48: 0x100000,
  	            0x58: 0x2000001,
  	            0x68: 0x2000000,
  	            0x78: 0x401,
  	            0x88: 0x100401,
  	            0x98: 0x2000400,
  	            0xa8: 0x2100000,
  	            0xb8: 0x100001,
  	            0xc8: 0x400,
  	            0xd8: 0x2100401,
  	            0xe8: 0x1,
  	            0xf8: 0x100400,
  	            0x100: 0x2000000,
  	            0x110: 0x100000,
  	            0x120: 0x2000401,
  	            0x130: 0x2100001,
  	            0x140: 0x100001,
  	            0x150: 0x2000400,
  	            0x160: 0x2100400,
  	            0x170: 0x100401,
  	            0x180: 0x401,
  	            0x190: 0x2100401,
  	            0x1a0: 0x100400,
  	            0x1b0: 0x1,
  	            0x1c0: 0x0,
  	            0x1d0: 0x2100000,
  	            0x1e0: 0x2000001,
  	            0x1f0: 0x400,
  	            0x108: 0x100400,
  	            0x118: 0x2000401,
  	            0x128: 0x2100001,
  	            0x138: 0x1,
  	            0x148: 0x2000000,
  	            0x158: 0x100000,
  	            0x168: 0x401,
  	            0x178: 0x2100400,
  	            0x188: 0x2000001,
  	            0x198: 0x2100000,
  	            0x1a8: 0x0,
  	            0x1b8: 0x2100401,
  	            0x1c8: 0x100401,
  	            0x1d8: 0x400,
  	            0x1e8: 0x2000400,
  	            0x1f8: 0x100001
  	        },
  	        {
  	            0x0: 0x8000820,
  	            0x1: 0x20000,
  	            0x2: 0x8000000,
  	            0x3: 0x20,
  	            0x4: 0x20020,
  	            0x5: 0x8020820,
  	            0x6: 0x8020800,
  	            0x7: 0x800,
  	            0x8: 0x8020000,
  	            0x9: 0x8000800,
  	            0xa: 0x20800,
  	            0xb: 0x8020020,
  	            0xc: 0x820,
  	            0xd: 0x0,
  	            0xe: 0x8000020,
  	            0xf: 0x20820,
  	            0x80000000: 0x800,
  	            0x80000001: 0x8020820,
  	            0x80000002: 0x8000820,
  	            0x80000003: 0x8000000,
  	            0x80000004: 0x8020000,
  	            0x80000005: 0x20800,
  	            0x80000006: 0x20820,
  	            0x80000007: 0x20,
  	            0x80000008: 0x8000020,
  	            0x80000009: 0x820,
  	            0x8000000a: 0x20020,
  	            0x8000000b: 0x8020800,
  	            0x8000000c: 0x0,
  	            0x8000000d: 0x8020020,
  	            0x8000000e: 0x8000800,
  	            0x8000000f: 0x20000,
  	            0x10: 0x20820,
  	            0x11: 0x8020800,
  	            0x12: 0x20,
  	            0x13: 0x800,
  	            0x14: 0x8000800,
  	            0x15: 0x8000020,
  	            0x16: 0x8020020,
  	            0x17: 0x20000,
  	            0x18: 0x0,
  	            0x19: 0x20020,
  	            0x1a: 0x8020000,
  	            0x1b: 0x8000820,
  	            0x1c: 0x8020820,
  	            0x1d: 0x20800,
  	            0x1e: 0x820,
  	            0x1f: 0x8000000,
  	            0x80000010: 0x20000,
  	            0x80000011: 0x800,
  	            0x80000012: 0x8020020,
  	            0x80000013: 0x20820,
  	            0x80000014: 0x20,
  	            0x80000015: 0x8020000,
  	            0x80000016: 0x8000000,
  	            0x80000017: 0x8000820,
  	            0x80000018: 0x8020820,
  	            0x80000019: 0x8000020,
  	            0x8000001a: 0x8000800,
  	            0x8000001b: 0x0,
  	            0x8000001c: 0x20800,
  	            0x8000001d: 0x820,
  	            0x8000001e: 0x20020,
  	            0x8000001f: 0x8020800
  	        }
  	    ];

  	    // Masks that select the SBOX input
  	    var SBOX_MASK = [
  	        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
  	        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
  	    ];

  	    /**
  	     * DES block cipher algorithm.
  	     */
  	    var DES = C_algo.DES = BlockCipher.extend({
  	        _doReset: function () {
  	            // Shortcuts
  	            var key = this._key;
  	            var keyWords = key.words;

  	            // Select 56 bits according to PC1
  	            var keyBits = [];
  	            for (var i = 0; i < 56; i++) {
  	                var keyBitPos = PC1[i] - 1;
  	                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
  	            }

  	            // Assemble 16 subkeys
  	            var subKeys = this._subKeys = [];
  	            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
  	                // Create subkey
  	                var subKey = subKeys[nSubKey] = [];

  	                // Shortcut
  	                var bitShift = BIT_SHIFTS[nSubKey];

  	                // Select 48 bits according to PC2
  	                for (var i = 0; i < 24; i++) {
  	                    // Select from the left 28 key bits
  	                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

  	                    // Select from the right 28 key bits
  	                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
  	                }

  	                // Since each subkey is applied to an expanded 32-bit input,
  	                // the subkey can be broken into 8 values scaled to 32-bits,
  	                // which allows the key to be used without expansion
  	                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
  	                for (var i = 1; i < 7; i++) {
  	                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
  	                }
  	                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
  	            }

  	            // Compute inverse subkeys
  	            var invSubKeys = this._invSubKeys = [];
  	            for (var i = 0; i < 16; i++) {
  	                invSubKeys[i] = subKeys[15 - i];
  	            }
  	        },

  	        encryptBlock: function (M, offset) {
  	            this._doCryptBlock(M, offset, this._subKeys);
  	        },

  	        decryptBlock: function (M, offset) {
  	            this._doCryptBlock(M, offset, this._invSubKeys);
  	        },

  	        _doCryptBlock: function (M, offset, subKeys) {
  	            // Get input
  	            this._lBlock = M[offset];
  	            this._rBlock = M[offset + 1];

  	            // Initial permutation
  	            exchangeLR.call(this, 4,  0x0f0f0f0f);
  	            exchangeLR.call(this, 16, 0x0000ffff);
  	            exchangeRL.call(this, 2,  0x33333333);
  	            exchangeRL.call(this, 8,  0x00ff00ff);
  	            exchangeLR.call(this, 1,  0x55555555);

  	            // Rounds
  	            for (var round = 0; round < 16; round++) {
  	                // Shortcuts
  	                var subKey = subKeys[round];
  	                var lBlock = this._lBlock;
  	                var rBlock = this._rBlock;

  	                // Feistel function
  	                var f = 0;
  	                for (var i = 0; i < 8; i++) {
  	                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
  	                }
  	                this._lBlock = rBlock;
  	                this._rBlock = lBlock ^ f;
  	            }

  	            // Undo swap from last round
  	            var t = this._lBlock;
  	            this._lBlock = this._rBlock;
  	            this._rBlock = t;

  	            // Final permutation
  	            exchangeLR.call(this, 1,  0x55555555);
  	            exchangeRL.call(this, 8,  0x00ff00ff);
  	            exchangeRL.call(this, 2,  0x33333333);
  	            exchangeLR.call(this, 16, 0x0000ffff);
  	            exchangeLR.call(this, 4,  0x0f0f0f0f);

  	            // Set output
  	            M[offset] = this._lBlock;
  	            M[offset + 1] = this._rBlock;
  	        },

  	        keySize: 64/32,

  	        ivSize: 64/32,

  	        blockSize: 64/32
  	    });

  	    // Swap bits across the left and right words
  	    function exchangeLR(offset, mask) {
  	        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
  	        this._rBlock ^= t;
  	        this._lBlock ^= t << offset;
  	    }

  	    function exchangeRL(offset, mask) {
  	        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
  	        this._lBlock ^= t;
  	        this._rBlock ^= t << offset;
  	    }

  	    /**
  	     * Shortcut functions to the cipher's object interface.
  	     *
  	     * @example
  	     *
  	     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
  	     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
  	     */
  	    C.DES = BlockCipher._createHelper(DES);

  	    /**
  	     * Triple-DES block cipher algorithm.
  	     */
  	    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
  	        _doReset: function () {
  	            // Shortcuts
  	            var key = this._key;
  	            var keyWords = key.words;
  	            // Make sure the key length is valid (64, 128 or >= 192 bit)
  	            if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
  	                throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
  	            }

  	            // Extend the key according to the keying options defined in 3DES standard
  	            var key1 = keyWords.slice(0, 2);
  	            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
  	            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);

  	            // Create DES instances
  	            this._des1 = DES.createEncryptor(WordArray.create(key1));
  	            this._des2 = DES.createEncryptor(WordArray.create(key2));
  	            this._des3 = DES.createEncryptor(WordArray.create(key3));
  	        },

  	        encryptBlock: function (M, offset) {
  	            this._des1.encryptBlock(M, offset);
  	            this._des2.decryptBlock(M, offset);
  	            this._des3.encryptBlock(M, offset);
  	        },

  	        decryptBlock: function (M, offset) {
  	            this._des3.decryptBlock(M, offset);
  	            this._des2.encryptBlock(M, offset);
  	            this._des1.decryptBlock(M, offset);
  	        },

  	        keySize: 192/32,

  	        ivSize: 64/32,

  	        blockSize: 64/32
  	    });

  	    /**
  	     * Shortcut functions to the cipher's object interface.
  	     *
  	     * @example
  	     *
  	     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
  	     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
  	     */
  	    C.TripleDES = BlockCipher._createHelper(TripleDES);
  	}());


  	return CryptoJS.TripleDES;

  }));
  });

  var rc4 = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, encBase64, md5, evpkdf, cipherCore);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function () {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var StreamCipher = C_lib.StreamCipher;
  	    var C_algo = C.algo;

  	    /**
  	     * RC4 stream cipher algorithm.
  	     */
  	    var RC4 = C_algo.RC4 = StreamCipher.extend({
  	        _doReset: function () {
  	            // Shortcuts
  	            var key = this._key;
  	            var keyWords = key.words;
  	            var keySigBytes = key.sigBytes;

  	            // Init sbox
  	            var S = this._S = [];
  	            for (var i = 0; i < 256; i++) {
  	                S[i] = i;
  	            }

  	            // Key setup
  	            for (var i = 0, j = 0; i < 256; i++) {
  	                var keyByteIndex = i % keySigBytes;
  	                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

  	                j = (j + S[i] + keyByte) % 256;

  	                // Swap
  	                var t = S[i];
  	                S[i] = S[j];
  	                S[j] = t;
  	            }

  	            // Counters
  	            this._i = this._j = 0;
  	        },

  	        _doProcessBlock: function (M, offset) {
  	            M[offset] ^= generateKeystreamWord.call(this);
  	        },

  	        keySize: 256/32,

  	        ivSize: 0
  	    });

  	    function generateKeystreamWord() {
  	        // Shortcuts
  	        var S = this._S;
  	        var i = this._i;
  	        var j = this._j;

  	        // Generate keystream word
  	        var keystreamWord = 0;
  	        for (var n = 0; n < 4; n++) {
  	            i = (i + 1) % 256;
  	            j = (j + S[i]) % 256;

  	            // Swap
  	            var t = S[i];
  	            S[i] = S[j];
  	            S[j] = t;

  	            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
  	        }

  	        // Update counters
  	        this._i = i;
  	        this._j = j;

  	        return keystreamWord;
  	    }

  	    /**
  	     * Shortcut functions to the cipher's object interface.
  	     *
  	     * @example
  	     *
  	     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
  	     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
  	     */
  	    C.RC4 = StreamCipher._createHelper(RC4);

  	    /**
  	     * Modified RC4 stream cipher algorithm.
  	     */
  	    var RC4Drop = C_algo.RC4Drop = RC4.extend({
  	        /**
  	         * Configuration options.
  	         *
  	         * @property {number} drop The number of keystream words to drop. Default 192
  	         */
  	        cfg: RC4.cfg.extend({
  	            drop: 192
  	        }),

  	        _doReset: function () {
  	            RC4._doReset.call(this);

  	            // Drop
  	            for (var i = this.cfg.drop; i > 0; i--) {
  	                generateKeystreamWord.call(this);
  	            }
  	        }
  	    });

  	    /**
  	     * Shortcut functions to the cipher's object interface.
  	     *
  	     * @example
  	     *
  	     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
  	     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
  	     */
  	    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
  	}());


  	return CryptoJS.RC4;

  }));
  });

  var rabbit = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, encBase64, md5, evpkdf, cipherCore);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function () {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var StreamCipher = C_lib.StreamCipher;
  	    var C_algo = C.algo;

  	    // Reusable objects
  	    var S  = [];
  	    var C_ = [];
  	    var G  = [];

  	    /**
  	     * Rabbit stream cipher algorithm
  	     */
  	    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
  	        _doReset: function () {
  	            // Shortcuts
  	            var K = this._key.words;
  	            var iv = this.cfg.iv;

  	            // Swap endian
  	            for (var i = 0; i < 4; i++) {
  	                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
  	                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
  	            }

  	            // Generate initial state values
  	            var X = this._X = [
  	                K[0], (K[3] << 16) | (K[2] >>> 16),
  	                K[1], (K[0] << 16) | (K[3] >>> 16),
  	                K[2], (K[1] << 16) | (K[0] >>> 16),
  	                K[3], (K[2] << 16) | (K[1] >>> 16)
  	            ];

  	            // Generate initial counter values
  	            var C = this._C = [
  	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
  	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
  	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
  	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
  	            ];

  	            // Carry bit
  	            this._b = 0;

  	            // Iterate the system four times
  	            for (var i = 0; i < 4; i++) {
  	                nextState.call(this);
  	            }

  	            // Modify the counters
  	            for (var i = 0; i < 8; i++) {
  	                C[i] ^= X[(i + 4) & 7];
  	            }

  	            // IV setup
  	            if (iv) {
  	                // Shortcuts
  	                var IV = iv.words;
  	                var IV_0 = IV[0];
  	                var IV_1 = IV[1];

  	                // Generate four subvectors
  	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
  	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
  	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
  	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

  	                // Modify counter values
  	                C[0] ^= i0;
  	                C[1] ^= i1;
  	                C[2] ^= i2;
  	                C[3] ^= i3;
  	                C[4] ^= i0;
  	                C[5] ^= i1;
  	                C[6] ^= i2;
  	                C[7] ^= i3;

  	                // Iterate the system four times
  	                for (var i = 0; i < 4; i++) {
  	                    nextState.call(this);
  	                }
  	            }
  	        },

  	        _doProcessBlock: function (M, offset) {
  	            // Shortcut
  	            var X = this._X;

  	            // Iterate the system
  	            nextState.call(this);

  	            // Generate four keystream words
  	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
  	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
  	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
  	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

  	            for (var i = 0; i < 4; i++) {
  	                // Swap endian
  	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
  	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

  	                // Encrypt
  	                M[offset + i] ^= S[i];
  	            }
  	        },

  	        blockSize: 128/32,

  	        ivSize: 64/32
  	    });

  	    function nextState() {
  	        // Shortcuts
  	        var X = this._X;
  	        var C = this._C;

  	        // Save old counter values
  	        for (var i = 0; i < 8; i++) {
  	            C_[i] = C[i];
  	        }

  	        // Calculate new counter values
  	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
  	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
  	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
  	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
  	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
  	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
  	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
  	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
  	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

  	        // Calculate the g-values
  	        for (var i = 0; i < 8; i++) {
  	            var gx = X[i] + C[i];

  	            // Construct high and low argument for squaring
  	            var ga = gx & 0xffff;
  	            var gb = gx >>> 16;

  	            // Calculate high and low result of squaring
  	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
  	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

  	            // High XOR low
  	            G[i] = gh ^ gl;
  	        }

  	        // Calculate new state values
  	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
  	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
  	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
  	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
  	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
  	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
  	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
  	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
  	    }

  	    /**
  	     * Shortcut functions to the cipher's object interface.
  	     *
  	     * @example
  	     *
  	     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
  	     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
  	     */
  	    C.Rabbit = StreamCipher._createHelper(Rabbit);
  	}());


  	return CryptoJS.Rabbit;

  }));
  });

  var rabbitLegacy = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, encBase64, md5, evpkdf, cipherCore);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function () {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var StreamCipher = C_lib.StreamCipher;
  	    var C_algo = C.algo;

  	    // Reusable objects
  	    var S  = [];
  	    var C_ = [];
  	    var G  = [];

  	    /**
  	     * Rabbit stream cipher algorithm.
  	     *
  	     * This is a legacy version that neglected to convert the key to little-endian.
  	     * This error doesn't affect the cipher's security,
  	     * but it does affect its compatibility with other implementations.
  	     */
  	    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
  	        _doReset: function () {
  	            // Shortcuts
  	            var K = this._key.words;
  	            var iv = this.cfg.iv;

  	            // Generate initial state values
  	            var X = this._X = [
  	                K[0], (K[3] << 16) | (K[2] >>> 16),
  	                K[1], (K[0] << 16) | (K[3] >>> 16),
  	                K[2], (K[1] << 16) | (K[0] >>> 16),
  	                K[3], (K[2] << 16) | (K[1] >>> 16)
  	            ];

  	            // Generate initial counter values
  	            var C = this._C = [
  	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
  	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
  	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
  	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
  	            ];

  	            // Carry bit
  	            this._b = 0;

  	            // Iterate the system four times
  	            for (var i = 0; i < 4; i++) {
  	                nextState.call(this);
  	            }

  	            // Modify the counters
  	            for (var i = 0; i < 8; i++) {
  	                C[i] ^= X[(i + 4) & 7];
  	            }

  	            // IV setup
  	            if (iv) {
  	                // Shortcuts
  	                var IV = iv.words;
  	                var IV_0 = IV[0];
  	                var IV_1 = IV[1];

  	                // Generate four subvectors
  	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
  	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
  	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
  	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

  	                // Modify counter values
  	                C[0] ^= i0;
  	                C[1] ^= i1;
  	                C[2] ^= i2;
  	                C[3] ^= i3;
  	                C[4] ^= i0;
  	                C[5] ^= i1;
  	                C[6] ^= i2;
  	                C[7] ^= i3;

  	                // Iterate the system four times
  	                for (var i = 0; i < 4; i++) {
  	                    nextState.call(this);
  	                }
  	            }
  	        },

  	        _doProcessBlock: function (M, offset) {
  	            // Shortcut
  	            var X = this._X;

  	            // Iterate the system
  	            nextState.call(this);

  	            // Generate four keystream words
  	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
  	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
  	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
  	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

  	            for (var i = 0; i < 4; i++) {
  	                // Swap endian
  	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
  	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

  	                // Encrypt
  	                M[offset + i] ^= S[i];
  	            }
  	        },

  	        blockSize: 128/32,

  	        ivSize: 64/32
  	    });

  	    function nextState() {
  	        // Shortcuts
  	        var X = this._X;
  	        var C = this._C;

  	        // Save old counter values
  	        for (var i = 0; i < 8; i++) {
  	            C_[i] = C[i];
  	        }

  	        // Calculate new counter values
  	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
  	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
  	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
  	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
  	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
  	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
  	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
  	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
  	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

  	        // Calculate the g-values
  	        for (var i = 0; i < 8; i++) {
  	            var gx = X[i] + C[i];

  	            // Construct high and low argument for squaring
  	            var ga = gx & 0xffff;
  	            var gb = gx >>> 16;

  	            // Calculate high and low result of squaring
  	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
  	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

  	            // High XOR low
  	            G[i] = gh ^ gl;
  	        }

  	        // Calculate new state values
  	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
  	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
  	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
  	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
  	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
  	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
  	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
  	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
  	    }

  	    /**
  	     * Shortcut functions to the cipher's object interface.
  	     *
  	     * @example
  	     *
  	     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
  	     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
  	     */
  	    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
  	}());


  	return CryptoJS.RabbitLegacy;

  }));
  });

  var blowfish = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, encBase64, md5, evpkdf, cipherCore);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	(function () {
  	    // Shortcuts
  	    var C = CryptoJS;
  	    var C_lib = C.lib;
  	    var BlockCipher = C_lib.BlockCipher;
  	    var C_algo = C.algo;

  	    const N = 16;

  	    //Origin pbox and sbox, derived from PI
  	    const ORIG_P = [
  	        0x243F6A88, 0x85A308D3, 0x13198A2E, 0x03707344,
  	        0xA4093822, 0x299F31D0, 0x082EFA98, 0xEC4E6C89,
  	        0x452821E6, 0x38D01377, 0xBE5466CF, 0x34E90C6C,
  	        0xC0AC29B7, 0xC97C50DD, 0x3F84D5B5, 0xB5470917,
  	        0x9216D5D9, 0x8979FB1B
  	    ];

  	    const ORIG_S = [
  	        [   0xD1310BA6, 0x98DFB5AC, 0x2FFD72DB, 0xD01ADFB7,
  	            0xB8E1AFED, 0x6A267E96, 0xBA7C9045, 0xF12C7F99,
  	            0x24A19947, 0xB3916CF7, 0x0801F2E2, 0x858EFC16,
  	            0x636920D8, 0x71574E69, 0xA458FEA3, 0xF4933D7E,
  	            0x0D95748F, 0x728EB658, 0x718BCD58, 0x82154AEE,
  	            0x7B54A41D, 0xC25A59B5, 0x9C30D539, 0x2AF26013,
  	            0xC5D1B023, 0x286085F0, 0xCA417918, 0xB8DB38EF,
  	            0x8E79DCB0, 0x603A180E, 0x6C9E0E8B, 0xB01E8A3E,
  	            0xD71577C1, 0xBD314B27, 0x78AF2FDA, 0x55605C60,
  	            0xE65525F3, 0xAA55AB94, 0x57489862, 0x63E81440,
  	            0x55CA396A, 0x2AAB10B6, 0xB4CC5C34, 0x1141E8CE,
  	            0xA15486AF, 0x7C72E993, 0xB3EE1411, 0x636FBC2A,
  	            0x2BA9C55D, 0x741831F6, 0xCE5C3E16, 0x9B87931E,
  	            0xAFD6BA33, 0x6C24CF5C, 0x7A325381, 0x28958677,
  	            0x3B8F4898, 0x6B4BB9AF, 0xC4BFE81B, 0x66282193,
  	            0x61D809CC, 0xFB21A991, 0x487CAC60, 0x5DEC8032,
  	            0xEF845D5D, 0xE98575B1, 0xDC262302, 0xEB651B88,
  	            0x23893E81, 0xD396ACC5, 0x0F6D6FF3, 0x83F44239,
  	            0x2E0B4482, 0xA4842004, 0x69C8F04A, 0x9E1F9B5E,
  	            0x21C66842, 0xF6E96C9A, 0x670C9C61, 0xABD388F0,
  	            0x6A51A0D2, 0xD8542F68, 0x960FA728, 0xAB5133A3,
  	            0x6EEF0B6C, 0x137A3BE4, 0xBA3BF050, 0x7EFB2A98,
  	            0xA1F1651D, 0x39AF0176, 0x66CA593E, 0x82430E88,
  	            0x8CEE8619, 0x456F9FB4, 0x7D84A5C3, 0x3B8B5EBE,
  	            0xE06F75D8, 0x85C12073, 0x401A449F, 0x56C16AA6,
  	            0x4ED3AA62, 0x363F7706, 0x1BFEDF72, 0x429B023D,
  	            0x37D0D724, 0xD00A1248, 0xDB0FEAD3, 0x49F1C09B,
  	            0x075372C9, 0x80991B7B, 0x25D479D8, 0xF6E8DEF7,
  	            0xE3FE501A, 0xB6794C3B, 0x976CE0BD, 0x04C006BA,
  	            0xC1A94FB6, 0x409F60C4, 0x5E5C9EC2, 0x196A2463,
  	            0x68FB6FAF, 0x3E6C53B5, 0x1339B2EB, 0x3B52EC6F,
  	            0x6DFC511F, 0x9B30952C, 0xCC814544, 0xAF5EBD09,
  	            0xBEE3D004, 0xDE334AFD, 0x660F2807, 0x192E4BB3,
  	            0xC0CBA857, 0x45C8740F, 0xD20B5F39, 0xB9D3FBDB,
  	            0x5579C0BD, 0x1A60320A, 0xD6A100C6, 0x402C7279,
  	            0x679F25FE, 0xFB1FA3CC, 0x8EA5E9F8, 0xDB3222F8,
  	            0x3C7516DF, 0xFD616B15, 0x2F501EC8, 0xAD0552AB,
  	            0x323DB5FA, 0xFD238760, 0x53317B48, 0x3E00DF82,
  	            0x9E5C57BB, 0xCA6F8CA0, 0x1A87562E, 0xDF1769DB,
  	            0xD542A8F6, 0x287EFFC3, 0xAC6732C6, 0x8C4F5573,
  	            0x695B27B0, 0xBBCA58C8, 0xE1FFA35D, 0xB8F011A0,
  	            0x10FA3D98, 0xFD2183B8, 0x4AFCB56C, 0x2DD1D35B,
  	            0x9A53E479, 0xB6F84565, 0xD28E49BC, 0x4BFB9790,
  	            0xE1DDF2DA, 0xA4CB7E33, 0x62FB1341, 0xCEE4C6E8,
  	            0xEF20CADA, 0x36774C01, 0xD07E9EFE, 0x2BF11FB4,
  	            0x95DBDA4D, 0xAE909198, 0xEAAD8E71, 0x6B93D5A0,
  	            0xD08ED1D0, 0xAFC725E0, 0x8E3C5B2F, 0x8E7594B7,
  	            0x8FF6E2FB, 0xF2122B64, 0x8888B812, 0x900DF01C,
  	            0x4FAD5EA0, 0x688FC31C, 0xD1CFF191, 0xB3A8C1AD,
  	            0x2F2F2218, 0xBE0E1777, 0xEA752DFE, 0x8B021FA1,
  	            0xE5A0CC0F, 0xB56F74E8, 0x18ACF3D6, 0xCE89E299,
  	            0xB4A84FE0, 0xFD13E0B7, 0x7CC43B81, 0xD2ADA8D9,
  	            0x165FA266, 0x80957705, 0x93CC7314, 0x211A1477,
  	            0xE6AD2065, 0x77B5FA86, 0xC75442F5, 0xFB9D35CF,
  	            0xEBCDAF0C, 0x7B3E89A0, 0xD6411BD3, 0xAE1E7E49,
  	            0x00250E2D, 0x2071B35E, 0x226800BB, 0x57B8E0AF,
  	            0x2464369B, 0xF009B91E, 0x5563911D, 0x59DFA6AA,
  	            0x78C14389, 0xD95A537F, 0x207D5BA2, 0x02E5B9C5,
  	            0x83260376, 0x6295CFA9, 0x11C81968, 0x4E734A41,
  	            0xB3472DCA, 0x7B14A94A, 0x1B510052, 0x9A532915,
  	            0xD60F573F, 0xBC9BC6E4, 0x2B60A476, 0x81E67400,
  	            0x08BA6FB5, 0x571BE91F, 0xF296EC6B, 0x2A0DD915,
  	            0xB6636521, 0xE7B9F9B6, 0xFF34052E, 0xC5855664,
  	            0x53B02D5D, 0xA99F8FA1, 0x08BA4799, 0x6E85076A   ],
  	        [   0x4B7A70E9, 0xB5B32944, 0xDB75092E, 0xC4192623,
  	            0xAD6EA6B0, 0x49A7DF7D, 0x9CEE60B8, 0x8FEDB266,
  	            0xECAA8C71, 0x699A17FF, 0x5664526C, 0xC2B19EE1,
  	            0x193602A5, 0x75094C29, 0xA0591340, 0xE4183A3E,
  	            0x3F54989A, 0x5B429D65, 0x6B8FE4D6, 0x99F73FD6,
  	            0xA1D29C07, 0xEFE830F5, 0x4D2D38E6, 0xF0255DC1,
  	            0x4CDD2086, 0x8470EB26, 0x6382E9C6, 0x021ECC5E,
  	            0x09686B3F, 0x3EBAEFC9, 0x3C971814, 0x6B6A70A1,
  	            0x687F3584, 0x52A0E286, 0xB79C5305, 0xAA500737,
  	            0x3E07841C, 0x7FDEAE5C, 0x8E7D44EC, 0x5716F2B8,
  	            0xB03ADA37, 0xF0500C0D, 0xF01C1F04, 0x0200B3FF,
  	            0xAE0CF51A, 0x3CB574B2, 0x25837A58, 0xDC0921BD,
  	            0xD19113F9, 0x7CA92FF6, 0x94324773, 0x22F54701,
  	            0x3AE5E581, 0x37C2DADC, 0xC8B57634, 0x9AF3DDA7,
  	            0xA9446146, 0x0FD0030E, 0xECC8C73E, 0xA4751E41,
  	            0xE238CD99, 0x3BEA0E2F, 0x3280BBA1, 0x183EB331,
  	            0x4E548B38, 0x4F6DB908, 0x6F420D03, 0xF60A04BF,
  	            0x2CB81290, 0x24977C79, 0x5679B072, 0xBCAF89AF,
  	            0xDE9A771F, 0xD9930810, 0xB38BAE12, 0xDCCF3F2E,
  	            0x5512721F, 0x2E6B7124, 0x501ADDE6, 0x9F84CD87,
  	            0x7A584718, 0x7408DA17, 0xBC9F9ABC, 0xE94B7D8C,
  	            0xEC7AEC3A, 0xDB851DFA, 0x63094366, 0xC464C3D2,
  	            0xEF1C1847, 0x3215D908, 0xDD433B37, 0x24C2BA16,
  	            0x12A14D43, 0x2A65C451, 0x50940002, 0x133AE4DD,
  	            0x71DFF89E, 0x10314E55, 0x81AC77D6, 0x5F11199B,
  	            0x043556F1, 0xD7A3C76B, 0x3C11183B, 0x5924A509,
  	            0xF28FE6ED, 0x97F1FBFA, 0x9EBABF2C, 0x1E153C6E,
  	            0x86E34570, 0xEAE96FB1, 0x860E5E0A, 0x5A3E2AB3,
  	            0x771FE71C, 0x4E3D06FA, 0x2965DCB9, 0x99E71D0F,
  	            0x803E89D6, 0x5266C825, 0x2E4CC978, 0x9C10B36A,
  	            0xC6150EBA, 0x94E2EA78, 0xA5FC3C53, 0x1E0A2DF4,
  	            0xF2F74EA7, 0x361D2B3D, 0x1939260F, 0x19C27960,
  	            0x5223A708, 0xF71312B6, 0xEBADFE6E, 0xEAC31F66,
  	            0xE3BC4595, 0xA67BC883, 0xB17F37D1, 0x018CFF28,
  	            0xC332DDEF, 0xBE6C5AA5, 0x65582185, 0x68AB9802,
  	            0xEECEA50F, 0xDB2F953B, 0x2AEF7DAD, 0x5B6E2F84,
  	            0x1521B628, 0x29076170, 0xECDD4775, 0x619F1510,
  	            0x13CCA830, 0xEB61BD96, 0x0334FE1E, 0xAA0363CF,
  	            0xB5735C90, 0x4C70A239, 0xD59E9E0B, 0xCBAADE14,
  	            0xEECC86BC, 0x60622CA7, 0x9CAB5CAB, 0xB2F3846E,
  	            0x648B1EAF, 0x19BDF0CA, 0xA02369B9, 0x655ABB50,
  	            0x40685A32, 0x3C2AB4B3, 0x319EE9D5, 0xC021B8F7,
  	            0x9B540B19, 0x875FA099, 0x95F7997E, 0x623D7DA8,
  	            0xF837889A, 0x97E32D77, 0x11ED935F, 0x16681281,
  	            0x0E358829, 0xC7E61FD6, 0x96DEDFA1, 0x7858BA99,
  	            0x57F584A5, 0x1B227263, 0x9B83C3FF, 0x1AC24696,
  	            0xCDB30AEB, 0x532E3054, 0x8FD948E4, 0x6DBC3128,
  	            0x58EBF2EF, 0x34C6FFEA, 0xFE28ED61, 0xEE7C3C73,
  	            0x5D4A14D9, 0xE864B7E3, 0x42105D14, 0x203E13E0,
  	            0x45EEE2B6, 0xA3AAABEA, 0xDB6C4F15, 0xFACB4FD0,
  	            0xC742F442, 0xEF6ABBB5, 0x654F3B1D, 0x41CD2105,
  	            0xD81E799E, 0x86854DC7, 0xE44B476A, 0x3D816250,
  	            0xCF62A1F2, 0x5B8D2646, 0xFC8883A0, 0xC1C7B6A3,
  	            0x7F1524C3, 0x69CB7492, 0x47848A0B, 0x5692B285,
  	            0x095BBF00, 0xAD19489D, 0x1462B174, 0x23820E00,
  	            0x58428D2A, 0x0C55F5EA, 0x1DADF43E, 0x233F7061,
  	            0x3372F092, 0x8D937E41, 0xD65FECF1, 0x6C223BDB,
  	            0x7CDE3759, 0xCBEE7460, 0x4085F2A7, 0xCE77326E,
  	            0xA6078084, 0x19F8509E, 0xE8EFD855, 0x61D99735,
  	            0xA969A7AA, 0xC50C06C2, 0x5A04ABFC, 0x800BCADC,
  	            0x9E447A2E, 0xC3453484, 0xFDD56705, 0x0E1E9EC9,
  	            0xDB73DBD3, 0x105588CD, 0x675FDA79, 0xE3674340,
  	            0xC5C43465, 0x713E38D8, 0x3D28F89E, 0xF16DFF20,
  	            0x153E21E7, 0x8FB03D4A, 0xE6E39F2B, 0xDB83ADF7   ],
  	        [   0xE93D5A68, 0x948140F7, 0xF64C261C, 0x94692934,
  	            0x411520F7, 0x7602D4F7, 0xBCF46B2E, 0xD4A20068,
  	            0xD4082471, 0x3320F46A, 0x43B7D4B7, 0x500061AF,
  	            0x1E39F62E, 0x97244546, 0x14214F74, 0xBF8B8840,
  	            0x4D95FC1D, 0x96B591AF, 0x70F4DDD3, 0x66A02F45,
  	            0xBFBC09EC, 0x03BD9785, 0x7FAC6DD0, 0x31CB8504,
  	            0x96EB27B3, 0x55FD3941, 0xDA2547E6, 0xABCA0A9A,
  	            0x28507825, 0x530429F4, 0x0A2C86DA, 0xE9B66DFB,
  	            0x68DC1462, 0xD7486900, 0x680EC0A4, 0x27A18DEE,
  	            0x4F3FFEA2, 0xE887AD8C, 0xB58CE006, 0x7AF4D6B6,
  	            0xAACE1E7C, 0xD3375FEC, 0xCE78A399, 0x406B2A42,
  	            0x20FE9E35, 0xD9F385B9, 0xEE39D7AB, 0x3B124E8B,
  	            0x1DC9FAF7, 0x4B6D1856, 0x26A36631, 0xEAE397B2,
  	            0x3A6EFA74, 0xDD5B4332, 0x6841E7F7, 0xCA7820FB,
  	            0xFB0AF54E, 0xD8FEB397, 0x454056AC, 0xBA489527,
  	            0x55533A3A, 0x20838D87, 0xFE6BA9B7, 0xD096954B,
  	            0x55A867BC, 0xA1159A58, 0xCCA92963, 0x99E1DB33,
  	            0xA62A4A56, 0x3F3125F9, 0x5EF47E1C, 0x9029317C,
  	            0xFDF8E802, 0x04272F70, 0x80BB155C, 0x05282CE3,
  	            0x95C11548, 0xE4C66D22, 0x48C1133F, 0xC70F86DC,
  	            0x07F9C9EE, 0x41041F0F, 0x404779A4, 0x5D886E17,
  	            0x325F51EB, 0xD59BC0D1, 0xF2BCC18F, 0x41113564,
  	            0x257B7834, 0x602A9C60, 0xDFF8E8A3, 0x1F636C1B,
  	            0x0E12B4C2, 0x02E1329E, 0xAF664FD1, 0xCAD18115,
  	            0x6B2395E0, 0x333E92E1, 0x3B240B62, 0xEEBEB922,
  	            0x85B2A20E, 0xE6BA0D99, 0xDE720C8C, 0x2DA2F728,
  	            0xD0127845, 0x95B794FD, 0x647D0862, 0xE7CCF5F0,
  	            0x5449A36F, 0x877D48FA, 0xC39DFD27, 0xF33E8D1E,
  	            0x0A476341, 0x992EFF74, 0x3A6F6EAB, 0xF4F8FD37,
  	            0xA812DC60, 0xA1EBDDF8, 0x991BE14C, 0xDB6E6B0D,
  	            0xC67B5510, 0x6D672C37, 0x2765D43B, 0xDCD0E804,
  	            0xF1290DC7, 0xCC00FFA3, 0xB5390F92, 0x690FED0B,
  	            0x667B9FFB, 0xCEDB7D9C, 0xA091CF0B, 0xD9155EA3,
  	            0xBB132F88, 0x515BAD24, 0x7B9479BF, 0x763BD6EB,
  	            0x37392EB3, 0xCC115979, 0x8026E297, 0xF42E312D,
  	            0x6842ADA7, 0xC66A2B3B, 0x12754CCC, 0x782EF11C,
  	            0x6A124237, 0xB79251E7, 0x06A1BBE6, 0x4BFB6350,
  	            0x1A6B1018, 0x11CAEDFA, 0x3D25BDD8, 0xE2E1C3C9,
  	            0x44421659, 0x0A121386, 0xD90CEC6E, 0xD5ABEA2A,
  	            0x64AF674E, 0xDA86A85F, 0xBEBFE988, 0x64E4C3FE,
  	            0x9DBC8057, 0xF0F7C086, 0x60787BF8, 0x6003604D,
  	            0xD1FD8346, 0xF6381FB0, 0x7745AE04, 0xD736FCCC,
  	            0x83426B33, 0xF01EAB71, 0xB0804187, 0x3C005E5F,
  	            0x77A057BE, 0xBDE8AE24, 0x55464299, 0xBF582E61,
  	            0x4E58F48F, 0xF2DDFDA2, 0xF474EF38, 0x8789BDC2,
  	            0x5366F9C3, 0xC8B38E74, 0xB475F255, 0x46FCD9B9,
  	            0x7AEB2661, 0x8B1DDF84, 0x846A0E79, 0x915F95E2,
  	            0x466E598E, 0x20B45770, 0x8CD55591, 0xC902DE4C,
  	            0xB90BACE1, 0xBB8205D0, 0x11A86248, 0x7574A99E,
  	            0xB77F19B6, 0xE0A9DC09, 0x662D09A1, 0xC4324633,
  	            0xE85A1F02, 0x09F0BE8C, 0x4A99A025, 0x1D6EFE10,
  	            0x1AB93D1D, 0x0BA5A4DF, 0xA186F20F, 0x2868F169,
  	            0xDCB7DA83, 0x573906FE, 0xA1E2CE9B, 0x4FCD7F52,
  	            0x50115E01, 0xA70683FA, 0xA002B5C4, 0x0DE6D027,
  	            0x9AF88C27, 0x773F8641, 0xC3604C06, 0x61A806B5,
  	            0xF0177A28, 0xC0F586E0, 0x006058AA, 0x30DC7D62,
  	            0x11E69ED7, 0x2338EA63, 0x53C2DD94, 0xC2C21634,
  	            0xBBCBEE56, 0x90BCB6DE, 0xEBFC7DA1, 0xCE591D76,
  	            0x6F05E409, 0x4B7C0188, 0x39720A3D, 0x7C927C24,
  	            0x86E3725F, 0x724D9DB9, 0x1AC15BB4, 0xD39EB8FC,
  	            0xED545578, 0x08FCA5B5, 0xD83D7CD3, 0x4DAD0FC4,
  	            0x1E50EF5E, 0xB161E6F8, 0xA28514D9, 0x6C51133C,
  	            0x6FD5C7E7, 0x56E14EC4, 0x362ABFCE, 0xDDC6C837,
  	            0xD79A3234, 0x92638212, 0x670EFA8E, 0x406000E0  ],
  	        [   0x3A39CE37, 0xD3FAF5CF, 0xABC27737, 0x5AC52D1B,
  	            0x5CB0679E, 0x4FA33742, 0xD3822740, 0x99BC9BBE,
  	            0xD5118E9D, 0xBF0F7315, 0xD62D1C7E, 0xC700C47B,
  	            0xB78C1B6B, 0x21A19045, 0xB26EB1BE, 0x6A366EB4,
  	            0x5748AB2F, 0xBC946E79, 0xC6A376D2, 0x6549C2C8,
  	            0x530FF8EE, 0x468DDE7D, 0xD5730A1D, 0x4CD04DC6,
  	            0x2939BBDB, 0xA9BA4650, 0xAC9526E8, 0xBE5EE304,
  	            0xA1FAD5F0, 0x6A2D519A, 0x63EF8CE2, 0x9A86EE22,
  	            0xC089C2B8, 0x43242EF6, 0xA51E03AA, 0x9CF2D0A4,
  	            0x83C061BA, 0x9BE96A4D, 0x8FE51550, 0xBA645BD6,
  	            0x2826A2F9, 0xA73A3AE1, 0x4BA99586, 0xEF5562E9,
  	            0xC72FEFD3, 0xF752F7DA, 0x3F046F69, 0x77FA0A59,
  	            0x80E4A915, 0x87B08601, 0x9B09E6AD, 0x3B3EE593,
  	            0xE990FD5A, 0x9E34D797, 0x2CF0B7D9, 0x022B8B51,
  	            0x96D5AC3A, 0x017DA67D, 0xD1CF3ED6, 0x7C7D2D28,
  	            0x1F9F25CF, 0xADF2B89B, 0x5AD6B472, 0x5A88F54C,
  	            0xE029AC71, 0xE019A5E6, 0x47B0ACFD, 0xED93FA9B,
  	            0xE8D3C48D, 0x283B57CC, 0xF8D56629, 0x79132E28,
  	            0x785F0191, 0xED756055, 0xF7960E44, 0xE3D35E8C,
  	            0x15056DD4, 0x88F46DBA, 0x03A16125, 0x0564F0BD,
  	            0xC3EB9E15, 0x3C9057A2, 0x97271AEC, 0xA93A072A,
  	            0x1B3F6D9B, 0x1E6321F5, 0xF59C66FB, 0x26DCF319,
  	            0x7533D928, 0xB155FDF5, 0x03563482, 0x8ABA3CBB,
  	            0x28517711, 0xC20AD9F8, 0xABCC5167, 0xCCAD925F,
  	            0x4DE81751, 0x3830DC8E, 0x379D5862, 0x9320F991,
  	            0xEA7A90C2, 0xFB3E7BCE, 0x5121CE64, 0x774FBE32,
  	            0xA8B6E37E, 0xC3293D46, 0x48DE5369, 0x6413E680,
  	            0xA2AE0810, 0xDD6DB224, 0x69852DFD, 0x09072166,
  	            0xB39A460A, 0x6445C0DD, 0x586CDECF, 0x1C20C8AE,
  	            0x5BBEF7DD, 0x1B588D40, 0xCCD2017F, 0x6BB4E3BB,
  	            0xDDA26A7E, 0x3A59FF45, 0x3E350A44, 0xBCB4CDD5,
  	            0x72EACEA8, 0xFA6484BB, 0x8D6612AE, 0xBF3C6F47,
  	            0xD29BE463, 0x542F5D9E, 0xAEC2771B, 0xF64E6370,
  	            0x740E0D8D, 0xE75B1357, 0xF8721671, 0xAF537D5D,
  	            0x4040CB08, 0x4EB4E2CC, 0x34D2466A, 0x0115AF84,
  	            0xE1B00428, 0x95983A1D, 0x06B89FB4, 0xCE6EA048,
  	            0x6F3F3B82, 0x3520AB82, 0x011A1D4B, 0x277227F8,
  	            0x611560B1, 0xE7933FDC, 0xBB3A792B, 0x344525BD,
  	            0xA08839E1, 0x51CE794B, 0x2F32C9B7, 0xA01FBAC9,
  	            0xE01CC87E, 0xBCC7D1F6, 0xCF0111C3, 0xA1E8AAC7,
  	            0x1A908749, 0xD44FBD9A, 0xD0DADECB, 0xD50ADA38,
  	            0x0339C32A, 0xC6913667, 0x8DF9317C, 0xE0B12B4F,
  	            0xF79E59B7, 0x43F5BB3A, 0xF2D519FF, 0x27D9459C,
  	            0xBF97222C, 0x15E6FC2A, 0x0F91FC71, 0x9B941525,
  	            0xFAE59361, 0xCEB69CEB, 0xC2A86459, 0x12BAA8D1,
  	            0xB6C1075E, 0xE3056A0C, 0x10D25065, 0xCB03A442,
  	            0xE0EC6E0E, 0x1698DB3B, 0x4C98A0BE, 0x3278E964,
  	            0x9F1F9532, 0xE0D392DF, 0xD3A0342B, 0x8971F21E,
  	            0x1B0A7441, 0x4BA3348C, 0xC5BE7120, 0xC37632D8,
  	            0xDF359F8D, 0x9B992F2E, 0xE60B6F47, 0x0FE3F11D,
  	            0xE54CDA54, 0x1EDAD891, 0xCE6279CF, 0xCD3E7E6F,
  	            0x1618B166, 0xFD2C1D05, 0x848FD2C5, 0xF6FB2299,
  	            0xF523F357, 0xA6327623, 0x93A83531, 0x56CCCD02,
  	            0xACF08162, 0x5A75EBB5, 0x6E163697, 0x88D273CC,
  	            0xDE966292, 0x81B949D0, 0x4C50901B, 0x71C65614,
  	            0xE6C6C7BD, 0x327A140A, 0x45E1D006, 0xC3F27B9A,
  	            0xC9AA53FD, 0x62A80F00, 0xBB25BFE2, 0x35BDD2F6,
  	            0x71126905, 0xB2040222, 0xB6CBCF7C, 0xCD769C2B,
  	            0x53113EC0, 0x1640E3D3, 0x38ABBD60, 0x2547ADF0,
  	            0xBA38209C, 0xF746CE76, 0x77AFA1C5, 0x20756060,
  	            0x85CBFE4E, 0x8AE88DD8, 0x7AAAF9B0, 0x4CF9AA7E,
  	            0x1948C25C, 0x02FB8A8C, 0x01C36AE4, 0xD6EBE1F9,
  	            0x90D4F869, 0xA65CDEA0, 0x3F09252D, 0xC208E69F,
  	            0xB74E6132, 0xCE77E25B, 0x578FDFE3, 0x3AC372E6  ]
  	    ];

  	    var BLOWFISH_CTX = {
  	        pbox: [],
  	        sbox: []
  	    };

  	    function F(ctx, x){
  	        let a = (x >> 24) & 0xFF;
  	        let b = (x >> 16) & 0xFF;
  	        let c = (x >> 8) & 0xFF;
  	        let d = x & 0xFF;

  	        let y = ctx.sbox[0][a] + ctx.sbox[1][b];
  	        y = y ^ ctx.sbox[2][c];
  	        y = y + ctx.sbox[3][d];

  	        return y;
  	    }

  	    function BlowFish_Encrypt(ctx, left, right){
  	        let Xl = left;
  	        let Xr = right;
  	        let temp;

  	        for(let i = 0; i < N; ++i){
  	            Xl = Xl ^ ctx.pbox[i];
  	            Xr = F(ctx, Xl) ^ Xr;

  	            temp = Xl;
  	            Xl = Xr;
  	            Xr = temp;
  	        }

  	        temp = Xl;
  	        Xl = Xr;
  	        Xr = temp;

  	        Xr = Xr ^ ctx.pbox[N];
  	        Xl = Xl ^ ctx.pbox[N + 1];

  	        return {left: Xl, right: Xr};
  	    }

  	    function BlowFish_Decrypt(ctx, left, right){
  	        let Xl = left;
  	        let Xr = right;
  	        let temp;

  	        for(let i = N + 1; i > 1; --i){
  	            Xl = Xl ^ ctx.pbox[i];
  	            Xr = F(ctx, Xl) ^ Xr;

  	            temp = Xl;
  	            Xl = Xr;
  	            Xr = temp;
  	        }

  	        temp = Xl;
  	        Xl = Xr;
  	        Xr = temp;

  	        Xr = Xr ^ ctx.pbox[1];
  	        Xl = Xl ^ ctx.pbox[0];

  	        return {left: Xl, right: Xr};
  	    }

  	    /**
  	     * Initialization ctx's pbox and sbox.
  	     *
  	     * @param {Object} ctx The object has pbox and sbox.
  	     * @param {Array} key An array of 32-bit words.
  	     * @param {int} keysize The length of the key.
  	     *
  	     * @example
  	     *
  	     *     BlowFishInit(BLOWFISH_CTX, key, 128/32);
  	     */
  	    function BlowFishInit(ctx, key, keysize)
  	    {
  	        for(let Row = 0; Row < 4; Row++)
  	        {
  	            ctx.sbox[Row] = [];
  	            for(let Col = 0; Col < 256; Col++)
  	            {
  	                ctx.sbox[Row][Col] = ORIG_S[Row][Col];
  	            }
  	        }

  	        let keyIndex = 0;
  	        for(let index = 0; index < N + 2; index++)
  	        {
  	            ctx.pbox[index] = ORIG_P[index] ^ key[keyIndex];
  	            keyIndex++;
  	            if(keyIndex >= keysize)
  	            {
  	                keyIndex = 0;
  	            }
  	        }

  	        let Data1 = 0;
  	        let Data2 = 0;
  	        let res = 0;
  	        for(let i = 0; i < N + 2; i += 2)
  	        {
  	            res = BlowFish_Encrypt(ctx, Data1, Data2);
  	            Data1 = res.left;
  	            Data2 = res.right;
  	            ctx.pbox[i] = Data1;
  	            ctx.pbox[i + 1] = Data2;
  	        }

  	        for(let i = 0; i < 4; i++)
  	        {
  	            for(let j = 0; j < 256; j += 2)
  	            {
  	                res = BlowFish_Encrypt(ctx, Data1, Data2);
  	                Data1 = res.left;
  	                Data2 = res.right;
  	                ctx.sbox[i][j] = Data1;
  	                ctx.sbox[i][j + 1] = Data2;
  	            }
  	        }

  	        return true;
  	    }

  	    /**
  	     * Blowfish block cipher algorithm.
  	     */
  	    var Blowfish = C_algo.Blowfish = BlockCipher.extend({
  	        _doReset: function () {
  	            // Skip reset of nRounds has been set before and key did not change
  	            if (this._keyPriorReset === this._key) {
  	                return;
  	            }

  	            // Shortcuts
  	            var key = this._keyPriorReset = this._key;
  	            var keyWords = key.words;
  	            var keySize = key.sigBytes / 4;

  	            //Initialization pbox and sbox
  	            BlowFishInit(BLOWFISH_CTX, keyWords, keySize);
  	        },

  	        encryptBlock: function (M, offset) {
  	            var res = BlowFish_Encrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
  	            M[offset] = res.left;
  	            M[offset + 1] = res.right;
  	        },

  	        decryptBlock: function (M, offset) {
  	            var res = BlowFish_Decrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
  	            M[offset] = res.left;
  	            M[offset + 1] = res.right;
  	        },

  	        blockSize: 64/32,

  	        keySize: 128/32,

  	        ivSize: 64/32
  	    });

  	    /**
  	     * Shortcut functions to the cipher's object interface.
  	     *
  	     * @example
  	     *
  	     *     var ciphertext = CryptoJS.Blowfish.encrypt(message, key, cfg);
  	     *     var plaintext  = CryptoJS.Blowfish.decrypt(ciphertext, key, cfg);
  	     */
  	    C.Blowfish = BlockCipher._createHelper(Blowfish);
  	}());


  	return CryptoJS.Blowfish;

  }));
  });

  var cryptoJs = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, x64Core, libTypedarrays, encUtf16, encBase64, encBase64url, md5, sha1, sha256, sha224, sha512, sha384, sha3, ripemd160, hmac, pbkdf2, evpkdf, cipherCore, modeCfb, modeCtr, modeCtrGladman, modeOfb, modeEcb, padAnsix923, padIso10126, padIso97971, padZeropadding, padNopadding, formatHex, aes, tripledes, rc4, rabbit, rabbitLegacy, blowfish);
  	}
  }(commonjsGlobal, function (CryptoJS) {

  	return CryptoJS;

  }));
  });

  var keylength = 16;
  function crypto(content, key) {
    var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "encrypt";
    var keyorigin = key.split("");
    var key16 = keyorigin.length < 16 ? [].concat(_toConsumableArray(keyorigin), _toConsumableArray(Array.from(new Array(keylength - keyorigin.length)).map(function () {
      return "0";
    }))).join("") : key16;
    var keyutf = cryptoJs.enc.Utf8.parse(key16);
    var iv = {
      iv: cryptoJs.enc.Base64.parse(key16)
    };
    if (action === "decrypt") {
      var raw = cryptoJs.AES.decrypt({
        ciphertext: cryptoJs.enc.Base64.parse(content)
      }, keyutf, iv);
      return cryptoJs.enc.Utf8.stringify(raw);
    } else {
      return cryptoJs.AES.encrypt(content, keyutf, iv).toString();
    }
  }

  /* esm.sh - esbuild bundle(lodash@4.17.20/debounce) esnext production */
  if (typeof global$1 === "undefined") var global$1 = window;
  var ce = Object.create,
    S = Object.defineProperty,
    se = Object.getPrototypeOf,
    ue = Object.prototype.hasOwnProperty,
    be = Object.getOwnPropertyNames,
    le = Object.getOwnPropertyDescriptor,
    ge = function ge(e) {
      return S(e, "__esModule", {
        value: !0
      });
    },
    a = function a(e, r) {
      return function () {
        return r || (r = {
          exports: {}
        }, e(r.exports, r)), r.exports;
      };
    },
    de = function de(e, r, n) {
      if (ge(e), r && _typeof(r) == "object" || typeof r == "function") {
        var _iterator = _createForOfIteratorHelper(be(r)),
          _step;
        try {
          var _loop = function _loop() {
            var i = _step.value;
            !ue.call(e, i) && i !== "default" && S(e, i, {
              get: function get() {
                return r[i];
              },
              enumerable: !(n = le(r, i)) || n.enumerable
            });
          };
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return e;
    },
    me = function me(e) {
      return e && e.__esModule ? e : de(S(e != null ? ce(se(e)) : {}, "default", {
        value: e,
        enumerable: !0
      }), e);
    },
    x = a(function (rr, E) {
      function pe(e) {
        var r = _typeof(e);
        return e != null && (r == "object" || r == "function");
      }
      E.exports = pe;
    }),
    N = a(function (tr, L) {
      var ye = _typeof(global$1) == "object" && global$1 && global$1.Object === Object && global$1;
      L.exports = ye;
    }),
    O = a(function (nr, G) {
      var Te = N(),
        je = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self,
        Se = Te || je || Function("return this")();
      G.exports = Se;
    }),
    w = a(function (ir, R) {
      var xe = O(),
        Oe = function Oe() {
          return xe.Date.now();
        };
      R.exports = Oe;
    }),
    v = a(function (or, P) {
      var ve = O(),
        qe = ve.Symbol;
      P.exports = qe;
    }),
    $ = a(function (ar, W) {
      var C = v(),
        M = Object.prototype,
        he = M.hasOwnProperty,
        Ie = M.toString,
        m = C ? C.toStringTag : void 0;
      function _e(e) {
        var r = he.call(e, m),
          n = e[m];
        try {
          e[m] = void 0;
          var i = !0;
        } catch (b) {}
        var c = Ie.call(e);
        return i && (r ? e[m] = n : delete e[m]), c;
      }
      W.exports = _e;
    }),
    B = a(function (fr, A) {
      var ke = Object.prototype,
        Ee = ke.toString;
      function Le(e) {
        return Ee.call(e);
      }
      A.exports = Le;
    }),
    H = a(function (cr, F) {
      var U = v(),
        Ne = $(),
        Ge = B(),
        Re = "[object Null]",
        we = "[object Undefined]",
        D = U ? U.toStringTag : void 0;
      function Pe(e) {
        return e == null ? e === void 0 ? we : Re : D && D in Object(e) ? Ne(e) : Ge(e);
      }
      F.exports = Pe;
    }),
    z = a(function (sr, X) {
      function We(e) {
        return e != null && _typeof(e) == "object";
      }
      X.exports = We;
    }),
    K = a(function (ur, J) {
      var Ce = H(),
        Me = z(),
        $e = "[object Symbol]";
      function Ae(e) {
        return _typeof(e) == "symbol" || Me(e) && Ce(e) == $e;
      }
      J.exports = Ae;
    }),
    Z = a(function (br, Q) {
      var V = x(),
        Be = K(),
        Y = 0 / 0,
        Fe = /^\s+|\s+$/g,
        Ue = /^[-+]0x[0-9a-f]+$/i,
        De = /^0b[01]+$/i,
        He = /^0o[0-7]+$/i,
        Xe = parseInt;
      function ze(e) {
        if (typeof e == "number") return e;
        if (Be(e)) return Y;
        if (V(e)) {
          var r = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = V(r) ? r + "" : r;
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = e.replace(Fe, "");
        var n = De.test(e);
        return n || He.test(e) ? Xe(e.slice(2), n ? 2 : 8) : Ue.test(e) ? Y : +e;
      }
      Q.exports = ze;
    }),
    te = a(function (lr, ee) {
      var Je = x(),
        q = w(),
        re = Z(),
        Ke = "Expected a function",
        Qe = Math.max,
        Ve = Math.min;
      function Ye(e, r, n) {
        var i,
          c,
          b,
          u,
          o,
          s,
          l = 0,
          h = !1,
          g = !1,
          y = !0;
        if (typeof e != "function") throw new TypeError(Ke);
        r = re(r) || 0, Je(n) && (h = !!n.leading, g = "maxWait" in n, b = g ? Qe(re(n.maxWait) || 0, r) : b, y = "trailing" in n ? !!n.trailing : y);
        function T(t) {
          var f = i,
            d = c;
          return i = c = void 0, l = t, u = e.apply(d, f), u;
        }
        function ie(t) {
          return l = t, o = setTimeout(p, r), h ? T(t) : u;
        }
        function oe(t) {
          var f = t - s,
            d = t - l,
            k = r - f;
          return g ? Ve(k, b - d) : k;
        }
        function I(t) {
          var f = t - s,
            d = t - l;
          return s === void 0 || f >= r || f < 0 || g && d >= b;
        }
        function p() {
          var t = q();
          if (I(t)) return _(t);
          o = setTimeout(p, oe(t));
        }
        function _(t) {
          return o = void 0, y && i ? T(t) : (i = c = void 0, u);
        }
        function ae() {
          o !== void 0 && clearTimeout(o), l = 0, i = s = c = o = void 0;
        }
        function fe() {
          return o === void 0 ? u : _(q());
        }
        function j() {
          var t = q(),
            f = I(t);
          if (i = arguments, c = this, s = t, f) {
            if (o === void 0) return ie(s);
            if (g) return clearTimeout(o), o = setTimeout(p, r), T(s);
          }
          return o === void 0 && (o = setTimeout(p, r)), u;
        }
        return j.cancel = ae, j.flush = fe, j;
      }
      ee.exports = Ye;
    }),
    ne = me(te()),
    Ze = ne.default;

  /**
   * Detect double tap events
   * # Deals with:
   * - Time intervals between taps
   * - Swipe will stop the taps
   * # Usage:
   * let tapDetector = new TapDetector()
   * tapDetector.attach(this.$el) // in mounted
   * tapDetector.detach(this.$el) // in destroy
   * tapDetector.onSingle(callback)
   * tapDetector.onDouble(callback)
   */

  function TapDetector() {
    // Callbacks -----------------------------------------------------------------

    var singleTapCallbacks = [];
    var doubleTapCallbacks = [];
    function triggerCallbacks(cbList, arg) {
      cbList.forEach(function (cbItem) {
        cbItem.call(null, arg);
      });
    }
    this.onSingleTap = function (cb) {
      if (typeof cb === 'function' && !singleTapCallbacks.includes(cb)) {
        singleTapCallbacks.push(cb);
      }
    };
    this.onDoubleTap = function (cb) {
      if (typeof cb === 'function' && !doubleTapCallbacks.includes(cb)) {
        doubleTapCallbacks.push(cb);
      }
    };
    this.attach = function (dom) {
      if (!(dom instanceof Element)) {
        console.error('TapDetector.attach: arg must be an Element');
        return;
      }
      dom.addEventListener('touchstart', onTouchStart);
      dom.addEventListener('touchmove', onTouchMove);
      dom.addEventListener('touchend', onTouchEnd);
      dom.addEventListener('mousedown', onMouseDown);
      dom.addEventListener('mouseup', onMouseUp);
      dom.addEventListener('mousemove', onMouseMove);
    };
    this.detach = function (dom) {
      dom.removeEventListener('touchstart', onTouchStart);
      dom.removeEventListener('touchmove', onTouchMove);
      dom.removeEventListener('touchend', onTouchEnd);
      dom.removeEventListener('mousedown', onMouseDown);
      dom.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('mousemove', onMouseMove);
    };

    // Main logic ----------------------------------------------------------------

    // in touch mode mouse events will be disabled. Otherwise touches will
    // trigger both touchend end mouseup, i.e. one touch triggers two onPointerUp.
    var isTouchMode = false;
    var lastTapTimestamp = 0;
    var tappedCount = 0;
    var touchMovedLength = 0;
    var lastPointerX = 0;
    var lastPointerY = 0;
    function onTouchStart(ev) {
      isTouchMode = true;
      // console.log('onTouchStart')
      if (ev.touches.length === 1) {
        onPointerDown(ev.touches[0].clientX, ev.touches[0].clientY);
      }
    }
    function onTouchEnd(ev) {
      // console.log('onTouchEnd')
      if (ev.touches.length === 0) {
        onPointerUp();
      }
    }
    function onTouchMove(ev) {
      // console.log('onTouchMove', ev)
      if (ev.touches.length === 1) {
        onPointerMove(ev.touches[0].clientX, ev.touches[0].clientY);
      }
    }
    function onMouseDown(ev) {
      if (isTouchMode) return;

      // console.log('onMouseDown')
      onPointerDown(ev.clientX, ev.clientY);
    }
    function onMouseUp(ev) {
      if (isTouchMode) return;

      // console.log('onMouseUp')
      onPointerUp();
    }
    function onMouseMove(ev) {
      if (isTouchMode) return;

      // console.log('onMouseMove', ev)
      if (ev.button === 0) {
        onPointerMove(ev.clientX, ev.clientY);
      }
    }
    function onPointerDown(x, y) {
      lastPointerX = x;
      lastPointerY = y;
      touchMovedLength = 0;
    }
    function onPointerUp() {
      var currTimeStamp = Date.now();
      // console.log('touchMovedLength', touchMovedLength)
      if (touchMovedLength < 10) {
        // Only when no sliding two far is considered as a valid tap
        if (currTimeStamp - lastTapTimestamp < 300) {
          tappedCount += 1;
        } else {
          tappedCount = 1;
        }
        lastTapTimestamp = Date.now();
        // console.log('tappedCount', tappedCount)
        triggerCallbacks(singleTapCallbacks, {
          clientX: lastPointerX,
          clientY: lastPointerY
        });
        if (tappedCount === 2) {
          triggerCallbacks(doubleTapCallbacks, {
            clientX: lastPointerX,
            clientY: lastPointerY
          });
          tappedCount = 0; // clear count on maximum tap count
        }
      }
      touchMovedLength = 0;
    }
    function onPointerMove(x, y) {
      var deltaX = lastPointerX - x;
      var deltaY = lastPointerY - y;
      var length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      // console.log('onTouchMove length', length)
      touchMovedLength += length;
      lastPointerX = x;
      lastPointerY = y;
    }
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".vue-zoomer {\n    overflow: hidden;\n  }\n  .zoomer {\n    transform-origin: 50% 50%;\n    width: 100%;\n    height: 100%;\n  }\n  .zoomer > img {\n    /* remove the 4px gap below the image */\n    vertical-align: top;\n    user-drag: none;\n    -webkit-user-drag: none;\n    -moz-user-drag: none;\n  }\n  ";
  styleInject(css_248z);

  var template = "<div\nref=\"root\"\nclass=\"vue-zoomer\"\n:style=\"{backgroundColor: backgroundColor}\"\n@mousewheel=\"onMouseWheel\"\n@DOMMouseScroll=\"onMouseWheel\"\n@mousedown=\"onMouseDown\"\n@mouseup=\"onMouseUp\"\n@mousemove=\"onMouseMove\"\n@mouseout=\"setPointerPosCenter\"\n@touchstart=\"onTouchStart\"\n@touchend=\"onTouchEnd\"\n@touchmove=\"onTouchMove\"\n>\n<div class=\"zoomer\" :style=\"wrapperStyle\">\n  <slot></slot>\n</div>\n</div>";
  var Zoomer = {
    template: template,
    props: {
      minScale: {
        type: Number,
        default: 1
      },
      maxScale: {
        type: Number,
        default: 5
      },
      zoomed: {
        type: Boolean,
        default: false
      },
      resetTrigger: {
        type: Number,
        default: 1e5
      },
      aspectRatio: {
        type: Number,
        default: 1
      },
      backgroundColor: {
        type: String,
        default: "transparent"
      },
      pivot: {
        type: String,
        default: "cursor"
      },
      // other options: image-center
      zoomingElastic: {
        type: Boolean,
        default: true
      },
      limitTranslation: {
        type: Boolean,
        default: true
      },
      doubleClickToZoom: {
        type: Boolean,
        default: true
      },
      mouseWheelToZoom: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      return {
        // Container sizes, used to determin the initial zoomer size.
        // Need to reactive to window resizing.
        containerWidth: 1,
        containerHeight: 1,
        containerLeft: 0,
        containerTop: 0,
        // Store values: Interactions will at last change these values.
        // After rotation or resize, these values will keep still.
        // These three values are all relative to the container size.
        translateX: 0,
        animTranslateX: 0,
        translateY: 0,
        animTranslateY: 0,
        scale: 1,
        animScale: 1,
        // Mouse states
        lastFullWheelTime: 0,
        lastWheelTime: 0,
        lastWheelDirection: "y",
        isPointerDown: false,
        pointerPosX: -1,
        pointerPosY: -1,
        twoFingerInitDist: 0,
        panLocked: true,
        // Others
        raf: null,
        tapDetector: null
      };
    },
    computed: {
      wrapperStyle: function wrapperStyle() {
        var translateX = this.containerWidth * this.animTranslateX;
        var translateY = this.containerHeight * this.animTranslateY;
        return {
          transform: ["translate(".concat(translateX, "px, ").concat(translateY, "px)"), "scale(".concat(this.animScale, ")")].join(" ")
        };
      }
    },
    watch: {
      scale: function scale(val) {
        if (val !== 1) {
          this.$emit("update:zoomed", true);
          this.panLocked = false;
        }
      },
      resetTrigger: "reset"
    },
    mounted: function mounted() {
      this.tapDetector = new TapDetector();
      this.tapDetector.attach(this.$refs.root);
      if (this.doubleClickToZoom) {
        this.tapDetector.onDoubleTap(this.onDoubleTap);
      }
      // console.log('container size: ', this.containerWidth, this.containerHeight)
      window.addEventListener("resize", this.onWindowResize);
      this.onWindowResize();
      this.refreshContainerPos();
      this.loop();
    },
    beforeUnmount: function beforeUnmount() {
      this.tapDetector.detach(this.$refs.root);
      window.removeEventListener("resize", this.onWindowResize);
      window.cancelAnimationFrame(this.raf);
      // console.log('destroy')
    },
    methods: {
      // API ---------------------------------------------------------------------
      reset: function reset() {
        this.scale = 1;
        this.panLocked = true;
        this.translateX = 0;
        this.translateY = 0;
      },
      zoomIn: function zoomIn() {
        var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
        this.tryToScale(scale);
        this.onInteractionEnd();
      },
      zoomOut: function zoomOut() {
        var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
        this.tryToScale(scale);
        this.onInteractionEnd();
      },
      // Main Logic --------------------------------------------------------------
      // scale
      // Zoom the image with the point at the pointer(mouse or pinch center) pinned.
      // Simplify: This can be regard as vector pointer to old-image-center scaling.
      tryToScale: function tryToScale(scaleDelta) {
        var newScale = this.scale * scaleDelta;
        if (this.zoomingElastic) {
          // damping
          if (newScale < this.minScale || newScale > this.maxScale) {
            var log = Math.log2(scaleDelta);
            log *= 0.2;
            scaleDelta = Math.pow(2, log);
            newScale = this.scale * scaleDelta;
          }
        } else {
          if (newScale < this.minScale) newScale = this.minScale;else if (newScale > this.maxScale) newScale = this.maxScale;
        }
        scaleDelta = newScale / this.scale;
        this.scale = newScale;
        if (this.pivot !== "image-center") {
          var normMousePosX = (this.pointerPosX - this.containerLeft) / this.containerWidth;
          var normMousePosY = (this.pointerPosY - this.containerTop) / this.containerHeight;
          this.translateX = (0.5 + this.translateX - normMousePosX) * scaleDelta + normMousePosX - 0.5;
          this.translateY = (0.5 + this.translateY - normMousePosY) * scaleDelta + normMousePosY - 0.5;
        }
      },
      setPointerPosCenter: function setPointerPosCenter() {
        this.pointerPosX = this.containerLeft + this.containerWidth / 2;
        this.pointerPosY = this.containerTop + this.containerHeight / 2;
      },
      // pan
      onPointerMove: function onPointerMove(newMousePosX, newMousePosY) {
        if (this.isPointerDown) {
          var pixelDeltaX = newMousePosX - this.pointerPosX;
          var pixelDeltaY = newMousePosY - this.pointerPosY;
          // console.log('pixelDeltaX, pixelDeltaY', pixelDeltaX, pixelDeltaY)
          if (!this.panLocked) {
            this.translateX += pixelDeltaX / this.containerWidth;
            this.translateY += pixelDeltaY / this.containerHeight;
          }
        }
        this.pointerPosX = newMousePosX;
        this.pointerPosY = newMousePosY;
      },
      onInteractionEnd: Ze(function () {
        this.limit();
        this.panLocked = this.scale === 1;
        this.$emit("update:zoomed", !this.panLocked);
      }, 100),
      // limit the scale between max and min and the translate within the viewport
      limit: function limit() {
        // scale
        if (this.scale < this.minScale) {
          this.scale = this.minScale;
          // FIXME this sometimes will not reset when pinching in
          // this.tryToScale(this.minScale / this.scale)
        } else if (this.scale > this.maxScale) {
          this.tryToScale(this.maxScale / this.scale);
        }
        // translate
        if (this.limitTranslation) {
          var translateLimit = this.calcTranslateLimit();
          if (Math.abs(this.translateX) > translateLimit.x) {
            this.translateX *= translateLimit.x / Math.abs(this.translateX);
          }
          if (Math.abs(this.translateY) > translateLimit.y) {
            this.translateY *= translateLimit.y / Math.abs(this.translateY);
          }
        }
      },
      calcTranslateLimit: function calcTranslateLimit() {
        if (this.getMarginDirection() === "y") {
          var imageToContainerRatio = this.containerWidth / this.aspectRatio / this.containerHeight;
          var translateLimitY = (this.scale * imageToContainerRatio - 1) / 2;
          if (translateLimitY < 0) translateLimitY = 0;
          return {
            x: (this.scale - 1) / 2,
            y: translateLimitY
          };
        } else {
          var _imageToContainerRatio = this.containerHeight * this.aspectRatio / this.containerWidth;
          var translateLimitX = (this.scale * _imageToContainerRatio - 1) / 2;
          if (translateLimitX < 0) translateLimitX = 0;
          return {
            x: translateLimitX,
            y: (this.scale - 1) / 2
          };
        }
      },
      getMarginDirection: function getMarginDirection() {
        var containerRatio = this.containerWidth / this.containerHeight;
        return containerRatio > this.aspectRatio ? "x" : "y";
      },
      onDoubleTap: function onDoubleTap(ev) {
        if (this.scale === 1) {
          if (ev.clientX > 0) {
            this.pointerPosX = ev.clientX;
            this.pointerPosY = ev.clientY;
          }
          this.tryToScale(Math.min(3, this.maxScale));
        } else {
          this.reset();
        }
        this.onInteractionEnd();
      },
      // reactive
      onWindowResize: function onWindowResize() {
        var styles = window.getComputedStyle(this.$refs.root);
        this.containerWidth = parseFloat(styles.width);
        this.containerHeight = parseFloat(styles.height);
        this.setPointerPosCenter();
        this.limit();
      },
      refreshContainerPos: function refreshContainerPos() {
        var rect = this.$refs.root.getBoundingClientRect();
        this.containerLeft = rect.left;
        this.containerTop = rect.top;
      },
      loop: function loop() {
        this.animScale = this.gainOn(this.animScale, this.scale);
        this.animTranslateX = this.gainOn(this.animTranslateX, this.translateX);
        this.animTranslateY = this.gainOn(this.animTranslateY, this.translateY);
        this.raf = window.requestAnimationFrame(this.loop);
        // console.log('loop', this.raf)
      },
      gainOn: function gainOn(from, to) {
        var delta = (to - from) * 0.3;
        // console.log('gainOn', from, to, from + delta)
        if (Math.abs(delta) > 1e-5) {
          return from + delta;
        } else {
          return to;
        }
      },
      // Mouse Events ------------------------------------------------------------
      // Mouse wheel scroll,  TrackPad pinch or TrackPad scroll
      onMouseWheel: function onMouseWheel(ev) {
        if (!this.mouseWheelToZoom) return;
        // prevent is used to stop the page scroll elastic effects
        ev.preventDefault();
        if (ev.detail) ev.wheelDelta = ev.detail * -10;
        var currTime = Date.now();
        if (Math.abs(ev.wheelDelta) === 120) {
          // Throttle the TouchPad pinch on Mac, or it will be too sensitive
          if (currTime - this.lastFullWheelTime > 50) {
            this.onMouseWheelDo(ev.wheelDelta);
            this.lastFullWheelTime = currTime;
          }
        } else {
          if (currTime - this.lastWheelTime > 50 && typeof ev.deltaX === "number") {
            this.lastWheelDirection = ev.detail == 0 && Math.abs(ev.deltaX) > Math.abs(ev.deltaY) ? "x" : "y";
            if (this.lastWheelDirection === "x") {
              this.$emit("swipe", ev.deltaX > 0 ? "left" : "right");
            }
          }
          if (this.lastWheelDirection === "y") {
            this.onMouseWheelDo(ev.wheelDelta);
          }
        }
        this.lastWheelTime = currTime;
      },
      onMouseWheelDo: function onMouseWheelDo(wheelDelta) {
        // Value basis: One mouse wheel (wheelDelta=+-120) means 1.25/0.8 scale.
        var scaleDelta = Math.pow(1.25, wheelDelta / 120);
        this.tryToScale(scaleDelta);
        this.onInteractionEnd();
      },
      onMouseDown: function onMouseDown(ev) {
        this.refreshContainerPos();
        this.isPointerDown = true;
        // Open the context menu then click other place will skip the mousemove events.
        // This will cause the pointerPosX/Y NOT sync, then we will need to fix it on mousedown event.
        this.pointerPosX = ev.clientX;
        this.pointerPosY = ev.clientY;
        // console.log('onMouseDown', ev)
      },
      onMouseUp: function onMouseUp(ev) {
        this.isPointerDown = false;
        this.onInteractionEnd();
      },
      onMouseMove: function onMouseMove(ev) {
        this.onPointerMove(ev.clientX, ev.clientY);
        // console.log('onMouseMove client, offset', ev.clientX, ev.clientY)
      },
      // Touch Events ------------------------------------------------------------
      onTouchStart: function onTouchStart(ev) {
        if (ev.touches.length === 1) {
          this.refreshContainerPos();
          this.pointerPosX = ev.touches[0].clientX;
          this.pointerPosY = ev.touches[0].clientY;
          this.isPointerDown = true;
        } else if (ev.touches.length === 2) {
          this.isPointerDown = true;
          // pos
          this.pointerPosX = (ev.touches[0].clientX + ev.touches[1].clientX) / 2;
          this.pointerPosY = (ev.touches[0].clientY + ev.touches[1].clientY) / 2;
          // dist
          var distX = ev.touches[0].clientX - ev.touches[1].clientX;
          var distY = ev.touches[0].clientY - ev.touches[1].clientY;
          this.twoFingerInitDist = Math.sqrt(distX * distX + distY * distY);
        }
        // console.log('onTouchStart', ev.touches)
      },
      onTouchEnd: function onTouchEnd(ev) {
        if (ev.touches.length === 0) {
          this.isPointerDown = false;
          // Near 1 to set 1
          if (Math.abs(this.scale - 1) < 0.1) this.scale = 1;
          this.onInteractionEnd();
        } else if (ev.touches.length === 1) {
          this.pointerPosX = ev.touches[0].clientX;
          this.pointerPosY = ev.touches[0].clientY;
        }
        // console.log('onTouchEnd', ev.touches.length)
      },
      onTouchMove: function onTouchMove(ev) {
        if (ev.touches.length === 1) {
          this.onPointerMove(ev.touches[0].clientX, ev.touches[0].clientY);
        } else if (ev.touches.length === 2) {
          // pos
          var newMousePosX = (ev.touches[0].clientX + ev.touches[1].clientX) / 2;
          var newMousePosY = (ev.touches[0].clientY + ev.touches[1].clientY) / 2;
          this.onPointerMove(newMousePosX, newMousePosY);
          this.pointerPosX = newMousePosX;
          this.pointerPosY = newMousePosY;
          // dist
          var distX = ev.touches[0].clientX - ev.touches[1].clientX;
          var distY = ev.touches[0].clientY - ev.touches[1].clientY;
          var newTwoFingerDist = Math.sqrt(distX * distX + distY * distY);
          this.tryToScale(newTwoFingerDist / this.twoFingerInitDist);
          this.twoFingerInitDist = newTwoFingerDist;
        }
        // console.log('onTouchMove', this.pointerPosX, this.pointerPosY)
      }
    }
  };

  var htmlMinify = function htmlMinify(html) {
    return html.replace(/\n/g, '');
  };
  var debounce = function debounce(fn) {
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var timeout;
    return function () {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        return fn.apply(_this, args);
      }, interval);
    };
  };
  var base64ToFile = function base64ToFile(base64) {
    var _base64$split = base64.split(','),
      _base64$split2 = _slicedToArray(_base64$split, 2),
      mime = _base64$split2[0],
      content = _base64$split2[1];
    var binary = atob(content);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    var fileData = new Blob([new Uint8Array(array)], {
      type: mime
    });
    return new File([fileData], "".concat(new Date().getTime()), {
      type: mime
    });
  };
  var getSecret = function getSecret() {
    return localStorage.getItem("lee6's-secret");
  };

  var template$1 = htmlMinify("<svg fill=\"#fff\" t=\"1658039132650\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2251\" width=\"25\" height=\"25\">\n<path d=\"M556.8 512L832 236.8c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L512 467.2l-275.2-277.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l275.2 277.333333-277.333333 275.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333L512 556.8 787.2 832c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8L556.8 512z\" p-id=\"2252\"></path>\n</svg>");
  var close = {
    template: template$1
  };

  var css_248z$1 = ".a-modal-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: #000;\n  z-index: 2147483647;\n  overflow: hidden;\n  transform: translateZ(0);\n}\n.a-modal-close {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  z-index: 2147483646;\n}\n.a-modal-actions {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  bottom: 0;\n  margin-bottom: 24px;\n  padding: 15px 15px;\n  z-index: 2147483646;\n}\n";
  styleInject(css_248z$1);

  var template$2 = htmlMinify("\n<Teleport :disabled=\"!visible\" to=\"body\">\n  <div style=\"line-height:initial\">\n    <div v-if=\"visible\" class=\"a-modal-wrapper\">\n      <div class=\"a-modal-close\" @click=\"this.close\">\n        <v-close></v-close>\n      </div>\n      <div class=\"a-modal-actions\">\n        <slot name=\"action\"></slot>\n      </div>\n      <v-zoomer ref=\"zoomer\" style=\"width:100%;height:100%;\">\n        <slot name=\"popover\"></slot>\n      </v-zoomer>\n    </div>\n    <div @click=\"this.pop\">\n      <slot name=\"default\"></slot>\n    </div>\n  </div>\n</Teleport>\n");
  var modal = {
    template: template$2,
    data: function data() {
      return {
        visible: false
      };
    },
    props: {
      scale: {
        type: Number,
        default: 1
      }
    },
    watch: {
      scale: function scale() {
        this.$nextTick(function () {
          if (this.scale) {
            this.zoomIn(this.scale);
          } else {
            this.reset();
          }
        });
      }
    },
    methods: {
      zoomIn: function zoomIn(s) {
        if (this.$refs.zoomer) {
          this.$refs.zoomer.zoomIn(s);
        }
      },
      reset: function reset() {
        if (this.$refs.zoomer) {
          this.$refs.zoomer.reset();
        }
      },
      pop: function pop() {
        this.visible = true;
        this.$emit('popover');
        this.$nextTick(function () {
          this.zoomIn(this.scale);
        });
        document.body.style.overflowY = 'hidden';
      },
      close: function close() {
        this.visible = false;
        document.body.style.overflowY = 'auto';
      }
    },
    components: {
      'v-zoomer': Zoomer,
      'v-close': close
    }
  };

  var template$3 = htmlMinify("\n<span ref=\"lazy\">\n  <slot name=\"default\"></slot>\n</span>\n");
  var lazyload = {
    template: template$3,
    data: function data() {
      return {
        loaded: false,
        handler: null
      };
    },
    mounted: function mounted() {
      var _this = this;
      setTimeout(function () {
        _this.shouldLoad(function () {
          _this.listen();
        });
      }, 100);
    },
    beforeUnmount: function beforeUnmount() {
      this.dismiss();
    },
    methods: {
      listen: function listen() {
        this.handler = debounce(this.onscroll, 100);
        document.addEventListener('scroll', this.handler);
      },
      dismiss: function dismiss() {
        document.removeEventListener('scroll', this.handler);
        this.handler = null;
      },
      onscroll: function onscroll() {
        this.shouldLoad();
      },
      shouldLoad: function shouldLoad(next) {
        var clientHeight = document.documentElement.clientHeight;
        var preload = 0.5 * clientHeight;
        var _this$$refs$lazy$getB = this.$refs.lazy.getBoundingClientRect(),
          bottom = _this$$refs$lazy$getB.bottom,
          top = _this$$refs$lazy$getB.top;
        if (!this.loaded && bottom - clientHeight < preload && top > 0 - preload) {
          this.loaded = true;
          this.$emit('load');
          this.dismiss();
          return;
        } else if (typeof next === 'function') {
          next();
        }
      }
    }
  };

  var template$4 = htmlMinify("\n<div style=\"width:100%;height:200px;text-align:center;line-height:120px;background:#fafafa\">\n  <slot name=\"default\"></slot>\n</div>\n");
  var placeholder = {
    template: template$4
  };

  var css_248z$2 = ".a-img-popover-item {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n}\n.a-img-left-action {\n  width: 50%;\n  text-align: left;\n  float: left;\n}\n.a-img-right-action {\n  width: 50%;\n  text-align: right;\n  float: right;\n}\n";
  styleInject(css_248z$2);

  var template$5 = htmlMinify("\n<a-lazyload @load=\"onLoad\">\n  <a-placeholder v-if=\"visible && (!src && !srcMin)\"></a-placeholder>\n  <a-modal v-if=\"!loading || (src || srcMin)\" :scale=\"scale\">\n    <template v-slot:action>\n      <div>\n        <div class=\"a-img-left-action\">\n            <t-button type=\"text\" style=\"padding:4px 5px;\"  v-if=\"!src\" @click=\"loadHD\" :loading=\"loading\">\n            <svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"><path d=\"M128 128h768a42.666667 42.666667 0 0 1 42.666667 42.666667v682.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H128a42.666667 42.666667 0 0 1-42.666667-42.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z m192 352V384H256v256h64v-96h85.333333V640H469.333333V384H405.333333v96h-85.333333z m298.666667-32H682.666667a21.333333 21.333333 0 0 1 21.333333 21.333333v85.333334a21.333333 21.333333 0 0 1-21.333333 21.333333h-64v-128zM554.666667 384v256h128a85.333333 85.333333 0 0 0 85.333333-85.333333v-85.333334a85.333333 85.333333 0 0 0-85.333333-85.333333h-128z\" fill=\"#fff\"></path></svg>\n            </t-button>\n        </div>\n        <div class=\"a-img-right-action\">\n            <t-button type=\"text\" style=\"padding:4px 5px;\" @click=\"scaleIn\">\n                <svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"><path d=\"M149.333333 394.666667c17.066667 0 32-14.933333 32-32v-136.533334l187.733334 187.733334c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c12.8-12.8 12.8-32 0-44.8l-187.733333-187.733334H362.666667c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H149.333333c-4.266667 0-8.533333 0-10.666666 2.133334-8.533333 4.266667-14.933333 10.666667-19.2 17.066666-2.133333 4.266667-2.133333 8.533333-2.133334 12.8v213.333334c0 17.066667 14.933333 32 32 32zM874.666667 629.333333c-17.066667 0-32 14.933333-32 32v136.533334L642.133333 597.333333c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8l200.533334 200.533334H661.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h213.333334c4.266667 0 8.533333 0 10.666666-2.133334 8.533333-4.266667 14.933333-8.533333 17.066667-17.066666 2.133333-4.266667 2.133333-8.533333 2.133333-10.666667V661.333333c2.133333-17.066667-12.8-32-29.866666-32zM381.866667 595.2l-200.533334 200.533333V661.333333c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v213.333334c0 4.266667 0 8.533333 2.133334 10.666666 4.266667 8.533333 8.533333 14.933333 17.066666 17.066667 4.266667 2.133333 8.533333 2.133333 10.666667 2.133333h213.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32h-136.533333l200.533333-200.533333c12.8-12.8 12.8-32 0-44.8s-29.866667-10.666667-42.666666 0zM904.533333 138.666667c0-2.133333 0-2.133333 0 0-4.266667-8.533333-10.666667-14.933333-17.066666-17.066667-4.266667-2.133333-8.533333-2.133333-10.666667-2.133333H661.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h136.533334l-187.733334 187.733333c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466667-8.533333l187.733333-187.733333V362.666667c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V149.333333c-2.133333-4.266667-2.133333-8.533333-4.266667-10.666666z\" fill=\"#fff\"></path></svg>\n            </t-button>\n            <t-button type=\"text\" style=\"padding:4px 5px;\" @click=\"scaleOut\">\n                <svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"><path d=\"M313.6 358.4H177.066667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h213.333333c4.266667 0 8.533333 0 10.666667-2.133333 8.533333-4.266667 14.933333-8.533333 17.066666-17.066667 2.133333-4.266667 2.133333-8.533333 2.133334-10.666667v-213.333333c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v136.533333L172.8 125.866667c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l185.6 187.733333zM695.466667 650.666667H832c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H618.666667c-4.266667 0-8.533333 0-10.666667 2.133333-8.533333 4.266667-14.933333 8.533333-17.066667 17.066667-2.133333 4.266667-2.133333 8.533333-2.133333 10.666666v213.333334c0 17.066667 14.933333 32 32 32s32-14.933333 32-32v-136.533334l200.533333 200.533334c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466667-8.533333c12.8-12.8 12.8-32 0-44.8l-204.8-198.4zM435.2 605.866667c-4.266667-8.533333-8.533333-14.933333-17.066667-17.066667-4.266667-2.133333-8.533333-2.133333-10.666666-2.133333H192c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h136.533333L128 851.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333l200.533334-200.533333V832c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V618.666667c-2.133333-4.266667-2.133333-8.533333-4.266667-12.8zM603.733333 403.2c4.266667 8.533333 8.533333 14.933333 17.066667 17.066667 4.266667 2.133333 8.533333 2.133333 10.666667 2.133333h213.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32h-136.533333L896 170.666667c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0l-187.733333 187.733333V177.066667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v213.333333c2.133333 4.266667 2.133333 8.533333 4.266666 12.8z\" fill=\"#fff\"></path></svg>\n            </t-button>\n        </div>\n      </div>\n    </template>\n    <template v-slot:popover>\n      <img class=\"a-img-popover-item\" :src=\"visible && (src || srcMin)\" :alt=\"name\" />\n    </template>\n    <template v-slot:default>\n      <img v-if=\"visible && hide && (src || srcMin)\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" style=\"width:100vw;height:56.25vw;max-height:30vh\" />\n      <img v-if=\"visible && !hide && (src || srcMin)\" :src=\"src || srcMin\" :alt=\"name\" @load=\"onImageLoad\" @error=\"onImageError\" style=\"width:100%\" />\n    </template>\n  </a-modal>\n</a-lazyload>\n");
  var isLocal = location.hostname === 'localhost';
  var baseUrl = function baseUrl() {
    var localSuffix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'docs/assets/';
    var repo_name = window.__img_repo_name__ || 'img';
    if (isLocal) {
      return "/packages/".concat(repo_name, "/").concat(localSuffix);
    }
    return "/".concat(repo_name, "/assets/");
  };
  var img = {
    template: template$5,
    props: {
      name: {
        type: String,
        required: true
      },
      dir: {
        type: String,
        default: 'public'
      },
      hide: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      var secretKey = getSecret();
      return {
        img: undefined,
        src: undefined,
        srcMin: undefined,
        scale: undefined,
        secretKey: secretKey,
        loading: false,
        visible: !this.dir.includes('privacy') || !!secretKey
      };
    },
    methods: {
      onLoad: function onLoad() {
        this.load('min', 'srcMin');
      },
      onImageLoad: function onImageLoad(e) {
        this.img = e.target;
        this.scaleIn();
      },
      onImageError: function onImageError(e) {
        window.antd.message.error("".concat(e.srcElement.getAttribute('src').split('/').slice(-1), " load error."));
      },
      scaleIn: function scaleIn() {
        this.scale = window.innerHeight / this.img.offsetHeight;
      },
      scaleOut: function scaleOut() {
        this.scale = 0;
      },
      loadHD: function loadHD() {
        this.load('', 'src');
      },
      load: function load() {
        var _this = this;
        var suffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'src';
        var error = function error(message) {
          window.antd.message.error(message);
          console.warn(message);
        };
        var request = function request(url) {
          _this.loading = true;
          return fetch(baseUrl() + url, {
            mode: 'cors'
          }).then(function (res) {
            if (res.status === 200) return res.blob();
            error("".concat(res.url.split('/').slice(-1), " ").concat(res.statusText.toLowerCase(), "."));
            return Promise.reject();
          }).then(function (blob) {
            return new Promise(function (resolve) {
              var reader = new FileReader();
              reader.onload = function () {
                var secret = reader.result.split('datatext/plainbase64')[1];
                resolve(secret);
              };
              reader.readAsDataURL(blob);
            });
          }).then(function (content) {
            var base64 = crypto(content, _this.secretKey, 'decrypt');
            var blobUrl = URL.createObjectURL(base64ToFile(base64));
            _this[t] = blobUrl;
          }).finally(function () {
            _this.loading = false;
          });
        };
        if (this.dir === 'privacy') {
          if (this.secretKey) {
            var name = suffer ? [this.name.split('.')[0], suffer, 'webp'].join('.') : this.name;
            request('privacy/' + name).finally(function () {
              if (isLocal && !_this[t]) {
                _this[t] = baseUrl('src/') + 'privacy/' + _this.name;
                error("".concat(name, " asset load fail, use source instead."));
              }
            });
          }
        } else if (this.dir === 'privacy-gif') {
          if (this.secretKey) {
            var _name = suffer ? [this.name.split('.')[0], suffer ? suffer + '.g1f' : 'gif'].join('.') : this.name;
            request('privacy/' + _name).finally(function () {
              if (isLocal && !_this[t]) {
                _this[t] = baseUrl('src/') + 'privacy/' + _this.name;
                error("".concat(_name, " asset load fail, use source instead."));
              }
            });
          }
        } else if (this.dir === 'animation') {
          this[t] = baseUrl() + 'animation/' + [this.name, suffer, 'gif'].filter(function (_) {
            return _;
          }).join('.');
        } else if (this.dir === 'origin') {
          this.srcMin = baseUrl() + this.name;
          this.src = this.srcMin;
        } else {
          this[t] = baseUrl() + 'public/' + [this.name, suffer, 'webp'].filter(function (_) {
            return _;
          }).join('.');
        }
      }
    },
    components: {
      'a-modal': modal,
      'a-lazyload': lazyload,
      'a-placeholder': placeholder,
      't-button': antd.Button
    }
  };

  var template$6 = htmlMinify("\n<template v-if=\"loading\">\n  <a-skeleton></a-skeleton>\n</template>\n<template v-if=\"!visible\">\n  <span\n    v-if=\"this.blackout || this.content\"\n    @click=\"decrypt\"\n    style=\"\n      display: inline;\n      background-color: #333;\n      color: transparent;\n      padding: 0 8px;\n      user-select: none;\n      height: 18px;\n      line-height: 18px;\n      word-break: break-all;\n      letter-spacing: -5.5px;\n    \"\n  >\n      {{ this.rawContent }}\n  </span>\n</template>\n<template v-else>\n  <span ref=\"t\"></span>\n</template>\n");
  var secret = {
    template: template$6,
    props: {
      name: {
        type: String,
        required: true
      },
      autoload: {
        type: Boolean,
        default: false
      },
      blackout: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        app: undefined,
        visible: false,
        loading: false,
        rawContent: undefined,
        content: undefined,
        secretKey: getSecret()
      };
    },
    beforeUnmount: function beforeUnmount() {
      if (this.app) {
        this.app.unmount();
        this.app = null;
      }
    },
    mounted: function mounted() {
      var _this = this;
      if (this.secretKey) {
        this.loading = true;
        fetch("assets/confidential/".concat(this.name, ".md"), {
          mode: 'cors'
        }).then(function (res) {
          if (res.status === 200) return res.text();
          window.antd.message.error("".concat(res.url.split('/').slice(-1), " ").concat(res.statusText.toLowerCase(), "."));
          return Promise.reject();
        }).then(function (rawContent) {
          _this.rawContent = rawContent;
          if (_this.secretKey) {
            var keylength = 16;
            var keyorigin = _this.secretKey.split('');
            var key16 = keyorigin.length < 16 ? [].concat(_toConsumableArray(keyorigin), _toConsumableArray(Array.from(new Array(keylength - keyorigin.length)).map(function () {
              return '0';
            }))).join('') : key16;
            var keyutf = cryptoJs.enc.Utf8.parse(key16);
            var iv = {
              iv: cryptoJs.enc.Base64.parse(key16)
            };
            var raw = cryptoJs.AES.decrypt({
              ciphertext: cryptoJs.enc.Base64.parse(rawContent)
            }, keyutf, iv);
            var content = macau(cryptoJs.enc.Utf8.stringify(raw));
            _this.content = _docsify.compiler.compile(content);
            if (_this.autoload) {
              _this.decrypt();
            }
          }
        }).finally(function () {
          return _this.loading = false;
        });
      }
    },
    methods: {
      decrypt: function decrypt() {
        var _this2 = this;
        if (this.secretKey) {
          var app = window.Vue.createApp({
            template: this.content,
            components: window.$docsify.vueComponents
          });
          this.visible = true;
          this.app = app;
          setTimeout(function () {
            app.mount(_this2.$refs.t);
            _this2.subSidebar();
          }, 0);
        }
      },
      subSidebar: function subSidebar() {
        var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _docsify.config.subMaxLevel;
        var activeEl = document.querySelector(".sidebar-nav a[href='".concat(location.hash.split('?')[0], "']"));
        if (!activeEl) return;
        var genTree = _docsify.compiler.genTree;
        var tree = _docsify.compiler.tree;
        var toc = [];
        var headers = document.getElementById('main').querySelectorAll('h1,h2,h3,h4,h5,h6');
        headers.forEach(function (header) {
          var level = Number(header.tagName.slice(-1));
          var title = header.innerText;
          var slug = header.children[0].getAttribute('href');
          toc.push({
            level: level,
            title: title,
            slug: slug
          });
        });
        toc[0] && toc[0].level === 1 && toc.shift();
        var tree$1 = genTree(toc, level);
        var innerHTML = tree(tree$1, '{inner}');
        var sidebar = activeEl.parentNode.querySelector('.app-sub-sidebar');
        if (sidebar) {
          _docsify.compiler.toc = [];
          sidebar.innerHTML = innerHTML;
        }
      }
    },
    components: {
      'a-skeleton': window.antd.Skeleton
    }
  };

  var css_248z$3 = ".am-steps {\n  font-size: 0;\n  width: 100%;\n  line-height: 1.5;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.am-steps,\n.am-steps * {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.am-steps-item {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  overflow: hidden;\n}\n.am-steps-item:last-child {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n}\n.am-steps-item:last-child .am-steps-item-tail,\n.am-steps-item:last-child .am-steps-item-title:after {\n  display: none;\n}\n.am-steps-item-icon,\n.am-steps-item-content {\n  display: inline-block;\n  vertical-align: top;\n}\n.am-steps-item-icon {\n  border: 1px solid #bbb;\n  width: 22px;\n  height: 22px;\n  line-height: 22px;\n  border-radius: 22px;\n  text-align: center;\n  font-size: 14px;\n  margin-right: 8px;\n  -webkit-transition: background-color 0.3s, border-color 0.3s;\n  transition: background-color 0.3s, border-color 0.3s;\n}\n.am-steps-item-icon > .am-steps-icon {\n  line-height: 1;\n  top: -1px;\n  color: #108ee9;\n  position: relative;\n}\n.am-steps-item-icon > .am-steps-icon .am-icon {\n  font-size: 12px;\n  position: relative;\n  float: left;\n}\n.am-steps-item-tail {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  top: 12px;\n  padding: 0 10px;\n}\n.am-steps-item-tail:after {\n  content: \"\";\n  display: inline-block;\n  background: #ddd;\n  height: 1px;\n  border-radius: 1px;\n  width: 100%;\n  -webkit-transition: background 0.3s;\n  transition: background 0.3s;\n  position: relative;\n  left: -2px;\n}\n.am-steps-item-content {\n  margin-top: 3px;\n}\n.am-steps-item-title {\n  font-size: 16px;\n  margin-bottom: 4px;\n  color: #000;\n  font-weight: bold;\n  display: inline-block;\n  padding-right: 10px;\n  position: relative;\n}\n.am-steps-item-description {\n  font-size: 15px;\n  color: #bbb;\n}\n.am-steps-item-wait .am-steps-item-icon {\n  border-color: #ccc;\n  background-color: #fff;\n}\n.am-steps-item-wait .am-steps-item-icon > .am-steps-icon {\n  color: #ccc;\n}\n.am-steps-item-wait .am-steps-item-icon > .am-steps-icon .am-steps-icon-dot {\n  background: #ccc;\n}\n.am-steps-item-wait .am-steps-item-title {\n  color: #000;\n}\n.am-steps-item-wait .am-steps-item-title:after {\n  background-color: #ddd;\n}\n.am-steps-item-wait .am-steps-item-description {\n  color: #000;\n}\n.am-steps-item-wait .am-steps-item-tail:after {\n  background-color: #ddd;\n}\n.am-steps-item-process .am-steps-item-icon {\n  border-color: #108ee9;\n  background-color: #fff;\n}\n.am-steps-item-process .am-steps-item-icon > .am-steps-icon {\n  color: #108ee9;\n}\n.am-steps-item-process .am-steps-item-icon > .am-steps-icon .am-steps-icon-dot {\n  background: #108ee9;\n}\n.am-steps-item-process .am-steps-item-title {\n  color: #000;\n}\n.am-steps-item-process .am-steps-item-title:after {\n  background-color: #ddd;\n}\n.am-steps-item-process .am-steps-item-description {\n  color: #000;\n}\n.am-steps-item-process .am-steps-item-tail:after {\n  background-color: #ddd;\n}\n.am-steps-item-process .am-steps-item-icon {\n  background: #108ee9;\n}\n.am-steps-item-process .am-steps-item-icon > .am-steps-icon {\n  color: #fff;\n}\n.am-steps-item-finish .am-steps-item-icon {\n  border-color: #108ee9;\n  background-color: #fff;\n}\n.am-steps-item-finish .am-steps-item-icon > .am-steps-icon {\n  color: #108ee9;\n}\n.am-steps-item-finish .am-steps-item-icon > .am-steps-icon .am-steps-icon-dot {\n  background: #108ee9;\n}\n.am-steps-item-finish .am-steps-item-title {\n  color: #000;\n}\n.am-steps-item-finish .am-steps-item-title:after {\n  background-color: #108ee9;\n}\n.am-steps-item-finish .am-steps-item-description {\n  color: #000;\n}\n.am-steps-item-finish .am-steps-item-tail:after {\n  background-color: #108ee9;\n}\n.am-steps-item-error .am-steps-item-icon {\n  border-color: #f4333c;\n  background-color: #fff;\n}\n.am-steps-item-error .am-steps-item-icon > .am-steps-icon {\n  color: #f4333c;\n}\n.am-steps-item-error .am-steps-item-icon > .am-steps-icon .am-steps-icon-dot {\n  background: #f4333c;\n}\n.am-steps-item-error .am-steps-item-title {\n  color: #f4333c;\n}\n.am-steps-item-error .am-steps-item-title:after {\n  background-color: #ddd;\n}\n.am-steps-item-error .am-steps-item-description {\n  color: #f4333c;\n}\n.am-steps-item-error .am-steps-item-tail:after {\n  background-color: #ddd;\n}\n.am-steps-item.am-steps-next-error .am-steps-item-title:after {\n  background: #f4333c;\n}\n.am-steps-item.error-tail .am-steps-item-tail:after {\n  background-color: #f4333c;\n}\n.am-steps-horizontal:not(.am-steps-label-vertical) .am-steps-item {\n  margin-right: 10px;\n}\n.am-steps-horizontal:not(.am-steps-label-vertical) .am-steps-item:last-child {\n  margin-right: 0;\n}\n.am-steps-horizontal:not(.am-steps-label-vertical) .am-steps-item-tail {\n  display: none;\n}\n.am-steps-horizontal:not(.am-steps-label-vertical) .am-steps-item-description {\n  max-width: 100px;\n}\n.am-steps-item-custom .am-steps-item-icon {\n  background: none;\n  border: 0;\n  width: auto;\n  height: auto;\n}\n.am-steps-item-custom .am-steps-item-icon > .am-steps-icon {\n  font-size: 22px;\n  top: 1px;\n  width: 22px;\n  height: 22px;\n}\n.am-steps-item-custom.am-steps-item-process .am-steps-item-icon > .am-steps-icon {\n  color: #108ee9;\n}\n.am-steps-small .am-steps-item-icon {\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n  text-align: center;\n  border-radius: 18px;\n  font-size: 14px;\n  margin-right: 8px;\n}\n.am-steps-small .am-steps-item-icon > .am-steps-icon {\n  font-size: 12px;\n  -webkit-transform: scale(0.75);\n  -ms-transform: scale(0.75);\n  transform: scale(0.75);\n  top: -2px;\n}\n.am-steps-small .am-steps-item-content {\n  margin-top: 0;\n}\n.am-steps-small .am-steps-item-title {\n  font-size: 16px;\n  margin-bottom: 3px;\n  color: #000;\n  font-weight: bold;\n}\n.am-steps-small .am-steps-item-description {\n  font-size: 12px;\n  color: #bbb;\n}\n.am-steps-small .am-steps-item-tail {\n  top: 8px;\n  padding: 0 8px;\n}\n.am-steps-small .am-steps-item-tail:after {\n  height: 1px;\n  border-radius: 1px;\n  width: 100%;\n  left: 0;\n}\n.am-steps-small .am-steps-item-custom .am-steps-item-icon {\n  background: none;\n}\n.am-steps-small .am-steps-item-custom .am-steps-item-icon > .am-steps-icon {\n  font-size: 18px;\n  top: -2px;\n  -webkit-transform: none;\n  -ms-transform: none;\n  transform: none;\n}\n.am-steps-vertical {\n  display: block;\n}\n.am-steps-vertical .am-steps-item {\n  display: block;\n  overflow: visible;\n}\n.am-steps-vertical .am-steps-item-icon {\n  float: left;\n}\n.am-steps-vertical .am-steps-item-icon-inner {\n  margin-right: 16px;\n}\n.am-steps-vertical .am-steps-item-content {\n  min-height: 48px;\n  overflow: hidden;\n  display: block;\n}\n.am-steps-vertical .am-steps-item-title {\n  line-height: 26px;\n}\n.am-steps-vertical .am-steps-item-title:after {\n  display: none;\n}\n.am-steps-vertical .am-steps-item-description {\n  padding-bottom: 12px;\n}\n.am-steps-vertical .am-steps-item-tail {\n  position: absolute;\n  left: 13px;\n  top: 0;\n  height: 100%;\n  width: 1px;\n  padding: 30px 0 4px 0;\n}\n.am-steps-vertical .am-steps-item-tail:after {\n  height: 100%;\n  width: 1px;\n}\n.am-steps-vertical.am-steps-small .am-steps-item-tail {\n  position: absolute;\n  left: 9px;\n  top: 0;\n  padding: 22px 0 4px 0;\n}\n.am-steps-vertical.am-steps-small .am-steps-item-title {\n  line-height: 18px;\n}\n.am-steps-label-vertical .am-steps-item {\n  overflow: visible;\n}\n.am-steps-label-vertical .am-steps-item-tail {\n  padding: 0 24px;\n  margin-left: 48px;\n}\n.am-steps-label-vertical .am-steps-item-content {\n  display: block;\n  text-align: center;\n  margin-top: 8px;\n  width: 100px;\n}\n.am-steps-label-vertical .am-steps-item-icon {\n  display: inline-block;\n  margin-left: 36px;\n}\n.am-steps-label-vertical .am-steps-item-title {\n  padding-right: 0;\n}\n.am-steps-label-vertical .am-steps-item-title:after {\n  display: none;\n}\n\n.a-flight {\n  position: relative;\n  margin: 16px;\n}\n\n.a-flight .a-flight-no {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  transform: translateX(-50%);\n  z-index: 1;\n  padding: 0 8px;\n  background-color: #fff;\n}\n\n@media screen and (max-width: 768px) {\n  .a-flight .a-flight-no {\n    background-color: #eee;\n  }\n}";
  styleInject(css_248z$3);

  var template$7 = htmlMinify("<div class=\"a-flight\">\n<div class=\"a-flight-no\"><span>{{ this.flight }}</span></div>\n<div class=\"am-steps am-steps-horizontal am-steps-label-vertical\">\n<div class=\"am-steps-item am-steps-item-process am-steps-item-custom\">\n<div class=\"am-steps-item-tail\"></div>\n<div class=\"am-steps-item-icon\">\n<span class=\"am-steps-icon\">\n<i class=\"anticon\">\n<svg t=\"1651558792798\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1560\" width=\"22\" height=\"22\"><path d=\"M152.362667 591.594667c2.218667-0.768 5.76 0.810667 8.106666 2.261333 24.661333 15.381333 49.130667 31.04 73.813334 46.357333 2.368 1.472 6.272 2.304 8.725333 1.429334 50.176-18.133333 100.266667-36.522667 150.357333-54.890667 0.853333-0.32 1.6-0.853333 3.050667-1.642667L203.648 285.866667c2.261333-0.981333 4.053333-1.877333 5.888-2.56 23.722667-8.746667 47.530667-17.28 71.146667-26.304 5.077333-1.92 8.32-1.024 12.416 2.24 101.781333 81.472 203.712 162.730667 305.450666 244.266666 5.226667 4.202667 9.258667 4.736 15.466667 2.432 80.96-29.930667 161.984-59.584 243.050667-89.173333 37.738667-13.781333 75.029333 8.554667 80.981333 48.298667 4.074667 27.157333-12.565333 54.101333-39.978667 64.192-63.786667 23.466667-127.637333 46.826667-191.445333 70.229333l-445.653333 163.413333c-32.064 11.776-56.533333 2.986667-76.992-24.704-18.666667-25.301333-39.36-49.088-59.178667-73.557333L85.333333 616.021333c23.04-8.469333 44.970667-16.704 67.029334-24.426666z\" fill=\"#3D3D3D\" p-id=\"1561\"></path></svg>\n</i>\n</span></div><div class=\"am-steps-item-content\">\n<div class=\"am-steps-item-title\">{{ this.departure }}</div><div class=\"am-steps-item-description\">{{ this.departureTimeLocale }}</div>\n</div></div>\n<div class=\"am-steps-item am-steps-item-wait am-steps-item-custom\">\n<div class=\"am-steps-item-tail\"></div><div class=\"am-steps-item-icon\">\n<span class=\"am-steps-icon\">\n<i class=\"anticon\">\n<svg t=\"1651558896240\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1699\" width=\"22\" height=\"22\"><path d=\"M128 896h768v42.666667H128v-42.666667z m384-18.133333s-167.936-103.957333-179.413333-112c-33.557333-23.466667-59.690667-44.074667-77.013334-61.44A361.536 361.536 0 0 1 149.333333 448c0-200.298667 162.368-362.666667 362.666667-362.666667s362.666667 162.368 362.666667 362.666667c0 97.493333-38.656 188.885333-106.24 256.426667-17.322667 17.365333-43.456 37.973333-77.013334 61.44-11.477333 8.042667-179.413333 112-179.413333 112zM512 576a128 128 0 1 0 0-256 128 128 0 0 0 0 256z\" fill=\"#3D3D3D\" p-id=\"1700\"></path></svg>\n</i>\n</span></div><div class=\"am-steps-item-content\">\n<div class=\"am-steps-item-title\">{{ this.destination }}</div><div class=\"am-steps-item-description\">{{ this.arriveTimeLocale }}</div></div></div></div></div>");
  var flight = {
    template: template$7,
    props: {
      flight: {
        type: String,
        required: true
      },
      departure: {
        type: String,
        required: true
      },
      departureTime: {
        type: String,
        required: true
      },
      destination: {
        type: String,
        required: true
      },
      arriveTime: {
        type: String,
        required: true
      }
    },
    computed: {
      departureTimeLocale: function departureTimeLocale() {
        return window.dayjs(this.departureTime).format("D MMM, HH:mm");
      },
      arriveTimeLocale: function arriveTimeLocale() {
        if (window.dayjs(this.departureTime).diff(this.arriveTime, "day") === 0) {
          return window.dayjs(this.arriveTime).format("HH:mm");
        }
        return window.dayjs(this.arriveTime).format("D MMM, HH:mm");
      }
    }
  };

  var loader;
  function loadBingApi(key) {
    if (window.Microsoft) {
      return Promise.resolve();
    }
    if (!loader) {
      loader = new Promise(function (resolve, reject) {
        var callbackName = "bingAPIReady";
        var url = "https://www.bing.com/api/maps/mapcontrol?callback=".concat(callbackName, "&setLang=en");
        if (key) {
          url += "&key=".concat(key);
        }
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.defer = true;
        script.src = url;
        window.bingAPIReady = function () {
          Microsoft = window.Microsoft;
          Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
            resolve();
          });
        };
        script.onerror = function (error) {
          reject(error);
        };
        document.body.appendChild(script);
      });
    }
    return loader;
  }

  var css_248z$4 = ".map {\n  min-height: 160px;\n}\n#bingLogo,\n#MicrosoftNav,\n.CopyrightContainer,\n.bm_bottomRightOverlay {\n  display: none !important;\n}\n";
  styleInject(css_248z$4);

  var apiKey =  'AmaJse0LMtAHWktKP2ew2c_NNcKEDFem3a1MWEu8xN0_fNn-alxc7q1BlLEgcQtD' ;
  var template$8 = "<div class=\"map\" ref=\"map\"></div>";
  var Map = {
    template: template$8,
    data: function data() {
      return {
        map: undefined
      };
    },
    props: ['center', 'points', 'walking', 'transit', 'driving', 'line', 'divesites'],
    mounted: function mounted() {
      var _this = this;
      loadBingApi(apiKey).then(function () {
        _this.$initMap(_this.$refs.map);
        _this.$walking();
        _this.$transit();
        _this.$driving();
        _this.$line();
        _this.$addPoint();
        _this.$addDivesites();
        if (!_this.autoUpdateMapView) {
          _this.$setCenter();
        }
      });
    },
    beforeUnmount: function beforeUnmount() {
      if (this.map) {
        if (typeof this.map.dispose === 'function') this.map.dispose();
        this.map = null;
      }
    },
    computed: {
      autoUpdateMapView: function autoUpdateMapView() {
        return this.points.length === 0 && this.line.length === 0 && (this.walking.length > 0 || this.driving.length > 0 || this.transit.length > 0);
      }
    },
    methods: {
      $initMap: function $initMap(el) {
        this.map = new Microsoft.Maps.Map(el, {
          customMapStyle: {
            elements: {
              area: {
                fillColor: '#b6e591'
              },
              water: {
                fillColor: '#75cff0'
              },
              tollRoad: {
                fillColor: '#a964f4',
                strokeColor: '#a964f4'
              },
              arterialRoad: {
                fillColor: '#ffffff',
                strokeColor: '#d7dae7'
              },
              road: {
                fillColor: '#ffa35a',
                strokeColor: '#ff9c4f'
              },
              street: {
                fillColor: '#ffffff',
                strokeColor: '#ffffff'
              },
              transit: {
                fillColor: '#000000'
              }
            },
            settings: {
              landColor: '#efe9e1'
            }
          }
        });
      },
      $setCenter: function $setCenter() {
        var _this$center = this.center,
          _this$center2 = _this$center === void 0 ? {} : _this$center,
          latitude = _this$center2.latitude,
          longitude = _this$center2.longitude,
          zoom = this.zoom;
        if (latitude && longitude) {
          this.map.setView({
            center: new Microsoft.Maps.Location(latitude, longitude)
          });
        } else {
          this.$setFitView();
        }
      },
      $setFitView: function $setFitView() {
        var _this2 = this;
        var _this$points = this.points,
          points = _this$points === void 0 ? [] : _this$points,
          _this$walking = this.walking,
          walking = _this$walking === void 0 ? [] : _this$walking,
          _this$driving = this.driving,
          driving = _this$driving === void 0 ? [] : _this$driving,
          _this$transit = this.transit,
          transit = _this$transit === void 0 ? [] : _this$transit,
          _this$line = this.line,
          line = _this$line === void 0 ? [] : _this$line,
          _this$divesites = this.divesites,
          divesites = _this$divesites === void 0 ? [] : _this$divesites;
        var locations = [].concat(_toConsumableArray(points.map(function (_ref) {
          var latitude = _ref.latitude,
            longitude = _ref.longitude;
          return new Microsoft.Maps.Location(latitude, longitude);
        })), _toConsumableArray(walking.map(function (_ref2) {
          var latitude = _ref2.latitude,
            longitude = _ref2.longitude;
          return new Microsoft.Maps.Location(latitude, longitude);
        })), _toConsumableArray(driving.map(function (_ref3) {
          var latitude = _ref3.latitude,
            longitude = _ref3.longitude;
          return new Microsoft.Maps.Location(latitude, longitude);
        })), _toConsumableArray(transit.map(function (_ref4) {
          var latitude = _ref4.latitude,
            longitude = _ref4.longitude;
          return new Microsoft.Maps.Location(latitude, longitude);
        })), _toConsumableArray(line.map(function (_ref5) {
          var latitude = _ref5.latitude,
            longitude = _ref5.longitude;
          return new Microsoft.Maps.Location(latitude, longitude);
        })), _toConsumableArray(divesites.map(function (_ref6) {
          var latitude = _ref6.latitude,
            longitude = _ref6.longitude;
          return new Microsoft.Maps.Location(latitude, longitude);
        })));
        setTimeout(function () {
          _this2.map.setView({
            padding: 10,
            // eslint-disable-next-line new-cap
            bounds: new Microsoft.Maps.LocationRect.fromLocations(locations)
          });
        }, 0);
      },
      $addPoint: function $addPoint() {
        var _this3 = this;
        var _this$points2 = this.points,
          points = _this$points2 === void 0 ? [] : _this$points2;
        if (Array.isArray(points) && points.length) {
          points.forEach(function (_ref7) {
            var latitude = _ref7.latitude,
              longitude = _ref7.longitude,
              address = _ref7.address;
            var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(latitude, longitude), {
              title: address
            });
            var layer = new Microsoft.Maps.Layer();
            layer.add(pushpin);
            _this3.map.layers.insert(layer);
          });
        }
      },
      $addDivesites: function $addDivesites() {
        var _this4 = this;
        var _this$divesites2 = this.divesites,
          divesites = _this$divesites2 === void 0 ? [] : _this$divesites2;
        if (Array.isArray(divesites) && divesites.length) {
          divesites.forEach(function (_ref8) {
            var latitude = _ref8.latitude,
              longitude = _ref8.longitude,
              name = _ref8.name;
            var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(latitude, longitude), {
              title: name,
              icon: 'data:image/jpeg;base64,/9j/4QOMRXhpZgAASUkqAAgAAAAHABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAADEBAgAhAAAAcgAAADIBAgAUAAAAkwAAAGmHBAABAAAAqAAAAOAAAADAxi0AECcAAMDGLQAQJwAAQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkAMjAyMjoxMjoxMSAyMjoxODozOQAABAAAkAcABAAAADAyMzEBoAMAAQAAAP//AAACoAQAAQAAABcAAAADoAQAAQAAAA8AAAAAAAAAAAAGAAMBAwABAAAABgAAABoBBQABAAAALgEAABsBBQABAAAANgEAACgBAwABAAAAAgAAAAECBAABAAAAPgEAAAICBAABAAAARgIAAAAAAABIAAAAAQAAAEgAAAABAAAA/9j/7QAMQWRvYmVfQ00AAf/uAA5BZG9iZQBkgAAAAAH/2wCEAAwICAgJCAwJCQwRCwoLERUPDAwPFRgTExUTExgRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBDQsLDQ4NEA4OEBQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAAQABgMBIgACEQEDEQH/3QAEAAH/xAE/AAABBQEBAQEBAQAAAAAAAAADAAECBAUGBwgJCgsBAAEFAQEBAQEBAAAAAAAAAAEAAgMEBQYHCAkKCxAAAQQBAwIEAgUHBggFAwwzAQACEQMEIRIxBUFRYRMicYEyBhSRobFCIyQVUsFiMzRygtFDByWSU/Dh8WNzNRaisoMmRJNUZEXCo3Q2F9JV4mXys4TD03Xj80YnlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vY3R1dnd4eXp7fH1+f3EQACAgECBAQDBAUGBwcGBTUBAAIRAyExEgRBUWFxIhMFMoGRFKGxQiPBUtHwMyRi4XKCkkNTFWNzNPElBhaisoMHJjXC0kSTVKMXZEVVNnRl4vKzhMPTdePzRpSkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2JzdHV2d3h5ent8f/2gAMAwEAAhEDEQA/AID7XDvX9T9tQPsvof0zZt/S/tDb/wB1932bf/lr1P8AgUl5akqn2/y/7t6P/F/7n/4l/wDUr//Z/+0LtlBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAHHAIAAAIAAAA4QklNBCUAAAAAABDo8VzzL8EYoaJ7Z63FZNW6OEJJTQQ6AAAAAADlAAAAEAAAAAEAAAAAAAtwcmludE91dHB1dAAAAAUAAAAAUHN0U2Jvb2wBAAAAAEludGVlbnVtAAAAAEludGUAAAAAQ2xybQAAAA9wcmludFNpeHRlZW5CaXRib29sAAAAAAtwcmludGVyTmFtZVRFWFQAAAABAAAAAAAPcHJpbnRQcm9vZlNldHVwT2JqYwAAAAwAUAByAG8AbwBmACAAUwBlAHQAdQBwAAAAAAAKcHJvb2ZTZXR1cAAAAAEAAAAAQmx0bmVudW0AAAAMYnVpbHRpblByb29mAAAACXByb29mQ01ZSwA4QklNBDsAAAAAAi0AAAAQAAAAAQAAAAAAEnByaW50T3V0cHV0T3B0aW9ucwAAABcAAAAAQ3B0bmJvb2wAAAAAAENsYnJib29sAAAAAABSZ3NNYm9vbAAAAAAAQ3JuQ2Jvb2wAAAAAAENudENib29sAAAAAABMYmxzYm9vbAAAAAAATmd0dmJvb2wAAAAAAEVtbERib29sAAAAAABJbnRyYm9vbAAAAAAAQmNrZ09iamMAAAABAAAAAAAAUkdCQwAAAAMAAAAAUmQgIGRvdWJAb+AAAAAAAAAAAABHcm4gZG91YkBv4AAAAAAAAAAAAEJsICBkb3ViQG/gAAAAAAAAAAAAQnJkVFVudEYjUmx0AAAAAAAAAAAAAAAAQmxkIFVudEYjUmx0AAAAAAAAAAAAAAAAUnNsdFVudEYjUHhsQHLAAAAAAAAAAAAKdmVjdG9yRGF0YWJvb2wBAAAAAFBnUHNlbnVtAAAAAFBnUHMAAAAAUGdQQwAAAABMZWZ0VW50RiNSbHQAAAAAAAAAAAAAAABUb3AgVW50RiNSbHQAAAAAAAAAAAAAAABTY2wgVW50RiNQcmNAWQAAAAAAAAAAABBjcm9wV2hlblByaW50aW5nYm9vbAAAAAAOY3JvcFJlY3RCb3R0b21sb25nAAAAAAAAAAxjcm9wUmVjdExlZnRsb25nAAAAAAAAAA1jcm9wUmVjdFJpZ2h0bG9uZwAAAAAAAAALY3JvcFJlY3RUb3Bsb25nAAAAAAA4QklNA+0AAAAAABABLAAAAAEAAgEsAAAAAQACOEJJTQQmAAAAAAAOAAAAAAAAAAAAAD+AAAA4QklNBA0AAAAAAAQAAAAeOEJJTQQZAAAAAAAEAAAAHjhCSU0D8wAAAAAACQAAAAAAAAAAAQA4QklNJxAAAAAAAAoAAQAAAAAAAAACOEJJTQP1AAAAAABIAC9mZgABAGxmZgAGAAAAAAABAC9mZgABAKGZmgAGAAAAAAABADIAAAABAFoAAAAGAAAAAAABADUAAAABAC0AAAAGAAAAAAABOEJJTQP4AAAAAABwAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAADhCSU0EAAAAAAAAAgAAOEJJTQQCAAAAAAACAAA4QklNBDAAAAAAAAEBADhCSU0ELQAAAAAABgABAAAAAjhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQaAAAAAAN1AAAABgAAAAAAAAAAAAAADwAAABcAAAAgADAANwA5ADgAZgBlADAANAA2ADQANAAzADYAOQBhADQAYgA5ADYAYQAyADIAMwA5ADEANAAwADgANgBkADkAYgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAFwAAAA8AAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAQAAAAAAAG51bGwAAAACAAAABmJvdW5kc09iamMAAAABAAAAAAAAUmN0MQAAAAQAAAAAVG9wIGxvbmcAAAAAAAAAAExlZnRsb25nAAAAAAAAAABCdG9tbG9uZwAAAA8AAAAAUmdodGxvbmcAAAAXAAAABnNsaWNlc1ZsTHMAAAABT2JqYwAAAAEAAAAAAAVzbGljZQAAABIAAAAHc2xpY2VJRGxvbmcAAAAAAAAAB2dyb3VwSURsb25nAAAAAAAAAAZvcmlnaW5lbnVtAAAADEVTbGljZU9yaWdpbgAAAA1hdXRvR2VuZXJhdGVkAAAAAFR5cGVlbnVtAAAACkVTbGljZVR5cGUAAAAASW1nIAAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAAAPAAAAAFJnaHRsb25nAAAAFwAAAAN1cmxURVhUAAAAAQAAAAAAAG51bGxURVhUAAAAAQAAAAAAAE1zZ2VURVhUAAAAAQAAAAAABmFsdFRhZ1RFWFQAAAABAAAAAAAOY2VsbFRleHRJc0hUTUxib29sAQAAAAhjZWxsVGV4dFRFWFQAAAABAAAAAAAJaG9yekFsaWduZW51bQAAAA9FU2xpY2VIb3J6QWxpZ24AAAAHZGVmYXVsdAAAAAl2ZXJ0QWxpZ25lbnVtAAAAD0VTbGljZVZlcnRBbGlnbgAAAAdkZWZhdWx0AAAAC2JnQ29sb3JUeXBlZW51bQAAABFFU2xpY2VCR0NvbG9yVHlwZQAAAABOb25lAAAACXRvcE91dHNldGxvbmcAAAAAAAAACmxlZnRPdXRzZXRsb25nAAAAAAAAAAxib3R0b21PdXRzZXRsb25nAAAAAAAAAAtyaWdodE91dHNldGxvbmcAAAAAADhCSU0EKAAAAAAADAAAAAI/8AAAAAAAADhCSU0EFAAAAAAABAAAAAI4QklNBAwAAAAAAmIAAAABAAAABgAAAAQAAAAUAAAAUAAAAkYAGAAB/9j/7QAMQWRvYmVfQ00AAf/uAA5BZG9iZQBkgAAAAAH/2wCEAAwICAgJCAwJCQwRCwoLERUPDAwPFRgTExUTExgRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBDQsLDQ4NEA4OEBQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAAQABgMBIgACEQEDEQH/3QAEAAH/xAE/AAABBQEBAQEBAQAAAAAAAAADAAECBAUGBwgJCgsBAAEFAQEBAQEBAAAAAAAAAAEAAgMEBQYHCAkKCxAAAQQBAwIEAgUHBggFAwwzAQACEQMEIRIxBUFRYRMicYEyBhSRobFCIyQVUsFiMzRygtFDByWSU/Dh8WNzNRaisoMmRJNUZEXCo3Q2F9JV4mXys4TD03Xj80YnlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vY3R1dnd4eXp7fH1+f3EQACAgECBAQDBAUGBwcGBTUBAAIRAyExEgRBUWFxIhMFMoGRFKGxQiPBUtHwMyRi4XKCkkNTFWNzNPElBhaisoMHJjXC0kSTVKMXZEVVNnRl4vKzhMPTdePzRpSkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2JzdHV2d3h5ent8f/2gAMAwEAAhEDEQA/AID7XDvX9T9tQPsvof0zZt/S/tDb/wB1932bf/lr1P8AgUl5akqn2/y/7t6P/F/7n/4l/wDUr//ZOEJJTQQhAAAAAABXAAAAAQEAAAAPAEEAZABvAGIAZQAgAFAAaABvAHQAbwBzAGgAbwBwAAAAFABBAGQAbwBiAGUAIABQAGgAbwB0AG8AcwBoAG8AcAAgADIAMAAyADAAAAABADhCSU0EBgAAAAAABwAIAAAAAQEA/+EgRWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6Y3JzPSJodHRwOi8vbnMuYWRvYmUuY29tL2NhbWVyYS1yYXctc2V0dGluZ3MvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozZWRlMTE5Ni04MmJkLTY2NDAtYmIyMC1mM2YzODg2MjEwOWEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iN0FEQkZENDRCOEYyRUU3OUMxNDUzRUVDNzQ3NjI4NzciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YWQ4YjViYzgtM2UzNy00N2Y2LTg4ZjUtZTgxY2M5MDVmNTFjIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIGNyczpWZXJzaW9uPSIxMi4xIiBjcnM6UHJvY2Vzc1ZlcnNpb249IjExLjAiIGNyczpXaGl0ZUJhbGFuY2U9IkFzIFNob3QiIGNyczpJbmNyZW1lbnRhbFRlbXBlcmF0dXJlPSIwIiBjcnM6SW5jcmVtZW50YWxUaW50PSIwIiBjcnM6U2F0dXJhdGlvbj0iMCIgY3JzOlNoYXJwbmVzcz0iMCIgY3JzOkx1bWluYW5jZVNtb290aGluZz0iMCIgY3JzOkNvbG9yTm9pc2VSZWR1Y3Rpb249IjAiIGNyczpWaWduZXR0ZUFtb3VudD0iMCIgY3JzOlNoYWRvd1RpbnQ9IjAiIGNyczpSZWRIdWU9IjAiIGNyczpSZWRTYXR1cmF0aW9uPSIwIiBjcnM6R3JlZW5IdWU9IjAiIGNyczpHcmVlblNhdHVyYXRpb249IjAiIGNyczpCbHVlSHVlPSIwIiBjcnM6Qmx1ZVNhdHVyYXRpb249IjAiIGNyczpWaWJyYW5jZT0iMCIgY3JzOkh1ZUFkanVzdG1lbnRSZWQ9IjAiIGNyczpIdWVBZGp1c3RtZW50T3JhbmdlPSIwIiBjcnM6SHVlQWRqdXN0bWVudFllbGxvdz0iMCIgY3JzOkh1ZUFkanVzdG1lbnRHcmVlbj0iMCIgY3JzOkh1ZUFkanVzdG1lbnRBcXVhPSIwIiBjcnM6SHVlQWRqdXN0bWVudEJsdWU9IjAiIGNyczpIdWVBZGp1c3RtZW50UHVycGxlPSIwIiBjcnM6SHVlQWRqdXN0bWVudE1hZ2VudGE9IjAiIGNyczpTYXR1cmF0aW9uQWRqdXN0bWVudFJlZD0iMCIgY3JzOlNhdHVyYXRpb25BZGp1c3RtZW50T3JhbmdlPSIwIiBjcnM6U2F0dXJhdGlvbkFkanVzdG1lbnRZZWxsb3c9IjAiIGNyczpTYXR1cmF0aW9uQWRqdXN0bWVudEdyZWVuPSIwIiBjcnM6U2F0dXJhdGlvbkFkanVzdG1lbnRBcXVhPSIwIiBjcnM6U2F0dXJhdGlvbkFkanVzdG1lbnRCbHVlPSIwIiBjcnM6U2F0dXJhdGlvbkFkanVzdG1lbnRQdXJwbGU9IjAiIGNyczpTYXR1cmF0aW9uQWRqdXN0bWVudE1hZ2VudGE9IjAiIGNyczpMdW1pbmFuY2VBZGp1c3RtZW50UmVkPSIwIiBjcnM6THVtaW5hbmNlQWRqdXN0bWVudE9yYW5nZT0iMCIgY3JzOkx1bWluYW5jZUFkanVzdG1lbnRZZWxsb3c9IjAiIGNyczpMdW1pbmFuY2VBZGp1c3RtZW50R3JlZW49IjAiIGNyczpMdW1pbmFuY2VBZGp1c3RtZW50QXF1YT0iMCIgY3JzOkx1bWluYW5jZUFkanVzdG1lbnRCbHVlPSIwIiBjcnM6THVtaW5hbmNlQWRqdXN0bWVudFB1cnBsZT0iMCIgY3JzOkx1bWluYW5jZUFkanVzdG1lbnRNYWdlbnRhPSIwIiBjcnM6U3BsaXRUb25pbmdTaGFkb3dIdWU9IjAiIGNyczpTcGxpdFRvbmluZ1NoYWRvd1NhdHVyYXRpb249IjAiIGNyczpTcGxpdFRvbmluZ0hpZ2hsaWdodEh1ZT0iMCIgY3JzOlNwbGl0VG9uaW5nSGlnaGxpZ2h0U2F0dXJhdGlvbj0iMCIgY3JzOlNwbGl0VG9uaW5nQmFsYW5jZT0iMCIgY3JzOlBhcmFtZXRyaWNTaGFkb3dzPSIwIiBjcnM6UGFyYW1ldHJpY0RhcmtzPSIwIiBjcnM6UGFyYW1ldHJpY0xpZ2h0cz0iMCIgY3JzOlBhcmFtZXRyaWNIaWdobGlnaHRzPSIwIiBjcnM6UGFyYW1ldHJpY1NoYWRvd1NwbGl0PSIyNSIgY3JzOlBhcmFtZXRyaWNNaWR0b25lU3BsaXQ9IjUwIiBjcnM6UGFyYW1ldHJpY0hpZ2hsaWdodFNwbGl0PSI3NSIgY3JzOlNoYXJwZW5SYWRpdXM9IisxLjAiIGNyczpTaGFycGVuRGV0YWlsPSIyNSIgY3JzOlNoYXJwZW5FZGdlTWFza2luZz0iMCIgY3JzOlBvc3RDcm9wVmlnbmV0dGVBbW91bnQ9IjAiIGNyczpHcmFpbkFtb3VudD0iMCIgY3JzOkxlbnNQcm9maWxlRW5hYmxlPSIwIiBjcnM6TGVuc01hbnVhbERpc3RvcnRpb25BbW91bnQ9IjAiIGNyczpQZXJzcGVjdGl2ZVZlcnRpY2FsPSIwIiBjcnM6UGVyc3BlY3RpdmVIb3Jpem9udGFsPSIwIiBjcnM6UGVyc3BlY3RpdmVSb3RhdGU9IjAuMCIgY3JzOlBlcnNwZWN0aXZlU2NhbGU9IjEwMCIgY3JzOlBlcnNwZWN0aXZlQXNwZWN0PSIwIiBjcnM6UGVyc3BlY3RpdmVVcHJpZ2h0PSIwIiBjcnM6UGVyc3BlY3RpdmVYPSIwLjAwIiBjcnM6UGVyc3BlY3RpdmVZPSIwLjAwIiBjcnM6QXV0b0xhdGVyYWxDQT0iMCIgY3JzOkV4cG9zdXJlMjAxMj0iMC4wMCIgY3JzOkNvbnRyYXN0MjAxMj0iMCIgY3JzOkhpZ2hsaWdodHMyMDEyPSIwIiBjcnM6U2hhZG93czIwMTI9IjAiIGNyczpXaGl0ZXMyMDEyPSIwIiBjcnM6QmxhY2tzMjAxMj0iMCIgY3JzOkNsYXJpdHkyMDEyPSIwIiBjcnM6RGVmcmluZ2VQdXJwbGVBbW91bnQ9IjAiIGNyczpEZWZyaW5nZVB1cnBsZUh1ZUxvPSIzMCIgY3JzOkRlZnJpbmdlUHVycGxlSHVlSGk9IjcwIiBjcnM6RGVmcmluZ2VHcmVlbkFtb3VudD0iMCIgY3JzOkRlZnJpbmdlR3JlZW5IdWVMbz0iNDAiIGNyczpEZWZyaW5nZUdyZWVuSHVlSGk9IjYwIiBjcnM6RGVoYXplPSIwIiBjcnM6VGV4dHVyZT0iMCIgY3JzOlRvbmVNYXBTdHJlbmd0aD0iMCIgY3JzOkNvbnZlcnRUb0dyYXlzY2FsZT0iRmFsc2UiIGNyczpPdmVycmlkZUxvb2tWaWduZXR0ZT0iRmFsc2UiIGNyczpUb25lQ3VydmVOYW1lPSJMaW5lYXIiIGNyczpUb25lQ3VydmVOYW1lMjAxMj0iTGluZWFyIiBjcnM6Q2FtZXJhUHJvZmlsZT0iRW1iZWRkZWQiIGNyczpDYW1lcmFQcm9maWxlRGlnZXN0PSI1NDY1MEEzNDFCNUI1Q0NBRTg0NDJEMEI0M0E5MkJDRSIgY3JzOkxlbnNQcm9maWxlU2V0dXA9IkxlbnNEZWZhdWx0cyIgY3JzOlVwcmlnaHRWZXJzaW9uPSIxNTEzODgxNjAiIGNyczpVcHJpZ2h0Q2VudGVyTW9kZT0iMCIgY3JzOlVwcmlnaHRDZW50ZXJOb3JtWD0iMC41IiBjcnM6VXByaWdodENlbnRlck5vcm1ZPSIwLjUiIGNyczpVcHJpZ2h0Rm9jYWxNb2RlPSIwIiBjcnM6VXByaWdodEZvY2FsTGVuZ3RoMzVtbT0iMzUiIGNyczpVcHJpZ2h0UHJldmlldz0iRmFsc2UiIGNyczpVcHJpZ2h0VHJhbnNmb3JtQ291bnQ9IjYiIGNyczpVcHJpZ2h0Rm91clNlZ21lbnRzQ291bnQ9IjAiIGNyczpBdXRvVG9uZURpZ2VzdD0iMTM5NzBCQTExRTlBNTM5NzJEQzdDOTREREZDMTdGMDAiIGNyczpBdXRvVG9uZURpZ2VzdE5vU2F0PSIzQzNBMTRCRTFBREZGQ0IxNTQ2QjdEN0VENjUwN0ZFRiIgY3JzOkhhc1NldHRpbmdzPSJUcnVlIiBjcnM6SGFzQ3JvcD0iRmFsc2UiIGNyczpBbHJlYWR5QXBwbGllZD0iVHJ1ZSIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMi0xMVQyMjoxODozOSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMTItMTFUMjI6MTg6MzkrMDg6MDAiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTEyLTExVDIyOjE2OjQyKzA4OjAwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iQWRvYmUgUkdCICgxOTk4KSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGltYWdlL2pwZWcgdG8gaW1hZ2UvdGlmZiIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjlmMDM5ZjktZDkzNC00ZGQ3LWJkNGUtZDBkNWE4YjUwY2E4IiBzdEV2dDp3aGVuPSIyMDIyLTEyLTExVDIyOjE3OjIyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ2FtZXJhIFJhdyAxMi4xIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphNmJhYmM5ZC0wMzJlLTQwZjYtYTlmNi1hMjdkOWFhYmMxMzkiIHN0RXZ0OndoZW49IjIwMjItMTItMTFUMjI6MTg6MzkrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gaW1hZ2UvdGlmZiB0byBpbWFnZS9qcGVnIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBpbWFnZS90aWZmIHRvIGltYWdlL2pwZWciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmFkOGI1YmM4LTNlMzctNDdmNi04OGY1LWU4MWNjOTA1ZjUxYyIgc3RFdnQ6d2hlbj0iMjAyMi0xMi0xMVQyMjoxODozOSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE2YmFiYzlkLTAzMmUtNDBmNi1hOWY2LWEyN2Q5YWFiYzEzOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpiOWYwMzlmOS1kOTM0LTRkZDctYmQ0ZS1kMGQ1YThiNTBjYTgiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0iN0FEQkZENDRCOEYyRUU3OUMxNDUzRUVDNzQ3NjI4NzciLz4gPGNyczpUb25lQ3VydmU+IDxyZGY6U2VxPiA8cmRmOmxpPjAsIDA8L3JkZjpsaT4gPHJkZjpsaT4yNTUsIDI1NTwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvY3JzOlRvbmVDdXJ2ZT4gPGNyczpUb25lQ3VydmVSZWQ+IDxyZGY6U2VxPiA8cmRmOmxpPjAsIDA8L3JkZjpsaT4gPHJkZjpsaT4yNTUsIDI1NTwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvY3JzOlRvbmVDdXJ2ZVJlZD4gPGNyczpUb25lQ3VydmVHcmVlbj4gPHJkZjpTZXE+IDxyZGY6bGk+MCwgMDwvcmRmOmxpPiA8cmRmOmxpPjI1NSwgMjU1PC9yZGY6bGk+IDwvcmRmOlNlcT4gPC9jcnM6VG9uZUN1cnZlR3JlZW4+IDxjcnM6VG9uZUN1cnZlQmx1ZT4gPHJkZjpTZXE+IDxyZGY6bGk+MCwgMDwvcmRmOmxpPiA8cmRmOmxpPjI1NSwgMjU1PC9yZGY6bGk+IDwvcmRmOlNlcT4gPC9jcnM6VG9uZUN1cnZlQmx1ZT4gPGNyczpUb25lQ3VydmVQVjIwMTI+IDxyZGY6U2VxPiA8cmRmOmxpPjAsIDA8L3JkZjpsaT4gPHJkZjpsaT4yNTUsIDI1NTwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvY3JzOlRvbmVDdXJ2ZVBWMjAxMj4gPGNyczpUb25lQ3VydmVQVjIwMTJSZWQ+IDxyZGY6U2VxPiA8cmRmOmxpPjAsIDA8L3JkZjpsaT4gPHJkZjpsaT4yNTUsIDI1NTwvcmRmOmxpPiA8L3JkZjpTZXE+IDwvY3JzOlRvbmVDdXJ2ZVBWMjAxMlJlZD4gPGNyczpUb25lQ3VydmVQVjIwMTJHcmVlbj4gPHJkZjpTZXE+IDxyZGY6bGk+MCwgMDwvcmRmOmxpPiA8cmRmOmxpPjI1NSwgMjU1PC9yZGY6bGk+IDwvcmRmOlNlcT4gPC9jcnM6VG9uZUN1cnZlUFYyMDEyR3JlZW4+IDxjcnM6VG9uZUN1cnZlUFYyMDEyQmx1ZT4gPHJkZjpTZXE+IDxyZGY6bGk+MCwgMDwvcmRmOmxpPiA8cmRmOmxpPjI1NSwgMjU1PC9yZGY6bGk+IDwvcmRmOlNlcT4gPC9jcnM6VG9uZUN1cnZlUFYyMDEyQmx1ZT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/iAkBJQ0NfUFJPRklMRQABAQAAAjBBREJFAhAAAG1udHJSR0IgWFlaIAfPAAYAAwAAAAAAAGFjc3BBUFBMAAAAAG5vbmUAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtQURCRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmNwcnQAAAD8AAAAMmRlc2MAAAEwAAAAa3d0cHQAAAGcAAAAFGJrcHQAAAGwAAAAFHJUUkMAAAHEAAAADmdUUkMAAAHUAAAADmJUUkMAAAHkAAAADnJYWVoAAAH0AAAAFGdYWVoAAAIIAAAAFGJYWVoAAAIcAAAAFHRleHQAAAAAQ29weXJpZ2h0IDE5OTkgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQAAABkZXNjAAAAAAAAABFBZG9iZSBSR0IgKDE5OTgpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYWVogAAAAAAAA81EAAQAAAAEWzFhZWiAAAAAAAAAAAAAAAAAAAAAAY3VydgAAAAAAAAABAjMAAGN1cnYAAAAAAAAAAQIzAABjdXJ2AAAAAAAAAAECMwAAWFlaIAAAAAAAAJwYAABPpQAABPxYWVogAAAAAAAANI0AAKAsAAAPlVhZWiAAAAAAAAAmMQAAEC8AAL6c/+4ADkFkb2JlAGRAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQEBAQEBAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgADwAXAwERAAIRAQMRAf/dAAQAA//EAaIAAAAGAgMBAAAAAAAAAAAAAAcIBgUECQMKAgEACwEAAAYDAQEBAAAAAAAAAAAABgUEAwcCCAEJAAoLEAACAQMEAQMDAgMDAwIGCXUBAgMEEQUSBiEHEyIACDEUQTIjFQlRQhZhJDMXUnGBGGKRJUOhsfAmNHIKGcHRNSfhUzaC8ZKiRFRzRUY3R2MoVVZXGrLC0uLyZIN0k4Rlo7PD0+MpOGbzdSo5OkhJSlhZWmdoaWp2d3h5eoWGh4iJipSVlpeYmZqkpaanqKmqtLW2t7i5usTFxsfIycrU1dbX2Nna5OXm5+jp6vT19vf4+foRAAIBAwIEBAMFBAQEBgYFbQECAxEEIRIFMQYAIhNBUQcyYRRxCEKBI5EVUqFiFjMJsSTB0UNy8BfhgjQlklMYY0TxorImNRlUNkVkJwpzg5NGdMLS4vJVZXVWN4SFo7PD0+PzKRqUpLTE1OT0laW1xdXl9ShHV2Y4doaWprbG1ub2Z3eHl6e3x9fn90hYaHiImKi4yNjo+DlJWWl5iZmpucnZ6fkqOkpaanqKmqq6ytrq+v/aAAwDAQACEQMRAD8AMh13/M1+M/zd2TivjF/N+2PQx1WLnmx3WPzi67pG2tubZWSmH2tPkd6z4OlnyXW2RlZV+7y1BHV7RyRVP4rjaSBGZolt+Ydv3iFdv5phFR8FwvaVPq1MofVhVD+IKOule8+yPO3tfuc/PP3ed1do3UNc7NOfFSVRkrEHIW6QAnTE+i7jz4EsjnBNvnL/ACtvkN8M8We2ts51fkt8SsrRwZ3bvyL60Rckm39t5FVnxdX2xt7A1GRpsJj5qeRCm5cVJVbbqVdJJHx7SLB7Kd45cvtpX6mJ/qNsIqJVyQD/ABgcB/TWqnz08OpI9rffflD3HnHL+4Wv7l5/RjG9hcHSJZFNGFrI4UswNa20oW4UghfGCluqyKXJOf8AK2yJNKtBX1SVZrP8mEBxdU/3S1Jk8IhMDE+TVp0G97ew8G89WKf5OpxmgGkx+D+prQUpmviLilK1r5evX//QqUq6WVqysKtTj/Kqoc1dIp9M0itw0wNuPr9CORx7xuINT/nH+frvFFIvhxfF8I/C3p9nVr/8tj5B/wAyj4wYKLd3xh6T7a+R/wATMvX5T+9PUibE3vvfo7LrBLIm6ajr/e228DuKh6v3TGryCpeh8+Jmm5yGOmb9xBNsF9zBtyCTb7OW42xjlNLNGfXQwBCH1pVT5r59QD708oeyvPF3JYc7c07fsvP8ar4d0Z4YbxageGLmCR42uY+GnXpmC/2UwHaTW7k2R/Kg73/u9/MB+Mm8dgdD7s6i3xR9mfIX+Xh23XbBwWD7nTr7JruvsLrHqnZWezMW1k3pvSgxVZjqJdvS5LaGaqqmKlrKOinlnljM5IeWr3w982+VIZon1y2r6B4mk6mRVJ062oQNJKMTRgCSRH1lunv3yql97Sc67bd7rtu4WptrDf7UTu1n9QPDt7m5uEQyGCFmWR/qBHdwqrPHJIqop//Z'
            });
            var layer = new Microsoft.Maps.Layer();
            layer.add(pushpin);
            _this4.map.layers.insert(layer);
          });
        }
      },
      $walking: function $walking() {
        var _this$walking2 = this.walking,
          walking = _this$walking2 === void 0 ? [] : _this$walking2;
        if (Array.isArray(walking) && walking.length) {
          this.$route(walking, 'walking');
        }
      },
      $transit: function $transit() {
        var _this$transit2 = this.transit,
          transit = _this$transit2 === void 0 ? [] : _this$transit2;
        if (Array.isArray(transit) && transit.length) {
          this.$route(transit, 'transit');
        }
      },
      $driving: function $driving() {
        var _this$driving2 = this.driving,
          driving = _this$driving2 === void 0 ? [] : _this$driving2;
        if (Array.isArray(driving) && driving.length) {
          this.$route(driving, 'driving');
        }
      },
      $line: function $line() {
        var _this$line2 = this.line,
          line = _this$line2 === void 0 ? [] : _this$line2;
        if (Array.isArray(line) && line.length) {
          this.$route(line, 'line');
        }
      },
      $route: function $route(route) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'walking';
        if (Array.isArray(route) && route.length) {
          if (type === 'line') {
            var coords = route.map(function (l) {
              return new Microsoft.Maps.Location(l.latitude, l.longitude);
            });
            var line = new Microsoft.Maps.Polyline(coords, {
              strokeThickness: 3
            });
            this.map.entities.push(line);
          } else {
            var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(this.map);
            directionsManager.setRequestOptions({
              maxRoutes: 1,
              routeDraggable: false,
              routeMode: Microsoft.Maps.Directions.RouteMode[type]
            });
            route.forEach(function (_ref9) {
              var address = _ref9.address,
                latitude = _ref9.latitude,
                longitude = _ref9.longitude;
              directionsManager.addWaypoint(new Microsoft.Maps.Directions.Waypoint({
                address: address,
                isViaPoint: !address,
                location: new Microsoft.Maps.Location(latitude, longitude)
              }));
            });
            directionsManager.setRenderOptions({
              itineraryContainer: document.getElementById('printoutPanel'),
              autoUpdateMapView: this.autoUpdateMapView
            });
            directionsManager.calculateDirections();
          }
        }
      }
    }
  };

  var css_248z$5 = ".map-wrapper {\n  position: relative;\n}\n.map-wrapper .map {\n  width: 100%;\n  height: 100%;\n}\n.map-mask {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.map-fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 2147483647;\n}\n";
  styleInject(css_248z$5);

  var template$9 = htmlMinify("\n<a-lazyload @load=\"onLoad\">\n  <div v-if=\"fullscreen\" class=\"map-wrapper map-fullscreen\">\n    <div @click=\"this.closeFullScreen\" style=\"position:absolute;right:8px;top:10px;z-index:2147483646\">\n          <v-close></v-close>\n    </div>\n    <v-map\n    :center=\"this._center\"\n    :points=\"this._points\"\n    :divesites=\"this._divesites\"\n    :walking=\"this._walking\"\n    :transit=\"this._transit\"\n    :driving=\"this._driving\"\n    :line=\"this._line\"\n    ></v-map>\n  </div>\n  <div v-if=\"loaded\" class=\"map-wrapper\">\n    <div class=\"map-mask\" @click=\"this.switchFullScreen\"></div>\n    <v-map\n    :center=\"this._center\"\n    :points=\"this._points\"\n    :divesites=\"this._divesites\"\n    :walking=\"this._walking\"\n    :transit=\"this._transit\"\n    :driving=\"this._driving\"\n    :line=\"this._line\"\n    ></v-map>\n  </div>\n  <a-placeholder v-else><a-placeholder/>\n</a-lazyload>");
  var map = {
    template: template$9,
    props: ['center', 'points', 'walking', 'transit', 'driving', 'line', 'divesites'],
    data: function data() {
      return {
        loaded: false,
        fullscreen: false
      };
    },
    computed: {
      _class: function _class() {
        return this.fullscreen ? 'map-wrapper map-fullscreen' : 'map-wrapper';
      },
      _points: function _points() {
        return typeof this.points === 'string' ? this.points.split(/[;|]/).map(function (point) {
          var _point$split = point.split(','),
            _point$split2 = _slicedToArray(_point$split, 3),
            lat = _point$split2[0],
            lng = _point$split2[1],
            address = _point$split2[2];
          return {
            latitude: lat,
            longitude: lng,
            address: address
          };
        }) : [];
      },
      _divesites: function _divesites() {
        return typeof this.divesites === 'string' ? this.divesites.split(/[;|]/).map(function (site) {
          var _site$split = site.split(','),
            _site$split2 = _slicedToArray(_site$split, 3),
            lat = _site$split2[0],
            lng = _site$split2[1],
            name = _site$split2[2];
          return {
            latitude: lat,
            longitude: lng,
            name: name
          };
        }) : [];
      },
      _center: function _center() {
        var _ref = typeof this.center === 'string' ? this.center.split(',') : [],
          _ref2 = _slicedToArray(_ref, 2),
          latitude = _ref2[0],
          longitude = _ref2[1];
        return latitude && longitude ? {
          latitude: latitude,
          longitude: longitude
        } :
        // try using points as center
        this._points[0] && {
          latitude: this._points[0].latitude,
          longitude: this.points[0].longitude
        };
      },
      _walking: function _walking() {
        return typeof this.walking === 'string' ? this.walking.split(/[;|]/).map(function (point) {
          var _point$split3 = point.split(','),
            _point$split4 = _slicedToArray(_point$split3, 3),
            lat = _point$split4[0],
            lng = _point$split4[1],
            address = _point$split4[2];
          return {
            latitude: lat,
            longitude: lng,
            address: address
          };
        }) : [];
      },
      _transit: function _transit() {
        return typeof this.transit === 'string' ? this.transit.split(/[;|]/).map(function (point) {
          var _point$split5 = point.split(','),
            _point$split6 = _slicedToArray(_point$split5, 3),
            lat = _point$split6[0],
            lng = _point$split6[1],
            address = _point$split6[2];
          return {
            latitude: lat,
            longitude: lng,
            address: address
          };
        }) : [];
      },
      _driving: function _driving() {
        return typeof this.driving === 'string' ? this.driving.split(/[;|]/).map(function (point) {
          var _point$split7 = point.split(','),
            _point$split8 = _slicedToArray(_point$split7, 3),
            lat = _point$split8[0],
            lng = _point$split8[1],
            address = _point$split8[2];
          return {
            latitude: lat,
            longitude: lng,
            address: address
          };
        }) : [];
      },
      _line: function _line() {
        return typeof this.line === 'string' ? this.line.split(/[;|]/).map(function (point) {
          var _point$split9 = point.split(','),
            _point$split10 = _slicedToArray(_point$split9, 2),
            lat = _point$split10[0],
            lng = _point$split10[1];
          return {
            latitude: lat,
            longitude: lng
          };
        }) : [];
      }
    },
    methods: {
      onLoad: function onLoad() {
        this.loaded = true;
      },
      switchFullScreen: function switchFullScreen() {
        this.fullscreen = true;
      },
      closeFullScreen: function closeFullScreen() {
        this.fullscreen = false;
      }
    },
    components: {
      'v-map': Map,
      'v-close': close,
      'a-lazyload': lazyload,
      'a-placeholder': placeholder
    }
  };

  var template$a = htmlMinify("<div><div><b>{{this.name}}</b></div><div @click=\"this.switchDetail\" style=\"margin-bottom:16px\">\n<i>{{this.from}}</i>\n<i>{{this.to}}</i>\n</div></div>");
  var hotel = {
    template: template$a,
    data: function data() {
      return {
        detail: false
      };
    },
    props: ["name", "date", "nights"],
    computed: {
      from: function from() {
        if (!this.date) return "";
        return window.dayjs(this.date).format("D MMM, YYYY");
      },
      to: function to() {
        if (!this.date || !this.nights) return "";
        return this.detail ? " - ".concat(window.dayjs(this.date).add(this.nights, "d").format("D MMM, YYYY")) : ", ".concat(this.nights, " night").concat(this.nights > 1 ? "s" : "");
      }
    },
    methods: {
      switchDetail: function switchDetail() {
        this.detail = !this.detail;
      }
    }
  };

  var Alert = window.antd && window.antd.Alert;
  var Button = window.antd && window.antd.Button;
  var Calendar = window.antd && window.antd.Calendar;
  var Carousel = window.antd && window.antd.Carousel;
  var Steps = window.antd && window.antd.Steps;
  var Step = window.antd && window.antd.Step;
  var Tooltip = window.antd && window.antd.Tooltip;
  var TypographyParagraph = window.antd && window.antd.TypographyParagraph;

  var template$b = htmlMinify("\n<a-carousel autoplay v-if=\"visible\">\n<div v-for=\"i in content\">\n<a-img :name=\"i.name\" :dir=\"i.dir\" :key=\"i.name\"></a-img>\n</div>\n</a-carousel>\n");
  var carousel = {
    template: template$b,
    props: ['img'],
    computed: {
      visible: function visible() {
        return this.content.length > 0;
      },
      content: function content() {
        var secretKey = getSecret();
        return this.img.filter(function (i) {
          var _i$dir;
          return !((_i$dir = i.dir) === null || _i$dir === void 0 ? void 0 : _i$dir.includes('privacy')) || !!secretKey;
        });
      }
    },
    components: {
      'a-carousel': Carousel,
      'a-img': img
    }
  };

  var css_248z$6 = ".badge {\n  display: block;\n  border-radius: 2px;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  box-sizing: border-box;\n  margin: 0 2px;\n}\n\n.badge, .badge-title, .badge-content {\n  color: #fff;\n  font-size: .7rem;\n  font-weight: 600;\n  font-family: system-ui;\n  white-space: pre-wrap;\n  line-height: 1.26rem;\n}\n\n.badge-title, .badge-content {\n  display: inline-block;\n  padding: 0 4px;\n}\n\n.badge-title {\n  background-color: #aaa;\n}\n\n.badge-content {\n  background-color: #75a49e;\n}\n\nli > .badge, li > p > .badge {\n  display: inline;\n  vertical-align: text-top;\n}\n";
  styleInject(css_248z$6);

  var badge = {
    template: '<span class="badge"><span v-if="title" class="badge-title">{{ title }}</span><span class="badge-content"><slot></slot></span></span>',
    props: {
      title: {
        type: String
      }
    }
  };

  var tooltip = {
    template: '<span style="border-bottom:1px dotted red;display:inline-block"><t-tooltip :title="title"><slot></slot></t-tooltip></span>',
    props: {
      title: {
        type: String
      }
    },
    components: {
      't-tooltip': Tooltip
    }
  };

  var css_248z$7 = ".gallery {\n  display: flex;\n}\n.gallery .gallery-item {\n  display: inline-block;\n  padding: 1px;\n}\n";
  styleInject(css_248z$7);

  var template$c = htmlMinify("\n<div class=\"gallery\" v-if=\"visible\">\n<div class=\"gallery-item\" v-for=\"i in content\" :style=\"{width}\">\n<a-img :name=\"i.name\" :dir=\"i.dir\" :key=\"i.name\"></a-img>\n</div>\n</div>\n");
  var gallery = {
    template: template$c,
    props: ['img'],
    computed: {
      width: function width() {
        return "".concat(100 / this.content.length, "%");
      },
      visible: function visible() {
        return this.content.length > 0;
      },
      content: function content() {
        var secretKey = getSecret();
        return this.img.filter(function (i) {
          var _i$dir;
          return !(i === null || i === void 0 ? void 0 : (_i$dir = i.dir) === null || _i$dir === void 0 ? void 0 : _i$dir.includes('privacy')) || !!secretKey;
        });
      }
    },
    components: {
      'a-img': img
    }
  };

  var css_248z$8 = ".vue-diction-wrapper {\n  padding: 10px 0;\n  border-bottom: 1px solid #ccc;\n}\n.vue-diction-part-of-speech {\n  padding-left: 0;\n}\n.vue-diction-definition {\n  padding-left: 8px;\n}\n.vue-diction-example {\n  display: none;\n}\n.vue-diction-meaning {\n  display: block;\n  clear: both;\n}\n.vue-diction-wrapper .vue-diction-label,\n.vue-diction-wrapper .vue-diction-part-of-speech {\n  display: inline-block;\n  float: none;\n  clear: both;\n}\n";
  styleInject(css_248z$8);

  var template$d = htmlMinify("<a-diction :auto-load=\"true\" :show-origin=\"showOrigin\" :word=\"word\">{{ title }}</a-diction>");
  var word = {
    template: template$d,
    props: {
      word: {
        type: String
      },
      title: {
        type: String
      },
      showOrigin: {
        type: Boolean,
        default: false
      }
    },
    components: {
      'a-diction': window.vueDiction
    }
  };

  var oneDay = 86400000;
  var template$e = htmlMinify("<div>\n  \u8DDD\u79BB{{name}}\u8FD8\u6709{{days}}\n</div>");
  var countdown = {
    template: template$e,
    props: {
      date: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      type: {
        type: String
      }
    },
    computed: {
      days: function days() {
        if (this.type === 'week') {
          var weeks = (new Date(this.date) - new Date()) / oneDay / 7;
          if (weeks >= 1) {
            return Math.ceil(weeks) + '周';
          }
        }
        return Math.ceil((new Date(this.date) - new Date()) / oneDay) + '天';
      }
    }
  };

  var template$f = "<div v-if=\"visible\"><a-alert :message=\"'\u6CE8\u610F\uFF1A' + message\" type=\"warning\"></a-alert></div>";
  var remind = {
    template: template$f,
    props: ['start', 'end', 'message'],
    computed: {
      visible: function visible() {
        var now = new Date();
        return now >= new Date("".concat(this.start, " 00:00:00")) && now <= new Date("".concat(this.end, " 23:59:59"));
      }
    },
    components: {
      'a-alert': Alert
    }
  };

  function mount() {
    var createApp = window.Vue.createApp;
    var wrapper = document.createElement('div');
    wrapper.style.position = 'fixed';
    wrapper.style.top = '0';
    wrapper.style.left = '0';
    document.body.appendChild(wrapper);
    var app = createApp({
      template: htmlMinify("<div v-if=\"text\" :style=\"{ position: 'absolute', left: x + 'px', top: y + 'px', width: width + 'px', height: height + 'px', background: '#fff' }\">\n  <a-typography-paragraph :copyable=\"{ text }\" style=\"margin: 0; text-align: center;\"></a-typography-paragraph>\n</div>"),
      data: function data() {
        return {
          text: '',
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      },
      mounted: function mounted() {
        document.addEventListener('selectionchange', this.listener);
      },
      beforeUnmount: function beforeUnmount() {
        document.removeEventListener('selectionchange', this.listener);
        document.body.removeChild(wrapper);
      },
      methods: {
        listener: function listener() {
          if (document.getSelection()) {
            this.text = document.getSelection().toString();
            try {
              var rects = document.getSelection().getRangeAt(0).getClientRects();
              if (rects && rects[0]) {
                var _rects = _slicedToArray(rects, 1),
                  _rects$ = _rects[0],
                  x = _rects$.x,
                  y = _rects$.y,
                  width = _rects$.width,
                  height = _rects$.height;
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
              }
            } catch (e) {}
          }
        }
      },
      components: {
        'a-typography-paragraph': TypographyParagraph
      }
    });
    app.mount(wrapper);
    return function () {
      app.unmount();
    };
  }
  var select = {
    mounted: function mounted() {
      this.unmount = mount();
    },
    beforeUnmount: function beforeUnmount() {
      if (typeof this.unmount === 'function') this.unmount();
    }
  };

  var template$g = "<span style=\"font-weight:800;padding:0 2px;\">/</span>";
  var slash = {
    template: template$g
  };

  var template$h = "<div @click=\"switchVisible\" :style=\"visible ? '' : 'white-space:nowrap;text-overflow:ellipsis;overflow:hidden;'\"><slot></slot></div>";
  var collapse = {
    data: function data() {
      return {
        visible: false
      };
    },
    methods: {
      switchVisible: function switchVisible() {
        this.visible = !this.visible;
      }
    },
    template: template$h
  };

  var template$i = "<dl style=\"list-style:mongolian\"><dt>{{ title }}</dt><li v-for=\"d in this.weekData\">{{ d }}</li></dl>";
  var schedule = {
    template: template$i,
    props: {
      title: {
        type: String
      },
      start: {
        type: Number,
        required: true
      },
      data: {
        type: Object,
        required: true
      }
    },
    computed: {
      currentWeek: function currentWeek() {
        // fix: Sunday should be the last day of the week
        var cv = dayjs().day() === 0 ? 1 : 0;
        return dayjs().week() - cv;
      },
      weekIndex: function weekIndex() {
        return this.currentWeek - this.start;
      },
      weekDay: function weekDay() {
        return dayjs().week(this.weekIndex).format();
      },
      weekData: function weekData() {
        return this.data[this.weekIndex] || [];
      }
    }
  };

  var template$j = "<span>{{content}}</span>";
  var count = {
    template: template$j,
    data: function data() {
      return {
        count: 0
      };
    },
    props: {
      selector: {
        type: String,
        required: true
      },
      render: {
        type: Function,
        default: function _default(count) {
          return '共' + count + '条';
        }
      }
    },
    computed: {
      content: function content() {
        return this.render(this.count);
      }
    },
    mounted: function mounted() {
      var _this = this;
      if (typeof this.selector === 'string') {
        this.$nextTick(function () {
          _this.count = document.querySelectorAll(_this.selector).length || 0;
        });
      }
    }
  };

  var template$k = "<i>{{ text }}</i>";
  function convertToOrdinal() {
    var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var suffixes = ['st', 'nd', 'rd'];
    var lastDigit = num % 10;
    var suffix = suffixes[lastDigit - 1] || 'th';
    return '' + num + suffix;
  }
  var times = {
    template: template$k,
    props: ['times', 'location'],
    computed: {
      text: function text() {
        return 'The ' + convertToOrdinal(this.times) + ' time' + (this.times > 1 ? 's' : '') + ' in ' + this.location;
      }
    }
  };

  var bg = {
    template: '<span :style="{background:bg, color}"><slot></slot></span>',
    props: {
      bg: {
        type: String,
        default: 'transparent'
      },
      color: {
        type: String,
        default: '#fff'
      }
    }
  };

  window.$docsify.vueComponents = _objectSpread2({
    'a-img': img,
    'a-secret': secret,
    'a-flight': flight,
    'a-map': map,
    'a-hotel': hotel,
    'a-carousel': carousel,
    'a-badge': badge,
    'a-tooltip': tooltip,
    'a-gallery': gallery,
    'a-word': word,
    'a-countdown': countdown,
    'a-remind': remind,
    'a-select': select,
    'a-slash': slash,
    'a-collapse': collapse,
    'a-schedule': schedule,
    'a-count': count,
    'a-times': times,
    'a-lazyload': lazyload,
    'a-bg': bg
  }, window.$docsify.vueComponents || {});
  if (!Array.isArray(window.$docsify.plugins)) {
    window.$docsify.plugins = [];
  }
  window.$docsify.plugins.push(function (hook) {
    hook.beforeEach(macau);
  });

})));
