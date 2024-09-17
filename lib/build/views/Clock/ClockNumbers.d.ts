import { MuiPickersAdapter } from '../../_shared/hooks/useUtils';
import { PickerSelectionState } from '../../_shared/hooks/usePickerState';
interface GetHourNumbersOptions {
    ampm: boolean;
    date: unknown;
    getClockNumberText: (hour: string) => string;
    isDisabled: (value: number) => boolean;
    onChange: (value: number, isFinish?: PickerSelectionState) => void;
    utils: MuiPickersAdapter;
}
export declare const getHourNumbers: ({ ampm, date, getClockNumberText, isDisabled, onChange, utils, }: GetHourNumbersOptions) => JSX.Element[];
export declare const getMinutesNumbers: ({ utils, value, onChange, isDisabled, getClockNumberText, }: Pick<GetHourNumbersOptions, "onChange" | "getClockNumberText" | "isDisabled" | "utils"> & {
    value: number;
}) => JSX.Element[];
export {};
