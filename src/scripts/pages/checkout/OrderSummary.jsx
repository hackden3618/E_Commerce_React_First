import { DeliveryOptions } from "./DeliveryOptions";
export function OrderSummary() {
  return (
    <div className="order-summary">
      <div className="cart-item-container">
        <div className="delivery-date">
          Delivery date: Tuesday, June 21
        </div>

        <div className="cart-item-details-grid">
          <img
            className="product-image"
            src="images/products/athletic-cotton-socks-6-pairs.jpg"
          />

          <div className="cart-item-details">
            <div className="product-name">
              Black and Gray Athletic Cotton Socks - 6 Pairs
            </div>
            <div className="product-price">$10.90</div>
            <div className="product-quantity">
              <span>
                Quantity: <span className="quantity-label">2</span>
              </span>
              <span className="update-quantity-link link-primary">
                Update
              </span>
              <span className="delete-quantity-link link-primary">
                Delete
              </span>
            </div>
          </div>
          <DeliveryOptions />
        </div>
      </div>
    </div>
  );
}
