import { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Notification.module.scss';
import Wrapper from '../Wrapper';
import { boxContext } from '~/Context/boxContext';

const cx = classNames.bind(styles);

function Notification({ children, className }) {
    const [box, setBox] = useContext(boxContext);
    return (
        <div
            className={cx('wrapper')}
            onClick={
                box?.hideOnClickOutside
                    ? () =>
                          setBox({
                              comp: null,
                          })
                    : () => {}
            }
        >
            <Wrapper className={className}>{children}</Wrapper>
        </div>
    );
}

Notification.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Notification;
