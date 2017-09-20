/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @template A
 */
class MDCFoundation {
  /** @return enum{cssClasses} */
  static get cssClasses() {
    // Classes extending MDCFoundation should implement this method to return an object which exports every
    // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
    return {};
  }

  /** @return enum{strings} */
  static get strings() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
    return {};
  }

  /** @return enum{numbers} */
  static get numbers() {
    // Classes extending MDCFoundation should implement this method to return an object which exports all
    // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
    return {};
  }

  /** @return {!Object} */
  static get defaultAdapter() {
    // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
    // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
    // validation.
    return {};
  }

  /**
   * @param {A=} adapter
   */
  constructor(adapter = {}) {
    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  init() {
    // Subclasses should override this method to perform initialization routines (registering events, etc.)
  }

  destroy() {
    // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCFoundation;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/architecture.md
 *
 * @record
 */
class MDCRippleAdapter {
  /** @return {boolean} */
  browserSupportsCssVars() {}

  /** @return {boolean} */
  isUnbounded() {}

  /** @return {boolean} */
  isSurfaceActive() {}

  /** @return {boolean} */
  isSurfaceDisabled() {}

  /** @param {string} className */
  addClass(className) {}

  /** @param {string} className */
  removeClass(className) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  registerInteractionHandler(evtType, handler) {}

  /**
   * @param {string} evtType
   * @param {!Function} handler
   */
  deregisterInteractionHandler(evtType, handler) {}

  /**
   * @param {!Function} handler
   */
  registerResizeHandler(handler) {}

  /**
   * @param {!Function} handler
   */
  deregisterResizeHandler(handler) {}

  /**
   * @param {string} varName
   * @param {?number|string} value
   */
  updateCssVariable(varName, value) {}

  /** @return {!ClientRect} */
  computeBoundingRect() {}

  /** @return {{x: number, y: number}} */
  getWindowPageOffset() {}
}
/* unused harmony export default */



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["supportsCssVariables"] = supportsCssVariables;
/* harmony export (immutable) */ __webpack_exports__["applyPassive"] = applyPassive;
/* harmony export (immutable) */ __webpack_exports__["getMatchesProperty"] = getMatchesProperty;
/* harmony export (immutable) */ __webpack_exports__["getNormalizedEventCoords"] = getNormalizedEventCoords;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
let supportsCssVariables_;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
let supportsPassive_;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  const document = windowObj.document;
  const className = 'test-edge-css-var';
  const styleNode = document.createElement('style');
  document.head.appendChild(styleNode);
  const sheet = styleNode.sheet;
  // Internet Explorer 11 requires indices to always be specified to insertRule
  sheet.insertRule(`:root { --${className}: 1px solid #000; }`, 0);
  sheet.insertRule(`.${className} { visibility: hidden; }`, 1);
  sheet.insertRule(`.${className}::before { border: var(--${className}); }`, 2);
  const node = document.createElement('div');
  node.className = className;
  document.body.appendChild(node);
  // Bug exists if ::before style ends up propagating to the parent element
  const hasPseudoVarBug = windowObj.getComputedStyle(node).borderTopStyle === 'solid';
  node.remove();
  styleNode.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */
function supportsCssVariables(windowObj, forceRefresh = false) {
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  const supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  const explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  const weAreFeatureDetectingSafari10plus = (
    windowObj.CSS.supports('(--css-vars: yes)') &&
    windowObj.CSS.supports('color', '#00000000')
  );

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables_ = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables_ = false;
  }
  return supportsCssVariables_;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive(globalObj = window, forceRefresh = false) {
  if (supportsPassive_ === undefined || forceRefresh) {
    let isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, {get passive() {
        isSupported = true;
      }});
    } catch (e) { }

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? {passive: true} : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return [
    'webkitMatchesSelector', 'msMatchesSelector', 'matches',
  ].filter((p) => p in HTMLElementPrototype).pop();
}

/**
 * @param {!Event} ev
 * @param {!{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {!{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  const {x, y} = pageOffset;
  const documentX = x + clientRect.left;
  const documentY = y + clientRect.top;

  let normalizedX;
  let normalizedY;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return {x: normalizedX, y: normalizedY};
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ripple = __webpack_require__(4);

__webpack_require__(8);

/* eslint-env browser */
var curTemp = void 0;

function convTemp() {
    var display = document.getElementById('temp-display');
    var type = document.getElementById('type');
    var button = document.getElementById('b-type');

    function far(val) {
        return (val * (9 / 5) + 32).toFixed(1);
    }

    if (!display.classList.contains('far')) {
        display.classList.toggle('far');
        display.textContent = far(curTemp);
        type.textContent = 'F';
        button.textContent = 'C';
    } else {
        display.classList.toggle('far');
        display.textContent = curTemp;
        type.textContent = 'C';
        button.textContent = 'F';
    }
}

function displayWeather(data) {
    curTemp = data.main.temp.toFixed(1);
    var image = document.getElementById('image');
    var icon = document.createElement('img');
    var description = document.createElement('span');

    document.getElementById('temp-display').textContent = curTemp;

    document.getElementById('city').textContent = data.name;

    icon.src = data.weather[0].icon;
    description.textContent = data.weather[0].description;
    description.classList.add('weather-description');
    image.appendChild(icon);
    image.appendChild(description);
}

window.onload = function () {
    // Get the Weather from geoloaction
    if (window.XMLHttpRequest) {
        var weather = new XMLHttpRequest();
        (function () {
            var lat = void 0;
            var lon = void 0;
            var url = void 0;

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (pos) {
                    lat = pos.coords.latitude;
                    lon = pos.coords.longitude;
                    url = 'https://fcc-weather-api.glitch.me/api/current?lat='.concat(lat, '&lon=', lon);

                    weather.open('GET', url, true);
                    weather.send();
                    weather.onload = function () {
                        displayWeather(JSON.parse(weather.responseText));
                    };
                });
            } else {
                window.console.log('Browser does not support geolocation.');
            }
        })();
    }

    document.getElementById('temp-button').classList.add('mdc-button', 'mdc-button--accent', 'mdc-button--raised', 'mdc-button--dense');

    _ripple.MDCRipple.attachTo(document.querySelector('#temp-button'));
    document.getElementById('temp-button').addEventListener('click', function () {
        return convTemp();
    });

    function clock() {
        var time = new Date();
        document.getElementById('date').textContent = time.toLocaleString();
    }
    setInterval(clock, 1000);
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() { return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "util", function() { return __WEBPACK_IMPORTED_MODULE_3__util__; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */
class MDCRipple extends __WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */] {
  /** @param {...?} args */
  constructor(...args) {
    super(...args);

    /** @type {boolean} */
    this.disabled = false;

    /** @private {boolean} */
    this.unbounded_;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */
  static attachTo(root, {isUnbounded = undefined} = {}) {
    const ripple = new MDCRipple(root);
    // Only override unbounded behavior if option is explicitly specified
    if (isUnbounded !== undefined) {
      ripple.unbounded = /** @type {boolean} */ (isUnbounded);
    }
    return ripple;
  }

  /**
   * @param {!RippleCapableSurface} instance
   * @return {!MDCRippleAdapter}
   */
  static createAdapter(instance) {
    const MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["getMatchesProperty"](HTMLElement.prototype);

    return {
      browserSupportsCssVars: () => __WEBPACK_IMPORTED_MODULE_3__util__["supportsCssVariables"](window),
      isUnbounded: () => instance.unbounded,
      isSurfaceActive: () => instance.root_[MATCHES](':active'),
      isSurfaceDisabled: () => instance.disabled,
      addClass: (className) => instance.root_.classList.add(className),
      removeClass: (className) => instance.root_.classList.remove(className),
      registerInteractionHandler: (evtType, handler) =>
        instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]()),
      deregisterInteractionHandler: (evtType, handler) =>
        instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]()),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      updateCssVariable: (varName, value) => instance.root_.style.setProperty(varName, value),
      computeBoundingRect: () => instance.root_.getBoundingClientRect(),
      getWindowPageOffset: () => ({x: window.pageXOffset, y: window.pageYOffset}),
    };
  }

  /** @return {boolean} */
  get unbounded() {
    return this.unbounded_;
  }

  /** @param {boolean} unbounded */
  set unbounded(unbounded) {
    const {UNBOUNDED} = __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].cssClasses;
    this.unbounded_ = Boolean(unbounded);
    if (this.unbounded_) {
      this.root_.classList.add(UNBOUNDED);
    } else {
      this.root_.classList.remove(UNBOUNDED);
    }
  }

  activate() {
    this.foundation_.activate();
  }

  deactivate() {
    this.foundation_.deactivate();
  }

  layout() {
    this.foundation_.layout();
  }

  /** @return {!MDCRippleFoundation} */
  getDefaultFoundation() {
    return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](MDCRipple.createAdapter(this));
  }

  initialSyncWithDOM() {
    this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
  }
}
/* harmony export (immutable) */ __webpack_exports__["MDCRipple"] = MDCRipple;


/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */
class RippleCapableSurface {}

/** @protected {!Element} */
RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * @template F
 */
class MDCComponent {
  /**
   * @param {!Element} root
   * @return {!MDCComponent}
   */
  static attachTo(root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
  }

