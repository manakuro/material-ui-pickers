import * as React from 'react';
import { PickerSelectionState } from '../../_shared/hooks/usePickerState';
export interface ClockNumberProps {
    disabled: boolean;
    getClockNumberText: (currentItemText: string) => string;
    index: number;
    isInner?: boolean;
    label: string;
    onSelect: (isFinish: PickerSelectionState) => void;
    selected: boolean;
}
export declare const useStyles: (props?: any) => Record<"root" | "clockNumberSelected" | "clockNumberDisabled", string>;
export declare const ClockNumber: React.FC<ClockNumberProps>;
export default ClockNumber;
