import React from 'react'
import GenCompo from './GenCompo'

const CompoOne = (props) => {
    const {count,incCount} = props;

  return (
    <>
    <div>{count}</div>
    <button onClick={incCount}>test</button>
    </>
  )
}

export default GenCompo(CompoOne);