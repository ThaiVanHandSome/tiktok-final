import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ src, name, nickname }) {
    return (
        <div className={cx('wrapper')}>
            <img src={src} alt="avatar" className={cx('avatar')} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{name}</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                </p>
                <p className={cx('account')}>{nickname}</p>
            </div>
        </div>
    );
}

export default AccountItem;
