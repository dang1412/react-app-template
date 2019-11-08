export enum ActionTypes {
  OPEN_SIDE_NAV,
  CLOSE_SIDE_NAV,
  LOGIN,
  LOGOUT
}

export interface AppAction {
  type: ActionTypes;
  payload?: any;
}
