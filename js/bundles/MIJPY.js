var pageComponent =
webpackJsonppageComponent([5],{

/***/ 298:
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

var _step_5Soy = __webpack_require__(299);

var _step_5Soy2 = _interopRequireDefault(_step_5Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MIJPY = function (_Component) {
  _inherits(MIJPY, _Component);

  function MIJPY() {
    _classCallCheck(this, MIJPY);

    return _possibleConstructorReturn(this, (MIJPY.__proto__ || Object.getPrototypeOf(MIJPY)).apply(this, arguments));
  }

  return MIJPY;
}(_metalComponent2.default);

;

_metalSoy2.default.register(MIJPY, _step_5Soy2.default);

exports.default = MIJPY;

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.MIJPY = undefined;

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

  // This file was automatically generated from step_5.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace MIJPY.
   * @public
   */

  goog.module('MIJPY.incrementaldom');

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
    var param689 = function param689() {
      ie_open('h2');
      var dyn41 = opt_data.page.title;
      if (typeof dyn41 == 'function') dyn41();else if (dyn41 != null) itext(dyn41);
      ie_close('h2');
      ie_open('p');
      itext('A bulk object represents a trunk of SObjects to be processed in the trigger. Bulk objects define the scope that you can work on the data. By default, they provide data as encapsulated streams, ');
      ie_open('code');
      itext('newStream');
      ie_close('code');
      itext(' for new SObjects and ');
      ie_open('code');
      itext('oldStream');
      ie_close('code');
      itext(' for old SObjects.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.oldStream\n    .tap(R.debug.apply(\'Old objects: \'))\n    .subscribe(new CustomFunc());', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('You can access to the old/new SObject if you are already in one stream.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.newStream\n    .filter((Func)R.pipe.run(\n        Trap.F.getOld,\n        new CustomFilterFunc()\n    ))\n    .subscribe(new CustomFunc());', mode: 'javascript' }, null, opt_ijData);
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param689 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'MIJPY.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var MIJPY = function (_Component) {
  _inherits(MIJPY, _Component);

  function MIJPY() {
    _classCallCheck(this, MIJPY);

    return _possibleConstructorReturn(this, (MIJPY.__proto__ || Object.getPrototypeOf(MIJPY)).apply(this, arguments));
  }

  return MIJPY;
}(_metalComponent2.default);

_metalSoy2.default.register(MIJPY, templates);
exports.MIJPY = MIJPY;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[298]);