import { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '~/config';
import FooterData from './FooterData';
import { ArrowBottomIcon } from '../../IconUpload';
const cx = classNames.bind(styles);

function Footer() {
    const [selection, setSelection] = useState('English');
    const selectionRef = useRef();

    const handleChangeSelection = () => {
        setSelection(selectionRef.current.value);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer-content')}>
                <div className={cx('box-logo')}>
                    <Link to={routes.home} className={cx('logo')}>
                        <img
                            src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg"
                            alt="Logo"
                        />
                        <img
                            className={cx('logo-text')}
                            src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg"
                            alt="Logo"
                        />
                    </Link>
                </div>
                {FooterData.map((item, index) => (
                    <div key={index} className={cx('box')}>
                        <p className={cx('box-heading')}>{item.heading}</p>
                        <div className={cx('box-list')}>
                            {item.children.map((child, index) => (
                                <span key={index} className={cx('box-item')}>
                                    <a className={cx('box-item-link')} href={child.href}>
                                        {child.content}
                                    </a>
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className={cx('footer-bottom')}>
                <div className={cx('selection')}>
                    <p className={cx('selection-text')}>{selection}</p>
                    <div className={cx('selection-icon')}>
                        <ArrowBottomIcon />
                    </div>
                    <select ref={selectionRef} className={cx('selection-form')} onChange={handleChangeSelection}>
                        <option className={cx('selection-option')} value="English">
                            English
                        </option>
                        <option className={cx('selection-option')} value="Vietnamese">
                            Vietnamese
                        </option>
                    </select>
                </div>
                <span className={cx('footer-bottom-text')}>© 2023 TikTok</span>
            </div>
        </div>
    );
}

export default Footer;
