import * as React from 'react';
import { ButtonProps } from '@material-ui/core/Button';
import { TypographyProps } from '@material-ui/core/Typography';
import { ExtendMui } from '../typings/helpers';
export interface ToolbarButtonProps extends ExtendMui<ButtonProps, 'value' | 'variant'> {
    align?: TypographyProps['align'];
    selected: boolean;
    typographyClassName?: string;
    value: React.ReactNode;
    variant: TypographyProps['variant'];
}
export declare const useStyles: (props?: any) => Record<"root", string>;
export declare const ToolbarButton: React.FunctionComponent<ToolbarButtonProps>;
export default ToolbarButton;
