import * as React from 'react';
import { ExportedPickerProps } from './Picker';
import { ParsableDate } from '../constants/prop-types';
import { SomeWrapper, ExtendWrapper } from '../wrappers/Wrapper';
import { ResponsiveWrapper } from '../wrappers/ResponsiveWrapper';
import { AnyPickerView, AllSharedPickerProps, ToolbarComponentProps } from './SharedPickerProps';
declare type AllAvailableForOverrideProps = ExportedPickerProps<AnyPickerView>;
export declare type AllPickerProps<T, TWrapper extends SomeWrapper = SomeWrapper> = T & AllSharedPickerProps & ExtendWrapper<TWrapper>;
export interface MakePickerOptions<T extends unknown> {
    name: string;
    /**
     * Hook that running validation for the `value` and input.
     */
    useValidation: (value: ParsableDate<unknown>, props: T) => string | null;
    /**
     * Intercept props to override or inject default props specifically for picker.
     */
    useInterceptProps: (props: AllPickerProps<T>) => AllPickerProps<T> & {
        inputFormat: string;
    };
    DefaultToolbarComponent: React.ComponentType<ToolbarComponentProps>;
}
export declare type SharedPickerProps<TDate, TWrapper extends SomeWrapper> = ExtendWrapper<TWrapper> & AllSharedPickerProps<ParsableDate<TDate>, TDate | null> & React.RefAttributes<HTMLInputElement>;
declare type PickerComponent<TViewProps extends AllAvailableForOverrideProps, TWrapper extends SomeWrapper> = <TDate>(props: TViewProps & SharedPickerProps<TDate, TWrapper>) => JSX.Element;
export declare function makePickerWithStateAndWrapper<T extends AllAvailableForOverrideProps, TWrapper extends SomeWrapper = typeof ResponsiveWrapper>(Wrapper: TWrapper, { name, useInterceptProps, useValidation, DefaultToolbarComponent }: MakePickerOptions<T>): PickerComponent<T, TWrapper>;
export {};
