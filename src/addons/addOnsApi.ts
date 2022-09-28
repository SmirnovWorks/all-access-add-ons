import { AddOn, AddOnPayload, AddOnView } from './addOnsTypes';

export const papiGetAddonRequest = (...args: any): AddOn[] => {
  return [
    { uuid: "uuid-1", name: "Super cool addon", price: "10$" },
    { uuid: "uuid-2", name: "Even better addon", price: "20$" },
    { uuid: "uuid-nina", name: "Ninyn borsch", price: "priceless" },
  ];
};

export const papiPostSubtotal = (args: AddOnPayload[]) => {
  alert("SUBMIT" + JSON.stringify(args, null, 2));
};

export const getAddonPayload = (addon: AddOnView): AddOnPayload => {
  return { uuid: addon.uuid, quantity: addon.quantity };
};