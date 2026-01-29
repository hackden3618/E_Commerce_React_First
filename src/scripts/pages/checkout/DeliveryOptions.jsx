import dayjs from "dayjs";
import axios from "axios";
import { moneyFormat } from "../../utils/moneyFormat";
export function DeliveryOptions({ cartItem, deliveryOptions, loadCart, loadPaymentSummary }) {


  return (
    <div className="delivery-options">
      <div className="delivery-options-title">
        Choose a delivery option:
      </div>
      {
        deliveryOptions.map((deliveryOption) => {

          let deliveryFeeString = "FREE Shipping";

          if (deliveryOption.deliveryDays === 3) {
            deliveryFeeString = `${moneyFormat(deliveryOption.priceCents)} - Shipping`;
          } else if (deliveryOption.deliveryDays === 1) {
            deliveryFeeString = `${moneyFormat(deliveryOption.priceCents)} - Shipping`;
          }

          const optionClickedHandler = async () => {
            await axios.put(`/api/cart-items/${cartItem.productId}`, {
              "deliveryOptionId": deliveryOption.id
            });
            await loadCart();
            await loadPaymentSummary();
          }

          return (
            <div
              key={deliveryOption.id}
              onClick={optionClickedHandler}
              className="delivery-option"
            >
              <input
                type="radio"
                checked={deliveryOption.id === cartItem.deliveryOptionId}
                className="delivery-option-input"
                name={`delivery-option-${cartItem.productId}`}
              />
              <div>
                <div className="delivery-option-date">
                  {dayjs(deliveryOption.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
                </div>
                <div className="delivery-option-price">
                  {deliveryFeeString}
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}
