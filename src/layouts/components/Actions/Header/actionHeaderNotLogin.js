import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './ActionsHeader.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import HeadlessTippy from './HeadlessTippy';
import { authContext } from '~/Context/authContext';
import { boxContext } from '~/Context/boxContext';
import Auth from '~/components/Auth';

const cx = classNames.bind(styles);

function ActionHeaderNotLogin({ MENU_ITEMS = [] }) {
    var [box, setBox] = useContext(boxContext);
    const handleLogin = () => {
        // setOpenAuth(true);
        setBox({
            comp: <Auth />,
        });
    };
    return (
        <div className={cx('wrapper')}>
            <Button normal iconLeft={<FontAwesomeIcon icon={faPlus} />} onClick={handleLogin}>
                Upload
            </Button>
            <Button primary onClick={handleLogin}>
                Log in
            </Button>
            <HeadlessTippy MENU_ITEMS={MENU_ITEMS}>
                <div className={cx('contain-menu')}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default ActionHeaderNotLogin;
