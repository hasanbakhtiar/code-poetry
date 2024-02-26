import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
    const [productdata, setProductdata] = useState([]);
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => setProductdata(res.data.products));
    }, [])


    return <ProductContext.Provider value={[productdata, setProductdata]}>
        {children}
    </ProductContext.Provider>
}