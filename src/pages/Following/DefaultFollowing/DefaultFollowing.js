import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DefaultFollowing.module.scss';
import DefaultFollowingItem from './DefaultFollowingItem';
import data from './data';
import { video1 } from '~/asset/videos';

const cx = classNames.bind(styles);

function DefaultFollowing() {
    const [playIndex, setPlayIndex] = useState(0);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                {data.map((item, index) => (
                    <DefaultFollowingItem
                        key={item.id}
                        image={item.avatar}
                        name={item.full_name}
                        userName={item.nickname}
                        playing={playIndex === index}
                        handleHover={() => setPlayIndex(index)}
                        video={video1}
                    />
                ))}
            </div>
        </div>
    );
}

export default DefaultFollowing;
