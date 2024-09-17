import { WrapperVariant } from '../../wrappers/Wrapper';
import { BasePickerProps } from '../../typings/BasePicker';
import { MuiPickersAdapter } from './useUtils';
export interface PickerStateValueManager<TInput, TDateValue> {
    parseInput: (utils: MuiPickersAdapter, props: BasePickerProps<TInput, TDateValue>) => TDateValue;
    emptyValue: TDateValue;
    areValuesEqual: (utils: MuiPickersAdapter, valueLeft: TDateValue, valueRight: TDateValue) => boolean;
}
export declare type PickerSelectionState = 'partial' | 'shallow' | 'finish';
export declare function usePickerState<TInput, TDateValue>(props: BasePickerProps<TInput, TDateValue>, valueManager: PickerStateValueManager<TInput, TDateValue>): {
    pickerProps: {
        date: TDateValue;
        isMobileKeyboardViewOpen: boolean;
        toggleMobileKeyboardView: () => void;
        onDateChange: (newDate: TDateValue, wrapperVariant: WrapperVariant, selectionState?: PickerSelectionState) => void;
    };
    inputProps: {
        onChange: (date: TDateValue, keyboardInputValue?: string | undefined) => void;
        inputFormat: string;
        open: boolean;
        rawValue: TInput;
        openPicker: () => false | void;
    };
    wrapperProps: {
        open: boolean;
        onClear: () => void;
        onAccept: () => void;
        onDismiss: () => void;
        onSetToday: () => void;
    };
};
