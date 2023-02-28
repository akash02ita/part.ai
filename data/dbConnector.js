import mongoose from "mongoose";
import _ from "lodash";

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
});

const Party = mongoose.model("parties", partySchema);

export { Party };
