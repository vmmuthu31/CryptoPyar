import { AuthState, AuthActionTypes, ACTIVE_PAGE, SET_NETWORK } from "./types";

const initialState: AuthState = {
  activepage: "Home",
  network: "Nillion/Polygon",
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case ACTIVE_PAGE:
      return { ...state, activepage: action.payload };
    case SET_NETWORK:
      return { ...state, network: action.payload };

    default:
      return state;
  }
}
