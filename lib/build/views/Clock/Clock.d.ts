import * as React from 'react';
import { ClockViewType } from '../../constants/ClockType';
import { PickerOnChangeFn } from '../../_shared/hooks/useViews';
import { useMeridiemMode } from '../../TimePicker/TimePickerToolbar';
import { PickerSelectionState } from '../../_shared/hooks/usePickerState';
export interface ClockProps<TDate> extends ReturnType<typeof useMeridiemMode> {
    date: TDate | null;
    type: ClockViewType;
    value: number;
    isTimeDisabled: (timeValue: number, type: ClockViewType) => boolean;
    children: React.ReactElement<any>[];
    onDateChange: PickerOnChangeFn<TDate>;
    onChange: (value: number, isFinish?: PickerSelectionState) => void;
    ampm?: boolean;
    minutesStep?: number;
    ampmInClock?: boolean;
    allowKeyboardControl?: boolean;
}
export declare const useStyles: (props?: any) => Record<"root" | "clock" | "squareMask" | "pin" | "amButton" | "pmButton" | "meridiemButtonSelected", string>;
export declare function Clock<TDate>(props: ClockProps<TDate>): JSX.Element;
export declare namespace Clock {
    var propTypes: any;
    var displayName: string;
}
