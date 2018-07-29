var pageComponent =
webpackJsonppageComponent([18],{

/***/ 278:
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

var _indexSoy = __webpack_require__(279);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cmFbq = function (_Component) {
  _inherits(cmFbq, _Component);

  function cmFbq() {
    _classCallCheck(this, cmFbq);

    return _possibleConstructorReturn(this, (cmFbq.__proto__ || Object.getPrototypeOf(cmFbq)).apply(this, arguments));
  }

  return cmFbq;
}(_metalComponent2.default);

;

_metalSoy2.default.register(cmFbq, _indexSoy2.default);

exports.default = cmFbq;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.cmFbq = undefined;

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
   * @fileoverview Templates in namespace cmFbq.
   * @public
   */

  goog.module('cmFbq.incrementaldom');

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
    var param495 = function param495() {
      ie_open('h6');
      var dyn32 = opt_data.page.description;
      if (typeof dyn32 == 'function') dyn32();else if (dyn32 != null) itext(dyn32);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('What is a Trigger Handler?');
      ie_close('h2');
      ie_open('p');
      itext('A trigger handler is an object that processes the trigger logic.');
      ie_close('p');
      ie_open('p');
      itext('Following the trigger best practices, we separate the logic from triggers into trigger handlers.');
      ie_close('p');
      ie_open('p');
      itext('First, we delegate the logic from within triggers to trigger handlers.');
      ie_close('p');
      $templateAlias2({ code: 'trigger CaseTrigger on Case (\n    before insert,\n    before update,\n    before delete,\n    after insert,\n    after update,\n    after delete,\n    after undelete\n) {\n    Trap.getInstance().start(); // Start the trap\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here we get the instance of ');
      ie_open('code');
      itext('Trap');
      ie_close('code');
      itext(', which is a trigger handler controller, and it will manage the lifecycle of trigger handlers and delegate the trigger execution context to the trigger handler.');
      ie_close('p');
      ie_open('p');
      itext('Then we create a trigger handler like this:');
      ie_close('p');
      $templateAlias2({ code: 'public with sharing class CaseTrigger extends Trap.TriggerHandler {\n    public override void setUpBeforeInsert(Trap.BulkObject bulkObj) {\n        bulkObj.newStream\n            .filter(new CustomFilterFunc())\n            .subscribe(Trap.F.addError.apply(\'test error\'));\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('For details on the streams and bulk objects here, please check out \'Trigger Execution\' section.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Trigger Context');
      ie_close('h2');
      ie_open('p');
      itext('One of the key concepts in Trap.apex is that we use separate trigger contexts from the standard Salesforce trigger contexts. This means that we no longer have direct dependencies over Salesforce apex API, which further enables us to do our unit test simply, as we have complete control of our data.');
      ie_close('p');
      ie_open('p');
      itext('Normally we bootstrap Trap.apex like this:');
      ie_close('p');
      $templateAlias2({ code: 'Trap.getInstance().start(); // Start the trap', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('And we can also explicitly set the trigger context data during the bootstrap.');
      ie_close('p');
      $templateAlias2({ code: 'Trap.getInstance().start(Trap.Event.BeforeInsert, null, new List<SObject>{ new Case() });', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('So we can easily control the trigger event, old list and new list passed into the trigger context.');
      ie_close('p');
      ie_open('p');
      itext('And we apply that into the unit testing.');
      ie_close('p');
      $templateAlias2({ code: '@isTest\nprivate static void contextTest() {\n    // test code\n\n    Trap.getInstance().start(Trap.Event.BeforeInsert, null, new List<SObject>{ new Case() });\n\n    // test code\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('What we need to bear in mind is that in our code, do not use code like ');
      ie_open('code');
      itext('Trigger.Xxx');
      ie_close('code');
      itext('. Instead, use this:');
      ie_close('p');
      $templateAlias2({ code: 'Trap.Context triggerContext = this.getTriggerContext();\nMap<Id, SObject> newMap = triggerContext.newMap;\nList<SObject> newList = triggerContext.newList;', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Methods are below:');
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
      itext('Trap.Context Trap.TriggerHandler.getTriggerContext()');
      ie_close('td');
      ie_open('td');
      itext('Get the trigger context');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Boolean Trap.TriggerHandler.isActive()');
      ie_close('td');
      ie_open('td');
      itext('Check if the trigger handler is active');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void Trap.TriggerHandler.run()');
      ie_close('td');
      ie_open('td');
      itext('Run the trigger handler with default values from the real trigger context');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('void Trap.TriggerHandler.run(Trap.Event, List<SObject>, List<SObject>)');
      ie_close('td');
      ie_open('td');
      itext('Run the trigger handler with the trigger event, old list and new list');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Trigger Event');
      ie_close('h2');
      ie_open('p');
      itext('Trap.apex categorizes trigger events into:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('BeforeInsert');
      ie_close('li');
      ie_open('li');
      itext('BeforeUpdate');
      ie_close('li');
      ie_open('li');
      itext('BeforeDelete');
      ie_close('li');
      ie_open('li');
      itext('AfterInsert');
      ie_close('li');
      ie_open('li');
      itext('AfterUpdate');
      ie_close('li');
      ie_open('li');
      itext('AfterDelete');
      ie_close('li');
      ie_open('li');
      itext('AfterUndelete');
      ie_close('li');
      ie_open('li');
      itext('All');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('All these events can be found in ');
      ie_open('code');
      itext('Trap.Event');
      ie_close('code');
      itext('. ');
      ie_open('code');
      itext('Trap.Event.All');
      ie_close('code');
      itext(' is a special event used to denote accepting all events, and normally users should not use this event.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Trigger Handler Styles');
      ie_close('h2');
      ie_open('p');
      itext('Trap.apex is designed to be able to run in multiple styles.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('Streamed Style The streamed style adopts streams from Stream.apex to handle trigger logic and make codes more reusable and declarative.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Normal Style The normal style is like many other trigger frameworks that provide trigger event handling methods for you to override.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Integration Style The integration style enables you to use the streamed style inside an existing trigger framework.');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Streamed Style');
      ie_close('h2');
      ie_open('p');
      itext('The streamed style is distinct by using streams.');
      ie_close('p');
      $templateAlias2({ code: 'public with sharing class CaseTrigger extends Trap.TriggerHandler {\n    public override void setUpBeforeInsert(Trap.BulkObject bulkObj) {\n        bulkObj.newStream\n            .filter(new CustomFilterFunc())\n            .subscribe(Trap.F.addError.apply(\'test error\'));\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Methods are below:');
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
      itext('setUpBeforeInsert(Trap.BulkObject)');
      ie_close('td');
      ie_open('td');
      itext('Set up before insert');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setUpBeforeUpdate(Trap.BulkObject)');
      ie_close('td');
      ie_open('td');
      itext('Set up before update');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setUpBeforeDelete(Trap.BulkObject)');
      ie_close('td');
      ie_open('td');
      itext('Set up before delete');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setUpAfterInsert(Trap.BulkObject)');
      ie_close('td');
      ie_open('td');
      itext('Set up after insert');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setUpAfterUpdate(Trap.BulkObject)');
      ie_close('td');
      ie_open('td');
      itext('Set up after update');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setUpAfterDelete(Trap.BulkObject)');
      ie_close('td');
      ie_open('td');
      itext('Set up after delete');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setUpAfterUndelete(Trap.BulkObject)');
      ie_close('td');
      ie_open('td');
      itext('Set up after undelete');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('setUp(Trap.BulkObject)');
      ie_close('td');
      ie_open('td');
      itext('Set up all events');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('p');
      itext('We can use ');
      ie_open('code');
      itext('setUp');
      ie_close('code');
      itext(' to catch all events.');
      ie_close('p');
      $templateAlias2({ code: 'public with sharing class CaseTrigger extends Trap.TriggerHandler {\n    public override void setUp(Trap.BulkObject bulkObj) {\n        bulkObj.newStream\n            .filter((Func)R.anyPass.run(\n                Trap.F.isBeforeInsert,\n                Trap.F.isBeforeUpdate\n            ))\n            .subscribe(Trap.F.addError.apply(\'Cannot do this\'));\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('Normal Style');
      ie_close('h2');
      ie_open('p');
      itext('The normal style works just like other trigger frameworks.');
      ie_close('p');
      $templateAlias2({ code: 'public with sharing class CaseTrigger extends Trap.TriggerHandler {\n    public override void bulkBefore() {\n        // Custom code\n    }\n\n    public override void beforeInsert(SObject newSO) {\n        Trap.Context triggerContext = this.getTriggerContext();\n        // Custom code\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Methods are below:');
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
      itext('bulkBefore()');
      ie_close('td');
      ie_open('td');
      itext('Called before the before events');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('buldAfter()');
      ie_close('td');
      ie_open('td');
      itext('Called before the after events');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('beforeInsert(SObject)');
      ie_close('td');
      ie_open('td');
      itext('Called on before insert');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('beforeUpdate(SObject, SObject)');
      ie_close('td');
      ie_open('td');
      itext('Called on before update');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('beforeDelete(SObject)');
      ie_close('td');
      ie_open('td');
      itext('Called on before delete');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('afterInsert(SObject)');
      ie_close('td');
      ie_open('td');
      itext('Called on after insert');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('afterUpdate(SObject, SObject)');
      ie_close('td');
      ie_open('td');
      itext('Called on after update');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('afterDelete(SObject)');
      ie_close('td');
      ie_open('td');
      itext('Called on after delete');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('afterUndelete(SObject)');
      ie_close('td');
      ie_open('td');
      itext('Called on after undelete');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('Integration Style');
      ie_close('h2');
      ie_open('p');
      itext('The integration style enables you to use Trap.apex inside your existing trigger framework.');
      ie_close('p');
      $templateAlias2({ code: 'public with sharing class CaseTrigger extends Other.TriggerHandler {\n    private Trap.TriggerHandler handler = new Trap.TriggerHandler();\n\n    public CaseTrigger() {\n        handler.onBeforeInsert().newStream\n            .tap(R.debug.apply(\'before insert\'))\n            .subscribe(Trap.F.addError.apply(\'test error\'));\n    }\n\n    public override void bulkBefore() {\n        handler.run();\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Methods are below:');
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
      itext('Trap.BulkObject onBeforeInsert()');
      ie_close('td');
      ie_open('td');
      itext('Get the before insert bulk object');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Trap.BulkObject onBeforeUpdate()');
      ie_close('td');
      ie_open('td');
      itext('Get the before update bulk object');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Trap.BulkObject onBeforeDelete()');
      ie_close('td');
      ie_open('td');
      itext('Get the before delete bulk object');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Trap.BulkObject onAfterInsert()');
      ie_close('td');
      ie_open('td');
      itext('Get the after insert bulk object');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Trap.BulkObject onAfterUpdate()');
      ie_close('td');
      ie_open('td');
      itext('Get the after update bulk object');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Trap.BulkObject onAfterDelete()');
      ie_close('td');
      ie_open('td');
      itext('Get the after delete bulk object');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Trap.BulkObject onAfterUndelete()');
      ie_close('td');
      ie_open('td');
      itext('Get the after undelete bulk object');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Trap.BulkObject onEvent()');
      ie_close('td');
      ie_open('td');
      itext('Get the bulk object for all events');
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
    $templateAlias1(soy.$$assignDefaults({ content: param495 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'cmFbq.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var cmFbq = function (_Component) {
  _inherits(cmFbq, _Component);

  function cmFbq() {
    _classCallCheck(this, cmFbq);

    return _possibleConstructorReturn(this, (cmFbq.__proto__ || Object.getPrototypeOf(cmFbq)).apply(this, arguments));
  }

  return cmFbq;
}(_metalComponent2.default);

_metalSoy2.default.register(cmFbq, templates);
exports.cmFbq = cmFbq;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[278]);