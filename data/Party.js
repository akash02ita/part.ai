import mongoose from "mongoose";
import {ObjectId} from "mongoose"


const partySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a Name"],
  },
  description: {
    type: String,
  },
  address: {
    type: String,
    required: [true, "Please provide an Address"],
  },
  bannerUrl: {
    type: String,
    default: "",
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
  startTime: {
    type: Number
  },
  endTime: {
    type: Number
  },
  attending: [{type: ObjectId, ref: "User"}]
});

const Party = mongoose.model("Party", partySchema);

export { Party };