  /**
   * @param {!Element} root
   * @param {F=} foundation
   * @param {...?} args
   */
  constructor(root, foundation = undefined, ...args) {
    /** @protected {!Element} */
    this.root_ = root;
    this.initialize(...args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  initialize(/* ...args */) {
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.
  }

  /**
   * @return {!F} foundation
   */
  getDefaultFoundation() {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' +
      'foundation class');
  }

  initialSyncWithDOM() {
    // Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  }

  destroy() {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  }

  /**
   * Wrapper method to add an event listener to the component's root element. This is most useful when
   * listening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  listen(evtType, handler) {
    this.root_.addEventListener(evtType, handler);
  }

  /**
   * Wrapper method to remove an event listener to the component's root element. This is most useful when
   * unlistening for custom events.
   * @param {string} evtType
   * @param {!Function} handler
   */
  unlisten(evtType, handler) {
    this.root_.removeEventListener(evtType, handler);
  }

  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type,
   * with the given data.
   * @param {string} evtType
   * @param {!Object} evtData
   * @param {boolean=} shouldBubble
   */
  emit(evtType, evtData, shouldBubble = false) {
    let evt;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        detail: evtData,
        bubbles: shouldBubble,
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCComponent;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






/**
 * @typedef {!{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationStartTime: (number|undefined),
 *   activationEvent: Event,
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
let ActivationStateType;

/**
 * @typedef {!{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
let ListenerInfoType;

/**
 * @typedef {!{
 *   activate: function(!Event),
 *   deactivate: function(!Event),
 *   focus: function(),
 *   blur: function()
 * }}
 */
let ListenersType;

/**
 * @typedef {!{
 *   x: number,
 *   y: number
 * }}
 */
let PointType;

/**
 * @enum {string}
 */
const DEACTIVATION_ACTIVATION_PAIRS = {
  mouseup: 'mousedown',
  pointerup: 'pointerdown',
  touchend: 'touchstart',
  keyup: 'keydown',
  blur: 'focus',
};

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */
class MDCRippleFoundation extends __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */] {
  static get cssClasses() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
  }

  static get strings() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
  }

  static get numbers() {
    return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
  }

  static get defaultAdapter() {
    return {
      browserSupportsCssVars: () => /* boolean - cached */ {},
      isUnbounded: () => /* boolean */ {},
      isSurfaceActive: () => /* boolean */ {},
      isSurfaceDisabled: () => /* boolean */ {},
      addClass: (/* className: string */) => {},
      removeClass: (/* className: string */) => {},
      registerInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      deregisterInteractionHandler: (/* evtType: string, handler: EventListener */) => {},
      registerResizeHandler: (/* handler: EventListener */) => {},
      deregisterResizeHandler: (/* handler: EventListener */) => {},
      updateCssVariable: (/* varName: string, value: string */) => {},
      computeBoundingRect: () => /* ClientRect */ {},
      getWindowPageOffset: () => /* {x: number, y: number} */ {},
    };
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   */
  get isSupported_() {
    return this.adapter_.browserSupportsCssVars();
  }

  constructor(adapter) {
    super(Object.assign(MDCRippleFoundation.defaultAdapter, adapter));

    /** @private {number} */
    this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    this.frame_ = /** @type {!ClientRect} */ ({width: 0, height: 0});

    /** @private {!ActivationStateType} */
    this.activationState_ = this.defaultActivationState_();

    /** @private {number} */
    this.xfDuration_ = 0;

    /** @private {number} */
    this.initialSize_ = 0;

    /** @private {number} */
    this.maxRadius_ = 0;

    /** @private {!Array<{ListenerInfoType}>} */
    this.listenerInfos_ = [
      {activate: 'touchstart', deactivate: 'touchend'},
      {activate: 'pointerdown', deactivate: 'pointerup'},
      {activate: 'mousedown', deactivate: 'mouseup'},
      {activate: 'keydown', deactivate: 'keyup'},
      {focus: 'focus', blur: 'blur'},
    ];

    /** @private {!ListenersType} */
    this.listeners_ = {
      activate: (e) => this.activate_(e),
      deactivate: (e) => this.deactivate_(e),
      focus: () => requestAnimationFrame(
        () => this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)
      ),
      blur: () => requestAnimationFrame(
        () => this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)
      ),
    };

    /** @private {!Function} */
    this.resizeHandler_ = () => this.layout();

    /** @private {!{left: number, top:number}} */
    this.unboundedCoords_ = {
      left: 0,
      top: 0,
    };

    /** @private {number} */
    this.fgScale_ = 0;

    /** @private {number} */
    this.activationTimer_ = 0;

    /** @private {number} */
    this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    this.activationTimerCallback_ = () => {
      this.activationAnimationHasEnded_ = true;
      this.runDeactivationUXLogicIfReady_();
    };
  }

  /**
   * @return {!ActivationStateType}
   */
  defaultActivationState_() {
    return {
      isActivated: false,
      hasDeactivationUXRun: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false,
      activationStartTime: 0,
      activationEvent: null,
      isProgrammatic: false,
    };
  }

  init() {
    if (!this.isSupported_) {
      return;
    }
    this.addEventListeners_();

    const {ROOT, UNBOUNDED} = MDCRippleFoundation.cssClasses;
    requestAnimationFrame(() => {
      this.adapter_.addClass(ROOT);
      if (this.adapter_.isUnbounded()) {
        this.adapter_.addClass(UNBOUNDED);
      }
      this.layoutInternal_();
    });
  }

  /** @private */
  addEventListeners_() {
    this.listenerInfos_.forEach((info) => {
      Object.keys(info).forEach((k) => {
        this.adapter_.registerInteractionHandler(info[k], this.listeners_[k]);
      });
    });
    this.adapter_.registerResizeHandler(this.resizeHandler_);
  }

  /**
   * @param {Event} e
   * @private
   */
  activate_(e) {
    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    const {activationState_: activationState} = this;
    if (activationState.isActivated) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = e === null;
    activationState.activationEvent = e;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : (
      e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown'
    );
    activationState.activationStartTime = Date.now();

    requestAnimationFrame(() => {
      // This needs to be wrapped in an rAF call b/c web browsers
      // report active states inconsistently when they're called within
      // event handling code:
      // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
      // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
      activationState.wasElementMadeActive = (e && e.type === 'keydown') ? this.adapter_.isSurfaceActive() : true;
      if (activationState.wasElementMadeActive) {
        this.animateActivation_();
      } else {
        // Reset activation state immediately if element was not made active.
        this.activationState_ = this.defaultActivationState_();
      }
    });
  }

  activate() {
    this.activate_(null);
  }

  /** @private */
  animateActivation_() {
    const {VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END} = MDCRippleFoundation.strings;
    const {
      BG_ACTIVE_FILL,
      FG_DEACTIVATION,
      FG_ACTIVATION,
    } = MDCRippleFoundation.cssClasses;
    const {DEACTIVATION_TIMEOUT_MS} = MDCRippleFoundation.numbers;

    let translateStart = '';
    let translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      const {startPoint, endPoint} = this.getFgTranslationCoordinates_();
      translateStart = `${startPoint.x}px, ${startPoint.y}px`;
      translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    // Cancel any ongoing activation/deactivation animations
    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION);

    // Force layout in order to re-trigger the animation.
    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(BG_ACTIVE_FILL);
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(() => this.activationTimerCallback_(), DEACTIVATION_TIMEOUT_MS);
  }

  /**
   * @private
   * @return {{startPoint: PointType, endPoint: PointType}}
   */
  getFgTranslationCoordinates_() {
    const {activationState_: activationState} = this;
    const {activationEvent, wasActivatedByPointer} = activationState;

    let startPoint;
    if (wasActivatedByPointer) {
      startPoint = Object(__WEBPACK_IMPORTED_MODULE_3__util__["getNormalizedEventCoords"])(
        /** @type {!Event} */ (activationEvent),
        this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect()
      );
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2,
      };
    }
    // Center the element around the start point.
    startPoint = {
      x: startPoint.x - (this.initialSize_ / 2),
      y: startPoint.y - (this.initialSize_ / 2),
    };

    const endPoint = {
      x: (this.frame_.width / 2) - (this.initialSize_ / 2),
      y: (this.frame_.height / 2) - (this.initialSize_ / 2),
    };

    return {startPoint, endPoint};
  }

  /** @private */
  runDeactivationUXLogicIfReady_() {
    const {FG_DEACTIVATION} = MDCRippleFoundation.cssClasses;
    const {hasDeactivationUXRun, isActivated} = this.activationState_;
    const activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(() => {
        this.adapter_.removeClass(FG_DEACTIVATION);
      }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].FG_DEACTIVATION_MS);
    }
  }

  /** @private */
  rmBoundedActivationClasses_() {
    const {BG_ACTIVE_FILL, FG_ACTIVATION} = MDCRippleFoundation.cssClasses;
    this.adapter_.removeClass(BG_ACTIVE_FILL);
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  }

  /**
   * @param {Event} e
   * @private
   */
  deactivate_(e) {
    const {activationState_: activationState} = this;
    // This can happen in scenarios such as when you have a keyup event that blurs the element.
    if (!activationState.isActivated) {
      return;
    }
    // Programmatic deactivation.
    if (activationState.isProgrammatic) {
      const evtObject = null;
      const state = /** @type {!ActivationStateType} */ (Object.assign({}, activationState));
      requestAnimationFrame(() => this.animateDeactivation_(evtObject, state));
      this.activationState_ = this.defaultActivationState_();
      return;
    }

    const actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
    const expectedActivationType = activationState.activationEvent.type;
    // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
    // Essentially, what we need to do here is decouple the deactivation UX from the actual
    // deactivation state itself. This way, touch/pointer events in sequence do not trample one
    // another.
    const needsDeactivationUX = actualActivationType === expectedActivationType;
    let needsActualDeactivation = needsDeactivationUX;
    if (activationState.wasActivatedByPointer) {
      needsActualDeactivation = e.type === 'mouseup';
    }

    const state = /** @type {!ActivationStateType} */ (Object.assign({}, activationState));
    requestAnimationFrame(() => {
      if (needsDeactivationUX) {
        this.activationState_.hasDeactivationUXRun = true;
        this.animateDeactivation_(e, state);
      }

      if (needsActualDeactivation) {
        this.activationState_ = this.defaultActivationState_();
      }
    });
  }

  deactivate() {
    this.deactivate_(null);
  }

  /**
   * @param {Event} e
   * @param {!ActivationStateType} options
   * @private
   */
  animateDeactivation_(e, {wasActivatedByPointer, wasElementMadeActive}) {
    const {BG_FOCUSED} = MDCRippleFoundation.cssClasses;
    if (wasActivatedByPointer || wasElementMadeActive) {
      // Remove class left over by element being focused
      this.adapter_.removeClass(BG_FOCUSED);
      this.runDeactivationUXLogicIfReady_();
    }
  }

  destroy() {
    if (!this.isSupported_) {
      return;
    }
    this.removeEventListeners_();

    const {ROOT, UNBOUNDED} = MDCRippleFoundation.cssClasses;
    requestAnimationFrame(() => {
      this.adapter_.removeClass(ROOT);
      this.adapter_.removeClass(UNBOUNDED);
      this.removeCssVars_();
    });
  }

  /** @private */
  removeEventListeners_() {
    this.listenerInfos_.forEach((info) => {
      Object.keys(info).forEach((k) => {
        this.adapter_.deregisterInteractionHandler(info[k], this.listeners_[k]);
      });
    });
    this.adapter_.deregisterResizeHandler(this.resizeHandler_);
  }

  /** @private */
  removeCssVars_() {
    const {strings} = MDCRippleFoundation;
    Object.keys(strings).forEach((k) => {
      if (k.indexOf('VAR_') === 0) {
        this.adapter_.updateCssVariable(strings[k], null);
      }
    });
  }

  layout() {
    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }
    this.layoutFrame_ = requestAnimationFrame(() => {
      this.layoutInternal_();
      this.layoutFrame_ = 0;
    });
  }

  /** @private */
  layoutInternal_() {
    this.frame_ = this.adapter_.computeBoundingRect();

    const maxDim = Math.max(this.frame_.height, this.frame_.width);
    const surfaceDiameter = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));

    // 60% of the largest dimension of the surface
    this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;

    // Diameter of the surface + 10px
    this.maxRadius_ = surfaceDiameter + MDCRippleFoundation.numbers.PADDING;
    this.fgScale_ = this.maxRadius_ / this.initialSize_;
    this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
    this.updateLayoutCssVars_();
  }

  /** @private */
  updateLayoutCssVars_() {
    const {
      VAR_SURFACE_WIDTH, VAR_SURFACE_HEIGHT, VAR_FG_SIZE,
      VAR_LEFT, VAR_TOP, VAR_FG_SCALE,
    } = MDCRippleFoundation.strings;

    this.adapter_.updateCssVariable(VAR_SURFACE_WIDTH, `${this.frame_.width}px`);
    this.adapter_.updateCssVariable(VAR_SURFACE_HEIGHT, `${this.frame_.height}px`);
    this.adapter_.updateCssVariable(VAR_FG_SIZE, `${this.initialSize_}px`);
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
        top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
      };

      this.adapter_.updateCssVariable(VAR_LEFT, `${this.unboundedCoords_.left}px`);
      this.adapter_.updateCssVariable(VAR_TOP, `${this.unboundedCoords_.top}px`);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MDCRippleFoundation;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  BG_ACTIVE_FILL: 'mdc-ripple-upgraded--background-active-fill',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
};
/* harmony export (immutable) */ __webpack_exports__["a"] = cssClasses;


