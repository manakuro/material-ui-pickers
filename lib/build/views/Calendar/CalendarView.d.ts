import { DatePickerView } from '../../DatePicker';
import { ExportedCalendarProps } from './Calendar';
import { PickerOnChangeFn } from '../../_shared/hooks/useViews';
import { ExportedCalendarHeaderProps } from './CalendarHeader';
import { ExportedYearSelectionProps } from './YearSelection';
import { DateValidationProps } from '../../_helpers/date-utils';
export interface CalendarViewProps<TDate> extends DateValidationProps<TDate>, ExportedCalendarProps<TDate>, ExportedYearSelectionProps<TDate>, ExportedCalendarHeaderProps<TDate> {
    date: TDate;
    view: DatePickerView;
    views: DatePickerView[];
    changeView: (view: DatePickerView) => void;
    onChange: PickerOnChangeFn<TDate>;
    /**
     * Disable heavy animations.
     *
     * @default /(android)/i.test(window.navigator.userAgent).
     */
    reduceAnimations?: boolean;
    /**
     * Callback firing on month change. @DateIOType
     */
    onMonthChange?: (date: TDate) => void;
}
export declare type ExportedCalendarViewProps<TDate> = Omit<CalendarViewProps<TDate>, 'date' | 'view' | 'views' | 'onChange' | 'changeView' | 'slideDirection' | 'currentMonth'>;
export declare const useStyles: (props?: any) => Record<"viewTransitionContainer" | "fullHeightContainer", string>;
export declare const defaultReduceAnimations: boolean;
export declare function CalendarView<TDate>(props: CalendarViewProps<TDate>): JSX.Element;
