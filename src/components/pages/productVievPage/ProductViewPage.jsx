import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import Inputs from '../../Inputs';
import ModalEdit from '../../modal/ModalEdit';
import { editProduct } from '../../productChange';

const ProductViewPage = () => {
    const dispatch = useDispatch()
    const value = useSelector(state => state)
    const location = useLocation()
    const product = location.state.product;
    const [edited, setEdited] = useState({...product})
    return (
        <div>
            <div>{product.title}</div>
            <div><img width = '500px' src={product.image} alt=""/></div>
            <div>Price: {product.price}</div>
            <div>Description: {product.description}</div>
            <button onClick={() => {dispatch({type: 'EDIT_MODAL_OPEN'})}}>Edit product</button>
            <ModalEdit setVisible={() => dispatch({type: 'EDIT_MODAL_CLOSE'})} visible={value.edit}>
                <Inputs setInput={setEdited} input={edited}></Inputs>
                <button onClick={()=> {editProduct(dispatch, product.id, edited);console.log(edited);dispatch({type: 'EDIT_MODAL_CLOSE'})}}>Edit</button>
                <button onClick={() => {dispatch({type: 'EDIT_MODAL_CLOSE'})}}>Cancel</button>
            </ModalEdit>
            <Link to={'/'}>{'<-- BACK'}</Link>
        </div>
    );
};

export default ProductViewPage;