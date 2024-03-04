import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import SingleProduct from '../components/SingleProduct';
import { ProductContext } from '../context/ProductContext';
import { LangContext } from '../context/LangContext';


// const info = 1;
// if (info == 5) {
//     console.log(5);
// }else if(info >5){
//     console.log(10);
// }else{
//     console.log(2);
// }

// info==5?console.log(5):info>5?console.log(10):console.log(2);


const Products = () => {
    const [productdata] = useContext(ProductContext);
    const [lang] = useContext(LangContext);
    return (
        <div>
                <h1 className='my-5 text-center'>{lang === "AZ"?"Mehsul Siyahisi":"Product List"}</h1>
            <Row className='g-5'>
                {productdata.map(item => (
                    <SingleProduct
                        key={item.id}
                        id={item.id}
                        title={lang==="AZ"?item.title:item.description}
                        desc={item.description}
                        photo={item.images}
                        alldata={item}
                    />
                ))}
            </Row>
        </div>
    )
}

export default Products