import { Link } from 'react-router-dom';
import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import images from '~/asset/images';
import Search from '../Search';
import {
    LanguageIcon,
    QuestionIcon,
    KeyboardIcon,
    UserIcon,
    SaveIcon,
    CoinIcon,
    SettingIcon,
    LogoutIcon,
} from '~/Icons';
import { ActionHeaderLogin, ActionHeaderNotLogin } from '../Actions/Header';
import { routes } from '~/config';
import { loginContext } from '~/Context/loginContext';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        content: 'English',
        icon: <LanguageIcon />,
        children: {
            title: 'Language',
            data: [
                {
                    content: 'Vietnamese',
                    type: 'language',
                    icon: null,
                },
                {
                    content: 'English',
                    type: 'language',
                    icon: null,
                },
            ],
        },
    },
    {
        content: 'Feedback and help',
        icon: <QuestionIcon />,
    },
    {
        content: 'Keyboard shortcut',
        icon: <KeyboardIcon />,
    },
];

const MENU_ITEMS_LOGIN = [
    {
        content: 'View profile',
        icon: <UserIcon />,
    },
    {
        content: 'Favourites',
        icon: <SaveIcon />,
    },
    {
        content: 'Get Coins',
        icon: <CoinIcon />,
    },
    {
        content: 'Settings',
        icon: <SettingIcon />,
    },
    ...MENU_ITEMS,
    {
        content: 'Logout',
        icon: <LogoutIcon />,
        borderTop: true,
    },
];

function Header() {
    var [isLogin, setLogin] = useContext(loginContext);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Logo" />
                </Link>
                <div className={cx('search')}>
                    <Search />
                </div>
                <div className={cx('action')}>
                    {isLogin ? (
                        <ActionHeaderLogin MENU_ITEMS={MENU_ITEMS_LOGIN} />
                    ) : (
                        <ActionHeaderNotLogin MENU_ITEMS={MENU_ITEMS} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
