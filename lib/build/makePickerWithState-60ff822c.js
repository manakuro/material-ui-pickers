import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import React__default, { useMemo, createElement, useRef, useEffect, useState, useCallback, useDebugValue, forwardRef } from 'react';
import { instanceOf, func, string, object, node, bool } from 'prop-types';
import { MuiPickersAdapterContext } from './LocalizationProvider.js';
import { u as useUtils, d as DIALOG_WIDTH, e as DIALOG_WIDTH_WIDER, I as IS_TOUCH_DEVICE_MEDIA, a as useNow, w as withDefaultProps } from './dimensions-f39eca69.js';
import _extends from '@babel/runtime/helpers/esm/extends';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useForkRef } from '@material-ui/core/utils';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import { o as onSpaceOrEnter, e as executeInTheNextEventLoopTick, b as useAutoFocusControl, C as CanAutoFocusContext } from './useCanAutoFocus-1eacc580.js';
import { t as getDisplayDate, w as getTextFieldAriaText, K as KeyboardDateInput, P as Picker, x as parsePickerInputValue } from './Picker-93e9705e.js';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { W as WrapperVariantContext, I as IsStaticVariantContext } from './Clock-c2c3c22b.js';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import TrapFocus from '@material-ui/core/Unstable_TrapFocus';
import { u as useGlobalKeyDown, k as keycode } from './useKeyDown-5aaf69f9.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var PureDateInput = function PureDateInput(_ref) {
  var containerRef = _ref.containerRef,
      disabled = _ref.disabled,
      forwardedRef = _ref.forwardedRef,
      _ref$getOpenDialogAri = _ref.getOpenDialogAriaText,
      getOpenDialogAriaText = _ref$getOpenDialogAri === void 0 ? getTextFieldAriaText : _ref$getOpenDialogAri,
      inputFormat = _ref.inputFormat,
      InputProps = _ref.InputProps,
      label = _ref.label,
      onOpen = _ref.openPicker,
      rawValue = _ref.rawValue,
      renderInput = _ref.renderInput,
      _ref$TextFieldProps = _ref.TextFieldProps,
      TextFieldProps = _ref$TextFieldProps === void 0 ? {} : _ref$TextFieldProps,
      validationError = _ref.validationError;
  var utils = useUtils();
  var PureDateInputProps = useMemo(function () {
    return _objectSpread(_objectSpread({}, InputProps), {}, {
      readOnly: true
    });
  }, [InputProps]);
  var inputValue = getDisplayDate(utils, rawValue, inputFormat);
  return renderInput(_objectSpread({
    label: label,
    disabled: disabled,
    ref: containerRef,
    inputRef: forwardedRef,
    error: validationError,
    InputProps: PureDateInputProps,
    inputProps: {
      disabled: disabled,
      'aria-readonly': true,
      'aria-label': getOpenDialogAriaText(rawValue, utils),
      value: inputValue,
      onClick: onOpen,
      onKeyDown: onSpaceOrEnter(onOpen)
    }
  }, TextFieldProps));
};
process.env.NODE_ENV !== "production" ? PureDateInput.propTypes = {
  acceptRegex: instanceOf(RegExp),
  getOpenDialogAriaText: func,
  mask: string,
  OpenPickerButtonProps: object,
  openPickerIcon: node,
  renderInput: func.isRequired,
  rifmFormatter: func
} : void 0;

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var useStyles = makeStyles({
  dialogRoot: {
    minWidth: DIALOG_WIDTH
  },
  dialogRootWider: {
    minWidth: DIALOG_WIDTH_WIDER
  },
  dialogContainer: {
    '&:focus > $dialogRoot': {
      outline: 'auto',
      '@media (pointer:coarse)': {
        outline: 0
      }
    }
  },
  dialog: {
    '&:first-child': {
      padding: 0
    }
  },
  dialogAction: {// requested for overrides
  },
  withAdditionalAction: {
    // set justifyContent to default value to fix IE11 layout bug
    // see https://github.com/mui-org/material-ui-pickers/pull/267
    justifyContent: 'flex-start',
    '& > *:first-child': {
      marginRight: 'auto'
    }
  }
}, {
  name: 'MuiPickersModalDialog'
});

