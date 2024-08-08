import {
  ACTIVE_PAGE,
  AuthActionTypes,
  SET_NETWORK,
  SET_WALLET_ADDRESS,
} from "./types";

export const setActivePage = (page: string): AuthActionTypes => ({
  type: ACTIVE_PAGE,
  payload: page,
});

export const setNetwork = (network: string) => ({
  type: SET_NETWORK,
  payload: network,
});

export const setWalletAddress = (address: string) => ({
  type: SET_WALLET_ADDRESS,
  payload: address,
});
