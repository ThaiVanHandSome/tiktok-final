import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './LearnMore.module.scss';
import Button from '~/components/Button/Button';
import { boxContext } from '~/Context/boxContext';

const cx = classNames.bind(styles);

function LearnMore() {
    const [box, setBox] = useContext(boxContext);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>How copyright checks work</div>
            <div className={cx('content')}>
                <p className={cx('text')}>
                    Run a copyright check on sounds you used before posting your video to identify potential copyright
                    infringements. If issues are found, you can edit your video before posting.
                </p>
                <br></br>
                <p className={cx('text')}>
                    You can still post a video that has been flagged for copyright infringement. However, the video will
                    be muted to protect the rights of unauthorized sounds.
                </p>
                <br></br>
                <p className={cx('text')}>
                    Note: Results of copyright checks aren't final. For instance, future changes of the copyright
                    holder's authorization to the sound may impact your video.
                </p>
                <br></br>
            </div>
            <div className={cx('footer')}>
                <Button
                    primary
                    onClick={() =>
                        setBox({
                            comp: null,
                        })
                    }
                >
                    OK
                </Button>
            </div>
        </div>
    );
}

export default LearnMore;
