import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import { memo, useRef, useEffect, createElement } from 'react';
import { bool } from 'prop-types';
import './LocalizationProvider.js';
import { c as DAY_SIZE, D as DAY_MARGIN, b as useDefaultProps, u as useUtils } from './dimensions-f39eca69.js';
import _extends from '@babel/runtime/helpers/esm/extends';
import clsx from 'clsx';
import { makeStyles, fade } from '@material-ui/core/styles';
import '@material-ui/styles/getThemeProps';
import '@babel/runtime/helpers/esm/slicedToArray';
import '@babel/runtime/helpers/esm/typeof';
import { u as useCanAutoFocus, o as onSpaceOrEnter } from './useCanAutoFocus-1eacc580.js';
import ButtonBase from '@material-ui/core/ButtonBase';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var muiComponentConfig = {
  name: 'MuiPickersDay'
};
var useStyles = makeStyles(function (theme) {
  return {
    root: _objectSpread(_objectSpread({}, theme.typography.caption), {}, {
      width: DAY_SIZE,
      height: DAY_SIZE,
      borderRadius: '50%',
      padding: 0,
      // background required here to prevent collides with the other days when animating with transition group
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity)
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity),
        '&$selected': {
          willChange: 'background-color',
          backgroundColor: theme.palette.primary.dark
        }
      },
      '&$selected': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration["short"]
        }),
        '&:hover': {
          willChange: 'background-color',
          backgroundColor: theme.palette.primary.dark
        }
      },
      '&$disabled': {
        color: theme.palette.text.secondary
      }
    }),
    dayWithMargin: {
      margin: "0 ".concat(DAY_MARGIN, "px")
    },
    dayOutsideMonth: {
      color: theme.palette.text.secondary
    },
    hiddenDaySpacingFiller: {
      visibility: 'hidden'
    },
    today: {
      '&:not($selected)': {
        border: "1px solid ".concat(theme.palette.text.secondary)
      }
    },
    dayLabel: {// need for overrides
    },
    selected: {},
    disabled: {}
  };
}, muiComponentConfig);

