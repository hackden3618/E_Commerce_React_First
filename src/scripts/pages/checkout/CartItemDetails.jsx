import axios from "axios";
import { useState } from "react";
import { moneyFormat } from "../../utils/moneyFormat.js"

export function CartItemDetails({ cartItem, loadCart }) {

  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedQty, setUpdatedQty] = useState(cartItem.quantity);

  const updateDetailsHandler = () => {
    if (isUpdating) {
      updateDetailsToServer();
      setIsUpdating(false);
    }
    else { setIsUpdating(true); }
  }

  const listenToQuantity = (event) => {
    setUpdatedQty(parseInt(event.target.value));
  }

  const listenToKeyboard = (event) => {
    if (event.key === "Escape") { setIsUpdating(false) }
    if (event.key === "Enter") {
      updateDetailsHandler();
    }
  }

  const updateDetailsToServer = async () => {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      "quantity": updatedQty
    });
    await loadCart();
  }

  const deleteDetailsHandler = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  }


  return (
    <div className="cart-item-details">
      <div className="product-name">
        {cartItem.product.name}
      </div>
      <div className="product-price">
        {moneyFormat(cartItem.product.priceCents)}
      </div>
      <div className="product-quantity">
        <span>
          Quantity:
          {
            isUpdating ?
              <span>
                <input
                  type="number"
                  className="updateQuantityInput"
                  onChange={listenToQuantity}
                  onKeyDown={listenToKeyboard}
                  value={cartItem.quantity}
                />
              </span>
              :
              <span className="quantity-label">{cartItem.quantity}</span>
          }
        </span>
        <span
          className="update-quantity-link link-primary"
          onClick={updateDetailsHandler}
        >
          Update
        </span>
        <span
          className="delete-quantity-link link-primary"
          onClick={deleteDetailsHandler}
        >
          Delete
        </span>
      </div>
    </div>
  );
}
