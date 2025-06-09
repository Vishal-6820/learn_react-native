import {Add_Item, Remove_Item} from '../ActionTypes';

const initialState = {
  cart: [],
};

export const Reducers = (state = initialState, action: any) => {
  switch (action.type) {
    case Add_Item: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }

    case Remove_Item: {
      const updatedCart = state.cart.filter(
        (item, idx) => idx !== action.payload,
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }

    default:
      return state;
  }
};
