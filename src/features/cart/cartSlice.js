import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
};
const saveToLocalStorage = (items) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: {
      reducer(state, action) {
        const p = action.payload;
        const existing = state.items.find(
          (x) => x.productId === p.productId
        );
        if (existing) {
          existing.qty += 1;
        } else {
          state.items.push(p);
        }
        saveToLocalStorage(state.items);
      },
      prepare(product) {
        return {
          payload: {
            id: nanoid(),
            productId: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            qty: 1,
          },
        };
      },
    },

    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((x) => x.id !== id);
      saveToLocalStorage(state.items);
    },

    incQty(state, action) {
      const id = action.payload;
      const item = state.items.find((x) => x.id === id);
      if (item) item.qty += 1;
      saveToLocalStorage(state.items);
    },

    decQty(state, action) {
      const id = action.payload;
      const item = state.items.find((x) => x.id === id);
      if (!item) return;
      item.qty -= 1;
      if (item.qty <= 0) {
        state.items = state.items.filter((x) => x.id !== id);
      }
      saveToLocalStorage(state.items);
    },
    clearCart(state) {
      state.items = [];
      saveToLocalStorage(state.items);
    },
  },
});
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, x) => sum + x.qty, 0);
export const selectCartTotal = (state) =>
  Number(
    state.cart.items
      .reduce((sum, x) => sum + x.price * x.qty, 0)
      .toFixed(2)
  );
export const {
  addToCart,
  removeFromCart,
  incQty,
  decQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;