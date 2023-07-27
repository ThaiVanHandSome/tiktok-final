import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './WhoCanWatch.module.scss';
import { ArrowBottomIconSolid } from '~/pages/Upload/IconUpload';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/Popper';

const cx = classNames.bind(styles);

const data = ['Public', 'Friends', 'Private'];

function WhoCanWatch({ whoCanWatch, setWhoCanWatch }) {
    const [showMenu, setShowMenu] = useState(false);
    const [indexActive, setIndexActive] = useState(0);

    const handleSelectWatchUser = (e) => {
        setWhoCanWatch(e.target.getAttribute('value'));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>Who can watch this video</div>
            <Tippy
                // animation="shift-away-extreme"
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
                            {/* <div className={cx('menu-item')} value="Public" onClick={(e) => handleSelectWatchUser(e)}>
                                Public
                            </div>
                            <div className={cx('menu-item')} value="Friends" onClick={(e) => handleSelectWatchUser(e)}>
                                Friends
                            </div>
                            <div className={cx('menu-item')} value="Private" onClick={(e) => handleSelectWatchUser(e)}>
                                Private
                            </div> */}
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx('menu-item', {
                                        isActive: index === indexActive,
                                    })}
                                    value={item}
                                    onClick={(e) => {
                                        handleSelectWatchUser(e);
                                        setIndexActive(index);
                                    }}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </PopperWrapper>
                )}
            >
                <div className={cx('who-value-container')}>
                    <div className={cx('who-value')}>{whoCanWatch}</div>
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
