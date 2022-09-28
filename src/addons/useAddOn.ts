import { useState } from 'react';
import { AddOn, AddOnView } from './addOnsTypes';

export const useAddonView = (addon: AddOn): AddOnView => {
  // constructor
  const [state, setState] = useState({
    quantity: 1,
    isSelected: false,
  });

  // computed property
  const total = `${addon.name}: x${state.quantity} by ${addon.price} for 1 pc`;

  // private methods
  const select = () => {
    setState((state) => ({ ...state, isSelected: !state.isSelected }));
  };
  
  const setQuantity = (quantity: number) =>
  setState((state) => ({ ...state, quantity }));

  return {
    // properties
    ...addon,
    ...state,
    total,
    // public methods
    select,
    setQuantity,
  };
};