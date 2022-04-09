import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Components/Header";
import "./Components/Styles.css";
import Home from "./Components/Home";
import CartPage from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
