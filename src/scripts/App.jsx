import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { CheckoutPage} from "./pages/CheckoutPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}
