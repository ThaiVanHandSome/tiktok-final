import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import { NavData } from './data';
import ExploreVideoItem from './ExploreVideoItem';
import { VideoHome } from '~/FakeData/VideoHome';

const cx = classNames.bind(styles);

function Explore() {
    return (
        <div className={cx('wrapper')}>
            <nav className={cx('nav-list')}>
                {NavData.map((item, index) => (
                    <div key={index} className={cx('nav-item')}>
                        <div className={cx('nav-icon')}>{item.icon}</div>
                        <p className={cx('nav-content')}>{item.content}</p>
                    </div>
                ))}
            </nav>
            <div className={cx('content')}>
                <div className={cx('row')}>
                    {VideoHome.map((item, index) => (
                        <ExploreVideoItem className={cx('video-item')} key={index} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Explore;
