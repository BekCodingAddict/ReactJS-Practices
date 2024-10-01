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
    case "accaunt/requireLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload,
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
