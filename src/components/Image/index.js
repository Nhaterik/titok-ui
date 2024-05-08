import { useState,forwardRef } from "react";
import classNames from "classnames";
import styles from './Image.module.scss'
import images from "~/assets/images";
function Image({src,alt,className,Replace=images.noImage,...prop},ref) {
    const [fallBack,setFallBack]=useState('')
    const handleError=() =>{
        setFallBack(Replace)
    }
    // cx('handleOutImage','?')
    return <img  className={classNames(styles.handleOutImage,className)} ref={ref} alt={alt} src={fallBack ||  src} {...prop}  onError={handleError}/>
}   
export default forwardRef(Image)