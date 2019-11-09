import React from 'react';

import { AppState, mainReducer } from './reducer';
import { AppAction } from './actions';

// app context interface
interface AppContextI {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

// initial app state
const appState: AppState = {
  mobileSideOpen: false,
}

// initial app context
const initialContext: AppContextI = {
  state: appState,
  dispatch: () => {},
}

export const AppContext = React.createContext<AppContextI>(initialContext);

export const AppStateProvider: React.FC = (props) => {
  const [state, dispatch] = React.useReducer(mainReducer, appState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {props.children}
    </AppContext.Provider>
  )
}
