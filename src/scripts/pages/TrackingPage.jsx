import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useParams } from "react-router";
import { Header } from "../components/Header.jsx";
import "../../styles/pages/TrackingPage.css";
import dayjs from "dayjs";

export function TrackingPage({ cart }) {
  const { orderId, productId } = useParams();
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    async function getOrders() {
      const ordersResponse = await axios.get(
        `/api/orders/${orderId}?expand=products`
      );
      setOrders(ordersResponse.data);
    }
    getOrders();
  }, [orderId]);
  if (!orders) {
    return null/* <Navigate to={"404"} />  */;
  }
  const whichProduct = orders.products.find((product) => {
    return productId === product.productId;
  });
  const timePassed = dayjs().valueOf() - orders.orderTimeMs;
  const totalDeliveryTime =
    whichProduct.estimatedDeliveryTimeMs - orders.orderTimeMs;
  let percentTimeTaken =
    Math.ceil((timePassed / totalDeliveryTime) * 100);
let isPreparing, isShipped, isDelivered;
  if (percentTimeTaken > 100) { percentTimeTaken = 100 };
  if (percentTimeTaken < 33) { isPreparing = true }
  if (percentTimeTaken > 33 && percentTimeTaken < 100) { isShipped= true }
  if (percentTimeTaken === 100) { isDelivered= true }

  return (
    <>
      <link rel="icon" type="icon" href="/favicons/tracking-favicon.png" />
      <title>Tracking</title>
      <Header cart={cart} />
      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            {`${percentTimeTaken == 100 ? "Delivered on" : "Arriving on"} ${dayjs(whichProduct.estimatedDeliveryTimeMs)
              .format("dddd, MMMM D")}`}
          </div>

          <div className="product-info">
            {whichProduct.product.name}
          </div>

          <div className="product-info">
            Quantity: {whichProduct.quantity}
          </div>

          <img
            className="product-image"
            src={whichProduct.product.image}
          />

          <div className="progress-labels-container">
            <div
              className={
                `progress-label
                ${isPreparing && "current-status"}`
              } 
            >
              Preparing
            </div>
            <div className={
                `progress-label
                ${isShipped && "current-status"}`
              }
            >
              Shipped
            </div>
            <div
              className={
                `progress-label
                ${isDelivered && "current-status"}`
              }
            >
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${percentTimeTaken}%` }}
            ></div>
          </div>
        </div>
      </div >

    </>
  );
}
