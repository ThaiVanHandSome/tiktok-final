import classNames from 'classnames/bind';
import styles from './PreviewAccount.module.scss';

import Image from '../Image';
import Button from '../Button';

const cx = classNames.bind(styles);

function PreviewAccount({ avatar, name, userName }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image src={avatar} alt="avatar" className={cx('avatar')} />
                <Button primary>
                    Follow
                </Button>
            </div>
            <div className={cx('info')}>
                <p className={cx('name')}>{name}</p>
                <p className={cx('user-name')}>{userName}</p>
            </div>
            <p className={cx('count')}>
                <strong className={cx('value')}>16M </strong>
                <span className={cx('type')}>followers</span>
                <strong className={cx('value')}>16M </strong>
                <span className={cx('type')}>likes</span>
            </p>
        </div>
    );
}

export default PreviewAccount;
