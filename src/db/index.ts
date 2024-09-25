import { connect } from "mongoose";
import { MONGO_URI } from "src/utils/variables";

const uri = MONGO_URI;
// const uri = 'mongodb://127.0.0.1:27017/smart-cycle-market'

connect(uri)
  .then(() => {
    console.log("db connected successfully.");
  })
  .catch((err) => {
    console.log("db connection error: ", err.message);
  });
