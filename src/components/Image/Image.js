import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import images from '~/asset/images';

const cx = classNames.bind(styles);

function Image({ src, tempImage: avatar = images.defaultAvatar, alt, className }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    const [_avatar, setAvatar] = useState(src);

    const handleError = () => {
        setAvatar(avatar);
    };
    if (!_avatar) {
        handleError();
    }
    return <img src={_avatar} alt={alt} className={classes} onError={handleError} />;
}

export default Image;
