import React, { Component } from 'react'
import SingleCard from './SingleCard'
import phones from '../data/phones'



class Products extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='text-center my-5'>My chine's product </h1>
                <div className="row g-5">
                    {phones.map(item=>(
                        <SingleCard a={item.title} photo={item.image} stock={item.stock}/>
                    ))}
                       
                </div>
            </div>
        )
    }
}

export default Products