import PropTypes from 'prop-types';
import { useRef, useEffect, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './PreviewVideo.module.scss';

const cx = classNames.bind(styles);

function PreviewVideo({ urlVideo }) {
    const canvasRef = useRef();
    const myVideo = document.createElement('video');
    let isPlaying = false;
    useEffect(() => {
        myVideo.src = urlVideo;
        myVideo.muted = true;
        myVideo.loop = true;
        myVideo.onloadeddata = () => {
            myVideo.play();
            const ctx = canvasRef.current.getContext('2d');
            setTimeout(function () {
                ctx.drawImage(myVideo, 0, 0, 450, 798);
            }, 56);
        };
    }, []);

    const handleStart = () => {
        myVideo.play();
        myVideo.muted = false;
        setInterval(() => {
            const ctx = canvasRef.current.getContext('2d');
            ctx.drawImage(myVideo, 0, 0, 450, 798);
        }, 30);
    };

    const handleStop = () => {
        myVideo.pause();
    };

    const handleVideo = () => {
        if (isPlaying) {
            handleStop();
        } else {
            handleStart();
        }
        isPlaying = !isPlaying;
    };

    return (
        <div className={cx('wrapper')} onClick={handleVideo}>
            <div className={cx('mobile-preview')}>
                <div className={cx('tiktok-frame')}>
                    <div className={cx('app-tab')}></div>
                </div>
                <div className={cx('video-player')}>
                    <div className={cx('canvas-container')}>
                        <canvas ref={canvasRef} className={cx('mobile-preview-canvas')} width={450} height={798} />
                    </div>
                </div>
            </div>
        </div>
    );
}

PreviewVideo.propTypes = {
    urlVideo: PropTypes.string.isRequired,
};

export default memo(PreviewVideo);
