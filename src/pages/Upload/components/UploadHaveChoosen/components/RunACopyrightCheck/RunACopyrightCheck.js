import { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './RunACopyrightCheck.module.scss';
import Switch from '~/components/Switch';
import { boxContext } from '~/Context/boxContext';
import LearnMore from './components/LearnMore';

const cx = classNames.bind(styles);

function RunACopyrightCheck() {
    const [showBox, setShowBox] = useState(false);
    const [box, setBox] = useContext(boxContext);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('heading')}>Run a copyright check</div>
                <Switch setState={setShowBox} />
            </div>
            {!showBox && (
                <>
                    <span className={cx('desc')}>
                        We'll check your video for potential copyright infringements on used sounds. If infringements
                        are found, you can edit the video before posting.
                    </span>
                    <span
                        className={cx('learn-more')}
                        onClick={() =>
                            setBox({
                                comp: <LearnMore />,
                                hideOnClickOutside: true,
                            })
                        }
                    >
                        Learn more
                    </span>
                </>
            )}
            {showBox && (
                <div className={cx('container')}>
                    <div className={cx('tool-tip')}>
                        <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aAogICAgZmlsbFJ1bGU9ImV2ZW5vZGQiCiAgICBjbGlwUnVsZT0iZXZlbm9kZCIKICAgIGQ9Ik0xNC4yMzExIDQuMjQwOTRDMTQuMzU4NSA0LjM3MzggMTQuMzU0MSA0LjU4NDgxIDE0LjIyMTIgNC43MTIyNEw2LjI5NTE0IDEyLjMxNDhDNi4wMzMzMyAxMi41NjYgNS42MTg3OCAxMi41NjE2IDUuMzYyMjUgMTIuMzA1MUwxLjc2NDYyIDguNzA3NDlDMS42MzQ0NSA4LjU3NzMxIDEuNjM0NDUgOC4zNjYyNiAxLjc2NDYyIDguMjM2MDhMMi4yMzYwMyA3Ljc2NDY4QzIuMzY2MiA3LjYzNDUgMi41NzcyNiA3LjYzNDUgMi43MDc0MyA3Ljc2NDY4TDUuODQzMzggMTAuOTAwNkwxMy4yOTgzIDMuNzVDMTMuNDMxMSAzLjYyMjU2IDEzLjY0MjEgMy42MjY5NiAxMy43Njk2IDMuNzU5ODJMMTQuMjMxMSA0LjI0MDk0WiIKICAgIGZpbGw9IiMwQkUwOUIiCiAgLz4KPC9zdmc+"
                            alt="check"
                        />
                        <span className={cx('text')}>No issues detected.</span>
                    </div>
                    <div className={cx('desc')}>
                        Note: Results of copyright checks aren't final. For instance, future changes of the copyright
                        holder's authorization to the sound may impact your video.
                    </div>
                    <div
                        className={cx('learn-more')}
                        onClick={() =>
                            setBox({
                                comp: <LearnMore />,
                                hideOnClickOutside: true,
                            })
                        }
                    >
                        Learn more
                    </div>
                </div>
            )}
        </div>
    );
}

export default RunACopyrightCheck;
