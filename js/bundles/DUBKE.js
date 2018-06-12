var pageComponent =
webpackJsonppageComponent([23],{

/***/ 268:
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

var _indexSoy = __webpack_require__(269);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DUBKE = function (_Component) {
  _inherits(DUBKE, _Component);

  function DUBKE() {
    _classCallCheck(this, DUBKE);

    return _possibleConstructorReturn(this, (DUBKE.__proto__ || Object.getPrototypeOf(DUBKE)).apply(this, arguments));
  }

  return DUBKE;
}(_metalComponent2.default);

;

_metalSoy2.default.register(DUBKE, _indexSoy2.default);

exports.default = DUBKE;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.DUBKE = undefined;

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

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace DUBKE.
   * @public
   */

  goog.module('DUBKE.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param315 = function param315() {
      ie_open('h6');
      var dyn27 = opt_data.page.description;
      if (typeof dyn27 == 'function') dyn27();else if (dyn27 != null) itext(dyn27);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Trigger Controller');
      ie_close('h2');
      ie_open('p');
      itext('Any instance of ');
      ie_open('code');
      itext('Trap');
      ie_close('code');
      itext(' works as a trigger controller.');
      ie_close('p');
      ie_open('p');
      itext('Basically, we use trigger controllers to find trigger handlers.');
      ie_close('p');
      $templateAlias2({ code: 'TriggerHandler handler = Trap.getInstance().find(\'Case\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('This, by default, will find the trigger handler named ');
      ie_open('code');
      itext('CaseTrigger');
      ie_close('code');
      itext('. If the trigger controller fails to find an existing instance of ');
      ie_open('code');
      itext('CaseTrigger');
      ie_close('code');
      itext(', it will create one and store it. Otherwise it will load the existing one.');
      ie_close('p');
      ie_open('p');
      itext('We can alter the default naming convention like this:');
      ie_close('p');
      $templateAlias2({ code: 'TriggerHandler handler = Trap.getInstance(\'Handler\').find(\'Case\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In this way, the trigger controller will look for ');
      ie_open('code');
      itext('CaseHandler');
      ie_close('code');
      itext(' instead of the default ');
      ie_open('code');
      itext('CaseTrigger');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('Methods are like:');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('Trap.TriggerHandler find(String)');
      ie_close('td');
      ie_open('td');
      itext('Find the trigger handler');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void start()');
      ie_close('td');
      ie_open('td');
      itext('Start the trigger controller with default values from real trigger context');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void start(Trap.Event, List<SObject>, List<SObject>)');
      ie_close('td');
      ie_open('td');
      itext('Start the trigger controller with given values');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('How Triggers Handlers are Controlled');
      ie_close('h2');
      ie_open('p');
      itext('Every trigger handler created in this way is in fact associated with the trigger controller, and is hence managed by this trigger controller.');
      ie_close('p');
      ie_open('p');
      itext('Trigger handlers created in the integration style are therefore not managed by trigger controllers.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Trigger Enablement');
      ie_close('h2');
      ie_open('p');
      itext('Trap.apex actually has a hierarchy to control trigger handler enabled status.');
      ie_close('p');
      ie_open('p');
      itext('The hierarchy goes from top to bottom is:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('Global Enablement We can disable/enable the triggers globally. This setting will be overridden by specific trigger enablement and activeness, though.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Trigger Enablement Each trigger handler can be disabled/enabled when they are enabled globally.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Trigger Activeness Trigger handlers can work only when they are active and enabled. See ');
      ie_open('code');
      itext('isActive()');
      ie_close('code');
      itext(' method on trigger handler.');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Methods are like:');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('Boolean isEnabled(String)');
      ie_close('td');
      ie_open('td');
      itext('Check if the trigger is enabled');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Trap setEnabled(String, Boolean)');
      ie_close('td');
      ie_open('td');
      itext('Set the trigger enablement');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Trap enable(String)');
      ie_close('td');
      ie_open('td');
      itext('Enable the trigger');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Trap disable(String)');
      ie_close('td');
      ie_open('td');
      itext('Disable the trigger');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Trap enableAll()');
      ie_close('td');
      ie_open('td');
      itext('Enable globally');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Trap disableAll()');
      ie_close('td');
      ie_open('td');
      itext('Disable globally');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('p');
      itext('Example:');
      ie_close('p');
      $templateAlias2({ code: 'Trap.getInstance()\n    .enable(\'Case\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Trigger Max ReEntry');
      ie_close('h2');
      ie_open('p');
      itext('In Trap.apex, we can set max re-entry to control how many times a trigger handler can be re-entered.');
      ie_close('p');
      $templateAlias2({ code: 'Trap.getInstance()\n    .setMaxReEntry(\'Case\', 3);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Methods are like:');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('Trap setMaxReEntry(String, Integer)');
      ie_close('td');
      ie_open('td');
      itext('Set the max re-entry');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Integer getMaxReEntry(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the max re-entry');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Trigger New Transaction');
      ie_close('h2');
      ie_open('p');
      itext('We can event set the trigger handler to use new transactions, so that the failure will only rollback within the trigger.');
      ie_close('p');
      $templateAlias2({ code: 'Trap.getInstance()\n    .setUsingNewTransaction(\'Case\', true);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Methods are like:');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('Trap setUsingNewTransaction(String, Boolean)');
      ie_close('td');
      ie_open('td');
      itext('Set whether to use new transaction');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Boolean isUsingNewTransaction(String)');
      ie_close('td');
      ie_open('td');
      itext('Check if using new transaction');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param315 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'DUBKE.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var DUBKE = function (_Component) {
  _inherits(DUBKE, _Component);

  function DUBKE() {
    _classCallCheck(this, DUBKE);

    return _possibleConstructorReturn(this, (DUBKE.__proto__ || Object.getPrototypeOf(DUBKE)).apply(this, arguments));
  }

  return DUBKE;
}(_metalComponent2.default);

_metalSoy2.default.register(DUBKE, templates);
exports.DUBKE = DUBKE;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[268]);