var PickersModalDialog = function PickersModalDialog(props) {
  var _props$cancelText = props.cancelText,
      cancelText = _props$cancelText === void 0 ? 'Cancel' : _props$cancelText,
      children = props.children,
      MuiDialogClasses = props.classes,
      _props$clearable = props.clearable,
      clearable = _props$clearable === void 0 ? false : _props$clearable,
      _props$clearText = props.clearText,
      clearText = _props$clearText === void 0 ? 'Clear' : _props$clearText,
      _props$okText = props.okText,
      okText = _props$okText === void 0 ? 'OK' : _props$okText,
      onAccept = props.onAccept,
      onClear = props.onClear,
      onDismiss = props.onDismiss,
      onSetToday = props.onSetToday,
      showTabs = props.showTabs,
      _props$showTodayButto = props.showTodayButton,
      showTodayButton = _props$showTodayButto === void 0 ? false : _props$showTodayButto,
      _props$todayText = props.todayText,
      todayText = _props$todayText === void 0 ? 'Today' : _props$todayText,
      wider = props.wider,
      other = _objectWithoutProperties(props, ["cancelText", "children", "classes", "clearable", "clearText", "okText", "onAccept", "onClear", "onDismiss", "onSetToday", "showTabs", "showTodayButton", "todayText", "wider"]);

  var classes = useStyles();
  return /*#__PURE__*/createElement(Dialog, _extends({
    onClose: onDismiss,
    classes: _objectSpread$1({
      container: classes.dialogContainer,
      paper: clsx(classes.dialogRoot, wider && classes.dialogRootWider)
    }, MuiDialogClasses)
  }, other), /*#__PURE__*/createElement(DialogContent, {
    className: classes.dialog
  }, children), /*#__PURE__*/createElement(DialogActions, {
    className: clsx(classes.dialogAction, (clearable || showTodayButton) && classes.withAdditionalAction)
  }, clearable && /*#__PURE__*/createElement(Button, {
    "data-mui-test": "clear-action-button",
    color: "primary",
    onClick: onClear
  }, clearText), showTodayButton && /*#__PURE__*/createElement(Button, {
    "data-mui-test": "today-action-button",
    color: "primary",
    onClick: onSetToday
  }, todayText), cancelText && /*#__PURE__*/createElement(Button, {
    color: "primary",
    onClick: onDismiss
  }, cancelText), okText && /*#__PURE__*/createElement(Button, {
    color: "primary",
    onClick: onAccept
  }, okText)));
};

var MobileWrapper = function MobileWrapper(props) {
  var cancelText = props.cancelText,
      children = props.children,
      clearable = props.clearable,
      clearText = props.clearText,
      DateInputProps = props.DateInputProps,
      DialogProps = props.DialogProps,
      displayStaticWrapperAs = props.displayStaticWrapperAs,
      KeyboardDateInputComponent = props.KeyboardDateInputComponent,
      okText = props.okText,
      onAccept = props.onAccept,
      onClear = props.onClear,
      onDismiss = props.onDismiss,
      onSetToday = props.onSetToday,
      open = props.open,
      PopperProps = props.PopperProps,
      _props$PureDateInputC = props.PureDateInputComponent,
      PureDateInputComponent = _props$PureDateInputC === void 0 ? PureDateInput : _props$PureDateInputC,
      showTabs = props.showTabs,
      showTodayButton = props.showTodayButton,
      todayText = props.todayText,
      wider = props.wider,
      other = _objectWithoutProperties(props, ["cancelText", "children", "clearable", "clearText", "DateInputProps", "DialogProps", "displayStaticWrapperAs", "KeyboardDateInputComponent", "okText", "onAccept", "onClear", "onDismiss", "onSetToday", "open", "PopperProps", "PureDateInputComponent", "showTabs", "showTodayButton", "todayText", "wider"]);

  return /*#__PURE__*/createElement(WrapperVariantContext.Provider, {
    value: "mobile"
  }, /*#__PURE__*/createElement(PureDateInputComponent, _extends({}, other, DateInputProps)), /*#__PURE__*/createElement(PickersModalDialog, _extends({
    wider: wider,
    showTabs: showTabs,
    open: open,
    onClear: onClear,
    onAccept: onAccept,
    onDismiss: onDismiss,
    onSetToday: onSetToday,
    clearText: clearText,
    todayText: todayText,
    okText: okText,
    cancelText: cancelText,
    clearable: clearable,
    showTodayButton: showTodayButton,
    "data-mui-test": "mobile-wrapper-dialog"
  }, DialogProps), children));
};
process.env.NODE_ENV !== "production" ? MobileWrapper.propTypes = {
  cancelText: node,
  clearable: bool,
  clearText: node,
  DialogProps: object,
  okText: node,
  showTodayButton: bool,
  todayText: node
} : void 0;

