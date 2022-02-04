import { createStore, combineReducers } from "redux";

import { customersState } from "./Reducers/customers.reducer";

export const ConfigureStore = () => {
  const store = createStore(combineReducers({ customersState }));

  return store;
};
