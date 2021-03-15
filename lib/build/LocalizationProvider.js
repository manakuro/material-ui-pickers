import { createContext, useMemo, createElement } from 'react';
import { func, oneOfType, object, string, node } from 'prop-types';

var MuiPickersAdapterContext = createContext(null);

var LocalizationProvider = function LocalizationProvider(props) {
  var children = props.children,
      Utils = props.dateAdapter,
      dateFormats = props.dateFormats,
      dateLibInstance = props.dateLibInstance,
      locale = props.locale;
  var utils = useMemo(function () {
    return new Utils({
      locale: locale,
      formats: dateFormats,
      instance: dateLibInstance
    });
  }, [Utils, locale, dateFormats, dateLibInstance]);
  return /*#__PURE__*/createElement(MuiPickersAdapterContext.Provider, {
    value: utils
  }, children);
};

process.env.NODE_ENV !== "production" ? LocalizationProvider.propTypes = {
  dateAdapter: func.isRequired,
  locale: oneOfType([object, string]),

  /**
   * Your component tree.
   */
  children: node
} : void 0;

export default LocalizationProvider;
export { MuiPickersAdapterContext };
//# sourceMappingURL=LocalizationProvider.js.map
