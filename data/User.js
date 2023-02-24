import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  password: {
    type: String,
    minlength: 3,
    required: [true, "Please provide password"],
    select: false,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
    },
    unique: true,
  },
  name: {
    type: String
  },
  address: {
    type: String,
    minlength: 0,
    maxlength: 20,
    default: "",
  },
  profilePicture: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

export {User};