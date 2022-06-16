export const getProducts = (dispatch) => {
    const options = {
        method: 'GET'
    };
    fetch('http://localhost:3000/products', options)
            .then(res=>res.json())
            .then(json=> dispatch({type: 'SET_PRODUCTS', payload: json}))
}