function PureDay(props) {
  var _useDefaultProps = useDefaultProps(props, muiComponentConfig),
      allowKeyboardControl = _useDefaultProps.allowKeyboardControl,
      _useDefaultProps$allo = _useDefaultProps.allowSameDateSelection,
      allowSameDateSelection = _useDefaultProps$allo === void 0 ? false : _useDefaultProps$allo,
      className = _useDefaultProps.className,
      day = _useDefaultProps.day,
      _useDefaultProps$disa = _useDefaultProps.disabled,
      disabled = _useDefaultProps$disa === void 0 ? false : _useDefaultProps$disa,
      _useDefaultProps$disa2 = _useDefaultProps.disableHighlightToday,
      disableHighlightToday = _useDefaultProps$disa2 === void 0 ? false : _useDefaultProps$disa2,
      _useDefaultProps$disa3 = _useDefaultProps.disableMargin,
      disableMargin = _useDefaultProps$disa3 === void 0 ? false : _useDefaultProps$disa3,
      _useDefaultProps$focu = _useDefaultProps.focusable,
      focusable = _useDefaultProps$focu === void 0 ? false : _useDefaultProps$focu,
      _useDefaultProps$focu2 = _useDefaultProps.focused,
      focused = _useDefaultProps$focu2 === void 0 ? false : _useDefaultProps$focu2,
      hidden = _useDefaultProps.hidden,
      isInCurrentMonth = _useDefaultProps.inCurrentMonth,
      isAnimating = _useDefaultProps.isAnimating,
      onClick = _useDefaultProps.onClick,
      onDayFocus = _useDefaultProps.onDayFocus,
      onDaySelect = _useDefaultProps.onDaySelect,
      onFocus = _useDefaultProps.onFocus,
      onKeyDown = _useDefaultProps.onKeyDown,
      _useDefaultProps$sele = _useDefaultProps.selected,
      selected = _useDefaultProps$sele === void 0 ? false : _useDefaultProps$sele,
      _useDefaultProps$show = _useDefaultProps.showDaysOutsideCurrentMonth,
      showDaysOutsideCurrentMonth = _useDefaultProps$show === void 0 ? false : _useDefaultProps$show,
      _useDefaultProps$toda = _useDefaultProps.today,
      isToday = _useDefaultProps$toda === void 0 ? false : _useDefaultProps$toda,
      other = _objectWithoutProperties(_useDefaultProps, ["allowKeyboardControl", "allowSameDateSelection", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "focusable", "focused", "hidden", "inCurrentMonth", "isAnimating", "onClick", "onDayFocus", "onDaySelect", "onFocus", "onKeyDown", "selected", "showDaysOutsideCurrentMonth", "today"]);

  var utils = useUtils();
  var classes = useStyles();
  var canAutoFocus = useCanAutoFocus();
  var ref = useRef(null);
  useEffect(function () {
    if (focused && !disabled && !isAnimating && isInCurrentMonth && ref.current && allowKeyboardControl && canAutoFocus) {
      ref.current.focus();
    }
  }, [allowKeyboardControl, canAutoFocus, disabled, focused, isAnimating, isInCurrentMonth]);

  var handleFocus = function handleFocus(event) {
    if (!focused && onDayFocus) {
      onDayFocus(day);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  var handleClick = function handleClick(event) {
    if (!allowSameDateSelection && selected) return;

    if (!disabled) {
      onDaySelect(day, 'finish');
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleKeyDown = onSpaceOrEnter(function () {
    if (!disabled) {
      onDaySelect(day, 'finish');
    }
  }, onKeyDown);
  var dayClassName = clsx(classes.root, className, selected && classes.selected, !disableMargin && classes.dayWithMargin, !disableHighlightToday && isToday && classes.today, !isInCurrentMonth && showDaysOutsideCurrentMonth && classes.dayOutsideMonth);

  if (!isInCurrentMonth && !showDaysOutsideCurrentMonth) {
    // Do not render button and not attach any listeners for empty days
    return /*#__PURE__*/createElement("div", {
      "aria-hidden": true,
      className: clsx(dayClassName, classes.hiddenDaySpacingFiller)
    });
  }

  return /*#__PURE__*/createElement(ButtonBase, _extends({
    ref: ref,
    centerRipple: true,
    "data-mui-test": "day",
    disabled: disabled,
    "aria-label": utils.format(day, 'fullDate'),
    tabIndex: focused || focusable ? 0 : -1,
    className: dayClassName
  }, other, {
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onClick: handleClick
  }), /*#__PURE__*/createElement("span", {
    className: classes.dayLabel
  }, utils.format(day, 'dayOfMonth')));
}

var areDayPropsEqual = function areDayPropsEqual(prevProps, nextProps) {
  return prevProps.focused === nextProps.focused && prevProps.focusable === nextProps.focusable && prevProps.isAnimating === nextProps.isAnimating && prevProps.today === nextProps.today && prevProps.disabled === nextProps.disabled && prevProps.selected === nextProps.selected && prevProps.allowKeyboardControl === nextProps.allowKeyboardControl && prevProps.disableMargin === nextProps.disableMargin && prevProps.showDaysOutsideCurrentMonth === nextProps.showDaysOutsideCurrentMonth && prevProps.disableHighlightToday === nextProps.disableHighlightToday && prevProps.className === nextProps.className && prevProps.inCurrentMonth === nextProps.inCurrentMonth && prevProps.onDayFocus === nextProps.onDayFocus && prevProps.onDaySelect === nextProps.onDaySelect;
};
PureDay.displayName = 'PickersDay';
process.env.NODE_ENV !== "production" ? PureDay.propTypes = {
  disabled: bool,
  selected: bool,
  today: bool
} : void 0; // keep typings of original component and not loose generic

var Day = memo(PureDay, areDayPropsEqual);

export { Day, areDayPropsEqual, useStyles };
//# sourceMappingURL=Day.js.map
