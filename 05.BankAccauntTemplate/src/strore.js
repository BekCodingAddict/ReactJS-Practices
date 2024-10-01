import { combineReducers, createStore } from "redux";
import accauntReducer from "./features/accaunts/accauntSlice";
import customerReducer from "./features/customers/customerSlices";

const rootReducer = combineReducers({
  accaunt: accauntReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
