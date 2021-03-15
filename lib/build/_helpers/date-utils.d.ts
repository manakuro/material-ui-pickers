import { ParsableDate } from '../constants/prop-types';
import { BasePickerProps } from '../typings/BasePicker';
import { DatePickerView } from '../DatePicker/DatePicker';
import { MuiPickersAdapter } from '../_shared/hooks/useUtils';
import { DateRange, RangeInput } from '../DateRangePicker/RangeTypes';
interface FindClosestDateParams<TDate> {
    date: TDate;
    utils: MuiPickersAdapter<TDate>;
    minDate: TDate;
    maxDate: TDate;
    disableFuture: boolean;
    disablePast: boolean;
    shouldDisableDate: (date: TDate) => boolean;
}
export declare const findClosestEnabledDate: <TDate>({ date, utils, minDate, maxDate, disableFuture, disablePast, shouldDisableDate, }: FindClosestDateParams<TDate>) => TDate | null;
export declare const isYearOnlyView: (views: readonly DatePickerView[]) => boolean;
export declare const isYearAndMonthViews: (views: readonly DatePickerView[]) => boolean;
export declare const getFormatAndMaskByViews: (views: readonly DatePickerView[], utils: MuiPickersAdapter<unknown>) => {
    mask: string;
    inputFormat: any;
    disableMaskedInput?: undefined;
} | {
    disableMaskedInput: boolean;
    inputFormat: any;
    mask?: undefined;
};
export declare function parsePickerInputValue(utils: MuiPickersAdapter, { value }: BasePickerProps): unknown | null;
export declare function parseRangeInputValue(utils: MuiPickersAdapter, { value }: BasePickerProps<RangeInput, DateRange>): DateRange<unknown>;
export declare const isRangeValid: (utils: MuiPickersAdapter<unknown>, range: DateRange | null) => range is DateRange<unknown>;
export declare const isWithinRange: (utils: MuiPickersAdapter<unknown>, day: unknown, range: DateRange | null) => boolean;
export declare const isStartOfRange: (utils: MuiPickersAdapter<unknown>, day: unknown, range: DateRange | null) => boolean;
export declare const isEndOfRange: (utils: MuiPickersAdapter<unknown>, day: unknown, range: DateRange | null) => boolean;
export interface DateValidationProps<TDate> {
    /**
     * Min selectable date. @DateIOType
     *
     * @default Date(1900-01-01)
     */
    minDate?: TDate;
    /**
     * Max selectable date. @DateIOType
     *
     * @default Date(2099-31-12)
     */
    maxDate?: TDate;
    /**
     * Disable specific date. @DateIOType
     */
    shouldDisableDate?: (day: unknown) => boolean;
    /**
     * Disable past dates.
     *
     * @default false
     */
    disablePast?: boolean;
    /**
     * Disable future dates.
     *
     * @default false
     */
    disableFuture?: boolean;
}
export declare const validateDate: <TDate>(utils: MuiPickersAdapter<unknown>, value: unknown, { minDate, maxDate, disableFuture, shouldDisableDate, disablePast }: DateValidationProps<TDate>) => "shouldDisableDate" | "invalidDate" | "disableFuture" | "maxDate" | "disablePast" | "minDate" | null;
export declare type DateValidationError = ReturnType<typeof validateDate>;
declare type DateRangeValidationErrorValue = DateValidationError | 'invalidRange' | null;
export declare type DateRangeValidationError = [DateRangeValidationErrorValue, DateRangeValidationErrorValue];
export declare const validateDateRange: <TDate>(utils: MuiPickersAdapter<TDate>, value: RangeInput<TDate>, dateValidationProps: DateValidationProps<TDate>) => [DateRangeValidationErrorValue, DateRangeValidationErrorValue];
export {};
