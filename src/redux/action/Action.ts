import {Add_Item, Remove_Item} from '../ActionTypes';

export const addItemToCart = (data: any) => {
  type: Add_Item;
  payload: data;
};

export const removeItemFromCart = (index: any) => {
  type: Remove_Item;
  payload: index;
};
