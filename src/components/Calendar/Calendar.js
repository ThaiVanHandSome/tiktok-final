import { useState, Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './Calendar.module.scss';
import { ArrowLeftIcon, ArrowRightIcon } from './IconCalendar';

const cx = classNames.bind(styles);
const nameDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
const dayOfMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const nameMonths = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

function Calendar({ state, setState, dayOfWeek }) {
    const [year, setYear] = useState(state.year);
    const [month, setMonth] = useState(state.month);
    let initFirstDay = (state.day - (dayOfWeek + 1)) % 7;
    if (initFirstDay === 0) initFirstDay = 7;
    initFirstDay = 7 - initFirstDay;
    const [dayOneInMonth, setDayOneInMonth] = useState(initFirstDay);

    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        dayOfMonths[2] = 29;
    }

    let countLoop = (dayOfMonths[month] + dayOneInMonth) / 7 + 1;
    if ((dayOfMonths[month] + dayOneInMonth) % 7 === 0) {
        countLoop -= 1;
    }

    const numberDayWrappers = Array.from({ length: countLoop }, (_, index) => index + 1);
    var day = 1;
    var firstDay = dayOneInMonth;

    const handleNextMonth = () => {
        setMonth((prev) => {
            prev += 1;
            if (prev > 12) {
                prev = 1;
                setYear((prev) => prev + 1);
            }
            return prev;
        });
        setDayOneInMonth(firstDay);
    };

    const handlePrevMonth = () => {
        setMonth((prev) => {
            prev -= 1;
            if (prev === 0) {
                prev = 12;
                setYear((prev) => prev - 1);
            }
            let residualDay = (dayOfMonths[prev] - dayOneInMonth) % 7;
            if (residualDay === 0) residualDay = 7;
            console.log(residualDay);
            setDayOneInMonth(7 - residualDay);
            return prev;
        });
    };

    const handleSelect = (day) => {
        if (day.notIn) return;
        setState({
            day: day.content,
            month: month,
            year: year,
        });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('month-header-wrapper')}>
                <div className={cx('month-header-icon')} onClick={handlePrevMonth}>
                    <ArrowLeftIcon />
                </div>
                <div className={cx('month-header-value')}>
                    {nameMonths[month]} / {year}
                </div>
                <div className={cx('month-header-icon')} onClick={handleNextMonth}>
                    <ArrowRightIcon />
                </div>
            </div>
            <div className={cx('day-header-wrapper')}>
                {nameDays.map((item, index) => (
                    <div key={index} className={cx('day-header')}>
                        {item}
                    </div>
                ))}
            </div>
            <Fragment>
                {numberDayWrappers.map((item, index) => {
                    let currentDays = [];
                    const currentDay = day;
                    if (index === 0) {
                        let prevMonth = month - 1;
                        if (prevMonth === 0) prevMonth = 12;
                        let dayOfPrevMonth = dayOfMonths[prevMonth];
                        var i;
                        for (i = dayOneInMonth - 1; i >= 0; i--) {
                            currentDays[i] = {};
                            currentDays[i].content = dayOfPrevMonth;
                            currentDays[i].notIn = true;
                            dayOfPrevMonth--;
                        }
                        let cnt = 1;
                        for (i = dayOneInMonth; i < 7; i++) {
                            currentDays[i] = {};
                            currentDays[i].content = cnt;
                            cnt++;
                        }
                        day = cnt;
                    } else {
                        let lastDay = currentDay + 6;
                        lastDay = Math.min(lastDay, dayOfMonths[month]);
                        let idx = 0;
                        for (i = currentDay; i <= lastDay; i++) {
                            currentDays[idx] = {};
                            currentDays[idx].content = i;
                            idx++;
                        }
                        day = lastDay + 1;
                    }
                    if (currentDays.length <= 7) {
                        firstDay = currentDays.length % 7;
                        let cnt = 1;
                        for (i = currentDays.length; i < 7; i++) {
                            currentDays[i] = {};
                            currentDays[i].content = cnt;
                            currentDays[i].notIn = true;
                            cnt++;
                        }
                    }
                    return (
                        <div className={cx('days-wrapper')}>
                            {currentDays.map((day, index) => (
                                <div key={index} className={cx('day-span-container')}>
                                    <span
                                        className={cx('day', {
                                            'not-in': day.notIn,
                                            selected:
                                                day.content === state.day &&
                                                month === state.month &&
                                                year === state.year &&
                                                !day.notIn,
                                        })}
                                        onClick={() => handleSelect(day)}
                                    >
                                        {day.content}
                                    </span>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </Fragment>
        </div>
    );
}

export default Calendar;
