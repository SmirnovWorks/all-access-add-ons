import "./styles.css";
import AddOnComponent from './addons/AddOnComponent';
import { papiPostSubtotal } from './addons/addOnsApi';
import { useAddOns } from './addons/useAddOns';

export default function App() {
  // Model + ViewModel
  const [addonsView, selectedAddons, addonsPayload] = useAddOns(
    "New York 225 uuid",
    "all_access"
  );

  // Controller
  const handleSubmit = () => {
    // HTTP POST Request
    papiPostSubtotal(addonsPayload);
  };

  // View
  return (
    <div className="App">
      <h1>Choose Add-on:</h1>
      {addonsView.map((addon) => {
        // Syntax sugar, turning object into props, here we can filter props if necessary
        return <AddOnComponent key={addon.uuid} {...addon} />;
      })}
      <hr />
      Total:
      {selectedAddons.map((selectedAddon) => (
        <p key={selectedAddon.uuid}>{selectedAddon.total}, </p>
      ))}
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
