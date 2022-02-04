import axios from "axios";
import {
  GET_CUSTOMERS_DATA_URL,
  GET_CUSTOMER_DATA_BY_ID_URL,
  ADD_CUSTOMER_URL,
} from "../Utils/Constants/ApiConstants";
import { rightSecData } from "../Utils/Constants/StaticData";

export const getCustmersData = async (type) => {
  if (!type) {
    throw new Error("type is required");
  }
  if (!rightSecData.tabs.includes(type)) {
    throw new Error("type is not valid");
  }
  try {
    const { data } = await axios.get(`${GET_CUSTOMERS_DATA_URL}?type=${type}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const getCustomerDataById = async (id) => {
  if (!id) {
    throw new Error("id is required");
  }
  try {
    const { data } = await axios.get(`${GET_CUSTOMER_DATA_BY_ID_URL}${id}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const addCustomer = async (bodyData) => {
  if (!bodyData) {
    throw new Error("data is required");
  }
  try {
    const { data } = await axios.post(`${ADD_CUSTOMER_URL}`, bodyData);
    return data;
  } catch (err) {
    throw err;
  }
};
