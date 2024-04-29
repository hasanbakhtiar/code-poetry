import React from 'react'
import { useState } from 'react'

const GenCompo = (OriginalCompo) => {
    const newCompo = (props) => {
        const [count, setCount] = useState(0);
        return <OriginalCompo
        {...props}
        count={count}
        incCount ={()=>(setCount((count)=>count+1))}
        />
    }
    return newCompo;
}

export default GenCompo