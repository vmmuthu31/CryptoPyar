export const ACTIVE_PAGE = "ACTIVE_PAGE";
export const SET_NETWORK = "SET_NETWORK";
export const SET_WALLET_ADDRESS = "SET_WALLET_ADDRESS";

export interface AuthState {
  activepage: string;
  network: string;
  address: string;
}

interface SetActivePageAction {
  type: typeof ACTIVE_PAGE;
  payload: string;
}

interface SetNetworkAction {
  type: typeof SET_NETWORK;
  payload: string;
}
interface SetAddressAction {
  type: typeof SET_WALLET_ADDRESS;
  payload: string;
}

export type AuthActionTypes =
  | SetActivePageAction
  | SetNetworkAction
  | SetAddressAction;
