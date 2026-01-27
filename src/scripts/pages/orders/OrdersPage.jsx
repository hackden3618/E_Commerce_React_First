import { Header } from "../../components/Header.jsx";
import { OrdersGrid } from "./OrdersGrid.jsx";
import "../../../styles/pages/OrdersPage.css";

export function OrdersPage() {
  return (
    <>
      <link rel="icon" type="icon" href="/images/favicons/orders-favicon.png" />
      <title>Orders</title>
      <Header />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid />
      </div>
    </>
  );
}
