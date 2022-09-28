import { useState } from 'react';
import { AddOn, AddOnView } from './addOnsTypes';

export const useAddonView = (addon: AddOn): AddOnView => {
  // constructor
  const [storage, setStorage] = useState({
    ...addon,
    quantity: 1,
    isSelected: false,
  });

  // private method
  const select = () => {
    setStorage((addon) => ({ ...addon, isSelected: !addon.isSelected }));
  };
  
  // private method
  const setQuantity = (quantity: number) =>
    setStorage((addon) => ({ ...addon, quantity }));

  return {
    ...storage,
    // make them public
    select,
    setQuantity,
  };
};