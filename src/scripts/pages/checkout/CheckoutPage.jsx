import { CheckoutHeader } from "./CheckoutHeader.jsx";
import { OrderSummary } from "./OrderSummary.jsx";
import { PaymentSummary } from "./PaymentSummary.jsx";
import "../../../styles/pages/checkout/CheckoutHeader.css";
import "../../../styles/pages/checkout/CheckoutPage.css";

export function CheckoutPage({cart}) {
  return (
    <>
      <link rel="icon" type="icon" href="/favicons/cart-favicon.png" />
      <title>Checkout</title>
      <CheckoutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>
        <div className="checkout-grid">
          <OrderSummary cart={cart} />
          <PaymentSummary />
        </div>
      </div>
    </>
  );
}
