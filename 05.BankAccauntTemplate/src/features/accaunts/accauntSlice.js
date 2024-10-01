const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accauntReducer(state = initialStateAccount, action) {
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
}

export function deposit(amount) {
  return { type: "accaunt/deposit", payload: amount };
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
