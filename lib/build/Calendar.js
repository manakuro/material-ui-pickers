import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import { createElement, cloneElement, useCallback, Fragment } from 'react';
import 'prop-types';
import './LocalizationProvider.js';
import { D as DAY_MARGIN, b as useDefaultProps, a as useNow, u as useUtils, c as DAY_SIZE } from './dimensions-f39eca69.js';
import _extends from '@babel/runtime/helpers/esm/extends';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import '@material-ui/styles/getThemeProps';
import '@babel/runtime/helpers/esm/slicedToArray';
import '@babel/runtime/helpers/esm/typeof';
import './useCanAutoFocus-1eacc580.js';
import { u as useGlobalKeyDown, k as keycode } from './useKeyDown-5aaf69f9.js';
import '@material-ui/core/ButtonBase';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Day } from './Day.js';

var slideAnimationDuration = 350;
var useStyles = makeStyles(function (theme) {
  var slideTransition = theme.transitions.create('transform', {
    duration: slideAnimationDuration,
    easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
  });
  return {
    root: {
      display: 'block',
      position: 'relative',
      overflowX: 'hidden',
      '& > *': {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0
      }
    },
    'slideEnter-left': {
      willChange: 'transform',
      transform: 'translate(100%)',
      zIndex: 1
    },
    'slideEnter-right': {
      willChange: 'transform',
      transform: 'translate(-100%)',
      zIndex: 1
    },
    slideEnterActive: {
      transform: 'translate(0%)',
      transition: slideTransition
    },
    slideExit: {
      transform: 'translate(0%)'
    },
    'slideExitActiveLeft-left': {
      willChange: 'transform',
      transform: 'translate(-100%)',
      transition: slideTransition,
      zIndex: 0
    },
    'slideExitActiveLeft-right': {
      willChange: 'transform',
      transform: 'translate(100%)',
      transition: slideTransition,
      zIndex: 0
    }
  };
}, {
  name: 'MuiPickersSlideTransition'
});
var SlideTransition = function SlideTransition(_ref) {
  var children = _ref.children,
      className = _ref.className,
      reduceAnimations = _ref.reduceAnimations,
      slideDirection = _ref.slideDirection,
      transKey = _ref.transKey,
      other = _objectWithoutProperties(_ref, ["children", "className", "reduceAnimations", "slideDirection", "transKey"]);

  var classes = useStyles();

  if (reduceAnimations) {
    return /*#__PURE__*/createElement("div", {
      className: clsx(classes.root, className)
    }, children);
  }

  var transitionClasses = {
    exit: classes.slideExit,
    enterActive: classes.slideEnterActive,
    // @ts-ignore
    enter: classes["slideEnter-".concat(slideDirection)],
    // @ts-ignore
    exitActive: classes["slideExitActiveLeft-".concat(slideDirection)]
  };
  return /*#__PURE__*/createElement(TransitionGroup, {
    className: clsx(classes.root, className),
    childFactory: function childFactory(element) {
      return cloneElement(element, {
        classNames: transitionClasses
      });
    }
  }, /*#__PURE__*/createElement(CSSTransition, _extends({
    mountOnEnter: true,
    unmountOnExit: true,
    key: transKey,
    timeout: slideAnimationDuration,
    classNames: transitionClasses
  }, other), children));
};

