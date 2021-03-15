import * as React from 'react';
import { DateIOFormats } from '@date-io/core/IUtils';
import { MuiPickersAdapter } from './_shared/hooks/useUtils';
export declare const MuiPickersAdapterContext: React.Context<MuiPickersAdapter<unknown> | null>;
export interface LocalizationProviderProps {
    children?: React.ReactNode;
    dateAdapter: new (...args: any) => MuiPickersAdapter;
    dateFormats?: Partial<DateIOFormats>;
    dateLibInstance?: any;
    locale?: any;
}
declare const LocalizationProvider: React.FC<LocalizationProviderProps>;
export default LocalizationProvider;
