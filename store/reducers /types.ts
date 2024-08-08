export const ACTIVE_PAGE = "ACTIVE_PAGE";
export const SET_NETWORK = "SET_NETWORK";

export interface AuthState {
  activepage: string;
  network: string;
}

interface SetActivePageAction {
  type: typeof ACTIVE_PAGE;
  payload: string;
}

interface SetNetworkAction {
  type: typeof SET_NETWORK;
  payload: string;
}

export type AuthActionTypes = SetActivePageAction | SetNetworkAction;
