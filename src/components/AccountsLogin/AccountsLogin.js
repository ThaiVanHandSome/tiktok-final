import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountsLogin.module.scss';

const cx = classNames.bind(styles);

function AccountsLogin({ heading, children }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('heading')}>{heading}</p>
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

AccountsLogin.propTypes = {
    children: PropTypes.node.isRequired,
    heading: PropTypes.string.isRequired,
};

export default AccountsLogin;
