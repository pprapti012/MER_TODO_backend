// Database connection
import mongo from "mongoose";

const connectToDb = () => {
  mongo
    .connect(process.env.MONGODB_URL, { dbName: "TODO_APP" })
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectToDb;