import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    to,
    href,
    primary,
    outline,
    normal,
    rounded,
    small,
    medium,
    large,
    iconLeft,
    iconRight,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        to,
        href,
        ...passProps,
    };

    if (href) {
        Comp = 'a';
    } else if (to) {
        Comp = Link;
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        normal,
        rounded,
        small,
        medium,
        large,
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}>
            {!!iconLeft && <div className={cx('icon')}>{iconLeft}</div>}
            <div className={cx('content')}>{children}</div>
            {!!iconRight && <div className={cx('icon')}>{iconRight}</div>}
        </Comp>
    );
}

export default Button;
