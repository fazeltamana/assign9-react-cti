import { useMemo } from "react";
import { useProducts } from "../services/useProducts";
import { useSettings } from "../context/SettingsContext";
import Loader from "./Loader";
import EmptyState from "./EmptyState";
import Toolbar from "./Toolbar";
import ProductGrid from "./ProductGrid";

function normalize(s) {
  return String(s || "").toLowerCase().trim();
}

export default function ProductList() {
  const { data: items = [], isLoading, isError, error } = useProducts();
  const { state } = useSettings();
  const { category, query, sort } = state;
  const categories = useMemo(() => {
    const set = new Set(items.map((p) => p.category));
    return Array.from(set).sort();
  }, [items]);
  const visible = useMemo(() => {
    const q = normalize(query);
    let out = items;
    if (category !== "all") out = out.filter((p) => p.category === category);
    if (q) out = out.filter((p) => normalize(p.title).includes(q));
    switch (sort) {
      case "price-asc":
        out = [...out].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        out = [...out].sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        out = [...out].sort(
          (a, b) => (b.rating?.rate ?? 0) - (a.rating?.rate ?? 0)
        );
        break;
      default:
        break;
    }
    return out;
  }, [items, category, query, sort]);
  if (isLoading) return <Loader label="Fetching products..." />;
  if (isError) {
    return (
      <div className="card p-6 border bg-[var(--paper)] border-[var(--divider)]">
        <div className="text-base font-extrabold text-[var(--textPrimary)]">
          Couldn’t load products
        </div>
        <div className="mt-2 text-sm font-medium text-[var(--textSecondary)]">
          {error?.message}
        </div>
        <button
          className="btn-primary mt-4"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Toolbar categories={categories} />
      {visible.length === 0 ? (
        <EmptyState
          title="No products found"
          subtitle="Try changing the category or clearing the search."
        />
      ) : (
        <ProductGrid products={visible} />
      )}
    </div>
  );
}