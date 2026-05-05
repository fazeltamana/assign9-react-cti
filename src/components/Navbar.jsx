import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useSettings } from "../context/SettingsContext";
import { Sun, Moon } from "lucide-react";
import Container from "./Container";
import Logo from "./Logo";
import { selectCartCount } from "../features/cart/cartSlice";

export default function Navbar({ onOpenCart }) {
  const count = useSelector(selectCartCount);
  const badge = useMemo(() => (count > 99 ? "99+" : count), [count]);
  const { state, dispatch } = useSettings();
  const location = useLocation();
  const linkClass = (path) =>
  `relative text-sm font-semibold no-underline transition px-3 py-2 rounded-lg ${
    location.pathname === path
      ? "text-[var(--primary)] bg-[var(--primary)]/10 no-underline"
      : "text-[var(--textSecondary)] hover:text-[var(--textPrimary)] hover:bg-[var(--divider)]/40 no-underline"
  }`;

  return (
    <header className="sticky top-0 z-40 border-b bg-[var(--paper)]/80 backdrop-blur-md border-[var(--divider)]">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* LEFT */}
          <div className="flex items-center gap-6">
            <Logo />
            <nav className="hidden md:flex items-center gap-1">
              <Link to="/" className={linkClass("/")}>
                Home
              </Link>
              <Link to="/settings" className={linkClass("/settings")}>
                Settings
              </Link>
            </nav>
          </div>
          {/* RIGHT */}
          <div className="flex items-center gap-2">
            {/* THEME TOGGLE */}
            <button
              onClick={() => dispatch({ type: "TOGGLE_THEME" })}
              className="btn btn-ghost h-10 w-10 grid place-items-center rounded-xl hover:bg-[var(--divider)]/40 transition"
              aria-label="Toggle theme"
            >
              {state.theme === "light" ? (
                <Moon size={18} />
              ) : (
                <Sun size={18} />
              )}
            </button>
            {/* CART */}
            <button
              onClick={onOpenCart}
              className="btn btn-primary h-10 px-4 gap-2 rounded-xl relative"
            >
              <span className="font-semibold">Cart</span>
              <span className="flex items-center justify-center min-w-6 h-6 px-2 text-xs font-black rounded-full bg-white/20">
                {badge}
              </span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}