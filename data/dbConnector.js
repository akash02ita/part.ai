import mongoose from "mongoose";

const dbConnector = () => {
  //mongoose connection
  mongoose.Promise = global.Promise;
  return mongoose.connect("mongodb://localhost/partai", {
    useNewUrlParser: true,
  });
}


export default dbConnector;