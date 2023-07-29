import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DiscloseVideoContent.module.scss';
import Switch from '~/components/Switch';
import Checkbox from '~/components/Checkbox/Checkbox';

const cx = classNames.bind(styles);

function DiscloseVideoContent() {
    const [showBox, setShowBox] = useState(false);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('heading')}>Disclose video content</div>
                <Switch setState={setShowBox} />
            </div>
            <div className={cx('desc')}>Let others know this video promotes a brand, product or service.</div>
            {showBox && (
                <div className={cx('container')}>
                    <div className={cx('box')}>
                        <div className={cx('checkbox-container')}>
                            <div className={cx('title')}>Your brand</div>
                            <Checkbox />
                        </div>
                        <div className={cx('text')}>You are promoting yourself or your own business.</div>
                    </div>
                    <div className={cx('box')}>
                        <div className={cx('checkbox-container')}>
                            <div className={cx('title')}>Branded content</div>
                            <Checkbox />
                        </div>
                        <div className={cx('text')}>
                            You are in a paid partnership with a brand. After posting the video, open your TikTok mobile app
                            and link the campaign under the video's “Ad settings”.
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DiscloseVideoContent;
