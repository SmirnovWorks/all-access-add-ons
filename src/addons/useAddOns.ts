import { getAddonPayload, papiGetAddonRequest } from './addOnsApi';
import { AddOn, AddOnPayload, AddOnView } from './addOnsTypes';
import { useAddonView } from './useAddOn';

export const useAddOns = (
  locationUuid: string,
  productType: string
): [AddOnView[], AddOnView[], AddOnPayload[], AddOn[]] => {
  // HTTP Request
  const addons: AddOn[] = papiGetAddonRequest(locationUuid, productType);

  // create ViewModel collection
  const addonsView: AddOnView[] = addons.map(useAddonView);

  // computed collection
  const selectedAddons: AddOnView[] = addonsView.filter(
    (addon) => addon.isSelected
  );

  // Prepare params for HTTP upload
  const addonsPayload: AddOnPayload[] = selectedAddons.map(getAddonPayload);

  // Better to make object, but I'm lazy
  return [addonsView, selectedAddons, addonsPayload, addons];
};
