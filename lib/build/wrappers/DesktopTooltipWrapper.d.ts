import * as React from 'react';
import { WrapperProps } from './Wrapper';
import { StaticWrapperProps } from './StaticWrapper';
import { InnerMobileWrapperProps } from './MobileWrapper';
import { InnerDesktopWrapperProps } from './DesktopWrapper';
import { ExportedPickerPopperProps } from '../_shared/PickersPopper';
export interface InnerDesktopTooltipWrapperProps extends ExportedPickerPopperProps {
}
export interface DesktopTooltipWrapperProps extends InnerDesktopTooltipWrapperProps, WrapperProps, Partial<InnerMobileWrapperProps & StaticWrapperProps & InnerDesktopWrapperProps> {
}
export declare const DesktopTooltipWrapper: React.FC<DesktopTooltipWrapperProps>;
