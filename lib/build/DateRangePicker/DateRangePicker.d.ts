import * as React from 'react';
import { SomeWrapper, ExtendWrapper } from '../wrappers/Wrapper';
import { RangeInput, AllSharedDateRangePickerProps } from './RangeTypes';
import { ValidationProps } from '../_shared/hooks/useValidation';
import { ExportedDateRangePickerViewProps } from './DateRangePickerView';
import { ExportedDateRangePickerInputProps } from './DateRangePickerInput';
import { DateRangeValidationError } from '../_helpers/date-utils';
export interface BaseDateRangePickerProps<TDate> extends ExportedDateRangePickerViewProps<TDate>, ValidationProps<DateRangeValidationError, RangeInput<TDate>>, ExportedDateRangePickerInputProps {
    /**
     * Text for start input label and toolbar placeholder
     *
     * @default "Start"
     */
    startText?: React.ReactNode;
    /**
     * Text for end input label and toolbar placeholder
     *
     * @default "end"
     */
    endText?: React.ReactNode;
}
declare type RangePickerComponent<TWrapper extends SomeWrapper> = <TDate>(props: BaseDateRangePickerProps<TDate> & ExtendWrapper<TWrapper> & AllSharedDateRangePickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element;
export declare const useDateRangeValidation: (value: RangeInput<unknown>, props: BaseDateRangePickerProps<any>) => DateRangeValidationError;
export declare function makeRangePicker<TWrapper extends SomeWrapper>(name: string, Wrapper: TWrapper): RangePickerComponent<TWrapper>;
export declare const DateRangePicker: RangePickerComponent<React.FC<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps>>;
export declare type DateRangePickerProps = React.ComponentProps<typeof DateRangePicker>;
export declare const DesktopDateRangePicker: RangePickerComponent<React.FC<import("../wrappers/DesktopTooltipWrapper").DesktopTooltipWrapperProps>>;
export declare type DesktopDateRangePickerProps = React.ComponentProps<typeof DesktopDateRangePicker>;
export declare const MobileDateRangePicker: RangePickerComponent<React.FC<import("../wrappers/MobileWrapper").MobileWrapperProps>>;
export declare type MobileDateRangePickerProps = React.ComponentProps<typeof MobileDateRangePicker>;
export declare const StaticDateRangePicker: RangePickerComponent<React.FC<import("../wrappers/StaticWrapper").StaticWrapperProps>>;
export declare type StaticDateRangePickerProps = React.ComponentProps<typeof StaticDateRangePicker>;
export { DateRangeDelimiter } from './DateRangeDelimiter';