var useStyles$1 = makeStyles(function (theme) {
  return {
    root: {
      zIndex: theme.zIndex.modal
    },
    paper: {
      transformOrigin: 'top center',
      '&:focus': _defineProperty({}, IS_TOUCH_DEVICE_MEDIA, {
        outline: 0
      })
    },
    topTransition: {
      transformOrigin: 'bottom center'
    }
  };
}, {
  name: 'MuiPickersPopper'
});
var PickersPopper = function PickersPopper(props) {
  var anchorEl = props.anchorEl,
      children = props.children,
      _props$innerRef = props.innerRef,
      innerRef = _props$innerRef === void 0 ? null : _props$innerRef,
      onClose = props.onClose,
      onOpen = props.onOpen,
      open = props.open,
      PopperProps = props.PopperProps,
      role = props.role,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Grow : _props$TransitionComp,
      TrapFocusProps = props.TrapFocusProps;
  var classes = useStyles$1();
  var paperRef = useRef(null);
  var handlePopperRef = useForkRef(paperRef, innerRef);
  var lastFocusedElementRef = useRef(null);
  var popperOptions = useMemo(function () {
    return {
      onCreate: onOpen
    };
  }, [onOpen]);
  useGlobalKeyDown(open, _defineProperty({}, keycode.Esc, onClose));
  useEffect(function () {
    if (role === 'tooltip') {
      return;
    }

    if (open) {
      lastFocusedElementRef.current = document.activeElement;
    } else if (lastFocusedElementRef.current && lastFocusedElementRef.current instanceof HTMLElement) {
      lastFocusedElementRef.current.focus();
    }
  }, [open, role]);

  var handleBlur = function handleBlur() {
    if (!open) {
      return;
    } // document.activeElement is updating on the next tick after `blur` called


    executeInTheNextEventLoopTick(function () {
      var _paperRef$current;

      if ((_paperRef$current = paperRef.current) === null || _paperRef$current === void 0 ? void 0 : _paperRef$current.contains(document.activeElement)) {
        return;
      }

      onClose();
    });
  };

  return /*#__PURE__*/createElement(Popper, _extends({
    transition: true,
    role: role,
    open: open,
    anchorEl: anchorEl,
    className: clsx(classes.root, PopperProps === null || PopperProps === void 0 ? void 0 : PopperProps.className),
    popperOptions: popperOptions
  }, PopperProps), function (_ref) {
    var TransitionProps = _ref.TransitionProps,
        placement = _ref.placement;
    return /*#__PURE__*/createElement(TrapFocus, _extends({
      open: open,
      disableAutoFocus: true,
      disableEnforceFocus: role === 'tooltip',
      isEnabled: function isEnabled() {
        return true;
      },
      getDoc: function getDoc() {
        var _paperRef$current$own, _paperRef$current2;

        return (_paperRef$current$own = (_paperRef$current2 = paperRef.current) === null || _paperRef$current2 === void 0 ? void 0 : _paperRef$current2.ownerDocument) !== null && _paperRef$current$own !== void 0 ? _paperRef$current$own : document;
      }
    }, TrapFocusProps), /*#__PURE__*/createElement(TransitionComponent, TransitionProps, /*#__PURE__*/createElement(Paper, {
      tabIndex: -1,
      elevation: 8,
      ref: handlePopperRef,
      className: clsx(classes.paper, placement === 'top' && classes.topTransition),
      onBlur: handleBlur
    }, children)));
  });
};

