const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export default function customerReducer(state = customerReducer, action) {
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

export function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCurtomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}
