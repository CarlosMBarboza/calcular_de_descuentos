import { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";
import { MenuItem as MenuItemType}  from "../types";

type MenuItemProps = {
  item: MenuItemType,
  dispatch: Dispatch<OrderActions>
};

export const MenuItem = ({ item, dispatch }: MenuItemProps) => {
  return (
    <button
      className="border-2 hover:bg-gray-500 text-white border-gray-400 w-full p-3 flex justify-between"
      onClick={() => dispatch({type: 'add-item', payload:{item}})}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};