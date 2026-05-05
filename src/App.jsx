import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSettings } from "./context/SettingsContext";
import { applyTheme } from "./theme/applyTheme";
//components
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
// pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Setting from "./pages/Settings";

export default function App() {
  const { state } = useSettings();
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    applyTheme(state.theme);
  }, [state.theme]); 

  return (
    <div className="min-h-screen transition-colors duration-300 bg-[var(--bg)] text-[var(--textPrimary)]">
      <Navbar onOpenCart={() => setCartOpen(true)} />
      {/* MAIN */}
      <main className="py-8">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/settings" element={<Setting />} />
          </Routes>
        </Container>
      </main>
      {/* FOOTER */}
      <footer className="border-t border-[var(--divider)] py-8 text-[var(--textSecondary)]">
        <Container>
          <div className="text-xs font-semibold">
            Denis Store • React + Final Project
            <div>© {new Date().getFullYear()} Built by: Tamana Fazel</div>
          </div>
        </Container>
      </footer>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}