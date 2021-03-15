import * as PropTypes from 'prop-types';
export declare const date: PropTypes.Requireable<string | number | object>;
export declare type ParsableDate<TDate = unknown> = string | number | Date | null | undefined | TDate;
export declare const DomainPropTypes: {
    date: PropTypes.Requireable<string | number | object>;
    datePickerView: PropTypes.Requireable<string>;
};
export declare const defaultMinDate: unknown;
export declare const defaultMaxDate: unknown;
