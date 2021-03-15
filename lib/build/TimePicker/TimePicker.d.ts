import React from 'react';
import { ParsableDate } from '../constants/prop-types';
import { ExportedClockViewProps } from '../views/Clock/ClockView';
import { OverrideParsableDateProps } from '../_shared/hooks/date-helpers-hooks';
import { MuiPickersAdapter } from '../_shared/hooks/useUtils';
import { TimeValidationError } from '../_helpers/time-utils';
import { WithViewsProps } from '../Picker/SharedPickerProps';
import { ValidationProps } from '../_shared/hooks/useValidation';
import { SomeWrapper } from '../wrappers/Wrapper';
import { SharedPickerProps } from '../Picker/makePickerWithState';
export interface BaseTimePickerProps<TDate = unknown> extends ValidationProps<TimeValidationError, ParsableDate<TDate>>, WithViewsProps<'hours' | 'minutes' | 'seconds'>, OverrideParsableDateProps<TDate, ExportedClockViewProps<TDate>, 'minTime' | 'maxTime'> {
}
export declare function getTextFieldAriaText(value: ParsableDate, utils: MuiPickersAdapter): string;
declare type TimePickerComponent<TWrapper extends SomeWrapper> = <TDate>(props: BaseTimePickerProps<TDate> & SharedPickerProps<TDate, TWrapper>) => JSX.Element;
export declare const TimePicker: TimePickerComponent<React.FC<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps>>;
export declare type TimePickerProps = React.ComponentProps<typeof TimePicker>;
export declare const DesktopTimePicker: TimePickerComponent<React.FC<import("../wrappers/DesktopWrapper").DesktopWrapperProps>>;
export declare type DesktopTimePickerProps = React.ComponentProps<typeof DesktopTimePicker>;
export declare const MobileTimePicker: TimePickerComponent<React.FC<import("../wrappers/MobileWrapper").MobileWrapperProps>>;
export declare type MobileTimePickerProps = React.ComponentProps<typeof MobileTimePicker>;
export declare const StaticTimePicker: <TDate>(props: BaseTimePickerProps<unknown> & Pick<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps, "displayStaticWrapperAs" | "PopperProps" | "TransitionComponent" | "DialogProps" | "okText" | "cancelText" | "clearText" | "todayText" | "clearable" | "showTodayButton" | "showTabs" | "wider" | "desktopModeMediaQuery"> & import("..").BasePickerProps<ParsableDate<TDate>, TDate | null> & Pick<import("../_shared/PureDateInput").DateInputProps<ParsableDate<TDate>, TDate | null>, "label" | "mask" | "disabled" | "readOnly" | "InputProps" | "ignoreInvalidInputs" | "renderInput" | "openPickerIcon" | "acceptRegex" | "InputAdornmentProps" | "OpenPickerButtonProps" | "rifmFormatter" | "disableOpenPicker" | "disableMaskedInput" | "getOpenDialogAriaText"> & import("../_shared/withDateAdapterProp").WithDateAdapterProps<TDate | null> & React.RefAttributes<HTMLInputElement>) => JSX.Element;
export declare type StaticTimePickerProps = React.ComponentProps<typeof StaticTimePicker>;
export {};
