import axios from "axios";
import {
  GET_ALL_FIELDS_URL,
  ADD_FIELD_URL,
} from "../Utils/Constants/ApiConstants";
import { rightSecData } from "../Utils/Constants/StaticData";

export const getAllFields = async () => {
  try {
    const { data } = await axios.get(`${GET_ALL_FIELDS_URL}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const addField = async (bodyData) => {
  if (!bodyData) {
    throw new Error("data is required");
  }
  try {
    const { data } = await axios.post(`${ADD_FIELD_URL}`, bodyData);
    return data;
  } catch (err) {
    throw err;
  }
};
