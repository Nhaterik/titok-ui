import { useState,useEffect } from "react";
function Debound(value,delay) {
    const [searchValue,setValue]=useState(value)
    useEffect( ()=> {
        const idhaha = setTimeout(()=>setValue(value),delay)
        return ()=>clearTimeout(idhaha)
    }
    ,[value] )
    return searchValue
}
export default Debound