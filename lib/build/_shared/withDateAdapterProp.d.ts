import * as React from 'react';
import { MuiPickersAdapter } from './hooks/useUtils';
export interface WithDateAdapterProps<TDate> {
    /**
     * Allows to pass configured date-io adapter directly. More info [here](https://next.material-ui-pickers.dev/guides/date-adapter-passing)
     * ```jsx
     * dateAdapter={new DateFnsAdapter({ locale: ruLocale })}
     * ```
     */
    dateAdapter?: MuiPickersAdapter<TDate>;
}
export declare function withDateAdapterProp<TProps>(Component: React.ComponentType<TProps>): React.FC<TProps & WithDateAdapterProps<unknown>>;
