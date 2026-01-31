import axios from "axios";
import { moneyFormat } from "../../utils/moneyFormat";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export function PaymentSummary({ loadCart, paymentSummary, loadPaymentSummary }) {
  const navigate = useNavigate();
  useEffect(() => {
    loadPaymentSummary();
  },[]);

  const placeOrderHandler = async () => {
    await axios.post("/api/orders");
    await loadCart();
    navigate("/orders");
  }

  const defaultValue = 0;
  return (
    <div className="payment-summary">
      <div className="payment-summary-title">Payment Summary</div>

      <div className="payment-summary-row">
        <div>Items ({paymentSummary.totalItems || defaultValue}):</div>
        <div className="payment-summary-money">
          {moneyFormat(paymentSummary.productCostCents || defaultValue)}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div className="payment-summary-money">
          {moneyFormat(paymentSummary.shippingCostCents || defaultValue)}
        </div>
      </div>

      <div className="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div className="payment-summary-money">
          {moneyFormat(paymentSummary.totalCostBeforeTaxCents || defaultValue)}
        </div>
      </div>

      <div className="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div className="payment-summary-money">
          {moneyFormat(paymentSummary.taxCents || defaultValue)}
        </div>
      </div>

      <div className="payment-summary-row total-row">
        <div>Order total:</div>
        <div className="payment-summary-money">
          {moneyFormat(paymentSummary.totalCostCents || defaultValue)}
        </div>
      </div>

      <button
        className="place-order-button button-primary"
        onClick={placeOrderHandler}
      >
        Place your order
      </button>
    </div>
  );
}
