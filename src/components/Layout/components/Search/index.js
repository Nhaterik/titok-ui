import { useEffect, useState ,useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import HeadelessTip from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon} from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx=classNames.bind(styles)
function Search(){
    const inputRef=useRef()

     const [searchValue,setSearchValue]=useState('')
     const [showResult,setShowResult]=useState(true)
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
<HeadelessTip
interactive
 visible={showResult && searchResult.length > 0}
 render={(attrs) => (
    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
        <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            Results
        </PopperWrapper>    
    </div>
)}
onClickOutside={()=>setShowResult(false)}
>
<div className={cx('search')}>
    <input
        ref={inputRef}
    value={searchValue}x
     placeholder="Search accounts and videos"
      spellCheck={false} 
      onChange={e=>{ setSearchValue(e.target.value)}}
      onFocus={()=>setShowResult(true)}
      />
      {!!searchValue &&
      
    <button className={cx('clear')} onClick={(e)=>{
        setSearchValue('')
        inputRef.current.focus()
    }}>
        <FontAwesomeIcon icon={faCircleXmark} />
    </button>
      }
    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

    <button className={cx('search-btn')}>
     <SearchIcon/>
    </button>
</div>
</HeadelessTip>
    )
}

export default Search