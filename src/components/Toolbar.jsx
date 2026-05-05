import { useSettings } from "../context/SettingsContext";
import CategoryFilter from "./CategoryFilter";
import SortSelect from "./SortSelect";

export default function Toolbar({ categories }) {
  const { state, dispatch } = useSettings();
  const { category, query, sort } = state;

  return (
    <div className="card p-4 md:p-5 border transition-colors bg-[var(--paper)] border-[var(--divider)]">
      {/* HEADER */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Title */}
        <div className="flex-1">
          <div className="text-sm font-extrabold text-[var(--textPrimary)]">
            Browse products
          </div>
          <div className="mt-1 text-xs font-semibold text-[var(--textSecondary)]">
            Filter by category, search by name, and sort by price or rating.
          </div>
        </div>
        {/* Controls */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          {/* SEARCH INPUT */}
          <input
            className="input md:w-[260px] transition 
              bg-[var(--bg)] 
              text-[var(--textPrimary)] 
              placeholder:text-[var(--textSecondary)] 
              border-[var(--divider)] 
              focus:ring-[var(--primary)]"
            value={query}
            onChange={(e) =>
              dispatch({ type: "SET_QUERY", payload: e.target.value })
            }
            placeholder="Search products..."
          />
          {/* SORT */}
          <SortSelect
            value={sort}
            onChange={(value) =>
              dispatch({ type: "SET_SORT", payload: value })
            }
          />
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div className="mt-4 border-t pt-4 border-[var(--divider)]">
        <CategoryFilter
          categories={categories}
          value={category}
          onChange={(value) =>
            dispatch({ type: "SET_CATEGORY", payload: value })
          }
        />
      </div>
    </div>
  );
}