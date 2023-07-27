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
import PreviewVideo from './components/PreviewVideo';
import FormCaption from './components/FormCaption';
import WhoCanWatch from './components/WhoCanWatch';
import ScheduleVideo from './components/ScheduleVideo';

const cx = classNames.bind(styles);
const userPermission = ['Comment', 'Duet', 'Stitch'];

function UploadHaveChoosen() {
    const [disableSplit, setDisableSplit] = useState(true);
    const [captionValue, setCaptionValue] = useState('');
    const [whoCanWatch, setWhoCanWatch] = useState('Public');

    // useEffect(() => {
    //     const listCheckbox = document.querySelectorAll(`.${cx('user-permission-checkbox-inp')}`);
    //     console.log(listCheckbox);
    //     Array.from(listCheckbox).forEach((item, index) => {
    //         if (item.checked === true) {
    //             console.log(index);
    //         }
    //     });
    // });

    return (
        <div className={cx('wrapper')}>
            <PopperWrapper>
                <div className={cx('edit-video-container')}>
                    <div className={cx('edit-video')}>
                        <div className={cx('edit-video-first-container')}>
                            <p className={cx('number')}>1</p>
                            <Image src="" alt="video" className={cx('video-image')} />
                            <div className={cx('info-video')}>
                                <p className={cx('caption')}>{captionValue}</p>
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
                        <PreviewVideo urlVideo={video1} />
                        <div className={cx('form')}>
                            <FormCaption captionValue={captionValue} setCaptionValue={setCaptionValue} />
                            <WhoCanWatch whoCanWatch={whoCanWatch} setWhoCanWatch={setWhoCanWatch} />
                            <div className={cx('user-permission')}>
                                <div className={cx('heading')}>Allow users to</div>
                                <div className={cx('user-permission-checkboxs')}>
                                    {userPermission.map((item, index) => (
                                        <div key={index} className={cx('user-permission-checkbox-item')}>
                                            <div className={cx('user-permission-checkbox')}>
                                                <input
                                                    className={cx('user-permission-checkbox-inp')}
                                                    type="checkbox"
                                                    value={item}
                                                />
                                                <div className={cx('user-permission-checkbox-icon')}>
                                                    <svg
                                                        width="12"
                                                        height="9.600000000000001"
                                                        viewBox="0 0 10 8"
                                                        fill="none"
                                                        style={{ pointerEvents: 'none' }}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M3.88632 5.95189L8.77465 0.915431C8.96697 0.717276 9.28352 0.712552 9.48168 0.904878L9.67738 1.09483C9.87553 1.28715 9.88026 1.6037 9.68793 1.80185L4.34296 7.3088C4.093 7.56633 3.67963 7.56633 3.42967 7.3088L0.948335 4.75227C0.756009 4.55411 0.760734 4.23757 0.958888 4.04524L1.15459 3.85529C1.35275 3.66297 1.66929 3.66769 1.86162 3.86584L3.88632 5.95189Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <span className={cx('user-permission-checkbox-text')}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <ScheduleVideo />
                        </div>
                    </div>
                </div>
            </PopperWrapper>
        </div>
    );
}

export default UploadHaveChoosen;
