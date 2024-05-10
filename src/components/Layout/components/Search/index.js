import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadelessTip from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDeBound } from '~/hooks';
const cx = classNames.bind(styles);
function Search() {
    const inputRef = useRef();

    var [loading,setLoading]=useState(false)
    var [searchValue, setSearchValue] = useState('');
    var [showResult, setShowResult] = useState(true);
    var [searchResult, setSearchResult] = useState([]);
    var debounced=useDeBound(searchValue,500)
    useEffect(() => {
        if(!debounced.trim()) {
            setShowResult([])
            return;
        }
        setLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {setSearchResult(res.data)
                            setLoading(false)   
                           }
                  )
            .catch(()=>setLoading(false))
    }, [debounced]);
    return (
        <HeadelessTip
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((data_out) => (
                            <AccountItem key={data_out.id} data={data_out} />
                        ))}
                        Results
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={() => setShowResult(false)}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={(e) => {
                            setSearchValue('');
                            inputRef.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
         {    loading &&        <FontAwesomeIcon icon={faSpinner}  className={cx('loading')}/>}
              

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadelessTip>
    );
}

export default Search;
