export const initialState = {
    basket: [],
    user: null
}

export const getCartTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

export const reducer = (state, action) => {

    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_CART':
            const index = state.basket.findIndex((item) => item.id === action.id)
            let newBasket = [...state.basket]
            if (index >= 0) {
                newBasket.splice(index, 1)
            }else {
                console.warn(`Can't remove product (id: ${action.id} as it is not in the basket)`)
            }
            
            return {
                ...state,
                basket: newBasket
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}
