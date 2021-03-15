import { WithViewsProps } from '../Picker/SharedPickerProps';
import { OverrideParsableDateProps } from '../_shared/hooks/date-helpers-hooks';
import { ExportedCalendarViewProps } from '../views/Calendar/CalendarView';
import { SomeWrapper } from '../wrappers/Wrapper';
import { ValidationProps } from '../_shared/hooks/useValidation';
import { ParsableDate } from '../constants/prop-types';
import { SharedPickerProps } from '../Picker/makePickerWithState';
import { DateValidationError } from '../_helpers/date-utils';
export declare type DatePickerView = 'year' | 'date' | 'month';
export interface BaseDatePickerProps<TDate> extends WithViewsProps<'year' | 'date' | 'month'>, ValidationProps<DateValidationError, ParsableDate>, OverrideParsableDateProps<TDate, ExportedCalendarViewProps<TDate>, 'minDate' | 'maxDate'> {
}
declare type DatePickerComponent<TWrapper extends SomeWrapper> = <TDate>(props: BaseDatePickerProps<TDate> & SharedPickerProps<TDate, TWrapper>) => JSX.Element;
export declare const DatePicker: DatePickerComponent<import("react").FC<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps>>;
export declare type DatePickerProps = React.ComponentProps<typeof DatePicker>;
export declare const MobileDatePicker: DatePickerComponent<import("react").FC<import("../wrappers/MobileWrapper").MobileWrapperProps>>;
export declare type MobileDatePickerProps = React.ComponentProps<typeof MobileDatePicker>;
export declare const DesktopDatePicker: <TDate>(props: BaseDatePickerProps<unknown> & Pick<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps, "displayStaticWrapperAs" | "PopperProps" | "TransitionComponent" | "DialogProps" | "okText" | "cancelText" | "clearText" | "todayText" | "clearable" | "showTodayButton" | "showTabs" | "wider" | "desktopModeMediaQuery"> & import("..").BasePickerProps<ParsableDate<TDate>, TDate | null> & Pick<import("../_shared/PureDateInput").DateInputProps<ParsableDate<TDate>, TDate | null>, "label" | "mask" | "disabled" | "readOnly" | "InputProps" | "ignoreInvalidInputs" | "renderInput" | "openPickerIcon" | "acceptRegex" | "InputAdornmentProps" | "OpenPickerButtonProps" | "rifmFormatter" | "disableOpenPicker" | "disableMaskedInput" | "getOpenDialogAriaText"> & import("../_shared/withDateAdapterProp").WithDateAdapterProps<TDate | null> & import("react").RefAttributes<HTMLInputElement>) => JSX.Element;
export declare type DesktopDatePickerProps = React.ComponentProps<typeof DesktopDatePicker>;
export declare const StaticDatePicker: DatePickerComponent<import("react").FC<import("../wrappers/StaticWrapper").StaticWrapperProps>>;
export declare type StaticDatePickerProps = React.ComponentProps<typeof StaticDatePicker>;
export {};
