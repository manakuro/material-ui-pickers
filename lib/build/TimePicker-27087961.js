import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import React__default, { createElement, Fragment } from 'react';
import { u as useUtils } from './dimensions-f39eca69.js';
import { createSvgIcon } from '@material-ui/core/utils';
import { a as TimePickerToolbar } from './ClockView-54ff1e5b.js';
import { g as useParsedDate, s as pick12hOr24hFormat } from './Picker-93e9705e.js';
import { m as makeValidationHook, b as makePickerWithStateAndWrapper, c as ResponsiveWrapper, d as DesktopWrapper, M as MobileWrapper, S as StaticWrapper } from './makePickerWithState-60ff822c.js';
import { v as validateTime } from './Clock-c2c3c22b.js';

/**
 * @ignore - internal component.
 */

var ClockIcon = createSvgIcon( /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), /*#__PURE__*/createElement("path", {
  d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
})), 'Clock');

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function getTextFieldAriaText(value, utils) {
  return value && utils.isValid(utils.date(value)) ? "Choose time, selected time is ".concat(utils.format(utils.date(value), 'fullTime')) : 'Choose time';
}

function useInterceptProps(_ref) {
  var ampm = _ref.ampm,
      inputFormat = _ref.inputFormat,
      __maxTime = _ref.maxTime,
      __minTime = _ref.minTime,
      _ref$openTo = _ref.openTo,
      openTo = _ref$openTo === void 0 ? 'hours' : _ref$openTo,
      _ref$views = _ref.views,
      views = _ref$views === void 0 ? ['hours', 'minutes'] : _ref$views,
      other = _objectWithoutProperties(_ref, ["ampm", "inputFormat", "maxTime", "minTime", "openTo", "views"]);

  var utils = useUtils();
  var minTime = useParsedDate(__minTime);
  var maxTime = useParsedDate(__maxTime);
  var willUseAmPm = ampm !== null && ampm !== void 0 ? ampm : utils.is12HourCycleInCurrentLocale();
  return _objectSpread({
    views: views,
    openTo: openTo,
    minTime: minTime,
    maxTime: maxTime,
    ampm: willUseAmPm,
    acceptRegex: willUseAmPm ? /[\dapAP]/gi : /\d/gi,
    mask: '__:__',
    disableMaskedInput: willUseAmPm,
    getOpenDialogAriaText: getTextFieldAriaText,
    openPickerIcon: /*#__PURE__*/React__default.createElement(ClockIcon, null),
    inputFormat: pick12hOr24hFormat(inputFormat, willUseAmPm, {
      localized: utils.formats.fullTime,
      '12h': utils.formats.fullTime12h,
      '24h': utils.formats.fullTime24h
    })
  }, other);
}

var timePickerConfig = {
  useInterceptProps: useInterceptProps,
  useValidation: makeValidationHook(validateTime),
  DefaultToolbarComponent: TimePickerToolbar
};
var TimePicker = makePickerWithStateAndWrapper(ResponsiveWrapper, _objectSpread({
  name: 'MuiTimePicker'
}, timePickerConfig));
var DesktopTimePicker = makePickerWithStateAndWrapper(DesktopWrapper, _objectSpread({
  name: 'MuiDesktopTimePicker'
}, timePickerConfig));
var MobileTimePicker = makePickerWithStateAndWrapper(MobileWrapper, _objectSpread({
  name: 'MuiMobileTimePicker'
}, timePickerConfig));
var StaticTimePicker = makePickerWithStateAndWrapper(StaticWrapper, _objectSpread({
  name: 'MuiStaticTimePicker'
}, timePickerConfig));

export { DesktopTimePicker as D, MobileTimePicker as M, StaticTimePicker as S, TimePicker as T, getTextFieldAriaText as g };
//# sourceMappingURL=TimePicker-27087961.js.map
