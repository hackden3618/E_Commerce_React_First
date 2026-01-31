import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import { HomePage } from "./pages/home/HomePage.jsx";
import { CheckoutPage } from "./pages/checkout/CheckoutPage.jsx";
import { OrdersPage } from "./pages/orders/OrdersPage.jsx";
import { TrackingPage } from "./pages/TrackingPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { ServerDownPage } from "./pages/ServerDownPage.jsx";

export default function App() {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [hasError, setHasError] = useState(false);

  async function loadCart() {
    const cartResponse = await
      axios.get("/api/cart-items?expand=product");
    setCart(cartResponse.data);
  }


  async function loadOrders() {
    const orderResponse = await
      axios.get("/api/orders?expand=products");
    setOrders(orderResponse.data);
  }

  useEffect(() => {
    window.axios = axios;
    async function getAllData() {
      try {
        loadCart();
      } catch (error) {
        console.log(error);
        setHasError(true);
      }
    }
    getAllData();
  }, []);

  const navigate = useNavigate();
  if (hasError) { navigate("/serverDown"); }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            hasError={hasError}
            cart={cart}
            loadCart={loadCart}
          />
        }
      />
      <Route
        path="/checkout"
        element={
          <CheckoutPage
            hasError={hasError}
            cart={cart}
            loadCart={loadCart}
          />
        }
      />
      <Route
        path="/orders"
        element={
          <OrdersPage
            hasError={hasError}
            cart={cart}
            orders={orders}
            loadOrders={loadOrders}
          />
        }
      />
      <Route
        path="/tracking/:orderId/:productId"
        element={
          <TrackingPage
            hasError={hasError}
            cart={cart}
          />
        }
      />
      <Route path="*" element={<NotFoundPage cart={cart} />} />
      <Route path="serverDown" element={<ServerDownPage cart={cart} />} />
    </Routes>
  );
}
