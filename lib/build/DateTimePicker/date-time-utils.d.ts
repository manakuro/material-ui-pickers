import { ParsableDate } from '../constants/prop-types';
import { MuiPickersAdapter } from '../_shared/hooks/useUtils';
import { DateValidationProps } from '../_helpers/date-utils';
import { TimeValidationProps } from '../_helpers/time-utils';
export declare function validateDateAndTime<TDate>(utils: MuiPickersAdapter, value: unknown | ParsableDate, { minDate, maxDate, disableFuture, shouldDisableDate, disablePast, ...timeValidationProps }: DateValidationProps<TDate> & TimeValidationProps<TDate>): "shouldDisableDate" | "invalidDate" | "minTime" | "maxTime" | "shouldDisableTime-hours" | "shouldDisableTime-minutes" | "shouldDisableTime-seconds" | "disableFuture" | "maxDate" | "disablePast" | "minDate" | null;
export declare type DateAndTimeValidationError = ReturnType<typeof validateDateAndTime>;
