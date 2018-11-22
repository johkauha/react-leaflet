"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var L = _interopRequireWildcard(require("leaflet"));

var _context = require("./context");

var _Path2 = _interopRequireDefault(require("./Path"));

require('leaflet-semicircle');

var Semicircle =
/*#__PURE__*/
function (_Path) {
  (0, _inheritsLoose2.default)(Semicircle, _Path);

  function Semicircle() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Semicircle.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var center = props.center,
        radius = props.radius,
        startAngle = props.startAngle,
        stopAngle = props.stopAngle,
        options = (0, _objectWithoutPropertiesLoose2.default)(props, ["center", "radius", "startAngle", "stopAngle"]);
    return new L.semiCircle(center, radius, startAngle, stopAngle, this.getOptions(options));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.center !== fromProps.center) {
      this.leafletElement.setLatLng(toProps.center);
    }

    if (toProps.radius !== fromProps.radius) {
      this.leafletElement.setRadius(toProps.radius);
    }
  };

  return Semicircle;
}(_Path2.default);

var _default = (0, _context.withLeaflet)(Semicircle);

exports.default = _default;