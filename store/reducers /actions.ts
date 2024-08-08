import { ACTIVE_PAGE, AuthActionTypes, SET_NETWORK } from "./types";

export const setActivePage = (page: string): AuthActionTypes => ({
  type: ACTIVE_PAGE,
  payload: page,
});

export const setNetwork = (network: string) => ({
  type: SET_NETWORK,
  payload: network,
});
