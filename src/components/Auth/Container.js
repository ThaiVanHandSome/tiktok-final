import PropTypes from 'prop-types';
import { useState, useContext, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Auth.module.scss';
import { CloseIcon, ArrowBottomIcon } from '~/Icons';
import { authContext } from '~/Context/authContext';

const cx = classNames.bind(styles);

function Container({ DATA, handleChange, login }) {
    var [openAuth, setOpenAuth] = useContext(authContext);
    const [openMenu, setOpenMenu] = useState(login);

    useEffect(() => {
        setOpenMenu(login);
    }, [login]);

    const handleChangeOpenMenu = () => {
        setOpenMenu(true);
    };
    return (
        <div className={cx('container')}>
            <button className={cx('close')} onClick={() => setOpenAuth(false)}>
                <CloseIcon />
            </button>
            <h1 className={cx('heading')}>{DATA.heading}</h1>
            <div
                className={cx('container-list-item', {
                    'sign-up': !login && !openMenu,
                })}
            >
                <div className={cx('list-item')}>
                    {DATA.menu.map((item, index) => (
                        <div key={index} className={cx('item')}>
                            <div className={cx('icon')}>{item.icon}</div>
                            <span className={cx('content')}>{item.content}</span>
                        </div>
                    ))}
                </div>
                {!login && !openMenu && (
                    <div className={cx('arrow-icon')} onClick={handleChangeOpenMenu}>
                        <ArrowBottomIcon />
                    </div>
                )}
            </div>
            <p className={cx('text')}>
                By continuing, you agree to TikTok's <a className={cx('link')}>Terms of Service</a> and confirm that you
                have read TikTok's <a className={cx('link')}>Privacy Policy</a>.
            </p>
            <div className={cx('footer')}>
                <span className={cx('question')}>{DATA.question}</span>
                <button className={cx('btn-convert')} onClick={handleChange}>
                    {DATA.btnText}
                </button>
            </div>
        </div>
    );
}

Container.propTypes = {
    DATA: PropTypes.array.isRequired,
};

export default Container;
