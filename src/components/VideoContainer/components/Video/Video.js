import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faBookmark, faShare } from '@fortawesome/free-solid-svg-icons';
import VideoItem from './VideoItem';
import { Wrapper as PopperWrapper } from '~/Popper';
import menuData from './menuData';
import { ArrowBottomIcon } from '~/Icons';

const cx = classNames.bind(styles);

function Video({ data }) {
    const [activeHeart, setActiveHeart] = useState(false);
    const [activeSave, setActiveSave] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const handleClick = (setState) => {
        setState((prev) => !prev);
    };

    return (
        <div className={cx('wrapper')}>
            <VideoItem className={cx('video')} src={data.video} controls={true} />
            <div className={cx('action')}>
                <div className={cx('action-item')}>
                    <div
                        className={cx('action-icon', {
                            'heart-active': activeHeart,
                        })}
                        onClick={() => handleClick(setActiveHeart)}
                    >
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <span className={cx('value')}>{data.like}</span>
                </div>
                <div className={cx('action-item')}>
                    <div className={cx('action-icon')}>
                        <FontAwesomeIcon icon={faMessage} />
                    </div>
                    <span className={cx('value')}>99.9K</span>
                </div>
                <div className={cx('action-item')}>
                    <div
                        className={cx('action-icon', {
                            'save-active': activeSave,
                        })}
                        onClick={() => handleClick(setActiveSave)}
                    >
                        <FontAwesomeIcon icon={faBookmark} />
                    </div>
                    <span className={cx('value')}>99.9K</span>
                </div>
                <div className={cx('action-item')}>
                    <Tippy
                        interactive
                        offset={[100, 15]}
                        onHide={() => setShowMore(false)}
                        render={(attrs) => (
                            <PopperWrapper>
                                <div
                                    className={cx('menu', {
                                        'show-more': showMore,
                                    })}
                                    tabIndex={-1}
                                    {...attrs}
                                >
                                    {menuData.map((item, index) => (
                                        <div key={index} className={cx('menu-item')}>
                                            <div className={cx('menu-item-icon')}>{item.icon}</div>
                                            <span className={cx('menu-item-text')}>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div
                                    className={cx('btn-more', {
                                        hide: showMore,
                                    })}
                                    onClick={() => setShowMore(true)}
                                >
                                    <ArrowBottomIcon />
                                </div>
                            </PopperWrapper>
                        )}
                    >
                        <div className={cx('action-icon')}>
                            <FontAwesomeIcon icon={faShare} />
                        </div>
                    </Tippy>
                    <span className={cx('value')}>99.9K</span>
                </div>
            </div>
        </div>
    );
}

Video.propTypes = {
    src: PropTypes.string,
};

export default Video;
