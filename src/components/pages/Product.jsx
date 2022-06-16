import React from 'react'
import {useNavigate} from 'react-router-dom'
const Product = ({product, setVisible, setClicked}) => {
    const route = useNavigate()
    return (
        <div className='product'>
            <button onClick={() => {route(`/product/${product.id}`, {state: {product}})}}>Watch</button>
            <div>{product.title}</div>
            <div><img width = '200px' src={product.image} alt=""/></div>
            <button onClick={() => {setVisible(); setClicked(product.id)}}>Delete product</button>
        </div>
    );
};

export default Product;