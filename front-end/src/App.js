import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Product from "./components/pages/Product";

import "./style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DatabaseConnection from "./db";

function App() {
  return (
    <div>
      <DatabaseConnection />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
