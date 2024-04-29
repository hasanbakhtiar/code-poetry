import React from 'react'
import { useState } from 'react';

const Hoc = (OrginalComponent) => {
    
    const newCompo = (props)=>{
        const [count,setCount] = useState(0);
            return <OrginalComponent
            {...props}
            counter ={count}
            increment={()=>{setCount(p=>(p+1))}}
            />
    }
    return newCompo;
}

export default Hoc