import { useSelector } from "react-redux";
import { selectCartTotal } from "../features/cart/cartSlice";

export default function Checkout() {
  const total = useSelector(selectCartTotal);

  return (
    <div className="card p-6 text-center">
      <h2 className="text-xl font-black">Checkout</h2>
      <p className="mt-4">Total Amount: ${total}</p>
      <button
        className="btn btn-primary mt-4"
        onClick={() => alert("Payment successful (demo)")}
      >
        Pay Now
      </button>
      <p className="mt-3 text-xs text-slate-500">
        This is a demo checkout. No real payment is processed.
      </p>
    </div>
  );
}