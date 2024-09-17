import * as React from 'react';
import { DayProps } from './Day';
import { PickerOnChangeFn } from '../../_shared/hooks/useViews';
import { SlideDirection, SlideTransitionProps } from './SlideTransition';
export interface ExportedCalendarProps<TDate> extends Pick<DayProps<TDate>, 'disableHighlightToday' | 'showDaysOutsideCurrentMonth' | 'allowSameDateSelection'> {
    /**
     * Calendar onChange.
     */
    onChange: PickerOnChangeFn<TDate>;
    /**
     * Custom renderer for day. Check [DayComponentProps api](https://material-ui-pickers.dev/api/Day) @DateIOType.
     */
    renderDay?: (day: TDate, selectedDates: (TDate | null)[], DayComponentProps: DayProps<TDate>) => JSX.Element;
    /**
     * Enables keyboard listener for moving between days in calendar.
     *
     * @default currentWrapper !== 'static'
     */
    allowKeyboardControl?: boolean;
    /**
     * If `true` renders `LoadingComponent` in calendar instead of calendar view.
     * Can be used to preload information and show it in calendar.
     *
     * @default false
     */
    loading?: boolean;
    /**
     * Component displaying when passed `loading` true.
     *
     * @default () => "..."
     */
    renderLoading?: () => React.ReactNode;
}
export interface CalendarProps<TDate> extends ExportedCalendarProps<TDate> {
    date: TDate | null | Array<TDate | null>;
    isDateDisabled: (day: TDate) => boolean;
    slideDirection: SlideDirection;
    currentMonth: TDate;
    reduceAnimations: boolean;
    focusedDay: TDate | null;
    changeFocusedDay: (newFocusedDay: TDate) => void;
    isMonthSwitchingAnimating: boolean;
    onMonthSwitchingAnimationEnd: () => void;
    TransitionProps?: Partial<SlideTransitionProps>;
    className?: string;
}
export declare const useStyles: (props?: any) => Record<"root" | "iconButton" | "previousMonthButton" | "loadingContainer" | "weekContainer" | "week" | "daysHeader" | "weekDayLabel", string>;
export declare function Calendar<TDate>(props: CalendarProps<TDate>): JSX.Element;
export declare namespace Calendar {
    var displayName: string;
}
