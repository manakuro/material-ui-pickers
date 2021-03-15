import { IUtils } from '@date-io/core/IUtils';
export declare type MuiPickersAdapter<TDate = unknown> = IUtils<TDate>;
export declare function useUtils<T = unknown>(): MuiPickersAdapter<T>;
export declare function useNow<TDate = unknown>(): NonNullable<TDate>;
