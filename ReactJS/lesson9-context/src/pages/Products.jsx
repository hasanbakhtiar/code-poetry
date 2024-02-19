import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import SingleProduct from '../components/SingleProduct';
import { ProductContext } from '../context/ProductContext';

const Products = () => {
    const [productdata] = useContext(ProductContext);
    return (
        <div>
                <h1 className='my-5 text-center'>Product List</h1>
            <Row className='g-5'>
                {productdata.map(item => (
                    <SingleProduct
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        desc={item.description}
                        photo={item.images}
                    />
                ))}
            </Row>
        </div>
    )
}

export default Products