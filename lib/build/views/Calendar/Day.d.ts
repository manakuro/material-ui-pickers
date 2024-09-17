import * as PropTypes from 'prop-types';
import { ButtonBaseProps } from '@material-ui/core/ButtonBase';
import { ExtendMui } from '../../typings/helpers';
import { PickerSelectionState } from '../../_shared/hooks/usePickerState';
export declare const useStyles: (props?: any) => Record<"root" | "disabled" | "selected" | "dayWithMargin" | "dayOutsideMonth" | "hiddenDaySpacingFiller" | "today" | "dayLabel", string>;
export interface DayProps<TDate> extends ExtendMui<ButtonBaseProps> {
    /**
     * The date to show.
     */
    day: TDate;
    /**
     * Is focused by keyboard navigation.
     */
    focused?: boolean;
    /**
     * Can be focused by tabbing in.
     */
    focusable?: boolean;
    /**
     * Is day in current month.
     */
    inCurrentMonth: boolean;
    /**
     * Is switching month animation going on right now.
     */
    isAnimating?: boolean;
    /**
     * Is today?
     */
    today?: boolean;
    /**
     * Disabled?.
     */
    disabled?: boolean;
    /**
     * Selected?
     */
    selected?: boolean;
    /**
     * Is keyboard control and focus management enabled.
     */
    allowKeyboardControl?: boolean;
    /**
     * Disable margin between days, useful for displaying range of days.
     */
    disableMargin?: boolean;
    /**
     * Display disabled dates outside the current month.
     *
     * @default false
     */
    showDaysOutsideCurrentMonth?: boolean;
    /**
     * Disable highlighting today date with a circle.
     *
     * @default false
     */
    disableHighlightToday?: boolean;
    /**
     * Allow selecting the same date (fire onChange even if same date is selected).
     *
     * @default false
     */
    allowSameDateSelection?: boolean;
    onDayFocus?: (day: TDate) => void;
    onDaySelect: (day: TDate, isFinish: PickerSelectionState) => void;
}
declare function PureDay<TDate>(props: DayProps<TDate>): JSX.Element;
declare namespace PureDay {
    var displayName: string;
    var propTypes: {
        disabled: PropTypes.Requireable<boolean>;
        selected: PropTypes.Requireable<boolean>;
        today: PropTypes.Requireable<boolean>;
    };
}
export declare const areDayPropsEqual: (prevProps: DayProps<any>, nextProps: DayProps<any>) => boolean;
export declare const Day: typeof PureDay;
export {};
