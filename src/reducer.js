export const initialState = {
    user: null,
    basket: [],
}

// Seclector 
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => parseFloat(item.price) + amount, 0)

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET': 
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            ) 
            let newBasket = [...state.basket] 

            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn('can not remove')
            }
            return {
                ...state,
                basket: newBasket
            }
        default: 
            return state
    }
}

export default reducer