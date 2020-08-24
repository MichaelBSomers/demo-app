import React, {createContext, useReducer} from 'react';

const initialState = {
    iphone: "2020/02/21",
    mackbook: "2020/08/04",
    watch : "2020/11/16"
};
const newItemsContext = createContext(initialState);
const { Provider } = newItemsContext;

export const newItemsContextActions = {
    UPDATE_ITEM_DATES: 'signIn'
}

const NewItemsContextContextStateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case newItemsContextActions.UPDATE_ITEM_DATES:
        const newState = action.value
        return newState;
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { newItemsContext, NewItemsContextContextStateProvider }