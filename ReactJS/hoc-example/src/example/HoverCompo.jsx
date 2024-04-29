import React from 'react'
import { useState } from 'react';
import Hoc from './Hoc';

const HoverCompo = (props) => {
    const {counter,increment,title} = props;
    return (
      <div>
          <h1 style={{color:"green"}}>{title}-{counter}</h1>
          <button onMouseEnter={increment}>+</button>
      </div>
  )
}

export default Hoc(HoverCompo);