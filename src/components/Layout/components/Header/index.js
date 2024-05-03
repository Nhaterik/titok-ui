import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import HeadelessTip from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faSignOut,
    faEllipsisVertical,
    faEarthEurope,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faGear,
    faCoins,
} from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthEurope} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
const userMenu=[
  {
    icon:<FontAwesomeIcon icon={faUser}/>,
    title:'View Profile',
    to:'/@Nhat'
  },
  {
    icon:<FontAwesomeIcon icon={faCoins}/>,
    title:'Get Coins',
    to:'/coin'
  },
  {
    icon:<FontAwesomeIcon icon={faGear}/>,
    title:'Setting'
  },
  ...MENU_ITEMS,
  {
    icon:<FontAwesomeIcon icon={faSignOut}/>,
    title:'Out',
    to:'/LOGOUT',
    seperator:true
  }
]
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    const currentUser = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <HeadelessTip
                    interactive
                    //  visible={searchResult.length > 0}
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
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadelessTip>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <Tippy trigger='click' content="Upload video" placement='bottom'>
                            <button  className={cx('action-btn')}>
                                <UploadIcon/>
                            </button>
                        </Tippy>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={(menuInfo) => console.log(menuInfo)}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://i.scdn.co/image/ab676161000051747afc6ecdb9102abd1e10d338thisiswrong"
                                alt="Pham Van Nhat"
                                Replace="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
