import PropTypes from 'prop-types';
import get from '~/utils/request';

const search = async (debouncedValue, type = 'less') => {
    try {
        const res = await get('/users/search', {
            params: {
                q: debouncedValue,
                type: type,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

search.propTypes = {
    debouncedValue: PropTypes.string.isRequired,
    type: PropTypes.string,
};

export default search;
