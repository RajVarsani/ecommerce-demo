import axios from "axios";
import { GET_CUSTOMERS_DATA_URL } from "../Utils/Constants/ApiConstants";
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
