import { useSettings } from "../context/SettingsContext";

export default function Settings() {
  const { state, dispatch } = useSettings();

  return (
    <div className="card p-6 space-y-6">
      <h2 className="text-lg font-black">Settings</h2>
      {/* Sort Section */}
      <div className="space-y-2">
        <label className="block text-sm font-bold">Sort products</label>
        <select
          value={state.sort}
          onChange={(e) =>
            dispatch({ type: "SET_SORT", payload: e.target.value })
          }
          className="input w-full"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
        </select>
      </div>
      {/* Search Section */}
      <div className="space-y-2">
        <label className="block text-sm font-bold">Search</label>
        <input
          value={state.query}
          onChange={(e) =>
            dispatch({ type: "SET_QUERY", payload: e.target.value })
          }
          placeholder="Search products..."
          className="input w-full"
        />
      </div>
      {/* Theme Toggle */}
      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        className="btn btn-primary w-full"
      >
        Toggle Theme
      </button>
    </div>
  );
}