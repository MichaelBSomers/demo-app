import React, {createContext, useReducer} from 'react';

const initialState = [
  {
    name: 'Michael',
    email: 'Michael@gmail.com',
    password: '123'
  }
];
const usersContext = createContext(initialState);
const { Provider } = usersContext;

export const usersContextActions = {
    SIGN_UP: 'SIGN UP'
}

const UsersContextStateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case usersContextActions.SIGN_UP:
        const findDuplicate = state.find((item) => {
          if(item.email === action.value.email){
            return true
          }
          return false
        })
        if(findDuplicate) {
          return state
        }
        const newState = state
        newState.push(action.value)
        console.log('newState', newState)
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { usersContext, UsersContextStateProvider }