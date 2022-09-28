import { AddOnView } from "./addOnsTypes";

type AddOnComponentProps = AddOnView;

const AddOnComponent = (props: AddOnComponentProps) => {
  return (
    <div style={{ border: "1px solid black" }}>
      Addon: {props.name}
      <br />
      Price: {props.price}
      <br />
      <label>
        select
        <input onChange={props.select} checked={props.isSelected} type="checkbox" />
      </label>
      <label htmlFor="quantity">quantity</label>
      <button onClick={() => props.setQuantity(props.quantity - 1)}>-</button>
      <input
        id="quantity"
        value={props.quantity}
        type="number"
        onChange={(e) => props.setQuantity(+e.target.value)}
      />
      <button onClick={() => props.setQuantity(props.quantity + 1)}>+</button>
    </div>
  );
};

export default AddOnComponent;
