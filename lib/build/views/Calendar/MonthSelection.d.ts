import { PickerOnChangeFn } from '../../_shared/hooks/useViews';
export interface MonthSelectionProps<TDate> {
    date: TDate | null;
    minDate: TDate;
    maxDate: TDate;
    onChange: PickerOnChangeFn<TDate>;
    disablePast?: boolean | null | undefined;
    disableFuture?: boolean | null | undefined;
    onMonthChange?: (date: TDate) => void | Promise<void>;
}
export declare const useStyles: (props?: any) => Record<"root", string>;
export declare function MonthSelection<TDate>({ date, disableFuture, disablePast, maxDate, minDate, onChange, onMonthChange, }: MonthSelectionProps<TDate>): JSX.Element;
