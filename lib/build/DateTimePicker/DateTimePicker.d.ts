import { ExportedClockViewProps } from '../views/Clock/ClockView';
import { OverrideParsableDateProps } from '../_shared/hooks/date-helpers-hooks';
import { ExportedCalendarViewProps } from '../views/Calendar/CalendarView';
import { SharedPickerProps } from '../Picker/makePickerWithState';
import { SomeWrapper } from '../wrappers/Wrapper';
import { WithViewsProps } from '../Picker/SharedPickerProps';
import { DateAndTimeValidationError } from './date-time-utils';
import { ValidationProps } from '../_shared/hooks/useValidation';
import { ParsableDate } from '../constants/prop-types';
export declare type DateTimePickerView = 'year' | 'date' | 'month' | 'hours' | 'minutes' | 'seconds';
declare type DateTimePickerViewsProps<TDate> = OverrideParsableDateProps<TDate, ExportedClockViewProps<TDate> & ExportedCalendarViewProps<TDate>, 'minDate' | 'maxDate' | 'minTime' | 'maxTime'>;
export interface BaseDateTimePickerProps<TDate> extends WithViewsProps<'year' | 'date' | 'month' | 'hours' | 'minutes'>, ValidationProps<DateAndTimeValidationError, ParsableDate>, DateTimePickerViewsProps<TDate> {
    /**
     * To show tabs.
     */
    hideTabs?: boolean;
    /**
     * Date tab icon.
     */
    dateRangeIcon?: React.ReactNode;
    /**
     * Time tab icon.
     */
    timeIcon?: React.ReactNode;
    /**
     * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
     */
    minDateTime?: ParsableDate<TDate>;
    /**
     * Minimal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
     */
    maxDateTime?: ParsableDate<TDate>;
    /**
     * Date format, that is displaying in toolbar.
     */
    toolbarFormat?: string;
}
declare type DateTimePickerComponent<TWrapper extends SomeWrapper> = <TDate>(props: BaseDateTimePickerProps<TDate> & SharedPickerProps<TDate, TWrapper>) => JSX.Element;
export declare const DateTimePicker: DateTimePickerComponent<import("react").FC<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps>>;
export declare type DateTimePickerProps = React.ComponentProps<typeof DateTimePicker>;
export declare const DesktopDateTimePicker: DateTimePickerComponent<import("react").FC<import("../wrappers/DesktopWrapper").DesktopWrapperProps>>;
export declare type DesktopDateTimePickerProps = React.ComponentProps<typeof DesktopDateTimePicker>;
export declare const MobileDateTimePicker: DateTimePickerComponent<import("react").FC<import("../wrappers/MobileWrapper").MobileWrapperProps>>;
export declare type MobileDateTimePickerProps = React.ComponentProps<typeof MobileDateTimePicker>;
export declare const StaticDateTimePicker: DateTimePickerComponent<import("react").FC<import("../wrappers/StaticWrapper").StaticWrapperProps>>;
export declare type StaticDateTimePickerProps = React.ComponentProps<typeof StaticDateTimePicker>;
export {};
