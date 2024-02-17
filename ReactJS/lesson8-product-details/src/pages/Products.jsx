import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import SingleProduct from '../components/SingleProduct';

const Products = () => {
    const [productdata, setProductdata] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setProductdata(res.data));
    }, [])
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
                        photo={item.image}
                    />
                ))}
            </Row>
        </div>
    )
}

export default Products