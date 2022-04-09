import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Styles.css";
import Home from "./Home";
import CartPage from "./Cart";
import { Cart } from "./../Context";

function Header() {
  const { cart } = useContext(Cart);
  return (
    <div>
      <span className="header">React Context API</span>
      <ul className="nav">
        <li>
          <Link to="/" element={<Home />}>
            Home Page
          </Link>
        </li>
        <li>
          <Link to="/cart" element={<CartPage />}>
            Cart ({cart.length})
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
