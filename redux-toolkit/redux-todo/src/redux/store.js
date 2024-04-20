import { configureStore } from "@reduxjs/toolkit";
import Todoslice from "./todoSlice";
const store = configureStore({
  reducer: {
    todo: Todoslice,
  },
});
export default store;
