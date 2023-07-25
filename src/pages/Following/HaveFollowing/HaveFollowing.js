import classNames from 'classnames/bind';
import styles from './HaveFollowing.module.scss';
import { VideoHome } from '~/FakeData/VideoHome';
import VideoContainer from '~/components/VideoContainer';

const cx = classNames.bind(styles);

function HaveFollowing() {
    return (
        <div className={cx('wrapper')}>
            {VideoHome.map((item, index) => (
                <VideoContainer key={index} DATA={item} />
            ))}
        </div>
    );
}

export default HaveFollowing;
