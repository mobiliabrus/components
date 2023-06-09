(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('crypto'), require('antd')) :
  typeof define === 'function' && define.amd ? define(['crypto', 'antd'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.require$$0, global.antd));
}(this, (function (require$$0, antd) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
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
  	        stringify: function (wordArray, urlSafe=true) {
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
  	        parse: function (base64Str, urlSafe=true) {
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

  	            // Working varialbes
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
  	    var SHA1 = C_algo.SHA1;
  	    var HMAC = C_algo.HMAC;

  	    /**
  	     * Password-Based Key Derivation Function 2 algorithm.
  	     */
  	    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
  	        /**
  	         * Configuration options.
  	         *
  	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
  	         * @property {Hasher} hasher The hasher to use. Default: SHA1
  	         * @property {number} iterations The number of iterations to perform. Default: 1
  	         */
  	        cfg: Base.extend({
  	            keySize: 128/32,
  	            hasher: SHA1,
  	            iterations: 1
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
  	        execute: function (password, keySize, ivSize, salt) {
  	            // Generate random salt
  	            if (!salt) {
  	                salt = WordArray.random(64/8);
  	            }

  	            // Derive key and IV
  	            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

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
  	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

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
  	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

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

  var _cryptoJs_4_1_1_cryptoJs = createCommonjsModule(function (module, exports) {
  (function (root, factory, undef) {
  	{
  		// CommonJS
  		module.exports = exports = factory(core, x64Core, libTypedarrays, encUtf16, encBase64, encBase64url, md5, sha1, sha256, sha224, sha512, sha384, sha3, ripemd160, hmac, pbkdf2, evpkdf, cipherCore, modeCfb, modeCtr, modeCtrGladman, modeOfb, modeEcb, padAnsix923, padIso10126, padIso97971, padZeropadding, padNopadding, formatHex, aes, tripledes, rc4, rabbit, rabbitLegacy);
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
    var keyutf = _cryptoJs_4_1_1_cryptoJs.enc.Utf8.parse(key16);
    var iv = {
      iv: _cryptoJs_4_1_1_cryptoJs.enc.Base64.parse(key16)
    };
    if (action === "decrypt") {
      var raw = _cryptoJs_4_1_1_cryptoJs.AES.decrypt({
        ciphertext: _cryptoJs_4_1_1_cryptoJs.enc.Base64.parse(content)
      }, keyutf, iv);
      return _cryptoJs_4_1_1_cryptoJs.enc.Utf8.stringify(raw);
    } else {
      return _cryptoJs_4_1_1_cryptoJs.AES.encrypt(content, keyutf, iv).toString();
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
    return html.replace(/\n/g, "");
  };

  var template$1 = htmlMinify("<svg fill=\"#fff\" t=\"1658039132650\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2251\" width=\"25\" height=\"25\">\n<path d=\"M556.8 512L832 236.8c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L512 467.2l-275.2-277.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l275.2 277.333333-277.333333 275.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333L512 556.8 787.2 832c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8L556.8 512z\" p-id=\"2252\"></path>\n</svg>");
  var Close = {
    template: template$1
  };

  var css_248z$1 = ".a-modal-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 2147483647;\n  overflow: hidden;\n}\n.a-modal-close {\n  position: absolute;\n  right: 8px;\n  top: 10px;\n  z-index: 2147483646;\n}\n.a-modal-actions {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  padding: 8px 10px;\n  z-index: 2147483646;\n}\n";
  styleInject(css_248z$1);

  var template$2 = htmlMinify("<div style=\"line-height:initial\">\n  <div v-if=\"visible\" class=\"a-modal-wrapper\">\n    <div class=\"a-modal-close\" @click=\"this.close\">\n      <v-close></v-close>\n    </div>\n    <div class=\"a-modal-actions\">\n      <slot name=\"action\"></slot>\n    </div>\n    <v-zoomer ref=\"zoomer\" style=\"width:100%;height:100%;\">\n      <slot name=\"popover\"></slot>\n    </v-zoomer>\n  </div>\n  <div @click=\"this.pop\">\n    <slot name=\"default\"></slot>\n  </div>\n</div>");
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
      },
      close: function close() {
        this.visible = false;
      }
    },
    components: {
      'v-zoomer': Zoomer,
      'v-close': Close
    }
  };

  var css_248z$2 = ".a-img-popover-item {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n}\n.a-img-left-action {\n  width: 50%;\n  text-align: left;\n  float: left;\n}\n.a-img-right-action {\n  width: 50%;\n  text-align: right;\n  float: right;\n}\n";
  styleInject(css_248z$2);

  var template$3 = htmlMinify("<a-modal :scale=\"scale\">\n<template v-slot:action>\n  <div>\n    <div class=\"a-img-left-action\">\n        <t-button ghost v-if=\"!src\" @click=\"loadHD\" :loading=\"loading\">HD</t-button>\n    </div>\n    <div class=\"a-img-right-action\">\n        <t-button type=\"text\" style=\"padding:4px 5px;\" @click=\"scaleIn\">\n            <svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"><path d=\"M149.333333 394.666667c17.066667 0 32-14.933333 32-32v-136.533334l187.733334 187.733334c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c12.8-12.8 12.8-32 0-44.8l-187.733333-187.733334H362.666667c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H149.333333c-4.266667 0-8.533333 0-10.666666 2.133334-8.533333 4.266667-14.933333 10.666667-19.2 17.066666-2.133333 4.266667-2.133333 8.533333-2.133334 12.8v213.333334c0 17.066667 14.933333 32 32 32zM874.666667 629.333333c-17.066667 0-32 14.933333-32 32v136.533334L642.133333 597.333333c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8l200.533334 200.533334H661.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h213.333334c4.266667 0 8.533333 0 10.666666-2.133334 8.533333-4.266667 14.933333-8.533333 17.066667-17.066666 2.133333-4.266667 2.133333-8.533333 2.133333-10.666667V661.333333c2.133333-17.066667-12.8-32-29.866666-32zM381.866667 595.2l-200.533334 200.533333V661.333333c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v213.333334c0 4.266667 0 8.533333 2.133334 10.666666 4.266667 8.533333 8.533333 14.933333 17.066666 17.066667 4.266667 2.133333 8.533333 2.133333 10.666667 2.133333h213.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32h-136.533333l200.533333-200.533333c12.8-12.8 12.8-32 0-44.8s-29.866667-10.666667-42.666666 0zM904.533333 138.666667c0-2.133333 0-2.133333 0 0-4.266667-8.533333-10.666667-14.933333-17.066666-17.066667-4.266667-2.133333-8.533333-2.133333-10.666667-2.133333H661.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h136.533334l-187.733334 187.733333c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466667-8.533333l187.733333-187.733333V362.666667c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V149.333333c-2.133333-4.266667-2.133333-8.533333-4.266667-10.666666z\" fill=\"#fff\"></path></svg>\n        </t-button>\n        <t-button type=\"text\" style=\"padding:4px 5px;\" @click=\"scaleOut\">\n            <svg viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"><path d=\"M313.6 358.4H177.066667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h213.333333c4.266667 0 8.533333 0 10.666667-2.133333 8.533333-4.266667 14.933333-8.533333 17.066666-17.066667 2.133333-4.266667 2.133333-8.533333 2.133334-10.666667v-213.333333c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v136.533333L172.8 125.866667c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l185.6 187.733333zM695.466667 650.666667H832c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H618.666667c-4.266667 0-8.533333 0-10.666667 2.133333-8.533333 4.266667-14.933333 8.533333-17.066667 17.066667-2.133333 4.266667-2.133333 8.533333-2.133333 10.666666v213.333334c0 17.066667 14.933333 32 32 32s32-14.933333 32-32v-136.533334l200.533333 200.533334c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466667-8.533333c12.8-12.8 12.8-32 0-44.8l-204.8-198.4zM435.2 605.866667c-4.266667-8.533333-8.533333-14.933333-17.066667-17.066667-4.266667-2.133333-8.533333-2.133333-10.666666-2.133333H192c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h136.533333L128 851.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333l200.533334-200.533333V832c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V618.666667c-2.133333-4.266667-2.133333-8.533333-4.266667-12.8zM603.733333 403.2c4.266667 8.533333 8.533333 14.933333 17.066667 17.066667 4.266667 2.133333 8.533333 2.133333 10.666667 2.133333h213.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32h-136.533333L896 170.666667c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0l-187.733333 187.733333V177.066667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v213.333333c2.133333 4.266667 2.133333 8.533333 4.266666 12.8z\" fill=\"#fff\"></path></svg>\n        </t-button>\n    </div>\n  </div>\n</template>\n<template v-slot:popover>\n  <img class=\"a-img-popover-item\" :src=\"visible && (src || srcMin)\" :alt=\"name\" />\n</template>\n<template v-slot:default>\n  <img v-if=\"src || srcMin\" :src=\"visible && !hide && (src || srcMin)\" :alt=\"name\" @load=\"onImageLoad\" style=\"width:100%\" />\n</template>\n</a-modal>");
  var isLocal = location.hostname === 'localhost';
  var baseUrl = function baseUrl() {
    if (isLocal) {
      return '/packages/img/src/';
    }
    return '/img/assets/';
  };
  var img = {
    template: template$3,
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
      var secretKey = localStorage.getItem("lee6's-secret");
      return {
        img: undefined,
        src: undefined,
        srcMin: undefined,
        scale: undefined,
        secretKey: secretKey,
        loading: false,
        visible: !(this.dir === 'assert' && !secretKey)
      };
    },
    mounted: function mounted() {
      this.load('min', 'srcMin');
    },
    methods: {
      onImageLoad: function onImageLoad(e) {
        this.img = e.target;
        this.scaleIn();
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
        if (this.dir === 'privacy') {
          if (this.secretKey) {
            var name = suffer ? [this.name.split('.')[0], suffer, 'webp'].join('.') : this.name;
            this.loading = true;
            fetch(baseUrl() + 'privacy/' + name, {
              mode: 'cors'
            }).then(function (res) {
              return res.text();
            }).then(function (content) {
              _this[t] = crypto(content, _this.secretKey, 'decrypt');
            }).finally(function () {
              if (isLocal && !_this[t]) {
                _this[t] = baseUrl() + 'privacy/' + _this.name;
              }
              _this.loading = false;
            });
          }
        } else if (this.dir === 'privacy-gif') {
          if (this.secretKey) {
            var _name = suffer ? [this.name.split('.')[0], suffer ? suffer + '.g1f' : 'gif'].join('.') : this.name;
            this.loading = true;
            fetch(baseUrl() + 'privacy/' + _name, {
              mode: 'cors'
            }).then(function (res) {
              return res.text();
            }).then(function (content) {
              _this[t] = crypto(content, _this.secretKey, 'decrypt');
            }).finally(function () {
              if (isLocal && !_this[t]) {
                _this[t] = baseUrl() + 'privacy/' + _this.name;
              }
              _this.loading = false;
            });
          }
        } else if (this.dir === 'animation') {
          if (isLocal) {
            this[t] = baseUrl() + 'animation/' + this.name + '.gif';
          } else {
            this[t] = baseUrl() + 'animation/' + [this.name, suffer, 'gif'].filter(function (_) {
              return _;
            }).join('.');
          }
        } else {
          if (isLocal) {
            this[t] = baseUrl() + 'public/' + this.name + '.jpg';
          } else {
            this[t] = baseUrl() + 'public/' + [this.name, suffer, 'webp'].filter(function (_) {
              return _;
            }).join('.');
          }
        }
      }
    },
    components: {
      'a-modal': modal,
      't-button': antd.Button
    }
  };

  var template$4 = htmlMinify("\n<template v-if=\"!visible\">\n<span v-if=\"this.blackout || this.content\" @click=\"decrypt\" style=\"display: inline;\nbackground-color: #333;\ncolor: transparent;\npadding: 0 8px;\nuser-select: none;\nheight: 18px;\nline-height: 18px;\nword-break: break-all;\nletter-spacing: -5.5px;\">{{ this.rawContent }}</span>\n</template>\n<template v-else>\n<span ref=\"t\"></span>\n</template>\n");
  var secret = {
    template: template$4,
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
        rawContent: undefined,
        content: undefined,
        secretKey: localStorage.getItem("lee6's-secret")
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
      fetch("assets/confidential/".concat(this.name, ".md"), {
        mode: 'cors'
      }).then(function (res) {
        return res.text();
      }).then(function (rawContent) {
        _this.rawContent = rawContent;
        if (_this.secretKey) {
          var keylength = 16;
          var keyorigin = _this.secretKey.split('');
          var key16 = keyorigin.length < 16 ? [].concat(_toConsumableArray(keyorigin), _toConsumableArray(Array.from(new Array(keylength - keyorigin.length)).map(function () {
            return '0';
          }))).join('') : key16;
          var keyutf = _cryptoJs_4_1_1_cryptoJs.enc.Utf8.parse(key16);
          var iv = {
            iv: _cryptoJs_4_1_1_cryptoJs.enc.Base64.parse(key16)
          };
          var raw = _cryptoJs_4_1_1_cryptoJs.AES.decrypt({
            ciphertext: _cryptoJs_4_1_1_cryptoJs.enc.Base64.parse(rawContent)
          }, keyutf, iv);
          var content = _cryptoJs_4_1_1_cryptoJs.enc.Utf8.stringify(raw);
          _this.content = marked.parse(content);
          if (_this.autoload) {
            _this.decrypt();
          }
        }
      });
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
          }, 0);
        }
      }
    }
  };

  var css_248z$3 = ".am-steps {\n  font-size: 0;\n  width: 100%;\n  line-height: 1.5;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.am-steps,\n.am-steps * {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.am-steps-item {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  overflow: hidden;\n}\n.am-steps-item:last-child {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n}\n.am-steps-item:last-child .am-steps-item-tail,\n.am-steps-item:last-child .am-steps-item-title:after {\n  display: none;\n}\n.am-steps-item-icon,\n.am-steps-item-content {\n  display: inline-block;\n  vertical-align: top;\n}\n.am-steps-item-icon {\n  border: 1px solid #bbb;\n  width: 22px;\n  height: 22px;\n  line-height: 22px;\n  border-radius: 22px;\n  text-align: center;\n  font-size: 14px;\n  margin-right: 8px;\n  -webkit-transition: background-color 0.3s, border-color 0.3s;\n  transition: background-color 0.3s, border-color 0.3s;\n}\n.am-steps-item-icon > .am-steps-icon {\n  line-height: 1;\n  top: -1px;\n  color: #108ee9;\n  position: relative;\n}\n.am-steps-item-icon > .am-steps-icon .am-icon {\n  font-size: 12px;\n  position: relative;\n  float: left;\n}\n.am-steps-item-tail {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  top: 12px;\n  padding: 0 10px;\n}\n.am-steps-item-tail:after {\n  content: \"\";\n  display: inline-block;\n  background: #ddd;\n  height: 1px;\n  border-radius: 1px;\n  width: 100%;\n  -webkit-transition: background 0.3s;\n  transition: background 0.3s;\n  position: relative;\n  left: -2px;\n}\n.am-steps-item-content {\n  margin-top: 3px;\n}\n.am-steps-item-title {\n  font-size: 16px;\n  margin-bottom: 4px;\n  color: #000;\n  font-weight: bold;\n  display: inline-block;\n  padding-right: 10px;\n  position: relative;\n}\n.am-steps-item-description {\n  font-size: 15px;\n  color: #bbb;\n}\n.am-steps-item-wait .am-steps-item-icon {\n  border-color: #ccc;\n  background-color: #fff;\n}\n.am-steps-item-wait .am-steps-item-icon > .am-steps-icon {\n  color: #ccc;\n}\n.am-steps-item-wait .am-steps-item-icon > .am-steps-icon .am-steps-icon-dot {\n  background: #ccc;\n}\n.am-steps-item-wait .am-steps-item-title {\n  color: #000;\n}\n.am-steps-item-wait .am-steps-item-title:after {\n  background-color: #ddd;\n}\n.am-steps-item-wait .am-steps-item-description {\n  color: #000;\n}\n.am-steps-item-wait .am-steps-item-tail:after {\n  background-color: #ddd;\n}\n.am-steps-item-process .am-steps-item-icon {\n  border-color: #108ee9;\n  background-color: #fff;\n}\n.am-steps-item-process .am-steps-item-icon > .am-steps-icon {\n  color: #108ee9;\n}\n.am-steps-item-process .am-steps-item-icon > .am-steps-icon .am-steps-icon-dot {\n  background: #108ee9;\n}\n.am-steps-item-process .am-steps-item-title {\n  color: #000;\n}\n.am-steps-item-process .am-steps-item-title:after {\n  background-color: #ddd;\n}\n.am-steps-item-process .am-steps-item-description {\n  color: #000;\n}\n.am-steps-item-process .am-steps-item-tail:after {\n  background-color: #ddd;\n}\n.am-steps-item-process .am-steps-item-icon {\n  background: #108ee9;\n}\n.am-steps-item-process .am-steps-item-icon > .am-steps-icon {\n  color: #fff;\n}\n.am-steps-item-finish .am-steps-item-icon {\n  border-color: #108ee9;\n  background-color: #fff;\n}\n.am-steps-item-finish .am-steps-item-icon > .am-steps-icon {\n  color: #108ee9;\n}\n.am-steps-item-finish .am-steps-item-icon > .am-steps-icon .am-steps-icon-dot {\n  background: #108ee9;\n}\n.am-steps-item-finish .am-steps-item-title {\n  color: #000;\n}\n.am-steps-item-finish .am-steps-item-title:after {\n  background-color: #108ee9;\n}\n.am-steps-item-finish .am-steps-item-description {\n  color: #000;\n}\n.am-steps-item-finish .am-steps-item-tail:after {\n  background-color: #108ee9;\n}\n.am-steps-item-error .am-steps-item-icon {\n  border-color: #f4333c;\n  background-color: #fff;\n}\n.am-steps-item-error .am-steps-item-icon > .am-steps-icon {\n  color: #f4333c;\n}\n.am-steps-item-error .am-steps-item-icon > .am-steps-icon .am-steps-icon-dot {\n  background: #f4333c;\n}\n.am-steps-item-error .am-steps-item-title {\n  color: #f4333c;\n}\n.am-steps-item-error .am-steps-item-title:after {\n  background-color: #ddd;\n}\n.am-steps-item-error .am-steps-item-description {\n  color: #f4333c;\n}\n.am-steps-item-error .am-steps-item-tail:after {\n  background-color: #ddd;\n}\n.am-steps-item.am-steps-next-error .am-steps-item-title:after {\n  background: #f4333c;\n}\n.am-steps-item.error-tail .am-steps-item-tail:after {\n  background-color: #f4333c;\n}\n.am-steps-horizontal:not(.am-steps-label-vertical) .am-steps-item {\n  margin-right: 10px;\n}\n.am-steps-horizontal:not(.am-steps-label-vertical) .am-steps-item:last-child {\n  margin-right: 0;\n}\n.am-steps-horizontal:not(.am-steps-label-vertical) .am-steps-item-tail {\n  display: none;\n}\n.am-steps-horizontal:not(.am-steps-label-vertical) .am-steps-item-description {\n  max-width: 100px;\n}\n.am-steps-item-custom .am-steps-item-icon {\n  background: none;\n  border: 0;\n  width: auto;\n  height: auto;\n}\n.am-steps-item-custom .am-steps-item-icon > .am-steps-icon {\n  font-size: 22px;\n  top: 1px;\n  width: 22px;\n  height: 22px;\n}\n.am-steps-item-custom.am-steps-item-process .am-steps-item-icon > .am-steps-icon {\n  color: #108ee9;\n}\n.am-steps-small .am-steps-item-icon {\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n  text-align: center;\n  border-radius: 18px;\n  font-size: 14px;\n  margin-right: 8px;\n}\n.am-steps-small .am-steps-item-icon > .am-steps-icon {\n  font-size: 12px;\n  -webkit-transform: scale(0.75);\n  -ms-transform: scale(0.75);\n  transform: scale(0.75);\n  top: -2px;\n}\n.am-steps-small .am-steps-item-content {\n  margin-top: 0;\n}\n.am-steps-small .am-steps-item-title {\n  font-size: 16px;\n  margin-bottom: 3px;\n  color: #000;\n  font-weight: bold;\n}\n.am-steps-small .am-steps-item-description {\n  font-size: 12px;\n  color: #bbb;\n}\n.am-steps-small .am-steps-item-tail {\n  top: 8px;\n  padding: 0 8px;\n}\n.am-steps-small .am-steps-item-tail:after {\n  height: 1px;\n  border-radius: 1px;\n  width: 100%;\n  left: 0;\n}\n.am-steps-small .am-steps-item-custom .am-steps-item-icon {\n  background: none;\n}\n.am-steps-small .am-steps-item-custom .am-steps-item-icon > .am-steps-icon {\n  font-size: 18px;\n  top: -2px;\n  -webkit-transform: none;\n  -ms-transform: none;\n  transform: none;\n}\n.am-steps-vertical {\n  display: block;\n}\n.am-steps-vertical .am-steps-item {\n  display: block;\n  overflow: visible;\n}\n.am-steps-vertical .am-steps-item-icon {\n  float: left;\n}\n.am-steps-vertical .am-steps-item-icon-inner {\n  margin-right: 16px;\n}\n.am-steps-vertical .am-steps-item-content {\n  min-height: 48px;\n  overflow: hidden;\n  display: block;\n}\n.am-steps-vertical .am-steps-item-title {\n  line-height: 26px;\n}\n.am-steps-vertical .am-steps-item-title:after {\n  display: none;\n}\n.am-steps-vertical .am-steps-item-description {\n  padding-bottom: 12px;\n}\n.am-steps-vertical .am-steps-item-tail {\n  position: absolute;\n  left: 13px;\n  top: 0;\n  height: 100%;\n  width: 1px;\n  padding: 30px 0 4px 0;\n}\n.am-steps-vertical .am-steps-item-tail:after {\n  height: 100%;\n  width: 1px;\n}\n.am-steps-vertical.am-steps-small .am-steps-item-tail {\n  position: absolute;\n  left: 9px;\n  top: 0;\n  padding: 22px 0 4px 0;\n}\n.am-steps-vertical.am-steps-small .am-steps-item-title {\n  line-height: 18px;\n}\n.am-steps-label-vertical .am-steps-item {\n  overflow: visible;\n}\n.am-steps-label-vertical .am-steps-item-tail {\n  padding: 0 24px;\n  margin-left: 48px;\n}\n.am-steps-label-vertical .am-steps-item-content {\n  display: block;\n  text-align: center;\n  margin-top: 8px;\n  width: 100px;\n}\n.am-steps-label-vertical .am-steps-item-icon {\n  display: inline-block;\n  margin-left: 36px;\n}\n.am-steps-label-vertical .am-steps-item-title {\n  padding-right: 0;\n}\n.am-steps-label-vertical .am-steps-item-title:after {\n  display: none;\n}\n\n.a-flight {\n  position: relative;\n  margin: 16px;\n}\n\n.a-flight .a-flight-no {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  transform: translateX(-50%);\n  z-index: 1;\n  padding: 0 8px;\n  background-color: #fff;\n}\n\n@media screen and (max-width: 768px) {\n  .a-flight .a-flight-no {\n    background-color: #eee;\n  }\n}";
  styleInject(css_248z$3);

  var template$5 = htmlMinify("<div class=\"a-flight\">\n<div class=\"a-flight-no\"><span>{{ this.flight }}</span></div>\n<div class=\"am-steps am-steps-horizontal am-steps-label-vertical\">\n<div class=\"am-steps-item am-steps-item-process am-steps-item-custom\">\n<div class=\"am-steps-item-tail\"></div>\n<div class=\"am-steps-item-icon\">\n<span class=\"am-steps-icon\">\n<i class=\"anticon\">\n<svg t=\"1651558792798\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1560\" width=\"22\" height=\"22\"><path d=\"M152.362667 591.594667c2.218667-0.768 5.76 0.810667 8.106666 2.261333 24.661333 15.381333 49.130667 31.04 73.813334 46.357333 2.368 1.472 6.272 2.304 8.725333 1.429334 50.176-18.133333 100.266667-36.522667 150.357333-54.890667 0.853333-0.32 1.6-0.853333 3.050667-1.642667L203.648 285.866667c2.261333-0.981333 4.053333-1.877333 5.888-2.56 23.722667-8.746667 47.530667-17.28 71.146667-26.304 5.077333-1.92 8.32-1.024 12.416 2.24 101.781333 81.472 203.712 162.730667 305.450666 244.266666 5.226667 4.202667 9.258667 4.736 15.466667 2.432 80.96-29.930667 161.984-59.584 243.050667-89.173333 37.738667-13.781333 75.029333 8.554667 80.981333 48.298667 4.074667 27.157333-12.565333 54.101333-39.978667 64.192-63.786667 23.466667-127.637333 46.826667-191.445333 70.229333l-445.653333 163.413333c-32.064 11.776-56.533333 2.986667-76.992-24.704-18.666667-25.301333-39.36-49.088-59.178667-73.557333L85.333333 616.021333c23.04-8.469333 44.970667-16.704 67.029334-24.426666z\" fill=\"#3D3D3D\" p-id=\"1561\"></path></svg>\n</i>\n</span></div><div class=\"am-steps-item-content\">\n<div class=\"am-steps-item-title\">{{ this.departure }}</div><div class=\"am-steps-item-description\">{{ this.departureTimeLocale }}</div>\n</div></div>\n<div class=\"am-steps-item am-steps-item-wait am-steps-item-custom\">\n<div class=\"am-steps-item-tail\"></div><div class=\"am-steps-item-icon\">\n<span class=\"am-steps-icon\">\n<i class=\"anticon\">\n<svg t=\"1651558896240\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1699\" width=\"22\" height=\"22\"><path d=\"M128 896h768v42.666667H128v-42.666667z m384-18.133333s-167.936-103.957333-179.413333-112c-33.557333-23.466667-59.690667-44.074667-77.013334-61.44A361.536 361.536 0 0 1 149.333333 448c0-200.298667 162.368-362.666667 362.666667-362.666667s362.666667 162.368 362.666667 362.666667c0 97.493333-38.656 188.885333-106.24 256.426667-17.322667 17.365333-43.456 37.973333-77.013334 61.44-11.477333 8.042667-179.413333 112-179.413333 112zM512 576a128 128 0 1 0 0-256 128 128 0 0 0 0 256z\" fill=\"#3D3D3D\" p-id=\"1700\"></path></svg>\n</i>\n</span></div><div class=\"am-steps-item-content\">\n<div class=\"am-steps-item-title\">{{ this.destination }}</div><div class=\"am-steps-item-description\">{{ this.arriveTimeLocale }}</div></div></div></div></div>");
  var flight = {
    template: template$5,
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
          resolve();
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
  var template$6 = "<div class=\"map\" ref=\"map\"></div>";
  var Map = {
    template: template$6,
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
        var _this5 = this;
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
            Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
              var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(_this5.map);
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
                autoUpdateMapView: _this5.autoUpdateMapView
              });
              directionsManager.calculateDirections();
            });
          }
        }
      }
    }
  };

  var css_248z$5 = ".map-wrapper {\n  position: relative;\n}\n.map-wrapper .map {\n  width: 100%;\n  height: 100%;\n}\n.map-mask {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1001;\n}\n.map-fullscreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 2147483647;\n}\n";
  styleInject(css_248z$5);

  var template$7 = htmlMinify("<div>\n<div v-if=\"fullscreen\" class=\"map-wrapper map-fullscreen\">\n  <div @click=\"this.closeFullScreen\" style=\"position:absolute;right:8px;top:10px;z-index:2147483646\">\n        <v-close></v-close>\n  </div>\n  <v-map\n  :center=\"this._center\"\n  :points=\"this._points\"\n  :divesites=\"this._divesites\"\n  :walking=\"this._walking\"\n  :transit=\"this._transit\"\n  :driving=\"this._driving\"\n  :line=\"this._line\"\n  ></v-map>\n</div>\n<div class=\"map-wrapper\">\n  <div class=\"map-mask\" @click=\"this.switchFullScreen\"></div>\n  <v-map\n  :center=\"this._center\"\n  :points=\"this._points\"\n  :divesites=\"this._divesites\"\n  :walking=\"this._walking\"\n  :transit=\"this._transit\"\n  :driving=\"this._driving\"\n  :line=\"this._line\"\n  ></v-map>\n</div>\n</div>");
  var map = {
    template: template$7,
    props: ['center', 'points', 'walking', 'transit', 'driving', 'line', 'divesites'],
    data: function data() {
      return {
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
      switchFullScreen: function switchFullScreen() {
        this.fullscreen = true;
      },
      closeFullScreen: function closeFullScreen() {
        this.fullscreen = false;
      }
    },
    components: {
      'v-map': Map,
      'v-close': Close
    }
  };

  var template$8 = htmlMinify("<div><div><b>{{this.name}}</b></div><div @click=\"this.switchDetail\" style=\"margin-bottom:16px\">\n<i>{{this.from}}</i>\n<i>{{this.to}}</i>\n</div></div>");
  var hotel = {
    template: template$8,
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

  var template$9 = htmlMinify("<a-carousel autoplay>\n<div v-if=\"img\" v-for=\"i in img\">\n<a-img :name=\"i.name\" :dir=\"i.dir\" :key=\"i.name\"></a-img>\n</div>\n</a-carousel>");
  var carousel = {
    template: template$9,
    props: ['img'],
    components: {
      "a-carousel": Carousel,
      "a-img": img
    }
  };

  var css_248z$6 = ".badge {\n  border-radius: 2px;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  box-sizing: border-box;\n  margin: 0 2px;\n  vertical-align: text-top;\n}\n\n.badge, .badge-title, .badge-content {\n  display: inline-block;\n  color: #fff;\n  font-size: .7rem;\n  font-weight: 600;\n  font-family: system-ui;\n  white-space: pre-wrap;\n  line-height: 1.26rem;\n}\n\n.badge-title, .badge-content {\n  padding: 0 4px;\n}\n\n.badge-title {\n  background-color: #aaa;\n}\n\n.badge-content {\n  background-color: #75a49e;\n}\n";
  styleInject(css_248z$6);

  var badge = {
    template: '<span class="badge" :style="{ display: inline ? \'inline-block\' : \'block\' }"><span v-if="title" class="badge-title">{{ title }}</span><span class="badge-content"><slot></slot></span></span>',
    props: {
      title: {
        type: String
      },
      inline: {
        type: Boolean,
        default: false
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

  var template$a = htmlMinify("\n<div class=\"gallery\" v-if=\"img\">\n<div class=\"gallery-item\" v-for=\"i in img\" :style=\"{width}\">\n<a-img :name=\"i.name\" :dir=\"i.dir\" :key=\"i.name\"></a-img>\n</div>\n</div>\n");
  var gallery = {
    template: template$a,
    props: ['img'],
    computed: {
      width: function width() {
        return "".concat(100 / this.img.length, "%");
      }
    },
    components: {
      'a-img': img
    }
  };

  var css_248z$8 = ".vue-diction-wrapper {\n  padding: 10px 0;\n  border-bottom: 1px solid #ccc;\n}\n.vue-diction-part-of-speech {\n  padding-left: 0;\n}\n.vue-diction-definition {\n  padding-left: 8px;\n}\n.vue-diction-example {\n  display: none;\n}\n.vue-diction-meaning {\n  display: block;\n  clear: both;\n}\n.vue-diction-wrapper .vue-diction-label,\n.vue-diction-wrapper .vue-diction-part-of-speech {\n  display: inline-block;\n  float: none;\n  clear: both;\n}\n";
  styleInject(css_248z$8);

  var template$b = htmlMinify("<a-diction :auto-load=\"true\" :show-origin=\"showOrigin\" :word=\"word\">{{ title }}</a-diction>");
  var word = {
    template: template$b,
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
  var template$c = htmlMinify("<div>\n  \u8DDD\u79BB{{name}}\u8FD8\u6709{{days}}\n</div>");
  var countdown = {
    template: template$c,
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

  var template$d = "<div v-if=\"visible\"><a-alert :message=\"'\u6CE8\u610F\uFF1A' + message\" type=\"warning\"></a-alert></div>";
  var remind = {
    template: template$d,
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

  if (!window.$docsify) {
    window.$docsify = {};
  }
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
    'a-select': select
  }, window.$docsify.vueComponents || {});
  if (!Array.isArray(window.$docsify.plugins)) {
    window.$docsify.plugins = [];
  }
  window.$docsify.plugins.push(function (hook, vm) {
    hook.beforeEach(function (raw) {
      var reg = /`{3}<([^`]+)>\n([^`]+)`{3}/g;
      return raw.replace(reg, function (_, c, p) {
        var slot = '';
        var props = '';
        p.split(/\n/).forEach(function (q) {
          var _q$trim$split = q.trim().split(':'),
            _q$trim$split2 = _slicedToArray(_q$trim$split, 2),
            prop = _q$trim$split2[0],
            value = _q$trim$split2[1];
          if (prop) {
            if (typeof value === 'undefined') {
              slot = prop;
            } else {
              props += " ".concat(prop, "=\"").concat(value, "\"");
            }
          }
        });
        return "<".concat(c).concat(props, ">").concat(slot, "</").concat(c, ">");
      });
    });
  });

})));
