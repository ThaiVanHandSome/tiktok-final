import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './ScheduleVideo.module.scss';
import { WarningIcon } from '~/pages/Upload/IconUpload';
import { Wrapper as PopperWrapper } from '~/Popper';
import Switch from '~/components/Switch';
import Calendar from '~/components/Calendar';
import ChooseDay from './components/ChooseDay';
import ChooseHour from './components/ChooseHour';

const cx = classNames.bind(styles);

function ScheduleVideo() {
    const [showSchedule, setShowSchedule] = useState(false);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('heading')}>Schedule video</div>
                <Tippy
                    trigger="click"
                    hideOnClick="toggle"
                    interactive
                    placement="bottom"
                    offset={[0, 2]}
                    render={(attrs) => (
                        <PopperWrapper>
                            <div className={cx('label-warning')} tabIndex={-1} {...attrs}>
                                By scheduling your video, you allow your video to be uploaded and stored on our servers
                                before posting.
                            </div>
                        </PopperWrapper>
                    )}
                >
                    <div className={cx('warning-icon')}>
                        <WarningIcon />
                    </div>
                </Tippy>
                <Switch state={showSchedule} setState={setShowSchedule} />
            </div>
            {showSchedule && (
                <div className={cx('value-day-hour')}>
                    <ChooseDay />
                    <ChooseHour />
                </div>
            )}
        </div>
    );
}

export default ScheduleVideo;
