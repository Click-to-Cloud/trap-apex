var pageComponent =
webpackJsonppageComponent([20],{

/***/ 274:
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

var _functionSoy = __webpack_require__(275);

var _functionSoy2 = _interopRequireDefault(_functionSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KYRfd = function (_Component) {
  _inherits(KYRfd, _Component);

  function KYRfd() {
    _classCallCheck(this, KYRfd);

    return _possibleConstructorReturn(this, (KYRfd.__proto__ || Object.getPrototypeOf(KYRfd)).apply(this, arguments));
  }

  return KYRfd;
}(_metalComponent2.default);

;

_metalSoy2.default.register(KYRfd, _functionSoy2.default);

exports.default = KYRfd;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.KYRfd = undefined;

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

  // This file was automatically generated from function.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace KYRfd.
   * @public
   */

  goog.module('KYRfd.incrementaldom');

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
    var param403 = function param403() {
      ie_open('h6');
      var dyn30 = opt_data.page.description;
      if (typeof dyn30 == 'function') dyn30();else if (dyn30 != null) itext(dyn30);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('updateField');
      ie_close('h2');
      ie_open('p');
      itext('Update the field value of the SObject, by giving a new value or an updating function.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.newStream\n    .subscribe(Trap.F.updateField.apply(\'Subject\', \'New subject\'));', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('addError');
      ie_close('h2');
      ie_open('p');
      itext('Add an error to the SObject.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.newStream\n    .subscribe(Trap.F.addError.apply(\'test error\'));', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('validate');
      ie_close('h2');
      ie_open('p');
      itext('Do validation against the SObject.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.newStream\n    .subscribe(Trap.F.validate.apply(R.propSatisfies.apply(\'Subject\', R.isNotNull), \'Should not be null\'));', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('getOld');
      ie_close('h2');
      ie_open('p');
      itext('Get the old value.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.newStream\n    .filter((Func)R.pipe.run(\n        Trap.F.getOld,\n        new CustomFilterFunc()\n    ))\n    .subscribe(...);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('getNew');
      ie_close('h2');
      ie_open('p');
      itext('Get the new value.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.oldStream\n    .filter((Func)R.pipe.run(\n        Trap.F.getNew,\n        new CustomFilterFunc()\n    ))\n    .subscribe(...);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('changed');
      ie_close('h2');
      ie_open('p');
      itext('Check if a field has changed value.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.newStream\n    .filter(Trap.F.changed.apply(\'Subject\'))\n    .subscribe(...);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('isEvent');
      ie_close('h2');
      ie_open('p');
      itext('Check current trigger event.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.newStream\n    .filter(Trap.F.isEvent.apply(Trap.Event.BeforeInsert))\n    .subscribe(...);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('isBeforeInsert');
      ie_close('h2');
      ie_open('p');
      itext('Check if it is the before insert event.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.newStream\n    .filter(Trap.F.isBeforeInsert)\n    .subscribe(...);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '9');
      ie_open('h2');
      itext('isBeforeUpdate');
      ie_close('h2');
      ie_open('p');
      itext('Check if it is the before update event.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.newStream\n    .filter(Trap.F.isBeforeUpdate)\n    .subscribe(...);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '10');
      ie_open('h2');
      itext('isBeforeDelete');
      ie_close('h2');
      ie_open('p');
      itext('Check if it is the before delete event.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.newStream\n    .filter(Trap.F.isBeforeDelete)\n    .subscribe(...);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '11');
      ie_open('h2');
      itext('isAfterInsert');
      ie_close('h2');
      ie_open('p');
      itext('Check if it is the after insert event.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.newStream\n    .filter(Trap.F.isAfterInsert)\n    .subscribe(...);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '12');
      ie_open('h2');
      itext('isAfterUpdate');
      ie_close('h2');
      ie_open('p');
      itext('Check if it is the after update event.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.newStream\n    .filter(Trap.F.isAfterUpdate)\n    .subscribe(...);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '13');
      ie_open('h2');
      itext('isAfterDelete');
      ie_close('h2');
      ie_open('p');
      itext('Check if it is the after delete event.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.newStream\n    .filter(Trap.F.isAfterDelete)\n    .subscribe(...);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '14');
      ie_open('h2');
      itext('isAfterUndelete');
      ie_close('h2');
      ie_open('p');
      itext('Check if it is the after undelete event.');
      ie_close('p');
      $templateAlias2({ code: 'bulkObj.newStream\n    .filter(Trap.F.isAfterUndelete)\n    .subscribe(...);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param403 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'KYRfd.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var KYRfd = function (_Component) {
  _inherits(KYRfd, _Component);

  function KYRfd() {
    _classCallCheck(this, KYRfd);

    return _possibleConstructorReturn(this, (KYRfd.__proto__ || Object.getPrototypeOf(KYRfd)).apply(this, arguments));
  }

  return KYRfd;
}(_metalComponent2.default);

_metalSoy2.default.register(KYRfd, templates);
exports.KYRfd = KYRfd;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[274]);