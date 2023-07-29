import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './ChooseHour.module.scss';
import { ClockIcon } from '~/Icons';
import { Wrapper as PopperWrapper } from '~/Popper';
import Time from '~/components/Time/Time';

const cx = classNames.bind(styles);
const currDate = new Date();

function ChooseHour() {
    const [time, setTime] = useState({
        hour: currDate.getHours(),
        minute: Number.parseInt(currDate.getMinutes() / 5) * 5,
    });

    const addZeroIntoTime = (number) => {
        let numberStr = `${number}`;
        if (number < 10) numberStr = '0' + numberStr;
        return numberStr;
    };

    let hourStr = addZeroIntoTime(time.hour);
    let minuteStr = addZeroIntoTime(time.minute);

    return (
        <Tippy
            trigger="click"
            hideOnClick="toggle"
            interactive
            render={(attrs) => (
                <PopperWrapper>
                    <Time stateTime={time} setStateTime={setTime} />
                </PopperWrapper>
            )}
        >
            <div className={cx('wrapper')}>
                <span className={cx('value-container')}>
                    <span className={cx('icon')}>
                        <ClockIcon />
                    </span>
                    <span className={cx('value')}>
                        <span className={cx('value-item')}>{hourStr}</span>
                        <span>:</span>
                        <span className={cx('value-item')}>{minuteStr}</span>
                    </span>
                </span>
            </div>
        </Tippy>
    );
}
export default ChooseHour;
