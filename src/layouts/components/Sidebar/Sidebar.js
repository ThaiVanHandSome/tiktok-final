import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import Menu from './components/Menu';

import MenuItem from './components/Menu/MenuItem';
import AccountsLogin, { AccountItemLogin } from '~/components/AccountsLogin';
import {
    HomeIcon,
    UserGroupIcon,
    ExploreIcon,
    LiveIcon,
    HomeIconActive,
    UserGroupIconActive,
    ExploreIconActive,
    LiveIconActive,
} from '~/Icons';
import { routes } from '~/config';
import Button from '~/components/Button';
import { loginContext } from '~/Context/loginContext';
import { authContext } from '~/Context/authContext';

const cx = classNames.bind(styles);

function Sidebar() {
    var [isLogin, setLogin] = useContext(loginContext);
    var [openAuth, setOpenAuth] = useContext(authContext);
    return (
        <div className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" icon={<HomeIcon />} iconActive={<HomeIconActive />} to={routes.home} />
                <MenuItem
                    title="Following"
                    icon={<UserGroupIcon />}
                    iconActive={<UserGroupIconActive />}
                    to={routes.following}
                />
                <MenuItem
                    title="Explore"
                    icon={<ExploreIcon />}
                    iconActive={<ExploreIconActive />}
                    to={routes.explore}
                />
                <MenuItem title="LIVE" icon={<LiveIcon />} iconActive={<LiveIconActive />} to={routes.live} />
            </Menu>
            {isLogin && (
                <AccountsLogin heading="Suggested Accounts">
                    <AccountItemLogin
                        avatar="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/241464176_1242056446291086_5810272849317935739_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sPkl6lnK2PUAX9Z_Qxe&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDXq1sk8FuH_dkb0TNz-pWqe6H3K1HwAHq7OcR6z4tZKw&oe=64AE988D"
                        name="Nguyễn Thái Văn"
                        userName="thaivan01"
                    />
                    <AccountItemLogin
                        avatar="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/241464176_1242056446291086_5810272849317935739_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sPkl6lnK2PUAX9Z_Qxe&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDXq1sk8FuH_dkb0TNz-pWqe6H3K1HwAHq7OcR6z4tZKw&oe=64AE988D"
                        name="Nguyễn Thái Văn"
                        userName="thaivan01"
                    />
                    <AccountItemLogin
                        avatar="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/241464176_1242056446291086_5810272849317935739_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sPkl6lnK2PUAX9Z_Qxe&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDXq1sk8FuH_dkb0TNz-pWqe6H3K1HwAHq7OcR6z4tZKw&oe=64AE988D"
                        name="Nguyễn Thái Văn"
                        userName="thaivan01"
                    />
                    <AccountItemLogin
                        avatar="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/241464176_1242056446291086_5810272849317935739_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sPkl6lnK2PUAX9Z_Qxe&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDXq1sk8FuH_dkb0TNz-pWqe6H3K1HwAHq7OcR6z4tZKw&oe=64AE988D"
                        name="Nguyễn Thái Văn"
                        userName="thaivan01"
                    />
                </AccountsLogin>
            )}
            {isLogin && (
                <AccountsLogin heading="Following Accounts">
                    <AccountItemLogin
                        avatar="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/241464176_1242056446291086_5810272849317935739_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sPkl6lnK2PUAX9Z_Qxe&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDXq1sk8FuH_dkb0TNz-pWqe6H3K1HwAHq7OcR6z4tZKw&oe=64AE988D"
                        name="Nguyễn Thái Văn"
                        userName="thaivan01"
                    />
                    <AccountItemLogin
                        avatar="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/241464176_1242056446291086_5810272849317935739_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sPkl6lnK2PUAX9Z_Qxe&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDXq1sk8FuH_dkb0TNz-pWqe6H3K1HwAHq7OcR6z4tZKw&oe=64AE988D"
                        name="Nguyễn Thái Văn"
                        userName="thaivan01"
                    />
                    <AccountItemLogin
                        avatar="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/241464176_1242056446291086_5810272849317935739_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sPkl6lnK2PUAX9Z_Qxe&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDXq1sk8FuH_dkb0TNz-pWqe6H3K1HwAHq7OcR6z4tZKw&oe=64AE988D"
                        name="Nguyễn Thái Văn"
                        userName="thaivan01"
                    />
                    <AccountItemLogin
                        avatar="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/241464176_1242056446291086_5810272849317935739_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sPkl6lnK2PUAX9Z_Qxe&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDXq1sk8FuH_dkb0TNz-pWqe6H3K1HwAHq7OcR6z4tZKw&oe=64AE988D"
                        name="Nguyễn Thái Văn"
                        userName="thaivan01"
                    />
                </AccountsLogin>
            )}
            {!isLogin && (
                <div className={cx('container')}>
                    <div className={cx('container-btn')}>
                        <p className={cx('content')}>Log in to follow creators, like videos, and view comments.</p>
                        <Button outline className={cx('btn-log-in')} onClick={() => setOpenAuth(true)}>
                            Login
                        </Button>
                    </div>
                </div>
            )}

            <div className={cx('container')}>
                <div className={cx('footer')}>
                    <div className={cx('container-link')}>
                        <a href="" className={cx('link-item')}>
                            About
                        </a>
                        <a href="" className={cx('link-item')}>
                            Newsroom
                        </a>
                        <a href="" className={cx('link-item')}>
                            Contact
                        </a>
                        <a href="" className={cx('link-item')}>
                            Careers
                        </a>
                        <a href="" className={cx('link-item')}>
                            ByteDance
                        </a>
                    </div>
                    <div className={cx('container-link')}>
                        <a href="" className={cx('link-item')}>
                            TikTok for Good
                        </a>
                        <a href="" className={cx('link-item')}>
                            Advertise
                        </a>
                        <a href="" className={cx('link-item')}>
                            Developers
                        </a>
                        <a href="" className={cx('link-item')}>
                            Transparency
                        </a>
                        <a href="" className={cx('link-item')}>
                            TikTok Rewards
                        </a>
                        <a href="" className={cx('link-item')}>
                            TikTok Embeds
                        </a>
                    </div>
                    <div className={cx('container-link')}>
                        <a href="" className={cx('link-item')}>
                            Help
                        </a>
                        <a href="" className={cx('link-item')}>
                            Safety
                        </a>
                        <a href="" className={cx('link-item')}>
                            Terms
                        </a>
                        <a href="" className={cx('link-item')}>
                            Privacy
                        </a>
                        <a href="" className={cx('link-item')}>
                            Creator Portal
                        </a>
                        <a href="" className={cx('link-item')}>
                            Community Guidelines
                        </a>
                    </div>
                    <p className={cx('footer-content')}>© 2023 TikTok</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
