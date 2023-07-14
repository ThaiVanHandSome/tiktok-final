import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [searchValue, setSearchValue] = useState(value);
    useEffect(() => {
        const idTimeout = setTimeout(() => {
            setSearchValue(value);
        }, delay);
        return () => {
            clearTimeout(idTimeout);
        };
    }, [delay, value]);
    return searchValue;
}

export default useDebounce;
