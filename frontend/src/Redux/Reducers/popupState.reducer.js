import {
  UPDATE_CUSTOMER_POPUP_STATE,
  UPDATE_ADD_CUSTOMER_POPUP_STATE,
  UPDATE_ADD_FIELD_POPUP_STATE,
} from "../ActionTypes";

export const popupState = (
  state = {
    customer: false,
    addCustomer: false,
    addField: false,
  },
  action
) => {
  switch (action.type) {
    case UPDATE_CUSTOMER_POPUP_STATE:
      return {
        ...state,
        customer: action.payload,
      };
    case UPDATE_ADD_CUSTOMER_POPUP_STATE:
      return {
        ...state,
        addCustomer: action.payload,
      };
    case UPDATE_ADD_FIELD_POPUP_STATE:
      return {
        ...state,
        addField: action.payload,
      };

    default:
      return state;
  }
};
