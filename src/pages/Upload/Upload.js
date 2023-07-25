import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
import UploadNotChoose from './components/UploadNotChoose';
import UploadHaveChoosen from './components/UploadHaveChoosen';
import Footer from './components/Footer';

const cx = classNames.bind(styles);

function Upload() {
    const [video, setVideo] = useState(null);
    const inpFileRef = useRef();

    const handleOpenFolder = () => {
        inpFileRef.current.click();
    };

    const handleSubmit = (e) => {
        setVideo(e.target.value);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('layout')}>
                {video === null && (
                    <>
                        <input
                            ref={inpFileRef}
                            type="file"
                            style={{ display: 'none' }}
                            onChange={(e) => handleSubmit(e)}
                        />
                        <UploadNotChoose handleOpenFolder={handleOpenFolder} />
                    </>
                )}
                {video !== null && <UploadHaveChoosen urlVideo={video} />}
            </div>
            <Footer />
        </div>
    );
}

export default Upload;
