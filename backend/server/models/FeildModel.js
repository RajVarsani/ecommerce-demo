import mongoose from "mongoose";

const Feild = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Input field name missing!"],
      unique: true,
    },
    type: {
      type: String,
      required: [true, "Input field type missing!"],
    },
  },
  {
    strict: false,
  }
);

export default mongoose.model("Feild", Feild);
