import { useState } from "react";
import { AddOn, AddOnView } from "./addOnsTypes";

export const useAddonView = (addon: AddOn): AddOnView => {
  // observable
  const [state, setState] = useState({
    quantity: 1,
    isSelected: false,
  });

  // computed property
  const total = `${addon.name}: x${state.quantity} - ${addon.price} each`;

  // private methods
  const select = () => {
    setState((state) => ({ ...state, isSelected: !state.isSelected }));
  };

  const setQuantity = (quantity: number) => setState((state) => ({ ...state, quantity }));

  return {
    // immutable properties
    ...addon,
    // observable properties
    ...state,
    // computed properties
    total,
    // public methods as actions
    select,
    setQuantity,
  };
};
