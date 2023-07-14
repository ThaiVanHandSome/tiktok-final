import classNames from 'classnames/bind';
import styles from './VideoContainer.module.scss';
import Image from '~/components/Image';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function VideoContainer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Image className={cx('avatar')} src="" alt="" />
                <div className={cx('content')}>
                    <div className={cx('post-info')}>
                        <div className={cx('post-text')}>
                            <div className={cx('info')}>
                                <span className={cx('name')}>Nguyễn Thái Văn</span>
                                <span className={cx('user-name')}>thaivan01</span>
                            </div>
                            <div className={cx('caption')}>
                                <span className={cx('text')}>Tôi sẽ cố gắng đạt được mục tiêu!</span>
                                <a href="" className={cx('tag')}>
                                    #fyp
                                </a>
                                <a href="" className={cx('tag')}>
                                    #foryou
                                </a>
                                <a href="" className={cx('tag')}>
                                    #foryoupage
                                </a>
                            </div>
                            <a href="#" className={cx('music')}>
                                <FontAwesomeIcon icon={faMusic} className={cx('icon')} />
                                <span className={cx('music-name')}>I set Fire</span>
                            </a>
                        </div>
                        <Button outline className={cx('btn-follow')}>Follow</Button>
                    </div>
                    <video className={cx('video')} controls>
                        <source src={require('~/asset/videos/video_1.mp4')} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default VideoContainer;
