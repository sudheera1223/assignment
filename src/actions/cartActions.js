import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants'

export const addToCart = addedItem =>({ type: ADD_TO_CART, addedItem });
export const removeFromCart = removedItem =>({ type: REMOVE_FROM_CART,removedItem });
