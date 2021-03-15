import * as React from 'react';
import { PickerOnChangeFn } from '../_shared/hooks/useViews';
import { ToolbarComponentProps } from '../Picker/SharedPickerProps';
export declare const useStyles: (props?: any) => Record<"separator" | "hourMinuteLabel" | "hourMinuteLabelLandscape" | "hourMinuteLabelReverse" | "ampmSelection" | "ampmLandscape" | "ampmLabel" | "penIconLandscape", string>;
export declare function useMeridiemMode<TDate>(date: TDate, ampm: boolean | undefined, onChange: PickerOnChangeFn<TDate>): {
    meridiemMode: "am" | "pm" | null;
    handleMeridiemChange: (mode: 'am' | 'pm') => void;
};
export declare const TimePickerToolbar: React.FC<ToolbarComponentProps>;
export default TimePickerToolbar;
