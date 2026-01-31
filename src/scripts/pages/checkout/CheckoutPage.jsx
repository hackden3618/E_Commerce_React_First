import { useEffect, useState } from "react";
import axios from "axios";

import { CheckoutHeader } from "./CheckoutHeader.jsx";
import { OrderSummary } from "./OrderSummary.jsx";
import { PaymentSummary } from "./PaymentSummary.jsx";
import "../../../styles/pages/checkout/CheckoutHeader.css";
import "../../../styles/pages/checkout/CheckoutPage.css";

export function CheckoutPage({ cart, loadCart }) {
  const [paymentSummary, setPaymentSummary] = useState([]);

  async function loadPaymentSummary() {
    const paymentSummaryResponse = await
      axios.get("/api/payment-summary");
    setPaymentSummary(paymentSummaryResponse.data);
  }
  useEffect(() => {
      loadPaymentSummary();
  }, [cart]);
  useEffect(() => {
    loadCart();
  }, []);

  return (
    <>
      <link rel="icon" type="icon" href="/favicons/cart-favicon.png" />
      <title>Checkout</title>
      <CheckoutHeader
        cart={cart}
      />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>
        <div className="checkout-grid">
          <OrderSummary
            cart={cart}
            loadCart={loadCart}
          />
          <PaymentSummary
            loadCart={loadCart}
            loadPaymentSummary={loadPaymentSummary}
            paymentSummary={paymentSummary}
          />
        </div>
      </div>
    </>
  );
}
