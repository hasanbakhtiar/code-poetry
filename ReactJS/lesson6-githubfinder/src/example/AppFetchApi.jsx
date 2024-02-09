import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AppFetchApi = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then(res=>setData(res.data))
    
    // const fetchData = async () => {
    //   const fetchApi = await fetch('https://fakestoreapi.com/products');
    //   const comingData = await fetchApi.json();
    //   setData(comingData);
    // }
    // fetchData();

  }, [])

  return (
    <div className='container'>
      {data.map(i => <li>{i.title}</li>)}
    </div>
  )
}

export default AppFetchApi