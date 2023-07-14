import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './VideoContainer.module.scss';
import Image from '~/components/Image';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function VideoContainer({ DATA }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Image className={cx('avatar')} src={DATA.image} alt="Avatar" />
                <div className={cx('content')}>
                    <div className={cx('post-info')}>
                        <div className={cx('post-text')}>
                            <div className={cx('info')}>
                                <span className={cx('name')}>{DATA.name}</span>
                                <span className={cx('user-name')}>{DATA.userName}</span>
                            </div>
                            <div className={cx('caption')}>
                                <span className={cx('text')}>{DATA.content}</span>
                                <>
                                    {DATA.tags.map((item, index) => (
                                        <a key={index} href="" className={cx('tag')}>
                                            {item}
                                        </a>
                                    ))}
                                </>
                            </div>
                            <a href="#" className={cx('music')}>
                                <FontAwesomeIcon icon={faMusic} className={cx('icon')} />
                                <span className={cx('music-name')}>{DATA.music}</span>
                            </a>
                        </div>
                        <Button outline className={cx('btn-follow')}>
                            Follow
                        </Button>
                    </div>
                    <video className={cx('video')} controls>
                        <source src={DATA.video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}

VideoContainer.propTypes = {
    DATA: PropTypes.object.isRequired,
};

export default VideoContainer;