var DesktopWrapper = function DesktopWrapper(props) {
  var children = props.children,
      DateInputProps = props.DateInputProps,
      _props$KeyboardDateIn = props.KeyboardDateInputComponent,
      KeyboardDateInputComponent = _props$KeyboardDateIn === void 0 ? KeyboardDateInput : _props$KeyboardDateIn,
      onDismiss = props.onDismiss,
      open = props.open,
      PopperProps = props.PopperProps,
      TransitionComponent = props.TransitionComponent;
  var inputRef = useRef(null);

  var _useAutoFocusControl = useAutoFocusControl(open),
      canAutoFocus = _useAutoFocusControl.canAutoFocus,
      onOpen = _useAutoFocusControl.onOpen;

  return /*#__PURE__*/createElement(WrapperVariantContext.Provider, {
    value: "desktop"
  }, /*#__PURE__*/createElement(CanAutoFocusContext.Provider, {
    value: canAutoFocus
  }, /*#__PURE__*/createElement(KeyboardDateInputComponent, _extends({}, DateInputProps, {
    inputRef: inputRef
  })), /*#__PURE__*/createElement(PickersPopper, {
    role: "dialog",
    open: open,
    anchorEl: inputRef.current,
    TransitionComponent: TransitionComponent,
    PopperProps: PopperProps,
    onClose: onDismiss,
    onOpen: onOpen
  }, children)));
};
process.env.NODE_ENV !== "production" ? DesktopWrapper.propTypes = {
  onOpen: func,
  onClose: func
} : void 0;

var DesktopTooltipWrapper = function DesktopTooltipWrapper(props) {
  var open = props.open,
      children = props.children,
      PopperProps = props.PopperProps,
      onDismiss = props.onDismiss,
      DateInputProps = props.DateInputProps,
      TransitionComponent = props.TransitionComponent,
      _props$KeyboardDateIn = props.KeyboardDateInputComponent,
      KeyboardDateInputComponent = _props$KeyboardDateIn === void 0 ? KeyboardDateInput : _props$KeyboardDateIn;
  var inputRef = useRef(null);
  var popperRef = useRef(null);

  var _useAutoFocusControl = useAutoFocusControl(open),
      canAutoFocus = _useAutoFocusControl.canAutoFocus,
      onOpen = _useAutoFocusControl.onOpen;

  var handleBlur = function handleBlur() {
    executeInTheNextEventLoopTick(function () {
      var _inputRef$current, _popperRef$current;

      if (((_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.contains(document.activeElement)) || ((_popperRef$current = popperRef.current) === null || _popperRef$current === void 0 ? void 0 : _popperRef$current.contains(document.activeElement))) {
        return;
      }

      onDismiss();
    });
  };

  return /*#__PURE__*/createElement(WrapperVariantContext.Provider, {
    value: "desktop"
  }, /*#__PURE__*/createElement(CanAutoFocusContext.Provider, {
    value: canAutoFocus
  }, /*#__PURE__*/createElement(KeyboardDateInputComponent, _extends({}, DateInputProps, {
    containerRef: inputRef,
    onBlur: handleBlur
  })), /*#__PURE__*/createElement(PickersPopper, {
    role: "tooltip",
    open: open,
    innerRef: popperRef,
    anchorEl: inputRef.current,
    TransitionComponent: TransitionComponent,
    PopperProps: PopperProps,
    onBlur: handleBlur,
    onClose: onDismiss,
    onOpen: onOpen
  }, children)));
};

var makeResponsiveWrapper = function makeResponsiveWrapper(DesktopWrapperComponent, MobileWrapperComponent) {
  var ResponsiveWrapper = function ResponsiveWrapper(_ref) {
    var cancelText = _ref.cancelText,
        clearable = _ref.clearable,
        clearText = _ref.clearText,
        _ref$desktopModeMedia = _ref.desktopModeMediaQuery,
        desktopModeMediaQuery = _ref$desktopModeMedia === void 0 ? IS_TOUCH_DEVICE_MEDIA : _ref$desktopModeMedia,
        DialogProps = _ref.DialogProps,
        displayStaticWrapperAs = _ref.displayStaticWrapperAs,
        okText = _ref.okText,
        PopperProps = _ref.PopperProps,
        showTodayButton = _ref.showTodayButton,
        todayText = _ref.todayText,
        TransitionComponent = _ref.TransitionComponent,
        other = _objectWithoutProperties(_ref, ["cancelText", "clearable", "clearText", "desktopModeMediaQuery", "DialogProps", "displayStaticWrapperAs", "okText", "PopperProps", "showTodayButton", "todayText", "TransitionComponent"]);

    var isDesktop = useMediaQuery(desktopModeMediaQuery);
    return isDesktop ? /*#__PURE__*/createElement(DesktopWrapperComponent, _extends({
      PopperProps: PopperProps,
      TransitionComponent: TransitionComponent
    }, other)) : /*#__PURE__*/createElement(MobileWrapperComponent, _extends({
      okText: okText,
      cancelText: cancelText,
      clearText: clearText,
      todayText: todayText,
      showTodayButton: showTodayButton,
      clearable: clearable,
      DialogProps: DialogProps
    }, other));
  };

  return ResponsiveWrapper;
};
var ResponsiveWrapper = makeResponsiveWrapper(DesktopWrapper, MobileWrapper);
var ResponsiveTooltipWrapper = makeResponsiveWrapper(DesktopTooltipWrapper, MobileWrapper);

var useStyles$2 = makeStyles(function (theme) {
  return {
    root: {
      overflow: 'hidden',
      minWidth: DIALOG_WIDTH,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.paper
    }
  };
}, {
  name: 'MuiPickersStaticWrapper'
});
var StaticWrapper = function StaticWrapper(props) {
  var _props$displayStaticW = props.displayStaticWrapperAs,
      displayStaticWrapperAs = _props$displayStaticW === void 0 ? 'static' : _props$displayStaticW,
      children = props.children;
  var classes = useStyles$2();
  var isStatic = true;
  return /*#__PURE__*/createElement(IsStaticVariantContext.Provider, {
    value: isStatic
  }, /*#__PURE__*/createElement(WrapperVariantContext.Provider, {
    value: displayStaticWrapperAs
  }, /*#__PURE__*/createElement("div", {
    className: classes.root
  }, children)));
};

var defaultIsSameError = function defaultIsSameError(a, b) {
  return a === b;
};

function makeValidationHook(validateFn) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      defaultValidationError = _ref.defaultValidationError,
      _ref$isSameError = _ref.isSameError,
      isSameError = _ref$isSameError === void 0 ? defaultIsSameError : _ref$isSameError;

  return function (value, props) {
    var utils = useUtils();
    var previousValidationErrorRef = useRef(defaultValidationError || null);
    var validationError = validateFn(utils, value, props);
    useEffect(function () {
      if (props.onError && !isSameError(validationError, previousValidationErrorRef.current)) {
        props.onError(validationError, value);
      }

      previousValidationErrorRef.current = validationError;
    }, [previousValidationErrorRef, props, validationError, value]);
    return validationError;
  };
}

