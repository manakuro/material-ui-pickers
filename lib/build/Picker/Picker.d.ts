import * as React from 'react';
import { DateTimePickerView } from '../DateTimePicker';
import { BasePickerProps } from '../typings/BasePicker';
import { WithViewsProps, AnyPickerView, SharedPickerProps, CalendarAndClockProps } from './SharedPickerProps';
export interface ExportedPickerProps<TView extends AnyPickerView> extends Omit<BasePickerProps, 'value' | 'onChange'>, CalendarAndClockProps<unknown>, WithViewsProps<TView> {
    hideTabs?: boolean;
    dateRangeIcon?: React.ReactNode;
    timeIcon?: React.ReactNode;
}
export declare type PickerProps<TView extends AnyPickerView, TInputValue = any, TDateValue = any> = ExportedPickerProps<TView> & SharedPickerProps<TInputValue, TDateValue>;
export declare const useStyles: (props?: any) => Record<"root" | "landscape" | "pickerView" | "pickerViewLandscape", string>;
declare const _default: React.FC<PickerProps<DateTimePickerView, any, any>>;
export default _default;
