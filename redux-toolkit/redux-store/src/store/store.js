import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsSlice from "./productsSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productsSlice,
  },
});

export default store;
