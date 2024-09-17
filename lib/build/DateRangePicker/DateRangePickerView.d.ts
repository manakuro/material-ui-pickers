import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BasePickerProps } from '../typings/BasePicker';
import { SharedPickerProps } from '../Picker/SharedPickerProps';
import { DateRangeInputProps } from './DateRangePickerInput';
import { RangeInput, DateRange, CurrentlySelectingRangeEndProps } from './RangeTypes';
import { ExportedCalendarViewProps } from '../views/Calendar/CalendarView';
import { ExportedDesktopDateRangeCalendarProps } from './DateRangePickerViewDesktop';
declare type BaseCalendarPropsToReuse<TDate> = Omit<ExportedCalendarViewProps<TDate>, 'onYearChange' | 'renderDay'>;
export interface ExportedDateRangePickerViewProps<TDate> extends BaseCalendarPropsToReuse<TDate>, ExportedDesktopDateRangeCalendarProps<TDate>, Omit<BasePickerProps, 'value' | 'onChange'> {
    /**
     * if `true` after selecting `start` date  calendar will not automatically switch to the month of `end` date
     *
     * @default false
     */
    disableAutoMonthSwitching?: boolean;
}
interface DateRangePickerViewProps<TDate> extends CurrentlySelectingRangeEndProps, ExportedDateRangePickerViewProps<TDate>, SharedPickerProps<RangeInput<TDate>, DateRange<TDate>, DateRangeInputProps> {
    open: boolean;
    startText: React.ReactNode;
    endText: React.ReactNode;
}
export declare function DateRangePickerView<TDate>(props: DateRangePickerViewProps<TDate>): JSX.Element;
export declare namespace DateRangePickerView {
    var propTypes: {
        calendars: PropTypes.Requireable<number>;
        disableAutoMonthSwitching: PropTypes.Requireable<boolean>;
    };
}
export {};
