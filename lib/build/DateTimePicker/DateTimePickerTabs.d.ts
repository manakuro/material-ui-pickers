import * as React from 'react';
import { DateTimePickerView } from './DateTimePicker';
export interface DateTimePickerTabsProps {
    dateRangeIcon?: React.ReactNode;
    onChange: (view: DateTimePickerView) => void;
    timeIcon?: React.ReactNode;
    view: DateTimePickerView;
}
export declare const useStyles: (props?: any) => Record<"root" | "modeDesktop" | "tabs", string>;
declare const DateTimePickerTabs: React.FC<DateTimePickerTabsProps>;
export default DateTimePickerTabs;
