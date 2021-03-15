import * as React from 'react';
import { WrapperProps } from './Wrapper';
import { StaticWrapperProps } from './StaticWrapper';
import { InnerMobileWrapperProps } from './MobileWrapper';
import { InnerDesktopTooltipWrapperProps } from './DesktopTooltipWrapper';
import { ExportedPickerPopperProps } from '../_shared/PickersPopper';
export interface InnerDesktopWrapperProps extends ExportedPickerPopperProps {
}
export interface DesktopWrapperProps extends InnerDesktopWrapperProps, WrapperProps, Partial<InnerMobileWrapperProps & InnerDesktopTooltipWrapperProps & StaticWrapperProps> {
}
export declare const DesktopWrapper: React.FC<DesktopWrapperProps>;
