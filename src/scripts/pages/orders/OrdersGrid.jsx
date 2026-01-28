import { Link } from "react-router";
import dayjs from "dayjs";

import { moneyFormat } from "../../utils/moneyFormat";

export function OrdersGrid({ orders }) {
  return (
    <div className="orders-grid">
      {
        orders.map((orderItem) => {
          return (
            <div key={orderItem.id} className="order-container">
              <div className="order-header">
                <div className="order-header-left-section">
                  <div className="order-date">
                    <div className="order-header-label">Order Placed:</div>
                    <div>{dayjs(orderItem.orderTimeMs).format("MMMM D")}</div>
                  </div>
                  <div className="order-total">
                    <div className="order-header-label">Total:</div>
                    <div>{moneyFormat(orderItem.totalCostCents)}</div>
                  </div>
                </div>

                <div className="order-header-right-section">
                  <div className="order-header-label">Order ID:</div>
                  <div>{orderItem.id}</div>
                </div>
              </div>

              {
                orderItem.products.map((productDetails) => {
                  return (
                    <div key={productDetails.productId} className="order-details-grid">
                      <div className="product-image-container">
                        <img
                          src={productDetails.product.image}
                        />
                      </div>

                      <div className="product-details">
                        <div className="product-name">{productDetails.product.name}</div>
                        <div className="product-delivery-date">
                          Arriving on: {dayjs(productDetails.estimatedDeliveryTimeMs).format("MMMM D")}
                        </div>
                        <div className="product-quantity">
                          Quantity: {productDetails.quantity}
                        </div>
                        <button className="buy-again-button button-primary">
                          <img
                            className="buy-again-icon"
                            src="images/icons/buy-again.png"
                          />
                          <span className="buy-again-message">Add to Cart</span>
                        </button>
                      </div>

                      <div className="product-actions">
                        <Link to="/tracking">
                          <button className="track-package-button button-secondary">
                            Track package
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          );
        })
      }
    </div>
  );
}
