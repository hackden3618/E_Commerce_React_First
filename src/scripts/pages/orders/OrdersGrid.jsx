import { Link, useNavigate } from "react-router";
import dayjs from "dayjs";

import { moneyFormat } from "../../utils/moneyFormat";
import axios from "axios";
import { Fragment } from "react";

export function OrdersGrid({ orders }) {

  const navigate = useNavigate();

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
              <div className="order-details-grid">

                {
                  orderItem.products.map((productDetails) => {

                    const sendToCartBackend = async () => {
                      await axios.post("/api/cart-items", {
                        "productId": productDetails.productId,
                        "quantity": 1
                      });
                    }
                    const buyAgainButtonHandler = () => {
                      sendToCartBackend();
                      navigate("/checkout");
                    }

                    return (
                      <Fragment key={productDetails.productId} >
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
                          <button
                            className="buy-again-button button-primary"
                            onClick={buyAgainButtonHandler}
                          >
                            <img
                              className="buy-again-icon"
                              src="images/icons/buy-again.png"
                            />
                            <span className="buy-again-message">Add to Cart</span>
                          </button>
                        </div>

                        <div className="product-actions">
                          <Link to={`/tracking/${orderItem.id}/${productDetails.productId}`}>
                            <button className="track-package-button button-secondary">
                              Track package
                            </button>
                          </Link>
                        </div>
                      </Fragment>
                    );
                  })
                }
              </div>
            </div>
          );
        })
      }
    </div>
  );
}
