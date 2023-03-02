import mongoose from "mongoose";
import _ from "lodash";
import { defaultBanner } from "./defaults.js";

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/partyai", {
  useNewUrlParser: true,
});

const partySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  startTime: {
    type: Number,
  },
  endTime: {
    type: Number,
  },
  address: {
    type: String,
  },
  type: {
    type: String,
  },
  isPublic: {
    type: Boolean,
    default: true,
  },
  bannerUrl: {
    type: String,
    default: defaultBanner,
  },
  attending: {
    type: Array,
    default: [],
  },
});

const Party = mongoose.model("parties", partySchema);

export { Party };
