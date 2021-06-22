import { useState , useEffect } from 'react'
const FullPageLoading=(props)=>{
    const [loading,setLoading]=useState('show')
    const [scroll,setScroll]=useState('stop-scroll')
    useEffect(()=>{
        setTimeout(function(){
            setLoading('hide')
            setScroll('')
        },3000)
    },[])
    return(
        <div className={`${scroll}`}>
            <div className={`content-center first-container full-page-loading ${loading}`}>
                <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
            {props.children}
        </div>
    )
}

export default FullPageLoading