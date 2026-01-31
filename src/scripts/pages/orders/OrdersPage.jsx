import { Header } from "../../components/Header.jsx";
import { OrdersGrid } from "./OrdersGrid.jsx";
import "../../../styles/pages/OrdersPage.css";
import { useEffect } from "react";

export function OrdersPage({ cart, orders, loadOrders }) {
  useEffect(() => {
    loadOrders();
  },[cart]);
  return (
    <>
      <link rel="icon" type="icon" href="/images/favicons/orders-favicon.png" />
      <title>Orders</title>
      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid orders={orders} />
      </div>
    </>
  );
}
