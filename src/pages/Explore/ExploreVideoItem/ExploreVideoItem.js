import classNames from 'classnames/bind';
import styles from './ExploreVideoItem.module.scss';
import VideoItem from '~/components/VideoContainer/components/Video/VideoItem';
import { PlayIcon, LikeIcon } from '../IconExplore';
import Image from '~/components/Image/Image';

const cx = classNames.bind(styles);

function ExploreVideoItem({ className, data }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <div className={classes}>
            <div className={cx('video-container')}>
                <VideoItem className={cx('video')} src={data.video} />
                <div className={cx('count-view')}>
                    <div className={cx('icon', 'play-icon')}>
                        <PlayIcon />
                    </div>
                    <span className={cx('value', 'view-value')}>{data.view}</span>
                </div>
            </div>
            <p className={cx('content')}>
                <span className={cx('text')}>{data.content}</span>
                <>
                    <>
                        {data.tags.map((item, index) => (
                            <a key={index} href="" className={cx('tag')}>
                                {item}
                            </a>
                        ))}
                    </>
                </>
            </p>
            <div className={cx('footer')}>
                <div className={cx('info')}>
                    <Image src={data.image} alt="avatar" className={cx('avatar')} />
                    <span className={cx('user-name')}>{data.userName}</span>
                </div>
                <div className={cx('count-like')}>
                    <div className={cx('icon', 'like-icon')}>
                        <LikeIcon />
                    </div>
                    <span className={cx('value', 'like-value')}>{data.like}</span>
                </div>
            </div>
        </div>
    );
}

export default ExploreVideoItem;
