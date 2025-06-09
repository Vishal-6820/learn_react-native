import {Add_Item, Remove_Item, Clear_Cart} from '../ActionTypes';

export const addItemToCart = (item: any) => ({
  type: Add_Item,
  payload: item,
});

export const removeItemFromCart = (itemId: string) => ({
  type: Remove_Item,
  payload: itemId,
});

export const clearCart = () => ({
  type: Clear_Cart,
});
