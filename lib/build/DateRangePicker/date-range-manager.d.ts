import { DateRange } from './RangeTypes';
import { MuiPickersAdapter } from '../_shared/hooks/useUtils';
interface CalculateRangeChangeOptions {
    utils: MuiPickersAdapter;
    range: DateRange;
    newDate: unknown;
    currentlySelectingRangeEnd: 'start' | 'end';
}
export declare function calculateRangeChange({ utils, range, newDate: selectedDate, currentlySelectingRangeEnd, }: CalculateRangeChangeOptions): {
    nextSelection: 'start' | 'end';
    newRange: DateRange;
};
export declare function calculateRangePreview(options: CalculateRangeChangeOptions): DateRange;
export {};
