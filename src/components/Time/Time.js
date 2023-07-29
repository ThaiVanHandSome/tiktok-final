import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Time.module.scss';
import { ArrowBottomIcon } from '~/Icons';

const cx = classNames.bind(styles);

function Time({ stateTime, setStateTime }) {
    // const initHours = [undefined, undefined, undefined, 0, 1, 2, 3];
    // const initMinutes = [undefined, undefined, undefined, 0, 5, 10, 15];

    const createInitValue = (value, lastValue, valueAdd) => {
        const initValue = [];
        initValue[3] = value;
        let currValue = value;
        for (let i = 4; i < 7; i++) {
            if (currValue === lastValue || currValue === undefined) {
                currValue = undefined;
            } else {
                currValue += valueAdd;
            }
            initValue[i] = currValue;
        }
        currValue = value;
        for (let i = 2; i >= 0; i--) {
            if (currValue === 0 || currValue === undefined) {
                currValue = undefined;
            } else {
                currValue -= valueAdd;
            }
            initValue[i] = currValue;
        }
        return initValue;
    };

    const initHours = createInitValue(stateTime.hour, 23, 1);
    const initMinutes = createInitValue(Number.parseInt(stateTime.minute / 5) * 5, 55, 5);

    const [hours, setHours] = useState(initHours);
    const [minutes, setMinutes] = useState(initMinutes);

    console.log('re-render');

    const handleIncrease = (state, setState, value, lastValue) => {
        if (state[3] === lastValue) return;
        setState((prev) => {
            let newLists = [...prev];
            let nextValue = newLists[6];
            if (nextValue === lastValue) {
                nextValue = undefined;
            } else if (nextValue !== undefined) {
                nextValue += value;
            }
            newLists.shift();
            newLists.push(nextValue);
            return newLists;
        });
    };

    const handleDecrease = (state, setState, value) => {
        if (state[3] === 0) return;
        setState((prev) => {
            let newLists = [...prev];
            let prevValue = newLists[0];
            if (prevValue === 0) {
                prevValue = undefined;
            } else if (prevValue !== undefined) {
                prevValue -= value;
            }
            newLists.pop();
            newLists.unshift(prevValue);
            return newLists;
        });
    };

    useEffect(() => {
        setStateTime({
            hour: hours[3],
            minute: minutes[3],
        });
    }, [hours, minutes]);

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('time-selection')}>:</div>
                <div className={cx('time-container')}>
                    <div
                        className={cx('time-icon', 'decrease', {
                            'not-allow': hours[3] === 0,
                        })}
                        onClick={() => handleDecrease(hours, setHours, 1)}
                    >
                        <ArrowBottomIcon width="2rem" height="2rem" />
                    </div>
                    <div className={cx('time-scroll-container')}>
                        <div className={cx('time-list')}>
                            {hours.map((item, index) => (
                                <div key={index} className={cx('time-item')}>
                                    <span
                                        className={cx('time-item-value', {
                                            'accept-choose': item !== undefined,
                                        })}
                                    >
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className={cx('time-icon', 'increa', {
                            'not-allow': hours[3] === 23,
                        })}
                        onClick={() => handleIncrease(hours, setHours, 1, 23)}
                    >
                        <ArrowBottomIcon width="2rem" height="2rem" />
                    </div>
                </div>
                <div className={cx('time-container')}>
                    <div
                        className={cx('time-icon', 'decrease', {
                            'not-allow': minutes[3] === 0,
                        })}
                        onClick={() => handleDecrease(minutes, setMinutes, 5)}
                    >
                        <ArrowBottomIcon width="2rem" height="2rem" />
                    </div>
                    <div className={cx('time-scroll-container')}>
                        <div className={cx('time-list')}>
                            {minutes.map((item, index) => (
                                <div key={index} className={cx('time-item')}>
                                    <span
                                        className={cx('time-item-value', {
                                            'accept-choose': item !== undefined,
                                        })}
                                    >
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        className={cx('time-icon', 'increa', {
                            'not-allow': minutes[3] === 55,
                        })}
                        onClick={() => handleIncrease(minutes, setMinutes, 5, 55)}
                    >
                        <ArrowBottomIcon width="2rem" height="2rem" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Time;
