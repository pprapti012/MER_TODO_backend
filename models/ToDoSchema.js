import { Schema, model} from "mongoose";

const todoschema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    colorcode: {
      type: String,
      // choose krna hoga tab enum use krenge
      enum: ["#fdf2b3", "#d1eaed", "#ffdada"],
      default: "#ffdada",
    },
  },
  {
    timestamps: true,
  }
);


export const todomodel = new model ("todo",todoschema)