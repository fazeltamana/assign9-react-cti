import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearCart,
  decQty,
  incQty,
  removeFromCart,
  selectCartTotal,
  selectCartCount,
} from "../features/cart/cartSlice";
import { useSettings } from "../context/SettingsContext";

export default function CartDrawer({ open, onClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((s) => s.cart.items);
  const total = useSelector(selectCartTotal);
  const itemCount = useSelector(selectCartCount);

  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}>
      
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className={`absolute inset-0 transition bg-black/50 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* DRAWER */}
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md shadow-2xl transition-transform duration-300 bg-[var(--paper)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-[var(--divider)] p-5">
          <div>
            <div className="text-sm font-extrabold text-[var(--textPrimary)]">
              Bazaar-e-Noor Cart
            </div>
            <div className="text-xs font-semibold text-[var(--textSecondary)]">
              {items.length} item types • {itemCount} total items
            </div>
          </div>
          <button className="btn btn-ghost" onClick={onClose}>
            Close
          </button>
        </div>

        {/* BODY */}
        <div className="h-[calc(100%-220px)] overflow-auto p-5">
          {items.length === 0 ? (
            <div className="grid place-items-center py-14 text-center">
              <div className="text-base font-extrabold text-[var(--textPrimary)]">
                Your basket is empty
              </div>
              <div className="mt-2 text-sm font-medium text-[var(--textSecondary)]">
                Add products to see them here.
              </div>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((it) => (
                <li
                  key={it.id}
                  className="card p-4 transition bg-[var(--paper)] border border-[var(--divider)]"
                >
                  <div className="flex gap-3">
                    
                    {/* IMAGE */}
                    <div className="grid h-16 w-16 place-items-center rounded-xl bg-[var(--bg)]">
                      <img
                        src={it.image}
                        alt={it.title}
                        className="h-12 w-12 object-contain mix-blend-multiply"
                        loading="lazy"
                      />
                    </div>

                    {/* INFO */}
                    <div className="flex-1">
                      
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-sm font-extrabold line-clamp-2 text-[var(--textPrimary)]">
                          {it.title}
                        </div>

                        <button
                          className="btn btn-ghost px-3 py-1.5 text-xs"
                          onClick={() => dispatch(removeFromCart(it.id))}
                        >
                          Remove
                        </button>
                      </div>

                      {/* PRICE + QTY */}
                      <div className="mt-1 flex items-center justify-between">
                        <div className="text-sm font-extrabold text-[var(--primary)]">
                          ${(it.price * it.qty).toFixed(2)}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            className="btn btn-ghost px-3 py-1.5"
                            onClick={() => dispatch(decQty(it.id))}
                          >
                            −
                          </button>

                          <span className="min-w-8 text-center text-sm font-extrabold text-[var(--textPrimary)]">
                            {it.qty}
                          </span>

                          <button
                            className="btn btn-ghost px-3 py-1.5"
                            onClick={() => dispatch(incQty(it.id))}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="mt-1 text-xs font-semibold text-[var(--textSecondary)]">
                        Unit: ${it.price.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* FOOTER */}
        <div className="border-t border-[var(--divider)] p-5">
          <div className="flex items-center justify-between">
            <div className="text-sm font-bold text-[var(--textSecondary)]">
              Total
            </div>
            <div className="text-lg font-black text-[var(--textPrimary)]">
              ${total.toFixed(2)}
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button
              className="btn btn-ghost flex-1"
              onClick={() => dispatch(clearCart())}
              disabled={items.length === 0}
            >
              Clear basket
            </button>
            <button
              className="btn btn-primary flex-1"
              disabled={items.length === 0}
              onClick={() => {
                onClose(); 
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}