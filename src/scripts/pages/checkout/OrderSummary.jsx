import dayjs from "dayjs";
import { moneyFormat } from "../../utils/moneyFormat.js"
import { DeliveryOptions } from "./DeliveryOptions";

export function OrderSummary({ cart, deliveryOptions }) {
  return (
    <div className="order-summary">
      {
        cart.map((cartItem) => {
          return (
            <div key={cartItem.id} className="cart-item-container">
              <div className="delivery-date">
                Delivery date: {dayjs(121421300000000).format("dddd, MMMM D")}
              </div>

              <div className="cart-item-details-grid">
                <img
                  className="product-image"
                  src={cartItem.product.image}
                />

                <div className="cart-item-details">
                  <div className="product-name">
                    {cartItem.product.name}
                  </div>
                  <div className="product-price">{moneyFormat(cartItem.product.priceCents)}</div>
                  <div className="product-quantity">
                    <span>
                      Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                    </span>
                    <span className="update-quantity-link link-primary">
                      Update
                    </span>
                    <span className="delete-quantity-link link-primary">
                      Delete
                    </span>
                  </div>
                </div>
                <DeliveryOptions
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                />
              </div>
            </div>
          );
        })
      }
    </div>
  );
}
