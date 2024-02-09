import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductFilter = () => {
    const [data,setData]=  useState([])
    
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setData(res.data))
    },[])
    const filteredData = data.filter(p=>p.category === 'jewelery');
    
  return (
    <div>
        {filteredData.map(item=><li key={item.id}>{item.title}</li>)}
    </div>
  )
}

export default ProductFilter