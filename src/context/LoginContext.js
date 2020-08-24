import React, {createContext, useReducer} from 'react';

const initialState = {
    loggedIn: false,
    userName: '',
    userEmail: ''
};
const loginContext = createContext(initialState);
const { Provider } = loginContext;

export const loginContextActions = {
    SIGN_IN: 'signIn'
}

const LoginContextStateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case loginContextActions.SIGN_IN:
        const newState = action.value
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { loginContext, LoginContextStateProvider }