import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
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
import routesConfig from '~/config/routes'
import {Link} from 'react-router-dom'
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, UploadIcon ,InboxIcon} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/Layout/components/Search';
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
  
    const currentUser = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home}  className={cx('logo-link')}><img src={images.logo} alt="Tiktok" /></Link>
               <Search/>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                        <Tippy delay={[0, 50]} content="Upload video" placement='bottom'>
                            <button  className={cx('action-btn')}>
                                <UploadIcon/>
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                        
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
