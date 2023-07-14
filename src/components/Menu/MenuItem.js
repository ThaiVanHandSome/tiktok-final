import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ content, icon, onClick, borderTop }) {
    const classes = cx('menu-item', {
        borderTop,
    });

    return (
        <div className={classes} onClick={onClick}>
            <div className={cx('item-icon')}>{!!icon && icon}</div>
            <span className={cx('content')}>{content}</span>
        </div>
    );
}

MenuItem.propTypes = {
    content: PropTypes.string.isRequired,
    icon: PropTypes.node,
};

export default MenuItem;
