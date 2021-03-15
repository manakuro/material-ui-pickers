import { PickerOnChangeFn } from '../../_shared/hooks/useViews';
export interface ExportedYearSelectionProps<TDate> {
    /**
     * Callback firing on year change @DateIOType.
     */
    onYearChange?: (date: unknown) => void;
    /**
     * Disable specific years dynamically.
     * Works like `shouldDisableDate` but for year selection view. @DateIOType.
     */
    shouldDisableYear?: (day: unknown) => boolean;
}
export interface YearSelectionProps<TDate> extends ExportedYearSelectionProps<TDate> {
    allowKeyboardControl?: boolean;
    changeFocusedDay: (day: TDate) => void;
    date: TDate;
    disableFuture?: boolean | null | undefined;
    disablePast?: boolean | null | undefined;
    isDateDisabled: (day: TDate) => boolean;
    maxDate: TDate;
    minDate: TDate;
    onChange: PickerOnChangeFn<TDate>;
}
export declare const useStyles: (props?: any) => Record<"root", string>;
export declare function YearSelection<TDate>({ allowKeyboardControl, changeFocusedDay, date: __dateOrNull, isDateDisabled, maxDate, minDate, disableFuture, disablePast, onChange, onYearChange, shouldDisableYear, }: YearSelectionProps<TDate>): JSX.Element;
