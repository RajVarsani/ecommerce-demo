import {
  UPDATE_CUSTOMER_LIST,
  UPDATE_CUSTOMER_LIST_TYPE,
} from "../ActionTypes";

export const customersState = (
  state = {
    list: null,
    listTypeIndex: 0,
  },
  action
) => {
  switch (action.type) {
    case UPDATE_CUSTOMER_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case UPDATE_CUSTOMER_LIST_TYPE:
      return {
        ...state,
        listTypeIndex: action.payload,
      };

    default:
      return state;
  }
};
