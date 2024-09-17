import { DateRange } from './RangeTypes';
import { CalendarProps } from '../views/Calendar/Calendar';
import { DateRangeDayProps } from './DateRangePickerDay';
import { ExportedArrowSwitcherProps } from '../_shared/ArrowSwitcher';
import { DateValidationProps } from '../_helpers/date-utils';
export interface ExportedDesktopDateRangeCalendarProps<TDate> {
    /**
     * How many calendars render on **desktop** DateRangePicker.
     *
     * @default 2
     */
    calendars?: 1 | 2 | 3;
    /**
     * Custom renderer for `<DateRangePicker />` days. @DateIOType
     * @example (date, DateRangeDayProps) => <DateRangePickerDay {...DateRangeDayProps} />
     */
    renderDay?: (date: TDate, DateRangeDayProps: DateRangeDayProps<TDate>) => JSX.Element;
}
interface DesktopDateRangeCalendarProps<TDate> extends ExportedDesktopDateRangeCalendarProps<TDate>, Omit<CalendarProps<TDate>, 'renderDay'>, DateValidationProps<TDate>, ExportedArrowSwitcherProps {
    date: DateRange<TDate | null>;
    changeMonth: (date: TDate) => void;
    currentlySelectingRangeEnd: 'start' | 'end';
}
export declare const useStyles: (props?: any) => Record<"root" | "arrowSwitcher" | "rangeCalendarContainer" | "calendar", string>;
export declare function DateRangePickerViewDesktop<TDate>(props: DesktopDateRangeCalendarProps<TDate>): JSX.Element;
export {};
