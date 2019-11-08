import { AppAction, ActionTypes } from './actions';

export interface UserInfo {
  username: string;
}

export interface AppState {
  mobileSideOpen: boolean;
  user?: UserInfo;
}

// combine child reducers
export function mainReducer(appState: AppState, action: AppAction): AppState {
  return {
    mobileSideOpen: mobileSideOpenReducer(appState.mobileSideOpen, action),
    user: userReducer(appState.user, action),
  }
}

// mobileSideOpen reducer
function mobileSideOpenReducer(mobileSideOpenState: boolean, action: AppAction): boolean {
  if (action.type === ActionTypes.OPEN_SIDE_NAV) {
    return true;
  }

  if (action.type === ActionTypes.CLOSE_SIDE_NAV) {
    return false;
  }

  return mobileSideOpenState;
}

// user reducer
function userReducer(userState: UserInfo | undefined, action: AppAction): UserInfo | undefined {
  if (action.type === ActionTypes.LOGOUT) {
    return undefined;
  }

  if (action.type === ActionTypes.LOGIN) {
    return { username: action.payload };
  }

  return userState;
}
