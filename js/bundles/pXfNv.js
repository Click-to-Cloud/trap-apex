var pageComponent =
webpackJsonppageComponent([21],{

/***/ 272:
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

var _data_sharingSoy = __webpack_require__(273);

var _data_sharingSoy2 = _interopRequireDefault(_data_sharingSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pXfNv = function (_Component) {
  _inherits(pXfNv, _Component);

  function pXfNv() {
    _classCallCheck(this, pXfNv);

    return _possibleConstructorReturn(this, (pXfNv.__proto__ || Object.getPrototypeOf(pXfNv)).apply(this, arguments));
  }

  return pXfNv;
}(_metalComponent2.default);

;

_metalSoy2.default.register(pXfNv, _data_sharingSoy2.default);

exports.default = pXfNv;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.pXfNv = undefined;

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

  // This file was automatically generated from data_sharing.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace pXfNv.
   * @public
   */

  goog.module('pXfNv.incrementaldom');

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
    var param367 = function param367() {
      ie_open('h6');
      var dyn29 = opt_data.page.description;
      if (typeof dyn29 == 'function') dyn29();else if (dyn29 != null) itext(dyn29);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Data Sharing');
      ie_close('h2');
      ie_open('p');
      itext('Bulk objects help us manage the data shared inside. The basic idea is that you run a function, get the data and store it in the bulk object. The process, for the same piece of data, will only be triggered once. And then you can load the data from the bulk object in whatever way you like.');
      ie_close('p');
      ie_open('p');
      itext('Below are methods to access the data:');
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
      itext('Object getData(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the data');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Trap.BulkObject setData(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the data');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Boolean containsData(String)');
      ie_close('td');
      ie_open('td');
      itext('Check if the data is contained');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('p');
      itext('Example:');
      ie_close('p');
      $templateAlias2({ code: '// ...\nList<Account> accounts = [ SELECT Id FROM Account WHERE Id IN = : ids ];\nbulkObj.setData(\'Accounts\', accounts);\n\n// ...\naccounts = (List<Account>)bulkObj.getData(\'Accounts\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Set Data in Trigger Streams');
      ie_close('h2');
      ie_open('p');
      itext('Trap.apex offers extra care when setting data in trigger streams.');
      ie_close('p');
      ie_open('p');
      itext('We can set raw data directly into the bulk object.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.newStream\n    .tap(bulkObj.data(\'data\', \'test\'));', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Or set the computed data from the function.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.newStream\n    .tap(bulkObj.data(\'accounts\', new CustomGetAccountsFunc(), \'ids\'));', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here the bulk object will first load data indexed by ');
      ie_open('code');
      itext('ids');
      ie_close('code');
      itext(' and send it to ');
      ie_open('code');
      itext('CustomGetAccountsFunc');
      ie_close('code');
      itext('. After that, it will set the computed value to ');
      ie_open('code');
      itext('accounts');
      ie_close('code');
      itext('. The returned function from ');
      ie_open('code');
      itext('bulkObj.data');
      ie_close('code');
      itext(' is passed to ');
      ie_open('code');
      itext('tap');
      ie_close('code');
      itext(' and the real execution is hence deferred to when the stream actually runs.');
      ie_close('p');
      ie_open('p');
      itext('Similar methods are:');
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
      itext('Func data(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Set the raw data');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Func data(String, Func, List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Set the data from the func and arg names');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Func data(String, Func)');
      ie_close('td');
      ie_open('td');
      itext('Set the data from the zero-arg func');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Func data(String, Func, String)');
      ie_close('td');
      ie_open('td');
      itext('Set the data from one arg func');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Func data(String, Func, String, String)');
      ie_close('td');
      ie_open('td');
      itext('Set the data from the two arg func');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Func data(String, Func, String, String, String)');
      ie_close('td');
      ie_open('td');
      itext('Set the data from the three arg func');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Get Data in Trigger Streams');
      ie_close('h2');
      ie_open('p');
      itext('Similarly, we have support when getting data in trigger streams.');
      ie_close('p');
      ie_open('p');
      itext('Here is how we load the data directly.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.newStream\n    .tap(bulkObj.data(\'accounts\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('You can use it like this, but in fact this is rarely used, as it actually turns every SObject into the data of account list.');
      ie_close('p');
      ie_open('p');
      itext('The other way is by providing data to functions.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.newStream\n    .filter(bulkObj.provide(\'accounts\', new CustomFilterFunc()));', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here we first load the data indexed by ');
      ie_open('code');
      itext('accounts');
      ie_close('code');
      itext(', and then send that as well as the current SObject to our ');
      ie_open('code');
      itext('CustomFilterFunc');
      ie_close('code');
      itext(', and wrap this logic as a returned function.');
      ie_close('p');
      ie_open('p');
      itext('Similar methods are:');
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
      itext('Func data(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the data');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Func provide(List<String>, Func)');
      ie_close('td');
      ie_open('td');
      itext('Provide args to the func');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Func provide(String, Func)');
      ie_close('td');
      ie_open('td');
      itext('Provide the arg to the func');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Func provide(String, String, Func)');
      ie_close('td');
      ie_open('td');
      itext('Provide the args to the func');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Func provide(String, String, String, Func)');
      ie_close('td');
      ie_open('td');
      itext('Provide the args to the func');
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
    $templateAlias1(soy.$$assignDefaults({ content: param367 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'pXfNv.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var pXfNv = function (_Component) {
  _inherits(pXfNv, _Component);

  function pXfNv() {
    _classCallCheck(this, pXfNv);

    return _possibleConstructorReturn(this, (pXfNv.__proto__ || Object.getPrototypeOf(pXfNv)).apply(this, arguments));
  }

  return pXfNv;
}(_metalComponent2.default);

_metalSoy2.default.register(pXfNv, templates);
exports.pXfNv = pXfNv;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[272]);