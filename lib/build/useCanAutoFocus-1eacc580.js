import { useCallback, useContext, createContext, useState, useEffect } from 'react';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import _typeof from '@babel/runtime/helpers/esm/typeof';

/* Use it instead of .includes method for IE support */
function arrayIncludes(array, itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.every(function (item) {
      return array.indexOf(item) !== -1;
    });
  }

  return array.indexOf(itemOrItems) !== -1;
}
var onSpaceOrEnter = function onSpaceOrEnter(innerFn, onFocus) {
  return function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      innerFn(); // prevent any side effects

      event.preventDefault();
      event.stopPropagation();
    }

    if (onFocus) {
      onFocus(event);
    }
  };
};
/* Quick untyped helper to improve function composition readability */

var pipe = function pipe() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.reduceRight(function (prevFn, nextFn) {
    return function () {
      return nextFn(prevFn.apply(void 0, arguments));
    };
  }, function (value) {
    return value;
  });
};
var executeInTheNextEventLoopTick = function executeInTheNextEventLoopTick(fn) {
  setTimeout(fn, 0);
};
function createDelegatedEventHandler(fn, onEvent) {
  return function (event) {
    fn(event);

    if (onEvent) {
      onEvent(event);
    }
  };
}
function mergeRefs(refs) {
  return function (value) {
    refs.forEach(function (ref) {
      if (typeof ref === 'function') {
        ref(value);
      } else if (_typeof(ref) === 'object' && ref != null) {
        // @ts-ignore .current is not a readonly, hold on ts
        ref.current = value;
      }
    });
  };
}

var CanAutoFocusContext = createContext(true);
var useCanAutoFocus = function useCanAutoFocus() {
  return useContext(CanAutoFocusContext);
};
function useAutoFocusControl(open) {
  var _React$useState = useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      canAutoFocus = _React$useState2[0],
      setCanAutoFocus = _React$useState2[1];

  useEffect(function () {
    if (!open) {
      setCanAutoFocus(false);
    }
  }, [open]);
  return {
    canAutoFocus: canAutoFocus,
    onOpen: useCallback(function () {
      return setCanAutoFocus(true);
    }, [])
  };
}

export { CanAutoFocusContext as C, arrayIncludes as a, useAutoFocusControl as b, createDelegatedEventHandler as c, executeInTheNextEventLoopTick as e, mergeRefs as m, onSpaceOrEnter as o, pipe as p, useCanAutoFocus as u };
//# sourceMappingURL=useCanAutoFocus-1eacc580.js.map
