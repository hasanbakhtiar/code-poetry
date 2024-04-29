import React from 'react'
import Hoc from './Hoc';

const ClickCompo = (props) => {
    const {counter,increment,title} = props;
  return (
    <div>
        <h1 style={{color:"red"}}>{title}-{counter}</h1>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Hoc(ClickCompo);