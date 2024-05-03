import Tippy from "@tippyjs/react/headless"
import {Wrapper as PopperWrapper} from '~/components/Popper'
import styles from './Menu.module.scss'
import classNames from "classnames/bind"
import MenuItem from './Menuitem'
import Header from './Header'
import { useState } from "react"
const cx=classNames.bind(styles)
function Menu({children,items=[],onChange}) {
    const [history,setHistory]=useState([{data:items}])

    const current =history[history.length-1]
    const renderItems= ()=>{
        return current.data.map((item,idx)=>{
            const isParent=!!item.children

             return <MenuItem 
             key={idx} 
             data={item}
             onClick={()=>{
                if(isParent) {
                    setHistory(pre=> ([...pre,item.children]))
                }
                else onChange(item)
             }
            }
             />
    })
    }

    return (
        <Tippy 
        interactive
        offset={[6,8]}
        delay={[0,600]}
        placement='bottom-end'
         render={(attrs) => (
           <div className={cx('menu-list')} tabIndex='-1' {...attrs}>
             <PopperWrapper className={cx('menu-popper')}>
                   { history.length > 1 && < Header onBack={()=> setHistory(pre=> pre.slice(0,pre.length -1)) } title='language'/> }
                   {renderItems()}
            </PopperWrapper>
           </div>

         )}
         onHide={()=>setHistory((pre)=>pre.slice(0,1))}
        >
      {children}    
        </Tippy>
    )
}
export default Menu