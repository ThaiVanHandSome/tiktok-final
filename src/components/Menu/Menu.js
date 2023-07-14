import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import MenuItem from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Menu({ ITEMS = [], handleClick, handleBack }) {
    return (
        <div className={cx('wrapper')}>
            {!!ITEMS?.title && (
                <div className={cx('header')}>
                    <button className={cx('btn-back')} onClick={handleBack}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <span className={cx('label')}>{ITEMS.title}</span>
                </div>
            )}
            {ITEMS.data.map((item, index) => (
                <MenuItem
                    key={index}
                    content={item.content}
                    icon={item.icon}
                    onClick={() => handleClick(item)}
                    borderTop={item.borderTop}
                />
            ))}
        </div>
    );
}

Menu.propTypes = {
    ITEMS: PropTypes.array.isRequired,
    handleClick: PropTypes.func,
    handleBack: PropTypes.func.isRequired,
};

export default Menu;