const strings = {
  VAR_SURFACE_WIDTH: '--mdc-ripple-surface-width',
  VAR_SURFACE_HEIGHT: '--mdc-ripple-surface-height',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
};
/* harmony export (immutable) */ __webpack_exports__["c"] = strings;


const numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 300,
  FG_DEACTIVATION_MS: 83,
};
/* harmony export (immutable) */ __webpack_exports__["b"] = numbers;



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(11)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js??ref--1-2!./style.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js??ref--1-2!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(undefined);
// imports


// module
exports.push([module.i, "/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear; }\n  to {\n    opacity: 1; } }\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear; }\n  to {\n    opacity: 0; } }\n\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear; }\n  to {\n    opacity: 1; } }\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear; }\n  to {\n    opacity: 0; } }\n\n.mdc-button {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 2.25rem;\n  text-decoration: none;\n  text-transform: uppercase;\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  display: inline-block;\n  position: relative;\n  min-width: 88px;\n  height: 36px;\n  padding: 0 16px;\n  border: none;\n  border-radius: 4px;\n  box-sizing: border-box;\n  outline: none;\n  background: transparent;\n  text-align: center;\n  overflow: hidden;\n  vertical-align: middle;\n  user-select: none;\n  -webkit-appearance: none; }\n  .mdc-button:not(.mdc-ripple-upgraded):hover::before, .mdc-button:not(.mdc-ripple-upgraded):focus::before, .mdc-button:not(.mdc-ripple-upgraded):active::after {\n    transition-duration: 85ms;\n    opacity: .6; }\n  .mdc-button::before {\n    background-color: rgba(0, 0, 0, 0.06);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-button.mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    /* @alternate */\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-button.mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-button.mdc-ripple-upgraded--background-active-fill::before {\n    transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-button.mdc-ripple-upgraded--unbounded::before {\n    /* @alternate */\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    /* @alternate */\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    /* @alternate */\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-button::after {\n    background-color: rgba(0, 0, 0, 0.06);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-button.mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    /* @alternate */\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center;\n    opacity: 0; }\n  .mdc-button:not(.mdc-ripple-upgraded--unbounded)::after {\n    transform-origin: center center; }\n  .mdc-button.mdc-ripple-upgraded--unbounded::after {\n    /* @alternate */\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    /* @alternate */\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    /* @alternate */\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-button.mdc-ripple-upgraded--foreground-activation::after {\n    animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-button.mdc-ripple-upgraded--foreground-deactivation::after {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    animation: 83ms mdc-ripple-fg-opacity-out; }\n  .mdc-button:active {\n    outline: none; }\n  .mdc-button:hover {\n    cursor: pointer; }\n  .mdc-button::-moz-focus-inner {\n    padding: 0;\n    border: 0; }\n  .mdc-button:not(.mdc-ripple-upgraded) {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3); }\n  .mdc-button--theme-dark .mdc-button,\n  .mdc-theme--dark .mdc-button {\n    --mdc-ripple-surface-width: 0;\n    --mdc-ripple-surface-height: 0;\n    --mdc-ripple-fg-size: 0;\n    --mdc-ripple-left: 0;\n    --mdc-ripple-top: 0;\n    --mdc-ripple-fg-scale: 1;\n    --mdc-ripple-fg-translate-end: 0;\n    --mdc-ripple-fg-translate-start: 0;\n    will-change: transform, opacity;\n    -webkit-tap-highlight-color: transparent;\n    /* @alternate */\n    color: white;\n    color: var(--mdc-theme-text-primary-on-dark, white); }\n    .mdc-button--theme-dark .mdc-button:not(.mdc-ripple-upgraded):hover::before, .mdc-button--theme-dark .mdc-button:not(.mdc-ripple-upgraded):focus::before, .mdc-button--theme-dark .mdc-button:not(.mdc-ripple-upgraded):active::after,\n    .mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded):hover::before,\n    .mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded):focus::before,\n    .mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded):active::after {\n      transition-duration: 85ms;\n      opacity: .6; }\n    .mdc-button--theme-dark .mdc-button::before,\n    .mdc-theme--dark .mdc-button::before {\n      background-color: rgba(255, 255, 255, 0.16);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-button--theme-dark .mdc-button.mdc-ripple-upgraded::before,\n    .mdc-theme--dark .mdc-button.mdc-ripple-upgraded::before {\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      /* @alternate */\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button--theme-dark .mdc-button.mdc-ripple-upgraded--background-focused::before,\n    .mdc-theme--dark .mdc-button.mdc-ripple-upgraded--background-focused::before {\n      opacity: .99999; }\n    .mdc-button--theme-dark .mdc-button.mdc-ripple-upgraded--background-active-fill::before,\n    .mdc-theme--dark .mdc-button.mdc-ripple-upgraded--background-active-fill::before {\n      transition-duration: 120ms;\n      opacity: 1; }\n    .mdc-button--theme-dark .mdc-button.mdc-ripple-upgraded--unbounded::before,\n    .mdc-theme--dark .mdc-button.mdc-ripple-upgraded--unbounded::before {\n      /* @alternate */\n      top: calc(50% - 50%);\n      top: var(--mdc-ripple-top, calc(50% - 50%));\n      /* @alternate */\n      left: calc(50% - 50%);\n      left: var(--mdc-ripple-left, calc(50% - 50%));\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button--theme-dark .mdc-button::after,\n    .mdc-theme--dark .mdc-button::after {\n      background-color: rgba(255, 255, 255, 0.16);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-button--theme-dark .mdc-button.mdc-ripple-upgraded::after,\n    .mdc-theme--dark .mdc-button.mdc-ripple-upgraded::after {\n      top: 0;\n      left: 0;\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center;\n      opacity: 0; }\n    .mdc-button--theme-dark .mdc-button:not(.mdc-ripple-upgraded--unbounded)::after,\n    .mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded--unbounded)::after {\n      transform-origin: center center; }\n    .mdc-button--theme-dark .mdc-button.mdc-ripple-upgraded--unbounded::after,\n    .mdc-theme--dark .mdc-button.mdc-ripple-upgraded--unbounded::after {\n      /* @alternate */\n      top: 0;\n      top: var(--mdc-ripple-top, 0);\n      /* @alternate */\n      left: 0;\n      left: var(--mdc-ripple-left, 0);\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center; }\n    .mdc-button--theme-dark .mdc-button.mdc-ripple-upgraded--foreground-activation::after,\n    .mdc-theme--dark .mdc-button.mdc-ripple-upgraded--foreground-activation::after {\n      animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n    .mdc-button--theme-dark .mdc-button.mdc-ripple-upgraded--foreground-deactivation::after,\n    .mdc-theme--dark .mdc-button.mdc-ripple-upgraded--foreground-deactivation::after {\n      transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n      animation: 83ms mdc-ripple-fg-opacity-out; }\n    .mdc-button--theme-dark .mdc-button:not(.mdc-ripple-upgraded),\n    .mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded) {\n      -webkit-tap-highlight-color: rgba(255, 255, 255, 0.18); }\n\n.mdc-button--raised,\n.mdc-button--unelevated {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n  background-color: black; }\n  .mdc-button--raised:not(.mdc-ripple-upgraded):hover::before, .mdc-button--raised:not(.mdc-ripple-upgraded):focus::before, .mdc-button--raised:not(.mdc-ripple-upgraded):active::after,\n  .mdc-button--unelevated:not(.mdc-ripple-upgraded):hover::before,\n  .mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,\n  .mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after {\n    transition-duration: 85ms;\n    opacity: .6; }\n  .mdc-button--raised::before,\n  .mdc-button--unelevated::before {\n    background-color: rgba(255, 255, 255, 0.32);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-button--raised.mdc-ripple-upgraded::before,\n  .mdc-button--unelevated.mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    /* @alternate */\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-button--raised.mdc-ripple-upgraded--background-focused::before,\n  .mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-button--raised.mdc-ripple-upgraded--background-active-fill::before,\n  .mdc-button--unelevated.mdc-ripple-upgraded--background-active-fill::before {\n    transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-button--raised.mdc-ripple-upgraded--unbounded::before,\n  .mdc-button--unelevated.mdc-ripple-upgraded--unbounded::before {\n    /* @alternate */\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    /* @alternate */\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    /* @alternate */\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-button--raised::after,\n  .mdc-button--unelevated::after {\n    background-color: rgba(255, 255, 255, 0.32);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-button--raised.mdc-ripple-upgraded::after,\n  .mdc-button--unelevated.mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    /* @alternate */\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center;\n    opacity: 0; }\n  .mdc-button--raised:not(.mdc-ripple-upgraded--unbounded)::after,\n  .mdc-button--unelevated:not(.mdc-ripple-upgraded--unbounded)::after {\n    transform-origin: center center; }\n  .mdc-button--raised.mdc-ripple-upgraded--unbounded::after,\n  .mdc-button--unelevated.mdc-ripple-upgraded--unbounded::after {\n    /* @alternate */\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    /* @alternate */\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    /* @alternate */\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-button--raised.mdc-ripple-upgraded--foreground-activation::after,\n  .mdc-button--unelevated.mdc-ripple-upgraded--foreground-activation::after {\n    animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-button--raised.mdc-ripple-upgraded--foreground-deactivation::after,\n  .mdc-button--unelevated.mdc-ripple-upgraded--foreground-deactivation::after {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    animation: 83ms mdc-ripple-fg-opacity-out; }\n  .mdc-button--theme-dark .mdc-button--raised,\n  .mdc-theme--dark .mdc-button--raised, .mdc-button--theme-dark\n  .mdc-button--unelevated,\n  .mdc-theme--dark\n  .mdc-button--unelevated {\n    --mdc-ripple-surface-width: 0;\n    --mdc-ripple-surface-height: 0;\n    --mdc-ripple-fg-size: 0;\n    --mdc-ripple-left: 0;\n    --mdc-ripple-top: 0;\n    --mdc-ripple-fg-scale: 1;\n    --mdc-ripple-fg-translate-end: 0;\n    --mdc-ripple-fg-translate-start: 0;\n    will-change: transform, opacity;\n    -webkit-tap-highlight-color: transparent;\n    /* @alternate */\n    color: rgba(0, 0, 0, 0.87);\n    color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n    background-color: white; }\n    .mdc-button--theme-dark .mdc-button--raised:not(.mdc-ripple-upgraded):hover::before, .mdc-button--theme-dark .mdc-button--raised:not(.mdc-ripple-upgraded):focus::before, .mdc-button--theme-dark .mdc-button--raised:not(.mdc-ripple-upgraded):active::after,\n    .mdc-theme--dark .mdc-button--raised:not(.mdc-ripple-upgraded):hover::before,\n    .mdc-theme--dark .mdc-button--raised:not(.mdc-ripple-upgraded):focus::before,\n    .mdc-theme--dark .mdc-button--raised:not(.mdc-ripple-upgraded):active::after, .mdc-button--theme-dark\n    .mdc-button--unelevated:not(.mdc-ripple-upgraded):hover::before, .mdc-button--theme-dark\n    .mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before, .mdc-button--theme-dark\n    .mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after,\n    .mdc-theme--dark\n    .mdc-button--unelevated:not(.mdc-ripple-upgraded):hover::before,\n    .mdc-theme--dark\n    .mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,\n    .mdc-theme--dark\n    .mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after {\n      transition-duration: 85ms;\n      opacity: .6; }\n    .mdc-button--theme-dark .mdc-button--raised::before,\n    .mdc-theme--dark .mdc-button--raised::before, .mdc-button--theme-dark\n    .mdc-button--unelevated::before,\n    .mdc-theme--dark\n    .mdc-button--unelevated::before {\n      background-color: rgba(0, 0, 0, 0.32);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-button--theme-dark .mdc-button--raised.mdc-ripple-upgraded::before,\n    .mdc-theme--dark .mdc-button--raised.mdc-ripple-upgraded::before, .mdc-button--theme-dark\n    .mdc-button--unelevated.mdc-ripple-upgraded::before,\n    .mdc-theme--dark\n    .mdc-button--unelevated.mdc-ripple-upgraded::before {\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      /* @alternate */\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button--theme-dark .mdc-button--raised.mdc-ripple-upgraded--background-focused::before,\n    .mdc-theme--dark .mdc-button--raised.mdc-ripple-upgraded--background-focused::before, .mdc-button--theme-dark\n    .mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before,\n    .mdc-theme--dark\n    .mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before {\n      opacity: .99999; }\n    .mdc-button--theme-dark .mdc-button--raised.mdc-ripple-upgraded--background-active-fill::before,\n    .mdc-theme--dark .mdc-button--raised.mdc-ripple-upgraded--background-active-fill::before, .mdc-button--theme-dark\n    .mdc-button--unelevated.mdc-ripple-upgraded--background-active-fill::before,\n    .mdc-theme--dark\n    .mdc-button--unelevated.mdc-ripple-upgraded--background-active-fill::before {\n      transition-duration: 120ms;\n      opacity: 1; }\n    .mdc-button--theme-dark .mdc-button--raised.mdc-ripple-upgraded--unbounded::before,\n    .mdc-theme--dark .mdc-button--raised.mdc-ripple-upgraded--unbounded::before, .mdc-button--theme-dark\n    .mdc-button--unelevated.mdc-ripple-upgraded--unbounded::before,\n    .mdc-theme--dark\n    .mdc-button--unelevated.mdc-ripple-upgraded--unbounded::before {\n      /* @alternate */\n      top: calc(50% - 50%);\n      top: var(--mdc-ripple-top, calc(50% - 50%));\n      /* @alternate */\n      left: calc(50% - 50%);\n      left: var(--mdc-ripple-left, calc(50% - 50%));\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button--theme-dark .mdc-button--raised::after,\n    .mdc-theme--dark .mdc-button--raised::after, .mdc-button--theme-dark\n    .mdc-button--unelevated::after,\n    .mdc-theme--dark\n    .mdc-button--unelevated::after {\n      background-color: rgba(0, 0, 0, 0.32);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-button--theme-dark .mdc-button--raised.mdc-ripple-upgraded::after,\n    .mdc-theme--dark .mdc-button--raised.mdc-ripple-upgraded::after, .mdc-button--theme-dark\n    .mdc-button--unelevated.mdc-ripple-upgraded::after,\n    .mdc-theme--dark\n    .mdc-button--unelevated.mdc-ripple-upgraded::after {\n      top: 0;\n      left: 0;\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center;\n      opacity: 0; }\n    .mdc-button--theme-dark .mdc-button--raised:not(.mdc-ripple-upgraded--unbounded)::after,\n    .mdc-theme--dark .mdc-button--raised:not(.mdc-ripple-upgraded--unbounded)::after, .mdc-button--theme-dark\n    .mdc-button--unelevated:not(.mdc-ripple-upgraded--unbounded)::after,\n    .mdc-theme--dark\n    .mdc-button--unelevated:not(.mdc-ripple-upgraded--unbounded)::after {\n      transform-origin: center center; }\n    .mdc-button--theme-dark .mdc-button--raised.mdc-ripple-upgraded--unbounded::after,\n    .mdc-theme--dark .mdc-button--raised.mdc-ripple-upgraded--unbounded::after, .mdc-button--theme-dark\n    .mdc-button--unelevated.mdc-ripple-upgraded--unbounded::after,\n    .mdc-theme--dark\n    .mdc-button--unelevated.mdc-ripple-upgraded--unbounded::after {\n      /* @alternate */\n      top: 0;\n      top: var(--mdc-ripple-top, 0);\n      /* @alternate */\n      left: 0;\n      left: var(--mdc-ripple-left, 0);\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center; }\n    .mdc-button--theme-dark .mdc-button--raised.mdc-ripple-upgraded--foreground-activation::after,\n    .mdc-theme--dark .mdc-button--raised.mdc-ripple-upgraded--foreground-activation::after, .mdc-button--theme-dark\n    .mdc-button--unelevated.mdc-ripple-upgraded--foreground-activation::after,\n    .mdc-theme--dark\n    .mdc-button--unelevated.mdc-ripple-upgraded--foreground-activation::after {\n      animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n    .mdc-button--theme-dark .mdc-button--raised.mdc-ripple-upgraded--foreground-deactivation::after,\n    .mdc-theme--dark .mdc-button--raised.mdc-ripple-upgraded--foreground-deactivation::after, .mdc-button--theme-dark\n    .mdc-button--unelevated.mdc-ripple-upgraded--foreground-deactivation::after,\n    .mdc-theme--dark\n    .mdc-button--unelevated.mdc-ripple-upgraded--foreground-deactivation::after {\n      transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n      animation: 83ms mdc-ripple-fg-opacity-out; }\n    .mdc-button--theme-dark .mdc-button--raised:not(.mdc-ripple-upgraded),\n    .mdc-theme--dark .mdc-button--raised:not(.mdc-ripple-upgraded), .mdc-button--theme-dark\n    .mdc-button--unelevated:not(.mdc-ripple-upgraded),\n    .mdc-theme--dark\n    .mdc-button--unelevated:not(.mdc-ripple-upgraded) {\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0.18); }\n\n.mdc-button--raised {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: box-shadow; }\n  .mdc-button--raised:hover, .mdc-button--raised:focus {\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n  .mdc-button--raised:active {\n    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mdc-button--compact {\n  padding: 0 8px; }\n\n.mdc-button--dense {\n  height: 32px;\n  font-size: .8125rem;\n  line-height: 32px; }\n\n.mdc-button--primary {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  /* @alternate */\n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5); }\n  .mdc-button--primary:not(.mdc-ripple-upgraded):hover::before, .mdc-button--primary:not(.mdc-ripple-upgraded):focus::before, .mdc-button--primary:not(.mdc-ripple-upgraded):active::after {\n    transition-duration: 85ms;\n    opacity: .6; }\n  .mdc-button--primary::before {\n    background-color: rgba(63, 81, 181, 0.16);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-button--primary.mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    /* @alternate */\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-button--primary.mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-button--primary.mdc-ripple-upgraded--background-active-fill::before {\n    transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-button--primary.mdc-ripple-upgraded--unbounded::before {\n    /* @alternate */\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    /* @alternate */\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    /* @alternate */\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-button--primary::after {\n    background-color: rgba(63, 81, 181, 0.16);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-button--primary.mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    /* @alternate */\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center;\n    opacity: 0; }\n  .mdc-button--primary:not(.mdc-ripple-upgraded--unbounded)::after {\n    transform-origin: center center; }\n  .mdc-button--primary.mdc-ripple-upgraded--unbounded::after {\n    /* @alternate */\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    /* @alternate */\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    /* @alternate */\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-button--primary.mdc-ripple-upgraded--foreground-activation::after {\n    animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-button--primary.mdc-ripple-upgraded--foreground-deactivation::after {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    animation: 83ms mdc-ripple-fg-opacity-out; }\n  .mdc-button--theme-dark .mdc-button--primary,\n  .mdc-theme--dark .mdc-button--primary {\n    --mdc-ripple-surface-width: 0;\n    --mdc-ripple-surface-height: 0;\n    --mdc-ripple-fg-size: 0;\n    --mdc-ripple-left: 0;\n    --mdc-ripple-top: 0;\n    --mdc-ripple-fg-scale: 1;\n    --mdc-ripple-fg-translate-end: 0;\n    --mdc-ripple-fg-translate-start: 0;\n    will-change: transform, opacity;\n    -webkit-tap-highlight-color: transparent;\n    /* @alternate */\n    color: #3f51b5;\n    color: var(--mdc-theme-primary, #3f51b5); }\n    .mdc-button--theme-dark .mdc-button--primary:not(.mdc-ripple-upgraded):hover::before, .mdc-button--theme-dark .mdc-button--primary:not(.mdc-ripple-upgraded):focus::before, .mdc-button--theme-dark .mdc-button--primary:not(.mdc-ripple-upgraded):active::after,\n    .mdc-theme--dark .mdc-button--primary:not(.mdc-ripple-upgraded):hover::before,\n    .mdc-theme--dark .mdc-button--primary:not(.mdc-ripple-upgraded):focus::before,\n    .mdc-theme--dark .mdc-button--primary:not(.mdc-ripple-upgraded):active::after {\n      transition-duration: 85ms;\n      opacity: .6; }\n    .mdc-button--theme-dark .mdc-button--primary::before,\n    .mdc-theme--dark .mdc-button--primary::before {\n      background-color: rgba(63, 81, 181, 0.16);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-button--theme-dark .mdc-button--primary.mdc-ripple-upgraded::before,\n    .mdc-theme--dark .mdc-button--primary.mdc-ripple-upgraded::before {\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      /* @alternate */\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button--theme-dark .mdc-button--primary.mdc-ripple-upgraded--background-focused::before,\n    .mdc-theme--dark .mdc-button--primary.mdc-ripple-upgraded--background-focused::before {\n      opacity: .99999; }\n    .mdc-button--theme-dark .mdc-button--primary.mdc-ripple-upgraded--background-active-fill::before,\n    .mdc-theme--dark .mdc-button--primary.mdc-ripple-upgraded--background-active-fill::before {\n      transition-duration: 120ms;\n      opacity: 1; }\n    .mdc-button--theme-dark .mdc-button--primary.mdc-ripple-upgraded--unbounded::before,\n    .mdc-theme--dark .mdc-button--primary.mdc-ripple-upgraded--unbounded::before {\n      /* @alternate */\n      top: calc(50% - 50%);\n      top: var(--mdc-ripple-top, calc(50% - 50%));\n      /* @alternate */\n      left: calc(50% - 50%);\n      left: var(--mdc-ripple-left, calc(50% - 50%));\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button--theme-dark .mdc-button--primary::after,\n    .mdc-theme--dark .mdc-button--primary::after {\n      background-color: rgba(63, 81, 181, 0.16);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-button--theme-dark .mdc-button--primary.mdc-ripple-upgraded::after,\n    .mdc-theme--dark .mdc-button--primary.mdc-ripple-upgraded::after {\n      top: 0;\n      left: 0;\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center;\n      opacity: 0; }\n    .mdc-button--theme-dark .mdc-button--primary:not(.mdc-ripple-upgraded--unbounded)::after,\n    .mdc-theme--dark .mdc-button--primary:not(.mdc-ripple-upgraded--unbounded)::after {\n      transform-origin: center center; }\n    .mdc-button--theme-dark .mdc-button--primary.mdc-ripple-upgraded--unbounded::after,\n    .mdc-theme--dark .mdc-button--primary.mdc-ripple-upgraded--unbounded::after {\n      /* @alternate */\n      top: 0;\n      top: var(--mdc-ripple-top, 0);\n      /* @alternate */\n      left: 0;\n      left: var(--mdc-ripple-left, 0);\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center; }\n    .mdc-button--theme-dark .mdc-button--primary.mdc-ripple-upgraded--foreground-activation::after,\n    .mdc-theme--dark .mdc-button--primary.mdc-ripple-upgraded--foreground-activation::after {\n      animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n    .mdc-button--theme-dark .mdc-button--primary.mdc-ripple-upgraded--foreground-deactivation::after,\n    .mdc-theme--dark .mdc-button--primary.mdc-ripple-upgraded--foreground-deactivation::after {\n      transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n      animation: 83ms mdc-ripple-fg-opacity-out; }\n  .mdc-button--primary.mdc-button--raised, .mdc-button--primary.mdc-button--unelevated {\n    --mdc-ripple-surface-width: 0;\n    --mdc-ripple-surface-height: 0;\n    --mdc-ripple-fg-size: 0;\n    --mdc-ripple-left: 0;\n    --mdc-ripple-top: 0;\n    --mdc-ripple-fg-scale: 1;\n    --mdc-ripple-fg-translate-end: 0;\n    --mdc-ripple-fg-translate-start: 0;\n    will-change: transform, opacity;\n    -webkit-tap-highlight-color: transparent;\n    /* @alternate */\n    background-color: #3f51b5;\n    background-color: var(--mdc-theme-primary, #3f51b5);\n    /* @alternate */\n    color: white;\n    color: var(--mdc-theme-text-primary-on-primary, white); }\n    .mdc-button--primary.mdc-button--raised:not(.mdc-ripple-upgraded):hover::before, .mdc-button--primary.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before, .mdc-button--primary.mdc-button--raised:not(.mdc-ripple-upgraded):active::after, .mdc-button--primary.mdc-button--unelevated:not(.mdc-ripple-upgraded):hover::before, .mdc-button--primary.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before, .mdc-button--primary.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after {\n      transition-duration: 85ms;\n      opacity: .6; }\n    .mdc-button--primary.mdc-button--raised::before, .mdc-button--primary.mdc-button--unelevated::before {\n      background-color: rgba(255, 255, 255, 0.32);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-button--primary.mdc-button--raised.mdc-ripple-upgraded::before, .mdc-button--primary.mdc-button--unelevated.mdc-ripple-upgraded::before {\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      /* @alternate */\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button--primary.mdc-button--raised.mdc-ripple-upgraded--background-focused::before, .mdc-button--primary.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before {\n      opacity: .99999; }\n    .mdc-button--primary.mdc-button--raised.mdc-ripple-upgraded--background-active-fill::before, .mdc-button--primary.mdc-button--unelevated.mdc-ripple-upgraded--background-active-fill::before {\n      transition-duration: 120ms;\n      opacity: 1; }\n    .mdc-button--primary.mdc-button--raised.mdc-ripple-upgraded--unbounded::before, .mdc-button--primary.mdc-button--unelevated.mdc-ripple-upgraded--unbounded::before {\n      /* @alternate */\n      top: calc(50% - 50%);\n      top: var(--mdc-ripple-top, calc(50% - 50%));\n      /* @alternate */\n      left: calc(50% - 50%);\n      left: var(--mdc-ripple-left, calc(50% - 50%));\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button--primary.mdc-button--raised::after, .mdc-button--primary.mdc-button--unelevated::after {\n      background-color: rgba(255, 255, 255, 0.32);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-button--primary.mdc-button--raised.mdc-ripple-upgraded::after, .mdc-button--primary.mdc-button--unelevated.mdc-ripple-upgraded::after {\n      top: 0;\n      left: 0;\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center;\n      opacity: 0; }\n    .mdc-button--primary.mdc-button--raised:not(.mdc-ripple-upgraded--unbounded)::after, .mdc-button--primary.mdc-button--unelevated:not(.mdc-ripple-upgraded--unbounded)::after {\n      transform-origin: center center; }\n    .mdc-button--primary.mdc-button--raised.mdc-ripple-upgraded--unbounded::after, .mdc-button--primary.mdc-button--unelevated.mdc-ripple-upgraded--unbounded::after {\n      /* @alternate */\n      top: 0;\n      top: var(--mdc-ripple-top, 0);\n      /* @alternate */\n      left: 0;\n      left: var(--mdc-ripple-left, 0);\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center; }\n    .mdc-button--primary.mdc-button--raised.mdc-ripple-upgraded--foreground-activation::after, .mdc-button--primary.mdc-button--unelevated.mdc-ripple-upgraded--foreground-activation::after {\n      animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n    .mdc-button--primary.mdc-button--raised.mdc-ripple-upgraded--foreground-deactivation::after, .mdc-button--primary.mdc-button--unelevated.mdc-ripple-upgraded--foreground-deactivation::after {\n      transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n      animation: 83ms mdc-ripple-fg-opacity-out; }\n\n.mdc-button--accent {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  /* @alternate */\n  color: #ff4081;\n  color: var(--mdc-theme-secondary, #ff4081); }\n  .mdc-button--accent:not(.mdc-ripple-upgraded):hover::before, .mdc-button--accent:not(.mdc-ripple-upgraded):focus::before, .mdc-button--accent:not(.mdc-ripple-upgraded):active::after {\n    transition-duration: 85ms;\n    opacity: .6; }\n  .mdc-button--accent::before {\n    background-color: rgba(255, 64, 129, 0.16);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-button--accent.mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    /* @alternate */\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-button--accent.mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-button--accent.mdc-ripple-upgraded--background-active-fill::before {\n    transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-button--accent.mdc-ripple-upgraded--unbounded::before {\n    /* @alternate */\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    /* @alternate */\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    /* @alternate */\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-button--accent::after {\n    background-color: rgba(255, 64, 129, 0.16);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-button--accent.mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    /* @alternate */\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center;\n    opacity: 0; }\n  .mdc-button--accent:not(.mdc-ripple-upgraded--unbounded)::after {\n    transform-origin: center center; }\n  .mdc-button--accent.mdc-ripple-upgraded--unbounded::after {\n    /* @alternate */\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    /* @alternate */\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    /* @alternate */\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    /* @alternate */\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-button--accent.mdc-ripple-upgraded--foreground-activation::after {\n    animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-button--accent.mdc-ripple-upgraded--foreground-deactivation::after {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    animation: 83ms mdc-ripple-fg-opacity-out; }\n  .mdc-button--theme-dark .mdc-button--accent,\n  .mdc-theme--dark .mdc-button--accent {\n    --mdc-ripple-surface-width: 0;\n    --mdc-ripple-surface-height: 0;\n    --mdc-ripple-fg-size: 0;\n    --mdc-ripple-left: 0;\n    --mdc-ripple-top: 0;\n    --mdc-ripple-fg-scale: 1;\n    --mdc-ripple-fg-translate-end: 0;\n    --mdc-ripple-fg-translate-start: 0;\n    will-change: transform, opacity;\n    -webkit-tap-highlight-color: transparent;\n    /* @alternate */\n    color: #ff4081;\n    color: var(--mdc-theme-secondary, #ff4081); }\n    .mdc-button--theme-dark .mdc-button--accent:not(.mdc-ripple-upgraded):hover::before, .mdc-button--theme-dark .mdc-button--accent:not(.mdc-ripple-upgraded):focus::before, .mdc-button--theme-dark .mdc-button--accent:not(.mdc-ripple-upgraded):active::after,\n    .mdc-theme--dark .mdc-button--accent:not(.mdc-ripple-upgraded):hover::before,\n    .mdc-theme--dark .mdc-button--accent:not(.mdc-ripple-upgraded):focus::before,\n    .mdc-theme--dark .mdc-button--accent:not(.mdc-ripple-upgraded):active::after {\n      transition-duration: 85ms;\n      opacity: .6; }\n    .mdc-button--theme-dark .mdc-button--accent::before,\n    .mdc-theme--dark .mdc-button--accent::before {\n      background-color: rgba(255, 64, 129, 0.16);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-button--theme-dark .mdc-button--accent.mdc-ripple-upgraded::before,\n    .mdc-theme--dark .mdc-button--accent.mdc-ripple-upgraded::before {\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      /* @alternate */\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button--theme-dark .mdc-button--accent.mdc-ripple-upgraded--background-focused::before,\n    .mdc-theme--dark .mdc-button--accent.mdc-ripple-upgraded--background-focused::before {\n      opacity: .99999; }\n    .mdc-button--theme-dark .mdc-button--accent.mdc-ripple-upgraded--background-active-fill::before,\n    .mdc-theme--dark .mdc-button--accent.mdc-ripple-upgraded--background-active-fill::before {\n      transition-duration: 120ms;\n      opacity: 1; }\n    .mdc-button--theme-dark .mdc-button--accent.mdc-ripple-upgraded--unbounded::before,\n    .mdc-theme--dark .mdc-button--accent.mdc-ripple-upgraded--unbounded::before {\n      /* @alternate */\n      top: calc(50% - 50%);\n      top: var(--mdc-ripple-top, calc(50% - 50%));\n      /* @alternate */\n      left: calc(50% - 50%);\n      left: var(--mdc-ripple-left, calc(50% - 50%));\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button--theme-dark .mdc-button--accent::after,\n    .mdc-theme--dark .mdc-button--accent::after {\n      background-color: rgba(255, 64, 129, 0.16);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-button--theme-dark .mdc-button--accent.mdc-ripple-upgraded::after,\n    .mdc-theme--dark .mdc-button--accent.mdc-ripple-upgraded::after {\n      top: 0;\n      left: 0;\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center;\n      opacity: 0; }\n    .mdc-button--theme-dark .mdc-button--accent:not(.mdc-ripple-upgraded--unbounded)::after,\n    .mdc-theme--dark .mdc-button--accent:not(.mdc-ripple-upgraded--unbounded)::after {\n      transform-origin: center center; }\n    .mdc-button--theme-dark .mdc-button--accent.mdc-ripple-upgraded--unbounded::after,\n    .mdc-theme--dark .mdc-button--accent.mdc-ripple-upgraded--unbounded::after {\n      /* @alternate */\n      top: 0;\n      top: var(--mdc-ripple-top, 0);\n      /* @alternate */\n      left: 0;\n      left: var(--mdc-ripple-left, 0);\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center; }\n    .mdc-button--theme-dark .mdc-button--accent.mdc-ripple-upgraded--foreground-activation::after,\n    .mdc-theme--dark .mdc-button--accent.mdc-ripple-upgraded--foreground-activation::after {\n      animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n    .mdc-button--theme-dark .mdc-button--accent.mdc-ripple-upgraded--foreground-deactivation::after,\n    .mdc-theme--dark .mdc-button--accent.mdc-ripple-upgraded--foreground-deactivation::after {\n      transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n      animation: 83ms mdc-ripple-fg-opacity-out; }\n  .mdc-button--accent.mdc-button--raised, .mdc-button--accent.mdc-button--unelevated {\n    --mdc-ripple-surface-width: 0;\n    --mdc-ripple-surface-height: 0;\n    --mdc-ripple-fg-size: 0;\n    --mdc-ripple-left: 0;\n    --mdc-ripple-top: 0;\n    --mdc-ripple-fg-scale: 1;\n    --mdc-ripple-fg-translate-end: 0;\n    --mdc-ripple-fg-translate-start: 0;\n    will-change: transform, opacity;\n    -webkit-tap-highlight-color: transparent;\n    /* @alternate */\n    background-color: #ff4081;\n    background-color: var(--mdc-theme-secondary, #ff4081);\n    /* @alternate */\n    color: white;\n    color: var(--mdc-theme-text-primary-on-secondary, white); }\n    .mdc-button--accent.mdc-button--raised:not(.mdc-ripple-upgraded):hover::before, .mdc-button--accent.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before, .mdc-button--accent.mdc-button--raised:not(.mdc-ripple-upgraded):active::after, .mdc-button--accent.mdc-button--unelevated:not(.mdc-ripple-upgraded):hover::before, .mdc-button--accent.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before, .mdc-button--accent.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after {\n      transition-duration: 85ms;\n      opacity: .6; }\n    .mdc-button--accent.mdc-button--raised::before, .mdc-button--accent.mdc-button--unelevated::before {\n      background-color: rgba(255, 255, 255, 0.32);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-button--accent.mdc-button--raised.mdc-ripple-upgraded::before, .mdc-button--accent.mdc-button--unelevated.mdc-ripple-upgraded::before {\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      /* @alternate */\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button--accent.mdc-button--raised.mdc-ripple-upgraded--background-focused::before, .mdc-button--accent.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before {\n      opacity: .99999; }\n    .mdc-button--accent.mdc-button--raised.mdc-ripple-upgraded--background-active-fill::before, .mdc-button--accent.mdc-button--unelevated.mdc-ripple-upgraded--background-active-fill::before {\n      transition-duration: 120ms;\n      opacity: 1; }\n    .mdc-button--accent.mdc-button--raised.mdc-ripple-upgraded--unbounded::before, .mdc-button--accent.mdc-button--unelevated.mdc-ripple-upgraded--unbounded::before {\n      /* @alternate */\n      top: calc(50% - 50%);\n      top: var(--mdc-ripple-top, calc(50% - 50%));\n      /* @alternate */\n      left: calc(50% - 50%);\n      left: var(--mdc-ripple-left, calc(50% - 50%));\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button--accent.mdc-button--raised::after, .mdc-button--accent.mdc-button--unelevated::after {\n      background-color: rgba(255, 255, 255, 0.32);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-button--accent.mdc-button--raised.mdc-ripple-upgraded::after, .mdc-button--accent.mdc-button--unelevated.mdc-ripple-upgraded::after {\n      top: 0;\n      left: 0;\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center;\n      opacity: 0; }\n    .mdc-button--accent.mdc-button--raised:not(.mdc-ripple-upgraded--unbounded)::after, .mdc-button--accent.mdc-button--unelevated:not(.mdc-ripple-upgraded--unbounded)::after {\n      transform-origin: center center; }\n    .mdc-button--accent.mdc-button--raised.mdc-ripple-upgraded--unbounded::after, .mdc-button--accent.mdc-button--unelevated.mdc-ripple-upgraded--unbounded::after {\n      /* @alternate */\n      top: 0;\n      top: var(--mdc-ripple-top, 0);\n      /* @alternate */\n      left: 0;\n      left: var(--mdc-ripple-left, 0);\n      /* @alternate */\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      /* @alternate */\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center; }\n    .mdc-button--accent.mdc-button--raised.mdc-ripple-upgraded--foreground-activation::after, .mdc-button--accent.mdc-button--unelevated.mdc-ripple-upgraded--foreground-activation::after {\n      animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n    .mdc-button--accent.mdc-button--raised.mdc-ripple-upgraded--foreground-deactivation::after, .mdc-button--accent.mdc-button--unelevated.mdc-ripple-upgraded--foreground-deactivation::after {\n      transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n      animation: 83ms mdc-ripple-fg-opacity-out; }\n\nfieldset:disabled .mdc-button, .mdc-button:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  cursor: default;\n  pointer-events: none; }\n  .mdc-button--theme-dark fieldset:disabled .mdc-button,\n  .mdc-theme--dark fieldset:disabled .mdc-button, .mdc-button--theme-dark .mdc-button:disabled,\n  .mdc-theme--dark .mdc-button:disabled {\n    /* @alternate */\n    color: rgba(255, 255, 255, 0.5);\n    color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5)); }\n\nfieldset:disabled .mdc-button--raised, .mdc-button--raised:disabled, fieldset:disabled\n.mdc-button--unelevated,\n.mdc-button--unelevated:disabled {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n  /* @alternate */\n  color: white;\n  color: var(--mdc-theme-text-primary-on-dark, white);\n  background-color: rgba(0, 0, 0, 0.15); }\n  .mdc-button--theme-dark fieldset:disabled .mdc-button--raised,\n  .mdc-theme--dark fieldset:disabled .mdc-button--raised, .mdc-button--theme-dark .mdc-button--raised:disabled,\n  .mdc-theme--dark .mdc-button--raised:disabled, .mdc-button--theme-dark fieldset:disabled\n  .mdc-button--unelevated,\n  .mdc-theme--dark fieldset:disabled\n  .mdc-button--unelevated, .mdc-button--theme-dark\n  .mdc-button--unelevated:disabled,\n  .mdc-theme--dark\n  .mdc-button--unelevated:disabled {\n    /* @alternate */\n    color: rgba(255, 255, 255, 0.5);\n    color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n    background-color: rgba(255, 255, 255, 0.15); }\n\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear; }\n  to {\n    opacity: 1; } }\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear; }\n  to {\n    opacity: 0; } }\n\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear; }\n  to {\n    opacity: 1; } }\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear; }\n  to {\n    opacity: 0; } }\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-typography {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased; }\n\n.mdc-typography--display4 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 7rem;\n  font-weight: 300;\n  letter-spacing: -0.04em;\n  line-height: 7rem;\n  text-decoration: inherit;\n  text-transform: inherit; }\n\n.mdc-typography--adjust-margin.mdc-typography--display4 {\n  margin: -1rem 0 3.5rem -0.085em; }\n\n.mdc-typography--display3 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 3.5rem;\n  font-weight: 400;\n  letter-spacing: -0.02em;\n  line-height: 3.5rem;\n  text-decoration: inherit;\n  text-transform: inherit; }\n\n.mdc-typography--adjust-margin.mdc-typography--display3 {\n  margin: -8px 0 64px -0.07em; }\n\n.mdc-typography--display2 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 2.813rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 3rem;\n  text-decoration: inherit;\n  text-transform: inherit; }\n\n.mdc-typography--adjust-margin.mdc-typography--display2 {\n  margin: -0.5rem 0 4rem -0.07em; }\n\n.mdc-typography--display1 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 2.125rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 2.5rem;\n  text-decoration: inherit;\n  text-transform: inherit; }\n\n.mdc-typography--adjust-margin.mdc-typography--display1 {\n  margin: -0.5rem 0 4rem -0.07em; }\n\n.mdc-typography--headline {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.5rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit; }\n\n.mdc-typography--adjust-margin.mdc-typography--headline {\n  margin: -0.5rem 0 1rem -0.06em; }\n\n.mdc-typography--title {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  line-height: 2rem;\n  text-decoration: inherit;\n  text-transform: inherit; }\n\n.mdc-typography--adjust-margin.mdc-typography--title {\n  margin: -0.5rem 0 1rem -0.05em; }\n\n.mdc-typography--subheading2 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem;\n  text-decoration: inherit;\n  text-transform: inherit; }\n\n.mdc-typography--adjust-margin.mdc-typography--subheading2 {\n  margin: -0.5rem 0 1rem -0.06em; }\n\n.mdc-typography--subheading1 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.938rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit; }\n\n.mdc-typography--adjust-margin.mdc-typography--subheading1 {\n  margin: -0.313rem 0 0.813rem -0.06em; }\n\n.mdc-typography--body2 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  text-decoration: inherit;\n  text-transform: inherit; }\n\n.mdc-typography--adjust-margin.mdc-typography--body2 {\n  margin: -0.25rem 0 0.75rem 0; }\n\n.mdc-typography--body1 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit; }\n\n.mdc-typography--adjust-margin.mdc-typography--body1 {\n  margin: -0.25rem 0 0.75rem 0; }\n\n.mdc-typography--caption {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.75rem;\n  font-weight: 400;\n  letter-spacing: 0.08em;\n  line-height: 1.25rem;\n  text-decoration: inherit;\n  text-transform: inherit; }\n\n.mdc-typography--adjust-margin.mdc-typography--caption {\n  margin: -0.5rem 0 1rem -0.04em; }\n\n.mdc-typography--button {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 2.25rem;\n  text-decoration: none;\n  text-transform: uppercase; }\n\n.mdc-typography--adjust-margin.mdc-typography--button {\n  margin: inherit; }\n\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n:root {\n  --mdc-theme-primary: #3f51b5;\n  --mdc-theme-primary-light: #6f7dcd;\n  --mdc-theme-primary-dark: #2d3980;\n  --mdc-theme-secondary: #ff4081;\n  --mdc-theme-secondary-light: #ff87b0;\n  --mdc-theme-secondary-dark: #f80054;\n  --mdc-theme-background: #fff;\n  --mdc-theme-text-primary-on-primary: white;\n  --mdc-theme-text-secondary-on-primary: rgba(255, 255, 255, 0.7);\n  --mdc-theme-text-hint-on-primary: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-disabled-on-primary: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-icon-on-primary: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-primary-on-primary-light: white;\n  --mdc-theme-text-secondary-on-primary-light: rgba(255, 255, 255, 0.7);\n  --mdc-theme-text-hint-on-primary-light: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-disabled-on-primary-light: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-icon-on-primary-light: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-primary-on-primary-dark: white;\n  --mdc-theme-text-secondary-on-primary-dark: rgba(255, 255, 255, 0.7);\n  --mdc-theme-text-hint-on-primary-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-disabled-on-primary-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-icon-on-primary-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-primary-on-secondary: white;\n  --mdc-theme-text-secondary-on-secondary: rgba(255, 255, 255, 0.7);\n  --mdc-theme-text-hint-on-secondary: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-disabled-on-secondary: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-icon-on-secondary: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-primary-on-secondary-light: rgba(0, 0, 0, 0.87);\n  --mdc-theme-text-secondary-on-secondary-light: rgba(0, 0, 0, 0.54);\n  --mdc-theme-text-hint-on-secondary-light: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-disabled-on-secondary-light: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-icon-on-secondary-light: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-primary-on-secondary-dark: white;\n  --mdc-theme-text-secondary-on-secondary-dark: rgba(255, 255, 255, 0.7);\n  --mdc-theme-text-hint-on-secondary-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-disabled-on-secondary-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-icon-on-secondary-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-primary-on-background: rgba(0, 0, 0, 0.87);\n  --mdc-theme-text-secondary-on-background: rgba(0, 0, 0, 0.54);\n  --mdc-theme-text-hint-on-background: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-disabled-on-background: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-icon-on-background: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-primary-on-light: rgba(0, 0, 0, 0.87);\n  --mdc-theme-text-secondary-on-light: rgba(0, 0, 0, 0.54);\n  --mdc-theme-text-hint-on-light: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-icon-on-light: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-primary-on-dark: white;\n  --mdc-theme-text-secondary-on-dark: rgba(255, 255, 255, 0.7);\n  --mdc-theme-text-hint-on-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-disabled-on-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-icon-on-dark: rgba(255, 255, 255, 0.5); }\n\n.mdc-theme--background {\n  /* @alternate */\n  background-color: #fff;\n  background-color: var(--mdc-theme-background, #fff); }\n\n.mdc-theme--primary {\n  /* @alternate */\n  color: #3f51b5 !important;\n  color: var(--mdc-theme-primary, #3f51b5) !important; }\n\n.mdc-theme--primary-light {\n  /* @alternate */\n  color: #6f7dcd !important;\n  color: var(--mdc-theme-primary-light, #6f7dcd) !important; }\n\n.mdc-theme--primary-dark {\n  /* @alternate */\n  color: #2d3980 !important;\n  color: var(--mdc-theme-primary-dark, #2d3980) !important; }\n\n.mdc-theme--secondary {\n  /* @alternate */\n  color: #ff4081 !important;\n  color: var(--mdc-theme-secondary, #ff4081) !important; }\n\n.mdc-theme--secondary-light {\n  /* @alternate */\n  color: #ff87b0 !important;\n  color: var(--mdc-theme-secondary-light, #ff87b0) !important; }\n\n.mdc-theme--secondary-dark {\n  /* @alternate */\n  color: #f80054 !important;\n  color: var(--mdc-theme-secondary-dark, #f80054) !important; }\n\n.mdc-theme--text-primary-on-primary {\n  /* @alternate */\n  color: white !important;\n  color: var(--mdc-theme-text-primary-on-primary, white) !important; }\n\n.mdc-theme--text-secondary-on-primary {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.7) !important;\n  color: var(--mdc-theme-text-secondary-on-primary, rgba(255, 255, 255, 0.7)) !important; }\n\n.mdc-theme--text-hint-on-primary {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-hint-on-primary, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-disabled-on-primary {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-disabled-on-primary, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-icon-on-primary {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-icon-on-primary, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-primary-on-primary-light {\n  /* @alternate */\n  color: white !important;\n  color: var(--mdc-theme-text-primary-on-primary-light, white) !important; }\n\n.mdc-theme--text-secondary-on-primary-light {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.7) !important;\n  color: var(--mdc-theme-text-secondary-on-primary-light, rgba(255, 255, 255, 0.7)) !important; }\n\n.mdc-theme--text-hint-on-primary-light {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-hint-on-primary-light, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-disabled-on-primary-light {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-disabled-on-primary-light, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-icon-on-primary-light {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-icon-on-primary-light, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-primary-on-primary-dark {\n  /* @alternate */\n  color: white !important;\n  color: var(--mdc-theme-text-primary-on-primary-dark, white) !important; }\n\n.mdc-theme--text-secondary-on-primary-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.7) !important;\n  color: var(--mdc-theme-text-secondary-on-primary-dark, rgba(255, 255, 255, 0.7)) !important; }\n\n.mdc-theme--text-hint-on-primary-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-hint-on-primary-dark, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-disabled-on-primary-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-disabled-on-primary-dark, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-icon-on-primary-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-icon-on-primary-dark, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-primary-on-secondary {\n  /* @alternate */\n  color: white !important;\n  color: var(--mdc-theme-text-primary-on-secondary, white) !important; }\n\n.mdc-theme--text-secondary-on-secondary {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.7) !important;\n  color: var(--mdc-theme-text-secondary-on-secondary, rgba(255, 255, 255, 0.7)) !important; }\n\n.mdc-theme--text-hint-on-secondary {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-hint-on-secondary, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-disabled-on-secondary {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-disabled-on-secondary, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-icon-on-secondary {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-icon-on-secondary, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-primary-on-secondary-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87) !important;\n  color: var(--mdc-theme-text-primary-on-secondary-light, rgba(0, 0, 0, 0.87)) !important; }\n\n.mdc-theme--text-secondary-on-secondary-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.54) !important;\n  color: var(--mdc-theme-text-secondary-on-secondary-light, rgba(0, 0, 0, 0.54)) !important; }\n\n.mdc-theme--text-hint-on-secondary-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-hint-on-secondary-light, rgba(0, 0, 0, 0.38)) !important; }\n\n.mdc-theme--text-disabled-on-secondary-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-disabled-on-secondary-light, rgba(0, 0, 0, 0.38)) !important; }\n\n.mdc-theme--text-icon-on-secondary-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-icon-on-secondary-light, rgba(0, 0, 0, 0.38)) !important; }\n\n.mdc-theme--text-primary-on-secondary-dark {\n  /* @alternate */\n  color: white !important;\n  color: var(--mdc-theme-text-primary-on-secondary-dark, white) !important; }\n\n.mdc-theme--text-secondary-on-secondary-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.7) !important;\n  color: var(--mdc-theme-text-secondary-on-secondary-dark, rgba(255, 255, 255, 0.7)) !important; }\n\n.mdc-theme--text-hint-on-secondary-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-hint-on-secondary-dark, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-disabled-on-secondary-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-disabled-on-secondary-dark, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-icon-on-secondary-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-icon-on-secondary-dark, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-primary-on-background {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87) !important;\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87)) !important; }\n\n.mdc-theme--text-secondary-on-background {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.54) !important;\n  color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54)) !important; }\n\n.mdc-theme--text-hint-on-background {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38)) !important; }\n\n.mdc-theme--text-disabled-on-background {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-disabled-on-background, rgba(0, 0, 0, 0.38)) !important; }\n\n.mdc-theme--text-icon-on-background {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38)) !important; }\n\n.mdc-theme--text-primary-on-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.87) !important;\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87)) !important; }\n\n.mdc-theme--text-secondary-on-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.54) !important;\n  color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54)) !important; }\n\n.mdc-theme--text-hint-on-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38)) !important; }\n\n.mdc-theme--text-disabled-on-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38)) !important; }\n\n.mdc-theme--text-icon-on-light {\n  /* @alternate */\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-icon-on-light, rgba(0, 0, 0, 0.38)) !important; }\n\n.mdc-theme--text-primary-on-dark {\n  /* @alternate */\n  color: white !important;\n  color: var(--mdc-theme-text-primary-on-dark, white) !important; }\n\n.mdc-theme--text-secondary-on-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.7) !important;\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7)) !important; }\n\n.mdc-theme--text-hint-on-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-disabled-on-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-icon-on-dark {\n  /* @alternate */\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-icon-on-dark, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--primary-bg {\n  /* @alternate */\n  background-color: #3f51b5 !important;\n  background-color: var(--mdc-theme-primary, #3f51b5) !important; }\n\n.mdc-theme--primary-light-bg {\n  /* @alternate */\n  background-color: #6f7dcd !important;\n  background-color: var(--mdc-theme-primary-light, #6f7dcd) !important; }\n\n.mdc-theme--primary-dark-bg {\n  /* @alternate */\n  background-color: #2d3980 !important;\n  background-color: var(--mdc-theme-primary-dark, #2d3980) !important; }\n\n.mdc-theme--secondary-bg {\n  /* @alternate */\n  background-color: #ff4081 !important;\n  background-color: var(--mdc-theme-secondary, #ff4081) !important; }\n\n.mdc-theme--secondary-light-bg {\n  /* @alternate */\n  background-color: #ff87b0 !important;\n  background-color: var(--mdc-theme-secondary-light, #ff87b0) !important; }\n\n.mdc-theme--secondary-dark-bg {\n  /* @alternate */\n  background-color: #f80054 !important;\n  background-color: var(--mdc-theme-secondary-dark, #f80054) !important; }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: 20px; }\n\nbody {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  background-color: #fdfdfd; }\n  body .display {\n    height: 540;\n    padding-bottom: 20px;\n    background-color: #ffffff; }\n  body .city {\n    padding: 20px;\n    background-color: #749de0; }\n    body .city h1 {\n      text-align: center;\n      font-size: 1.8em; }\n      body .city h1 span {\n        font-size: 1em; }\n  body .divider {\n    margin: 0;\n    padding: 0;\n    height: 73px;\n    background-color: #749de0; }\n  body .cards {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    margin-top: -73px; }\n    body .cards .image {\n      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n      background-color: #fdfdfd;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-around;\n      height: 100px;\n      width: 100px; }\n      body .cards .image .weather-description {\n        text-align: center; }\n    body .cards .temp {\n      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n      background-color: #fdfdfd;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-around;\n      height: 100px;\n      width: 100px; }\n      body .cards .temp span {\n        font-size: 1.2em; }\n      body .cards .temp #temp-button {\n        --mdc-ripple-surface-width: 0;\n        --mdc-ripple-surface-height: 0;\n        --mdc-ripple-fg-size: 0;\n        --mdc-ripple-left: 0;\n        --mdc-ripple-top: 0;\n        --mdc-ripple-fg-scale: 1;\n        --mdc-ripple-fg-translate-end: 0;\n        --mdc-ripple-fg-translate-start: 0;\n        will-change: transform, opacity;\n        -webkit-tap-highlight-color: transparent;\n        background-color: #6f7c91;\n        cursor: pointer;\n        overflow: hidden;\n        font-size: 0.6em; }\n        body .cards .temp #temp-button:not(.mdc-ripple-upgraded):hover::before, body .cards .temp #temp-button:not(.mdc-ripple-upgraded):focus::before, body .cards .temp #temp-button:not(.mdc-ripple-upgraded):active::after {\n          transition-duration: 85ms;\n          opacity: .6; }\n        body .cards .temp #temp-button::before {\n          background-color: rgba(0, 0, 0, 0.06);\n          position: absolute;\n          top: calc(50% - 100%);\n          left: calc(50% - 100%);\n          width: 200%;\n          height: 200%;\n          transition: opacity 250ms linear;\n          border-radius: 50%;\n          opacity: 0;\n          pointer-events: none;\n          content: \"\"; }\n        body .cards .temp #temp-button.mdc-ripple-upgraded::before {\n          top: calc(50% - 100%);\n          left: calc(50% - 100%);\n          width: 200%;\n          height: 200%;\n          /* @alternate */\n          transform: scale(0);\n          transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n        body .cards .temp #temp-button.mdc-ripple-upgraded--background-focused::before {\n          opacity: .99999; }\n        body .cards .temp #temp-button.mdc-ripple-upgraded--background-active-fill::before {\n          transition-duration: 120ms;\n          opacity: 1; }\n        body .cards .temp #temp-button.mdc-ripple-upgraded--unbounded::before {\n          /* @alternate */\n          top: calc(50% - 50%);\n          top: var(--mdc-ripple-top, calc(50% - 50%));\n          /* @alternate */\n          left: calc(50% - 50%);\n          left: var(--mdc-ripple-left, calc(50% - 50%));\n          /* @alternate */\n          width: 100%;\n          width: var(--mdc-ripple-fg-size, 100%);\n          /* @alternate */\n          height: 100%;\n          height: var(--mdc-ripple-fg-size, 100%);\n          /* @alternate */\n          transform: scale(0);\n          transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n        body .cards .temp #temp-button::after {\n          background-color: rgba(0, 0, 0, 0.06);\n          position: absolute;\n          top: calc(50% - 100%);\n          left: calc(50% - 100%);\n          width: 200%;\n          height: 200%;\n          transition: opacity 250ms linear;\n          border-radius: 50%;\n          opacity: 0;\n          pointer-events: none;\n          content: \"\"; }\n        body .cards .temp #temp-button.mdc-ripple-upgraded::after {\n          top: 0;\n          left: 0;\n          /* @alternate */\n          width: 100%;\n          width: var(--mdc-ripple-fg-size, 100%);\n          /* @alternate */\n          height: 100%;\n          height: var(--mdc-ripple-fg-size, 100%);\n          transform: scale(0);\n          transform-origin: center center;\n          opacity: 0; }\n        body .cards .temp #temp-button:not(.mdc-ripple-upgraded--unbounded)::after {\n          transform-origin: center center; }\n        body .cards .temp #temp-button.mdc-ripple-upgraded--unbounded::after {\n          /* @alternate */\n          top: 0;\n          top: var(--mdc-ripple-top, 0);\n          /* @alternate */\n          left: 0;\n          left: var(--mdc-ripple-left, 0);\n          /* @alternate */\n          width: 100%;\n          width: var(--mdc-ripple-fg-size, 100%);\n          /* @alternate */\n          height: 100%;\n          height: var(--mdc-ripple-fg-size, 100%);\n          transform: scale(0);\n          transform-origin: center center; }\n        body .cards .temp #temp-button.mdc-ripple-upgraded--foreground-activation::after {\n          animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n        body .cards .temp #temp-button.mdc-ripple-upgraded--foreground-deactivation::after {\n          transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n          animation: 83ms mdc-ripple-fg-opacity-out; }\n  body .date-box {\n    text-align: center;\n    margin: 20px auto; }\n  body .links {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: space-around;\n    margin: auto 20px; }\n    body .links a {\n      display: block;\n      font-size: .8em;\n      text-decoration: none;\n      color: #6f7c91; }\n    body .links a:hover {\n      text-decoration: underline;\n      color: #749de0; }\n\n@media screen and (min-width: 440px) {\n  body {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    margin-top: -270px;\n    margin-left: -220px;\n    padding: 20px; }\n    body .display {\n      box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n      width: 440px;\n      padding: 10px; }\n    body .links {\n      flex-direction: row;\n      justify-content: space-around;\n      align-content: center;\n      margin-top: 20px; } }\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(12);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);