import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Switch.module.scss';

const cx = classNames.bind(styles);

function Switch({ state, setState }) {
    return (
        <div className={cx('wrapper')}>
            <input className={cx('input')} type="checkbox" onClick={() => setState((prev) => !prev)} />
            <div className={cx('circle')}></div>
        </div>
    );
}

Switch.propTypes = {
    state: PropTypes.bool.isRequired,
    setState: PropTypes.func.isRequired,
};

export default Switch;
