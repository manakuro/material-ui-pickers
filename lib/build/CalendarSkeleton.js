import '@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import { createElement } from 'react';
import 'prop-types';
import './LocalizationProvider.js';
import { D as DAY_MARGIN, w as withDefaultProps, c as DAY_SIZE } from './dimensions-f39eca69.js';
import _extends from '@babel/runtime/helpers/esm/extends';
import clsx from 'clsx';
import '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import '@material-ui/styles/getThemeProps';
import '@babel/runtime/helpers/esm/slicedToArray';
import '@babel/runtime/helpers/esm/typeof';
import './useCanAutoFocus-1eacc580.js';
import './useKeyDown-5aaf69f9.js';
import '@material-ui/core/ButtonBase';
import 'react-transition-group';
import './Day.js';
import { useStyles as useStyles$1 } from './Calendar.js';
import Skeleton from '@material-ui/lab/Skeleton';

var muiComponentConfig = {
  name: 'MuiPickersCalendarSkeleton'
};
var useStyles = makeStyles({
  root: {
    alignSelf: 'start'
  },
  daySkeleton: {
    margin: "0 ".concat(DAY_MARGIN, "px")
  },
  hidden: {
    visibility: 'hidden'
  }
}, muiComponentConfig);
var monthMap = [[0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0]];
var CalendarSkeleton = withDefaultProps(muiComponentConfig, function (props) {
  var className = props.className,
      other = _objectWithoutProperties(props, ["className"]);

  var classes = useStyles();
  var calendarClasses = useStyles$1();
  return /*#__PURE__*/createElement("div", _extends({
    className: clsx(classes.root, className)
  }, other), monthMap.map(function (week, index) {
    return /*#__PURE__*/createElement("div", {
      key: index,
      className: calendarClasses.week
    }, week.map(function (day, index2) {
      return /*#__PURE__*/createElement(Skeleton, {
        key: index2,
        variant: "circle",
        width: DAY_SIZE,
        height: DAY_SIZE,
        className: clsx(classes.daySkeleton, day === 0 && classes.hidden)
      });
    }));
  }));
});

export default CalendarSkeleton;
export { CalendarSkeleton, useStyles };
//# sourceMappingURL=CalendarSkeleton.js.map
