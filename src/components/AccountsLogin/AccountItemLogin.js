import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './AccountsLogin.module.scss';

import Image from '~/components/Image/';
import { Wrapper as PopperWrapper } from '~/Popper';
import PreviewAccount from '../PreviewAccount';

const cx = classNames.bind(styles);

function AccountItemLogin({ avatar, name, userName }) {
    return (
        <Tippy
            interactive
            placement="bottom-start"
            offset={[0, -2]}
            delay={[800, 600]}
            render={(attrs) => (
                <PopperWrapper tabIndex={-1} {...attrs}>
                    <PreviewAccount avatar={avatar} name={name} userName={userName} />
                </PopperWrapper>
            )}
        >
            <div className={cx('account-item')}>
                <Image src={avatar} alt="avatar" className={cx('avatar')} />
                <div className={cx('info')}>
                    <p className={cx('name')}>{name}</p>
                    <p className={cx('user-name')}>{userName}</p>
                </div>
            </div>
        </Tippy>
    );
}

export default AccountItemLogin;