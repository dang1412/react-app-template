import React, { useContext } from 'react';

import { AppContext, ActionTypes } from '../../states';
import LoginMenu from './LoginMenu';
import UserMenu from './UserMenu';

const AuthenMenu: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const userInfo = state.user;

  const onLogin = (provider: string) => {
    console.log('Login', provider);
    dispatch({type: ActionTypes.LOGIN, payload: 'Dang'});
  }

  const onLogout = () => {
    console.log('Logout');
    dispatch({type: ActionTypes.LOGOUT});
  }

  return userInfo
    ? <UserMenu user={userInfo} onLogout={onLogout} />
    : <LoginMenu onLogin={onLogin} />
}

export default AuthenMenu;
