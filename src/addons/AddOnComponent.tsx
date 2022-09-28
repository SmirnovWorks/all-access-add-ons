import { AddOnView } from './addOnsTypes';

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
        <input
          onChange={props.select}
          checked={props.isSelected}
          type="checkbox"
        />
      </label>
    </div>
  );
};

export default AddOnComponent;