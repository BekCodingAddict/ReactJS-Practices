import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "accaunt/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "accaunt/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "accaunt/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "accaunt/payLoan":
      return {
        ...state,
        loanPurpose: "",
        balance: state.balance - state.loan,
        loan: 0,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

// store.dispatch({ type: "accaunt/deposit", payload: 500 });
// store.dispatch({ type: "accaunt/withdraw", payload: 200 });
// console.log(store.getState());

// store.dispatch({
//   type: "accaunt/requestLoan",
//   payload: { amount: 1000, purpose: "buy a car!" },
// });

// console.log(store.getState());
// store.dispatch({ type: "accaunt/payLoan" });
// console.log(store.getState());

function deposit(amount) {
  return { type: "accaunt/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "accaunt/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
  return {
    type: "accaunt/requestLoan",
    payload: { amount: amount, purpose: purpose },
  };
}
function payLoan() {
  return { type: "accaunt/payLoan" };
}

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
store.dispatch(requestLoan(200, "Buy a car!@"));
store.dispatch(payLoan());
console.log(store.getState());
