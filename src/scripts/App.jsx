import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage.jsx";
import { CheckoutPage } from "./pages/CheckoutPage.jsx";
import { OrdersPage } from "./pages/OrdersPage.jsx";
import { TrackingPage } from "./pages/TrackingPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
  );
}
