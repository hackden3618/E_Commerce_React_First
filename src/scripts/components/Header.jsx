import { NavLink, useNavigate } from "react-router";
import { useState } from "react";

import Logo from "../../assets/images/logo.png";
import MobileLogoWhite from "../../assets/images/mobile-logo-white.png";
import SearchIcon from "../../assets/images/icons/search-icon.png";
import CartIcon from "../../assets/images/icons/cart-icon.png";

import "../../styles/components/Header.css";

export function Header({ cart, search }) {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  let totalQty = 0;
  cart.forEach((cartItem) => {
    totalQty += cartItem.quantity;
  });

  const updateSearch = (event) => {
    setSearchValue(event.target.value);
  }
  
  const sendSearchQuery = () => {
    console.log(searchValue);
    console.log("Searching...");
    navigate(`/?search=${searchValue}`);
  }

  const listenToKeyboard = (event) => {
    if (event.key === "Escape") {
      setSearchValue("");
      navigate("/");
    }
    if (event.key === "Enter") { sendSearchQuery(); }
  }

  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src={Logo} />
            <img className="mobile-logo" src={MobileLogoWhite} />
          </NavLink>
        </div>

        <div className="middle-section">
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            onChange={updateSearch}
            onKeyDown={listenToKeyboard}
            value={search}
          />

          <button className="search-button">
            <img
              className="search-icon"
              src={SearchIcon}
              onClick={sendSearchQuery}
            />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src={CartIcon} />
            <div className="cart-quantity">{totalQty}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
