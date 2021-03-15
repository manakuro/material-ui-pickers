import * as React from 'react';
import { PaperProps } from '@material-ui/core/Paper';
import { PopperProps } from '@material-ui/core/Popper';
import { TrapFocusProps } from '@material-ui/core/Unstable_TrapFocus';
import { TransitionProps } from '@material-ui/core/transitions';
export interface ExportedPickerPopperProps {
    /**
     * Popper props passed down to [Popper](https://material-ui.com/api/popper/) component.
     */
    PopperProps?: Partial<PopperProps>;
    /**
     * Custom component for [Transition](https://material-ui.com/components/transitions/#transitioncomponent-prop).
     */
    TransitionComponent?: React.ComponentType<TransitionProps>;
}
export interface PickerPopperProps extends ExportedPickerPopperProps, PaperProps {
    role: 'tooltip' | 'dialog';
    TrapFocusProps?: Partial<TrapFocusProps>;
    anchorEl: PopperProps['anchorEl'];
    open: PopperProps['open'];
    onClose: () => void;
    onOpen: () => void;
}
export declare const useStyles: (props?: any) => Record<"root" | "paper" | "topTransition", string>;
export declare const PickersPopper: React.FC<PickerPopperProps>;
