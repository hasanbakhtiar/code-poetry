import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Users from './components/Users'
import axios from 'axios'

const App = () => {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    axios.get('https://api.github.com/search/users?q=shaiq')
    .then(res=>setUsers(res.data.items))
  },[])
    
  
  return (
    <div>
      <Header />
      <Search />
      <Users senddata={users}/>
    </div>
  )
}

export default App