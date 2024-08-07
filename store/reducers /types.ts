export const ACTIVE_PAGE = "ACTIVE_PAGE";

export interface AuthState {
  activepage: string;
}

interface SetActivePageAction {
  type: typeof ACTIVE_PAGE;
  payload: string;
}

export type AuthActionTypes = SetActivePageAction;
