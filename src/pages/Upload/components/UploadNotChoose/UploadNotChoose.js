import classNames from 'classnames/bind';
import styles from './UploadNotChoose.module.scss';
import { UploadIcon } from '../../IconUpload';
import Button from '~/components/Button';
import PopperWrapper from '../Popper';

const cx = classNames.bind(styles);

function UploadNotChoose({ handleOpenFolder }) {
    return (
        <PopperWrapper>
            <div className={cx('wrapper')}>
                <div className={cx('upload-container')}>
                    <div className={cx('uploader')} onClick={handleOpenFolder}>
                        <div className={cx('icon')}>
                            <UploadIcon />
                        </div>
                        <p className={cx('heading')}>Select video to upload</p>
                        <p className={cx('text')}>Or drag and drop a file</p>
                        <p className={cx('text-sub')}>
                            Long videos can be split into multiple parts to get more exposure
                        </p>
                        <div className={cx('video-info')}>
                            <p className={cx('video-info-item')}>MP4 or WebM</p>
                            <p className={cx('video-info-item')}>720x1280 resolution or higher</p>
                            <p className={cx('video-info-item')}>Up to 30 minutes</p>
                            <p className={cx('video-info-item')}>Less than 2GB</p>
                        </div>
                        <Button primary className={cx('btn-select')}>
                            Select file
                        </Button>
                    </div>
                </div>
            </div>
        </PopperWrapper>
    );
}

export default UploadNotChoose;
