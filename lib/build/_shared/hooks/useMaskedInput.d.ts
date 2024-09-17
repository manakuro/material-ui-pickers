import * as React from 'react';
import { DateInputProps, MuiTextFieldProps } from '../PureDateInput';
declare type MaskedInputProps = Omit<DateInputProps, 'open' | 'adornmentPosition' | 'renderInput' | 'openPicker' | 'InputProps' | 'InputAdornmentProps' | 'openPickerIcon' | 'disableOpenPicker' | 'getOpenDialogAriaText' | 'OpenPickerButtonProps'> & {
    inputProps?: Partial<React.HTMLProps<HTMLInputElement>>;
};
export declare function useMaskedInput({ acceptRegex, disabled, disableMaskedInput, ignoreInvalidInputs, inputFormat, inputProps, label, mask, onChange, rawValue, readOnly, rifmFormatter, TextFieldProps, validationError, }: MaskedInputProps): MuiTextFieldProps;
export {};