var muiComponentConfig = {
  name: 'MuiPickersCalendar'
};
var useStyles$1 = makeStyles(function (theme) {
  var weeksContainerHeight = (DAY_SIZE + DAY_MARGIN * 4) * 6;
  return {
    root: {
      minHeight: weeksContainerHeight
    },
    loadingContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: weeksContainerHeight
    },
    weekContainer: {
      overflow: 'hidden'
    },
    week: {
      margin: "".concat(DAY_MARGIN, "px 0"),
      display: 'flex',
      justifyContent: 'center'
    },
    iconButton: {
      zIndex: 1,
      backgroundColor: theme.palette.background.paper
    },
    previousMonthButton: {
      marginRight: 12
    },
    daysHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    weekDayLabel: {
      width: 36,
      height: 40,
      margin: '0 2px',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.text.secondary
    }
  };
}, muiComponentConfig);
function Calendar(props) {
  var _useGlobalKeyDown;

  var _useDefaultProps = useDefaultProps(props, muiComponentConfig),
      allowKeyboardControl = _useDefaultProps.allowKeyboardControl,
      allowSameDateSelection = _useDefaultProps.allowSameDateSelection,
      changeFocusedDay = _useDefaultProps.changeFocusedDay,
      className = _useDefaultProps.className,
      currentMonth = _useDefaultProps.currentMonth,
      date = _useDefaultProps.date,
      disableHighlightToday = _useDefaultProps.disableHighlightToday,
      focusedDay = _useDefaultProps.focusedDay,
      isDateDisabled = _useDefaultProps.isDateDisabled,
      isMonthSwitchingAnimating = _useDefaultProps.isMonthSwitchingAnimating,
      loading = _useDefaultProps.loading,
      onChange = _useDefaultProps.onChange,
      onMonthSwitchingAnimationEnd = _useDefaultProps.onMonthSwitchingAnimationEnd,
      reduceAnimations = _useDefaultProps.reduceAnimations,
      renderDay = _useDefaultProps.renderDay,
      _useDefaultProps$rend = _useDefaultProps.renderLoading,
      renderLoading = _useDefaultProps$rend === void 0 ? function () {
    return /*#__PURE__*/createElement("span", {
      "data-mui-test": "loading-progress"
    }, "...");
  } : _useDefaultProps$rend,
      showDaysOutsideCurrentMonth = _useDefaultProps.showDaysOutsideCurrentMonth,
      slideDirection = _useDefaultProps.slideDirection,
      TransitionProps = _useDefaultProps.TransitionProps;

  var now = useNow();
  var utils = useUtils();
  var theme = useTheme();
  var classes = useStyles$1();
  var handleDaySelect = useCallback(function (day) {
    var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'finish';
    // TODO possibly buggy line figure out and add tests
    var finalDate = Array.isArray(date) ? day : utils.mergeDateAndTime(day, date || now);
    onChange(finalDate, isFinish);
  }, [date, now, onChange, utils]);
  var initialDate = Array.isArray(date) ? date[0] : date;
  var nowFocusedDay = focusedDay || initialDate || now;
  useGlobalKeyDown(Boolean(allowKeyboardControl), (_useGlobalKeyDown = {}, _defineProperty(_useGlobalKeyDown, keycode.ArrowUp, function () {
    return changeFocusedDay(utils.addDays(nowFocusedDay, -7));
  }), _defineProperty(_useGlobalKeyDown, keycode.ArrowDown, function () {
    return changeFocusedDay(utils.addDays(nowFocusedDay, 7));
  }), _defineProperty(_useGlobalKeyDown, keycode.ArrowLeft, function () {
    return changeFocusedDay(utils.addDays(nowFocusedDay, theme.direction === 'ltr' ? -1 : 1));
  }), _defineProperty(_useGlobalKeyDown, keycode.ArrowRight, function () {
    return changeFocusedDay(utils.addDays(nowFocusedDay, theme.direction === 'ltr' ? 1 : -1));
  }), _defineProperty(_useGlobalKeyDown, keycode.Home, function () {
    return changeFocusedDay(utils.startOfWeek(nowFocusedDay));
  }), _defineProperty(_useGlobalKeyDown, keycode.End, function () {
    return changeFocusedDay(utils.endOfWeek(nowFocusedDay));
  }), _defineProperty(_useGlobalKeyDown, keycode.PageUp, function () {
    return changeFocusedDay(utils.getNextMonth(nowFocusedDay));
  }), _defineProperty(_useGlobalKeyDown, keycode.PageDown, function () {
    return changeFocusedDay(utils.getPreviousMonth(nowFocusedDay));
  }), _useGlobalKeyDown));
  var currentMonthNumber = utils.getMonth(currentMonth);
  var selectedDates = (Array.isArray(date) ? date : [date]).filter(Boolean).map(function (selectedDateItem) {
    return selectedDateItem && utils.startOfDay(selectedDateItem);
  });
  return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("div", {
    className: classes.daysHeader
  }, utils.getWeekdays().map(function (day, i) {
    return /*#__PURE__*/createElement(Typography, {
      "aria-hidden": true,
      key: day + i.toString(),
      variant: "caption",
      className: classes.weekDayLabel
    }, day.charAt(0).toUpperCase());
  })), loading ? /*#__PURE__*/createElement("div", {
    className: classes.loadingContainer
  }, renderLoading()) : /*#__PURE__*/createElement(SlideTransition, _extends({
    transKey: currentMonthNumber,
    onExited: onMonthSwitchingAnimationEnd,
    reduceAnimations: reduceAnimations,
    slideDirection: slideDirection,
    className: clsx(classes.root, className)
  }, TransitionProps), /*#__PURE__*/createElement("div", {
    role: "grid",
    className: classes.weekContainer
  }, utils.getWeekArray(currentMonth).map(function (week) {
    return /*#__PURE__*/createElement("div", {
      role: "row",
      key: "week-".concat(week[0]),
      className: classes.week
    }, week.map(function (day) {
      var _ref;

      var disabled = isDateDisabled(day);
      var isDayInCurrentMonth = utils.getMonth(day) === currentMonthNumber;
      var dayProps = {
        key: (_ref = day) === null || _ref === void 0 ? void 0 : _ref.toString(),
        day: day,
        role: 'cell',
        isAnimating: isMonthSwitchingAnimating,
        disabled: disabled,
        allowKeyboardControl: allowKeyboardControl,
        allowSameDateSelection: allowSameDateSelection,
        focused: allowKeyboardControl && Boolean(focusedDay) && utils.isSameDay(day, nowFocusedDay),
        today: utils.isSameDay(day, now),
        inCurrentMonth: isDayInCurrentMonth,
        selected: selectedDates.some(function (selectedDate) {
          return selectedDate && utils.isSameDay(selectedDate, day);
        }),
        disableHighlightToday: disableHighlightToday,
        showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
        focusable: allowKeyboardControl && Boolean(nowFocusedDay) && utils.toJsDate(nowFocusedDay).getDate() === utils.toJsDate(day).getDate(),
        onDayFocus: changeFocusedDay,
        onDaySelect: handleDaySelect
      };
      return renderDay ? renderDay(day, selectedDates, dayProps) : /*#__PURE__*/createElement(Day, dayProps);
    }));
  }))));
}
Calendar.displayName = 'Calendar';

export { Calendar, useStyles$1 as useStyles };
//# sourceMappingURL=Calendar.js.map
