import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import DefaultFollowing from './DefaultFollowing';
import HaveFollowing from './HaveFollowing';

const cx = classNames.bind(styles);

function Following() {
    return (
        <div className={cx('wrapper')}>
            {/* <DefaultFollowing /> */}
            <HaveFollowing />
        </div>
    );
}

export default Following;
