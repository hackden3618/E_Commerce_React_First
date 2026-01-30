import dayjs from "dayjs";
import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemDetails } from "./CartItemDetails.jsx"

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
                <CartItemDetails
                  cartItem={cartItem}
                  loadCart={loadCart}
                />
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
