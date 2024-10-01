import { applyMiddleware, combineReducers, createStore } from "redux";
import accauntReducer from "./features/accaunts/accauntSlice";
import customerReducer from "./features/customers/customerSlices";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  accaunt: accauntReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
