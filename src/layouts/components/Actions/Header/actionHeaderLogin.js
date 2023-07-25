import classNames from 'classnames/bind';
import styles from './ActionsHeader.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import HeadlessTippy from './HeadlessTippy';
import { MessageIcon, InboxIcon } from '~/Icons';
import Image from '~/components/Image';
import { routes } from '~/config';

const cx = classNames.bind(styles);

function ActionHeaderLogin({ MENU_ITEMS = [] }) {
    return (
        <div className={cx('wrapper')}>
            <Button to={routes.upload} normal iconLeft={<FontAwesomeIcon icon={faPlus} />}>
                Upload
            </Button>
            <Tippy content="Message">
                <div className={cx('icon')}>
                    <MessageIcon />
                </div>
            </Tippy>
            <Tippy content="Inbox">
                <div className={cx('icon')}>
                    <InboxIcon />
                </div>
            </Tippy>
            <HeadlessTippy MENU_ITEMS={MENU_ITEMS}>
                <div className={cx('contain-menu')}>
                    <Image
                        src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/241464176_1242056446291086_5810272849317935739_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sPkl6lnK2PUAX-drfPl&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDBLAO9iixdpq67weDdt3HVYFavVaZVANCn8TCr4mWdzQ&oe=64AE988D"
                        alt="avatar"
                        className={cx('avatar')}
                    />
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default ActionHeaderLogin;
