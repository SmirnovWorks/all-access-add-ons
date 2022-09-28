export interface AddOn {
  uuid: string;
  name: string;
  price: string;
}

export interface AddOnView extends AddOn {
  isSelected: boolean;
  quantity: number;
  // NOT FOR IMPLEMENTATION, just for demonstration of computed value
  total: string;
  select(): void;
  setQuantity(quantity: number): void;
}

export interface AddOnPayload {
  uuid: string;
  quantity: number;
}