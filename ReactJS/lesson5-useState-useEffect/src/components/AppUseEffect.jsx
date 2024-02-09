import { useEffect, useState } from "react"


const AppUseEffect = () => {

    const [state, setState] = useState('current text');
    const [stateOne, setStateOne] = useState('current text one');
    useEffect(() => {
        // setState('new text')
        console.log('running');
    },[stateOne,state])
    return (
        <>
            <h1 onClick={()=>setState('new data')}>{state}</h1>
            <h1 onClick={()=>setStateOne('new data one')}>{stateOne}</h1>

        </>

    )
}

export default AppUseEffect