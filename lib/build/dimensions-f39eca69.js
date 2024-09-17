import { useContext, useRef, createElement } from 'react';
import { MuiPickersAdapterContext } from './LocalizationProvider.js';
import { useTheme } from '@material-ui/core/styles';
import getThemeProps from '@material-ui/styles/getThemeProps';

// TODO uncomment when syntax will be allowed by next babel
function checkUtils(utils)
/* :asserts utils is MuiPickersAdapter */
{
  if (!utils) {
    throw new Error('Can not find utils in context. It looks like you forgot to wrap your component in LocalizationProvider, or pass dateAdapter prop directly.');
  }
}

function useUtils() {
  var utils = useContext(MuiPickersAdapterContext);
  checkUtils(utils);
  return utils;
}
function useNow() {
  var utils = useUtils();
  var now = useRef(utils.date());
  return now.current;
}

function useDefaultProps(props, _ref) {
  var name = _ref.name;
  var theme = useTheme();
  return getThemeProps({
    props: props,
    theme: theme,
    name: name
  });
}
function withDefaultProps(componentConfig, Component) {
  var componentName = componentConfig.name.replace('Mui', '');

  var WithDefaultProps = function WithDefaultProps(props) {
    Component.displayName = componentName;
    var propsWithDefault = useDefaultProps(props, componentConfig);
    return /*#__PURE__*/createElement(Component, propsWithDefault);
  };

  WithDefaultProps.displayName = "WithDefaultProps(".concat(componentName, ")");
  return WithDefaultProps;
}

var DIALOG_WIDTH = 320;
var DIALOG_WIDTH_WIDER = 325;
var VIEW_HEIGHT = 358;
var DAY_SIZE = 36;
var DAY_MARGIN = 2;
var IS_TOUCH_DEVICE_MEDIA = '@media (pointer: fine)';

export { DAY_MARGIN as D, IS_TOUCH_DEVICE_MEDIA as I, VIEW_HEIGHT as V, useNow as a, useDefaultProps as b, DAY_SIZE as c, DIALOG_WIDTH as d, DIALOG_WIDTH_WIDER as e, useUtils as u, withDefaultProps as w };
//# sourceMappingURL=dimensions-f39eca69.js.map
