export function DeliveryOptions({cartItem}) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">
        Choose a delivery option:
      </div>
      <div className="delivery-option">
        <input
          type="radio"
          checked
          className="delivery-option-input"
          name={ `delivery-option-1-${cartItem.productId}` }
        />
        <div>
          <div className="delivery-option-date">
            Tuesday, June 21
          </div>
          <div className="delivery-option-price">FREE Shipping</div>
        </div>
      </div>
      <div className="delivery-option">
        <input
          type="radio"
          className="delivery-option-input"
          name={ `delivery-option-1-${cartItem.productId}` }
        />
        <div>
          <div className="delivery-option-date">
            Wednesday, June 15
          </div>
          <div className="delivery-option-price">
            $4.99 - Shipping
          </div>
        </div>
      </div>
      <div className="delivery-option">
        <input
          type="radio"
          className="delivery-option-input"
          name={ `delivery-option-1-${cartItem.productId}` }
        />
        <div>
          <div className="delivery-option-date">
            Monday, June 13
          </div>
          <div className="delivery-option-price">
            $9.99 - Shipping
          </div>
        </div>
      </div>
    </div>
  );
}
