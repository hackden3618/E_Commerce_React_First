import { Header } from "../../components/Header.jsx";
import { OrdersGrid } from "./OrdersGrid.jsx";
import "../../../styles/pages/OrdersPage.css";

export function OrdersPage({ cart, orders, loadOrders }) {
  loadOrders();
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
