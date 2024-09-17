import * as React from 'react';
export declare const CanAutoFocusContext: React.Context<boolean>;
export declare const useCanAutoFocus: () => boolean;
export declare function useAutoFocusControl(open: boolean): {
    canAutoFocus: boolean;
    onOpen: () => void;
};
