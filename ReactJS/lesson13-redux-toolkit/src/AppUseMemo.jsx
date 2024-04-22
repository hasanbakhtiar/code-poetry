import React from 'react'
import { useState } from 'react'
import { users } from './data/users';
import { useMemo } from 'react';
const AppUseMemo = () => {
    const [count,setCount] = useState(0);
    const [email,setEmail] = useState('');

    
    const userCount = ()=>{
        console.log('user count is running...');
        return (users.map(item=><li onClick={()=>{setEmail(item.email)
        }} key={item.id}>{item.name}</li>))
    }

    const userRow = useMemo(()=>userCount(),[email])
    
    
  return (
    <div className='container'>
        <h4>{email}</h4>
        <ul>
            {userRow}
        </ul>
        <p>{count}</p>
        <button onClick={()=>{
            setCount(count+1);
            console.log('counter is running...');
        }}>increment</button>
    </div>
  )
}

export default AppUseMemo