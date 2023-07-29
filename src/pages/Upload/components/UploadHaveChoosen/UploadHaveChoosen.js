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
import DiscloseVideoContent from './components/DiscloseVideoContent';
import Checkbox from '~/components/Checkbox';
import RunACopyrightCheck from './components/RunACopyrightCheck';

const cx = classNames.bind(styles);
const userPermission = ['Comment', 'Duet', 'Stitch'];

function UploadHaveChoosen() {
    const [disableSplit, setDisableSplit] = useState(true);
    const [captionValue, setCaptionValue] = useState('');
    const [whoCanWatch, setWhoCanWatch] = useState('Public');
    const [haveSchedule, setHaveSchedule] = useState(false);

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
                                            <Checkbox />
                                            <span className={cx('user-permission-checkbox-text')}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <ScheduleVideo haveSchedule={haveSchedule} setHaveSchedule={setHaveSchedule} />
                            <DiscloseVideoContent />
                            <RunACopyrightCheck />
                            <div className={cx('footer')}>
                                <Button large normal className={cx('btn-footer')}>
                                    Discard
                                </Button>
                                <Button large primary className={cx('btn-footer')}>
                                    {haveSchedule ? 'Schedule' : 'Post'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </PopperWrapper>
        </div>
    );
}

export default UploadHaveChoosen;
