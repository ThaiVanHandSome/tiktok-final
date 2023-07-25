import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './UploadHaveChoosen.module.scss';
import PopperWrapper from '../Popper';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { CutIcon, SubIcon, PlusIcon } from '../../IconUpload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsSplitUpAndLeft } from '@fortawesome/free-solid-svg-icons';
import { video1 } from '~/asset/videos';

const cx = classNames.bind(styles);
const myVideo = document.createElement('video');

function UploadHaveChoosen({ urlVideo }) {
    const [disableSplit, setDisableSplit] = useState(true);
    const canvasRef = useRef();
    let isPlaying = false;

    useEffect(() => {
        myVideo.src = video1;
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
        <div className={cx('wrapper')}>
            <PopperWrapper>
                <div className={cx('edit-video-container')}>
                    <div className={cx('edit-video')}>
                        <div className={cx('edit-video-first-container')}>
                            <p className={cx('number')}>1</p>
                            <Image src="" alt="video" className={cx('video-image')} />
                            <div className={cx('info-video')}>
                                <p className={cx('caption')}>Hello xin chao cac ban</p>
                                <div className={cx('video-length')}>
                                    <span className={cx('time')}>00:00 - 00:26</span>
                                    <span className={cx('duration')}>26s</span>
                                </div>
                            </div>
                        </div>
                        <Button primary iconLeft={<CutIcon className={cx('icon-edit')} />}>
                            Edit Video
                        </Button>
                    </div>
                    <div
                        className={cx('split-video', {
                            disable: disableSplit,
                        })}
                    >
                        <div className={cx('container-text')}>
                            <p className={cx('text')}>Split into multiple parts to get more exposure</p>
                            <div className={cx('change')}>
                                <button
                                    className={cx('decrease', 'btn-change', {
                                        disable: disableSplit,
                                    })}
                                >
                                    <SubIcon />
                                </button>
                                <input value={2} className={cx('part-value')} />
                                <button
                                    className={cx('increase', 'btn-change', {
                                        disable: disableSplit,
                                    })}
                                >
                                    <PlusIcon />
                                </button>
                            </div>
                        </div>
                        <Button
                            className={cx('split-btn', {
                                disable: disableSplit,
                            })}
                            normal
                            iconLeft={<FontAwesomeIcon icon={faArrowsSplitUpAndLeft} className={cx('split-icon')} />}
                        >
                            Split
                        </Button>
                    </div>
                </div>
            </PopperWrapper>
            <PopperWrapper>
                <div className={cx('upload-video')}>
                    <div className={cx('header')}>
                        <p className={cx('heading')}>Upload video</p>
                        <p className={cx('desc')}>Post a video to your account</p>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('preview')} onClick={handleVideo}>
                            <div className={cx('mobile-preview')}>
                                <div className={cx('tiktok-frame')}>
                                    <div className={cx('app-tab')}></div>
                                </div>
                                <div className={cx('video-player')}>
                                    <div className={cx('canvas-container')}>
                                        <canvas
                                            ref={canvasRef}
                                            className={cx('mobile-preview-canvas')}
                                            width={450}
                                            height={798}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PopperWrapper>
        </div>
    );
}

export default UploadHaveChoosen;
