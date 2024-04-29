import React from 'react'
import GenCompo from './GenCompo'

const CompoTwo = (props) => {
    const {count,incCount,name} = props;

  return (
    <>
    <div>{count}</div>
    <button onClick={incCount}>test</button>
    <h1>{name}</h1>
    </>
  )
}

export default GenCompo(CompoTwo)