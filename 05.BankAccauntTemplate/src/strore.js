import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const accauntReducer = (state = initialStateAccount, action) => {
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

function customerReducer(state = customerReducer, action) {
  switch (action.type) {
    case "customer/createCurtomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  accaunt: accauntReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);
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

function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCurtomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}

store.dispatch(createCustomer("John Doe", "121212"));

store.dispatch(deposit(200));
console.log(store.getState());
