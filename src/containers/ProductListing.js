import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { setProducts } from '../redux/actions/ProdAction'
const ProductListing = () => {

    const products = useSelector((state) => state)
    // console.log(products, "products");

    const dispatch = useDispatch()
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            })

        // console.log(response.data, "response");
        // dispatch(response.data)
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    console.log("products", products);
    return (
        <div>
            <div className="ui grid container">
                <ProductComponent />
            </div>
        </div>
    )
}

export default ProductListing