function withDateAdapterProp(Component) {
  return function (_ref) {
    var dateAdapter = _ref.dateAdapter,
        other = _objectWithoutProperties(_ref, ["dateAdapter"]);

    if (dateAdapter) {
      return /*#__PURE__*/createElement(MuiPickersAdapterContext.Provider, {
        value: dateAdapter
      }, /*#__PURE__*/createElement(Component, other));
    }

    return /*#__PURE__*/createElement(Component, other);
  };
}

/* Creates a component that rendering modal/popover/nothing and spreading props down to text field */
function makeWrapperComponent(Wrapper, _ref) {
  var KeyboardDateInputComponent = _ref.KeyboardDateInputComponent,
      PureDateInputComponent = _ref.PureDateInputComponent;

  function WrapperComponent(props) {
    var disableCloseOnSelect = props.disableCloseOnSelect,
        cancelText = props.cancelText,
        children = props.children,
        clearable = props.clearable,
        clearText = props.clearText,
        DateInputProps = props.DateInputProps,
        DialogProps = props.DialogProps,
        displayStaticWrapperAs = props.displayStaticWrapperAs,
        inputFormat = props.inputFormat,
        okText = props.okText,
        onAccept = props.onAccept,
        onChange = props.onChange,
        onClose = props.onClose,
        onOpen = props.onOpen,
        open = props.open,
        PopperProps = props.PopperProps,
        showTabs = props.showTabs,
        todayText = props.todayText,
        value = props.value,
        wider = props.wider,
        wrapperProps = props.wrapperProps,
        restPropsForTextField = _objectWithoutProperties(props, ["disableCloseOnSelect", "cancelText", "children", "clearable", "clearText", "DateInputProps", "DialogProps", "displayStaticWrapperAs", "inputFormat", "okText", "onAccept", "onChange", "onClose", "onOpen", "open", "PopperProps", "showTabs", "todayText", "value", "wider", "wrapperProps"]);

    var WrapperComponent = Wrapper;
    return /*#__PURE__*/React__default.createElement(WrapperComponent, _extends({
      clearable: clearable,
      clearText: clearText,
      DialogProps: DialogProps,
      PopperProps: PopperProps,
      okText: okText,
      todayText: todayText,
      cancelText: cancelText,
      DateInputProps: DateInputProps // @ts-ignore
      ,
      KeyboardDateInputComponent: KeyboardDateInputComponent // @ts-ignore
      ,
      PureDateInputComponent: PureDateInputComponent,
      wider: wider,
      showTabs: showTabs,
      displayStaticWrapperAs: displayStaticWrapperAs
    }, wrapperProps, restPropsForTextField), children);
  }

  return WrapperComponent;
}

