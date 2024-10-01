import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accauntSlice = createSlice({
  name: "accaunt",
  initialState: initialState,
  reducers: {
    deposit(state, action) {
      state.balance = state.balance + action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state, action) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

console.log(accauntSlice);

export const { withdraw, deposit, payLoan, requestLoan, convertingCurrency } =
  accauntSlice.actions;
export default accauntSlice.reducer;
/*
export default function accauntReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "accaunt/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
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
    case "accaunt/converting":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "accaunt/deposit", payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: "accaunt/converting" });
    //API call

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    //return action
    dispatch({ type: "accaunt/deposit", payload: converted });
  };
}

export function withdraw(amount) {
  return { type: "accaunt/withdraw", payload: amount };
}
export function requestLoan(amount, purpose) {
  return {
    type: "accaunt/requestLoan",
    payload: { amount: amount, purpose: purpose },
  };
}
export function payLoan() {
  return { type: "accaunt/payLoan" };
}
*/
