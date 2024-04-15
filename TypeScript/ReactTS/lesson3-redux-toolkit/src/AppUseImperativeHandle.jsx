import React from 'react'
import { useImperativeHandle } from 'react'
import { useRef } from 'react'
import { forwardRef } from 'react'


const Myinput =forwardRef((props,ref)=>{
  useImperativeHandle(ref,()=>({
    hi:sayHi
  }))
  
  const sayHi = ()=>{
      alert('Hello')
  }
  return(
      <input />
  )
})



const AppUseImperativeHandle = () => {
  const inputRef = useRef();
  const handleClick = ()=>{
    inputRef.current.hi();
  }
  
  return (
    <div className='container mt-4'>
        <Myinput ref={inputRef}/><button onClick={handleClick}>add</button>
    </div>
  )
}

export default AppUseImperativeHandle