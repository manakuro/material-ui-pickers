import { ExportedCalendarHeaderProps } from '../views/Calendar/CalendarHeader';
import { DateRange } from './RangeTypes';
import { CalendarProps } from '../views/Calendar/Calendar';
import { ExportedDesktopDateRangeCalendarProps } from './DateRangePickerViewDesktop';
import { DateValidationProps } from '../_helpers/date-utils';
export interface ExportedMobileDateRangeCalendarProps<TDate> extends Pick<ExportedDesktopDateRangeCalendarProps<TDate>, 'renderDay'> {
}
interface DesktopDateRangeCalendarProps<TDate> extends ExportedMobileDateRangeCalendarProps<TDate>, Omit<CalendarProps<TDate>, 'date' | 'renderDay'>, DateValidationProps<TDate>, ExportedCalendarHeaderProps<TDate> {
    date: DateRange<TDate>;
    changeMonth: (date: TDate) => void;
}
export declare function DateRangePickerViewMobile<TDate>(props: DesktopDateRangeCalendarProps<TDate>): JSX.Element;
export {};
