import { FETCH_API_SUCCESS, ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

const defaultState = {
  products: [],
  cart: []
};

function productsReducer(previousState = defaultState, action) {
  const { type } = action;

  switch (type) {
    case FETCH_API_SUCCESS: {
      return {
        ...previousState,
        products: action.productsData.search_response.items.Item
      };
    }
    case ADD_TO_CART: {
      return {
        ...previousState,
        cart: [...previousState.cart, action.addedItem.dpci]
      };
    }
    case REMOVE_FROM_CART: {
      let newCart = [];
      previousState.cart.forEach(each => {
        if (each !== action.removedItem.dpci) {
          newCart.push(each);
        }
      });
      return {...previousState,cart: newCart };
    }
    default:
      return previousState;
  }
}

export default productsReducer;
