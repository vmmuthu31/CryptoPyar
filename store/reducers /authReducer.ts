import { AuthState, AuthActionTypes, ACTIVE_PAGE } from "./types";

const initialState: AuthState = {
  activepage: "Home",
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case ACTIVE_PAGE:
      return { ...state, activepage: action.payload };
    default:
      return state;
  }
}