function useOpenState(_ref) {
  var open = _ref.open,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose;
  var isControllingOpenProp = useRef(typeof open === 'boolean').current;

  var _React$useState = useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openState = _React$useState2[0],
      setIsOpenState = _React$useState2[1]; // It is required to update inner state in useEffect in order to avoid situation when
  // Our component is not mounted yet, but `open` state is set to `true` (e.g. initially opened)


  useEffect(function () {
    if (isControllingOpenProp) {
      if (typeof open !== 'boolean') {
        throw new Error('You must not mix controlling and uncontrolled mode for `open` prop');
      }

      setIsOpenState(open);
    }
  }, [isControllingOpenProp, open]);
  var setIsOpen = useCallback(function (newIsOpen) {
    if (!isControllingOpenProp) {
      setIsOpenState(newIsOpen);
    }

    return newIsOpen ? onOpen && onOpen() : onClose && onClose();
  }, [isControllingOpenProp, onOpen, onClose]);
  return {
    isOpen: openState,
    setIsOpen: setIsOpen
  };
}

function usePickerState(props, valueManager) {
  var inputFormat = props.inputFormat,
      disabled = props.disabled,
      readOnly = props.readOnly,
      onAccept = props.onAccept,
      onChange = props.onChange,
      disableCloseOnSelect = props.disableCloseOnSelect,
      value = props.value;

  if (!inputFormat) {
    throw new Error('inputFormat prop is required');
  }

  var now = useNow();
  var utils = useUtils();

  var _useOpenState = useOpenState(props),
      isOpen = _useOpenState.isOpen,
      setIsOpen = _useOpenState.setIsOpen;

  var _React$useState = useState(valueManager.parseInput(utils, props)),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      pickerDate = _React$useState2[0],
      setPickerDate = _React$useState2[1]; // Mobile keyboard view is a special case.
  // When it's open picker should work like closed, cause we are just showing text field


  var _React$useState3 = useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isMobileKeyboardViewOpen = _React$useState4[0],
      setMobileKeyboardViewOpen = _React$useState4[1];

  useEffect(function () {
    var parsedDateValue = valueManager.parseInput(utils, props);
    setPickerDate(function (currentPickerDate) {
      if (!valueManager.areValuesEqual(utils, currentPickerDate, parsedDateValue)) {
        return parsedDateValue;
      }

      return currentPickerDate;
    }); // We need to react only on value change, because `date` could potentially return new Date() on each render
  }, [value, utils]); // eslint-disable-line

  var acceptDate = useCallback(function (acceptedDate, needClosePicker) {
    onChange(acceptedDate);

    if (needClosePicker) {
      setIsOpen(false);

      if (onAccept) {
        onAccept(acceptedDate);
      }
    }
  }, [onAccept, onChange, setIsOpen]);
  var wrapperProps = useMemo(function () {
    return {
      open: isOpen,
      onClear: function onClear() {
        return acceptDate(valueManager.emptyValue, true);
      },
      onAccept: function onAccept() {
        return acceptDate(pickerDate, true);
      },
      onDismiss: function onDismiss() {
        return setIsOpen(false);
      },
      onSetToday: function onSetToday() {
        // TODO FIX ME
        setPickerDate(now);
        acceptDate(now, !disableCloseOnSelect);
      }
    };
  }, [acceptDate, disableCloseOnSelect, isOpen, now, pickerDate, setIsOpen, valueManager.emptyValue]);
  var pickerProps = useMemo(function () {
    return {
      // canAutoFocus,
      date: pickerDate,
      isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
      toggleMobileKeyboardView: function toggleMobileKeyboardView() {
        if (!isMobileKeyboardViewOpen) {
          // accept any partial input done by React.user
          setPickerDate(pickerDate);
        }

        setMobileKeyboardViewOpen(!isMobileKeyboardViewOpen);
      },
      onDateChange: function onDateChange(newDate, wrapperVariant) {
        var selectionState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'partial';
        setPickerDate(newDate);

        if (selectionState === 'partial') {
          acceptDate(newDate, false);
        }

        if (selectionState === 'finish') {
          var shouldCloseOnSelect = !(disableCloseOnSelect !== null && disableCloseOnSelect !== void 0 ? disableCloseOnSelect : wrapperVariant === 'mobile');
          acceptDate(newDate, shouldCloseOnSelect);
        } // if selectionState === "shallow" do nothing (we already update picker state)

      }
    };
  }, [acceptDate, disableCloseOnSelect, isMobileKeyboardViewOpen, pickerDate]);
  var inputProps = useMemo(function () {
    return {
      onChange: onChange,
      inputFormat: inputFormat,
      open: isOpen,
      rawValue: value,
      openPicker: function openPicker() {
        return !readOnly && !disabled && setIsOpen(true);
      }
    };
  }, [onChange, inputFormat, isOpen, value, readOnly, disabled, setIsOpen]);
  var pickerState = {
    pickerProps: pickerProps,
    inputProps: inputProps,
    wrapperProps: wrapperProps
  };
  useDebugValue(pickerState, function () {
    return {
      MuiPickerState: {
        pickerDate: pickerDate,
        other: pickerState
      }
    };
  });
  return pickerState;
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var valueManager = {
  emptyValue: null,
  parseInput: parsePickerInputValue,
  areValuesEqual: function areValuesEqual(utils, a, b) {
    return utils.isEqual(a, b);
  }
};
function makePickerWithStateAndWrapper(Wrapper, _ref) {
  var name = _ref.name,
      useInterceptProps = _ref.useInterceptProps,
      useValidation = _ref.useValidation,
      DefaultToolbarComponent = _ref.DefaultToolbarComponent;
  var WrapperComponent = makeWrapperComponent(Wrapper, {
    KeyboardDateInputComponent: KeyboardDateInput,
    PureDateInputComponent: PureDateInput
  });

  function PickerWithState(__props) {
    var allProps = useInterceptProps(__props);
    var validationError = useValidation(allProps.value, allProps) !== null;

    var _usePickerState = usePickerState(allProps, valueManager),
        pickerProps = _usePickerState.pickerProps,
        inputProps = _usePickerState.inputProps,
        wrapperProps = _usePickerState.wrapperProps; // Note that we are passing down all the value without spread.
    // It saves us >1kb gzip and make any prop available automatically on any level down.


    var value = allProps.value,
        onChange = allProps.onChange,
        other = _objectWithoutProperties(allProps, ["value", "onChange"]);

    var AllDateInputProps = _objectSpread$2(_objectSpread$2(_objectSpread$2({}, inputProps), other), {}, {
      validationError: validationError
    });

    return /*#__PURE__*/createElement(WrapperComponent, _extends({
      wrapperProps: wrapperProps,
      DateInputProps: AllDateInputProps
    }, other), /*#__PURE__*/createElement(Picker, _extends({}, pickerProps, {
      toolbarTitle: allProps.label || allProps.toolbarTitle,
      ToolbarComponent: other.ToolbarComponent || DefaultToolbarComponent,
      DateInputProps: AllDateInputProps
    }, other)));
  }

  var FinalPickerComponent = withDefaultProps({
    name: name
  }, withDateAdapterProp(PickerWithState)); // @ts-ignore Simply ignore generic values in props, because it is impossible
  // to keep generics without additional cast when using forwardRef
  // @see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35834

  return forwardRef(function (props, ref) {
    return /*#__PURE__*/createElement(FinalPickerComponent, _extends({}, props, {
      forwardedRef: ref
    }));
  });
}

export { DesktopTooltipWrapper as D, MobileWrapper as M, ResponsiveTooltipWrapper as R, StaticWrapper as S, makeWrapperComponent as a, makePickerWithStateAndWrapper as b, ResponsiveWrapper as c, DesktopWrapper as d, makeValidationHook as m, usePickerState as u, withDateAdapterProp as w };
//# sourceMappingURL=makePickerWithState-60ff822c.js.map
