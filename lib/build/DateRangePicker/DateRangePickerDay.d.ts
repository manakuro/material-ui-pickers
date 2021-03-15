import { DayProps } from '../views/Calendar/Day';
export interface DateRangeDayProps<TDate> extends DayProps<TDate> {
    isHighlighting: boolean;
    isEndOfHighlighting: boolean;
    isStartOfHighlighting: boolean;
    isPreviewing: boolean;
    isEndOfPreviewing: boolean;
    isStartOfPreviewing: boolean;
}
export declare function PureDateRangeDay<TDate>(props: DateRangeDayProps<TDate>): JSX.Element;
export declare namespace PureDateRangeDay {
    var displayName: string;
}
export declare const DateRangeDay: typeof PureDateRangeDay;
