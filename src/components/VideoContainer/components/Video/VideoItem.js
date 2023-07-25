import PropTypes from 'prop-types';
import { memo } from 'react';

function VideoItem({ className, src, controls }) {
    return (
        <video className={className} controls={controls}>
            <source src={src} type="video/mp4" />
        </video>
    );
}

VideoItem.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
};

export default memo(VideoItem);
