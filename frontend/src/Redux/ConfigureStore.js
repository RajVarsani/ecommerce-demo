import { createStore, combineReducers } from "redux";

import { popupState } from "./Reducers/popupState.reducer";

export const ConfigureStore = () => {
  const store = createStore(combineReducers({ popupState }));

  return store;
};
