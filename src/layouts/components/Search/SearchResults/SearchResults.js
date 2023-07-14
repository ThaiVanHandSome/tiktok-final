import classNames from 'classnames/bind';
import styles from './SearchResults.module.scss';

import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function SearchResults({ searchResults, attrs }) {
    return (
        <div className={cx('wrapper')} {...attrs}>
            <h4 className={cx('heading')}>Accounts</h4>
            <div className={cx('results')}>
                {searchResults.map((item, index) => (
                    <AccountItem key={item.id} src={item.avatar} name={item.full_name} nickname={item.nickname} />
                ))}
            </div>
        </div>
    );
}

export default SearchResults;
