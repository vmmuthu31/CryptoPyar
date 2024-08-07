import { ACTIVE_PAGE, AuthActionTypes } from "./types";

export const setActivePage = (page: string): AuthActionTypes => ({
  type: ACTIVE_PAGE,
  payload: page,
});
