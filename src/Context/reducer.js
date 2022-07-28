export const initialState = {
    basket: []
}

export const Reducer = (state, action) => {

    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        
        default:
            return state
    }
}