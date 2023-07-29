import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const learnMoreContext = createContext();

const LearnMoreProvider = ({ children }) => {
    const [learnMore, setLearnMore] = useState(false);
    return <learnMoreContext.Provider value={[learnMore, setLearnMore]}>{children}</learnMoreContext.Provider>;
};

LearnMoreProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { learnMoreContext };
export default LearnMoreProvider;
