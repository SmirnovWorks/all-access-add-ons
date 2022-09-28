import "./styles.css";
import React, { useState } from "react";

interface AddOn {
  uuid: string;
  name: string;
  price: string;
}

interface AddOnView extends AddOn {
  isSelected: boolean;
  quantity: number;
  select(): void;
  setQuantity(quantity: number): void;
}

interface AddOnPayload {
  uuid: string;
  quantity: number;
}

const papiGetAddonRequest = (...args: any): AddOn[] => {
  return [
    { uuid: "1", name: "addon-1", price: "10$" },
    { uuid: "2", name: "addon-2", price: "20$" },
    { uuid: "nina", name: "Ninin borsch", price: "priceless" },
  ];
};

const papiPostSubtotal = (args: AddOnPayload[]) => {
  alert("SUBMIT" + JSON.stringify(args, null, 2));
};

const getAddonPayload = (addon: AddOnView): AddOnPayload => {
  return { uuid: addon.uuid, quantity: addon.quantity };
};

const useAddonView = (addon: AddOn): AddOnView => {
  const [storage, setStorage] = useState({
    ...addon,
    quantity: 1,
    isSelected: false,
  });

  const select = () =>
    setStorage((addon) => ({ ...addon, isSelected: !addon.isSelected }));

  const setQuantity = (quantity: number) =>
    setStorage((addon) => ({ ...addon, quantity }));

  return {
    ...storage,
    select,
    setQuantity,
  };
};

const useAddons = (
  locationUuid: string,
  productType: string
): [AddOnView[], AddOnView[], AddOnPayload[], AddOn[]] => {
  const addons: AddOn[] = papiGetAddonRequest(locationUuid, productType);

  const addonsView: AddOnView[] = addons.map(useAddonView);

  const selectedAddons: AddOnView[] = addonsView.filter(
    (addon) => addon.isSelected
  );

  const addonsPayload: AddOnPayload[] = selectedAddons.map(getAddonPayload);

  return [addonsView, selectedAddons, addonsPayload, addons];
};

export default function App() {
  const [addonsView, selectedAddons, addonsPayload] = useAddons(
    "location",
    "all_access"
  );

  const handleSubmit = () => {
    papiPostSubtotal(addonsPayload);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {addonsView.map((addon) => {
        return (
          <div style={{ border: "1px solid black" }}>
            Addon: {addon.name}
            <br />
            Price: {addon.price}
            <br />
            <label>
              select
              <input onChange={addon.select} type="checkbox" />
            </label>
          </div>
        );
      })}
      <hr />
      {selectedAddons.map((selectedAddon) => (
        <b>{selectedAddon.name}, </b>
      ))}
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
