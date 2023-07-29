import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Auth.module.scss';

import Container from './Container';
import { DATA_LOGIN, DATA_SIGNUP } from './data';

const cx = classNames.bind(styles);

function Auth() {
    const [login, setLogin] = useState(true);
    let DATA = DATA_LOGIN;
    if (!login) DATA = DATA_SIGNUP;
    const handleChange = () => {
        setLogin((prev) => !prev);
    };
    return (
        <div className={cx('wrapper')}>
            <Container DATA={DATA} handleChange={handleChange} login={login} />
        </div>
    );
}

export default Auth;
