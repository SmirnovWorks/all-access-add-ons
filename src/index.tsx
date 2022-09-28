import { StrictMode } from "react";
import * as ReactDOM from 'react-dom/client';

import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('not working')
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
