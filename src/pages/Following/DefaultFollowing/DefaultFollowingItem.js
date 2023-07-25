import { memo, useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './DefaultFollowing.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
// import captureImageFromVideo from './getImageFromVideo';

const cx = classNames.bind(styles);

function DefaultFollowingItem({ image, name, userName, playing, handleHover, video }) {
    const imageRef = useRef();
    const [imageURL, setImageURL] = useState('');

    const captureImageFromVideo = (videoURL) => {
        const videoElement = document.createElement('video');
        videoElement.crossOrigin = 'anonymous'; // Đảm bảo việc tải video từ tài nguyên không bị cản trở
        videoElement.src = videoURL;
        videoElement.type = 'video/mp4';
        videoElement.controls = true;

        return new Promise((resolve, reject) => {
            videoElement.addEventListener('loadedmetadata', () => {
                const canvas = document.createElement('canvas');
                canvas.width = videoElement.videoWidth;
                canvas.height = videoElement.videoHeight;
                const context = canvas.getContext('2d');
                context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                const dataURL = canvas.toDataURL();
                resolve(dataURL);
            });

            videoElement.addEventListener('error', () => {
                reject(new Error('Error loading video.'));
            });
        });
    };

    useEffect(() => {
        captureImageFromVideo(video)
            .then((dataURL) => {
                if (!playing) {
                    console.log(dataURL);
                    setImageURL(dataURL);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={cx('following-item')} onMouseOver={handleHover}>
            {!playing && <Image ref={imageRef} src={imageURL} alt="background" className={cx('default-image')} />}
            {playing && (
                <video className={cx('video')} autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
            <div className={cx('info')}>
                <Image src={image} alt="Avatar" className={cx('avatar')} />
                <p className={cx('name')}>{name}</p>
                <p className={cx('user-name')}>{userName}</p>
                <Button primary className={cx('btn-follow')}>
                    Follow
                </Button>
            </div>
        </div>
    );
}

export default memo(DefaultFollowingItem);
