import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/Popper';
import SearchResults from './SearchResults';
import { useDebounce } from '~/hooks';
import search from '~/services/searchs';

const cx = classNames.bind(styles);

function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 800);
    const inpRef = useRef();

    useEffect(() => {
        if (!debouncedValue) {
            setSearchResults([]);
            return;
        }
        setLoading(true);
        const getResults = async () => {
            const res = await search(debouncedValue);
            setSearchResults(res);
            setLoading(false);
        };
        getResults();
    }, [debouncedValue]);

    const handleDelete = () => {
        setSearchValue('');
    };
    return (
        <Tippy
            visible={showResults && searchResults.length > 0}
            interactive
            placement="bottom-start"
            onClickOutside={() => {
                setShowResults(false);
            }}
            render={(attrs) => (
                <PopperWrapper>
                    <SearchResults attrs={attrs} searchResults={searchResults} />
                </PopperWrapper>
            )}
        >
            <div className={cx('wrapper')}>
                <input
                    ref={inpRef}
                    value={searchValue}
                    placeholder="Search videos and accounts..."
                    className={cx('input')}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResults(true)}
                />
                {!loading && !!debouncedValue && (
                    <button className={cx('clear')} onClick={handleDelete}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && (
                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
