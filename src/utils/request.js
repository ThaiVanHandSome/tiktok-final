import PropTypes from 'prop-types';
import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api',
    timeout: 1000,
});

const get = async (path, options) => {
    const res = await request.get(path, options);
    return res.data;
};

get.propTypes = {
    path: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
};

export default get;
