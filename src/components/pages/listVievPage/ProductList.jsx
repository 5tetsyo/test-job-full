import React, { useState, useEffect } from 'react';
import Product from '../Product';
import ModalDelete from '../../modal/ModalAdd';
import ModalAdd from '../../modal/ModalAdd';

import { addProduct, deleteProduct } from '../../productChange';
import Inputs from '../../Inputs';
import { getProducts } from '../../async/getProduct';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Sort from '../../sort/Sort';

const ProductList = () => {
    const dispatch = useDispatch()
    const value = useSelector(state => state)
    const [input, setInput] = useState(
        {title: "",
        price: "",
        description: "",
        image: "",
        category: ""})
    useEffect(() => {
        getProducts(dispatch)
    }, []);
    return (
        <div>
            <Sort dispatch={dispatch} value={value}/>
            <button onClick={() => dispatch({type: 'ADD_MODAL_OPEN'})}>Add product</button>
            <ModalAdd visible={value.add} setVisible={() => dispatch({type: 'ADD_MODAL_CLOSE'})}>
                <Inputs setInput={setInput} input={input}></Inputs>
                <button 
                    onClick={() => {addProduct(dispatch, input); 
                        setInput({title: "",
                            price: "",
                            description: "",
                            image: "",
                            category: ""});
                        dispatch({type: 'ADD_MODAL_CLOSE'})}}>Add</button>
                <button onClick={() => {dispatch({type: 'ADD_MODAL_CLOSE'})}}>Cancel</button>
            </ModalAdd>
             {value.products==null ? <p>Loading</p> : value.products.map(el => 
             <Product 
                key={el.id} 
                setClicked={(id) => dispatch({type: 'SET_CLICKED', payload: id})}
                product={el} 
                setVisible={() => dispatch({type: 'DELETE_MODAL_OPEN'})}>
            </Product>)}
            <ModalDelete visible={value.delete} setVisible={()=>dispatch({type: 'DELETE_MODAL_CLOSE'})}>
                Do you want to delete this position?
                <button onClick={() => {dispatch({type: 'DELETE_MODAL_CLOSE'}); deleteProduct(dispatch, value.id)}}>Yes</button>
                <button onClick={() => {dispatch({type: 'DELETE_MODAL_CLOSE'})}}>No</button>
            </ModalDelete>
        </div>
    );
};

export default ProductList;