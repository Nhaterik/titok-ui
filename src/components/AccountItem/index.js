import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Image  from "~/components/Image";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
const cx=classNames.bind(styles)
function AccountItem({data}) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image 
            Replace="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
            className={cx('avatar')}
            src={data.avatar}
            alt={data.full_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')} >
                    <span>{data.full_name}</span>
                   {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />} 
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    )
}
AccountItem.propTypes={
    data:PropTypes.object.isRequired
}
export default AccountItem