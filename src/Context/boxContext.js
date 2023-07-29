import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const boxContext = createContext();

function BoxProvider({ children }) {
    const [box, setBox] = useState({
        comp: null,
        hideOnClickOutside: false,
    });
    return <boxContext.Provider value={[box, setBox]}>{children}</boxContext.Provider>;
}

BoxProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { boxContext };
export default BoxProvider;
