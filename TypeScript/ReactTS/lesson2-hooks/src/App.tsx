import React, { useState } from 'react'
import photo from './img/nature.jpg';

const App:React.FC = () => {
  const [count,setCount] = useState<number>(0);
  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className='container mt-5'>
      <img src={photo} alt="" />
      {count}
      <button onClick={e=>setCount(10)}>change</button>
    </form>
  )
}

export default App