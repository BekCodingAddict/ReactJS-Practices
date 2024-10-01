import { configureStore } from "@reduxjs/toolkit";
import accauntReducer from "./features/accaunts/accauntSlice";
import customerReducer from "./features/customers/customerSlices";

const store = configureStore({
  reducer: {
    accaunt: accauntReducer,
    customer: customerReducer,
  },
});

export default store;
