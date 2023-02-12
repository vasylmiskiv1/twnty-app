import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import SolarModuleStore from "./pages/Store";
import SolarModuleCart from "./pages/ShoppingCart";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/store" element={<SolarModuleStore />} />
        <Route path="/cart" element={<SolarModuleCart />} />
        <Route path="/" element={<Navigate to="/store" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
