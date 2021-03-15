import * as PropTypes from 'prop-types';
import { DatePickerView } from '../../DatePicker';
import { SlideDirection } from './SlideTransition';
import { DateValidationProps } from '../../_helpers/date-utils';
import { ExportedArrowSwitcherProps } from '../../_shared/ArrowSwitcher';
export declare type ExportedCalendarHeaderProps<TDate> = Pick<CalendarHeaderProps<TDate>, 'leftArrowIcon' | 'rightArrowIcon' | 'leftArrowButtonProps' | 'rightArrowButtonProps' | 'leftArrowButtonText' | 'rightArrowButtonText' | 'getViewSwitchingButtonText'>;
export interface CalendarHeaderProps<TDate> extends ExportedArrowSwitcherProps, Omit<DateValidationProps<TDate>, 'shouldDisableDate'> {
    view: DatePickerView;
    views: DatePickerView[];
    currentMonth: TDate;
    /**
     * Get aria-label text for switching between views button.
     */
    getViewSwitchingButtonText?: (currentView: DatePickerView) => string;
    reduceAnimations: boolean;
    changeView: (view: DatePickerView) => void;
    onMonthChange: (date: TDate, slideDirection: SlideDirection) => void;
}
export declare const useStyles: (props?: any) => Record<"root" | "yearSelectionSwitcher" | "previousMonthButton" | "switchViewDropdown" | "switchViewDropdownDown" | "monthTitleContainer" | "monthText", string>;
export declare function CalendarHeader<TDate>(props: CalendarHeaderProps<TDate>): JSX.Element;
export declare namespace CalendarHeader {
    var displayName: string;
    var propTypes: {
        leftArrowButtonText: PropTypes.Requireable<string>;
        leftArrowIcon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        rightArrowButtonText: PropTypes.Requireable<string>;
        rightArrowIcon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
}
export default CalendarHeader;
