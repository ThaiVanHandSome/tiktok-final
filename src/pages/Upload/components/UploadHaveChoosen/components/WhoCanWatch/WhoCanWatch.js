import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './WhoCanWatch.module.scss';
import { ArrowBottomIconSolid } from '~/pages/Upload/IconUpload';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/Popper';

const cx = classNames.bind(styles);

function WhoCanWatch() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>Who can watch this video</div>
            <Tippy
                trigger="click"
                hideOnClick="toggle"
                interactive
                placement="bottom"
                offset={[0, 2]}
                onShow={() => setShowMenu((prev) => !prev)}
                onHide={() => setShowMenu((prev) => !prev)}
                render={(attrs) => (
                    <PopperWrapper>
                        <div className={cx('menu-watch')} tabIndex={-1} {...attrs}>
                            <div className={cx('menu-item')}>Public</div>
                            <div className={cx('menu-item')}>Friends</div>
                            <div className={cx('menu-item')}>Private</div>
                        </div>
                    </PopperWrapper>
                )}
            >
                <div className={cx('who-value-container')}>
                    <div className={cx('who-value')}>Private</div>
                    <div
                        className={cx('who-value-icon', {
                            'icon-rotate': showMenu,
                        })}
                    >
                        <ArrowBottomIconSolid />
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default WhoCanWatch;
