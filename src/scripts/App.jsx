import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import { HomePage } from "./pages/home/HomePage.jsx";
import { CheckoutPage } from "./pages/checkout/CheckoutPage.jsx";
import { OrdersPage } from "./pages/orders/OrdersPage.jsx";
import { TrackingPage } from "./pages/TrackingPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { ServerDownPage } from "./pages/ServerDownPage.jsx";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function getAllData() {
      try {
        const productsResponse = await
          axios.get("/api/products");
        setProducts(productsResponse.data);

        const cartResponse = await
          axios.get("/api/cart-items?expand=product");
        setCart(cartResponse.data);

        const orderResponse = await
          axios.get("/api/orders?expand=products");
        setOrders(orderResponse.data);

        const delOptionsResponse = await
          axios.get("/api/delivery-options?expand=estimatedDeliveryTime");
        setDeliveryOptions(delOptionsResponse.data);

        const paymentSummaryResponse = await
          axios.get("/api/payment-summary");
        setPaymentSummary(paymentSummaryResponse.data);
      } catch (error) {
        console.log(error);
        setHasError(true);
      }
    }
    getAllData();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          hasError ? (
            <Navigate to="/serverDown" replace />
          ) : (
            <HomePage products={products} cart={cart} />
          )
        }
      />
      <Route
        path="/checkout"
        element={
          hasError ? (
            <Navigate to="/serverDown" replace />
          ) : (
            <CheckoutPage
              cart={cart}
              deliveryOptions={deliveryOptions}
              paymentSummary={paymentSummary}
            />
          )
        }
      />
      <Route
        path="/orders"
        element={
          hasError ? (
            <Navigate to="/serverDown" replace />
          ) : (
            <OrdersPage
              cart={cart}
              orders={orders}
            />
          )
        }
      />
      <Route
        path="/tracking"
        element={
          hasError ? (
            <Navigate to="/serverDown" replace />
          ) : (
            <TrackingPage />
          )
        }
      />
      <Route path="*" element={<NotFoundPage cart={cart} />} />
      <Route path="serverDown" element={<ServerDownPage cart={cart} />} />
    </Routes>
  );
}
