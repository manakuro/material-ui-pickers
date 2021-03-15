import * as React from 'react';
import { PickerSelectionState } from './usePickerState';
import { AnyPickerView } from '../../Picker/SharedPickerProps';
export declare type PickerOnChangeFn<TDate> = (date: TDate | null, selectionState?: PickerSelectionState) => void;
export declare function useViews({ views, openTo, onChange, isMobileKeyboardViewOpen, toggleMobileKeyboardView, }: {
    views: AnyPickerView[];
    openTo: AnyPickerView;
    onChange: PickerOnChangeFn<unknown>;
    isMobileKeyboardViewOpen: boolean;
    toggleMobileKeyboardView: () => void;
}): {
    nextView: import("../..").DateTimePickerView;
    previousView: import("../..").DateTimePickerView;
    openNext: () => void;
    handleChangeAndOpenNext: (date: unknown, currentViewSelectionState?: "partial" | "shallow" | "finish" | undefined) => void;
    openView: import("../..").DateTimePickerView;
    setOpenView: (value: React.SetStateAction<import("../..").DateTimePickerView>) => void;
};
