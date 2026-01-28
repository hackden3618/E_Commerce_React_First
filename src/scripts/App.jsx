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
  useEffect(() => {
    async function getProducts() {
      const productsResponse = await axios.get("/api/products");
      setProducts(productsResponse.data);
    }
    async function getCart() {
      const cartResponse = await axios.get("/api/cart-items?expand=product");
      setCart(cartResponse.data);
    }
    getProducts();
    getCart();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage products={products} cart={cart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<OrdersPage cart={cart} />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
