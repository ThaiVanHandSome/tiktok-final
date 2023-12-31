import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, icon, iconActive, to }) {
    return (
        <NavLink
            className={(nav) =>
                cx('menu-item', {
                    active: nav.isActive,
                })
            }
            to={to}
        >
            <div className={cx('icon')}>{icon}</div>
            <div className={cx('icon-active')}>{iconActive}</div>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    iconActive: PropTypes.node,
    to: PropTypes.string.isRequired,
};

export default MenuItem;
