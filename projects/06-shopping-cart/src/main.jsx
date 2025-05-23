import { createRoot } from "react-dom/client";
import { FiltersProvider } from "./context/filters.jsx";
import "./index.css";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
);
