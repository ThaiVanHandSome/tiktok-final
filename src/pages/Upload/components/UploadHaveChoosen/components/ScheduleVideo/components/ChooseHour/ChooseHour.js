import classNames from 'classnames/bind';
import styles from './ChooseHour.module.scss';
import { ClockIcon } from '~/Icons';

const cx = classNames.bind(styles);

function ChooseHour() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('value-container')}>
                <ClockIcon />
                <span className={cx('value')}>09:59</span>
            </span>
        </div>
    );
}
export default ChooseHour;
