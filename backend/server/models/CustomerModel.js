import mongoose from "mongoose";
import { validateEmail, validatePhone } from "./helpers/validators.js";

const Customer = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, "Please fill a valid email address"],
    },
    acType: {
      type: String,
      enum: ["electronics", "toys"],
      required: [true, "Account type missing!"],
    },
    name: {
      type: String,
      required: [true, "Name missing!"],
    },
    address: {
      type: String,
      required: [true, "Address missing!"],
    },
    phone: {
      type: Number,
      required: [true, "Phone number missing!"],
      validate: [validatePhone, "Please fill a valid phone number"],
    },
    dob: {
      type: Date,
      required: [true, "Date of birth missing!"],
    },
  },
  {
    strict: false,
  }
);

export default mongoose.model("Customer", Customer);
