import mongoose from "mongoose";
import validator from "validator";
import { IUser } from "../types/types.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter Name"],
    },
    email: {
      type: String,
      unique: [true, "Email already exist"],
      required: [true, "Please enter Email"],
      validator: [validator.default.isEmail, "Please enter valid Email"],
    },
    password: {
      type: String,
      required: [true, "Please enter Password"],
      minLength: [8, "Password must be at least 8 characters"],
    },
    photo: {
      type: String,
      required: [true, "Please add Photo"],
    },
    role: {
      type: String,
      enumm: ["user", "admin"],
      default: "user",
    },
    gender: {
      type: String,
      enumm: ["male", "female"],
      required: [true, "Please enter Gender"],
    },
    dob: {
      type: Date,
      required: [true, "Please enter Date of Birth"],
    },
  },
  { timestamps: true },
);

userSchema.virtual("age").get(function () {
  const today = new Date();
  const birthDate = this.dob;

  let age = today.getFullYear() - birthDate.getFullYear();
  // const month = today.getMonth() - birthDate.getMonth();

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  )
    age--;

  return age;
});

export const User = mongoose.model<IUser>("User", userSchema);
