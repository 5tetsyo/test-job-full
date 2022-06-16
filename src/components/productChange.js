export const addProduct = (dispatch, newV) => {
    for (let v of Object.values(newV)) {
        if( v.length === 0) {
            alert('Value is incorrect. Try again.')
            return
        }
    }
    fetch('http://localhost:3000/products',{
        method:"POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(newV)
    })
        .then(res=>res.json())
        .then(json=>dispatch({type: 'ADD_PRODUCT', payload: json}))
}
export const deleteProduct = (dispatch, id) => {
    fetch(`http://localhost:3000/products/${id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>dispatch({type: 'DELETE_PRODUCT', payload: id}))
}
export const editProduct = (dispatch, id, newV) => {
    fetch(`http://localhost:3000/products/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(newV)
    })
        .then(res=>res.json())
        .then(json=>dispatch({type: 'EDIT_PRODUCT', payload: {
            value: json,
            id: id
        }}))
}