import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ChooseDay.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/Popper';
import { CalendarIcon } from '~/Icons';
import Calendar from '~/components/Calendar';

const cx = classNames.bind(styles);
const currDate = new Date();

function ChooseDay() {
    const [schedule, setSchedule] = useState({
        day: currDate.getDate(),
        month: currDate.getMonth() + 1,
        year: currDate.getFullYear(),
    });

    let dayStr = `${schedule.day}`;
    if (schedule.day < 10) {
        dayStr = '0' + dayStr;
    }
    let monthStr = `${schedule.month}`;
    if (schedule.month < 10) {
        monthStr = '0' + monthStr;
    }
    return (
        <Tippy
            trigger="click"
            hideOnClick="toggle"
            interactive
            render={(attrs) => (
                <PopperWrapper>
                    <Calendar state={schedule} setState={setSchedule} dayOfWeek={currDate.getDay()} />
                </PopperWrapper>
            )}
        >
            <div className={cx('wrapper')}>
                <span className={cx('value-container')}>
                    <CalendarIcon />
                    <span className={cx('value')}>
                        {schedule.year}-{monthStr}-{dayStr}
                    </span>
                </span>
            </div>
        </Tippy>
    );
}
export default ChooseDay;
