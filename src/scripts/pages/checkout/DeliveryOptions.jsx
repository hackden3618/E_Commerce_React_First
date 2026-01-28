import dayjs from "dayjs";
import { moneyFormat } from "../../utils/moneyFormat";
export function DeliveryOptions({ cartItem, deliveryOptions }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">
        Choose a delivery option:
      </div>
      {
        deliveryOptions.map((deliveryOption) => {
          let deliveryFeeString = "FREE Shipping";
          if (deliveryOption.deliveryDays === 3) {
            deliveryFeeString = `${moneyFormat(deliveryOption.priceCents)}`;
          }else if (deliveryOption.deliveryDays === 1) {
            deliveryFeeString = `${moneyFormat(deliveryOption.priceCents)}`;
          }
          return (
            <div key={deliveryOption.id} className="delivery-option">
              <input
                type="radio"
                checked
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
