import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

function clamp(text, n = 90) {
  if (!text) return "";
  return text.length > n ? text.slice(0, n).trim() + "…" : text;
}

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <article className="card flex flex-col h-full overflow-hidden transition hover:shadow-md bg-[var(--paper)] border-[var(--divider)]">
      {/* IMAGE */}
      <div className="flex items-center justify-center p-6 bg-[var(--bg)]">
        <img
          src={product.image}
          alt={product.title}
          className="h-44 w-44 object-contain mix-blend-multiply"
          loading="lazy"
        />
      </div>
      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-1">
        {/* TITLE + PRICE */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-extrabold leading-snug text-[var(--textPrimary)]">
            {clamp(product.title, 60)}
          </h3>
          <span className="badge whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>
        {/* DESCRIPTION */}
        <p className="mt-2 text-xs font-medium text-[var(--textSecondary)]">
          {clamp(product.description, 110)}
        </p>
        {/* FOOTER */}
        <div className="mt-auto pt-4 flex flex-col gap-3">
          {/* Category + Rating */}
          <div className="flex items-center justify-between text-xs font-bold text-[var(--textSecondary)]">
            <span className="capitalize">{product.category}</span>
            <span>⭐ {product.rating?.rate ?? 0}</span>
          </div>
          {/* Buttons */}
          <div className="flex gap-2">
            <button
              className="btn btn-secondary flex-1"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              View Details
            </button>
            <button
              className="btn btn-primary flex-1"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}