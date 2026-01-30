import { useState } from "react";
import axios from "axios";
import { moneyFormat } from "../../utils/moneyFormat";
import Checkmark from "../../../assets/images/icons/checkmark.png";

export function Product({ product, loadCart }) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [cartOpacity, setCartOpacity] = useState(0);
  const updateQuantity = async (event) => {
    setSelectedQuantity(parseInt(event.target.value));
  }
  const addToCart = async () => {
    makeCartVisible();
    await axios.post(
      "/api/cart-items", {
      "productId": product.id,
      "quantity": selectedQuantity
    });
    await loadCart();
  }
  let timeoutId;
  const makeCartVisible = () => {
    setCartOpacity(1);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setCartOpacity(0);
    }, 1000);
  }
  return (
    <div className="product-container" >
      <div className="product-image-container">
        <img
          className="product-image"
          src={product.image}
        />
      </div>

      <div className="product-name limit-text-to-2-lines">
        {product.name}
      </div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={`images/ratings/rating-${product.rating.stars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">{moneyFormat(product.priceCents)}</div>

      <div className="product-quantity-container" >
        <select
          onChange={updateQuantity}
          value={selectedQuantity}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      <div className="added-to-cart" style={{ opacity: cartOpacity }}>
        <img src={Checkmark} />
        Added
      </div>

      <button
        className="add-to-cart-button button-primary"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
