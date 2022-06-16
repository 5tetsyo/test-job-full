const defaultModalState = {
    add: false, delete:false, edit: false, id: null, products: null
}

export const modalReducer = (state = defaultModalState, action) => {
    
    switch (action.type) {
        case ('ADD_MODAL_OPEN'):
            return {...state, add: true}
        case ('ADD_MODAL_CLOSE'):
            return {...state, add: false}
        case ('DELETE_MODAL_OPEN'):
            return {...state, delete: true}
        case ('DELETE_MODAL_CLOSE'):
            return {...state, delete: false}
        case ('EDIT_MODAL_OPEN'):
            return {...state, edit: true}
        case ('EDIT_MODAL_CLOSE'):
            return {...state, edit: false}
        case ('SET_CLICKED'):
            return {...state, id: action.payload}
        case ('SET_PRODUCTS'):
            return {...state, products: action.payload}
        case ('ADD_PRODUCT'):
            return {...state, products: [...state.products, action.payload]}
        case ('DELETE_PRODUCT'):
            return {...state, products: state.products.filter(el => el.id !== action.payload)}
        case ('EDIT_PRODUCT'):
            return {...state, product: [...state.products, state.products[action.payload.id] = action.payload.value]}
        case ('SORT_BY'):
            const types = {
                description: 'description',
                price: 'price',
                title: 'title',
              };
            const sortProperty = types[action.payload];
            console.log(state.products.sort((a,b) => a.title - b.title));
            return {...state, products: [...state.products].sort((a, b) => a[sortProperty] > b[sortProperty] ? 1 : -1)}
        default:
            return state;
    }
}