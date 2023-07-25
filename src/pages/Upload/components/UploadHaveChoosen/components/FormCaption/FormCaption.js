import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './FormCaption.module.scss';

const cx = classNames.bind(styles);

function FormCaption({ captionValue, setCaptionValue }) {
    const [friendValue, setFriendValue] = useState('');
    const [openFriend, setOpenFriend] = useState(false);

    const inpRef = useRef();

    const handleChangeInput = (e) => {
        if (openFriend) {
            setFriendValue(e.target.value);
        } else {
            setCaptionValue(e.target.value);
        }
    };

    const handleOpenFriend = () => {
        setCaptionValue((prev) => prev + '@');
        setOpenFriend(true);
        inpRef.current.focus();
    };

    const handleCloseFriend = () => {
        setOpenFriend(false);
        setFriendValue('');
        inpRef.current.focus();
    };

    return (
        <div className={cx('wrapper')}>
            <p className={cx('heading')}>{openFriend ? '@Friend' : 'Caption'}</p>
            <div className={cx('caption-input-container')}>
                {openFriend && (
                    <img
                        className={cx('caption-search')}
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4yNSAxNi43NUMxNC4yODc2IDE2Ljc1IDE2Ljc1IDE0LjI4NzYgMTYuNzUgMTEuMjVDMTYuNzUgOC4yMTI0MyAxNC4yODc2IDUuNzUgMTEuMjUgNS43NUM4LjIxMjQzIDUuNzUgNS43NSA4LjIxMjQzIDUuNzUgMTEuMjVDNS43NSAxNC4yODc2IDguMjEyNDMgMTYuNzUgMTEuMjUgMTYuNzVaIiBzdHJva2U9IiMxNjE4MjMiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxwYXRoIGQ9Ik0xNC45Njg4IDE2LjAzMDRMMTYuMDI5NCAxNC45Njk3TDE5LjM3NTkgMTguMzE2MkMxOS41NzExIDE4LjUxMTQgMTkuNTcxMSAxOC44MjggMTkuMzc1OSAxOS4wMjMzTDE5LjAyMjMgMTkuMzc2OEMxOC44MjcxIDE5LjU3MjEgMTguNTEwNSAxOS41NzIxIDE4LjMxNTIgMTkuMzc2OEwxNC45Njg4IDE2LjAzMDRaIiBmaWxsPSIjMTYxODIzIi8+Cjwvc3ZnPgo="
                        alt="search"
                    />
                )}
                <input
                    ref={inpRef}
                    value={openFriend ? friendValue : captionValue}
                    className={cx('caption-input')}
                    onChange={(e) => handleChangeInput(e)}
                />
                {!openFriend && (
                    <>
                        <div className={cx('caption-add')}>
                            <span className={cx('caption-add-text')} onClick={handleOpenFriend}>
                                @
                            </span>
                        </div>
                        <div className={cx('caption-add')}>
                            <span
                                className={cx('caption-add-text')}
                                onClick={() => setCaptionValue((prev) => prev + '#')}
                            >
                                #
                            </span>
                        </div>
                    </>
                )}
                {openFriend && (
                    <img
                        className={cx('caption-close')}
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNiAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOS43MTc1IDcuNjk2MDlDMTkuOTEyOCA3LjUwMDgzIDE5LjkxMjggNy4xODQyNSAxOS43MTc1IDYuOTg4OThMMTkuMDEwNCA2LjI4MTg4QzE4LjgxNTEgNi4wODY2MiAxOC40OTg1IDYuMDg2NjIgMTguMzAzMyA2LjI4MTg4TDEzIDExLjU4NTJMNy42OTY2OSA2LjI4MTkxQzcuNTAxNDIgNi4wODY2NCA3LjE4NDg0IDYuMDg2NjQgNi45ODk1OCA2LjI4MTkxTDYuMjgyNDcgNi45ODkwMUM2LjA4NzIxIDcuMTg0MjcgNi4wODcyMSA3LjUwMDg2IDYuMjgyNDcgNy42OTYxMkwxMS41ODU4IDEyLjk5OTRMNi4yODI0NyAxOC4zMDI3QzYuMDg3MjEgMTguNDk4IDYuMDg3MjEgMTguODE0NSA2LjI4MjQ3IDE5LjAwOThMNi45ODk1OCAxOS43MTY5QzcuMTg0ODQgMTkuOTEyMiA3LjUwMTQyIDE5LjkxMjIgNy42OTY2OCAxOS43MTY5TDEzIDE0LjQxMzZMMTguMzAzMyAxOS43MTY5QzE4LjQ5ODUgMTkuOTEyMiAxOC44MTUxIDE5LjkxMjIgMTkuMDEwNCAxOS43MTY5TDE5LjcxNzUgMTkuMDA5OEMxOS45MTI4IDE4LjgxNDYgMTkuOTEyOCAxOC40OTggMTkuNzE3NSAxOC4zMDI3TDE0LjQxNDIgMTIuOTk5NEwxOS43MTc1IDcuNjk2MDlaIiBmaWxsPSIjMTYxODIzIi8+Cjwvc3ZnPgo="
                        alt="close"
                        onClick={handleCloseFriend}
                    />
                )}
                {!openFriend && <div className={cx('count-char')}>{captionValue.length}/2000</div>}
            </div>
        </div>
    );
}

export default FormCaption;
