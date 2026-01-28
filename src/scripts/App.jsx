import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home/HomePage.jsx";
import { CheckoutPage } from "./pages/checkout/CheckoutPage.jsx";
import { OrdersPage } from "./pages/orders/OrdersPage.jsx";
import { TrackingPage } from "./pages/TrackingPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([]);

  useEffect(() => {
    async function getAllData() {
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
    }
    getAllData();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            products={products}
            cart={cart}
          />
        }
      />
      <Route
        path="/checkout"
        element={
          <CheckoutPage
            cart={cart}
            deliveryOptions={deliveryOptions}
            paymentSummary={paymentSummary}
          />
        }
      />
      <Route
        path="/orders"
        element={
          <OrdersPage
            cart={cart}
            orders={orders}
          />
        } />
      <Route
        path="/tracking"
        element={
          <TrackingPage />
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
