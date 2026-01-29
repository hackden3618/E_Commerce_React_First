import dayjs from "dayjs";
import { moneyFormat } from "../../utils/moneyFormat.js"
import { DeliveryOptions } from "./DeliveryOptions";
import axios from "axios";

export function OrderSummary({ cart, deliveryOptions, loadCart, loadPaymentSummary }) {
  return (
    <div className="order-summary">
      {
        deliveryOptions.length > 0 &&
        cart.map((cartItem) => {

          const selectedDeliveryOption = deliveryOptions
            .find((deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            });

          const updateDetailsHandler = async () => {
            await axios.put(`/api/cart-items/${cartItem.productId}`,{
              "quantity" : 1
            });
            await loadCart();
          }

          const deleteDetailsHandler = async () => {
            await axios.delete(`/api/cart-items/${cartItem.productId}`);
            await loadCart();
          }


          return (
            <div key={cartItem.id} className="cart-item-container">
              <div className="delivery-date">
                Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
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
                  <div className="product-price">
                    {moneyFormat(cartItem.product.priceCents)}
                  </div>
                  <div className="product-quantity">
                    <span>
                      Quantity: <span className="quantity-label">{cartItem.quantity}</span>
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
                <DeliveryOptions
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                  loadCart={loadCart}
                  loadPaymentSummary={loadPaymentSummary}
                />
              </div>
            </div>
          );
        })
      }
    </div>
  );
}
