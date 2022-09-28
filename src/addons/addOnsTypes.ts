export interface AddOn {
  uuid: string;
  name: string;
  price: string;
}

export interface AddOnView extends AddOn {
  isSelected: boolean;
  quantity: number;
  select(): void;
  setQuantity(quantity: number): void;
}

export interface AddOnPayload {
  uuid: string;
  quantity: number;
}