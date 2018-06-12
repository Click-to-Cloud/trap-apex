var pageComponent =
webpackJsonppageComponent([1],{

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

var _step_9Soy = __webpack_require__(307);

var _step_9Soy2 = _interopRequireDefault(_step_9Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sZkmy = function (_Component) {
  _inherits(sZkmy, _Component);

  function sZkmy() {
    _classCallCheck(this, sZkmy);

    return _possibleConstructorReturn(this, (sZkmy.__proto__ || Object.getPrototypeOf(sZkmy)).apply(this, arguments));
  }

  return sZkmy;
}(_metalComponent2.default);

;

_metalSoy2.default.register(sZkmy, _step_9Soy2.default);

exports.default = sZkmy;

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.sZkmy = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from step_9.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace sZkmy.
   * @public
   */

  goog.module('sZkmy.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param773 = function param773() {
      ie_open('h2');
      var dyn45 = opt_data.page.title;
      if (typeof dyn45 == 'function') dyn45();else if (dyn45 != null) itext(dyn45);
      ie_close('h2');
      ie_open('p');
      itext('Trap instance actually is a controller for the trigger handlers created by it. The code below shows the relationship:');
      ie_close('p');
      $templateAlias2({ code: 'TriggerHandler handler = Trap.getInstance().find(\'Case\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here the Trap controller creates the trigger handler for Case if it is not found, and returns it. Besides creating the trigger handlers, the trigger controller provides much more features.');
      ie_close('p');
      $templateAlias2({ code: 'Trap.getInstance()\n    .setEnabled(\'Case\', true) // enable the CaseTrigger\n    .setMaxReEntry(\'Case\', 3) // re-entered for 3 times at most\n    .setUsingNewTransaction(\'Case\', true); // new transaction in trigger', mode: 'javascript' }, null, opt_ijData);
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param773 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'sZkmy.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var sZkmy = function (_Component) {
  _inherits(sZkmy, _Component);

  function sZkmy() {
    _classCallCheck(this, sZkmy);

    return _possibleConstructorReturn(this, (sZkmy.__proto__ || Object.getPrototypeOf(sZkmy)).apply(this, arguments));
  }

  return sZkmy;
}(_metalComponent2.default);

_metalSoy2.default.register(sZkmy, templates);
exports.sZkmy = sZkmy;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[306]);