import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import { createElement, useRef, useMemo, useEffect, useCallback, forwardRef, memo, Fragment } from 'react';
import { bool, object, number, func, oneOf } from 'prop-types';
import { w as withDefaultProps, u as useUtils, b as useDefaultProps, a as useNow } from './dimensions-f39eca69.js';
import _extends from '@babel/runtime/helpers/esm/extends';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles, fade, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { createSvgIcon } from '@material-ui/core/utils';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import { u as useCanAutoFocus, o as onSpaceOrEnter, a as arrayIncludes, p as pipe } from './useCanAutoFocus-1eacc580.js';
import { g as getMeridiem, c as convertToMeridiem, C as Clock, a as createIsAfterIgnoreDatePart, b as convertValueToMeridiem } from './Clock-c2c3c22b.js';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';

/**
 * @ignore - internal component.
 */

var PenIcon = createSvgIcon( /*#__PURE__*/createElement("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Pen');

/**
 * @ignore - internal component.
 */

var CalendarIcon = createSvgIcon( /*#__PURE__*/createElement("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), 'Calendar');

var useStyles = makeStyles(function (theme) {
  var toolbarBackground = theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background["default"];
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingTop: 16,
      paddingBottom: 16,
      backgroundColor: toolbarBackground,
      color: theme.palette.getContrastText(toolbarBackground)
    },
    toolbarLandscape: {
      height: 'auto',
      maxWidth: 160,
      padding: 16,
      justifyContent: 'flex-start',
      flexWrap: 'wrap'
    },
    dateTitleContainer: {
      flex: 1
    }
  };
}, {
  name: 'MuiPickersToolbar'
});

function defaultGetKeyboardInputSwitchingButtonText(isKeyboardInputOpen) {
  return isKeyboardInputOpen ? 'text input view is open, go to calendar view' : 'calendar view is open, go to text input view';
}

var PickerToolbar = function PickerToolbar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$getMobileKeyboar = _ref.getMobileKeyboardInputViewButtonText,
      getMobileKeyboardInputViewButtonText = _ref$getMobileKeyboar === void 0 ? defaultGetKeyboardInputSwitchingButtonText : _ref$getMobileKeyboar,
      isLandscape = _ref.isLandscape,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      _ref$landscapeDirecti = _ref.landscapeDirection,
      landscapeDirection = _ref$landscapeDirecti === void 0 ? 'column' : _ref$landscapeDirecti,
      penIconClassName = _ref.penIconClassName,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      toolbarTitle = _ref.toolbarTitle;
  var classes = useStyles();
  return /*#__PURE__*/createElement(Toolbar, {
    "data-mui-test": "picker-toolbar",
    className: clsx(classes.root, className, isLandscape && classes.toolbarLandscape)
  }, /*#__PURE__*/createElement(Typography, {
    "data-mui-test": "picker-toolbar-title",
    color: "inherit",
    variant: "overline"
  }, toolbarTitle), /*#__PURE__*/createElement(Grid, {
    container: true,
    justifyContent: "space-between",
    className: classes.dateTitleContainer,
    direction: isLandscape ? landscapeDirection : 'row',
    alignItems: isLandscape ? 'flex-start' : 'flex-end'
  }, children, /*#__PURE__*/createElement(IconButton, {
    onClick: toggleMobileKeyboardView,
    className: penIconClassName,
    color: "inherit",
    "data-mui-test": "toggle-mobile-keyboard-view",
    "aria-label": getMobileKeyboardInputViewButtonText(isMobileKeyboardViewOpen)
  }, isMobileKeyboardViewOpen ? /*#__PURE__*/createElement(CalendarIcon, {
    color: "inherit"
  }) : /*#__PURE__*/createElement(PenIcon, {
    color: "inherit"
  }))));
};

var positions = {
  0: [0, 40],
  1: [55, 19.6],
  2: [94.4, 59.5],
  3: [109, 114],
  4: [94.4, 168.5],
  5: [54.5, 208.4],
  6: [0, 223],
  7: [-54.5, 208.4],
  8: [-94.4, 168.5],
  9: [-109, 114],
  10: [-94.4, 59.5],
  11: [-54.5, 19.6],
  12: [0, 5],
  13: [36.9, 49.9],
  14: [64, 77],
  15: [74, 114],
  16: [64, 151],
  17: [37, 178],
  18: [0, 188],
  19: [-37, 178],
  20: [-64, 151],
  21: [-74, 114],
  22: [-64, 77],
  23: [-37, 50]
};
var useStyles$1 = makeStyles(function (theme) {
  var size = 32;
  var clockNumberColor = theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.text.secondary;
  return {
    root: {
      outline: 0,
      width: size,
      height: size,
      userSelect: 'none',
      position: 'absolute',
      left: "calc((100% - ".concat(size, "px) / 2)"),
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      color: clockNumberColor,
      '&:focused': {
        backgroundColor: theme.palette.background.paper
      }
    },
    clockNumberSelected: {
      color: theme.palette.primary.contrastText
    },
    clockNumberDisabled: {
      pointerEvents: 'none',
      color: fade(clockNumberColor, 0.2)
    }
  };
}, {
  name: 'MuiPickersClockNumber'
});
var ClockNumber = function ClockNumber(props) {
  var disabled = props.disabled,
      getClockNumberText = props.getClockNumberText,
      index = props.index,
      isInner = props.isInner,
      label = props.label,
      onSelect = props.onSelect,
      selected = props.selected;
  var classes = useStyles$1();
  var canAutoFocus = useCanAutoFocus();
  var ref = useRef(null);
  var className = clsx(classes.root, selected && classes.clockNumberSelected, disabled && classes.clockNumberDisabled);
  var transformStyle = useMemo(function () {
    var position = positions[index];
    return {
      transform: "translate(".concat(position[0], "px, ").concat(position[1], "px")
    };
  }, [index]);
  useEffect(function () {
    if (canAutoFocus && selected && ref.current) {
      ref.current.focus();
    }
  }, [canAutoFocus, selected]);
  return /*#__PURE__*/createElement(ButtonBase, {
    focusRipple: true,
    centerRipple: true,
    ref: ref,
    "aria-disabled": disabled,
    tabIndex: disabled ? -1 : 0,
    component: "span",
    className: className,
    style: transformStyle,
    "aria-label": getClockNumberText(label),
    onKeyDown: onSpaceOrEnter(function () {
      return onSelect('finish');
    })
  }, /*#__PURE__*/createElement(Typography, {
    variant: isInner ? 'body2' : 'body1'
  }, label));
};

var getHourNumbers = function getHourNumbers(_ref) {
  var ampm = _ref.ampm,
      date = _ref.date,
      getClockNumberText = _ref.getClockNumberText,
      isDisabled = _ref.isDisabled,
      onChange = _ref.onChange,
      utils = _ref.utils;
  var currentHours = date ? utils.getHours(date) : null;
  var hourNumbers = [];
  var startHour = ampm ? 1 : 0;
  var endHour = ampm ? 12 : 23;

  var isSelected = function isSelected(hour) {
    if (currentHours === null) {
      return false;
    }

    if (ampm) {
      if (hour === 12) {
        return currentHours === 12 || currentHours === 0;
      }

      return currentHours === hour || currentHours - 12 === hour;
    }

    return currentHours === hour;
  };

  var _loop = function _loop(_hour) {
    var label = _hour.toString();

    if (_hour === 0) {
      label = '00';
    }

    var isInner = !ampm && (_hour === 0 || _hour > 12);
    hourNumbers.push( /*#__PURE__*/createElement(ClockNumber, {
      key: _hour,
      index: _hour,
      isInner: isInner,
      selected: isSelected(_hour),
      disabled: isDisabled(_hour),
      label: utils.formatNumber(label),
      onSelect: function onSelect() {
        return onChange(_hour, 'finish');
      },
      getClockNumberText: getClockNumberText
    }));
  };

  for (var _hour = startHour; _hour <= endHour; _hour += 1) {
    _loop(_hour);
  }

  return hourNumbers;
};
var getMinutesNumbers = function getMinutesNumbers(_ref2) {
  var utils = _ref2.utils,
      value = _ref2.value,
      onChange = _ref2.onChange,
      isDisabled = _ref2.isDisabled,
      getClockNumberText = _ref2.getClockNumberText;
  var f = utils.formatNumber;
  return [[5, f('05')], [10, f('10')], [15, f('15')], [20, f('20')], [25, f('25')], [30, f('30')], [35, f('35')], [40, f('40')], [45, f('45')], [50, f('50')], [55, f('55')], [0, f('00')]].map(function (_ref3, index) {
    var _ref4 = _slicedToArray(_ref3, 2),
        numberValue = _ref4[0],
        label = _ref4[1];

    return /*#__PURE__*/createElement(ClockNumber, {
      key: numberValue,
      label: label,
      index: index + 1,
      disabled: isDisabled(numberValue),
      selected: numberValue === value,
      onSelect: function onSelect(isFinish) {
        return onChange(numberValue, isFinish);
      },
      getClockNumberText: getClockNumberText
    });
  });
};

var useStyles$2 = makeStyles(function (theme) {
  var textColor = theme.palette.type === 'light' ? theme.palette.primary.contrastText : theme.palette.getContrastText(theme.palette.background["default"]);
  return {
    root: {
      transition: theme.transitions.create('color'),
      color: fade(textColor, 0.54),
      '&$selected': {
        color: textColor
      }
    },
    selected: {}
  };
}, {
  name: 'MuiPickersToolbarText'
});

var ToolbarText = function ToolbarText(props) {
  var className = props.className,
      selected = props.selected,
      value = props.value,
      other = _objectWithoutProperties(props, ["className", "selected", "value"]);

  var classes = useStyles$2();
  return /*#__PURE__*/createElement(Typography, _extends({
    className: clsx(classes.root, className, selected && classes.selected)
  }, other), value);
};

var useStyles$3 = makeStyles({
  root: {
    padding: 0,
    minWidth: '16px',
    textTransform: 'none'
  }
}, {
  name: 'MuiPickersToolbarButton'
});
var ToolbarButton = function ToolbarButton(props) {
  var align = props.align,
      className = props.className,
      selected = props.selected,
      typographyClassName = props.typographyClassName,
      value = props.value,
      variant = props.variant,
      other = _objectWithoutProperties(props, ["align", "className", "selected", "typographyClassName", "value", "variant"]);

  var classes = useStyles$3();
  return /*#__PURE__*/createElement(Button, _extends({
    "data-mui-test": "toolbar-button",
    variant: "text",
    className: clsx(classes.root, className)
  }, other), /*#__PURE__*/createElement(ToolbarText, {
    align: align,
    className: typographyClassName,
    variant: variant,
    value: value,
    selected: selected
  }));
};
ToolbarButton.displayName = 'ToolbarButton';

var muiComponentConfig = {
  name: 'MuiPickersTimePickerToolbar'
};
var useStyles$4 = makeStyles({
  separator: {
    outline: 0,
    margin: '0 4px 0 2px',
    cursor: 'default'
  },
  hourMinuteLabel: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  hourMinuteLabelLandscape: {
    marginTop: 'auto'
  },
  hourMinuteLabelReverse: {
    flexDirection: 'row-reverse'
  },
  ampmSelection: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 'auto',
    marginLeft: 12
  },
  ampmLandscape: {
    margin: '4px 0 auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexBasis: '100%'
  },
  ampmLabel: {
    fontSize: 17
  },
  penIconLandscape: {
    marginTop: 'auto'
  }
}, muiComponentConfig);
function useMeridiemMode(date, ampm, onChange) {
  var utils = useUtils();
  var meridiemMode = getMeridiem(date, utils);
  var handleMeridiemChange = useCallback(function (mode) {
    var timeWithMeridiem = convertToMeridiem(date, mode, Boolean(ampm), utils);
    onChange(timeWithMeridiem, 'partial');
  }, [ampm, date, onChange, utils]);
  return {
    meridiemMode: meridiemMode,
    handleMeridiemChange: handleMeridiemChange
  };
}
var clockTypographyVariant = 'h3';
var TimePickerToolbar = withDefaultProps(muiComponentConfig, function (_ref) {
  var ampm = _ref.ampm,
      ampmInClock = _ref.ampmInClock,
      date = _ref.date,
      isLandscape = _ref.isLandscape,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      onChange = _ref.onChange,
      openView = _ref.openView,
      setOpenView = _ref.setOpenView,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      _ref$toolbarTitle = _ref.toolbarTitle,
      toolbarTitle = _ref$toolbarTitle === void 0 ? 'SELECT TIME' : _ref$toolbarTitle,
      views = _ref.views,
      other = _objectWithoutProperties(_ref, ["ampm", "ampmInClock", "date", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarTitle", "views"]);

  var utils = useUtils();
  var theme = useTheme();
  var classes = useStyles$4();
  var showAmPmControl = Boolean(ampm && !ampmInClock);

  var _useMeridiemMode = useMeridiemMode(date, ampm, onChange),
      meridiemMode = _useMeridiemMode.meridiemMode,
      handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

  var formatHours = function formatHours(time) {
    return ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');
  };

  var separator = /*#__PURE__*/createElement(ToolbarText, {
    tabIndex: -1,
    value: ":",
    variant: clockTypographyVariant,
    selected: false,
    className: classes.separator
  });
  return /*#__PURE__*/createElement(PickerToolbar, _extends({
    landscapeDirection: "row",
    toolbarTitle: toolbarTitle,
    isLandscape: isLandscape,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    penIconClassName: clsx(isLandscape && classes.penIconLandscape)
  }, other), /*#__PURE__*/createElement("div", {
    className: clsx(classes.hourMinuteLabel, isLandscape && classes.hourMinuteLabelLandscape, theme.direction === 'rtl' && classes.hourMinuteLabelReverse)
  }, arrayIncludes(views, 'hours') && /*#__PURE__*/createElement(ToolbarButton, {
    "data-mui-test": "hours",
    tabIndex: -1,
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView('hours');
    },
    selected: openView === 'hours',
    value: date ? formatHours(date) : '--'
  }), arrayIncludes(views, ['hours', 'minutes']) && separator, arrayIncludes(views, 'minutes') && /*#__PURE__*/createElement(ToolbarButton, {
    "data-mui-test": "minutes",
    tabIndex: -1,
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView('minutes');
    },
    selected: openView === 'minutes',
    value: date ? utils.format(date, 'minutes') : '--'
  }), arrayIncludes(views, ['minutes', 'seconds']) && separator, arrayIncludes(views, 'seconds') && /*#__PURE__*/createElement(ToolbarButton, {
    "data-mui-test": "seconds",
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView('seconds');
    },
    selected: openView === 'seconds',
    value: date ? utils.format(date, 'seconds') : '--'
  })), showAmPmControl && /*#__PURE__*/createElement("div", {
    className: clsx(classes.ampmSelection, isLandscape && classes.ampmLandscape)
  }, /*#__PURE__*/createElement(ToolbarButton, {
    disableRipple: true,
    variant: "subtitle2",
    "data-mui-test": "toolbar-am-btn",
    selected: meridiemMode === 'am',
    typographyClassName: classes.ampmLabel,
    value: utils.getMeridiemText('am'),
    onClick: function onClick() {
      return handleMeridiemChange('am');
    }
  }), /*#__PURE__*/createElement(ToolbarButton, {
    disableRipple: true,
    variant: "subtitle2",
    "data-mui-test": "toolbar-pm-btn",
    selected: meridiemMode === 'pm',
    typographyClassName: classes.ampmLabel,
    value: utils.getMeridiemText('pm'),
    onClick: function onClick() {
      return handleMeridiemChange('pm');
    }
  })));
});

