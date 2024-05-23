import PropTypes from 'prop-types'
import classNames  from "classnames/bind";
import styles from './Button.module.scss'
import { Link } from "react-router-dom";
const cx=classNames.bind(styles)
function Button({
    to,
    href,
    className,
    primary=false,
    outline=false,
    small=false,
    large=false,
    text=false,
    rounded=false,
    disabled=false,
    children,
    onClick,
    leftIcon=false,
    rightIcon=false,
    ...passProps
}) {
    let Comp='button'
    const props={
        onClick,
        ...passProps,
    }
    if(to) {
        props.to=to
        Comp=Link
    } else if(href) {
        props.href=href
        Comp='a'
    }
     if(disabled) {
        Object.keys(props).forEach(key=> {
            if(key.startsWith('on') )
            {
                delete props[key]
            }
        })
     }
    const classes=cx('wrapper',{
        primary,
        className,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        [className]:className
        })
    return (
        <Comp className={classes}  {...props} >
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes={
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    rounded: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
}
export default Button
