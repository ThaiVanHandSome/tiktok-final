import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';

const cx = classNames.bind(styles);

function Checkbox({ value }) {
    return (
        <div className={cx('wrapper')}>
            <input className={cx('checkbox-inp')} type="checkbox" value={value} />
            <div className={cx('checkbox-icon')}>
                <svg
                    width="12"
                    height="9.600000000000001"
                    viewBox="0 0 10 8"
                    fill="none"
                    style={{ pointerEvents: 'none' }}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3.88632 5.95189L8.77465 0.915431C8.96697 0.717276 9.28352 0.712552 9.48168 0.904878L9.67738 1.09483C9.87553 1.28715 9.88026 1.6037 9.68793 1.80185L4.34296 7.3088C4.093 7.56633 3.67963 7.56633 3.42967 7.3088L0.948335 4.75227C0.756009 4.55411 0.760734 4.23757 0.958888 4.04524L1.15459 3.85529C1.35275 3.66297 1.66929 3.66769 1.86162 3.86584L3.88632 5.95189Z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>
        </div>
    );
}

export default Checkbox;