/**
 * @ignore - internal component.
 */

var ArrowLeftIcon = createSvgIcon( /*#__PURE__*/createElement("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), 'ArrowLeft');

/**
 * @ignore - internal component.
 */

var ArrowRightIcon = createSvgIcon( /*#__PURE__*/createElement("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), 'ArrowRight');

var useStyles$5 = makeStyles(function (theme) {
  return {
    root: {},
    iconButton: {
      zIndex: 1,
      backgroundColor: theme.palette.background.paper
    },
    previousMonthButtonMargin: {
      marginRight: 24
    },
    hidden: {
      visibility: 'hidden'
    }
  };
}, {
  name: 'MuiPickersArrowSwitcher'
});
var PureArrowSwitcher = forwardRef(function (props, ref) {
  var className = props.className,
      isLeftDisabled = props.isLeftDisabled,
      isLeftHidden = props.isLeftHidden,
      isRightDisabled = props.isRightDisabled,
      isRightHidden = props.isRightHidden,
      leftArrowButtonProps = props.leftArrowButtonProps,
      leftArrowButtonText = props.leftArrowButtonText,
      _props$leftArrowIcon = props.leftArrowIcon,
      leftArrowIcon = _props$leftArrowIcon === void 0 ? /*#__PURE__*/createElement(ArrowLeftIcon, null) : _props$leftArrowIcon,
      onLeftClick = props.onLeftClick,
      onRightClick = props.onRightClick,
      rightArrowButtonProps = props.rightArrowButtonProps,
      rightArrowButtonText = props.rightArrowButtonText,
      _props$rightArrowIcon = props.rightArrowIcon,
      rightArrowIcon = _props$rightArrowIcon === void 0 ? /*#__PURE__*/createElement(ArrowRightIcon, null) : _props$rightArrowIcon,
      text = props.text,
      other = _objectWithoutProperties(props, ["className", "isLeftDisabled", "isLeftHidden", "isRightDisabled", "isRightHidden", "leftArrowButtonProps", "leftArrowButtonText", "leftArrowIcon", "onLeftClick", "onRightClick", "rightArrowButtonProps", "rightArrowButtonText", "rightArrowIcon", "text"]);

  var classes = useStyles$5();
  var theme = useTheme();
  var isRtl = theme.direction === 'rtl';
  return /*#__PURE__*/createElement("div", _extends({
    className: clsx(classes.root, className),
    ref: ref
  }, other), props.prev && /*#__PURE__*/createElement(IconButton, _extends({
    "data-mui-test": "previous-arrow-button",
    size: "small",
    "aria-label": leftArrowButtonText
  }, leftArrowButtonProps, {
    disabled: isLeftDisabled,
    onClick: onLeftClick,
    className: clsx(classes.iconButton, leftArrowButtonProps === null || leftArrowButtonProps === void 0 ? void 0 : leftArrowButtonProps.className, isLeftHidden && classes.hidden, !text && classes.previousMonthButtonMargin)
  }), isRtl ? rightArrowIcon : leftArrowIcon), props.next && /*#__PURE__*/createElement(IconButton, _extends({
    "data-mui-test": "next-arrow-button",
    size: "small",
    "aria-label": rightArrowButtonText
  }, rightArrowButtonProps, {
    disabled: isRightDisabled,
    onClick: onRightClick,
    className: clsx(classes.iconButton, rightArrowButtonProps === null || rightArrowButtonProps === void 0 ? void 0 : rightArrowButtonProps.className, Boolean(isRightHidden) && classes.hidden)
  }), isRtl ? leftArrowIcon : rightArrowIcon));
});
PureArrowSwitcher.displayName = 'ArrowSwitcher';
var ArrowSwitcher = memo(PureArrowSwitcher);

var muiPickersComponentConfig = {
  name: 'MuiPickersClockView'
};
var useStyles$6 = makeStyles(function () {
  return {
    arrowSwitcher: {
      position: 'absolute',
      right: 12,
      top: 15
    }
  };
}, muiPickersComponentConfig);

function getMinutesAriaText(minute) {
  return "".concat(minute, " minutes");
}

var getHoursAriaText = function getHoursAriaText(hour) {
  return "".concat(hour, " hours");
};

var getSecondsAriaText = function getSecondsAriaText(seconds) {
  return "".concat(seconds, " seconds");
};

function ClockView(props) {
  var _useDefaultProps = useDefaultProps(props, muiPickersComponentConfig),
      allowKeyboardControl = _useDefaultProps.allowKeyboardControl,
      ampm = _useDefaultProps.ampm,
      ampmInClock = _useDefaultProps.ampmInClock,
      date = _useDefaultProps.date,
      disableIgnoringDatePartForTimeValidation = _useDefaultProps.disableIgnoringDatePartForTimeValidation,
      _useDefaultProps$getH = _useDefaultProps.getHoursClockNumberText,
      getHoursClockNumberText = _useDefaultProps$getH === void 0 ? getHoursAriaText : _useDefaultProps$getH,
      _useDefaultProps$getM = _useDefaultProps.getMinutesClockNumberText,
      getMinutesClockNumberText = _useDefaultProps$getM === void 0 ? getMinutesAriaText : _useDefaultProps$getM,
      _useDefaultProps$getS = _useDefaultProps.getSecondsClockNumberText,
      getSecondsClockNumberText = _useDefaultProps$getS === void 0 ? getSecondsAriaText : _useDefaultProps$getS,
      leftArrowButtonProps = _useDefaultProps.leftArrowButtonProps,
      _useDefaultProps$left = _useDefaultProps.leftArrowButtonText,
      leftArrowButtonText = _useDefaultProps$left === void 0 ? 'open previous view' : _useDefaultProps$left,
      leftArrowIcon = _useDefaultProps.leftArrowIcon,
      maxTime = _useDefaultProps.maxTime,
      minTime = _useDefaultProps.minTime,
      _useDefaultProps$minu = _useDefaultProps.minutesStep,
      minutesStep = _useDefaultProps$minu === void 0 ? 1 : _useDefaultProps$minu,
      nextViewAvailable = _useDefaultProps.nextViewAvailable,
      onChange = _useDefaultProps.onChange,
      onDateChange = _useDefaultProps.onDateChange,
      openNextView = _useDefaultProps.openNextView,
      openPreviousView = _useDefaultProps.openPreviousView,
      previousViewAvailable = _useDefaultProps.previousViewAvailable,
      rightArrowButtonProps = _useDefaultProps.rightArrowButtonProps,
      _useDefaultProps$righ = _useDefaultProps.rightArrowButtonText,
      rightArrowButtonText = _useDefaultProps$righ === void 0 ? 'open next view' : _useDefaultProps$righ,
      rightArrowIcon = _useDefaultProps.rightArrowIcon,
      shouldDisableTime = _useDefaultProps.shouldDisableTime,
      showViewSwitcher = _useDefaultProps.showViewSwitcher,
      type = _useDefaultProps.type;

  var now = useNow();
  var utils = useUtils();
  var classes = useStyles$6();
  var dateOrNow = date || now;

  var _useMeridiemMode = useMeridiemMode(dateOrNow, ampm, onDateChange),
      meridiemMode = _useMeridiemMode.meridiemMode,
      handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

  var isTimeDisabled = useCallback(function (rawValue, type) {
    if (date === null) {
      return false;
    }

    var validateTimeValue = function validateTimeValue(getRequestedTimePoint) {
      var isAfterComparingFn = createIsAfterIgnoreDatePart(Boolean(disableIgnoringDatePartForTimeValidation), utils);
      return Boolean(minTime && isAfterComparingFn(minTime, getRequestedTimePoint('end')) || maxTime && isAfterComparingFn(getRequestedTimePoint('start'), maxTime) || shouldDisableTime && shouldDisableTime(rawValue, type));
    };

    switch (type) {
      case 'hours':
        {
          var hoursWithMeridiem = convertValueToMeridiem(rawValue, meridiemMode, Boolean(ampm));
          return validateTimeValue(function (when) {
            return pipe(function (currentDate) {
              return utils.setHours(currentDate, hoursWithMeridiem);
            }, function (dateWithHours) {
              return utils.setMinutes(dateWithHours, when === 'start' ? 0 : 59);
            }, function (dateWithMinutes) {
              return utils.setSeconds(dateWithMinutes, when === 'start' ? 0 : 59);
            })(date);
          });
        }

      case 'minutes':
        return validateTimeValue(function (when) {
          return pipe(function (currentDate) {
            return utils.setMinutes(currentDate, rawValue);
          }, function (dateWithMinutes) {
            return utils.setSeconds(dateWithMinutes, when === 'start' ? 0 : 59);
          })(date);
        });

      case 'seconds':
        return validateTimeValue(function () {
          return utils.setSeconds(date, rawValue);
        });

      default:
        throw new Error('not supported');
    }
  }, [ampm, date, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, shouldDisableTime, utils]);
  var viewProps = useMemo(function () {
    switch (type) {
      case 'hours':
        {
          var handleHoursChange = function handleHoursChange(value, isFinish) {
            var valueWithMeridiem = convertValueToMeridiem(value, meridiemMode, Boolean(ampm));
            onChange(utils.setHours(dateOrNow, valueWithMeridiem), isFinish);
          };

          return {
            onChange: handleHoursChange,
            value: utils.getHours(dateOrNow),
            children: getHourNumbers({
              date: date,
              utils: utils,
              ampm: Boolean(ampm),
              onChange: handleHoursChange,
              getClockNumberText: getHoursClockNumberText,
              isDisabled: function isDisabled(value) {
                return isTimeDisabled(value, 'hours');
              }
            })
          };
        }

      case 'minutes':
        {
          var minutesValue = utils.getMinutes(dateOrNow);

          var handleMinutesChange = function handleMinutesChange(value, isFinish) {
            onChange(utils.setMinutes(dateOrNow, value), isFinish);
          };

          return {
            value: minutesValue,
            onChange: handleMinutesChange,
            children: getMinutesNumbers({
              utils: utils,
              value: minutesValue,
              onChange: handleMinutesChange,
              getClockNumberText: getMinutesClockNumberText,
              isDisabled: function isDisabled(value) {
                return isTimeDisabled(value, 'minutes');
              }
            })
          };
        }

      case 'seconds':
        {
          var secondsValue = utils.getSeconds(dateOrNow);

          var handleSecondsChange = function handleSecondsChange(value, isFinish) {
            onChange(utils.setSeconds(dateOrNow, value), isFinish);
          };

          return {
            value: secondsValue,
            onChange: handleSecondsChange,
            children: getMinutesNumbers({
              utils: utils,
              value: secondsValue,
              onChange: handleSecondsChange,
              getClockNumberText: getSecondsClockNumberText,
              isDisabled: function isDisabled(value) {
                return isTimeDisabled(value, 'seconds');
              }
            })
          };
        }

      default:
        throw new Error('You must provide the type for ClockView');
    }
  }, [type, utils, date, ampm, getHoursClockNumberText, getMinutesClockNumberText, getSecondsClockNumberText, meridiemMode, onChange, dateOrNow, isTimeDisabled]);
  return /*#__PURE__*/createElement(Fragment, null, showViewSwitcher && /*#__PURE__*/createElement(ArrowSwitcher, {
    className: classes.arrowSwitcher,
    leftArrowButtonProps: leftArrowButtonProps,
    rightArrowButtonProps: rightArrowButtonProps,
    leftArrowButtonText: leftArrowButtonText,
    rightArrowButtonText: rightArrowButtonText,
    leftArrowIcon: leftArrowIcon,
    rightArrowIcon: rightArrowIcon,
    onLeftClick: openPreviousView,
    onRightClick: openNextView,
    isLeftDisabled: previousViewAvailable,
    isRightDisabled: nextViewAvailable
  }), /*#__PURE__*/createElement(Clock, _extends({
    date: date,
    ampmInClock: ampmInClock // @ts-expect-error FIX ME
    ,
    onDateChange: onDateChange,
    type: type,
    ampm: ampm,
    minutesStep: minutesStep,
    allowKeyboardControl: allowKeyboardControl,
    isTimeDisabled: isTimeDisabled,
    meridiemMode: meridiemMode,
    handleMeridiemChange: handleMeridiemChange
  }, viewProps)));
}
process.env.NODE_ENV !== "production" ? ClockView.propTypes = {
  ampm: bool,
  date: object,
  minutesStep: number,
  onChange: func.isRequired,
  type: oneOf(['minutes', 'hours', 'seconds']).isRequired
} : void 0;
ClockView.displayName = 'ClockView';

export { ArrowSwitcher as A, ClockView as C, PickerToolbar as P, ToolbarButton as T, TimePickerToolbar as a, ToolbarText as b, CalendarIcon as c, useStyles$6 as u };
//# sourceMappingURL=ClockView-54ff1e5b.js.map
