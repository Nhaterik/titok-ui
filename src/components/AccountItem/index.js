import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
const cx=classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')  } src="https://cdnphoto.dantri.com.vn/EJ0ix1A_HyclRK3lMXbQw1Tq-rA=/thumb_w/960/2019/12/20/diem-danh-12-hot-boy-noi-bat-nhat-1-nam-quadocx-1576851098446.jpeg" alt="Dung"/>
            <div className={cx('info')}>
                <h4 className={cx('name')} >
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    )
}
export default AccountItem