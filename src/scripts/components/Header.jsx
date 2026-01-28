import { NavLink } from "react-router";

import Logo from "../../assets/images/logo.png";
import MobileLogoWhite from "../../assets/images/mobile-logo-white.png";
import SearchIcon from "../../assets/images/icons/search-icon.png";
import CartIcon from "../../assets/images/icons/cart-icon.png";

import "../../styles/components/Header.css";

export function Header({ cart }) {
  let totalQty = 0;
  cart.forEach((cartItem) => {
    totalQty += cartItem.quantity;
  });

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
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src={SearchIcon} />
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
